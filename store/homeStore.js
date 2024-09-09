// store/index.js
export const state = () => ({
  count: 0,
});

export const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};

export const actions = {
  increment({ commit }) {
    commit("increment");
  },
  decrement({ commit }) {
    commit("decrement");
  },
};

export const getters = {
  count(state) {
    return state.count;
  },
};
