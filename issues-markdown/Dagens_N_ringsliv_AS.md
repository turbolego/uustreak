# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-04-28T09:04:38.188Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 41

#### Affected Elements:

- `.investor-bar__item-difference-increased`
- `a[data-id="2-1-1979710"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1981052"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1981101"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1981612"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-v2JtjH6K"] > article > .meta > span`
- `a[data-id="2-1-1981057"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1981553"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1981565"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1981307"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1980881"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1980459"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1981396"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1981525"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1980847"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-1981046"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1981251"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1981029"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1956761"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1956761"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1977490"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1977490"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-ylChi5Tc"] > article > .meta > span`
- `a[data-id="2-1-1979738"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.breaking > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1980923"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1978751"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1973377"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1973377"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1953049"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1953049"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1974195"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1976149"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1976149"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-gbfinnLL"] > article > .meta > span`

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

- `iframe[seamless=""], a[data-id="K3Ya1wG6"] > figure > img`
- `iframe[seamless=""], a[data-id="FNUW3i5m"] > figure > img`
- `iframe[seamless=""], a[data-id="SqvQJ4Aa"] > figure > img`
- `iframe[seamless=""], a[data-id="QvZzxxdn"] > figure > img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `a[data-id="6-1-hVx3xG72"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"] > .ratio-16x9 > img[fetchpriority="auto"][loading="lazy"][decoding="async"]`

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
- **Count:** 67

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
- `.dn-edition-collection-top > .layout-b.dn-grid.dn-grid-layout:nth-child(2)`
- `.dn-group[disallowadsbelow="false"]:nth-child(3)`
- `.dn-group[disallowadsbelow="true"]:nth-child(5)`
- `a[data-id="2-1-1981612"]`
- `a[data-id="6-1-v2JtjH6K"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-v2JtjH6K"] > article > .kicker`
- `a[data-id="6-1-v2JtjH6K"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-v2JtjH6K"] > article > .meta`
- `a[data-id="2-1-1981235"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1981235"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1981235"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1981235"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.brand.dn-group[disallowadsbelow="false"]`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(9)`
- `.dn-group[disallowadsbelow="false"]:nth-child(10)`
- `.dn-edition-collection-top > .layout-bb.dn-grid.dn-grid-layout`
- `.dn-group[disallowadsbelow="true"]:nth-child(12)`
- `div[grouptype="Audience Engagement 1"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-hVx3xG72"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-hVx3xG72"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.dn-group[disallowadsbelow="false"]:nth-child(15)`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `.dn-group[disallowadsbelow="false"]:nth-child(18)`
- `div[grouptype="Audience Engagement 2"] > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="6-1-ylChi5Tc"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-ylChi5Tc"] > article > .kicker`
- `a[data-id="6-1-ylChi5Tc"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-ylChi5Tc"] > article > .meta`
- `a[data-id="6-1-ylChi5Tc"] > article > .badge > span`
- `a[data-id="2-1-1981156"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1981156"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1981156"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1981156"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1979738"]`
- `a[data-id="2-1-1981040"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1981040"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1981040"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1981040"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1980073"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1980073"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1980073"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1980073"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.breaking`
- `a[data-id="2-1-1980923"]`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(23)`
- `div[grouptype="Audience Engagement 3"]`
- `a[data-id="6-1-UHKQWHTl"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-UHKQWHTl"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-UHKQWHTl"] > article > .meta`
- `a[data-id="6-1-UHKQWHTl"] > article > .badge > span`
- `a[data-id="6-1-gbfinnLL"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-gbfinnLL"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-gbfinnLL"] > article > .meta`
- `a[data-id="6-1-gbfinnLL"] > article > .badge > span`
