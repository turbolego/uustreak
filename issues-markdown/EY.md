# WCAG Violations Report for EY

**Timestamp:** 2026-07-06T03:28:29.203Z
**URL:** [https://www.ey.com/no_no](https://www.ey.com/no_no)
**Total Violations:** 6

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `#navigation-c15306303c > .cmp-navigation__group[role="tablist"]`

### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 5

#### Affected Elements:

- `.cmp-navigation__item--level-0.cmp-navigation__item:nth-child(1) > a[href$="insights"]`
- `a[href$="services"][role="tab"][aria-hidden="false"]`
- `.cmp-navigation__item--level-0.cmp-navigation__item:nth-child(3) > .nav-level-one[role="tab"][aria-hidden="false"]`
- `.cmp-navigation__item--level-0.cmp-navigation__item:nth-child(4) > a[href$="careers"]`
- `a[href$="about-us"][role="tab"][aria-hidden="false"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `.skipToContent-button`
- `.cmp-slider__slide[data-index="4"][href$="tax"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="5"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="6"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.cmp-teaser.cmp-separator:nth-child(2) > div > .cmp-teaser__image > a[data-analytics-link-click=""]`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 5

#### Affected Elements:

- `.cmp-navigation__item--level-0.cmp-navigation__item:nth-child(1)`
- `.cmp-navigation__item--level-0.cmp-navigation__item:nth-child(2)`
- `.cmp-navigation__item--level-0.cmp-navigation__item:nth-child(3)`
- `.cmp-navigation__item--level-0.cmp-navigation__item:nth-child(4)`
- `.cmp-navigation__item--level-0.cmp-navigation__item:nth-child(5)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 75

#### Affected Elements:

- `.skip-content-wrapper`
- `.cmp-logo__link > .sr-only`
- `.myey-login-url`
- `img[title="Stortinget i Oslo, Karl Johan"]`
- `.swiper-slide-visible > .up-hero-carousel__content-wrapper`
- `.up-hero-carousel__pagination`
- `.theme-dark.cmp-container--theme-dark.cmp-container--background-color-e2e`
- `#promotional-1f7be6744d5a > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
- `#promotional-1f7be6744d5a > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
- `#button-d2a7d3b468ea`
- `#promotional-1f7be6744d5a > .up-promotional-banner__media`
- `#promotional-375939547c80 > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
- `#promotional-375939547c80 > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
- `#button-ab618830f8b6`
- `#image-render-58f30bbef7 > .cmp-image__image[loading="lazy"][itemprop="contentUrl"]`
- `#promotional-39d407479b23 > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
- `#promotional-39d407479b23 > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
- `#button-aac543142676`
- `#image-render-d226705429 > .cmp-image__image[loading="lazy"][itemprop="contentUrl"]`
- `#promotional-283aef72eff8 > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
- `#promotional-283aef72eff8 > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
- `#button-1296c62e5384`
- `#promotional-283aef72eff8 > .up-promotional-banner__media`
- `p[aria-level="1"]`
- `#promotional-6c2d968ac69e > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
- `#button-a13f706f271e`
- `.cmp-subscribe__text`
- `#button-bc60d627c8a2`
- `.cmp-contentGrid__title`
- `#image-render-d39d7592b2 > .cmp-image__image[loading="lazy"][itemprop="contentUrl"]`
- `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content`
- `.cmp-teaser.cmp-separator:nth-child(2)`
- `.cmp-news-List`
- `#button-7addb05aebee`
- `.cmp-slider__title`
- `.cmp-slider__skip`
- `a[data-index="0"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="0"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `a[data-index="0"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `.active > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `.active > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `.active > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `.cmp-slider__slide[data-index="2"][href$="assurance"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `.cmp-slider__slide[data-index="2"][href$="assurance"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `.cmp-slider__slide[data-index="2"][href$="assurance"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `.cmp-slider__slide[data-index="3"][href$="consulting"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `.cmp-slider__slide[data-index="3"][href$="consulting"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `.cmp-slider__slide[data-index="3"][href$="consulting"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `.cmp-slider__slide[data-index="4"][href$="tax"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `.cmp-slider__slide[data-index="4"][href$="tax"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `.cmp-slider__slide[data-index="4"][href$="tax"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `a[data-index="5"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="5"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `a[data-index="5"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `a[data-index="6"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="6"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `a[data-index="6"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `.cmp-index-search-banner__title`
- `#button-88115edb1365 > .cmp-button__text[data-analytics-action-value=""]`
- `.cmp-index-search-banner__topicTitle`
- `#button-bc526dc0dd5a`
- `#button-3941d7f2ff12`
- `#button-38ef4d6ce029`
- `#button-68a7641d8957`
- `#button-346c200e67cd`
- `#button-39172ed077c7`
- `#button-fef302e139f7`
- `#button-8e1d3e5b1a96`
- `#footer-ey-content > .container.responsivegrid:nth-child(2)`
- `#rich-text-7c0527a0e133 > .up-rich-text__container[data-up-hook-rich-text="richTextContainer"]`
- `a[data-service-title="Facebook"] > .up-social-media-links__cta-text`
- `a[data-service-title="LinkedIn"] > .up-social-media-links__cta-text`
- `a[data-service-title="Instagram"] > .up-social-media-links__cta-text`
- `a[data-service-title="Youtube"] > .up-social-media-links__cta-text`
- `#footer-ey-content > .container.responsivegrid:nth-child(5)`
