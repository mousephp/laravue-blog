import * as API from "./API.js";

export default {
  login(payload) {
    return API.apiClient.post("/api/login", payload);
  },
  getLocalUser() {
    const userStr = window.localStorage.getItem('user');
  
    if (!userStr) {
        return null
    }
  
    return JSON.parse(userStr);
  },
  logout() {
    return API.apiClient.post("/api/logout");
  }
};
