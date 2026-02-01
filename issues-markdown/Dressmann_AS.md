# WCAG Violations Report for Dressmann AS

**Timestamp:** 2026-02-01T00:36:51.116Z
**URL:** [https://dressmann.com/no/](https://dressmann.com/no/)
**Total Violations:** 2

## Violation Details

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- `a`

### Delayed refresh under 20 hours must not be used

- **Impact:** critical
- **Description:** Ensure <meta http-equiv="refresh"> is not used for delayed refresh
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright
- **Tags:** cat.time-and-media, wcag2a, wcag221, TTv5, TT8.a, EN-301-549, EN-9.2.2.1, RGAAv4, RGAA-13.1.2
- **Count:** 1

#### Affected Elements:

- `meta[http-equiv="refresh"]`
