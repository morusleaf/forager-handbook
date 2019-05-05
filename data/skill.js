// img location: "img/skill/"+num+".png"

/**
 * @type {Object.<string, Skill>}
 */
var skills_rawdata = {
  "industry": {
    name: "加工",
    unlock: [
      "#{item/steel}",
      "#{item/glass}",
      "#{skill/sewing}"
    ],
    desc: [
      "建造#struct时获得经验值",
    ],
  },
  "sewing": {
    name: "裁缝",
    unlock: [
      "#{item/leather}",
    ],
    desc: [
      "缝纫站工作速度提高25%",
    ],
  },
  "carpentry": {
    name: "木工",
    unlock: [
      "火把",
    ],
    desc: [
      "建筑消耗木材减少25%",
    ],
  },
  "smelting": {
    name: "冶炼",
    unlock: [
    ],
    desc: [
      "熔炉工作速度提高25%",
      "锻造台工作速度提高25%",
    ],
  },
  "masonry": {
    name: "石工",
    unlock: [
      "火盆",
    ],
    desc: [
      "建筑消耗#{item/stone}减少25%",
      "建筑消耗#{item/brick}减少25%",
    ],
  },
  "textiles": {
    name: "纺织品",
    unlock: [
      "#{item/basic-boots -靴子}",
      "#{item/basic-gloves -手套}",
    ],
    desc: [
    ],
  },
  "craftsmanship": {
    name: "工匠",
    unlock: [
      "#{item/royal-steel}",
      "#{item/royal-clothing}",
    ],
    desc: [
    ],
  },
  "jewelry": {
    name: "珠宝",
    unlock: [
      "护身符",
    ],
    desc: [
      "宝石售价提高20%",
    ],
  },
  "machinery": {
    name: "机械",
    unlock: [
      "花瓣压缩机",
    ],
    desc: [
    ],
  },
  "automation": {
    name: "自动化",
    unlock: [
      "采集杆",
    ],
    desc: [
      "自动收集制作物品",
    ],
  },
  "drilling": {
    name: "钻孔",
    unlock: [
      "海上钻机",
    ],
    desc: [
      "挖掘时有25%的几率能够找到#{item/coal}",
    ],
  },
  "ballistics": {
    name: "弹道学",
    unlock: [
      "#{struct/ballista}",
    ],
    desc: [
      "弓箭能够同时射出三根箭矢",
    ],
  },
  "manufacturing": {
    name: "制造",
    unlock: [
      "工厂",
    ],
    desc: [
      "所有建筑都有20%的几率制造双倍物品",
    ],
  },
  "engineering": {
    name: "工程学",
    unlock: [
      "#{item/droid}",
      "#{item/emp-grenade}",
    ],
    desc: [
      "所有建筑的工作速度提高25%",
      "注：官方汉化误将机器人(droid)译为德鲁伊(druid)"
    ],
  },
  "physics": {
    name: "物理",
    unlock: [
      "发电厂",
    ],
    desc: [
    ],
  },
  "lasers": {
    name: "激光",
    unlock: [
    ],
    desc: [
      "采集杆伤害翻倍",
      "#{item/droid}伤害翻倍",
    ],
  },
  "economy": {
    name: "经济",
    unlock: [
    ],
    desc: [
      "立即获得40枚#{item/coin}",
    ],
  },
  "coinage": {
    name: "货币",
    unlock: [
    ],
    desc: [
      "锻造台每次额外锻造4枚#{item/coin}",
    ],
  },
  "trade": {
    name: "买卖",
    unlock: [
      "市场",
    ],
    desc: [
    ],
  },
  "storage": {
    name: "仓储",
    unlock: [
      "仓库",
    ],
    desc: [
    ],
  },
  "commerce": {
    name: "贸易",
    unlock: [
    ],
    desc: [
      "从背包中丢弃物品会直接卖出",
    ],
  },
  "artistry": {
    name: "技艺",
    unlock: [
    ],
    desc: [
      "制造物售卖价格增加25%",
    ],
  },
  "banking": {
    name: "银行家",
    unlock: [
      "银行",
    ],
    desc: [
    ],
  },
  "bargain": {
    name: "讲价",
    unlock: [
    ],
    desc: [
      "减少所有金币消耗15%",
    ],
  },
  "capitalism": {
    name: "资本主义",
    unlock: [
    ],
    desc: [
      "卖出物品时获得经验值",
    ],
  },
  "colonization": {
    name: "殖民",
    unlock: [
    ],
    desc: [
      "土地价格减少30%",
    ],
  },
  "architecture": {
    name: "建筑学",
    unlock: [
    ],
    desc: [
      "建筑物生命值翻倍",
      "建筑物消耗减少25%",
      "增加仓库栏位",
    ],
  },
  "gambling": {
    name: "赌博",
    unlock: [
      "老虎机",
    ],
    desc: [
    ],
  },
  "optics": {
    name: "光学",
    unlock: [
      "灯塔",
    ],
    desc: [
      "黑暗中光照范围翻倍",
    ],
  },
  "supply": {
    name: "资源流通",
    unlock: [
    ],
    desc: [
      "市场出售更多物品",
    ],
  },
  "treasury": {
    name: "宝藏",
    unlock: [
    ],
    desc: [
      "接邻其他银行时",
      "银行生成金币速度增加50%",
    ],
  },
  "logistics": {
    name: "后勤",
    unlock: [
    ],
    desc: [
      "灯塔效果范围翻倍",
      "采集杆效果范围翻倍",
      "发电厂效果范围翻倍",
      "投石器效果范围翻倍",
    ],
  },
  "foraging": {
    name: "采集",
    unlock: [
    ],
    desc: [
      "棉花生成更加频繁",
      "让你能够找到小麦",
      "让你能够找到甜菜",
    ],
  },
  "farming": {
    name: "栽培",
    unlock: [
      "铲子",
      "风车",
      "面包",
    ],
    desc: [
    ],
  },
  "woodcutting": {
    name: "砍伐",
    unlock: [
    ],
    desc: [
      "树木掉落木材增加50%",
    ],
  },
  "mining": {
    name: "挖掘",
    unlock: [
    ],
    desc: [
      "石头掉落矿物增加40%",
    ],
  },
  "gathering": {
    name: "收获",
    unlock: [
    ],
    desc: [
      "获得4格额外背包栏位",
      "从植物与农作物获得的经验值增加25%",
    ],
  },
  "fishing": {
    name: "捕鱼",
    unlock: [
      "烤鱼",
    ],
    desc: [
      "捕鱼陷阱捕捉物品速度增加50%",
    ],
  },
  "prospecting": {
    name: "勘探",
    unlock: [
    ],
    desc: [
      "石头有10%的几率掉落宝石",
      "挖掘到稀有物品的几率提高30%",
    ],
  },
  "hunting": {
    name: "狩猎",
    unlock: [
      "弓",
      "箭",
      "烤肉",
    ],
    desc: [
    ],
  },
  "cooking": {
    name: "料理",
    unlock: [
      "烹饪锅",
      "糖",
      "蛋黄酱",
      "奶酪",
    ],
    desc: [
    ],
  },
  "agriculture": {
    name: "农业",
    unlock: [
      "洒水器",
    ],
    desc: [
      "从农业获得的资源增加25%",
      "从动物获得的资源增加25%",
    ],
  },
  "voracity": {
    name: "狂吃",
    unlock: [
    ],
    desc: [
      "进食获得能量增加20%",
    ],
  },
  "deposit": {
    name: "矿脉",
    unlock: [
      "采石场",
    ],
    desc: [
    ],
  },
  "gluttony": {
    name: "暴食",
    unlock: [
    ],
    desc: [
      "吃东西时获得经验值",
    ],
  },
  "geology": {
    name: "地质学",
    unlock: [
    ],
    desc: [
      "所有石头都会掉落煤炭",
    ],
  },
  "calciverous": {
    name: "异食",
    unlock: [
    ],
    desc: [
      "让你能够吃掉矿物与宝石",
    ],
  },
  "looting": {
    name: "搜刮",
    unlock: [
    ],
    desc: [
      "敌人掉落金币",
    ],
  },
  "magic": {
    name: "魔法",
    unlock: [
    ],
    desc: [
      "让你能够找到精灵",
    ],
  },
  "alchemy": {
    name: "炼金术",
    unlock: [
      "大锅",
    ],
    desc: [
    ],
  },
  "novice-potions": {
    name: "初级药剂",
    unlock: [
      "初级药剂",
    ],
    desc: [
    ],
  },
  "expert-potions": {
    name: "专家药剂",
    unlock: [
      "专家药剂",
    ],
    desc: [
    ],
  },
  "brilliance": {
    name: "才华",
    unlock: [
    ],
    desc: [
      "获得经验值增加20%",
    ],
  },
  "inscription": {
    name: "咒语",
    unlock: [
      "铭文台",
    ],
    desc: [
    ],
  },
  "novice-scrolls": {
    name: "初级卷轴",
    unlock: [
      "初级卷轴",
    ],
    desc: [
    ],
  },
  "expert-scrolls": {
    name: "专家卷轴",
    unlock: [
      "专家卷轴",
    ],
    desc: [
    ],
  },
  "combat": {
    name: "战斗",
    unlock: [
      "剑",
    ],
    desc: [
      "增加15%回避率",
    ],
  },
  "spellbind": {
    name: "咒术",
    unlock: [
    ],
    desc: [
      "增益持续时间增加50%",
      "饮用药水时获得经验值",
      "使用卷轴时获得经验值",
    ],
  },
  "faith": {
    name: "信仰",
    unlock: [
      "祭坛",
    ],
    desc: [
    ],
  },
  "transmutation": {
    name: "蜕变",
    unlock: [
    ],
    desc: [
      "可以用大锅将钢铁转化成宝石",
    ],
  },
  "reagency": {
    name: "反应力",
    unlock: [
    ],
    desc: [
      "铭文台工作速度提高50%",
      "大锅工作速度提高50%",
    ],
  },
  "froststrike": {
    name: "冻结",
    unlock: [
      "灵魂结晶",
    ],
    desc: [
      "攻击有50%的几率冰冻敌人",
    ],
  },
  "renewal": {
    name: "再生",
    unlock: [
    ],
    desc: [
      "杀掉敌人时恢复能量",
    ],
  },
  "summoning": {
    name: "召唤",
    unlock: [
    ],
    desc: [
      "祭坛充能速度翻倍",
      "增益持续时间增加50%",
    ],
  },
};

var skills = {};
for (let key in skills_rawdata) {
  let data = skills_rawdata[key];
  data["key"] = key;
  skills[key] = Skill.newInstance(data);
}
