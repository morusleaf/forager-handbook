
function renderNavbar() {
  function newDropdownItem(hrefValue, textValue) {
    return $("<a>", { class: "dropdown-item", href: hrefValue }).text(textValue);
  }

  let $nav = $("<nav>", { class: "navbar navbar-expand-sm bg-dark navbar-dark" });
  $nav.append($("<a>", { class: "navbar-brand", href: "index.html" }).text("浮岛生存手册"));
  let $ul = $("<ul>", { class: "navbar-nav" }).appendTo($nav);
  // skill
  let $skill = $("<li>", { class: "nav-item" }).appendTo($ul);
  $("<a>", { class: "nav-link", href: "skill.html" }).text("技能").appendTo($skill);
  // item
  let $item = $("<li>", { class: "nav-item dropdown" }).appendTo($ul);
  $("<a>", { class: "nav-link dropdown-toggle", href: "item.html", "data-toggle": "dropdown" }).text("物品").appendTo($item);
  let $itemMenu = $("<div>", { class: "dropdown-menu" }).appendTo($item);
  newDropdownItem("item.html#material-section", "原料与工业品").appendTo($itemMenu);
  newDropdownItem("item.html#farm-section", "农业").appendTo($itemMenu);
  newDropdownItem("item.html#tool-section", "工具与武器").appendTo($itemMenu);
  newDropdownItem("item.html#equipment-section", "装备").appendTo($itemMenu);
  newDropdownItem("item.html#magic-section", "药剂与卷轴").appendTo($itemMenu);
  // structure
  let $struct = $("<li>", { class: "nav-item" }).appendTo($ul);
  $("<a>", { class: "nav-link", href: "struct.html" }).text("建筑").appendTo($struct);
  // land
  let $land = $("<li>", { class: "nav-item" }).appendTo($ul);
  $("<a>", { class: "nav-link", href: "land.html" }).text("地块").appendTo($land);
  // buff
  let $buff = $("<li>", { class: "nav-item" }).appendTo($ul);
  $("<a>", { class: "nav-link", href: "buff.html" }).text("buff").appendTo($buff);
  // obj
  let $obj = $("<li>", { class: "nav-item" }).appendTo($ul);
  $("<a>", { class: "nav-link", href: "obj.html" }).text("物体").appendTo($obj);
  // feat
  let $feat = $("<li>", { class: "nav-item" }).appendTo($ul);
  $("<a>", { class: "nav-link", href: "feat.html" }).text("成就").appendTo($feat);
  // util
  let $util = $("<li>", { class: "nav-item" }).appendTo($ul);
  $("<a>", { class: "nav-link", href: "util.html" }).text("辅助").appendTo($util);

  $(document.body).prepend($nav);
}

class ForagerRenderer {
  constructor($info) {
    this.selectedObject = null;
    this.$info = $info;
    this.selectedDOM = null;
  }

  deselect() {
    if (this.selectedObject === null) return;
    let $dom = this.selectedDOM;
    $dom.css("background-color", "transparent");
    // $(".icon").css("pointer-events", "auto");
    this.selectedObject = null;
  }

  select(object, $dom) {
    this.deselect();
    this.selectedObject = object;
    this.selectedDOM = $dom;
    $dom.css("background-color", "grey");
    // reference: https://stackoverflow.com/questions/3538489/html-css-make-a-div-invisible-to-clicks
    // $(".icon").css("pointer-events", "none");
    this.viewObject(object);
  }

  linkIcon($icon, object) {
    let self = this;
    // Ugly hacking to avoid conflict between hover and click on mobile devices
    if ($(window).width() >= 768) {
      $icon.hover(function () {
        self.viewObject(object);
      }, function () {
        self.viewObject(self.selectedObject);
      });
    }
    $icon.click(function () {
      self.select(object, $icon);
    });
  }

  handleQuery(query, categoryName) {
    if (query !== "") {
      let key = query.substring(1);
      let object = lookupName(`#{${categoryName}/${key}}`);
      let $dom = $(`#${key}`);
      this.select(object, $dom);
      let pos = $dom.offset();
      window.scrollTo(pos.left, pos.top);
    }
  }
}

class SkillRenderer extends ForagerRenderer {
  constructor() {
    super($("#info"));
  }

