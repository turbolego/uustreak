# WCAG Violations Report for Fredrikstad kommune

**Timestamp:** 2025-12-05T00:29:35.148Z
**URL:** [https://www.fredrikstad.kommune.no/#](https://www.fredrikstad.kommune.no/#)
**Total Violations:** 5

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `.language > img`
- `a[href="/kalender?id=1687577"] > .relative.overflow-hidden.w-full > figure > .h-40.ease-in-out.object-cover`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#vid-0`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `#q`
- `.flex-wrap`
- `div[x-show="step === 1"] > .text-gray-700.font-medium.text-xl`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `.carousel`

### <svg> elements with an img role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 12

#### Affected Elements:

- `a[href="/kalender?id=1708357"] > .p-4 > .list-none.p-0.m-0 > .items-left.gap-2.flex:nth-child(1) > .h-6[width="1em"][height="1em"]`
- `a[href="/kalender?id=1708357"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(2) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1708357"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(3) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1687577"] > .p-4 > .list-none.p-0.m-0 > .items-left.gap-2.flex:nth-child(1) > .h-6[width="1em"][height="1em"]`
- `a[href="/kalender?id=1687577"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(2) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1687577"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(3) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1707126"] > .p-4 > .list-none.p-0.m-0 > .items-left.gap-2.flex:nth-child(1) > .h-6[width="1em"][height="1em"]`
- `a[href="/kalender?id=1707126"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(2) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1707126"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(3) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1708569"] > .p-4 > .list-none.p-0.m-0 > .items-left.gap-2.flex:nth-child(1) > .h-6[width="1em"][height="1em"]`
- `a[href="/kalender?id=1708569"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(2) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1708569"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(3) > .h-6.w-6.text-fk-blue`
