<template>
  <div class="user-container-user">
    <Loading v-if="loading" />
    <div class="User">
      <div class="content-tab">
        <div
          class="tab-item"
          :class="{ active: activeTab === 'info' }"
          @click="setActiveTab('info')"
        >
          <img src="/images/profile1.svg" alt="" />
          <span>Thông tin tài khoản</span>
        </div>

        <div
          class="tab-item"
          :class="{ active: activeTab === 'history' }"
          @click="setActiveTab('history')"
        >
          <img src="/images/history.svg" alt="" />
          <span>Lịch sử mua vé</span>
        </div>

        <div
          class="tab-item"
          :class="{ active: activeTab === 'reset' }"
          @click="setActiveTab('reset')"
        >
          <img src="/images/password1.svg" alt="" />
          <span>Đặt lại mật khẩu</span>
        </div>

        <div class="tab-item" @click="handleLogout()">
          <img src="/images/logout.svg" alt="" />
          <span>Đăng Xuất</span>
        </div>
      </div>
      <!-- Nội dung các Tab -->
      <div class="content-in4">
        <div v-if="activeTab === 'info'">
          <div
            class="in4-tk"
            style="color: red; font-size: 23px; text-align: center"
          >
            Thông tin tài khoản
          </div>
          <div class="edit-in4">
            <div class="user-container-img">
              <img
                class="user-container-avatar"
                :src="
                  newAvatarUrl
                    ? newAvatarUrl
                    : user?.data?.avatarUrl
                    ? user?.data?.avatarUrl
                    : '/images/avatar-default.jpg'
                "
                alt="Avatar"
              />
              <input
                type="file"
                ref="fileInput"
                @change="onFileSelected"
                style="display: none"
              />
              <button class="change-avatar-btn" @click="openFileDialog($event)">
                Chọn ảnh
              </button>
              <button
                v-if="newAvatarUrl"
                class="change-avatar-btn"
                @click="openFileDialog($event)"
              >
                Cập nhật
              </button>
            </div>

            <div class="user-container-information">
              <div class="user-container-info-item">
                <label for="name">Họ và tên:</label>
                <input
                  type="text"
                  id="name"
                  v-model="name"
                  :readonly="!isEditingName"
                />
                <button
                  @click="toggleEdit('name')"
                  :class="[
                    'user-container-edit-btn',
                    isEditingName ? 'user-container-editing' : '',
                  ]"
                >
                  <img src="/images/rename.svg" alt="Edit" />
                </button>
                <div v-if="nameError" class="error-message">
                  {{ nameError }}
                </div>
              </div>

              <div class="user-container-info-item">
                <label for="phone">Số điện thoại:</label>
                <input
                  type="phone"
                  id="phone"
                  v-model="phone"
                  :readonly="!isEditingPhone"
                />
                <button
                  @click="toggleEdit('phone')"
                  :class="[
                    'user-container-edit-btn',
                    isEditingPhone ? 'user-container-editing' : '',
                  ]"
                >
                  <img src="/images/rename.svg" alt="Edit" />
                </button>
                <div v-if="phoneError" class="error-message">
                  {{ phoneError }}
                </div>
              </div>

              <div class="user-container-info-item">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  :readonly="!isEditingEmail"
                />
                <button
                  @click="toggleEdit('email')"
                  :class="[
                    'user-container-edit-btn',
                    isEditingEmail ? 'user-container-editing' : '',
                  ]"
                >
                  <img src="/images/rename.svg" alt="Edit" />
                </button>
                <div v-if="emailError" class="error-message">
                  {{ emailError }}
                </div>
              </div>

              <div class="user-container-info-item">
                <label for="sex">Giới tính:</label>
                <select id="sex" v-model="sex">
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              <div class="user-container-info-item">
                <label for="dateOfBirth">Ngày sinh:</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  v-model="dateOfBirth"
                  :readonly="!isEditingDateOfBirth"
                />
                <button
                  @click="toggleEdit('dateOfBirth')"
                  :class="[
                    'user-container-edit-btn',
                    isEditingDateOfBirth ? 'user-container-editing' : '',
                  ]"
                >
                  <img src="/images/rename.svg" alt="Edit" />
                </button>
              </div>

              <div class="user-container-info-item">
                <label for="address">Địa chỉ:</label>
                <input
                  type="text"
                  id="address"
                  v-model="address"
                  :readonly="!isEditingAddress"
                />
                <button
                  @click="toggleEdit('address')"
                  :class="[
                    'user-container-edit-btn',
                    isEditingAddress ? 'user-container-editing' : '',
                  ]"
                >
                  <img src="/images/rename.svg" alt="Edit" />
                </button>
              </div>
              <div class="user-container-info-item">
                <label for="address">Số dư:</label>
                <span>{{
                  user?.data?.money.toLocaleString("vi-VN") + " VND"
                }}</span>
              </div>
              <button class="user-container-update" @click="updateInfo">
                Cập nhật
              </button>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'history'">
          <div
            class="history-tickets"
            style="color: red; font-size: 23px; text-align: center"
          >
            Lịch sử đặt vé
          </div>
          <hr class="lane" />
          <div class="select-tickets" style="display: flex; margin-top: 3%">
            <div class="ticket-field">
              <p>Mã vé</p>
              <input
                type="text"
                placeholder="Nhập mã vé"
                class="ticket-input"
              />
            </div>

            <div class="ticket-field">
              <p>Thời gian</p>
              <input type="date" class="ticket-input" />
            </div>

            <div class="ticket-field">
              <p>Tuyến đường</p>
              <input type="text" placeholder="" class="ticket-input" />
            </div>

            <div class="ticket-field">
              <p>Trạng thái</p>
              <select class="ticket-input">
                <option value="pending">Chờ thanh toán</option>
                <option value="cancelled">Thành công</option>
                <option value="approved">Hết hạn</option>
                <option value="pending">Hủy</option>
              </select>
            </div>
            <div class="ticket-field button-field">
              <button class="find-btn">Tìm</button>
            </div>
          </div>
          <div class="list-tickets">
            <table>
              <thead>
                <tr>
                  <th>Mã vé</th>
                  <th>Số vé</th>
                  <th>Tuyến đường</th>
                  <th>Ngày đi</th>
                  <th>Số tiền</th>
                  <th>Thanh toán</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12345</td>
                  <td>5</td>
                  <td>Hà Nội - Sài Gòn</td>
                  <td>12/09/2024</td>
                  <td>500.000đ</td>
                  <td>Đã thanh toán</td>
                  <td>Thành công</td>
                  <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                  </td>
                </tr>

                <tr>
                  <td>12345</td>
                  <td>5</td>
                  <td>Hà Nội - Sài Gòn</td>
                  <td>12/09/2024</td>
                  <td>500.000đ</td>
                  <td>Đã thanh toán</td>
                  <td>Thành công</td>
                  <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                  </td>
                </tr>

                <tr>
                  <td>12345</td>
                  <td>5</td>
                  <td>Hà Nội - Sài Gòn</td>
                  <td>12/09/2024</td>
                  <td>500.000đ</td>
                  <td>Đã thanh toán</td>
                  <td>Thành công</td>
                  <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-if="activeTab === 'reset'">
          <div
            class="change"
            style="
              color: red;
              font-size: 23px;
              text-align: center;
              margin-bottom: 2%;
            "
          >
            Đặt lại mật khẩu
          </div>
          <div class="reset-password">
            <h3>(+84) 0845445797</h3>
            <div class="password-change">
              <p>Mật khẩu cũ</p>
              <div class="password-field">
                <input
                  :type="showOldPassword ? 'text' : 'password'"
                  v-model="oldPassword"
                  placeholder="Nhập mật khẩu cũ"
                />
                <button class="toggle-password" @click="togglePassword('old')">
                  <img
                    :src="
                      showOldPassword
                        ? '/images/eye.svg'
                        : '/images/eye-slash.svg'
                    "
                    alt="Toggle Password"
                  />
                </button>
              </div>
            </div>

            <div class="password-change">
              <p>Mật khẩu mới</p>
              <div class="password-field">
                <input
                  :type="showNewPassword ? 'text' : 'password'"
                  v-model="newPassword"
                  placeholder="Nhập mật khẩu mới"
                />
                <button class="toggle-password" @click="togglePassword('new')">
                  <img
                    :src="
                      showNewPassword
                        ? '/images/eye.svg'
                        : '/images/eye-slash.svg'
                    "
                    alt="Toggle Password"
                  />
                </button>
              </div>
            </div>

            <div class="password-change">
              <p>Xác nhận mật khẩu mới</p>
              <div class="password-field">
                <input
                  :type="showConfirmPassword ? 'text' : 'password'"
                  v-model="confirmPassword"
                  placeholder="Xác nhận mật khẩu mới"
                />
                <button
                  class="toggle-password"
                  @click="togglePassword('confirm')"
                >
                  <img
                    :src="
                      showConfirmPassword
                        ? '/images/eye.svg'
                        : '/images/eye-slash.svg'
                    "
                    alt="Toggle Password"
                  />
                </button>
              </div>
            </div>
            <div class="reset-password-button-container">
              <button
                class="changes-success"
                style="margin-bottom: 3%"
                @click="changePassword"
              >
                Đổi mật khẩu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "info",
      avatarUrl: "", // Avatar mặc định
      newAvatarUrl: null, // avatarmới
      selectedFile: null, //data ảnh
      name: "",
      phone: "",
      email: "",
      sex: "",
      dateOfBirth: "",
      address: "",
      isEditingPhone: false,
      isEditingName: false,
      isEditingEmail: false,
      isEditingDateOfBirth: false,
      isEditingAddress: false,
      userId: null,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      showOldPassword: false,
      showNewPassword: false,
      showConfirmPassword: false,
      phoneError: "",
      emailError: "",
      nameError: "",
    };
  },
  created() {
    if (process.client) {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        this.userId = JSON.parse(localStorage.getItem("user"))?.data?._id;
        if (!this.userId) {
          this.$router.push("/login");
        } else {
          this.$store.commit("userStore/SET_USER", user);
          this.name = user?.data?.fullName;
          this.phone = user?.data?.phoneNumber;
          this.email = user?.data?.email;
          this.sex = user?.data?.sex;
          this.address = user?.data?.address;

          const date = new Date(user?.data?.dateOfBirth);
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
          const year = date.getFullYear();

          const formattedDate = `${year}-${month}-${day}`;
          this.dateOfBirth = formattedDate;
        }
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters["userStore/user"];
    },
    loading() {
      return this.$store.getters["userStore/loading"];
    },
  },
  methods: {
    async changePassword() {
      // Kiểm tra nếu các trường bị trống
      if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin mật khẩu.");
        return;
      }

      // Kiểm tra nếu mật khẩu mới và xác nhận không khớp
      if (this.newPassword !== this.confirmPassword) {
        alert("Mật khẩu mới và xác nhận mật khẩu không khớp.");
        return;
      }

      const updatUser = {
        id: this.userId,
        password: this.oldPassword,
        newPassword: this.newPassword,
        rePassword: this.confirmPassword,
      };
      // Gọi API để đổi mật khẩu
      const res = await this.$store.dispatch("userStore/updateUser", updatUser);
      if (res) {
        this.oldPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";
      }
    },
    togglePassword(type) {
      if (type === "old") {
        this.showOldPassword = !this.showOldPassword;
      } else if (type === "new") {
        this.showNewPassword = !this.showNewPassword;
      } else if (type === "confirm") {
        this.showConfirmPassword = !this.showConfirmPassword;
      }
    },
    setActiveTab(tab) {
      this.activeTab = tab; // Cập nhật tab hiện tại
    },
    async openFileDialog(event) {
      // Kích hoạt hộp thoại chọn tệp
      if (event.target.innerText === "Chọn ảnh") {
        this.$refs.fileInput.click();
      } else if (event.target.innerText === "Cập nhật") {
        if (this.selectedFile) {
          const formData = new FormData();
          formData.append("file", this.selectedFile);
          formData.append("userId", this.userId);

          await this.$store.dispatch("userStore/updateAvatar", formData);
          this.newAvatarUrl = null;
        } else {
          console.log("file trống: ", this.selectedFile);
        }
      }
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        // Tạo URL cho hình ảnh vừa chọn và hiển thị lên
        this.newAvatarUrl = URL.createObjectURL(this.selectedFile);
      }
    },
    toggleEdit(field) {
      if (field === "name") {
        this.isEditingName = !this.isEditingName;
      } else if (field === "email") {
        this.isEditingEmail = !this.isEditingEmail;
      } else if (field === "dateOfBirth") {
        this.isEditingDateOfBirth = !this.isEditingDateOfBirth;
      } else if (field === "address") {
        this.isEditingAddress = !this.isEditingAddress;
      } else if (field === "phone") {
        this.isEditingPhone = !this.isEditingPhone;
      }
    },
    async updateInfo() {
      // Xóa các lỗi cũ
      this.nameError = "";
      this.phoneError = "";
      this.emailError = "";
      // Kiểm tra định dạng số họ tên
      // const namePattern = /^[A-Za-z\s]+$/;
      this.name = this.name.trim().replaceAll(/\s+/g, " ");
      // Kiểm tra định dạng số điện thoại
      const phonePattern = /^[0-9]{10,11}$/;
      // Kiểm tra định dạng email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (this.name.length < 5 || this.name.length > 30) {
        alert(" 'Họ và tên' không hợp lệ");
      } else if (this.address.length < 5 || this.address.length > 30) {
        alert(" 'Địa chỉ' không hợp lệ");
      } else if (!phonePattern.test(this.phone)) {
        alert("Số điện thoại không hợp lệ");
      } else if (!emailPattern.test(this.email)) {
        alert("Email không hợp lệ");
      } else {
        const updatUser = {
          id: this.userId,
          fullName: this.name,
          phoneNumber: this.phone,
          email: this.email,
          sex: this.sex,
          dateOfBirth: this.dateOfBirth,
          address: this.address,
        };
        await this.$store.dispatch("userStore/updateUser", updatUser);

        this.isEditingName = false;
        this.isEditingPhone = false;
        this.isEditingEmail = false;
        this.isEditingDateOfBirth = false;
        this.isEditingAddress = false;
      }
    },
    async handleLogout() {
      await this.$store.dispatch("userStore/logout");
    },
  },
};
</script>

