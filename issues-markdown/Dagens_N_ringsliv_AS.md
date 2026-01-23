# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-01-23T00:39:37.551Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 40

#### Affected Elements:

- `.investor-bar__item-difference-increased`
- `a[data-id="2-1-1930233"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-Llk5kTiY"] > article > .meta > span`
- `a[data-id="2-1-1927661"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1927661"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1929383"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930626"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1930626"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-Okm7T5o2"] > article > .meta > span`
- `a[data-id="6-1-FHrD4YXl"] > article > .meta > span`
- `a[data-id="2-1-1931737"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1932204"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1932277"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1932243"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930709"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1923169"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1923169"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-sjtF6Deg"] > article > .meta > span`
- `a[data-id="2-1-1932248"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930143"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1930143"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1929226"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1929083"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1929083"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1931395"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930513"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1930144"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(3) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `a[data-id="2-1-1932315"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1929373"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1932186"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1917821"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1917821"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1930522"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1812732"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1812732"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-1oYswNhM"] > article > .meta > span`

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
- **Count:** 91

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased > .item-holder[data-v-a56f3944=""]`
- `.investor-bar__item-difference-increased`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `a[data-id="2-1-1930233"]`
- `a[data-id="2-1-1932788"]`
- `a[data-id="2-1-1931642"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1931642"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1931642"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1931642"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-Llk5kTiY"] > article > .dn-card_assets > .default[data-load="eager"][type="picture"]`
- `a[data-id="6-1-Llk5kTiY"] > article > .kicker`
- `a[data-id="6-1-Llk5kTiY"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-Llk5kTiY"] > article > .meta`
- `a[data-id="6-1-Llk5kTiY"] > article > .badge > span`
- `a[data-id="2-1-1927661"]`
- `a[data-id="2-1-1929383"]`
- `a[data-id="2-1-1930626"]`
- `a[data-id="2-1-1932453"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1932453"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1932453"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1932453"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-Okm7T5o2"] > article > .dn-card_assets > .default[data-load="eager"][type="picture"]`
- `a[data-id="6-1-Okm7T5o2"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-Okm7T5o2"] > article > .meta`
- `a[data-id="6-1-Okm7T5o2"] > article > .badge > span`
- `a[data-id="6-1-FHrD4YXl"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-FHrD4YXl"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-FHrD4YXl"] > article > .meta`
- `a[data-id="6-1-FHrD4YXl"] > article > .badge > span`
- `a[data-id="2-1-nlc_172271"]`
- `a[data-id="2-1-1931737"]`
- `a[data-id="2-1-1932423"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1932423"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1932423"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1932423"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.brand.dn-group > .dn-group-header`
- `a[data-id="6-1-NLSf0FRk"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-NLSf0FRk"] > article > .kicker`
- `a[data-id="6-1-NLSf0FRk"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-NLSf0FRk"] > article > .meta`
- `a[data-id="6-1-NLSf0FRk"] > article > .badge > span`
- `a[data-id="6-1-BSzJ5Xd3"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-BSzJ5Xd3"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-BSzJ5Xd3"] > article > .meta`
- `a[data-id="6-1-BSzJ5Xd3"] > article > .badge > span`
- `.dn-group:nth-child(10)`
- `div[grouptype="Audience Engagement 1"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-sjtF6Deg"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-sjtF6Deg"] > article > .kicker`
- `a[data-id="6-1-sjtF6Deg"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-sjtF6Deg"] > article > .meta`
- `a[data-id="6-1-sjtF6Deg"] > article > .badge > span`
- `.dn-group:nth-child(13)`
- `.dn-group:nth-child(14)`
- `div[grouptype="Audience Engagement 2"]`
- `.brand-secondary.dn-group`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `.dn-group:nth-child(19)`
- `.dn-image-format-2x1 > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `.dn-image-format-2x1 > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `.dn-image-format-2x1 > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `.dn-image-format-2x1 > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1932315"]`
- `a[data-id="2-1-1929373"]`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(21)`
- `div[grouptype="Audience Engagement 3"] > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="6-1-xqFQV3sY"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-xqFQV3sY"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1930655"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1930655"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1930655"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1930655"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-eVCDPFF3"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-eVCDPFF3"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-eVCDPFF3"] > article > .meta`
- `a[data-id="6-1-eVCDPFF3"] > article > .badge > span`
- `a[data-id="6-1-1oYswNhM"] > article > .dn-card_assets > .default[type="picture"][data-load="lazy"]`
- `a[data-id="6-1-1oYswNhM"] > article > .kicker`
- `a[data-id="6-1-1oYswNhM"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-1oYswNhM"] > article > .meta`
- `a[data-id="6-1-1oYswNhM"] > article > .badge > span`
