Function.prototype.clone = function() {
  var that = this;
  var temp = function temporary() { return that.apply(this, arguments); };
  for(var key in this) {
      if (this.hasOwnProperty(key)) {
          temp[key] = this[key];
      }
  }
  return temp;
};

class ForagerObject {
  // key;
  // name;
  // _desc;
  constructor({ key, name, desc = [] } = {}) {
    this.key = key;
    this.name = name;
    this._desc = desc;
  }

  forEachDesc(callback) {
    for (let line of this._desc) {
      callback(line);
    }
  }

  thumbnailDOM(width, height, margin, scale, hover=false) {
    let hoverclass = hover ? "hover-wrapper" : "";
    let $pane = $("<div>", {
      class: `icon ${hoverclass}`,
      id: this.key,
    });
    let $frame = $("<div>", {
      class: `align-center`,
      style: `width:${width}px; height:${height}px; margin:${margin}px`
    });
    let $img = $("<img>", {
      class: "img-fluid mx-auto",
      src: this.img(),
      alt: this.name,
      style: "visibility: hidden"
    });
    /**
    * Can not figure out how to scale a image according to natural size and
    * center it in parent container, so I used this ad-hoc approach instead.
    */
    $img.on("load", function() {
      let w = $img[0].naturalWidth;
      let h = $img[0].naturalHeight;
      scale = Math.min(scale, width/w, height/h);
      $img.width(w*scale);
      $img.height(h*scale);
      $img.css("visibility", "visible");
    });
    $frame.append($img);
    $pane.append($frame);
    return $pane;
  }

  referThumbnailDOM() {
    return $(`#${this.key}`);
  }

  infoDOM($img) {
    let $card = $("<div>", { class: "card" });
    let $imgDiv = $("<div>", {class: "mx-auto align-center"});
    $img.appendTo($imgDiv);
    let $title = $("<h5>", {
      class: "card-title text-center",
      text: this.name
    });
    let $desc = $("<ul>", {
      class: "list-group list-group-flush forager-desc"
    });
    this.forEachDesc(function (line) {
      $("<li>", { class: "list-group-item" }).html(unfoldMacro(line)).appendTo($desc);
    });
    return $card.append($imgDiv, $title, $desc);
  }

  href(prefix, showIcon, alias) {
    if (showIcon === undefined) showIcon = true;
    let icon = showIcon ? `<img src="img/${prefix}/${this.key}.png" class="inline-image">` : "";
    let text = (alias === undefined) ? this.name : alias;
    return `<a href="${prefix}.html?${this.key}">${icon}${text}</a>`;
  }

  img(prefix, suffix) {
    if (suffix === undefined) suffix = "png";
    return `img/${prefix}/${this.key}.${suffix}`;
  }
  // newInstance(data)
}

class Skill extends ForagerObject {
  constructor({ key, name, unlock = [], desc = [] } = {}) {
    // _unlock;
    super({ key, name, desc });
    this._unlock = unlock;
  }

  forEachUnlock(callback) {
    for (let line of this._unlock) {
      callback(line);
    }
  }

  img() {
    return super.img("skill");
  }

  href(showIcon, alias) {
    return super.href("skill", showIcon, alias);
  }

  infoDOM($img) {
    let $card = super.infoDOM($img);
    let $desc = $card.children(".forager-desc");
    this.forEachUnlock(function (line) {
      $("<li>", { class: "list-group-item" }).html("解锁" + unfoldMacro(line)).prependTo($desc);
    });
    return $card;
  }

  static newInstance(data) {
    return new Skill(data);
  }
}

class Item extends ForagerObject {
  // value
  // _usage
  constructor({ key, name, value = undefined, energy = undefined, usage = [], source = [], ingrd = [], opt_ingrd = [], desc = [], require = [] } = {}) {
    super({ key, name, desc });
    this.value = value;
    this.energy = energy;
    this._usage = usage;
    this._source = source;
    this._ingrd = ingrd;
    this._opt_ingrd = opt_ingrd;
    this._require = require;
  }

  forEachUsage(callback) {
    for (let line of this._usage) {
      callback(line);
    }
  }

  img() {
    return super.img("item");
  }

  href(showIcon, alias) {
    return super.href("item", showIcon, alias);
  }

