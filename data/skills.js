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
    icon: '',
    from: [
        [{ fid: 1, num: 1 }]
    ],
    isDirect: true,
    access: ['H'],
    description: '',
    type: 0
}, {
    id: 2,
    name: '斗士的记忆',
    name_en: 'dsdjy',
    icon: '',
    from: [
        [{ fid: 2, num: 1 }]
    ],
    isDirect: true,
    access: ['T'],
    description: '',
    type: 0
}, {
    id: 3,
    name: '重骑兵的记忆',
    name_en: 'zqbdjy',
    icon: '',
    from: [
        [{ fid: 3, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'H'],
    description: '',
    type: 0
}, {
    id: 4,
    name: '守护者的记忆',
    name_en: 'shzdjy',
    icon: '',
    from: [
        [{ fid: 4, num: 1 }],
        [{ fid: 3, num: 1 }, { fid: 12, num: 1 }],
        [{ fid: 3, num: 1 }, { fid: 34, num: 1 }],
        [{ fid: 3, num: 1 }, { fid: 38, num: 2 }],
        [{ fid: 34, num: 3 }]
    ],
    isDirect: true,
    access: ['T'],
    description: '',
    type: 0
}, {
    id: 5,
    name: '祭司的记忆',
    name_en: 'jsdjy',
    icon: '',
    from: [
        [{ fid: 5, num: 1 }],
        [{ fid: 1, num: 1 }, { fid: 37, num: 1 }],
        [{ fid: 1, num: 1 }, { fid: 32, num: 2 }],
        [{ fid: 33, num: 3 }],
    ],
    isDirect: true,
    access: ['H'],
    description: '',
    type: 0
}, {
    id: 6,
    name: '武人的记忆',
    name_en: 'wrdjy',
    icon: '',
    from: [
        [{ fid: 6, num: 1 }],
        [{ fid: 2, num: 1 }, { fid: 23, num: 1 }],
        [{ fid: 2, num: 3 }],
    ],
    isDirect: true,
    access: ['D'],
    description: '',
    type: 0
}, {
    id: 7,
    name: '斥候的记忆',
    name_en: 'chdjy',
    icon: '',
    from: [
        [{ fid: 24, num: 2 }]
    ],
    isDirect: false,
    access: ['T'],
    description: '',
    type: 0
}, {
    id: 8,
    name: '圣骑士的记忆',
    name_en: 'sqsdjy',
    icon: '',
    from: [
        [{ fid: 6, num: 1 }, { fid: 33, num: 1 }],
        [{ fid: 6, num: 1 }, { fid: 34, num: 1 }],
        [{ fid: 3, num: 1 }, { fid: 32, num: 1 }, { fid: 34, num: 1 }]
    ],
    isDirect: false,
    access: ['H'],
    description: '',
    type: 0
}, {
    id: 9,
    name: '狂战士的记忆',
    name_en: 'kzsdjy',
    icon: '',
    from: [
        [{ fid: 6, num: 1 }, { fid: 4, num: 1 }],
        [{ fid: 2, num: 1 }, { fid: 6, num: 1 }, { fid: 38, num: 1 }]
    ],
    isDirect: false,
    access: ['D'],
    description: '',
    type: 0
}, {
    id: 10,
    name: '盗贼的记忆',
    name_en: 'dzdjy',
    icon: '',
    from: [
        [{ fid: 10, num: 1 }],
        [{ fid: 24, num: 3 }],
        [{ fid: 19, num: 3 }],
        [{ fid: 24, num: 1 }, { fid: 19, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 11,
    name: '英杰的加护',
    name_en: 'yjdjh',
    icon: '',
    from: [
        [{ fid: 11, num: 1 }],
        [{ fid: 2, num: 1 }, { fid: 4, num: 1 }],
        [{ fid: 1, num: 1 }, { fid: 2, num: 1 }, { fid: 3, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 12,
    name: '文理护盾',
    name_en: 'wlhd',
    icon: '',
    from: [
        [{ fid: 12, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 13,
    name: '文理魔盾',
    name_en: 'wlmd',
    icon: '',
    from: [
        [{ fid: 13, num: 1 }],
        [{ fid: 12, num: 1 }, { fid: 37, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 14,
    name: '文理即死',
    name_en: 'wljs',
    icon: '',
    from: [
        [{ fid: 22, num: 3 }],
        [{ fid: 39, num: 1 }, { fid: 22, num: 1 }],
        [{ fid: 1, num: 1 }, { fid: 39, num: 1 }, { fid: 16, num: 1 }],
        [{ fid: 39, num: 1 }, { fid: 27, num: 2 }]
    ],
    isDirect: false,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 15,
    name: '文理蓄力',
    name_en: 'wlxl',
    icon: '',
    from: [
        [{ fid: 28, num: 3 }],
        [{ fid: 28, num: 1 }, { fid: 6, num: 1 }],
    ],
    isDirect: false,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 16,
    name: '文理麻痹',
    name_en: 'wlmb',
    icon: '',
    from: [
        [{ fid: 16, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 17,
    name: '文理强麻痹',
    name_en: 'wlqmb',
    icon: '',
    from: [
        [{ fid: 16, num: 3 }],
        [{ fid: 16, num: 2 }, { fid: 1, num: 1 }],
        [{ fid: 16, num: 1 }, { fid: 20, num: 1 }]
    ],
    isDirect: false,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 18,
    name: '文理敏捷',
    name_en: 'wlmj',
    icon: '',
    from: [
        [{ fid: 19, num: 2 }],
        [{ fid: 26, num: 2 }, { fid: 19, num: 1 }],
    ],
    isDirect: false,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 19,
    name: '文理飘羽步',
    name_en: 'wlpyb',
    icon: '',
    from: [
        [{ fid: 19, num: 1 }],
        [{ fid: 23, num: 2 }] //,
        // [{ fid: 23, num: 1 }, { fid: 26, num: 2 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 20,
    name: '文理精神镖',
    name_en: 'wljsb',
    icon: '',
    from: [
        [{ fid: 20, num: 1 }],
        [{ fid: 27, num: 1 }, { fid: 5, num: 1 }],
        [{ fid: 1, num: 1 }, { fid: 16, num: 1 }, { fid: 27, num: 1 }]
    ],
    isDirect: true,
    access: ['D'],
    description: '',
    type: 0
}, {
    id: 21,
    name: '文理天灾',
    name_en: 'wltz',
    icon: '',
    from: [
        [{ fid: 20, num: 3 }],
        [{ fid: 28, num: 2 }],
        [{ fid: 4, num: 1 }, { fid: 20, num: 1 }],
    ],
    isDirect: false,
    access: ['D', 'T'],
    description: '',
    type: 0
}, {
    id: 22,
    name: '文理驱魔',
    name_en: 'wlqm',
    icon: '',
    from: [
        [{ fid: 22, num: 1 }],
        [{ fid: 37, num: 3 }],
        [{ fid: 27, num: 3 }],
        [{ fid: 37, num: 1 }, { fid: 5, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'H'],
    description: '',
    type: 0
}, {
    id: 23,
    name: '文理虚枪',
    name_en: 'wlxq',
    icon: '',
    from: [
        [{ fid: 23, num: 1 }]
    ],
    isDirect: true,
    access: ['T', 'H'],
    description: '',
    type: 0
}, {
    id: 24,
    name: '文理潜行',
    name_en: 'wlqx',
    icon: '',
    from: [
        [{ fid: 24, num: 1 }],
        [{ fid: 5, num: 1 }, { fid: 13, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 25,
    name: '文理以太步',
    name_en: 'wlytb',
    icon: '',
    from: [
        [{ fid: 26, num: 1 }, { fid: 24, num: 1 }],
        [{ fid: 2, num: 1 }, { fid: 23, num: 1 }, { fid: 26, num: 1 }]
    ],
    isDirect: false,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 26,
    name: '文理后跳',
    name_en: 'wlht',
    icon: '',
    from: [
        [{ fid: 26, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 27,
    name: '文理镇定',
    name_en: 'wlzd',
    icon: '',
    from: [
        [{ fid: 27, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 28,
    name: '文理浴血',
    name_en: 'wlyx',
    icon: '',
    from: [
        [{ fid: 28, num: 1 }],
        [{ fid: 32, num: 1 }, { fid: 6, num: 1 }],
        [{ fid: 2, num: 2 }, { fid: 32, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 29,
    name: '文理充能',
    name_en: 'wlcn',
    icon: '',
    from: [
        [{ fid: 28, num: 1 }, { fid: 13, num: 1 }],
        [{ fid: 11, num: 1 }, { fid: 20, num: 1 }],
        [{ fid: 1, num: 1 }, { fid: 2, num: 1 }, { fid: 32, num: 1 }]
    ],
    isDirect: false,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 30,
    name: '文理反攻',
    name_en: 'wlfg',
    icon: '',
    from: [
        [{ fid: 6, num: 1 }, { fid: 19, num: 1 }],
        [{ fid: 2, num: 1 }, { fid: 38, num: 1 }, { fid: 19, num: 1 }]
    ],
    isDirect: false,
    access: ['T'],
    description: '',
    type: 0
}, {
    id: 31,
    name: '文理高速复唱',
    name_en: 'wlgsfc',
    icon: '',
    from: [
        [{ fid: 32, num: 1 }, { fid: 37, num: 1 }, { fid: 23, num: 1 }],
        [{ fid: 22, num: 1 }, { fid: 37, num: 1 }]
    ],
    isDirect: false,
    access: ['D', 'T'],
    description: '',
    type: 0
}, {
    id: 32,
    name: '文理治疗',
    name_en: 'wlzl',
    icon: '',
    from: [
        [{ fid: 32, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T'],
    description: '',
    type: 0
}, {
    id: 33,
    name: '文理救疗',
    name_en: 'wljl',
    icon: '',
    from: [
        [{ fid: 33, num: 1 }],
        [{ fid: 32, num: 3 }],
        [{ fid: 39, num: 3 }],
        [{ fid: 5, num: 1 }, { fid: 32, num: 1 }]
    ],
    isDirect: true,
    access: ['D'],
    description: '',
    type: 0
}, {
    id: 34,
    name: '文理石肤',
    name_en: 'wlsf',
    icon: '',
    from: [
        [{ fid: 34, num: 1 }],
        [{ fid: 12, num: 3 }],
        [{ fid: 13, num: 3 }],
        [{ fid: 12, num: 1 }, { fid: 13, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 35,
    name: '文理愈疗',
    name_en: 'wlyl',
    icon: '',
    from: [
        [{ fid: 33, num: 2 }],
        [{ fid: 28, num: 1 }, { fid: 5, num: 1 }],
        [{ fid: 32, num: 2 }, { fid: 5, num: 1 }]
    ],
    isDirect: false,
    access: ['D', 'T'],
    description: '',
    type: 0
}, {
    id: 36,
    name: '文理再生',
    name_en: 'wlzs',
    icon: '',
    from: [
        [{ fid: 27, num: 1 }, { fid: 33, num: 1 }],
        [{ fid: 32, num: 2 }, { fid: 23, num: 1 }],
        [{ fid: 23, num: 1 }, { fid: 33, num: 1 }]
    ],
    isDirect: false,
    access: ['D', 'T'],
    description: '',
    type: 0
}, {
    id: 37,
    name: '文理康复',
    name_en: 'wlkf',
    icon: '',
    from: [
        [{ fid: 37, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T'],
    description: '',
    type: 0
}, {
    id: 38,
    name: '文理激怒',
    name_en: 'wljn',
    icon: '',
    from: [
        [{ fid: 38, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'H'],
    description: '',
    type: 0
}, {
    id: 39,
    name: '文理复活',
    name_en: 'wlfh',
    icon: '',
    from: [
        [{ fid: 39, num: 1 }]
    ],
    isDirect: true,
    access: ['D', 'T'],
    description: '',
    type: 0
}, {
    id: 40,
    name: '文理勇气',
    name_en: 'wlyq',
    icon: '',
    from: [
        [{ fid: 4, num: 1 }, { fid: 5, num: 1 }, { fid: 6, num: 1 }]
    ],
    isDirect: false,
    access: ['MD', 'H'],
    description: '',
    type: 0
}, {
    id: 41,
    name: '文理物理盾',
    name_en: 'wlwld',
    icon: '',
    from: [
        [{ fid: 4, num: 1 }, { fid: 12, num: 1 }, { fid: 34, num: 1 }]
    ],
    isDirect: false,
    access: ['D', 'H'],
    description: '',
    type: 0
}, {
    id: 42,
    name: '文理魔法盾',
    name_en: 'wlmfd',
    icon: '',
    from: [
        [{ fid: 4, num: 1 }, { fid: 13, num: 1 }, { fid: 34, num: 1 }]
    ],
    isDirect: false,
    access: ['D', 'H'],
    description: '',
    type: 0
}, {
    id: 43,
    name: '文理反射',
    name_en: 'wlfs',
    icon: '',
    from: [
        [{ fid: 5, num: 1 }, { fid: 12, num: 1 }, { fid: 13, num: 1 }]
    ],
    isDirect: false,
    access: ['D', 'T', 'H'],
    description: '',
    type: 0
}, {
    id: 44,
    name: '文理猛击',
    name_en: 'wlmj',
    icon: '',
    from: [
        [{ fid: 6, num: 1 }, { fid: 20, num: 1 }, { fid: 27, num: 1 }]
    ],
    isDirect: false,
    access: ['T'],
    description: '',
    type: 0
}, {
    id: 45,
    name: '文理醒神',
    name_en: 'wlxs',
    icon: '',
    from: [
        [{ fid: 1, num: 1 }, { fid: 5, num: 1 }, { fid: 33, num: 1 }]
    ],
    isDirect: false,
    access: ['H'],
    description: '',
    type: 0
}, {
    id: 46,
    name: '文理放逐',
    name_en: 'wlfz',
    icon: '',
    from: [
        [{ fid: 1, num: 1 }, { fid: 22, num: 2 }]
    ],
    isDirect: false,
    access: ['H'],
    description: '',
    type: 0
}, {
    id: 47,
    name: '文理强放逐',
    name_en: 'wlqfz',
    icon: '',
    from: [
        [{ fid: 5, num: 1 }, { fid: 22, num: 2 }]
    ],
    isDirect: false,
    access: ['H'],
    description: '',
    type: 0
}, {
    id: 48,
    name: '文理魔法爆发',
    name_en: 'wlmfbf',
    icon: '',
    from: [
        [{ fid: 48, num: 1 }],
        [{ fid: 5, num: 1 }, { fid: 11, num: 1 }, { fid: 34, num: 1 }]
    ],
    isDirect: true,
    access: ['MD', 'H'],
    description: '',
    type: 0
}, {
    id: 49,
    name: '文理双刃剑',
    name_en: 'wlsrj',
    icon: '',
    from: [
        [{ fid: 49, num: 1 }],
        [{ fid: 4, num: 1 }, { fid: 6, num: 1 }, { fid: 28, num: 1 }]
    ],
    isDirect: true,
    access: ['WD', 'T'],
    description: '',
    type: 0
}, {
    id: 50,
    name: '文理锐眼追击',
    name_en: 'wlryzj',
    icon: '',
    from: [
        [{ fid: 50, num: 1 }],
        [{ fid: 6, num: 1 }, { fid: 11, num: 1 }, { fid: 20, num: 1 }]
    ],
    isDirect: true,
    access: ['YD'],
    description: '',
    type: 0
}, {
    id: 51,
    name: '文理探景',
    name_en: 'wltj',
    icon: '',
    from: [
        [{ fid: 10, num: 2 }],
        [{ fid: 22, num: 1 }, { fid: 24, num: 1 }, { fid: 10, num: 1 }]
    ],
    isDirect: false,
    access: ['D'],
    description: '',
    type: 0
}, {
    id: 52,
    name: '贤者的记忆',
    name_en: 'xzdjy',
    icon: '',
    from: [
        [{ fid: 1, num: 1 }, { fid: 5, num: 1 }, { fid: 48, num: 1 }],
        [{ fid: 4, num: 1 }, { fid: 34, num: 1 }, { fid: 48, num: 1 }]
    ],
    isDirect: false,
    access: ['MD'],
    description: '',
    type: 0
}, {
    id: 53,
    name: '剑豪的记忆',
    name_en: 'jhdjy',
    icon: '',
    from: [
        [{ fid: 6, num: 2 }, { fid: 49, num: 1 }],
        [{ fid: 26, num: 1 }, { fid: 28, num: 1 }, { fid: 49, num: 1 }]
    ],
    isDirect: false,
    access: ['WD'],
    description: '',
    type: 0
}, {
    id: 54,
    name: '弓圣的记忆',
    name_en: 'gsdjy',
    icon: '',
    from: [
        [{ fid: 19, num: 1 }, { fid: 20, num: 1 }, { fid: 50, num: 1 }],
        [{ fid: 23, num: 1 }, { fid: 27, num: 1 }, { fid: 50, num: 1 }]
    ],
    isDirect: false,
    access: ['YD'],
    description: '',
    type: 0
}, {
    id: 55,
    name: '豪杰的记忆',
    name_en: 'hjdjy',
    icon: '',
    from: [
        [{ fid: 3, num: 1 }, { fid: 38, num: 1 }, { fid: 49, num: 1 }],
        [{ fid: 12, num: 1 }, { fid: 11, num: 1 }, { fid: 49, num: 1 }],
    ],
    isDirect: false,
    access: ['T'],
    description: '',
    type: 0
}, {
    id: 56,
    name: '文理献祭',
    name_en: 'wlxj',
    icon: '',
    from: [
        [{ fid: 37, num: 1 }, { fid: 39, num: 1 }, { fid: 48, num: 1 }]
    ],
    isDirect: false,
    access: ['H'],
    description: '',
    type: 0
}]

module.exports = {
    skills: skills
}