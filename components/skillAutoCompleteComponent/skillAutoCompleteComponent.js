// components/skillAutoCompleteComponent/skillAutoCompleteComponent.js
let skills = require("../../data/skills.js");
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    toggle: {
      type: Boolean,
      value: false,
      observer: function() {
        this.setData({
          modal: false
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    keyword: '',
    modal: false,
    list: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInputSearch(e) {
      let data = new Object();
      let key = e.detail.value;
      data.keyword = key;
      if (key !== '') {
        data.list = skills.skills.filter(function(item) {
          if (item.name.indexOf(key) > -1 || item.name_en.indexOf(key) > -1) {
            return true;
          } else {
            return false;
          }
        });
        data.modal = true;
      } else {
        data.list = [];
      }
      this.setData(data);
      this.triggerEvent('onSelectSkill', { from: [] });
    },
    onTapSkill(e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        modal: false,
        keyword: this.data.list[index].name
      });
      this.triggerEvent('onSelectSkill', this.data.list[index]);
    }
  }
})