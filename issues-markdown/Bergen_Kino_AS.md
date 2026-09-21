# WCAG Violations Report for Bergen Kino AS

**Timestamp:** 2026-09-21T19:20:43.339Z
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
- `#objc5e68b2268c345f287d9c0a7725011c3_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objc69889f1e9f94f8aaf9e356554b4d619_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objed179600ba014b18a3eb88bc8b8eef75_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj80a09f56ed204ce9b0e1ee41e770ef4b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obja8911edffe6945eca0b52d11592ac78d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj2513ace89be94da5a75875e3213dd5d0_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj64df8548ab3e4921b93a41a44de0b57b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj2c2e1063388a4eefbdaa2fc6681aad2f_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj604ee0721a444005b0a9da20808fe241_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objd3477cf0cbaa4166b24c1d1a3aa3e675_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj200fddc18a7c4b3bad80dc3178ccc06f_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8590f715f0d648d98b9504c2d7776b53_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objfba8dfe5a2b941e3b5368624c6f3a3ee_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj79b8fb8e960e4b27929102f45d459294_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objfc638fd755984c1cbcd217521d55827c_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objf1d373fd4e194e0397179c513a988d87_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj4949a2205e374981a578c5e5ce89a4e5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objd79e4b2ca7534cb884fc44ddc49aa653_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objdc6f62994afa4960b11a71ecefaa6380_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obje31009943f9a4f339b5df9ca97620380_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj1747a15df8914e52a126efa4138a3fa7_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj4e355711fdb542d98755b5848b7605ad_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `.top-list_subtitle`
- `.text-capitalize`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `#objc5e68b2268c345f287d9c0a7725011c3_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `#obj2513ace89be94da5a75875e3213dd5d0_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
- `#objf1d373fd4e194e0397179c513a988d87_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
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
- `#swiper-wrapper-7107d22802d9ca499`
- `.obj5d43ca10101743bd90e8bf3816091e18 > section > .flex-row.mb-4.font-weight-semi-bold`
- `a[href="/f/butterfly/2784"] > .card_item__title.font-weight-bold.mt-3`
- `a[href="/f/butterfly/2784"] > .card_item__subtitle.mt-1`
- `div:nth-child(2) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `div:nth-child(2) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
- `div:nth-child(3) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `div:nth-child(3) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
- `a[href$="barnas-superkino"] > .card_item__title.font-weight-bold.mt-3`
- `a[href$="barnas-superkino"] > .card_item__subtitle.mt-1`
- `a[href="/f/verity/2951"] > .card_item__title.font-weight-bold.mt-3`
- `a[href="/f/verity/2951"] > .card_item__subtitle.mt-1`
- `div:nth-child(6) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
- `div:nth-child(6) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
- `#objb08e321bfba349ceb0583c35dd6dc237_adform`
- `.py-4.container > section > .flex-row.mb-4.font-weight-semi-bold`
- `#obj7b62744645634f3da08adb84cd9960fc_dates`
- `#obj7b62744645634f3da08adb84cd9960fc_sortOptions`
- `#obj7b62744645634f3da08adb84cd9960fc_screens`
- `#obje01d39d59cb244b0b8ece3245751f19d`
- `.movie-title.font-weight-semi-bold[href="/f/en-nasjon-i-sjakk/1972"]`
- `#objc5e68b2268c345f287d9c0a7725011c3_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objc5e68b2268c345f287d9c0a7725011c3_showtimes > p`
- `#objc5e68b2268c345f287d9c0a7725011c3_showtimes > .my-3 > .kinoclub`
- `#objdb374865bb4e45e594e19eb28773a760`
- `#obj85d6cf0aa0ab435288cb5a985ddf9b7a`
- `.movie-title.font-weight-semi-bold[href="/f/kjarast/2787"]`
- `#objc69889f1e9f94f8aaf9e356554b4d619_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objc69889f1e9f94f8aaf9e356554b4d619_showtimes > p`
- `#objec3dcb44f19a4fb6911cff9291cc1363`
- `#obj0b0aac65cf2248d989af5e74b3fb3251`
- `#objed179600ba014b18a3eb88bc8b8eef75_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#objed179600ba014b18a3eb88bc8b8eef75_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objed179600ba014b18a3eb88bc8b8eef75_showtimes > p`
- `#obj7974019c5d684457a59c6a1c2e491130`
- `#obj3b5edb5b35ab44e9bd7b686a8e657c79_adform`
- `#obj3648806d4c1545449febcdca10724bef`
- `.movie-title.font-weight-semi-bold[href="/f/resident-evil/2881"]`
- `#obj80a09f56ed204ce9b0e1ee41e770ef4b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj80a09f56ed204ce9b0e1ee41e770ef4b_showtimes > p`
- `#obj1bd500414ffa4e1ba5ca9446b078b9f9`
- `#obj94f5095d365c4f6ab5c5a010469a3dcf`
- `a[href="/f/lave-forventninger/2862"]`
- `#obja8911edffe6945eca0b52d11592ac78d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obja8911edffe6945eca0b52d11592ac78d_showtimes > p`
- `#obj229f7c898ecc4235b9db52b82dfde622`
- `#obj27ead976ca5d422fa3fbdf780978f553`
- `a[href="/f/fjord/2876"]`
- `#obj2513ace89be94da5a75875e3213dd5d0_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj2513ace89be94da5a75875e3213dd5d0_showtimes > p`
- `#obj2513ace89be94da5a75875e3213dd5d0_showtimes > .my-3 > .kinoclub`
- `#obj2936ec94e4ab401490a36347907f2e03`
- `#objd4cd35cea95d461994cc5c0e3b2fd722`
- `.movie-title.font-weight-semi-bold[href="/f/spa-weekend/2879"]`
- `#obj64df8548ab3e4921b93a41a44de0b57b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj64df8548ab3e4921b93a41a44de0b57b_showtimes > p`
- `#obj6f20aef4a04b4ddc991d095be536c715`
- `#obj52aae1e4a9ef49f894dff703f8c67110`
- `a[href="/f/the-odyssey/2654"]`
- `#obj2c2e1063388a4eefbdaa2fc6681aad2f_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj2c2e1063388a4eefbdaa2fc6681aad2f_showtimes > p`
- `#obja97d5bd57a43430db1c55bd736f8f9df`
- `#obj3e0149f2c7b543e3812eef044858c4c9`
- `#obj604ee0721a444005b0a9da20808fe241_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj604ee0721a444005b0a9da20808fe241_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj604ee0721a444005b0a9da20808fe241_showtimes > p`
- `#obj3eae161df1fd4253bac745d97767f4b3`
- `#objb6577cd3cafa4fc3b79c9f88473389ba`
- `a[href="/f/harila-nadelose-fjell/2877"]`
- `#objd3477cf0cbaa4166b24c1d1a3aa3e675_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objd3477cf0cbaa4166b24c1d1a3aa3e675_showtimes > p`
- `#obj9052bd642bbd4657895a90113acd0d5a`
- `#obj7a85adcb08634c44bdff1720a36f366a`
- `.movie-title.font-weight-semi-bold[href="/f/tilbake-til-tottori/2861"]`
- `#obj200fddc18a7c4b3bad80dc3178ccc06f_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj200fddc18a7c4b3bad80dc3178ccc06f_showtimes > p`
- `#obj0adfcca245c74b69b3e03370b9552321`
- `#objc6bf6dcaffbc47d0b42b470465b2ac73`
- `#obj8590f715f0d648d98b9504c2d7776b53_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#obj8590f715f0d648d98b9504c2d7776b53_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj8590f715f0d648d98b9504c2d7776b53_showtimes > p`
- `#obje891d447276a4cd392ef50a0ed7be192`
- `#obj08f72f7e36bd4809be127f12f0920365`
- `.movie-title.font-weight-semi-bold[href="/f/the-uprising/2908"]`
- `#objfba8dfe5a2b941e3b5368624c6f3a3ee_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objfba8dfe5a2b941e3b5368624c6f3a3ee_showtimes > p`
- `#obj83348fdf6d6d4d5c878d38c66e2d718f`
- `#objf78f7640891b408580a1e9f78c7b1f06`
- `a[href="/f/minions-and-monstre/2656"]`
- `#obj79b8fb8e960e4b27929102f45d459294_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj79b8fb8e960e4b27929102f45d459294_showtimes > p`
- `#obj8331ffea7100475a90fa5f1cd804593e`
- `#objd1e60d3542cd43fc8aae33fb6ca9daa1`
- `a[href="/f/paw-patrol-dinofilmen/2782"]`
- `#objfc638fd755984c1cbcd217521d55827c_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objfc638fd755984c1cbcd217521d55827c_showtimes > p`
- `#obj247cfd1e18d84ca7ba1fb4559b65c77f`
- `#objfddb058bbb194d5086103bc8456ed898`
- `a[href="/f/the-invite/2869"]`
- `#objf1d373fd4e194e0397179c513a988d87_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objf1d373fd4e194e0397179c513a988d87_showtimes > p`
- `#objf1d373fd4e194e0397179c513a988d87_showtimes > .my-3 > .kinoclub`
- `#obj00b73601831545f9b2b72a9a69c874aa`
- `#objc0a65be88f4548798388dce384c9d71a`
- `a[href="/f/obsession/2662"]`
- `#obj4949a2205e374981a578c5e5ce89a4e5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj4949a2205e374981a578c5e5ce89a4e5_showtimes > p`
- `#obje60c4642e9e74aa7a0d76675778432f9`
- `#obj08fcd9f8a2a04b1f96ef7b0d836d17d9`
- `#objd79e4b2ca7534cb884fc44ddc49aa653_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#objd79e4b2ca7534cb884fc44ddc49aa653_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objd79e4b2ca7534cb884fc44ddc49aa653_showtimes > p`
- `#obj1221f5984572426c9610696d22c3f8bc`
- `#obj6ee2410e43994c018b8c1cb1e54eed6a`
- `#objdc6f62994afa4960b11a71ecefaa6380_showtimes > .movie-title.font-weight-semi-bold.h5`
- `#objdc6f62994afa4960b11a71ecefaa6380_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#objdc6f62994afa4960b11a71ecefaa6380_showtimes > p`
- `#obj8cec727fee9b447bbd271f306f57bb86`
- `#obj9d3648267df54ec38430fe7914786eb1`
- `a[href="/f/kvinne-ukjent/2965"]`
- `#objb5fdcac4956140beba4ac7d0632836a8_showtimes > p`
- `#obj7f34f763170d4d9b9ae152f201c72b4f`
- `#objf35aba31262f4b6a97dc4ad053ffcc2e`
- `a[href="/f/toy-story-5/2659"]`
- `#obje31009943f9a4f339b5df9ca97620380_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obje31009943f9a4f339b5df9ca97620380_showtimes > p`
- `#obj70276111613b4f3293d9976b79e5665c`
- `#objf9c3d1f78507422d98dd31d33d98e9a7`
- `a[href="/f/vaiana/2655"]`
- `#obj1747a15df8914e52a126efa4138a3fa7_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj1747a15df8914e52a126efa4138a3fa7_showtimes > p`
- `#objf640bfd451f14ff9b342606c6f17a0bc`
- `#obj575724c80df34a77a57f9f89357c2092`
- `a[href="/f/miss-moxy/2651"]`
- `#obj2bf5373607a3406cbc4374d6e20cff96_showtimes > p`
- `#objc7a3bc748f694cfaa51de92bfbbd6e78`
- `#obj70d05b97cb184c78bc57728cccc236cb`
- `a[href="/f/pressure/2894"]`
- `#obj4e355711fdb542d98755b5848b7605ad_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
- `#obj4e355711fdb542d98755b5848b7605ad_showtimes > p`
- `#obje71421fc7c804e55a5a36133cc7bbe0d`
- `.obj34e4f63b91dc40f49a6c5d821d0b7eeb > section > .flex-row.mb-4.font-weight-semi-bold`
- `.top-list_subtitle`
- `#obj4081981ba9c444b68aff5df11b8d05a9 > .top-card_wrapper.d-flex`
- `#obj37818d3e8359451ea58cd98d91a02996 > .top-card_wrapper.d-flex`
- `#obj55926f5fde9c4e4ba4f659f23fd7fb2f > .top-card_wrapper.d-flex`
- `#obj2c358e02095244a49da4e6564b85d7ae > .top-card_wrapper.d-flex`
- `#obj231497a45aa94d70b56ae0de66725772 > .top-card_wrapper.d-flex`
- `#obj38adf72303c242f2856f0febd1d63ab1 > .top-card_wrapper.d-flex`
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

- `#obj7b62744645634f3da08adb84cd9960fc_dates`
- `#obj7b62744645634f3da08adb84cd9960fc_sortOptions`
- `#obj7b62744645634f3da08adb84cd9960fc_screens`
- `.movie-filter-dropdown`
- `#date_picker`
- `#showtime_dropdown`
