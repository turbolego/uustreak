# WCAG Violations Report for Redd Barna

**Timestamp:** 2026-11-14T08:40:27.519Z
**URL:** [https://www.reddbarna.no/](https://www.reddbarna.no/)
**Total Violations:** 2

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#content" role="navigation" title="Hopp til hovedinnhold">Hopp til hovedinnhold</a>`
  - **Failure summary:** Fix any of the following: ARIA role navigation is not allowed for given element


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `donation-form, .cta > span`
  - **HTML:** `<span>Gi månedlig med</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.1 (foreground color: #ffffff, background color: #ff5b24, font size: 13.9pt (18.5px), font weight: normal). Expected contrast ratio of 4.5:1

