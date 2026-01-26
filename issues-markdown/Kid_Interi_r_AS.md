# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2026-01-26T00:42:00.239Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- `.f4`
- `.review-block.article.review:nth-child(1) > .tf-date`
- `.review-block.article.review:nth-child(2) > .tf-date`
- `.review-block.article.review:nth-child(3) > .tf-date`
- `.review-block.article.review:nth-child(4) > .tf-date`
- `.review-block.article.review:nth-child(5) > .tf-date`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#ot-bnr-hdr-id-C0001`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `img[fetchpriority="high"]`
- `.a7[href$="borddekking"][data-scope-link="true"]:nth-child(1) > .gj.fc.fb > .fe.ff.el`
- `.a7[href$="kjokkenutstyr"][data-scope-link="true"]:nth-child(1) > .gj.fc.fb > .fe.ff.el`
- `.a7[href$="ambiance"][data-scope-link="true"]:nth-child(1) > .g1.fc.fb > .fe.ff.el`
- `div:nth-child(11) > .fa.f9.bv > .bl.dd.c4 > .a7.a5[data-scope-link="true"]:nth-child(1) > .g1.fc.fb > .fe.ff.el`
- `.a7[href$="kjaledyr"][data-scope-link="true"]:nth-child(1) > .g1.fc.fb > .fe.ff.el`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 20

#### Affected Elements:

- `.ca.s[href$="soverom"] > .g0.da.dd > .en.fw[alt="Se alle ➝"]`
- `img[alt="Alle dundyner 50%"]`
- `img[alt="Alle sengesett 50%"]`
- `img[alt="Alle sengetepper 50%"]`
- `img[alt="Bomull sengesett fra 249,-"]`
- `img[alt="Alle dunputer 50%"]`
- `img[alt="Helårsdyner fra 799,-"]`
- `img[alt="Alle laken og putevar 50%"]`
- `img[alt="Petra dyne- & putepakke 249,-"]`
- `img[alt="Thomas hotellpute 2 for 1"]`
- `.ca.s[href$="baderom"] > .g0.da.dd > .en.fw[alt="Se alle ➝"]`
- `img[alt="Alt baderomstilbehør 50%"]`
- `img[alt="Skjønnhetstilbehør 50%"]`
- `img[alt="Hotel Selection 40%"]`
- `img[alt="Toalettmapper 50%"]`
- `img[alt="AVA velværeserie 40%"]`
- `img[alt="Alle morgenkåper 50%"]`
- `img[alt="Såper & kremer 50%"]`
- `a[href$="loungewear--accessories"] > .g0.da.dd > .en.fw.a3`
- `img[alt="Therapie velværeserie 40%"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 12

#### Affected Elements:

- `.bl.dd.c4 > .a7[href$="soverom"][data-scope-link="true"]:nth-child(1)`
- `.bl.dd.c4 > .ca.s[href$="soverom"]`
- `.a7[href$="borddekking"][data-scope-link="true"]:nth-child(1)`
- `.ca.s[href$="borddekking"]`
- `.a7[href$="kjokkenutstyr"][data-scope-link="true"]:nth-child(1)`
- `.ca.s[href$="kjokkenutstyr"]`
- `.a7[href$="ambiance"][data-scope-link="true"]:nth-child(1)`
- `.ca.s[href$="ambiance"]`
- `div:nth-child(11) > .fa.f9.bv > .bl.dd.c4 > .a7.a5[data-scope-link="true"]:nth-child(1)`
- `div:nth-child(11) > .fa.f9.bv > .bl.dd.c4 > .ca.s.c8`
- `.a7[href$="kjaledyr"][data-scope-link="true"]:nth-child(1)`
- `.ca.s[href$="kjaledyr"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- `.ag`
- `a[aria-label="Gå til startside"]`
- `.e7`
- `.a > div:nth-child(5)`
- `.tf-header-slider`
- `.tf-sidebar`
- `#kindly-chat-api > div,.sc-koBvLg`
