# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-03-20T00:43:19.722Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 38

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-1961306"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-XVhvuj90"] > article > .meta > span`
- `a[data-id="2-1-1959482"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1959482"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1962897"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1962708"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1962465"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-G8rMAXl2"] > article > .meta > span`
- `a[data-id="2-1-1961721"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1962438"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1962409"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1962394"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-i4egenYs"] > article > .meta > span`
- `a[data-id="2-1-1955345"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1955345"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1962459"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1962802"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1962356"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(3) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `a[data-id="2-1-1960555"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1828608"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1611284"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1611284"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-2O0KClHK"] > article > .meta > span`
- `a[data-id="2-1-1962463"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1962384"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1962391"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1960694"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1960694"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1925090"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1925090"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-szYLYZRx"] > article > .meta > span`
- `a[data-id="6-1-jQp6zPSR"] > article > .meta > span`

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

- `iframe[seamless=""], a[data-id="mkoUR5Fc"] > figure > img`
- `iframe[seamless=""], a[data-id="i4egenYs"] > figure > img`
- `iframe[seamless=""], a[data-id="Om5hm3Eb"] > figure > img`
- `iframe[seamless=""], a[data-id="bQRPmnsv"] > figure > img`

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
- **Count:** 101

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `a[data-id="2-1-1962582"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1962582"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1962582"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1962582"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1963021"]`
- `a[data-id="2-1-1961306"]`
- `.dn-group[disallowadsbelow="false"]:nth-child(2) > .layout-b.dn-grid.dn-grid-layout`
- `a[data-id="2-1-1961932"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1961932"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1961932"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1961932"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-XVhvuj90"] > article > .dn-card_assets > .default[data-load="eager"][type="picture"]`
- `a[data-id="6-1-XVhvuj90"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-XVhvuj90"] > article > .meta`
- `a[data-id="6-1-XVhvuj90"] > article > .badge > span`
- `a[data-id="2-1-1959482"]`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(5)`
- `a[data-id="2-1-1962708"]`
- `a[data-id="2-1-1962465"]`
- `a[data-id="6-1-G8rMAXl2"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-G8rMAXl2"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-G8rMAXl2"] > article > .meta`
- `a[data-id="6-1-G8rMAXl2"] > article > .badge > span`
- `.dn-group[disallowadsbelow="false"]:nth-child(7)`
- `.dn-group[disallowadsbelow="false"]:nth-child(9)`
- `a[data-id="2-1-1962394"]`
- `a[data-id="6-1-i4egenYs"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-i4egenYs"] > article > .kicker`
- `a[data-id="6-1-i4egenYs"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-i4egenYs"] > article > .meta`
- `a[data-id="2-1-1948416"]`
- `.dn-image-format-4x3 > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `.dn-image-format-4x3 > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `.dn-image-format-4x3 > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.dn-image-format-4x3 > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1955345"]`
- `a[data-id="2-1-1960577"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1960577"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1960577"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1960577"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1962498"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1962498"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1962498"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1962498"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[disallowadsbelow="true"]`
- `a[data-id="2-1-1962459"]`
- `a[data-id="2-1-1962802"]`
- `a[data-id="2-1-1962356"]`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `div[grouptype="Audience Engagement 2"] > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="6-1-2O0KClHK"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-2O0KClHK"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-2O0KClHK"] > article > .meta`
- `a[data-id="6-1-2O0KClHK"] > article > .badge > span`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(18)`
- `a[data-id="2-1-1961931"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1961931"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1961931"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1961931"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1962384"]`
- `a[data-id="2-1-1962391"]`
- `a[data-id="2-1-1961800"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1961800"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1961800"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1961800"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1960553"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1960553"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1960553"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1960553"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1960694"]`
- `a[data-id="2-1-1925090"]`
- `a[data-id="2-1-1960288"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1960288"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1960288"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1960288"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1960451"]`
- `a[data-id="6-1-szYLYZRx"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-szYLYZRx"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-szYLYZRx"] > article > .meta`
- `a[data-id="6-1-dVrTyk5c"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-dVrTyk5c"] > article > .kicker`
- `a[data-id="6-1-dVrTyk5c"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-dVrTyk5c"] > article > .meta`
- `a[data-id="6-1-dVrTyk5c"] > article > .badge > span`
- `a[data-id="6-1-jQp6zPSR"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-jQp6zPSR"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-jQp6zPSR"] > article > .meta`
- `a[data-id="6-1-jQp6zPSR"] > article > .badge > span`
