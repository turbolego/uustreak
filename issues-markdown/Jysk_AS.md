# WCAG Violations Report for Jysk AS

**Timestamp:** 2026-08-27T07:48:38.830Z
**URL:** [https://jysk.no/](https://jysk.no/)
**Total Violations:** 3

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.snap-start:nth-child(1) > article > .h-full.flex-col.flex > .text-gray-800 > .items-end.justify-between.flex > div[aria-label="Produktpris –  "][data-testid="product-price"][aria-description="Pris"]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 4

#### Affected Elements:

- `img[alt="Se ukens kampanjeavis"]`
- `img[title="Annonserte varer"]`
- `img[title="FAST LAV PRIS"]`
- `img[title="Gavekort"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- `.bg-brand-500`
- `.px-3\.5.max-w-\[1400px\].mx-auto:nth-child(7)`
- `.text-xl`
- `.max-w-3xl > .mb-8`
- `form > p`
- `.flex-1.group[data-testid="form-group"]`
- `.group.relative[data-testid="form-group"]:nth-child(2)`
- `.hover\:border-gray-500`
- `#_R_1njh5udb9fivb_`
- `#onetrust-banner-sdk`