  infoDOM($img) {
    let $card = super.infoDOM($img);
    let $desc = $card.children(".forager-desc");
    if (this.energy !== undefined) {
      $("<li>", { class: "list-group-item" }).html("能量：" + this.energy).prependTo($desc);
    }
    if (this.value !== undefined) {
      $("<li>", { class: "list-group-item" }).html("价值：" + this.value).prependTo($desc);
    }
    if (this._require.length > 0) {
      let requires = this._require.map(st => lookupName(st).href());
      $("<li>", { class: "list-group-item" }).html(`需求技能：${requires.join(" ")}`).appendTo($desc);
    }
    function createIngrdDOM(ingrd) {
      let workplace = lookupName(ingrd[0]).href();
      let ingrds = ingrd.slice(1).map(function (element){
        let object = lookupName(element.name);
        let quantity = element.qty;
        return `${object.href()}(${quantity})`;
      });
      return $("<li>", { class: "list-group-item" }).html(`${workplace}合成：${ingrds.join(" ")}`);
    }
    if (this._source.length != 0) {
      let sources = this._source.map(st => lookupName(st).href());
      $("<li>", { class: "list-group-item" }).html(`来源：${sources.join(" ")}`).appendTo($desc);
    }
    if (this._ingrd.length != 0) createIngrdDOM(this._ingrd).appendTo($desc);
    if (this._opt_ingrd.length != 0) {
      for (let ingrd of this._opt_ingrd) {
        if (ingrd.length != 0) createIngrdDOM(ingrd).appendTo($desc);
      }
    }
    return $card;
  }

  static newInstance(data) {
    return new Item(data);
  }
}

class Struct extends ForagerObject {
  constructor({ key, name, ingrd = [], prod = [], desc = [], require = [] } = {}) {
    super({ key, name, desc });
    this._ingrd = ingrd;
    this._prod = prod;
    this._require = require;
  }

  img() {
    return super.img("struct");
  }

  href(showIcon, alias) {
    return super.href("struct", showIcon, alias);
  }

  forEachProduct(callback) {
    for (let line of this._prod) {
      callback(line);
    }
  }

  forEachIngredient(callback) {
    for (let line of this._ingrd) {
      callback(line);
    }
  }
  
  addProduct(st) {
    this._prod.push(st);
  }

  infoDOM($img) {
    let $card = super.infoDOM($img);
    let $desc = $card.children(".forager-desc");
    if (this._prod && this._prod.length != 0) {
      let products = [];
      this.forEachProduct(function(st) {
        let object = lookupName(st);
        products.push(object.href());
      });
      $("<li>", { class: "list-group-item" }).html("产物：" + products.join(" ")).prependTo($desc);
    }
    if (this._ingrd.length != 0) {
      let ingredients = [];
      this.forEachIngredient(function(element) {
        let st = element.name;
        let quantity = element.qty;
        let object = lookupName(st);
        ingredients.push(`${object.href()}(${quantity})`);
      });
      $("<li>", { class: "list-group-item" }).html("材料：" + ingredients.join(" ")).prependTo($desc);
    }
    return $card;
  }

  static newInstance(data) {
    return new Struct(data);
  }
}



class Land extends ForagerObject {
  constructor({ key, name, desc = [] } = {}) {
    super({ key, name, desc });
  }

  img() {
    return super.img("land", "jpg");
  }

  href(showIcon, alias) {
    return super.href("land", false, alias);
  }

  infoDOM($img) {
    let $card = super.infoDOM($img);
    return $card;
  }

  static newInstance(data) {
    return new Land(data);
  }
}




class Obj extends ForagerObject {
  constructor({ key, name, desc = [], appear = [], drop = [] } = {}) {
    super({ key, name, desc });
    this._drop = drop;
    this._appear = appear;
  }

  img() {
    return super.img("obj");
  }

  href(showIcon, alias) {
    return super.href("obj", showIcon, alias);
  }

  infoDOM($img) {
    let $card = super.infoDOM($img);
    let $desc = $card.children(".forager-desc");
    if (this._appear.length != 0) {
      let appears = this._appear.map(function (st){
        let res = decodeName(st);
        return res.object.href(res.showIcon, res.aliasText);
      });
      $("<li>", { class: "list-group-item" }).html("出现于" + appears.join("，")).prependTo($desc);
    }
    if (this._drop.length != 0) {
      let drops = this._drop.map(st => lookupName(st).href());
      $("<li>", { class: "list-group-item" }).html("掉落：" + drops.join(" ")).appendTo($desc);
    }
    return $card;
  }

  static newInstance(data) {
    return new Obj(data);
  }
}




class Buff extends ForagerObject {
  constructor({ key, name, desc = [] } = {}) {
    super({ key, name, desc });
  }

  img() {
    return super.img("buff");
  }

  href(showIcon, alias) {
    return super.href("buff", showIcon, alias);
  }

  infoDOM($img) {
    let $card = super.infoDOM($img);
    let $desc = $card.children(".forager-desc");
    return $card;
  }

  static newInstance(data) {
    return new Buff(data);
  }
}



class Feat extends ForagerObject {
  constructor({ key, name, desc = [] } = {}) {
    super({ key, name, desc });
  }

  img() {
    return super.img("feat");
  }

  href(showIcon, alias) {
    return super.href("feat", showIcon, alias);
  }

  infoDOM($img) {
    let $card = super.infoDOM($img);
    let $desc = $card.children(".forager-desc");
    return $card;
  }

  static newInstance(data) {
    return new Feat(data);
  }
}
