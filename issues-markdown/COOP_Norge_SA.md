# WCAG Violations Report for COOP Norge SA

**Timestamp:** 2025-10-29T00:37:56.553Z
**URL:** [https://www.coop.no/#](https://www.coop.no/#)
**Total Violations:** 5

## Violation Details

### Required ARIA attributes must be provided

- **Impact:** critical
- **Description:** Ensure elements with ARIA roles have all required ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 2

#### Affected Elements:

- `.h9 > .bt.bu.bx > .ch[placeholder="F.eks 0101 eller Oslo"][role="combobox"]`
- `div:nth-child(1) > .h5.h7.h6 > .h8 > .bt.bu.bx > .ch[placeholder="F.eks 0101 eller Oslo"][role="combobox"]`

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 3

#### Affected Elements:

- `input[role="searchbox"]`
- `.h9 > .bt.bu.bx > .ch[placeholder="F.eks 0101 eller Oslo"][role="combobox"]`
- `div:nth-child(1) > .h5.h7.h6 > .h8 > .bt.bu.bx > .ch[placeholder="F.eks 0101 eller Oslo"][role="combobox"]`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- `.g4`
- `#\36 N2snuT4T1QyrHU1wbHFIW > .ah.ai.af > .ee.am.cj > .ef.eh.ei`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2
- **Count:** 4

#### Affected Elements:

- `#\33 3modPj5ilgcmY76YKciV8 > .q.e9.cj > .ea.al.ba > .eb.ec.ed > iframe, iframe[src$="about:blank"]`
- `#\33 3modPj5ilgcmY76YKciV8 > .q.e9.cj > .ea.al.ba > .eb.ec.ed > iframe, body > iframe`
- `#GNXWL8jlPCFqmGJFbdvQe > .q.e9.cj > .ea.al.ba > .eb.ec.ed > iframe, iframe[src$="about:blank"]`
- `#GNXWL8jlPCFqmGJFbdvQe > .q.e9.cj > .ea.al.ba > .eb.ec.ed > iframe, body > iframe`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 2

#### Affected Elements:

- `.jw.jx.jy:nth-child(1)`
- `.jw.jx.jy:nth-child(2)`
