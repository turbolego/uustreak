# WCAG Violations Report for Nord troms museum AS

**Timestamp:** 2026-11-23T06:29:35.210Z
**URL:** [https://ntrm.no/](https://ntrm.no/)
**Total Violations:** 9

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#text-2 > h4`
  - **HTML:** `<h4>KONTAKT OSS</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="utstillinger"]`
  - **HTML:** `<img decoding="async" class="scale-with-grid" src="https://ntrm.no/wp-content/uploads/2018/04/utstillinger-1.png" alt="utstillinger" width="800" height="533">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `main`
  - **HTML:** `<main class="sections_group">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#Header`
  - **HTML:** `<header id="Header">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#Content`
  - **HTML:** `<div id="Content" role="main">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `#menu`
  - **HTML:** `<nav id="menu" role="navigation" aria-expanded="false" aria-label="Main menu">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `#Content`
  - **HTML:** `<div id="Content" role="main">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `#text-2`
  - **HTML:** `<aside id="text-2" class="widget widget_text">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 12

#### Affected Elements:

- **Target:** `.post-10780 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
  - **HTML:** `<a class="zoom" rel="lightbox" href="https://ntrm.no/wp-content/uploads/2026/11/juletretenning-gamslett-2026.jpg" data-lightbox-type="image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10780 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
  - **HTML:** `<a class="link " href="https://ntrm.no/aktuelt/juletretenning-pa-gamslett/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10763 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
  - **HTML:** `<a class="zoom" rel="lightbox" href="https://ntrm.no/wp-content/uploads/2026/10/844302941_1769983428461828_2778292861777218244_n.jpg" data-lightbox-type="image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10763 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
  - **HTML:** `<a class="link " href="https://ntrm.no/aktuelt/utstillingsapning-minun-perinto-min-arv/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10759 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
  - **HTML:** `<a class="zoom" rel="lightbox" href="https://ntrm.no/wp-content/uploads/2026/10/584591574_10163507312815673_5070904338409867863_n-1024x498.jpg" data-lightbox-type="image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10759 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
  - **HTML:** `<a class="link " href="https://ntrm.no/aktuelt/maursundmessa-2026/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10616 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
  - **HTML:** `<a class="zoom" rel="lightbox" href="https://ntrm.no/wp-content/uploads/2026/10/Lyngshesten-levende-kulturarv-i-nord-Apning-av-vandreutstilling-Fotokafe-med-lyngshestbilder-fra-Leif-Larsen-arkivet-Mandag-5.-oktober-kl.-18-20-Storfjord-bibl…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10616 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
  - **HTML:** `<a class="link " href="https://ntrm.no/aktuelt/lyngshestutstilling-og-fotokafe-pa-lyngseidet/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10600 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
  - **HTML:** `<a class="zoom" rel="lightbox" href="https://ntrm.no/wp-content/uploads/2026/09/Ruokalysti.jpeg" data-lightbox-type="image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10600 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
  - **HTML:** `<a class="link " href="https://ntrm.no/aktuelt/hyva-ruokalysti-ja-ei-ole-velkaa-god-matlyst-og-ingen-gjeld/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10594 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .zoom[rel="lightbox"][data-lightbox-type="image"]`
  - **HTML:** `<a class="zoom" rel="lightbox" href="https://ntrm.no/wp-content/uploads/2026/09/harald-lindbach-hvem-bodde-her.jpg" data-lightbox-type="image">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-10594 > .image_frame.post-photo-wrapper.image > .image_wrapper > .image_links.double > .link`
  - **HTML:** `<a class="link " href="https://ntrm.no/aktuelt/foredrag-hvem-bodde-her-for-oss/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- **Target:** `meta[name="viewport"]`
  - **HTML:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">`
  - **Failure summary:** Fix any of the following: maximum-scale=1 on <meta> tag disables zooming on mobile devices


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" class="js_active js_active vc_desktop vc_transform vc_transform" itemscope="" itemtype="https://schema.org/WebPage">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

