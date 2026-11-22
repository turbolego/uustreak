# WCAG Violations Report for Vevelstad kommune

**Timestamp:** 2026-11-22T06:26:47.610Z
**URL:** [https://www.vevelstad.kommune.no/](https://www.vevelstad.kommune.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h4`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `.logo`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `a[data-id="2364"]`
- `a[data-id="2366"]`
- `.event:nth-child(1) > .event-image-container > a`
- `.event:nth-child(2) > .event-image-container > a`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_48_WebpartId_48_txtSearch`
- `#Sone5001`
- `#Sone6000`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_49 > h2`
- `.container > ul`
- `.webPartBunnLink`
- `#Sone7001`
