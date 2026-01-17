# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-01-17T00:39:47.755Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 38

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-1929164"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1929366"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1873850"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1873850"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `.dn-image-left > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1917604"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1917604"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1894919"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1894919"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1914484"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1914484"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1927790"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1929253"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1923950"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1923950"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1925743"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1925743"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1929181"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-1925711"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1904669"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-DhihJ3Dh"] > article > .meta > span`
- `a[data-id="2-1-1929014"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1928315"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1929118"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1926888"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1926381"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1926381"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1924246"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1924246"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-1oYswNhM"] > article > .meta > span`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

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
- **Count:** 84

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.layout-abb.dn-grid.dn-grid-layout:nth-child(2)`
- `.dn-group:nth-child(3)`
- `.brand.dn-group > .layout-a\+.dn-grid.dn-grid-layout`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-image-format-4x3`
- `a[data-id="2-1-1929492"]`
- `a[data-id="2-1-1929499"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1929499"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1929499"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1929499"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.brand-secondary.dn-group`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(10)`
- `.dn-teaser-card-b\+ > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `.dn-teaser-card-b\+ > article > .kicker`
- `.dn-teaser-card-b\+ > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.dn-teaser-card-b\+ > article > .meta`
- `a[data-id="2-1-nlc_172084"]`
- `a[data-id="2-1-nlc_172088"]`
- `div[grouptype="Audience Engagement 1"]`
- `.layout-bab`
- `a[data-id="2-1-1929170"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1929170"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1929170"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1929170"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1925743"]`
- `a[data-id="2-1-1929158"]`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(17)`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `a[data-id="2-1-1925711"]`
- `a[data-id="2-1-1926718"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1926718"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1926718"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1926718"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1904669"]`
- `a[data-id="6-1-DhihJ3Dh"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-DhihJ3Dh"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-DhihJ3Dh"] > article > .meta`
- `a[data-id="2-1-1929014"]`
- `a[data-id="2-1-1927928"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1927928"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1927928"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1927928"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1928315"]`
- `div[grouptype="Pod"]`
- `a[data-id="2-1-1929118"]`
- `a[data-id="2-1-1928568"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1928568"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1928568"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1928568"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group:nth-child(24)`
- `a[data-id="2-1-1926335"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1926335"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1926335"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1926335"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-B45oQtp3"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-B45oQtp3"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.dn-image-format-1x1`
- `div[grouptype="Audience Engagement 3"] > .layout-b.dn-grid.dn-grid-layout`
- `.layout-a`
- `a[data-id="6-1-eVCDPFF3"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-eVCDPFF3"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-eVCDPFF3"] > article > .meta`
- `a[data-id="6-1-eVCDPFF3"] > article > .badge > span`
- `a[data-id="6-1-1oYswNhM"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-1oYswNhM"] > article > .kicker`
- `a[data-id="6-1-1oYswNhM"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-1oYswNhM"] > article > .meta`
- `a[data-id="6-1-1oYswNhM"] > article > .badge > span`
