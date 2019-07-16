$(function() {
  var lastETHours = null,
    hashFlag = false;

  function loop() {
    var ET = new EorzeaClock(undefined);
    $('#timer').text(ET.toHourMinuteString());
    var lET = EorzeaWeather.calcBaseDate(new EorzeaClock(undefined)).getHours();
    if (lastETHours !== lET) {
      $('#anemos_list').empty();
      initAnemosNextWeather();
      $('#pagos_list').empty();
      initPagosNextWeather();
      $('#pyros_list').empty();
      initNextPyrosWeather();
      $('#pyros_hydatos').empty();
      initNextHydatosWeather();
      lastETHours = lET;
    }
    try {
      if (hashFlag === false && location.hash !== '' && $(location.hash)[0]) {
        $("html, body").animate({
          scrollTop: $(location.hash).offset().top
        }, 120);
      }
    } catch (e) {
      //
    }
    hashFlag = true;
  }

  setInterval(function() {
    loop();
  }, 1000);

  function initAnemosNextWeather() {
    var ET = new EorzeaClock(undefined); //艾欧泽亚时间
    var baseTime = EorzeaWeather.calcBaseDate(ET); //基础时间
    let weatherSeeds = EorzeaWeather.forecastSeed(ET, Array.from({ length: 6 }).map(function(_, i) { return i; })); // 生成100个种子
    var forecast = EorzeaWeather.getForecast("area.EurekaAnemos", weatherSeeds); // 获得时间种子
    for (var index in forecast) {
      var str = forecast[index];
      var base = baseTime.addHours(index * 8);
      var targetTime = base.getLocalTime();
      var min = targetTime.getMinutes();
      if (min < 10) min = '0' + min;
      var month = targetTime.getMonth() + 1;
      if (month < 10) month = '0' + month;
      var date = targetTime.getDate();
      if (date < 10) date = '0' + date;
      var hour = targetTime.getHours();
      if (hour < 10) hour = '0' + hour;
      var time = hour + ":" + min;
      date = month + "月" + date + "日 " + time;
      var eurekaHour = base.getHours();
      if (eurekaHour < 10) eurekaHour = '0' + eurekaHour;
      var eurekaMinutes = base.getMinutes();
      if (eurekaMinutes < 10) eurekaMinutes = '0' + eurekaMinutes;
      var eurekaTime = eurekaHour + ":" + eurekaMinutes;
      var imageUrl = "";
      switch (str) {
        case "晴朗":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_skies.png';
          break;
        case "暴雨":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_showers.png';
          break;
        case "小雪":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_snow.png';
          break;
        case "强风":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_gales.png';
          break;
      }
      var html = "<tr>" +
        "<td><img src='" + imageUrl + "'></td>" +
        "<td>" + (str === "强风" ? "<b>强风</b>" : str) + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + eurekaTime + "</td>" +
        "</tr>";
      $('#anemos_list').append(html);
    }
  }

  function initPagosNextWeather() {
    var ET = new EorzeaClock(undefined); //艾欧泽亚时间
    var baseTime = EorzeaWeather.calcBaseDate(ET); //基础时间
    let weatherSeeds = EorzeaWeather.forecastSeed(ET, Array.from({ length: 6 }).map(function(_, i) { return i; })); // 生成100个种子
    var forecast = EorzeaWeather.getForecast("area.EurekaPagos", weatherSeeds); // 获得时间种子
    for (var index in forecast) {
      var str = forecast[index];
      var base = baseTime.addHours(index * 8);
      var targetTime = base.getLocalTime();
      var min = targetTime.getMinutes();
      if (min < 10) min = '0' + min;
      var month = targetTime.getMonth() + 1;
      if (month < 10) month = '0' + month;
      var date = targetTime.getDate();
      if (date < 10) date = '0' + date;
      var hour = targetTime.getHours();
      if (hour < 10) hour = '0' + hour;
      var time = hour + ":" + min;
      date = month + "月" + date + "日 " + time;

      var eurekaHour = base.getHours();
      if (eurekaHour < 10) eurekaHour = '0' + eurekaHour;
      var eurekaMinutes = base.getMinutes();
      if (eurekaMinutes < 10) eurekaMinutes = '0' + eurekaMinutes;
      var eurekaTime = eurekaHour + ":" + eurekaMinutes;
      var imageUrl = null;
      switch (str) {
        case "晴朗":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_skies.png';
          break;
        case "薄雾":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_fog.png';
          break;
        case "热浪":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_blistering.png';
          break;
        case "小雪":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_snow.png';
          break;
        case "暴雷":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_thunder.png';
          break;
        case "暴雪":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_blizzardy.png';
          break;
      }
      var html = "<tr>" +
        "<td><img src='" + imageUrl + "'></td>" +
        "<td>" + (str === "暴雪" ? '<span style="border-bottom: 1px black solid;">暴雪</span>' : str) + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + eurekaTime + "</td>" +
        "</tr>";
      $('#pagos_list').append(html);
    }
  }

  function initNextPyrosWeather() {
    var ET = new EorzeaClock(undefined); //艾欧泽亚时间
    var baseTime = EorzeaWeather.calcBaseDate(ET); //基础时间
    let weatherSeeds = EorzeaWeather.forecastSeed(ET, Array.from({ length: 6 }).map(function(_, i) { return i; })); // 生成100个种子
    var forecast = EorzeaWeather.getForecast("area.EurekaPyros", weatherSeeds); // 获得时间种子
    for (var index in forecast) {
      var str = forecast[index];
      var base = baseTime.addHours(index * 8);
      var targetTime = base.getLocalTime();
      var min = targetTime.getMinutes();
      if (min < 10) min = '0' + min;
      var month = targetTime.getMonth() + 1;
      if (month < 10) month = '0' + month;
      var date = targetTime.getDate();
      if (date < 10) date = '0' + date;
      var hour = targetTime.getHours();
      if (hour < 10) hour = '0' + hour;
      var time = hour + ":" + min;
      date = month + "月" + date + "日 " + time;

      var eurekaHour = base.getHours();
      if (eurekaHour < 10) eurekaHour = '0' + eurekaHour;
      var eurekaMinutes = base.getMinutes();
      if (eurekaMinutes < 10) eurekaMinutes = '0' + eurekaMinutes;
      var eurekaTime = eurekaHour + ":" + eurekaMinutes;
      var imageUrl = null;
      switch (str) {
        case "晴朗":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_skies.png';
          break;
        case "灵风":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_UmbralWind.png';
          break;
        case "热浪":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_blistering.png';
          break;
        case "小雪":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_snow.png';
          break;
        case "打雷":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_thunder.png';
          break;
        case "暴雪":
          imageUrl = 'https://cdn.ffxivsc.cn/icon_blizzardy.png';
          break;
      }
      var html = "<tr>" +
        "<td><img src='" + imageUrl + "'></td>" +
        "<td>" + (str === "暴雪" ? '<span style="border-bottom: 1px black solid;">暴雪</span>' : str === "热浪" ? "<b>热浪</b>" : str) + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + eurekaTime + "</td>" +
        "</tr>";
      $('#pyros_list').append(html);
    }
  }

  function initNextHydatosWeather() {
    var ET = new EorzeaClock(undefined); //艾欧泽亚时间
    var baseTime = EorzeaWeather.calcBaseDate(ET); //基础时间
    let weatherSeeds = EorzeaWeather.forecastSeed(ET, Array.from({ length: 6 }).map(function(_, i) { return i; })); // 生成100个种子
    var forecast = EorzeaWeather.getForecast("area.EurekaHydatos", weatherSeeds); // 获得时间种子
    for (var index in forecast) {
      var str = forecast[index];
      var base = baseTime.addHours(index * 8);
      var targetTime = base.getLocalTime();
      var min = targetTime.getMinutes();
      if (min < 10) min = '0' + min;
      var month = targetTime.getMonth() + 1;
      if (month < 10) month = '0' + month;
      var date = targetTime.getDate();
      if (date < 10) date = '0' + date;
      var hour = targetTime.getHours();
      if (hour < 10) hour = '0' + hour;
      var time = hour + ":" + min;
      date = month + "月" + date + "日 " + time;

      var eurekaHour = base.getHours();
      if (eurekaHour < 10) eurekaHour = '0' + eurekaHour;
      var eurekaMinutes = base.getMinutes();
      if (eurekaMinutes < 10) eurekaMinutes = '0' + eurekaMinutes;
      var eurekaTime = eurekaHour + ":" + eurekaMinutes;
      var imageUrl = null;
      switch (str) {
        case "晴朗":
          imageUrl = 'https://api.ffxivsc.cn/EurekaIcon/FairSkies.png';
          break;
        case "小雪":
          imageUrl = 'https://api.ffxivsc.cn/EurekaIcon/Snow.png';
          break;
        case "暴雨":
          imageUrl = 'https://api.ffxivsc.cn/EurekaIcon/Showers.png';
          break;
        case "妖雾":
          imageUrl = "https://api.ffxivsc.cn/EurekaIcon/Gloom.png";
          break;
        case "雷雨":
          imageUrl = "https://api.ffxivsc.cn/EurekaIcon/Thunderstorms.png";
          break;
      }
      var html = "<tr>" +
        "<td><img src='" + imageUrl + "'></td>" +
        "<td>" + str + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + eurekaTime + "</td>" +
        "</tr>";
      $('#hydatos_list').append(html);
    }
  }

  $(".weather-copy").on("click", function() {
    var target = $(this).closest("section").next().find("tbody");
    var area = $(this).closest("section").find(".area").text();
    var result = buildWeather(target, area);
    var temp = $("<pre/>");
    temp.text(result);
    temp.css({
      position: "fixed",
      top: "101vh",
      left: "101vw",
      "z-index": "-1",
    });
    $("body").append(temp);
    var selection = window.getSelection();
    var backup = (selection + "").length === 0 ? null : selection.getRangeAt(0);
    selection.selectAllChildren(temp[0]);
    var cResult = document.execCommand("copy");
    if (cResult !== false) {
      spop({
        template: "复制成功！",
        autoclose: 2200,
        style: 'success',
      });
    } else {
      spop({
        template: "复制可能失败，请尝试粘贴，如果无法复制请自行复制",
        autoclose: 2200,
        style: 'warning',
      });
    }
    setTimeout(function() {
      selection.removeAllRanges();
      if (backup) selection.addRange(backup);
      temp.remove();
    }, 1);
  });

  function buildDate(date) {
    var month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    var day = date.getDate();
    if (day < 10) day = '0' + day;
    return month + "月" + day + "日";
  }

  function buildWeather(target, area) {
    var result = "/sh " + area;
    var _now = new Date(),
      today = buildDate(_now);
    _now.setTime(_now.getTime() + 24 * 60 * 60 * 1000);
    var tomorrow = buildDate(_now);
    target.find("tr:first").each(function() {
      var self = $(this);
      var weather = self.find("td").eq(1).text(),
        et = self.find("td").eq(3).text();
      var ET = new EorzeaClock(undefined); //艾欧泽亚时间
      var baseTime = EorzeaWeather.calcBaseDate(ET); //基础时间
      var diff = Math.round((baseTime.addHours(8).getLocalTime().getTime() - Date.now()) / 1000);
      var min = parseInt(diff / 60);
      var sec = diff % 60;
      result += '现在的天气：[' + weather + '](ET ' + et + '，还剩' + min + '分' + sec + '秒' + ') ';
    });
    result += '接下来的天气：';
    target.find("tr:not(:first)").each(function() {
      var self = $(this);
      var weather = self.find("td").eq(1).text(),
        time = self.find("td").eq(2).text().replace(today, "").replace(tomorrow, "明天").replace(/ /g, ''),
        et = self.find("td").eq(3).text();
      result += '[' + weather + ']' + time + '(ET ' + et + ') ';
    });
    return result + 'eureka.ffxivsc.cn/weather.htm';
  }
});