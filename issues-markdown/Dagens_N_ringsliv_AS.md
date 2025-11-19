# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2025-11-19T02:13:30.117Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 10

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `.dn-button`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 40

#### Affected Elements:

- `.investor-bar__item-difference-increased`
- `a[data-id="2-1-1902577"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1898710"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.breaking > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-TsXHuxf2"] > article > .meta > span`
- `a[data-id="2-1-1903023"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1903008"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1899659"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1899659"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1902671"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1902445"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1901895"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1900232"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1900232"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-zQzPPEZF"] > article > .meta > span`
- `a[data-id="6-1-vFz9m522"] > article > .meta > span`
- `a[data-id="2-1-1902534"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1902723"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1897308"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1897308"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1895251"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1895251"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `.dn-job-item.dn-teaser-card[target="_blank"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item.dn-teaser-card[target="_blank"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item.dn-teaser-card[target="_blank"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item.dn-teaser-card[target="_blank"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-1902679"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-nlc_170481"] > article[data-teaser_type="cpp-article-custom"] > .meta > span`
- `a[data-id="2-1-nlc_170477"] > article[data-teaser_type="cpp-article-custom"] > .meta > span`
- `a[data-id="2-1-nlc_170480"] > article[data-teaser_type="cpp-article-custom"] > .meta > span`
- `a[data-id="2-1-1899745"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1898830"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1902634"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1886814"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1886814"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1828769"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1872603"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1872603"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1902290"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
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

- `iframe[seamless=""], a[data-id="zZABv3EZ"] > figure > img`
- `iframe[seamless=""], a[data-id="1vzI4a3K"] > figure > img`
- `iframe[seamless=""], a[data-id="KzRaoos7"] > figure > img`
- `iframe[seamless=""], a[data-id="NJOxQdfl"] > figure > img`

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
- **Count:** 3

#### Affected Elements:

- `.router-link-active`
- `.button[data-v-86b57d8d=""]:nth-child(3) > a[href$="investor"][data-v-86b57d8d=""]`
- `.dn-link[href$="dngroup.com/"][rel="noopener"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 88

#### Affected Elements:

- `a[href$="investor"][data-v-86b57d8d=""] > span[data-v-86b57d8d=""]`
- `.item-decreased.item[data-v-86b57d8d=""]:nth-child(1) > .item-holder[data-v-86b57d8d=""]`
- `.item-decreased.item[data-v-86b57d8d=""]:nth-child(1) > .item-difference-holder-decreased.item-difference-holder[data-v-86b57d8d=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased > .item-holder[data-v-86b57d8d=""]`
- `.investor-bar__item-difference-increased`
- `.item-decreased.item[data-v-86b57d8d=""]:nth-child(3) > .item-holder[data-v-86b57d8d=""]`
- `.item-decreased.item[data-v-86b57d8d=""]:nth-child(3) > .item-difference-holder-decreased.item-difference-holder[data-v-86b57d8d=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-86b57d8d=""]:nth-child(4) > .item-holder[data-v-86b57d8d=""]`
- `.item-decreased.item[data-v-86b57d8d=""]:nth-child(4) > .item-difference-holder-decreased.item-difference-holder[data-v-86b57d8d=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-86b57d8d=""]:nth-child(5) > .item-holder[data-v-86b57d8d=""]`
- `.item-decreased.item[data-v-86b57d8d=""]:nth-child(5) > .item-difference-holder-decreased.item-difference-holder[data-v-86b57d8d=""] > .item-difference-decreased.item-difference.item-percentage`
- `.dn-group:nth-child(2)`
- `a[data-id="2-1-1902873"]`
- `a[data-id="6-1-TsXHuxf2"] > article > .dn-card_assets > .default[data-load="eager"][type="picture"]`
- `a[data-id="6-1-TsXHuxf2"] > article > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="6-1-TsXHuxf2"] > article > .meta`
- `.dn-group:nth-child(5)`
- `.dn-group:nth-child(6) > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="2-1-1901154"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1901154"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1901154"] > article[data-teaser_type="cpp-article-dn"] > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="2-1-1901154"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group:nth-child(10)`
- `a[data-id="2-1-1902671"]`
- `a[data-id="2-1-1902445"]`
- `a[data-id="2-1-1902798"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1902798"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1902798"] > article[data-teaser_type="cpp-article-dn"] > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="2-1-1902798"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Audience Engagement 1"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-zQzPPEZF"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-zQzPPEZF"] > article > .kicker`
- `a[data-id="6-1-zQzPPEZF"] > article > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="6-1-zQzPPEZF"] > article > .meta`
- `a[data-id="2-1-1901502"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1901502"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1901502"] > article[data-teaser_type="cpp-article-dn"] > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="2-1-1901502"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-vFz9m522"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-vFz9m522"] > article > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="6-1-vFz9m522"] > article > .meta`
- `a[data-id="6-1-vFz9m522"] > article > .badge > span`
- `a[data-id="2-1-1902534"]`
- `a[data-id="2-1-1902519"]`
- `a[data-id="2-1-1902754"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1902754"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1902754"] > article[data-teaser_type="cpp-article-dn"] > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="2-1-1902754"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1902723"]`
- `a[data-id="2-1-1897308"]`
- `a[data-id="2-1-1901289"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1901289"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1901289"] > article[data-teaser_type="cpp-article-dn"] > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="2-1-1901289"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1895251"]`
- `div[grouptype="Audience Engagement 2"] > .layout-a.dn-grid.dn-grid-layout`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `.layout-abb.dn-grid.dn-grid-layout:nth-child(20)`
- `.dn-edition-collection-top > .layout-b.dn-grid.dn-grid-layout`
- `.dn-group:nth-child(23)`
- `a[data-id="2-1-1901901"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1901901"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1901901"] > article[data-teaser_type="cpp-article-dn"] > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="2-1-1901901"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1899745"]`
- `a[data-id="2-1-1902515"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1902515"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1902515"] > article[data-teaser_type="cpp-article-dn"] > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="2-1-1902515"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-group:nth-child(26)`
- `a[data-id="2-1-1898830"]`
- `a[data-id="2-1-1902634"]`
- `.dn-image-top > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `.dn-image-top > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `.dn-image-top > article[data-teaser_type="cpp-article-dn"] > .dn-headline--subhead.title[data-v-6d246014=""]`
- `.dn-image-top > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Audience Engagement 3"] > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="6-1-6nfF6xtJ"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-6nfF6xtJ"] > article > .dn-headline--subhead.title[data-v-6d246014=""]`
- `.dn-edition-collection-top > .layout-a.dn-grid.dn-grid-layout`
- `a[data-id="6-1-Evk3wqJN"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-Evk3wqJN"] > article > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="6-1-Evk3wqJN"] > article > .meta`
- `a[data-id="6-1-hjbspRS9"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-hjbspRS9"] > article > .dn-headline--subhead.title[data-v-6d246014=""]`
- `a[data-id="6-1-hjbspRS9"] > article > .meta`
