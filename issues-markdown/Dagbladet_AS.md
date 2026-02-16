# WCAG Violations Report for Dagbladet AS

**Timestamp:** 2026-02-16T03:27:58.820Z
**URL:** [https://www.dagbladet.no/](https://www.dagbladet.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.t46 > .text-red.color_mobile_text-red[data-lab-text_color_desktop="text-red"]`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 7

#### Affected Elements:

- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"]`
- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe:nth-child(1)`
- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe[name="synciframe"]`
- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe[name="pbeacon"]`
- `#ad-sticky-right1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"]`
- `#ad-sticky-right1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe[name="synciframe"]`
- `#ad-sticky-right1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe[name="pbeacon"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.row_header_text`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe:nth-child(1), #__adroll_adchoices_icon_overlay > img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.jkuUMO`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe:nth-child(1), #__adroll_adchoices_icon_wrap > a`
- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe:nth-child(1), #__adroll_link`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 9

#### Affected Elements:

- `html`
- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], html`
- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe:nth-child(1), html`
- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe[name="synciframe"], html`
- `#ad-medium-rectangle-perz1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe[name="pbeacon"], html`
- `#ad-sticky-right1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], html`
- `#ad-sticky-right1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe[title="advertisement"], html`
- `#ad-sticky-right1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe[name="synciframe"], html`
- `#ad-sticky-right1 > .ahover > iframe[marginwidth="0"][marginheight="0"][scrolling="no"], iframe[name="pbeacon"], html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#am-branding > p`
