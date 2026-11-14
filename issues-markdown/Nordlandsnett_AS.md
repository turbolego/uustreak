# WCAG Violations Report for Nordlandsnett AS

**Timestamp:** 2026-11-14T08:34:28.669Z
**URL:** [https://arva.no/hjem](https://arva.no/hjem)
**Total Violations:** 4

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- **Target:** `a[href$="nettjenester"][data-target-set="1"] > .image-default[loading="lazy"][data-aspect="1"]`
  - **HTML:** `<img class="image-default" src="/sites/a/arva.no/fil..." srcset="/sites/n/nordlandsne..." loading="lazy" data-aspect="1" data-original-src="https://arva.no/site...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href="/?id=77442397"] > .image-default[loading="lazy"][data-aspect="1"]`
  - **HTML:** `<img class="image-default" src="/sites/a/arva.no/fil..." srcset="/sites/n/nordlandsne..." loading="lazy" data-aspect="1" data-original-src="https://arva.no/site...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href="/?id=210386988"] > .image-default[loading="lazy"][data-aspect="1"]`
  - **HTML:** `<img class="image-default" src="/sites/a/arva.no/fil..." srcset="/sites/n/nordlandsne..." loading="lazy" data-aspect="1" data-original-src="https://arva.no/site...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href="/?id=695199517"] > .image-default[loading="lazy"][data-aspect="1"]`
  - **HTML:** `<img class="image-default" src="/sites/a/arva.no/fil..." srcset="/sites/n/nordlandsne..." loading="lazy" data-aspect="1" data-original-src="https://arva.no/site...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="el-sikkerhet"] > .image-default[loading="lazy"][data-aspect="1"]`
  - **HTML:** `<img class="image-default" src="/sites/a/arva.no/fil..." srcset="/sites/n/nordlandsne..." loading="lazy" data-aspect="1" data-original-src="https://arva.no/site...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `img[height="51"]`
  - **HTML:** `<img height="51" src="https://arva.no/sites/a/arva.no/files//arvalogogrnn.png?aspect=3.5509433962264&amp;thumbnail=181x51" width="181" data-mce-src="https://arva.no/sites/a/arva.no/files//arvalogogrnn.png?aspect=3.5509433962264&amp;thumbna…`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 12

#### Affected Elements:

- **Target:** `figure:nth-child(1) > a[href$="nettjenester"][data-target-set="1"]`
  - **HTML:** `<a href="/nettjenester" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href="/?id=77442397"]`
  - **HTML:** `<a href="/?id=77442397" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href="/?id=210386988"]`
  - **HTML:** `<a href="/?id=210386988" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href="/?id=695199517"]`
  - **HTML:** `<a href="/?id=695199517" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="el-sikkerhet"]`
  - **HTML:** `<a href="/el-sikkerhet" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#Article-19319 > .clear[data-v-fab35f16=""][data-v-6fb9a7fe=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-6fb9a7fe=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
  - **HTML:** `<a href="/hjem/Pa-tide-med-en-ny-elsjekk" target="" data-v-3e0b142e="" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#Article-19263 > .clear[data-v-fab35f16=""][data-v-6fb9a7fe=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-6fb9a7fe=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
  - **HTML:** `<a href="/hjem/Hvordan-utvikler-vi-framtidas-kraftnett" target="" data-v-3e0b142e="" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#Article-19242 > .clear[data-v-fab35f16=""][data-v-6fb9a7fe=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-6fb9a7fe=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
  - **HTML:** `<a href="/hjem/Batterier-styrket-stromnettet" target="" data-v-3e0b142e="" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#Article-18965 > .clear[data-v-fab35f16=""][data-v-6fb9a7fe=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-6fb9a7fe=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
  - **HTML:** `<a href="/hjem/Om-dritvaer-rock-og-nettkapasitet" target="" data-v-3e0b142e="" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#Article-18877 > .clear[data-v-fab35f16=""][data-v-6fb9a7fe=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-6fb9a7fe=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
  - **HTML:** `<a href="/hjem/Pa-maaleroppdrag-i-oyriket-utenfor-Bodo" target="" data-v-3e0b142e="" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#Article-18824 > .clear[data-v-fab35f16=""][data-v-6fb9a7fe=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-6fb9a7fe=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
  - **HTML:** `<a href="/hjem/Skilter-kraftlinjer-for-tryggere-linjebefaring" target="" data-v-3e0b142e="" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#Article-16073 > .clear[data-v-fab35f16=""][data-v-6fb9a7fe=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-6fb9a7fe=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
  - **HTML:** `<a href="/hjem/104-millioner-kraftkroner-sendes-ut-av-Nord-Norge" target="" data-v-3e0b142e="" data-target-set="1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="no">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `#block-serial-483468145`
  - **HTML:** `<div data-block-id="1195059177" id="block-serial-483468145" class="outer-block-wrapper block-width-100 custom-ArvaButton" data-admin-mode="false" data-v-00960bff="" style="--bb9e6468:100;" data-v-8deaecca="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `figure:nth-child(1)`
  - **HTML:** `<figure class="image">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `figure:nth-child(4)`
  - **HTML:** `<figure class="image">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `figure:nth-child(5)`
  - **HTML:** `<figure class="image">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `figure:nth-child(6)`
  - **HTML:** `<figure class="image">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `figure:nth-child(7)`
  - **HTML:** `<figure class="image">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#block-serial-45619389`
  - **HTML:** `<div data-block-id="1877311209" id="block-serial-45619389" class="outer-block-wrapper block-width-100 custom-ArvaButton" data-admin-mode="false" data-v-00960bff="" style="--bb9e6468:100;" data-v-8deaecca="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

