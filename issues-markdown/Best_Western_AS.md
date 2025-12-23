# WCAG Violations Report for Best Western AS

**Timestamp:** 2025-12-23T00:30:49.696Z
**URL:** [https://www.bestwestern.no/#](https://www.bestwestern.no/#)
**Total Violations:** 5

## Violation Details

### ARIA input fields must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA input field has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 4

#### Affected Elements:

- `div:nth-child(1) > div[role="listbox"]`
- `div:nth-child(2) > div[role="listbox"]`
- `.svelte-hwwq0n > div[role="listbox"]`
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
- `.svelte-hwwq0n > div[role="listbox"]`
- `div:nth-child(4) > div[role="listbox"]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 7

#### Affected Elements:

- `.aspect-square.h-full:nth-child(1) > .group.grow[title=""] > .md\:rounded-bl-lg.bg-cover.bg-center > img[height="398"][width="398"][decoding="async"]`
- `a[href$="globale-hoteller"] > .md\:rounded-bl-lg.bg-cover.bg-center > img[height="398"][width="398"][decoding="async"]`
- `img[alt="Hundevennlige hoteller"]`
- `img[alt="Hotell utover det vanlige"]`
- `img[alt="Hotellrestauranter"]`
- `.aspect-square.h-full:nth-child(7) > .group.grow[title=""] > .md\:rounded-bl-lg.bg-cover.bg-center > img[height="398"][width="398"][decoding="async"]`
- `img[alt="Spahoteller"]`

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
- **Count:** 3

#### Affected Elements:

- `.\[\&\:not\(\:focus\)\]\:visually-hidden`
- `.pr-2`
- `a[href$="bestwestern.com/"]`
