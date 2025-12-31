# WCAG Violations Report for Kriminalomsorgsdirektoratet

**Timestamp:** 2025-12-31T00:37:16.785Z
**URL:** [https://www.kriminalomsorgen.no/#](https://www.kriminalomsorgen.no/#)
**Total Violations:** 2

## Violation Details

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- `a[href$="infokapsler-cookies"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `a[href$="#mainmenu"]`
- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, h1`
