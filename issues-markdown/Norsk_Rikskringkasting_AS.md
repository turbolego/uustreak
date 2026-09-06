# WCAG Violations Report for Norsk Rikskringkasting AS

**Timestamp:** 2026-09-06T02:07:27.576Z
**URL:** [https://www.nrk.no/](https://www.nrk.no/)
**Total Violations:** 2

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#frontplugg-kommune-input`

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 5

#### Affected Elements:

- `div[data-testid="kur-embed-id-1336315"] > .tronskifte-lenke[href="https://www.nrk.no/1.11661059"] > .tronskifte-banner.tronskifte-banner--haakon-og-harald.tronskifte-apartment > .tronskifte-shift-content > .tronskifte-monogram.tronskifte-monogram-wrapper[role="img"]`
- `div[data-testid="kur-embed-id-1336224"] > .tronskifte-lenke[href="https://www.nrk.no/1.11661059"] > .tronskifte-banner.tronskifte-banner--haakon-og-harald.tronskifte-apartment > .tronskifte-shift-content > .tronskifte-monogram.tronskifte-monogram-wrapper[role="img"]`
- `div[data-testid="kur-embed-id-1336024"] > .tronskifte-lenke[href="https://www.nrk.no/1.11661059"] > .tronskifte-banner.tronskifte-banner--haakon-og-harald.tronskifte-apartment > .tronskifte-shift-content > .tronskifte-monogram.tronskifte-monogram-wrapper[role="img"]`
- `div[data-testid="kur-embed-id-1335992"] > .tronskifte-lenke[href="https://www.nrk.no/1.11661059"] > .tronskifte-banner.tronskifte-banner--haakon-og-harald.tronskifte-apartment > .tronskifte-shift-content > .tronskifte-monogram.tronskifte-monogram-wrapper[role="img"]`
- `div[data-testid="kur-embed-id-1335818"] > .tronskifte-lenke[href="https://www.nrk.no/1.11661059"] > .tronskifte-banner.tronskifte-banner--haakon-og-harald.tronskifte-apartment > .tronskifte-shift-content > .tronskifte-monogram.tronskifte-monogram-wrapper[role="img"]`
