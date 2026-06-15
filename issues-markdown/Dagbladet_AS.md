# WCAG Violations Report for Dagbladet AS

**Timestamp:** 2026-06-15T05:15:05.143Z
**URL:** [https://www.dagbladet.no/#](https://www.dagbladet.no/#)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 7

#### Affected Elements:

- `.hasTextColor > .kicker-content`
- `span[data-lab-text_color_desktop="text-yellow"]`
- `.song-chip[rel="noopener noreferrer"][target="_blank"]:nth-child(3) > .song-title.svelte-1mbdfa7`
- `.song-chip[rel="noopener noreferrer"][target="_blank"]:nth-child(3) > .song-author.svelte-1mbdfa7`
- `.song-chip[rel="noopener noreferrer"][target="_blank"]:nth-child(4) > .song-title.svelte-1mbdfa7`
- `.song-chip[rel="noopener noreferrer"][target="_blank"]:nth-child(4) > .song-author.svelte-1mbdfa7`
- `.song-chip[rel="noopener noreferrer"][target="_blank"]:nth-child(5) > .song-title.svelte-1mbdfa7`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.jkuUMO`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#am-branding > p`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `iframe[title="VM 2026 – kampstripe"], .ds-cells`
