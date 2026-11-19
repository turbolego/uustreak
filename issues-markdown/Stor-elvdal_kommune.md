# WCAG Violations Report for Stor-elvdal kommune

**Timestamp:** 2026-11-19T05:56:58.399Z
**URL:** [https://www.stor-elvdal.kommune.no/](https://www.stor-elvdal.kommune.no/)
**Total Violations:** 7

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `.logo`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `iframe, html`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `header`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `a[data-id="234"]`
- `a[data-id="235"]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `iframe, html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 28

#### Affected Elements:

- `.ac-banner-field--search-box > .ac-banner-field-header`
- `.ac-banner-field--search-box > .ac-banner-field-footer`
- `.frontpage-top`
- `.frontpage-focus-field`
- `.webPartTittel`
- `.container > ul`
- `.webPartBunnLink`
- `iframe, div:nth-child(4) > div > div:nth-child(1) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-1.kIMNTn`
- `iframe, div:nth-child(1) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-2.dSiEdz > img[alt="Bildet er uten bildeforklaring"][loading="lazy"][width="400"]`
- `iframe, div:nth-child(2) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-1.kIMNTn`
- `iframe, div:nth-child(2) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-2.dSiEdz > img[alt="Bildet er uten bildeforklaring"][loading="lazy"][width="400"]`
- `iframe, div:nth-child(3) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-1.kIMNTn`
- `iframe, div:nth-child(3) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-2.dSiEdz > img[alt="Bildet er uten bildeforklaring"][loading="lazy"][width="400"]`
- `iframe, div:nth-child(4) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-1.kIMNTn`
- `iframe, div:nth-child(4) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-2.dSiEdz > img[loading="lazy"][width="400"][height="250"]`
- `iframe, div:nth-child(5) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-1.kIMNTn`
- `iframe, img[alt="konsertpromo"]`
- `iframe, .sc-ffbea1fe-0 > .sc-92d550d1-0.cvszcc:nth-child(1) > .sc-92d550d1-1.kIMNTn`
- `iframe, .sc-ffbea1fe-0 > .sc-92d550d1-0.cvszcc:nth-child(1) > .sc-92d550d1-2.dSiEdz > img[loading="lazy"][width="400"][height="250"]`
- `iframe, .sc-92d550d1-0.cvszcc:nth-child(2) > .sc-92d550d1-1.kIMNTn`
- `iframe, img[alt="Illustrasjon strikkekaffe"]`
- `iframe, .sc-92d550d1-0.cvszcc:nth-child(3) > .sc-92d550d1-1.kIMNTn`
- `iframe, img[alt="Illustrasjon datahjelp"]`
- `div[data-id="55"]`
- `div[data-id="56"]`
- `div[data-id="21"]`
- `div[data-id="20"]`
- `.container-floating-notifications`
