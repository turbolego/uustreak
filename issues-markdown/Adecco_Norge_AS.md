# WCAG Violations Report for Adecco Norge AS

**Timestamp:** 2026-10-22T03:32:23.193Z
**URL:** [https://www.adecco.com/nb-no](https://www.adecco.com/nb-no)
**Total Violations:** 6

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `#submitBtn`
  - **HTML:** `<button type="button" id="submitBtn" class="submit-button" role="button" aria-label="Skicka">Send</button>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.LocationSearchFilter_job-title__yLOb_`
  - **HTML:** `<input type="text" placeholder="Stillingstittel eller søkeord" class="LocationSearchFilter_job-title__yLOb_" name="jobsearch-title" title="Herojobsearch-title" value="">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#secondaryCompany`
  - **HTML:** `<input type="text" id="secondaryCompany" name="secondary_company" autocomplete="off" tabindex="-1" required="" style="position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 9

#### Affected Elements:

- **Target:** `.SWPImage_swp-nextimage__raKqc`
  - **HTML:** `<img alt="" title="" aria-label="" sizes="100vw" class="SWPImage_swp-nextima..." loading="lazy" srcset="/nb-no/-/jssmedia/pr..." src="/nb-no/-/media/proje...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `img[width="1600"][height="1067"][aria-label=""]`
  - **HTML:** `<img alt="" width="1600" height="1067" title="" aria-label="" sizes="100vw" class="img-fluid" loading="lazy" srcset="/nb-no/-/jssmedia/pr..." src="/nb-no/-/media/proje...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `img[width="5472"]`
  - **HTML:** `<img alt="" width="5472" height="3648" title="" aria-label="" sizes="100vw" class="img-fluid" loading="lazy" srcset="/nb-no/-/jssmedia/pr..." src="/nb-no/-/media/proje...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `img[width="7704"]`
  - **HTML:** `<img alt="" width="7704" height="5136" title="" aria-label="" sizes="100vw" class="img-fluid" loading="lazy" srcset="/nb-no/-/jssmedia/pr..." src="/nb-no/-/media/proje...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `img[width="2048"][height="1366"][aria-label=""]`
  - **HTML:** `<img alt="" width="2048" height="1366" title="" aria-label="" sizes="100vw" class="img-fluid" loading="lazy" srcset="/nb-no/-/jssmedia/pr..." src="/nb-no/-/media/proje...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `img[width="8192"]`
  - **HTML:** `<img alt="" width="8192" height="5464" title="" aria-label="" sizes="100vw" class="img-fluid" loading="lazy" srcset="/nb-no/-/jssmedia/pr..." src="/nb-no/-/media/proje...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `img[width="5700"]`
  - **HTML:** `<img alt="" width="5700" height="3798" title="" aria-label="" sizes="100vw" class="img-fluid" loading="lazy" srcset="/nb-no/-/jssmedia/pr..." src="/nb-no/-/media/proje...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `.tile-solutions-icon.icon-accent[aria-label=""]`
  - **HTML:** `<img alt="" title="" aria-label="" sizes="100vw" class="material-icons-outli..." loading="lazy" srcset="/nb-no/-/jssmedia/pr..." src="/nb-no/-/media/proje...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `.SWPImage_islhh-image__Hi_E2`
  - **HTML:** `<img alt="" width="1067" height="422" title="" aria-label="" sizes="100vw" class="SWPImage_islhh-image..." loading="lazy" srcset="/nb-no/-/jssmedia/pr..." src="/nb-no/-/media/proje...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from OneTrust
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#onetrust-banner-sdk`
  - **HTML:** `<div id="onetrust-banner-sdk" class="otFlat bottom ot-close-btn-link vertical-align-content ot-buttons-fw" tabindex="0" aria-label="Adecco bruker informasjonskapsler" aria-describedby="onetrust-policy-text" style="bottom: 0px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.SkipLink_skip-btn__YhgD8`
  - **HTML:** `<a class="SkipLink_skip-btn__YhgD8 skip-to-content skip-link" href="#main" aria-label="skip-to-main" tabindex="1">Skip to main </a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

