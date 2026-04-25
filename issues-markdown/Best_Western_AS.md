# WCAG Violations Report for Best Western AS

**Timestamp:** 2026-04-25T20:14:37.750Z
**URL:** [https://www.bestwestern.no/#](https://www.bestwestern.no/#)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 7

#### Affected Elements:

- `img[alt="Hoteller med uteservering"]`
- `a[href$="globale-destinasjoner"] > .md\:rounded-bl-lg.bg-cover.bg-center > img[height="0"][width="0"][loading="lazy"]`
- `img[alt="Hundevennlige hoteller"]`
- `img[alt="Hotell utover det vanlige"]`
- `img[alt="Hotellrestauranter"]`
- `img[alt="Naturnære hoteller"]`
- `img[alt="Oppdag flere opplevelser"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `header > nav`

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
