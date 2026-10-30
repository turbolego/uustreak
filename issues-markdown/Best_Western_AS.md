# WCAG Violations Report for Best Western AS

**Timestamp:** 2026-10-30T05:28:05.324Z
**URL:** [https://www.bestwestern.no/](https://www.bestwestern.no/)
**Total Violations:** 3

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 9

#### Affected Elements:

- `a[href$="bestwestern.com/"]`
- `a[title="Se mer"]`
- `a[title="Oppdag tilbudet"]`
- `a[title="Til tilbudet "]`
- `a[title="Se alle tilbud"]`
- `a[title="Ta meg til Edinburgh!"]`
- `a[title="Ta meg til Wien!"]`
- `a[title="Ta meg til Warszawa!"]`
- `a[aria-label="Send e-post til Best Western"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `header > nav`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- `.not-focus\:visually-hidden`
- `a[href$="bestwestern.com/"]`
- `#ddChallengeBody1793338074227, .captcha__header`
- `#ddChallengeBody1793338074227, .captcha__human`
- `#ddChallengeBody1793338074227, .sliderText`
- `#ddChallengeBody1793338074227, .captcha__robot__warning`
- `#ddChallengeBody1793338074227, .captcha__robot__contact_support`
