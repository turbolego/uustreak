# WCAG Violations Report for Aktiv Eiendomsmegling AS

**Timestamp:** 2026-10-26T18:07:32.125Z
**URL:** [https://aktiv.no/](https://aktiv.no/)
**Total Violations:** 3

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- `#summary-4e5afa88-4847-4840-9815-c4e1889467a6 > h2:nth-child(2)`
- `#summary-0ea42923-3099-4a8f-826a-62d527a86834 > h2:nth-child(2)`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ProjectsSliderContentV2_item__XyMYZ:nth-child(1) > .ProjectsSliderContentV2_link__jiC_D.ProjectsSliderContentV2_linkInheritsColor__8yyxz > .ProjectsSliderContentV2_contentWrapper__F2Xkp > .ProjectsSliderContentV2_title__Jz1iE.ProjectsSliderContentV2_addressTitle__hh_pM`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 2

#### Affected Elements:

- `meta[name="viewport"]:nth-child(9)`
- `meta[name="viewport"]:nth-child(53)`
