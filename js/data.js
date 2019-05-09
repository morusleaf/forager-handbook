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
    ],
    desc: [
      "建造建筑时获得经验值",
    ],
  },
  "sewing": {
    name: "裁缝",
    unlock: [
      "#{item/leather}",
    ],
    desc: [
      "#{struct/sewing-station}工作速度提高25%",
    ],
  },
  "carpentry": {
    name: "木工",
    unlock: [
      "#{struct/torch}",
    ],
    desc: [
      "建筑消耗#{item/wood}减少25%",
    ],
  },
  "smelting": {
    name: "冶炼",
    unlock: [
    ],
    desc: [
      "#{struct/furnace}工作速度提高25%",
      "#{struct/forge}工作速度提高25%",
    ],
  },
  "masonry": {
    name: "石工",
    unlock: [
      "#{struct/brazier}",
    ],
    desc: [
      "建筑消耗#{item/stone}减少25%",
      "建筑消耗#{item/brick}减少25%",
    ],
  },
  "textiles": {
    name: "纺织品",
    unlock: [
      "#{item/basic-boots 靴子}",
      "#{item/basic-gloves 手套}",
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
      "#{item/basic-amulet 护身符}",
    ],
    desc: [
      "#{item/ruby -宝石}售价提高20%",
    ],
  },
  "machinery": {
    name: "机械",
    unlock: [
      "#{struct/flower-press}",
    ],
    desc: [
    ],
  },
  "automation": {
    name: "自动化",
    unlock: [
      "#{struct/mining-rod}",
    ],
    desc: [
      "自动收集物品：自动砍树、自动挖矿、自动采集，开启全自动模式",
    ],
  },
  "drilling": {
    name: "钻孔",
    unlock: [
      "#{struct/offshore-drill}",
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
      "#{item/short-bow 弓}能够同时射出三根#{item/arrow}",
    ],
  },
  "manufacturing": {
    name: "制造",
    unlock: [
      "#{struct/factory}",
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
      "#{struct/power-plant}",
    ],
    desc: [
    ],
  },
  "lasers": {
    name: "激光",
    unlock: [
    ],
    desc: [
      "#{struct/mining-rod}伤害翻倍",
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
      "#{struct/market}",
    ],
    desc: [
    ],
  },
  "storage": {
    name: "仓储",
    unlock: [
      "#{struct/vault}",
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
      "#{struct/bank}",
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
      "增加3个#{struct/vault}栏位",
    ],
  },
  "gambling": {
    name: "赌博",
    unlock: [
      "#{struct/slot-machine}",
    ],
    desc: [
    ],
  },
  "optics": {
    name: "光学",
    unlock: [
      "#{struct/lighthouse}",
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
      "#{struct/market}出售更多物品",
    ],
  },
  "treasury": {
    name: "宝藏",
    unlock: [
    ],
    desc: [
      "接邻其他#{struct/bank}时，#{struct/bank}生成金币速度增加50%",
    ],
  },
  "logistics": {
    name: "后勤",
    unlock: [
    ],
    desc: [
      "#{struct/lighthouse}效果范围翻倍",
      "#{struct/mining-rod}效果范围翻倍",
      "#{struct/power-plant}效果范围翻倍",
      "#{struct/ballista}效果范围翻倍",
    ],
  },
  "foraging": {
    name: "采集",
    unlock: [
    ],
    desc: [
      "#{obj/cotton}生成更加频繁",
      "让你能够找到#{obj/wheat}",
      "让你能够找到#{obj/beet}",
    ],
  },
  "farming": {
    name: "栽培",
    unlock: [
      "#{item/shovel}",
      "#{struct/windmill}",
      "#{item/bread}",
    ],
    desc: [
    ],
  },
  "woodcutting": {
    name: "砍伐",
    unlock: [
    ],
    desc: [
      "#{obj/tree -树木}掉落#{item/wood}增加50%",
    ],
  },
  "mining": {
    name: "挖掘",
    unlock: [
    ],
    desc: [
      "#{obj/rock -石头}掉落矿物增加40%",
    ],
  },
  "gathering": {
    name: "收获",
    unlock: [
    ],
    desc: [
      "获得4格额外背包栏位",
      "从#{obj/bush -植物与农作物}获得的经验值增加25%",
    ],
  },
  "fishing": {
    name: "捕鱼",
    unlock: [
      "#{item/cooked-fish}",
    ],
    desc: [
      "#{struct/fish-trap}捕捉物品速度增加50%",
    ],
  },
  "prospecting": {
    name: "勘探",
    unlock: [
    ],
    desc: [
      "#{obj/rock}有10%的几率掉落#{item/ruby -宝石}",
      "挖掘到稀有物品的几率提高30%",
    ],
  },
  "hunting": {
    name: "狩猎",
    unlock: [
      "#{item/short-bow 弓}",
      "#{item/arrow}",
      "#{item/cooked-meat}",
    ],
    desc: [
    ],
  },
  "cooking": {
    name: "料理",
    unlock: [
      "#{struct/cookpot}",
      "#{item/sugar}",
      "#{item/mayo}",
      "#{item/cheese}",
    ],
    desc: [
    ],
  },
  "agriculture": {
    name: "农业",
    unlock: [
      "#{struct/sprinkler}",
    ],
    desc: [
      "从#{obj/cotton -农业}获得的资源增加25%",
      "从#{obj/chicken -动物}获得的资源增加25%",
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
      "#{struct/quarry}",
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
      "所有#{obj/rock}都会掉落#{item/coal}",
    ],
  },
  "calciverous": {
    name: "异食",
    unlock: [
    ],
    desc: [
      "让你能够吃掉#{item/stone 矿物}与#{item/ruby -宝石}",
    ],
  },
  "looting": {
    name: "搜刮",
    unlock: [
    ],
    desc: [
      "敌人掉落#{item/coin}",
    ],
  },
  "magic": {
    name: "魔法",
    unlock: [
    ],
    desc: [
      "让你能够找到#{obj/fairy}",
    ],
  },
  "alchemy": {
    name: "炼金术",
    unlock: [
      "#{struct/cauldron}",
    ],
    desc: [
    ],
  },
  "novice-potions": {
    name: "初级药剂",
    unlock: [
      "#{item/wisdom-draught}",
      "#{item/liquid-luck}",
      "#{item/mandragora}",
      "#{item/thunderstrike}",
    ],
  },
  "expert-potions": {
    name: "专家药剂",
    unlock: [
      "#{item/greedy-mixture}",
      "#{item/anas-delight}",
      "#{item/dragon-philtre}",
      "#{item/bloodfury-cocktail}",
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
      "#{struct/inscription-table}",
    ],
    desc: [
    ],
  },
  "novice-scrolls": {
    name: "初级卷轴",
    unlock: [
      "#{item/sage-scroll}",
      "#{item/builder-scroll}",
      "#{item/druid-scroll}",
    ],
  },
  "expert-scrolls": {
    name: "专家卷轴",
    unlock: [
      "#{item/wizard-scroll}",
      "#{item/miner-scroll}",
      "#{item/demon-scroll}",
    ],
  },
  "combat": {
    name: "战斗",
    unlock: [
      "#{item/bone-sword -剑}",
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
      "饮用#{item/healing-potion -药水}时获得经验值",
      "使用#{item/sage-scroll -卷轴}时获得经验值",
    ],
  },
  "faith": {
    name: "信仰",
    unlock: [
      "#{struct/shrine}",
    ],
    desc: [
    ],
  },
  "transmutation": {
    name: "蜕变",
    unlock: [
      "#{item/transmutation}",
    ],
    desc: [
      "可以用#{struct/cauldron}将#{item/steel}转化成#{item/ruby -宝石}",
    ],
  },
  "reagency": {
    name: "反应力",
    unlock: [
    ],
    desc: [
      "#{struct/inscription-table}工作速度提高50%",
      "#{struct/cauldron}工作速度提高50%",
    ],
  },
  "froststrike": {
    name: "冻结",
    unlock: [
      "#{struct/spirit-crystal}",
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
      "#{struct/shrine}充能速度翻倍",
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




var items_rawdata = {
  "wood": {
    name: "木材",
    value: 1,
    desc: [
    ],
    source: [
      "#{obj/tree}",
    ],
  },
  "stone": {
    name: "石头",
    value: 1,
    energy: 8,
    desc: [
    ],
    source: [
      "#{obj/rock}",
    ],
  },
  "iron-ore": {
    name: "铁矿",
    value: 1,
    energy: 8,
    desc: [
    ],
    opt_ingrd: [
      [
        "#{struct/flower-press}",
        {name: "#{item/flower}", qty: 2},
        {name: "#{item/fiber}", qty: 2},
      ],
    ],
    source: [
      "#{obj/iron-rock}",
    ],
  },
  "gold-ore": {
    name: "金矿",
    value: 1,
    energy: 8,
    desc: [
    ],
    opt_ingrd: [
      [
        "#{struct/flower-press}",
        {name: "#{item/flower}", qty: 2},
        {name: "#{item/wheat}", qty: 2},
      ],
    ],
    source: [
      "#{obj/gold-rock}",
    ],
  },
  // "coal": {
  //   name: "煤炭",
  //   value: 3,
  //   desc: [
  //   ],
  // },
  "flower": {
    name: "花朵",
    value: 1,
    desc: [
    ],
    source: [
      "#{obj/flower}",
    ],
  },
  "fiber": {
    name: "纤维",
    value: 1,
    desc: [
    ],
    source: [
      "#{obj/cotton}",
    ],
  },
  "poop": {
    name: "便便",
    value: 1,
    desc: [
    ],
    source: [
      "#{obj/cow}",
      "#{obj/chicken}",
    ],
  },
  "bone": {
    name: "骨头",
    value: 2,
    desc: [
    ],
    source: [
      "#{obj/skeleton}",
      "#{obj/big-skeleton}",
    ],
  },
  "jelly": {
    name: "黏液",
    value: 2,
    desc: [
    ],
    source: [
      "#{obj/slime}",
    ],
  },
  "bottled-torchbug": {
    name: "瓶装萤火虫",
    value: 36,
    desc: [
      "装备#{item/bottle}可捕捉#{obj/torchbug}",
    ],
    source: [
      "#{obj/torchbug}",
    ],
  },
  "bottled-beetle": {
    name: "瓶装甲虫",
    value: 36,
    desc: [
      "装备#{item/bottle}可捕捉#{obj/beetle}",
    ],
    source: [
      "#{obj/beetle}",
    ],
  },
  "nightshade": {
    name: "龙葵",
    value: 4,
    desc: [
    ],
    source: [
      "#{obj/nightshade}",
    ],
  },
  "bottled-butterfly": {
    name: "瓶装蝴蝶",
    value: 38,
    desc: [
      "装备#{item/bottle}可捕捉#{obj/butterfly}",
    ],
    source: [
      "#{obj/butterfly}",
    ],
  },
  "lavender": {
    name: "薰衣草",
    value: 6,
    desc: [
    ],
    source: [
      "#{obj/lavender}",
    ],
  },
  "crystal": {
    name: "水晶",
    value: 8,
    desc: [
    ],
    opt_ingrd: [
      [
        "#{struct/flower-press}",
        {name: "#{item/flower}", qty: 2},
        {name: "#{item/sand}", qty: 2},
      ],
    ],
    source: [
      "#{obj/crystal-blue}",
      "#{obj/crystal-purple}",
    ],
  },
  "bottled-deathmoth": {
    name: "瓶装死亡飞蛾",
    value: 40,
    desc: [
      "装备#{item/bottle}可捕捉#{obj/deathmoth}",
    ],
    source: [
      "#{obj/deathmoth}",
    ],
  },
  "cinderbloom": {
    name: "火焰花",
    value: 10,
    desc: [
    ],
    source: [
      "#{obj/cinderbloom}",
    ],
  },
  "demon-horn": {
    name: "恶魔角",
    value: 10,
    desc: [
    ],
    source: [
      "#{obj/demon}",
    ],
  },
  "hide": {
    name: "兽皮",
    value: 2,
    desc: [
    ],
    source: [
      "#{obj/cow}",
      "#{obj/sheep}",
      "#{obj/boar}",
    ],
  },
  "sand": {
    name: "沙子",
    value: 1,
    desc: [
    ],
    opt_ingrd: [
      [
        "#{struct/flower-press}",
        {name: "#{item/flower}", qty: 2},
        {name: "#{item/stone}", qty: 2},
      ],
    ],
    source: [
      "#{struct/fish-trap}",
      "#{item/shovel}",
    ]
  },
  "coal": {
    name: "煤炭",
    value: 3,
    energy: 12,
    desc: [
    ],
    ingrd: [
      "#{struct/furnace}",
      {name: "#{item/wood}", qty: 2},
    ],
    opt_ingrd: [
      [
        "#{struct/flower-press}",
        {name: "#{item/flower}", qty: 2},
        {name: "#{item/nightshade}", qty: 2},
      ],
    ],
    source: [
      "#{obj/coal-rock}",
    ],
  },
  "brick": {
    name: "砖块",
    value: 6,
    desc: [
    ],
    ingrd: [
      "#{struct/furnace}",
      {name: "#{item/stone}", qty: 2},
      {name: "#{item/coal}", qty: 1},
    ],
  },
  "iron-ingot": {
    name: "铁锭",
    value: 6,
    desc: [
    ],
    ingrd: [
      "#{struct/furnace}",
      {name: "#{item/iron-ore}", qty: 2},
      {name: "#{item/coal}", qty: 1},
    ],
  },
  "gold-ingot": {
    name: "金锭",
    value: 6,
    desc: [
    ],
    ingrd: [
      "#{struct/furnace}",
      {name: "#{item/gold-ore}", qty: 2},
      {name: "#{item/coal}", qty: 1},
    ],
  },
  "steel": {
    name: "钢铁",
    value: 60,
    desc: [
    ],
    ingrd: [
      "#{struct/furnace}",
      {name: "#{item/iron-ingot}", qty: 4},
      {name: "#{item/gold-ingot}", qty: 4},
      {name: "#{item/coal}", qty: 4},
    ],
    opt_ingrd: [
      [
        "#{struct/flower-press}",
        {name: "#{item/nightshade}", qty: 5},
        {name: "#{item/cinderbloom}", qty: 3},
      ],
    ],
  },
  "glass": {
    name: "玻璃",
    value: 16,
    desc: [
    ],
    ingrd: [
      "#{struct/furnace}",
      {name: "#{item/sand}", qty: 4},
      {name: "#{item/coal}", qty: 4},
    ],
  },
  "royal-steel": {
    name: "皇家钢铁",
    value: 500,
    desc: [
    ],
    ingrd: [
      "#{struct/furnace}",
      {name: "#{item/steel}", qty: 2},
      {name: "#{item/ruby}", qty: 1},
      {name: "#{item/emerald}", qty: 1},
      {name: "#{item/topaz}", qty: 1},
      {name: "#{item/amethyst}", qty: 1},
      {name: "#{item/coal}", qty: 8},
    ],
  },
  "cooked-fish": {
    name: "烤鱼",
    value: 4,
    energy: 28,
    desc: [
    ],
    ingrd: [
      "#{struct/furnace}",
      {name: "#{item/fish}", qty: 1},
      {name: "#{item/coal}", qty: 1},
    ],
  },
  "cooked-meat": {
    name: "烤肉",
    value: 4,
    energy: 32,
    desc: [
      "用火焰武器击杀动物也会掉落",
    ],
    ingrd: [
      "#{struct/furnace}",
      {name: "#{item/meat}", qty: 1},
      {name: "#{item/coal}", qty: 1},
    ],
  },
  "bread": {
    name: "面包",
    value: 9,
    energy: 24,
    desc: [
    ],
    ingrd: [
      "#{struct/furnace}",
      {name: "#{item/flour}", qty: 1},
      {name: "#{item/coal}", qty: 1},
    ],
  },
  "coin": {
    name: "硬币",
    value: 1,
    desc: [
      "一次生产8个，点出#{skill/coinage}后一次生产12个",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/gold-ingot}", qty: 1},
    ],
  },
  "key": {
    name: "钥匙",
    value: 40,
    desc: [
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 4},
      {name: "#{item/gold-ingot}", qty: 2},
    ],
  },
  "arrow": {
    name: "弓箭",
    value: 4,
    desc: [
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/wood}", qty: 1},
      {name: "#{item/stone}", qty: 1},
    ],
  },
  "bottle": {
    name: "瓶子",
    value: 35,
    desc: [
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/glass}", qty: 2},
      {name: "#{item/thread}", qty: 1},
    ],
  },
  "thread": {
    name: "线",
    value: 3,
    desc: [
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/fiber}", qty: 2},
    ],
  },
  "leather": {
    name: "皮革",
    value: 12,
    desc: [
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/hide}", qty: 2},
      {name: "#{item/thread}", qty: 2},
    ],
  },
  "royal-clothing": {
    name: "皇家衣服",
    value: 430,
    desc: [
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/leather}", qty: 4},
      {name: "#{item/ruby}", qty: 1},
      {name: "#{item/emerald}", qty: 1},
      {name: "#{item/topaz}", qty: 1},
      {name: "#{item/amethyst}", qty: 1},
      {name: "#{item/thread}", qty: 4},
    ],
  },
  "paper": {
    name: "纸张",
    value: 10,
    desc: [
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/wood}", qty: 5},
      {name: "#{item/flower}", qty: 5},
    ],
  },
  // "steel": {
  //   name: "钢铁",
  //   value: 60,
  //   desc: [
  //   ],
  // },
  "ruby": {
    name: "红宝石",
    value: 90,
    energy: 20,
    desc: [
      "可从#{item/transmutation}获得"
    ],
  },
  "emerald": {
    name: "翡翠",
    value: 90,
    energy: 20,
    desc: [
      "可从#{item/transmutation}获得"
    ],
  },
  "topaz": {
    name: "黄玉",
    value: 90,
    energy: 20,
    desc: [
      "可从#{item/transmutation}获得"
    ],
  },
  "amethyst": {
    name: "紫水晶",
    value: 90,
    energy: 20,
    desc: [
      "可从#{item/transmutation}获得"
    ],
  },
  "bottled-oil": {
    name: "瓶装油",
    value: 130,
    desc: [
    ],
    ingrd: [
      "#{struct/offshore-drill}",
      {name: "#{item/bottle}", qty: 1},
    ],
  },
  "wheat": {
    name: "小麦",
    value: 2,
    desc: [
    ],
    source: [
      "#{obj/wheat}",
    ],
  },
  "animal-feed": {
    name: "动物饲料",
    value: 9,
    desc: [
      "喂给动物可获取其资源：#{obj/chicken}, #{obj/cow}, #{obj/sheep}, #{obj/magic-deer}",
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/flower}", qty: 2},
      {name: "#{item/jelly}", qty: 2},
      {name: "#{item/poop}", qty: 2},
    ],
  },
  "flour": {
    name: "面粉",
    value: 5,
    desc: [
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/wheat}", qty: 2},
    ],
  },
  "beet-seeds": {
    name: "甜菜种子",
    value: 7,
    desc: [
      "每次制造4个"
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/beet}", qty: 3},
    ],
  },
  "cotton-seeds": {
    name: "棉花种子",
    value: 4,
    desc: [
      "每次制造4个"
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/fiber}", qty: 3},
    ],
  },
  "pepper-seeds": {
    name: "辣椒种子",
    value: 7,
    desc: [
      "每次制造4个"
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/hot-pepper}", qty: 3},
    ],
  },
  "pumpkin-seeds": {
    name: "南瓜籽",
    value: 7,
    desc: [
      "每次制造4个"
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/pumpkin}", qty: 3},
    ],
  },
  "wheat-seeds": {
    name: "小麦种子",
    value: 7,
    desc: [
      "每次制造4个"
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/wheat}", qty: 3},
    ],
  },
  "tree-sapling": {
    name: "树苗",
    value: 4,
    desc: [
      "每次制造4个",
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/citrus}", qty: 3},
    ],
  },
  "plastic": {
    name: "塑料",
    value: 80,
    desc: [
    ],
    ingrd: [
      "#{struct/factory}",
      {name: "#{item/bottled-oil}", qty: 2},
      {name: "#{item/coal}", qty: 20},
    ],
  },
  "fiberglass": {
    name: "玻璃纤维",
    value: 2650,
    desc: [
    ],
    ingrd: [
      "#{struct/factory}",
      {name: "#{item/glass}", qty: 5},
      {name: "#{item/plastic}", qty: 5},
      {name: "#{item/royal-clothing}", qty: 5},
    ],
  },
  "electronics": {
    name: "电子芯片",
    value: 3400,
    desc: [
    ],
    ingrd: [
      "#{struct/factory}",
      {name: "#{item/crystal}", qty: 10},
      {name: "#{item/plastic}", qty: 10},
      {name: "#{item/royal-steel}", qty: 5},
    ],
  },
  "transmutation": {
    name: "嬗变学",
    desc: [
      "随机生成一个#{item/ruby}，#{item/emerald}，#{item/topaz}或#{item/amethyst}"
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/steel}", qty: 1},
      {name: "#{item/coal}", qty: 15},
    ],
  },
  "green-pigment": {
    name: "绿色墨水",
    value: 45,
    desc: [
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/cactus-fruit}", qty: 10},
      {name: "#{item/seaweed}", qty: 10},
      {name: "#{item/jelly}", qty: 10},
    ],
  },
  "purple-pigment": {
    name: "紫色墨水",
    value: 130,
    desc: [
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/beet}", qty: 10},
      {name: "#{item/nightshade}", qty: 10},
      {name: "#{item/lavender}", qty: 10},
    ],
  },
  "fossil": {
    name: "化石",
    value: 200,
    desc: [
      "只能在#{land/grass-born 草地}的#{obj/dig-spot}挖出"
    ],
  },
  "sphynx": {
    name: "斯芬克斯",
    value: 200,
    desc: [
      "只能在#{land/ancient-galaxy 沙漠}的#{obj/dig-spot}挖出"
    ],
  },
  "kapala": {
    name: "嘎巴拉碗",
    value: 200,
    desc: [
      "只能在#{land/skull-galaxy 墓地}的#{obj/dig-spot}挖出"
    ],
  },
  "frozen-relic": {
    name: "被冰冻的遗物",
    value: 200,
    desc: [
      "只能在#{land/frozen-galaxy 雪地}的#{obj/dig-spot}挖出"
    ],
  },
  "anchor": {
    name: "锚",
    value: 200,
    desc: [
      "只能在#{land/grass-born 草地}的#{struct/fish-trap}捕获",
    ],
  },
  "sunken-ankh": {
    name: "沉没的安卡",
    value: 200,
    desc: [
      "只能在#{land/ancient-galaxy 沙漠}的#{struct/fish-trap}捕获",
    ],
  },
  "golden-egg": {
    name: "金蛋",
    value: 500,
    desc: [
    ],
    source: [
      "#{obj/chicken}",
    ],
  },
  "bottled-water": {
    name: "瓶装水",
    value: 35,
    desc: [
      "装备#{item/bottle}可取水",
      "可用来给挖好的坑浇水，但很快你就有#{item/water-shovel}了",
    ],
  },
  "berry": {
    name: "浆果",
    value: 1,
    energy: 8,
    desc: [
    ],
    source: [
      "#{obj/bush}",
    ],
  },
  "citrus": {
    name: "柑橘",
    energy: 12,
    value: 1,
    desc: [
      "有一定概率在砍#{obj/tree}时掉落"
    ],
    source: [
      "#{obj/tree}",
    ],
  },
  "beet": {
    name: "甜菜",
    value: 2,
    energy: 12,
    desc: [
    ],
    source: [
      "#{obj/beet}",
      "#{obj/giant-beet}",
    ],
  },
  "sugar": {
    name: "糖",
    value: 5,
    desc: [
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/beet}", qty: 2},
    ],
  },
  "cheese": {
    name: "奶酪",
    value: 40,
    energy: 24,
    desc: [
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/bottled-milk}", qty: 1},
    ],
  },
  "mayo": {
    name: "蛋黄酱",
    value: 4,
    energy: 32,
    desc: [
    ],
    ingrd: [
      "#{struct/windmill}",
      {name: "#{item/egg}", qty: 2},
    ],
  },
  "egg": {
    name: "鸡蛋",
    value: 1,
    energy: 16,
    desc: [
    ],
    source: [
      "#{obj/chicken}",
    ]
  },
  "bottled-milk": {
    name: "瓶装牛奶",
    value: 38,
    desc: [
      "装备#{item/bottle}和#{obj/cow}交互",
    ],
    source: [
      "#{obj/cow}",
    ]
  },
  "meat": {
    name: "肉块",
    value: 2,
    energy: 18,
    desc: [
    ],
    source: [
      "#{obj/chicken}",
      "#{obj/cow}",
      "#{obj/sheep}",
    ]
  },
  "bottled-fairy": {
    name: "瓶装精灵",
    value: 75,
    desc: [
      "装备#{item/bottle}可捕捉#{obj/fairy}",
    ],
  },
  "cactus-fruit": {
    name: "仙人掌果",
    value: 1,
    energy: 12,
    desc: [
    ],
    source: [
      "#{obj/cactus}",
    ],
  },
  "hot-pepper": {
    name: "辣椒",
    value: 2,
    energy: 12,
    desc: [
    ],
    source: [
      "#{obj/hot-pepper}",
    ],
  },
  "pumpkin": {
    name: "南瓜",
    value: 2,
    energy: 24,
    desc: [
    ],
    source: [
      "#{obj/pumpkin}",
    ],
  },
  "fish": {
    name: "鱼",
    value: 2,
    energy: 16,
    desc: [
    ],
    source: [
      "#{struct/fish-trap}",
    ],
  },
  "seaweed": {
    name: "海带",
    value: 1,
    energy: 8,
    desc: [
    ],
    source: [
      "#{struct/fish-trap}",
    ],
  },
  "pizza": {
    name: "披萨",
    value: 50,
    energy: 64,
    desc: [
    ],
    ingrd: [
      "#{struct/cookpot}",
      {name: "#{item/bread}", qty: 1},
      {name: "#{item/cheese}", qty: 1},
    ],
  },
  "cookies": {
    name: "饼干",
    value: 12,
    energy: 52,
    desc: [
    ],
    ingrd: [
      "#{struct/cookpot}",
      {name: "#{item/flour}", qty: 1},
      {name: "#{item/sugar}", qty: 1},
    ],
  },
  "sushi": {
    name: "寿司",
    value: 5,
    energy: 32,
    desc: [
    ],
    ingrd: [
      "#{struct/cookpot}",
      {name: "#{item/fish}", qty: 1},
      {name: "#{item/seaweed}", qty: 1},
    ],
  },
  "soup": {
    name: "汤",
    value: 45,
    energy: 56,
    desc: [
    ],
    ingrd: [
      "#{struct/cookpot}",
      {name: "#{item/bottled-milk}", qty: 1},
      {name: "#{item/beet}", qty: 1},
      {name: "#{item/pumpkin}", qty: 1},
    ],
  },
  "sandwich": {
    name: "三明治",
    value: 60,
    energy: 100,
    desc: [
    ],
    ingrd: [
      "#{struct/cookpot}",
      {name: "#{item/bread}", qty: 1},
      {name: "#{item/cheese}", qty: 1},
      {name: "#{item/mayo}", qty: 1},
      {name: "#{item/egg}", qty: 2},
    ],
  },
  "fruit-salad": {
    name: "水果沙拉",
    value: 4,
    energy: 40,
    desc: [
    ],
    ingrd: [
      "#{struct/cookpot}",
      {name: "#{item/berry}", qty: 1},
      {name: "#{item/citrus}", qty: 1},
      {name: "#{item/cactus-fruit}", qty: 1},
    ],
  },
  "ice-cream": {
    name: "冰淇淋",
    value: 45,
    energy: 50,
    desc: [
    ],
    ingrd: [
      "#{struct/cookpot}",
      {name: "#{item/bottled-milk}", qty: 1},
      {name: "#{item/sugar}", qty: 1},
    ],
  },
  "meat-skewer": {
    name: "肉串",
    value: 8,
    energy: 50,
    desc: [
    ],
    ingrd: [
      "#{struct/cookpot}",
      {name: "#{item/cooked-meat}", qty: 1},
      {name: "#{item/hot-pepper}", qty: 1},
    ],
  },
  "dino-egg": {
    name: "恐龙蛋",
    value: 200,
    energy: undefined,
    desc: [
      "只能在#{land/fire-galaxy 焦土}的#{obj/dig-spot}挖出"
    ],
  },
  "skeleton-fish": {
    name: "骷髅鱼",
    value: 200,
    energy: undefined,
    desc: [
      "只能在#{land/skull-galaxy 墓地}的#{struct/fish-trap}捕获"
    ],
  },
  "frozen-squid": {
    name: "冰冻鱿鱼",
    value: 200,
    energy: undefined,
    desc: [
      "只能在#{land/frozen-galaxy 雪地}的#{struct/fish-trap}捕获"
    ],
  },
  "lava-eel": {
    name: "熔岩鳗",
    value: 200,
    desc: [
      "只能在#{land/fire-galaxy 焦土}的#{struct/fish-trap}捕获"
    ],
  },
  "bomb": {
    name: "炸弹",
    value: 250,
    desc: [
      "爆炸",
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/jelly}", qty: 2},
      {name: "#{item/iron-ingot}", qty: 4},
      {name: "#{item/coal}", qty: 2},
    ],
  },
  "emp-grenade": {
    name: "电磁脉冲手雷",
    value: 3700,
    desc: [
      "大爆炸",
    ],
    ingrd: [
      "#{struct/factory}",
      {name: "#{item/bomb}", qty: 1},
      {name: "#{item/electronics}", qty: 1},
    ],
  },
  "healing-potion": {
    name: "治疗药剂",
    value: 250,
    desc: [
      "回血回能量",
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/flower}", qty: 10},
      {name: "#{item/citrus}", qty: 10},
      {name: "#{item/wheat}", qty: 10},
      {name: "#{item/bottled-torchbug}", qty: 5},
    ],
  },
  "thunderstrike": {
    name: "闪雷",
    value: 320,
    desc: [
      "给予#{buff/thunderbound}"
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/topaz}", qty: 1},
      {name: "#{item/crystal}", qty: 5},
      {name: "#{item/pumpkin}", qty: 5},
      {name: "#{item/bottled-torchbug}", qty: 5},
    ],
  },
  "anas-delight": {
    name: "安娜的最爱",
    value: 320,
    desc: [
      "给予#{buff/glittery}"
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/emerald}", qty: 1},
      {name: "#{item/sugar}", qty: 5},
      {name: "#{item/flower}", qty: 5},
      {name: "#{item/bottled-butterfly}", qty: 5},
    ],
  },
  "liquid-luck": {
    name: "液态好运",
    value: 320,
    desc: [
      "给予#{buff/lucky}"
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/amethyst}", qty: 1},
      {name: "#{item/nightshade}", qty: 5},
      {name: "#{item/bone}", qty: 5},
      {name: "#{item/bottled-beetle}", qty: 5},
    ],
  },
  "wisdom-draught": {
    name: "智慧之水",
    value: 330,
    desc: [
      "给予#{buff/wise}"
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/amethyst}", qty: 1},
      {name: "#{item/paper}", qty: 5},
      {name: "#{item/beet}", qty: 5},
      {name: "#{item/bottled-beetle}", qty: 5},
    ],
  },
  "mandragora": {
    name: "曼陀罗",
    value: 320,
    desc: [
      "给予#{buff/venomous}"
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/emerald}", qty: 1},
      {name: "#{item/lavender}", qty: 5},
      {name: "#{item/cactus-fruit}", qty: 5},
      {name: "#{item/bottled-butterfly}", qty: 5},
    ],
  },
  "bloodfury-cocktail": {
    name: "血怒鸡尾酒",
    value: 550,
    desc: [
      "给予#{buff/enraged}"
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/ruby}", qty: 1},
      {name: "#{item/bomb}", qty: 1},
      {name: "#{item/hot-pepper}", qty: 5},
      {name: "#{item/bottled-deathmoth}", qty: 5},
    ],
  },
  "dragon-philtre": {
    name: "巨龙神油",
    value: 470,
    desc: [
      "给予#{buff/dragonheart}"
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/ruby}", qty: 1},
      {name: "#{item/cinderbloom}", qty: 5},
      {name: "#{item/steel}", qty: 2},
      {name: "#{item/bottled-deathmoth}", qty: 5},
    ],
  },
  "greedy-mixture": {
    name: "贪心剂",
    value: 350,
    desc: [
      "给予#{buff/greedy}"
    ],
    ingrd: [
      "#{struct/cauldron}",
      {name: "#{item/topaz}", qty: 1},
      {name: "#{item/nightshade}", qty: 5},
      {name: "#{item/leather}", qty: 2},
      {name: "#{item/bottled-torchbug}", qty: 5},
    ],
  },
  "sage-scroll": {
    name: "贤者卷轴",
    value: 350,
    desc: [
      "给予很多经验"
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/green-pigment}", qty: 5},
      {name: "#{item/paper}", qty: 5},
      {name: "#{item/bottled-fairy}", qty: 1},
    ],
  },
  "builder-scroll": {
    name: "建造者卷轴",
    value: 350,
    desc: [
      "提高建筑生产速度"
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/green-pigment}", qty: 5},
      {name: "#{item/paper}", qty: 5},
      {name: "#{item/bottled-torchbug}", qty: 2},
    ],
  },
  "druid-scroll": {
    name: "德鲁伊卷轴",
    value: 325,
    desc: [
      "在周围生成很多植物"
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/green-pigment}", qty: 5},
      {name: "#{item/paper}", qty: 5},
      {name: "#{item/cinderbloom}", qty: 5},
    ],
  },
  "wizard-scroll": {
    name: "巫师卷轴",
    value: 900,
    desc: [
      "将周围资源转化为动物"
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/purple-pigment}", qty: 5},
      {name: "#{item/paper}", qty: 5},
      {name: "#{item/bottled-deathmoth}", qty: 5},
    ],
  },
  "miner-scroll": {
    name: "矿工卷轴",
    value: 880,
    desc: [
      "在周围生成很多矿物"
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/purple-pigment}", qty: 5},
      {name: "#{item/paper}", qty: 5},
      {name: "#{item/steel}", qty: 3},
    ],
  },
  "demon-scroll": {
    name: "恶魔卷轴",
    value: 800,
    desc: [
      "向各个方向射出火球",
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/purple-pigment}", qty: 5},
      {name: "#{item/paper}", qty: 5},
      {name: "#{item/demon-horn}", qty: 10},
    ],
  },
  "bottled-rainbow": {
    name: "瓶装彩虹",
    value: 40,
    desc: [
      "装备#{item/bottle}和彩虹交互",
    ],
    source: [
      "#{land/grass-rainbow}",
    ]
  },
  "droid": {
    name: "德鲁伊(机器人)",
    desc: [
      "会自动攻击资源、攻击敌人、收集#{struct/fish-trap}、收集动物资源(如从#{obj/sheep}身上取#{item/fiber})、拾起资源，但不会攻击中立动物",
      "可对建筑右键将机器人停在上面提高生产效率50%，但不可和#{struct/power-plant}同时生效",
      "制造的越多每次消耗的材料就越多",
    ],
    ingrd: [
      "#{struct/factory}",
      {name: "#{item/plastic}", qty: 3},
      {name: "#{item/fiberglass}", qty: 3},
      {name: "#{item/electronics}", qty: 3},
    ],
  },
  "landfill": {
    name: "填充土地",
    value: 5,
    desc: [
    ],
    opt_ingrd: [
      [
        "#{struct/flower-press}",
        {name: "#{item/sand}", qty: 2},
        {name: "#{item/poop}", qty: 2},
      ],
    ],
  },
  "great-skull": {
    name: "巨型头骨",
    value: 30,
    desc: [
    ],
    source: [
      "#{obj/big-skeleton}"
    ],
    ingrd: [
      "#{struct/spirit-crystal}",
      {name: "#{item/bone}", qty: 25},
    ],
  },
  "spirit-orb": {
    name: "克服之证",
    value: 2000,
    desc: [
      "使用它来增加你的属性",
      "可选择：增加1点HP上限，增加能量上限，增加1点攻击力，或升1级",
    ],
    ingrd: [
      "#{struct/spirit-crystal}",
      {name: "#{item/great-skull}", qty: 10},
      {name: "#{item/purple-pigment}", qty: 10},
      {name: "#{item/bottled-fairy}", qty: 5},
    ],
    source: [
      "#{obj/big-chest}"
    ],
  },
  "basic-pickaxe": {
    name: "普通矿镐",
    desc: [
      "初始装备",
    ],
  },
  "slimy-pickaxe": {
    name: "黏黏矿镐",
    desc: [
      "伤害提高了75%",
      "杀掉史莱姆时额外获得50%黏液",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 8},
      {name: "#{item/wood}", qty: 8},
      {name: "#{item/jelly}", qty: 4},
    ],
  },
  "bone-pickaxe": {
    name: "骨制矿镐",
    desc: [
      "伤害提高了150%",
      "杀掉骷髅时额外获得50%骨头",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 16},
      {name: "#{item/brick}", qty: 8},
      {name: "#{item/bone}", qty: 4},
    ],
  },
  "fiery-pickaxe": {
    name: "火焰矿镐",
    desc: [
      "伤害提高了225%",
      "攻击会让目标燃烧",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/steel}", qty: 12},
      {name: "#{item/glass}", qty: 12},
      {name: "#{item/hot-pepper}", qty: 8},
    ],
  },
  "crystal-pickaxe": {
    name: "水晶矿镐",
    desc: [
      "伤害提高了300%",
      "所有资源现在都有几率掉落宝石",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/royal-steel}", qty: 3},
      {name: "#{item/plastic}", qty: 5},
      {name: "#{item/crystal}", qty: 10},
    ],
  },
  "demon-pickaxe": {
    name: "恶魔矿镐",
    desc: [
      "伤害提高了375%",
      "物品被摧毁时爆炸",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/electronics}", qty: 3},
      {name: "#{item/plastic}", qty: 5},
      {name: "#{item/demon-horn}", qty: 50},
    ],
  },
  "shovel": {
    name: "铲子",
    desc: [
      "挖掘泥土来种菜或者寻找物品",
      "挖掘范围1格"
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 4},
      {name: "#{item/wood}", qty: 4},
    ],
  },
  "bone-sword": {
    name: "骨剑",
    desc: [
      "对敌人额外造成50%伤害",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 8},
      {name: "#{item/bone}", qty: 2},
    ],
  },
  "golden-sword": {
    name: "金剑",
    desc: [
      "对敌人额外造成100%伤害",
      "敌人掉落金币",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/steel}", qty: 40},
      {name: "#{item/thread}", qty: 10},
      {name: "#{item/gold-ingot}", qty: 10},
      {name: "#{item/topaz}", qty: 2},
    ],
  },
  "druid-sword": {
    name: "德鲁伊剑",
    desc: [
      "对敌人额外造成150%伤害",
      "敌人掉落植物",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/royal-steel}", qty: 2},
      {name: "#{item/leather}", qty: 5},
      {name: "#{item/flower}", qty: 50},
      {name: "#{item/nightshade}", qty: 20},
      {name: "#{item/lavender}", qty: 20},
    ],
  },
  "crystal-sword": {
    name: "水晶剑",
    desc: [
      "对敌人额外造成200%伤害",
      "这把剑也能攻击资源",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/royal-steel}", qty: 5},
      {name: "#{item/royal-clothing}", qty: 5},
      {name: "#{item/crystal}", qty: 50},
      {name: "#{item/amethyst}", qty: 5},
    ],
  },
  "demon-sword": {
    name: "恶魔之剑",
    desc: [
      "对敌人额外造成250%伤害",
      "攻击时有30%的几率释放火球",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/electronics}", qty: 10},
      {name: "#{item/fiberglass}", qty: 10},
      {name: "#{item/demon-horn}", qty: 100},
      {name: "#{item/ruby}", qty: 10},
    ],
  },
  "short-bow": {
    name: "短弓",
    desc: [
      "射出背包中的箭",
      "按住攻击键拔箭之后再放开来射击",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/wood}", qty: 8},
      {name: "#{item/thread}", qty: 2},
      {name: "#{item/arrow}", qty: 2},
    ],
  },
  "skull-bow": {
    name: "骷髅弓",
    desc: [
      "箭枝现在可以燃烧目标",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 8},
      {name: "#{item/leather}", qty: 2},
      {name: "#{item/bone}", qty: 4},
    ],
  },
  "crystal-bow": {
    name: "水晶弓",
    desc: [
      "箭枝现在可以冰冻目标",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/steel}", qty: 6},
      {name: "#{item/glass}", qty: 3},
      {name: "#{item/crystal}", qty: 12},
    ],
  },
  "demon-bow": {
    name: "恶魔弓",
    desc: [
      "现在箭枝接触到目标会爆炸",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/royal-steel}", qty: 5},
      {name: "#{item/royal-clothing}", qty: 5},
      {name: "#{item/demon-horn}", qty: 50},
    ],
  },
  "basic-amulet": {
    name: "普通护身符",
    desc: [
      "额外获得25%资源",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 4},
      {name: "#{item/ruby}", qty: 1},
      {name: "#{item/emerald}", qty: 1},
    ],
  },
  "slimy-amulet": {
    name: "黏黏护身符",
    desc: [
      "额外获得50%资源",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 4},
      {name: "#{item/topaz}", qty: 1},
      {name: "#{item/amethyst}", qty: 1},
      {name: "#{item/jelly}", qty: 8},
    ],
  },
  "bone-amulet": {
    name: "骨制护身符",
    desc: [
      "额外获得75%资源",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/steel}", qty: 8},
      {name: "#{item/ruby}", qty: 1},
      {name: "#{item/amethyst}", qty: 1},
      {name: "#{item/bone}", qty: 20},
    ],
  },
  "crystal-amulet": {
    name: "水晶护身符",
    desc: [
      "额外获得100%资源",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/royal-steel}", qty: 2},
      {name: "#{item/emerald}", qty: 2},
      {name: "#{item/topaz}", qty: 2},
      {name: "#{item/crystal}", qty: 40},
    ],
  },
  "demon-amulet": {
    name: "恶魔护身符",
    desc: [
      "额外获得125%资源",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/electronics}", qty: 5},
      {name: "#{item/ruby}", qty: 5},
      {name: "#{item/emerald}", qty: 5},
      {name: "#{item/topaz}", qty: 5},
      {name: "#{item/amethyst}", qty: 5},
      {name: "#{item/demon-horn}", qty: 80},
    ],
  },
  "basic-boots": {
    name: "普通靴子",
    desc: [
      "移动速度增加25%",
      "受到攻击时有10%几率闪避",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 5},
      {name: "#{item/thread}", qty: 5},
      {name: "#{item/jelly}", qty: 10},
    ],
  },
  "metal-boots": {
    name: "金属靴子",
    desc: [
      "移动速度增加45%",
      "受到攻击时有15%几率闪避",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/steel}", qty: 5},
      {name: "#{item/leather}", qty: 5},
      {name: "#{item/bone}", qty: 20},
    ],
  },
  "master-boots": {
    name: "大师靴子",
    desc: [
      "移动速度增加60%",
      "受到攻击时有20%几率闪避",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/steel}", qty: 5},
      {name: "#{item/royal-clothing}", qty: 5},
      {name: "#{item/lavender}", qty: 40},
    ],
  },
  "robotic-boots": {
    name: "机械靴子",
    desc: [
      "移动速度增加70%",
      "受到攻击时有25%几率闪避",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/electronics}", qty: 5},
      {name: "#{item/fiberglass}", qty: 5},
      {name: "#{item/cinderbloom}", qty: 50},
    ],
  },
  "basic-gloves": {
    name: "普通手套",
    desc: [
      "攻击速度提高了20%",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 5},
      {name: "#{item/thread}", qty: 5},
      {name: "#{item/bone}", qty: 10},
    ],
  },
  "metal-gloves": {
    name: "金属手套",
    desc: [
      "攻击速度提高了40%",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/steel}", qty: 5},
      {name: "#{item/leather}", qty: 5},
      {name: "#{item/nightshade}", qty: 20},
    ],
  },
  "master-gloves": {
    name: "大师手套",
    desc: [
      "攻击速度提高了60%",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/steel}", qty: 5},
      {name: "#{item/royal-clothing}", qty: 5},
      {name: "#{item/lavender}", qty: 40},
    ],
  },
  "robotic-gloves": {
    name: "机械手套",
    desc: [
      "攻击速度提高了70%",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/electronics}", qty: 5},
      {name: "#{item/fiberglass}", qty: 5},
      {name: "#{item/cinderbloom}", qty: 50},
    ],
  },
  "moldy-book": {
    name: "发霉的书",
    desc: [
      "经验获取增加了15%",
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/thread}", qty: 5},
      {name: "#{item/paper}", qty: 5},
    ],
  },
  "slimy-tome": {
    name: "黏黏手册",
    desc: [
      "经验获取增加了30%",
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/leather}", qty: 5},
      {name: "#{item/paper}", qty: 5},
      {name: "#{item/jelly}", qty: 15},
    ],
  },
  "necronomicon": {
    name: "死灵书",
    desc: [
      "经验获取增加了45%",
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/royal-clothing}", qty: 10},
      {name: "#{item/paper}", qty: 10},
      {name: "#{item/bone}", qty: 20},
    ],
  },
  "glacial-scriptures": {
    name: "冰川圣典",
    desc: [
      "经验获取增加了60%",
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/fiberglass}", qty: 5},
      {name: "#{item/paper}", qty: 20},
      {name: "#{item/crystal}", qty: 40},
    ],
  },
  "hellfire-glyphs": {
    name: "地狱火符集",
    desc: [
      "经验获取增加了75%",
    ],
    ingrd: [
      "#{struct/inscription-table}",
      {name: "#{item/fiberglass}", qty: 5},
      {name: "#{item/paper}", qty: 50},
      {name: "#{item/demon-horn}", qty: 50},
    ],
  },
  // "basic-backpack": {
  //   name: "普通背包",
  //   desc: [
  //     "增加4格背包栏位",
  //   ],
  // },
  "small-backpack": {
    name: "小型背包",
    desc: [
      "增加4格背包栏位",
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/leather}", qty: 4},
      {name: "#{item/flower}", qty: 2},
    ],
  },
  "medium-backpack": {
    name: "中型背包",
    desc: [
      "增加4格背包栏位",
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/leather}", qty: 4},
      {name: "#{item/thread}", qty: 4},
      {name: "#{item/jelly}", qty: 8},
    ],
  },
  "big-backpack": {
    name: "大型背包",
    desc: [
      "增加4格背包栏位",
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/royal-clothing}", qty: 1},
      {name: "#{item/thread}", qty: 8},
      {name: "#{item/bone}", qty: 12},
    ],
  },
  "huge-backpack": {
    name: "巨型背包",
    desc: [
      "增加4格背包栏位",
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/royal-clothing}", qty: 3},
      {name: "#{item/leather}", qty: 6},
      {name: "#{item/crystal}", qty: 30},
    ],
  },
  "tycoon-backpack": {
    name: "无底背包",
    desc: [
      "增加4格背包栏位",
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/fiberglass}", qty: 2},
      {name: "#{item/royal-clothing}", qty: 4},
      {name: "#{item/demon-horn}", qty: 40},
    ],
  },
  // "basic-wallet": {
  //   name: "普通钱包",
  //   desc: [
  //     // "金币价值提高了25%",
  //     "初始钱包",
  //   ],
  // },
  "small-wallet": {
    name: "小型钱包",
    desc: [
      "金币价值提高了50%",
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/thread}", qty: 8},
      {name: "#{item/gold-ingot}", qty: 4},
    ],
  },
  "medium-wallet": {
    name: "中型钱包",
    desc: [
      "金币价值提高了75%",
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/thread}", qty: 8},
      {name: "#{item/emerald}", qty: 1},
      {name: "#{item/topaz}", qty: 1},
      {name: "#{item/hot-pepper}", qty: 12},
    ],
  },
  "big-wallet": {
    name: "大型钱包",
    desc: [
      "金币价值提高了100%",
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/leather}", qty: 10},
      {name: "#{item/ruby}", qty: 1},
      {name: "#{item/amethyst}", qty: 1},
      {name: "#{item/nightshade}", qty: 20},
    ],
  },
  "huge-wallet": {
    name: "巨型钱包",
    desc: [
      "金币价值提高了125%",
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/royal-clothing}", qty: 5},
      {name: "#{item/ruby}", qty: 2},
      {name: "#{item/emerald}", qty: 2},
      {name: "#{item/topaz}", qty: 2},
      {name: "#{item/amethyst}", qty: 2},
      {name: "#{item/lavender}", qty: 40},
    ],
  },
  "tycoon-wallet": {
    name: "无底钱包",
    desc: [
      "金币价值提高了150%",
    ],
    ingrd: [
      "#{struct/sewing-station}",
      {name: "#{item/fiberglass}", qty: 5},
      {name: "#{item/ruby}", qty: 3},
      {name: "#{item/emerald}", qty: 3},
      {name: "#{item/topaz}", qty: 3},
      {name: "#{item/amethyst}", qty: 3},
      {name: "#{item/cinderbloom}", qty: 60},
    ],
  },
  "ancient-seal": {
    name: "上古印章",
    desc: [
      "为完成#{land/ancient-dungeon 古代墓地}的人准备的奖励",
    ],
  },
  "skull-seal": {
    name: "骷髅印章",
    desc: [
      "为完成#{land/skull-dungeon 骷髅迷宫}的人准备的奖励",
    ],
  },
  "frozen-seal": {
    name: "冰冻印章",
    desc: [
      "为完成#{land/frozen-dungeon 水晶洞窟}的人准备的奖励",
    ],
  },
  "fire-seal": {
    name: "火焰印章",
    desc: [
      "为完成#{land/fire-dungeon 火焰神庙}的人准备的奖励",
    ],
  },
  "ancient-galaxy-seal": {
    name: "上古银河印章",
    desc: [
      "为完成#{land/ancient-galaxy 上古银河谜题}的人准备的奖励",
    ],
  },
  "skull-galaxy-seal": {
    name: "骷髅银河印章",
    desc: [
      "为完成#{land/skull-galaxy 骷髅银河谜题}的人准备的奖励",
    ],
  },
  "frozen-galaxy-seal": {
    name: "冰冻银河印章",
    desc: [
      "为完成#{land/frozen-galaxy 冰冻银河谜题}的人准备的奖励",
    ],
  },
  "fire-galaxy-seal": {
    name: "火焰银河印章",
    desc: [
      "为完成#{land/fire-galaxy 火焰银河谜题}的人准备的奖励",
    ],
  },
  "museum-seal": {
    name: "博物馆印章",
    desc: [
      "为完成所有#{land/grass-museum 博物馆}合集的人准备的奖励",
    ],
  },
  "nerdy-glasses": {
    name: "书呆子眼睛",
    desc: [
      "获得经验值增加20%",
      "来自随机#{obj/big-chest}",
    ],
  },
  "top-hat": {
    name: "礼帽",
    desc: [
      "金币价值提高了50%",
      "来自随机#{obj/big-chest}",
    ],
  },
  "pink-bow": {
    name: "粉红蝴蝶结",
    desc: [
      "动物掉落物品增加25%，并且生成速度加快",
      "来自#{land/ancient-princess}",
    ],
  },
  "lantern": {
    name: "灯笼",
    desc: [
      "提高黑暗中的视野范围",
      "来自随机#{obj/big-chest}",
    ],
  },
  "skull-key": {
    name: "骷髅钥匙",
    desc: [
      "免费打开所有#{obj/big-chest}",
      "来自#{land/skull-obelisk}",
    ],
  },
  "skeleton-mask": {
    name: "骷髅面具",
    desc: [
      "#{obj/skeleton}和#{obj/big-skeleton}不再攻击你",
      "来自随机#{obj/big-chest}",
    ],
  },
  "fairy-aura": {
    name: "精灵光环",
    desc: [
      "自动回复生命值与能量",
      "来自#{land/grass-fairy-queen}",
    ],
  },
  "quiver": {
    name: "箭筒",
    desc: [
      "弓箭不再消耗箭矢",
      "来自随机#{obj/big-chest}",
    ],
  },
  "vampyr-wings": {
    name: "吸血鬼翅膀",
    desc: [
      "击杀敌人时回复生命值",
      "来自随机#{obj/big-chest}",
    ],
  },
  "shield": {
    name: "盾",
    desc: [
      "增加35%回避率",
      "来自随机#{obj/big-chest}",
    ],
  },
  "magic-scepter": {
    name: "魔法权杖",
    desc: [
      "你的#{item/thunder-rod -法杖}拥有无限充能",
      "来自#{land/fire-wizard-tower}",
    ],
  },
  "holy-relic": {
    name: "神圣遗物",
    desc: [
      "自动攻击附近的#{obj/skeleton}，#{obj/big-skeleton}和#{obj/demon}",
      "来自随机#{obj/big-chest}",
    ],
  },
  // "stamina-vessel": {
  //   name: "耐力之瓶",
  //   desc: [
  //     "最大能量提升",
  //   ],
  // },
  // "heart-container": {
  //   name: "心之容器",
  //   desc: [
  //     "最大生命值提升",
  //   ],
  // },
  "water-shovel": {
    name: "水铲",
    desc: [
      "挖掘同时浇灌土地",
      "挖掘范围2x2格",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/iron-ingot}", qty: 12},
      {name: "#{item/wood}", qty: 8},
      {name: "#{item/jelly}", qty: 8},
    ],
  },
  "nomads-shovel": {
    name: "游牧铲",
    desc: [
      "挖掘同时获得沙子",
      "挖掘范围3x3格",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/steel}", qty: 10},
      {name: "#{item/sand}", qty: 32},
      {name: "#{item/bottled-beetle}", qty: 5},
    ],
  },
  "royal-shovel": {
    name: "皇家铲",
    desc: [
      "挖掘同时获得矿石",
      "挖掘范围4x4格",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/royal-steel}", qty: 2},
      {name: "#{item/plastic}", qty: 4},
      {name: "#{item/topaz}", qty: 8},
    ],
  },
  "robotic-shovel": {
    name: "机械铲",
    desc: [
      "挖掘同时获得稀有物品",
      "挖掘范围5x5格",
    ],
    ingrd: [
      "#{struct/forge}",
      {name: "#{item/electronics}", qty: 2},
      {name: "#{item/plastic}", qty: 6},
      {name: "#{item/bottled-deathmoth}", qty: 16},
    ],
  },
  "thunder-rod": {
    name: "雷杖",
    desc: [
      "发出1道射线，用来电击敌人与给建筑物充能",
      
      "来自#{land/ancient-dungeon}",
    ],
  },
  "ice-rod": {
    name: "冰杖",
    desc: [
      "射出1发冰锥，用来冻结物体与敌人",
      "来自#{land/frozen-dungeon}",
    ],
  },
  "fire-rod": {
    name: "火杖",
    desc: [
      "射出1发扭曲前进的火球，用来爆破物体与敌人",
      "来自#{land/fire-dungeon}",
    ],
  },
  "necro-rod": {
    name: "死灵法杖",
    desc: [
      "使用它来召唤#{obj/skeleton}，有概率召唤出#{obj/big-skeleton}",
      "来自#{land/skull-dungeon}",
    ],
  },
  "obliterator": {
    name: "毁灭者",
    desc: [
      "使用它能摧毁任何东西，甚至可以挖开土地",
    ],
    ingrd: [
      "#{struct/factory}",
      {name: "#{item/fiberglass}", qty: 100},
      {name: "#{item/electronics}", qty: 100},
      {name: "#{item/great-skull}", qty: 100},
    ],
  },
  "meteor-rod": {
    name: "流星法杖",
    desc: [
      "比火焰法杖更加强力，一次射出5发火球",
    ],
    ingrd: [
      "#{struct/spirit-crystal}",
      {name: "#{item/lava-eel}", qty: 10},
      {name: "#{item/fossil}", qty: 10},
      {name: "#{item/great-skull}", qty: 100},
    ],
  },
  "storm-rod": {
    name: "风暴法杖",
    desc: [
      "比雷电法杖更加强力，发出3道射线",
    ],
    ingrd: [
      "#{struct/spirit-crystal}",
      {name: "#{item/anchor}", qty: 10},
      {name: "#{item/sunken-ankh}", qty: 10},
      {name: "#{item/great-skull}", qty: 100},
    ],
  },
  "blizzard-rod": {
    name: "暴雪法杖",
    desc: [
      "比冰霜法杖更加强力，一次射出7发冰锥",
    ],
    ingrd: [
      "#{struct/spirit-crystal}",
      {name: "#{item/frozen-relic}", qty: 10},
      {name: "#{item/frozen-squid}", qty: 10},
      {name: "#{item/great-skull}", qty: 100},
    ],
  },
  "death-rod": {
    name: "死亡法杖",
    desc: [
      "比死灵法杖更加强力，召唤更多#{obj/skeleton}和#{obj/big-skeleton}",
    ],
    ingrd: [
      "#{struct/spirit-crystal}",
      {name: "#{item/skeleton-fish}", qty: 10},
      {name: "#{item/sphynx}", qty: 10},
      {name: "#{item/great-skull}", qty: 100},
    ],
  },
};

