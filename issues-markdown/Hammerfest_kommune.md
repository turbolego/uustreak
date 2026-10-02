# WCAG Violations Report for Hammerfest kommune

**Timestamp:** 2026-10-02T17:13:01.580Z
**URL:** [https://hammerfest.kommune.no/](https://hammerfest.kommune.no/)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Hammerfest kommune"]`
  - **HTML:** `<img alt="Hammerfest kommune" src="/handlers/bv.ashx/i84340fca-472c-43c3-ae76-e20b3612bce2/hk-logo-web-m-minsteavstand-ny.png">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-5...">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl11_WebpartId_97_WebpartId_97_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$ctl11$WebpartId_97$WebpartId_97$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_ctl11_WebpartId_97_WebpartId_97_txtSearch" class="js-liten-trigger-search" aria-label="Søketekst" placeholder="Hva …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

