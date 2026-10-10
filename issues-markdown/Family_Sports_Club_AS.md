# WCAG Violations Report for Family Sports Club AS

**Timestamp:** 2026-10-10T08:22:58.539Z
**URL:** [https://sporty.no/](https://sporty.no/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `header`
  - **HTML:** `<header role="navigation" class="header-main container-fluid ">`
  - **Failure summary:** Fix any of the following: ARIA role navigation is not allowed for given element


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#itx-chat-frame, .btn-lg`
  - **HTML:** `<button type="button" class="btn btn-lg rounded-pill primary icon-only"><i class="bi bi-chat-fill"></i> <!----></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.gW1A4G_small`
  - **HTML:** `<button type="button" class="gW1A4G_button gW1A4G_small">Bli medlem her</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.85 (foreground color: #ffffff, background color: #f23a3d, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.slick-current > div > ._2GuYGa_item.row > .text-center.col-12 > .text-decoration-none.gW1A4G_color-hover-dark-red.gW1A4G_button`
  - **HTML:** `<a href="https://sporty.no/arrangement/svart-troye-challenge-finale" tabindex="-1" class="text-decoration-none gW1A4G_button gW1A4G_color-hover-dark-red">Bli med!</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.85 (foreground color: #ffffff, background color: #f23a3d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.additional-nav`
  - **HTML:** `<nav class="additional-nav">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.skip`
  - **HTML:** `<a class="skip" href="#main">Hopp til innholdet</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

