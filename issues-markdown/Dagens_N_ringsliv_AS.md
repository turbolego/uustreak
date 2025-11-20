# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2025-11-20T00:35:34.397Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 38

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="6-1-dy9ECxhQ"] > article > .meta > span`
- `a[data-id="2-1-1903714"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1898926"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1890140"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1890140"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1902750"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-TfphwH8T"] > article > .meta > span`
- `a[data-id="2-1-1903387"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1902686"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1903233"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1903148"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-1901895"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1895251"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1895251"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1897308"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1897308"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1903295"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1901845"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1901845"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-0HpVmYG6"] > article > .meta > span`
- `a[data-id="2-1-1903136"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1901962"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1903049"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1902577"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1901900"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1872603"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1872603"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-Y6VvDis0"] > article > .meta > span`
- `a[data-id="2-1-1898710"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-Evk3wqJN"] > article > .meta > span`

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

- `iframe[seamless=""], a[data-id="Y6VvDis0"] > figure > img`
- `iframe[seamless=""], a[data-id="TsXHuxf2"] > figure > img`
- `iframe[seamless=""], a[data-id="zQzPPEZF"] > figure > img`
- `iframe[seamless=""], a[data-id="zZABv3EZ"] > figure > img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `a[data-id="6-1-6nfF6xtJ"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"] > .ratio-16x9 > img[fetchpriority="auto"][loading="lazy"][decoding="async"]`

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
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.dn-group-header`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1903727"]`
- `a[data-id="2-1-1903573"]`
- `.brand.dn-group > .layout-bb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-dy9ECxhQ"] > article > .dn-card_assets > .default[data-load="eager"][type="picture"]`
- `a[data-id="6-1-dy9ECxhQ"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-dy9ECxhQ"] > article > .meta`
- `a[data-id="6-1-dy9ECxhQ"] > article > .badge > span`
- `a[data-id="2-1-1903714"]`
- `a[data-id="2-1-1898926"]`
- `.dn-group:nth-child(3) > .layout-b.dn-grid.dn-grid-layout`
- `a[data-id="2-1-1900741"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1900741"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1900741"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1900741"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1894915"]`
- `a[data-id="2-1-1902750"]`
- `.dn-group:nth-child(6)`
- `a[data-id="6-1-TfphwH8T"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-TfphwH8T"] > article > .kicker`
- `a[data-id="6-1-TfphwH8T"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-TfphwH8T"] > article > .meta`
- `a[data-id="2-1-1903387"]`
- `a[data-id="2-1-1902686"]`
- `.dn-image-format-1x1`
- `a[data-id="2-1-1902958"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1902958"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1902958"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1902958"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1897136"]`
- `a[data-id="6-1-6nfF6xtJ"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-6nfF6xtJ"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.layout-bb.dn-grid.dn-grid-layout:nth-child(13)`
- `.dn-group:nth-child(14)`
- `a[data-id="2-1-1903148"]`
- `a[data-id="2-1-1902678"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1902678"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1902678"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1902678"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `div[grouptype="Audience Engagement 2"]`
- `a[data-id="2-1-1903295"]`
- `a[data-id="2-1-1901845"]`
- `a[data-id="6-1-0HpVmYG6"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-0HpVmYG6"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-0HpVmYG6"] > article > .meta`
- `a[data-id="6-1-0HpVmYG6"] > article > .badge > span`
- `.layout-ba`
- `.layout-abb.dn-grid.dn-grid-layout:nth-child(23)`
- `.dn-group:nth-child(24)`
- `.layout-bba.dn-grid.dn-grid-layout:nth-child(26)`
- `a[data-id="2-1-1886814"]`
- `a[data-id="2-1-1901289"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1901289"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1901289"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1901289"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1872603"]`
- `a[data-id="6-1-Y6VvDis0"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-Y6VvDis0"] > article > .kicker`
- `a[data-id="6-1-Y6VvDis0"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-Y6VvDis0"] > article > .meta`
- `.dn-edition-collection-top > .layout-b.dn-grid.dn-grid-layout`
- `a[data-id="6-1-4amPKiVB"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-4amPKiVB"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-4amPKiVB"] > article > .meta`
- `a[data-id="6-1-4amPKiVB"] > article > .badge > span`
- `a[data-id="6-1-Evk3wqJN"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-Evk3wqJN"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-Evk3wqJN"] > article > .meta`
