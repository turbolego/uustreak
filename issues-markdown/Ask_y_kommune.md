# WCAG Violations Report for Askøy kommune

**Timestamp:** 2026-11-23T06:06:00.964Z
**URL:** [https://www.askoy.kommune.no/](https://www.askoy.kommune.no/)
**Total Violations:** 2

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `.uk-first-column:nth-child(1) > .uk-flex-column.uk-flex.el-item > .uk-card-small.uk-card-default.uk-flex-1`
  - **HTML:** `<a class="uk-flex-1 uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle" href="/tjenester/skole-og-sfo/skolerutene" aria-label="Link til barnehage- og skolerutene">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="detskjer.askoy.no/"]`
  - **HTML:** `<a class="uk-flex-1 uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://detskjer.askoy.no/" aria-label="Aktivitets kalender for Askøy">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.uk-hidden-visually`
  - **HTML:** `<div class="uk-hidden-visually uk-notification uk-notification-top-left uk-width-auto"> <div class="uk-notification-message"> <a href="#tm-main" class="uk-link-reset">Skip to main content</a> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

