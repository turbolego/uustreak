# WCAG Violations Report for Jysk AS

**Timestamp:** 2026-09-24T03:42:39.129Z
**URL:** [https://jysk.no/](https://jysk.no/)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 3

#### Affected Elements:

- `img[title="Annonserte varer"]`
- `img[title="FAST LAV PRIS"]`
- `img[title="Gavekort"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 19

#### Affected Elements:

- `.w-10\/12.content-center[href$="superdager"] > .text-white.group-hover\:underline`
- `.w-10\/12.content-center[href$="nyheter"] > .text-white.group-hover\:underline`
- `.h-9.text-center[data-testid="campaign-bar"]:nth-child(3) > .w-10\/12.content-center.self-center > .text-white.group-hover\:underline`
- `.justify-center[href$="om-jysk"][data-testid="usp"]:nth-child(1) > .md\:text-2xl.mt-2.text-center`
- `.justify-center[href$="om-jysk"][data-testid="usp"]:nth-child(1) > .text-center.md\:text-lg`
- `.justify-center[href$="om-jysk"][data-testid="usp"]:nth-child(2) > .md\:text-2xl.mt-2.text-center`
- `.justify-center[href$="om-jysk"][data-testid="usp"]:nth-child(2) > .text-center.md\:text-lg`
- `.w-64 > .justify-center.flex-col[data-testid="usp"]:nth-child(3) > .md\:text-2xl.mt-2.text-center`
- `.w-64 > .justify-center.flex-col[data-testid="usp"]:nth-child(3) > .text-center.md\:text-lg`
- `.justify-center[href$="fast-lav-pris"][data-testid="usp"] > .md\:text-2xl.mt-2.text-center`
- `.justify-center[href$="fast-lav-pris"][data-testid="usp"] > .text-center.md\:text-lg`
- `.text-xl`
- `.max-w-3xl > .mb-8`
- `form > p`
- `.flex-1.group[data-testid="form-group"]`
- `.group.relative[data-testid="form-group"]:nth-child(2)`
- `.hover\:border-gray-500`
- `#_R_6ue4npkr9fivb_`
- `#onetrust-banner-sdk`
