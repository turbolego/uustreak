# WCAG Violations Report for Utdanningsforbundet

**Timestamp:** 2026-10-02T17:27:12.353Z
**URL:** [https://www.utdanningsforbundet.no/](https://www.utdanningsforbundet.no/)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Bare nødvendige" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Bare nødvendige</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.HeaderPromotionBlock_headerPromotionLinks___zMeq > .PrimaryCTALink_center__UtgTK.PrimaryCTALink_primaryCTALink__1eh0T[target=""]`
  - **HTML:** `<a target="" class="PrimaryCTALink_primaryCTALink__1eh0T PrimaryCTALink_center__UtgTK" href="/om-medlemskapet/pris-betingelser/innmelding">Bli medlem</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #ffffff, background color: #008b48, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from embed.acast.com
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[frameborder="0"]`
  - **HTML:** `<iframe src="https://embed.acast.com/5ca73b1ee061b6670b629d28/6aa1313799455f9a93fa2d3b?cover=false&amp;bgColor=f0f0f0" frameborder="0" width="100%" height="190px"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `main`
  - **HTML:** `<main>`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.BlockWrapper_span-3__H0f6B[data-display-option="full"]:nth-child(1) > div > .LocalNavigationTopLayout_localNavigationTop__I8NPN[aria-label="Lokal navigasjon"]`
  - **HTML:** `<nav aria-label="Lokal navigasjon" class="LocalNavigationTopLayout_localNavigationTop__I8NPN">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `iframe[frameborder="0"], .ShareControl__ShareIcon-sc-1pwe6vd-0`
  - **HTML:** `<div role="img" class="ShareControl__ShareIcon-sc-1pwe6vd-0 jwZxjc">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `iframe[frameborder="0"], .SubscribeLink__PlusIcon-sc-q4x3v7-0`
  - **HTML:** `<div role="img" class="SubscribeLink__PlusIcon-sc-q4x3v7-0 kWhSaR">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

