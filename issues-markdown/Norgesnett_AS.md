# WCAG Violations Report for Norgesnett AS

**Timestamp:** 2025-12-31T00:28:48.945Z
**URL:** [https://norgesnett.no/](https://norgesnett.no/)
**Total Violations:** 8

## Violation Details

### ARIA hidden element must not be focusable or contain focusable elements

- **Impact:** serious
- **Description:** Ensure aria-hidden elements are not focusable nor contain focusable elements
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-hidden-focus?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 6

#### Affected Elements:

- `.e2-e56.is-current-slide.is-virtual:nth-child(1)`
- `.e2-e66.is-virtual.x-slide:nth-child(2)`
- `.e2-e76.is-virtual.x-slide:nth-child(3)`
- `.e2-e56.is-current-slide.is-virtual:nth-child(7)`
- `.e2-e66.is-virtual.x-slide:nth-child(8)`
- `.e2-e76.is-virtual.x-slide:nth-child(9)`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#main__simplifaiChatbotActivator--1OJ-o, button`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 12

#### Affected Elements:

- `.e5071-e83 > .x-text-content > .x-text-content-text > p`
- `.e5071-e87`
- `.e5071-e90`
- `.e5071-e93`
- `.e5071-e98 > a[href$="personvern/"]`
- `a[href$="informasjonskapsler/"]`
- `.e5071-e102`
- `.e5071-e106 > .x-text-content > .x-text-content-text > p`
- `.e5071-e108 > .x-anchor-content > .x-anchor-text > .x-anchor-text-secondary`
- `.e5071-e108 > .x-anchor-content > .x-anchor-text > .x-anchor-text-primary`
- `.e5071-e110 > .x-anchor-content > .x-anchor-text > .x-anchor-text-secondary`
- `.e5071-e110 > .x-anchor-content > .x-anchor-text > .x-anchor-text-primary`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#main__simplifaiChatbotActivator--1OJ-o`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 4

#### Affected Elements:

- `img[alt="Strømbrudd"]`
- `img[alt="Faktura"]`
- `img[alt="Nettleie"]`
- `img[alt="Han-port"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- `.e2-e87`
- `.e2-e89`
- `.e5071-e115`
- `.e5071-e117`
- `.e5071-e119`
- `.e5071-e121`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.e5071-e84`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- `.e5071-e85`
- `.e5071-e88`
- `.e5071-e91`
