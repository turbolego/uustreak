# WCAG Violations Report for Bærum kommune

**Timestamp:** 2026-10-22T03:37:27.117Z
**URL:** [https://www.baerum.kommune.no/](https://www.baerum.kommune.no/)
**Total Violations:** 7

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `div:nth-child(1) > .my-8.not-prose > .rounded-b-xl.md\:rounded-b-2xl.md\:p-8 > .lg\:flex-row.lg\:gap-8.gap-8 > article > .order-2.md\:order-1.md\:gap-8 > .md\:gap-8.gap-6.flex-col > .md\:text-\[28px\].md\:leading-9.font-serif`
  - **HTML:** `<h3 class="font-serif text-2xl leading-7 md:text-[28px] md:leading-9 tracking-tight text-neutral-900"> Trafikksikkerhetsprosjekter </h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.bg-teal-100 > .lg\:flex-row.lg\:gap-8.gap-8 > article > .order-1.md\:order-2.flex-1 > .h-auto.aspect-video[loading="lazy"]`
  - **HTML:** `<img src="/globalassets/nyheter/bilder-til-nyhetssaker/utbedring-kyststi-holtekilen/oversiktskart.jpg?quality=70&amp;mode=crop&amp;width=800&amp;height=450" class="w-full h-auto rounded-lg object-cover aspect-video" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.bg-peach-100 > .lg\:flex-row.lg\:gap-8.gap-8 > article > .order-1.md\:order-2.flex-1 > .h-auto.aspect-video[loading="lazy"]`
  - **HTML:** `<img src="/contentassets/ce4fe35485594bc595af34c79fe6d181/dsc_2704.jpg?quality=70&amp;mode=crop&amp;width=800&amp;height=450" class="w-full h-auto rounded-lg object-cover aspect-video" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#mainContentContainer > main`
  - **HTML:** `<main class="flex flex-col gap-10 md:gap-15 lg:gap-24">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#mainContentContainer`
  - **HTML:** `<main class="mainBody bg-neutral-75 max-w-page-boundary mx-auto px-4 py-6 @container/main" id="mainContentContainer">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `form[aria-labelledby="site-search-heading"]`
  - **HTML:** `<form id="quickSearch" method="get" action="/sok/" role="search" aria-labelledby="site-search-heading" class="hidden @5xl:flex items-center gap-1">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `#mainContentContainer`
  - **HTML:** `<main class="mainBody bg-neutral-75 max-w-page-boundary mx-auto px-4 py-6 @container/main" id="mainContentContainer">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Source:** Embedded code from Cookie Script
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#cookiescript_readmore`
  - **HTML:** `<a id="cookiescript_readmore" data-cs-i18n-text="{&quot;no&quot;:&quot;Les mer&quot;}" data-cs-i18n-url="{&quot;no&quot;:&quot;https:\/\/www.baerum.kommune.no\/personvern\/&quot;}" target="_self" aria-label="Les mer" href="https://www.baer…`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.73:1 with the surrounding text. (Minimum contrast is 3:1, link text: #006120, surrounding text: #000000) The link has no styling (such as underline) to distinguish it …


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#scrollTop`
  - **HTML:** `<a id="scrollTop" href="#" class="btn btn-secondary fixed bottom-6 right-22 z-50 flex items-center gap-2 rounded-full md:rounded-md opacity-0 translate-y-4 pointer-events-none transition-all duration-300 p-2 md:px-4" aria-label="Til toppen…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

