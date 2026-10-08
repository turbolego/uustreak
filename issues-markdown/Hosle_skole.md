# WCAG Violations Report for Hosle skole

**Timestamp:** 2026-10-08T10:34:29.322Z
**URL:** [https://www.hosle.no/](https://www.hosle.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#acceptNecessary`
  - **HTML:** `<button id="acceptNecessary">Godta kun nødvendige cookies</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.13 (foreground color: #ffffff, background color: #28a745, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#acceptAll`
  - **HTML:** `<button id="acceptAll">Godta alle cookies</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.13 (foreground color: #ffffff, background color: #28a745, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="www.baerum.kommune.no"] > img`
  - **HTML:** `<img src="https://moava.s3.amazonaws.com/baerum/baerum_kommunelogo_ny.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Meld fra om utrygt skolemiljø"]`
  - **HTML:** `<img alt="Meld fra om utrygt skolemiljø" src="https://felles.bærumsskolen.no/grafikk/baerum_link_to_skolemiljo.jpg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="www.baerum.kommune.no"]`
  - **HTML:** `<a href="https://www.baerum.kommune.no"> <img src="https://moava.s3.amazonaws.com/baerum/baerum_kommunelogo_ny.png"> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#cookieConsentOverlay`
  - **HTML:** `<div id="cookieConsentOverlay" class="active">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

