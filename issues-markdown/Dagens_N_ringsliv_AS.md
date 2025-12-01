# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2025-12-01T01:35:52.829Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 35

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-1894606"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1903520"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1907923"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1901384"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1901384"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1898472"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1898472"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1908958"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1888225"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1888225"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-cY6VVZQ9"] > article > .meta > span`
- `a[data-id="6-1-EktV2mrL"] > article > .meta > span`
- `a[data-id="2-1-1893394"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1893394"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1908645"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1905798"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1905798"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `.dn-image-format-3x2 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-format-3x2 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1905613"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1905613"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1904051"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1904051"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-1905115"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1905115"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1897092"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1897092"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-MOvHDU4H"] > article > .meta > span`
- `a[data-id="6-1-eyqJXjhi"] > article > .meta > span`

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

- `iframe[seamless=""], a[data-id="G6nHzYSX"] > figure > img`
- `iframe[seamless=""], a[data-id="EktV2mrL"] > figure > img`
- `iframe[seamless=""], a[data-id="as2izcNh"] > figure > img`
- `iframe[seamless=""], a[data-id="J7FfMwws"] > figure > img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `a[data-id="6-1-G6nHzYSX"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"] > .ratio-16x9 > img[fetchpriority="auto"][loading="lazy"][decoding="async"]`

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
- **Count:** 71

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
- `#NjkyNDI1NGMxMWJmNWUwMDhkMzhjN2M3XyRfYnA9ZG5fbWFfZnJvbnRwYWdlX3RvcGJhbm5lciZtdj02OTI0MjU0YzExYmY1ZTAwOGQzOGM3YmYmcGk9Y21w, #ituh`
- `.dn-group:nth-child(2)`
- `a[data-id="2-1-1894606"]`
- `a[data-id="2-1-1903520"]`
- `a[data-id="2-1-1908446"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1908446"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1908446"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1908446"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group:nth-child(3) > .layout-b.dn-grid.dn-grid-layout`
- `.dn-group:nth-child(5)`
- `a[data-id="6-1-G6nHzYSX"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-G6nHzYSX"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1907731"]`
- `a[data-id="2-1-1907923"]`
- `.dn-edition-collection-top > .layout-abb.dn-grid.dn-grid-layout`
- `#NjkyNDFjOTQ4OTA3NjcwMDgwMTgyM2IzXyRfYnA9ZG5fbWFfZnJvbnRwYWdlX2Jhbm5lcmJveCZtdj02OTI0MWM5NDg5MDc2NzAwODAxODIzYWQmcGk9Y21w, #ieps`
- `.dn-image-left > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `.dn-image-left > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `.dn-image-left > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.dn-image-left > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1908958"]`
- `.brand.dn-group`
- `a[data-id="2-1-1906289"]`
- `a[data-id="2-1-1907463"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1907463"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1907463"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1907463"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1888225"]`
- `a[data-id="6-1-cY6VVZQ9"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-cY6VVZQ9"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-cY6VVZQ9"] > article > .meta`
- `a[data-id="6-1-cY6VVZQ9"] > article > .badge > span`
- `a[data-id="6-1-EktV2mrL"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-EktV2mrL"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-EktV2mrL"] > article > .meta`
- `a[data-id="2-1-1893394"]`
- `a[data-id="2-1-1908645"]`
- `div[grouptype="Audience Engagement 2"]`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `.dn-group:nth-child(20)`
- `a[data-id="2-1-1902074"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1902074"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1902074"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1902074"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1905115"]`
- `a[data-id="2-1-1897092"]`
- `a[data-id="6-1-MOvHDU4H"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-MOvHDU4H"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-MOvHDU4H"] > article > .meta`
- `a[data-id="6-1-eyqJXjhi"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-eyqJXjhi"] > article > .kicker`
- `a[data-id="6-1-eyqJXjhi"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-eyqJXjhi"] > article > .meta`
- `a[data-id="6-1-eyqJXjhi"] > article > .badge > span`
- `a[data-id="6-1-0HpVmYG6"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-0HpVmYG6"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-0HpVmYG6"] > article > .meta`
- `a[data-id="6-1-0HpVmYG6"] > article > .badge > span`
