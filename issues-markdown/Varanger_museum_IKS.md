# WCAG Violations Report for Varanger museum IKS

**Timestamp:** 2026-11-23T06:47:18.634Z
**URL:** [https://www.varangermuseum.no/](https://www.varangermuseum.no/)
**Total Violations:** 5

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 3

#### Affected Elements:

- `img[alt="Besøkssteder"]`
- `img[alt="Utstillinger"]`
- `.column-3[itemscope="itemscope"][itemtype="http://schema.org/Article"] > .idium-linked-post > .attachment-shortcuts.size-shortcuts.wp-post-image`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.accessibility-top`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `.btn-next`
- `.btn-prev`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 12

#### Affected Elements:

- `#slider > .idium-section-header.screenreader-container`
- `a[href$="#skip-slider"]`
- `.cycle-slide-active`
- `#B4CE3C06-FFFF-4D5B-8049-2E612D8167B4`
- `#\32 D09D809-0338-4F6F-83D4-C05EA96E5001`
- `.gm-style > div:nth-child(14)`
- `.gmnoprint:nth-child(2) > .gm-style-cc[draggable="false"] > div:nth-child(2) > span`
- `.gm-style-cc.gmnoprint[draggable="false"]`
- `#shortcut`
- `#event`
- `#news`
- `#idium-cookies-notification-show`
