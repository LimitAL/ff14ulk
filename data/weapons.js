const materials = {
  0: { name: '乱属性水晶', icon: 'lsxsj' },
  1: { name: '帕祖祖的羽毛', icon: 'pzzdym' },
  2: { name: '结冰乱属性水晶', icon: 'jblsxsj' },
  3: { name: '恒冰水晶', icon: 'crystal-hb' },
  4: { name: '娄希的冰片', icon: 'lxdbp' },
  5: { name: '涌火水晶', icon: 'crystal-yh' },
  6: { name: '彭忒西勒亚的火种', icon: 'ptxlydhz' },
  7: { name: '丰水水晶', icon: 'crystal-fs' },
  8: { name: '水晶龙之鳞', icon: 'sjlzl' },
  9: { name: '优雷卡的断片', icon: 'ulkddp' },
};
class WeaponStage {
  constructor(id, name, area, materials, beforeLevel, afterLevel) {
    this.id = id;
    this.name = name;
    this.area = area;
    this.materials = new Array();
    for (let i = 0; i < materials.length; i++) {
      this.materials.push(new MaterialsClass(...materials[i].split('|')));
    }
    this.beforeLevel = beforeLevel;
    this.afterLevel = afterLevel;
  }
}

class MaterialsClass {
  constructor(id, number) {
    this.id = id;
    this.number = number;
    this.icon = materials[id].icon;
    this.name = materials[id].name;
  }
}

module.exports = {
  anemos: [
    new WeaponStage(0, '特职武器', 'anemos', ['0|100'], 290, 335),
    new WeaponStage(1, '特职武器+1', 'anemos', ['0|400'], 335, 340),
    new WeaponStage(2, '特职武器+2', 'anemos', ['0|800'], 340, 345),
    new WeaponStage(3, '常风武器', 'anemos', ['1|3'], 345, 355),
  ],
  pagos: [
    new WeaponStage(4, '恒冰武器', 'pagos', ['2|5'], 355, 360),
    new WeaponStage(5, '恒冰武器+1', 'pagos', ['2|10', '3|500'], 360, 365),
    new WeaponStage(6, '元素武器', 'pagos', ['2|16', '4|5'], 360, 370),
  ],
  pyros: [
    new WeaponStage(7, '元素武器+1', 'pyros', ['5|150'], 370, 375),
    new WeaponStage(8, '元素武器+2', 'pyros', ['5|200'], 375, 380),
    new WeaponStage(9, '涌火武器', 'pyros', ['5|300', '6|5'], 380, 385),
  ],
  hydatos: [
    new WeaponStage(10, '丰水武器', 'hydatos', ['7|50'], 385, 390),
    new WeaponStage(11, '丰水武器+1', 'hydatos', ['7|100'], 390, 395),
    new WeaponStage(12, '优雷卡武器', 'hydatos', ['7|100'], 395, 400),
    new WeaponStage(13, '优雷卡武器·优雷卡', 'hydatos', ['7|100', '8|5'], 400, 405),
    new WeaponStage(14, '优雷卡武器·改', 'hydatos', ['9|100'], 405, 405)
  ]
}