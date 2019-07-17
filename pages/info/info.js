// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { interval: false, type: 'nav', text: '优雷卡天气预报', icon: 'weather', src: '/pages/weather/weather' },
      { interval: true, type: 'btn', text: '清除缓存', icon: 'clear', src: 'clearStorage' },
      { interval: false, type: 'nav', text: '关于', icon: 'info', src: '/pages/logs/logs' }
    ]
  },
  onTapItem(e) {
    let index = e.currentTarget.dataset.index;
    switch (this.data.items[index].type) {
      case 'nav':
        wx.navigateTo({
          url: this.data.items[index].src
        });
        break;
      case 'btn':
        this.runFunc(this.data.items[index].src);
        break;
      default:
        break;
    }
  },
  runFunc(src) {
    if (src === "clearStorage") {
      wx.showModal({
        title: '清除缓存',
        content: '将清除所有保存在本机的数据，确定要这样做吗？',
        success(res) {
          if (res.confirm) {
            wx.clearStorage();
          }
        }
      })
    } else {
      wx.showToast({
        title: '无此功能',
        icon: 'none'
      });
    }
  }
})