# WCAG Violations Report for Sandnes kommune

**Timestamp:** 2026-11-22T05:54:47.284Z
**URL:** [https://www.sandnes.kommune.no/](https://www.sandnes.kommune.no/)
**Total Violations:** 3

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="sandnesloftet.no/"]`
  - **HTML:** `<a class="campaign__item" href="https://sandnesloftet.no/" aria-label="Sandnesløftet (Åpner i nytt vindu)" target="_blank" style="--current_campaign_bgcolor: #cfdeeb;--current_campaign_textcolor: #000000; background-color:#cfdeeb; ">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.cc-header-container`
  - **HTML:** `<div class="cc-header-container"> <p class="cc-title">Vi bruker informasjonskapsler</p> <div class="language-dropdown"><select><option value="no">Norsk</option><option value="en">English</option></select></div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cc-text`
  - **HTML:** `<p class="cc-text">Våre nettsider benytter informasjonskapsler (cookies). Dette hjelper oss med å forbedre brukeropplevelsen og tjenestene på nettstedet. Du kan lese mer om hvilke vi bruker og hvordan vi administrerer dem i personvernerklæ…`
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

