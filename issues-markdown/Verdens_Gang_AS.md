# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-01-01T00:41:11.897Z
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
- `vg-dynamic-widget[data-name="DarkmodeOnboarding"]`
- `#\33 qq0wmo8`
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
- **Count:** 32

#### Affected Elements:

- `#dre-69558c7f9f346d81713b59f8 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69524ee5123fd71a1f330a90 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-695596c9123fd71a1f3559ce > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69524912123fd71a1f2ef32f > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69551005123fd71a1f169dd6 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-695243a29f346d81713366fe > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-695290e49f346d8171675f2b > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-695290e49f346d8171675f2b > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-6954fdaf9f346d817119304a > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-694d7a819f346d817135332a > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-694274b29f346d8171d7ee35 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-695247fa9f346d817136536c > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6955165b9f346d81711ffcb3 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69544f51123fd71a1ff044c9 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-694a7f6b123fd71a1f8c4ae1 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6952406a123fd71a1f2973bc > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6953cbf29f346d8171c93295 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-695242a09f346d817132a2ec > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6954401c123fd71a1fed0ecd > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-695415b79f346d8171e93d8d > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6953931f9f346d8171a968df > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69522b7d9f346d8171260df7 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6953a874123fd71a1fadfdf5 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-694564ff123fd71a1f22647a > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-694a72809f346d81718c4091 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-694da0c7123fd71a1f35addb > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6952a21c9f346d81716fced1 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-694d7a819f346d8171353328 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-68a5bc66173cfe740c539d2d > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-68a5bc66173cfe740c539d2d > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-689f215a130d3f9e64088b1c > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
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
