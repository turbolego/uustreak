# WCAG Violations Report for Stavanger Turistforening

**Timestamp:** 2026-10-09T05:10:43.580Z
**URL:** [https://www.dnt.no/stavanger](https://www.dnt.no/stavanger)
**Total Violations:** 10

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avslå alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true">Avslå alle</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.cookie_cat_functional > .coi-consent-banner__checkmark`
  - **HTML:** `<div aria-label="checkbox-label-cookie_cat_functional" class="coi-consent-banner__checkmark"></div>`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.

- **Target:** `.cookie_cat_statistic > .coi-consent-banner__checkmark`
  - **HTML:** `<div aria-label="checkbox-label-cookie_cat_statistic" class="coi-consent-banner__checkmark"></div>`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.

- **Target:** `.cookie_cat_marketing > .coi-consent-banner__checkmark`
  - **HTML:** `<div aria-label="checkbox-label-cookie_cat_marketing" class="coi-consent-banner__checkmark"></div>`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.


### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 8

#### Affected Elements:

- **Target:** `button[aria-controls="modal-613280"]`
  - **HTML:** `<button aria-controls="modal-613280" aria-labelledby="activity-name-613280 activity-date-613280 activity-geo-613280 activity-details-613280" class="cursor-pointer inset-0 !absolute w-full h-full focus-outline z-10"><span class="sr-only">Åp…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="modal-613280"

- **Target:** `button[aria-controls="modal-614228"]`
  - **HTML:** `<button aria-controls="modal-614228" aria-labelledby="activity-name-614228 activity-date-614228 activity-geo-614228 activity-details-614228" class="cursor-pointer inset-0 !absolute w-full h-full focus-outline z-10"><span class="sr-only">Åp…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="modal-614228"

- **Target:** `button[aria-controls="modal-614227"]`
  - **HTML:** `<button aria-controls="modal-614227" aria-labelledby="activity-name-614227 activity-date-614227 activity-geo-614227 activity-details-614227" class="cursor-pointer inset-0 !absolute w-full h-full focus-outline z-10"><span class="sr-only">Åp…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="modal-614227"

- **Target:** `button[aria-controls="modal-578528"]`
  - **HTML:** `<button aria-controls="modal-578528" aria-labelledby="activity-name-578528 activity-date-578528 activity-geo-578528 activity-details-578528" class="cursor-pointer inset-0 !absolute w-full h-full focus-outline z-10"><span class="sr-only">Åp…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="modal-578528"

- **Target:** `button[aria-controls="modal-593277"]`
  - **HTML:** `<button aria-controls="modal-593277" aria-labelledby="activity-name-593277 activity-date-593277 activity-geo-593277 activity-details-593277" class="cursor-pointer inset-0 !absolute w-full h-full focus-outline z-10"><span class="sr-only">Åp…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="modal-593277"

- **Target:** `button[aria-controls="modal-615536"]`
  - **HTML:** `<button aria-controls="modal-615536" aria-labelledby="activity-name-615536 activity-date-615536 activity-geo-615536 activity-details-615536" class="cursor-pointer inset-0 !absolute w-full h-full focus-outline z-10"><span class="sr-only">Åp…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="modal-615536"

- **Target:** `button[aria-controls="modal-578971"]`
  - **HTML:** `<button aria-controls="modal-578971" aria-labelledby="activity-name-578971 activity-date-578971 activity-geo-578971 activity-details-578971" class="cursor-pointer inset-0 !absolute w-full h-full focus-outline z-10"><span class="sr-only">Åp…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="modal-578971"

- **Target:** `button[aria-controls="modal-619515"]`
  - **HTML:** `<button aria-controls="modal-619515" aria-labelledby="activity-name-619515 activity-date-619515 activity-geo-619515 activity-details-619515" class="cursor-pointer inset-0 !absolute w-full h-full focus-outline z-10"><span class="sr-only">Åp…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="modal-619515"


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#photocredit-icon`
  - **HTML:** `<button type="button" id="photocredit-icon" class="button-rounded-transparent leading-4 !px-1 z-40">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 6

#### Affected Elements:

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(1) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
  - **HTML:** `<h4 class="text-sm text-black font-light mt-2.5 hyphens-auto"> </h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(2) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
  - **HTML:** `<h4 class="text-sm text-black font-light mt-2.5 hyphens-auto"> </h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(3) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
  - **HTML:** `<h4 class="text-sm text-black font-light mt-2.5 hyphens-auto"> </h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(4) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
  - **HTML:** `<h4 class="text-sm text-black font-light mt-2.5 hyphens-auto"> </h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(5) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
  - **HTML:** `<h4 class="text-sm text-black font-light mt-2.5 hyphens-auto"> </h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(6) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
  - **HTML:** `<h4 class="text-sm text-black font-light mt-2.5 hyphens-auto"> </h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 11

#### Affected Elements:

- **Target:** `.md\:max-w-\[284px\] > .border.hover\:shadow-md.border-beige-200 > .bg-topography.overflow-hidden.rounded-lg > picture > .h-38.object-center.object-cover`
  - **HTML:** `<img src="https://www.dnt.no/cdn-cgi/image/width=870,height=240,fit=crop,gravity=face,format=auto/https://www.dnt.no//globalassets/fotoware/2026/6/2025sommerkontor_foto_mariusdalseg_244.jpg?format=auto" class="h-38 w-full object-cover obje…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.bg-beige-50.bleeding-edges.py-10 > .grid-cols-12.gap-y-6.container > .col-start-2.md\:col-start-9.md\:col-span-3 > .border.hover\:shadow-md.border-beige-200 > .bg-topography.overflow-hidden.rounded-lg > picture > .h-38.object-center.object-cover`
  - **HTML:** `<img src="https://www.dnt.no/cdn-cgi/image/width=870,height=240,fit=crop,gravity=face,format=auto/https://www.dnt.no//globalassets/fotoware/2024/11/0624_skapet_fotomariusdalseg_dnt_12.jpg?format=auto" class="h-38 w-full object-cover object…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div:nth-child(2) > .bleeding-edges.py-10 > .grid-cols-12.gap-y-6.container > .col-start-2.md\:col-start-9.md\:col-span-3 > .border.hover\:shadow-md.border-beige-200 > .bg-topography.overflow-hidden.rounded-lg > picture > .h-38.object-center.object-cover`
  - **HTML:** `<img src="https://www.dnt.no/cdn-cgi/image/width=870,height=240,fit=crop,gravity=face,format=auto/https://www.dnt.no//globalassets/fotoware/2023/6/floerli_turiststasjon-13.jpg?format=auto" class="h-38 w-full object-cover object-center">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(1) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
  - **HTML:** `<img src="/cdn-cgi/image/format=auto,width=256,height=100,onerror=redirect,fit=contain/contentassets/1b8c3d86921e41708d726846da0cf524/lyse_logo_mork_gronn.png?format=auto">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(2) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
  - **HTML:** `<img src="/cdn-cgi/image/format=auto,width=256,height=100,onerror=redirect,fit=contain/contentassets/1b8c3d86921e41708d726846da0cf524/slb_logo_2022.svg.png?format=auto">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(3) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
  - **HTML:** `<img src="/cdn-cgi/image/format=auto,width=256,height=100,onerror=redirect,fit=contain/globalassets/foreninger/dnt-stavanger-og-omegn/rsb_logo_turistforeningen_mobil-320x400.png?format=auto">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(4) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
  - **HTML:** `<img src="/cdn-cgi/image/format=auto,width=256,height=100,onerror=redirect,fit=contain/contentassets/1b8c3d86921e41708d726846da0cf524/bate_logo_rod_orig.png?format=auto">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(5) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
  - **HTML:** `<img src="/cdn-cgi/image/format=auto,width=256,height=100,onerror=redirect,fit=contain/globalassets/foreninger/dnt-stavanger-og-omegn/totalenergies_logosverticalstotalenergies_logo_rgb.png?format=auto">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(6) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
  - **HTML:** `<img src="/cdn-cgi/image/format=auto,width=256,height=100,onerror=redirect,fit=contain/contentassets/1b8c3d86921e41708d726846da0cf524/wwwplatousportcom__032c.jpg?format=auto">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(7) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
  - **HTML:** `<img src="/cdn-cgi/image/format=auto,width=256,height=100,onerror=redirect,fit=contain/contentassets/1b8c3d86921e41708d726846da0cf524/mb_ganddal_sort_cmyk.png?format=auto">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(8) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
  - **HTML:** `<img src="/cdn-cgi/image/format=auto,width=256,height=100,onerror=redirect,fit=contain/contentassets/c149a441bfdf4fe0abf71e95f5c8611d/folkehallene8x.png?format=auto">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(1) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .inset-0.\!absolute.z-50`
  - **HTML:** `<a href="https://www.lyse.no/strom/hytte?utm_campaign=strom_hytte_salg&amp;utm_medium=banner&amp;utm_source=turistforeningen" class="!absolute inset-0 z-50 focus-outline"> <span class="sr-only"> </span> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(2) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .inset-0.\!absolute.z-50`
  - **HTML:** `<a href="https://www.slb.com/about/who-we-are/our-global-presence/slb-scandinavia" class="!absolute inset-0 z-50 focus-outline"> <span class="sr-only"> </span> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="dengulebanken.no/"]`
  - **HTML:** `<a href="https://www.dengulebanken.no/" class="!absolute inset-0 z-50 focus-outline"> <span class="sr-only"> </span> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="bate.no/"]`
  - **HTML:** `<a href="https://bate.no/" class="!absolute inset-0 z-50 focus-outline"> <span class="sr-only"> </span> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.w-\[180px\].h-\[160px\]:nth-child(5) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .inset-0.\!absolute.z-50`
  - **HTML:** `<a href="https://corporate.totalenergies.no/" class="!absolute inset-0 z-50 focus-outline"> <span class="sr-only"> </span> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="platousport.com/"]`
  - **HTML:** `<a href="https://www.platousport.com/" class="!absolute inset-0 z-50 focus-outline"> <span class="sr-only"> </span> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.fixed`
  - **HTML:** `<div class="fixed w-full top-0 z-[2000] flex justify-center skip-to-main-content"> <a id="go-to-top" href="#main-content">Hopp til hovedinnhold</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.w-auto`
  - **HTML:** `<div class="relative w-auto h-full max-w-[2000px] bg-cover mx-auto mb-24">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text-\[17px\]`
  - **HTML:** `<div class="font-headers text-[17px] px-4 font-normal"> DNT Stavanger og omegn </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

