# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-01-20T00:38:35.169Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 37

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-1927579"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1928929"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-KziGR3nh"] > article > .meta > span`
- `a[data-id="2-1-1930052"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1929985"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930080"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1926099"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1926099"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-Evk3wqJN"] > article > .meta > span`
- `a[data-id="2-1-1929802"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1925191"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1925191"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1929897"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930050"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930154"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930007"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1919706"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1919706"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1923323"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1923323"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1929942"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930027"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1925663"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1927751"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-image-format-3x2 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-format-3x2 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1928551"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1928551"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-1oYswNhM"] > article > .meta > span`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[seamless=""]`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- `iframe[seamless=""], a[data-id="1E4XaHvS"] > figure > img`
- `iframe[seamless=""], a[data-id="RqBhiGbk"] > figure > img`
- `iframe[seamless=""], a[data-id="GfjNFYXv"] > figure > img`
- `iframe[seamless=""], a[data-id="DhihJ3Dh"] > figure > img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 3

#### Affected Elements:

- `a[data-id="6-1-pL47V69A"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"] > .ratio-16x9 > img[fetchpriority="auto"][loading="lazy"][decoding="async"]`
- `img[alt="Valentino er død"]`
- `a[data-id="6-1-B45oQtp3"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"] > .ratio-16x9 > img[fetchpriority="auto"][loading="lazy"][decoding="async"]`

### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.dn-footer-copyright`

### Document should not have more than one contentinfo landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one contentinfo landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.dn-footer`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.dn-footer`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.button[data-v-a56f3944=""]:nth-child(3) > a[href$="investor"][data-v-a56f3944=""]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 76

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-1927579"]`
- `a[data-id="2-1-1928929"]`
- `a[data-id="2-1-1929975"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1929975"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1929975"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1929975"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group:nth-child(3)`
- `a[data-id="6-1-KziGR3nh"] > article > .dn-card_assets > .default[data-load="eager"][type="picture"]`
- `a[data-id="6-1-KziGR3nh"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-KziGR3nh"] > article > .meta`
- `a[data-id="6-1-KziGR3nh"] > article > .badge > span`
- `a[data-id="2-1-1930094"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1930094"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1930094"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1930094"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1930052"]`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(6)`
- `a[data-id="2-1-1927959"]`
- `a[data-id="6-1-pL47V69A"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-pL47V69A"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-nlc_172146"]`
- `a[data-id="2-1-1929920"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1929920"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1929920"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1929920"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group:nth-child(10)`
- `a[data-id="2-1-1929985"]`
- `a[data-id="2-1-1928747"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1928747"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1928747"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1928747"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1930080"]`
- `a[data-id="2-1-1928436"]`
- `a[data-id="2-1-1926099"]`
- `a[data-id="2-1-1929169"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1929169"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1929169"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1929169"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-Evk3wqJN"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-Evk3wqJN"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-Evk3wqJN"] > article > .meta`
- `.layout-bba.dn-grid.dn-grid-layout:nth-child(14)`
- `a[data-id="2-1-1928357"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1928357"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1928357"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1928357"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group:nth-child(17)`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `div[grouptype="Audience Engagement 2"]`
- `.dn-group:nth-child(21)`
- `.dn-group:nth-child(23)`
- `div[grouptype="Audience Engagement 3"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-B45oQtp3"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-B45oQtp3"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-eVCDPFF3"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-eVCDPFF3"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-eVCDPFF3"] > article > .meta`
- `a[data-id="6-1-eVCDPFF3"] > article > .badge > span`
- `a[data-id="6-1-1oYswNhM"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-1oYswNhM"] > article > .kicker`
- `a[data-id="6-1-1oYswNhM"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-1oYswNhM"] > article > .meta`
- `a[data-id="6-1-1oYswNhM"] > article > .badge > span`
