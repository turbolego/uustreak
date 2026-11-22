# WCAG Violations Report for Menova AS

**Timestamp:** 2026-11-22T05:34:01.049Z
**URL:** [https://menova.menova.no/](https://menova.menova.no/)
**Total Violations:** 5

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `div[role="dialog"]`
  - **HTML:** `<div tabindex="-1" role="dialog">.</div>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `a[href$="mailto:tw@menova.no"]`
  - **HTML:** `<a href="mailto:tw@menova.no" role="link">tw@menova.no</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.93 (foreground color: #0981ea, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="karrierepasset.no"] > span`
  - **HTML:** `<span style="font-weight: 400;">Karrierepasset.no</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.93 (foreground color: #0981ea, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `p:nth-child(2) > a[href$="mailto:post@menova.no"][role="link"]`
  - **HTML:** `<a href="mailto:post@menova.no" role="link">post@menova.no</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.73 (foreground color: #0981ea, background color: #f9f9f9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h4`
  - **HTML:** `<h4><strong>TILSKUDDSORDNING VIA NAV</strong></h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.et_pb_lightbox_image`
  - **HTML:** `<a href="https://usercontent.one/wp/menova.menova.no/wp-content/uploads/2026/10/vekstgaven_nett.png?media=1793865467" class="et_pb_lightbox_image" title="" role="link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.et_pb_image_9 > a[target="_blank"][role="link"]`
  - **HTML:** `<a href="https://www.kopano.no/aktuelt/per-olav-skurdal-hopso-blir-ny-daglig-leder-i-kopano" target="_blank" role="link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.et_pb_image_10 > a[target="_blank"][role="link"]`
  - **HTML:** `<a href="https://www.kopano.no/aktuelt/pa-dn-gaselle-listen-for-forste-gang-kopano-modellen-virker" target="_blank" role="link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.et_pb_image_11 > a[target="_blank"][role="link"]`
  - **HTML:** `<a href="https://www.kopano.no/aktuelt/lonnstilskudd-et-pengesluk-vi-ma-revurdere" target="_blank" role="link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.et_pb_image_12 > a[target="_blank"][role="link"]`
  - **HTML:** `<a href="https://www.kopano.no/aktuelt/na-kan-du-lage-ditt-eget-karrierepass-helt-gratis" target="_blank" role="link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.et_pb_image_13 > a[target="_blank"][role="link"]`
  - **HTML:** `<a href="https://www.kopano.no/aktuelt/slik-kan-flerspraklige-styrke-din-bedrift" target="_blank" role="link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `#et-info-phone`
  - **HTML:** `<span id="et-info-phone">32181310</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#et-info > a[href$="mailto:post@menova.no"][role="link"]`
  - **HTML:** `<a href="mailto:post@menova.no" role="link"><span id="et-info-email">post@menova.no</span></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#et-secondary-nav > .menu-item-239975.menu-item-has-children.menu-item-type-custom > .dah-submenu[href="#"][role="link"]`
  - **HTML:** `<a href="#" class="dah-submenu" aria-expanded="false" role="link">VÅRE MEDARBEIDERE</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#et-secondary-nav > .menu-item-239978.menu-item-has-children.menu-item-type-custom > .dah-submenu[href="#"][role="link"]`
  - **HTML:** `<a href="#" class="dah-submenu" aria-expanded="false" role="link">VÅRE NETTSTEDER</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#et-secondary-nav > .menu-item-239986.menu-item-has-children.menu-item-type-custom > .dah-submenu[href="#"][role="link"]`
  - **HTML:** `<a href="#" class="dah-submenu" aria-expanded="false" role="link">KONTAKT</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#et-secondary-nav > .menu-item-239990.menu-item-type-custom.menu-item-object-custom`
  - **HTML:** `<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-239990"><a target="_blank" href="https://www.karriereportalen.no/nyhetsarkiv/category1813.html" role="link">AKTUELT</a></li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#et-secondary-nav > .menu-item-240685.menu-item-has-children.menu-item-type-custom > .dah-submenu[href="#"][role="link"]`
  - **HTML:** `<a href="#" class="dah-submenu" aria-expanded="false" role="link">SOME</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

