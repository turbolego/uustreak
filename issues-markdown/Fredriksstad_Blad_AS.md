# WCAG Violations Report for Fredriksstad Blad AS

**Timestamp:** 2026-11-01T05:12:53.649Z
**URL:** [https://www.f-b.no/](https://www.f-b.no/)
**Total Violations:** 8

## Violation Details

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
- `a[aria-label="Ledig stilling: Økonomisjef"] > .jobad-wrapper > .ad-text > .ad-text_location`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.f-b\.no\/toppbanner_0, iframe[scrolling="no"]`
- `#google_ads_iframe_\/56257416\/www\.f-b\.no\/toppbanner_0, body > iframe`
- `#eaframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 43

#### Affected Elements:

- `#eaframe, .avis-logo`
- `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10938290 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10938290 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10935951 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10935951 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10935490 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10935490 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10931780 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10931780 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10939103 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10939103 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10939129 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10939129 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(7) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10935597 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10935597 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(8) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10938286 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10938286 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(9) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10933898 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10933898 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(10) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10930022 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10930022 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(11) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10934823 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10934823 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(12) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10938288 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10938288 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(13) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10938017 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10938017 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(14) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10940486 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10940486 > .brokerinfo-container > .brokerlogo`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"]`
- `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"]`
- `a[aria-label="Ledig stilling: Økonomisjef"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.f-b\.no\/toppbanner_0, iframe[scrolling="no"], #h`
- `#google_ads_iframe_\/56257416\/www\.f-b\.no\/toppbanner_0, iframe[scrolling="no"], #i`
- `brick-teaser-group-v1[data-color-skin="sport"] > div > brick-carousel-v3[data-slides="4"] > .carousel[role="region"][aria-label="Innholdskarusell"]`

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
