# WCAG Violations Report for Landbruksdirektoratet

**Timestamp:** 2026-02-05T00:49:40.374Z
**URL:** [https://www.landbruksdirektoratet.no/nb/#](https://www.landbruksdirektoratet.no/nb/#)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 8

#### Affected Elements:

- `.industry-illustration[alt="Jordbruk"]`
- `.industry-illustration[alt="Skogbruk"]`
- `.industry-illustration[alt="Reindrift"]`
- `.industry-illustration[alt="Industri og handel"]`
- `.industry-illustration[alt="Miljø og klima"]`
- `.industry-illustration[alt="Eiendom"]`
- `.industry-illustration[alt="Prosjektmidler"]`
- `.industry-illustration[alt="Jakt og fangst"]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.to-top-link`
- `#__googlesearch-trigger`
