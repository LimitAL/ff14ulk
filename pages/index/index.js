//index.js
let skills = require("../../data/skills.js");
let crystals = require("../../data/crystals.js");
Page({
    data: {
        current: 25,
        viewid: '',
        skills: skills.skills,
        content: {},
        searchSource: {
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
        this.setData({
            viewid: this.data.skills[this.data.current].name_en
        });
        this.processContent(this.data.current);
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
        } else {
            result = skills.skills;
        }

        this.setData({
            current: 0,
            skills: result
        });
        if (result.length > 0) {
            this.processContent(0);
        }
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
    }
})