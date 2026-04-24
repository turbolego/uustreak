# WCAG Violations Report for Kuben videregående skole

**Timestamp:** 2026-04-24T10:36:27.208Z
**URL:** [https://kuben.vgs.no/#](https://kuben.vgs.no/#)
**Total Violations:** 5

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `.col-lg-4.col-md-6.col-12:nth-child(1) > .factbox.factbox--white > .factbox__content.text-break > p:nth-child(1) > iframe, #movie_player`
- `.col-lg-4.col-md-6.col-12:nth-child(2) > .factbox.factbox--white > .factbox__content.text-break > p:nth-child(1) > iframe, #movie_player`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.col-lg-4.col-md-6.col-12:nth-child(1) > .factbox.factbox--white > .factbox__content.text-break > p:nth-child(1) > iframe, .ytmVideoInfoChannelAvatar`
- `.col-lg-4.col-md-6.col-12:nth-child(2) > .factbox.factbox--white > .factbox__content.text-break > p:nth-child(1) > iframe, .ytmVideoInfoChannelAvatar`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `.col-lg-4.col-md-6.col-12:nth-child(1) > .factbox.factbox--white > .factbox__content.text-break > p:nth-child(1) > iframe`
- `.col-lg-4.col-md-6.col-12:nth-child(2) > .factbox.factbox--white > .factbox__content.text-break > p:nth-child(1) > iframe`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `#silktide-banner > .mb-4`
- `#silktide-banner > p:nth-child(2)`
- `#silktide-banner > p:nth-child(3)`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `a[href$="#secMain"]`
