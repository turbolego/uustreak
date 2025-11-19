# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2025-11-19T02:24:22.238Z
**URL:** [https://www.vg.no/#](https://www.vg.no/#)
**Total Violations:** 4

## Violation Details

### ARIA roles used must conform to valid values

- **Impact:** critical
- **Description:** Ensure all elements with a role attribute use a valid value
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-roles?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 5

#### Affected Elements:

- `vg-dynamic-widget[data-name="PushBanner"]`
- `vg-dynamic-widget[data-name="Snakkis"]`
- `#xjkdasx9`
- `vg-dynamic-widget[data-name="DarkmodeOnboarding"]`
- `.vg-widget-latest`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `._search_6tx2u_144 > form > input`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 36

#### Affected Elements:

- `#dre-6913609765eea81bca368f3b > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-691ae8c447574a6b89e85ddb > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-691ae7b147574a6b89e78d3f > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-691cd94047574a6b89be44b7 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-691b2b6b47574a6b8916fe4d > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-691c8dbc557fb72f734558c4 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-69143a2f65eea81bca6a63b0 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-69143a2f65eea81bca6a63b0 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-691c347d557fb72f7309780b > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-691c58d3557fb72f7321eb23 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-691c72ff557fb72f733460a7 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6916e8a947574a6b89ce10d6 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69171611557fb72f73905306 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-69147bf821ec687e19f1a7a4 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-691c38cf47574a6b896a6f31 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-691c212a557fb72f73fc3b90 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-69159ff221ec687e19534928 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69175a22557fb72f73bae1d4 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-69175a22557fb72f73bae1d4 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-691b88b447574a6b893b8cbf > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6915de6f557fb72f73211154 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6919b4eb557fb72f7337c61e > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-691addb347574a6b89e112a8 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-691b4f7947574a6b892916f1 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-691ae62f47574a6b89e68ff0 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-691b6ee447574a6b893421be > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6917129f47574a6b89ea37ea > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-691af3f347574a6b89f0a6ef > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-69147513c3588d765146053e > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69182a5747574a6b893ff72a > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-691b00e947574a6b89f93df4 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-691323fe65eea81bca10e5bf > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-68a5bc66173cfe740c539d2d > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-68a5bc66173cfe740c539d2d > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-689f215a130d3f9e64088b1c > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-689f215a130d3f9e64088b1c > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`

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
