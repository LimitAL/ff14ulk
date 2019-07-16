// pages/fuseDetail/fuseDetail.js
const skills = require("../../data/skills.js");
const utils = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCreate: false,
    storageIndex: -1,
    toggle: false,
    astralKey: '',
    ombralKey: '',
    astral: {
      from: []
    },
    astralIndex: -1,
    ombral: {
      from: []
    },
    ombralIndex: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let render = new Object();
    render.isCreate = options.isCreate === "true" ? true : false;
    if (!render.isCreate) {
      this.init(options.index);
    } else {
      this.setData(render);
    }
  },

  // 数据初始化，编辑模式的时候加载初始数据到页面内
  init(index) {
    let fuse = wx.getStorageSync('fuse')[index];
    let data = new Object();
    for (let i in fuse) {
      data[i] = utils.processFromData(skills.skills.find(item => item.id === fuse[i].skill), skills.skills);
      data[`${i}Index`] = fuse[i].scheme;
      data[`${i}Key`] = data[i].name;
    }
    data.storageIndex = index;
    this.setData(data);
  },

  onTapGlobal(e) {
    this.setData({
      toggle: !this.data.toggle
    });
  },

  onSelectSkill(e) {
    let result = new Object();
    result = utils.processFromData(e.detail, skills.skills);
    let type = e.currentTarget.dataset.type;
    let data = new Object();
    data[type] = result;
    data[type + "Index"] = -1;
    this.setData(data);
  },

  onTapFrom(e) {
    let type = e.currentTarget.dataset.type;
    let index = e.currentTarget.dataset.index;
    let obj = new Object();
    obj[type + "Index"] = index;
    this.setData(obj);
  },

  onTapSave() {
    let msg, _self = this;

    function callback(message) {
      if (message) {
        wx.showToast({
          title: message,
          icon: 'none'
        });
      } else {
        wx.showToast({
          title: "正在保存数据，请稍候…",
          icon: 'none'
        });
        _self.setStorage();
      }
    }
    if (this.data.astralIndex < 0 || this.data.ombralIndex < 0) {
      msg = '还有尚未选定的合成配方';
      return callback(msg);
    }
    if (!this.accessCheck()) {
      msg = '当前选择的两个技能有冲突';
      wx.showModal({
        title: '技能搭配有误？',
        content: '你选定的技能组合存在职业冲突，使用该方法合成可能会导致无法同时使用的情况，确定要这样设定吗？',
        success: function(e) {
          if (e.confirm) {
            callback(null);
          }
        }
      });
    } else {
      callback(null);
    }

  },

  setStorage() {
    let fuse = wx.getStorageSync('fuse') || [];
    let obj = {
      astral: { skill: this.data.astral.id, scheme: this.data.astralIndex },
      ombral: { skill: this.data.ombral.id, scheme: this.data.ombralIndex }
    };
    if (this.data.isCreate) {
      fuse.unshift(obj);
    } else {
      fuse[this.data.storageIndex] = obj;
    }
    wx.setStorageSync('fuse', fuse);
    wx.navigateBack({
      delta: 1 // 回退前 delta(默认为1) 页面
    });
  },

  // 职业检查
  accessCheck() {
    let astral = new Set(this.data.astral.access);
    let ombral = new Set(this.data.ombral.access);
    let intersect = new Set([...astral].filter(x => ombral.has(x)));;
    // 首先检查交集，存在交集则直接检查通过
    if (intersect.size > 0) {
      return true;
    } else {
      // 无交集时判断星极与灵极是否存在通用项“D”
      let checks = ['YD', 'WD', 'MD'];
      if (astral.has('D')) {
        // 当星极存在通用项目D时
        if (checks.indexOf(ombral)) {
          return true;
        }
      } else if (ombral.has('D')) {
        // 当灵极存在通用项目D时
        if (checks.indexOf(astral)) {
          return true;
        }
      }
      return false;
    }
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