# WCAG Violations Report for If Skadeforsikring NUF

**Timestamp:** 2026-10-02T17:14:03.349Z
**URL:** [https://www.if.no/privat](https://www.if.no/privat)
**Total Violations:** 2

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 5

#### Affected Elements:

- **Target:** `img[alt="Bilforsikring"]`
  - **HTML:** `<img class="if size-100p object-cover" loading="lazy" alt="Bilforsikring" src="https://v.imgi.no/d2t6q4aul3-MOODBOARD/2042" srcset="https://v.imgi.no/d2t6q4aul3-MOODBOARD/300 300w, https://v.imgi.no/d2t6q4aul3-MOODBOARD/660 660w" role="pre…`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element

- **Target:** `img[alt="Møbler i en stue"]`
  - **HTML:** `<img class="if size-100p object-cover" loading="lazy" alt="Møbler i en stue" src="https://v.imgi.no/leuqjlyxrv-MOODBOARD/2042" srcset="https://v.imgi.no/leuqjlyxrv-MOODBOARD/300 300w, https://v.imgi.no/leuqjlyxrv-MOODBOARD/660 660w" role="…`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element

- **Target:** `img[alt="Best i test på skadeoppgjør!"]`
  - **HTML:** `<img class="if size-100p object-..." loading="lazy" alt="Best i test på skade..." src="https://v.imgi.no/u8..." srcset="https://v.imgi.no/u8..." sizes="(max-width: 450px) 4..." role="presentation">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element

- **Target:** `img[alt="Mer enn bare forsikring"]`
  - **HTML:** `<img class="if size-100p object-..." loading="lazy" alt="Mer enn bare forsikr..." src="https://v.imgi.no/jt..." srcset="https://v.imgi.no/jt..." sizes="(max-width: 450px) 4..." role="presentation">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element

- **Target:** `img[alt="Vi forsikrer bedriften din"]`
  - **HTML:** `<img class="if size-100p object-..." loading="lazy" alt="Vi forsikrer bedrift..." src="https://v.imgi.no/gs..." srcset="https://v.imgi.no/gs..." sizes="(max-width: 450px) 4..." role="presentation">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#dcdd09c59ea34195b12e1d485eea208c`
  - **HTML:** `<nav class="if flex-column gap-16" id="dcdd09c59ea34195b12e1d485eea208c">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

