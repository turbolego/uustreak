# WCAG Violations Report for Menova AS

**Timestamp:** 2026-11-20T06:19:29.737Z
**URL:** [https://menova.menova.no/](https://menova.menova.no/)
**Total Violations:** 5

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `div[role="dialog"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `a[href$="mailto:tw@menova.no"]`
- `a[href$="karrierepasset.no"] > span`
- `p:nth-child(2) > a[href$="mailto:post@menova.no"][role="link"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h4`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- `.et_pb_lightbox_image`
- `.et_pb_image_9 > a[target="_blank"][role="link"]`
- `.et_pb_image_10 > a[target="_blank"][role="link"]`
- `.et_pb_image_11 > a[target="_blank"][role="link"]`
- `.et_pb_image_12 > a[target="_blank"][role="link"]`
- `.et_pb_image_13 > a[target="_blank"][role="link"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- `#et-info-phone`
- `#et-info > a[href$="mailto:post@menova.no"][role="link"]`
- `#et-secondary-nav > .menu-item-239975.menu-item-has-children.menu-item-type-custom > .dah-submenu[href="#"][role="link"]`
- `#et-secondary-nav > .menu-item-239978.menu-item-has-children.menu-item-type-custom > .dah-submenu[href="#"][role="link"]`
- `#et-secondary-nav > .menu-item-239986.menu-item-has-children.menu-item-type-custom > .dah-submenu[href="#"][role="link"]`
- `#et-secondary-nav > .menu-item-239990.menu-item-type-custom.menu-item-object-custom`
- `#et-secondary-nav > .menu-item-240685.menu-item-has-children.menu-item-type-custom > .dah-submenu[href="#"][role="link"]`
