// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Element)

Vue.use(Viewer, {
  defaultOptions: {zIndex: 9999, 'button': false, 'toolbar': false, 'navbar': false, title: false}
})

Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
