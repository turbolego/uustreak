# WCAG Violations Report for Røros kommune

**Timestamp:** 2026-11-20T06:28:22.589Z
**URL:** [https://www.roros.kommune.no/](https://www.roros.kommune.no/)
**Total Violations:** 4

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Røros kommune"]`
  - **HTML:** `<img alt="Røros kommune" src="/handlers/bv.ashx/i32cd50b7-6977-4aac-9f4f-38e866065b34/rossentjielte_roroskommune_svart.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- **Target:** `hsk-event-list, .raasten-rastah-filmh-IAa57 > footer > a[target="_self"]`
  - **HTML:** `<a _ngcontent-ng-c1042105423="" href="https://hvaskjeriroros.no/arrangement/raasten-rastah-filmh-IAa57" target="_self" aria-label="See details for Raasten rastah:Filmh"> Se detaljer </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `hsk-event-list, .hundekjoring-i-nydelig-roros-natur-lGOj8 > footer > a[target="_self"]`
  - **HTML:** `<a _ngcontent-ng-c1042105423="" href="https://hvaskjeriroros.no/arrangement/hundekjoring-i-nydelig-roros-natur-lGOj8" target="_self" aria-label="See details for Hundekjøring i nydelig Røros-natur"> Se detaljer </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `hsk-event-list, .babysang-og-apent-lekested-tk8YJ > footer > a[target="_self"]`
  - **HTML:** `<a _ngcontent-ng-c1042105423="" href="https://hvaskjeriroros.no/arrangement/babysang-og-apent-lekested-tk8YJ" target="_self" aria-label="See details for Babysang og åpent lekested"> Se detaljer </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-500: #B5351E; --bc-primary-color-400: #BC4934; --bc-primary-color-300: #C96D5C; --bc-primary-color-200: #D9988C; --bc-primary-color-100: #E8C1BA;">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.global-area-message`
  - **HTML:** `<div class="global-area-message">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

