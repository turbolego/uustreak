# WCAG Violations Report for Mediehuset Nettavisen AS

**Timestamp:** 2026-03-30T03:15:45.894Z
**URL:** [https://www.nettavisen.no/](https://www.nettavisen.no/)
**Total Violations:** 8

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #adn-sup-0\.2964660519248662, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-S5C834O846HIA2FOOS4X`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > h1`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #adn-sup-0\.2964660519248662`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #adn-sup-0\.2964660519248662, iframe, #\32 00_287_express_html_inpage_0\.if`

### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.miniheader`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#page-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#page-header`
- `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > .nav-wrap > nav`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1`

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #adn-sup-0\.2964660519248662, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-591U35TN7MNULNUIXER5`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #adn-sup-0\.2964660519248662, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-PDTUS8Y5OU5MH1OG4H49`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #adn-sup-0\.2964660519248662, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-D0FHVW64Y7E52553NSQ4`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #adn-sup-0\.2964660519248662, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-EFSLCSVUHQ6TIVKIN7TS`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #adn-sup-0\.2964660519248662, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-U5PE8ELJGMW970YI8Y88`
- `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #adn-sup-0\.2964660519248662, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-8JK9YRLC06Z1Y3LPU07B`
