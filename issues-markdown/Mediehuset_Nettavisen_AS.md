# WCAG Violations Report for Mediehuset Nettavisen AS

**Timestamp:** 2025-11-16T00:31:32.939Z
**URL:** [https://www.nettavisen.no/](https://www.nettavisen.no/)
**Total Violations:** 8

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #cbb`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > h1`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 6

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1000"]`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1000"], iframe[src$="about:blank"]`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1000"], body > iframe`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1920"]`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1920"], iframe[src$="about:blank"]`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1920"], body > iframe`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.brick-c-igdZZU.brick-c-bVcFwu-jkdTMx-marker-true.brick-c-bVcFwu > .brick-c-itmAgK-ePMFSK-marker-true.brick-c-itmAgK-jLyMVI-cv`

### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.miniheader`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#page-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- `#page-header`
- `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > .nav-wrap > nav`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1000"], iframe[src$="about:blank"], #f`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1000"], iframe[src$="about:blank"], #e`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1000"], iframe[src$="about:blank"], #d`
- `brick-carousel-v2[data-slides="4"] > .carousel[role="region"][aria-label="Innholdskarusell."]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1-label`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1000"], iframe[src$="about:blank"], #b`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1000"], iframe[src$="about:blank"], #a`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1920"], iframe[src$="about:blank"], #e`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1920"], iframe[src$="about:blank"], #c`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1920"], iframe[src$="about:blank"], #l`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe[width="1920"], iframe[src$="about:blank"], #i`
