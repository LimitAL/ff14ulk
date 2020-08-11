// pages/info/info.js
const APP = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        interval: false,
        type: 'nav',
        text: '恶名精英图鉴',
        icon: 'nm',
        src: '/pages/nm/nm'
      },
      {
        interval: false,
        type: 'nav',
        text: '禁地兵装',
        icon: 'weapon',
        src: '/pages/weapon/weapon'
      },
      {
        interval: false,
        type: 'nav',
        text: '优雷卡天气预报',
        icon: 'weather',
        src: '/pages/weather/weather'
      },
      {
        interval: false,
        type: 'nav',
        text: '文理碎晶',
        icon: 'crystal_light',
        src: '/pages/brokenCrystal/brokenCrystal'
      },
      {
        interval: false,
        type: 'miniprogram',
        text: 'FF14检索工具 - 工具合集',
        icon: 'icon-tool',
        src: 'wx895a7377514cce46'
      },
      {
        interval: true,
        type: 'btn',
        text: '清除缓存',
        icon: 'clear',
        src: 'clearStorage'
      },
      {
        interval: false,
        type: 'nav',
        text: '关于',
        icon: 'info',
        src: '/pages/logs/logs'
      },
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
      case 'miniprogram':
        if (APP.globalData.env === 'wechat') {
          wx.navigateToMiniProgram({
            appId: this.data.items[index].src
          });
        } else {
          qq.navigateToMiniProgram({
            appId: '1110321393'
          });
        }
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
  },
  handleTapHabbit() {
    wx.showToast({
      title: '宝藏好像在东北方向很远的地方……',
      duration: 5000,
      icon: 'none'
    });
  }
})