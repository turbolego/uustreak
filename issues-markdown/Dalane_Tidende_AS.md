# WCAG Violations Report for Dalane Tidende AS

**Timestamp:** 2025-12-14T00:50:49.850Z
**URL:** [https://www.dalane-tidende.no/](https://www.dalane-tidende.no/)
**Total Violations:** 6

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, iframe`
- `#eaframe`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.lp_header`
- `brick-carousel-v2[data-slides="11"] > .carousel[role="region"][aria-label="Innholdskarusell."]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, iframe, section[data-banner-id="bannercampaign_50814"] > a`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, iframe, section[data-banner-id="bannercampaign_51270"] > a`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, iframe, section[data-banner-id="bannercampaign_53266"] > a`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- `html`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, html`
- `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/toppbanner_0, iframe, html`
- `#eaframe, html`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `img[height="80"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `amedia-username`
- `#toppbanner-1`
