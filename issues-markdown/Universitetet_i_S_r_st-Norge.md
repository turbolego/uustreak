# WCAG Violations Report for Universitetet i Sørøst-Norge

**Timestamp:** 2026-11-04T05:39:23.307Z
**URL:** [https://www.usn.no/](https://www.usn.no/)
**Total Violations:** 3

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#header-favorites`
  - **HTML:** `<usn-mega-menu id="header-favorites" class="header--favorites" bar-id="favorites" role="menuitem">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#nav_10584_prev`
  - **HTML:** `<span class="slider-nav slider-nav-prev swiper-button-disabled" role="button" id="nav_10584_prev"> <usn-icon>keyboard_arrow_left</usn-icon> </span>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#nav_10584_next`
  - **HTML:** `<span class="slider-nav slider-nav-next" role="button" id="nav_10584_next"> <usn-icon>keyboard_arrow_right</usn-icon> </span>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#header-menu`
  - **HTML:** `<usn-mega-menu id="header-menu" bar-id="menu" role="menu" class="header--main-menu show-first-header">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: button[aria-controls]


### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#header-favorites`
  - **HTML:** `<usn-mega-menu id="header-favorites" class="header--favorites" bar-id="favorites" role="menuitem">`
  - **Failure summary:** Fix any of the following: Required ARIA parents role not present: menu, menubar, group

