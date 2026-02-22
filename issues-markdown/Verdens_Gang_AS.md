# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-02-22T00:42:28.397Z
**URL:** [https://www.vg.no/#](https://www.vg.no/#)
**Total Violations:** 4

## Violation Details

### ARIA roles used must conform to valid values

- **Impact:** critical
- **Description:** Ensure all elements with a role attribute use a valid value
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-roles?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 7

#### Affected Elements:

- `vg-dynamic-widget[data-name="PushBanner"]`
- `#\36 999f193cd708a234b113301 > vg-dynamic-widget[data-name="Olympics2026"][data-row="0"][data-props="[]"]`
- `#\33 qq0wmo8`
- `vg-dynamic-widget[data-name="DarkmodeOnboarding"]`
- `#\36 9992a1acd708a234bdd55d1 > vg-dynamic-widget[data-name="Olympics2026"][data-row="0"][data-props="[]"]`
- `#\36 999c418a83948a0caf32ded > vg-dynamic-widget[data-name="Olympics2026"][data-row="0"][data-props="[]"]`
- `.vg-widget-latest`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `._search_6tx2u_144 > form > input`
- `vg-rekord-klaebo-front,.year.svelte-1twkx5z:nth-child(1) > .label.svelte-1twkx5z`
- `vg-rekord-klaebo-front,.year.svelte-1twkx5z:nth-child(2) > .label.svelte-1twkx5z`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 32

#### Affected Elements:

- `#dre-6999ae1ea83948a0caecd751 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `.dice`
- `#dre-6996e4d5e510a842cabe6ea1 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-699a03a3a83948a0ca051679 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6998713ecd708a234ba92cf9 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6998713ecd708a234ba92cf9 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > img[aria-label="VG Pluss"][width="24"][height="24"]`
- `#dre-6999edc8a83948a0caff1d82 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-699950eea83948a0cad2f9f0 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-69986a3da83948a0ca944d95 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6998d410a83948a0cac24b04 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-698eecd4127e5ebe8d2b70a2 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-698eecd4127e5ebe8d2b70a2 > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > img[aria-label="VG Pluss"][width="24"][height="24"]`
- `#dre-6999a2b8cd708a234bfa25f2 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6996e95fe510a842cac1a3bc > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-69998e71cd708a234bf429d8 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6996f7cf41c6e68d70e906a8 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-6999d561cd708a234b0912a3 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-69971efd41c6e68d7008ce57 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-6999b47bcd708a234bff6a1d > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-68e4d8f7fa19cb90603a9104 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-69994921a83948a0cad13f88 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-69941e56127e5ebe8ddafcbb > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-6996ee17e510a842cac4dcda > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-69947f648ef1201b5f1dffea > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .pluss-icon.type-icon > img[aria-label="VG pluss"][width="24"][height="24"]`
- `#dre-69987412cd708a234bab4f37 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-699580b0127e5ebe8d74abeb > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-699580b0127e5ebe8d74abeb > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > img[aria-label="VG Pluss"][width="24"][height="24"]`
- `#dre-6998472fa83948a0ca75d8c5 > .article-container > a[itemprop="url"] > figure > div > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697777548b7fde6d5acdef0d > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-697777548b7fde6d5acdef0d > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > img[aria-label="VG Pluss"][width="24"][height="24"]`
- `#dre-6981c329435c3acc6094a2ec > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(1) > .icon-red[aria-label="VGTV"][width="24"]`
- `#dre-6981c329435c3acc6094a2ec > .article-container > a[itemprop="url"] > figure > div:nth-child(1) > .type-icon-wrapper > .type-icon:nth-child(2) > img[aria-label="VG Pluss"][width="24"][height="24"]`

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
