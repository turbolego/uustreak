# WCAG Violations Report for Drammens Tidende AS

**Timestamp:** 2026-10-18T03:46:00.879Z
**URL:** [https://www.dt.no/](https://www.dt.no/)
**Total Violations:** 7

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, #cbb`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#eaframe, button`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `div[data-swiper-slide-index="0"] > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#eaframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 57

#### Affected Elements:

- `#adsm-iframe-skin-23b046349f, .adnami-skin-wrapper:nth-child(1) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-23b046349f, .adnami-skin-wrapper:nth-child(1) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-23b046349f, .adnami-skin-wrapper:nth-child(1) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-23b046349f, .adnami-skin-wrapper:nth-child(2) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-23b046349f, .adnami-skin-wrapper:nth-child(2) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-23b046349f, .adnami-skin-wrapper:nth-child(2) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-23b046349f, .adnami-skin-wrapper:nth-child(3) > .adnami-background > .adnami-backgroundImage`
- `#adsm-iframe-skin-23b046349f, .adnami-skin-wrapper:nth-child(3) > .adnami-flexContainer > .adnami-leftPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-skin-23b046349f, .adnami-skin-wrapper:nth-child(3) > .adnami-flexContainer > .adnami-rightPanel.sidePanel.panel > .overlayContainer > .overlay.mainOverlay`
- `#adsm-iframe-298a6b17-feb8-4675-9541-e2f2f664333e-23b046349f, #adsm-iframe-skin_top-23b046349f, img`
- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, .adnm-view-pixel`
- `#eaframe, .avis-logo`
- `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10883479 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10883479 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10893290 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10893290 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10891604 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10891604 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10887078 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10887078 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10883014 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10883014 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10880889 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10880889 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(7) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10891203 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10891203 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(8) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10889021 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10889021 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(9) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10886532 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10886532 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(10) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10885059 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10885059 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(11) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10888646 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10888646 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(12) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10889680 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10889680 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(13) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10892953 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10892953 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(14) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10891606 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10891606 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(15) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10891601 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10891601 > .brokerinfo-container > .brokerlogo`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `img[height="80"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1`
