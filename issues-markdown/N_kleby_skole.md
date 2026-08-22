# WCAG Violations Report for Nøkleby skole

**Timestamp:** 2026-08-22T02:58:38.871Z
**URL:** [https://www.fredrikstad.kommune.no/tjenester/skole-og-utdanning/skoler/noekleby-skole/](https://www.fredrikstad.kommune.no/tjenester/skole-og-utdanning/skoler/noekleby-skole/)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.border-sky-600.rounded-lg.mb-6:nth-child(2) > .bg-white > .fk-kollaps-btn.gap-3.py-4 > h3`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.language > img`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `div[x-show="step === 1"] > .font-medium.text-xl.text-gray-700`
