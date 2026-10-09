# WCAG Violations Report for Fevik skole

**Timestamp:** 2026-10-09T04:59:26.987Z
**URL:** [https://www.grimstad.kommune.no/tjenester/barn-unge-og-familie/skole/skoler-i-grimstad/fevik-skole/](https://www.grimstad.kommune.no/tjenester/barn-unge-og-familie/skole/skoler-i-grimstad/fevik-skole/)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Grimstad kommune"]`
  - **HTML:** `<img alt="Grimstad kommune" src="/handlers/bv.ashx/ia2b5ca87-5e1e-483b-b914-566d7e19d238/b39f3grimstad_kommunelogo-1.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.fantDuLabel`
  - **HTML:** `<span role="heading" aria-level="2" class="fantDuLabel il-feedback-form-heading">Fant du det du lette etter?</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

