# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-03-27T01:07:26.646Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 39

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-1966365"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1966678"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1966140"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1966228"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-9PoCJJyG"] > article > .meta > span`
- `a[data-id="2-1-1966614"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1961784"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1965930"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-FZM16hUw"] > article > .meta > span`
- `a[data-id="2-1-1966217"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1961527"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1961527"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1941945"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1941945"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1963522"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1960664"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-mxrDSVtV"] > article > .meta > span`
- `a[data-id="2-1-1966020"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1965997"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1966352"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1966065"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1966035"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-1958527"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1934836"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1934836"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1964611"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1965975"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.podcast > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1965963"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1965996"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-teaser-card-b\+ > article > .meta > span`
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

- `iframe[seamless=""], a[data-id="ivuW8bIx"] > figure > img`
- `iframe[seamless=""], a[data-id="i4egenYs"] > figure > img`
- `iframe[seamless=""], a[data-id="NDT6InZl"] > figure > img`
- `iframe[seamless=""], a[data-id="oosdGEf5"] > figure > img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `a[data-id="2-1-1966412"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets > .default[type="picture"][data-load="lazy"] > .ratio-16x9 > img[loading="lazy"][fetchpriority="low"][decoding="async"]`

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
- **Count:** 79

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
- `.dn-group[disallowadsbelow="false"]:nth-child(2)`
- `.dn-edition-collection-top > .layout-b.dn-grid.dn-grid-layout`
- `div[disallowadsbelow="true"]`
- `a[data-id="6-1-9PoCJJyG"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-9PoCJJyG"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-9PoCJJyG"] > article > .meta`
- `a[data-id="2-1-1966412"]`
- `a[data-id="2-1-1966053"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1966053"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1966053"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1966053"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1966614"]`
- `a[data-id="2-1-1966544"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1966544"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1966544"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1966544"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1961784"]`
- `a[data-id="2-1-1965930"]`
- `a[data-id="6-1-FZM16hUw"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-FZM16hUw"] > article > .kicker`
- `a[data-id="6-1-FZM16hUw"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-FZM16hUw"] > article > .meta`
- `a[data-id="6-1-FZM16hUw"] > article > .badge > span`
- `.layout-bb.dn-grid.dn-grid-layout:nth-child(9)`
- `div[grouptype="Audience Engagement 1"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-mxrDSVtV"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-mxrDSVtV"] > article > .kicker`
- `a[data-id="6-1-mxrDSVtV"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-mxrDSVtV"] > article > .meta`
- `a[data-id="6-1-mxrDSVtV"] > article > .badge > span`
- `.dn-group[disallowadsbelow="false"]:nth-child(12)`
- `a[data-id="2-1-1965309"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1965309"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1965309"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1965309"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1966035"]`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `a[data-id="2-1-1960996"]`
- `a[data-id="2-1-1958527"]`
- `a[data-id="2-1-1963191"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1963191"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1963191"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1963191"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Audience Engagement 2"] > .layout-b.dn-grid.dn-grid-layout`
- `.layout-abb.dn-grid.dn-grid-layout:nth-child(18)`
- `.dn-edition-collection-top > .layout-bba.dn-grid.dn-grid-layout`
- `.layout-a`
- `a[data-id="2-1-1934539"]`
- `a[data-id="2-1-1964239"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1964239"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1964239"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1964239"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.special`
- `.dn-teaser-card-b\+ > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `.dn-teaser-card-b\+ > article > .kicker`
- `.dn-teaser-card-b\+ > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.dn-teaser-card-b\+ > article > .meta`
- `a[data-id="6-1-dVrTyk5c"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-dVrTyk5c"] > article > .kicker`
- `a[data-id="6-1-dVrTyk5c"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-dVrTyk5c"] > article > .meta`
- `a[data-id="6-1-dVrTyk5c"] > article > .badge > span`
- `a[data-id="6-1-jQp6zPSR"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-jQp6zPSR"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-jQp6zPSR"] > article > .meta`
- `a[data-id="6-1-jQp6zPSR"] > article > .badge > span`
