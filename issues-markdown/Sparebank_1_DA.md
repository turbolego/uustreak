# WCAG Violations Report for Sparebank 1 DA

**Timestamp:** 2025-10-20T00:34:52.111Z
**URL:** [https://www.sparebank1.no/nb/bank/privat.html](https://www.sparebank1.no/nb/bank/privat.html)
**Total Violations:** 2

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `.optin`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2
- **Count:** 5

#### Affected Elements:

- `#contact-tab1`
- `#contact-tab2`
- `#contact-tab3`
- `#contact-tab4`
- `#contact-tab5`
