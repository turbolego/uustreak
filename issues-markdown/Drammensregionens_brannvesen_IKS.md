# WCAG Violations Report for Drammensregionens brannvesen IKS

**Timestamp:** 2026-11-19T06:37:37.657Z
**URL:** [https://drbv.no/](https://drbv.no/)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Cookie Script
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#cookiescript_accept`
  - **HTML:** `<div id="cookiescript_accept" tabindex="0" role="button" data-cs-i18n-text="{&quot;no&quot;:&quot;Godta alle&quot;}"> Godta alle </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.28 (foreground color: #ffffff, background color: #22b8f0, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.main-nav--main`
  - **HTML:** `<nav class="main-nav main-nav--main">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Source:** Embedded code from Cookie Script
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#cookiescript_readmore`
  - **HTML:** `<a id="cookiescript_readmor..." data-cs-i18n-text="{"no":"Personvernerk..." data-cs-i18n-url="{"no":"https:\/\/drb..." target="_blank" aria-label="Personvernerklæring,..." href="https://drbv.no/medi...">`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.28:1 with the surrounding text. (Minimum contrast is 3:1, link text: #22b8f0, surrounding text: #ffffff) The link has no styling (such as underline) to distinguish it …


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.to-top > .sr-only`
  - **HTML:** `<span class="sr-only">Scroll til toppen</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

