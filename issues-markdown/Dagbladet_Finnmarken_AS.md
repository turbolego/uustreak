# WCAG Violations Report for Dagbladet Finnmarken AS

**Timestamp:** 2025-12-14T00:49:49.896Z
**URL:** [https://www.ifinnmark.no/](https://www.ifinnmark.no/)
**Total Violations:** 5

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe`
- `#eaframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, #adsm-iframe-3eaf7d7f-a0da-4fbc-b511-f1a9222c798e-319f097f94, #forvalt-logo-2024-light_1 > .intermediate-element > img[src="forvalt-logo-2024-light.svg"]`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, #adsm-iframe-3eaf7d7f-a0da-4fbc-b511-f1a9222c798e-319f097f94, #forvalt-logo-2024-light > .intermediate-element > img[src="forvalt-logo-2024-light.svg"]`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, #adsm-iframe-3eaf7d7f-a0da-4fbc-b511-f1a9222c798e-319f097f94, img[src$="rating-c.png"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `brick-carousel-v2[data-hide-btn-start-end="true"] > .carousel[role="region"][aria-label="Innholdskarusell."]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `img[height="80"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1`
