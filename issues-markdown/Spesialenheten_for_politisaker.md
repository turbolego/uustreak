# WCAG Violations Report for Spesialenheten for politisaker

**Timestamp:** 2026-11-23T06:36:28.335Z
**URL:** [https://www.spesialenheten.no/](https://www.spesialenheten.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.button-link`
  - **HTML:** `<a class="wp-block-button__link button button-link has-text-align-center wp-element-button" href="https://dfo.no/kundesider/fakturahandtering/send-faktura-til-en-kunde-av-dfo#a9ab86d1b6e098bd24669a09cdaa5d266">Informasjon til leverandører …`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.08 (foreground color: #009bb4, background color: #f7f7f7, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="www.kilde.no"]`
  - **HTML:** `<a rel="noreferrer noopener" href="https://www.kilde.no" target="_blank">Kilde</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.08 (foreground color: #009bb4, background color: #f7f7f7, font size: 10.8pt (14.336px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.mai-column.is-column:nth-child(1) > h4`
  - **HTML:** `<h4 class="wp-block-heading">Spesialenheten for politisaker</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" style="--before-header-height: 50px; --header-height-full: 115px; --header-height: 115px;">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

