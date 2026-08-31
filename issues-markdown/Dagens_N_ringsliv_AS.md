# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-08-31T04:00:57.391Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 37

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-2035404"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2036551"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2036560"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2036326"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2030054"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2036526"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2026150"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2026150"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2035880"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2028148"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2028148"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2036455"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2035014"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2036478"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2033089"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2028140"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2028140"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2027917"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2027917"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-fRsorcrX"] > article > .meta > span`
- `a[data-id="2-1-2029987"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2007156"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2007156"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2006188"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2006188"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2035395"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2020992"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2020992"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1991401"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1991401"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `.dn-image-top > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-top > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-RWZzWU1p"] > article > .meta > span`
- `a[data-id="6-1-ODzSrnoF"] > article > .meta > span`

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
- **Count:** 84

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `a[data-id="2-1-2035404"]`
- `a[data-id="2-1-2036551"]`
- `a[data-id="2-1-2036508"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2036508"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2036508"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2036508"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(2) > .layout-b.dn-grid.dn-grid-layout`
- `.dn-group-header`
- `a[data-id="2-1-2035122"]`
- `a[data-id="2-1-2036543"]`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.inverted[allowads="false"][disallowadsbelow="false"]:nth-child(4)`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(5)`
- `a[data-id="2-1-2036326"]`
- `a[data-id="2-1-2030054"]`
- `a[data-id="2-1-2034947"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2034947"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2034947"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2034947"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(9)`
- `.inverted[allowads="false"][disallowadsbelow="false"]:nth-child(10) > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-Rhzcgvor"] > article > .dn-card_assets`
- `a[data-id="6-1-Rhzcgvor"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-Rhzcgvor"] > article > .meta`
- `a[data-id="2-1-2036381"]`
- `a[data-id="2-1-2036498"]`
- `a[data-id="2-1-2026150"]`
- `.dn-image-format-1x1 > article > .dn-card_assets`
- `.dn-image-format-1x1 > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2035880"]`
- `a[data-id="2-1-2028148"]`
- `a[data-id="2-1-2034894"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2034894"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2034894"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2034894"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group[allowads="false"][disallowadsbelow="false"]:nth-child(13)`
- `dn-video-carousel,h2`
- `dn-video-carousel,ol`
- `div[grouptype="Audience Engagement 1"] > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="6-1-fRsorcrX"] > article > .dn-card_assets`
- `a[data-id="6-1-fRsorcrX"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-fRsorcrX"] > article > .meta`
- `a[data-id="6-1-fRsorcrX"] > article > .badge > span`
- `.brand-secondary[allowads="false"][disallowadsbelow="false"]`
- `a[data-id="2-1-2029987"]`
- `a[data-id="2-1-2007156"]`
- `a[data-id="2-1-2033201"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2033201"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2033201"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2033201"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2034006"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2034006"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2034006"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2034006"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2032906"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2032906"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2032906"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2032906"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2006188"]`
- `a[data-id="2-1-2035395"]`
- `.inverted[allowads="false"][disallowadsbelow="false"]:nth-child(19)`
- `div[grouptype="Audience Engagement 3"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-HJ2YTnYK"] > article > .dn-card_assets`
- `a[data-id="6-1-HJ2YTnYK"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-RWZzWU1p"] > article > .dn-card_assets`
- `a[data-id="6-1-RWZzWU1p"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-RWZzWU1p"] > article > .meta`
- `a[data-id="6-1-ODzSrnoF"] > article > .dn-card_assets`
- `a[data-id="6-1-ODzSrnoF"] > article > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-ODzSrnoF"] > article > .meta`
