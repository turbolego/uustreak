# WCAG Violations Report for Breidablikk ungdomsskole

**Timestamp:** 2026-11-19T06:33:12.213Z
**URL:** [https://www.sandefjord.kommune.no/barnehage-skole-sfo/skole/alle-skolene/ungdomsskoler/breidablikk-ungdomsskole/](https://www.sandefjord.kommune.no/barnehage-skole-sfo/skole/alle-skolene/ungdomsskoler/breidablikk-ungdomsskole/)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Sandefjord kommune"]`

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- `a[data-id="33947"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.webPartBunnLink`
