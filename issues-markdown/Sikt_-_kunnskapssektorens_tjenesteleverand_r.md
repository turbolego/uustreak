# WCAG Violations Report for Sikt - kunnskapssektorens tjenesteleverandør

**Timestamp:** 2026-11-22T05:56:08.755Z
**URL:** [https://www.sikt.no/](https://www.sikt.no/)
**Total Violations:** 3

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.header__search`
  - **HTML:** `<button type="button" class="header__search" aria-controls="search">`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="search"


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `.news-article:nth-child(1) > .news-article__link > .news-article__image > img[width="785"][height="528"][loading="lazy"]`
  - **HTML:** `<img alt="FS 30 år: Ett system..." loading="lazy" width="785" height="528" decoding="async" data-nimg="1" sizes="(max-width: 599px) 1..." srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.news-article:nth-child(2) > .news-article__link > .news-article__image > img[width="785"][height="528"][loading="lazy"]`
  - **HTML:** `<img alt="Ny økonomiløsning fo..." loading="lazy" width="785" height="528" decoding="async" data-nimg="1" sizes="(max-width: 599px) 1..." srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.news-article:nth-child(3) > .news-article__link > .news-article__image > img[width="785"][height="528"][loading="lazy"]`
  - **HTML:** `<img alt="Midler til videreutv..." loading="lazy" width="785" height="528" decoding="async" data-nimg="1" sizes="(max-width: 599px) 1..." srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.nav-section[aria-label=""]:nth-child(1)`
  - **HTML:** `<nav class="nav-section" aria-label="">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

