# WCAG Violations Report for Norwegian Air Shuttle ASA

**Timestamp:** 2026-02-01T00:30:06.713Z
**URL:** [https://www.norwegian.com/](https://www.norwegian.com/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h3:nth-child(6)`

### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT, RGAAv4, RGAA-8.3.1
- **Count:** 1

#### Affected Elements:

- `html`

### Delayed refresh under 20 hours must not be used

- **Impact:** critical
- **Description:** Ensure <meta http-equiv="refresh"> is not used for delayed refresh
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright
- **Tags:** cat.time-and-media, wcag2a, wcag221, TTv5, TT8.a, EN-301-549, EN-9.2.2.1, RGAAv4, RGAA-13.1.2
- **Count:** 1

#### Affected Elements:

- `meta[http-equiv="refresh"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- `h1`
- `p:nth-child(3)`
- `.client-ip`
- `h3:nth-child(6)`
- `p:nth-child(7)`
- `h3:nth-child(8)`
- `p:nth-child(9)`
- `p:nth-child(10)`