  viewObject(object) {
    this.$info.empty();
    if (object === null) return;
    let $icon = object.thumbnailDOM(96, 96, 4, 3, false);
    let $card = object.infoDOM($icon);
    this.$info.append($card);
  }

  renderTable(layout, $table) {
    for (let line of layout) {
      let $tr = $("<tr>");
      $table.append($tr);
      for (let name of line) {
        let object = lookupName(name);
        let $td = $("<td>", { class: "text-center" });
        let $icon = object.thumbnailDOM(64, 64, 4, 2, true);
        this.linkIcon($icon, object);
        $td.append($icon);
        $tr.append($td);
      }
    }
  }

  render() {
    let industryLayout = [
      ["#{skill/lasers}", "#{skill/engineering}", "#{skill/physics}", "#{skill/jewelry}"],
      ["#{skill/manufacturing}", "#{skill/automation}", "#{skill/craftsmanship}", "#{skill/textiles}"],
      ["#{skill/drilling}", "#{skill/machinery}", "#{skill/smelting}", "#{skill/sewing}"],
      ["#{skill/ballistics}", "#{skill/masonry}", "#{skill/carpentry}", "#{skill/industry}"]
    ];

    let economyLayout = [
      ["#{skill/commerce}", "#{skill/supply}", "#{skill/gambling}", "#{skill/capitalism}"],
      ["#{skill/trade}", "#{skill/artistry}", "#{skill/bargain}", "#{skill/colonization}"],
      ["#{skill/coinage}", "#{skill/banking}", "#{skill/treasury}", "#{skill/logistics}"],
      ["#{skill/economy}", "#{skill/storage}", "#{skill/optics}", "#{skill/architecture}"]
    ];

    let foragingLayout = [
      ["#{skill/prospecting}", "#{skill/mining}", "#{skill/woodcutting}", "#{skill/foraging}"],
      ["#{skill/geology}", "#{skill/hunting}", "#{skill/fishing}", "#{skill/gathering}"],
      ["#{skill/deposit}", "#{skill/looting}", "#{skill/cooking}", "#{skill/farming}"],
      ["#{skill/calciverous}", "#{skill/gluttony}", "#{skill/voracity}", "#{skill/agriculture}"]
    ];

    let magicLayout = [
      ["#{skill/magic}", "#{skill/brilliance}", "#{skill/combat}", "#{skill/froststrike}"],
      ["#{skill/inscription}", "#{skill/alchemy}", "#{skill/faith}", "#{skill/renewal}"],
      ["#{skill/novice-scrolls}", "#{skill/novice-potions}", "#{skill/spellbind}", "#{skill/summoning}"],
      ["#{skill/expert-scrolls}", "#{skill/expert-potions}", "#{skill/reagency}", "#{skill/transmutation}"]
    ];
    this.renderTable(industryLayout, $("#industry-table"));
    this.renderTable(economyLayout, $("#economy-table"));
    this.renderTable(foragingLayout, $("#foraging-table"));
    this.renderTable(magicLayout, $("#magic-table"));
  }
}



class ItemRenderer extends ForagerRenderer {
  constructor() {
    super($("#info"));
  }

  viewObject(object) {
    this.$info.empty();
    if (object === null) return;
    let $icon = object.thumbnailDOM(100, 100, 4, 4, false);
    let $card = object.infoDOM($icon);
    this.$info.append($card);
  }

  renderPanel(layout, $panel) {
    for (let name of layout) {
      let object = lookupName(name);
      let $icon = object.thumbnailDOM(60, 60, 0, 3, true);
      this.linkIcon($icon, object);
      $panel.append($icon);
    }
  }

