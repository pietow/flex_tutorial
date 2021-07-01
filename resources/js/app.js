import Vue from 'vue';
window.Vue = require('vue');

Vue.component('VueFlex', require('./components/VueFlex.vue').default);

const app = new Vue({
    el: '#app',
});
