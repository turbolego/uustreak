# WCAG Violations Report for Sola Strand Hotel

**Timestamp:** 2026-10-02T17:21:25.105Z
**URL:** [https://www.solastrandhotel.no/](https://www.solastrandhotel.no/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `div[data-config-url="https://vimeo.com/1060792703"] > div > .background-video.ready, body`
  - **HTML:** `<body role="presentation" class="vp-center">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element

- **Target:** `div[data-config-url="https://vimeo.com/1043637275"] > div > .background-video.ready, body`
  - **HTML:** `<body role="presentation" class="vp-center">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element


### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.header-display-desktop > .header-actions.header-actions--right > .language-picker-desktop[aria-controls="language-picker-menu"][aria-label="language picker"]`
  - **HTML:** `<div aria-controls="language-picker-menu" aria-expanded="false" aria-label="language picker" class="language-picker language-picker-desktop" id="multilingual-language-picker-desktop" role="listbox" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Required ARIA children role not present: group, option


### Frames with focusable content must not have tabindex=-1

- **Impact:** serious
- **Description:** Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-focusable-content?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- **Target:** `div[data-config-url="https://vimeo.com/1060792703"] > div > .background-video.ready, html`
  - **HTML:** `<html lang="en">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h4`
  - **HTML:** `<h4 style="text-align:center;white-space:pre-wrap;">Sola Strand Hotel</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.header-display-desktop > .header-title-nav-wrapper > .header-nav > .header-nav-wrapper > .header-nav-list`
  - **HTML:** `<nav class="header-nav-list">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

