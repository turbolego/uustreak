# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-03-10T02:29:11.508Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 36

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-1956076"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1952014"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1952014"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1956705"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1952980"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1952980"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-d1LzStR2"] > article > .meta > span`
- `a[data-id="2-1-1955833"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1953575"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1956548"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1956511"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-jooY1aS0"] > article > .meta > span`
- `a[data-id="2-1-1956679"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1954787"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1954787"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1955799"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-1956563"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1956662"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1954587"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1956482"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1954930"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1954930"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1944964"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1944964"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-szYLYZRx"] > article > .meta > span`
- `a[data-id="6-1-KRgSq87c"] > article > .meta > span`

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

- `iframe[seamless=""], a[data-id="szYLYZRx"] > figure > img`
- `iframe[seamless=""], a[data-id="d1LzStR2"] > figure > img`
- `iframe[seamless=""], a[data-id="AwEY64Ab"] > figure > img`
- `iframe[seamless=""], a[data-id="eR8YdjCG"] > figure > img`

### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer-copyright`

### Document should not have more than one contentinfo landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one contentinfo landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer`

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
- **Count:** 96

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-decreased > .item-holder[data-v-a56f3944=""]`
- `.item-difference-decreased`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.dn-edition-collection-top > .layout-b.dn-grid.dn-grid-layout`
- `.inverted.dn-group[disallowadsbelow="false"]:nth-child(3) > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="2-1-1956769"]`
- `a[data-id="6-1-iIdgCCM1"] > article > .dn-card_assets`
- `a[data-id="6-1-iIdgCCM1"] > article > .kicker`
- `a[data-id="6-1-iIdgCCM1"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-iIdgCCM1"] > article > .meta`
- `.layout-bba.dn-grid.dn-grid-layout:nth-child(5)`
- `a[data-id="2-1-1956874"]`
- `a[data-id="2-1-1956969"]`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.inverted.dn-group[disallowadsbelow="false"]:nth-child(6) > .layout-b.dn-grid.dn-grid-layout`
- `a[data-id="2-1-1953697"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1953697"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1953697"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1953697"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-5hS5GQ6H"] > article > .dn-card_assets`
- `a[data-id="6-1-5hS5GQ6H"] > article > .kicker`
- `a[data-id="6-1-5hS5GQ6H"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-5hS5GQ6H"] > article > .meta`
- `a[data-id="6-1-5hS5GQ6H"] > article > .badge > span`
- `a[data-id="2-1-1956705"]`
- `a[data-id="2-1-1952980"]`
- `a[data-id="2-1-1952251"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1952251"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1952251"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1952251"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1954864"]`
- `a[data-id="6-1-d1LzStR2"] > article > .dn-card_assets`
- `a[data-id="6-1-d1LzStR2"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-d1LzStR2"] > article > .meta`
- `a[data-id="2-1-1956757"]`
- `a[data-id="2-1-1956875"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1956875"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1956875"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1956875"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1955833"]`
- `.dn-group[disallowadsbelow="false"]:nth-child(12)`
- `a[data-id="2-1-1956548"]`
- `a[data-id="2-1-1956511"]`
- `a[data-id="6-1-jooY1aS0"] > article > .dn-card_assets`
- `a[data-id="6-1-jooY1aS0"] > article > .kicker`
- `a[data-id="6-1-jooY1aS0"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-jooY1aS0"] > article > .meta`
- `a[data-id="6-1-jooY1aS0"] > article > .badge > span`
- `a[data-id="2-1-1956529"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1956529"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1956529"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1956529"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1956679"]`
- `a[data-id="6-1-QYdbryqL"] > article > .dn-card_assets`
- `a[data-id="6-1-QYdbryqL"] > article > .kicker`
- `a[data-id="6-1-QYdbryqL"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.dn-image-format-1x1`
- `a[data-id="2-1-1954787"]`
- `a[data-id="2-1-1955172"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1955172"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1955172"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1955172"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Audience Engagement 2"] > .layout-b.dn-grid.dn-grid-layout`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `a[data-id="2-1-1956534"]`
- `a[data-id="2-1-1956563"]`
- `a[data-id="2-1-1955305"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1955305"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1955305"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1955305"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.layout-abb.dn-grid.dn-grid-layout:nth-child(21)`
- `div[grouptype="Audience Engagement 3"] > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="6-1-szYLYZRx"] > article > .dn-card_assets`
- `a[data-id="6-1-szYLYZRx"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-szYLYZRx"] > article > .meta`
- `a[data-id="6-1-zClcnwds"] > article > .dn-card_assets`
- `a[data-id="6-1-zClcnwds"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-zClcnwds"] > article > .meta`
- `a[data-id="6-1-zClcnwds"] > article > .badge > span`
- `a[data-id="6-1-KRgSq87c"] > article > .dn-card_assets`
- `a[data-id="6-1-KRgSq87c"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-KRgSq87c"] > article > .meta`
- `a[data-id="6-1-KRgSq87c"] > article > .badge > span`
