//app.js
App({
  onLaunch: function() {
    // 获取当前环境
    const appId = this.globalData.appId = wx.getAccountInfoSync().miniProgram.appId;
    if (/^\d+$/.test(appId)) { // 纯数字APPID为QQ小程序
      this.globalData.env = 'qq';
    }
  },
  globalData: {
    appId: '',
    env: 'wechat'
  }
})