  render() {
    let rawMaterialLayout = [
      "#{item/wood}",
      "#{item/stone}",
      "#{item/iron-ore}",
      "#{item/gold-ore}",
      "#{item/sand}",
      "#{item/coal}",
      "#{item/crystal}",
      "#{item/flower}",
      "#{item/lavender}",
      "#{item/nightshade}",
      "#{item/cinderbloom}",
      "#{item/hide}",
      "#{item/bone}",
      "#{item/jelly}",
      "#{item/demon-horn}",
    ];
    let gemLayout = [
      "#{item/ruby}",
      "#{item/emerald}",
      "#{item/topaz}",
      "#{item/amethyst}",
      "#{item/transmutation}",
    ];
    let bottledLayout = [
      "#{item/bottled-torchbug}",
      "#{item/bottled-beetle}",
      "#{item/bottled-butterfly}",
      "#{item/bottled-deathmoth}",
      "#{item/bottled-fairy}",
      "#{item/bottled-oil}",
      "#{item/bottled-milk}",
      "#{item/bottled-rainbow}",
      "#{item/bottled-water}",
    ];
    let archLayout = [
      "#{item/fossil}",
      "#{item/sphynx}",
      "#{item/kapala}",
      "#{item/frozen-relic}",
      "#{item/dino-egg}",
      "#{item/anchor}",
      "#{item/sunken-ankh}",
      "#{item/skeleton-fish}",
      "#{item/frozen-squid}",
      "#{item/lava-eel}",
      "#{item/golden-egg}",
    ];
    let craftableLayout = [
      "#{item/thread}",
      "#{item/brick}",
      "#{item/iron-ingot}",
      "#{item/gold-ingot}",
      "#{item/paper}",
      "#{item/leather}",
      "#{item/steel}",
      "#{item/glass}",
      "#{item/plastic}",
      "#{item/royal-steel}",
      "#{item/royal-clothing}",
      "#{item/fiberglass}",
      "#{item/electronics}",
      // "#{item/transmutation}",
      "#{item/green-pigment}",
      "#{item/purple-pigment}",
      "#{item/arrow}",
      "#{item/key}",
      "#{item/coin}",
      "#{item/bottle}",
      "#{item/droid}",
      "#{item/emp-grenade}",
      "#{item/spirit-orb}",
      "#{item/great-skull}",
      "#{item/landfill}",
    ];

    this.renderPanel(rawMaterialLayout, $("#raw-material-panel"));
    this.renderPanel(gemLayout, $("#gem-panel"));
    this.renderPanel(bottledLayout, $("#bottled-panel"));
    this.renderPanel(archLayout, $("#arch-panel"));
    this.renderPanel(craftableLayout, $("#craftable-panel"));

    // "#{item/}",
    let farmRawLayout = [
      "#{item/beet}",
      "#{item/wheat}",
      "#{item/hot-pepper}",
      "#{item/pumpkin}",
      "#{item/citrus}",
      "#{item/fiber}",
      "#{item/poop}",
      "#{item/berry}",
      "#{item/cactus-fruit}",
      "#{item/egg}",
      "#{item/meat}",
      "#{item/fish}",
      "#{item/seaweed}",
    ];
    let seedLayout = [
      "#{item/beet-seeds}",
      "#{item/wheat-seeds}",
      "#{item/pepper-seeds}",
      "#{item/pumpkin-seeds}",
      "#{item/tree-sapling}",
      "#{item/cotton-seeds}",
      "#{item/animal-feed}",
    ];
    let cookLayout = [
      "#{item/cooked-fish}",
      "#{item/cooked-meat}",
      "#{item/flour}",
      "#{item/sugar}",
      "#{item/cheese}",
      "#{item/mayo}",
      "#{item/bread}",
      "#{item/pizza}",
      "#{item/cookies}",
      "#{item/sushi}",
      "#{item/soup}",
      "#{item/sandwich}",
      "#{item/fruit-salad}",
      "#{item/ice-cream}",
      "#{item/meat-skewer}",
    ];
    this.renderPanel(farmRawLayout, $("#farm-raw-panel"));
    this.renderPanel(seedLayout, $("#seed-panel"));
    this.renderPanel(cookLayout, $("#cook-panel"));

    let pickaxeLayout = [
      "#{item/basic-pickaxe}",
      "#{item/slimy-pickaxe}",
      "#{item/bone-pickaxe}",
      "#{item/fiery-pickaxe}",
      "#{item/crystal-pickaxe}",
      "#{item/demon-pickaxe}",
      "#{item/obliterator}",
    ];
    let shovelLayout = [
      "#{item/shovel}",
      "#{item/water-shovel}",
      "#{item/nomads-shovel}",
      "#{item/royal-shovel}",
      "#{item/robotic-shovel}",
    ];
    let swordLayout = [
      "#{item/bone-sword}",
      "#{item/golden-sword}",
      "#{item/druid-sword}",
      "#{item/crystal-sword}",
      "#{item/demon-sword}",
    ];
    let bowLayout = [
      "#{item/short-bow}",
      "#{item/skull-bow}",
      "#{item/crystal-bow}",
      "#{item/demon-bow}",
    ];
    let rodLayout = [
      "#{item/thunder-rod}",
      "#{item/ice-rod}",
      "#{item/fire-rod}",
      "#{item/necro-rod}",
      "#{item/storm-rod}",
      "#{item/blizzard-rod}",
      "#{item/meteor-rod}",
      "#{item/death-rod}",
    ];
    this.renderPanel(pickaxeLayout, $("#pickaxe-panel"));
    this.renderPanel(shovelLayout, $("#shovel-panel"));
    this.renderPanel(swordLayout, $("#sword-panel"));
    this.renderPanel(bowLayout, $("#bow-panel"));
    this.renderPanel(rodLayout, $("#rod-panel"));

    let backpackLayout = [
      // "#{item/basic-backpack}",
      "#{item/small-backpack}",
      "#{item/medium-backpack}",
      "#{item/big-backpack}",
      "#{item/huge-backpack}",
      "#{item/tycoon-backpack}",
    ];
    let walletLayout = [
      // "#{item/basic-wallet}",
      "#{item/small-wallet}",
      "#{item/medium-wallet}",
      "#{item/big-wallet}",
      "#{item/huge-wallet}",
      "#{item/tycoon-wallet}",
    ];
    let gloveLayout = [
      "#{item/basic-gloves}",
      "#{item/metal-gloves}",
      "#{item/master-gloves}",
      "#{item/robotic-gloves}",
    ];
    let bootLayout = [
      "#{item/basic-boots}",
      "#{item/metal-boots}",
      "#{item/master-boots}",
      "#{item/robotic-boots}",
    ];
    let bookLayout = [
      "#{item/moldy-book}",
      "#{item/slimy-tome}",
      "#{item/necronomicon}",
      "#{item/glacial-scriptures}",
      "#{item/hellfire-glyphs}",
    ];
    let amuletLayout = [
      "#{item/basic-amulet}",
      "#{item/slimy-amulet}",
      "#{item/bone-amulet}",
      "#{item/crystal-amulet}",
      "#{item/demon-amulet}",
    ];
    let artifactLayout = [
      "#{item/fairy-aura}",
      "#{item/pink-bow}",
      "#{item/skull-key}",
      "#{item/magic-scepter}",
      "#{item/holy-relic}",
      "#{item/nerdy-glasses}",
      "#{item/top-hat}",
      "#{item/lantern}",
      "#{item/skeleton-mask}",
      "#{item/quiver}",
      "#{item/vampyr-wings}",
      "#{item/shield}",
    ];
    let sealLayout = [
      "#{item/ancient-seal}",
      "#{item/skull-seal}",
      "#{item/frozen-seal}",
      "#{item/fire-seal}",
      "#{item/ancient-galaxy-seal}",
      "#{item/skull-galaxy-seal}",
      "#{item/frozen-galaxy-seal}",
      "#{item/fire-galaxy-seal}",
      "#{item/museum-seal}",
    ];
    this.renderPanel(backpackLayout, $("#backpack-panel"));
    this.renderPanel(walletLayout, $("#wallet-panel"));
    this.renderPanel(gloveLayout, $("#glove-panel"));
    this.renderPanel(bootLayout, $("#boot-panel"));
    this.renderPanel(bookLayout, $("#book-panel"));
    this.renderPanel(amuletLayout, $("#amulet-panel"));
    this.renderPanel(artifactLayout, $("#artifact-panel"));
    this.renderPanel(sealLayout, $("#seal-panel"));

    let potionLayout = [
      "#{item/bomb}",
      "#{item/healing-potion}",
      "#{item/thunderstrike}",
      "#{item/anas-delight}",
      "#{item/liquid-luck}",
      "#{item/wisdom-draught}",
      "#{item/mandragora}",
      "#{item/bloodfury-cocktail}",
      "#{item/dragon-philtre}",
      "#{item/greedy-mixture}",
    ];
    let scrollLayout = [
      "#{item/sage-scroll}",
      "#{item/builder-scroll}",
      "#{item/druid-scroll}",
      "#{item/wizard-scroll}",
      "#{item/miner-scroll}",
      "#{item/demon-scroll}",
    ];
    this.renderPanel(potionLayout, $("#potion-panel"));
    this.renderPanel(scrollLayout, $("#scroll-panel"));
  }
}



