/*
 * 加载参数 问号
 * @param key 参数键
 * @returns {*} 参数值
 */
function loadUrlParams(key) {
  var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r !== null) return unescape(r[2]);
  return null;
}

function getLocalTime(nS) {
  //将时间戳（十三位时间搓，也就是带毫秒的时间搓）转换成时间格式
  // d.cTime = 1539083829787
  let date = new Date(nS);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  date = year + '-' + month + '-' + day;
  console.log(date); // 2018-10-09
  return date;
}