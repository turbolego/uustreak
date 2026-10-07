# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2026-10-07T08:50:49.852Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 36

#### Affected Elements:

- `.investor-bar__item-difference-increased`
- `a[data-id="2-1-2054694"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2050111"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2051188"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-btYCaIaS"] > article[data-teaser_type="cpp-video-common"] > .meta > span`
- `a[data-id="2-1-2051608"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2051152"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-q8hiY6lq"] > article[data-teaser_type="cpp-video-common"] > .meta > span`
- `a[data-id="2-1-2054627"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2054635"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2048922"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2048922"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2054105"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2054488"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2002536"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2002536"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `.dn-image-format-1x1 > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2051853"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2051853"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(2) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(3) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `a[data-id="2-1-2050770"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2054583"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2054469"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-ZUhLiU2D"] > article[data-teaser_type="cpp-video-common"] > .meta > span`
- `a[data-id="2-1-2054492"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2054239"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2053178"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-2050761"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-2050761"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-2046902"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-Dshb779b"] > article[data-teaser_type="cpp-video-common"] > .meta > span`
- `a[data-id="6-1-6fJDR8oN"] > article[data-teaser_type="cpp-video-common"] > .meta > span`

### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer-copyright`

### Document should not have more than one contentinfo landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one contentinfo landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-contentinfo?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.atlas-footer`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.button[data-v-a56f3944=""]:nth-child(3) > a[href$="investor"][data-v-a56f3944=""]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 96

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased > .item-holder[data-v-a56f3944=""]`
- `.investor-bar__item-difference-increased`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `a[data-id="6-1-yxumAM2E"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-yxumAM2E"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-yxumAM2E"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `.brand[disallowadsbelow="false"][allowads="false"]:nth-child(3) > .dn-group-header`
- `.brand[disallowadsbelow="false"][allowads="false"]:nth-child(3) > .layout-a\+.dn-grid.dn-grid-layout`
- `a[data-id="2-1-2054724"]`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `.opinion-font > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2054665"]`
- `a[data-id="6-1-EOejgIXA"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-EOejgIXA"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-EOejgIXA"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-EOejgIXA"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `a[data-id="2-1-2054827"]`
- `a[data-id="2-1-2054690"]`
- `.layout-a`
- `.dn-group[disallowadsbelow="true"][allowads="false"]:nth-child(5) > .layout-bba.dn-grid.dn-grid-layout`
- `a[data-id="6-1-btYCaIaS"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-btYCaIaS"] > article[data-teaser_type="cpp-video-common"] > .kicker`
- `a[data-id="6-1-btYCaIaS"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-btYCaIaS"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-btYCaIaS"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `.dn-group[disallowadsbelow="true"][allowads="false"]:nth-child(6)`
- `.brand[disallowadsbelow="false"][allowads="false"]:nth-child(7) > .dn-group-header`
- `a[data-id="2-1-2054654"]`
- `a[data-id="6-1-9obxYFAA"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-9obxYFAA"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-9obxYFAA"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-9obxYFAA"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `a[data-id="2-1-nlc_179335"]`
- `.brand[disallowadsbelow="false"][allowads="false"]:nth-child(7) > .layout-bb.dn-grid.dn-grid-layout`
- `div[grouptype="Audience Engagement 1"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-q8hiY6lq"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-q8hiY6lq"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-q8hiY6lq"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-q8hiY6lq"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `.dn-group[disallowadsbelow="false"][allowads="false"]:nth-child(13)`
- `dn-video-carousel,.carousel__header`
- `a[data-id="2-1-2054105"]`
- `a[data-id="2-1-2053779"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2053779"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2053779"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2053779"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-2054488"]`
- `a[data-id="2-1-2002536"]`
- `a[data-id="2-1-2050890"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2050890"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2050890"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2050890"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `.dn-image-format-1x1`
- `div[grouptype="Audience Engagement 2"] > .layout-b.dn-grid.dn-grid-layout`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `.dn-edition-collection-top > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-ZUhLiU2D"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-ZUhLiU2D"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-ZUhLiU2D"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-ZUhLiU2D"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `a[data-id="2-1-2054492"]`
- `a[data-id="2-1-2054239"]`
- `a[data-id="2-1-2053178"]`
- `a[data-id="2-1-2054152"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-2054152"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-2054152"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="2-1-2054152"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Audience Engagement 3"] > .layout-abb.dn-grid.dn-grid-layout`
- `a[data-id="6-1-Dshb779b"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-Dshb779b"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-Dshb779b"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-Dshb779b"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `a[data-id="6-1-CWOGFNv2"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-CWOGFNv2"] > article[data-teaser_type="cpp-video-common"] > .kicker`
- `a[data-id="6-1-CWOGFNv2"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-CWOGFNv2"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-CWOGFNv2"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `a[data-id="6-1-6fJDR8oN"] > article[data-teaser_type="cpp-video-common"] > .dn-card_assets`
- `a[data-id="6-1-6fJDR8oN"] > article[data-teaser_type="cpp-video-common"] > .kicker`
- `a[data-id="6-1-6fJDR8oN"] > article[data-teaser_type="cpp-video-common"] > .title.dn-headline--subhead[data-v-95b1487b=""]`
- `a[data-id="6-1-6fJDR8oN"] > article[data-teaser_type="cpp-video-common"] > .meta`
- `a[data-id="6-1-6fJDR8oN"] > article[data-teaser_type="cpp-video-common"] > .badge > span`
- `.readmore > span`
- `#onetrust-banner-sdk`
