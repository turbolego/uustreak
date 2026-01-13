# WCAG Violations Report for Fredrikstad kommune

**Timestamp:** 2026-01-13T00:35:09.855Z
**URL:** [https://www.fredrikstad.kommune.no/#](https://www.fredrikstad.kommune.no/#)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `#corner_text`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.language > img`

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
- **Count:** 5

#### Affected Elements:

- `.font-semibold.text-xl`
- `.wrapper > ul > li > .hover\:underline.text-black.no-underline`
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

- `a[href="/kalender?id=1714989"] > .p-4 > .list-none.p-0.m-0 > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
- `a[href="/kalender?id=1714989"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1714989"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1692971"] > .p-4 > .list-none.p-0.m-0 > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
- `a[href="/kalender?id=1692971"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1692971"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1711976"] > .p-4 > .list-none.p-0.m-0 > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
- `a[href="/kalender?id=1711976"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1711976"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1711995"] > .p-4 > .list-none.p-0.m-0 > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
- `a[href="/kalender?id=1711995"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1711995"] > .p-4 > .list-none.p-0.m-0 > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
