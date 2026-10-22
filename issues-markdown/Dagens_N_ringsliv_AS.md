# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-10-22T03:40:16.900Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 10

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#zephr-footer-close`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 36

#### Affected Elements:

- `.investor-bar__item-difference-increased`
- `a[data-id="2-1-2060128"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2062262"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.breaking > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2062230"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2060081"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2062232"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2062096"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2061788"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2062208"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2060734"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2062188"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2061762"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2019228"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2019228"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2061661"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2061866"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2061465"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2052448"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2052448"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2061124"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-XpexZW35"] > article[data-teaser_type="cpp-video-common"] > .meta > span`
- `a[data-id="2-1-2061051"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2061668"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(2) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(3) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `a[data-id="2-1-2061671"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-teaser-card-b\+ > article[data-teaser_type="cpp-video-common"] > .meta > span`
- `a[data-id="6-1-QM0fIfK0"] > article[data-teaser_type="cpp-video-common"] > .meta > span`
- `a[data-id="2-1-2050863"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2051693"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2051693"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `.dn-image-format-4x3 > article[data-teaser_type="cpp-video-common"] > .meta > span`
- `a[data-id="6-1-OxbTXkZw"] > article[data-teaser_type="cpp-video-common"] > .meta > span`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 2

#### Affected Elements:

- `article[data-teaser_type="cpp-article-custom"] > .dn-card_assets > figure[type="picture"][reference_type="picture"][data-load="lazy"] > .ratio-16x9 > img[loading="lazy"][fetchpriority="low"][decoding="async"]`
- `a[data-id="2-1-2062176"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets > figure[type="picture"][reference_type="picture"][data-load="lazy"] > .ratio-16x9 > img[loading="lazy"][fetchpriority="low"][decoding="async"]`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- `.ot-cookie-policy-link`

### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer-copyright`

### Document should not have more than one contentinfo landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one contentinfo landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-contentinfo?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.button[data-v-a56f3944=""]:nth-child(3) > a[href$="investor"][data-v-a56f3944=""]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 102

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
- `a[data-id="2-1-2060128"]`
- `a[data-id="2-1-2062262"]`
- `a[data-id="2-1-2060768"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2060768"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2060768"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2060768"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(2) > .layout-bb.dn-grid.dn-grid-layout`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(4)`
- `.layout-abb.dn-grid.dn-grid-layout:nth-child(6)`
- `a[data-id="2-1-2060734"]`
- `a[data-id="2-1-2062188"]`
- `a[data-id="2-1-2061747"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2061747"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2061747"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2061747"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.layout-abb.dn-grid.dn-grid-layout:nth-child(8)`
- `a[data-id="2-1-2061661"]`
- `a[data-id="2-1-2060687"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2060687"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2060687"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2060687"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2061866"]`
- `.layout-bba.dn-grid.dn-grid-layout:nth-child(10)`
- `a[data-id="2-1-2061888"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2061888"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2061888"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2061888"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-XpexZW35"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-XpexZW35"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-XpexZW35"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-XpexZW35"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `a[data-id="2-1-2061714"]`
- `a[data-id="2-1-2061195"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2061195"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2061195"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2061195"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2061042"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2061042"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2061042"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2061042"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2061051"]`
- `a[data-id="2-1-2061668"]`
- `a[data-id="2-1-2061061"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2061061"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2061061"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2061061"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `.brand[allowads="false"][disallowadsbelow="false"]`
- `.dn-edition-collection-top > .layout-b.dn-grid.dn-grid-layout`
- `a[data-id="2-1-2061671"]`
- `.dn-teaser-card-b\+ > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `.dn-teaser-card-b\+ > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `.dn-teaser-card-b\+ > article[data-teaser_type="cpp-video-common"] > .meta`
- `.dn-teaser-card-b\+ > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `a[data-id="2-1-2061123"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2061123"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2061123"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2061123"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2061047"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2061047"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2061047"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2061047"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2059452"]`
- `.inverted`
- `a[data-id="6-1-QM0fIfK0"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-QM0fIfK0"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-QM0fIfK0"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-QM0fIfK0"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `a[data-id="2-1-2050863"]`
- `a[data-id="2-1-2057246"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2057246"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2057246"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2057246"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2051693"]`
- `.dn-image-format-4x3 > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `.dn-image-format-4x3 > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `.dn-image-format-4x3 > article[data-teaser_type="cpp-video-common"] > .meta`
- `.dn-image-format-4x3 > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `a[data-id="6-1-ZUhLiU2D"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-ZUhLiU2D"] > article[data-teaser_type="cpp-video-common"] > .kicker`
- `a[data-id="6-1-ZUhLiU2D"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-ZUhLiU2D"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-ZUhLiU2D"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `a[data-id="6-1-OxbTXkZw"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-OxbTXkZw"] > article[data-teaser_type="cpp-video-common"] > .kicker`
- `a[data-id="6-1-OxbTXkZw"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-OxbTXkZw"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-OxbTXkZw"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `#sub-footer,.sticky-footer__content`
- `#onetrust-banner-sdk`

### <svg> elements with an img or image role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 1

#### Affected Elements:

- `.zephr-svg-close`
