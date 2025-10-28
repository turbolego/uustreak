# WCAG Violations Report for Telenor ASA

**Timestamp:** 2025-10-28T12:57:03.071Z
**URL:** [https://www.telenor.no/privat/](https://www.telenor.no/privat/)
**Total Violations:** 5

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `.image`

### ARIA attributes must conform to valid names

- **Impact:** critical
- **Description:** Ensure attributes that begin with aria- are valid ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 4

#### Affected Elements:

- `.segment-start`
- `button[data-track-label="child2_Under 30 år"]`
- `button[data-track-label="child1_Under 13 år"]`
- `.segment-end`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.hover-s.subscription-card-skeleton.subscription-card:nth-child(1) > .card-header[data-v-f161f4b3=""] > .margin-top-xl.padding-top-2xs`
- `.dropdown-category.footer[data-v-fc78c99a=""]:nth-child(1) > .dropdown-link[data-v-295ed7f3=""] > .dropdown-header.hidden-mobile[data-v-295ed7f3=""] > h6`
- `#privacy_prompt_text2 > h4`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 4

#### Affected Elements:

- `a[target="_self"][ondragstart="return false"][draggable="false"]:nth-child(1)`
- `a[target="_self"][ondragstart="return false"][draggable="false"]:nth-child(2)`
- `a[target="_self"][ondragstart="return false"][draggable="false"]:nth-child(3)`
- `a[target="_self"][ondragstart="return false"][draggable="false"]:nth-child(4)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 5

#### Affected Elements:

- `#privacy_prompt_text`
- `#privacy_prompt_text2`
- `#freetext-top > .two-buttons`
- `.showConsentPreferences`
- `#privacy_prompt_bottom`
