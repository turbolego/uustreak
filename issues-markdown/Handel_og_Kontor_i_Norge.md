# WCAG Violations Report for Handel og Kontor i Norge

**Timestamp:** 2025-12-08T00:29:46.446Z
**URL:** [https://hk.no/](https://hk.no/)
**Total Violations:** 3

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.arrangementPage__info__months--previous`
- `.arrangementPage__info__months--next`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `.uagb-post__inner-wrap:nth-child(2) > .uagb-post__image > .uagb-image-ratio-inherit[rel="bookmark noopener noreferrer"][target="_self"]`
- `.uagb-post__inner-wrap:nth-child(3) > .uagb-post__image > .uagb-image-ratio-inherit[rel="bookmark noopener noreferrer"][target="_self"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.skip-link`
- `#bounceText`
