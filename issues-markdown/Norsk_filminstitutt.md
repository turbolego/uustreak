# WCAG Violations Report for Norsk filminstitutt

**Timestamp:** 2026-11-20T06:28:33.143Z
**URL:** [https://www.nfi.no/](https://www.nfi.no/)
**Total Violations:** 1

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `.lg\:block.hidden:nth-child(1) > a[data-language-toggle=""][href$="en/"][lang="en"]`
  - **HTML:** `<a data-language-toggle="" href="https://www.nfi.no/en/" hreflang="en" lang="en" aria-label="Switch to English" class="flex items-center pointer-events-auto focus-visible:outline outline-2 outline-offset-4 outline-current rounded gap-x-2">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

