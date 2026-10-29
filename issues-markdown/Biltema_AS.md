# WCAG Violations Report for Biltema AS

**Timestamp:** 2026-10-29T06:57:01.076Z
**URL:** [https://www.biltema.no/](https://www.biltema.no/)
**Total Violations:** 12

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `#CybotCookiebotDialog`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.OEYB7GsXVFgbeSLN0Yrb1Q\=\=`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.block__editorial > .block--inner > .maxwidth--66.center.block__content > .block__title`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `a[href$="multix18v/"] > .lazy__container > .lazy > .block__img--teaser`
- `.content__grid--3.content__grid--3-2.align--center:nth-child(2) > a > .lazy__container > .lazy[data-alt=""] > .block__img--teaser`
- `.content__grid--3.content__grid--3-2.align--center:nth-child(3) > a > .lazy__container > .lazy[data-alt=""] > .block__img--teaser`
- `.teaser__item:nth-child(1) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`
- `.teaser__item:nth-child(2) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`
- `.teaser__item:nth-child(3) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 20

#### Affected Elements:

- `#headerMyBiltemaButton`
- `li:nth-child(11) > a[href$="kundeservice/"]`
- `.block__grid.block:nth-child(4) > .block--100.content > .content__grid--reverse > .content__block.content__block--grey.content__grid--2 > .content__block--info.align--center > .button__m.button__transparent--black.button`
- `.block__grid.block:nth-child(6) > .block--100.content > .content__grid > .content__block.content__block--grey.content__grid--2 > .content__block--info.align--center > .button__m.button__transparent--black[aria-label="Gå til: Digitale kundeaviser"]`
- `.content__grid--reverse > .content__block.content__block--grey.content__grid--2 > .content__block--info.align--center > .button__m.button__transparent--black[aria-label="Gå til: Digitale kundeaviser"]`
- `a[aria-label="Gå til: Reflekser"]`
- `a[aria-label="Gå til: Bil - MC"]`
- `.block__grid.block:nth-child(14) > .block--100.content > .content__grid > .content__block.content__block--grey.content__grid--2 > .content__block--info.align--center > .button__m.button__transparent--black[aria-label="Gå til: Digitale kundeaviser"]`
- `a[aria-label="Gå til: Presenninger"]`
- `a[aria-label="Gå til: Takrennesystem"]`
- `.button__m.button__transparent--black[href$="kommende-produktnyheter/"]`
- `a[aria-label="Les mer om vår konsept"]`
- `.inner > .footer__links > li:nth-child(6) > a`
- `a[href$="bruksanvisninger/"]`
- `li:nth-child(1) > a[href$="jobbe-pa-biltema/"]`
- `a[aria-label="Se Biltemas siste kundeaviser"]`
- `.col.s__show--on-tablet--large--up:nth-child(2) > .footer__links > li:nth-child(7) > a`
- `a[href$="press/"]`
- `.col.s__show--on-tablet--large--up:nth-child(2) > .footer__links > li:nth-child(9) > a`
- `li:nth-child(12) > a[href$="nyheter/"]`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `main[role="main"]`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#react__maincontent`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#react__maincontent`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `.content__grid--3.content__grid--3-2.align--center:nth-child(1) > a[href$="multix18v/"]`
- `.content__grid--3.content__grid--3-2.align--center:nth-child(2) > a`
- `.content__grid--3.content__grid--3-2.align--center:nth-child(3) > a`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- `.editorial__grid > li:nth-child(1)`
- `.editorial__grid > li:nth-child(2)`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- `.CybotCookiebotDialogBodyLevelButtonWrapper:nth-child(2) > .CybotCookiebotDialogBodyLevelButtonSliderWrapper[role="switch"]`
- `.CybotCookiebotDialogBodyLevelButtonWrapper:nth-child(3) > .CybotCookiebotDialogBodyLevelButtonSliderWrapper[role="switch"]`
- `.CybotCookiebotDialogBodyLevelButtonWrapper:nth-child(4) > .CybotCookiebotDialogBodyLevelButtonSliderWrapper[role="switch"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
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