var items = {};
for (let key in items_rawdata) {
  let data = items_rawdata[key];
  data["key"] = key;
  items[key] = Item.newInstance(data);
}










var structs_rawdata = {
  "furnace": {
    name: "熔炉",
    desc: [],
    // prod: [
    //   "#{item/coal}",
    //   "#{item/brick}",
    //   "#{item/iron-ingot}",
    //   "#{item/gold-ingot}",
    //   "#{item/steel}",
    //   "#{item/royal-steel}",
    //   "#{item/bread}",
    //   "#{item/cooked-fish}",
    //   "#{item/cooked-meat}"
    // ],
    ingrd: [
      {name: "#{item/stone}", qty:10},
    ],
  },
  "forge": {
    name: "锻造台",
    desc: [],
    ingrd: [
      {name: "#{item/brick}", qty:10},
      {name: "#{item/iron-ingot}", qty:4},
    ],
    // prod: [
    //   "#{item/coin}",
    //   "#{item/key}",
    //   "#{item/arrow}",
    //   "#{item/bottle}",
    //   "#{item/shovel 铲子}",
    //   "#{item/basic-pickaxe 矿镐}",
    //   "#{item/short-bow 弓}",
    //   "#{item/basic-amulet 护符}",
    //   "#{item/bone-sword 剑}",
    // ],
  },
  "sewing-station": {
    name: "缝纫站",
    desc: [
    ],
    ingrd: [
      {name: "#{item/fiber}", qty:2},
      {name: "#{item/wood}", qty:10},
      {name: "#{item/brick}", qty:4},
    ],
  },
  "mining-rod": {
    name: "采集杆",
    desc: [
      "自动攻击附近资源并回收",
      "不会攻击生物，不会收集#{struct/fish-trap}"
    ],
    ingrd: [
      {name: "#{item/fiber}", qty:2},
      {name: "#{item/brick}", qty:8},
    ],
  },
  "offshore-drill": {
    name: "海上钻机",
    desc: [
      "必须建在水上"
    ],
    ingrd: [
      {name: "#{item/fiber}", qty:5},
      {name: "#{item/brick}", qty:20},
    ],
  },
  "flower-press": {
    name: "花瓣压缩机",
    desc: [],
    ingrd: [
      {name: "#{item/flower}", qty:10},
      {name: "#{item/steel}", qty:5},
      {name: "#{item/brick}", qty:30},
    ],
  },
  "factory": {
    name: "工厂",
    desc: [],
    ingrd: [
      {name: "#{item/glass}", qty:10},
      {name: "#{item/royal-steel}", qty:4},
      {name: "#{item/brick}", qty:20},
    ],
  },
  "power-plant": {
    name: "发电厂",
    desc: [
      "增加覆盖范围内建筑的生产效率"
    ],
    ingrd: [
      {name: "#{item/glass}", qty:10},
      {name: "#{item/electronics}", qty:4},
      {name: "#{item/brick}", qty:20},
    ],
  },
  "ballista": {
    name: "投石器",
    desc: [
      "自动攻击附近敌人"
    ],
    ingrd: [
      {name: "#{item/arrow}", qty:20},
      {name: "#{item/wood}", qty:80},
      {name: "#{item/brick}", qty:20},
    ],
  },
  "bridge": {
    name: "桥",
    desc: [
      "需求材料永远不会上涨",
      "可将建筑修建在上面",
    ],
    ingrd: [
      {name: "#{item/wood}", qty:4},
    ],
  },
  "fish-trap": {
    name: "捕鱼陷阱",
    desc: [
      "约3分钟刷新一次，通常可捕获到#{item/fish} #{item/seaweed} #{item/sand}。解锁#{skill/fishing}可提高效率",
      "在#{land/grass-born 草地}可捕获#{item/anchor}",
      "在#{land/ancient-galaxy 沙漠}可捕获#{item/sunken-ankh}",
      "在#{land/skull-galaxy 墓地}可捕获#{item/skeleton-fish}",
      "在#{land/frozen-galaxy 雪地}可捕获#{item/frozen-squid}",
      "在#{land/fire-galaxy 焦土}可捕获#{item/lava-eel}",
    ],
    ingrd: [
      {name: "#{item/wood}", qty: 4},
      {name: "#{item/berry}", qty: 4},
    ]
  },
  "torch": {
    name: "火把",
    desc: [
      "点亮周围"
    ],
    ingrd: undefined,
  },
  "brazier": {
    name: "火盆",
    desc: [],
    ingrd: undefined,
  },
  "windmill": {
    name: "风车",
    desc: [],
    ingrd: [
      {name: "#{item/wood}", qty:40},
      {name: "#{item/brick}", qty:30},
      {name: "#{item/thread}", qty:15},
    ],
  },
  "sprinkler": {
    name: "洒水器",
    desc: [
      "增加附近农作物生长速度"
    ],
    ingrd: [
      {name: "#{item/iron-ingot}", qty:4},
    ],
  },
  "cookpot": {
    name: "烹饪锅",
    desc: [],
    ingrd: undefined,
  },
  "quarry": {
    name: "采石场",
    desc: [
      "周围随机生成矿物"
    ],
    ingrd: undefined,
  },
  "vault": {
    name: "仓库",
    desc: [
      "可存放6个道具，解锁#{skill/architecture}后能存放9个",
      "收集的道具会自动送入仓库，但你在地牢里就没用了",
    ],
    ingrd: [
      {name: "#{item/steel}", qty:3},
      {name: "#{item/brick}", qty:10},
    ],
  },
  "market": {
    name: "市场",
    desc: [
      "可买卖道具，每次进货3种道具，解锁#{skill/supply}可增加进货量至6种"
    ],
    ingrd: [
      {name: "#{item/wood}", qty:40},
      {name: "#{item/brick}", qty:20},
      {name: "#{item/leather}", qty:5},
    ],
  },
  "bank": {
    name: "银行",
    desc: [
      "自动生钱"
    ],
    ingrd: [
      {name: "#{item/gold-ingot}", qty:10},
      {name: "#{item/steel}", qty:1},
      {name: "#{item/brick}", qty:20},
    ],
  },
  "lighthouse": {
    name: "灯塔",
    desc: [
      "必须建在水上",
      "在附近额外获得50%资源",
    ],
    ingrd: undefined,
  },
  "slot-machine": {
    name: "老虎机",
    desc: [
      "可赢取钱、宝石或遗物",
      "集齐2个或以上的图案即中奖，集齐3个能赢取#{feat/winner 头奖}"
    ],
    ingrd: [
      {name: "#{item/electronics}", qty:1},
      {name: "#{item/brick}", qty:20},
    ],
  },
  "inscription-table": {
    name: "铭文台",
    desc: [
      "可制作卷轴和书籍"
    ],
    ingrd: [
      {name: "#{item/wood}", qty:12},
      {name: "#{item/brick}", qty:20},
    ],
  },
  "cauldron": {
    name: "大锅",
    desc: [
      "可制作炸弹和药剂"
    ],
    ingrd: [
      {name: "#{item/flower}", qty:4},
      {name: "#{item/iron-ingot}", qty:8},
      {name: "#{item/brick}", qty:20},
    ],
  },
  "shrine": {
    name: "祭坛",
    desc: [
      "每隔一段时间可激活一个#{buff/shrine-hoarder -祭坛buff}"
    ],
    ingrd: [
      {name: "#{item/crystal}", qty:30},
      {name: "#{item/royal-steel}", qty:1},
      {name: "#{item/brick}", qty:50},
    ],
  },
  "spirit-crystal": {
    name: "灵魂结晶",
    desc: [
    ],
    ingrd: [
      {name: "#{item/crystal}", qty:50},
      {name: "#{item/steel}", qty:20},
    ],
  },
};

