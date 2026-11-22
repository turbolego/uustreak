# WCAG Violations Report for Farsund kirkelige fellesråd

**Timestamp:** 2026-11-22T06:01:47.471Z
**URL:** [https://farsund.kirken.no/](https://farsund.kirken.no/)
**Total Violations:** 5

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `button`
  - **HTML:** `<button class="lines-button x"><span class="lines"></span></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 9

#### Affected Elements:

- **Target:** `#dnn_dnnSearch_cmdSearch`
  - **HTML:** `<a id="dnn_dnnSearch_cmdSearch" class="ServerSkinWidget" href="javascript:__doPostBack('dnn$dnnSearch$cmdSearch','')">Søk</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.37 (foreground color: #dc143c, background color: #f0f0f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#dnn_LOGIN_enhancedLoginLink > span`
  - **HTML:** `<span style="white-space:nowrap">Logg inn</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.37 (foreground color: #dc143c, background color: #f0f0f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[data-id="33"]`
  - **HTML:** `<a href="https://farsund.kirken.no/D%C3%A5p" target="" data-id="33"><i class="fa fa-menu-33 fa-fw" aria-hidden="true"></i>Dåp</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.37 (foreground color: #dc143c, background color: #f0f0f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[data-id="55"]`
  - **HTML:** `<a href="https://farsund.kirken.no/Konfirmasjon" target="" data-id="55"><i class="fa fa-menu-55 fa-fw" aria-hidden="true"></i>Konfirmasjon</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.37 (foreground color: #dc143c, background color: #f0f0f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[data-id="54"]`
  - **HTML:** `<a href="https://farsund.kirken.no/Bryllup" target="" data-id="54"><i class="fa fa-menu-54 fa-fw" aria-hidden="true"></i>Bryllup</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.37 (foreground color: #dc143c, background color: #f0f0f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[data-id="56"]`
  - **HTML:** `<a href="https://farsund.kirken.no/Gravferd" target="" data-id="56"><i class="fa fa-menu-56 fa-fw" aria-hidden="true"></i>Gravferd</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.37 (foreground color: #dc143c, background color: #f0f0f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[data-id="34"]`
  - **HTML:** `<a href="https://farsund.kirken.no/Fellesr%C3%A5det" target="" data-id="34"><i class="fa fa-menu-34 fa-fw" aria-hidden="true"></i>Fellesrådet</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.37 (foreground color: #dc143c, background color: #f0f0f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[data-id="37"]`
  - **HTML:** `<a href="https://farsund.kirken.no/Kalender" target="" data-id="37"><i class="fa fa-menu-37 fa-fw" aria-hidden="true"></i>Kalender</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.37 (foreground color: #dc143c, background color: #f0f0f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[data-id="38"]`
  - **HTML:** `<a href="https://farsund.kirken.no/Kontakt" target="" data-id="38"><i class="fa fa-menu-38 fa-fw" aria-hidden="true"></i>Kontakt</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.37 (foreground color: #dc143c, background color: #f0f0f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" dir="ltr">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 9

#### Affected Elements:

- **Target:** `#menu-overlay-trigger`
  - **HTML:** `<a id="menu-overlay-trigger" href="#" class="lines-button x toggle-item" data-target="body" data-class="menu-overlay-active"> <span class="lines"></span> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-target="#mainMenu"]`
  - **HTML:** `<a href="#" class="toggle-item" data-target="#mainMenu" data-class="items-visible"> <i class="fa fa-bars"></i> <i class="fa fa-close"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#top-search-trigger`
  - **HTML:** `<a id="top-search-trigger" href="#" class="toggle-item"> <i class="fa fa-search"></i> <i class="fa fa-close"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle > .article-even > .image-container-even > a`
  - **HTML:** `<a href="/Portals/0/Dokumenter/Vedtekter for gravplassene i Farsund kommune.pdf"> <img class="article-image-even" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/desktopmodules/dnnarticle/images/noimage.gif" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#dnn_ctr380_ModuleContent > .article-phone > .article-text-phone > .image-container-phone > a`
  - **HTML:** `<a href="/Portals/0/Dokumenter/Vedtekter for gravplassene i Farsund kommune.pdf"> <img class="article-image-phone" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/desktopmodules/dnnarticle/images/noimage.gif" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-container-odd > a[href$="listamenighet.no/"]`
  - **HTML:** `<a href="https://www.listamenighet.no/"> <img class="article-image-odd" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/lista.jpeg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-container-phone > a[href$="listamenighet.no/"]`
  - **HTML:** `<a href="https://www.listamenighet.no/"> <img class="article-image-phone" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/lista.jpeg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-container-even > a[href$="kirketorget.no/"]`
  - **HTML:** `<a href="https://kirketorget.no/"> <img class="article-image-even" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/Bilder/E41824E7C4DFF87A2991038CA8BF3F49.jpg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-container-phone > a[href$="kirketorget.no/"]`
  - **HTML:** `<a href="https://kirketorget.no/"> <img class="article-image-phone" style="width:100%;margin-bottom:30px;padding-top:0px;" src="/Portals/0/Bilder/E41824E7C4DFF87A2991038CA8BF3F49.jpg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#section1`
  - **HTML:** `<section id="section1" class="wsc-section wsc-section1 empt-default wsc-empt-no-overlay wsc-empt-text-dark " style="background-color: #ffffff;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.DnnModule-380 > .c_head.no_title_container > .c_content`
  - **HTML:** `<div class="c_content">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

