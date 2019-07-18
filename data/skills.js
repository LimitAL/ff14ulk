/*** 
 * @item [id] 
 * @item [name]        名称 
 * @item [from]        获得方式 
 * @item [access]      适用
 * @item [description] 描述 
 * @item [type]        类型 0:magic 1:battle 2:ability
 */

const skills = [{
  id: 1,
  name: '术士的记忆',
  name_en: 'ssdjy',
  from: [
    [{ fid: 1, num: 1 }]
  ],
  isDirect: true,
  access: ['H'],
  number: 3,
  description: '令自身发动魔法攻击造成的伤害提高60%|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 2,
  name: '斗士的记忆',
  name_en: 'dsdjy',
  from: [
    [{ fid: 2, num: 1 }]
  ],
  isDirect: true,
  access: ['T'],
  number: 3,
  description: '令自身发动物理攻击造成的伤害提高40%|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 3,
  name: '重骑兵的记忆',
  name_en: 'zqbdjy',
  from: [
    [{ fid: 3, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'H'],
  number: 3,
  description: '令自身防御力提高3000，并且最大体力提高50%|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 4,
  name: '守护者的记忆',
  name_en: 'shzdjy',
  from: [
    [{ fid: 4, num: 1 }],
    [{ fid: 3, num: 1 }, { fid: 12, num: 1 }],
    [{ fid: 3, num: 1 }, { fid: 34, num: 1 }],
    [{ fid: 3, num: 1 }, { fid: 38, num: 2 }],
    [{ fid: 34, num: 3 }]
  ],
  isDirect: true,
  access: ['T'],
  number: 3,
  description: '自身防御力提高1800，并且最大体力提高10%|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 5,
  name: '祭司的记忆',
  name_en: 'jsdjy',
  from: [
    [{ fid: 5, num: 1 }],
    [{ fid: 1, num: 1 }, { fid: 37, num: 1 }],
    [{ fid: 1, num: 1 }, { fid: 32, num: 2 }],
    [{ fid: 33, num: 3 }],
  ],
  isDirect: true,
  access: ['H'],
  number: 3,
  description: '令自身最大魔力提高50%，并且发动治疗魔法的治疗量提高25%|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 6,
  name: '武人的记忆',
  name_en: 'wrdjy',
  from: [
    [{ fid: 6, num: 1 }],
    [{ fid: 2, num: 1 }, { fid: 23, num: 1 }],
    [{ fid: 2, num: 3 }],
  ],
  isDirect: true,
  access: ['D'],
  number: 3,
  description: '令自身发动攻击造成的伤害提高12%|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 7,
  name: '斥候的记忆',
  name_en: 'chdjy',
  from: [
    [{ fid: 24, num: 2 }]
  ],
  isDirect: false,
  access: ['T'],
  number: 3,
  description: '以自身发动攻击造成的伤害降低5%为代价，令自身的回避率提高25%|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 8,
  name: '圣骑士的记忆',
  name_en: 'sqsdjy',
  from: [
    [{ fid: 6, num: 1 }, { fid: 33, num: 1 }],
    [{ fid: 6, num: 1 }, { fid: 34, num: 1 }],
    [{ fid: 3, num: 1 }, { fid: 32, num: 1 }, { fid: 34, num: 1 }]
  ],
  isDirect: false,
  access: ['H'],
  number: 3,
  description: '以自身发动攻击造成的伤害降低5%为代价，令自身的最大体力提高30%，并且发动治疗魔法的治疗量提高50%|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 9,
  name: '狂战士的记忆',
  name_en: 'kzsdjy',
  from: [
    [{ fid: 6, num: 1 }, { fid: 4, num: 1 }],
    [{ fid: 2, num: 1 }, { fid: 6, num: 1 }, { fid: 38, num: 1 }]
  ],
  isDirect: false,
  access: ['D'],
  number: 3,
  description: '以令自身魔法防御力降低60%为代价提高21%发动攻击造成的伤害|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 10,
  name: '盗贼的记忆',
  name_en: 'dzdjy',
  from: [
    [{ fid: 10, num: 1 }],
    [{ fid: 24, num: 3 }],
    [{ fid: 19, num: 3 }],
    [{ fid: 24, num: 1 }, { fid: 19, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: 3,
  description: '令自身回避率提高10%，并且移动速度提高、中毒耐性提高|移动速度提高效果对坐骑有效|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 11,
  name: '英杰的加护',
  name_en: 'yjdjh',
  from: [
    [{ fid: 11, num: 1 }],
    [{ fid: 2, num: 1 }, { fid: 4, num: 1 }],
    [{ fid: 1, num: 1 }, { fid: 2, num: 1 }, { fid: 3, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: 1,
  description: '令自身最大体力提高10%，并且命中率提高30%|持续时间内若陷入无法战斗状态，有70%的概率自动复活',
  type: 2,
  launch: 0,
  repeat: 10,
  keep: '180分钟'
}, {
  id: 12,
  name: '文理护盾',
  name_en: 'wlhd',
  from: [
    [{ fid: 12, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: null,
  description: '令目标的物理防御力提高1000',
  type: 0,
  launch: 2.5,
  repeat: 2.5,
  keep: '30分钟'
}, {
  id: 13,
  name: '文理魔盾',
  name_en: 'wlmd',
  from: [
    [{ fid: 13, num: 1 }],
    [{ fid: 12, num: 1 }, { fid: 37, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: null,
  description: '令目标的魔法防御力提高1000',
  type: 0,
  launch: 2.5,
  repeat: 2.5,
  keep: '30分钟'
}, {
  id: 14,
  name: '文理即死',
  name_en: 'wljs',
  from: [
    [{ fid: 22, num: 3 }],
    [{ fid: 39, num: 1 }, { fid: 22, num: 1 }],
    [{ fid: 1, num: 1 }, { fid: 39, num: 1 }, { fid: 16, num: 1 }],
    [{ fid: 39, num: 1 }, { fid: 27, num: 2 }]
  ],
  isDirect: false,
  access: ['D', 'T', 'H'],
  number: 30,
  description: '令目标陷入无法战斗状态|目标体力越少成功率越高',
  type: 0,
  launch: 5,
  repeat: 300,
  keep: null
}, {
  id: 15,
  name: '文理蓄力',
  name_en: 'wlxl',
  from: [
    [{ fid: 28, num: 3 }],
    [{ fid: 28, num: 1 }, { fid: 6, num: 1 }],
  ],
  isDirect: false,
  access: ['D', 'T', 'H'],
  number: 99,
  description: '对自身附加蓄力状态，最多可以积累16档|“蓄力”效果：效果时间内自身发动的1次战技威力提高，效果量为每档提高30%|与战技共享复唱时间',
  type: 2,
  launch: 0,
  repeat: 2.5,
  keep: '30秒'
}, {
  id: 16,
  name: '文理麻痹',
  name_en: 'wlmb',
  from: [
    [{ fid: 16, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: 99,
  description: '令目标陷入麻痹状态',
  type: 0,
  launch: 2.5,
  repeat: 2.5,
  keep: '60秒'
}, {
  id: 17,
  name: '文理强麻痹',
  name_en: 'wlqmb',
  from: [
    [{ fid: 16, num: 3 }],
    [{ fid: 16, num: 2 }, { fid: 1, num: 1 }],
    [{ fid: 16, num: 1 }, { fid: 20, num: 1 }]
  ],
  isDirect: false,
  access: ['D', 'T', 'H'],
  number: 99,
  description: '令目标及其周围敌人陷入麻痹状态',
  type: 0,
  launch: 2.5,
  repeat: 2.5,
  keep: '60秒'
}, {
  id: 18,
  name: '文理敏捷',
  name_en: 'wlmj',
  from: [
    [{ fid: 19, num: 2 }],
    [{ fid: 26, num: 2 }, { fid: 19, num: 1 }],
  ],
  isDirect: false,
  access: ['D', 'T', 'H'],
  number: 20,
  description: '令自身的移动速度大幅提高',
  type: 2,
  launch: 0,
  repeat: 90,
  keep: '10秒'
}, {
  id: 19,
  name: '文理飘羽步',
  name_en: 'wlpyb',
  from: [
    [{ fid: 19, num: 1 }],
    [{ fid: 23, num: 2 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: 50,
  description: '令自身的回避率提高15%',
  type: 2,
  launch: 0,
  repeat: 90,
  keep: '45秒'
}, {
  id: 20,
  name: '文理精神镖',
  name_en: 'wljsb',
  from: [
    [{ fid: 20, num: 1 }],
    [{ fid: 27, num: 1 }, { fid: 5, num: 1 }],
    [{ fid: 1, num: 1 }, { fid: 16, num: 1 }, { fid: 27, num: 1 }]
  ],
  isDirect: true,
  access: ['D'],
  number: 50,
  description: '对目标发动远距离物理攻击，威力：100|追加效果：受伤加重|受伤加重效果：目标所受伤害提高8%',
  type: 1,
  launch: 0,
  repeat: 2.5,
  keep: '60秒'
}, {
  id: 21,
  name: '文理天灾',
  name_en: 'wltz',
  from: [
    [{ fid: 20, num: 3 }],
    [{ fid: 28, num: 2 }],
    [{ fid: 4, num: 1 }, { fid: 20, num: 1 }],
  ],
  isDirect: false,
  access: ['D', 'T'],
  number: 3,
  description: '对自身周围的敌人发动范围魔法攻击|威力：4000|自身也会受到巨大伤害|对自身威力：999999',
  type: 2,
  launch: 0,
  repeat: 300,
  keep: null
}, {
  id: 22,
  name: '文理驱魔',
  name_en: 'wlqm',
  from: [
    [{ fid: 22, num: 1 }],
    [{ fid: 37, num: 3 }],
    [{ fid: 27, num: 3 }],
    [{ fid: 37, num: 1 }, { fid: 5, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'H'],
  number: null,
  description: '打消目标身上的一种强化状态',
  type: 0,
  launch: 2.5,
  repeat: 2.5,
  keep: null
}, {
  id: 23,
  name: '文理虚枪',
  name_en: 'wlxq',
  from: [
    [{ fid: 23, num: 1 }]
  ],
  isDirect: true,
  access: ['T', 'H'],
  number: null,
  description: '对目标发动物理攻击，威力：100|追加效果：令目标的回避率降低',
  type: 1,
  launch: 0,
  repeat: 2.5,
  keep: '60秒'
}, {
  id: 24,
  name: '文理潜行',
  name_en: 'wlqx',
  from: [
    [{ fid: 24, num: 1 }],
    [{ fid: 5, num: 1 }, { fid: 13, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: 50,
  description: '隐藏自己的身形，大多数敌人都无法发现自己|不过移动速度会降低50%|对部分特殊怪物无效|发动除冲刺以外的技能会取消该状态|发动条件：自身处于非战斗状态',
  type: 2,
  launch: 0,
  repeat: 15,
  keep: null
}, {
  id: 25,
  name: '文理以太步',
  name_en: 'wlytb',
  from: [
    [{ fid: 26, num: 1 }, { fid: 24, num: 1 }],
    [{ fid: 2, num: 1 }, { fid: 23, num: 1 }, { fid: 26, num: 1 }]
  ],
  isDirect: false,
  access: ['D', 'T', 'H'],
  number: 99,
  description: '自身快速移动到目标身边|止步状态下无法发动',
  type: 2,
  launch: 0,
  repeat: 5,
  keep: null
}, {
  id: 26,
  name: '文理后跳',
  name_en: 'wlht',
  from: [
    [{ fid: 26, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: 99,
  description: '向身后跳出10米距离|止步状态下无法发动',
  type: 2,
  launch: 0,
  repeat: 5,
  keep: null
}, {
  id: 27,
  name: '文理镇定',
  name_en: 'wlzd',
  from: [
    [{ fid: 27, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: 50,
  description: '令目标陷入眩晕状态',
  type: 2,
  launch: 0,
  repeat: 30,
  keep: '8秒'
}, {
  id: 28,
  name: '文理浴血',
  name_en: 'wlyx',
  from: [
    [{ fid: 28, num: 1 }],
    [{ fid: 32, num: 1 }, { fid: 6, num: 1 }],
    [{ fid: 2, num: 2 }, { fid: 32, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: 30,
  description: '一定时间内，将自身发动攻击造成伤害的一定比例转化为自身的体力',
  type: 2,
  launch: 0,
  repeat: 60,
  keep: '45秒'
}, {
  id: 29,
  name: '文理充能',
  name_en: 'wlcn',
  from: [
    [{ fid: 28, num: 1 }, { fid: 13, num: 1 }],
    [{ fid: 11, num: 1 }, { fid: 20, num: 1 }],
    [{ fid: 1, num: 1 }, { fid: 2, num: 1 }, { fid: 32, num: 1 }]
  ],
  isDirect: false,
  access: ['D', 'T', 'H'],
  number: 50,
  description: '恢复自身500点技力，并且恢复最大魔力50%',
  type: 2,
  launch: 0,
  repeat: 30,
  keep: null
}, {
  id: 30,
  name: '文理反攻',
  name_en: 'wlfg',
  from: [
    [{ fid: 6, num: 1 }, { fid: 19, num: 1 }],
    [{ fid: 2, num: 1 }, { fid: 38, num: 1 }, { fid: 19, num: 1 }]
  ],
  isDirect: false,
  access: ['T'],
  number: 50,
  description: '对目标发动物理攻击，威力：300|追加效果：减速20%|发动条件：回避之后',
  type: 2,
  launch: 0,
  repeat: 30,
  keep: '30秒'
}, {
  id: 31,
  name: '文理高速复唱',
  name_en: 'wlgsfc',
  from: [
    [{ fid: 32, num: 1 }, { fid: 37, num: 1 }, { fid: 23, num: 1 }],
    [{ fid: 22, num: 1 }, { fid: 37, num: 1 }]
  ],
  isDirect: false,
  access: ['D', 'T'],
  number: 50,
  description: '效果时间内，自身发动的1次能力类技能复唱时间缩短50%',
  type: 2,
  launch: 0,
  repeat: 90,
  keep: '15秒'
}, {
  id: 32,
  name: '文理治疗',
  name_en: 'wlzl',
  from: [
    [{ fid: 32, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T'],
  number: null,
  description: '恢复目标的体力，恢复力：9000',
  type: 0,
  launch: 2,
  repeat: 2.5,
  keep: null
}, {
  id: 33,
  name: '文理救疗',
  name_en: 'wljl',
  from: [
    [{ fid: 33, num: 1 }],
    [{ fid: 32, num: 3 }],
    [{ fid: 39, num: 3 }],
    [{ fid: 5, num: 1 }, { fid: 32, num: 1 }]
  ],
  isDirect: true,
  access: ['D'],
  number: 50,
  description: '恢复目标的体力，恢复力：12000',
  type: 0,
  launch: 0,
  repeat: 5,
  keep: null
}, {
  id: 34,
  name: '文理石肤',
  name_en: 'wlsf',
  from: [
    [{ fid: 34, num: 1 }],
    [{ fid: 12, num: 3 }],
    [{ fid: 13, num: 3 }],
    [{ fid: 12, num: 1 }, { fid: 13, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T', 'H'],
  number: 99,
  description: '为目标附加能够抵御一定伤害的防护罩|该防护罩能够抵消相当于目标最大体力10%的伤害量',
  type: 0,
  launch: 2,
  repeat: 2.5,
  keep: '30秒'
}, {
  id: 35,
  name: '文理愈疗',
  name_en: 'wlyl',
  from: [
    [{ fid: 33, num: 2 }],
    [{ fid: 28, num: 1 }, { fid: 5, num: 1 }],
    [{ fid: 32, num: 2 }, { fid: 5, num: 1 }]
  ],
  isDirect: false,
  access: ['D', 'T'],
  number: 50,
  description: '恢复目标及其周围队员的体力，恢复力：9000',
  type: 0,
  launch: 2,
  repeat: 2.5,
  keep: null
}, {
  id: 36,
  name: '文理再生',
  name_en: 'wlzs',
  from: [
    [{ fid: 27, num: 1 }, { fid: 33, num: 1 }],
    [{ fid: 32, num: 2 }, { fid: 23, num: 1 }],
    [{ fid: 23, num: 1 }, { fid: 33, num: 1 }]
  ],
  isDirect: false,
  access: ['D', 'T'],
  number: 99,
  description: '令目标体力持续恢复，恢复力：2500',
  type: 0,
  launch: 0,
  repeat: 2.5,
  keep: '21秒'
}, {
  id: 37,
  name: '文理康复',
  name_en: 'wlkf',
  from: [
    [{ fid: 37, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T'],
  number: null,
  description: '解除目标身上部分弱化效果中的一种',
  type: 0,
  launch: 1,
  repeat: 2.5,
  keep: null
}, {
  id: 38,
  name: '文理激怒',
  name_en: 'wljn',
  from: [
    [{ fid: 38, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'H'],
  number: null,
  description: '向目标进行挑衅，令目标对自身的仇恨变为最高|并且一定时间内提升自身仇恨',
  type: 2,
  launch: 0,
  repeat: 20,
  keep: '15秒'
}, {
  id: 39,
  name: '文理复活',
  name_en: 'wlfh',
  from: [
    [{ fid: 39, num: 1 }]
  ],
  isDirect: true,
  access: ['D', 'T'],
  number: 99,
  description: '令无法战斗的目标以衰弱状态重新振作起来',
  type: 0,
  launch: 3,
  repeat: 2.5,
  keep: null
}, {
  id: 40,
  name: '文理勇气',
  name_en: 'wlyq',
  from: [
    [{ fid: 4, num: 1 }, { fid: 5, num: 1 }, { fid: 6, num: 1 }]
  ],
  isDirect: false,
  access: ['MD', 'H'],
  number: 99,
  description: '令目标攻击所造成的伤害提高10%',
  type: 0,
  launch: 2.5,
  repeat: 2.5,
  keep: '300秒'
}, {
  id: 41,
  name: '文理物理盾',
  name_en: 'wlwld',
  from: [
    [{ fid: 4, num: 1 }, { fid: 12, num: 1 }, { fid: 34, num: 1 }]
  ],
  isDirect: false,
  access: ['D', 'H'],
  number: 30,
  description: '一定时间内，自身受到的物理伤害减轻99%',
  type: 2,
  launch: 0,
  repeat: 300,
  keep: '8秒'
}, {
  id: 42,
  name: '文理魔法盾',
  name_en: 'wlmfd',
  from: [
    [{ fid: 4, num: 1 }, { fid: 13, num: 1 }, { fid: 34, num: 1 }]
  ],
  isDirect: false,
  access: ['D', 'H'],
  number: 30,
  description: '一定时间内，自身受到的魔法伤害减轻99%',
  type: 2,
  launch: 0,
  repeat: 300,
  keep: '8秒'
}, {
  id: 43,
  name: '文理反射',
  name_en: 'wlfs',
  from: [
    [{ fid: 5, num: 1 }, { fid: 12, num: 1 }, { fid: 13, num: 1 }]
  ],
  isDirect: false,
  access: ['D', 'T', 'H'],
  number: 99,
  description: '为自身或其他一名队员附加能够反射魔法的防护罩',
  type: 0,
  launch: 0,
  repeat: 2.5,
  keep: '10秒'
}, {
  id: 44,
  name: '文理猛击',
  name_en: 'wlmj',
  from: [
    [{ fid: 6, num: 1 }, { fid: 20, num: 1 }, { fid: 27, num: 1 }]
  ],
  isDirect: false,
  access: ['T'],
  number: 30,
  description: '对目标发动物理攻击，威力：1000|追加效果：恢复伤害量一定比例的体力|发动条件：自身体力低于50%',
  type: 2,
  launch: 0,
  repeat: 45,
  keep: null
}, {
  id: 45,
  name: '文理醒神',
  name_en: 'wlxs',
  from: [
    [{ fid: 1, num: 1 }, { fid: 5, num: 1 }, { fid: 33, num: 1 }]
  ],
  isDirect: false,
  access: ['H'],
  number: 99,
  description: '一定时间内，自身与周围队员的魔素以太恢复量提高',
  type: 0,
  launch: 3,
  repeat: 2.5,
  keep: '30秒'
}, {
  id: 46,
  name: '文理放逐',
  name_en: 'wlfz',
  from: [
    [{ fid: 1, num: 1 }, { fid: 22, num: 2 }]
  ],
  isDirect: false,
  access: ['H'],
  number: 99,
  description: '对目标发动无属性魔法攻击，威力：200|目标为不死系怪物时发动追加效果|追加效果：目标所受伤害提高12%',
  type: 0,
  launch: 2.5,
  repeat: 2.5,
  keep: '60秒'
}, {
  id: 47,
  name: '文理强放逐',
  name_en: 'wlqfz',
  from: [
    [{ fid: 5, num: 1 }, { fid: 22, num: 2 }]
  ],
  isDirect: false,
  access: ['H'],
  number: 50,
  description: '对目标及其周围的敌人发动无属性魔法攻击，威力：150|目标为不死系怪物时发动追加效果|追加效果：目标所受伤害提高12%',
  type: 0,
  launch: 3,
  repeat: 2.5,
  keep: '60秒'
}, {
  id: 48,
  name: '文理魔法爆发',
  name_en: 'wlmfbf',
  from: [
    [{ fid: 48, num: 1 }],
    [{ fid: 5, num: 1 }, { fid: 11, num: 1 }, { fid: 34, num: 1 }]
  ],
  isDirect: true,
  access: ['MD', 'H'],
  number: 10,
  description: '一定时间内，以自身发动魔法时消耗的魔力增加为代价，令魔法类技能攻击时造成的伤害提高100%',
  type: 2,
  launch: 0,
  repeat: 90,
  keep: '20秒'
}, {
  id: 49,
  name: '文理双刃剑',
  name_en: 'wlsrj',
  from: [
    [{ fid: 49, num: 1 }],
    [{ fid: 4, num: 1 }, { fid: 6, num: 1 }, { fid: 28, num: 1 }]
  ],
  isDirect: true,
  access: ['WD', 'T'],
  number: 10,
  description: '一定时间内，以自身体力逐渐流失为代价，令发动物理攻击造成的伤害提高|该状态每3秒增加1档，最多可以积累16档|每档可以令物理伤害提高15%、令体力流失增加1200点',
  type: 2,
  launch: 0,
  repeat: 90,
  keep: '48秒'
}, {
  id: 50,
  name: '文理锐眼追击',
  name_en: 'wlryzj',
  from: [
    [{ fid: 50, num: 1 }],
    [{ fid: 6, num: 1 }, { fid: 11, num: 1 }, { fid: 20, num: 1 }]
  ],
  isDirect: true,
  access: ['YD'],
  number: 30,
  description: '对目标发动远距离物理攻击，威力：80|目标剩余体力越低威力越大，最大提升到10倍|该技能拥有高仇恨提升率',
  type: 1,
  launch: 0,
  repeat: 2.5,
  keep: null
}, {
  id: 51,
  name: '文理探景',
  name_en: 'wltj',
  from: [
    [{ fid: 10, num: 2 }],
    [{ fid: 22, num: 1 }, { fid: 24, num: 1 }, { fid: 10, num: 1 }]
  ],
  isDirect: false,
  access: ['D'],
  number: 99,
  description: '发现自身周围15米内隐藏的陷阱|若周围15米内没有陷阱，则可以获知周围36米内是否存在陷阱|此文理技能仅在迷宫内有效',
  type: 2,
  launch: 0,
  repeat: 3.5,
  keep: null
}, {
  id: 52,
  name: '贤者的记忆',
  name_en: 'xzdjy',
  from: [
    [{ fid: 1, num: 1 }, { fid: 5, num: 1 }, { fid: 48, num: 1 }],
    [{ fid: 4, num: 1 }, { fid: 34, num: 1 }, { fid: 48, num: 1 }]
  ],
  isDirect: false,
  access: ['MD'],
  number: 3,
  description: '令自身发动魔法造成的伤害提高35%，魔法防御力增加1000，并且发动魔法消耗的魔力降低|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 53,
  name: '剑豪的记忆',
  name_en: 'jhdjy',
  from: [
    [{ fid: 6, num: 2 }, { fid: 49, num: 1 }],
    [{ fid: 26, num: 1 }, { fid: 28, num: 1 }, { fid: 49, num: 1 }]
  ],
  isDirect: false,
  access: ['WD'],
  number: 3,
  description: '令自身发动物理攻击造成的伤害提高40%，最大体力增加15%，并且发动战技消耗的技力降低|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 54,
  name: '弓圣的记忆',
  name_en: 'gsdjy',
  from: [
    [{ fid: 19, num: 1 }, { fid: 20, num: 1 }, { fid: 50, num: 1 }],
    [{ fid: 23, num: 1 }, { fid: 27, num: 1 }, { fid: 50, num: 1 }]
  ],
  isDirect: false,
  access: ['YD'],
  number: 3,
  description: '令自身发动物理攻击时造成的伤害提高25%，并且回避率提高25%|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 55,
  name: '豪杰的记忆',
  name_en: 'hjdjy',
  from: [
    [{ fid: 3, num: 1 }, { fid: 38, num: 1 }, { fid: 49, num: 1 }],
    [{ fid: 12, num: 1 }, { fid: 11, num: 1 }, { fid: 49, num: 1 }],
  ],
  isDirect: false,
  access: ['T'],
  number: 3,
  description: '令自身的防御力提高2000|效果时间内每次受到超过自身最大体力50%以上的单体攻击伤害时，获得1档体力增加|无法与其他“记忆”系技能同时使用|切换任务指令时消失|再次发动时则取消该状态',
  type: 0,
  launch: 0,
  repeat: 10,
  keep: null
}, {
  id: 56,
  name: '文理献祭',
  name_en: 'wlxj',
  from: [
    [{ fid: 37, num: 1 }, { fid: 39, num: 1 }, { fid: 48, num: 1 }]
  ],
  isDirect: false,
  access: ['H'],
  number: 10,
  description: '复活目标并恢复其全部体力|追加效果：对自己附加“死亡宣告”|发动条件：非“死亡宣告”状态中',
  type: 0,
  launch: 3,
  repeat: 2.5,
  keep: '10秒'
}]

module.exports = {
  skills: skills
}