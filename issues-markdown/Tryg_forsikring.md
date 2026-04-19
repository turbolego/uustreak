# WCAG Violations Report for Tryg forsikring

**Timestamp:** 2026-04-19T01:22:26.018Z
**URL:** [https://www.tryg.no/](https://www.tryg.no/)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.contact-box:nth-child(1) > h3`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 12

#### Affected Elements:

- `h1`
- `.error-message`
- `.contact-box:nth-child(1) > h3`
- `.contact-box:nth-child(1) > p:nth-child(3)`
- `.contact-box:nth-child(1) > p:nth-child(4)`
- `.contact-box:nth-child(1) > p:nth-child(5)`
- `.contact-box:nth-child(2) > h3`
- `.contact-box:nth-child(2) > p:nth-child(3)`
- `.contact-box:nth-child(2) > p:nth-child(4)`
- `.contact-box:nth-child(2) > p:nth-child(5)`
- `.hours`
- `.facebook-box`
