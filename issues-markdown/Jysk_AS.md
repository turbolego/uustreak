# WCAG Violations Report for Jysk AS

**Timestamp:** 2026-11-18T06:35:06.382Z
**URL:** [https://jysk.no/](https://jysk.no/)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.prose.max-w-none.marker\:text-black > p > span`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 6

#### Affected Elements:

- `img[title="Baderom"]`
- `img[title="Oppbevaring"]`
- `img[title="Jul"]`
- `img[title="Annonserte varer"]`
- `img[title="FAST LAV PRIS"]`
- `img[title="Gavekort"]`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 6

#### Affected Elements:

- `.snap-start:nth-child(1) > article > .mb-4.w-full.flex-col > .w-full[data-testid="product-pdp-link"]`
- `.snap-start:nth-child(1) > article > .h-full.flex-col.flex > .theme-product-info.justify-between.flex > .text-left.no-underline[aria-label="Lenke til produkt"]`
- `.snap-start:nth-child(2) > article > .h-full.flex-col.flex > .theme-product-info.justify-between.flex > .text-left.no-underline[aria-label="Lenke til produkt"]`
- `.snap-start:nth-child(3) > article > .h-full.flex-col.flex > .theme-product-info.justify-between.flex > .text-left.no-underline[aria-label="Lenke til produkt"]`
- `.snap-start:nth-child(4) > article > .mb-4.w-full.flex-col > .w-full[data-testid="product-pdp-link"]`
- `.snap-start:nth-child(4) > article > .h-full.flex-col.flex > .theme-product-info.justify-between.flex > .text-left.no-underline[aria-label="Lenke til produkt"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 16

#### Affected Elements:

- `.theme-usp[href$="om-jysk"][data-testid="usp"]:nth-child(1) > .md\:text-2xl.mt-2.text-center`
- `.theme-usp[href$="om-jysk"][data-testid="usp"]:nth-child(1) > .text-center.md\:text-lg`
- `.theme-usp[href$="om-jysk"][data-testid="usp"]:nth-child(2) > .md\:text-2xl.mt-2.text-center`
- `.theme-usp[href$="om-jysk"][data-testid="usp"]:nth-child(2) > .text-center.md\:text-lg`
- `a[href$="kvalitet-og-garantier"] > .md\:text-2xl.mt-2.text-center`
- `a[href$="kvalitet-og-garantier"] > .text-center.md\:text-lg`
- `.theme-usp[href$="fast-lav-pris"][data-testid="usp"] > .md\:text-2xl.mt-2.text-center`
- `.theme-usp[href$="fast-lav-pris"][data-testid="usp"] > .text-center.md\:text-lg`
- `.text-xl`
- `.mb-8.text-center`
- `form > p`
- `.flex-1.group[data-testid="form-group"]`
- `.group.relative[data-testid="form-group"]:nth-child(2)`
- `.hover\:border-gray-500`
- `#_R_1njf5tmj39fivb_`
- `#onetrust-banner-sdk`
