# WCAG Violations Report for Bodø videregående skole

**Timestamp:** 2026-10-08T10:16:15.201Z
**URL:** [https://www.bodo.vgs.no/](https://www.bodo.vgs.no/)
**Total Violations:** 2

## Violation Details

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `a[data-id="1942"]`
  - **HTML:** `<a href="https://www.facebook.com/bodovgs" target="_blank" data-id="1942" class="external-link external"><span class="img"></span><span class="text">Facebook</span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="19684"]`
  - **HTML:** `<a href="https://youtube.com/channel/UC_JQ5SZn9R8Q_44m5UcFvgQ" target="_blank" data-id="19684" class="external-link external"><span class="img"></span><span class="text">Youtube</span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="19688"]`
  - **HTML:** `<a href="https://instagram.com/bodovideregaendeskole?igshid=tibb0g4sy9gm" target="_blank" data-id="19688" class="external-link external"><span class="img"></span><span class="text">Instagram</span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1200 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Velkommen til Bodø videregående skole</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1200_WebpartId_1200_txtSearch`
  - **HTML:** `<input name="ctl00$ctl00$ctl00$innhold$MidtSone$ctl01$WebpartId_1200$WebpartId_1200$txtSearch" type="text" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1200_WebpartId_1200_txtSearch" class="js-liten-trigger-search" aria-label="Sø…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1201`
  - **HTML:** `<div class="webPart wp-tag-menu" id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1201">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.section-frontpage-top`
  - **HTML:** `<div class="section section-frontpage-top">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl06_WebpartId_6713 > h2`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl06_WebpartId_6713_WebpartId_6713_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Alle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.section-frontpage-bottom`
  - **HTML:** `<div class="section section-frontpage-bottom">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

