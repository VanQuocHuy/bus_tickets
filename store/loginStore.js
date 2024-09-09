import axios from "axios";

export const state = () => ({
  user: null,
  loading: false,
  error: null,
});

export const mutations = {
  SET_USER(state, data) {
    state.user = data;
    localStorage.setItem("user", JSON.stringify(data));
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
};

export const getters = {
  user: (state) => state.user,
  loading: (state) => state.loading,
  error: (state) => state.error,
};
