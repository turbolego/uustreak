# WCAG Violations Report for Telenor ASA

**Timestamp:** 2025-10-14T00:26:50.088Z
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

- `.hover-s.border-radius-m.subscription-card-skeleton:nth-child(1) > .card-header[data-v-f161f4b3=""] > .margin-top-xl.padding-top-2xs`
- `.dropdown-category.footer[data-v-fc78c99a=""]:nth-child(1) > .dropdown-link[data-v-295ed7f3=""] > .dropdown-header.hidden-mobile[data-v-295ed7f3=""] > h6`
- `#privacy_prompt_text2 > h4`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 4

#### Affected Elements:

- `.margin-bottom-xs[ondragstart="return false"][data-v-d2dd02e0=""]:nth-child(1) > .border-radius-l.card[data-v-14a666ce=""] > .main-stock.stock[size="14px"]`
- `.margin-bottom-xs[ondragstart="return false"][data-v-d2dd02e0=""]:nth-child(2) > .border-radius-l.card[data-v-14a666ce=""] > .main-stock.stock[size="14px"]`
- `.margin-bottom-xs[ondragstart="return false"][data-v-d2dd02e0=""]:nth-child(3) > .border-radius-l.card[data-v-14a666ce=""] > .main-stock.stock[size="14px"]`
- `.margin-bottom-xs[ondragstart="return false"][data-v-d2dd02e0=""]:nth-child(4) > .border-radius-l.card[data-v-14a666ce=""] > .main-stock.stock[size="14px"]`

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
