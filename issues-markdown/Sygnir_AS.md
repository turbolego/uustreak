# WCAG Violations Report for Sygnir AS

**Timestamp:** 2026-11-19T07:07:18.744Z
**URL:** [https://www.sygnir.no/](https://www.sygnir.no/)
**Total Violations:** 2

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `.header-display-desktop > .header-actions.header-actions--right > .header-actions-action.header-actions-action--social > .header-icon[aria-label="URL"][href$="www.sygnir.no"]`
  - **HTML:** `<a class="icon icon--fill header-icon header-icon-border-shape-none header-icon-border-style-outline" href="http://www.sygnir.no" target="_blank" aria-label="URL"><span></span><span></span><span></span> Meny</a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.megameny > .header-nav-wrapper > .header-nav-list`
  - **HTML:** `<nav class="header-nav-list">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

