# WCAG Violations Report for Lesja kommune

**Timestamp:** 2026-11-22T06:33:33.926Z
**URL:** [https://www.lesja.kommune.no/](https://www.lesja.kommune.no/)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Lesja kommune"]`
  - **HTML:** `<img alt="Lesja kommune" src="/handlers/bv.ashx/i3b9c7588-d7da-43ce-bcb9-0c7d4f96daaa/lesja_logo.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-500: #003E51; --bc-primary-color-400: #195162; --bc-primary-color-300: #477381; --bc-primary-color-200: #7E9DA6; --bc-primary-color-100: #B1C4C9;">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

