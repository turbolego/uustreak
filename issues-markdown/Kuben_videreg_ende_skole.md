# WCAG Violations Report for Kuben videregående skole

**Timestamp:** 2026-03-02T00:42:34.494Z
**URL:** [https://kuben.vgs.no/#](https://kuben.vgs.no/#)
**Total Violations:** 3

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `.col-lg-4.col-md-6.col-12:nth-child(5) > .factbox.factbox--white > .factbox__content > p:nth-child(1) > iframe`
- `.col-lg-4.col-md-6.col-12:nth-child(6) > .factbox.factbox--white > .factbox__content > p:nth-child(1) > iframe`

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
