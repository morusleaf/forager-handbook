// img location: "img/skill/"+num+".png"

/**
 * @type {Object.<string, Skill>}
 */
var skills = {
  "industry": new Skill({
    key: "industry",
    num: 0,
    name: "加工",
    unlock: [
      "#{item/steel}",
      "#{item/glass}",
    ],
    desc: [
      "建造建筑时获得经验值",
    ],
  }),
  "sewing": new Skill({
    key: "sewing",
    num: 1,
    name: "裁缝",
    unlock: [
      "#{item/leather}",
    ],
    desc: [
      "缝纫站工作速度提高25%",
    ],
  }),
  "carpentry": new Skill({
    key: "carpentry",
    num: 2,
    name: "木工",
    unlock: [
      "火把",
    ],
    desc: [
      "建筑消耗木材减少25%",
    ],
  }),
  "smelting": new Skill({
    key: "smelting",
    num: 3,
    name: "冶炼",
    unlock: [
    ],
    desc: [
      "熔炉工作速度提高25%",
      "锻造台工作速度提高25%",
    ],
  }),
  "masonry": new Skill({
    key: "masonry",
    num: 4,
    name: "石工",
    unlock: [
      "火盆",
    ],
    desc: [
      "建筑消耗石头减少25%",
      "建筑消耗砖块减少25%",
    ],
  }),
  "textiles": new Skill({
    key: "textiles",
    num: 5,
    name: "纺织品",
    unlock: [
      "靴子",
      "手套",
    ],
    desc: [
    ],
  }),
  "craftsmanship": new Skill({
    key: "craftsmanship",
    num: 6,
    name: "工匠",
    unlock: [
      "皇家钢铁",
      "皇家衣服",
    ],
    desc: [
    ],
  }),
  "jewelry": new Skill({
    key: "jewelry",
    num: 7,
    name: "珠宝",
    unlock: [
      "护身符",
    ],
    desc: [
      "宝石售价提高20%",
    ],
  }),
  "machinery": new Skill({
    key: "machinery",
    num: 8,
    name: "机械",
    unlock: [
      "花瓣压缩机",
    ],
    desc: [
    ],
  }),
  "automation": new Skill({
    key: "automation",
    num: 9,
    name: "自动化",
    unlock: [
      "采集杆",
    ],
    desc: [
      "自动收集制作物品",
    ],
  }),
  "drilling": new Skill({
    key: "drilling",
    num: 10,
    name: "钻孔",
    unlock: [
      "海上钻机",
    ],
    desc: [
      "挖掘时有25%的几率能够找到煤炭",
    ],
  }),
  "ballistics": new Skill({
    key: "ballistics",
    num: 11,
    name: "弹道学",
    unlock: [
      "投石器",
    ],
    desc: [
      "弓箭能够同时射出三根箭矢",
    ],
  }),
  "manufacturing": new Skill({
    key: "manufacturing",
    num: 12,
    name: "制造",
    unlock: [
      "工厂",
    ],
    desc: [
      "所有建筑都有20%的几率制造双倍物品",
    ],
  }),
  "engineering": new Skill({
    key: "engineering",
    num: 13,
    name: "工程学",
    unlock: [
      "德鲁伊",
      "电磁脉冲手雷",
    ],
    desc: [
      "所有建筑的工作速度提高25%",
    ],
  }),
  "physics": new Skill({
    key: "physics",
    num: 14,
    name: "物理",
    unlock: [
      "发电厂",
    ],
    desc: [
    ],
  }),
  "lasers": new Skill({
    key: "lasers",
    num: 15,
    name: "激光",
    unlock: [
    ],
    desc: [
      "采集杆伤害翻倍",
      "德鲁伊伤害翻倍",
    ],
  }),
  "economy": new Skill({
    key: "economy",
    num: 16,
    name: "经济",
    unlock: [
    ],
    desc: [
      "立即获得40枚金币",
    ],
  }),
  "coinage": new Skill({
    key: "coinage",
    num: 17,
    name: "货币",
    unlock: [
    ],
    desc: [
      "锻造台每次额外锻造4枚金币",
    ],
  }),
  "trade": new Skill({
    key: "trade",
    num: 18,
    name: "买卖",
    unlock: [
      "市场",
    ],
    desc: [
    ],
  }),
  "storage": new Skill({
    key: "storage",
    num: 19,
    name: "仓储",
    unlock: [
      "仓库",
    ],
    desc: [
    ],
  }),
  "commerce": new Skill({
    key: "commerce",
    num: 20,
    name: "贸易",
    unlock: [
    ],
    desc: [
      "从背包中丢弃物品",
      "会直接卖出",
    ],
  }),
  "artistry": new Skill({
    key: "artistry",
    num: 21,
    name: "技艺",
    unlock: [
    ],
    desc: [
      "制造物售卖价格增加25%",
    ],
  }),
  "banking": new Skill({
    key: "banking",
    num: 22,
    name: "银行家",
    unlock: [
      "银行",
    ],
    desc: [
    ],
  }),
  "bargain": new Skill({
    key: "bargain",
    num: 23,
    name: "讲价",
    unlock: [
    ],
    desc: [
      "减少所有金币消耗15%",
    ],
  }),
  "capitalism": new Skill({
    key: "capitalism",
    num: 24,
    name: "资本主义",
    unlock: [
    ],
    desc: [
      "卖出物品时获得经验值",
    ],
  }),
  "colonization": new Skill({
    key: "colonization",
    num: 25,
    name: "殖民",
    unlock: [
    ],
    desc: [
      "土地价格减少30%",
    ],
  }),
  "architecture": new Skill({
    key: "architecture",
    num: 26,
    name: "建筑学",
    unlock: [
    ],
    desc: [
      "建筑物生命值翻倍",
      "建筑物消耗减少25%",
      "增加仓库栏位",
    ],
  }),
  "gambling": new Skill({
    key: "gambling",
    num: 27,
    name: "赌博",
    unlock: [
      "老虎机",
    ],
    desc: [
    ],
  }),
  "optics": new Skill({
    key: "optics",
    num: 28,
    name: "光学",
    unlock: [
      "灯塔",
    ],
    desc: [
      "黑暗中光照范围翻倍",
    ],
  }),
  "supply": new Skill({
    key: "supply",
    num: 29,
    name: "资源流通",
    unlock: [
    ],
    desc: [
      "市场出售更多物品",
    ],
  }),
  "treasury": new Skill({
    key: "treasury",
    num: 30,
    name: "宝藏",
    unlock: [
    ],
    desc: [
      "接邻其他银行时",
      "银行生成金币速度增加50%",
    ],
  }),
  "logistics": new Skill({
    key: "logistics",
    num: 31,
    name: "后勤",
    unlock: [
    ],
    desc: [
      "灯塔效果范围翻倍",
      "采集杆效果范围翻倍",
      "发电厂效果范围翻倍",
      "投石器效果范围翻倍",
    ],
  }),
  "foraging": new Skill({
    key: "foraging",
    num: 32,
    name: "采集",
    unlock: [
    ],
    desc: [
      "棉花生成更加频繁",
      "让你能够找到小麦",
      "让你能够找到甜菜",
    ],
  }),
  "farming": new Skill({
    key: "farming",
    num: 33,
    name: "栽培",
    unlock: [
      "铲子",
      "风车",
      "面包",
    ],
    desc: [
    ],
  }),
  "woodcutting": new Skill({
    key: "woodcutting",
    num: 34,
    name: "砍伐",
    unlock: [
    ],
    desc: [
      "树木掉落木材增加50%",
    ],
  }),
  "mining": new Skill({
    key: "mining",
    num: 35,
    name: "挖掘",
    unlock: [
    ],
    desc: [
      "石头掉落矿物增加40%",
    ],
  }),
  "gathering": new Skill({
    key: "gathering",
    num: 36,
    name: "收获",
    unlock: [
    ],
    desc: [
      "获得4格额外背包栏位",
      "从植物与农作物获得的经验值增加25%",
    ],
  }),
  "fishing": new Skill({
    key: "fishing",
    num: 37,
    name: "捕鱼",
    unlock: [
      "烤鱼",
    ],
    desc: [
      "捕鱼陷阱捕捉物品速度增加50%",
    ],
  }),
  "prospecting": new Skill({
    key: "prospecting",
    num: 38,
    name: "勘探",
    unlock: [
    ],
    desc: [
      "石头有10%的几率掉落宝石",
      "挖掘到稀有物品的几率提高30%",
    ],
  }),
  "hunting": new Skill({
    key: "hunting",
    num: 39,
    name: "狩猎",
    unlock: [
      "弓",
      "箭",
      "烤肉",
    ],
    desc: [
    ],
  }),
  "cooking": new Skill({
    key: "cooking",
    num: 40,
    name: "料理",
    unlock: [
      "烹饪锅",
      "糖",
      "蛋黄酱",
      "奶酪",
    ],
    desc: [
    ],
  }),
  "agriculture": new Skill({
    key: "agriculture",
    num: 41,
    name: "农业",
    unlock: [
      "洒水器",
    ],
    desc: [
      "从农业获得的资源增加25%",
      "从动物获得的资源增加25%",
    ],
  }),
  "voracity": new Skill({
    key: "voracity",
    num: 42,
    name: "狂吃",
    unlock: [
    ],
    desc: [
      "进食获得能量增加20%",
    ],
  }),
  "deposit": new Skill({
    key: "deposit",
    num: 43,
    name: "矿脉",
    unlock: [
      "采石场",
    ],
    desc: [
    ],
  }),
  "gluttony": new Skill({
    key: "gluttony",
    num: 44,
    name: "暴食",
    unlock: [
    ],
    desc: [
      "吃东西时获得经验值",
    ],
  }),
  "geology": new Skill({
    key: "geology",
    num: 45,
    name: "地质学",
    unlock: [
    ],
    desc: [
      "所有石头都会掉落煤炭",
    ],
  }),
  "calciverous": new Skill({
    key: "calciverous",
    num: 46,
    name: "异食",
    unlock: [
    ],
    desc: [
      "让你能够吃掉矿物与宝石",
    ],
  }),
  "looting": new Skill({
    key: "looting",
    num: 47,
    name: "搜刮",
    unlock: [
    ],
    desc: [
      "敌人掉落金币",
    ],
  }),
  "magic": new Skill({
    key: "magic",
    num: 48,
    name: "魔法",
    unlock: [
    ],
    desc: [
      "让你能够找到精灵",
    ],
  }),
  "alchemy": new Skill({
    key: "alchemy",
    num: 49,
    name: "炼金术",
    unlock: [
      "大锅",
    ],
    desc: [
    ],
  }),
  "novice-potions": new Skill({
    key: "novice-potions",
    num: 50,
    name: "初级药剂",
    unlock: [
      "初级药剂",
    ],
    desc: [
    ],
  }),
  "expert-potions": new Skill({
    key: "expert-potions",
    num: 51,
    name: "专家药剂",
    unlock: [
      "专家药剂",
    ],
    desc: [
    ],
  }),
  "brilliance": new Skill({
    key: "brilliance",
    num: 52,
    name: "才华",
    unlock: [
    ],
    desc: [
      "获得经验值增加20%",
    ],
  }),
  "inscription": new Skill({
    key: "inscription",
    num: 53,
    name: "咒语",
    unlock: [
      "铭文台",
    ],
    desc: [
    ],
  }),
  "novice-scrolls": new Skill({
    key: "novice-scrolls",
    num: 54,
    name: "初级卷轴",
    unlock: [
      "初级卷轴",
    ],
    desc: [
    ],
  }),
  "expert-scrolls": new Skill({
    key: "expert-scrolls",
    num: 55,
    name: "专家卷轴",
    unlock: [
      "专家卷轴",
    ],
    desc: [
    ],
  }),
  "combat": new Skill({
    key: "combat",
    num: 56,
    name: "战斗",
    unlock: [
      "剑",
    ],
    desc: [
      "增加15%回避率",
    ],
  }),
  "spellbind": new Skill({
    key: "spellbind",
    num: 57,
    name: "咒术",
    unlock: [
    ],
    desc: [
      "增益持续时间增加50%",
      "饮用药水时获得经验值",
      "使用卷轴时获得经验值",
    ],
  }),
  "faith": new Skill({
    key: "faith",
    num: 58,
    name: "信仰",
    unlock: [
      "祭坛",
    ],
    desc: [
    ],
  }),
  "transmutation": new Skill({
    key: "transmutation",
    num: 59,
    name: "蜕变",
    unlock: [
    ],
    desc: [
      "可以用大锅将钢铁转化成宝石",
    ],
  }),
  "reagency": new Skill({
    key: "reagency",
    num: 60,
    name: "反应力",
    unlock: [
    ],
    desc: [
      "铭文台工作速度提高50%",
      "大锅工作速度提高50%",
    ],
  }),
  "froststrike": new Skill({
    key: "froststrike",
    num: 61,
    name: "冻结",
    unlock: [
      "灵魂结晶",
    ],
    desc: [
      "攻击有50%的几率冰冻敌人",
    ],
  }),
  "renewal": new Skill({
    key: "renewal",
    num: 62,
    name: "再生",
    unlock: [
    ],
    desc: [
      "杀掉敌人时恢复能量",
    ],
  }),
  "summoning": new Skill({
    key: "summoning",
    num: 63,
    name: "召唤",
    unlock: [
    ],
    desc: [
      "祭坛充能速度翻倍",
      "增益持续时间增加50%",
    ],
  }),
};
/**
 * Find skill by name.
 * @param  {string} skillName
 * @returns {Skill}
 * @throws {ReferenceError} skillName must exist
 */
function lookupSkill(skillName) {
  if (!(skillName in skills)) {
    throw ReferenceError(skillName + "does not exist");
  }
  return skills[skillName];
}