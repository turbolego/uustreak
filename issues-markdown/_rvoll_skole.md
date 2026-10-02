# WCAG Violations Report for Årvoll skole

**Timestamp:** 2026-10-02T17:02:55.853Z
**URL:** [https://arvoll.osloskolen.no/](https://arvoll.osloskolen.no/)
**Total Violations:** 1

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#silktide-banner > .mb-4`
  - **HTML:** `<h2 class="mb-4"> Osloskolen bruker informasjonskapsler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#silktide-banner > p:nth-child(2)`
  - **HTML:** `<p> For at nettstedet skal fungere og være trygt, bruker Osloskolen informasjonskapsler. Noen er teknisk nødvendige, mens andre sikrer ulik funksjonalitet. </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#silktide-banner > p:nth-child(3)`
  - **HTML:** `<p> Godtar du alle informasjonskapsler, tillater du også at vi samler inn data om statistikk og brukeradferd. </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

