# WCAG Violations Report for Aleris Helse AS

**Timestamp:** 2026-10-02T17:02:20.338Z
**URL:** [https://www.aleris.no/](https://www.aleris.no/)
**Total Violations:** 1

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[width="200"], #movie_player`
  - **HTML:** `<div class="html5-video-player y..." tabindex="" id="movie_player" data-version="/s/player/8ab5c328/p..." aria-label="YouTube-videospiller">`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.

