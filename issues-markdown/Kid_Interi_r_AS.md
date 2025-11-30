# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2025-11-30T00:47:01.550Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 8

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#kindly-chat-api > div,.sc-koBvLg`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- `.review-block.article.review:nth-child(1) > .tf-date`
- `.review-block.article.review:nth-child(2) > .tf-date`
- `.review-block.article.review:nth-child(3) > .tf-date`
- `.review-block.article.review:nth-child(4) > .tf-date`
- `.review-block.article.review:nth-child(5) > .tf-date`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `div:nth-child(1) > .fa.f9.bv > .bl.c4.bz > .fj.fk.fn > .fs.eo.fr > .fv.fu.fw`

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
- **Count:** 3

#### Affected Elements:

- `.g6 > .fe.ff.el`
- `div:nth-child(19) > .fa.f9.bv > .bl.c4.bz > .a7.a5[data-scope-link="true"]:nth-child(1) > .gg.fc.fb > .fe.ff.el`
- `div:nth-child(22) > .fa.f9.bv > .bl.c4.bz > .a7.a5.a6:nth-child(1) > .gk.fc.fb > .fe.ff.el`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 24

#### Affected Elements:

- `img[alt="Se alle produkter"]`
- `img[alt="Sengesett 50%"]`
- `img[alt="Dyner og puter 50%"]`
- `img[alt="Putevar 50%"]`
- `img[alt="Flanell 199,-"]`
- `img[alt="Laken 50%"]`
- `img[alt="Sengetepper 50%"]`
- `img[alt="Hodepute 50%"]`
- `img[alt="Madrassbeskyttere 50%"]`
- `img[alt="Alt til badet 50%"]`
- `img[alt="Morgenkåper 50%"]`
- `img[alt="Håndklær 50%"]`
- `img[alt="Loungewear 50%"]`
- `img[alt="Therapi-serien 50%"]`
- `img[alt="Såper og kremer 50%"]`
- `div:nth-child(17) > .g7.bv.bw > .g8.g9 > .bz.dd > .is-draggable.ga.ao > .gc.gb.b > .gd.if.ga:nth-child(7) > div > .ca.s.c9 > .gf.da.c4 > .en.gb.a3`
- `img[alt="AVA velværeserie 50%"]`
- `img[alt="Baderomstilbehør 50%"]`
- `a[href$="skjonnhetstilbehor"] > .gf.da.c4 > .en.gb.a3`
- `img[alt="Julegavetips til henne"]`
- `img[alt="Gavetips under 100,-"]`
- `img[alt="Gavetips under 200,-"]`
- `img[alt="Gavetips under 500,-"]`
- `img[alt="Gavetips som varmer"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `div:nth-child(19) > .fa.f9.bv > .bl.c4.bz > .a7.a5[data-scope-link="true"]:nth-child(1)`
- `div:nth-child(19) > .fa.f9.bv > .bl.c4.bz > .ca.s.c9`
- `div:nth-child(22) > .fa.f9.bv > .bl.c4.bz > .a7.a5.a6:nth-child(1)`
- `div:nth-child(22) > .fa.f9.bv > .bl.c4.bz > .ca.s.c9`

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
- `#kindly-chat-api > div,.sc-dNFkOE`
