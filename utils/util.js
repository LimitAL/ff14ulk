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
  if (result.description) {
    result.description = result.description.split("|");
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

function getLocalTime(date) {
  let nS = Number(date);
  return new Date(parseInt(nS)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}

function miniTo(key) {
  wx.navigateToMiniProgram({
    appId: 'wx895a7377514cce46',
    path: 'page/itemDetail/itemDetail',
    extraData: {
      type: 'Item',
      value: key
    }
  });
}

module.exports = {
  formatTime: formatTime,
  processFromData,
  getLocalTime,
  miniTo
}