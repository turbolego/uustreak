# WCAG Violations Report for Innherred renovasjon IKS

**Timestamp:** 2026-11-22T06:20:04.461Z
**URL:** [https://innherredrenovasjon.no/](https://innherredrenovasjon.no/)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Avvis alle</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.fl-module-smart-operating-message`
  - **HTML:** `<div class="fl-module fl-module-smart-operating-message fl-node-x0be7zloqha5" data-node="x0be7zloqha5" aria-label="Smart Driftsmelding"> <div class="fl-module-content fl-node-content"> <div class="smart-operating-messages-wrapper" data-lay…`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.

- **Target:** `.fl-node-6ou4gkv5tc37`
  - **HTML:** `<div class="fl-module fl-module-rich-text fl-node-6ou4gkv5tc37" data-node="6ou4gkv5tc37" aria-label="Tekstbehandler"> <div class="fl-module-content fl-node-content"> <div class="fl-rich-text"> <p>&nbsp;</p> <p>&nbsp;</p> </div> </div> </di…`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.

- **Target:** `.fl-node-5fd07e2f4a218`
  - **HTML:** `<div class="fl-module fl-module-smart-icon fl-node-5fd07e2f4a218" data-node="5fd07e2f4a218" aria-label="Smart ikon">`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.

- **Target:** `.fl-node-5fd07e2f4a21d`
  - **HTML:** `<div class="fl-module fl-module-smart-icon fl-node-5fd07e2f4a21d" data-node="5fd07e2f4a21d" aria-label="Smart ikon">`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.

- **Target:** `.fl-node-5fd07e2f4a222`
  - **HTML:** `<div class="fl-module fl-module-smart-icon fl-node-5fd07e2f4a222" data-node="5fd07e2f4a222" aria-label="Smart ikon">`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.

- **Target:** `.fl-node-5fd07e2f4a228`
  - **HTML:** `<div class="fl-module fl-module-smart-icon fl-node-5fd07e2f4a228" data-node="5fd07e2f4a228" aria-label="Smart ikon">`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.

- **Target:** `.fl-node-5fd07e2f4a22d`
  - **HTML:** `<div class="fl-module fl-module-smart-icon fl-node-5fd07e2f4a22d" data-node="5fd07e2f4a22d" aria-label="Smart ikon">`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.

- **Target:** `.fl-node-5fd07e2f4a232`
  - **HTML:** `<div class="fl-module fl-module-smart-icon fl-node-5fd07e2f4a232" data-node="5fd07e2f4a232" aria-label="Smart ikon">`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.


### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#address-search`
  - **HTML:** `<input id="address-search" class="big-search__input" placeholder="F.eks. Åsaunvegen 5" type="search" aria-autocomplete="list" aria-controls="search-suggestions" autocomplete="off" tabindex="0" value="">`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="search-suggestions"


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.header__content > .navigation--top`
  - **HTML:** `<nav class="navigation navigation--top">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 9

#### Affected Elements:

- **Target:** `li[data-municipality="tydal"] > .station > .station__wrapper > .station__content > .station__content__link`
  - **HTML:** `<a class="station__content__link" href="/enhet/tydal-gjenvinningsstasjon">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `li[data-municipality="selbu"] > .station > .station__wrapper > .station__content > .station__content__link`
  - **HTML:** `<a class="station__content__link" href="/enhet/selbu-gjenvinningsstasjon">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `li[data-municipality="malvik"] > .station > .station__wrapper > .station__content > .station__content__link`
  - **HTML:** `<a class="station__content__link" href="/enhet/malvik-gjenvinningsstasjon">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `li[data-municipality="meraker"] > .station > .station__wrapper > .station__content > .station__content__link`
  - **HTML:** `<a class="station__content__link" href="/enhet/meraker-gjenvinningsstasjon">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `li[data-municipality="stjordal"] > .station > .station__wrapper > .station__content > .station__content__link`
  - **HTML:** `<a class="station__content__link" href="/enhet/stjordal-gjenvinningsstasjon">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `li[data-municipality="frosta"] > .station > .station__wrapper > .station__content > .station__content__link`
  - **HTML:** `<a class="station__content__link" href="/enhet/frosta-gjenvinningsstasjon">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `li[data-municipality="levanger"] > .station > .station__wrapper > .station__content > .station__content__link`
  - **HTML:** `<a class="station__content__link" href="/enhet/levanger-gjenvinningsstasjon">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `li[data-municipality="verdal"] > .station > .station__wrapper > .station__content > .station__content__link`
  - **HTML:** `<a class="station__content__link" href="/enhet/verdal-gjenvinningsstasjon">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `li[data-municipality="inderoy"] > .station > .station__wrapper > .station__content > .station__content__link`
  - **HTML:** `<a class="station__content__link" href="/enhet/inderoy-gjenvinningsstasjon">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.skip-links`
  - **HTML:** `<div class="skip-links">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

