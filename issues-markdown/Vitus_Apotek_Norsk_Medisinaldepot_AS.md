# WCAG Violations Report for Vitus Apotek Norsk Medisinaldepot AS

**Timestamp:** 2026-05-03T01:12:38.449Z
**URL:** [https://www.vitusapotek.no/](https://www.vitusapotek.no/)
**Total Violations:** 4

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.cms-recomendations:nth-child(11) > section > div > .carousel[aria-roledescription="carousel"][role="region"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- `.banner__cover-link[href$="nyheter"]`
- `.campaign-banner--left.campaign-banner.banner:nth-child(2) > .campaign-banner__content-wrapper.banner__content-wrapper > .banner__cover-link`
- `.campaign-banner--centered.campaign-banner.banner:nth-child(1) > .campaign-banner__content-wrapper.banner__content-wrapper > .banner__cover-link`
- `.campaign-banner--centered.campaign-banner.banner:nth-child(2) > .campaign-banner__content-wrapper.banner__content-wrapper > .banner__cover-link`
- `.campaign-banner--centered.campaign-banner.banner:nth-child(3) > .campaign-banner__content-wrapper.banner__content-wrapper > .banner__cover-link`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.nav-desktop__list`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `.header__skip-link`
- `.footer-banner > .banner__image-wrapper`
- `.footer-banner > .banner__content-wrapper`
