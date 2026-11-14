# WCAG Violations Report for Fredrikstad kommune

**Timestamp:** 2026-11-14T08:53:42.926Z
**URL:** [https://www.fredrikstad.kommune.no/](https://www.fredrikstad.kommune.no/)
**Total Violations:** 3

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.language > img`
  - **HTML:** `<img src="/icons/aksel-icons/Interface/Language.svg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#vid-0`
  - **HTML:** `<div class="video-js vjs-fill vjs-paused vid-0-dimensions vjs-controls-enabled vjs-workinghover vjs-v8 vjs-user-active vjs-layout-x-small" id="vid-0" tabindex="-1" role="region" lang="no" translate="no" aria-label="Video Player">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.font-semibold.text-xl`
  - **HTML:** `<p class="font-semibold text-xl"> <a href="/driftsmeldinger" class="no-underline hover:underline text-black">Driftsmeldinger</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.wrapper > ul > li > .text-black.hover\:underline.no-underline`
  - **HTML:** `<a href="/driftsmeldinger/feil-i-rutetider-paa-byferga-aalekilene-gamlebyen/" title="Feil i rutetider på byferga Ålekilene - Gamlebyen" class="no-underline hover:underline text-black">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#q`
  - **HTML:** `<input id="q" name="q" type="search" aria-label="Søketekst" class="block border-1 borde..." placeholder="Skriv hva du trenger..." required="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.flex-wrap`
  - **HTML:** `<div class="pt-4 flex flex-wrap gap-4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[x-show="step === 1"] > .text-gray-700.font-medium.text-xl`
  - **HTML:** `<p class="text-xl font-medium text-gray-700">Fant du det du lette etter?</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

