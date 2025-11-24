# WCAG Violations Report for BN Bank ASA

**Timestamp:** 2025-11-24T00:38:51.927Z
**URL:** [https://www.bnbank.no/#](https://www.bnbank.no/#)
**Total Violations:** 5

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.MuiList-root`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 8

#### Affected Elements:

- `#heading-hvordan-bytter-jeg-til-bn-bank`
- `#heading-er-virkelig-bankkortet-helt-gebyrfritt-i-bruk`
- `#heading-hvor-mye-kan-jeg-lane-til-bolig`
- `#heading-hvor-mye-egenkapital-ma-jeg-ha-for-a-kjope-bo`
- `#heading-hvordan-laste-ned-mobilbank`
- `#heading-hvordan-aktivere-mobilbanken`
- `#heading-hvordan-fa-bankid-pa-mobil`
- `#heading-finn-ditt-iban-nummer`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 5

#### Affected Elements:

- `.navigation__direct-login--desktop > .navigation__login-button.btn.btn-secondary > .navigation__login-button--desktop[aria-hidden="True"][alt=""]`
- `img[src$="medal.svg"]`
- `#hvor-mye-kan-du-låne-til-drømmeboligen\? > .content-card--image-above.content-card__content-wrapper > .content-card__icon > img[aria-hidden="True"][alt=""]`
- `#hvor-mye-må-du-spare-for-å-nå-målet-ditt\? > .content-card--image-above.content-card__content-wrapper > .content-card__icon > img[aria-hidden="True"][alt=""]`
- `#hva-vil-en-renteendring-bety-for-deg\? > .content-card--image-above.content-card__content-wrapper > .content-card__icon > img[aria-hidden="True"][alt=""]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- `#cookie-banner0 > .c-head`
- `.c-body`
- `.navigation__upper`
- `.navigation__logo-container`
- `.navigation__direct-login--desktop`

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `a[aria-label="Lån"] > .link-icon__content > .link-icon__left > .link-icon__icon[role="img"][aria-label=""]`
- `a[aria-label="Sparing"] > .link-icon__content > .link-icon__left > .link-icon__icon[role="img"][aria-label=""]`
- `a[aria-label="Kort"] > .link-icon__content > .link-icon__left > .link-icon__icon[role="img"][aria-label=""]`
- `a[aria-label="Bytte bank"] > .link-icon__content > .link-icon__left > .link-icon__icon[role="img"][aria-label=""]`
- `a[aria-label="Kalkulatorer"] > .link-icon__content > .link-icon__left > .link-icon__icon[role="img"][aria-label=""]`
- `a[aria-label="Kundefavoritt"] > .link-icon__content > .link-icon__left > .link-icon__icon[role="img"][aria-label=""]`