class StructRenderer extends ForagerRenderer {
  constructor() {
    super($("#info"));
  }

  viewObject(object) {
    this.$info.empty();
    if (object === null) return;
    let $icon = object.thumbnailDOM(200, 200, 4, 4, false);
    let $card = object.infoDOM($icon);
    this.$info.append($card);
  }

  renderPanel(layout, $panel) {
    for (let name of layout) {
      let object = lookupName(name);
      let $icon = object.thumbnailDOM(100, 100, 0, 2, true);
      this.linkIcon($icon, object);
      $panel.append($icon);
    }
  }

  render() {
    let industrialLayout = [
      "#{struct/furnace}",
      "#{struct/forge}",
      "#{struct/sewing-station}",
      "#{struct/mining-rod}",
      "#{struct/offshore-drill}",
      "#{struct/flower-press}",
      "#{struct/factory}",
      "#{struct/power-plant}",
      "#{struct/ballista}",
    ];

    let farmingLayout = [
      "#{struct/bridge}",
      "#{struct/fish-trap}",
      "#{struct/torch}",
      "#{struct/brazier}",
      "#{struct/windmill}",
      "#{struct/sprinkler}",
      "#{struct/cookpot}",
      "#{struct/quarry}",
    ];
    let economicLayout = [
      "#{struct/vault}",
      "#{struct/market}",
      "#{struct/bank}",
      "#{struct/lighthouse}",
      "#{struct/slot-machine}",
    ];
    let magicalLayout = [
      "#{struct/inscription-table}",
      "#{struct/cauldron}",
      "#{struct/shrine}",
      "#{struct/spirit-crystal}",
    ];

    this.renderPanel(industrialLayout, $("#industrial-panel"));
    this.renderPanel(farmingLayout, $("#farming-panel"));
    this.renderPanel(economicLayout, $("#economic-panel"));
    this.renderPanel(magicalLayout, $("#magical-panel"));
  }
}



