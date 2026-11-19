# WCAG Violations Report for Breidablikk ungdomsskole

**Timestamp:** 2026-11-19T06:33:12.213Z
**URL:** [https://www.sandefjord.kommune.no/barnehage-skole-sfo/skole/alle-skolene/ungdomsskoler/breidablikk-ungdomsskole/](https://www.sandefjord.kommune.no/barnehage-skole-sfo/skole/alle-skolene/ungdomsskoler/breidablikk-ungdomsskole/)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img[alt="Sandefjord kommune"]`
  - **HTML:** `<img alt="Sandefjord kommune" src="/handlers/bv.ashx/ife3625cd-bd2c-4725-8c06-dc6a53d3abc8/77declogo_hvit.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- **Target:** `a[data-id="33947"]`
  - **HTML:** `<a data-id="33947" href="https://www.sandefjord.kommune.no/om-sandefjord-kommune/personvern/" class="InnholdLinkTekst link-webpage">Les mer om personvern.</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 1.95:1 with the surrounding text. (Minimum contrast is 3:1, link text: #004974, surrounding text: #131313) The link has no styling (such as underline) to distinguish it …


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

