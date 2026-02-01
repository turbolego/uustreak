# WCAG Violations Report for Jysk AS

**Timestamp:** 2026-02-01T00:45:31.022Z
**URL:** [https://jysk.no/#](https://jysk.no/#)
**Total Violations:** 2

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.col-md-3.col-sm-12.col-12:nth-child(1) > .d-md-block.d-lg-block.d-none > nav`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- `.col.mb-md-0.col-md-3:nth-child(1) > .usp.text-decoration-none[href$="om-jysk"] > .usp-inner-container.hyphens-none.promoted > .usp-text.col-sm-12.col-12`
- `.col.mb-md-0.col-md-3:nth-child(2) > .usp.text-decoration-none[href$="om-jysk"] > .usp-inner-container.hyphens-none.promoted > .usp-text.col-sm-12.col-12`
- `.col.mb-md-0.col-md-3:nth-child(3) > .usp.text-decoration-none.d-block > .usp-inner-container.hyphens-none.promoted > .usp-text.col-sm-12.col-12`
- `.usp.text-decoration-none[href$="edlp"] > .usp-inner-container.hyphens-none.promoted > .usp-text.col-sm-12.col-12`
- `.newsletter__header`
- `.required-label.mb-3`
- `.newsletter__fields > div:nth-child(2)`
- `.newsletter__fields > div:nth-child(3)`
- `#edit-terms`
- `label[for="edit-terms"] > span:nth-child(3)`
