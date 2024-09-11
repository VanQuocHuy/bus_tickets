// axiosInstance.js
import axios from "axios";
const { jwtDecode } = require("jwt-decode");

// Hàm để làm mới token
const refreshToken = async (id) => {
  try {
    const res = await axios.post(
      "https://babefood.io.vn/v1/bustickets/token/refresh-token",
      {
        id: id,
      }
    );

    return res?.data.data;
  } catch (error) {
    console.log("Lỗi refresh token: " + error);
    return null;
  }
};

// Hàm để tạo instance của axios với interceptor
export const createAxios = (user) => {
  const instance = axios.create();

  instance.interceptors.request.use(
    async (config) => {
      const decodedToken = jwtDecode(user?.accessToken); // Giải mã token
      const currentTime = Math.floor(Date.now() / 1000); // Lấy thời gian hiện tại (tính bằng giây)

      if (decodedToken.exp < currentTime) {
        // Token hết hạn, gọi API làm mới token
        const data = await refreshToken(user._id);

        if (data) {
          const updatedUser = {
            status: true,
            code: 200,
            message: "Thành công",
            data: {
              ...user,
              accessToken: data.accessToken, // Cập nhật token mới
            },
          };

          config.headers["token"] = `Bearer ${data.accessToken}`; // Thay thế token trong headers, check lại xem cần không
          // Gọi phương thức updateUserToken trong store để update dữ liệu updatedUser mới,
          //nếu không mỗi lần call là nó lại lấy token mới gây giảm hiệu suất
        }
      } else {
        config.headers["token"] = `Bearer ${user.accessToken}`; // Dùng token hiện tại, check lại xem cần không
      }

      return config;
    },
    (error) => {
      return Promise.reject(error); // Trả về lỗi
    }
  );

  return instance;
};
