# WCAG Violations Report for Bergensavisen AS

**Timestamp:** 2026-11-22T05:42:37.365Z
**URL:** [https://www.ba.no/](https://www.ba.no/)
**Total Violations:** 10

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #cbb`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `#mnemonic-iframe-710420c0-4414-40ae-b5e5-0ec161cddb43, iframe, .hunt-strip`

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
- **Count:** 4

#### Affected Elements:

- `#mnemonic-iframe-710420c0-4414-40ae-b5e5-0ec161cddb43, iframe, .hunt-kicker-time`
- `a[aria-label="Ledig stilling: Utvikler"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 4

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if`
- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #banner`
- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, iframe[sandbox="allow-scripts"]`
- `#eaframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 9

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #banner, #layer_ba003110_ca86_4560_a459_5a507c88c029`
- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #banner, #layer_6ec7744a_4311_434c_88b1_dd18e360762f`
- `#eaframe, .avis-logo`
- `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11343433 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11343433 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11343432 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11343432 > .brokerinfo-container > .brokerlogo`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 4

#### Affected Elements:

- `#mnemonic-iframe-710420c0-4414-40ae-b5e5-0ec161cddb43, iframe, a`
- `a[aria-label="Ledig stilling: Utvikler"]`
- `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"]`
- `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.lp_header`

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
