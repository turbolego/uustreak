# WCAG Violations Report for Politiet

**Timestamp:** 2026-10-22T03:55:41.522Z
**URL:** [https://www.politiet.no/](https://www.politiet.no/)
**Total Violations:** 2

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- **Target:** `#politiloggen-thread-card--26pv0n`
  - **HTML:** `<a href="https://www.politiet..." id="politiloggen-thread-..." aria-label="Gå til hendelse: Bra..." class="relative flex flex-c...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#politiloggen-thread-card--262t3n`
  - **HTML:** `<a href="https://www.politiet..." id="politiloggen-thread-..." aria-label="Gå til hendelse: And..." class="relative flex flex-c...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#politiloggen-thread-card--26vw67`
  - **HTML:** `<a href="https://www.politiet..." id="politiloggen-thread-..." aria-label="Gå til hendelse: Dyr..." class="relative flex flex-c...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#skip-link`
  - **HTML:** `<sds-button href="#main-content" class="print:hidden fixed top-sds-xs left-sds-xs -translate-y-[200%] focus:translate-y-0 z-[9999] transition-transform" id="skip-link" size="lg" type="button" value="" variant="primary">Hopp til hovedinnhol…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

