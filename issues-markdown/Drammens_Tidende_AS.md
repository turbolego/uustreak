# WCAG Violations Report for Drammens Tidende AS

**Timestamp:** 2026-10-09T04:57:55.238Z
**URL:** [https://www.dt.no/](https://www.dt.no/)
**Total Violations:** 5

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#eaframe, button`

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
- **Count:** 28

#### Affected Elements:

- `#eaframe, .avis-logo`
- `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10873217 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10873217 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10873273 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10873273 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10872402 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10872402 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10873172 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10873172 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10869123 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10869123 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10866570 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10866570 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(7) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10867956 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10867956 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(8) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10866569 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10866569 > .brokerinfo-container > .brokerlogo`
- `#eaframe, .ad-container.swiper-slide:nth-child(9) > .shoutimage-container > .shoutimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10868803 > .brokerimage[loading="lazy"]`
- `#eaframe, #brokerimage-container-10868803 > .brokerinfo-container > .brokerlogo`

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
