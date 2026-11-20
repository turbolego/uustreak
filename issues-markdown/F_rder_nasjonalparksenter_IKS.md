# WCAG Violations Report for Færder nasjonalparksenter IKS

**Timestamp:** 2026-11-20T06:09:12.663Z
**URL:** [https://ferdernasjonalpark.no/](https://ferdernasjonalpark.no/)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- `.post-67343`
- `.post-66679`
- `.post-66656`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- `#gt-wrapper-39683348 > a[title="English"][data-gt-lang="en"][aria-label="English"]`
- `#gt-wrapper-39683348 > .gt-current-lang[title="Norwegian"][data-gt-lang="no"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 7

#### Affected Elements:

- `.impressum[href$="ferdernasjonalpark.no/"][data-relative_url=""]`
- `.elementor-element-563e00d > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
- `.elementor-element-e045563 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
- `.elementor-element-a6a9bd2 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
- `.elementor-element-ef2ca0e > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
- `.elementor-element-605db45 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
- `.elementor-element-354b737 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 17

#### Affected Elements:

- `.skip-link`
- `.elementor-element-2ba7a77`
- `.elementor-element-cacca9e`
- `.elementor-element-cf7a2ce`
- `.elementor-element-7d1d393`
- `.elementor-element-ff90a70`
- `.elementor-element-165c239`
- `.elementor-element-22f1621`
- `.elementor-element-fd1dd29`
- `.elementor-element-2e07185`
- `.elementor-element-82ba27e`
- `.elementor-element-1b625a1`
- `.elementor-element-b98673b`
- `.elementor-element-c48cf73`
- `.elementor-element-791ec04`
- `.elementor-element-feafe8a`
- `.elementor-element-aef3e25`
