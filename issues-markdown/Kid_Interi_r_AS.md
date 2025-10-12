# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2025-10-12T00:32:25.262Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 7

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `#kindly-chat-api > div,.sc-fszimp`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 6

#### Affected Elements:

- `.en > span`
- `.review-block.article.review:nth-child(1) > .tf-date`
- `.review-block.article.review:nth-child(2) > .tf-date`
- `.review-block.article.review:nth-child(3) > .tf-date`
- `.review-block.article.review:nth-child(4) > .tf-date`
- `.review-block.article.review:nth-child(5) > .tf-date`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#ot-bnr-hdr-id-C0001`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `.a7[href$="krepp"][data-scope-link="true"]:nth-child(1) > .g1.ex.ew > .ez.f0.e6`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 27

#### Affected Elements:

- `img[alt="Sengesett -50%"]`
- `img[alt="Dundyner -50%"]`
- `img[alt="Sengetepper -50%"]`
- `img[alt="Thomas hotellpute 2 for 1"]`
- `img[alt="Laken -50%"]`
- `img[alt="Petra dyne-/putepakke 249,-"]`
- `img[alt="Dunputer -50%"]`
- `img[alt="Flanell fra 249,-"]`
- `img[alt="Krepp fra 199,-"]`
- `img[alt="Putevar -50%"]`
- `div:nth-child(2) > .fs.ba.bb > .ft.fu > .cv.be > .is-draggable.bk.fv > .fx.fw.b > .fy.i6.fv:nth-child(11) > div > .bs.s.br > .g0.cs.cv > .e8.fw.a3`
- `img[alt="Toalettmapper -50%"]`
- `img[alt="Baderomstilbehør -50%"]`
- `img[alt="Baderomsmatter -50%"]`
- `img[alt="Morgenkåper -50%"]`
- `img[alt="Hotel Selection -50%"]`
- `img[alt="Makeup-tilbehør -50%"]`
- `img[alt="AVA velværeserie -40%"]`
- `img[alt="Håraccessories -50%"]`
- `img[alt="Therapie velværeserie -40%"]`
- `img[alt="Skittentøyskurver -50%"]`
- `img[alt="Dusjforheng -50%"]`
- `img[alt="Plissegardiner"]`
- `img[alt="Rullegardiner"]`
- `img[alt="Persienner"]`
- `img[alt="Måltilpasset solskjerming"]`
- `img[alt="Lameller"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 2

#### Affected Elements:

- `.a7[href$="krepp"][data-scope-link="true"]:nth-child(1)`
- `.bs.s[href$="krepp"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 6

#### Affected Elements:

- `a[aria-label="Gå til startside"]`
- `.dq`
- `.a > div:nth-child(4)`
- `.tf-header-slider`
- `.tf-sidebar`
- `#kindly-chat-api > div,.sc-pYNGo`
