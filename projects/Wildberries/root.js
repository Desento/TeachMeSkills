// function hotPromotion (promotions, hotSale) {
//   const hotPromotionContainer = document.createElement('div');
//   hotPromotionContainer.classList.add('swiper');
//   const hotPromotionWrapper = document.createElement('div');
//   hotPromotionWrapper.classList.add('swiper-wrapper');
//   for (var key in promotions) {
//       const hotPromotionSlide = document.createElement('div');
//       hotPromotionSlide.classList.add('swiper-slide');
//       const hotPromotionSlideImg = document.createElement('img');
//       hotPromotionSlideImg.classList.add('slide__img')
//       hotPromotionSlideImg.src = promotions[key].img;
//       hotPromotionSlide.append(hotPromotionSlideImg);
//       hotPromotionWrapper.append(hotPromotionSlide);
//   }
//   hotPromotionContainer.append(hotPromotionWrapper);
//   hotSale.append(hotPromotionContainer);
// };

function topSale (goods, sale) {
  const topSaleElement = document.createElement('div');
  topSaleElement.classList.add('container-wrapper');
  for (var key in goods) {
      const goodsCard = document.createElement('div');
      goodsCard.classList.add('goods-card');
      const goodsCardImage = document.createElement('div');
      goodsCardImage.classList.add('goods-card__image');
      const goodsCardImageLink = document.createElement('img');
      goodsCardImageLink.classList.add('good-card__image-link');
      goodsCardImageLink.src = goods[key].img;
      const goodsCardImageClue = document.createElement('a');
      goodsCardImageClue.classList.add('goods-card__image-clue');
      goodsCardImageClue.textContent = 'Быстрый просмотр';
      const goodsCardSale = document.createElement('div');
      goodsCardSale.classList.add('goods-card__sale');
      goodsCardSale.textContent = `-${goods[key].sale}%`;
      const goodsCardCart = document.createElement('i');
      goodsCardCart.classList.add('fa-solid', 'fa-cart-shopping');
      goodsCardImage.append(goodsCardImageLink, goodsCardImageClue, goodsCardSale, goodsCardCart);
      const goodsCardCost = document.createElement('div');
      goodsCardCost.classList.add('goods-card__cost');
      const goodsCardNewCost = document.createElement('div');
      goodsCardNewCost.classList.add('goods-card__cost-new');
      let newCost = (goods[key].cost-(goods[key].cost / 100 * goods[key].sale));
      newCost = newCost.toFixed(2);
      goodsCardNewCost.textContent = `${newCost}$`;
      const goodsCardOldCost = document.createElement('div');
      goodsCardOldCost.classList.add('goods-card__cost-old');
      goodsCardOldCost.textContent = `${goods[key].cost}$`;
      goodsCardCost.append(goodsCardNewCost, goodsCardOldCost);
      const goodsCardName = document.createElement('div');
      goodsCardName.classList.add('goods-card__name');
      goodsCardName.textContent = `${goods[key].name}`;
      goodsCard.append(goodsCardImage, goodsCardCost, goodsCardName);
      topSaleElement.append(goodsCard);
  }
  sale.append(topSaleElement);
}

let sale = document.getElementById('sale');
// let hotSale = document.getElementById('hot-sale');
const urlGoods = 'https://62593b6a43fda1299a0a95e4.mockapi.io/goods';
// const urlPromotions = 'https://62593b6a43fda1299a0a95e4.mockapi.io/HotSale';

async function getData(url) {
 const response = await fetch(url);
 return response.json();
}
(async () => {
const goods = await getData(urlGoods);
topSale(goods, sale);

// const hotSaleImg = await getData(urlPromotions);
// hotPromotion(hotSaleImg, hotSale);

})()
