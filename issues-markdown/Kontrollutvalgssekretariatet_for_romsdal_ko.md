# WCAG Violations Report for Kontrollutvalgssekretariatet for romsdal ko

**Timestamp:** 2026-11-20T06:17:54.671Z
**URL:** [https://www.kontrollutvalgromsdal.no/](https://www.kontrollutvalgromsdal.no/)
**Total Violations:** 5

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 7

#### Affected Elements:

- **Target:** `div[role="button"]:nth-child(3)`
  - **HTML:** `<div role="button" style="width: 26px; height: 37px; overflow: hidden; position: absolute; left: -116px; top: -40px; z-index: -3;" tabindex="0">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `div[role="button"]:nth-child(4)`
  - **HTML:** `<div role="button" style="width: 26px; height: 37px; overflow: hidden; position: absolute; left: -21px; top: -102px; z-index: -65;" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `div[role="button"]:nth-child(5)`
  - **HTML:** `<div role="button" style="width: 26px; height: 37px; overflow: hidden; position: absolute; left: -117px; top: -86px; z-index: -49;" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `div[role="button"]:nth-child(6)`
  - **HTML:** `<div role="button" style="width: 26px; height: 37px; overflow: hidden; position: absolute; left: -20px; top: 27px; z-index: 64;" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `div[role="button"]:nth-child(7)`
  - **HTML:** `<div role="button" style="width: 26px; height: 37px; overflow: hidden; position: absolute; left: 140px; top: -15px; z-index: 22;" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `div[role="button"]:nth-child(8)`
  - **HTML:** `<div role="button" style="width: 26px; height: 37px; overflow: hidden; position: absolute; left: -128px; top: 6px; z-index: 43;" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `div[role="button"]:nth-child(9)`
  - **HTML:** `<div role="button" style="width: 26px; height: 37px; overflow: hidden; position: absolute; left: -165px; top: -67px; z-index: -30;" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 7

#### Affected Elements:

- **Target:** `img[alt="Aukra"]`
  - **HTML:** `<img class="pagelogo" src="https://img6.custompublish.com/getfile.php/3663465.2496.tpvwdwaxqa/392x0/Aukra.png" alt="Aukra">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Gjemnes"]`
  - **HTML:** `<img class="pagelogo" src="https://img6.custompublish.com/getfile.php/3664844.2496.xtfrducwyx/392x0/Gjemenes.png" alt="Gjemnes">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Hustadvika"]`
  - **HTML:** `<img class="pagelogo" src="https://img6.custompublish.com/getfile.php/4708752.2496.jiqillimzsbmtl/392x0/hustadvika-kommvapen.png" alt="Hustadvika">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Molde"]`
  - **HTML:** `<img class="pagelogo" src="https://img6.custompublish.com/getfile.php/3664842.2496.ypvpfcsfyu/392x0/Molde_60x83.png" alt="Molde">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Rauma"]`
  - **HTML:** `<img class="pagelogo" src="https://img6.custompublish.com/getfile.php/3663467.2496.cqfvfqtxyp/392x0/Rauma.png" alt="Rauma">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Sunndal"]`
  - **HTML:** `<img class="pagelogo" src="https://img6.custompublish.com/getfile.php/3660996.2496.qtvwvvuwsy/392x0/Sunndal.png" alt="Sunndal">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Vestnes"]`
  - **HTML:** `<img class="pagelogo" src="https://img6.custompublish.com/getfile.php/3660997.2496.bayyruwrcf/392x0/Vestnes.jpg" alt="Vestnes">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `#EACB32F1-4DE9-4680-930B-13CA721BCB4D`
  - **HTML:** `<button draggable="false" aria-label="Endre kartstil" title="Endre kartstil" type="button" aria-haspopup="true" aria-expanded="false" id="EACB32F1-4DE9-4680-9..." style="background: padding-...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="no" xml:lang="no">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.slideshow`
  - **HTML:** `<div class="slideshow" style="height: 400px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(14)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.gmnoprint:nth-child(2) > .gm-style-cc[draggable="false"] > div:nth-child(2) > span`
  - **HTML:** `<span style="">Kartdata ©2026 Google</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.gm-style-cc.gmnoprint[draggable="false"]`
  - **HTML:** `<div class="gmnoprint gm-style-cc" draggable="false" style="z-index: 1000001; user-select: none; position: relative; height: 14px; line-height: 14px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.gm-style-cc[draggable="false"]:nth-child(6)`
  - **HTML:** `<div draggable="false" class="gm-style-cc" style="user-select: none; position: relative; height: 14px; line-height: 14px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.googlemapcontainer > div:nth-child(2)`
  - **HTML:** `<div style="width: 99%; text-align: right; position: relative; padding-right: 5px; font-size: 12px;"> <a href="#bigmap" id="bigmapclick" onclick="return cgmapBiggerMap(this);">Større kart</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

