# WCAG Violations Report for Bergen Kino AS

**Timestamp:** 2026-05-07T20:05:59.500Z
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

- `#obj0566550a66304b37bab0543c4d3c578a_showtimes > p`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 17

#### Affected Elements:

- `#obje2f6a8d699b842d08c2afab3621d7f36_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj2ace67d0fadb4d5d96e3a310bcb00fe9_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj3568c560708943e0b5766a93322acbab_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj73d1b0d9708d4231ae26f4f9b7a8abcf_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8c9cfce5b2294fa5823f825aecd235b5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj70eb21d936d14a40b5ef55f3fb558163_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj78e1a464e1d8492d898078fa925382c4_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj4373c917e74542cbb787e218104e0e50_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj587e093eb1d945aabc8b0476bb54e99b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj886ad3f779da431bb13df5d44c15e4d6_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objeb02c9432b07449b91e09a1944c9face_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj2faa37720ea54d4ca179d2a29de00f5d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obja15be2e31aea4e4b8e955b670332b2ff_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj0566550a66304b37bab0543c4d3c578a_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obje72a5095c0d54dc593d4b5011eaffab5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `.top-list_subtitle`
- `.text-capitalize`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `#obje2f6a8d699b842d08c2afab3621d7f36_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `#obj3568c560708943e0b5766a93322acbab_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `#obje72a5095c0d54dc593d4b5011eaffab5_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
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
- `meta[name="viewport"]:nth-child(35)`

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
- **Count:** 141

#### Affected Elements:

