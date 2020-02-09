const BASE_URL = 'https://api.it120.cc/xiaochengxu'
const TOKEN = wx.getStorageSync('token')
// const request = (url, method, data) => {
//   let _url = BASE_URL + url
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: _url,
//       method: method,
//       data: data,
//       header: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       success(request) {
//         resolve(request.data)
//       },
//       fail(error) {
//         reject(error)
//       },
//       complete(aaa) {
//         // 加载完成
//       }
//     })
//   })
// }
const post = (url, data = {}) => {
  let _url = BASE_URL + url
  return new Promise((resolve, reject) => {

    wx.request({
      url: _url,
      method: "post",
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}
module.exports = {
  post
}
