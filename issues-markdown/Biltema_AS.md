# WCAG Violations Report for Biltema AS

**Timestamp:** 2026-01-20T00:33:55.601Z
**URL:** [https://www.biltema.no/#](https://www.biltema.no/#)
**Total Violations:** 6

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `a[href$="multix18v/"] > .lazy__container > .lazy > .block__img--teaser`
- `.content__grid--3.content__grid--3-2.align--center:nth-child(2) > a > .lazy__container > .lazy[data-alt=""] > .block__img--teaser`
- `.content__grid--3.content__grid--3-2.align--center:nth-child(3) > a > .lazy__container > .lazy[data-alt=""] > .block__img--teaser`
- `.teaser__item:nth-child(1) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`
- `.teaser__item:nth-child(2) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`
- `.teaser__item:nth-child(3) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `main[role="main"]`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#react__maincontent`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.nav__features`
- `#react__maincontent`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `.content__grid--3.content__grid--3-2.align--center:nth-child(1) > a[href$="multix18v/"]`
- `.content__grid--3.content__grid--3-2.align--center:nth-child(2) > a`
- `.content__grid--3.content__grid--3-2.align--center:nth-child(3) > a`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- `.header__info__item.link--black:nth-child(1) > .font__myriad--semibold`
- `.header__info__item.link--black:nth-child(1) > span:nth-child(3)`
- `.header__info__item.link--black:nth-child(2) > .font__myriad--semibold`
- `.header__info__item.link--black:nth-child(2) > span:nth-child(3)`
- `.header__info__item.link--black:nth-child(3) > .font__myriad--semibold`
- `.header__info__item.link--black:nth-child(3) > span:nth-child(3)`
- `.header__info__item.link--black:nth-child(4) > .font__myriad--semibold`
- `.header__info__item.link--black:nth-child(4) > span:nth-child(3)`
