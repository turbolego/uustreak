# WCAG Violations Report for Fredrikstad kommune

**Timestamp:** 2026-10-10T08:26:35.443Z
**URL:** [https://www.fredrikstad.kommune.no/](https://www.fredrikstad.kommune.no/)
**Total Violations:** 4

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.font-semibold.text-xl`
  - **HTML:** `<p class="font-semibold text-xl"> <a href="/driftsmeldinger" class="no-underline hover:underline text-black">Driftsmeldinger</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.wrapper > ul > li > .hover\:underline.text-black.no-underline`
  - **HTML:** `<a href="/driftsmeldinger/gamlebyen-fergeleie-kun-ett-fergeleie-i-drift-mandag-12-oktober/" title="Gamlebyen fergeleie: Kun ett fergeleie i drift mandag 12. oktober" class="no-underline hover:underline text-black">`
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


### <svg> elements with an img or image role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 12

#### Affected Elements:

- **Target:** `a[href="/kalender?id=1736045"] > .p-4 > .list-none.m-0.p-0 > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" width="1em" height="1em" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1736045"] > .p-4 > .list-none.m-0.p-0 > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1736045"] > .p-4 > .list-none.m-0.p-0 > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1745542"] > .p-4 > .list-none.m-0.p-0 > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" width="1em" height="1em" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1745542"] > .p-4 > .list-none.m-0.p-0 > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1745542"] > .p-4 > .list-none.m-0.p-0 > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1748551"] > .p-4 > .list-none.m-0.p-0 > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" width="1em" height="1em" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1748551"] > .p-4 > .list-none.m-0.p-0 > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1748551"] > .p-4 > .list-none.m-0.p-0 > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1735038"] > .p-4 > .list-none.m-0.p-0 > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" width="1em" height="1em" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1735038"] > .p-4 > .list-none.m-0.p-0 > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

- **Target:** `a[href="/kalender?id=1735038"] > .p-4 > .list-none.m-0.p-0 > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fk-blue" fill="none" viewBox="0 0 24 24" focusable="false" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

