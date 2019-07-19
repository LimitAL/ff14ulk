const EorzeaAreaWeather = {
  anemos: {
    name: "优雷卡 常风之地",
    name_sm: "常风",
    weatherRate: [
      { rate: 30, weather: "晴朗" },
      { rate: 30, weather: "强风" },
      { rate: 30, weather: "暴雨" },
      { rate: -1, weather: "小雪" },
    ],
  },
  pagos: {
    name: "优雷卡 恒冰之地",
    name_sm: "恒冰",
    weatherRate: [
      { rate: 10, weather: "晴朗" },
      { rate: 18, weather: "薄雾" },
      { rate: 18, weather: "热浪" },
      { rate: 18, weather: "小雪" },
      { rate: 18, weather: "打雷" },
      { rate: -1, weather: "暴雪" },
    ],
  },
  pyros: {
    name: "优雷卡 涌火之地",
    name_sm: "涌火",
    weatherRate: [
      { rate: 10, weather: "晴朗" },
      { rate: 18, weather: "热浪" },
      { rate: 18, weather: "暴雷" },
      { rate: 18, weather: "暴雪" },
      { rate: 18, weather: "灵风" },
      { rate: -1, weather: "小雪" },
    ],
  },
  hydatos: {
    name: "优雷卡 丰水之地",
    name_sm: "丰水",
    weatherRate: [
      { rate: 12, weather: "晴朗" },
      { rate: 22, weather: "暴雨" },
      { rate: 22, weather: "妖雾" },
      { rate: 22, weather: "雷雨" },
      { rate: -1, weather: "小雪" },
    ],
  },
};

module.exports = EorzeaAreaWeather;