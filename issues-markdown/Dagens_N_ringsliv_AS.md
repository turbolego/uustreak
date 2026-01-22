# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-01-22T00:43:04.639Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 37

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-1931856"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1931766"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1929833"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1923169"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1923169"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-NLSf0FRk"] > article > .meta > span`
- `a[data-id="2-1-1931399"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930574"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1931779"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1931315"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930144"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1926099"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1926099"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-R0nq0eVr"] > article > .meta > span`
- `a[data-id="6-1-ppUH1ZTM"] > article > .meta > span`
- `a[data-id="2-1-1930513"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1929083"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1929083"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-1917821"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1917821"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1929279"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930522"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1904974"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1904974"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1931395"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1925191"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1925191"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1925663"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1812732"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1812732"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-1oYswNhM"] > article > .meta > span`

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

- `iframe[seamless=""], a[data-id="DVSqIs76"] > figure > img`
- `iframe[seamless=""], a[data-id="DhihJ3Dh"] > figure > img`
- `iframe[seamless=""], a[data-id="DWJGzVsB"] > figure > img`
- `iframe[seamless=""], a[data-id="JRoVY4JL"] > figure > img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `a[data-id="6-1-xqFQV3sY"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"] > .ratio-16x9 > img[fetchpriority="auto"][loading="lazy"][decoding="async"]`

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
- **Count:** 78

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
- `.dn-group:nth-child(2)`
- `a[data-id="2-1-1923169"]`
- `a[data-id="6-1-NLSf0FRk"] > article > .dn-card_assets > .default[data-load="eager"][type="picture"]`
- `a[data-id="6-1-NLSf0FRk"] > article > .kicker`
- `a[data-id="6-1-NLSf0FRk"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-NLSf0FRk"] > article > .meta`
- `a[data-id="6-1-NLSf0FRk"] > article > .badge > span`
- `a[data-id="2-1-1932004"]`
- `a[data-id="2-1-1930072"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1930072"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1930072"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1930072"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Notislinje"]`
- `.dn-edition-collection-top > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="2-1-1930040"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1930040"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1930040"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1930040"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1931315"]`
- `a[data-id="2-1-1931928"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1931928"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1931928"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1931928"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Audience Engagement 1"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-R0nq0eVr"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-R0nq0eVr"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-R0nq0eVr"] > article > .meta`
- `a[data-id="6-1-R0nq0eVr"] > article > .badge > span`
- `a[data-id="2-1-1931610"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1931610"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1931610"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1931610"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-ppUH1ZTM"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-ppUH1ZTM"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-ppUH1ZTM"] > article > .meta`
- `a[data-id="6-1-ppUH1ZTM"] > article > .badge > span`
- `a[data-id="2-1-1930513"]`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(14)`
- `.brand.dn-group > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-QsSYoJSc"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-QsSYoJSc"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-QsSYoJSc"] > article > .meta`
- `a[data-id="6-1-QsSYoJSc"] > article > .badge > span`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `div[grouptype="Audience Engagement 2"]`
- `.dn-group:nth-child(20)`
- `.dn-group-header`
- `a[data-id="6-1-fRxA1KKl"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-fRxA1KKl"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-fRxA1KKl"] > article > .meta`
- `a[data-id="6-1-fRxA1KKl"] > article > .badge > span`
- `a[data-id="2-1-1931483"]`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(23)`
- `div[grouptype="Audience Engagement 3"] > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="6-1-xqFQV3sY"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-xqFQV3sY"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-eVCDPFF3"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-eVCDPFF3"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-eVCDPFF3"] > article > .meta`
- `a[data-id="6-1-eVCDPFF3"] > article > .badge > span`
- `a[data-id="6-1-1oYswNhM"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-1oYswNhM"] > article > .kicker`
- `a[data-id="6-1-1oYswNhM"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-1oYswNhM"] > article > .meta`
- `a[data-id="6-1-1oYswNhM"] > article > .badge > span`
