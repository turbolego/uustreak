# WCAG Violations Report for Guovdageainnu suohkan – kautokeino kommune

**Timestamp:** 2026-11-20T06:12:49.377Z
**URL:** [https://www.guovdageainnu.suohkan.no/](https://www.guovdageainnu.suohkan.no/)
**Total Violations:** 5

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `.customLogo > img[alt="Guovdageainnu suohkan"]`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `#vFact_audioFrame, html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_ctl03_WebpartId_42 > .webPartInnhold > .vListe > .js-contrast.icon-contrast.toplevel > a[data-id="13"][href="javascript:void(0);"]`
- `#ctl00_ctl00_ctl00_innhold_ctl03_WebpartId_42 > .webPartInnhold > .vListe > .js-google-translate.icon-translate.toplevel > a[data-id="14"][href="#"]`
- `#ctl00_ctl00_ctl00_innhold_ctl03_WebpartId_42 > .webPartInnhold > .vListe > .js-enlarge-text.icon-textsize.toplevel > a[data-id="15"][href="javascript:void(0);"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 11

#### Affected Elements:

- `#ctl00_ctl00_ctl00_innhold_ctl10_WebpartId_46_WebpartId_46_txtSearch`
- `#ctl00_ctl00_ctl00_innhold_ctl10_WebpartId_45`
- `.alert-box`
- `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl04_WebpartId_52 > h2`
- `.container > ul`
- `.webPartBunnLink`
- `#Sone7001`
- `.container-floating-notifications`
- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, #vfact_bkaudio`
- `#vFact_audioFrame, h1`

### lang attribute must have a valid value

- **Impact:** serious
- **Description:** Ensure lang attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/valid-lang?application=playwright
- **Tags:** cat.language, wcag2aa, wcag312, TTv5, TT11.b, EN-301-549, EN-9.3.1.2, ACT, RGAAv4, RGAA-8.8.1
- **Count:** 3

#### Affected Elements:

- `em:nth-child(6) > span[lang="I-SAMI-NO"][dir="ltr"]`
- `p:nth-child(1) > span[lang="I-SAMI-NO"][dir="ltr"]`
- `.broken > span[lang="I-SAMI-NO"][dir="ltr"]`
