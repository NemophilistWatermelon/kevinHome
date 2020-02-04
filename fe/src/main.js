import Vue from 'vue'
import App from './App.vue'
import router from './router'

import blogApi from './lib/api/blogApi/index.js'
import moment from 'moment';

Vue.config.productionTip = false

Vue.prototype.$moment = moment;
Vue.prototype.$blogApi = blogApi;
Vue.filter('filter_Time', (timeValue) => {
    var time = timeValue;
    if (typeof time === "string") {
        time = parseInt(time);
    }
    return moment(time).format('YY/MM/DD h:mm')
})


var __main = function() {

    var vm = new Vue({
        router,
        render: h => h(App)
    }).$mount('#app');
    window.vm = vm;
}
__main();