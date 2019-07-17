const setStorage = function(key, data, callback = null) {
  wx.setStorage({
    key: key,
    data: data,
    success: function(res) {
      if (callback) callback(res);
    }
  });
}

const getStorage = function(key, callback) {
  wx.getStorage({
    key: key,
    success: function(res) {
      // success
      callback(res.data);
    },
    fail: function() {
      // fail
      callback(null);
    }
  })
}

module.exports = {
  setStorage: setStorage,
  getStorage: getStorage
}