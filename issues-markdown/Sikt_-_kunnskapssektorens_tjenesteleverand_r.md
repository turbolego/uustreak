# WCAG Violations Report for Sikt - kunnskapssektorens tjenesteleverandør

**Timestamp:** 2026-11-18T13:13:01.014Z
**URL:** [https://www.sikt.no/](https://www.sikt.no/)
**Total Violations:** 3

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.header__search`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 3

#### Affected Elements:

- `.news-article:nth-child(1) > .news-article__link > .news-article__image > img[width="785"][height="528"][loading="lazy"]`
- `.news-article:nth-child(2) > .news-article__link > .news-article__image > img[width="785"][height="528"][loading="lazy"]`
- `.news-article:nth-child(3) > .news-article__link > .news-article__image > img[width="785"][height="528"][loading="lazy"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.nav-section[aria-label=""]:nth-child(1)`
