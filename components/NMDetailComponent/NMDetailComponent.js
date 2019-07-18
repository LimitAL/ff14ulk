// components/NMDetailComponent/NMDetailComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    data: {
      type: Object,
      observer: function(obj) {
        if (Object.keys(obj).length > 0) {
          this.setData({
            AList: obj.spoils.filter(item => item.isCertainly === true),
            BList: obj.spoils.filter(item => item.isCertainly === false)
          });
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    AList: [],
    BList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapClose() {
      this.triggerEvent('close', false);
    }
  }
})