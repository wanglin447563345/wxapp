import Util from './Util'

const httpUtil = {}

// 基于fetch封装post请求
httpUtil.post = (url, params, headers = {}) => {
  const userInfo = JSON.parse(Util.getCookie('user_info') || '{}')
  headers = { ...headers,
    // 'X-Exxdata-Token': userInfo.token
    'X-Exxdata-Token': '45372c33c269a6f7ff9afe495b79819a'
  }
  let formData = new FormData()
  for (let k in params) {
    formData.append(k, params[k])
  }
  return new Promise((resolve, reject) => {
    fetch(url, {
      method:'POST',
      headers: headers,
      body: formData
    })
      .then(response => {
        if (response.ok) {
          const data = response.json()
          resolve(data)
        } else {
          reject(null)
        }
      })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default httpUtil
