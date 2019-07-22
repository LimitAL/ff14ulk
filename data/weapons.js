class WeaponClass {
  constructor(id, name, icon) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
}

const weaponIcon = {
  PLD: [
    new WeaponClass(0, '嘉拉汀', 'Galatyn'),
    new WeaponClass(1, '嘉拉汀+1', 'Galatyn'),
    new WeaponClass(2, '嘉拉汀+2', 'Galatyn'),
    new WeaponClass(3, '嘉拉汀·常风', 'Galatyn'),
    new WeaponClass(4, '嘉拉汀·恒冰', 'Galatyn'),
    new WeaponClass(5, '嘉拉汀·恒冰+1', 'Galatyn'),
    new WeaponClass(6, '元素长剑', 'ElementalSword'),
    new WeaponClass(7, '元素长剑+1', 'ElementalSword'),
    new WeaponClass(8, '元素长剑+2', 'ElementalSword'),
    new WeaponClass(9, '涌火长剑', 'ElementalSword'),
    new WeaponClass(10, '丰水长剑', 'ElementalSword'),
    new WeaponClass(11, '丰水长剑+1', 'ElementalSword'),
    new WeaponClass(12, '安忒亚', 'Antea'),
    new WeaponClass(13, '安忒亚·优雷卡', 'Antea'),
    new WeaponClass(14, '安忒亚·改', 'Antea')
  ],
  WAR: [
    new WeaponClass(15, '伐煞斧', 'Farsha'),
    new WeaponClass(16, '伐煞斧+1', 'Farsha'),
    new WeaponClass(17, '伐煞斧+2', 'Farsha'),
    new WeaponClass(18, '伐煞斧·常风', 'Farsha'),
    new WeaponClass(19, '伐煞斧·恒冰', 'Farsha'),
    new WeaponClass(20, '伐煞斧·恒冰+1', 'Farsha'),
    new WeaponClass(21, '元素战斧', 'ElementalBattleaxe'),
    new WeaponClass(22, '元素战斧+1', 'ElementalBattleaxe'),
    new WeaponClass(23, '元素战斧+2', 'ElementalBattleaxe'),
    new WeaponClass(24, '涌火战斧', 'ElementalBattleaxe'),
    new WeaponClass(25, '丰水战斧', 'ElementalBattleaxe'),
    new WeaponClass(26, '丰水战斧+1', 'ElementalBattleaxe'),
    new WeaponClass(27, '沙玛什', 'Shamash'),
    new WeaponClass(28, '沙玛什·优雷卡', 'Shamash'),
    new WeaponClass(29, '沙玛什·改', 'Shamash')
  ],
  DRK: [
    new WeaponClass(30, '斩裂剑卡拉德博尔格', 'Caladbolg'),
    new WeaponClass(31, '斩裂剑卡拉德博尔格+1', 'Caladbolg'),
    new WeaponClass(32, '斩裂剑卡拉德博尔格+2', 'Caladbolg'),
    new WeaponClass(33, '斩裂剑卡拉德博尔格·常风', 'Caladbolg'),
    new WeaponClass(34, '斩裂剑卡拉德博尔格·恒冰', 'Caladbolg'),
    new WeaponClass(35, '斩裂剑卡拉德博尔格·恒冰+1', 'Caladbolg'),
    new WeaponClass(36, '元素断头剑', 'ElementalGuillotine'),
    new WeaponClass(37, '元素断头剑+1', 'ElementalGuillotine'),
    new WeaponClass(38, '元素断头剑+2', 'ElementalGuillotine'),
    new WeaponClass(39, '涌火断头剑', 'ElementalGuillotine'),
    new WeaponClass(40, '丰水断头剑', 'ElementalGuillotine'),
    new WeaponClass(41, '丰水断头剑+1', 'ElementalGuillotine'),
    new WeaponClass(42, '剑鱼', 'Xiphias'),
    new WeaponClass(43, '剑鱼·优雷卡', 'Xiphias'),
    new WeaponClass(44, '剑鱼·改', 'Xiphias')
  ],
  MNK: [
    new WeaponClass(45, '善见神轮', 'SudarshanaChakra'),
    new WeaponClass(46, '善见神轮+1', 'SudarshanaChakra'),
    new WeaponClass(47, '善见神轮+2', 'SudarshanaChakra'),
    new WeaponClass(48, '善见神轮·常风', 'SudarshanaChakra'),
    new WeaponClass(49, '善见神轮·恒冰', 'SudarshanaChakra'),
    new WeaponClass(50, '善见神轮·恒冰+1', 'SudarshanaChakra'),
    new WeaponClass(51, '元素指虎', 'ElementalKnuckles'),
    new WeaponClass(52, '元素指虎+1', 'ElementalKnuckles'),
    new WeaponClass(53, '元素指虎+2', 'ElementalKnuckles'),
    new WeaponClass(54, '涌火指虎', 'ElementalKnuckles'),
    new WeaponClass(55, '丰水指虎', 'ElementalKnuckles'),
    new WeaponClass(56, '丰水指虎+1', 'ElementalKnuckles'),
    new WeaponClass(57, '杜穆齐德', 'Dumuzis'),
    new WeaponClass(58, '杜穆齐德·优雷卡', 'Dumuzis'),
    new WeaponClass(59, '杜穆齐德·改', 'Dumuzis')
  ],
  DRG: [
    new WeaponClass(60, '龙须', 'Ryunohige'),
    new WeaponClass(61, '龙须+1', 'Ryunohige'),
    new WeaponClass(62, '龙须+2', 'Ryunohige'),
    new WeaponClass(63, '龙须·常风', 'Ryunohige'),
    new WeaponClass(64, '龙须·恒冰', 'Ryunohige'),
    new WeaponClass(65, '龙须·恒冰+1', 'Ryunohige'),
    new WeaponClass(66, '元素龙枪', 'ElementalLance'),
    new WeaponClass(67, '元素龙枪+1', 'ElementalLance'),
    new WeaponClass(68, '元素龙枪+2', 'ElementalLance'),
    new WeaponClass(69, '涌火龙枪', 'ElementalLance'),
    new WeaponClass(70, '丰水龙枪', 'ElementalLance'),
    new WeaponClass(71, '丰水龙枪+1', 'ElementalLance'),
    new WeaponClass(72, '璎珞蛇', 'Daboya'),
    new WeaponClass(73, '璎珞蛇·优雷卡', 'Daboya'),
    new WeaponClass(74, '璎珞蛇·改', 'Daboya')
  ],
  NIN: [
    new WeaponClass(75, '息风', 'Nagi'),
    new WeaponClass(76, '息风+1', 'Nagi'),
    new WeaponClass(77, '息风+2', 'Nagi'),
    new WeaponClass(78, '息风·常风', 'Nagi'),
    new WeaponClass(79, '息风·恒冰', 'Nagi'),
    new WeaponClass(80, '息风·恒冰+1', 'Nagi'),
    new WeaponClass(81, '元素匕首', 'ElementalKnives'),
    new WeaponClass(82, '元素匕首+1', 'ElementalKnives'),
    new WeaponClass(83, '元素匕首+2', 'ElementalKnives'),
    new WeaponClass(84, '涌火匕首', 'ElementalKnives'),
    new WeaponClass(85, '丰水匕首', 'ElementalKnives'),
    new WeaponClass(86, '丰水匕首+1', 'ElementalKnives'),
    new WeaponClass(87, '鹊', 'Kasasagi'),
    new WeaponClass(88, '鹊·优雷卡', 'Kasasagi'),
    new WeaponClass(89, '鹊·改', 'Kasasagi')
  ],
  SMR: [
    new WeaponClass(90, '菊一文字', 'Kiku-ichimonji'),
    new WeaponClass(91, '菊一文字+1', 'Kiku-ichimonji'),
    new WeaponClass(92, '菊一文字+2', 'Kiku-ichimonji'),
    new WeaponClass(93, '菊一文字·常风', 'Kiku-ichimonji'),
    new WeaponClass(94, '菊一文字·恒冰', 'Kiku-ichimonji'),
    new WeaponClass(95, '菊一文字·恒冰+1', 'Kiku-ichimonji'),
    new WeaponClass(96, '元素武士刀', 'ElementalBlade'),
    new WeaponClass(97, '元素武士刀+1', 'ElementalBlade'),
    new WeaponClass(98, '元素武士刀+2', 'ElementalBlade'),
    new WeaponClass(99, '涌火武士刀', 'ElementalBlade'),
    new WeaponClass(100, '丰水武士刀', 'ElementalBlade'),
    new WeaponClass(101, '丰水武士刀+1', 'ElementalBlade'),
    new WeaponClass(102, '鸟头太刀', 'Torigashira'),
    new WeaponClass(103, '鸟头太刀·优雷卡', 'Torigashira'),
    new WeaponClass(104, '鸟头太刀·改', 'Torigashira')
  ],
  BRD: [
    new WeaponClass(105, '必中琴弓', 'Failnaught'),
    new WeaponClass(106, '必中琴弓+1', 'Failnaught'),
    new WeaponClass(107, '必中琴弓+2', 'Failnaught'),
    new WeaponClass(108, '必中琴弓·常风', 'Failnaught'),
    new WeaponClass(109, '必中琴弓·恒冰', 'Failnaught'),
    new WeaponClass(110, '必中琴弓·恒冰+1', 'Failnaught'),
    new WeaponClass(111, '元素竖琴弓', 'ElementalHarpBow'),
    new WeaponClass(112, '元素竖琴弓+1', 'ElementalHarpBow'),
    new WeaponClass(113, '元素竖琴弓+2', 'ElementalHarpBow'),
    new WeaponClass(114, '涌火竖琴弓', 'ElementalHarpBow'),
    new WeaponClass(115, '丰水竖琴弓', 'ElementalHarpBow'),
    new WeaponClass(116, '丰水竖琴弓+1', 'ElementalHarpBow'),
    new WeaponClass(117, '泽鹰', 'Circinae'),
    new WeaponClass(118, '泽鹰·优雷卡', 'Circinae'),
    new WeaponClass(119, '泽鹰·改', 'Circinae')
  ],
  MCH: [
    new WeaponClass(120, '外来者', 'Outsider'),
    new WeaponClass(121, '外来者+1', 'Outsider'),
    new WeaponClass(122, '外来者+2', 'Outsider'),
    new WeaponClass(123, '外来者·常风', 'Outsider'),
    new WeaponClass(124, '外来者·恒冰', 'Outsider'),
    new WeaponClass(125, '外来者·恒冰+1', 'Outsider'),
    new WeaponClass(126, '元素手炮', 'ElementalHandgonne'),
    new WeaponClass(127, '元素手炮+1', 'ElementalHandgonne'),
    new WeaponClass(128, '元素手炮+2', 'ElementalHandgonne'),
    new WeaponClass(129, '涌火手炮', 'ElementalHandgonne'),
    new WeaponClass(130, '丰水手炮', 'ElementalHandgonne'),
    new WeaponClass(131, '丰水手炮+1', 'ElementalHandgonne'),
    new WeaponClass(132, '玛丽弗里斯', 'Mollfrith'),
    new WeaponClass(133, '玛丽弗里斯·优雷卡', 'Mollfrith'),
    new WeaponClass(134, '玛丽弗里斯·改', 'Mollfrith')
  ],
  BLM: [
    new WeaponClass(135, '破坏之杖', 'Vanargand'),
    new WeaponClass(136, '破坏之杖+1', 'Vanargand'),
    new WeaponClass(137, '破坏之杖+2', 'Vanargand'),
    new WeaponClass(138, '破坏之杖·常风', 'Vanargand'),
    new WeaponClass(139, '破坏之杖·恒冰', 'Vanargand'),
    new WeaponClass(140, '破坏之杖·恒冰+1', 'Vanargand'),
    new WeaponClass(141, '元素法杖', 'ElementalRod'),
    new WeaponClass(142, '元素法杖+1', 'ElementalRod'),
    new WeaponClass(143, '元素法杖+2', 'ElementalRod'),
    new WeaponClass(144, '涌火法杖', 'ElementalRod'),
    new WeaponClass(145, '丰水法杖', 'ElementalRod'),
    new WeaponClass(146, '丰水法杖+1', 'ElementalRod'),
    new WeaponClass(147, '座头鲸', 'Paikea'),
    new WeaponClass(148, '座头鲸·优雷卡', 'Paikea'),
    new WeaponClass(149, '座头鲸·改', 'Paikea')
  ],
  SMN: [
    new WeaponClass(150, '雷蒙盖顿', 'Lemegeton'),
    new WeaponClass(151, '雷蒙盖顿+1', 'Lemegeton'),
    new WeaponClass(152, '雷蒙盖顿+2', 'Lemegeton'),
    new WeaponClass(153, '雷蒙盖顿·常风', 'Lemegeton'),
    new WeaponClass(154, '雷蒙盖顿·恒冰', 'Lemegeton'),
    new WeaponClass(155, '雷蒙盖顿·恒冰+1', 'Lemegeton'),
    new WeaponClass(156, '元素魔导书', 'ElementalGrimoire'),
    new WeaponClass(157, '元素魔导书+1', 'ElementalGrimoire'),
    new WeaponClass(158, '元素魔导书+2', 'ElementalGrimoire'),
    new WeaponClass(159, '涌火魔导书', 'ElementalGrimoire'),
    new WeaponClass(160, '丰水魔导书', 'ElementalGrimoire'),
    new WeaponClass(161, '丰水魔导书+1', 'ElementalGrimoire'),
    new WeaponClass(162, '图亚', 'Tuah'),
    new WeaponClass(163, '图亚·优雷卡', 'Tuah'),
    new WeaponClass(164, '图亚·改', 'Tuah')
  ],
  RDM: [
    new WeaponClass(165, '死印剑', 'Murgleis'),
    new WeaponClass(166, '死印剑+1', 'Murgleis'),
    new WeaponClass(167, '死印剑+2', 'Murgleis'),
    new WeaponClass(168, '死印剑·常风', 'Murgleis'),
    new WeaponClass(169, '死印剑·恒冰', 'Murgleis'),
    new WeaponClass(170, '死印剑·恒冰+1', 'Murgleis'),
    new WeaponClass(171, '元素刺剑', 'ElementalTuck'),
    new WeaponClass(172, '元素刺剑+1', 'ElementalTuck'),
    new WeaponClass(173, '元素刺剑+2', 'ElementalTuck'),
    new WeaponClass(174, '涌火刺剑', 'ElementalTuck'),
    new WeaponClass(175, '丰水刺剑', 'ElementalTuck'),
    new WeaponClass(176, '丰水刺剑+1', 'ElementalTuck'),
    new WeaponClass(177, '布鲁奈罗', 'Brunello'),
    new WeaponClass(178, '布鲁奈罗·优雷卡', 'Brunello'),
    new WeaponClass(178, '布鲁奈罗·改', 'Brunello')
  ],
  WHM: [
    new WeaponClass(180, '驱除之杖', 'Aymur'),
    new WeaponClass(181, '驱除之杖+1', 'Aymur'),
    new WeaponClass(182, '驱除之杖+2', 'Aymur'),
    new WeaponClass(183, '驱除之杖·常风', 'Aymur'),
    new WeaponClass(184, '驱除之杖·恒冰', 'Aymur'),
    new WeaponClass(185, '驱除之杖·恒冰+1', 'Aymur'),
    new WeaponClass(186, '元素牧杖', 'ElementalCane'),
    new WeaponClass(187, '元素牧杖+1', 'ElementalCane'),
    new WeaponClass(188, '元素牧杖+2', 'ElementalCane'),
    new WeaponClass(189, '涌火牧杖', 'ElementalCane'),
    new WeaponClass(190, '丰水牧杖', 'ElementalCane'),
    new WeaponClass(191, '丰水牧杖+1', 'ElementalCane'),
    new WeaponClass(192, '夜蔷薇', 'RoseCouverte'),
    new WeaponClass(193, '夜蔷薇·优雷卡', 'RoseCouverte'),
    new WeaponClass(194, '夜蔷薇·改', 'RoseCouverte')
  ],
  SCH: [
    new WeaponClass(195, '工具论', 'Organum'),
    new WeaponClass(196, '工具论+1', 'Organum'),
    new WeaponClass(197, '工具论+2', 'Organum'),
    new WeaponClass(198, '工具论·常风', 'Organum'),
    new WeaponClass(199, '工具论·恒冰', 'Organum'),
    new WeaponClass(200, '工具论·恒冰+1', 'Organum'),
    new WeaponClass(201, '元素魔导典', 'ElementalCodex'),
    new WeaponClass(202, '元素魔导典+1', 'ElementalCodex'),
    new WeaponClass(203, '元素魔导典+2', 'ElementalCodex'),
    new WeaponClass(204, '涌火魔导典', 'ElementalCodex'),
    new WeaponClass(205, '丰水魔导典', 'ElementalCodex'),
    new WeaponClass(206, '丰水魔导典+1', 'ElementalCodex'),
    new WeaponClass(207, '杰巴特', 'Jebat'),
    new WeaponClass(208, '杰巴特·优雷卡', 'Jebat'),
    new WeaponClass(209, '杰巴特·改', 'Jebat')
  ],
  AST: [
    new WeaponClass(210, '昴星团天仪', 'Pleiades'),
    new WeaponClass(211, '昴星团天仪+1', 'Pleiades'),
    new WeaponClass(212, '昴星团天仪+2', 'Pleiades'),
    new WeaponClass(213, '昴星团天仪·常风', 'Pleiades'),
    new WeaponClass(214, '昴星团天仪·恒冰', 'Pleiades'),
    new WeaponClass(215, '昴星团天仪·恒冰+1', 'Pleiades'),
    new WeaponClass(216, '元素天仪', 'ElementalAstrometer'),
    new WeaponClass(217, '元素天仪+1', 'ElementalAstrometer'),
    new WeaponClass(218, '元素天仪+2', 'ElementalAstrometer'),
    new WeaponClass(219, '涌火天仪', 'ElementalAstrometer'),
    new WeaponClass(220, '丰水天仪', 'ElementalAstrometer'),
    new WeaponClass(221, '丰水天仪+1', 'ElementalAstrometer'),
    new WeaponClass(222, '辇道增七', 'Albireo'),
    new WeaponClass(223, '辇道增七·优雷卡', 'Albireo'),
    new WeaponClass(224, '辇道增七·改', 'Albireo')
  ],
}

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
    this.weapons = new Object();
    for (let i in weaponIcon) {
      this.weapons[i] = weaponIcon[i][id];
    }
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