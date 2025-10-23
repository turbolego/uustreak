# WCAG Violations Report for Stavanger Turistforening

**Timestamp:** 2025-10-23T00:21:41.403Z
**URL:** [https://www.dnt.no/stavanger/#](https://www.dnt.no/stavanger/#)
**Total Violations:** 10

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 3

#### Affected Elements:

- `.cookie_cat_functional > .coi-consent-banner__checkmark`
- `.cookie_cat_statistic > .coi-consent-banner__checkmark`
- `.cookie_cat_marketing > .coi-consent-banner__checkmark`

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 8

#### Affected Elements:

- `button[aria-controls="modal-568737"]`
- `button[aria-controls="modal-561456"]`
- `button[aria-controls="modal-562485"]`
- `button[aria-controls="modal-561513"]`
- `button[aria-controls="modal-497799"]`
- `button[aria-controls="modal-567116"]`
- `button[aria-controls="modal-496382"]`
- `button[aria-controls="modal-510408"]`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `#photocredit-icon`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 8

#### Affected Elements:

- `.w-\[180px\].h-\[160px\]:nth-child(1) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
- `.w-\[180px\].h-\[160px\]:nth-child(2) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
- `.w-\[180px\].h-\[160px\]:nth-child(3) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
- `.w-\[180px\].h-\[160px\]:nth-child(4) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
- `.w-\[180px\].h-\[160px\]:nth-child(5) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
- `.w-\[180px\].h-\[160px\]:nth-child(6) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
- `.w-\[180px\].h-\[160px\]:nth-child(7) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`
- `.w-\[180px\].h-\[160px\]:nth-child(8) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 13

#### Affected Elements:

- `.w-auto > picture > .object-center.object-cover`
- `#react_0HNGHN0B9B36B > .my-10 > .md\:grid-cols-4.mb-16.gap-7 > .group.relative:nth-child(3) > div > .md\:flex-col.space-x-4.md\:space-x-0 > .w-2\/5.md\:mb-3.md\:w-full > .overflow-hidden.rounded-lg > picture > .t-\[10px\].md\:rounded-\[10px\].md\:group-hover\:scale-110`
- `div:nth-child(1) > .bg-beige-50.bleeding-edges.py-10 > .grid-cols-12.gap-y-6.container > .col-start-2.md\:col-start-9.md\:col-span-3 > .border.hover\:shadow-md.border-beige-200 > .bg-topography.overflow-hidden.rounded-lg > picture > .h-38.object-center.object-cover`
- `div:nth-child(2) > .bg-beige-50.bleeding-edges.py-10 > .grid-cols-12.gap-y-6.container > .col-start-2.md\:col-start-9.md\:col-span-3 > .border.hover\:shadow-md.border-beige-200 > .bg-topography.overflow-hidden.rounded-lg > picture > .h-38.object-center.object-cover`
- `.object-center[height="264"][width="600"]`
- `.w-\[180px\].h-\[160px\]:nth-child(1) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
- `.w-\[180px\].h-\[160px\]:nth-child(2) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
- `.w-\[180px\].h-\[160px\]:nth-child(3) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
- `.w-\[180px\].h-\[160px\]:nth-child(4) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
- `.w-\[180px\].h-\[160px\]:nth-child(5) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
- `.w-\[180px\].h-\[160px\]:nth-child(6) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
- `.w-\[180px\].h-\[160px\]:nth-child(7) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`
- `.w-\[180px\].h-\[160px\]:nth-child(8) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .justify-between.h-full.flex-col > .h-\[100px\].items-center.flex > img`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 8

#### Affected Elements:

- `.w-\[180px\].h-\[160px\]:nth-child(1) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .inset-0.\!absolute.z-50`
- `.w-\[180px\].h-\[160px\]:nth-child(2) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .inset-0.\!absolute.z-50`
- `a[href$="dengulebanken.no/"]`
- `a[href$="bate.no/"]`
- `.w-\[180px\].h-\[160px\]:nth-child(5) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .inset-0.\!absolute.z-50`
- `a[href$="platousport.com/"]`
- `.w-\[180px\].h-\[160px\]:nth-child(7) > .shadow-beige-300\/25.hover\:shadow-beige-300\/75.px-8 > .inset-0.\!absolute.z-50`
- `a[href$="folkehallene.no/"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 3

#### Affected Elements:

- `.fixed`
- `.w-auto`
- `.text-\[17px\]`
