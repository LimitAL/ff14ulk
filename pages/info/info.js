// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      // { text: '优雷卡天气预报', icon: 'info', src: '/pages/logs/logs' },
      { text: '关于', icon: 'info', src: '/pages/logs/logs' }
    ]
  },
  onTapItem(e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: this.data.items[index].src
    });
  }
})