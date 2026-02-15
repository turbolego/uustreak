# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-02-15T01:08:47.494Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 3

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 3

#### Affected Elements:

- `.peer`
- `.gap-4.flex > .bg-transparent.hover\:bg-site-brand-darker.dark\:text-white:nth-child(1)`
- `.gap-4.flex > .bg-transparent.hover\:bg-site-brand-darker.dark\:text-white:nth-child(2)`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 2

#### Affected Elements:

- `#preamble-567880 > .flex-row.md\:flex-col.group > .w-1\/3.md\:w-full.overflow-hidden > .object-cover.duration-700[height="563"]`
- `#preamble-567640 > .flex-row.md\:flex-col.group > .w-1\/3.md\:w-full.overflow-hidden > .object-cover.duration-700[height="563"]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `html`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, html`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, iframe, html`
