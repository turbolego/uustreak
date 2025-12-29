# WCAG Violations Report for Farnes skule

**Timestamp:** 2025-12-29T00:27:33.597Z
**URL:** [https://www.ardal.kommune.no/tenester/barnehage-og-skule/skule/farnes-skule/#](https://www.ardal.kommune.no/tenester/barnehage-og-skule/skule/farnes-skule/#)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Årdal kommune"]`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `#vFact_audioFrame, html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- `.global-area-message`
- `.breadcrumbs-content > span`
- `#breadcrumb-ctl00_ctl00_ctl00_ctl00_innhold_MidtSone_ucBreadcrumbs`
- `.page-title`
- `.sub-navigation`
- `.fantDuLabel`
- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, h1`
