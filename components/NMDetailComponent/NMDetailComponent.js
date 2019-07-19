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
          let AList = new Array(),
            BList = new Array();
          for (let i in obj.spoils) {
            if (obj.spoils[i].isCertainly) {
              AList.push(obj.spoils[i]);
            } else {
              BList.push(obj.spoils[i]);
            }
          }
          this.setData({
            AList: AList,
            BList: BList
              // AList: obj.spoils.filter(item => item.isCertainly === true),
              // BList: obj.spoils.filter(item => item.isCertainly === false)
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