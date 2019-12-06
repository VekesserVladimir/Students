import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSortDown, faSortUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './styles/index.less'
import VueVisible from 'vue-visible'
import vuex from "vuex"
import store from "./store/store"

Vue.use(VueVisible);

Vue.config.productionTip = false
library.add(faSortDown, faSortUp, faTrashAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
