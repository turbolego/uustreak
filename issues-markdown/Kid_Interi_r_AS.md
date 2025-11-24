# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2025-11-24T00:36:14.683Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 5

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

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.is-selected.ix.f7:nth-child(1) > .c.bz.c4 > .ao.ca[data-test-id="product-link"] > h4`
- `#ot-bnr-hdr-id-C0001`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 34

#### Affected Elements:

- `img[alt="Alt til soverommet 50%"]`
- `img[alt="Sengesett 50%"]`
- `img[alt="Dyner og puter 50%"]`
- `img[alt="Putevar 50%"]`
- `img[alt="Flanell 199,-"]`
- `img[alt="Laken 50%"]`
- `img[alt="Sengetepper 50%"]`
- `img[alt="Hodepute 50%"]`
- `img[alt="Madrass- og putebeskyttere 50%"]`
- `img[alt="Alt til badet 50%"]`
- `img[alt="Morgenkåper 50%"]`
- `img[alt="Håndklær 50%"]`
- `img[alt="Loungewear og accessoarer 50%"]`
- `img[alt="Therapi velværeserie 50%"]`
- `img[alt="Såper og kremer 50%"]`
- `div:nth-child(8) > .fg.bv.bw > .ge.gf > .dd.bz > .is-draggable.ao.gg > .gi.gh.b > .ii.gj.gg:nth-child(7) > div > .ca.c9.c8 > .gl.da.dd > .en.gh.dt`
- `img[alt="AVA velværeserie 50%"]`
- `img[alt="Baderomstilbehør 50%"]`
- `a[href$="skjonnhetstilbehor"] > .gl.da.dd > .en.gh.dt`
- `img[alt="Kalendergavetips"]`
- `img[alt="Julegavetips"]`
- `img[alt="Julesengetøy"]`
- `img[alt="Juleputer"]`
- `img[alt="Adventsbelysning"]`
- `img[alt="Julekranser"]`
- `img[alt="Julelykter & lys"]`
- `img[alt="Julegaveinnpakning"]`
- `img[alt="Julepynt"]`
- `img[alt="Julestrømper"]`
- `img[alt="Julegavetips til henne"]`
- `img[alt="Gavetips under 100,-"]`
- `img[alt="Gavetips under 200,-"]`
- `img[alt="Gavetips under 500,-"]`
- `img[alt="Gavetips som varmer"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- `.ag`
- `a[aria-label="Gå til startside"]`
- `.e7`
- `.tf-header-slider`
- `.tf-sidebar`
- `#kindly-chat-api > div,.sc-dNFkOE`
