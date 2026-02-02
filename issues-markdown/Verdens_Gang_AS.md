# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-02-02T01:01:02.480Z
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
- `#\33 qq0wmo8`
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
- **Count:** 37

#### Affected Elements:

- `#dre-6979ecb3bb4f51db880f07a8 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697fcaf2bb4f51db88140c08 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697e305ebb4f51db88ab1b96 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697e305ebb4f51db88ab1b96 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > img[aria-label="VG Pluss"][width="24"][height="24"]`
- `#dre-697f9924bb4f51db8805e33f > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697f7567bb4f51db88f89e14 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697b3a96435c3acc605fdaa1 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697fbeb5435c3acc60d805da > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697f63b7435c3acc60b7d4f5 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697f2a82435c3acc60a29060 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697f453d435c3acc60ac0445 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697c8001435c3acc60e1eab3 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697c8001435c3acc60e1eab3 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > img[aria-label="VG Pluss"][width="24"][height="24"]`
- `#dre-6978872f417ee2760ad9f076 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697ee994435c3acc6090f3e8 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697f21d6bb4f51db88d89368 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .dice[aria-label="Terningkast 4"][width="20"]`
- `#dre-697f2b7abb4f51db88dbd452 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `img[aria-label="Terningkast 5"]`
- `#dre-697c8141bb4f51db881a84a4 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697a04b8435c3acc60ea3f0e > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697cb186435c3acc6007b76c > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697e7ccbbb4f51db88bde510 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .dice[aria-label="Terningkast 4"][width="20"]`
- `#dre-697e5fa5435c3acc607e3e89 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697e2bed435c3acc6070806b > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697e2208435c3acc606df0f5 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6979eb33435c3acc60d74160 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697de2f3435c3acc605d1064 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697880c5417ee2760ad51b68 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697d7766bb4f51db887f2cf9 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-69776e69417ee2760a7da062 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697877b88b7fde6d5a177601 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-697d0a5fbb4f51db886d0aaa > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697c73ddbb4f51db88108cfc > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-6908a8e0e4950177403a00de > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6908a8e0e4950177403a00de > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > img[aria-label="VG Pluss"][width="24"][height="24"]`
- `#dre-68a5bc66173cfe740c539d2d > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-68a5bc66173cfe740c539d2d > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > img[aria-label="VG Pluss"][width="24"][height="24"]`

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
