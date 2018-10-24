// 入口文件
import Vue from 'vue'

//导入 MUI的样式

import app from './App.vue'
import { Header } from 'mint-ui';
//导入 MUI 的样式
import './lib/mui/css/mui.min.css'
Vue.component(Header.name, Header);

var vm = new Vue({
    el:'#app',
    render: c=>c(app)
})