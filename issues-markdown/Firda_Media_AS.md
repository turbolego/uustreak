# WCAG Violations Report for Firda Media AS

**Timestamp:** 2026-11-22T06:03:26.403Z
**URL:** [https://www.firda.no/](https://www.firda.no/)
**Total Violations:** 10

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #cbb`

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

- `a[aria-label="Ledig stilling: Daglig leder"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `div[data-swiper-slide-index="4"] > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if`
- `#eaframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 52

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #logo`
- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #cta`
- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #maintext`
- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #subtext_01`
- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #subtext_02`
- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #plaster`
- `#eaframe, .avis-logo`
- `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11335473 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11335473 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11327888 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11327888 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11327890 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11327890 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11335477 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11335477 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11335479 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11335479 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11335481 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11335481 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(7) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11342991 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11342991 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(8) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10946681 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10946681 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(9) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11346227 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11346227 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(10) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11346229 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11346229 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(11) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11332080 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11332080 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(12) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11324378 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11324378 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(13) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11327892 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11327892 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(14) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11324982 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11324982 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(15) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11335475 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11335475 > .brokerinfo-container > .brokerlogo`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- `a[aria-label="Ledig stilling: Daglig leder"]`
- `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"]`
- `div[data-swiper-slide-index="4"] > .tivoli-job-ad.fokus[target="_blank"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `brick-carousel-v3[data-slides="11"] > .carousel[role="region"][aria-label="Innhaldskarusell"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #banner`

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
