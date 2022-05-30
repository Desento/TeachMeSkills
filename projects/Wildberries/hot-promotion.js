// export default (promotions, hotPromotion) => {
//     const hotPromotionContainer = document.createElement('div');
//     hotPromotionContainer.classList.add('customers-slider swiper-container');
//     const hotPromotionWrapper = document.createElement('div');
//     hotPromotionWrapper.classList.add('customers-slider swiper-wrapper');
//     for (var key in promotions) {
//         const hotPromotionSlide = document.createElement('div');
//         hotPromotionSlide.classList.add('customers-slider swiper-slide');
//         hotPromotionSlide.scr = promotions[key].img;
//         hotPromotionWrapper.append(hotPromotionSlide);
//     }
//     hotPromotionContainer.append(hotPromotionWrapper);
//     hotPromotion.append(hotPromotionContainer);
// }