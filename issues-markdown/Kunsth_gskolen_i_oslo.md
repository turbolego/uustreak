# WCAG Violations Report for Kunsthøgskolen i oslo

**Timestamp:** 2026-11-23T06:24:07.687Z
**URL:** [https://khio.no/](https://khio.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.two.col:nth-child(1) > h6`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 21

#### Affected Elements:

- `.kunst-og-handverk.kunst-og-handverk-page[data-index="0"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > .loaded[height="682"][width="1024"]`
- `img[title="Masterstudium i design"]`
- `img[title="Bachelorstudium i billedkunst"]`
- `.design.design-page[data-index="3"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > .loaded[height="682"][width="1024"]`
- `img[title="Masterstudium i teater"]`
- `.dans-page.dans[data-index="5"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
- `img[title="Masterstudium i opera"]`
- `img[title="Bachelorstudium i regi"]`
- `.kunst-og-handverk.kunst-og-handverk-page[data-index="8"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
- `img[title="Årsstudium i opera"]`
- `img[title="Bachelorstudium i jazzdans"]`
- `img[title="Masterstudium i dans"]`
- `.teaterhogskolen-page.teaterhogskolen[data-index="12"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
- `.design.design-page[data-index="13"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
- `.teaterhogskolen-page.teaterhogskolen[data-index="14"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
- `img[title="Masterstudium i billedkunst"]`
- `.kunst-og-handverk.kunst-og-handverk-page[data-index="16"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
- `img[title="Bachelorstudium i samtidsdans"]`
- `img[title="Masterstudium i koreografi"]`
- `.design.design-page[data-index="19"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > .loaded[height="682"][width="1024"]`
- `.operahogskolen.dans[data-index="20"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `nav[data-sticky-mini-home-button-target="logo"]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`
