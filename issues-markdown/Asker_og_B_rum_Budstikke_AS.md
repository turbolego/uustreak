# WCAG Violations Report for Asker og Bærum Budstikke AS

**Timestamp:** 2026-11-10T06:15:50.639Z
**URL:** [https://www.budstikka.no/](https://www.budstikka.no/)
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
- **Count:** 36

#### Affected Elements:

- `#eaframe, .avis-logo`
- `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11315451 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11315451 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11321444 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11321444 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10947301 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10947301 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11323307 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11315586 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11315586 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11319822 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11319822 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(7) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10947051 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10947051 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(8) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10947299 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10947299 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(9) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11321249 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11321249 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(10) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11322512 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11322512 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(11) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11318222 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11318222 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(12) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11321443 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-11321443 > .brokerinfo-container > .brokerlogo`

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
