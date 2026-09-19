# WCAG Violations Report for Bergen Kino AS

**Timestamp:** 2026-09-19T19:47:16.442Z
**URL:** [https://www.bergenkino.no/](https://www.bergenkino.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 25

#### Affected Elements:

- `.text-dark-primary`
- `#obj9b2f30e315de410aaa547f484b147409_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj55aad27684d242139015fc57f3e9cda8_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj088f3a7d62634a669a157a715416e269_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objb78c6e08887740568cf3aaf1fb2c416b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj570467fef7d647d1a519a0ce7ec606ec_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj6f9afebaf1b64b709c98c787a0a5b89b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj168590d81a7d45e1b2b87f92de047131_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objc14db9a6013342dea1acf6ec1f7b25ae_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj9fd8250f2ecf480c9ccc4ad56b7da67d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj14822f4e59d14486a495c01dc06d3977_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objc5fbbe68cd3a4a63851ce448b1bcacf5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj0d1cc4cd7b194820bde791bc39bce170_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj79eb0694e330469d94c343579f050f59_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj63e2f2afe3674e858a49b5faaa166155_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj05562f986db141588f996f8580aeacd3_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj933aeb74caed44178d069d197a832062_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objeef9136fc85e4f359a0c854095a82797_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8005df01a3254153b2eec4683622054b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj4e55b823064f43b19a793d67663e0201_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj7e957e2585e54a44a044f8c3947c66fa_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj39d7032e975a476ea871ab992a2bc7d2_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objba4af6b3c65a44efa639e1a6b64f21f1_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `.top-list_subtitle`
- `.text-capitalize`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `#obj9b2f30e315de410aaa547f484b147409_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `#obj14822f4e59d14486a495c01dc06d3977_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `#obj8005df01a3254153b2eec4683622054b_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `div:nth-child(1) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"] > .footer__download_img`
- `div:nth-child(2) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"] > .footer__download_img`
- `#\#ticket_icon_id`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 19

#### Affected Elements:

- `div[aria-label="1 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/spa-weekend/2879"]`
- `div[aria-label="2 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/tilbake-til-tottori/2861"]`
- `div[aria-label="3 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/the-uprising/2908"]`
- `div[aria-label="4 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/en-nasjon-i-sjakk/1972"]`
- `div[aria-label="5 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
- `div[aria-label="6 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/kjarast/2787"]`
- `.swiper-slide-prev > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/resident-evil/2881"]`
- `.swiper-slide-active > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/spa-weekend/2879"]`
- `.swiper-slide-next > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/tilbake-til-tottori/2861"]`
- `div[aria-label="10 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/the-uprising/2908"]`
- `div[aria-label="11 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/en-nasjon-i-sjakk/1972"]`
- `div[aria-label="12 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
- `div[aria-label="13 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/kjarast/2787"]`
- `.swiper-slide-duplicate-prev > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/resident-evil/2881"]`
- `div[aria-label="15 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/spa-weekend/2879"]`
- `div[aria-label="16 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/tilbake-til-tottori/2861"]`
- `div[aria-label="17 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/the-uprising/2908"]`
- `div:nth-child(1) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"]`
- `div:nth-child(2) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"]`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 2

#### Affected Elements:

- `meta[name="viewport"]:nth-child(7)`
- `meta[name="viewport"]:nth-child(35)`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 162

#### Affected Elements:

- `.cookies-prompt__main-block`
- `.cookies-prompt__actions-wrap`
- `.header-transparent`
- `#swiper-wrapper-6ba3d2024755fcfe`
- `.objf479b053b0474249920be0284e822f53 > section > .flex-row.mb-4.font-weight-semi-bold`
- `div:nth-child(1) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `div:nth-child(1) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
- `.card_item__link[href="/f/en-nasjon-i-sjakk/1972"][data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `.card_item__link[href="/f/en-nasjon-i-sjakk/1972"][data-target-partial="true"] > .card_item__subtitle.mt-1`
- `.card_item__link[href="/f/tilbake-til-tottori/2861"][data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `.card_item__link[href="/f/tilbake-til-tottori/2861"][data-target-partial="true"] > .card_item__subtitle.mt-1`
- `a[href="/f/butterfly/2784"] > .card_item__title.font-weight-bold.mt-3`
- `a[href="/f/butterfly/2784"] > .card_item__subtitle.mt-1`
- `div:nth-child(5) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `div:nth-child(5) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
- `a[href="/f/dune-part-three/2934"] > .card_item__title.font-weight-bold.mt-3`
- `a[href="/f/dune-part-three/2934"] > .card_item__subtitle.mt-1`
- `#obj6e06795a7cb245fa84b7d880673e777d_adform`
- `.py-4.container > section > .flex-row.mb-4.font-weight-semi-bold`
- `#objd069fdfafe26468c99d126306be12e5a_dates`
- `#objd069fdfafe26468c99d126306be12e5a_sortOptions`
- `#objd069fdfafe26468c99d126306be12e5a_screens`
- `#obj2e7d305d5e25491192919ce33f8ae379`
- `.movie-title.font-weight-semi-bold[href="/f/en-nasjon-i-sjakk/1972"]`
- `#obj9b2f30e315de410aaa547f484b147409_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj9b2f30e315de410aaa547f484b147409_showtimes > p`
- `#obj9b2f30e315de410aaa547f484b147409_showtimes > .my-3 > .kinoclub`
- `#obj1250d3bcd4b940368b923477afceec8f`
- `#obj9d3d699048c54eac811b4e8e2398823a`
- `#obj55aad27684d242139015fc57f3e9cda8_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj55aad27684d242139015fc57f3e9cda8_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj55aad27684d242139015fc57f3e9cda8_showtimes > p`
- `#obj6dc89b148ddb4ed384a4174aa387b2f5`
- `#objf47d8fa1c5e241299b8744b74b318e7b`
- `.movie-title.font-weight-semi-bold[href="/f/resident-evil/2881"]`
- `#obj088f3a7d62634a669a157a715416e269_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj088f3a7d62634a669a157a715416e269_showtimes > p`
- `#objfe819cc546e74c3cbb7644ebea8de4ce`
- `#obj9a488fba5e5a40e6a77ee01e700ae28c_adform`
- `#obja2058932f2db45d1927f8276a97d4280`
- `.movie-title.font-weight-semi-bold[href="/f/kjarast/2787"]`
- `#objb78c6e08887740568cf3aaf1fb2c416b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objb78c6e08887740568cf3aaf1fb2c416b_showtimes > p`
- `#obj2c222be84d4f4df5812dc5105e6f538c`
- `#obj7b810e50bf2b4ecabfb52df736dcffa0`
- `.movie-title.font-weight-semi-bold[href="/f/spa-weekend/2879"]`
- `#obj570467fef7d647d1a519a0ce7ec606ec_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj570467fef7d647d1a519a0ce7ec606ec_showtimes > p`
- `#obj1aa46aa76e5e48f69f8a676482069caf`
- `#obj63fe2515e8454948854538b31b907101`
- `a[href="/f/lave-forventninger/2862"]`
- `#obj6f9afebaf1b64b709c98c787a0a5b89b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj6f9afebaf1b64b709c98c787a0a5b89b_showtimes > p`
- `#obj8701c793bafd4f1f98743387892f858b`
- `#obj3348fdb38c424791919be67f99291518`
- `#obj168590d81a7d45e1b2b87f92de047131_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj168590d81a7d45e1b2b87f92de047131_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj168590d81a7d45e1b2b87f92de047131_showtimes > p`
- `#obj5292bc0128d644ca94a2ff28b49ecb31`
- `#obj98b3d2c531674ab497dab528cf53d3ad`
- `#objc14db9a6013342dea1acf6ec1f7b25ae_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#objc14db9a6013342dea1acf6ec1f7b25ae_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objc14db9a6013342dea1acf6ec1f7b25ae_showtimes > p`
- `#objd2243479a0f649319850ee3a388590eb`
- `#obj22e36b759b4e4dc2b4123ff567702084`
- `a[href="/f/harila-nadelose-fjell/2877"]`
- `#obj9fd8250f2ecf480c9ccc4ad56b7da67d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj9fd8250f2ecf480c9ccc4ad56b7da67d_showtimes > p`
- `#objac2e68724a5c452ba67acc634b23c3d3`
- `#objf9cff1014d914f9d908734b53e7f5339`
- `a[href="/f/fjord/2876"]`
- `#obj14822f4e59d14486a495c01dc06d3977_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj14822f4e59d14486a495c01dc06d3977_showtimes > p`
- `#obj14822f4e59d14486a495c01dc06d3977_showtimes > .my-3 > .kinoclub`
- `#objdb792398a99547508b3c060a484b5c50`
- `#obj162dd2272daf468a95d54c092aa84533`
- `a[href="/f/the-odyssey/2654"]`
- `#objc5fbbe68cd3a4a63851ce448b1bcacf5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objc5fbbe68cd3a4a63851ce448b1bcacf5_showtimes > p`
- `#obj8d8b03c888674dd2874c451398670ef6`
- `#obj031b3a6ab4eb47df8b88298298c0e5d5`
- `a[href="/f/minions-and-monstre/2656"]`
- `#obj0d1cc4cd7b194820bde791bc39bce170_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj0d1cc4cd7b194820bde791bc39bce170_showtimes > p`
- `#obj03e8c4a45bc3433f9e49349b9a2936b8`
- `#obj7a506fb6cbb94b05aac5ae1ad376e6ca`
- `.movie-title.font-weight-semi-bold[href="/f/tilbake-til-tottori/2861"]`
- `#obj79eb0694e330469d94c343579f050f59_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj79eb0694e330469d94c343579f050f59_showtimes > p`
- `#objea3cddb8144d4cca9b79f1dc61f56fd1`
- `#obj4f4a877750ec4ea2ba37dac983a3b7b1`
- `.movie-title.font-weight-semi-bold[href="/f/the-uprising/2908"]`
- `#obj63e2f2afe3674e858a49b5faaa166155_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj63e2f2afe3674e858a49b5faaa166155_showtimes > p`
- `#obj743253cb484348fd9db6abe14bb2a545`
- `#objbc2dbd546ec44cd996a8a7510bb6c227`
- `a[href="/f/paw-patrol-dinofilmen/2782"]`
- `#obj05562f986db141588f996f8580aeacd3_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj05562f986db141588f996f8580aeacd3_showtimes > p`
- `#obje18e1072966245309dceb6073f459af0`
- `#obj648e5ea8b4124ce796fa313560063aae`
- `a[href="/f/kvinne-ukjent/2965"]`
- `#objc5172968de2a4a10b297d207d3d9da4c_showtimes > p`
- `#obj58eb1b5c3c8f4604954c449d2aa198bc`
- `#objb9248d8443f347149f7d3f54bf84bfcc`
- `#obj933aeb74caed44178d069d197a832062_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj933aeb74caed44178d069d197a832062_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj933aeb74caed44178d069d197a832062_showtimes > p`
- `#obja8173ae84d55466b89f24daaf55ad847`
- `#obj37f8dc82a74248638bf7d05ca3183cc0`
- `a[href="/f/obsession/2662"]`
- `#objeef9136fc85e4f359a0c854095a82797_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objeef9136fc85e4f359a0c854095a82797_showtimes > p`
- `#obj8a76b04c81c2472f882d7a1e5f22cd6b`
- `#obj9f81604f619143dd968d11532d073484`
- `a[href="/f/the-invite/2869"]`
- `#obj8005df01a3254153b2eec4683622054b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8005df01a3254153b2eec4683622054b_showtimes > p`
- `#obj8005df01a3254153b2eec4683622054b_showtimes > .my-3 > .kinoclub`
- `#obj7a4550ef8cec4f6f90da02f01cf77342`
- `#obj3bb3f643cd794e7f866b59b760f490ff`
- `#obj4e55b823064f43b19a793d67663e0201_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj4e55b823064f43b19a793d67663e0201_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj4e55b823064f43b19a793d67663e0201_showtimes > p`
- `#objb3580338d9d240b591fd90e1ac3ff043`
- `#obj50c7ff7b884e477c9b441febdfd45c7c`
- `a[href="/f/miss-moxy/2651"]`
- `#obj73141a3994c64fe19107ce9e689369e6_showtimes > p`
- `#objcecd63474821487a956219ccab31b99c`
- `#obj86bb8c31ddba4f6cba4840e3963909b3`
- `a[href="/f/toy-story-5/2659"]`
- `#obj7e957e2585e54a44a044f8c3947c66fa_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj7e957e2585e54a44a044f8c3947c66fa_showtimes > p`
- `#objb686f87bc6ae4eba89d5161787943d4f`
- `#objff44f9df43ab4072851ab4112c271f56`
- `a[href="/f/pressure/2894"]`
- `#obj39d7032e975a476ea871ab992a2bc7d2_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj39d7032e975a476ea871ab992a2bc7d2_showtimes > p`
- `#objc44d493287e64bfeb738dcdcdd734368`
- `#obj71c54348089f4b9182081d5a245ebf07`
- `a[href="/f/vaiana/2655"]`
- `#objba4af6b3c65a44efa639e1a6b64f21f1_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objba4af6b3c65a44efa639e1a6b64f21f1_showtimes > p`
- `#obj25920ac6ef8f4e058704bdf046d47272`
- `.obj10f9e9b28f1047e58241b47893352bb3 > section > .flex-row.mb-4.font-weight-semi-bold`
- `.top-list_subtitle`
- `#objaa1b1eea158f4ae1a9249e3c84faa799 > .top-card_wrapper.d-flex`
- `#objc1501b866b0d4ce5ad639987e9ad894e > .top-card_wrapper.d-flex`
- `#obj4b214b778d8d455580ff97bdf5997e23 > .top-card_wrapper.d-flex`
- `#objf754823aa68344878bc2da7dd405e893 > .top-card_wrapper.d-flex`
- `#obj19992c08c6194344b780850a867772cb > .top-card_wrapper.d-flex`
- `#obj4f386b901d8f408990557805c9fd3a30 > .top-card_wrapper.d-flex`
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 6

#### Affected Elements:

- `#objd069fdfafe26468c99d126306be12e5a_dates`
- `#objd069fdfafe26468c99d126306be12e5a_sortOptions`
- `#objd069fdfafe26468c99d126306be12e5a_screens`
- `.movie-filter-dropdown`
- `#date_picker`
- `#showtime_dropdown`