<style>
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
.changes-success {
  border: none;
  background-color: #f86666;
  color: white;
  text-align: center;
  width: 30%;
  border-radius: 20px;
  height: 40px;
}
.password-field {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.password-field input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.toggle-password {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 10px;
}
.toggle-password img {
  width: 20px;
  height: 20px;
}
.password-change {
  margin-top: 2%;
  text-align: left;
  margin-bottom: 15px;
  margin-left: 5%;
}
.password-change p {
  margin: 0;
  font-weight: bold;
  color: #175b00;
}
.reset-password {
  border: 1px solid #f8d2c6;
  border-radius: 10px;
  width: 60%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
}
.list-tickets thead {
  background-color: #f2f2f2;
}
.list-tickets tbody tr:nth-child(even) {
  background-color: #efefef;
}
.list-tickets button {
  border-radius: 15px;
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.list-tickets button:hover {
  background-color: #0056b3;
}
.list-tickets th,
.list-tickets td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: left;
  white-space: nowrap;
}
.list-tickets table {
  width: 100%;
  border-collapse: collapse;
  min-width: 1000px;
}
.list-tickets {
  max-height: 300px;
  width: 100%;
  overflow-x: auto;
}
.list-tickets {
  margin-top: 2%;
}
.find-btn {
  padding: 6px 16px;
  background-color: #f2754e;
  border: none;
  width: 100px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  margin-left: 20%;
}
.find-btn:hover {
  background-color: #f86666;
}
.button-field {
  display: flex;
  align-items: center; /* Căn giữa theo chiều dọc */
  width: 20%;
}
.ticket-field {
  width: 20%;
}
.ticket-input {
  font-size: 13px;
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.user-container-update {
  border: none;
  color: white;
  background-color: #f2754e;
  border-radius: 20px;
  width: 20%;
  height: 40px;
  margin-bottom: 2%;
  margin-left: 40%;
}
.user-container-info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
}
.user-container-info-item label {
  color: #008e15;
  text-align: right;
}
.user-container-info-item input,
.user-container-info-item select {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}
.user-container-edit-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2%;
}
.user-container-edit-btn.user-container-editing {
  background-color: #f86666;
  color: #fff;
  border-radius: 5px;
}
.user-container-edit-btn img {
  width: 20px;
  height: 20px;
}
.user-container-information {
  width: 65%;
  margin-top: 2%;
}
.user-container-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 35%;
  margin-top: 2%;
}
.user-container-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin-bottom: 15px;
}

