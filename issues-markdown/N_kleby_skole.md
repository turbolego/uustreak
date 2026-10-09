# WCAG Violations Report for Nøkleby skole

**Timestamp:** 2026-10-09T05:06:23.208Z
**URL:** [https://www.fredrikstad.kommune.no/tjenester/skole-og-utdanning/skoler/noekleby-skole/](https://www.fredrikstad.kommune.no/tjenester/skole-og-utdanning/skoler/noekleby-skole/)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.border-sky-600.rounded-lg.mb-6:nth-child(2) > .bg-white > .fk-kollaps-btn.gap-3.py-4 > h3`
  - **HTML:** `<h3 class="text-lg m-0 text-slate-900 leading-snug flex-1">Om Nøkleby skole</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


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


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `div[x-show="step === 1"] > .font-medium.text-xl.text-gray-700`
  - **HTML:** `<p class="text-xl font-medium text-gray-700">Fant du det du lette etter?</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

