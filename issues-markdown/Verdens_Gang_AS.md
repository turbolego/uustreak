# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-11-04T05:41:05.734Z
**URL:** [https://www.vg.no/](https://www.vg.no/)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- `vg-mellomvalg-2026-results-header,.result-bars > .result.svelte-2jupbe[lang="nb"]:nth-child(1) > .heading.svelte-2jupbe > .republican.svelte-2jupbe`
- `vg-mellomvalg-2026-results-header,.result-bars > .result.svelte-2jupbe[lang="nb"]:nth-child(1) > .distribution.svelte-2jupbe[role="img"] > .total.republican.svelte-2jupbe`
- `vg-mellomvalg-2026-results-header,span[title="Halvparten av setene"]`
- `vg-mellomvalg-2026-results-header,.result.svelte-2jupbe[lang="nb"]:nth-child(2) > .heading.svelte-2jupbe > .republican.svelte-2jupbe`
- `vg-mellomvalg-2026-results-header,.result.svelte-2jupbe[lang="nb"]:nth-child(2) > .distribution.svelte-2jupbe[role="img"] > .total.republican.svelte-2jupbe`
- `vg-mellomvalg-2026-results-header,.result.svelte-2jupbe[lang="nb"]:nth-child(2) > .threshold-label.svelte-2jupbe[title="218 seter gir flertall"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`