- `.header-transparent`
- `#swiper-wrapper-cfde7549960dee67`
- `.objd7254c77c3a2437b8d689d9bcdf0b625 > section > .flex-row.mb-4.font-weight-semi-bold`
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
- `#obj3f0af6e7973f4f148cd20d262c939c52_adform`
- `.py-4.container > section > .flex-row.mb-4.font-weight-semi-bold`
- `#obja1bff5d2ab6c491181a3dbb09f44b00d_dates`
- `#obja1bff5d2ab6c491181a3dbb09f44b00d_sortOptions`
- `#obja1bff5d2ab6c491181a3dbb09f44b00d_screens`
- `#obj45532046d8fb4134bf5d66852deac63f`
- `#obje2f6a8d699b842d08c2afab3621d7f36_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obje2f6a8d699b842d08c2afab3621d7f36_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obje2f6a8d699b842d08c2afab3621d7f36_showtimes > p`
- `#obje2f6a8d699b842d08c2afab3621d7f36_showtimes > .my-3 > .kinoclub`
- `#obj4ea2f6c23e434578b8e014fa9460cda4`
- `#obj13c438dc912d417ca32d12df6fb28ed7`
- `.movie-title.font-weight-semi-bold[href="/f/michael/1964"]`
- `#obj2ace67d0fadb4d5d96e3a310bcb00fe9_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj2ace67d0fadb4d5d96e3a310bcb00fe9_showtimes > p`
- `#obj6ae50f2c14884caea950b6e3453cedba`
- `#objb53c5a85b67546f0bbd80118d995f77b`
- `.movie-title.font-weight-semi-bold[href="/f/the-drama/2724"]`
- `#obj3568c560708943e0b5766a93322acbab_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj3568c560708943e0b5766a93322acbab_showtimes > p`
- `#obj3568c560708943e0b5766a93322acbab_showtimes > .my-3 > .kinoclub`
- `#obj4c30c73c25a243cbb059bdc9395cfa68`
- `#objae358d10fc9b4de0be616f72599b2551_adform`
- `#obj6916b8cd41a94126980494506ba12d6d`
- `a[href="/f/hokum/2776"]`
- `#obj73d1b0d9708d4231ae26f4f9b7a8abcf_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj73d1b0d9708d4231ae26f4f9b7a8abcf_showtimes > p`
- `#obj1a7d5b12e6ab455da459ffc2b7b66882`
- `#obj6b22d7c87b3042a6b8f38f81ac7a720b`
- `#obj8c9cfce5b2294fa5823f825aecd235b5_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj8c9cfce5b2294fa5823f825aecd235b5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8c9cfce5b2294fa5823f825aecd235b5_showtimes > p`
- `#obj32f7bcf78a6e4d6ba0d431bf18ef3abc`
- `#objc82ea2032d3b46a7968db4b88d0a2974`
- `.movie-title.font-weight-semi-bold[href="/f/project-hail-mary/2715"]`
- `#obj70eb21d936d14a40b5ef55f3fb558163_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj70eb21d936d14a40b5ef55f3fb558163_showtimes > p`
- `#obj2f75a965e67140b48398cdeb6efed85d`
- `#obj0da3e64cfc0646f7b78ce53169707403`
- `a[href="/f/saltstien/2726"]`
- `#obj78e1a464e1d8492d898078fa925382c4_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj78e1a464e1d8492d898078fa925382c4_showtimes > p`
- `#obj899c6d0303e44b22a70205b51f3764d9`
- `#obj759b9a2c1682493a9d879655bf99f243`
- `a[href="/f/kraken/2266"]`
- `#obj4373c917e74542cbb787e218104e0e50_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj4373c917e74542cbb787e218104e0e50_showtimes > p`
- `#objbf58f00010ce47838b23a7d62698df2c`
- `#objbc49d12fe45f4228a303aa55af32e7da`
- `a[href="/f/goat-drom-stort/2367"]`
- `#obj587e093eb1d945aabc8b0476bb54e99b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj587e093eb1d945aabc8b0476bb54e99b_showtimes > p`
- `#objf5d55d1b2dc544e59d998da75b8be27f`
- `#obj1206fc1aec5c448ab4800138f8bb0d64`
- `a[href="/f/whistle/2690"]`
- `#obj886ad3f779da431bb13df5d44c15e4d6_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj886ad3f779da431bb13df5d44c15e4d6_showtimes > p`
- `#objceaa93e514904a7181cca2a459dd9965`
- `#objf3165a1895044470b92488acd6437aee`
- `#obj8459ab036b2b48709ddac474eae810a4_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj8459ab036b2b48709ddac474eae810a4_showtimes > p`
- `#objac4e2cd42cc444d1a44080adfed886ad`
- `#obj189d3824d96649228800cdf31505af88`
- `a[href="/f/krolle-bolle/2368"]`
- `#objc53680916c9743dab8f79c3cd0d908ba_showtimes > p`
- `#obj011b00572c214d9b9eb28db4e383225e`
- `#obj7c3831cb9d174ad3a5b84e82631238ab`
- `a[href="/f/havfolket/2631"]`
- `#objeb02c9432b07449b91e09a1944c9face_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objeb02c9432b07449b91e09a1944c9face_showtimes > p`
- `#obj5b8fe595b28143b2976196d30063ad42`
- `#obj46a61c0aaaea43aaaf71aeec5de2fef8`
- `a[href="/f/operasjon-bever/2704"]`
- `#obj2faa37720ea54d4ca179d2a29de00f5d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj2faa37720ea54d4ca179d2a29de00f5d_showtimes > p`
- `#obj0db97520d2d246f3ab9d3e6e72519569`
- `#objd4e7914495924592b138d375229d6114`
- `#obja15be2e31aea4e4b8e955b670332b2ff_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obja15be2e31aea4e4b8e955b670332b2ff_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obja15be2e31aea4e4b8e955b670332b2ff_showtimes > p`
- `#obj17e624422fb54c599ac6debc6ee768b7`
- `#obj857fd9d8d02444de99b577df80d029a0 > .card2_item__image > img[alt="poster"][loading="lazy"]`
- `#obj93ea5668cab543d7820f72add3ce9626_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj93ea5668cab543d7820f72add3ce9626_showtimes > p`
- `#obj7f2a64e9d7224ef989967cbe230b5ce3`
- `#objc3026f08035c4db39bc10df03505676e`
- `a[href="/f/renoir/2775"]`
- `#obj03c6376b5a614f2c834d6e055417160d_showtimes > p`
- `#objb29fb3aae6aa4de49bc76bc09912abdc`
- `#obj3665a716eefb4913bdf48deade3bfa80`
- `a[href="/f/to-anklagere/2844"]`
- `#obj0566550a66304b37bab0543c4d3c578a_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj0566550a66304b37bab0543c4d3c578a_showtimes > p`
- `#obj04364720e5f44df6b891ddcd474054df`
- `#obj20ad3534d1b64d15953e2a263c3efa70`
- `a[href="/f/gaza/2707"]`
- `#obj766c60ffa6524e09973fae91451b42c6_showtimes > p`
- `#objf4dbb770ef344600bef9259f8c7a9fb2`
- `#objfc0d192fba044d72aacbca46e632611a`
- `a[href="/f/ekko-fra-fortiden/2710"]`
- `#obj8a0c04aa864f4dbbb44a429959211d52_showtimes > p`
- `#objebab2732aaac411191648468459be908`
- `#objcf870c01859a44b88ad79becfcd87450`
- `a[href="/f/i-swear/2705"]`
- `#obje72a5095c0d54dc593d4b5011eaffab5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obje72a5095c0d54dc593d4b5011eaffab5_showtimes > p`
- `#obje72a5095c0d54dc593d4b5011eaffab5_showtimes > .my-3 > .kinoclub`
- `#obj3d379ca42a4a4de19aaaad8b8829771e`
- `.obj53f5a088000a4b939c70d5d910fbe345 > section > .flex-row.mb-4.font-weight-semi-bold`
- `.top-list_subtitle`
- `#obj592aaf98624e48b19bfec4bee4fbf2c6 > .top-card_wrapper.d-flex`
- `#obj487acafaf6c54705ad1242689671857f > .top-card_wrapper.d-flex`
- `#objf9cb48f1064a4afbb3b9d55c37835ae7 > .top-card_wrapper.d-flex`
- `#obj62eefb91b6ad41de9e3a232592397182 > .top-card_wrapper.d-flex`
- `#obj041b6f3f4a234196b319cd3fd69d71ee > .top-card_wrapper.d-flex`
- `#obj98135467f2594a969521bf1f58f1de7c > .top-card_wrapper.d-flex`
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

- `#obja1bff5d2ab6c491181a3dbb09f44b00d_dates`
- `#obja1bff5d2ab6c491181a3dbb09f44b00d_sortOptions`
- `#obja1bff5d2ab6c491181a3dbb09f44b00d_screens`
- `.movie-filter-dropdown`
- `#date_picker`
- `#showtime_dropdown`
