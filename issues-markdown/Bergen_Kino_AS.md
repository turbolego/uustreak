# WCAG Violations Report for Bergen Kino AS

**Timestamp:** 2026-05-05T20:09:54.485Z
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

- `#objaa9aaf9816694886a5316e0090d65aa5_showtimes > p`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 18

#### Affected Elements:

- `#obj749accf813a24da992d9cfe317c6489d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objdcdebff92acf4e85b1f55f7e56681751_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objb8371d0408694e5281c1f8628467038a_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj5ffc29ece0054607817a9f66def58f6e_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objadefcdd64a2e4e96a9aac26da87f2fe0_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj7725d47f93504ebea539fdaeefc9e1a8_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj70d27896f98b46f8819975e101620ba5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8cd7fc9a022f43d584d71f240268b375_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj7a0828ee1a014c7a87d8692ce542ba31_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj74906cd7adde4dcabee741b924cd207a_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj86355b4f299c442eb274c3e7367db451_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj1db3ebd14deb488fa3ce1e06e85e0eae_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objaa9aaf9816694886a5316e0090d65aa5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obje966d925b6944bbf836035811f36c55b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objd78ab1187042433684b3e8131dbd9816_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objece8aa963e234743a616eaaff91fdfd7_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `.top-list_subtitle`
- `.text-capitalize`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `#obj749accf813a24da992d9cfe317c6489d_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `#objb8371d0408694e5281c1f8628467038a_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `#obje966d925b6944bbf836035811f36c55b_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
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
- **Count:** 146

#### Affected Elements:

- `.header-transparent`
- `#swiper-wrapper-a88a43c10bd583292`
- `.obj02b8b47854764ced92ac9c821baee140 > section > .flex-row.mb-4.font-weight-semi-bold`
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
- `#objbb9663fea6824be3b6b6a1be68becb0e_adform`
- `.py-4.container > section > .flex-row.mb-4.font-weight-semi-bold`
- `#objbad642f172644edcbab237b24cd2a83b_dates`
- `#objbad642f172644edcbab237b24cd2a83b_sortOptions`
- `#objbad642f172644edcbab237b24cd2a83b_screens`
- `#obj18d2e33888ee40aca3d90ef4c211b8b9`
- `#obj749accf813a24da992d9cfe317c6489d_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj749accf813a24da992d9cfe317c6489d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj749accf813a24da992d9cfe317c6489d_showtimes > p`
- `#obj749accf813a24da992d9cfe317c6489d_showtimes > .my-3 > .kinoclub`
- `#obj2f4141405cd54e7ab5198d7593c9c61b`
- `#objc878e51de0e544798c9fe4a09e8bc838`
- `.movie-title.font-weight-semi-bold[href="/f/michael/1964"]`
- `#objdcdebff92acf4e85b1f55f7e56681751_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objdcdebff92acf4e85b1f55f7e56681751_showtimes > p`
- `#obj30a78a0dcd4c4c29a930818794e5e3cf`
- `#obj761e96a4ad974fc3a2a8c9924f31731b`
- `.movie-title.font-weight-semi-bold[href="/f/the-drama/2724"]`
- `#objb8371d0408694e5281c1f8628467038a_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objb8371d0408694e5281c1f8628467038a_showtimes > p`
- `#objb8371d0408694e5281c1f8628467038a_showtimes > .my-3 > .kinoclub`
- `#objf8b22051f0ca4cc08d2c9a63fb31d303`
- `#obj5d82b33115284f8585d250038328a432_adform`
- `#objf30f9d7d20d84672a9cbe24563bdbaf9`
- `.movie-title.font-weight-semi-bold[href="/f/project-hail-mary/2715"]`
- `#obj5ffc29ece0054607817a9f66def58f6e_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj5ffc29ece0054607817a9f66def58f6e_showtimes > p`
- `#obj6523915b1e1444948c915d851a9431c9`
- `#objffcd42e359b645d6af9374b77b2fc485`
- `a[href="/f/hokum/2776"]`
- `#objadefcdd64a2e4e96a9aac26da87f2fe0_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objadefcdd64a2e4e96a9aac26da87f2fe0_showtimes > p`
- `#obj54b5f005fba84ed8a4f986571854e230`
- `#obj34881d21af2c44e684a2a68614ce3085`
- `#obj7725d47f93504ebea539fdaeefc9e1a8_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj7725d47f93504ebea539fdaeefc9e1a8_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj7725d47f93504ebea539fdaeefc9e1a8_showtimes > p`
- `#obje2a7792a1708458a96fc86cc1b5b1cfd`
- `#obj73ca7803fec9471693d53b86cf7293be`
- `a[href="/f/saltstien/2726"]`
- `#obj70d27896f98b46f8819975e101620ba5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj70d27896f98b46f8819975e101620ba5_showtimes > p`
- `#obje5fd9c4c98624109bff62cb580822e6d`
- `#obj006a3a4a1a5b4c0b8d0ed0e383116e21`
- `a[href="/f/kraken/2266"]`
- `#obj8cd7fc9a022f43d584d71f240268b375_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8cd7fc9a022f43d584d71f240268b375_showtimes > p`
- `#obj86c99af2a764408da0e986329a0df113`
- `#objcaab26b4cfea44c8bf39708f0d5acc50`
- `a[href="/f/goat-drom-stort/2367"]`
- `#obj7a0828ee1a014c7a87d8692ce542ba31_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj7a0828ee1a014c7a87d8692ce542ba31_showtimes > p`
- `#obj1b4865189032498b9795c13866c262db`
- `#obj8bcf775ef5a143a684fc6e2f183cbf3d`
- `a[href="/f/whistle/2690"]`
- `#obj74906cd7adde4dcabee741b924cd207a_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj74906cd7adde4dcabee741b924cd207a_showtimes > p`
- `#objad93bf1e307b49f6966e37540798589c`
- `#obj412b16ed9133423abeee0df68d8695b1`
- `a[href="/f/dead-mans-wire/2838"]`
- `#obj48212ba98b214735a9556bdc21a2126a_showtimes > p`
- `#objd0fbd0944bbd4fac8a84951c63c084e1`
- `#obj3ce171a4b89044a79d81ebfef6ab393d`
- `#obj4e4a6972d75c46fcb70d771510c7b949_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj4e4a6972d75c46fcb70d771510c7b949_showtimes > p`
- `#obj559d6befecba4611878a0864459fb00b`
- `#obj2333093e49094ac88d8877f153c6c8f7`
- `a[href="/f/havfolket/2631"]`
- `#obj86355b4f299c442eb274c3e7367db451_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj86355b4f299c442eb274c3e7367db451_showtimes > p`
- `#obj6985f94db0c14512beccfb2d157484d7`
- `#obj8bfb04b2b4504ac7be8acfd9b0de369b`
- `.movie-title.font-weight-semi-bold[href="/f/lee-cronins-the-mummy/2774"]`
- `#obj1db3ebd14deb488fa3ce1e06e85e0eae_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj1db3ebd14deb488fa3ce1e06e85e0eae_showtimes > p`
- `#obj97acfb64cd4048498577dca2054d4402`
- `#objd7c94725fbbb43f897cfe5c76ede0339`
- `a[href="/f/renoir/2775"]`
- `#obj736a517638754bf5bc63d565906e6855_showtimes > p`
- `#obja963b77f3d474bf1ace1c1d170efefb3`
- `#obj21584cf1bf5844a7b17c8cbcf0b85c70`
- `a[href="/f/gaza/2707"]`
- `#obj328238e1ba5c40ee804499437054c219_showtimes > p`
- `#objc8ace65e6245449ab99d13cf4c1b0b98`
- `#obj1d18e0cbcf8c4b2eb78a64497e742438`
- `a[href="/f/krolle-bolle/2368"]`
- `#obj3be9a5f6c882431c807f5da6ca1d0b46_showtimes > p`
- `#objd7a8d65e0e0b46e394ad808a1ddecb02`
- `#objbea8e2188e854c38b14edc9c36fe9f45`
- `a[href="/f/to-anklagere/2844"]`
- `#objaa9aaf9816694886a5316e0090d65aa5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objaa9aaf9816694886a5316e0090d65aa5_showtimes > p`
- `#objb98e21a774b54333993e0caa4e4a2d11`
- `#obj6ddae361f96c49b6ba4681a89cc65f4f`
- `a[href="/f/i-swear/2705"]`
- `#obje966d925b6944bbf836035811f36c55b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obje966d925b6944bbf836035811f36c55b_showtimes > p`
- `#obje966d925b6944bbf836035811f36c55b_showtimes > .my-3 > .kinoclub`
- `#objc70c1ce156674938919f706f206b4dce`
- `#obj88903204e63a4b8094a6c405ab4fd811`
- `#objd78ab1187042433684b3e8131dbd9816_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#objd78ab1187042433684b3e8131dbd9816_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objd78ab1187042433684b3e8131dbd9816_showtimes > p`
- `#obj7bdb0f93d0f74ddcb6b3ab32979fb830`
- `#obj117f4662a3354232b57913d8120c9cb4`
- `a[href="/f/operasjon-bever/2704"]`
- `#objece8aa963e234743a616eaaff91fdfd7_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objece8aa963e234743a616eaaff91fdfd7_showtimes > p`
- `#obj5445e5fe66c14613889e30ff2b98953a`
- `#obj8a4500261f1248ce9eee07db50a2d6f7 > .card2_item__image > img[alt="poster"][loading="lazy"]`
- `#obj2b593e7c61ce4088820718d89d7f39db_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj2b593e7c61ce4088820718d89d7f39db_showtimes > p`
- `#obj2d68d1490a5449928cfd40a18a2e497c`
- `.objd2bebf7559de4e208955c389ce787280 > section > .flex-row.mb-4.font-weight-semi-bold`
- `.top-list_subtitle`
- `#objf053e9b349644f2294c7766756275fa5 > .top-card_wrapper.d-flex`
- `#objd83bc7edc4094399abe74aad78259223 > .top-card_wrapper.d-flex`
- `#objd82c0581262a4397852e15f76ae8a58d > .top-card_wrapper.d-flex`
- `#obja5ae36f50a2a415b81de45362fad9f5e > .top-card_wrapper.d-flex`
- `#obj60f07f98085b401b974cc291f1c01204 > .top-card_wrapper.d-flex`
- `#obj635ab439c4eb4906a490580804574f82 > .top-card_wrapper.d-flex`
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

- `#objbad642f172644edcbab237b24cd2a83b_dates`
- `#objbad642f172644edcbab237b24cd2a83b_sortOptions`
- `#objbad642f172644edcbab237b24cd2a83b_screens`
- `.movie-filter-dropdown`
- `#date_picker`
- `#showtime_dropdown`
