# WCAG Violations Report for Fredrikstad kommune

**Timestamp:** 2025-11-22T00:25:51.540Z
**URL:** [https://www.fredrikstad.kommune.no/#](https://www.fredrikstad.kommune.no/#)
**Total Violations:** 4

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

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- `.font-semibold.text-xl`
- `.wrapper > ul > li:nth-child(1) > .hover\:underline.text-black.no-underline`
- `.wrapper > ul > li:nth-child(2) > .hover\:underline.text-black.no-underline`
- `#q`
- `.fk-searchbar-forside > .pt-4`
- `div[x-show="step === 1"] > .text-gray-700.font-medium.text-xl`

### <svg> elements with an img role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 9

#### Affected Elements:

- `a[href="/kalender?id=1705595"] > .p-4 > .list-none > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
- `a[href="/kalender?id=1705595"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1705595"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1656829"] > .p-4 > .list-none > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
- `a[href="/kalender?id=1656829"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1656829"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1689729"] > .p-4 > .list-none > .items-left.gap-2.flex:nth-child(1) > .text-fk-blue[width="1em"][height="1em"]`
- `a[href="/kalender?id=1689729"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(2) > .text-fk-blue.h-6.w-6`
- `a[href="/kalender?id=1689729"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(3) > .text-fk-blue.h-6.w-6`
