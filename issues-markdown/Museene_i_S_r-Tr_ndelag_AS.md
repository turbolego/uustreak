# WCAG Violations Report for Museene i Sør-Trøndelag AS

**Timestamp:** 2026-11-05T08:57:42.159Z
**URL:** [https://mist.no/](https://mist.no/)
**Total Violations:** 1

## Violation Details

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 19

#### Affected Elements:

- **Target:** `#kit-ccm, dialog`
  - **HTML:** `<dialog aria-labelledby="dialog-heading" tabindex="1" open="">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, button[autofocus=""]`
  - **HTML:** `<button tabindex="2" type="button" aria-label="toggle content visibility" autofocus="">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, li:nth-child(1) > a[href$="personvern"][target="_blank"]`
  - **HTML:** `<a href="https://kulturit.no/personvern" target="_blank" tabindex="200">https://kulturit.no/personvern</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, .panel:nth-child(1) > ul > li:nth-child(2) > a[target="_blank"]`
  - **HTML:** `<a href="https://policies.google.com/privacy" target="_blank" tabindex="200">https://policies.google.com/privacy</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, li:nth-child(3) > a[href$="personvern"][target="_blank"]`
  - **HTML:** `<a href="https://kulturit.no/personvern" target="_blank" tabindex="200">https://kulturit.no/personvern</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, li:nth-child(4) > a[href$="personvern"][target="_blank"]`
  - **HTML:** `<a href="https://kulturit.no/personvern" target="_blank" tabindex="200">https://kulturit.no/personvern</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, li:nth-child(5) > a[target="_blank"]`
  - **HTML:** `<a href="https://plausible.io/data-policy" target="_blank" tabindex="200">https://plausible.io/data-policy</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, li:nth-child(6) > a[href$="personvern"][target="_blank"]`
  - **HTML:** `<a href="https://kulturit.no/personvern" target="_blank" tabindex="200">https://kulturit.no/personvern</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, li:nth-child(7) > a[href$="personvern"][target="_blank"]`
  - **HTML:** `<a href="https://kulturit.no/personvern" target="_blank" tabindex="200">https://kulturit.no/personvern</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, li:nth-child(8) > a[target="_blank"]`
  - **HTML:** `<a href="https://stadiamaps.com/privacy/privacy-policy/" target="_blank" tabindex="200">https://stadiamaps.com/privacy/privacy-policy/</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, .panel:nth-child(2) > label > input[type="checkbox"][aria-label="toggle on or off"]`
  - **HTML:** `<input tabindex="3" type="checkbox" name="17ed1516-d785-441c-907d-aa36b1a9c07a" aria-label="toggle on or off">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, .panel:nth-child(2) > button[aria-label="toggle content visibility"][type="button"]`
  - **HTML:** `<button tabindex="3" type="button" aria-label="toggle content visibility">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, .panel:nth-child(2) > ul > li:nth-child(1) > a[target="_blank"]`
  - **HTML:** `<a href="https://policies.google.com/privacy" target="_blank" tabindex="200">https://policies.google.com/privacy</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, .panel:nth-child(2) > ul > li:nth-child(2) > a[target="_blank"]`
  - **HTML:** `<a href="https://www.facebook.com/privacy/policy/" target="_blank" tabindex="200">https://www.facebook.com/privacy/policy/</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, .panel:nth-child(3) > label > input[type="checkbox"][aria-label="toggle on or off"]`
  - **HTML:** `<input tabindex="4" type="checkbox" name="b990c49c-854d-4eb0-b2e7-cd19af721a90" aria-label="toggle on or off">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, .panel:nth-child(3) > button[aria-label="toggle content visibility"][type="button"]`
  - **HTML:** `<button tabindex="4" type="button" aria-label="toggle content visibility">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, .panel:nth-child(3) > ul > li > a[href$="privacy"]`
  - **HTML:** `<a href="https://youtube.com/privacy" target="_blank" tabindex="200">https://youtube.com/privacy</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, button[type="button"]:nth-child(2)`
  - **HTML:** `<button tabindex="100" type="button">Godta alle</button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#kit-ccm, div > button[type="button"]:nth-child(3)`
  - **HTML:** `<button tabindex="100" type="button">Avvis alle</button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

