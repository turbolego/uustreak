# WCAG Violations Report for Aleris Helse AS

**Timestamp:** 2025-10-10T00:23:28.149Z
**URL:** [https://www.aleris.no/](https://www.aleris.no/)
**Total Violations:** 7

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `.styles_header__PJlRw > .styles_buttonAnchor__jUOhi.a`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 2

#### Affected Elements:

- `#CybotCookiebotDialogNavDeclaration`
- `a[title="Cookie-policy"]`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.ant-skeleton-title`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.styles_header__bb1NW`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.styles_header__bb1NW`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 6

#### Affected Elements:

- `.mAuto.tg50.dg33:nth-child(1) > .styles_card__RkDWu.turquoise > .styles_cardLink__LfDDi`
- `.tAuto.mAuto.dg33 > .styles_card__RkDWu.turquoise > .styles_cardLink__LfDDi`
- `.mAuto.tg50.dg33:nth-child(3) > .styles_card__RkDWu.turquoise > .styles_cardLink__LfDDi`
- `.mg100.tg50.dg33:nth-child(1) > .white.styles_card__RkDWu > .styles_cardLink__LfDDi`
- `.mg100.tg50.dg33:nth-child(2) > .white.styles_card__RkDWu > .styles_cardLink__LfDDi`
- `.styles_cardLink__LfDDi[href$="priser/"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `.styles_popupContent__r3fDu > .content-area`