.change-avatar-btn {
  margin-bottom: 10px;
  width: 100px;
  height: 44px;
  text-align: center;
  border: none;
  background-color: #fca37a;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.change-avatar-btn:hover {
  background-color: #0056b3;
}
.edit-in4 {
  border: 1px solid rgb(212, 212, 212);
  margin-top: 2%;
  border-radius: 15px;
  display: flex;
}
.content-tab {
  width: 30%;
  border-radius: 15px;
  padding: 10px;
  height: 100%;
  border: 1px solid rgb(255, 164, 164);
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
}

.tab-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  height: 30%;
  transition: background-color 0.3s;
}
.tab-item img {
  margin-right: 15px;
  margin-left: 15px;
}

.tab-item span {
  font-size: 16px;
  font-weight: bold;
}

.tab-item:hover {
  background-color: #fff7f5;
}

.tab-item.active {
  background-color: #fff7f5;
  font-weight: bold;
}

.content-in4 {
  border: 1px solid rgb(255, 164, 164);
  box-shadow: 0 4px 8px rgba(249, 77, 10, 0.4);
  width: 70%;
  border-radius: 15px;
  padding: 20px;
  font-size: 16px;
}

.User {
  padding: 10px;
  margin: 10px auto;
  border-radius: 10px;
  width: 1150px;
  margin-top: 30px;
  display: flex;
  gap: 25px;
  background-color: white;
  margin-bottom: 3%;
}
</style>
