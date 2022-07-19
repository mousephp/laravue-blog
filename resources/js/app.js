require('./bootstrap');

require('../assets/plugins/datatable/dataTables.bootstrap4.css');
import '../assets/plugins/datatable/jquery.dataTables.js';
import '../assets/plugins/datatable/dataTables.bootstrap4.min.js';

window.Vue = require('vue');

//Vue-Axios
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

//vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

//VueProgressBar
import VueProgressBar from 'vue-progressbar'
const options = {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
}
Vue.use(VueProgressBar, options)

//ckeditor
import CKEditor from '@ckeditor/ckeditor5-vue2';
Vue.use( CKEditor );

//Vew - Notifications
import Notifications from 'vue-notification'
Vue.use(Notifications)

//Viewer
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)

//vue-moment
Vue.use(require('vue-moment'));

//router
import router from './router';

// import VueX
import store from "./store/index";

//i18n
import i18n from './plugins/i18n'
window.i18n = i18n

//Rating
import StarRating from 'vue-star-rating'

Vue.component('star-rating', StarRating);

//sweetalert
import swal from 'sweetalert';

import App from './App.vue';
Vue.config.productionTip = true;

const app = new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    render: h => h(App)
});

