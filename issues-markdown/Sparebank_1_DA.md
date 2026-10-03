# WCAG Violations Report for Sparebank 1 DA

**Timestamp:** 2026-10-03T04:21:16.257Z
**URL:** [https://www.sparebank1.no/nb/bank/privat.html](https://www.sparebank1.no/nb/bank/privat.html)
**Total Violations:** 3

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.optin`
  - **HTML:** `<div role="dialog" class="optin" aria-live="polite" tabindex="0" aria-describedby="modalDescription">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.background`
  - **HTML:** `<a class="background mod-image campaign-bg__img campaign-img--track" href="https://www.sparebank1.no/nb/bank/om-oss/rekke-opp-handa.html?icid=forside;;samfunn;;hovedbanner;;sb1u-4ekke-opp-handa;;privat">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#contact-tab1`
  - **HTML:** `<li class="customer-action__list-item" id="contact-tab1" data-menu-section="contact-call-template" aria-controls="panel1" role="tab">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#contact-tab2`
  - **HTML:** `<li class="customer-action__list-item" id="contact-tab2" data-menu-section="contact-appointment-template" aria-controls="panel2" role="tab">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#contact-tab3`
  - **HTML:** `<li class="customer-action__list-item" id="contact-tab3" data-menu-section="contact-message-template" aria-controls="panel3" role="tab">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#contact-tab4`
  - **HTML:** `<li class="customer-action__list-item" id="contact-tab4" data-menu-section="find-us-template" aria-controls="panel4" role="tab">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#contact-tab5`
  - **HTML:** `<li class="customer-action__list-item" id="contact-tab5" data-menu-section="contact-chat-template" aria-controls="panel5" role="tab">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

