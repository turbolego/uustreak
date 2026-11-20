# WCAG Violations Report for Tromsø brann og redning KF

**Timestamp:** 2026-11-20T06:34:55.290Z
**URL:** [https://www.tromsobrannogredning.no/](https://www.tromsobrannogredning.no/)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 7

#### Affected Elements:

- `iframe, li:nth-child(1)`
- `iframe, li:nth-child(2)`
- `iframe, li:nth-child(3)`
- `iframe, li:nth-child(4)`
- `iframe, li:nth-child(5)`
- `iframe, li:nth-child(6)`
- `iframe, li:nth-child(7)`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 8

#### Affected Elements:

- `a[aria-label="Read more about Beredskap"]`
- `.bde-post-list-25-106 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(2) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
- `.bde-post-list-25-106 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(3) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
- `.bde-post-list-25-106 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(4) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
- `.bde-post-list-25-129 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(1) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
- `.bde-post-list-25-129 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(2) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
- `.bde-post-list-25-129 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(3) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
- `.bde-post-list-25-129 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(4) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe, ul`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 16

#### Affected Elements:

- `.section-background-video`
- `h4`
- `h1`
- `.bde-section-25-104`
- `.bde-grid-25-109`
- `.bde-heading-25-118`
- `.bde-text-25-119`
- `.bde-section-25-121`
- `.bde-heading-79-114`
- `.bde-text-79-115`
- `.bde-heading-79-118`
- `.bde-text-79-119`
- `.bde-heading-79-122`
- `.bde-text-79-123`
- `.bde-div-79-110`
- `.bde-text-79-125`

### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `iframe, .ShareControl__ShareIcon-sc-1pwe6vd-0`
- `iframe, .SubscribeLink__PlusIcon-sc-q4x3v7-0`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `iframe, ul`
