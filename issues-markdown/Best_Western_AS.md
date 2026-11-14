# WCAG Violations Report for Best Western AS

**Timestamp:** 2026-11-14T08:39:23.605Z
**URL:** [https://www.bestwestern.no/](https://www.bestwestern.no/)
**Total Violations:** 3

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 9

#### Affected Elements:

- **Target:** `a[href$="bestwestern.com/"]`
  - **HTML:** `<a class="inline-flex w-fit no-underline font-book text-2xs hover:text-on-surface-variant focus-visible:text-on-surface-variant gap-1 items-center" href="https://www.bestwestern.com/" tabindex="0" title="" aria-label="Til bestwestern.com">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[title="Se mer"]`
  - **HTML:** `<a href="/rewards/nytt-program" title="Se mer" aria-label="Les mer om Nytt program på vei" class="cursor-pointer grow group">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[title="Oppdag tilbudet"]`
  - **HTML:** `<a href="/tilbud/hostkampanje-worldhotels" title="Oppdag tilbudet" aria-label="Les mer om 15% medlemsrabatt på WorldHotels Crafted i Skandinavia" class="cursor-pointer grow group">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[title="Til tilbudet "]`
  - **HTML:** `<a href="/rewards/medlemstilbud/doble-poeng" title="Til tilbudet " aria-label="Les mer om Doble poeng i hele verden" class="cursor-pointer grow group">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="julemarkeder"]`
  - **HTML:** `<a href="/oppdag/julemarkeder" title="Se våre tips" aria-label="Les mer om Kom i julestemning " class="cursor-pointer grow group">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[title="Ta meg til Edinburgh!"]`
  - **HTML:** `<a href=" https://www.bestwestern.no/location/Storbritannien.ChIJIyaYpQC4h0gRJxfnfHsU8mQ?type=GOOGLEPLACE&startDate=2025-08-06&endDate=2025-08-07&room%5B0%5D=1" title="Ta meg til Edinburgh!" aria-label="Les mer om Edinburgh" class="cursor-…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[title="Ta meg til Wien!"]`
  - **HTML:** `<a href="https://www.bestwestern.no/location/%C3%96sterrike.ChIJn8o2UZ4HbUcRRluiUYrlwv0?type=GOOGLEPLACE&startDate=2025-08-06&endDate=2025-08-07&room%5B0%5D=1" title="Ta meg til Wien!" aria-label="Les mer om Wien" class="cursor-pointer gro…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[title="Ta meg til Warszawa!"]`
  - **HTML:** `<a href="https://www.bestwestern.no/location/Polen.ChIJAZ-GmmbMHkcR_NPqiCq-8HI?type=GOOGLEPLACE&startDate=2025-08-06&endDate=2025-08-07&room%5B0%5D=1" title="Ta meg til Warszawa!" aria-label="Les mer om Warszawa" class="cursor-pointer grow…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Send e-post til Best Western"]`
  - **HTML:** `<a class="inline-flex w-fit underline font-book text-2xs hover:text-on-surface-variant focus-visible:text-on-surface-variant " href="mailto:booking.service@bestwestern.com" tabindex="0" title="" aria-label="Send e-post til Best Western"><!…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `header > nav`
  - **HTML:** `<nav aria-label="Hovedmeny">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.not-focus\:visually-hidden`
  - **HTML:** `<a class="inline-flex w-fit ho..." href="#main" tabindex="0" title="" aria-label="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="bestwestern.com/"]`
  - **HTML:** `<a class="inline-flex w-fit no-underline font-book text-2xs hover:text-on-surface-variant focus-visible:text-on-surface-variant gap-1 items-center" href="https://www.bestwestern.com/" tabindex="0" title="" aria-label="Til bestwestern.com">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

