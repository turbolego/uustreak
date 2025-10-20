# WCAG Violations Report for BKK AS

**Timestamp:** 2025-10-20T00:27:31.378Z
**URL:** [https://www.bkk.no/#](https://www.bkk.no/#)
**Total Violations:** 4

## Violation Details

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 3

#### Affected Elements:

- `#switch-cookie_cat_functional-slider`
- `#switch-cookie_cat_statistic-slider`
- `#switch-cookie_cat_marketing-slider`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiConsentBanner`

### Ensure elements marked as presentational are consistently ignored

- **Impact:** minor
- **Description:** Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 5

#### Affected Elements:

- `.rc_link-card.rc_link-card--nyhet[text=""]:nth-child(2) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
- `a[href$="na-kommer-studentene"] > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
- `.rc_link-card.rc_link-card--nyhet[text=""]:nth-child(4) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
- `.rc_link-card.rc_link-card--nyhet[text=""]:nth-child(6) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
- `.rc_link-card.rc_link-card--nyhet[text=""]:nth-child(8) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `#skip-to-content`
