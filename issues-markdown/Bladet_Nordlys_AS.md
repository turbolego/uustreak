# WCAG Violations Report for Bladet Nordlys AS

**Timestamp:** 2026-03-08T00:54:54.950Z
**URL:** [https://www.nordlys.no/](https://www.nordlys.no/)
**Total Violations:** 6

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-6FRKW4UREUN1F424OO3I`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if`
- `#eaframe`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `brick-carousel-v2[data-slides="8"] > .carousel[role="region"][aria-label="Innholdskarusell."]`

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

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 18

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-VL1CCQZYX1TB7I1I630D`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-EX4E4SQ23JEINZ4NTR9D`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-AOCH9Z5EBW9MFCGR6AQ1`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-1YQIJ0F5CGUSD8FFMBUV`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-PZ3C33NDMVXSDWVNLGKK`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-IKC3V2DO6G37JZVY6Q7H`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-3T9JPPI5FH7CC1S9UL41`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-GAIQ5WUSEYFLXMNWVUAN`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-EEAE7RNWXFXP45PNQJTH`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-MECZQBIOHNI83R8VAYB6`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-Z3T8P9KBRYS5A0TVI6BH`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-35N2R1XR69TUI94JOQE7`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-FHLQEOSR08UL9M5TVQKB`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-CU1GX46SH09V92VWLNHQ`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-7D3VD6N9G4X26OTJT1NK`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-CB60NP2CS5SYTSNHSSRP`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-URYWV9LOZ8RY2WT4NUCV`
- `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #adn-sup-0\.8921649119560077, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-2KTM8495J2TIFWDCJMR8`
