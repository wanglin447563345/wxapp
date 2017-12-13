const Util = {}

// 设置cookie
Util.setCookie = (name, value, days) => {
  const date = new Date()
  date.setDate(date.getDate() + days)
  document.cookie = name + '=' + escape(value) +
    ((days === null) ? '' : ';expires=' + date.toGMTString()) + ';path=/'
}

// 获取cookie
Util.getCookie = (name) => {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(`${name}=`)
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
        return unescape(document.cookie.substring(start, end))
      }
    }
  }
  return ''
}

// 去掉空格
Util.replaceBlank = (str) => {
  return str.replace(/\s/g, '')
}

// 验证手机和邮箱
Util.checkName = (str) => {
  const re = /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/
  if (re.test(str) && str.length < 50) {
    return true
  } else {
    return false
  }
}

// 验证邮箱
Util.checkEmail = (str) => {
  const re = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
  if (re.test(str) && str.length < 50) {
    return true
  } else {
    return false
  }
}

// 验证手机号
Util.checkPhone = (str) => {
  const re = /^1[34578]\d{9}$/
  if (re.test(str)) {
    return true
  } else {
    return false
  }
}

// // 处理异步请求来的柱状图表数据
// Util.handleChatData = (data, date) => {
//   const timer = []
//   const datas = []
//   for (let i = 0; i < data.data.data.length; i++) {
//     timer.push(data.data.data[i].year)
//     datas.push(data.data.data[i].energy)
//   }
//   return { time:timer, data: datas }
// }

export default Util
