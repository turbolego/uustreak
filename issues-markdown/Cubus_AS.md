# WCAG Violations Report for Cubus AS

**Timestamp:** 2026-10-21T05:41:48.209Z
**URL:** [https://cubus.com/no/](https://cubus.com/no/)
**Total Violations:** 5

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 8

#### Affected Elements:

- `#react_1c832b59-3c03-410c-8e13-184eb29279ac > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(1)`
- `#react_1c832b59-3c03-410c-8e13-184eb29279ac > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(2)`
- `#react_72e4f497-0c41-4157-a3bc-56b58148215b > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(1)`
- `#react_72e4f497-0c41-4157-a3bc-56b58148215b > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(2)`
- `#react_2adf1907-56d8-459a-9979-58a88cad602e > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(1)`
- `#react_2adf1907-56d8-459a-9979-58a88cad602e > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(2)`
- `#react_5b5bb9af-983f-4713-a8ff-3075da6d8f20 > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(1)`
- `#react_5b5bb9af-983f-4713-a8ff-3075da6d8f20 > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(2)`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 4

#### Affected Elements:

- `.css-rgvl9f-StyledProductTextHotspot`
- `.css-ygiphu-StyledProductTextHotspot`
- `.css-1slkskl-StyledProductTextHotspot`
- `.css-dpivvn-StyledProductTextHotspot`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.css-smxovs-StyledCssSliderWrapper`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.e1gatcwn2`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#zendesk-widget`
