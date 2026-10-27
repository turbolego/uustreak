# WCAG Violations Report for Drammens Tidende AS

**Timestamp:** 2026-10-27T04:02:10.237Z
**URL:** [https://www.dt.no/](https://www.dt.no/)
**Total Violations:** 5

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#eaframe, button`

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
- **Count:** 43

#### Affected Elements:

- `#eaframe, .avis-logo`
- `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10925288 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10925288 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10926784 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10926784 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10930025 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10930025 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10930365 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10930365 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10921542 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10921542 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10922384 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10922384 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(7) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10929853 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10929853 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(8) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10921183 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10921183 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(9) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10930013 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10930013 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(10) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10925551 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10925551 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(11) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10921978 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10921978 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(12) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10925549 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10925549 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(13) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10925287 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10925287 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(14) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10922376 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10922376 > .brokerinfo-container > .brokerlogo`

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
