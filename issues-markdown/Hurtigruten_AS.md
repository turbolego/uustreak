# WCAG Violations Report for Hurtigruten AS

**Timestamp:** 2026-10-09T05:02:24.843Z
**URL:** [https://www.hurtigruten.com/nb-no](https://www.hurtigruten.com/nb-no)
**Total Violations:** 5

## Violation Details

### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.styles_destination__Nog60 > .styles_searchPlannerButton__OxudZ[role="tab"][aria-controls="search-planner-tabs"]`
  - **HTML:** `<button type="button" role="tab" aria-selected="false" aria-controls="search-planner-tabs" class="styles_searchPlannerButton__OxudZ">`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist

- **Target:** `div:nth-child(2) > .styles_searchPlannerButton__OxudZ[role="tab"][aria-controls="search-planner-tabs"]`
  - **HTML:** `<button type="button" role="tab" aria-selected="false" aria-controls="search-planner-tabs" class="styles_searchPlannerButton__OxudZ">`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist

- **Target:** `.styles_duration__hHAoo > .styles_searchPlannerButton__OxudZ[role="tab"][aria-controls="search-planner-tabs"]`
  - **HTML:** `<button type="button" role="tab" aria-selected="false" aria-controls="search-planner-tabs" class="styles_searchPlannerButton__OxudZ">`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.styles_socialLink__M6Omi[rel="noopener noreferrer"][target="_blank"]:nth-child(1)`
  - **HTML:** `<a target="_blank" rel="noopener noreferrer" class="styles_socialLink__M6Omi" href="https://www.youtube.com/c/hurtigruten">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.styles_socialLink__M6Omi[rel="noopener noreferrer"][target="_blank"]:nth-child(2)`
  - **HTML:** `<a target="_blank" rel="noopener noreferrer" class="styles_socialLink__M6Omi" href="https://www.facebook.com/hurtigrutenglobal">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.styles_socialLink__M6Omi[rel="noopener noreferrer"][target="_blank"]:nth-child(3)`
  - **HTML:** `<a target="_blank" rel="noopener noreferrer" class="styles_socialLink__M6Omi" href="https://www.instagram.com/hurtigruten/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.styles_contact__3TsYS > ul`
  - **HTML:** `<ul><a href="tel:+4775987781">+4775987781</a><a href="mailto:booking@hurtigruten.com">booking@hurtigruten.com</a><a href="/nb-no/hjelp/kontakt-oss">Kontakt oss</a></ul>`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: a


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.promoStyles_lgView__S_OoW > span`
  - **HTML:** `<span>Havn til havn-reiser: reis langs favorittstrekningen din.</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.promoStyles_lgView__S_OoW > .styles_linkButton__ELdsG[rel=""][target="_self"] > .styles_btnInner___iGIh > .styles_btnText__qlsBU`
  - **HTML:** `<span class="styles_btnText__qlsBU" style="visibility:visible">Bestill nå</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.styles_newsLetterContainer__tSOhS > .styles_wrapper__LfF0i.no-width-control > div > .styles_titleWrapper__BalEl`
  - **HTML:** `<div class="styles_titleWrapper__BalEl"><h2 class="styles_title__1IJed">Meld deg på nyhetsbrevet vårt</h2></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.styles_newsLetterContainer__tSOhS > .styles_wrapper__LfF0i.no-width-control > div > .styles_contentWrapper__ASMNd`
  - **HTML:** `<div class="styles_contentWrapper__ASMNd"><div class="styles_richTextFlowContainer__It5D0"><p>Få nyheter, spennende nye reiseruter og inspirerende artikler direkte i innboksen din.</p></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="nyhetsbrev"] > .styles_btnInner___iGIh > .styles_btnText__qlsBU`
  - **HTML:** `<span class="styles_btnText__qlsBU" style="visibility:visible">Ja, meld meg på</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `select`
  - **HTML:** `<select class="styles_selectStyle__UTtq4">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

