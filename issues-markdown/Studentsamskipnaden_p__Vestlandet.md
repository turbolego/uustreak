# WCAG Violations Report for Studentsamskipnaden på Vestlandet

**Timestamp:** 2026-08-24T01:37:22.071Z
**URL:** [https://sammen.no/no](https://sammen.no/no)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 31

#### Affected Elements:

- `#CybotCookiebotDialogBodyEdgeMoreDetailsLink`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `#searchInput`
- `.contents[href="/no/bolig?location=felles"][target="_self"] > .md\:w-56.btn-primary.btn-lg > .md\:text-body_large.flex-row.justify-center`
- `.contents[href="/no/trening?location=bergen"][target="_self"] > .md\:w-56.btn-primary.btn-lg > .md\:text-body_large.flex-row.justify-center`
- `a[href$="kurs"] > .md\:w-56.btn-primary.btn-lg > .md\:text-body_large.flex-row.justify-center`
- `a[href$="bli-medlem"] > .btn-primary.btn-lg[type="button"] > .md\:text-body_large.flex-row.justify-between > .text-base-white.svelte-nqw3qe.font-light`
- `.contents[target="_blank"] > .btn-primary.btn-lg[type="button"] > .md\:text-body_large.flex-row.justify-between > .text-base-white.svelte-nqw3qe.font-light`
- `h1`
- `a[href$="bolig"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="studentliv"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="karriere"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="trening"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="helse"]:nth-child(5) > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="barnehage"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="mat-og-drikke"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="psykisk-helse"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="studentgoder"] > .text-base-white.svelte-nqw3qe.font-light`
- `.whitespace-nowrap.pb-4.font-semibold`
- `.gap-3[href$="artikkel"][target="_self"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="om-sammen"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="aapningstider"] > .text-base-white.svelte-nqw3qe.font-light`
- `.md\:pt-0.md\:pl-2.pt-4:nth-child(2) > .gap-y-4.grid-cols-1.grid > .whitespace-nowrap.gap-3[target="_self"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="hjelp-og-dialog"] > .text-base-white.svelte-nqw3qe.font-light`
- `.gap-3.h-fit[target="_blank"]:nth-child(2) > .text-base-white.svelte-nqw3qe.font-light`
- `.gap-3.h-fit[target="_blank"]:nth-child(3) > .text-base-white.svelte-nqw3qe.font-light`
- `.md\:pt-0.md\:pl-2.pt-4:nth-child(3) > .gap-y-4.grid-cols-1.grid > .gap-3.h-fit[target="_self"]:nth-child(4) > .text-base-white.svelte-nqw3qe.font-light`
- `.border-b.border-base-white.cursor-pointer`
- `.grow-0`
- `a[href$="personvern"] > .text-base-white.svelte-nqw3qe.font-light`
- `.border-b.border-base-white.gap-3:nth-child(2) > .text-base-white.svelte-nqw3qe.font-light`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `a[aria-label="Finn din studentbolig"] > .md\:items-start.md\:flex-row.flex-col > .md\:grow > .font-semibold.text-gray-900`
- `a[href$="alle-studenter"] > .pt-2.pb-2.px-2 > .text-sm.line-clamp-2.py-0`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 9

#### Affected Elements:

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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 40

#### Affected Elements:

- `.md\:pl-0`
- `.md\:w-\[40\%\]`
- `.flex-col-reverse.overflow-hidden.md\:items-stretch:nth-child(1) > .lg\:min-w-\[27rem\].p-8.md\:py-16 > h2`
- `.flex-col-reverse.overflow-hidden.md\:items-stretch:nth-child(1) > .lg\:min-w-\[27rem\].p-8.md\:py-16 > .pb-12.max-w-\[36ch\].md\:max-w-none`
- `.flex-col-reverse.overflow-hidden.md\:items-stretch:nth-child(1) > .md\:h-auto.md\:self-stretch.md\:z-0`
- `.md\:flex-row-reverse > .lg\:min-w-\[27rem\].p-8.md\:py-16 > h2`
- `.md\:flex-row-reverse > .lg\:min-w-\[27rem\].p-8.md\:py-16 > .pb-12.max-w-\[36ch\].md\:max-w-none`
- `.md\:flex-row-reverse > .md\:h-auto.md\:self-stretch.md\:z-0`
- `h1`
- `.mb-1`
- `#carousel0`
- `#carousel1`
- `img[alt="bilder av studenter i Bergen"]`
- `a[href$="ny-student-bergen"] > .relative.h-fit > .absolute.bottom-0.left-3 > .gap-1.items-center.flex > .text-superTitle.md\:leading-snug.text-xs`
- `a[href$="ny-student-bergen"] > .pt-2.pb-2.px-2`
- `#carousel3 > .w-\[70vw\].md\:w-72.min-w-\[70vw\] > .grow.rounded-t-lg[target="_self"] > .relative.h-fit > .h-44.object-cover[draggable="false"]`
- `#carousel3 > .w-\[70vw\].md\:w-72.min-w-\[70vw\] > .grow.rounded-t-lg[target="_self"] > .relative.h-fit > .absolute.bottom-0.left-3 > .gap-1.items-center.flex > .text-superTitle.md\:leading-snug.text-xs`
- `#carousel3 > .w-\[70vw\].md\:w-72.min-w-\[70vw\] > .grow.rounded-t-lg[target="_self"] > .pt-2.pb-2.px-2`
- `#carousel4 > .w-\[70vw\].md\:w-72.min-w-\[70vw\] > .grow.rounded-t-lg[target="_self"] > .relative.h-fit > .h-44.object-cover[draggable="false"]`
- `#carousel4 > .w-\[70vw\].md\:w-72.min-w-\[70vw\] > .grow.rounded-t-lg[target="_self"] > .relative.h-fit > .absolute.bottom-0.left-3 > .gap-1.items-center.flex > .text-superTitle.md\:leading-snug.text-xs`
- `#carousel4 > .w-\[70vw\].md\:w-72.min-w-\[70vw\] > .grow.rounded-t-lg[target="_self"] > .pt-2.pb-2.px-2`
- `#carousel5`
- `#carousel6`
- `#carousel7`
- `#carousel8`
- `div:nth-child(1) > .\!font-bold.pb-4`
- `a[href$="bolig"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="studentliv"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="karriere"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="trening"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="helse"]:nth-child(5) > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="barnehage"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="mat-og-drikke"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="psykisk-helse"] > .text-base-white.svelte-nqw3qe.font-light`
- `a[href$="studentgoder"] > .text-base-white.svelte-nqw3qe.font-light`
- `.md\:pt-0.md\:pl-2.pt-4:nth-child(2)`
- `.md\:pt-0.md\:pl-2.pt-4:nth-child(3)`
- `.border-t > div:nth-child(1)`
- `a[href$="personvern"]`
- `.flex-grow.md\:max-w-\[1200px\].w-full > .justify-end.flex`
