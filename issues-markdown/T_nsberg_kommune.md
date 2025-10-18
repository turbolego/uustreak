# WCAG Violations Report for Tønsberg kommune

**Timestamp:** 2025-10-18T00:30:24.012Z
**URL:** [https://www.tonsberg.kommune.no/#](https://www.tonsberg.kommune.no/#)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ac-banner--text-image > .ac-banner-content--outer.ac-banner-content > .ac-banner-content--inner.ac-banner-content > .ac-banner-field--text.ac-banner-field > .ac-banner-field-header > .ac-banner-field-title`

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
