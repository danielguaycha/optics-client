import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: [],
  },
  mutations: {
    setAuth(state, user) {
      state.auth = user;
    },
    destroyAll(state) {
      state.auth = []
    }
  },
  getters: {
    auth: state => {
      return state.auth;
    },
    isAuth: state => {
      return (state.auth.id !== undefined);
    },
  },
  actions: {
    getUser: ({ commit }) => {
      return axios.get(`/get-user`) //return the promise
          .then((resp) => {
            commit('setAuth', resp.data.user);
            return resp.data.user; //return the profile after response complete
          })
          .catch(() => {
            commit('destroyAll');
          });
    },
  },
  modules: {
  }
})
