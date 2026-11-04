# WCAG Violations Report for Norsk Rikskringkasting AS

**Timestamp:** 2026-11-04T05:27:15.289Z
**URL:** [https://www.nrk.no/](https://www.nrk.no/)
**Total Violations:** 2

## Violation Details

### ARIA attributes must conform to valid names

- **Impact:** critical
- **Description:** Ensure attributes that begin with aria- are valid ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `div[data-testid="kur-guest-id-1352715"] > dh-usa-mellomvalg-widgets-v1-0-33-front > ._container_11pmz_2._senatet_11pmz_83.dark-container > ._title_11pmz_15 > svg[width="50"][height="30"][aria-role="img"]`
- `div[data-testid="kur-guest-id-1352564"] > dh-usa-mellomvalg-widgets-v1-0-33-front > ._container_11pmz_2._senatet_11pmz_83.dark-container > ._title_11pmz_15 > svg[width="50"][height="30"][aria-role="img"]`

### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `div[data-testid="kur-guest-id-1352715"] > dh-usa-mellomvalg-widgets-v1-0-33-front > ._container_11pmz_2._senatet_11pmz_83.dark-container > ._graf_11pmz_65 > ._container_105n3_1[data-del-av-kongressen="senatet"][data-modus="avgjorte"] > ._graf_105n3_77 > div[role="img"]`
- `div[data-testid="kur-guest-id-1352564"] > dh-usa-mellomvalg-widgets-v1-0-33-front > ._container_11pmz_2._senatet_11pmz_83.dark-container > ._graf_11pmz_65 > ._container_105n3_1[data-del-av-kongressen="senatet"][data-modus="avgjorte"] > ._graf_105n3_77 > div[role="img"]`
