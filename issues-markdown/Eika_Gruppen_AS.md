# WCAG Violations Report for Eika Gruppen AS

**Timestamp:** 2026-10-08T10:25:27.617Z
**URL:** [https://www.eika.no/](https://www.eika.no/)
**Total Violations:** 2

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.sgw-tips-card__title`
  - **HTML:** `<h2 class="sgw-tips-card__title" data-charcount="60" data-rte="no-html"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="berg-sparebank.no/"]`
  - **HTML:** `<a href="https://www.berg-sparebank.no/" data-track-linkname="wwwbergsparebankno" data-track-id="footer-logo-link"><img src="/-/media/fellesbilder/08-Logoer/Logo-svg/Berg-Sparebank.png?h=1201&amp;w=3127&amp;la=nb-NO&amp;hash=8FF7CEBE89932A…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

