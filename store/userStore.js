import axios from "axios";
import { createAxios } from "~/middleware/tokenMiddleware";

export const state = () => ({
  user: null,
  otpCode: null,
  loading: false,
  error: null,
});

export const mutations = {
  SET_USER(state, data) {
    state.user = data;
    localStorage.setItem("user", JSON.stringify(data));
  },
  CLEAR_USER(state) {
    state.user = null;
    localStorage.removeItem("user");
  },
  SET_OTP(state, data) {
    state.otpCode = data;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

export const actions = {
  async getUser({ commit }, newUser) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);

    try {
      const res = await axios.post(
        "http://localhost:8000/v1/bustickets/user/login-user",
        newUser
      );
      commit("SET_USER", res.data);
    } catch (error) {
      commit("SET_ERROR", error.message);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  async getOtp({ commit }, email) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);

    try {
      const res = await axios.post(
        "http://localhost:8000/v1/bustickets/otp/send-otp",
        { email: email }
      );
      commit("SET_OTP", res.data);
    } catch (error) {
      commit("SET_ERROR", error.message);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  async logout({ commit, state }) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);

    try {
      const axiosJWT = createAxios(state.user.data);

      const res = await axiosJWT.post(
        "http://localhost:8000/v1/bustickets/user/logout",
        { userId: state.user.data._id },
        {
          headers: {
            token: `Bearer ${state.user.data.accessToken}`,
          },
        }
      );

      if (res.data.status) {
        this.$router.push("/login");
        commit("CLEAR_USER");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      commit("SET_ERROR", error.message);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export const getters = {
  user: (state) => state.user,
  otpCode: (state) => state.otpCode,
  loading: (state) => state.loading,
  error: (state) => state.error,
};
