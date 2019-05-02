
function renderNavbar() {
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
  $("<a>", { class: "dropdown-item", href: "item.html#raw" }).text("原料").appendTo($itemMenu);
  $(document.body).prepend($nav);
}

class ForagerRenderer {
  constructor($info) {
    this.selectedObject = null;
    this.$info = $info;
  }

  deselect() {
    if (this.selectedObject === null) return;
    let $dom = this.selectedObject.referThumbnailDOM();
    $dom.css("background-color", "white");
    this.selectedObject = null;
  }

  select(object, $dom) {
    this.deselect();
    this.selectedObject = object;
    $dom.css("background-color", "grey");
    this.viewObject(object);
  }

  linkIcon($icon, object) {
    let self = this;
    $icon.hover(function () {
      self.viewObject(object);
    }, function () {
      self.viewObject(self.selectedObject);
    });
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
        let skill = lookupName(name);
        let $td = $("<td>", { class: "text-center" });
        let $icon = skill.thumbnailDOM(64, 64, 4, 2, true);
        this.linkIcon($icon, skill);
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
    let $icon = object.thumbnailDOM(100, 100, 4, 5, true);
    let $card = object.infoDOM($icon);
    this.$info.append($card);
  }

  renderPanel(layout, $panel) {
    for (let name of layout) {
      let item = lookupName(name);
      let $icon = item.thumbnailDOM(60, 60, 0, 3, true);
      this.linkIcon($icon, item);
      $panel.append($icon);
    }
  }

  render() {
    let rawMaterialLayout = [
      "#{item/wood}",
      "#{item/stone}",
      "#{item/iron-ore}",
      "#{item/gold-ore}",
      "#{item/coal}",
      "#{item/flower}",
      "#{item/fiber}",
      "#{item/poop}",
      "#{item/bone}",
      "#{item/jelly}",
      "#{item/lavender}",
      "#{item/crystal}",
      "#{item/cinderbloom}",
      "#{item/demon-horn}",
      "#{item/hide}",
      "#{item/sand}",
    ];
    let gemLayout = [
      "#{item/ruby}",
      "#{item/emerald}",
      "#{item/topaz}",
      "#{item/amethyst}",
    ];
    let bottledLayout = [
      "#{item/bottled-torchbug}",
      "#{item/bottled-beetle}",
      "#{item/bottled-butterfly}",
      "#{item/bottled-deathmoth}",
      "#{item/bottled-oil}",
      "#{item/bottled-water}",
      "#{item/bottled-milk}",
      "#{item/bottled-fairy}",
      "#{item/bottled-rainbow}",
    ];
    let archLayout = [
      "#{item/fossil}",
      "#{item/sphynx}",
      "#{item/kapala}",
      "#{item/frozen-relic}",
      "#{item/anchor}",
      "#{item/sunken-ankh}",
      "#{item/dino-egg}",
      "#{item/skeleton-fish}",
      "#{item/frozen-squid}",
      "#{item/lava-eel}",
    ];
    let craftableLayout = [
      "#{item/thread}",
      "#{item/hide}",
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
      "#{item/transmutation}",
      "#{item/green-pigment}",
      "#{item/purple-pigment}",
      "#{item/arrow}",
      "#{item/bomb}",
      "#{item/key}",
      "#{item/coin}",
      "#{item/bottle}",
      "#{item/droid}",
    ];

    this.renderPanel(rawMaterialLayout, $("#raw-material-panel"));
    this.renderPanel(gemLayout, $("#gem-panel"));
    this.renderPanel(bottledLayout, $("#bottled-panel"));
    this.renderPanel(archLayout, $("#arch-panel"));
    this.renderPanel(craftableLayout, $("#craftable-panel"));
   
    // "#{item/}",
    let farmRawLayout = [
      "#{item/poop}",
      "#{item/beet}",
      "#{item/wheat}",
      "#{item/hot-pepper}",
      "#{item/pumpkin}",
      "#{item/berry}",
      "#{item/citrus}",
      "#{item/egg}",
      "#{item/golden-egg}",
      "#{item/bottled-milk}",
      "#{item/meat}",
      "#{item/fish}",
      "#{item/seaweed}",
    ];
    let seedLayout = [
      "#{item/animal-feed}",
      "#{item/beet-seeds}",
      "#{item/wheat-seeds}",
      "#{item/pepper-seeds}",
      "#{item/pumpkin-seeds}",
      "#{item/tree-sapling}",
      "#{item/cotton-seeds}",
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
      "#{item/basic-backpack}",
      "#{item/small-backpack}",
      "#{item/medium-backpack}",
      "#{item/big-backpack}",
      "#{item/huge-backpack}",
      "#{item/tycoon-backpack}",
    ];
    let walletLayout = [
      "#{item/basic-wallet}",
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
      "#{item/nerdy-glasses}",
      "#{item/top-hat}",
      "#{item/pink-bow}",
      "#{item/lantern}",
      "#{item/skull-key}",
      "#{item/skeleton-mask}",
      "#{item/fairy-aura}",
      "#{item/quiver}",
      "#{item/vampyr-wings}",
      "#{item/shield}",
      "#{item/magic-scepter}",
      "#{item/holy-relic}",
    ];
    let sealLayout = [
      "#{item/ancient-seal}",
      "#{item/skull-seal}",
      "#{item/frozen-seal}",
      "#{item/fire-seal}",
      "#{item/ancient galaxy-seal}",
      "#{item/skull galaxy-seal}",
      "#{item/frozen galaxy-seal}",
      "#{item/fire galaxy-seal}",
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