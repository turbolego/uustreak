# WCAG Violations Report for First Hotels AS

**Timestamp:** 2026-01-18T00:31:47.826Z
**URL:** [https://www.firsthotels.no/](https://www.firsthotels.no/)
**Total Violations:** 4

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.hover\:bg-accent`
- `.data-\[placeholder\]\:text-muted-foreground`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 11

#### Affected Elements:

- `#CybotCookiebotDialogBodyEdgeMoreDetailsLink`
- `.mb-8.md\:mt-8:nth-child(1) > .space-y-4.flex-col.flex > .space-y-4.flex-col.relative > .overflow-x-hidden[role="region"][aria-roledescription="carousel"] > .overflow-hidden[data-slot="carousel-content"] > .-ml-4.pr-0.pb-4 > .min-w-0.grow-0.basis-full:nth-child(1) > a > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
- `.mb-8.md\:mt-8:nth-child(1) > .space-y-4.flex-col.flex > .space-y-4.flex-col.relative > .overflow-x-hidden[role="region"][aria-roledescription="carousel"] > .overflow-hidden[data-slot="carousel-content"] > .-ml-4.pr-0.pb-4 > .min-w-0.grow-0.basis-full:nth-child(2) > a > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
- `.mb-8.md\:mt-8:nth-child(1) > .space-y-4.flex-col.flex > .space-y-4.flex-col.relative > .overflow-x-hidden[role="region"][aria-roledescription="carousel"] > .overflow-hidden[data-slot="carousel-content"] > .-ml-4.pr-0.pb-4 > .min-w-0.grow-0.basis-full:nth-child(3) > a > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
- `a[href$="sverige"] > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
- `a[href$="danmark"] > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
- `a[href$="norge"] > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
- `.data-\[placeholder\]\:text-muted-foreground > .text-muted-foreground:nth-child(2)`
- `a[href$="privacy-policy"]`
- `a[href$="booking-conditions"]`
- `a[href$="cookies"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.mb-8.md\:mt-8:nth-child(1) > .space-y-4.flex-col.flex > .space-y-4.flex-col.relative > .overflow-x-hidden[role="region"][aria-roledescription="carousel"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- `.container-max.mx-auto.px-4 > a[href="/"]`
- `.border-b-stone-700 > a[href="/"]`
- `.space-x-4.flex > a[target="_blank"]:nth-child(1)`
- `.space-x-4.flex > a[target="_blank"]:nth-child(2)`
- `a[target="_blank"]:nth-child(3)`