var structs = {};
for (let key in structs_rawdata) {
  let data = structs_rawdata[key];
  data["key"] = key;
  structs[key] = Struct.newInstance(data);
}










var lands_rawdata = {
  "grass-born": {
    name: "草地-出生地",
    desc: [
      "伟大旅程的起点！"
    ],
  },
  "grass-beets": {
    name: "草地-巨型甜菜",
    desc: [
      "#{obj/giant-beet}被攻击不会还手(但你下得去手吗)",
      "杀死#{obj/giant-beet}可获得大量#{item/beet}",
    ],
  },
  "grass-fairy-queen": {
    name: "草地-精灵皇后",
    desc: [
      "精灵皇后会在夜间现身",
      "给予1000金币，奖励#{obj/big-chest}内含#{item/fairy-aura}"
    ],
  },
  "grass-island": {
    name: "草地-宝箱岛",
    desc: [
      "简单粗暴给一个#{obj/big-chest}"
    ],
  },
  "grass-museum": {
    name: "草地-博物馆",
    desc: [
      "按要求给予道具，每完成一组会奖励#{obj/big-chest}",
      "完成所有收集，奖励#{item/museum-seal}",
    ],
  },
  "grass-pillars": {
    name: "草地-石柱谜题",
    desc: [
      "依次按下含1,2,3,4个竖条的石柱会奖励#{obj/big-chest}",
      "顺序为右下→左上→右上→左下",
    ],
  },
  "grass-druid": {
    name: "草地-德鲁伊树屋",
    desc: [
      "进入树屋可换装",
      "德鲁伊任务1：给予#{item/bottled-torchbug}(2)，奖励#{item/druid-scroll}(2)",
      "德鲁伊任务2：给予#{item/tree-sapling}(30)，奖励#{obj/small-chest}(2)",
      "德鲁伊任务3：给予#{item/dino-egg}，奖励#{obj/big-chest}",
    ],
  },
  "grass-rainbow": {
    name: "草地-彩虹湖",
    desc: [
      "按照彩虹上的颜色依次打掉对应的蘑菇，奖励#{obj/big-chest}",
      '顺序为<img src="img/other/mushroom-red.png"><img src="img/other/mushroom-orange.png"><img src="img/other/mushroom-yellow.png"><img src="img/other/mushroom-green.png"><img src="img/other/mushroom-blue.png"><img src="img/other/mushroom-purple.png">'
    ],
  },
  "grass-obelisk": {
    name: "草地-采集尖塔",
    desc: [
      "提供#{buff/foraging}"
    ],
  },
  "ancient-galaxy": {
    name: "沙漠-上古银河",
    desc: [
      "移动#{obj/electric-cube}可给附近的#{obj/receptor}充电",
      "建筑外墙有提示，暗格对应的#{obj/receptor}应断电，空格对应的#{obj/receptor}应充电",
      "奖励#{item/ancient-galaxy-seal}"
    ],
  },
  "ancient-dungeon": {
    name: "沙漠-上古墓地",
    desc: [
      '<a href="map-ancient-tomb.html">地图</a>，标注了3个隐藏房间',
      "奖励#{item/thunder-rod} #{item/ancient-seal}",
    ],
  },
  "ancient-eye-statue": {
    name: "沙漠-独眼雕像",
    desc: [
      "用#{item/short-bow 弓}或#{item/ice-rod}攻击眼睛",
      "奖励#{obj/big-chest}",
    ],
  },
  "ancient-monolith": {
    name: "沙漠-象形符号巨石",
    desc: [
      "提示：巨石上有一个月亮和一把剑",
      "夜间用#{item/bone-sword 剑}砍一下巨石",
      "奖励#{obj/big-chest}"
    ],
  },
  "ancient-receptor": {
    name: "沙漠-接收器",
    desc: [
      "用#{item/thunder-rod}电一下#{obj/receptor}，或者喝下#{item/thunderstrike}",
      "奖励#{obj/small-chest}(4)"
    ],
  },
  "ancient-dig": {
    name: "沙漠-挖掘点",
    desc: [
      "下方木牌有提示",
      "上方3个角落都有花，只有一个角落不长花",
      "用#{item/shovel}挖那个角落",
      "奖励#{obj/big-chest}"
    ],
  },
  "ancient-watchers": {
    name: "沙漠-哨兵",
    desc: [
      "4个#{obj/watcher}看守着#{obj/big-chest}",
    ],
  },
  "ancient-princess": {
    name: "沙漠-公主",
    desc: [
      "公主任务1：给予#{item/flower}(40)，奖励#{item/anas-delight}(2)",
      "公主任务2：给予#{item/royal-clothing}(2)，奖励#{obj/big-chest}内含#{item/pink-bow}"
    ],
  },
  "ancient-oldman": {
    name: "沙漠-老人",
    desc: [
      "老人任务：给予#{item/golden-egg}，奖励#{obj/big-chest}"
    ],
  },
  "ancient-obelisk": {
    name: "沙漠-采石尖塔",
    desc: [
      "提供#{buff/mining}"
    ],
  },
  "fire-galaxy": {
    name: "焦土-火焰银河",
    desc: [
      "按下一个#{obj/volcano-pushdown-pillar}会翻转周围4个的状态(灭变亮，亮变灭)",
      "你的目标是使所有#{obj/volcano-pushdown-pillar}都熄灭",
      '这其实是一个经典的智力游戏<a href="https://en.wikipedia.org/wiki/Lights_Out_(game)">Lightsout</a>，我写了一个网页<a href="lightsout.html?galaxy">工具</a>帮你快速解谜',
      "奖励#{item/fire-galaxy-seal} #{obj/small-chest}(4)"
    ],
  },
  "fire-dungeon": {
    name: "焦土-火焰神庙",
    desc: [
      '<a href="map-fire-temple.html">地图</a>，标注了4个隐藏房间',
      "左上角有7个火盆，用火焰武器点燃它们可获得奖励",
      "右边有6个#{obj/volcano-pushdown-pillar}，按一定顺序按下它们会获得奖励，在左下角有两个#{obj/fairy}的房间地板上有提示",
      "奖励#{item/fire-rod} #{item/fire-seal}",
    ],
  },
  "fire-lightsout": {
    name: "焦土-踩灯谜题",
    desc: [
      "和#{land/fire-galaxy}类似，你的目标是熄灭所有#{obj/volcano-pushdown-pillar}",
      "使用这个网页<a href='lightsout.html'>工具</a>找到解法吧",
      "奖励#{obj/big-chest} #{obj/small-chest}(4)"
    ],
  },
  "fire-numbers": {
    name: "焦土-数字谜题",
    desc: [
      "你要按顺序按下12个#{obj/volcano-pushdown-pillar}",
      "地上的数字是否似曾相识？世界上其它地块也有类似的数字：",
      "上 10-9-12 #{land/frozen-foxmage}",
      "左 6-1-8 #{land/skull-obelisk}",
      "右 3-7-2 #{land/ancient-receptor}",
      "下 11-5-4 #{land/fire-numbers}",
      "从1至12按下对应的#{obj/volcano-pushdown-pillar}，获得奖励#{obj/big-chest}"
    ],
  },
  "fire-wizard-tower": {
    name: "焦土-巫师塔",
    desc: [
      "塔内的书架可定时搜刮出卷轴，此外塔内还有一个隐藏房间",
      "巫师任务1：给予#{item/cinderbloom}(20)，奖励#{item/mandragora} #{item/liquid-luck} #{item/wisdom-draught}",
      "巫师任务2：给予#{item/green-pigment}(20)，奖励#{item/wizard-scroll}(2) #{item/sage-scroll}(2)",
      "巫师任务3：给予#{item/crystal}(200)，奖励#{obj/big-chest}内含#{item/magic-scepter}",
    ],
  },
  "fire-factory": {
    name: "焦土-工厂",
    desc: [
      "免费提供一个#{struct/factory}",
      "工程师任务：给予#{item/royal-steel}(10)，奖励#{obj/big-chest}"
    ],
  },
  "fire-chests": {
    name: "焦土-着火宝箱",
    desc: [
      "用#{item/bottled-water}给着火的#{obj/small-chest}浇水",
      "#{item/crystal-bow}、#{item/ice-rod}也能灭火"
    ],
  },
  "fire-shrine": {
    name: "焦土-祭坛",
    desc: [
      "一个免费的#{struct/shrine}",
      "旁边的NPC不提供任务"
    ],
  },
  "fire-blood-altar": {
    name: "焦土-鲜血祭坛",
    desc: [
      "可牺牲1点最大生命值在鲜血祭坛换取一个#{buff/gluttony -永久性增益}",
      "每次可二选一，如果遇到不想要的可以强行退出游戏再进"
    ],
  },
  "fire-obelisk": {
    name: "焦土-战斗尖塔",
    desc: [
      "提供#{buff/combat}"
    ],
  },
  "frozen-galaxy": {
    name: "雪地-冰冻银河",
    desc: [
      "与任意一台电脑交互会发现它只会在5个图形中循环切换",
      "给它们编号：1<img src='img/other/computer-1.png'> 2<img src='img/other/computer-2.png'> 3<img src='img/other/computer-3.png'> 4<img src='img/other/computer-4.png'> 5<img src='img/other/computer-5.png'>",
      "电脑下的编码是2进制数字，我们无视前面的00110，只看后3位，001表示1，010表示2，011表示3，100表示4，101表示5",
      "只要让电脑上显示的符号对应下方的编码即可：5<img src='img/other/computer-5.png'> 3<img src='img/other/computer-3.png'> 4<img src='img/other/computer-4.png'> 2<img src='img/other/computer-2.png'> 4<img src='img/other/computer-4.png'>",
      "奖励#{item/frozen-galaxy-seal} #{obj/small-chest}(4)"
    ],
  },
  "frozen-dungeon": {
    name: "雪地-水晶洞窟",
    desc: [
      '<a href="map-crystal-cave.html">地图</a>，标注了3个隐藏房间',
      "奖励#{item/ice-rod} #{item/frozen-seal}",
    ],
  },
  "frozen-sleeping-statue": {
    name: "雪地-沉眠雕像",
    desc: [
      "木牌上的提示要求玩家找到黑暗中发出光芒的花朵",
      "去#{land/fire-galaxy -焦土}找到#{item/cinderbloom}",
      "奖励#{obj/big-chest}"
    ],
  },
  "frozen-ghost": {
    name: "雪地-吓人鬼",
    desc: [
      "吓人鬼任务1：给予#{item/demon-horn}(2)，奖励#{obj/small-chest}",
      "吓人鬼任务2：给予#{item/kapala}，奖励#{obj/big-chest}",
    ],
  },
  "frozen-foxmage": {
    name: "雪地-狐狸",
    desc: [
      "没时间解释了，快给狐狸500个#{item/poop}！",
      "奖励#{obj/big-chest}",
      "地上的神秘数字10-9-12可用于解谜#{land/fire-numbers}",
    ],
  },
  "frozen-wizzards-battle": {
    name: "雪地-冰霜巫师的挑战",
    desc: [
      "给予#{item/bone}(TODO)，战胜4个#{obj/wizrob}",
      "奖励#{obj/big-chest}"
    ],
  },
  "frozen-miner": {
    name: "雪地-矿工",
    desc: [
      "你可以选择帮矿工挖掉大水晶，解锁#{feat/miner}",
      "或者先放在那儿，矿工会自动帮你生产#{item/crystal}，定时去收就行",
    ],
  },
  "frozen-chest": {
    name: "雪地-冰冻宝箱",
    desc: [
      "想办法融化冰块",
      "可以用#{item/fiery-pickaxe} #{item/demon-sword} #{item/skull-bow} #{item/fire-rod} #{item/bomb}等",
      "奖励#{obj/big-chest}"
    ],
  },
  "frozen-magic-deer": {
    name: "雪地-魔法鹿",
    desc: [
      "几只#{obj/magic-deer}快乐地生活在这里"
    ],
  },
  "frozen-obelisk": {
    name: "雪地-工艺尖塔",
    desc: [
      "提供#{buff/builder}"
    ],
  },
  "skull-galaxy": {
    name: "墓地-骷髅银河",
    desc: [
      "4个谜语对应4件道具",
      "柔能润肌肤，刚可透顽石：#{item/bottled-water}",
      "贵胄强人皆不动，伶牙俐齿我能通：#{item/key}",
      "坠落高空无寸伤，忽焉亡溺浅水瀼：#{item/paper}",
      "有头无颈，有眼无眉，无脚能走，有翅难飞：#{item/fish}",
      "分别给予道具后，奖励#{item/skull-galaxy-seal}",
    ],
  },
  "skull-dungeon": {
    name: "墓地-骷髅迷宫",
    desc: [
      '<a href="map-skull-maze.html">地图</a>，标注了3个隐藏房间',
      "地图中部有一个鲜血祭坛，可牺牲1点最大生命值换取一个#{buff/gluttony -永久性增益}",
      "奖励#{item/necro-rod} #{item/skull-seal}",
    ],
  },
  "skull-braziers": {
    name: "墓地-火盆谜题",
    desc: [
      "给4个火盆点火，可使用#{item/fiery-pickaxe}, #{item/demon-sword}, #{item/skull-bow}等",
      "奖励#{obj/big-chest}"
    ],
  },
  "skull-gem-pillars": {
    name: "墓地-凹槽谜题",
    desc: [
      "在每个凹槽镶入对应形状的宝石",
      "左上#{item/ruby}，右上#{item/emerald}，左下#{item/topaz}，右下#{item/amethyst}",
      "奖励#{obj/big-chest}",
    ],
  },
  "skull-bells": {
    name: "墓地-敲钟谜题",
    desc: [
      "每口钟声音不同，左边低，右边高",
      "下方木牌提供了乐谱，按顺序敲击上方的钟",
      "奖励#{obj/big-chest}"
    ],
  },
  "skull-bone-piles": {
    name: "墓地-骨堆",
    desc: [
      "挖掉两个#{obj/bone-pile}",
      "奖励#{obj/skull-chest}(2)",
    ],
  },
  "skull-jester": {
    name: "墓地-小丑",
    desc: [
      "回答小丑(作者)的问题，只要你能答对一题就能获得一份超级稀有的奖励！",
      "但无论你怎么回答，都是错误的",
      "最后只能获得一份安慰奖：#{obj/big-chest}"
    ],
  },
  "skull-spike": {
    name: "墓地-尖刺陷阱",
    desc: [
      "走在尖刺上会掉3格血，你可以硬扛进去开#{obj/skull-chest}(4)",
      "或者用#{item/bomb}炸掉尖刺",
      "#{item/thunder-rod}、#{item/skull-bow}也可以除去尖刺"
    ],
  },
  "skull-skeletons": {
    name: "墓地-骷髅宝箱",
    desc: [
      "一群骷髅看守着#{obj/skull-chest}(2)"
    ],
  },
  "skull-obelisk": {
    name: "墓地-伐木尖塔",
    desc: [
      "提供#{buff/lumberjacking}",
      "哥布林任务：给予#{item/bone}(100)，奖励#{obj/big-chest}内含#{item/skull-key}"
    ],
  },
};

