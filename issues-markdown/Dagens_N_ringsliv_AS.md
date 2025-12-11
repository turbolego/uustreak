# WCAG Violations Report for Dagens Næringsliv AS

**Timestamp:** 2025-12-11T01:00:26.656Z
**URL:** [https://www.dn.no/](https://www.dn.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 37

#### Affected Elements:

- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-1914756"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `.breaking > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-7YbHUtMN"] > article > .meta > span`
- `a[data-id="2-1-1914374"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1912530"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1912530"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1914045"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="6-1-6yoHtWM7"] > article > .meta > span`
- `a[data-id="2-1-1913551"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1911043"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1914557"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1909817"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1909817"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-1oYswNhM"] > article > .meta > span`
- `a[data-id="2-1-1902449"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1902449"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1914843"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1907825"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1907825"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `article[data-teaser_type="cpp-article-custom"] > .meta > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(4) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(5) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(6) > article > .kicker > span`
- `.dn-job-item[target="_blank"][rel="noopener"]:nth-child(7) > article > .kicker > span`
- `a[data-id="2-1-1907961"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1907961"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="2-1-1914289"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1914218"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1914291"] > article[data-teaser_type="cpp-article-dn"] > .meta > span`
- `a[data-id="2-1-1904051"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(1)`
- `a[data-id="2-1-1904051"] > article[data-teaser_type="cpp-article-dn"] > .meta > span:nth-child(2)`
- `a[data-id="6-1-vt2H33N5"] > article > .meta > span`
- `a[data-id="6-1-MOvHDU4H"] > article > .meta > span`
- `a[data-id="6-1-YSnFB3Kq"] > article > .meta > span`

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

- `iframe[seamless=""], a[data-id="yEYFQw9W"] > figure > img`
- `iframe[seamless=""], a[data-id="goKwzw3A"] > figure > img`
- `iframe[seamless=""], a[data-id="6yoHtWM7"] > figure > img`
- `iframe[seamless=""], a[data-id="6hq8zoAe"] > figure > img`

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
- **Count:** 110

#### Affected Elements:

- `a[href$="investor"][data-v-a56f3944=""] > span[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(1) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(2) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-holder[data-v-a56f3944=""]`
- `.item-decreased.item[data-v-a56f3944=""]:nth-child(3) > .item-difference-holder-decreased.item-difference-holder[data-v-a56f3944=""] > .item-difference-decreased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(4) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(4) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-holder[data-v-a56f3944=""]`
- `.item-increased.item[data-v-a56f3944=""]:nth-child(5) > .item-difference-holder-increased.item-difference-holder[data-v-a56f3944=""] > .investor-bar__item-difference-increased.item-difference.item-percentage`
- `a[data-id="2-1-1914910"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1914910"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1914910"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1914910"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1914755"]`
- `a[data-id="2-1-1914756"]`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(3)`
- `.breaking`
- `figure[originalwidth="5998"]`
- `a[data-id="6-1-7YbHUtMN"] > article > .kicker`
- `a[data-id="6-1-7YbHUtMN"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-7YbHUtMN"] > article > .meta`
- `a[data-id="6-1-7YbHUtMN"] > article > .badge > span`
- `a[data-id="2-1-1914374"]`
- `a[data-id="2-1-1914512"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1914512"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1914512"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1914512"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1912530"]`
- `a[data-id="2-1-1914045"]`
- `a[data-id="6-1-6yoHtWM7"] > article > .dn-card_assets > figure[originalheight="2845"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-6yoHtWM7"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-6yoHtWM7"] > article > .meta`
- `a[data-id="2-1-1913551"]`
- `a[data-id="2-1-1911116"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1911116"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1911116"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1911116"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1911043"]`
- `a[data-id="2-1-1914557"]`
- `a[data-id="2-1-1877136"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1877136"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1877136"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1877136"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1909817"]`
- `a[data-id="2-1-1911599"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1911599"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1911599"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1911599"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1912811"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1912811"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1912811"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1912811"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-1oYswNhM"] > article > .dn-card_assets > figure[originalheight="1067"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-1oYswNhM"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-1oYswNhM"] > article > .meta`
- `a[data-id="6-1-1oYswNhM"] > article > .badge > span`
- `.dn-group:nth-child(14)`
- `.dn-group:nth-child(16)`
- `.layout-abb.dn-grid.dn-grid-layout:nth-child(17)`
- `a[href$="dnjobb.no/"] > span`
- `.dn-job-button`
- `.dn-job-carousel`
- `.dn-group:nth-child(19)`
- `a[data-id="2-1-1907961"]`
- `a[data-id="2-1-1913036"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1913036"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1913036"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1913036"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1912490"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1912490"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1912490"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1912490"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `div[grouptype="Audience Engagement 2"] > .layout-b.dn-grid.dn-grid-layout`
- `a[data-id="2-1-1914289"]`
- `a[data-id="2-1-1914612"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1914612"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1914612"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1914612"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1914218"]`
- `.layout-b.dn-grid.dn-grid-layout:nth-child(23)`
- `a[data-id="2-1-1904051"]`
- `a[data-id="2-1-1913346"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1913346"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1913346"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1913346"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="2-1-1909769"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1909769"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1909769"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1909769"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-vt2H33N5"] > article > .dn-card_assets > figure[originalheight="2845"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-vt2H33N5"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-vt2H33N5"] > article > .meta`
- `a[data-id="2-1-1913978"] > article[data-teaser_type="cpp-article-dn"] > .dn-card_assets`
- `a[data-id="2-1-1913978"] > article[data-teaser_type="cpp-article-dn"] > .kicker > span:nth-child(2)`
- `a[data-id="2-1-1913978"] > article[data-teaser_type="cpp-article-dn"] > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="2-1-1913978"] > article[data-teaser_type="cpp-article-dn"] > .meta`
- `a[data-id="6-1-7zumE44a"] > article > .dn-card_assets > figure[originalheight="900"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-7zumE44a"] > article > .kicker`
- `a[data-id="6-1-7zumE44a"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-7zumE44a"] > article > .meta`
- `a[data-id="6-1-7zumE44a"] > article > .badge > span`
- `a[data-id="6-1-MOvHDU4H"] > article > .dn-card_assets > figure[originalheight="2845"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-MOvHDU4H"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-MOvHDU4H"] > article > .meta`
- `a[data-id="6-1-YSnFB3Kq"] > article > .dn-card_assets > figure[originalheight="900"][originalwidth="1600"][type="picture"]`
- `a[data-id="6-1-YSnFB3Kq"] > article > .title.dn-headline--subhead[data-v-6d246014=""]`
- `a[data-id="6-1-YSnFB3Kq"] > article > .meta`
- `a[data-id="6-1-YSnFB3Kq"] > article > .badge > span`
