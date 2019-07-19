// pages/weather/weather.js
const EorzeaClock = require('../../class/EorzeaClock.js');
const EorzeaWeatherClass = require('../../class/EorzeaWeather.js');
const eorzeaAreaWeather = require('../../data/eorzeaAreaWeather.js');
const utils = require('../../utils/util.js');
const storage = require('../../utils/storage.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areas: eorzeaAreaWeather,
    current: 'anemos',
    number: 10,
    numberList: [5, 10, 15, 20, 25, 30],
    time: {
      date: '',
      now: '00:00'
    },
    lastETHours: '',
    weathers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    storage.getStorage('weatherNumber', function(res) {
      if (res && this.data.numberList.indexOf(res) > -1) {
        this.setData({
          number: res
        });
        this.loop();
        setInterval(this.loop.bind(this), 1000);
      } else {
        this.loop();
        setInterval(this.loop.bind(this), 1000);
      }
    }.bind(this));
  },

  loop() {
    let ET = new EorzeaClock(undefined);
    let EorzeaWeather = new EorzeaWeatherClass();
    let lET = EorzeaWeather.calcBaseDate(new EorzeaClock(undefined)).getHours();
    let data = new Object();
    if (this.data.lastETHours !== lET) {
      this.initNextWeather();
      data.lastETHours = lET;
    }
    let now = {
      hours: ET.date.getUTCHours(),
      minutes: ET.date.getUTCMinutes()
    }
    now.hours = now.hours < 10 ? '0' + now.hours : now.hours;
    now.minutes = now.minutes < 10 ? '0' + now.minutes : now.minutes;
    ET.now = now.hours + ":" + now.minutes;
    data.time = ET;
    this.setData(data);
  },

  initNextWeather() {
    let ET = new EorzeaClock(undefined);
    let EorzeaWeather = new EorzeaWeatherClass();
    let baseTime = EorzeaWeather.calcBaseDate(ET);
    let weatherSeeds = EorzeaWeather.forecastSeed(ET, Array.from({ length: this.data.number }).map(function(_, i) { return i; })); // 生成100个种子
    let forecast = EorzeaWeather.getForecast(this.data.current, weatherSeeds); // 获得时间种子
    let weathers = new Array();
    for (let index in forecast) {
      let str = forecast[index];
      let base = baseTime.addHours(index * 8);
      let targetTime = base.getLocalTime();
      let min = targetTime.getMinutes();
      min = min < 10 ? `0${min}` : min;
      let mouth = targetTime.getMonth() + 1;
      mouth = mouth < 10 ? `0${mouth}` : mouth;
      let date = targetTime.getDate();
      date = date < 10 ? `0${date}` : date;
      let hour = targetTime.getHours();
      hour = hour < 10 ? `0${hour}` : hour;
      let time = `${hour}:${min}`;
      date = `${mouth}月${date}日${time}`;

      let eurekaHour = base.getHours();
      eurekaHour = eurekaHour < 10 ? `0${eurekaHour}` : eurekaHour;
      let eurekaMinutes = base.getMinutes();
      eurekaMinutes = eurekaMinutes < 10 ? `0${eurekaMinutes}` : eurekaMinutes;
      let eurekaTime = `${eurekaHour}:${eurekaMinutes}`;
      weathers.push({
        date: date,
        eurekaTime: eurekaTime,
        str: str
      });
    }
    this.setData({
      weathers: weathers
    });
  },

  // 点击切换区域
  onTapArea(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      current: index,
      lastETHours: null
    });
    this.loop();
  },

  onChangeNumber(e) {
    let index = e.detail.value;
    this.setData({
      number: this.data.numberList[index],
      lastETHours: null
    });
    storage.setStorage('weatherNumber', this.data.numberList[index]);
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