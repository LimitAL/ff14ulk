// pages/weapon/weapon.js
const weapons = require('../../data/weapons.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tags: { 'anemos': '常风', 'pagos': '恒冰', 'pyros': '涌火', 'hydatos': '丰水' },
    weapons: weapons,
    current: [null, null],
    weaponsAllList: [...weapons.anemos, ...weapons.pagos, ...weapons.pyros, ...weapons.hydatos],
    range: [],
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  onTapStep(e) {
    let id = e.currentTarget.dataset.id;
    let data = {
      current: []
    };
    let index = this.data.current.indexOf(id);
    if (index > -1) {
      data.current = this.data.current;
      data.current[index] = null;
    } else {
      if (this.data.current[0] === null) {
        data.current = [id, this.data.current[1]];
      } else if (this.data.current[1] === null) {
        data.current = [this.data.current[0], id];
      } else {
        data.current = [this.data.current[1], id];
      }
    }
    data.current.sort();
    this.filterData(data.current);
    this.setData(data);
  },

  filterData(arr) {
    let result = new Array();
    this.data.weaponsAllList.forEach(element => {
      if (element.id >= arr[0]) {
        if (!arr[1] || element.id <= arr[1]) {
          result.push(element);
        }
      }
    });
    this.setData({
      range: result
    });
  },

  onTapCompute() {
    let result = new Array(),
      index;
    for (let i = 0; i < this.data.range.length; i++) {
      for (let m = 0; m < this.data.range[i].materials.length; m++) {
        index = -1;
        index = result.findIndex(item => {
          return item.id == this.data.range[i].materials[m].id;
        })
        if (index > -1) {
          result[index].number += Number(this.data.range[i].materials[m].number);
        } else {
          result.push({
            id: this.data.range[i].materials[m].id,
            name: this.data.range[i].materials[m].name,
            icon: this.data.range[i].materials[m].icon,
            number: Number(this.data.range[i].materials[m].number)
          });
        }
      }
    }
    this.setData({
      list: result
    });
  },

  onTapClose() {
    this.setData({
      list: []
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