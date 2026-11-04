# WCAG Violations Report for Skadberg skole

**Timestamp:** 2026-11-04T05:34:23.559Z
**URL:** [https://skadberg.solaskolen.no/](https://skadberg.solaskolen.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `a[href="/"]`
  - **HTML:** `<a href="/" style="text-decoration: none; color:inherit">Skadberg skole</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.83 (foreground color: #ffffff, background color: #f4364c, font size: 17.3pt (23px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#acceptNecessary`
  - **HTML:** `<button id="acceptNecessary">Godta kun nødvendige cookies</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.13 (foreground color: #ffffff, background color: #28a745, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#acceptAll`
  - **HTML:** `<button id="acceptAll">Godta alle cookies</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.13 (foreground color: #ffffff, background color: #28a745, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 4

#### Affected Elements:

- **Target:** `a[href="index.php?artID=428&navB=1"]`
  - **HTML:** `<a href="index.php?artID=428&navB=1" aria-label="En opplevelsesrik og lærerik dag på museum for 4A og 4C!">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href="index.php?artID=427&navB=1"]`
  - **HTML:** `<a href="index.php?artID=427&navB=1" aria-label="Uteskole med 3.trinn">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href="index.php?artID=418&navB=1"]`
  - **HTML:** `<a href="index.php?artID=418&navB=1" aria-label="Innkjøring i skolegården">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href="index.php?artID=416&navB=1"]`
  - **HTML:** `<a href="index.php?artID=416&navB=1" aria-label="FAU inviterer til kostymebyttedag">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#cookieConsentOverlay`
  - **HTML:** `<div id="cookieConsentOverlay" class="active">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

