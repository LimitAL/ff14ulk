// pages/fuse/fuse.js
const skills = require("../../data/skills.js");
const utils = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fuseList: [],
    skillDetailShow: false,
    content: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  // 从缓存中读取组合数据
  loadFuseData() {
    let _self = this;

    function render(data) {
      let result = new Array();
      let obj = new Object(),
        probability;
      data.forEach(element => {
        for (let i in element) {
          obj[i] = {
            skill: skills.skills.find(item => item.id == element[i].skill),
            scheme: element[i].scheme
          }
          obj[i].skill = utils.processFromData(obj[i].skill, skills.skills);
        }
        probability = _self.processProbability(obj.astral.skill.from[obj.astral.scheme], obj.ombral.skill.from[obj.ombral.scheme]);
        result.push({
          astral: obj.astral,
          ombral: obj.ombral,
          modal: false,
          probability: probability
        });
      });
      _self.setData({
        fuseList: result
      });
    }
    // 读数据
    wx.getStorage({
      key: 'fuse',
      success: function(res) {
        let data = res.data;
        render(data);
      },
      fail: function() {
        render([]);
      }
    })
  },

  // 点击创建组合
  onTapCreateFuse() {
    wx.navigateTo({
      url: '/pages/fuseDetail/fuseDetail?isCreate=true'
    });
  },

  // 打开标签弹窗
  onTapBtn(e) {
    let currentIndex = e.currentTarget.dataset.index;
    let data = this.data.fuseList;
    for (let i = 0; i < data.length; i++) {
      data[i].modal = false;
    }
    data[currentIndex].modal = true;
    this.setData({
      fuseList: data
    });
  },

  // 全局事件
  onTapGlobal() {
    let data = this.data.fuseList;
    for (let i = 0; i < data.length; i++) {
      data[i].modal = false;
    }
    this.setData({
      fuseList: data
    });
  },

  // 编辑
  edit(e) {
    let currentIndex = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/fuseDetail/fuseDetail?isCreate=false&index=' + currentIndex
    });
  },

  // 移动位置
  move(e) {
    let arrow = e.currentTarget.dataset.arrow;
    let currentIndex = e.currentTarget.dataset.index;
    let storage = wx.getStorageSync('fuse') || [];
    let currentElement = storage.splice(currentIndex, 1);
    if (arrow === "up") {
      storage.splice(currentIndex - 1, 0, currentElement[0]);
    } else {
      storage.splice(currentIndex + 1, 0, currentElement[0]);
    }
    wx.setStorageSync('fuse', storage);
    this.loadFuseData();
  },

  // 移除元素
  delete(e) {
    let currentIndex = e.currentTarget.dataset.index;
    let _self = this;
    wx.showModal({
      title: '删除融合组合',
      content: '将要删除技能组合\r\n' + this.data.fuseList[currentIndex].astral.skill.name + '+' + this.data.fuseList[currentIndex].ombral.skill.name,
      success: function(e) {
        if (e.confirm) {
          let storage = wx.getStorageSync('fuse') || [];
          storage.splice(currentIndex, 1);
          wx.setStorageSync('fuse', storage);
          _self.loadFuseData();
        }
      }
    });
  },
  onTapSkillName(show) {
    let id, data = new Object();
    if (typeof show !== "boolean") {
      id = show.currentTarget.dataset.id;
      if (id) {
        data.content = skills.skills.find(item => item.id === id);
        data.content = utils.processFromData(data.content, skills.skills);
      }
      show = !this.data.skillDetailShow;
    }
    data.skillDetailShow = show;
    this.setData(data);
  },

  // 计算合成成功率
  processProbability(astral, ombral) {
    let astralNum = 0,
      ombralNum = 0;
    astral.forEach(element => {
      astralNum += element.num;
    });
    ombral.forEach(element => {
      ombralNum += element.num;
    });
    switch (astralNum + ombralNum) {
      case 4:
        return 70;
      case 5:
        return 50;
      case 6:
        return 30;
      default:
        throw Error('Probability Error');
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.loadFuseData();
  }
})