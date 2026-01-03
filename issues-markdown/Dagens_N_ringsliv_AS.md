# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-01-03T00:37:28.453Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 40

#### Affected Elements:

- `.investor-bar__item-difference-increased`
- `a[data-id="2-1-1922655"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1907940"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1907940"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1921700"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1922608"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1910802"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-Dgoib7BB"] > article > .meta > span`
- `a[data-id="2-1-1922510"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1912039"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1912039"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1921597"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1915950"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1915950"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1918540"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1918116"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1915876"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1915876"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1898577"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1898577"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1910709"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-mClulVwH"] > article > .meta > span`
- `a[data-id="2-1-nlc_171594"] > article[data-teaser_type="cpp-article-custom"] > .meta > span`
- `a[data-id="2-1-1922281"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-ZyebHLfY"] > article > .meta > span`
- `a[data-id="2-1-1892909"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-nlc_171596"] > article[data-teaser_type="cpp-article-custom"] > .meta > span`
- `a[data-id="2-1-1921472"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1917912"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1917912"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1918184"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-R6zXLoD3"] > article > .meta > span`
- `a[data-id="2-1-1922371"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-1oYswNhM"] > article > .meta > span`
- `a[data-id="2-1-1918428"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-vNqvD3yH"] > article > .meta > span`

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

- `iframe[seamless=""], a[data-id="zaca64wB"] > figure > img`
- `iframe[seamless=""], a[data-id="VhMHaRJL"] > figure > img`
- `iframe[seamless=""], a[data-id="wlGTU0PZ"] > figure > img`
- `iframe[seamless=""], a[data-id="2eFvAtk8"] > figure > img`

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
- **Count:** 86

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-increased > .item-holder[data-v-a56f3944=""]`
- `.investor-bar__item-difference-increased`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.dn-group:nth-child(2)`
- `a[data-id="2-1-1921467"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1921467"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1921467"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1921467"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1922608"]`
- `a[data-id="2-1-1910802"]`
- `figure[originalheight="900"][data-load="eager"][originalwidth="1600"]`
- `a[data-id="6-1-Dgoib7BB"] > article > .kicker`
- `a[data-id="6-1-Dgoib7BB"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-Dgoib7BB"] > article > .meta`
- `a[data-id="6-1-Dgoib7BB"] > article > .badge > span`
- `a[data-id="2-1-1922510"]`
- `a[data-id="2-1-1912039"]`
- `a[data-id="2-1-1922238"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1922238"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1922238"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1922238"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group:nth-child(6) > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="2-1-1911467"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1911467"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1911467"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1911467"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1922343"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1922343"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1922343"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1922343"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1918116"]`
- `a[data-id="2-1-1915876"]`
- `.dn-group:nth-child(8) > .layout-b.dn-grid.dn-grid-layout`
- `div[grouptype="Audience Engagement 1"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-mClulVwH"] > article > .dn-card_assets > figure[originalheight="1067"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-mClulVwH"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-mClulVwH"] > article > .meta`
- `.dn-group:nth-child(13)`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(14)`
- `div[grouptype="Audience Engagement 2"]`
- `a[data-id="2-1-1922281"]`
- `a[data-id="6-1-ZyebHLfY"] > article > .dn-card_assets > figure[originalheight="900"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-ZyebHLfY"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-ZyebHLfY"] > article > .meta`
- `a[data-id="6-1-ZyebHLfY"] > article > .badge > span`
- `a[data-id="2-1-1892909"]`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `a[data-id="2-1-1918404"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1918404"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1918404"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1918404"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-nlc_171596"]`
- `a[data-id="2-1-1921472"]`
- `.dn-group:nth-child(20)`
- `a[data-id="2-1-1917912"]`
- `a[data-id="2-1-1918184"]`
- `a[data-id="2-1-1920487"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1920487"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1920487"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1920487"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-R6zXLoD3"] > article > .dn-card_assets > figure[originalheight="900"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-R6zXLoD3"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-R6zXLoD3"] > article > .meta`
- `a[data-id="6-1-R6zXLoD3"] > article > .badge > span`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(23)`
- `a[data-id="6-1-1oYswNhM"] > article > .dn-card_assets > figure[originalheight="1067"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-1oYswNhM"] > article > .kicker`
- `a[data-id="6-1-1oYswNhM"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-1oYswNhM"] > article > .meta`
- `a[data-id="6-1-1oYswNhM"] > article > .badge > span`
- `a[data-id="2-1-1918428"]`
- `a[data-id="6-1-vNqvD3yH"] > article > .dn-card_assets > figure[originalheight="900"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-vNqvD3yH"] > article > .kicker`
- `a[data-id="6-1-vNqvD3yH"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-vNqvD3yH"] > article > .meta`
- `a[data-id="6-1-vNqvD3yH"] > article > .badge > span`
