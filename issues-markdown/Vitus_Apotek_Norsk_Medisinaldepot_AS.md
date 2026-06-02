# WCAG Violations Report for Vitus Apotek Norsk Medisinaldepot AS

**Timestamp:** 2026-06-02T03:57:16.647Z
**URL:** [https://www.vitusapotek.no/](https://www.vitusapotek.no/)
**Total Violations:** 3

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 7

#### Affected Elements:

- `div[aria-label="30% på utvalgt dyrepleie"]`
- `div[aria-label="50% på utvalgt  hudpleie"]`
- `div[aria-label="Ta en titt på vårens nyheter!"]`
- `div[aria-label="50% på CeraVe solpleie"]`
- `.campaign-banner--centered.campaign-banner.banner:nth-child(1) > .campaign-banner__content-wrapper.banner__content-wrapper > .campaign-banner__text.banner__text > .campaign-banner__cms-content-wrapper`
- `.campaign-banner--centered.campaign-banner.banner:nth-child(2) > .campaign-banner__content-wrapper.banner__content-wrapper > .campaign-banner__text.banner__text > .campaign-banner__cms-content-wrapper`
- `.campaign-banner--centered.campaign-banner.banner:nth-child(3) > .campaign-banner__content-wrapper.banner__content-wrapper > .campaign-banner__text.banner__text > .campaign-banner__cms-content-wrapper`

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
