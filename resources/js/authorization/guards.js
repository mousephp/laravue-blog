module.exports = (router, store) => {
  router.beforeEach((to, from, next) => {
    i18n.locale = localStorage.getItem('language') || 'en'
    const token = localStorage.getItem("token");
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
      next({ path: "/login", query: { redirect: to.fullPath } });
    } else {
      next(); // make sure to always call next()!
    }
  });
}

