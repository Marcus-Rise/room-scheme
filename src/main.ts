import Vue from 'vue'
import App from './App.vue'
import data from "./data.json";

Vue.config.productionTip = false

new Vue({
  render: h => h(App, {
    attrs: {
      "data-scheme": JSON.stringify(data),
      "editor": true
    }
  })
}).$mount('#app')
