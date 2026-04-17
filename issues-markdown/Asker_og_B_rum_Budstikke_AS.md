# WCAG Violations Report for Asker og Bærum Budstikke AS

**Timestamp:** 2026-04-17T03:23:18.169Z
**URL:** [https://www.budstikka.no/](https://www.budstikka.no/)
**Total Violations:** 5

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#eaframe`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `brick-carousel-v2[data-slides="20"] > .carousel[role="region"][aria-label="Innholdskarusell."]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, html`

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
- **Count:** 51

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #topElement > div:nth-child(1)`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #seperator`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #topElement > div:nth-child(3)`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10327469 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10327469`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10327469 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10326668 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10326668`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10326668 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10329323 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10329323`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10329323 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10322196 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10322196`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10322196 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10326613 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10326613`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10326613 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10328074 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10328074`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10328074 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10322198 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10322198`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10322198 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10328021 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10328021`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10328021 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10330573 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10330573`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10330573 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10326689 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10326689`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10326689 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10330565 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10330565`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10330565 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10329319 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10329319`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10329319 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10330058 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10330058`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10330058 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10330569 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10330569`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10330569 > .info`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10329321 > .shout-image[data-tag="shoutimage"][aria-label="Bilde av eiendom"]`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #brokerInfo10329321`
- `#google_ads_iframe_\/56257416\/www\.budstikka\.no\/takeover_0, #container_10329321 > .info`
- `.takeover-close`
- `amedia-username`
- `#toppbanner-1`
