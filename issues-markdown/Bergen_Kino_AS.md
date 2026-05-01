# WCAG Violations Report for Bergen Kino AS

**Timestamp:** 2026-05-01T20:08:51.014Z
**URL:** [https://www.bergenkino.no/#](https://www.bergenkino.no/#)
**Total Violations:** 9

## Violation Details

### Inline text spacing must be adjustable with custom stylesheets

- **Impact:** serious
- **Description:** Ensure that text spacing set through style attributes can be adjusted with custom stylesheets
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/avoid-inline-spacing?application=playwright
- **Tags:** cat.structure, wcag21aa, wcag1412, EN-301-549, EN-9.1.4.12, ACT
- **Count:** 1

#### Affected Elements:

- `#obj32e2dabda1fb4dad8dc37a8b5732f3d8_showtimes > p`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 16

#### Affected Elements:

- `#obj2955fe0f18e541aca402d7f2344c9dd9_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objb43643a1cb4544bf83d4be4f5fe7c6ce_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj03467c6562044ed286d0688b83a12e65_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objcbd0f8126e224415893e72f40902307e_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8f205f11e50d44acbdd8aab25be16d14_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj5cfcbce5dc6b482eb8d040511f0f39a6_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj660811c4e3d4445faf37efc67e22ae07_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj07f055e2afc54003b64875d2c84749f1_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objf0e2f07816b7443cbb60cdc4a87e5590_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj6398214bb19142e5b022dbf0b1fb2b65_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objfbd5c1de1ca74dd5b585a8e8ae6a33c2_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8557be774123412f8977558de8fc58d3_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj306c61fcf220474389882b9e9ec41087_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objb9c748284afb4c31b4944ec378e8c673_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `.top-list_subtitle`
- `.text-capitalize`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `#obj2955fe0f18e541aca402d7f2344c9dd9_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `#objcbd0f8126e224415893e72f40902307e_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `#objfbd5c1de1ca74dd5b585a8e8ae6a33c2_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `div:nth-child(1) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"] > .footer__download_img`
- `div:nth-child(2) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"] > .footer__download_img`
- `#\#ticket_icon_id`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 19

#### Affected Elements:

- `div[aria-label="1 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
- `div[aria-label="2 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/lee-cronins-the-mummy/2774"]`
- `div[aria-label="3 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/the-drama/2724"]`
- `div[aria-label="4 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
- `div[aria-label="5 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/project-hail-mary/2715"]`
- `div[aria-label="6 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
- `.swiper-slide-prev > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/michael/1964"]`
- `.swiper-slide-active > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
- `.swiper-slide-next > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/lee-cronins-the-mummy/2774"]`
- `div[aria-label="10 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/the-drama/2724"]`
- `div[aria-label="11 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
- `div[aria-label="12 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/project-hail-mary/2715"]`
- `div[aria-label="13 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
- `.swiper-slide-duplicate-prev > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/michael/1964"]`
- `div[aria-label="15 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
- `div[aria-label="16 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/lee-cronins-the-mummy/2774"]`
- `div[aria-label="17 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/the-drama/2724"]`
- `div:nth-child(1) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"]`
- `div:nth-child(2) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"]`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 2

#### Affected Elements:

- `meta[name="viewport"]:nth-child(7)`
- `meta[name="viewport"]:nth-child(36)`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 144

#### Affected Elements:

- `.header-transparent`
- `#swiper-wrapper-20deaa461097b42cd`
- `.objd0f170850cc9450ba29388c8186b9f14 > section > .flex-row.mb-4.font-weight-semi-bold`
- `div:nth-child(1) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `div:nth-child(1) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
- `div:nth-child(2) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `div:nth-child(2) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
- `div:nth-child(3) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `div:nth-child(3) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
- `a[href$="top-gun-40-arsjubileum"] > .card_item__title.font-weight-bold.mt-3`
- `a[href$="top-gun-40-arsjubileum"] > .card_item__subtitle.mt-1`
- `div:nth-child(5) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `div:nth-child(5) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
- `div:nth-child(6) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `div:nth-child(6) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
- `#obj77500aa41d5c48e6962ba0b5bfa2c6c2_adform`
- `.py-4.container > section > .flex-row.mb-4.font-weight-semi-bold`
- `#objed42bb4d862d41009caaf4744e7342d7_dates`
- `#objed42bb4d862d41009caaf4744e7342d7_sortOptions`
- `#objed42bb4d862d41009caaf4744e7342d7_screens`
- `#obje374ccd95ff6496ebeb6b011e5f0538c`
- `#obj2955fe0f18e541aca402d7f2344c9dd9_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj2955fe0f18e541aca402d7f2344c9dd9_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj2955fe0f18e541aca402d7f2344c9dd9_showtimes > p`
- `#obj2955fe0f18e541aca402d7f2344c9dd9_showtimes > .my-3 > .kinoclub`
- `#objf94d9755a3ec4553b9e5f235773b6991`
- `#obj9eccd2c84a734e0d8e08a2c83729f926`
- `.movie-title.font-weight-semi-bold[href="/f/michael/1964"]`
- `#objb43643a1cb4544bf83d4be4f5fe7c6ce_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objb43643a1cb4544bf83d4be4f5fe7c6ce_showtimes > p`
- `#obj0276c62e605d4a128ccb00ba3f1ebf02`
- `#obj07f060e8d3754ad5bcef92c4fefb4c06`
- `.movie-title.font-weight-semi-bold[href="/f/project-hail-mary/2715"]`
- `#obj03467c6562044ed286d0688b83a12e65_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj03467c6562044ed286d0688b83a12e65_showtimes > p`
- `#objdd5605e68fbb4ce39e73af96fd0887ae`
- `#objd0e53a9a4efc4daca7388f7a0f47e7f7_adform`
- `#objea4ac49660154a6a89f4994b747e24a7`
- `.movie-title.font-weight-semi-bold[href="/f/the-drama/2724"]`
- `#objcbd0f8126e224415893e72f40902307e_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objcbd0f8126e224415893e72f40902307e_showtimes > p`
- `#objcbd0f8126e224415893e72f40902307e_showtimes > .my-3 > .kinoclub`
- `#obj315551dbfb1c4105ac0432368f421887`
- `#obj392f2a381cd44976865b1f0b27702f43`
- `a[href="/f/hokum/2776"]`
- `#obj8f205f11e50d44acbdd8aab25be16d14_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8f205f11e50d44acbdd8aab25be16d14_showtimes > p`
- `#objb48bf9feb9784025967b5fb31623f3f8`
- `#obj36afda538cd047fc8a7c9eab8effff7e`
- `#obj5cfcbce5dc6b482eb8d040511f0f39a6_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj5cfcbce5dc6b482eb8d040511f0f39a6_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj5cfcbce5dc6b482eb8d040511f0f39a6_showtimes > p`
- `#obj5ff0cbed128642b3bb60ff331167edf5`
- `#obj58a7b8e361be4adfb7d740fb8d1ed70e`
- `a[href="/f/havfolket/2631"]`
- `#obj660811c4e3d4445faf37efc67e22ae07_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj660811c4e3d4445faf37efc67e22ae07_showtimes > p`
- `#obje5bf392e806744d691c500fe9de50a20`
- `#objfc4e5b5c940a46fdbc75c1ecb0f8f535`
- `a[href="/f/saltstien/2726"]`
- `#obj07f055e2afc54003b64875d2c84749f1_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj07f055e2afc54003b64875d2c84749f1_showtimes > p`
- `#objb246709aeedd448f917dc064ae4cf376`
- `#objca379ecba5d940f7990b28742a152d81`
- `a[href="/f/renoir/2775"]`
- `#objb5fb4129f8104459afdf53a2d6ab081e_showtimes > p`
- `#obj2539f7f3fb50412ba1469580549a6a8e`
- `#objff63bfb69d1a40b394d2d009ba2fbc89`
- `a[href="/f/whistle/2690"]`
- `#obj21bbf26356d24860aaf20315c449ca93_showtimes > p`
- `#obj97427f1a351143e7a2be4f1f81291927`
- `#obj33a260fd7cb34e149360e8daebf3dd4c`
- `#objd029e4487187479fb0fe6c13e7dcdd2f_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#objd029e4487187479fb0fe6c13e7dcdd2f_showtimes > p`
- `#obj59dc7c4376374c20a9d417f6875cd5a9`
- `#objbc189a8152044b90ad5e465c268dc253`
- `a[href="/f/sauedetektivene/2666"]`
- `#objbf70757a6f5540a0831185614711a995_showtimes > p`
- `#obj52d34a7eb9c04ebebcddba73b0294766`
- `#obj6844646622e146a38e2bfd32bf42dc9a`
- `a[href="/f/kraken/2266"]`
- `#objf0e2f07816b7443cbb60cdc4a87e5590_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objf0e2f07816b7443cbb60cdc4a87e5590_showtimes > p`
- `#obj55779344e58940fa84c61351eafe31e7`
- `#obj701eb2200270447091d14c8c9f4b4f0d`
- `a[href="/f/gaza/2707"]`
- `#obj3ff43d8a0c574b338bfe23ecd9ee2e8e_showtimes > p`
- `#objd464f261e47d4b63bd8300ff8d35d27c`
- `#obj5417b2085c5349709f72e2cfaab2c26b`
- `a[href="/f/goat-drom-stort/2367"]`
- `#obj6398214bb19142e5b022dbf0b1fb2b65_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj6398214bb19142e5b022dbf0b1fb2b65_showtimes > p`
- `#objae9ebb466ce34c9d8e284e7b90c0fe59`
- `#obj975b6caae92848b18ab70049c28cd719`
- `a[href="/f/i-swear/2705"]`
- `#objfbd5c1de1ca74dd5b585a8e8ae6a33c2_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objfbd5c1de1ca74dd5b585a8e8ae6a33c2_showtimes > p`
- `#objfbd5c1de1ca74dd5b585a8e8ae6a33c2_showtimes > .my-3 > .kinoclub`
- `#obj0156554810ba4da88b36b34dffa97db8`
- `#obj2e2cc62601c24d939e0f662fcfe2f334`
- `a[href="/f/to-anklagere/2844"]`
- `#obj32e2dabda1fb4dad8dc37a8b5732f3d8_showtimes > p`
- `#obj3df3e95b53d34a77af9021903738cb4d`
- `#obj25c748fb46834fb1b52bcdc02422c464`
- `#obj8557be774123412f8977558de8fc58d3_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj8557be774123412f8977558de8fc58d3_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8557be774123412f8977558de8fc58d3_showtimes > p`
- `#obj780c1edcf42744c484d97390ffb5b574`
- `#objb3ce35dcbd69413e834405a9decd2cc4`
- `a[href="/f/krolle-bolle/2368"]`
- `#obj27c5137dfb074ace81f0d3917a16cf94_showtimes > p`
- `#obj3816b66fd22848c886ac32a3dd9343f6`
- `#obj055bc66d854640e7bcb30ad6b685dd69`
- `.movie-title.font-weight-semi-bold[href="/f/lee-cronins-the-mummy/2774"]`
- `#obj306c61fcf220474389882b9e9ec41087_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj306c61fcf220474389882b9e9ec41087_showtimes > p`
- `#obj88d4c972eaaa451795247f0d36f0760d`
- `#objcb759f9195044723a482eab36a273454`
- `a[href="/f/operasjon-bever/2704"]`
- `#objb9c748284afb4c31b4944ec378e8c673_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objb9c748284afb4c31b4944ec378e8c673_showtimes > p`
- `#obj8744726d54844a559340043597ad0c14`
- `#obj11c00ac312ae407eb990cfe607074b91 > .card2_item__image > img[alt="poster"][loading="lazy"]`
- `#obj5a4bd0e653034b90a6f28bbee44bdf19_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj5a4bd0e653034b90a6f28bbee44bdf19_showtimes > p`
- `#obj584eb3614e9a4ed58ca13f883a0a1156`
- `.obj8a1865765f81434f8f8cf51b3284b1cc > section > .flex-row.mb-4.font-weight-semi-bold`
- `.top-list_subtitle`
- `#objb8e5b8a2da8c4880b0aa43b7d4855b98 > .top-card_wrapper.d-flex`
- `#obj96b438af873c471a8c11d4f57eea69e5 > .top-card_wrapper.d-flex`
- `#obj83b6120a7f2d45c599ea05fd91a57f22 > .top-card_wrapper.d-flex`
- `#obj0dca0203ddd948488d2972f77a6da429 > .top-card_wrapper.d-flex`
- `#objae2063e010654aeb888fb889a64ae1e9 > .top-card_wrapper.d-flex`
- `#objd5981dcdc1b84adcadc3d7594506b76b > .top-card_wrapper.d-flex`
- `.col-sm-12.col-md-3:nth-child(1)`
- `.col-sm-12.col-md-3:nth-child(2)`
- `.footer__subtitle.pt-2.mb-2`
- `.col-sm-12.col-md-3:nth-child(3) > div:nth-child(3)`
- `.footer__download_application`
- `.footer__coopyrights`
- `#widget_button_id`
- `.quick-buy-widget__film-filter-dropdown`
- `.quick-buy-widget__date`
- `.quick-buy-widget__showtime`

### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 6

#### Affected Elements:

- `#objed42bb4d862d41009caaf4744e7342d7_dates`
- `#objed42bb4d862d41009caaf4744e7342d7_sortOptions`
- `#objed42bb4d862d41009caaf4744e7342d7_screens`
- `.movie-filter-dropdown`
- `#date_picker`
- `#showtime_dropdown`
