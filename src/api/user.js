import axios from 'libs/api.request'

// 发送短信验证码
export const getSmsCode = (phone, codeType) => {
  return axios.request({
    url: 'user/SmsCode',
    params: {phone: phone, codeType: codeType},
    method: 'get'
  })
}

// 注册
export const register = (data) => {
  return axios.request({
    url: 'user/Register',
    data: data,
    method: 'post'
  })
}

// 登录
export const login = (data) => {
  return axios.request({
    url: 'user/login',
    data: data,
    method: 'post'
  })
}

export const changePwd = (data) => {
  return axios.request({
    url: 'user/ChangePwd',
    data: data,
    method: 'post'
  })
}
