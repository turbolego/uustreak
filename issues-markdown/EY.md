# WCAG Violations Report for EY

**Timestamp:** 2025-10-16T00:40:03.628Z
**URL:** [https://www.ey.com/no_no](https://www.ey.com/no_no)
**Total Violations:** 6

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `.center-align`

### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 5

#### Affected Elements:

- `.nav-level-one[href$="insights"][role="tab"]`
- `.nav-level-one[href$="services"][role="tab"]`
- `.cmp-navigation__item--level-0.cmp-navigation__item:nth-child(3) > .nav-level-one[role="tab"][aria-hidden="false"]`
- `.nav-level-one[href$="careers"][role="tab"]`
- `.level-one-last-link[href$="about-us"][role="tab"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 4

#### Affected Elements:

- `.skipToContent-button`
- `a[data-index="4"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="5"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="6"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.visible.betterQuestionCards-card-wrapper.loaded:nth-child(1) > .betterQuestionCards-card-dragger[data-analytics-action-name="Swipe"][data-analytics-swipe=""] > .betterQuestionCards-card.article[aria-hidden="false"] > .betterQuestionCards-description > h5`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `.up-promotional-banner__content-description[data-analytics-text-click=""] > p:nth-child(2) > a`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 98

#### Affected Elements:

- `.skip-content-wrapper`
- `.cmp-logo__link > .sr-only`
- `.myey-login-url`
- `.featured_av-caption-wrapper`
- `img[title="Stortinget i Oslo, Karl Johan"]`
- `.betterQuestionCards-header`
- `.visible.betterQuestionCards-card-wrapper.loaded:nth-child(1) > .betterQuestionCards-card-dragger[data-analytics-action-name="Swipe"][data-analytics-swipe=""] > .betterQuestionCards-card.article[aria-hidden="false"]`
- `.visible.betterQuestionCards-card-wrapper.loaded:nth-child(2) > .betterQuestionCards-card-dragger[data-analytics-action-name="Swipe"][data-analytics-swipe=""] > .betterQuestionCards-card.article[aria-hidden="false"]`
- `.visible.betterQuestionCards-card-wrapper.loaded:nth-child(3) > .betterQuestionCards-card-dragger[data-analytics-action-name="Swipe"][data-analytics-swipe=""] > .betterQuestionCards-card.article[aria-hidden="false"]`
- `.betterQuestionCards-card-wrapper.loaded:nth-child(4) > .betterQuestionCards-card-dragger[data-analytics-action-name="Swipe"][data-analytics-swipe=""] > .betterQuestionCards-card.article[aria-hidden="false"]`
- `#promotional-773723eddc97 > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
- `#promotional-773723eddc97 > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
- `#button-d1ff5b82636e`
- `#promotional-39d407479b23 > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
- `#promotional-39d407479b23 > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
- `#button-aac543142676`
- `#image-render-d226705429 > .cmp-image__image[loading="lazy"][itemprop="contentUrl"]`
- `#promotional-380cc83d1759 > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
- `#promotional-380cc83d1759 > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
- `#button-48bc1e29e272`
- `#promotional-380cc83d1759 > .up-promotional-banner__media`
- `#promotional-bf10c6725c35 > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
- `#promotional-bf10c6725c35 > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
- `#button-71731207d860`
- `#promotional-bf10c6725c35 > .up-promotional-banner__media`
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
- `img[title="Ina Rosenberg"]`
- `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content > .cmp-teaser__title`
- `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content > .cmp-teaser__description > p`
- `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .mrxs.date__text`
- `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .Vsepartor:nth-child(3)`
- `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .date__text:nth-child(4)`
- `.Vsepartor:nth-child(5)`
- `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .date__text[href$="andreas-jacobsen"]`
- `#image-render-c6bd268a33 > .cmp-image__image[loading="lazy"][itemprop="contentUrl"]`
- `.cmp-teaser.cmp-separator:nth-child(2) > div > .cmp-teaser__content > .cmp-teaser__title`
- `.cmp-teaser.cmp-separator:nth-child(2) > div > .cmp-teaser__content > .cmp-teaser__description > p`
- `.cmp-teaser.cmp-separator:nth-child(2) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .mrxs.date__text`
- `.cmp-teaser.cmp-separator:nth-child(2) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .Vsepartor`
- `.cmp-teaser.cmp-separator:nth-child(2) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .date__text[href$="andreas-jacobsen"]`
- `.sec-title`
- `.cmp-teaser__content:nth-child(1) > .small-cell-description > .cmp-teaser__title`
- `.cmp-teaser__content:nth-child(1) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .date-txt.mrxs`
- `.cmp-teaser__content:nth-child(1) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .Vsepartor`
- `.cmp-teaser__content:nth-child(1) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .date__text[href$="andreas-jacobsen"]`
- `.cmp-teaser__content:nth-child(2) > .small-cell-description > .cmp-teaser__title`
- `.cmp-teaser__content:nth-child(2) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .date-txt.mrxs`
- `.cmp-teaser__content:nth-child(2) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .Vsepartor`
- `.cmp-teaser__content:nth-child(2) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .date__text[href$="andreas-jacobsen"]`
- `.cmp-teaser__content:nth-child(3) > .small-cell-description > .cmp-teaser__title`
- `.cmp-teaser__content:nth-child(3) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .date-txt.mrxs`
- `#button-7addb05aebee`
- `.cmp-slider__title`
- `.cmp-slider__skip`
- `a[data-index="0"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="0"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `a[data-index="0"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `.active > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `.active > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `.active > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `a[data-index="2"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="2"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `a[data-index="2"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `a[data-index="3"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="3"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `a[data-index="3"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
- `a[data-index="4"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
- `a[data-index="4"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
- `a[data-index="4"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
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
- `#footer-ey-content > .container.responsivegrid:nth-child(5)`
