# WCAG Violations Report for Eidskog kommune

**Timestamp:** 2026-11-22T05:54:59.403Z
**URL:** [https://www.eidskog.kommune.no/](https://www.eidskog.kommune.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_230_WebpartId_230_hlLinkAlle`
  - **HTML:** `<a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_230_WebpartId_230_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle aktuelle saker</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.2 (foreground color: #007e8f, background color: #f0f0f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.il-heading--h2.il-heading:nth-child(6)`
  - **HTML:** `<h2 class="il-heading il-heading--h2">&nbsp;</h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `p:nth-child(6) > img`
  - **HTML:** `<img src="https://www.eidskog.kommune.no/handlers/bv.ashx/ibab63d3d-20e6-4c25-8cba-de8229246fa3/w142/q5608/kf6973f05c4cb/kommuneapp-friskus.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.logo`
  - **HTML:** `<img class="logo" src="/design/Eidskog_kommune/Eidskog/v2021/assets/images/logo-Eidskog.svg" alt="Eidskog kommune">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-5...">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `a[data-id="9196"]`
  - **HTML:** `<a href="https://www.facebook.com/eidskogkommune/" data-id="9196" class="external-link external"><span><span class="img"></span><span class="text">Facebook</span></span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="9197"]`
  - **HTML:** `<a href="https://www.youtube.com/user/EidskogKommune" data-id="9197" class="external-link external"><span><span class="img"></span><span class="text">YouTube</span></span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 9

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_224_WebpartId_224_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$in..." type="text" id="ctl00_ctl00_ctl00_in..." class="js-liten-trigger-sea..." aria-label="Søketekst" placeholder="Hei, hva kan vi hjel..." data-handled="true">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_225`
  - **HTML:** `<div class="webPart wp-search-links" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_225">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-top`
  - **HTML:** `<div class="section frontpage-top">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_230 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_230_WebpartId_230_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle aktuelle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-politics`
  - **HTML:** `<div class="section frontpage-politics">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-bottom`
  - **HTML:** `<div class="section frontpage-bottom">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

