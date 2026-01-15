# WCAG Violations Report for Lyse Elnett AS

**Timestamp:** 2026-01-15T07:01:41.233Z
**URL:** [https://www.l-nett.no/](https://www.l-nett.no/)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#placeholder-bottom > .container > .row > .searchinput.container-md.tile-common > .tile-content > form[action="https://www.l-nett.no/sok/"][method="get"] > .searchfield > .search[type="submit"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.inner-content.odd > h3`
- `article[data-articleid="1299"] > a[target="_self"] > .card-body > h3[property="headline"]`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- `#searchBar_element_d28eb9b1_2`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.nav-inline`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 18

#### Affected Elements:

- `#content-link`
- `.col-5`
- `.search-icon`
- `.megamenu-icon`
- `#placeholder-content-1`
- `#placeholder-content-3`
- `#placeholder-content-4`
- `#placeholder-content-5`
- `.tile-content > h3`
- `#ctwebform-elementgroup-group-274`
- `#ctwebform-elementgroup-group-275`
- `#VOOQI`
- `.ctwebform-element-type-captcha > div > div`
- `.ctwebform-element-type-htmlcontent`
- `.pt-0`
- `#placeholder-bottom > .container > .row > .searchinput.container-md.tile-common > .tile-content > h1`
- `#searchBar_element_d28eb9b1_2`
- `.privacy-link > a[target="_self"]`