class LandRenderer extends ForagerRenderer {
  constructor() {
    super($("#info"));
  }

  viewObject(object) {
    this.$info.empty();
    if (object === null) return;
    let $icon = object.thumbnailDOM(270, 270, 4, 0.5, false);
    let $card = object.infoDOM($icon);
    this.$info.append($card);
  }

  renderPanel(layout, $panel) {
    for (let name of layout) {
      let object = lookupName(name);
      let $icon = object.thumbnailDOM(135, 135, 4, 0.25, true);
      this.linkIcon($icon, object);
      $panel.append($icon);
    }
  }

  render() {
    let grassLayout = [
      "#{land/grass-born}",
      "#{land/grass-beets}",
      "#{land/grass-fairy-queen}",
      "#{land/grass-island}",
      "#{land/grass-museum}",
      "#{land/grass-pillars}",
      "#{land/grass-druid}",
      "#{land/grass-rainbow}",
      "#{land/grass-obelisk}",
    ];
    let ancientLayout = [
      "#{land/ancient-galaxy}",
      "#{land/ancient-dungeon}",
      "#{land/ancient-eye-statue}",
      "#{land/ancient-monolith}",
      "#{land/ancient-receptor}",
      "#{land/ancient-dig}",
      "#{land/ancient-watchers}",
      "#{land/ancient-princess}",
      "#{land/ancient-oldman}",
      "#{land/ancient-obelisk}",
    ];
    let fireLayout = [
      "#{land/fire-galaxy}",
      "#{land/fire-dungeon}",
      "#{land/fire-lightsout}",
      "#{land/fire-numbers}",
      "#{land/fire-wizard-tower}",
      "#{land/fire-factory}",
      "#{land/fire-chests}",
      "#{land/fire-shrine}",
      "#{land/fire-blood-altar}",
      "#{land/fire-obelisk}",
    ];
    let frozenLayout = [
      "#{land/frozen-galaxy}",
      "#{land/frozen-dungeon}",
      "#{land/frozen-sleeping-statue}",
      "#{land/frozen-ghost}",
      "#{land/frozen-foxmage}",
      "#{land/frozen-wizzards-battle}",
      "#{land/frozen-miner}",
      "#{land/frozen-chest}",
      "#{land/frozen-magic-deer}",
      "#{land/frozen-obelisk}",
    ];
    let skullLayout = [
      "#{land/skull-galaxy}",
      "#{land/skull-dungeon}",
      "#{land/skull-braziers}",
      "#{land/skull-gem-pillars}",
      "#{land/skull-bells}",
      "#{land/skull-bone-piles}",
      "#{land/skull-jester}",
      "#{land/skull-spike}",
      "#{land/skull-skeletons}",
      "#{land/skull-obelisk}",
    ];

    this.renderPanel(grassLayout, $("#grass-panel"));
    this.renderPanel(ancientLayout, $("#ancient-panel"));
    this.renderPanel(skullLayout, $("#skull-panel"));
    this.renderPanel(frozenLayout, $("#frozen-panel"));
    this.renderPanel(fireLayout, $("#fire-panel"));
  }
}




