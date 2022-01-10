import Vue from 'vue'
import App from './App.vue'

import './plugins/element'
import './plugins/vue-animated'
import './plugins/vue-timeline'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
