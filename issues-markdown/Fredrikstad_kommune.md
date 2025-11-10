# WCAG Violations Report for Fredrikstad kommune

**Timestamp:** 2025-11-10T11:29:03.395Z
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
- **Count:** 3

#### Affected Elements:

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

- `a[href="/kalender?id=1690161"] > .p-4 > .list-none > .items-left.gap-2.flex:nth-child(1) > .h-6[width="1em"][height="1em"]`
- `a[href="/kalender?id=1690161"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(2) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1690161"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(3) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1689799"] > .p-4 > .list-none > .items-left.gap-2.flex:nth-child(1) > .h-6[width="1em"][height="1em"]`
- `a[href="/kalender?id=1689799"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(2) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1689799"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(3) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1703033"] > .p-4 > .list-none > .items-left.gap-2.flex:nth-child(1) > .h-6[width="1em"][height="1em"]`
- `a[href="/kalender?id=1703033"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(2) > .h-6.w-6.text-fk-blue`
- `a[href="/kalender?id=1703033"] > .p-4 > .list-none > .mt-2.items-left.gap-2:nth-child(3) > .h-6.w-6.text-fk-blue`
