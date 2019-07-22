// pages/baimage/baimage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    left: 0
  },

  onScale(e) {
    let scale = e.detail.scale;
    this.setData({
      x: 0 + (scale * 100),
      left: 0 + (scale * 100)
    });
  }
})