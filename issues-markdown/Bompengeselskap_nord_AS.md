# WCAG Violations Report for Bompengeselskap nord AS

**Timestamp:** 2026-11-22T05:44:33.968Z
**URL:** [https://bpsnord.no/](https://bpsnord.no/)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.card-v3.bg-contrast-lower.col\@sm:nth-child(1) > .card-v3__link[target=""] > .card-v3__content > h4`
  - **HTML:** `<h4>AutoPASS-avtale tegnes her</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.card-v3.bg-contrast-lower.col\@sm:nth-child(1) > .card-v3__link[target=""] > .card-v3__content`
  - **HTML:** `<div class="card-v3__content"> <div class="card-v3__label"></div> <h4>AutoPASS-avtale tegnes her</h4> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-v3.bg-contrast-lower.col\@sm:nth-child(1) > .card-v3__link[target=""] > .card-v3__footer > span`
  - **HTML:** `<span>Tegn AutoPASS-avtale</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="faktura-2/"] > .card-v3__content`
  - **HTML:** `<div class="card-v3__content"> <div class="card-v3__label"></div> <h4>BPS Nord fakturerer bompasseringer uten AutoPass-avtale</h4> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="faktura-2/"] > .card-v3__footer > span`
  - **HTML:** `<span>Faktura fra BPS Nord</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="fritak/"] > .card-v3__content`
  - **HTML:** `<div class="card-v3__content"> <div class="card-v3__label"></div> <h4>Her kan du lese hvordan man søker fritak.</h4> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="fritak/"] > .card-v3__footer > span`
  - **HTML:** `<span>Les om fritak her</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

