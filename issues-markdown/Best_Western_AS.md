# WCAG Violations Report for Best Western AS

**Timestamp:** 2026-05-12T00:57:29.802Z
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
- `img[alt="Naturnære hoteller"]`
- `img[alt="Hundevennlige hoteller"]`
- `img[alt="Hotell utover det vanlige"]`
- `img[alt="Hotellrestauranter"]`
- `a[href$="globale-destinasjoner"] > .md\:rounded-bl-lg.bg-cover.bg-center > img[height="0"][width="0"][loading="lazy"]`
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
- **Count:** 7

#### Affected Elements:

- `.\[\&\:not\(\:focus\)\]\:visually-hidden`
- `.pr-2`
- `a[href$="bestwestern.com/"]`
- `#ddChallengeBody1778547442456, .captcha__header`
- `#ddChallengeBody1778547442456, .captcha__human`
- `#ddChallengeBody1778547442456, .captcha__robot__warning`
- `#ddChallengeBody1778547442456, .captcha__robot__contact_support`
