// components/skillDetailComponent/skillDetailComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
    },
    show: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

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