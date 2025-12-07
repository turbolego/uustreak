# WCAG Violations Report for Nordvik & Partners Eiendomsmegling AS

**Timestamp:** 2025-12-07T00:40:07.688Z
**URL:** [https://www.nordvik.no/#](https://www.nordvik.no/#)
**Total Violations:** 5

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[title="Bruktbil Levering Web"], .OverlayBase_module_overlayWrapper__42ef25fe`

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `iframe[title="Bruktbil Levering Web"], body`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.py-10.md\:py-12[title="Bruktbil"] > div:nth-child(2) > .md\:text-lg.md\:leading-7`
- `section:nth-child(1) > h4`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `.w-24`
- `.w-36`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 15

#### Affected Elements:

- `.pl-2`
- `.py-10.md\:py-12[title="Bruktbil"] > div:nth-child(2)`
- `.py-10[title="Nettbutikk"][href$="shop.nordvik.no/"] > div:nth-child(2)`
- `a[title="Bestill time"] > div:nth-child(2)`
- `.py-10.md\:py-12[title="Kampanjer"] > div:nth-child(2)`
- `#module-3`
- `a[title="Prøvekjøring "] > div:nth-child(2)`
- `.py-10[title="Nyheter"][href$="nyheter"] > div:nth-child(2)`
- `a[title="Ledige jobber"] > div:nth-child(2)`
- `.py-10.md\:py-12[title="Leiebil"] > div:nth-child(2)`
- `#module-5`
- `#module-6`
- `.my-2`
- `.pt-3`
- `.md\:flex-row.gap-8.flex-col > .flex-1`
