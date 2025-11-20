# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2025-11-20T00:34:35.546Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 7

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

- `.gj > .fe.ff.el`
- `.a7[href$="mobler"][data-scope-link="true"]:nth-child(1) > .fd.fc.fb > .fe.ff.el`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 36

#### Affected Elements:

- `img[alt="50% på alle varer*"]`
- `img[alt="Sengesett"]`
- `img[alt="Alt til jul"]`
- `img[alt="Puter og pledd"]`
- `img[alt="Baderom"]`
- `img[alt="Kjøkkenvarer"]`
- `img[alt="Borddekking"]`
- `img[alt="Gardiner"]`
- `img[alt="Interiør"]`
- `img[alt="Dyner"]`
- `img[alt="Se alle produkter"]`
- `img[alt="Loungewear og accesoarer"]`
- `img[alt="Sofa"]`
- `img[alt="Småbord og sofabord"]`
- `img[alt="Gulvtepper"]`
- `img[alt="Spisestoler"]`
- `img[alt="Lenestoler"]`
- `img[alt="Puffer, krakker og benker"]`
- `img[alt="Hyller"]`
- `img[alt="Spisebord"]`
- `img[alt="Skap og skjenker"]`
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

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `.a7[href$="black-week"][data-scope-link="true"]:nth-child(1)`
- `.ca.s[href$="black-week"]`
- `.a7[href$="mobler"][data-scope-link="true"]:nth-child(1)`
- `.ca.s[href$="mobler"]`

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
