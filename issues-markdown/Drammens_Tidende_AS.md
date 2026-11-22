# WCAG Violations Report for Drammens Tidende AS

**Timestamp:** 2026-11-22T05:53:45.081Z
**URL:** [https://www.dt.no/](https://www.dt.no/)
**Total Violations:** 9

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, #cbb`

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
- **Count:** 1

#### Affected Elements:

- `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if`
- `#eaframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 52

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #logo`
- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #cta`
- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #maintext`
- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #subtext_01`
- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #subtext_02`
- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #plaster`
- `#eaframe, .avis-logo`
- `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11340339 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11340339 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11345090 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11345090 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11342251 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11342251 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11344966 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11344966 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11344969 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11344969 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11355825 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11355825 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(7) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11342241 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11342241 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(8) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11355698 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11355698 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(9) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11343330 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11343330 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(10) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11344968 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11344968 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(11) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11355452 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11355452 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(12) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11355772 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11355772 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(13) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11341965 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11341965 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(14) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11341941 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11341941 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(15) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11343768 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11343768 > .brokerinfo-container > .brokerlogo`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.dt\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #banner`

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
