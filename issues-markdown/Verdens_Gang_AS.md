# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-03-20T00:47:24.839Z
**URL:** [https://www.vg.no/#](https://www.vg.no/#)
**Total Violations:** 5

## Violation Details

### ARIA roles used must conform to valid values

- **Impact:** critical
- **Description:** Ensure all elements with a role attribute use a valid value
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-roles?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 6

#### Affected Elements:

- `vg-dynamic-widget[data-name="PushBanner"]`
- `vg-dynamic-widget[data-name="Snakkis"]`
- `vg-dynamic-widget[data-name="DarkmodeOnboarding"]`
- `#nnxp3dxu`
- `#qcskb7a5`
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
- **Count:** 38

#### Affected Elements:

- `#dre-69bc6ba7c1e4f63cd00d2303 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69bc666a8e67602c4dd6ea87 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69b7f6a58aa96308caa9f36f > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69ba62051ff03e62b81b8a2e > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69ba62051ff03e62b81b8a2e > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-69bc47138e67602c4dcc8fa2 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69bbe294c1e4f63cd0c2b89a > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69bbe294c1e4f63cd0c2b89a > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-69bba861900a153e5b4521b7 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69bc1d7dc1e4f63cd0f0675a > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69bc123c8e67602c4db4ef00 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69ae89f9c4d42906eba6949a > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69bbf26e8e67602c4d9c47f8 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69bb4a39900a153e5b30e2a5 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69bbeb05c1e4f63cd0c9e757 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69b94d0da2db70a83bd24be3 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69bbcdc98e67602c4d7e9a93 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69bbb096900a153e5b4a9b5a > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69bbb096900a153e5b4a9b5a > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-69bbb6a7900a153e5b4eeae5 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69b7bd8c8aa96308ca790926 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69bbc3cc3e46f53cc64dc171 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69bbb4253e46f53cc642390f > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69bbb4253e46f53cc642390f > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-69bb74f53e46f53cc62a9a23 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69b906bc8aa96308ca066b8b > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69bb0861900a153e5b246d6f > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69b1795ec0bbcdfa5243f47a > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69bba5d93e46f53cc63903e3 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69b7d7438aa96308ca8ef80b > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `img[aria-label="Terningkast 5"]`
- `#dre-69badad6900a153e5b14bf31 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69b3d8b0c0bbcdfa5233a7d4 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `img[aria-label="Terningkast 3"]`
- `#dre-6486fde5a70da023ca7e0f2e > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6486fde5a70da023ca7e0f2e > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-678a70cf29eec5f321694a58 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-678a70cf29eec5f321694a58 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`

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
