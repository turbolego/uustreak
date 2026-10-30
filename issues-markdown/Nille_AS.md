# WCAG Violations Report for Nille AS

**Timestamp:** 2026-10-30T05:38:17.746Z
**URL:** [https://www.nille.no/](https://www.nille.no/)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 9

#### Affected Elements:

- `.swiper-slide-active > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(4) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(5) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(6) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(7) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(8) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(9) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(18) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(19) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `span:nth-child(4)`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 7

#### Affected Elements:

- `a[title="Godteribøtte Gresskar"][aria-label=""][data-discover="true"]:nth-child(2) > h3`
- `a[title="Vidal Halloween mix bag 400g"][aria-label=""][data-discover="true"]:nth-child(2) > h3`
- `a[title="Horror Candy 275g"][aria-label=""][data-discover="true"]:nth-child(2) > h3`
- `a[title="Hårbøyle flaggermussverm"][aria-label=""][data-discover="true"]:nth-child(2) > h3`
- `a[title="Sjokoladefigurer Halloween"][aria-label=""][data-discover="true"]:nth-child(2) > h3`
- `a[title="Gresskar, 2 tenner, LED lys"][aria-label=""][data-discover="true"]:nth-child(2) > h3`
- `.swiper-slide:nth-child(20) > .itemCard--fAqEIsz > .content--TOIX07K > a[aria-label=""][data-discover="true"]:nth-child(2) > h3`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.topBar--hOWYROG`
- `.content--QC6mDoR`
