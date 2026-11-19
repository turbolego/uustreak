# WCAG Violations Report for Bardu kommune

**Timestamp:** 2026-11-19T06:32:40.921Z
**URL:** [https://www.bardu.kommune.no/](https://www.bardu.kommune.no/)
**Total Violations:** 4

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h3:nth-child(8)`
  - **HTML:** `<h3>&nbsp;</h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.large-shrink:nth-child(2) > .dib`
  - **HTML:** `<h3 class="headline dib">Egenberedskapsuka 2026 – hva gjør du hvis nettet feiler?</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.ingress > .link`
  - **HTML:** `<a class="link" href="/egenberedskapsuka-2026-hva-gjoer-du-hvis-nettet-feiler.6755223-526073.html"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.large-shrink:nth-child(2)`
  - **HTML:** `<header class="cell small-12 large-shrink" style="display: flex;"> 21. oktober: <h3 class="headline dib">Egenberedskapsuka 2026 – hva gjør du hvis nettet feiler?</h3> </header>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.ingress`
  - **HTML:** `<div class="cell small-12 large-auto ingress"> I uke 44 markeres den nasjonale Egenberedskapsuka.&nbsp;Målet er å øke bevisstheten om hvordan vi alle ka... <a class="link" href="/egenberedskapsuka-2026-hva-gjoer-du-hvis-nettet-feiler.67552…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

