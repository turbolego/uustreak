# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-02-08T09:13:13.200Z
**URL:** [https://www.vg.no/#](https://www.vg.no/#)
**Total Violations:** 5

## Violation Details

### ARIA roles used must conform to valid values

- **Impact:** critical
- **Description:** Ensure all elements with a role attribute use a valid value
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-roles?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 11

#### Affected Elements:

- `vg-dynamic-widget[data-name="PushBanner"]`
- `vg-dynamic-widget[data-name="Snakkis"]`
- `#\36 987bdc925d3b03608dbbe0f > vg-dynamic-widget[data-name="Olympics2026"][data-preload="true"][data-row="0"]`
- `#\33 qq0wmo8`
- `vg-dynamic-widget[data-name="DarkmodeOnboarding"]`
- `#\36 987630625d3b03608c6f5e1 > vg-dynamic-widget[data-name="Olympics2026"][data-preload="true"][data-row="0"]`
- `#\36 987924f46f43313af0a9dfe > vg-dynamic-widget[data-name="Olympics2026"][data-preload="true"][data-row="0"]`
- `#\36 9872b8346f43313afef005d > vg-dynamic-widget[data-name="Olympics2026"][data-preload="true"][data-row="0"]`
- `#\36 986c96125d3b03608a06b99 > vg-dynamic-widget[data-name="Olympics2026"][data-preload="true"][data-row="0"]`
- `#\36 986250225d3b0360881a993 > vg-dynamic-widget[data-name="Olympics2026"][data-preload="true"][data-row="0"]`
- `.vg-widget-latest`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `._search_6tx2u_144 > form > input`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `._nav_6tx2u_14`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 34

#### Affected Elements:

- `#dre-6988065c46f43313af1aee70 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-698460aa25d3b03608a3d016 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69879a9046f43313af0cb67a > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-698302d046f43313af36c47b > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69832f3546f43313af6283c2 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-698496f025d3b03608cfe2ce > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6978982e8b7fde6d5a2ec770 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `.dice`
- `#dre-69874ac725d3b03608c01f2b > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6984712f46f43313afe57c9e > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6984712f46f43313afe57c9e > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-6983169f25d3b036081bd8a0 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6981de95bb4f51db88e444b6 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6987284525d3b03608b6cccc > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6980a3bb435c3acc6031cc1b > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69873f2246f43313aff4a75a > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6985bc7925d3b03608378e9c > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6986370725d3b036088809ff > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6985646046f43313af457774 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6986c43b25d3b036089fc6fb > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6985cb0125d3b03608422a01 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6985fe2225d3b036086d9f05 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6984748625d3b03608b2c0b5 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6986e85125d3b03608a6adcf > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697c8001435c3acc60e1eab3 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697c8001435c3acc60e1eab3 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-6985d20225d3b0360847a703 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-698090e6bb4f51db885e95b6 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69863ff446f43313afc1e811 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697e23aa435c3acc606e6d08 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697777548b7fde6d5acdef0d > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697777548b7fde6d5acdef0d > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-6981c329435c3acc6094a2ec > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6981c329435c3acc6094a2ec > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `.sch-datacontroller--subheader > .sch-datacontroller__wrapper > .sch-datacontroller__content > .sch-datacontroller__text`
- `h1`
- `.comics`
- `.sch-datacontroller--permanent > .sch-datacontroller__wrapper > .sch-datacontroller__content > .sch-datacontroller__text`
