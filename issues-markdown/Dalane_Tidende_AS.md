# WCAG Violations Report for Dalane Tidende AS

**Timestamp:** 2026-09-19T19:54:39.179Z
**URL:** [https://www.dalane-tidende.no/](https://www.dalane-tidende.no/)
**Total Violations:** 5

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #cbb`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 5

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #toppbanner > div > iframe[scrolling="no"][src$="about:blank"]`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #wallpaper > div > iframe[scrolling="no"][src$="about:blank"]`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, iframe:nth-child(17)`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, iframe:nth-child(18)`
- `#eaframe`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #wallpaper > div > iframe[scrolling="no"][src$="about:blank"], #j`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #wallpaper > div > iframe[scrolling="no"][src$="about:blank"], #e`
- `brick-carousel-v3[data-slides="6"] > .carousel[role="region"][aria-label="Innholdskarusell"]`

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
- **Count:** 13

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1-label`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #toppbanner > div > iframe[scrolling="no"][src$="about:blank"], #a`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #toppbanner > div > iframe[scrolling="no"][src$="about:blank"], #b`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #toppbanner > div > iframe[scrolling="no"][src$="about:blank"], #h`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #toppbanner > div > iframe[scrolling="no"][src$="about:blank"], #g`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #toppbanner > div > iframe[scrolling="no"][src$="about:blank"], #f`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #toppbanner > div > iframe[scrolling="no"][src$="about:blank"], #e`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #toppbanner > div > iframe[scrolling="no"][src$="about:blank"], #d`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #wallpaper > div > iframe[scrolling="no"][src$="about:blank"], #c`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #wallpaper > div > iframe[scrolling="no"][src$="about:blank"], #d`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #wallpaper > div > iframe[scrolling="no"][src$="about:blank"], #f`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, #wallpaper > div > iframe[scrolling="no"][src$="about:blank"], #h`
