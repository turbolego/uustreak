# WCAG Violations Report for Nøkleby skole

**Timestamp:** 2025-12-01T00:35:40.009Z
**URL:** [https://www.fredrikstad.kommune.no/skoler/nokleby-skole/#](https://www.fredrikstad.kommune.no/skoler/nokleby-skole/#)
**Total Violations:** 2

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.language > img`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `#q`
- `div[x-show="step === 1"] > .text-gray-700.font-medium`
