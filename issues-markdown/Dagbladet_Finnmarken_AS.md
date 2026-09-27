# WCAG Violations Report for Dagbladet Finnmarken AS

**Timestamp:** 2026-09-27T04:23:11.843Z
**URL:** [https://www.ifinnmark.no/](https://www.ifinnmark.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `a[aria-label="Ledig stilling: Daglig leder"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
- `a[aria-label="Ledig stilling: Leder prosjekt"] > .jobad-wrapper > .ad-text > .ad-text_location`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe`
- `#eaframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 8

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, .img`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, .tx1`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, .tx2`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, .tx3`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, .cta`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, .loopImg`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, .logo`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, iframe, .disc`

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
