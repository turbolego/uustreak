# WCAG Violations Report for Mediehuset Nettavisen AS

**Timestamp:** 2026-11-22T05:33:47.516Z
**URL:** [https://www.nettavisen.no/](https://www.nettavisen.no/)
**Total Violations:** 7

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #cbb`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > h1`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 21

#### Affected Elements:

- `#adsm-iframe-skin-c7f1389ef1, .bgImg`
- `#adsm-iframe-skin-c7f1389ef1, .logo`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(1) > .cardMedia > .cardImg[draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(2) > .cardMedia > .cardImg[src$="product-36-8071.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(3) > .cardMedia > .cardImg[src$="product-36-6686.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(4) > .cardMedia > .cardImg[src$="product-36-6685.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(5) > .cardMedia > .cardImg[src$="product-36-8226.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(6) > .cardMedia > .cardImg[src$="product-36-8069.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(7) > .cardMedia > .cardImg[draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(8) > .cardMedia > .cardImg[src$="product-36-8071.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(9) > .cardMedia > .cardImg[src$="product-36-6686.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(10) > .cardMedia > .cardImg[src$="product-36-6685.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(11) > .cardMedia > .cardImg[src$="product-36-8226.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(12) > .cardMedia > .cardImg[src$="product-36-8069.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(13) > .cardMedia > .cardImg[draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(14) > .cardMedia > .cardImg[src$="product-36-8071.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(15) > .cardMedia > .cardImg[src$="product-36-6686.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(16) > .cardMedia > .cardImg[src$="product-36-6685.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(17) > .cardMedia > .cardImg[src$="product-36-8226.webp"][draggable="false"]`
- `#adsm-iframe-skin-c7f1389ef1, .card:nth-child(18) > .cardMedia > .cardImg[src$="product-36-8069.webp"][draggable="false"]`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, .adnm-view-pixel`

### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.miniheader`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#page-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#page-header`
- `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > .nav-wrap > nav`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1`
