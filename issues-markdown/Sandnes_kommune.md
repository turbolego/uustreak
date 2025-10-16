# WCAG Violations Report for Sandnes kommune

**Timestamp:** 2025-10-16T00:34:22.028Z
**URL:** [https://www.sandnes.kommune.no/#](https://www.sandnes.kommune.no/#)
**Total Violations:** 6

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 2

#### Affected Elements:

- `#portalframe1, button[data-templatetype="1"]`
- `#portalframe1, button[data-templatetype="2"]`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `#iFrameResizer0`

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 2

#### Affected Elements:

- `#portalframe1, .date-from`
- `#portalframe1, .date-to`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 13

#### Affected Elements:

- `.border-bottom--1.line-height--27[href=""]`
- `#portalframe1, .single-0.day-listings.single-date-list:nth-child(2) > .item-container > .list-item.line > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-1.day-listings.single-date-list:nth-child(3) > .item-container > .list-item.line > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-2.day-listings.single-date-list:nth-child(4) > .item-container > .list-item.line:nth-child(1) > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-2.day-listings.single-date-list:nth-child(4) > .item-container > .list-item.line:nth-child(2) > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-3 > .item-container > .list-item.line > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-4 > .item-container > .list-item.line:nth-child(1) > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-4 > .item-container > .list-item.line:nth-child(2) > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-5 > .item-container > .list-item.line > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-6 > .item-container > .list-item.line > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-0.day-listings.single-date-list:nth-child(9) > .item-container > .list-item.line > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-1.day-listings.single-date-list:nth-child(10) > .item-container > .list-item.line > .list-item-date > .list-item-time > .ical`
- `#portalframe1, .single-2.day-listings.single-date-list:nth-child(11) > .item-container > .list-item.line > .list-item-date > .list-item-time > .ical`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.cc-header-container`
- `.cc-text`

### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `.language-dropdown > select`
