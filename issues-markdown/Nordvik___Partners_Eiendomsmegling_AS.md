# WCAG Violations Report for Nordvik & Partners Eiendomsmegling AS

**Timestamp:** 2026-10-03T04:16:13.028Z
**URL:** [https://www.nordvik.no/](https://www.nordvik.no/)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[title="Bruktbil Levering Web"], body`
  - **HTML:** `<body role="presentation" class="vp-center">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `section:nth-child(1) > h4`
  - **HTML:** `<h4 class="uppercase text-xs leading-3 -ml-2 px-2 pb-2.5 text-grey">Bil</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.w-24`
  - **HTML:** `<a href="https://www.nordvik.no" class="w-24 rounded-md md:w-32 md:p-3">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.w-36`
  - **HTML:** `<a href="https://www.nordvik.no" class="block w-36 -ml-3 p-3 rounded-md">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 15

#### Affected Elements:

- **Target:** `.pl-2`
  - **HTML:** `<div class="z-10 flex flex-col justify-center max-w-lg col-start-1 row-start-1 py-10 pl-2 pr-10 text-white bg-opacity-50 centerVideoContainer bg-black-500 md:max-h-screen-1/2 md:pl-10">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.py-10.md\:py-12[title="Bruktbil"] > div:nth-child(2)`
  - **HTML:** `<div><h3 class="font-medium text-white md:text-lg md:leading-7">Bruktbil</h3><p class="mt-3 md:mt-2.5 text-sm leading-4 text-grey">Finn din bruktbil her</p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.py-10[title="Nettbutikk"][href$="shop.nordvik.no/"] > div:nth-child(2)`
  - **HTML:** `<div><h3 class="font-medium text-white md:text-lg md:leading-7">Nettbutikk</h3><p class="mt-3 md:mt-2.5 text-sm leading-4 text-grey">Se utvalg i nettbutikken</p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Bestill time"] > div:nth-child(2)`
  - **HTML:** `<div><h3 class="font-medium text-white md:text-lg md:leading-7">Bestill time</h3><p class="mt-3 md:mt-2.5 text-sm leading-4 text-grey">Bestill verkstedtime her</p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.py-10.md\:py-12[title="Kampanjer"] > div:nth-child(2)`
  - **HTML:** `<div><h3 class="font-medium text-white md:text-lg md:leading-7">Kampanjer</h3><p class="mt-3 md:mt-2.5 text-sm leading-4 text-grey">Kampanjer</p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#module-3`
  - **HTML:** `<div class="module module-campaign-listing" id="module-3">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Prøvekjøring "] > div:nth-child(2)`
  - **HTML:** `<div><h3 class="font-medium text-white md:text-lg md:leading-7">Prøvekjøring </h3><p class="mt-3 md:mt-2.5 text-sm leading-4 text-grey">Prøvekjør nybil hos oss</p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.py-10[title="Nyheter"][href$="nyheter"] > div:nth-child(2)`
  - **HTML:** `<div><h3 class="font-medium text-white md:text-lg md:leading-7">Nyheter</h3><p class="mt-3 md:mt-2.5 text-sm leading-4 text-grey">Les siste nytt hos Nordvik</p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Ledige jobber"] > div:nth-child(2)`
  - **HTML:** `<div><h3 class="font-medium text-white md:text-lg md:leading-7">Ledige jobber</h3><p class="mt-3 md:mt-2.5 text-sm leading-4 text-grey">Her finner du våre ledige jobber</p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.py-10.md\:py-12[title="Leiebil"] > div:nth-child(2)`
  - **HTML:** `<div><h3 class="font-medium text-white md:text-lg md:leading-7">Leiebil</h3><p class="mt-3 md:mt-2.5 text-sm leading-4 text-grey">Lei bil hos Nordvik</p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#module-5`
  - **HTML:** `<div class="module module-latest-news" id="module-5">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#module-6`
  - **HTML:** `<div class="module module-latest-usedcars" id="module-6">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.my-2`
  - **HTML:** `<h2 class="my-2 text-2xl font-medium leading-9 md:text-3xl"> Er det tid for EU-kontroll? </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.pt-3`
  - **HTML:** `<p class="pt-3">Skriv reg.nr. og sjekk</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.md\:flex-row.gap-8.flex-col > .flex-1`
  - **HTML:** `<div class="flex-1"><input type="text" name="registration-number" placeholder="AA12345" class="w-full h-full p-3 font-medium text-left bg-transparent border rounded-md form-input focus:outline-none price"></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