var lands = {};
for (let key in lands_rawdata) {
  let data = lands_rawdata[key];
  data["key"] = key;
  lands[key] = Land.newInstance(data);
}








var buffs_rawdata = {
  "thunderbound": {
    name: "buff-奔雷",
    desc: [
      "闪电从你的身上划过"
    ],
  },
  "glittery": {
    name: "buff-闪光",
    desc: [
      "#{obj/chicken -动物}掉落更多资源",
      "#{obj/chicken -动物}和#{obj/fairy}在你附近生成"
    ],
  },
  "lucky": {
    name: "buff-幸运",
    desc: [
      "资源掉落翻倍",
      "提高找到稀有物品的几率"
    ],
  },
  "wise": {
    name: "buff-聪慧",
    desc: [
      "获得经验值翻倍",
      "升级时补满生命值和能量"
    ],
  },
  "enraged": {
    name: "buff-愤怒",
    desc: [
      "造成伤害翻倍",
      "击杀时引发爆炸"
    ],
  },
  "greedy": {
    name: "buff-贪婪",
    desc: [
      "#{item/coin}价值提高25%",
      "攻击时生成#{item/coin}"
    ],
  },
  "venomous": {
    name: "buff-剧毒",
    desc: [
      "使附近敌人和资源中毒",
      "攻击时释放毒液球"
    ],
  },
  "dragonheart": {
    name: "buff-龙心",
    desc: [
      "提高50%回避率",
      "随机释放火球"
    ],
  },
  "foraging": {
    name: "buff-采集尖塔",
    desc: [
      "收集#{item/flower -植物和作物}时获得额外经验值",
      "只能同时激活一个尖塔"
    ],
  },
  "lumberjacking": {
    name: "buff-伐木尖塔",
    desc: [
      "砍倒#{obj/tree -树木}时获得额外经验值",
      "只能同时激活一个尖塔"
    ],
  },
  "mining": {
    name: "buff-采石尖塔",
    desc: [
      "采#{obj/rock -矿}时获得额外经验值",
      "只能同时激活一个尖塔"
    ],
  },
  "crafting": {
    name: "buff-工艺尖塔",
    desc: [
      "制作物品时获得额外经验值",
      "只能同时激活一个尖塔"
    ],
  },
  "combat": {
    name: "buff-战斗尖塔",
    desc: [
      "杀死敌人时获得额外经验值",
      "只能同时激活一个尖塔"
    ],
  },
  "hoarder": {
    name: "buff-囤积者",
    desc: [
      "资源掉落翻倍",
      "物品会立即收集"
    ],
  },
  "industrious": {
    name: "buff-勤奋",
    desc: [
      "所有建筑工作速度翻倍",
      "制作物品时获得经验值"
    ],
  },
  "scholar": {
    name: "buff-学者",
    desc: [
      "立即获得一些随机魔法卷轴",
      "获得双倍经验"
    ],
  },
  "dexterous": {
    name: "buff-灵巧",
    desc: [
      "移动速度翻倍",
      "攻击速度翻倍"
    ],
  },
  "excavator": {
    name: "buff-发掘者",
    desc: [
      "立刻生成一堆挖掘点"
    ],
  },
  "builder": {
    name: "buff-建筑师",
    desc: [
      "建筑需求资源减半"
    ],
  },
  "colonist": {
    name: "buff-殖民者",
    desc: [
      "购买土地所需金币减半"
    ],
  },
  "merchant": {
    name: "buff-商人",
    desc: [
      "物品卖出价格翻倍"
    ],
  },
  "shrine-hoarder": {
    name: "祭坛选项-囤积者",
    desc: [
      "资源掉落翻倍",
      "物品会立即收集"
    ],
  },
  "shrine-industrious": {
    name: "祭坛选项-勤奋",
    desc: [
      "所有建筑工作速度翻倍",
      "制作物品时获得经验值"
    ],
  },
  "shrine-scholar": {
    name: "祭坛选项-学者",
    desc: [
      "立即获得一些随机#{item/sage-scroll -魔法卷轴}",
      "获得双倍经验"
    ],
  },
  "shrine-dexterous": {
    name: "祭坛选项-灵巧",
    desc: [
      "移动速度翻倍",
      "攻击速度翻倍"
    ],
  },
  "shrine-excavator": {
    name: "祭坛选项-发掘者",
    desc: [
      "立刻生成一堆#{obj/dig-spot}"
    ],
  },
  "shrine-builder": {
    name: "祭坛选项-建筑师",
    desc: [
      "建筑需求资源减半"
    ],
  },
  "shrine-colonist": {
    name: "祭坛选项-殖民者",
    desc: [
      "购买土地所需金币减半"
    ],
  },
  "shrine-merchant": {
    name: "祭坛选项-商人",
    desc: [
      "物品卖出价格翻倍"
    ],
  },
  "gluttony": {
    name: "暴食",
    desc: [
      "损失1点最大生命值",
      "获得一些#{item/cooked-fish -食物}"
    ],
  },
  "avarice": {
    name: "贪婪",
    desc: [
      "损失1点最大生命值",
      "获得一些#{item/coin -金币}和#{item/ruby -宝石}"
    ],
  },
  "wrath": {
    name: "狂怒",
    desc: [
      "损失1点最大生命值",
      "永久增加1点伤害"
    ],
  },
  "madness": {
    name: "疯狂",
    desc: [
      "损失1点最大生命值",
      "直接升级三次"
    ],
  },
  "termination": {
    name: "终结",
    desc: [
      "损失1点最大生命值",
      "获得#{item/droid}和#{item/emp-grenade}"
    ],
  },
  "doom": {
    name: "毁灭",
    desc: [
      "损失1点最大生命值",
      "获取一些#{item/demon-scroll -恶魔法术卷轴}"
    ],
  },
  "hermetics": {
    name: "炼药",
    desc: [
      "损失1点最大生命值",
      "获取一些#{item/thunderstrike -药水}"
    ],
  },
  "challenge": {
    name: "挑战",
    desc: [
      "损失1点最大生命值",
      "召唤精英敌人"
    ],
  },
};

