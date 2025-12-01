# WCAG Violations Report for Jobzone Norge AS

**Timestamp:** 2025-12-01T00:51:07.023Z
**URL:** [https://jobzone.no/](https://jobzone.no/)
**Total Violations:** 8

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.search-menu-mobile > section > .container > .is-centered.columns > .is-narrow.column > .form[action="/sok/"][method="get"] > .form-group > .is-hidden-tablet[type="submit"]`
- `.search-menu > section > .container > .is-centered.columns > .is-narrow.column > .form[action="/sok/"][method="get"] > .form-group > .is-hidden-tablet[type="submit"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `#CybotCookiebotDialogBodyEdgeMoreDetailsLink`
- `#CybotCookiebotDialogBodyButtonAccept`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.main-menu > section > .main-menu-wrapper > .top-menu:nth-child(1) > .jobseeker.is-marginless.is-multiline > h5`
- `.information > section > .main-menu-wrapper > .top-menu:nth-child(1) > .jobseeker.is-marginless.is-multiline > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 64

#### Affected Elements:

- `img[width="64"]`
- `.nav-dropdown-wrapper > .nav-text > .nav-language-arrow[src$="arrow-down.svg"]`
- `img[src$="no.svg"]`
- `.dropdown-wrapper > .nav-text[href$="en/"] > .nav-wrapper-item > .languageFlag[src$="en.svg"]`
- `.dropdown-wrapper > .nav-text[href$="pl/"] > .nav-wrapper-item > .languageFlag[src$="pl.svg"]`
- `.search-menu-mobile > section > .container > .is-centered.columns > .is-narrow.column > .form[action="/sok/"][method="get"] > .form-group > .is-hidden-tablet[type="submit"] > img`
- `.mobile-language > .nav-text > .nav-language-arrow[src$="arrow-down.svg"]`
- `img[src$="no-circle.png"]`
- `.centered-wrapper > div > .nav-text[href$="en/"] > .nav-wrapper-item > .languageFlag[src$="en.svg"]`
- `.centered-wrapper > div > .nav-text[href$="pl/"] > .nav-wrapper-item > .languageFlag[src$="pl.svg"]`
- `img[src$="House-dark.svg"]`
- `.is-6.is-12-mobile.column:nth-child(2) > img[src$="Article-dark.svg"][type="image/svg+xml"]`
- `.main-menu > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(3) > img[type="image/svg+xml"]`
- `.main-menu > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(4) > img[type="image/svg+xml"]`
- `.main-menu > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(5) > img[type="image/svg+xml"]`
- `img[src$="People-dark.svg"]`
- `.is-6.is-12-mobile.column:nth-child(7) > img[src$="Article-dark.svg"][type="image/svg+xml"]`
- `.main-menu > section > .main-menu-wrapper > .about-us.top-menu.is-marginless > .is-6.is-12-mobile.column:nth-child(8) > img[type="image/svg+xml"]`
- `.search-menu > section > .container > .is-centered.columns > .is-narrow.column > .form[action="/sok/"][method="get"] > .form-group > .is-hidden-tablet[type="submit"] > img`
- `.candidate-image > div > div > .container-fluid.frontpage > .banner-image > .image-container > img`
- `.company-image > div > div > .container-fluid.frontpage > .banner-image > .image-container > img`
- `a[href$="ledige-stillinger/"] > .is-mobile.columns > .page-link-icon.is-narrow.column > img`
- `a[href$="ledige-stillinger/"] > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `a[href$="registrering/"] > .is-mobile.columns > .page-link-icon.is-narrow.column > img`
- `a[href$="registrering/"] > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `.page-link.colums:nth-child(3) > a[href$="avdelinger/"] > .is-mobile.columns > .page-link-icon.is-narrow.column > img`
- `.page-link.colums:nth-child(3) > a[href$="avdelinger/"] > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `a[href$="innleie-av-arbeidskraft/"] > .is-mobile.columns > .page-link-icon.is-narrow.column > img`
- `a[href$="innleie-av-arbeidskraft/"] > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `.page-link-icon.is-narrow.column > img[src$="user-search.svg"]`
- `.company-container > div > div:nth-child(1) > .block-wrapper.is-tablet.columns > .is-half-tablet.column:nth-child(1) > .job-search-helper > .page-link.colums:nth-child(2) > a > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `img[src$="email.svg"]`
- `a[href$="kontakt-oss/"] > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `img[src$="dream-house.svg"]`
- `.page-link.colums:nth-child(4) > a[href$="avdelinger/"] > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `img[src$="tasks.svg"]`
- `a[href$="fagomrader/"] > .is-mobile.columns > .page-link-arrow.is-narrow.column > .rotate[src$="arrow-down.svg"]`
- `.oval > img[src$="user-search.svg"]`
- `.is-4.column:nth-child(2) > .oval > img`
- `img[src$="medal-5.svg"]`
- `.is-6-tablet.is-one-third-desktop.is-12-mobile:nth-child(2) > .with-icon.black.link > img`
- `a[href$="fagomrader/#health"] > img`
- `a[href$="fagomrader/#logistics"] > img`
- `a[href$="fagomrader/#finance"] > img`
- `a[href$="fagomrader/#restaurant"] > img`
- `a[href$="fagomrader/#economy"] > img`
- `a[href$="fagomrader/#school"] > img`
- `a[href$="fagomrader/#industry"] > img`
- `a[href$="fagomrader/#sale"] > img`
- `.is-6-tablet.is-one-third-desktop.is-12-mobile:nth-child(11) > .with-icon.black.link > img`
- `a[href$="fagomrader/#it"] > img`
- `.is-6-tablet.is-one-third-desktop.is-12-mobile:nth-child(13) > .with-icon.black.link > img`
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

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 4

#### Affected Elements:

- `.block-contact-us-name`
- `.block-contact-us-company`
- `.block-contact-us-email`
- `.block-contact-us-phone`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `a[href="/"]`
- `.left-arrow-large`
- `a[alt="Jobzone AS facebook page"]`
- `a[alt="Jobzone AS linkedin"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 22

#### Affected Elements:

- `.search-menu-mobile > section > .container > .is-centered.columns > .is-narrow.column > .form[action="/sok/"][method="get"] > .form-group > label[for="search"]`
- `.search-menu-mobile > section > .container > .is-centered.columns > .is-narrow.column > .form[action="/sok/"][method="get"] > .form-group > .search-query[name="q"][placeholder="Skriv her..."]`
- `.mobile-language`
- `.language-wrapper`
- `.main-menu > section`
- `.search-menu > section > .container > .is-centered.columns > .is-narrow.column > .form[action="/sok/"][method="get"] > .form-group > label[for="search"]`
- `.search-menu > section > .container > .is-centered.columns > .is-narrow.column > .form[action="/sok/"][method="get"] > .form-group > .search-query[name="q"][placeholder="Skriv her..."]`
- `.candidate-image`
- `.company-image`
- `.tabs`
- `.candidate-container`
- `.company-container > div > div:nth-child(1)`
- `.company-container > div > div:nth-child(2)`
- `.company-container > div > div:nth-child(3)`
- `.company-container > div > div:nth-child(4)`
- `.hide`
- `.show > .is-centered.columns`
- `#block-contact-us-form > .form-group:nth-child(1)`
- `.form-group:nth-child(2)`
- `.form-group:nth-child(3)`
- `.form-group:nth-child(4)`
- `#block-contact-us-form > .columns`

### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `select`
