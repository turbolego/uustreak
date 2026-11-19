# WCAG Violations Report for Øvre romerike brann og redning IKS

**Timestamp:** 2026-11-19T07:00:10.587Z
**URL:** [https://www.orbrann.no/](https://www.orbrann.no/)
**Total Violations:** 2

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.cc-header-container`
  - **HTML:** `<div class="cc-header-container"> <p class="cc-title">Vi bruker informasjonskapsler (cookies)</p> <div class="language-dropdown"><select><option value="no">Norsk</option><option value="en">English</option></select></div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cc-text`
  - **HTML:** `<p class="cc-text">Våre nettsider benytter informasjonskapsler (cookies) til sikkerhet, innbyggerfunksjonalitet, statistikk og analyse. Les om hvilke cookies vi bruker og hvordan vi administrerer de i erklæringen vår om personvern.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `select`
  - **HTML:** `<select><option value="no">Norsk</option><option value="en">English</option></select>`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

