# WCAG Violations Report for Capgemini Norge

**Timestamp:** 2025-10-21T00:31:01.536Z
**URL:** [https://www.capgemini.com/no-no/#](https://www.capgemini.com/no-no/#)
**Total Violations:** 5

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.col-lg-8.box-inner.col-md-12 > .titlewithLink[data-maxlength="144"]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 5

#### Affected Elements:

- `#menu-location-menu-1-large > .lang-title:nth-child(1) > .sub-menu > .active > a[href$="capgemini.com/"] > span > img[alt="Global | EN"][loading="lazy"]`
- `img[alt="LinkedIn"]`
- `img[alt="Instagram"]`
- `img[alt="facebook icon"]`
- `img[alt="Youtube"]`

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1
- **Count:** 1

#### Affected Elements:

- `.titlewithLink[data-maxlength="144"] > a:nth-child(2)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `#truste-consent-text`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3
- **Count:** 1

#### Affected Elements:

- `.header_lang_menu > .header-lang-inner > .lang-list`
