# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2026-02-23T00:43:01.520Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 6

## Violation Details

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
- **Count:** 1

#### Affected Elements:

- `#ot-bnr-hdr-id-C0001`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `.gx > .fe.ff.el`
- `div:nth-child(18) > .fa.f9.bv > .bl.dd.bz > .a7.a5[data-scope-link="true"]:nth-child(1) > .fw.fc.fb > .fe.ff.el`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 15

#### Affected Elements:

- `.ca.s[href$="baderom"] > .gj.da.dd > .en.gf[alt="--->"]`
- `img[alt="Baderomstilbehør"]`
- `img[alt="Morgenkåper"]`
- `img[alt="Loungewear & accessories"]`
- `a[href$="velvare"] > .gj.da.dd > .en.gf.a3`
- `img[alt="Skjønnhetstilbehør"]`
- `img[alt="Såper og kremer"]`
- `img[alt="Mengder av håndklær 50%"]`
- `img[alt="Toalettmapper"]`
- `.ca.s[href$="belysning"] > .gj.da.dd > .en.gf[alt="--->"]`
- `img[alt="Lamper i valnøtt"]`
- `img[alt="Lamper i frostet glass"]`
- `img[alt="Lamper i tekstiler"]`
- `img[alt="Lamper med glossy finish"]`
- `img[alt="Strålamper"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `div:nth-child(18) > .fa.f9.bv > .bl.dd.bz > .a7.a5[data-scope-link="true"]:nth-child(1)`
- `div:nth-child(18) > .fa.f9.bv > .bl.dd.bz > .ca.s.c9`

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
- `#kindly-chat-api > div,.sc-cbelXf`
