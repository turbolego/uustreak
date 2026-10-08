# WCAG Violations Report for Dagbladet AS

**Timestamp:** 2026-10-08T10:19:29.110Z
**URL:** [https://www.dagbladet.no/](https://www.dagbladet.no/)
**Total Violations:** 7

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #cbb`
  - **HTML:** `<div id="cbb" class="cbb" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.text-red > .kicker-content`
  - **HTML:** `<div class="kicker-content">Dagbladet i Kyiv:</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.85 (foreground color: #d60000, background color: #000000, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #impression`
  - **HTML:** `<img id="impression" border="0" width="1" height="1">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `._topnav_88ip5_45`
  - **HTML:** `<nav class="_topnav_88ip5_45">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, .GoogleActiveViewElement > div > a`
  - **HTML:** `<a href="https://adclick.g.do..." target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-no" data-ads-defer="true" data-ads="true">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

- **Target:** `#horseshoe-ad-background-top, html`
  - **HTML:** `<html><head></head><body style="border: 0px; margin: 0px;"><img src="https://tpc.googlesyndication.com/simgad/13873212782021703668?" width="100%" height="100%" alt="Top ad background" style="object-fit: none; object-position: center top;">…`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, html`
  - **HTML:** `<html>`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

- **Target:** `#horseshoe-ad-background-left, html`
  - **HTML:** `<html><head></head><body style="border: 0px; margin: 0px;"><img src="https://tpc.googlesyndication.com/simgad/13873212782021703668?" width="100%" height="100%" alt="Left ad background" style="object-fit: none; object-position: left top;"><…`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

- **Target:** `#horseshoe-ad-background-right, html`
  - **HTML:** `<html><head></head><body style="border: 0px; margin: 0px;"><img src="https://tpc.googlesyndication.com/simgad/13873212782021703668?" width="100%" height="100%" alt="Right ad background" style="object-fit: none; object-position: right top;"…`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#am-branding > p`
  - **HTML:** `<p> Dagbladet er en del av Aller Media. Aller Media er ansvarlig for dine data på denne nettsiden. &nbsp;<a href="https://personvern.aller.no/personvern">Les mer</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

