'use strict';

const pictureLink = 'https://danya-prohvat.github.io/MyPortfolio/shopPage/img/';

const phones = [
  {
    id: 1,
    name: 'HUAWEI MATE S1',
    currentPrice: 280,
    originalPrice: 320,
    photo: `${pictureLink}phone1.png`,
  },
  {
    id: 2,
    name: 'SONY XPERIA Z5',
    currentPrice: 550,
    photo: `${pictureLink}phone2.png`,
  },
  {
    id: 3,
    name: 'XIAOMI MI 4I',
    currentPrice: 350,
    photo: `${pictureLink}phone3.png`,
  },
  {
    id: 4,
    name: 'HUAWEI MATE S4',
    currentPrice: 280,
    photo: `${pictureLink}phone4.png`,
  },
  {
    id: 5,
    name: 'SAMSUNG GALAXY M12',
    currentPrice: 190,
    photo: `${pictureLink}1.jpg`,
  },
  {
    id: 6,
    name: 'SAMSUNG GALAXY A51',
    currentPrice: 330,
    photo: `${pictureLink}2.jpg`,
  },
  {
    id: 7,
    name: 'ASUS ZENFONE 8',
    currentPrice: 900,
    originalPrice: 1140,
    photo: `${pictureLink}3.jpg`,
  },
  {
    id: 8,
    name: 'NOKIA 5.4',
    currentPrice: 240,
    photo: `${pictureLink}4.jpg`,
  },
];

phones.forEach(item => createProductCard(item));

function createProductCard(phone) {
  // create elements: product card, image/container,
  // title, price/discount, cart button;
  const productCard = document.createElement('div');
  const phoneImageContainer = document.createElement('div');
  const phoneImageSrc = document.createElement('img');
  const phoneTextContainer = document.createElement('div');
  const phoneTextTitle = document.createElement('h3');
  const phoneCurrentPrice = document.createElement('p');
  const phoneOriginalPrice = document.createElement('span');
  const cartIcon = document.createElement('a');

  // add classes to each element
  productCard.classList.add('product-card');
  phoneImageContainer.classList.add('product-card__img');
  phoneTextContainer.classList.add('product-card__text');
  cartIcon.classList.add('product-card__button');

  // set src attribute to the image
  phoneImageSrc.setAttribute('src', phone.photo);

  // add content to title, current price and original price
  phoneTextTitle.innerHTML = phone.name;
  phoneCurrentPrice.innerHTML = `$${phone.currentPrice}.00`;

  phoneOriginalPrice.innerHTML = phone.originalPrice
    ? ` $${phone.originalPrice}.00`
    : '';

  // append elements to the product card
  productCard.append(phoneImageContainer);
  phoneImageContainer.append(phoneImageSrc); // image / container appended
  phoneTextContainer.append(phoneTextTitle);
  phoneTextContainer.append(phoneCurrentPrice);

  if (phone.originalPrice) {
    phoneCurrentPrice.append(phoneOriginalPrice);
  }
  productCard.append(phoneTextContainer);
  productCard.append(cartIcon);

  // append the final card to the catalog
  appendCard(productCard);
}

function appendCard(card) {
  const catalog = document.querySelector('.main__catalog--content');

  catalog.append(card);
}
