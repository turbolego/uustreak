# WCAG Violations Report for Dedicare AS

**Timestamp:** 2026-01-17T00:41:43.922Z
**URL:** [https://www.dedicare.no/#](https://www.dedicare.no/#)
**Total Violations:** 7

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#main-menu-button`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- `.col-md-10 > .button-color-primary.button`
- `#input_17_5`
- `#gform_submit_button_17`
- `.half-half-text-cta`
- `.carousel-item.active > .carousel-background.hide-background-mobile.align-items-sm-center > .carousel-content > .button-color-primary.button`
- `.text-image-overlay-text-content > .button-color-primary.button`

### Frames with focusable content must not have tabindex=-1

- **Impact:** serious
- **Description:** Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-focusable-content?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `iframe[title="reCAPTCHA"], html`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.page-content > h3`
- `.col-xl-4.col-md-12.col-lg-12:nth-child(2) > .column-section-box-height.column-section-box > .column-section-content.link-color-primary.page-content > h4`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 7

#### Affected Elements:

- `p:nth-child(2) > a:nth-child(1)`
- `a[href$="legerutengrenser.no/"]`
- `p:nth-child(2) > a:nth-child(3)`
- `p:nth-child(2) > a:nth-child(4)`
- `.social-item:nth-child(1) > a`
- `.social-item:nth-child(2) > a`
- `.social-item:nth-child(3) > a`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[title="reCAPTCHA"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.page-hero`
