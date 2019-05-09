class LightsOut {
  constructor(W, H) {
    console.assert(0 < W && W < 32);
    console.assert(0 < H);
    this.W = W;
    this.H = H;
    this.mask = (1 << W) - 1;
    this.M = [];
    for (let i = 0; i < H; i++) {
      this.M.push(this.mask);
    }
  }

  setMatrix(M, W) {
    this.M = M;
    this.H = M.length;
    this.W = W;
    this.mask = (1 << W) - 1;
  }

  setCell(i, j, val) {
    if (val) this.M[i] |= 1 << j;
    else this.M[i] &= ~(1 << j);
  }

  flipCell(i, j) {
    this.M[i] ^= 1 << j;
    $(`#${i}_${j} > img`).toggleClass("d-none");
  }
  /**
   * Return the current line after a set of operations conducted right on this line
   * @param  {} ops
   */
  toggleLine(ops) {
    return ops ^ (this.mask & ops << 1) ^ (ops >>> 1);
  }

  propagate(ops, print) {
    let presses = [];
    if (print) presses.push(this.getLinePresses(ops));
    let curLine = this.M[0] ^ this.toggleLine(ops);
    for (let i = 1; i < this.H; i++) {
      let nextLine = this.M[i] ^ ops;
      ops = curLine;
      if (print) presses.push(this.getLinePresses(ops));
      curLine = nextLine ^ this.toggleLine(ops);
    }
    if (print) return presses;
    else return curLine;
  }

  getLinePresses(ops) {
    let line = [];
    for (let i = 0; i < this.W; i++) {
      let bit = ops & 1;
      line.push(bit == 1 ? true : false);
      ops >>>= 1;
    }
    return line;
  }

  isDown(i, j) {
    return (this.M[i] & (1 << j)) == 0;
  }

  isUp(i, j) {
    return !this.isDown(i, j);
  }

  solve() {
    for (let ops = 0; ops < (1 << this.W); ops++) {
      if (this.propagate(ops) == 0) return this.propagate(ops, true);
    }
    return undefined;
  }
}

function render(lightsout) {
  $("#alert-message").addClass("d-none");
  let $matrix = $("#matrix");
  $matrix.empty();
  for (let i = 0; i < lightsout.H; i++) {
    let $tr = $("<tr>").appendTo($matrix);
    for (let j = 0; j < lightsout.W; j++) {
      let $td = $("<td>", {
        id: `${i}_${j}`,
        class: "pushdown-button",
        style: "width:48px; height: 56px; padding-left:8px"
      }).prependTo($tr);
      $td.click(function () {
        lightsout.flipCell(i, j);
      });

      $("<img>", {
        src: "img/other/pillar-down.png",
        width: "32",
        height: "40",
        // align: "bottom",
        class: "align-center " + (lightsout.isDown(i, j) ? "" : "d-none"),
      }).appendTo($td);
      $("<img>", {
        src: "img/other/pillar-up.png",
        width: "32",
        height: "52",
        // align: "bottom",
        class: "align-center " + (lightsout.isUp(i, j) ? "" : "d-none"),
      }).appendTo($td);
    }
  }
}

function resetPuzzle() {
  let row = $("#row").val();
  let col = $("#col").val();
  if (row <= 0 || col <= 0 || col >= 32) {
    console.error("wrong size");
    return;
  }
  lightsout = new LightsOut(col, row);
  render(lightsout);
}

function solveAndRender() {
  $("td").css("background-color", "transparent");
  let solve = lightsout.solve();
  if (solve === undefined) {
    $("#alert-message").removeClass("d-none");
    return;
  }
  for (let i = 0; i < lightsout.H; i++) {
    for (let j = 0; j < lightsout.W; j++) {
      if (solve[i][j]) {
        $(`#${i}_${j}`).css("background-color", "grey");
      }
    }
  }
}