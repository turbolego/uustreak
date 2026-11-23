# WCAG Violations Report for Clas Ohlson AS

**Timestamp:** 2026-11-23T06:09:25.977Z
**URL:** [https://www.clasohlson.com/no/](https://www.clasohlson.com/no/)
**Total Violations:** 6

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.header`
  - **HTML:** `<ul class="header mainNavigation clubMenu nav__links nav__links--products js-offcanvas-links" role="menubar">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: [role=button]


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > div > .cot-se-inspiration__item-title > span`
  - **HTML:** `<span style="color: #FC634F; font-weight: bold;">1 999,00</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.98 (foreground color: #fc634f, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > div > .cot-se-inspiration__item-title > span`
  - **HTML:** `<span style="color: #FC634F; font-weight: bold;">2 999,00 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.98 (foreground color: #fc634f, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > div > .cot-se-inspiration__item-title > span`
  - **HTML:** `<span style="color: #FC634F; font-weight: bold;">1 999,00</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.98 (foreground color: #fc634f, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > div > .cot-se-inspiration__item-title > span`
  - **HTML:** `<span style="color: #FC634F; font-weight: bold;">1 999,00</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.98 (foreground color: #fc634f, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.cot-se-inspiration__item:nth-child(5) > .cot-se-inspiration__item-content > div > .cot-se-inspiration__item-title > span`
  - **HTML:** `<span style="color: #FC634F; font-weight: bold;">8 990,00</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.98 (foreground color: #fc634f, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from LiveChat
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#cx-livechat-host, iframe[name="cx-webChatButton"]`
  - **HTML:** `<iframe name="cx-webChatButton" src="https://livechat-clasohlson.connexone.co.uk/button.html?connid=696921f4-9106-4fa0-88f1-7f8e359b5ae4"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#cx-livechat-host, iframe[name="cx-webChatWindow"]`
  - **HTML:** `<iframe name="cx-webChatWindow" src="https://livechat-clasohlson.connexone.co.uk/chatWindow.html?connid=696921f4-9106-4fa0-88f1-7f8e359b5ae4"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 18

#### Affected Elements:

- **Target:** `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Black-Friday/Black-Friday-leker/c/4001?page=1&facets=%5Br12=Vis%20medlemstilbud%20%7C%20Vis%20alle%20nedsatte%20produkter%20%3A%20&sortProperty=&so…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Black-Friday/Black-Friday-multimedia/c/4003?page=1&facets=%5Br12=Vis%20medlemstilbud%20%7C%20Vis%20alle%20nedsatte%20produkter%20%3A%20&sortPropert…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__..." href="/no/Black-Friday/Bla...">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Black-Friday/Black-Friday-kropp-og-velvære/c/4004?page=1&facets=%5Br12=Vis%20medlemstilbud%20%7C%20Vis%20alle%20nedsatte%20produkter%20%3A%20&sortP…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(5) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Black-Friday/Black-Friday-kjøkken/c/4002?page=1&facets=%5Br12=Vis%20medlemstilbud%20%7C%20Vis%20alle%20nedsatte%20produkter%20%3A%20&sortProperty=&…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(6) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Black-Friday/Black-Friday-hjem-og-interiør/c/4005?page=1&facets=%5Br12=Vis%20medlemstilbud%20%7C%20Vis%20alle%20nedsatte%20produkter%20%3A%20&sortP…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(7) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__..." href="/no/Black-Friday/Bla...">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(8) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Black-Friday/Black-Friday-hjem-og-interiør/Black-Friday-lamper/c/4027?page=1&facets=%5Br12=Vis%20medlemstilbud%20%7C%20Vis%20alle%20nedsatte%20prod…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.cot-se-inspiration__item:nth-child(9) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Black-Friday/Black-Friday-hjem-og-interiør/Black-Friday-rammer/c/4029?page=1&facets=%5Br12=Vis%20medlemstilbud%20%7C%20Vis%20alle%20nedsatte%20prod…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.cot-se-inspiration__item:nth-child(10) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Black-Friday/Black-Friday-multimedia/Black-Friday-mobildeksler/c/4045?page=1&facets=%5Br12=Vis%20medlemstilbud%20%7C%20Vis%20alle%20nedsatte%20prod…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Bissell-SpotClean-C9-Select-flekkfjerner,-3989N/p/44-6698?scr=2&sc=1">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Braun-Series-9-Pro+-barbermaskin-9655cc/p/44-9203?scr=2&sc=2">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Oral-B-iO9-elektrisk-tannborste,-7-borstemodi/p/10-1-28?scr=2&sc=3">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Moccamaster-One-Switch-kaffebryggare,-1,25-liter/p/44-6011-2?scr=2&sc=4">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(5) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Dreame-X60-Ultra-robotstovsuger-med-selvtomming-og-mopp/p/10-1-398?scr=2&sc=5">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(6) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Philips-OneUp-Series-3000-elektrisk-gulvmopp,-XV3101-01/p/44-5900?scr=2&sc=6">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(7) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/PS5-DualSense-V2-tradlos-handkontroll/p/39-3045?scr=2&sc=7">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(8) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
  - **HTML:** `<a class="cot-se-inspiration__item-button cot-se-inspiration__item-button--black" href="/no/Oral-B-iO9-elektrisk-tannborste-Duo,-7-borstemodi,-2-pakning/p/10-1-34?scr=2&sc=8">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.active[role="tab"]`
  - **HTML:** `<li class="active" role="tab" aria-selected="true"><span><a rel="nofollow" href="?SiteView=B2C">Privatkunde</a></span></li>`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.

- **Target:** `li[role="tab"]:nth-child(2)`
  - **HTML:** `<li role="tab" aria-selected="false"><span><a rel="nofollow" href="?SiteView=B2B">Bedriftskunde</a></span></li>`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from LiveChat
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#cx-livechat-host, iframe[name="cx-webChatButton"], #container`
  - **HTML:** `<div id="container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

