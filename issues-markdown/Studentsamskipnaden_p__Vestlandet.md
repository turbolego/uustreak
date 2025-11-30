# WCAG Violations Report for Studentsamskipnaden på Vestlandet

**Timestamp:** 2025-11-30T00:39:45.940Z
**URL:** [https://sammen.no/no](https://sammen.no/no)
**Total Violations:** 5

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 3

#### Affected Elements:

- `.gap-4.flex-row.cursor-pointer > .gap-1.items-center[role="button"]`
- `.md\:gap-x-4 > .gap-1.items-center[role="button"]`
- `.svelte-5u34vi[role="button"]:nth-child(1)`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 30

#### Affected Elements:

- `#CybotCookiebotDialogBodyEdgeMoreDetailsLink`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `#searchInput`
- `.contents[href$="bolig"][target="_self"] > .md\:w-56.btn-primary.btn-lg > .md\:text-body_large.flex-row.justify-center`
- `.contents[href$="trening"][target="_self"] > .md\:w-56.btn-primary.btn-lg > .md\:text-body_large.flex-row.justify-center`
- `a[href$="kurs"] > .md\:w-56.btn-primary.btn-lg > .md\:text-body_large.flex-row.justify-center`
- `h1`
- `.md\:text-body_large.flex-row.justify-between > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="bolig"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="studentliv"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="karriere"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="trening"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="helse"][target="_self"]:nth-child(5) > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="barnehage"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.whitespace-nowrap.gap-3[href$="mat-og-drikke"] > .text-base-white.svelte-18q32uc[for=""]`
- `.whitespace-nowrap.gap-3[href$="psykisk-helse"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="studentgoder"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.pb-4.whitespace-nowrap.font-semibold`
- `.gap-3[href$="artikkel"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `a[href$="om-sammen"] > .text-base-white.svelte-18q32uc[for=""]`
- `a[href$="aapningstider"] > .text-base-white.svelte-18q32uc[for=""]`
- `.md\:pt-0.md\:pl-2.pt-4:nth-child(2) > .gap-y-4.grid-cols-1.grid > .whitespace-nowrap.gap-3[target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `a[href$="hjelp-og-dialog"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3.h-fit[target="_blank"]:nth-child(2) > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3.h-fit[target="_blank"]:nth-child(3) > .text-base-white.svelte-18q32uc[for=""]`
- `.md\:pt-0.md\:pl-2.pt-4:nth-child(3) > .gap-y-4.grid-cols-1.grid > .gap-3.h-fit[target="_self"]:nth-child(4) > .text-base-white.svelte-18q32uc[for=""]`
- `.border-b.border-base-white.cursor-pointer`
- `.grow-0`
- `a[href$="personvern"] > .text-base-white.svelte-18q32uc[for=""]`
- `.border-b.border-base-white.gap-3:nth-child(2) > .text-base-white.svelte-18q32uc[for=""]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `a[aria-label="Finn din studentbolig"] > .md\:items-start.flex-col.md\:flex-row > .md\:grow > .font-semibold`
- `#carousel0 > .max-w-\[calc\(80vw\)\].md\:max-w-\[calc\(25\.4vw\)\].rounded-lg > .rounded-t-lg[target="_self"] > .px-3.pb-3.pt-1 > .py-2.text-gray-700`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 10

#### Affected Elements:

- `.flex-grow.md\:max-w-\[1200px\].w-full > div[role="button"]`
- `.bg-transparent.w-fit[role="button"]:nth-child(1)`
- `.bg-transparent.w-fit[role="button"]:nth-child(2)`
- `.bg-transparent.w-fit[role="button"]:nth-child(3)`
- `.bg-transparent.w-fit[role="button"]:nth-child(4)`
- `.bg-transparent.w-fit[role="button"]:nth-child(5)`
- `.bg-transparent.w-fit[role="button"]:nth-child(6)`
- `.bg-transparent.w-fit[role="button"]:nth-child(7)`
- `.bg-transparent.w-fit[role="button"]:nth-child(8)`
- `.bg-transparent.w-fit[role="button"]:nth-child(9)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 31

#### Affected Elements:

- `.md\:pl-0`
- `#searchInput`
- `.md\:w-\[40\%\]`
- `.md\:min-w-\[27rem\] > h2`
- `.pb-12`
- `.h-full.md\:w-\[50\%\].w-full`
- `.mb-1`
- `#carousel0 > .max-w-\[calc\(80vw\)\].md\:max-w-\[calc\(25\.4vw\)\].rounded-lg > .rounded-t-lg[target="_self"] > .relative.h-fit > .absolute.bottom-0.left-5 > .gap-2.items-center.flex > .text-superTitle.leading-tight.md\:leading-snug`
- `#carousel0 > .max-w-\[calc\(80vw\)\].md\:max-w-\[calc\(25\.4vw\)\].rounded-lg > .rounded-t-lg[target="_self"] > .px-3.pb-3.pt-1`
- `#carousel1`
- `img[alt="Fasaden til Studentsenteret"]`
- `#carousel2 > .max-w-\[calc\(80vw\)\].md\:max-w-\[calc\(25\.4vw\)\].rounded-lg > .rounded-t-lg[target="_self"] > .relative.h-fit > .absolute.bottom-0.left-5 > .gap-2.items-center.flex > .text-superTitle.leading-tight.md\:leading-snug`
- `#carousel2 > .max-w-\[calc\(80vw\)\].md\:max-w-\[calc\(25\.4vw\)\].rounded-lg > .rounded-t-lg[target="_self"] > .px-3.pb-3.pt-1`
- `#carousel3`
- `#carousel4`
- `#carousel5`
- `div:nth-child(1) > .\!font-bold.pb-4`
- `.gap-3[href$="bolig"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="studentliv"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="karriere"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="trening"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="helse"][target="_self"]:nth-child(5) > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="barnehage"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.whitespace-nowrap.gap-3[href$="mat-og-drikke"] > .text-base-white.svelte-18q32uc[for=""]`
- `.whitespace-nowrap.gap-3[href$="psykisk-helse"] > .text-base-white.svelte-18q32uc[for=""]`
- `.gap-3[href$="studentgoder"][target="_self"] > .text-base-white.svelte-18q32uc[for=""]`
- `.md\:pt-0.md\:pl-2.pt-4:nth-child(2)`
- `.md\:pt-0.md\:pl-2.pt-4:nth-child(3)`
- `.justify-items-center > div:nth-child(1)`
- `a[href$="personvern"]`
- `div[data-svelte-h="svelte-1a3nkk1"]`