var buffs = {};
for (let key in buffs_rawdata) {
  let data = buffs_rawdata[key];
  data["key"] = key;
  buffs[key] = Buff.newInstance(data);
}








var objs_rawdata = {
  "slime": {
    name: "史莱姆",
    desc: [
      "在购买1个地块后出现",
    ],
    appear: [
      "#{land/grass-born 草地}",
    ],
    drop: [
      "#{item/jelly}",
    ],
  },
  "boar": {
    name: "野猪",
    desc: [
      "会向玩家发起冲锋，灵活走位和利用翻滚可以躲过",
      "虽然长得像牛但真的是猪",
    ],
    appear: [
      "#{land/grass-born 草地}",
    ],
    drop: [
      "#{item/meat}",
      "#{item/hide}",
    ]
  },
  "giant-beet": {
    name: "巨型甜菜",
    desc: [
      "被攻击不会还手",
      "爱与和平的象征，reddit版宠",
    ],
    appear: [
      "#{land/grass-beets}",
    ],
    drop: [
      "#{item/beet}"
    ]
  },
  "skeleton": {
    name: "骷髅",
    desc: [
      "在#{land/skull-galaxy 墓地}拆除#{obj/grave}后有概率出现，也是#{land/skull-dungeon 骷髅迷宫}的常见杂兵",
      "可通过#{item/necro-rod}召唤",
    ],
    drop: [
      "#{item/bone}",
    ],
  },
  "big-skeleton": {
    name: "大骷髅",
    desc: [
      "可通过#{item/necro-rod}召唤",
    ],
    appear: [
      "#{land/skull-galaxy 墓地}",
      "#{land/skull-dungeon 骷髅迷宫}",
    ],
    drop: [
      "#{item/bone}",
      "#{item/great-skull}",
    ],
  },
  "demon": {
    name: "恶魔",
    desc: [
      "会追着玩家攻击，血量较高，但容易被地形卡住",
    ],
    appear: [
      "#{land/fire-galaxy 焦土}",
      "#{land/fire-dungeon 火焰神庙}",
    ],
    drop: [
      "#{item/demon-horn}",
    ],
  },
  "floating-skull": {
    name: "浮空骷髅头",
    desc: [
    ],
    appear: [
      "#{land/fire-dungeon 火焰神庙}",
    ],
    drop: [
      "#{item/demon-horn}",
    ],
  },
  "demon-boss": {
    name: "恶魔boss",
    desc: [
    ],
    appear: [
      "#{land/fire-dungeon 火焰神庙}",
    ],
  },
  "electric-spike": {
    name: "电动尖刺",
    desc: [
      "会沿着轨道移动，血量很高",
    ],
    appear: [
      "#{land/ancient-dungeon 上古墓地}",
    ],
    drop: [
      "#{item/iron-ingot}",
    ],
  },
  "watcher": {
    name: "哨兵",
    desc: [
      "用激光攻击",
    ],
    appear: [
      "#{land/ancient-dungeon 上古墓地}",
      "#{land/ancient-watchers}",
    ],
    drop: [
      "#{item/steel}",
    ],
  },
  "thunder-spirit": {
    name: "雷精灵",
    desc: [
    ],
    appear: [
      "#{land/ancient-dungeon 上古墓地}",
    ],
    drop: [
      "#{item/iron-ingot}",
    ],
  },
  "thunder-spirit-boss": {
    name: "雷精灵boss",
    desc: [
    ],
    appear: [
      "#{land/ancient-dungeon 上古墓地}",
    ],
  },
  "wizrob": {
    name: "冰霜巫师",
    desc: [
    ],
    appear: [
      "#{land/frozen-wizzards-battle}",
      "#{land/frozen-dungeon 水晶洞窟}",
    ],
    drop: [
      "#{item/leather}",
    ],
  },
  "wizrob-boss": {
    name: "冰霜巫师boss",
    desc: [
    ],
    appear: [
      "#{land/frozen-dungeon 水晶洞窟}",
    ],
  },


  "chicken": {
    name: "鸡",
    desc: [
      "交互可获得#{item/egg}，有小概率获得#{item/golden-egg}，有冷却时间",
      "喂#{item/animal-feed}立即获得#{item/egg}",
    ],
    appear: [
      "#{land/grass-born 草地}",
    ],
    drop: [
      "#{item/meat}",
    ],
  },
  "cow": {
    name: "奶牛",
    desc: [
      "装备#{item/bottle}交互可立即获得#{item/bottled-milk}",
      "喂#{item/animal-feed}可立即获得#{item/poop}",
      "虽然长得像猪但真的是牛",
    ],
    appear: [
      "#{land/grass-born 草地}",
    ],
    drop: [
      "#{item/meat}",
      "#{item/hide}",
    ],
  },
  "sheep": {
    name: "绵羊",
    desc: [
      "交互可获得#{item/fiber}，有冷却时间",
      "喂#{item/animal-feed}可立即获得#{item/fiber}",
    ],
    appear: [
      "#{land/frozen-galaxy 雪地}",
    ],
    drop: [
      "#{item/meat}",
      "#{item/hide}",
    ],
  },
  "magic-deer": {
    name: "魔法鹿",
    desc: [
      "交互可获得#{item/coin}或#{item/ruby 宝石}",
      "喂#{item/animal-feed}可立即获得#{item/coin}",
      "死亡后不可再生",
    ],
    appear: [
      "#{land/frozen-magic-deer}",
    ],
    drop: [
      "#{item/ruby}",
      "#{item/emerald}",
      "#{item/topaz}",
      "#{item/amethyst}",
    ]
  },
  "fairy": {
    name: "精灵",
    desc: [
      "或在玩家点出#{skill/magic}后出现于任意#{land/grass-born 草地}",
      "交互后消失，玩家会回复血量和能量",
      "可用#{item/bottle}捕捉为#{item/bottled-fairy}",
    ],
    appear: [
      "#{land/grass-fairy-queen}",
    ],
  },
  "beetle": {
    name: "甲虫",
    desc: [
      "可用#{item/bottle}捕捉为#{item/bottled-beetle}",
    ],
    appear: [
      "#{land/ancient-galaxy 沙漠}"
    ],
  },
  "butterfly": {
    name: "蝴蝶",
    desc: [
      "可用#{item/bottle}捕捉为#{item/bottled-butterfly}",
    ],
    appear: [
      "#{land/frozen-galaxy 雪地}",
    ],
  },
  "deathmoth": {
    name: "死亡飞蛾",
    desc: [
      "可用#{item/bottle}捕捉为#{item/bottled-deathmoth}",
    ],
    appear: [
      "#{land/fire-galaxy 焦土}",
    ],
  },
  "torchbug": {
    name: "萤火虫",
    desc: [
      "仅在夜间出现",
      "可用#{item/bottle}捕捉为#{item/bottled-torchbug}",
    ],
  },


  "tree": {
    name: "树",
    desc: [
    ],
    appear: [
      "#{land/grass-born 草地}",
    ],
    drop: [
      "#{item/wood}",
      "#{item/citrus}",
    ],
  },
  "tree-ancient": {
    name: "棕榈树",
    appear: [
      "#{land/ancient-galaxy 沙漠}",
    ],
    drop: [
      "#{item/wood}",
      "#{item/citrus}",
    ],
  },
  "tree-skull": {
    name: "枫树",
    appear: [
      "#{land/skull-galaxy 墓地}",
    ],
    drop: [
      "#{item/wood}",
      "#{item/citrus}",
    ],
  },
  "tree-frozen": {
    name: "积雪的树",
    appear: [
      "#{land/frozen-galaxy 雪地}",
    ],
    drop: [
      "#{item/wood}",
      "#{item/citrus}",
    ],
  },
  "bush": {
    name: "灌木丛",
    appear: [
      "#{land/grass-born 草地}",
    ],
    drop: [
      "#{item/berry}",
    ],
  },
  "cotton": {
    name: "棉花",
    desc: [],
    appear: [
      "#{land/grass-born 草地}",
    ],
    drop: [
      "#{item/fiber}",
    ],
  },
  "beet": {
    name: "甜菜",
    desc: [],
    appear: [
      "#{land/grass-born 草地}",
    ],
    drop: [
      "#{item/beet}",
    ],
  },
  "cactus": {
    name: "仙人掌",
    desc: [],
    appear: [
      "#{land/ancient-galaxy 沙漠}",
    ],
    drop: [
      "#{item/cactus-fruit}",
    ],
  },
  "hot-pepper": {
    name: "辣椒",
    desc: [],
    appear: [
      "#{land/ancient-galaxy 沙漠}",
    ],
    drop: [
      "#{item/hot-pepper}",
    ],
  },
  "pumpkin": {
    name: "南瓜",
    desc: [],
    appear: [
      "#{land/skull-galaxy 墓地}",
    ],
    drop: [
      "#{item/pumpkin}",
    ],
  },
  "wheat": {
    name: "小麦",
    desc: [],
    appear: [
      "#{land/grass-born 草地}",
    ],
    drop: [
      "#{item/wheat}",
    ],
  },
  "flower": {
    name: "花",
    desc: [],
    appear: [
      "#{land/grass-born 草地}",
    ],
    drop: [
      "#{item/flower}",
    ],
  },
  "lavender": {
    name: "薰衣草",
    desc: [],
    appear: [
      "#{land/frozen-galaxy 雪地}",
    ],
    drop: [
      "#{item/lavender}",
    ],
  },
  "nightshade": {
    name: "龙葵",
    desc: [],
    appear: [
      "#{land/skull-galaxy 墓地}",
    ],
    drop: [
      "#{item/nightshade}",
    ],
  },
  "cinderbloom": {
    name: "火焰花",
    desc: [],
    appear: [
      "#{land/fire-galaxy 焦土}",
    ],
    drop: [
      "#{item/cinderbloom}",
    ],
  },


  "small-chest": {
    name: "小宝箱",
    desc: [
      "内有若干#{item/coin}和几个#{item/ruby 宝石}"
    ],
  },
  "skull-chest": {
    name: "骷髅宝箱",
    desc: [
      "内有#{item/spirit-orb}"
    ],
  },
  "blue-chest": {
    name: "蓝宝箱",
    desc: [
      "内含对应地牢的#{item/thunder-rod -法杖}和#{item/ancient-seal -印章}",
    ],
  },
  "big-chest": {
    name: "大宝箱",
    desc: [
      "需用#{item/key}打开",
      "内有#{item/spirit-orb}或#{item/fairy-aura -神器}"
    ],
  },
  "electric-cube": {
    name: "充能方块",
    desc: [
      "交互可将其拉向自己",
      "攻击可将其推开",
      "会自动给附近的#{obj/receptor}充能",
    ],
    appear: [
      "#{land/ancient-galaxy}",
      "#{land/ancient-dungeon}",
    ],
  },
  "receptor": {
    name: "接收器",
    desc: [
      "可通过#{item/thunder-rod}或附近的#{obj/electric-cube}充能",
      "充能后可开启路障",
    ],
    appear: [
      "#{land/ancient-galaxy}",
      "#{land/ancient-dungeon}",
    ],
  },
  "volcano-pushdown-pillar": {
    name: "发光按钮",
    desc: [
      "交互可切换其状态(亮/灭)",
    ],
    appear: [
      "#{land/fire-galaxy 焦土}",
    ],
  },
  "grave": {
    name: "墓碑",
    desc: [
      "在#{land/skull-galaxy 墓地}随机刷出",
      "挖掉后有概率刷出#{obj/skeleton}",
    ],
    drop: [
      "#{item/stone}",
    ],
  },
  "bone-pile": {
    name: "骨堆",
    desc: [
      "挖掉后刷出#{obj/big-skeleton}",
    ],
    appear: [
      "#{land/skull-bone-piles}",
    ],
    drop: [
      "#{item/bone}"
    ],
  },

  "rock": {
    name: "石头",
    desc: [],
    drop: [
      "#{item/stone}"
    ],
  },
  "coal-rock": {
    name: "煤矿",
    desc: [],
    drop: [
      "#{item/stone}",
      "#{item/coal}",
    ],
  },
  "iron-rock": {
    name: "铁矿",
    desc: [],
    drop: [
      "#{item/stone}",
      "#{item/iron-ore}",
    ],
  },
  "gold-rock": {
    name: "金矿",
    desc: [],
    drop: [
      "#{item/stone}",
      "#{item/gold-ore}",
    ],
  },
  "crystal-blue": {
    name: "蓝水晶",
    desc: [],
    drop: [
      "#{item/crystal}",
    ],
  },
  "crystal-purple": {
    name: "紫水晶",
    desc: [],
    drop: [
      "#{item/crystal}",
    ],
  },
  "big-coal-rock": {
    name: "大煤矿",
    desc: [],
    drop: [
      "#{item/stone}",
      "#{item/coal}",
    ],
  },
  "big-iron-rock": {
    name: "大铁矿",
    desc: [],
    drop: [
      "#{item/stone}",
      "#{item/iron-ore}",
    ],
  },
  "big-gold-rock": {
    name: "大金矿",
    desc: [],
    drop: [
      "#{item/stone}",
      "#{item/gold-ore}",
    ],
  },
  "dig-spot": {
    name: "挖掘点",
    desc: [
      "用#{item/shovel}挖掘",
      "可能出现#{item/bone}, #{item/sand}, #{item/arrow}, #{item/coal}, #{item/ruby}，#{item/emerald}，#{item/topaz}，#{item/amethyst}",
      "在#{land/grass-born 草地}有小概率挖出#{item/fossil}",
      "在#{land/ancient-galaxy 沙漠}有小概率挖出#{item/sphynx}",
      "在#{land/skull-galaxy 墓地}有小概率挖出#{item/kapala}",
      "在#{land/frozen-galaxy 雪地}有小概率挖出#{item/frozen-relic}",
      "在#{land/fire-galaxy 焦土}有小概率挖出#{item/dino-egg}",
    ],
  },
};

