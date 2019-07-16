"use strict";
var EorzeaAreaWeather = {
  "area.EurekaAnemos": {
    name: "优雷卡 常风之地",
    weatherRate: [
      { rate: 30, weather: "晴朗" },
      { rate: 30, weather: "强风" },
      { rate: 30, weather: "暴雨" },
      { rate: -1, weather: "小雪" },
    ],
  },
  "area.EurekaPagos": {
    name: "优雷卡 恒冰之地",
    weatherRate: [
      { rate: 10, weather: "晴朗" },
      { rate: 18, weather: "薄雾" },
      { rate: 18, weather: "热浪" },
      { rate: 18, weather: "小雪" },
      { rate: 18, weather: "暴雷" },
      { rate: -1, weather: "暴雪" },
    ],
  },
  "area.EurekaPyros": {
    name: "优雷卡 涌火之地",
    weatherRate: [
      { rate: 10, weather: "晴朗" },
      { rate: 18, weather: "热浪" },
      { rate: 18, weather: "打雷" },
      { rate: 18, weather: "暴雪" },
      { rate: 18, weather: "灵风" },
      { rate: -1, weather: "小雪" },
    ],
  },
  "area.EurekaHydatos": {
    name: "优雷卡 丰水之地",
    weatherRate: [
      { rate: 12, weather: "晴朗" },
      { rate: 22, weather: "暴雨" },
      { rate: 22, weather: "妖雾" },
      { rate: 22, weather: "雷雨" },
      { rate: -1, weather: "小雪" },
    ],
  },
};

var EorzeaClock = /* @class */ (function() {
  function EorzeaClock(ts) {
    if (ts === void 0) {
      ts = undefined;
    }
    if (ts !== undefined) {
      this.date = new Date(ts);
    } else {
      this.date = new Date((new Date()).getTime() * EorzeaClock.ratio);
    }
  }

  EorzeaClock.prototype.getHours = function() {
    return this.date.getUTCHours();
  };
  EorzeaClock.prototype.addHours = function(hourspan) {
    return new EorzeaClock(this.date.getTime() + hourspan * 3600000);
  };
  EorzeaClock.prototype.getMinutes = function() {
    return this.date.getUTCMinutes();
  };
  EorzeaClock.prototype.getDays = function() {
    return Math.floor(this.date.getTime() / 86400000);
  };
  EorzeaClock.prototype.getLocalTime = function() {
    return new Date(this.date.getTime() / EorzeaClock.ratio);
  };
  EorzeaClock.prototype.toHourMinuteString = function() {
    var hour = this.getHours();
    var hs = "";
    if (hour < 10) {
      hs = "0" + hour;
    } else {
      hs += hour;
    }
    var min = this.getMinutes();
    var ms = "";
    if (min < 10) {
      ms = "0" + min;
    } else {
      ms += min;
    }
    return hs + ":" + ms;
  };
  EorzeaClock.ratio = 1440 / 70;
  return EorzeaClock;
}());

var EorzeaWeather = /* @class */ (function() {
  function EorzeaWeather() {}

  EorzeaWeather.calcBaseDate = function(time) {
    var tempDate = new EorzeaClock(time.date.getTime());
    var bh = tempDate.getHours() - tempDate.getHours() % 8;
    tempDate.date.setUTCHours(bh);
    tempDate.date.setMinutes(0);
    tempDate.date.setSeconds(0);
    return tempDate;
  };
  EorzeaWeather.forecastSeed = function(time, initSeeds) {
    if (initSeeds === void 0) {
      initSeeds = [0];
    }

    function calcSeed(base) {
      var step1 = (base << 11 ^ base) >>> 0;
      var step2 = (step1 >>> 8 ^ step1) >>> 0;
      return step2 % 100;
    }

    return initSeeds
      .map(function(x) {
        return time.addHours(8 * x);
      })
      .map(function(t) {
        return t.getDays() * 100 + (t.getHours() + 8 - t.getHours() % 8) % 24;
      })
      .map(function(i) {
        return calcSeed(i);
      });
  };
  EorzeaWeather.getForecast = function(areaName, seeds) {
    function getWeather(rates, seed) {
      for (var _i = 0, rates_1 = rates; _i < rates_1.length; _i++) {
        var r = rates_1[_i];
        if (r.rate === -1) {
          return r.weather;
        }
        if (seed < r.rate) {
          return r.weather;
        } else {
          seed -= r.rate;
        }
      }
      return "N/A";
    }

    try {
      var areaRateData_1 = EorzeaAreaWeather[areaName];
      return seeds.map(function(s) {
        return getWeather(areaRateData_1.weatherRate, s);
      });
    } catch (err) {
      throw new ReferenceError("requested area name is not exist.");
    }
  };
  return EorzeaWeather;
}());