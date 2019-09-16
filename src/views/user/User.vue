<template>
  <div>
    <input type="text" v-model="account" />
    <input type="text" v-model="password">
    <input type="button" value="登录" @click="Login()" />
    <input type="button" value="修改密码" @click="ChangePwd()">
  </div>
</template>

<script>
import {login, changePwd} from 'api/user.js'
export default {
  name: 'User',
  data(){
    return {
      account: '',
      password: ''
    }
  },
  methods:{
    Login() {
      var data = {Account: this.account, Password: this.password}
      login(data).then(res => {
        localStorage.setItem("Authorize", res.data.data.Access_token)
        localStorage.setItem("UserId", res.data.data.UserId)
      }).catch(err => {
        console.log(err);
      })
    },
    ChangePwd(){
      var data = {MemberId: localStorage.getItem('UserId'), OldPwd: 'e10adc3949ba59abbe56e057f20f883e', NewPwd: 'e10adc3949ba59abbe56e057f20f883e'};
      changePwd(data).then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style lang="less">

</style>
