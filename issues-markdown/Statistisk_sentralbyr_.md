# WCAG Violations Report for Statistisk sentralbyrå

**Timestamp:** 2026-11-11T05:20:00.380Z
**URL:** [https://www.ssb.no/](https://www.ssb.no/)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#popup-title`
  - **HTML:** `<h4 class="header-text" id="popup-title">Hvordan opplever du ssb.no?</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `a[aria-describedby="0-text"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/arbeid-og-lonn/sysselsetting/statistikk/antall-arbeidsforhold-og-lonn/artikler/hvor-mange-jobber-er-det-i-norge" aria-label="Det finnes over 3,2 millioner jobber i N…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Færre sitter i fengsel"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/sosiale-forhold-og-kriminalitet/kriminalitet-og-rettsvesen/statistikk/fengslinger/artikler/faerre-soner-en-ubetinget-dom-i-fengsel" aria-label="Færre sitter i fengse…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

