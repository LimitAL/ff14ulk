const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const processFromData = (data, skills) => {
  let result = new Object();
  for (let i in data) {
    if (i !== "from") {
      result[i] = data[i];
    }
  }
  result.from = new Array();
  let arr = new Array();
  data.from.forEach(element => {
    arr = new Array();
    element.forEach(item => {
      arr.push({
        num: item.num,
        fid: item.fid,
        obj: skills.find(e => {
          return e.id == item.fid
        })
      });
    });
    result.from.push(arr);
  });
  return result;
}

function getLocalTime(nS) {
  //将时间戳（十三位时间戳，也就是带毫秒的时间戳）转换成时间格式
  // d.cTime = 1539083829787
  let date = new Date(nS);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  date = year + '-' + month + '-' + day;
  return date;
}

module.exports = {
  formatTime: formatTime,
  processFromData,
  getLocalTime
}