class ObjRenderer extends ForagerRenderer {
  constructor() {
    super($("#info"));
  }

  viewObject(object) {
    this.$info.empty();
    if (object === null) return;
    let $icon = object.thumbnailDOM(100, 100, 4, 3, false);
    let $card = object.infoDOM($icon);
    this.$info.append($card);
  }

  renderPanel(layout, $panel) {
    for (let name of layout) {
      let object = lookupName(name);
      let $icon = object.thumbnailDOM(60, 60, 4, 2, true);
      this.linkIcon($icon, object);
      $panel.append($icon);
    }
  }

  render() {
    let enemyLayout = [
      "#{obj/slime}",
      "#{obj/boar}",
      "#{obj/giant-beet}",
      "#{obj/skeleton}",
      "#{obj/big-skeleton}",
      "#{obj/electric-spike}",
      "#{obj/watcher}",
      "#{obj/thunder-spirit}",
      "#{obj/thunder-spirit-boss}",
      "#{obj/wizrob}",
      "#{obj/wizrob-boss}",
      "#{obj/floating-skull}",
      "#{obj/demon}",
      "#{obj/demon-boss}",
    ];

    let animalLayout = [
      "#{obj/chicken}",
      "#{obj/cow}",
      "#{obj/sheep}",
      "#{obj/magic-deer}",
      "#{obj/fairy}",
      "#{obj/beetle}",
      "#{obj/butterfly}",
      "#{obj/deathmoth}",
      "#{obj/torchbug}",
    ];

    let plantLayout = [
      "#{obj/flower}",
      "#{obj/lavender}",
      "#{obj/nightshade}",
      "#{obj/cinderbloom}",
      "#{obj/bush}",
      "#{obj/cotton}",
      "#{obj/beet}",
      "#{obj/hot-pepper}",
      "#{obj/pumpkin}",
      "#{obj/wheat}",
      "#{obj/cactus}",
      "#{obj/tree}",
      "#{obj/tree-ancient}",
      "#{obj/tree-skull}",
      "#{obj/tree-frozen}",
    ];

    let mineralLayout = [
      "#{obj/dig-spot}",
      "#{obj/rock}",
      "#{obj/coal-rock}",
      "#{obj/iron-rock}",
      "#{obj/gold-rock}",
      "#{obj/crystal-blue}",
      "#{obj/crystal-purple}",
      "#{obj/big-coal-rock}",
      "#{obj/big-iron-rock}",
      "#{obj/big-gold-rock}",
    ];

    let instrumentLayout = [
      "#{obj/small-chest}",
      "#{obj/skull-chest}",
      "#{obj/blue-chest}",
      "#{obj/big-chest}",
      "#{obj/grave}",
      "#{obj/bone-pile}",
      "#{obj/electric-cube}",
      "#{obj/receptor}",
      "#{obj/volcano-pushdown-pillar}",
    ];

    this.renderPanel(enemyLayout, $("#enemy-panel"));
    this.renderPanel(animalLayout, $("#animal-panel"));
    this.renderPanel(plantLayout, $("#plant-panel"));
    this.renderPanel(mineralLayout, $("#mineral-panel"));
    this.renderPanel(instrumentLayout, $("#instrument-panel"));
  }
}



