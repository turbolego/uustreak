# WCAG Violations Report for COOP Norge SA

**Timestamp:** 2026-10-15T05:24:45.274Z
**URL:** [https://www.coop.no/](https://www.coop.no/)
**Total Violations:** 5

## Violation Details

### Required ARIA attributes must be provided

- **Impact:** critical
- **Description:** Ensure elements with ARIA roles have all required ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.im > .bt.bu.bx > .ch[placeholder="F.eks 0101 eller Oslo"][role="combobox"]`
  - **HTML:** `<input type="text" aria-controls="2u286YjMFQBcmoPV6FnSSq-6-listbox" role="combobox" placeholder="F.eks 0101 eller Oslo" class="cf ak aa bs ax ay az b0 b1 bj cg av bo bp bq br i j ch" value="">`
  - **Failure summary:** Fix any of the following: Required ARIA attribute not present: aria-expanded

- **Target:** `div:nth-child(1) > .ii.ik.ij > .il > .bt.bu.bx > .ch[placeholder="F.eks 0101 eller Oslo"][role="combobox"]`
  - **HTML:** `<input type="text" aria-controls="2r1zswuAuctKIPQTv9Iw8l-10-listbox" role="combobox" placeholder="F.eks 0101 eller Oslo" class="cf ak aa bs ax ay az b0 b1 bj cg av bo bp bq br i j ch" value="">`
  - **Failure summary:** Fix any of the following: Required ARIA attribute not present: aria-expanded


### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `input[role="searchbox"]`
  - **HTML:** `<input type="text" role="searchbox" aria-label="Søk" aria-autocomplete="list" aria-controls="suggestions" name="q" placeholder="Hva leter du etter?" autocomplete="off" class="cf ak aa bs ax ay az b0 b1 bj cg av bo bp bq br i j ch" value="">`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="suggestions"

- **Target:** `.im > .bt.bu.bx > .ch[placeholder="F.eks 0101 eller Oslo"][role="combobox"]`
  - **HTML:** `<input type="text" aria-controls="2u286YjMFQBcmoPV6FnSSq-6-listbox" role="combobox" placeholder="F.eks 0101 eller Oslo" class="cf ak aa bs ax ay az b0 b1 bj cg av bo bp bq br i j ch" value="">`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="2u286YjMFQBcmoPV6FnSSq-6-listbox"

- **Target:** `div:nth-child(1) > .ii.ik.ij > .il > .bt.bu.bx > .ch[placeholder="F.eks 0101 eller Oslo"][role="combobox"]`
  - **HTML:** `<input type="text" aria-controls="2r1zswuAuctKIPQTv9Iw8l-10-listbox" role="combobox" placeholder="F.eks 0101 eller Oslo" class="cf ak aa bs ax ay az b0 b1 bj cg av bo bp bq br i j ch" value="">`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="2r1zswuAuctKIPQTv9Iw8l-10-listbox"


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.hw`
  - **HTML:** `<h2 class="hw hx hy h5 gu el em cu"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#\36 N2snuT4T1QyrHU1wbHFIW > .ah.ai.af > .ee.am.cj > .ef.eh.ei`
  - **HTML:** `<h2 class="ef eg eh ei ej ek a6 el em cu"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#\33 3modPj5ilgcmY76YKciV8 > .q.cj.e9 > .ea.al.ba > .eb.ec.ed > iframe, iframe[scrolling="no"]`
  - **HTML:** `<iframe scrolling="no" src="about:blank" style="height: 1px; width: ...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#\33 3modPj5ilgcmY76YKciV8 > .q.cj.e9 > .ea.al.ba > .eb.ec.ed > iframe, body > iframe`
  - **HTML:** `<iframe style="position: absolute; pointer-events: none; left: 0px; top: 0px; opacity: 0; height: 0px; width: 0px;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#GNXWL8jlPCFqmGJFbdvQe > .q.cj.e9 > .ea.al.ba > .eb.ec.ed > iframe, iframe[src$="about:blank"]`
  - **HTML:** `<iframe src="about:blank" scrolling="no" style="height: 1px; width: ...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#GNXWL8jlPCFqmGJFbdvQe > .q.cj.e9 > .ea.al.ba > .eb.ec.ed > iframe, body > iframe`
  - **HTML:** `<iframe style="position: absolute; pointer-events: none; left: 0px; top: 0px; opacity: 0; height: 0px; width: 0px;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.ki.kj.kk:nth-child(1)`
  - **HTML:** `<a href="https://play.google.com/store/apps/details?id=no.coop.members&pli=1" class="ki kj au kk cj bc as at au av bs ax ay az b0 b1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.ki.kj.kk:nth-child(2)`
  - **HTML:** `<a href="https://apps.apple.com/no/app/id992134528" class="ki kj au kk cj bc as at au av bs ax ay az b0 b1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

