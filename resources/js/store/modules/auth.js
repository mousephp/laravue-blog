import AuthService from "../../services/AuthService";

const currentUser = AuthService.getLocalUser();

const namespaced = true;

const state = {
  user: currentUser,
  token: window.localStorage.getItem("token"),
  loading: false,
  error: null
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
    window.localStorage.setItem("user", JSON.stringify(user));
  },
  CLEAR_USER() {
    window.localStorage.clear();
    location.reload();
  },
  SET_TOKEN(state, token) {
    state.token = token;
    window.localStorage.setItem("token", token);
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_MESSAGE(state, message) {
    state.message = message;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};

const actions = {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {   
      commit("SET_LOADING", true);
      return AuthService.login(payload)
        .then(response => {
          if (response.data.access_token) {
              commit("SET_TOKEN", response.data.access_token);
              commit("SET_LOADING", false);
              commit("SET_USER", response.data.user);
              resolve(response)
            } else {
              reject(response);
            }
        })
        .catch(error => {
          reject(error)
          commit("SET_LOADING", false);
          commit("SET_ERROR", error.data ? error.data.message : error);
        });
      })
  },
  logout({ commit }) {
    return AuthService.logout()
      .then(() => {
        commit("CLEAR_USER");
      })
      .catch(() => {
        commit("CLEAR_USER");
      });
  },
};

const getters = {
  authUser: state => {
    return state.user;
  },
  error: state => {
    return state.error;
  },
  loading: state => {
    return state.loading;
  },
  loggedIn: state => {
    return !!state.user;
  },
  token (state) {
    return state.token
  },
};


export default {  
  namespaced,
  state,
  mutations,
  getters,
  actions
}