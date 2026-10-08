# WCAG Violations Report for Fagforbundet

**Timestamp:** 2026-10-08T10:26:51.190Z
**URL:** [https://www.fagforbundet.no/](https://www.fagforbundet.no/)
**Total Violations:** 3

## Violation Details

### ARIA hidden element must not be focusable or contain focusable elements

- **Impact:** serious
- **Description:** Ensure aria-hidden elements are not focusable nor contain focusable elements
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-hidden-focus?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-10.8.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#bai-open-chat-btn`
  - **HTML:** `<button id="bai-open-chat-btn" aria-hidden="true" class="tooltiped-element" title="Spør vår chatbot" type="button" onclick="javascript:openChat()" style="background: url("https://pubdata.fagforbundet.no/chatbot_pics/karima_100.png") 0px 0p…`
  - **Failure summary:** Fix all of the following: Focusable content should be disabled or be removed from the DOM


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#CybotCookiebotDialogBodyEdgeMoreDetailsLink`
  - **HTML:** `<a id="CybotCookiebotDialogBodyEdgeMoreDetailsLink" href="#" class="">Se detaljer</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.99 (foreground color: #ff0000, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#CybotCookiebotDialogBodyButtonAccept`
  - **HTML:** `<button id="CybotCookiebotDialogBodyButtonAccept" class="CybotCookiebotDialogBodyButton" tabindex="0" lang="nb">Tillat alle cookies</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.99 (foreground color: #ffffff, background color: #ff0000, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#bounceText`
  - **HTML:** `<div id="bounceText" class="animated bounceInRight">Hei, jeg er Fagforbundets chatbot. Hva kan jeg hjelpe med? </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.18 (foreground color: #ffffff, background color: #919091, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.skip-to-content`
  - **HTML:** `<a class="skip-to-content" href="#main">Til hovedinnhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

