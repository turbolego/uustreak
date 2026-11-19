# WCAG Violations Report for Lysna AS

**Timestamp:** 2026-11-19T06:49:46.009Z
**URL:** [https://lysna.no/](https://lysna.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.left-list._12:nth-child(1) > p`
  - **HTML:** `<p>Originale fakturaer frå Lysna</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.15 (foreground color: #007ea8, background color: #f3f3f3, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.left-list._12:nth-child(2) > p`
  - **HTML:** `<p>Ferske målverdiar</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.15 (foreground color: #007ea8, background color: #f3f3f3, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.left-list._12:nth-child(3) > p`
  - **HTML:** `<p>Informasjon om målepunktet ditt</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.15 (foreground color: #007ea8, background color: #f3f3f3, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 4

#### Affected Elements:

- **Target:** `.header-btn:nth-child(4)`
  - **HTML:** `<a aria-label="https://esmart24web.no/Lysna/Touch/Login?ReturnURL=Home%2FIndex&queryString=" href="https://esmart24web.no/Lysna/Touch/Login?ReturnURL=Home%2FIndex&queryString=" class="header-btn ">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.article-card._s6._l4:nth-child(1) > .article-card-in`
  - **HTML:** `<a aria-label="Gå til https://lysna.no/artikkel/norgespris-i-2027-du-ma-bestille-pa-nytt" href="https://lysna.no/artikkel/norgespris-i-2027-du-ma-bestille-pa-nytt" class="article-card-in">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.article-card._s6._l4:nth-child(2) > .article-card-in`
  - **HTML:** `<a aria-label="Gå til https://lysna.no/artikkel/egenberedskapsuka-2026-er-du-forberedt-pa-a-klare-deg-i-en-uke" href="https://lysna.no/artikkel/egenberedskapsuka-2026-er-du-forberedt-pa-a-klare-deg-i-en-uke" class="article-card-in">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.article-card._s6._l4:nth-child(3) > .article-card-in`
  - **HTML:** `<a aria-label="Gå til https://lysna.no/eltryggleik-i-eigen-bustad" href="https://lysna.no/eltryggleik-i-eigen-bustad" class="article-card-in">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `div[data-cm-view="default"] > .cm__content:nth-child(1)`
  - **HTML:** `<div class="cm__content "> <h3>Denne nettsiden benytter seg av tredjeparts cookies</h3> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-cm-view="default"] > .cm__content:nth-child(2)`
  - **HTML:** `<div class="cm__content " style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

