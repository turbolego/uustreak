# WCAG Violations Report for Nille AS

**Timestamp:** 2025-11-02T00:34:32.481Z
**URL:** [https://www.nille.no/#](https://www.nille.no/#)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 15

#### Affected Elements:

- `.swiper-slide-active.swiper-slide > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide-next.swiper-slide > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(3) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(4) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(5) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(6) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(7) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(8) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(9) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(10) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(11) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(12) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(13) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(14) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
- `.swiper-slide:nth-child(15) > .itemCard--fAqEIsz.fade-appear-done.fade-enter-done > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `a[title="Honeycomb 20cm"][aria-label=""]:nth-child(2) > h3`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 8

#### Affected Elements:

- `img[data-varify-njm7h6x59h9=""]`
- `a[target="_self"]:nth-child(2) > img[width="93px"]`
- `a[target="_self"]:nth-child(3) > img[width="93px"]`
- `a[target="_self"]:nth-child(4) > img[width="93px"]`
- `a[target="_self"]:nth-child(5) > img[width="93px"]`
- `a[target="_self"]:nth-child(6) > img[width="93px"]`
- `img[data-varify-jjllrybusak=""]`
- `a[target="_self"]:nth-child(8) > img[width="93px"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 12

#### Affected Elements:

- `a[href$="halloween/"][title=""][aria-label=""]`
- `.swiper-slide-prev > a[title=""][aria-label=""]`
- `a[href$="juletrepynt/"]`
- `a[href$="baking/"]`
- `a[target="_self"]:nth-child(1)`
- `a[target="_self"]:nth-child(2)`
- `a[target="_self"]:nth-child(3)`
- `a[target="_self"]:nth-child(4)`
- `a[target="_self"]:nth-child(5)`
- `a[target="_self"]:nth-child(6)`
- `a[target="_self"]:nth-child(7)`
- `a[target="_self"]:nth-child(8)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.topBar--hOWYROG`
- `.content--QC6mDoR`
