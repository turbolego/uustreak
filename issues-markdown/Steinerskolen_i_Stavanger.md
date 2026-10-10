# WCAG Violations Report for Steinerskolen i Stavanger

**Timestamp:** 2026-10-10T08:20:27.768Z
**URL:** [https://www.steinerskolen-stavanger.no/](https://www.steinerskolen-stavanger.no/)
**Total Violations:** 5

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.fl-node-f7jqh8tbrv0m`
  - **HTML:** `<div class="fl-module fl-module-rich-text fl-node-f7jqh8tbrv0m" data-node="f7jqh8tbrv0m" aria-label="Tekstbehandler"> <div class="fl-module-content fl-node-content"> <div class="fl-rich-text"> </div> </div> </div>`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.

- **Target:** `.fl-node-ekjfmu26rpao`
  - **HTML:** `<div class="fl-module fl-module-heading fl-node-ekjfmu26rpao" data-node="ekjfmu26rpao" aria-label="Overskrift"> <div class="fl-module-content fl-node-content"> <h2 class="fl-heading"> <span class="fl-heading-text"></span> </h2> </div> </di…`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.

- **Target:** `.fl-node-vgy7joq2smda`
  - **HTML:** `<div class="fl-module fl-module-rich-text fl-node-vgy7joq2smda" data-node="vgy7joq2smda" aria-label="Tekstbehandler"> <div class="fl-module-content fl-node-content"> <div class="fl-rich-text"> </div> </div> </div>`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.

- **Target:** `.fl-node-g94xy5ruqoib`
  - **HTML:** `<div class="fl-module fl-module-rich-text fl-node-g94xy5ruqoib" data-node="g94xy5ruqoib" aria-label="Tekstbehandler"> <div class="fl-module-content fl-node-content"> <div class="fl-rich-text"> </div> </div> </div>`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h2`
  - **HTML:** `<h2 class="fl-heading"> <span class="fl-heading-text"></span> </h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.pp-menu-default > nav`
  - **HTML:** `<nav class="pp-menu-nav" aria-label="Menu" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#fl-icon-text-8w7hzopxga04 > .fl-icon-text-link.fl-icon-text-wrap[href="http://986%2055%20321"]`
  - **HTML:** `<a href="http://986%2055%20321" target="_self" class="fl-icon-text-link fl-icon-text-wrap"> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `p > .fl-icon-text-link.fl-icon-text-wrap[href="http://986%2055%20321"]`
  - **HTML:** `<a href="http://986%2055%20321" target="_self" class="fl-icon-text-link fl-icon-text-wrap"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.pp-social-icon[itemscope=""]:nth-child(1) > a[title=""][aria-label=""][itemprop="sameAs"]`
  - **HTML:** `<a itemprop="sameAs" href="https://www.facebook.com/steinerskolenstavanger" target="_self" title="" aria-label="" role="button"> <i class="fab fa-facebook-square"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.pp-social-icon[itemscope=""]:nth-child(2) > a[title=""][aria-label=""][itemprop="sameAs"]`
  - **HTML:** `<a itemprop="sameAs" href="https://www.instagram.com/gs_steinerskolenistavanger/" target="_self" title="" aria-label="" role="button"> <i class="fab fa-instagram-square"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.cky-title`
  - **HTML:** `<p class="cky-title" role="heading" aria-level="1" data-cky-tag="title" style="color: #212121;"> Vi respekterer personvernet ditt </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cky-notice-des`
  - **HTML:** `<div class="cky-notice-des" data-cky-tag="description" style="color: #212121;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fl-screen-reader-text`
  - **HTML:** `<a aria-label="Hopp til innhold" class="fl-screen-reader-text" href="#fl-main-content">Hopp til innhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

