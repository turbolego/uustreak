# WCAG Violations Report for Dfind Consulting

**Timestamp:** 2026-04-17T03:35:33.840Z
**URL:** [https://www.dfindconsulting.no/](https://www.dfindconsulting.no/)
**Total Violations:** 4

## Violation Details

### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT, RGAAv4, RGAA-8.3.1
- **Count:** 1

#### Affected Elements:

- `html`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `iframe[title="reCAPTCHA"], html`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `iframe[title="reCAPTCHA"], html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `h3`
- `iframe[title="reCAPTCHA"], .rc-inline-block:nth-child(1)`
- `iframe[title="reCAPTCHA"], #rc-anchor-over-quota`
