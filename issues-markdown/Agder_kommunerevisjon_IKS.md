# WCAG Violations Report for Agder kommunerevisjon IKS

**Timestamp:** 2026-11-19T06:28:54.637Z
**URL:** [https://agderkomrev.no/](https://agderkomrev.no/)
**Total Violations:** 5

## Violation Details

### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#socket`
  - **HTML:** `<footer class="container_wrap socket_color" id="socket" role="contentinfo" itemscope="itemscope" itemtype="https://schema.org/WPFooter" aria-label="Opphavsrett og firmainformasjon">`
  - **Failure summary:** Fix any of the following: The contentinfo landmark is contained in another landmark.


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" class="html_stretched respo...">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#pojo-a11y-skip-content`
  - **HTML:** `<a id="pojo-a11y-skip-content" class="pojo-skip-link pojo-skip-content" tabindex="1" accesskey="s" href="#content" role="link">Hopp rett ned til innholdet</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### The skip-link target should exist and be focusable

- **Impact:** moderate
- **Description:** Ensure all skip links have a focusable target
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/skip-link?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-12.7.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#pojo-a11y-skip-content`
  - **HTML:** `<a id="pojo-a11y-skip-content" class="pojo-skip-link pojo-skip-content" tabindex="1" accesskey="s" href="#content" role="link">Hopp rett ned til innholdet</a>`
  - **Failure summary:** Fix any of the following: No skip link target


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#pojo-a11y-skip-content`
  - **HTML:** `<a id="pojo-a11y-skip-content" class="pojo-skip-link pojo-skip-content" tabindex="1" accesskey="s" href="#content" role="link">Hopp rett ned til innholdet</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

