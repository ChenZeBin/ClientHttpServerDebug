import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import {Layout, Menu, Icon, Select, Table, Divider} from 'ant-design-vue';
import EventBus from './EventBus'

Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Select)
Vue.use(Table)
Vue.use(Divider)
Vue.use(EventBus)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
