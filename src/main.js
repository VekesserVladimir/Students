import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import './styles/index.less'
import VueVisible from 'vue-visible';

Vue.use(VueVisible);

Vue.config.productionTip = false
library.add(faSortDown, faSortUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
