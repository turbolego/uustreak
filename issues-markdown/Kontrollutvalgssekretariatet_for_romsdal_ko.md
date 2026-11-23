# WCAG Violations Report for Kontrollutvalgssekretariatet for romsdal ko

**Timestamp:** 2026-11-23T06:21:40.260Z
**URL:** [https://www.kontrollutvalgromsdal.no/](https://www.kontrollutvalgromsdal.no/)
**Total Violations:** 5

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 7

#### Affected Elements:

- `div[role="button"]:nth-child(3)`
- `div[role="button"]:nth-child(4)`
- `div[role="button"]:nth-child(5)`
- `div[role="button"]:nth-child(6)`
- `div[role="button"]:nth-child(7)`
- `div[role="button"]:nth-child(8)`
- `div[role="button"]:nth-child(9)`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 7

#### Affected Elements:

- `img[alt="Aukra"]`
- `img[alt="Gjemnes"]`
- `img[alt="Hustadvika"]`
- `img[alt="Molde"]`
- `img[alt="Rauma"]`
- `img[alt="Sunndal"]`
- `img[alt="Vestnes"]`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- `#C91CFA96-C24B-4C05-88FD-D0B35A4E06D6`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- `.slideshow`
- `div:nth-child(14)`
- `.gmnoprint:nth-child(2) > .gm-style-cc[draggable="false"] > div:nth-child(2) > span`
- `.gm-style-cc.gmnoprint[draggable="false"]`
- `.gm-style-cc[draggable="false"]:nth-child(6)`
- `.googlemapcontainer > div:nth-child(2)`
