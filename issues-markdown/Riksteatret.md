# WCAG Violations Report for Riksteatret

**Timestamp:** 2026-04-28T09:01:02.648Z
**URL:** [https://www.riksteatret.no/#](https://www.riksteatret.no/#)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 14

#### Affected Elements:

- `#feature_1 > .module__grid > .module__content > .module__body > h4`
- `#feature_2 > .module__grid > .module__content > .module__body > h4`
- `#feature_3 > .module__grid > .module__content > .module__body > h4`
- `#feature_4 > .module__grid > .module__content > .module__body > h4`
- `#feature_5 > .module__grid > .module__content > .module__body > h4`
- `#feature_6 > .module__grid > .module__content > .module__body > h4`
- `#feature_7 > .module__grid > .module__content > .module__body > h4`
- `a[href$="kniven-i-ilden/"] > .module__content > .module__body > h4`
- `.module--grid[data-color=""]:nth-child(2) > .module__grid > a > .module__content > .module__body > h4`
- `a[href$="lareren/"] > .module__content > .module__body > h4`
- `a[href$="triggersystemet/"] > .module__content > .module__body > h4`
- `.module--grid[data-color=""]:nth-child(5) > .module__grid > a > .module__content > .module__body > h4`
- `.module--grid[data-color=""]:nth-child(6) > .module__grid > a > .module__content > .module__body > h4`
- `.module--grid[data-color=""]:nth-child(7) > .module__grid > a > .module__content > .module__body > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `.listItem__link-wrapper[data-content-reference="1168970"][data-epi-block-id="1170785"] > img`
- `.listItem__link-wrapper[data-content-reference="1173208"][data-epi-block-id="1170785"] > img`
- `.listItem__link-wrapper[data-content-reference="1172990"][data-epi-block-id="1170785"] > img`
