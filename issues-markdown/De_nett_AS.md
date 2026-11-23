# WCAG Violations Report for De nett AS

**Timestamp:** 2026-11-23T06:10:28.866Z
**URL:** [https://denett.no/](https://denett.no/)
**Total Violations:** 2

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 7

#### Affected Elements:

- `.bot-cta > a[target="_blank"]`
- `.arrow-link-external.bot-cta.home-entry > a`
- `.bot-cta.home-entry > a[href$="norgespris-2"]`
- `.article-card._s6._l4:nth-child(1) > .article-card-in`
- `.article-card._s6._l4:nth-child(2) > .article-card-in`
- `.article-card._s6._l4:nth-child(3) > .article-card-in`
- `._xl4.ql:nth-child(3) > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `div[data-cm-view="default"] > .cm__content:nth-child(1)`
- `div[data-cm-view="default"] > .cm__content:nth-child(2)`
