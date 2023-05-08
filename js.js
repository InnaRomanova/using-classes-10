"use strict";

class Card {
  constructor(src, alt, price, oldPrice, type, descrition, parent) {
    this.src = src;
    this.alt = alt;
    this.price = price;
    this.oldPrice = oldPrice;
    this.type = type;
    this.descrition = descrition;
    this.sale = Math.floor((this.price / this.oldPrice) * 100 - 100);
    this.parent = parent;
  }
  render() {
    document.querySelector(this.parent).insertAdjacentHTML(
      "beforeend",

      `<div class="card">
        <img class="card__img" src=${this.src} alt=${this.alt} />
        <div class="card__sale">${this.sale}%</div>
        <div class="card__price">
          ${this.price}<span class="card__old-Price"> <s>${this.oldPrice}</s> </span>
        </div>
        <div class="card__type">${this.type}</div>
        <div class="card__descr">${this.descrition}</div>
      </div>`
    );
  }
}

const clickBtn = document.querySelector(".btn");

function handleClick() {
  clickBtn.addEventListener("click", function () {
    for (let i = 0; i < 3; i++) {
      new Card(
        `img/tv-${i + 1}.png`,
        "tv",
        39000,
        30000,
        "Из старой коллекции",
        "Самый усовершенствованный тип телевизора",
        ".cards"
      ).render();
    }
  });
}

handleClick();

// let copyCard = new Card(
//   "img/tv-2.png",
//   "tv",
//   39000,
//   30000,
//   "Из старой коллекции",
//   "Самый усовершенствованный тип телевизора",
//   ".cards"
// );

// copyCard.render();
// copyCard.render();
