# WCAG Violations Report for Bladet Nordlys AS

**Timestamp:** 2026-11-08T05:04:38.653Z
**URL:** [https://www.nordlys.no/](https://www.nordlys.no/)
**Total Violations:** 8

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #cbb`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#eaframe, button`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `div[data-swiper-slide-index="4"] > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#eaframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 18

#### Affected Elements:

- `#adsm-iframe-skin-2e4cd3cc81, .adnami-skin-wrapper:nth-child(1) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-2e4cd3cc81, .adnami-skin-wrapper:nth-child(1) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-2e4cd3cc81, .adnami-skin-wrapper:nth-child(1) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-2e4cd3cc81, .adnami-skin-wrapper:nth-child(2) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-2e4cd3cc81, .adnami-skin-wrapper:nth-child(2) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-2e4cd3cc81, .adnami-skin-wrapper:nth-child(2) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-2e4cd3cc81, .adnami-skin-wrapper:nth-child(3) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-2e4cd3cc81, .adnami-skin-wrapper:nth-child(3) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-2e4cd3cc81, .adnami-skin-wrapper:nth-child(3) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-da0e0a59-9c85-4392-a027-56f1909a1bb9-2e4cd3cc81, #adsm-iframe-skin_top-2e4cd3cc81, img`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, .adnm-view-pixel`
- `#eaframe, .avis-logo`
- `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11317765 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11317765 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11320370 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .shoutimage-container > .shoutimage[loading="lazy"]:nth-child(1)`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"]`
- `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"]`
- `div[data-swiper-slide-index="4"] > .tivoli-job-ad.fokus[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `img[height="80"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1`
