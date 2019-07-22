// pages/nm/nm.js
const NM = require('../../data/NM.js');
const storage = require('../../utils/storage.js');
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
    // 从缓存内读取上一次打开的区域
    storage.getStorage('nm_pre', function(res) {
      if (res) {
        this.setData({
          current: res
        });
      }
    }.bind(this));
  },

  onTapArea(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      current: index
    });
    storage.setStorage('nm_pre', index);
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
  }
})