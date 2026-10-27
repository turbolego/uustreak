# WCAG Violations Report for Jysk AS

**Timestamp:** 2026-10-27T04:07:11.141Z
**URL:** [https://jysk.no/](https://jysk.no/)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 4

#### Affected Elements:

- `img[title="Jul"]`
- `img[title="Annonserte varer"]`
- `img[title="FAST LAV PRIS"]`
- `img[title="Gavekort"]`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 7

#### Affected Elements:

- `.snap-start:nth-child(1) > article > .h-full.flex-col.flex > .theme-product-info.justify-between.flex > .text-left.no-underline[aria-label="Lenke til produkt"]`
- `.snap-start:nth-child(2) > article > .mb-4.flex-col.w-full > .w-full[data-testid="product-pdp-link"]`
- `.snap-start:nth-child(2) > article > .h-full.flex-col.flex > .theme-product-info.justify-between.flex > .text-left.no-underline[aria-label="Lenke til produkt"]`
- `.snap-start:nth-child(3) > article > .h-full.flex-col.flex > .theme-product-info.justify-between.flex > .text-left.no-underline[aria-label="Lenke til produkt"]`
- `a[aria-describedby="3266632-_r_b_"]`
- `.snap-start:nth-child(4) > article > .h-full.flex-col.flex > .theme-product-info.justify-between.flex > .text-left.no-underline[aria-label="Lenke til produkt"]`
- `a[aria-describedby="3640354-_r_c_"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 19

#### Affected Elements:

- `.w-10\/12.content-center[href$="mobeluke"] > .text-white.group-hover\:underline`
- `.theme-campaign-bar.h-9[data-testid="campaign-bar"]:nth-child(2) > .w-10\/12.content-center.self-center > .text-white.group-hover\:underline`
- `.w-10\/12.content-center[href$="christmas"] > .text-white.group-hover\:underline`
- `.theme-usp[href$="om-jysk"][data-testid="usp"]:nth-child(1) > .md\:text-2xl.mt-2.text-center`
- `.theme-usp[href$="om-jysk"][data-testid="usp"]:nth-child(1) > .text-center.md\:text-lg`
- `.theme-usp[href$="om-jysk"][data-testid="usp"]:nth-child(2) > .md\:text-2xl.mt-2.text-center`
- `.theme-usp[href$="om-jysk"][data-testid="usp"]:nth-child(2) > .text-center.md\:text-lg`
- `a[href$="kvalitet-og-garantier"] > .md\:text-2xl.mt-2.text-center`
- `a[href$="kvalitet-og-garantier"] > .text-center.md\:text-lg`
- `.theme-usp[href$="fast-lav-pris"][data-testid="usp"] > .md\:text-2xl.mt-2.text-center`
- `.theme-usp[href$="fast-lav-pris"][data-testid="usp"] > .text-center.md\:text-lg`
- `.text-xl`
- `.max-w-3xl > .mb-8`
- `form > p`
- `.flex-1.group[data-testid="form-group"]`
- `.group.relative[data-testid="form-group"]:nth-child(2)`
- `.hover\:border-gray-500`
- `#_R_1njf5tmj39fivb_`
- `#onetrust-banner-sdk`