class BuffRenderer extends ForagerRenderer {
  constructor() {
    super($("#info"));
  }

  viewObject(object) {
    this.$info.empty();
    if (object === null) return;
    let $icon = object.thumbnailDOM(100, 100, 4, 3, false);
    let $card = object.infoDOM($icon);
    this.$info.append($card);
  }

  renderPanel(layout, $panel) {
    for (let name of layout) {
      let object = lookupName(name);
      let $icon = object.thumbnailDOM(60, 60, 4, 2, true);
      this.linkIcon($icon, object);
      $panel.append($icon);
    }
  }

  render() {
    let obeliskBuffLayout = [
      "#{buff/foraging}",
      "#{buff/lumberjacking}",
      "#{buff/mining}",
      "#{buff/crafting}",
      "#{buff/combat}",
    ];
    let normalBuffLayout = [
      "#{buff/thunderbound}",
      "#{buff/glittery}",
      "#{buff/lucky}",
      "#{buff/wise}",
      "#{buff/enraged}",
      "#{buff/greedy}",
      "#{buff/venomous}",
      "#{buff/dragonheart}",
    ];
    let shrineBuffLayout = [
      "#{buff/hoarder}",
      "#{buff/industrious}",
      "#{buff/scholar}",
      "#{buff/dexterous}",
      "#{buff/excavator}",
      "#{buff/builder}",
      "#{buff/colonist}",
      "#{buff/merchant}",
    ];
    let shrineOptionLayout = [
      "#{buff/shrine-hoarder}",
      "#{buff/shrine-industrious}",
      "#{buff/shrine-scholar}",
      "#{buff/shrine-dexterous}",
      "#{buff/shrine-excavator}",
      "#{buff/shrine-builder}",
      "#{buff/shrine-colonist}",
      "#{buff/shrine-merchant}",
    ];
    let altarOptionLayout = [
      "#{buff/gluttony}",
      "#{buff/avarice}",
      "#{buff/wrath}",
      "#{buff/madness}",
      "#{buff/termination}",
      "#{buff/doom}",
      "#{buff/hermetics}",
      "#{buff/challenge}",
    ];

    this.renderPanel(obeliskBuffLayout, $("#obelisk-buff-panel"));
    this.renderPanel(normalBuffLayout, $("#normal-buff-panel"));
    this.renderPanel(shrineBuffLayout, $("#shrine-buff-panel"));
    this.renderPanel(shrineOptionLayout, $("#shrine-option-panel"));
    this.renderPanel(altarOptionLayout, $("#altar-option-panel"));
  }
}





class FeatRenderer extends ForagerRenderer {
  constructor() {
    super($("#info"));
  }

  viewObject(object) {
    this.$info.empty();
    if (object === null) return;
    let $icon = object.thumbnailDOM(100, 100, 4, 3, false);
    let $card = object.infoDOM($icon);
    this.$info.append($card);
  }

  // reference: https://stackoverflow.com/questions/49141874/bootstrap-4-card-panel-with-image-left-of-header-and-title
  // reference: https://codepen.io/SteveJRobertson/pen/POdvgz
  renderPanel(layout, $panel) {
    for (let name of layout) {
      let object = lookupName(name);
      let $icon = object.thumbnailDOM(60, 60, 4, 2, false);
      let $card = $("<div>", {class: "card"});
      let $cardWrapper = $("<div>", {class: "card-horizontal"}).appendTo($card);
      $("<div>", {class: "card-header border-0"}).append($icon).appendTo($cardWrapper);
      let $cardBody = $("<div>", {class: "card-body px-2"}).appendTo($cardWrapper);
      $("<h4>", {class: "card-title"}).text(object.name).appendTo($cardBody);
      // let $desc = $("<ul>", {class: "list-group list-group-flush forager-desc"}).appendTo($cardBlock);
      object.forEachDesc(function (line) {
        $("<p>", { class: "card-text" }).html(unfoldMacro(line)).appendTo($cardBody);
      });
      $panel.append($card);
    }
  }

