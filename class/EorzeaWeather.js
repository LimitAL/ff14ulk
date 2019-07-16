const EorzeaClock = require('./EorzeaClock.js');
const EorzeaAreaWeather = require('../data/eorzeaAreaWeather.js');
module.exports = class EorzeaWeather {
  constructor() {}
  calcBaseDate(time) {
    var tempDate = new EorzeaClock(time.date.getTime());
    var bh = tempDate.getHours() - tempDate.getHours() % 8;
    tempDate.date.setUTCHours(bh);
    tempDate.date.setMinutes(0);
    tempDate.date.setSeconds(0);
    return tempDate;
  }
  forecastSeed(time, initSeeds) {
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
  }
  getForecast(areaName, seeds) {
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
  }
}