# WCAG Violations Report for Firda Media AS

**Timestamp:** 2026-06-02T03:46:58.142Z
**URL:** [https://www.firda.no/](https://www.firda.no/)
**Total Violations:** 6

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #cbb`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `#eaframe, #container_10481629 > .info > .info-wrapper > .ctaLink`
- `.totalt_antall`

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

- `#adsm-iframe-skin-0f68eb80c3, .adnami-skin-wrapper:nth-child(1) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-0f68eb80c3, .adnami-skin-wrapper:nth-child(1) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-0f68eb80c3, .adnami-skin-wrapper:nth-child(1) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-0f68eb80c3, .adnami-skin-wrapper:nth-child(2) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-0f68eb80c3, .adnami-skin-wrapper:nth-child(2) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-0f68eb80c3, .adnami-skin-wrapper:nth-child(2) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-0f68eb80c3, .adnami-skin-wrapper:nth-child(3) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-0f68eb80c3, .adnami-skin-wrapper:nth-child(3) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-0f68eb80c3, .adnami-skin-wrapper:nth-child(3) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-92c37884-a267-49e9-956e-84644078d360-0f68eb80c3, #adsm-iframe-skin_top-0f68eb80c3, img`
- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, .adnm-view-pixel`

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
