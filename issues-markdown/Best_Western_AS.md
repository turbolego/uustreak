# WCAG Violations Report for Best Western AS

**Timestamp:** 2026-03-26T21:33:09.058Z
**URL:** [https://www.bestwestern.no/#](https://www.bestwestern.no/#)
**Total Violations:** 7

## Violation Details

### ARIA hidden element must not be focusable or contain focusable elements

- **Impact:** serious
- **Description:** Ensure aria-hidden elements are not focusable nor contain focusable elements
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-hidden-focus?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.bottom-1`

### ARIA input fields must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA input field has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 4

#### Affected Elements:

- `div:nth-child(1) > div[role="listbox"]`
- `div:nth-child(2) > div[role="listbox"]`
- `.svelte-1l68007 > div[role="listbox"]`
- `div:nth-child(4) > div[role="listbox"]`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 4

#### Affected Elements:

- `div:nth-child(1) > div[role="listbox"]`
- `div:nth-child(2) > div[role="listbox"]`
- `.svelte-1l68007 > div[role="listbox"]`
- `div:nth-child(4) > div[role="listbox"]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 7

#### Affected Elements:

- `a[href$="hoteller-nar-nordlys"] > .md\:rounded-bl-lg.bg-cover.bg-center > img[height="0"][width="0"][loading="lazy"]`
- `a[href$="globale-destinasjoner"] > .md\:rounded-bl-lg.bg-cover.bg-center > img[height="0"][width="0"][loading="lazy"]`
- `img[alt="Hundevennlige hoteller"]`
- `img[alt="Hotell utover det vanlige"]`
- `img[alt="Hotellrestauranter"]`
- `img[alt="Naturnære hoteller"]`
- `img[alt="Barnevennlige hoteller"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `header > nav`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `#footerLinks-0`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.pr-2`
- `a[href$="bestwestern.com/"]`
