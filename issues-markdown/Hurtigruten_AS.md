# WCAG Violations Report for Hurtigruten AS

**Timestamp:** 2025-11-11T00:38:06.616Z
**URL:** [https://www.hurtigruten.com/nb-no](https://www.hurtigruten.com/nb-no)
**Total Violations:** 5

## Violation Details

### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- `.styles_destination__CzdCL > .styles_searchPlannerButton__0vaat[role="tab"][aria-controls="search-planner-tabs"]`
- `div:nth-child(2) > .styles_searchPlannerButton__0vaat[role="tab"][aria-controls="search-planner-tabs"]`
- `.styles_duration__yTKnN > .styles_searchPlannerButton__0vaat[role="tab"][aria-controls="search-planner-tabs"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `.styles_socialLink____6Ka[rel="noopener noreferrer"][target="_blank"]:nth-child(1)`
- `.styles_socialLink____6Ka[rel="noopener noreferrer"][target="_blank"]:nth-child(2)`
- `.styles_socialLink____6Ka[rel="noopener noreferrer"][target="_blank"]:nth-child(3)`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.styles_contact__PJl2F > ul`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `.styles_newsLetterContainer__oNPsL > .styles_wrapper__7DGG5.no-width-control > div > .styles_mb-xl__6Q3h3`
- `.styles_newsLetterContainer__oNPsL > .styles_wrapper__7DGG5.no-width-control > div > .styles_mb-2xl__iDToc`
- `a[href$="nyhetsbrev"] > .styles_btnInner___iGIh > .styles_btnText__qlsBU`

### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `select`
