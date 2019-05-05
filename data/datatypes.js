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
    let $title = $("<p>", {
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

  img(prefix) {
    return `img/${prefix}/${this.key}.png`;
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
  constructor({ key, name, value, usage = [], desc = [] } = {}) {
    super({ key, name, desc });
    this.value = value;
    this._usage = usage;
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
    $("<li>", { class: "list-group-item" }).html("价值:" + this.value).prependTo($desc);
    return $card;
  }

  static newInstance(data) {
    return new Item(data);
  }
}

class RawItem {}

class Craftable { }

class Equipment { }

class Food { }

/**
 * mineral: energy
 * gem:
 */

class Struct extends ForagerObject {
  // value
  // _usage
  constructor({ key, name, ingrd = [], prod = [], desc = [] } = {}) {
    super({ key, name, desc });
    this._ingrd = ingrd;
    this._prod = prod;
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

  infoDOM($img) {
    let $card = super.infoDOM($img);
    let $desc = $card.children(".forager-desc");
    if (this._prod && this._prod.length != 0) {
      let products = [];
      this.forEachProduct(function(st) {
        let object = lookupName(st);
        products.push(object.href());
      });
      $("<li>", { class: "list-group-item" }).html("产物:" + products.join(" ")).prependTo($desc);
    }
    if (this._ingrd && this._ingrd.length != 0) {
      let ingredients = [];
      this.forEachIngredient(function(element) {
        let st = element.name;
        let quantity = element.qty;
        let object = lookupName(st);
        ingredients.push(`${object.href()}&times;${quantity}`);
      });
      $("<li>", { class: "list-group-item" }).html("材料:" + ingredients.join(" ")).prependTo($desc);
    }
    return $card;
  }

  static newInstance(data) {
    return new Struct(data);
  }
}