# WCAG Violations Report for Telenor ASA

**Timestamp:** 2025-12-29T00:32:25.409Z
**URL:** [https://www.telenor.no/privat/](https://www.telenor.no/privat/)
**Total Violations:** 6

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.image`

### ARIA attributes must conform to valid names

- **Impact:** critical
- **Description:** Ensure attributes that begin with aria- are valid ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 4

#### Affected Elements:

- `.segment-start`
- `button[data-track-label="child2_Under 30 år"]`
- `button[data-track-label="child1_Under 13 år"]`
- `.segment-end`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.shadow-s-hover.border-radius-m.subscription-card-skeleton:nth-child(1) > .card-header[data-v-7b8ad733=""] > .margin-top-3xl.padding-top-3xs`
- `.dropdown-category.footer.text-l:nth-child(1) > .dropdown-link[data-v-485386e6=""] > .dropdown-header.hidden-mobile[data-v-485386e6=""] > h6`
- `#privacy_prompt_text2 > h4`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- `.shadow-s-hover.border-radius-m.subscription-card-skeleton:nth-child(1) > .card-top-content[data-v-7b8ad733=""] > .tn-list.content-list[data-v-c6564969=""] > ul`
- `.shadow-s-hover.border-radius-m.subscription-card-skeleton:nth-child(2) > .card-top-content[data-v-7b8ad733=""] > .tn-list.content-list[data-v-c6564969=""] > ul`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 7

#### Affected Elements:

- `.margin-bottom-2xs[ondragstart="return false"][draggable="false"]:nth-child(1) > .border-radius-l.card[data-v-3032fd63=""] > .main-stock.stock[size="14px"]`
- `.margin-bottom-2xs[ondragstart="return false"][draggable="false"]:nth-child(2) > .border-radius-l.card[data-v-3032fd63=""] > .main-stock.stock[size="14px"]`
- `.margin-bottom-2xs[ondragstart="return false"][draggable="false"]:nth-child(3) > .border-radius-l.card[data-v-3032fd63=""] > .main-stock.stock[size="14px"]`
- `.margin-bottom-2xs[ondragstart="return false"][draggable="false"]:nth-child(4) > .border-radius-l.card[data-v-3032fd63=""] > .main-stock.stock[size="14px"]`
- `.shadow-s-hover.border-radius-m.subscription-card-skeleton:nth-child(1) > .card-top-content[data-v-7b8ad733=""] > .tn-list.content-list[data-v-c6564969=""] > ul > div[data-v-c6564969=""] > .tn-list--item.checkmark.m`
- `.shadow-s-hover.border-radius-m.subscription-card-skeleton:nth-child(2) > .card-top-content[data-v-7b8ad733=""] > .tn-list.content-list[data-v-c6564969=""] > ul > div[data-v-c6564969=""] > .tn-list--item.checkmark.m:nth-child(1)`
- `.tn-list--item.checkmark.m:nth-child(2)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- `#privacy_prompt_text`
- `#privacy_prompt_text2`
- `#freetext-top > .two-buttons`
- `.showConsentPreferences`
- `#privacy_prompt_bottom`
