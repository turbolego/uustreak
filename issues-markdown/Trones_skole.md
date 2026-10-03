# WCAG Violations Report for Trones skole

**Timestamp:** 2026-10-03T04:24:32.498Z
**URL:** [https://www.minskole.no/trones](https://www.minskole.no/trones)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#weatherHolder > div:nth-child(2) > div > div:nth-child(3)`
  - **HTML:** `<div style="float: right; height: 50px; text-align:left; margin-right: 20px; font-size: 18px; line-height: 50px; color: Red">14°</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #ff0000, background color: #eeeeee, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#weatherHolder > div:nth-child(3) > div > div:nth-child(3)`
  - **HTML:** `<div style="float: right; height: 50px; text-align:left; margin-right: 20px; font-size: 18px; line-height: 50px; color: Red">15°</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #ff0000, background color: #eeeeee, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#weatherHolder > div:nth-child(4) > div > div:nth-child(3)`
  - **HTML:** `<div style="float: right; height: 50px; text-align:left; margin-right: 20px; font-size: 18px; line-height: 50px; color: Red">13°</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #ff0000, background color: #eeeeee, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#ContentPlaceHolder1_btnAppendNews`
  - **HTML:** `<input type="button" name="ctl00$ContentPlaceHolder1$btnAppendNews" value="Vis flere nyheter" onclick="disableAppendNewsButton();__doPostBack('ctl00$ContentPlaceHolder1$btnAppendNews','')" id="ContentPlaceHolder1_btnAppendNews" class="roun…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.6 (foreground color: #ffffff, background color: #cccccc, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#cookie-consent-close`
  - **HTML:** `<input type="button" value="Aksepter" class="roundedButton customStyleButton" style="font-size: 10pt; height: 30px; line-height: 30px;" id="cookie-consent-close">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.6 (foreground color: #ffffff, background color: #cccccc, font size: 10.0pt (13.3333px), font weight: normal). Expected contrast ratio of 4.5:1


### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT, RGAAv4, RGAA-8.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="t-chrome t-chrome153" style="height: 100%;">`
  - **Failure summary:** Fix any of the following: The <html> element does not have a lang attribute


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#ctl17_img`
  - **HTML:** `<img src="/StaticContent//Kommuner/1108kommunevaapen.png" id="ctl17_img" style="width:50%;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#imgArticle`
  - **HTML:** `<img id="imgArticle" src="/DynamicContent//CustomFrontpageImages/66-13bb1ff3-7a8f-4b6e-ab10-4208a2debba7.jpg" style="float:left; margin: 0px 10px 10px 0px; max-width:150px; max-height: 150px;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="t-chrome t-chrome153" style="height: 100%;">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 19

#### Affected Elements:

- **Target:** `#ctl10_hl`
  - **HTML:** `<a href="https://dialog.sandnes.kommune.no/dialogue/SAK-10?from=login" id="ctl10_hl" target="_blank"><img src="/DynamicContent/\WidgetLogo\66-3c0698e3-bc72-4e12-b1c8-c362cc30fca5.jpg" id="ctl10_img" alt="" style="width: 100%; border:0;"></…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#ctl16_hl`
  - **HTML:** `<a href="https://www.udir.no/nullmobbing/" id="ctl16_hl" target="_blank"><img src="/DynamicContent/\WidgetLogo\66-fdc75008-2478-4c5d-a8ba-9fa5b9cb31f3.jpg" id="ctl16_img" alt="" style="width: 100%; border:0;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(1) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/428756"]`
  - **HTML:** `<a href="/trones/artikkel/428756" id="lnkNavigate2" class="newsItemReadMore"> <div id="divArticleHeaderImage" class="articleHeaderImage" style="background-image:url('/StaticContent//FrontpageImage/202.jpg');"></div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/428756"]`
  - **HTML:** `<a href="/trones/artikkel/428756" id="lnkNavigate3" class="newsItemReadMore"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(3) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/428640"]`
  - **HTML:** `<a href="/trones/artikkel/428640" id="lnkNavigate2" class="newsItemReadMore"> <div id="divArticleHeaderImage" class="articleHeaderImage" style="background-image:url('/DynamicContent//CustomFrontpageImages/66-d548d6a2-8bb5-4886-bf4f-306ad6f…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/428640"]`
  - **HTML:** `<a href="/trones/artikkel/428640" id="lnkNavigate3" class="newsItemReadMore"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/428012"]`
  - **HTML:** `<a href="/trones/artikkel/428012" id="lnkNavigate3" class="newsItemReadMore"><img id="imgArticle" src="/DynamicContent//CustomFrontpageImages/66-13bb1ff3-7a8f-4b6e-ab10-4208a2debba7.jpg" style="float:left; margin: 0px 10px 10px 0px; max-wi…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/427944"]`
  - **HTML:** `<a href="/trones/artikkel/427944" id="lnkNavigate3" class="newsItemReadMore"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/427428"]`
  - **HTML:** `<a href="/trones/artikkel/427428" id="lnkNavigate3" class="newsItemReadMore"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(11) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/426166"]`
  - **HTML:** `<a href="/trones/artikkel/426166" id="lnkNavigate2" class="newsItemReadMore"> <div id="divArticleHeaderImage" class="articleHeaderImage" style="background-image:url('/DynamicContent//CustomFrontpageImages/66-7845743f-0f16-47b4-b518-e5f301b…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/426166"]`
  - **HTML:** `<a href="/trones/artikkel/426166" id="lnkNavigate3" class="newsItemReadMore"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(13) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/425157"]`
  - **HTML:** `<a href="/trones/artikkel/425157" id="lnkNavigate2" class="newsItemReadMore"> <div id="divArticleHeaderImage" class="articleHeaderImage" style="background-image:url('/DynamicContent//CustomFrontpageImages/66-cdcdfe43-9b60-4474-bc0a-a6f16dc…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425157"]`
  - **HTML:** `<a href="/trones/artikkel/425157" id="lnkNavigate3" class="newsItemReadMore"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(15) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/422626"]`
  - **HTML:** `<a href="/trones/artikkel/422626" id="lnkNavigate2" class="newsItemReadMore"> <div id="divArticleHeaderImage" class="articleHeaderImage" style="background-image:url('/DynamicContent//CustomFrontpageImages/66-7d1a2d02-91df-4241-896c-b226930…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/422626"]`
  - **HTML:** `<a href="/trones/artikkel/422626" id="lnkNavigate3" class="newsItemReadMore"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(17) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/422487"]`
  - **HTML:** `<a href="/trones/artikkel/422487" id="lnkNavigate2" class="newsItemReadMore"> <div id="divArticleHeaderImage" class="articleHeaderImage" style="background-image:url('/DynamicContent//CustomFrontpageImages/66-1d218552-e2b9-4140-adc4-2aaf243…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/422487"]`
  - **HTML:** `<a href="/trones/artikkel/422487" id="lnkNavigate3" class="newsItemReadMore"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(19) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/422400"]`
  - **HTML:** `<a href="/trones/artikkel/422400" id="lnkNavigate2" class="newsItemReadMore"> <div id="divArticleHeaderImage" class="articleHeaderImage" style="background-image:url('/DynamicContent//CustomFrontpageImages/66-c3f41619-a5f6-4286-86ee-4d5ab1d…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/422400"]`
  - **HTML:** `<a href="/trones/artikkel/422400" id="lnkNavigate3" class="newsItemReadMore"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="t-chrome t-chrome153" style="height: 100%;">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 27

#### Affected Elements:

- **Target:** `#divTextualLogo`
  - **HTML:** `<div id="divTextualLogo" style="margin-top: 40px; overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#panDefaultMenu`
  - **HTML:** `<div id="panDefaultMenu" style="overflow: hidden; margin-bottom: 12px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.customStyleEffectColor1Bg.widgetBox_Outer`
  - **HTML:** `<div class="widgetBox_Outer customStyleEffectColor1Bg" style="overflow: auto;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.customStyleEffectColor3Bg.widgetBox_Outer:nth-child(5)`
  - **HTML:** `<div class="widgetBox_Outer customStyleEffectColor3Bg">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.customStyleEffectColor3Bg.widgetBox_Outer:nth-child(7)`
  - **HTML:** `<div class="widgetBox_Outer customStyleEffectColor3Bg">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.documentAccordionHeader`
  - **HTML:** `<div id="ctl12" class="documentAccordionHeader"> <span id="ctl12_lblGroupName_0">Dokument på Forside</span> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.widgetBox_Outer:nth-child(8) > div > div:nth-child(3)`
  - **HTML:** `<div> <a href="/trones/Dokumenter/722" class="arrowLink"><img src="/Gfx/Icons/Navigate24.png" alt=""><span>Flere dokumenter</span></a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.widgetBox_Outer:nth-child(11) > div > div:nth-child(1)`
  - **HTML:** `<div>Oversett siden til et annet språk</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.widgetBox_Outer:nth-child(11) > div > div:nth-child(2)`
  - **HTML:** `<div style="font-size:smaller;">Translate page to another language</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.widgetBox_Outer:nth-child(11) > div > div:nth-child(3)`
  - **HTML:** `<div style="font-size:smaller;">Traducir la página a otro idioma</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.VIpgJd-ZVi9od-xl07Ob-lTBxed > span:nth-child(1)`
  - **HTML:** `<span>Velg språk</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.VIpgJd-ZVi9od-xl07Ob-lTBxed > span:nth-child(3)`
  - **HTML:** `<span style="border-left: 1px solid rgb(187, 187, 187);">​</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.widgetBox_Outer:nth-child(16)`
  - **HTML:** `<div class="widgetBox_Outer" style="background-color: #ccc;"> <div style="padding: 15px; text-align: center;"> <img src="/StaticContent//Kommuner/1108kommunevaapen.png" id="ctl17_img" style="width:50%;"> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.widgetBox_Outer:nth-child(17)`
  - **HTML:** `<div class="widgetBox_Outer" style="background-color: #eee;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ContentPlaceHolder1_poster_divOuter`
  - **HTML:** `<div id="ContentPlaceHolder1_poster_divOuter" style="margin-bottom:15px;overflow:auto;background-color:#99CC99;border-style:none;border-width:2px;border-color:#000000;color:#000000;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(1)`
  - **HTML:** `<div style="overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(3)`
  - **HTML:** `<div style="overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(5)`
  - **HTML:** `<div style="overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(7)`
  - **HTML:** `<div style="overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(9)`
  - **HTML:** `<div style="overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(11)`
  - **HTML:** `<div style="overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(13)`
  - **HTML:** `<div style="overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(15)`
  - **HTML:** `<div style="overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(17)`
  - **HTML:** `<div style="overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(19)`
  - **HTML:** `<div style="overflow: auto; margin-bottom: 10px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#privacyFooter`
  - **HTML:** `<div id="privacyFooter"><a href="https://www.nyweb.no/personvern" target="_blank">Personvern og informasjonskapsler</a> - © Nyweb AS 2026</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#cookie-law-info-bar`
  - **HTML:** `<div id="cookie-law-info-bar" style="display: block;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

