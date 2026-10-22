# WCAG Violations Report for Accenture Norge

**Timestamp:** 2026-10-22T03:33:59.047Z
**URL:** [https://www.accenture.com/en](https://www.accenture.com/en)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.rad-carousel-block__title`
  - **HTML:** `<h4 class="rad-carousel-block__title">“Companies will have a greater technology landscape, but we need to completely change the narrative to inspire people to paint the future. It is human in the lead, not human in the loop.”</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#editorialtext-99eb2d4213 > h4`
  - **HTML:** `<h4>Reinvented with Accenture</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `#pc-policy-text-link-1`
  - **HTML:** `<a href="https://www.accentur..." target="_blank" style="color: #004DFF;" aria-label="Read more about Acce..." id="pc-policy-text-link-..." data-cmp-clickable="" data-cmp-data-layer="{"pc-policy-text-lin...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#pc-policy-text-link-2`
  - **HTML:** `<a href="https://www.accentur..." target="_blank" style="color: #004DFF;" aria-label="Read more about Acce..." id="pc-policy-text-link-..." data-cmp-clickable="" data-cmp-data-layer="{"pc-policy-text-lin...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

