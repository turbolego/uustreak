# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2025-10-29T00:39:38.851Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 5

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `#kindly-chat-api > div,.sc-koBvLg`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 6

#### Affected Elements:

- `.ep > span`
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

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 26

#### Affected Elements:

- `img[alt="Sengesett 50%"]`
- `img[alt="Dyner og puter 50%"]`
- `img[alt="Baderomstilbehør 50%"]`
- `img[alt="Kjøkkenvarer 50%"]`
- `img[alt="Interiør 50%"]`
- `img[alt="Borddekking 50%"]`
- `img[alt="Pynteputer 50%"]`
- `img[alt="Pledd 50%"]`
- `img[alt="Kalendergavetips!"]`
- `img[alt="Julesengetøy"]`
- `img[alt="Juleputer"]`
- `img[alt="Adventsbelysning"]`
- `img[alt="Julekranser"]`
- `img[alt="Julelykter & lys"]`
- `img[alt="Julegaveinnpakning"]`
- `img[alt="Julepynt"]`
- `img[alt="Julestrømper"]`
- `img[alt="Sofa"]`
- `img[alt="Småbord og sofabord"]`
- `img[alt="Gulvtepper"]`
- `img[alt="Spisestoler"]`
- `img[alt="Lenestoler"]`
- `img[alt="Puffer, krakker og benker"]`
- `img[alt="Hyller"]`
- `img[alt="Spisebord"]`
- `img[alt="Skap og skjenker"]`

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
- `#kindly-chat-api > div,.sc-dNFkOE`
