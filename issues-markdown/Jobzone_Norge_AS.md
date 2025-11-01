# WCAG Violations Report for Jobzone Norge AS

**Timestamp:** 2025-11-01T00:41:01.502Z
**URL:** [https://jobzone.no/](https://jobzone.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 28

#### Affected Elements:

- `#CybotCookiebotDialogBodyEdgeMoreDetailsLink`
- `#CybotCookiebotDialogBodyButtonAccept`
- `.nav-dropdown-wrapper > .nav-text > span`
- `.nav-wrapper-item:nth-child(3) > .main-menu-button.nav-text`
- `.nav-wrapper-item:nth-child(5) > div[data-react-component="LoginWizard"] > .login-wizard > .is-hidden-mobile > .login-wizard-nav-text.nav-text`
- `.company-tab`
- `.candidate-container > div > div:nth-child(1) > .block-wrapper.is-tablet.columns > .is-half-tablet.column:nth-child(2) > .box.is-mobile > .left-arrow.link.rusty-red > .rusty-red`
- `.buttons-href-button[href="/ledige-stillinger/72180"]`
- `.buttons-href-button[href="/ledige-stillinger/72176"]`
- `.buttons-href-button[href="/ledige-stillinger/72177"]`
- `.buttons-href-button[href="/ledige-stillinger/71901"]`
- `.button-component`
- `.information > section > .main-menu-wrapper > .top-menu:nth-child(1) > .jobseeker.is-marginless.is-multiline > h5`
- `.information > section > .main-menu-wrapper > .top-menu:nth-child(1) > .company.is-marginless.colums > h5`
- `.information > section > .main-menu-wrapper > .about-us-header.about-us.top-menu > .top-menu-column:nth-child(1) > h5`
- `.information > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(1) > a[href$="vare-lokalkontor/"]`
- `.information > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(2) > a[href$="jobbsnakk/"]`
- `.information > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(3) > a[href$="raushetsaksjonen/"]`
- `.information > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(4) > a[href$="samfunnsansvar/"]`
- `.information > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(5) > a[href$="organisasjonen/"]`
- `.information > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(6) > a[href$="jobzone-konsernet/"]`
- `.information > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(7) > a[href$="sikkerhet-og-phishing/"]`
- `.information > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(8) > a[href$="varslingskanal/"]`
- `a[href="tel:21 52 64 00"]`
- `.map-url > a[target="_blank"]`
- `a[href$="sitemap.xml"]`
- `.is-narrow.column > a[href$="informasjonskapsler/"]`
- `a[href$="betingelser-og-vilkar/"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.information > section > .main-menu-wrapper > .top-menu:nth-child(1) > .jobseeker.is-marginless.is-multiline > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 27

#### Affected Elements:

- `img[width="64"]`
- `.nav-dropdown-wrapper > .nav-text > .nav-language-arrow[src$="arrow-down.svg"]`
- `img[src$="no.svg"]`
- `.nav-wrapper-item:nth-child(5) > div[data-react-component="LoginWizard"] > .login-wizard > .is-hidden-mobile > .login-wizard-nav-text.nav-text > img[src$="User.svg"]`
- `.candidate-image > div > div > .container-fluid.frontpage > .banner-image > .image-container > img`
- `a[href$="ledige-stillinger/"] > .is-mobile.columns > .page-link-icon.is-narrow.column > img`
- `a[href$="ledige-stillinger/"] > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `a[href$="registrering/"] > .is-mobile.columns > .page-link-icon.is-narrow.column > img`
- `a[href$="registrering/"] > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `.page-link.colums:nth-child(3) > a[href$="avdelinger/"] > .is-mobile.columns > .page-link-icon.is-narrow.column > img`
- `.page-link.colums:nth-child(3) > a[href$="avdelinger/"] > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `div[data-position-id="72180"] > img`
- `div[data-position-id="72176"] > img`
- `div[data-position-id="72177"] > img`
- `div[data-position-id="71901"] > img`
- `img[src$="House.svg"]`
- `.is-6.is-12-mobile.column:nth-child(2) > img[src$="Article.svg"][type="image/svg+xml"]`
- `.information > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(3) > img[type="image/svg+xml"]`
- `img[src$="Lighthouse.svg"]`
- `img[src$="Bulbidea.svg"]`
- `img[src$="People.svg"]`
- `.is-6.is-12-mobile.column:nth-child(7) > img[src$="Article.svg"][type="image/svg+xml"]`
- `img[src$="Newspaper.svg"]`
- `img[src$="Facebook.svg"]`
- `img[src$="LinkedIn.svg"]`
- `img[src$="smartphone.svg"]`
- `img[src$="placeholder.svg"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 4

#### Affected Elements:

- `a[href="/"]`
- `.left-arrow-large`
- `a[alt="Jobzone AS facebook page"]`
- `a[alt="Jobzone AS linkedin"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 17

#### Affected Elements:

- `.candidate-image`
- `.tabs`
- `.candidate-container > div > div:nth-child(1)`
- `.positions-block-header`
- `.position-list-card-wrapper:nth-child(1) > .position-card.card > .position-card-top > .position-card-top-content`
- `.position-list-card-wrapper:nth-child(1) > .position-card.card > .position-card-top > div:nth-child(2) > .position-card-top-favor`
- `.position-list-card-wrapper:nth-child(1) > .position-card.card > .position-card-bot`
- `.position-list-card-wrapper:nth-child(2) > .position-card.card > .position-card-top > .position-card-top-content`
- `.position-list-card-wrapper:nth-child(2) > .position-card.card > .position-card-top > div:nth-child(2) > .position-card-top-favor`
- `.position-list-card-wrapper:nth-child(2) > .position-card.card > .position-card-bot`
- `.position-list-card-wrapper:nth-child(3) > .position-card.card > .position-card-top > .position-card-top-content`
- `.position-list-card-wrapper:nth-child(3) > .position-card.card > .position-card-top > div:nth-child(2) > .position-card-top-favor`
- `.position-list-card-wrapper:nth-child(3) > .position-card.card > .position-card-bot`
- `.position-list-card-wrapper:nth-child(4) > .position-card.card > .position-card-top > .position-card-top-content`
- `.position-list-card-wrapper:nth-child(4) > .position-card.card > .position-card-top > div:nth-child(2) > .position-card-top-favor`
- `.position-list-card-wrapper:nth-child(4) > .position-card.card > .position-card-bot`
- `.candidate-container > div > div:nth-child(3)`
