# WCAG Violations Report for Bladet Nordlys AS

**Timestamp:** 2026-07-08T03:16:16.828Z
**URL:** [https://www.nordlys.no/](https://www.nordlys.no/)
**Total Violations:** 7

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #cbb`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `#eaframe, #container_10633423 > .info > .info-wrapper > .ctaLink`
- `a[aria-label="Ledig stilling: Mediegrafiker"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `a[aria-label="Ledig stilling: Lærer"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#eaframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 11

#### Affected Elements:

- `#adsm-iframe-skin-2c7684bdf2, .adnami-skin-wrapper:nth-child(1) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-2c7684bdf2, .adnami-skin-wrapper:nth-child(1) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-2c7684bdf2, .adnami-skin-wrapper:nth-child(1) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-2c7684bdf2, .adnami-skin-wrapper:nth-child(2) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-2c7684bdf2, .adnami-skin-wrapper:nth-child(2) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-2c7684bdf2, .adnami-skin-wrapper:nth-child(2) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-2c7684bdf2, .adnami-skin-wrapper:nth-child(3) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-2c7684bdf2, .adnami-skin-wrapper:nth-child(3) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-2c7684bdf2, .adnami-skin-wrapper:nth-child(3) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-f896b62c-31e1-41d0-af7f-2cf637336c11-2c7684bdf2, #adsm-iframe-skin_top-2c7684bdf2, img`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, .adnm-view-pixel`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `brick-carousel-v2[data-slides="3"] > .carousel[role="region"][aria-label="Innholdskarusell."]`

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
