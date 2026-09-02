# WCAG Violations Report for Bergensavisen AS

**Timestamp:** 2026-09-02T06:59:08.320Z
**URL:** [https://www.ba.no/](https://www.ba.no/)
**Total Violations:** 7

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #cbb`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, #element-30 > button`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `a[aria-label="Ledig stilling: Jobb i Årdal"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `a[aria-label="Ledig stilling: Daglig leder"] > .jobad-wrapper > .ad-text > .ad-text_location`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if`
- `#eaframe`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `img[height="80"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1`

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 5

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, #c-26`
- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, #c-28 > .sc-ipUnzB.bgpEeK[role="img"]`
- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, #c-32 > .sc-ipUnzB.bgpEeK[role="img"]`
- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, #c-33 > .sc-ipUnzB.bgpEeK[role="img"]`
- `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, #c-34 > .sc-ipUnzB.bgpEeK[role="img"]`
