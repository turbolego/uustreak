# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-08-29T06:04:54.827Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`

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
- **Count:** 63

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(2)`
- `.dn-edition-collection-top > .layout-b.dn-grid.dn-grid-layout`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(4)`
- `.layout-abb.dn-grid.dn-grid-layout:nth-child(6)`
- `.layout-bbb.dn-grid.dn-grid-layout:nth-child(7)`
- `.dn-edition-collection-top > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="2-1-2032967"]`
- `a[data-id="6-1-VxW5jmtO"] > article > .dn-card_assets`
- `a[data-id="6-1-VxW5jmtO"] > article > .kicker`
- `a[data-id="6-1-VxW5jmtO"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-VxW5jmtO"] > article > .meta`
- `a[data-id="2-1-2036053"]`
- `a[data-id="6-1-iU3Mf5qo"] > article > .dn-card_assets`
- `a[data-id="6-1-iU3Mf5qo"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-iU3Mf5qo"] > article > .meta`
- `a[data-id="2-1-2034951"]`
- `a[data-id="6-1-dnebFqqL"] > article > .dn-card_assets`
- `a[data-id="6-1-dnebFqqL"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-dnebFqqL"] > article > .meta`
- `a[data-id="6-1-dnebFqqL"] > article > .badge > span`
- `.layout-bb.dn-grid.dn-grid-layout:nth-child(11)`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(12)`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(13)`
- `.layout-bb.dn-grid.dn-grid-layout:nth-child(14)`
- `div[grouptype="Audience Engagement 1"] > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="6-1-fRsorcrX"] > article > .dn-card_assets`
- `a[data-id="6-1-fRsorcrX"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-fRsorcrX"] > article > .meta`
- `a[data-id="6-1-fRsorcrX"] > article > .badge > span`
- `a[data-id="2-1-2035519"]`
- `a[data-id="2-1-2035747"]`
- `a[data-id="6-1-odUy9Upg"] > article > .dn-card_assets`
- `a[data-id="6-1-odUy9Upg"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-odUy9Upg"] > article > .meta`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(18)`
- `div[grouptype="Audience Engagement 2"]`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(20)`
- `div[grouptype="Audience Engagement 3"] > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="6-1-HJ2YTnYK"] > article > .dn-card_assets`
- `a[data-id="6-1-HJ2YTnYK"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2034463"]`
- `a[data-id="6-1-5x04AEM8"] > article > .dn-card_assets`
- `a[data-id="6-1-5x04AEM8"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-5x04AEM8"] > article > .meta`
- `a[data-id="2-1-2032081"]`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(23) > .layout-bb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-RWZzWU1p"] > article > .dn-card_assets`
- `a[data-id="6-1-RWZzWU1p"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-RWZzWU1p"] > article > .meta`
- `a[data-id="6-1-ODzSrnoF"] > article > .dn-card_assets`
- `a[data-id="6-1-ODzSrnoF"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-ODzSrnoF"] > article > .meta`
