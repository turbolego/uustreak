# WCAG Violations Report for Elkjøp AS

**Timestamp:** 2026-07-24T15:48:42.312Z
**URL:** [https://www.elkjop.no/](https://www.elkjop.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `a[data-item-id="950282"] > .col-start-1.mb-auto.pt-2 > .gap-x-2.md\:gap-x-3.flex-wrap > .items-start.flex-col.flex > .pb-\[1px\].leading-\[0\.75rem\][data-highlight-price="1000"] > .inc-vat`
- `span[data-highlight-price="5000"] > .inc-vat`
- `a[data-item-id="982753"] > .col-start-1.mb-auto.pt-2 > .gap-x-2.md\:gap-x-3.flex-wrap > .items-start.flex-col.flex > .pb-\[1px\].leading-\[0\.75rem\][data-highlight-price="1000"] > .inc-vat`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- `button:nth-child(1) > .xl\:flex-col.text-\(--header-text\).px-4`
- `div[data-component="AccountPopoverMenu"] > .xl\:flex-col.text-\(--header-text\).px-4`
- `li[data-testid="cart"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#kindly-chat-api > div,.sc-iUlCMS`
