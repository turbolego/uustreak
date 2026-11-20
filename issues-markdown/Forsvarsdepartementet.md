# WCAG Violations Report for Forsvarsdepartementet

**Timestamp:** 2026-11-20T06:11:47.631Z
**URL:** [https://www.regjeringen.no/no/dep/fd/id380/](https://www.regjeringen.no/no/dep/fd/id380/)
**Total Violations:** 2

## Violation Details

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.whole-thing:nth-child(2) > .accordion[type="button"]`
  - **HTML:** `<button class="accordion" type="button"><div class="custom-checkbox"><input class="checkbox" id="consentCheckBox_FORM" type="checkbox" name="consentCB" value="FORM" data-required="false"><label for="consentCheckBox_FORM">Skjema</label></di…`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.logo_blackEdt`
  - **HTML:** `<div class="logo_blackEdt"><span><a id="logoATag"><span class="logotxt">Regjeringen.no</span><span></span></a></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#cookieH2`
  - **HTML:** `<h2 id="cookieH2" class="pd-40 mrgb-0">Vi bruker informasjonskapsler</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#desc`
  - **HTML:** `<div id="desc">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.skipLink`
  - **HTML:** `<a href="#mainContent" class="skipLink"> Til hovedinnhold </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

