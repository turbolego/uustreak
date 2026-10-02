# WCAG Violations Report for Handel og Kontor i Norge

**Timestamp:** 2026-10-02T17:12:34.320Z
**URL:** [https://hk.no/](https://hk.no/)
**Total Violations:** 5

## Violation Details

### ARIA hidden element must not be focusable or contain focusable elements

- **Impact:** serious
- **Description:** Ensure aria-hidden elements are not focusable nor contain focusable elements
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-hidden-focus?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-10.8.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.uagb-block-9bbc347e > .slick-list.draggable > .slick-track > .slick-slide[data-slick-index="1"][aria-hidden="true"]`
  - **HTML:** `<div class="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 402px;">`
  - **Failure summary:** Fix all of the following: Focusable content should have tabindex="-1" or be removed from the DOM

- **Target:** `#bai-open-chat-btn`
  - **HTML:** `<button id="bai-open-chat-btn" aria-hidden="true" class="tooltiped-element" title="Spør Sidsel om spørsmål om ditt medlemskap" type="button" onclick="javascript:openChat()"> &nbsp; </button>`
  - **Failure summary:** Fix all of the following: Focusable content should be disabled or be removed from the DOM


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.arrangementPage__info__months--previous`
  - **HTML:** `<button class="arrangementPage__info__months--previous" disabled=""></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.arrangementPage__info__months--next`
  - **HTML:** `<button class="arrangementPage__info__months--next"></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.slick-current.slick-active[data-slick-index="2"] > div > .uagb-post__inner-wrap > h5`
  - **HTML:** `<h5 class="uagb-post__title uagb-post__text"> <a href="https://hk.no/2026/09/en-million-kroner-til-norsk-folkehjelp/" target="_self" rel="bookmark noopener noreferrer" tabindex="0">Én million kroner til Norsk Folkehjelp</a> </h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.slick-slide[data-slick-index="2"][aria-hidden="true"] > div > .uagb-post__inner-wrap > h5`
  - **HTML:** `<h5 class="uagb-post__title uagb-post__text"> <a href="https://hk.no/bransjer/fagbevegelse/" target="_self" rel="bookmark noopener noreferrer" tabindex="0">Fagbevegelse</a> </h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.slick-current.slick-active[data-slick-index="2"] > div > .uagb-post__inner-wrap > .uagb-post__image > a[rel="bookmark noopener noreferrer"][target="_self"]`
  - **HTML:** `<a href="https://hk.no/2026/09/en-million-kroner-til-norsk-folkehjelp/" target="_self" rel="bookmark noopener noreferrer" tabindex="0">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.uagb-block-9bbc347e > .slick-list.draggable > .slick-track > .slick-active[data-slick-index="3"][aria-hidden="false"] > div > .uagb-post__inner-wrap > .uagb-post__image > a[rel="bookmark noopener noreferrer"][target="_self"]`
  - **HTML:** `<a href="https://hk.no/2026/09/afp-konferansen-og-veien-videre/" target="_self" rel="bookmark noopener noreferrer" tabindex="0">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.uagb-block-9bbc347e > .slick-list.draggable > .slick-track > .slick-active[data-slick-index="4"][aria-hidden="false"] > div > .uagb-post__inner-wrap > .uagb-post__image > a[rel="bookmark noopener noreferrer"][target="_self"]`
  - **HTML:** `<a href="https://hk.no/2026/09/forslag-til-en-ny-avtalefestet-pensjon-afp/" target="_self" rel="bookmark noopener noreferrer" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.slick-current.slick-active[data-slick-index="3"] > div > .uagb-post__inner-wrap > .uagb-post__image > a[rel="bookmark noopener noreferrer"][target="_self"]`
  - **HTML:** `<a href="https://hk.no/bransjer/finans-og-eiendom/" target="_self" rel="bookmark noopener noreferrer" tabindex="0">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#content"> Hopp rett til innholdet</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#bounceText`
  - **HTML:** `<div id="bounceText" class="animated bounceInRight">Hei, jeg heter Sidsel. Hva kan jeg hjelpe med? </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

