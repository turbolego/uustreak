# WCAG Violations Report for Dagbladet Finnmarken AS

**Timestamp:** 2026-03-08T00:59:20.824Z
**URL:** [https://www.ifinnmark.no/](https://www.ifinnmark.no/)
**Total Violations:** 6

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-IY9W9B4FJO58JGPZH0GF`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if`
- `#eaframe`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `brick-carousel-v2[data-slides="10"] > .carousel[role="region"][aria-label="Innholdskarusell."]`

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

- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-41B29NKL41JMRL05VOB4`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-AC8OIUPWXLE05RYU5RS0`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-LZF7HJAA6PJVRFUADS7K`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-N73UIE4AW54MQ08BNWBL`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-US1MHUL2QAMN9VYWKHSK`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-HB8TMHLO3HYD9ACOH9PK`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-1CUENQP8V3YGEB4KOVE9`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-9GT8VC7IKO6277M4SFFW`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-0F3WKMKS0WPH2WO06AIE`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-PC0SIP4YKIEDCQ1557ZY`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-4E1HKEBIFDU89CDVTWKM`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-XD2R5AUK1RBNHY4EX6UC`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-1NS6JEG7IL4OWTRALYF2`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-NV3GOIXPUAX1FAFT5F8J`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-K3HVG3FWF39OE8QJUWU6`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-R0UZ7N0ER1PUF7SJLR04`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-1B2V34KDESMLCSLQY1ID`
- `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #adn-sup-0\.464617365978127, iframe, #\32 00_287_express_html_inpage_0\.if, #hype-obj-WYLPQM8JP3XWFXCBKXC2`
