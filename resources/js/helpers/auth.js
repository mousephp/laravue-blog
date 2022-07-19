export function login(credential) {
    return new Promise((res, rej) => {
        axios.post('/api/signin', credential)
            .then(result => {
                res(result);
            })
            .catch(err => {
                rej(err);
            })
    })
}

export function register(credential) {
    return new Promise((res, rej) => {
        axios.post('/api/create-account', credential)
            .then(result => {
                res(result.data);
            })
            .catch(err => {
                rej(err);
            })
    })
}

export function currentUser() {
    const user = localStorage.getItem('token.sanctum');

    if (!user) {
        return null;
    }

    return JSON.parse(user);
}
// https://b29.vn/bai-viet/authenticate-jwt-voi-vuejs-va-laravel?id=36


// E:\xampp\htdocs\Hoclaravel\THlaravel\laravel-vue\clone-github\chuyende\resources\js\helper\auth.js
export function handleAuthorization() {
    var access_token = localStorage.getItem('access_token');
    axios.defaults.headers.common['Authorization'] = 'Bearer' + access_token;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    //Xử lý trạng thái token
    axios.interceptors.response.use(
      //Accept
      function(response) {
        return response;
      },
      function(err) {
        // expired token error
        if (err && err.response && err.response.status === 401) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('token.sanctum');
            // alert('Đăng nhập hết hạn');
  
            return router.push({
                name: 'login'
            });
        }
        // validate error
        if (err && err.response && err.response.status === 422) {
            return Promise.reject(err);
        }
  
        return Promise.reject(err);
      }
    );
  }
