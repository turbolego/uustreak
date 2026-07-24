# WCAG Violations Report for Bodø videregående skole

**Timestamp:** 2026-07-24T12:41:39.313Z
**URL:** [https://www.bodo.vgs.no/#](https://www.bodo.vgs.no/#)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.cc-content-link-text`

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- `a[data-id="75673"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `a[data-id="1942"]`
- `a[data-id="19684"]`
- `a[data-id="19688"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_ctl05_WebpartId_4649`
- `#ctl00_ctl00_ctl00_innhold_ctl05_WebpartId_6643`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1200 > h2`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1200_WebpartId_1200_txtSearch`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_1201`
- `.section-frontpage-top`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl06_WebpartId_6713 > h2`
- `.container > ul`
- `.webPartBunnLink`
- `.section-frontpage-bottom`
