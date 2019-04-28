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

  thumbnailDOM() {
    let $card = $("<div>", {
      class: "card-transparent border-dark",
    });
    let $img = $("<img>", {
      class: "card-img-top",
      src: this.img(),
      // alt: this.name,
      style: "width:50%"
    });
    let $tag = $("<p>", {
      class: "card-title text-center",
      text: this.name
    });
    return $card.append($img);
  }

  // img()
  // href()
}

class Skill extends ForagerObject {
  constructor({ key, name, num, unlock = [], desc = [] } = {}) {
    // num;
    // _unlock;
    super({ key, name, desc });
    this.num = num;
    this._unlock = unlock;
  }

  forEachUnlock(callback) {
    for (let line of this._unlock) {
      callback(line);
    }
  }

  img() {
    return `img/skill/${this.num}.png`;
  }

  href() {
    return `<a href="skill.html?${this.key}">${this.name}</a>`;
  }

  infoDOM() {
    let $card = $("<div>", { class: "card" });
    let $img = $("<img>", {
      class: "card-img-top mx-auto",
      src: this.img(),
      // alt: this.name,
      style: "width:50%"
    });
    let $title = $("<p>", {
      class: "card-title text-center",
      text: this.name
    });
    let $desc = $("<ul>", {
      class: "list-group list-group-flush"
    });
    this.forEachUnlock(function (line) {
      $("<li>", { class: "list-group-item" }).html("解锁" + unfoldMacro(line)).appendTo($desc);
    });
    this.forEachDesc(function (line) {
      $("<li>", { class: "list-group-item" }).html(unfoldMacro(line)).appendTo($desc);
    });
    return $card.append($img, $title, $desc);
  }
}

class Item extends ForagerObject {
  // num
  // value
  // _usage
  // _related
  constructor({ key, name, num, value, usage = [], related = [], desc = [] } = {}) {
    super({ key, name, desc });
    this.num = num;
    this.value = value;
    this._usage = usage;
    this._related = related;
  }

  forEachUsage(callback) {
    for (let line of this._usage) {
      callback(line);
    }
  }

  forEachRelated(callback) {
    for (let line of this._related) {
      callback(line);
    }
  }

  img() {
    return `img/item/${this.num}.png`;
  }

  href() {
    return `<a href="item.html?${this.key}">${this.name}</a>`;
  }
}

class RawItem extends Item {
  constructor({ key, name, num, value, usage = [], related = [], desc = [] } = {}) {
    super({ key, name, num, value, usage, related, desc });
  }

  infoDOM() {
    let $card = $("<div>", { class: "card" });
    let $img = $("<img>", {
      class: "card-img-top mx-auto",
      src: this.img(),
      // alt: this.name,
      style: "width:50%"
    });
    let $title = $("<p>", {
      class: "card-title text-center",
      text: this.name
    });
    let $desc = $("<ul>", {
      class: "list-group list-group-flush"
    });
    $("<li>", { class: "list-group-item" }).html("价值:" + this.value).appendTo($desc);
    for (let line of this.desc) {
      $("<li>", { class: "list-group-item" }).html(unfoldMacro(line)).appendTo($desc);
    }
    return $card.append($img, $title, $desc);
  }
}

class Craftable { }

class Equipment { }

class Food { }

/**
 * mineral: energy
 * gem:
 */