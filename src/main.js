import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Header } from "mint-ui";

import MUI from './lib/mui/css/mui.css'
Vue.component(Header.name, Header);

const vm=new Vue({
    el:'#app',
    render:c=>c(App),
})