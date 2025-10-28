# WCAG Violations Report for Tønsberg kommune

**Timestamp:** 2025-10-28T13:00:33.760Z
**URL:** [https://www.tonsberg.kommune.no/#](https://www.tonsberg.kommune.no/#)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Tønsberg kommune "]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `.back-to-top-button`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 3

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_ctl07_WebpartId_248 > .webPartTittel`
- `#ctl00_ctl00_ctl00_innhold_ctl07_WebpartId_248_WebpartId_248_txtSearch`
- `#ctl00_ctl00_ctl00_innhold_ctl07_WebpartId_249`
