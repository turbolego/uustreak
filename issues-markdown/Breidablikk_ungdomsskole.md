# WCAG Violations Report for Breidablikk ungdomsskole

**Timestamp:** 2026-10-10T08:12:59.054Z
**URL:** [https://www.sandefjord.kommune.no/barnehage-skole-sfo/skole/alle-skolene/ungdomsskoler/breidablikk-ungdomsskole/](https://www.sandefjord.kommune.no/barnehage-skole-sfo/skole/alle-skolene/ungdomsskoler/breidablikk-ungdomsskole/)
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

- **Target:** `img[alt="Sandefjord kommune"]`
  - **HTML:** `<img alt="Sandefjord kommune" src="/handlers/bv.ashx/ife3625cd-bd2c-4725-8c06-dc6a53d3abc8/77declogo_hvit.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

