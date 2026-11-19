# WCAG Violations Report for Nord troms museum AS

**Timestamp:** 2026-11-19T05:48:52.514Z
**URL:** [https://ntrm.no/](https://ntrm.no/)
**Total Violations:** 9

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#text-2 > h4`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="utstillinger"]`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `main`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#Header`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#Content`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `#menu`
- `#Content`
- `#text-2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 12

#### Affected Elements:

- `.post-10780 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
- `.post-10780 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
- `.post-10763 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
- `.post-10763 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
- `.post-10759 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
- `.post-10759 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
- `.post-10616 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
- `.post-10616 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
- `.post-10600 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
- `.post-10600 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
- `.post-10594 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
- `.post-10594 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`
