var structs_rawdata = {
  "furnace": {
    name: "熔炉",
    desc: [],
    prod: [
      "#{item/coal}",
      "#{item/brick}",
      "#{item/iron-ingot}",
      "#{item/gold-ingot}",
      "#{item/steel}",
      "#{item/royal-steel}",
      "#{item/bread}",
      "#{item/cooked-fish}",
      "#{item/cooked-meat}"
    ],
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
    prod: [
      "#{item/coin}",
      "#{item/key}",
      "#{item/arrow}",
      "#{item/bottle}",
      "#{item/shovel 铲子}",
      "#{item/basic-pickaxe 矿镐}",
      "#{item/short-bow 弓}",
      "#{item/basic-amulet 护符}",
      "#{item/bone-sword 剑}",
    ]
  },
  "sewing-station": {
    name: "缝纫站",
    desc: [],
    ingrd: [
      {name: "#{item/fiber}", qty:5},
      {name: "#{item/wood}", qty:10},
      {name: "#{item/brick}", qty:4},
    ],
  },
  "mining-rod": {
    name: "采集杆",
    desc: [],
  },
  "offshore-drill": {
    name: "海上钻机",
    desc: [],
  },
  "flower-press": {
    name: "花瓣压缩机",
    desc: [],
  },
  "factory": {
    name: "工厂",
    desc: [],
  },
  "power-plant": {
    name: "发电厂",
    desc: [],
  },
  "ballista": {
    name: "投石器",
    desc: [],
  },
  "bridge": {
    name: "桥",
    desc: [],
  },
  "fish-trap": {
    name: "捕鱼陷阱",
    desc: [],
  },
  "torch": {
    name: "火把",
    desc: [],
  },
  "brazier": {
    name: "火盆",
    desc: [],
  },
  "windmill": {
    name: "风车",
    desc: [],
  },
  "sprinkler": {
    name: "洒水器",
    desc: [],
  },
  "cookpot": {
    name: "烹饪锅",
    desc: [],
  },
  "quarry": {
    name: "采石场",
    desc: [],
  },
  "vault": {
    name: "仓库",
    desc: [],
  },
  "market": {
    name: "市场",
    desc: [],
  },
  "bank": {
    name: "银行",
    desc: [],
  },
  "lighthouse": {
    name: "灯塔",
    desc: [],
  },
  "slot-machine": {
    name: "老虎机",
    desc: [],
  },
  "inscription-table": {
    name: "铭文台",
    desc: [],
  },
  "cauldron": {
    name: "大锅",
    desc: [],
  },
  "shrine": {
    name: "祭坛",
    desc: [],
  },
  "spirit-crystal": {
    name: "灵魂结晶",
    desc: [],
  },
};

var structs = {};
for (let key in structs_rawdata) {
  let data = structs_rawdata[key];
  data["key"] = key;
  structs[key] = Struct.newInstance(data);
}
