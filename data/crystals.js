const source = {
  hydatos: {
    1: '幸福兔：黄金宝箱',
    2: '幸福兔：白银宝箱',
    3: '幸福兔：青铜宝箱',
    4: '不会变异的元精',
    5: '雪元精（52级）',
    6: '不死元精（58级）',
    7: '元精岛',
    8: '适应后的雷元精（53级）',
    9: '适应后的筑巢祖（63级）',
    10: '发生变异的浸水上锁宝箱',
    11: 'NM',
    12: '30连锁',
    13: '兵武塔宝箱'
  },
  pyros: {
    1: '幸福兔：黄金宝箱',
    2: '幸福兔：白银宝箱',
    3: '幸福兔：青铜宝箱',
    4: '当前或更高等级的元精',
    5: '雷暴元精（41级）',
    6: '30连锁',
    7: 'NM',
    8: '发生变异的燃烧上锁宝箱',
    9: '适应后的雷暴元精（52、54级）',
    10: '适应后的台风元精（55级）',
    11: '雷暴元精（46级）',
    12: '适应后的余烬元精（43级）',
    13: '适应后的雷暴元精（46级）',
    14: '适应后的不死系怪物'
  }
}

let getHydatos = function(...params) {
  let data = new Array();
  params.forEach(item => { // [4]
    data.push(source.hydatos[item]);
  });
  return data;
}

let getPyros = function(...params) {
  let data = new Array();
  params.forEach(item => {
    data.push(source.pyros[item]);
  });
  return data;
}

const crystals = [{
  id: 1,
  name: '新锐',
  data: [1, 2, 3, 32, 38, 26, 16],
  from: {
    hydatos: getHydatos(4),
    pyros: getPyros(4, 3)
  }
}, {
  id: 1,
  name: '熟练',
  data: [12, 23, 37, 27, 39],
  from: {
    hydatos: getHydatos(5, 6, 7),
    pyros: getPyros(3, 5, 6)
  }
}, {
  id: 1,
  name: '攻势',
  data: [6, 28],
  from: {
    hydatos: getHydatos(1),
    pyros: getPyros(1, 8, 9)
  }
}, {
  id: 1,
  name: '守势',
  data: [4, 11],
  from: {
    hydatos: getHydatos(3),
    pyros: getPyros(7, 1, 8)
  }
}, {
  id: 1,
  name: '治愈',
  data: [33, 5],
  from: {
    hydatos: getHydatos(3),
    pyros: getPyros(2, 7)
  }
}, {
  id: 1,
  name: '斥候',
  data: [19, 24],
  from: {
    hydatos: getHydatos(),
    pyros: getPyros()
  }
}, {
  id: 1,
  name: '妨碍',
  data: [20, 22],
  from: {
    hydatos: getHydatos(10),
    pyros: getPyros(8)
  }
}, {
  id: 1,
  name: '支援',
  data: [34, 13],
  from: {
    hydatos: getHydatos(2),
    pyros: getPyros(11, 12, 13, 14)
  }
}, {
  id: 1,
  name: '封印',
  data: [48, 50, 49, 10],
  from: {
    hydatos: getHydatos(11, 12, 13),
    pyros: getPyros()
  }
}];

module.exports = {
  crystals: crystals
}