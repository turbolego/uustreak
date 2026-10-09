# WCAG Violations Report for Circle K AS

**Timestamp:** 2026-10-09T04:56:36.231Z
**URL:** [https://www.circlek.no/](https://www.circlek.no/)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 17

#### Affected Elements:

- `a[data-href$="extra"]`
- `a[data-href$="mastercard"]`
- `a[href$="personkort"]`
- `a[href$="partnere"]`
- `a[data-href$="mat"]`
- `a[href$="drikke"]`
- `li:nth-child(3) > a[data-href$="koppen"]`
- `a[href$="produkter"]`
- `a[href$="tjenester"]`
- `li:nth-child(1) > a[href$="drivstoff"]`
- `a[data-drupal-link-system-path="node/786"]`
- `li:nth-child(3) > a[href$="bilvask"]`
- `a[data-href$="tilhengerutleie"]`
- `a[href$="motorolje"]`
- `a[href$="barekraftig-fremtid"]`
- `a[data-href="/helse-milj%C3%B8-og-sikkerhet"]`
- `a[href$="aktivmotkreft"]`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `.uk-modal-close-default`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `.cb-details`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `.uk-position-center-left`
- `.uk-position-center-right`
- `.slide-previous`
- `.slide-next`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `#cookie-bot`
- `.focusable`
- `.bottom-region`

### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- `span[uk-icon="icon: facebook;"]`
- `span[uk-icon="icon: instagram;"]`
- `span[uk-icon="icon: linkedin;"]`
- `span[uk-icon="icon: youtube;"]`
