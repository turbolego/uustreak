# WCAG Violations Report for Sokndal kommune

**Timestamp:** 2026-11-18T13:14:24.707Z
**URL:** [https://www.sokndal.kommune.no/](https://www.sokndal.kommune.no/)
**Total Violations:** 4

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `.default-logo--desktop > .logo[alt="Sokndal kommune"]`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- `a[href=""]`
- `a[data-id="10471"]`
- `a[data-id="69"]`
- `a[data-id="7721"]`
- `.back-to-top-button`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 14

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_WebpartId_44_WebpartId_44_txtSearch`
- `.top-boxes`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_74 > h2`
- `.event:nth-child(1) > .event-date`
- `.event:nth-child(1) > .event-text > a`
- `.event:nth-child(2) > .event-date`
- `.event:nth-child(2) > .event-text > a`
- `.event:nth-child(3) > .event-date`
- `.event:nth-child(3) > .event-text > a`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_82`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl08_WebpartId_103 > h2`
- `.container > ul`
- `.container > .webPartBunnLink`
- `.container-floating-notifications`
