# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2025-11-04T00:34:10.028Z
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
- **Count:** 33

#### Affected Elements:

- `#dre-6908ffee08f9a47e54d709fa > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6904961c08f9a47e547ff1f6 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6907538808f9a47e5433f59c > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6907538808f9a47e5433f59c > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-69090432e49501774062d225 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-68d290ef6974e67e7a777ffc > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6908c67808f9a47e54c2d463 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6908c67808f9a47e54c2d463 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > .icon-square[aria-label="VG Pluss"][width="24"]`
- `#dre-6908cf2e08f9a47e54c66d7e > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69037990e495017740b4c199 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6908ee29e4950177405bffa1 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6908bc18e495017740476479 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-690860dd08f9a47e5475f84b > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6908a43208f9a47e54ab4268 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6907ca70e495017740e47ab6 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6901ceb908f9a47e546b49dc > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69034765e495017740947106 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6908850a08f9a47e5493bd49 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-69049ec5e495017740133d3e > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-6907640108f9a47e5438de59 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6908671308f9a47e547a5a2c > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-68a60c4fd0393d893281e4ee > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-6903361b08f9a47e54fd1106 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69076af2e495017740c77070 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-690354f708f9a47e541060c7 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-69060c2808f9a47e54efd232 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-68ff80a121c8ff22d490439d > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > .icon-square[aria-label="VG pluss"][width="24"]`
- `#dre-690667ab08f9a47e5408f682 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
- `#dre-690634e1e4950177408808a3 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red.icon-square[aria-label="VGTV"]`
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
