# WCAG Violations Report for Herøy kommune

**Timestamp:** 2026-11-23T06:20:20.072Z
**URL:** [https://www.heroy.kommune.no/](https://www.heroy.kommune.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_410_WebpartId_410_rptArtikler_ctl04_hlLink > .datoPublisert`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_410_WebpartId_410_rptArtikler_ctl06_hlLink > .datoPublisert`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_ctl08_WebpartId_404 > .webPartTittel`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Herøy kommune"]`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_ctl08_WebpartId_404_WebpartId_404_txtSearch`
- `#ctl00_ctl00_ctl00_innhold_ctl08_WebpartId_405`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl00_WebpartId_407 > .webPartInnhold > .container.articles-in-category > ul`
- `#Sone5001`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_410 > .webPartTittel`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_410 > .webPartInnhold > .container.articles-in-category > ul`
- `.webPartBunnLink`
