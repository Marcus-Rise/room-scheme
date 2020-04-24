import Vue from 'vue'
import App from './App.vue'
import data from "./data.json";
import dictionary from "./dictionary.json";

Vue.config.productionTip = false

new Vue({
  render: h => h(App, {
    attrs: {
      "data-scheme": data,
      "data-dictionaries": dictionary,
    }
  })
}).$mount('#app')
