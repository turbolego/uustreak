# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2025-11-25T00:42:38.460Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 40

#### Affected Elements:

- `.investor-bar__item-difference-increased`
- `a[data-id="2-1-1899892"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1905068"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-fZXccecX"] > article > .meta > span`
- `a[data-id="2-1-1905113"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-title-flex > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1905389"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-teaser-card-b\+ > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1905683"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1905417"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-image-format-3x2 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-format-3x2 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1897381"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1897381"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1904051"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1904051"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1905393"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1902492"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1902492"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1901488"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1897276"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1897276"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1902434"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="6-1-as2izcNh"] > article > .meta > span`
- `a[data-id="2-1-1902033"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1902033"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1882922"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `article[data-teaser_type="cpp-article-custom"] > .meta > span`
- `a[data-id="2-1-1892397"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1892397"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1905415"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-P1dq2sUx"] > article > .meta > span`
- `a[data-id="2-1-1901205"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1903903"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-Y6VvDis0"] > article > .meta > span`
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

- `iframe[seamless=""], a[data-id="KzRaoos7"] > figure > img`
- `iframe[seamless=""], a[data-id="NtOsJSPq"] > figure > img`
- `iframe[seamless=""], a[data-id="TfphwH8T"] > figure > img`
- `iframe[seamless=""], a[data-id="bQ3RnaBd"] > figure > img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `a[data-id="2-1-1905838"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets > .default[type="picture"][data-load="lazy"] > .ratio-16x9 > img[fetchpriority="low"][loading="lazy"][decoding="async"]`

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
- **Count:** 97

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
- `.dn-edition-collection-top > .layout-b.dn-grid.dn-grid-layout:nth-child(2)`
- `a[data-id="2-1-1899892"]`
- `a[data-id="2-1-1901981"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1901981"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1901981"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1901981"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1905068"]`
- `.layout-a`
- `.dn-group:nth-child(5)`
- `a[data-id="6-1-fZXccecX"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-fZXccecX"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-fZXccecX"] > article > .meta`
- `a[data-id="6-1-fZXccecX"] > article > .badge > span`
- `a[data-id="2-1-1905838"]`
- `a[data-id="2-1-1904384"]`
- `a[data-id="2-1-1905113"]`
- `a[data-id="2-1-1902644"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1902644"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1902644"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1902644"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1905606"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1905606"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1905606"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1905606"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1905596"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1905596"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1905596"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1905596"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-title-flex`
- `a[data-id="2-1-1905389"]`
- `.layout-bba.dn-grid.dn-grid-layout:nth-child(12)`
- `div[grouptype="Audience Engagement 1"] > .layout-abb.dn-grid.dn-grid-layout`
- `.special > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `.special > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.special > article > .meta`
- `.dn-group:nth-child(14)`
- `a[data-id="2-1-1905393"]`
- `a[data-id="2-1-1905603"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1905603"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1905603"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1905603"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Audience Engagement 2"]`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `a[data-id="6-1-yyZoIdqR"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-yyZoIdqR"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-yyZoIdqR"] > article > .meta`
- `a[data-id="2-1-1903388"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1903388"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1903388"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1903388"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-as2izcNh"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-as2izcNh"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-as2izcNh"] > article > .meta`
- `.layout-aa`
- `a[data-id="2-1-1902075"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1902075"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1902075"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1902075"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1882922"]`
- `a[data-id="2-1-1905519"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1905519"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1905519"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1905519"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-nlc_170615"]`
- `a[data-id="2-1-1892397"]`
- `a[data-id="2-1-1905415"]`
- `a[data-id="6-1-P1dq2sUx"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-P1dq2sUx"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-P1dq2sUx"] > article > .meta`
- `a[data-id="6-1-P1dq2sUx"] > article > .badge > span`
- `div[grouptype="Audience Engagement 3"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-Y6VvDis0"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-Y6VvDis0"] > article > .kicker`
- `a[data-id="6-1-Y6VvDis0"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-Y6VvDis0"] > article > .meta`
- `a[data-id="6-1-eyqJXjhi"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-eyqJXjhi"] > article > .kicker`
- `a[data-id="6-1-eyqJXjhi"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-eyqJXjhi"] > article > .meta`
- `a[data-id="6-1-eyqJXjhi"] > article > .badge > span`
- `a[data-id="6-1-0HpVmYG6"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-0HpVmYG6"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-0HpVmYG6"] > article > .meta`
- `a[data-id="6-1-0HpVmYG6"] > article > .badge > span`
