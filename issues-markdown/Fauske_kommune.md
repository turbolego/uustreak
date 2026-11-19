# WCAG Violations Report for Fauske kommune

**Timestamp:** 2026-11-19T06:39:22.770Z
**URL:** [https://www.fauske.kommune.no/](https://www.fauske.kommune.no/)
**Total Violations:** 2

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#h-sv-default-anchor`
  - **HTML:** `<h2 class="env-ui-text-heading" id="h-sv-default-anchor">&nbsp;</h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### The skip-link target should exist and be focusable

- **Impact:** moderate
- **Description:** Ensure all skip links have a focusable target
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/skip-link?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-12.7.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.IxDTxMKJHboytmfKaBdA`
  - **HTML:** `<a class="IxDTxMKJHboytmfKaBdA CWFhkyD7Yb2a6cG5WDoS dTg0mTyZF5m9f9yK0JWA" href="#Hovedinnhold">Hopp til innholdet</a>`
  - **Failure summary:** Fix any of the following: No skip link target

