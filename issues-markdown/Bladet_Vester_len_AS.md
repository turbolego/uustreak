# WCAG Violations Report for Bladet Vesterålen AS

**Timestamp:** 2026-09-02T07:00:24.538Z
**URL:** [https://www.blv.no/](https://www.blv.no/)
**Total Violations:** 8

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cbb`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 6

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiuxeb005f1mebt9cvm7fw, .play`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiuxeb005f1mebt9cvm7fw, .audio`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiutle005d1mebsxximcnz, .play`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiutle005d1mebsxximcnz, .audio`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiuved003m1nhl0e6hym1r, .play`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiuved003m1nhl0e6hym1r, .audio`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 4

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiuxeb005f1mebt9cvm7fw`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiutle005d1mebsxximcnz`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiuved003m1nhl0e6hym1r`
- `#eaframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiutle005d1mebsxximcnz, img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `brick-carousel-v3[data-slides="8"] > .carousel[aria-label="Innholdskarusell"][role="region"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `#www\.blv\.no\/toppbanner_1 > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `img[height="80"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1-label`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiuxeb005f1mebt9cvm7fw, video`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiutle005d1mebsxximcnz, video`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiutle005d1mebsxximcnz, img`
- `#google_ads_iframe_\/56257416\/www\.blv\.no\/toppbanner_0, #cmtbiuved003m1nhl0e6hym1r, video`
