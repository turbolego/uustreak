# WCAG Violations Report for Handel og Kontor i Norge

**Timestamp:** 2026-04-28T09:18:37.595Z
**URL:** [https://hk.no/](https://hk.no/)
**Total Violations:** 4

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

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.uagb-block-9bbc347e > .slick-list.draggable > .slick-track > .slick-current.slick-active[data-slick-index="2"] > div > .uagb-post__inner-wrap > h5`
- `.uagb-block-f5aaf362 > .slick-list.draggable > .slick-track > .slick-current.slick-active[data-slick-index="2"] > div > .uagb-post__inner-wrap > h5`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `.uagb-block-9bbc347e > .slick-list.draggable > .slick-track > .slick-current.slick-active[data-slick-index="2"] > div > .uagb-post__inner-wrap > .uagb-post__image > a[rel="bookmark noopener noreferrer"][target="_self"]`
- `.uagb-block-9bbc347e > .slick-list.draggable > .slick-track > .slick-active[data-slick-index="3"][aria-hidden="false"] > div > .uagb-post__inner-wrap > .uagb-post__image > a[rel="bookmark noopener noreferrer"][target="_self"]`
- `.uagb-block-9bbc347e > .slick-list.draggable > .slick-track > .slick-active[data-slick-index="4"][aria-hidden="false"] > div > .uagb-post__inner-wrap > .uagb-post__image > a[rel="bookmark noopener noreferrer"][target="_self"]`
- `.uagb-block-f5aaf362 > .slick-list.draggable > .slick-track > .slick-active[data-slick-index="3"][aria-hidden="false"] > div > .uagb-post__inner-wrap > .uagb-post__image > a[rel="bookmark noopener noreferrer"][target="_self"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.skip-link`
- `#bounceText`
