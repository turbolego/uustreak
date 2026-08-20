# WCAG Violations Report for Top Temp AS

**Timestamp:** 2026-08-20T04:14:58.031Z
**URL:** [https://www.toptemp.no/#](https://www.toptemp.no/#)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 3

#### Affected Elements:

- `#hs_cos_wrapper_module_17864422845865 > .image__cards > .image__cards-text > .image__cards-title`
- `#hs_cos_wrapper_module_17864423932173 > .image__cards > .image__cards-text > .image__cards-title`
- `#hs_cos_wrapper_module_17864422914544 > .image__cards > .image__cards-text > .image__cards-title`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.menu--desktop > .menu__wrapper.no-list > .menu__item--depth-1.menu__item.hs-skip-lang-url-rewrite:nth-child(1) > .menu__link[href=""]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 24

#### Affected Elements:

- `.row-number-1`
- `#hs_cos_wrapper_module_17864422762677 > .simple-heading.montserrat.center`
- `.row-number-5`
- `.row-number-6`
- `#hs_cos_wrapper_module_17864422845864 > .simple-heading.montserrat.center`
- `#hs_cos_wrapper_module_17864422845865 > .image__cards`
- `#hs_cos_wrapper_module_17864423932173 > .image__cards`
- `#hs_cos_wrapper_module_17864422914543 > .simple-heading.montserrat.center`
- `#hs_cos_wrapper_module_17864422914544 > .image__cards`
- `.box.no-space:nth-child(1) > .aos-init[data-aos-delay="600"][data-aos="fade-up"]`
- `.box.no-space:nth-child(1) > .aos-init[data-aos-delay="900"][data-aos="fade-up"]`
- `.box.no-space:nth-child(2) > .aos-init[data-aos-delay="600"][data-aos="fade-up"]`
- `.box.no-space:nth-child(2) > .aos-init[data-aos-delay="900"][data-aos="fade-up"]`
- `.box.no-space:nth-child(3) > .aos-init[data-aos-delay="600"][data-aos="fade-up"]`
- `.box.no-space:nth-child(3) > .aos-init[data-aos-delay="900"][data-aos="fade-up"]`
- `.box.no-space:nth-child(4) > .aos-init[data-aos-delay="600"][data-aos="fade-up"]`
- `.box.no-space:nth-child(4) > .aos-init[data-aos-delay="900"][data-aos="fade-up"]`
- `.row-number-17`
- `.row-number-21`
- `.row-number-25`
- `.row-number-29`
- `#hs_cos_wrapper_module_17864423373587 > .simple-heading.montserrat.center`
- `.row-number-35`
- `.row-number-36`
