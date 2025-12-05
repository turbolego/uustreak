# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-05T00:25:48.988Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 6

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- `#skattelisten, li:nth-child(1) > a[target="_top"]`
- `#skattelisten, li:nth-child(2) > a[target="_top"]`
- `#skattelisten, li:nth-child(3) > a[target="_top"]`
- `#skattelisten, li:nth-child(4) > a[target="_top"]`
- `#skattelisten, li:nth-child(5) > a[target="_top"]`
- `#skattelisten, li:nth-child(6) > a[target="_top"]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 6

#### Affected Elements:

- `#pBg0oG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oERRQW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar22Ex > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8l1n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjG6wb > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxlzGJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 225

#### Affected Elements:

- `#\34 B53r9 > .teaser-link > .teaser-image-wrapper`
- `#\34 B53r9 > .teaser-link > .container > .information`
- `#\34 B53r9 > .teaser-link > .container > h2`
- `#\34 B53r9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-51xxs1kma > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136978"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136978"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136978"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136988"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136988"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136988"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136975"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136975"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136975"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136957"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136957"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136957"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136952"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136952"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136952"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136951"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136951"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136951"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136940"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136940"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136940"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136930"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136930"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136930"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#BxVGQQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxVGQQ > .teaser-link > .container`
- `#skattelisten, .text`
- `#skattelisten, ol`
- `#skattelisten, #b4-tax-municipality-search`
- `#dr-edition-teaser-d7r8uvfai > div`
- `#Ex4gBj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ex4gBj > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#pBg0oG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBg0oG > .teaser-link > .container > h2`
- `#oERRQW > .teaser-link > .container > .text-wrapper-small`
- `#oERRQW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar22Ex > .teaser-link > .container > .text-wrapper-small`
- `#Ar22Ex > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMlxVW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#XMlxVW > .teaser-link > .container`
- `#\35 pV6vz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pV6vz > .teaser-link > .container`
- `.games-widget`
- `#XMlQbg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMlQbg > .teaser-link > .container`
- `#EyOzB2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EyOzB2 > .teaser-link > .container`
- `#e7WQq4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7WQq4 > .teaser-link > .container > .information`
- `#e7WQq4 > .teaser-link > .container > .illustration-container > .text`
- `#e7WQq4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#\31 6PAxq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PAxq > .teaser-link > .container`
- `#K8BQMX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8BQMX > .teaser-link > .container`
- `#XjGqvo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjGqvo > .teaser-link > .container`
- `#\34 Bnok9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 Bnok9 > .teaser-link > .container`
- `#oERpAm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oERpAm > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(27) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Av8l1n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8l1n > .teaser-link > .container > h2`
- `#XjG6wb > .teaser-link > .container > .text-wrapper-small`
- `#XjG6wb > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6nnao > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6nnao > .teaser-link > .container`
- `#pB6AaX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB6AaX > .teaser-link > .container`
- `#xmGEBj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGEBj > .teaser-link > .container`
- `img[alt="Færøyene åpner for fri abort"]`
- `#e71Kva > .teaser-link > .container`
- `#JOWjV8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWjV8 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(33) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\33 pkowX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pkowX > .teaser-link > .container > .illustration-container > .text`
- `#\33 pkowX > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#GxlzGJ > .teaser-link > .container > .text-wrapper-small`
- `#GxlzGJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.benefits-widget-container`
- `#wgMd84 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMd84 > .teaser-link > .container`
- `#e71KJK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e71KJK > .teaser-link > .container`
- `#GxljJl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxljJl > .teaser-link > .container`
- `#q6nAGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6nAGE > .teaser-link > .container`
- `#q6pApO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6pApO > .teaser-link > .container`
- `#zOLGJO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLGJO > .teaser-link > .container`
- `#gwX2JJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwX2JJ > .teaser-link > .container`
- `#JOWyV4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWyV4 > .teaser-link > .container`
- `#xrA1WR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrA1WR > .teaser-link > .container > .information`
- `#xrA1WR > .teaser-link > .container > h2`
- `#xrA1WR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Knut Jørgen Kopperud"]`
- `#q6nA2E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6nA2E > .teaser-link > .container`
- `#wrEPg5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEPg5 > .teaser-link > .container`
- `#V6RRjV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6RRjV > .teaser-link > .container`
- `#\36 3r5J3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3r5J3 > .teaser-link > .container`
- `#wrEEgn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEEgn > .teaser-link > .container`
- `#\38 pwmXx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwmXx > .teaser-link > .container`
- `#OkbKAq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbKAq > .teaser-link > .container`
- `#ExopWK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExopWK > .teaser-link > .container`
- `#xrA19G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrA19G > .teaser-link > .container`
- `#WvLbVg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLbVg > .teaser-link > .container`
- `#j0PdBn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0PdBn > .teaser-link > .container`
- `#\39 pmmL9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pmmL9 > .teaser-link > .container`
- `#\31 6PWeK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PWeK > .teaser-link > .container`
- `#k0WlAj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0WlAj > .teaser-link > .container > .information`
- `#k0WlAj > .teaser-link > .container > .illustration-container > .text`
- `#k0WlAj > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#OknnO3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OknnO3 > .teaser-link > .container`
- `#WvLbvQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLbvQ > .teaser-link > .container`
- `#aJ2wGL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ2wGL > .teaser-link > .container`
- `#Ar22A3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar22A3 > .teaser-link > .container`
- `#\34 B62z9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B62z9 > .teaser-link > .container`
- `#\32 p1nmq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1nmq > .teaser-link > .container`
- `#n1RdjQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1RdjQ > .teaser-link > .container`
- `#L40pp4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L40pp4 > .teaser-link > .container`
- `#\34 3jnyR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jnyR > .teaser-link > .container`
- `#XMlXJB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMlXJB > .teaser-link > .container`
- `#d4d5kB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4d5kB > .teaser-link > .container`
- `#xrA6zG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrA6zG > .teaser-link > .container`
- `#\33 pkla9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pkla9 > .teaser-link > .container > .information`
- `#\33 pkla9 > .teaser-link > .container > .illustration-container > .text`
- `#\33 pkla9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#OkbAyA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbAyA > .teaser-link > .container`
- `#\38 plgrQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 plgrQ > .teaser-link > .container`
- `#V6ly76 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6ly76 > .teaser-link > .container`
- `#zO5WlK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO5WlK > .teaser-link > .container`
- `#q6p0qE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6p0qE > .teaser-link > .container > .information`
- `#q6p0qE > .teaser-link > .container > h2`
- `#q6p0qE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tor Ketil Larsen "]`
- `#JOWmlj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWmlj > .teaser-link > .container > .information`
- `#JOWmlj > .teaser-link > .container > .illustration-container > .text`
- `#JOWmlj > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#\35 pJXv6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pJXv6 > .teaser-link > .container > .information`
- `#\35 pJXv6 > .teaser-link > .container > h2`
- `#\35 pJXv6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Elin Hoffmann Dahl"]`
- `#k0Wla9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Wla9 > .teaser-link > .container > .information`
- `#k0Wla9 > .teaser-link > .container > .kicker`
- `#k0Wla9 > .teaser-link > .container > h2`
- `#k0Wla9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Usman Asif"]`
- `#d45o9X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45o9X > .teaser-link > .container`
- `#\31 6P2EQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6P2EQ > .teaser-link > .container`
- `#\37 pn95V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pn95V > .teaser-link > .container`
- `#d450OX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d450OX > .teaser-link > .container > .information`
- `#d450OX > .teaser-link > .container > h2`
- `#d450OX > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Astrup Andreassen"]`
