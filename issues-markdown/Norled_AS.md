# WCAG Violations Report for Norled AS

**Timestamp:** 2026-10-08T10:24:10.632Z
**URL:** [https://www.norled.no/](https://www.norled.no/)
**Total Violations:** 2

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#brxe-ludgej`
  - **HTML:** `<div id="brxe-ludgej" data-script-id="ludgej" class="brxe-slider-nested b..." data-splide="{"type":"slide","dir..." role="region" aria-roledescription="karusell">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `#brxe-rlgvhk`
  - **HTML:** `<a id="brxe-rlgvhk" href="https://www.norled.no/" aria-current="page" class="brxe-div"><figure id="brxe-yyxjcu" class="brxe-image tag"><img src="https://www.norled.no/wp-content/uploads/2024/06/logo.svg" class="css-filter size-full" alt=""…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="sok/"]`
  - **HTML:** `<a class="tag" href="https://www.norled.no/sok/"><img src="https://www.norled.no/wp-content/uploads/2025/03/search.svg" class="css-filter size-full" alt="" decoding="async" data-type="string"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bricks-link-wrapper[target="_blank"]:nth-child(1)`
  - **HTML:** `<a href="https://www.facebook.com/NorledAs/?locale=nb_NO" target="_blank" class="bricks-link-wrapper">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bricks-link-wrapper[target="_blank"]:nth-child(2)`
  - **HTML:** `<a href="https://no.linkedin.com/company/norled-as" target="_blank" class="bricks-link-wrapper">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bricks-link-wrapper[target="_blank"]:nth-child(3)`
  - **HTML:** `<a href="https://www.instagram.com/norled_as/" target="_blank" class="bricks-link-wrapper">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bricks-link-wrapper[target="_blank"]:nth-child(4)`
  - **HTML:** `<a href="https://www.youtube.com/@NorledAS" target="_blank" class="bricks-link-wrapper">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

