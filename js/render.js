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

function renderSkills() {
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

  function selectSkill(skill) {
    selectedSkill = skill;
    let $card = skill.infoDOM();
    $("#info").empty().append($card);
  }

  function renderTable(layout, tableId) {
    for (let line of layout) {
      let $tr = $("<tr>");
      $(tableId + " > tbody").append($tr);
      for (let name of line) {
        let skill = lookupName(name);
        let $td = $("<td>");
        let $card = skill.thumbnailDOM();
        $card.click(function () {
          selectSkill(skill);
        });
        $td.append($card);
        $tr.append($td);
      }
    }
  }

  renderTable(industryLayout, "#industry-table");
  renderTable(economyLayout, "#economy-table");
  renderTable(foragingLayout, "#foraging-table");
  renderTable(magicLayout, "#magic-table");
}

function renderItem() {
  let rawItemLayout = [

  ];
}