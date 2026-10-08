# WCAG Violations Report for Tønsberg kommune

**Timestamp:** 2026-10-08T10:46:24.113Z
**URL:** [https://www.tonsberg.kommune.no/](https://www.tonsberg.kommune.no/)
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

- **Target:** `img[alt="Tønsberg kommune "]`
  - **HTML:** `<img alt="Tønsberg kommune " src="/handlers/bv.ashx/i68ec8e25-b362-44a3-bb9b-f78acb11d7d8/46757tynsberg-kommune-logo-uten-visjon_liggende_sort.png">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.back-to-top-button`
  - **HTML:** `<a class="back-to-top-button js-back-to-top-button js-new-back-to-top-button" href="#header"> <span>Til toppen</span> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl07_WebpartId_248 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Hva leter du etter i dag?</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl07_WebpartId_248_WebpartId_248_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$ctl07$WebpartId_248$WebpartId_248$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_ctl07_WebpartId_248_WebpartId_248_txtSearch" class="js-liten-trigger-search" aria-label="Søketekst" placeholder="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl07_WebpartId_249`
  - **HTML:** `<div class="webPart banner-webpart--links" id="ctl00_ctl00_ctl00_innhold_ctl07_WebpartId_249">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

