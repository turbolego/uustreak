# WCAG Violations Report for Best Western AS

**Timestamp:** 2026-10-21T05:39:34.778Z
**URL:** [https://www.bestwestern.no/](https://www.bestwestern.no/)
**Total Violations:** 4

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 8

#### Affected Elements:

- `img[alt="Oppdag flere opplevelser"]`
- `img[alt="Spahoteller"]`
- `img[alt="Naturnære hoteller"]`
- `img[alt="Hundevennlige hoteller"]`
- `img[alt="Hotell utover det vanlige"]`
- `img[alt="Hotellrestauranter"]`
- `a[href$="globale-destinasjoner"] > .md\:rounded-bl-lg.bg-cover.bg-center > img[height="0"][width="0"][loading="lazy"]`
- `img[alt="Bli medlem"]`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- `a[href$="bestwestern.com/"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `header > nav`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- `.focus-visible\:underline`
- `a[href$="bestwestern.com/"]`
- `#ddChallengeBody1792561162311, .captcha__header`
- `#ddChallengeBody1792561162311, .captcha__human`
- `#ddChallengeBody1792561162311, .captcha__robot__warning`
- `#ddChallengeBody1792561162311, .captcha__robot__contact_support`
