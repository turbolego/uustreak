# WCAG Violations Report for Innherred renovasjon IKS

**Timestamp:** 2026-11-19T05:40:01.148Z
**URL:** [https://innherredrenovasjon.no/](https://innherredrenovasjon.no/)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 8

#### Affected Elements:

- `.fl-module-smart-operating-message`
- `.fl-node-6ou4gkv5tc37`
- `.fl-node-5fd07e2f4a218`
- `.fl-node-5fd07e2f4a21d`
- `.fl-node-5fd07e2f4a222`
- `.fl-node-5fd07e2f4a228`
- `.fl-node-5fd07e2f4a22d`
- `.fl-node-5fd07e2f4a232`

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `#address-search`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `.header__content > .navigation--top`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 9

#### Affected Elements:

- `li[data-municipality="tydal"] > .station > .station__wrapper > .station__content > .station__content__link`
- `li[data-municipality="selbu"] > .station > .station__wrapper > .station__content > .station__content__link`
- `li[data-municipality="malvik"] > .station > .station__wrapper > .station__content > .station__content__link`
- `li[data-municipality="meraker"] > .station > .station__wrapper > .station__content > .station__content__link`
- `li[data-municipality="stjordal"] > .station > .station__wrapper > .station__content > .station__content__link`
- `li[data-municipality="frosta"] > .station > .station__wrapper > .station__content > .station__content__link`
- `li[data-municipality="levanger"] > .station > .station__wrapper > .station__content > .station__content__link`
- `li[data-municipality="verdal"] > .station > .station__wrapper > .station__content > .station__content__link`
- `li[data-municipality="inderoy"] > .station > .station__wrapper > .station__content > .station__content__link`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.skip-links`
