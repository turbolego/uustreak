# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2026-03-04T18:31:23.854Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.f4`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ip.is-selected.g1:nth-child(1) > .c.bz.c4 > .ca.ao[data-test-id="product-link"] > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `.gp > .fe.ff.el`
- `.gq > .fe.ff.el`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 13

#### Affected Elements:

- `img[alt="Alle sengesett 2 for 1"]`
- `img[alt="Alle fiberdyner & puter 50%"]`
- `img[alt="Alle putevar 2 for 1"]`
- `img[alt="Sommerdyne fra 299,-"]`
- `img[alt="Alle laken 2 for 1"]`
- `img[alt="Krepp sengesett fra 199,-"]`
- `img[alt="Alle senger 30%"]`
- `img[alt="--->"]`
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
- **Count:** 4

#### Affected Elements:

- `.a7[href$="paske"][data-scope-link="true"]:nth-child(1)`
- `.ca.c8[href$="paske"]`
- `div:nth-child(13) > .fa.f9.bv > .bl.dd.bz > .a7.a5.a6:nth-child(1)`
- `div:nth-child(13) > .fa.f9.bv > .bl.dd.bz > .ca.c8.cc`

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
