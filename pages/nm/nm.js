// pages/nm/nm.js
const NM = require('../../data/NM.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NM: NM,
    current: 0,
    areas: [
      { name: '常风', tag: 'anemos' },
      { name: '恒冰', tag: 'pagos' },
      { name: '涌火', tag: 'pyros' },
      { name: '丰水', tag: 'hydatos' },
    ],
    detailModal: false,
    content: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  onTapArea(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      current: index
    });
  },

  onTapItem(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      content: this.data.NM[this.data.areas[this.data.current].tag][index],
      detailModal: true
    });
  },

  onCloseModal() {
    this.setData({
      detailModal: false
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})