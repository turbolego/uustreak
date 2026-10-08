# WCAG Violations Report for Clas Ohlson AS

**Timestamp:** 2026-10-08T10:18:03.425Z
**URL:** [https://www.clasohlson.com/no/](https://www.clasohlson.com/no/)
**Total Violations:** 7

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.header`
  - **HTML:** `<ul class="header mainNavigation clubMenu nav__links nav__links--products js-offcanvas-links" role="menubar">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: li, [role=button]


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.carousel__component.carousel-component-parent.right-shadow:nth-child(9) > .carousel__component--headline:nth-child(1) > .title-two`
  - **HTML:** `<h2 class="title-two"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from LiveChat
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#cx-livechat-host, iframe[name="cx-webChatButton"]`
  - **HTML:** `<iframe name="cx-webChatButton" src="https://livechat-clasohlson.connexone.co.uk/button.html?connid=696921f4-9106-4fa0-88f1-7f8e359b5ae4"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#cx-livechat-host, iframe[name="cx-webChatWindow"]`
  - **HTML:** `<iframe name="cx-webChatWindow" src="https://livechat-clasohlson.connexone.co.uk/chatWindow.html?connid=696921f4-9106-4fa0-88f1-7f8e359b5ae4"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Elektro/Lamper-og-belysning/Fasadebelysning/c/1302?scr=1&sc=1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Hjem/Interiør-og-dekorasjoner/LED-lys/c/1403?scr=1&sc=2">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Jul/Julebelysning/c/2525?scr=1&sc=3">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Elektro/Lamper-og-belysning/Bordlamper/c/1311?scr=1&sc=4">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.custom-spare-part-li`
  - **HTML:** `<li class="auto nav__links--primary js-enquire-has-sub-new custom-spare-part-li">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list"


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.active[role="tab"]`
  - **HTML:** `<li class="active" role="tab" aria-selected="true"><span><a rel="nofollow" href="?SiteView=B2C">Privatkunde</a></span></li>`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `li[role="tab"]:nth-child(2)`
  - **HTML:** `<li role="tab" aria-selected="false"><span><a rel="nofollow" href="?SiteView=B2B">Bedriftskunde</a></span></li>`
  - **Failure summary:** Fix any of the following: Element has focusable descendants


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from LiveChat
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#cx-livechat-host, iframe[name="cx-webChatButton"], #container`
  - **HTML:** `<div id="container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

