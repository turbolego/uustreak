# WCAG Violations Report for Forbrukertilsynet

**Timestamp:** 2026-11-20T06:11:27.553Z
**URL:** [https://www.forbrukertilsynet.no/](https://www.forbrukertilsynet.no/)
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

- **Target:** `.svg-hamburger`
  - **HTML:** `<button class="svg-hamburger" aria-label="Toppnavigasjon" accesskey="h" aria-controls="top-dropdown" title="Åpne meny for flere valg">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.frontkom-flex13_bd4018-8c > .frontkom-section-link-overlay`
  - **HTML:** `<a href="https://www.forbrukertilsynet.no/send-tips" class="frontkom-section-link-overlay"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.frontkom-flex13_106d91-e6 > .frontkom-section-link-overlay`
  - **HTML:** `<a href="https://www.forbrukertilsynet.no/send-sak-til-mekling" class="frontkom-section-link-overlay"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.frontkom-flex13_d57a3c-4e > .frontkom-section-link-overlay`
  - **HTML:** `<a href="https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer" class="frontkom-section-link-overlay"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

