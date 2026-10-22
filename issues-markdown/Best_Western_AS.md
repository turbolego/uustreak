# WCAG Violations Report for Best Western AS

**Timestamp:** 2026-10-22T03:38:32.421Z
**URL:** [https://www.bestwestern.no/](https://www.bestwestern.no/)
**Total Violations:** 3

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="bestwestern.com/"]`
  - **HTML:** `<a class="inline-flex w-fit no-underline font-book text-2xs hover:text-on-surface-variant focus-visible:text-on-surface-variant gap-1 items-center" href="https://www.bestwestern.com/" tabindex="0" title="" aria-label="Til bestwestern.com">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `header > nav`
  - **HTML:** `<nav aria-label="Hovedmeny">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.focus-visible\:underline`
  - **HTML:** `<a class="inline-flex w-fit ho..." href="#main" tabindex="0" title="" aria-label="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="bestwestern.com/"]`
  - **HTML:** `<a class="inline-flex w-fit no-underline font-book text-2xs hover:text-on-surface-variant focus-visible:text-on-surface-variant gap-1 items-center" href="https://www.bestwestern.com/" tabindex="0" title="" aria-label="Til bestwestern.com">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1792640298229, .captcha__header`
  - **HTML:** `<div class="captcha__header" data-dd-captcha-header="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1792640298229, .captcha__human`
  - **HTML:** `<div class="captcha__human" data-dd-captcha-human="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1792640298229, .captcha__robot__warning`
  - **HTML:** `<div class="captcha__robot__warning" data-dd-captcha-robot-warning="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1792640298229, .captcha__robot__contact_support`
  - **HTML:** `<div class="captcha__robot__contact_support" data-dd-captcha-robot-contact-support="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

