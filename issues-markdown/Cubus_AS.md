# WCAG Violations Report for Cubus AS

**Timestamp:** 2026-09-06T02:15:48.733Z
**URL:** [https://cubus.com/no/](https://cubus.com/no/)
**Total Violations:** 3

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 12

#### Affected Elements:

- `.css-133ume9-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(1)`
- `.css-133ume9-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(2)`
- `.css-133ume9-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(3)`
- `#react_09f77832-b779-4563-80a6-b8edc5ca116b > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(1)`
- `#react_09f77832-b779-4563-80a6-b8edc5ca116b > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(2)`
- `#react_4e920336-fc09-47bb-b017-e32a9a84f8fe > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(1)`
- `#react_4e920336-fc09-47bb-b017-e32a9a84f8fe > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(2)`
- `#react_1b02892c-12c8-4760-b755-8ccf89378077 > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(1)`
- `#react_1b02892c-12c8-4760-b755-8ccf89378077 > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(2)`
- `#react_68605e43-5cb0-45e5-94ea-ba29e1b21870 > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(1)`
- `#react_68605e43-5cb0-45e5-94ea-ba29e1b21870 > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(2)`
- `#react_a2fcdae0-f2b1-45c5-a556-737f534287d5 > .css-1tq5kgv-StyledImageBlock.ev0go5a5 > .css-s1qk9n-StyledText.ev0go5a4 > .css-je42r5-StyledImageText.ev0go5a0.MuiTypography-body1 > .css-16zvez3-StyledRichText.ela8nw60 > .-extra-bold.margin-sm:nth-child(3)`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#react_e3955d5a-1b60-46fb-95b8-264f96ca17b5 > .css-1ljaiw5-StyledProductListBlock.ey9rwho0 > .css-1dlfasc-StyledProductListSlider.e12nlr8e5[aria-label="Glidebryter med produkter"]`
- `.css-smxovs-StyledCssSliderWrapper`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.e1gatcwn2`
