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
      class: `align-center `,
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

  // img()
  // href()
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
    return `img/skill/${this.key}.png`;
  }

  href() {
    let icon = `<img src="img/skill/${this.key}.png" class="inline-image">`;
    return `<a href="skill.html?${this.key}">${icon}${this.name}</a>`;
  }

  infoDOM($img) {
    let $card = super.infoDOM($img);
    let $desc = $card.children(".forager-desc");
    this.forEachUnlock(function (line) {
      $("<li>", { class: "list-group-item" }).html("解锁" + unfoldMacro(line)).prependTo($desc);
    });
    return $card;
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
    return `img/item/${this.key}.png`;
  }

  href() {
    let icon = `<img src="img/item/${this.key}.png" class="inline-image">`;
    return `<a href="item.html?${this.key}">${icon}${this.name}</a>`;
  }

  infoDOM($img) {
    let $card = super.infoDOM($img);
    let $desc = $card.children(".forager-desc");
    $("<li>", { class: "list-group-item" }).html("价值:" + this.value).prependTo($desc);
    return $card;
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

 class Struct {}