var objs = {};
for (let key in objs_rawdata) {
  let data = objs_rawdata[key];
  data["key"] = key;
  objs[key] = Obj.newInstance(data);
}









var feats_rawdata = {
  "tycoon": {
    name: "大亨",
    desc: [
      "拥有10块土地和5000枚金币",
    ],
  },
  "miner": {
    name: "矿工",
    desc: [
      "开采巨型水晶，位于#{land/frozen-miner}",
    ],
  },
  "royal": {
    name: "皇室",
    desc: [
      "收集#{item/royal-steel}或者#{item/royal-clothing}",
    ],
  },
  "gemologist": {
    name: "宝石学家",
    desc: [
      "背包中拥有所有宝石：#{item/ruby}，#{item/emerald}，#{item/topaz}，#{item/amethyst}",
    ],
  },
  "tough": {
    name: "坚韧",
    desc: [
      "拥有20点生命值上限",
    ],
  },
  "tomb-raider": {
    name: "古墓丽影",
    desc: [
      "完成#{land/ancient-dungeon 古代墓地}",
    ],
  },
  "pathfinder": {
    name: "开拓者",
    desc: [
      "完成#{land/skull-dungeon 骷髅迷宫}",
    ],
  },
  "ice-breaker": {
    name: "破冰者",
    desc: [
      "完成#{land/frozen-dungeon 水晶洞窟}",
    ],
  },
  "demon-hunter": {
    name: "恶魔猎手",
    desc: [
      "完成#{land/fire-dungeon 火焰神庙}",
    ],
  },
  "ancient-astronomer": {
    name: "古代天文学家",
    desc: [
      "解开#{land/ancient-galaxy 上古银河}的谜题",
    ],
  },
  "skull-astronomer": {
    name: "骷髅天文学家",
    desc: [
      "解开#{land/skull-galaxy 骷髅银河}的谜题",
    ],
  },
  "frozen-astronomer": {
    name: "冰封天文学家",
    desc: [
      "解开#{land/frozen-galaxy 冰冻银河}的谜题",
    ],
  },
  "fire-astronomer": {
    name: "火焰天文学家",
    desc: [
      "解开#{land/fire-galaxy 火焰银河}的谜题",
    ],
  },
  "unscarred": {
    name: "无伤",
    desc: [
      "无伤完成一个地下城(#{land/ancient-dungeon}，#{land/skull-dungeon}，#{land/frozen-dungeon}，#{land/fire-dungeon})",
    ],
  },
  "occult": {
    name: "神秘学",
    desc: [
      "进行一场充满挑战的血之仪式：在#{land/fire-blood-altar}进行一次献祭",
    ],
  },
  "jester": {
    name: "弄臣",
    desc: [
      "在一场问答小游戏中惨败。地点：#{land/skull-jester}",
    ],
  },
  "sharpshooter": {
    name: "神枪手",
    desc: [
      "用一发#{item/short-bow -弓箭}杀死一个敌人",
    ],
  },
  "swordmaster": {
    name: "剑术大师",
    desc: [
      "一#{item/bone-sword -剑}杀死3个或3个以上的敌人",
    ],
  },
  "winner": {
    name: "大赢家",
    desc: [
      "在#{struct/slot-machine}上赢得一次头奖",
    ],
  },
  "greedy": {
    name: "贪婪",
    desc: [
      "杀掉一只#{obj/magic-deer}",
    ],
  },
  "monster": {
    name: "怪物",
    desc: [
      "杀掉所有#{obj/giant-beet}",
    ],
  },
  "duelist": {
    name: "决斗师",
    desc: [
      "通过#{land/frozen-wizzards-battle 冰霜巫师的挑战}",
    ],
  },
  "rainbuddy": {
    name: "彩虹",
    desc: [
      "使用一瓶#{item/bottled-rainbow}",
    ],
  },
  "robotic": {
    name: "自动化",
    desc: [
      "激活一位#{item/droid}",
    ],
  },
  "bomberman": {
    name: "炸弹人",
    desc: [
      "有3个炸弹同时激活：#{item/bomb}或#{item/emp-grenade}",
    ],
  },
  "spelunker": {
    name: "洞穴探险者",
    desc: [
      "挖出一件#{item/fossil -考古物品}",
    ],
  },
  "gourmand": {
    name: "饕餮",
    desc: [
      "吃掉一块#{item/ruby -宝石}，需要#{skill/calciverous}",
    ],
  },
  "hopeless": {
    name: "绝望",
    desc: [
      "死亡10次",
    ],
  },
  "addicted": {
    name: "上瘾",
    desc: [
      "累计游玩3个小时",
    ],
  },
  "mason": {
    name: "大宅",
    desc: [
      "建造20个建筑",
    ],
  },
  "expansionist": {
    name: "拓张主义者",
    desc: [
      "拥有5块土地",
    ],
  },
  "destroyer": {
    name: "破坏者",
    desc: [
      "杀掉100个敌人",
    ],
  },
  "jealous": {
    name: "嫉妒",
    desc: [
      "背包中拥有100份#{item/jelly}",
    ],
  },
  "disgusting": {
    name: "憎恶",
    desc: [
      "背包中拥有100份#{item/poop}",
    ],
  },
  "angler": {
    name: "渔夫",
    desc: [
      "抓到50条#{item/fish}",
    ],
  },
  "hoarder": {
    name: "囤积者",
    desc: [
      "背包中拥有1000个物品",
    ],
  },
  "big-hoarder": {
    name: "大囤积者",
    desc: [
      "背包中拥有5000个物品",
    ],
  },
  "irrigator": {
    name: "浇灌者",
    desc: [
      "为100颗#{item/beet-seeds -种子}浇水",
    ],
  },
  "harvester": {
    name: "收获者",
    desc: [
      "种下100颗#{item/beet-seeds -种子}",
    ],
  },
  "wealthy": {
    name: "小康",
    desc: [
      "拥有10,0000枚金币",
    ],
  },
  "millonaire": {
    name: "富翁",
    desc: [
      "拥有100,0000枚金币",
    ],
  },
  "smelter": {
    name: "熔炼工",
    desc: [
      "制作500个#{struct/furnace}物品",
    ],
  },
  "mint": {
    name: "铸币厂",
    desc: [
      "制作2000枚#{item/coin}",
    ],
  },
  "treasure-hunter": {
    name: "财宝猎人",
    desc: [
      "打开20个#{obj/big-chest}",
    ],
  },
  "digger": {
    name: "挖掘者",
    desc: [
      "挖出50个物品，需求：#{item/shovel}",
    ],
  },
  "artisan": {
    name: "工匠",
    desc: [
      "制作1,0000个物品",
    ],
  },
  "constructor": {
    name: "建筑师",
    desc: [
      "建造200个建筑",
    ],
  },
  "champion": {
    name: "勇士",
    desc: [
      "打开一个#{obj/skull-chest}",
    ],
  },
  "waterproof": {
    name: "防水",
    desc: [
      "铺满水方格。可使用#{item/landfill}，#{struct/bridge}，或水上建筑如#{struct/offshore-drill}",
      "#{land/grass-rainbow}中彩虹下的两格不能填，其它格必须全填上。不要漏了最外围的一圈",
    ],
  },
  "secret-finder": {
    name: "秘密发掘者",
    desc: [
      "找到3个秘密房间，见#{feat/enlightened}",
    ],
  },
  "enlightened": {
    name: "启迪",
    desc: [
      "找到所有秘密房间，某些墙壁上有裂缝，用#{item/bomb}或#{item/fire-rod}可以炸开进入秘密房间",
      "我从游戏文件重构出了各地牢的地图，方便大家找秘密房间：#{land/ancient-dungeon}3个，#{land/skull-dungeon}3个，#{land/frozen-dungeon}3个，#{land/fire-dungeon}4个，#{land/fire-wizard-tower}1个 TODO",
    ],
  },
  "marksman": {
    name: "弓箭手",
    desc: [
      "射出100根#{item/arrow}",
    ],
  },
  "acrobat": {
    name: "杂技演员",
    desc: [
      "闪避10次攻击",
    ],
  },
  "daredevil": {
    name: "惊险时刻",
    desc: [
      "闪避一次致命攻击",
      "致命攻击：被打中就会死的攻击",
    ],
  },
  "pillager": {
    name: "掠夺者",
    desc: [
      "摧毁100块#{obj/grave}",
    ],
  },
  "bug-catcher": {
    name: "捕虫专家",
    desc: [
      "用#{item/bottle}抓住100只#{item/bottled-torchbug -小虫子}",
    ],
  },
  "extrovert": {
    name: "性格外向",
    desc: [
      "与所有NPC对话",
    ],
  },
  "diligent": {
    name: "孜孜不倦",
    desc: [
      "完成所有NPC的任务",
    ],
  },
  "druid-helper": {
    name: "德鲁伊的好帮手",
    desc: [
      "帮助#{land/grass-druid 德鲁伊}",
    ],
  },
  "princess-helper": {
    name: "公主的好帮手",
    desc: [
      "帮助#{land/ancient-princess 公主}",
    ],
  },
  "wizard-helper": {
    name: "巫师的好帮手",
    desc: [
      "帮助#{land/fire-wizard-tower 巫师}",
    ],
  },
  "goblin-helper": {
    name: "哥布林的好帮手",
    desc: [
      "帮助#{land/skull-obelisk 哥布林}",
    ],
  },
  "fairy-helper": {
    name: "精灵的好帮手",
    desc: [
      "帮助#{land/grass-fairy-queen 精灵皇后}",
    ],
  },
  "engineer-helper": {
    name: "工程师的好帮手",
    desc: [
      "帮助#{land/fire-factory 工程师}",
    ],
  },
  "ghost-helper": {
    name: "鬼魂的好帮手",
    desc: [
      "帮助#{land/frozen-ghost 鬼魂}",
    ],
  },
  "old-people-helper": {
    name: "老人的好帮手",
    desc: [
      "帮助#{land/ancient-oldman 老人}",
    ],
  },
  "fox-helper": {
    name: "狐狸的好帮手",
    desc: [
      "帮助#{land/frozen-foxmage 狐狸}",
    ],
  },
  "master-forager": {
    name: "采集大师",
    desc: [
      "完成#{land/grass-museum 博物馆}的采集合集",
    ],
  },
  "master-miner": {
    name: "采矿大师",
    desc: [
      "完成#{land/grass-museum 博物馆}的采矿合集",
    ],
  },
  "master-builder": {
    name: "建筑大师",
    desc: [
      "完成#{land/grass-museum 博物馆}的建筑合集",
    ],
  },
  "master-farmer": {
    name: "农业大师",
    desc: [
      "完成#{land/grass-museum 博物馆}的农业合集",
    ],
  },
  "master-chef": {
    name: "烹饪大师",
    desc: [
      "完成#{land/grass-museum 博物馆}的烹饪合集",
    ],
  },
  "master-alchemist": {
    name: "炼金大师",
    desc: [
      "完成#{land/grass-museum 博物馆}的炼金合集",
    ],
  },
  "master-trapper": {
    name: "捕猎大师",
    desc: [
      "完成#{land/grass-museum 博物馆}的捕猎合集",
    ],
  },
  "master-archaeologist": {
    name: "考古大师",
    desc: [
      "完成#{land/grass-museum 博物馆}的考古合集",
    ],
  },
  "curator": {
    name: "馆长",
    desc: [
      "完成所有#{land/grass-museum 博物馆}的合集",
    ],
  },
  "skillful": {
    name: "熟练",
    desc: [
      "学会所有技能",
    ],
  },
  "imperialist": {
    name: "帝国主义者",
    desc: [
      "买下所有土地",
    ],
  },
  "treasure-master": {
    name: "宝藏大师",
    desc: [
      "打开所有#{obj/big-chest}(46个)",
    ],
  },
  "tool-collector": {
    name: "工具收集者",
    desc: [
      "收集所有#{item/basic-pickaxe -工具与武器}",
    ],
  },
  "accessory-collector": {
    name: "饰品收集者",
    desc: [
      "收集所有#{item/small-backpack -饰品}",
    ],
  },
  "seal-collector": {
    name: "印章收集者",
    desc: [
      "收集所有#{item/ancient-seal -印章}",
    ],
  },
  "artifact-collector": {
    name: "神器收集者",
    desc: [
      "收集所有#{item/fairy-aura -神器}",
    ],
  },
  "completionist": {
    name: "完美主义者",
    desc: [
      "获得所有其他功勋",
    ],
  },
};

var feats = {};
for (let key in feats_rawdata) {
  let data = feats_rawdata[key];
  data["key"] = key;
  feats[key] = Feat.newInstance(data);
}


/**
 * Add products to structs
 */
for (let key in items) {
  let object = items[key];
  if (object._ingrd.length > 0) {
    let struct = lookupName(object._ingrd[0]);
    struct.addProduct(`#{item/${key}}`);
  }
}

/**
 * Add required skills to items and structs
 */
for (let key in skills) {
  let skill = skills[key];
  if (skill._unlock.length > 0) {
    for (let st of skill._unlock) {
      let object = lookupName(st);
      object._require.push(`#{skill/${key}}`);
    }
  }
}