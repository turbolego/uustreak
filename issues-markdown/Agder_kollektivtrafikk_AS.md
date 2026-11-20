# WCAG Violations Report for Agder kollektivtrafikk AS

**Timestamp:** 2026-11-20T05:59:57.769Z
**URL:** [https://www.akt.no/](https://www.akt.no/)
**Total Violations:** 4

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Agder kollektivtrafikk"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `a[data-id="2374"]`
- `a[data-id="2376"]`
- `a[data-id="9080"]`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.navigation`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 25

#### Affected Elements:

- `.visually-hidden`
- `.travel-planner-form-group--from-to`
- `.travel-planner-form-group--date-time-direction`
- `a[data-id="15916"] > span > .text`
- `a[data-id="15916"] > span > .description`
- `a[data-id="33"] > span > .text`
- `a[data-id="33"] > span > .description`
- `a[data-id="30"] > span > .text`
- `a[data-id="30"] > span > .description`
- `a[data-id="22395"] > span > .text`
- `a[data-id="22395"] > span > .description`
- `a[data-id="10833"] > span > .text`
- `a[data-id="10833"] > span > .description`
- `a[data-id="10830"] > span > .text`
- `a[data-id="10830"] > span > .description`
- `a[data-id="32"] > span > .text`
- `a[data-id="32"] > span > .description`
- `a[data-id="10834"] > span > .text`
- `a[data-id="10834"] > span > .description`
- `a[data-id="22394"] > span > .text`
- `a[data-id="22394"] > span > .description`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_plhZoneContainer2200`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_45 > h2`
- `.container > ul`
- `.webPartBunnLink`
