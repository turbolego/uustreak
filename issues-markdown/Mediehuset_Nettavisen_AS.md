# WCAG Violations Report for Mediehuset Nettavisen AS

**Timestamp:** 2026-10-18T03:29:34.242Z
**URL:** [https://www.nettavisen.no/](https://www.nettavisen.no/)
**Total Violations:** 8

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #cbb`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > h1`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.brick-c-igdZZU.brick-c-gBeijm.title_container > .brick-c-iscXzK`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 11

#### Affected Elements:

- `#adsm-iframe-skin-267b5be133, .adnami-skin-wrapper:nth-child(1) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-267b5be133, .adnami-skin-wrapper:nth-child(1) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-267b5be133, .adnami-skin-wrapper:nth-child(1) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-267b5be133, .adnami-skin-wrapper:nth-child(2) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-267b5be133, .adnami-skin-wrapper:nth-child(2) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-267b5be133, .adnami-skin-wrapper:nth-child(2) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-267b5be133, .adnami-skin-wrapper:nth-child(3) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-267b5be133, .adnami-skin-wrapper:nth-child(3) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-267b5be133, .adnami-skin-wrapper:nth-child(3) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-298a6b17-feb8-4675-9541-e2f2f664333e-267b5be133, #adsm-iframe-skin_top-267b5be133, img`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, .adnm-view-pixel`

### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.miniheader`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#page-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#page-header`
- `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > .nav-wrap > nav`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1`