  render() {
    let featLayout = [
      "#{feat/tycoon}",
      "#{feat/miner}",
      "#{feat/royal}",
      "#{feat/gemologist}",
      "#{feat/tough}",
      "#{feat/tomb-raider}",
      "#{feat/pathfinder}",
      "#{feat/ice-breaker}",
      "#{feat/demon-hunter}",
      "#{feat/ancient-astronomer}",
      "#{feat/skull-astronomer}",
      "#{feat/frozen-astronomer}",
      "#{feat/fire-astronomer}",
      "#{feat/unscarred}",
      "#{feat/occult}",
      "#{feat/jester}",
      "#{feat/sharpshooter}",
      "#{feat/swordmaster}",
      "#{feat/winner}",
      "#{feat/greedy}",
      "#{feat/monster}",
      "#{feat/duelist}",
      "#{feat/rainbuddy}",
      "#{feat/robotic}",
      "#{feat/bomberman}",
      "#{feat/spelunker}",
      "#{feat/gourmand}",
      "#{feat/hopeless}",
      "#{feat/addicted}",
      "#{feat/mason}",
      "#{feat/expansionist}",
      "#{feat/destroyer}",
      "#{feat/jealous}",
      "#{feat/disgusting}",
      "#{feat/angler}",
      "#{feat/hoarder}",
      "#{feat/big-hoarder}",
      "#{feat/irrigator}",
      "#{feat/harvester}",
      "#{feat/wealthy}",
      "#{feat/millonaire}",
      "#{feat/smelter}",
      "#{feat/mint}",
      "#{feat/treasure-hunter}",
      "#{feat/digger}",
      "#{feat/artisan}",
      "#{feat/constructor}",
      "#{feat/champion}",
      "#{feat/waterproof}",
      "#{feat/secret-finder}",
      "#{feat/enlightened}",
      "#{feat/marksman}",
      "#{feat/acrobat}",
      "#{feat/daredevil}",
      "#{feat/pillager}",
      "#{feat/bug-catcher}",
      "#{feat/extrovert}",
      "#{feat/diligent}",
      "#{feat/druid-helper}",
      "#{feat/princess-helper}",
      "#{feat/wizard-helper}",
      "#{feat/goblin-helper}",
      "#{feat/fairy-helper}",
      "#{feat/engineer-helper}",
      "#{feat/ghost-helper}",
      "#{feat/old-people-helper}",
      "#{feat/fox-helper}",
      "#{feat/master-forager}",
      "#{feat/master-miner}",
      "#{feat/master-builder}",
      "#{feat/master-farmer}",
      "#{feat/master-chef}",
      "#{feat/master-alchemist}",
      "#{feat/master-trapper}",
      "#{feat/master-archaeologist}",
      "#{feat/curator}",
      "#{feat/skillful}",
      "#{feat/imperialist}",
      "#{feat/treasure-master}",
      "#{feat/tool-collector}",
      "#{feat/accessory-collector}",
      "#{feat/seal-collector}",
      "#{feat/artifact-collector}",
      "#{feat/completionist}",
    ];

    this.renderPanel(featLayout, $("#feat-panel"));
  }
}




function renderDroids() {
  let width = 100;
  let height = 80;
  let $panel = $("#droid-panel");
  let scale = 2;
  let index = 1;
  for (let droidName of droidsNameList) {
    let $pane = $("<div>", {
      id: droidName,
      style: "display: inline-block"
    }).appendTo($panel);
    let $frame = $("<div>", {
      class: `align-center`,
      style: `width:${width}px; height:${height}px`
    }).appendTo($pane);
    $("<p>", {
      class: "text-center",
    }).html(`${index}: <b>${droidName}</b>`).appendTo($pane);
    let $img = $("<img>", {
      class: "img-fluid mx-auto",
      src: `img/droid/${droidName}.png`,
      alt: droidName,
      style: "visibility: hidden"
    }).appendTo($frame);
    $img.on("load", function() {
      let w = $img[0].naturalWidth;
      let h = $img[0].naturalHeight;
      scale = Math.min(scale, width/w, height/h);
      $img.width(w*scale);
      $img.height(h*scale);
      $img.css("visibility", "visible");
    });
    index++;
  }
}