# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-08-14T06:28:25.340Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 8

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#zephr-footer-close`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 39

#### Affected Elements:

- `.investor-bar__item-difference-increased`
- `a[data-id="2-1-2028103"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2029114"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2029101"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2029110"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2028993"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2029069"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-image-left > article > .meta > span`
- `a[data-id="2-1-2023431"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2029071"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2028391"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2027604"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2028599"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2014580"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2014580"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2027115"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2025158"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-6luKO8mq"] > article > .meta > span`
- `a[data-id="6-1-aqt0s6um"] > article > .meta > span`
- `a[data-id="2-1-2028860"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2029001"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-rlRVTtBb"] > article > .meta > span`
- `a[data-id="2-1-2027365"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-2028544"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2028810"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2025828"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2028295"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2000871"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2000871"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2002267"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2002267"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-RuI3U9l8"] > article > .meta > span`
- `a[data-id="6-1-rzvhUBxx"] > article > .meta > span`

### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer-copyright`

### Document should not have more than one contentinfo landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one contentinfo landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-no-duplicate-contentinfo?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.button[data-v-a56f3944=""]:nth-child(3) > a[href$="investor"][data-v-a56f3944=""]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 97

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1)`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.investor-bar__item-difference-increased`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.dn-edition-collection-top > .layout-b.dn-grid.dn-grid-layout`
- `a[data-id="2-1-2028103"]`
- `a[data-id="2-1-2029060"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2029060"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2029060"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2029060"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2029114"]`
- `.dn-group[disallowadsbelow="false"][allowads="false"]:nth-child(3) > .layout-b.dn-grid.dn-grid-layout`
- `.cfp-header__title`
- `.cfp-header__subtitle`
- `.cfp-header__action > span`
- `.cfp-player__info`
- `.cfp-playlist`
- `.cfp-footer`
- `.dn-group[disallowadsbelow="true"][allowads="false"]:nth-child(5)`
- `.dn-group[disallowadsbelow="false"][allowads="false"]:nth-child(6) > .layout-bba.dn-grid.dn-grid-layout`
- `.dn-image-left > article > .dn-card_assets`
- `.dn-image-left > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `.dn-image-left > article > .meta`
- `.dn-group[disallowadsbelow="false"][allowads="false"]:nth-child(8)`
- `a[data-id="2-1-2027604"]`
- `a[data-id="2-1-2028608"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2028608"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2028608"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2028608"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2028599"]`
- `a[data-id="2-1-2026893"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2026893"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2026893"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2026893"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Audience Engagement 1"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-6luKO8mq"] > article > .dn-card_assets`
- `a[data-id="6-1-6luKO8mq"] > article > .kicker`
- `a[data-id="6-1-6luKO8mq"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-6luKO8mq"] > article > .meta`
- `a[data-id="6-1-aqt0s6um"] > article > .dn-card_assets`
- `a[data-id="6-1-aqt0s6um"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-aqt0s6um"] > article > .meta`
- `a[data-id="2-1-2028578"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2028578"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2028578"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2028578"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2028860"]`
- `dn-video-carousel,h2`
- `dn-video-carousel,ol`
- `a[data-id="2-1-2028709"]`
- `a[data-id="2-1-2029001"]`
- `a[data-id="6-1-rlRVTtBb"] > article > .dn-card_assets`
- `a[data-id="6-1-rlRVTtBb"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-rlRVTtBb"] > article > .meta`
- `a[data-id="2-1-2025769"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2025769"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2025769"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2025769"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2027365"]`
- `a[data-id="2-1-1980347"]`
- `a[data-id="2-1-2026755"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2026755"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2026755"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2026755"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `a[data-id="2-1-2028685"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2028685"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2028685"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2028685"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2028544"]`
- `a[data-id="2-1-2028810"]`
- `a[data-id="2-1-2028645"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2028645"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2028645"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2028645"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2028637"]`
- `a[data-id="2-1-2025828"]`
- `.layout-ab`
- `div[grouptype="Audience Engagement 3"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-RuI3U9l8"] > article > .dn-card_assets`
- `a[data-id="6-1-RuI3U9l8"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-RuI3U9l8"] > article > .meta`
- `a[data-id="6-1-Hq3zfnOa"] > article > .dn-card_assets`
- `a[data-id="6-1-Hq3zfnOa"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-Hq3zfnOa"] > article > .meta`
- `a[data-id="6-1-rzvhUBxx"] > article > .dn-card_assets`
- `a[data-id="6-1-rzvhUBxx"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-rzvhUBxx"] > article > .meta`
- `#sub-footer,.sticky-footer__content`

### <svg> elements with an img role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 1

#### Affected Elements:

- `.zephr-svg-close`
