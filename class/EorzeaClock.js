module.exports = class EorzeaClock {
  ratio = 1440 / 70;
  constructor(ts) {
    if (ts === void 0) {
      ts = undefined;
    }
    if (ts !== undefined) {
      this.date = new Date(ts);
    } else {
      this.date = new Date((new Date()).getTime() * this.ratio);
    }
  }
  getHours() {
    return this.date.getUTCHours();
  }
  addHours(hourspan) {
    return new EorzeaClock(this.date.getTime() + hourspan * 3600000);
  }
  getMinutes() {
    return this.date.getUTCMinutes();
  }
  getDays() {
    return Math.floor(this.date.getTime() / 86400000);
  }
  getLocalTime() {
    return new Date(this.date.getTime() / this.ratio);
  }
  toHourMinuteString() {
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
  }
}