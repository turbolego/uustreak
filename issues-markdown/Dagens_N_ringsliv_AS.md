# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-04-17T03:33:00.449Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 39

#### Affected Elements:

- `.investor-bar__item-difference-increased`
- `a[data-id="2-1-1970758"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1975689"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-yUoguajQ"] > article > .meta > span`
- `a[data-id="2-1-1975478"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1975474"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1972285"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1972285"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1975126"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1975541"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1975053"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1975158"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-0Swfm8LE"] > article > .meta > span`
- `a[data-id="2-1-1914050"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1914050"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1973538"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-6vvpXs9K"] > article > .meta > span`
- `a[data-id="2-1-1971345"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1971345"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1974101"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-1972328"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1929162"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1929162"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1974144"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1975111"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1975011"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1972391"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1966664"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1966664"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1963764"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1963764"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1963559"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1963559"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-mxrDSVtV"] > article > .meta > span`
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

- `iframe[seamless=""], a[data-id="YgPLI5UL"] > figure > img`
- `iframe[seamless=""], a[data-id="oZLxqcLy"] > figure > img`
- `iframe[seamless=""], a[data-id="4KEjx5Oo"] > figure > img`
- `iframe[seamless=""], a[data-id="Dh6dPmMv"] > figure > img`

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
- **Count:** 95

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased > .item-holder[data-v-a56f3944=""]`
- `.investor-bar__item-difference-increased`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `a[data-id="2-1-1970758"]`
- `a[data-id="2-1-1975689"]`
- `a[data-id="2-1-1974217"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1974217"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1974217"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1974217"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-yUoguajQ"] > article > .dn-card_assets > .default[data-load="eager"][type="picture"]`
- `a[data-id="6-1-yUoguajQ"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-yUoguajQ"] > article > .meta`
- `a[data-id="6-1-yUoguajQ"] > article > .badge > span`
- `.dn-group[disallowadsbelow="false"]:nth-child(4)`
- `a[data-id="2-1-1975634"]`
- `a[data-id="2-1-1975253"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1975253"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1975253"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1975253"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1972285"]`
- `a[data-id="6-1-zzwDgj1u"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-zzwDgj1u"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-zzwDgj1u"] > article > .meta`
- `a[data-id="6-1-zzwDgj1u"] > article > .badge > span`
- `.dn-group[disallowadsbelow="false"]:nth-child(8)`
- `a[data-id="2-1-1975541"]`
- `a[data-id="2-1-1975053"]`
- `a[data-id="2-1-1975446"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1975446"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1975446"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1975446"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1975158"]`
- `a[data-id="2-1-1974632"]`
- `a[data-id="6-1-0Swfm8LE"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-0Swfm8LE"] > article > .kicker`
- `a[data-id="6-1-0Swfm8LE"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-0Swfm8LE"] > article > .meta`
- `a[data-id="2-1-1914050"]`
- `a[data-id="2-1-1973538"]`
- `a[data-id="2-1-1972980"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1972980"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1972980"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1972980"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-6vvpXs9K"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-6vvpXs9K"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-6vvpXs9K"] > article > .meta`
- `a[data-id="2-1-1971345"]`
- `a[data-id="2-1-1975127"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1975127"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1975127"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1975127"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1974101"]`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `a[data-id="2-1-1974066"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1974066"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1974066"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1974066"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1973688"]`
- `a[data-id="2-1-1972328"]`
- `div[grouptype="Audience Engagement 2"] > .layout-b.dn-grid.dn-grid-layout`
- `a[data-id="2-1-1974916"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1974916"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1974916"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1974916"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1974144"]`
- `a[data-id="2-1-1975111"]`
- `.layout-bab`
- `a[data-id="2-1-1974215"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1974215"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1974215"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1974215"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Audience Engagement 3"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-mxrDSVtV"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-mxrDSVtV"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-mxrDSVtV"] > article > .meta`
- `a[data-id="6-1-mxrDSVtV"] > article > .badge > span`
- `a[data-id="6-1-l0ZRjtU4"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-l0ZRjtU4"] > article > .kicker`
- `a[data-id="6-1-l0ZRjtU4"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-l0ZRjtU4"] > article > .meta`
- `a[data-id="6-1-l0ZRjtU4"] > article > .badge > span`
- `a[data-id="6-1-gbfinnLL"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-gbfinnLL"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-gbfinnLL"] > article > .meta`
- `a[data-id="6-1-gbfinnLL"] > article > .badge > span`
