# WCAG Violations Report for Jysk AS

**Timestamp:** 2025-11-21T00:41:17.028Z
**URL:** [https://jysk.no/#](https://jysk.no/#)
**Total Violations:** 3

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.col-md-3.col-sm-12.col-12:nth-child(1) > .d-md-block.d-none.d-lg-block > nav`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.justify-content-around > a[href$="black-friday"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- `.col.mb-4.mb-md-0:nth-child(1) > .usp.text-decoration-none[href$="om-jysk"] > .usp-inner-container.hyphens-none.promoted > .usp-text.col-sm-12.col-12`
- `.col.mb-4.mb-md-0:nth-child(2) > .usp.text-decoration-none[href$="om-jysk"] > .usp-inner-container.hyphens-none.promoted > .usp-text.col-sm-12.col-12`
- `.col.mb-4.mb-md-0:nth-child(3) > .usp.text-decoration-none.d-block > .usp-inner-container.hyphens-none.promoted > .usp-text.col-sm-12.col-12`
- `.usp.text-decoration-none[href$="edlp"] > .usp-inner-container.hyphens-none.promoted > .usp-text.col-sm-12.col-12`
- `.newsletter__header`
- `.required-label`
- `.newsletter__fields > div:nth-child(1)`
- `.newsletter__fields > div:nth-child(2)`
- `#edit-terms`
- `.checkbox-inline > span:nth-child(3)`
