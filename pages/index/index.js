//index.js
let skills = require("../../data/skills.js");
let crystals = require("../../data/crystals.js");
Page({
    data: {
        current: 1, //当前选中项的索引
        viewid: '', //左侧菜单快速跳转试图标记，和菜单的id对应
        skills: skills.skills, //文理技能列表
        content: {}, //右侧内容数据
        like: false, //常用标记
        keyword: '', //搜索关键字
        searchSource: { //来源弹窗
            name: '',
            isShow: false,
            top: 0,
            left: 0,
            data: {}
        }
    },
    onLoad: function() {

    },
    onShow: function() {
        this.init();
        // let storage = wx.getStorageSync('likes') || [];
        if (this.data.current < 0) {
            this.setData({
                current: 0
            });
        }
        this.setData({
            viewid: this.data.skills[this.data.current].name_en
        });
        this.processContent(this.data.current);
        if (this.data.keyword.length > 0) {
            this.onInputSearch({
                detail: {
                    value: this.data.keyword
                }
            });
        }
    },
    // 初始化，重载左侧菜单列，进行排序
    init(reset = false) {
        let data = [];
        for (let i in skills.skills) {
            data[i] = skills.skills[i];
        }
        let _self = this;
        let res = wx.getStorageSync('likes');
        if (res && Reflect.has(res, 'length')) {
            set(res);
        } else {
            set([]);
        }

        function set(storage) {
            let result = [];
            let obj = {};
            for (let i = 0; i < data.length; i++) {
                obj = storage.find(item => item == data[i].id);
                if (obj) {
                    data[i].like = true;
                    result.unshift(data[i]);
                } else {
                    data[i].like = false;
                    result.push(data[i]);
                }
            }
            _self.setData({
                skills: result
            });
        }
    },
    // 点击菜单
    onTapMenu(e) {
        this.onClickGlobal();
        let index = Number(e.currentTarget.dataset.index);
        this.processContent(index);
    },
    // 加载内容数据
    processContent(index) {
        let result = new Object();
        for (let i in this.data.skills[index]) {
            if (i !== "from") {
                result[i] = this.data.skills[index][i];
            }
        }
        result.from = new Array();
        let arr = new Array();
        this.data.skills[index].from.forEach(element => {
            arr = new Array();
            element.forEach(item => {
                arr.push({
                    num: item.num,
                    fid: item.fid,
                    obj: skills.skills.find(e => {
                        return e.id == item.fid
                    })
                });
            });
            result.from.push(arr);
        });
        this.setData({
            current: index,
            content: result
        });
        this.likeStatusOnload(result.id);
    },
    // 搜索方法
    onInputSearch(e) {
        let key = e.detail.value;
        let result = new Array();
        if (key) {
            result = skills.skills.filter(function(item) {
                if (item.name.indexOf(key) > -1 || item.name_en.indexOf(key) > -1) {
                    return true;
                } else {
                    return false;
                }
            });
            this.setData({
                current: 0,
                skills: result,
                keyword: key
            });
        } else {
            this.setData({
                keyword: ""
            });
            this.init();
        }


        if (result.length > 0) {
            this.processContent(0);
        } else {
            this.likeStatusOnload(this.data.content.id);
        }
    },
    // 清空搜索框
    onTapClearKeyword() {
        // 延迟触发，不这样在真机上会闪烁一下无法清除，必须点击第二次
        setTimeout(function() {
            this.onInputSearch({
                detail: { value: "" }
            });
        }.bind(this), 100);
    },
    // 查询技能来源
    onTapSkill(e) {
        let id = e.currentTarget.dataset.id;
        let i;
        let result = crystals.crystals.find(function(item) {
            i = item.data.filter(e => {
                return id == e;
            });
            if (i.length > 0) {
                return true;
            }
        });
        this.setData({
            searchSource: {
                name: skills.skills.find(item => id === item.id).name,
                isShow: true,
                data: result,
                top: e.detail.y,
                left: e.detail.x,
            }
        });
        // let timeoutID = setTimeout(() => {
        //     if (this.data.searchSource.isShow === true) {
        //         this.setData({
        //             "searchSource.isSHow": false
        //         });
        //     }
        // }, 5000);
    },
    // 长按来源弹窗
    onLongTapModal() {
        wx.showModal({
            title: `${this.data.searchSource.data.name}的来源`,
            content: `丰水:${this.data.searchSource.data.from.hydatos}\r\n涌火：${this.data.searchSource.data.from.pyros}`
        });
    },
    // 全局事件监听
    onClickGlobal() {
        this.setData({
            searchSource: {
                name: '',
                isShow: false,
                top: 0,
                left: 0,
                data: {}
            }
        });
    },
    // 设置常用
    onTapLike() {
        let _self = this;
        wx.getStorage({
            key: 'likes',
            success: function(res) {
                let data = res.data;
                let primarykey;
                let index = data.findIndex(item => {
                    return item === _self.data.content.id
                });
                if (index > -1) {
                    primarykey = data.splice(index, 1);
                    _self.setStorage(data, primarykey, 'del');
                } else {
                    data.push(_self.data.content.id);
                    _self.setStorage(data, _self.data.content.id, 'add');
                }
            },
            fail: function() {
                // fail
                let data = [_self.data.content.id];
                _self.setStorage(data, _self.data.content.id, 'add');
            },
            complete: function(res) {
                // complete
                _self.setData({
                    like: !_self.data.like
                });
            }
        });
    },
    setStorage(data, primarykey, tag) {
        let _self = this;
        wx.setStorage({
            key: 'likes',
            data: data,
            success: function(res) {
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
                let title;
                if (tag === 'add') {
                    title = '新增';
                } else {
                    title = '取消';
                }
                _self.setData({
                    current: -1
                });
                wx.showToast({
                    title: title + "常用成功",
                    icon: 'success'
                });
                _self.init();
            }
        })
    },
    // 常用状态加载
    likeStatusOnload(current) {
        let _self = this;
        wx.getStorage({
            key: 'likes',
            success: function(res) {
                let data = res.data;
                if (data.length > 0) {
                    let result = data.findIndex(item => {
                        return item == current;
                    });
                    if (result !== -1) {
                        _self.setData({
                            like: true
                        });
                    } else {
                        _self.setData({
                            like: false
                        });
                    }
                } else {
                    _self.setData({
                        like: false
                    });
                }
            },
            fail: function() {
                _self.setData({
                    like: false
                });
            }
        })
    }
})