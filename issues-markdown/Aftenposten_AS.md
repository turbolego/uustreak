# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-30T00:35:45.046Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 5

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 6

#### Affected Elements:

- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\30 pjym6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwBXg7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jQrE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y51Mke > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pnmJ9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 239

#### Affected Elements:

- `#aJ19QA > .teaser-link > .teaser-image-wrapper`
- `#aJ19QA > .teaser-link > .container > .illustration-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(1) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `#\35 pJ80E > .teaser-link > .teaser-image-wrapper`
- `#\35 pJ80E > .teaser-link > .container > .information`
- `#\35 pJ80E > .teaser-link > .container > .illustration-container > .text`
- `#\35 pJ80E > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#\38 plMAA`
- `#dr-edition-teaser-51xxs1kma > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `._preview_1bm9r_661[data-pulse-entity-id="reel-136904"][data-pulse-position-in-bundle="3"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661[data-pulse-entity-id="reel-136904"][data-pulse-position-in-bundle="3"] > a > ._preview-duration_1hg9u_384`
- `._preview_1bm9r_661[data-pulse-entity-id="reel-136904"][data-pulse-position-in-bundle="3"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136919"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136919"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136919"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136880"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136880"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136880"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136918"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136918"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136918"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-position-in-bundle="7"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-position-in-bundle="7"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-position-in-bundle="7"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136895"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136895"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136895"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136881"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136881"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136881"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#XMlQbg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMlQbg > .teaser-link > .container`
- `#KMO1P6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMO1P6 > .teaser-link > .container`
- `img[alt="Tar 229 kroner i returgebyr"]`
- `#pBg28o > .teaser-link > .container`
- `#gkaQAA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkaQAA > .teaser-link > .container > .information`
- `#gkaQAA > .teaser-link > .container > .illustration-container > .text`
- `#gkaQAA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Ingunn Økland"]`
- `#e7W49O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7W49O > .teaser-link > .container`
- `.games-widget`
- `#o3JAqW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JAqW > .teaser-link > .container`
- `#JbVxXP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbVxXP > .teaser-link > .container`
- `#GxlgyV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxlgyV > .teaser-link > .teaser-image-wrapper > .series-header`
- `#GxlgyV > .teaser-link > .container > .information`
- `#GxlgyV > .teaser-link > .container > h2`
- `#GxlgyV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Hanssen"]`
- `#k0Wd3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Wd3X > .teaser-link > .container`
- `#M7wr0E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7wr0E > .teaser-link > .container`
- `#vg4dE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .container`
- `#\38 pl8n2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pl8n2 > .teaser-link > .container`
- `#Av8l1n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8l1n > .teaser-link > .container`
- `#\37 399v3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 399v3 > .teaser-link > .container`
- `#\34 3jo1e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jo1e > .teaser-link > .container`
- `#q6p7ke > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6p7ke > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(28) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\30 pjym6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjym6 > .teaser-link > .container > h2`
- `#lwBXg7 > .teaser-link > .container > .text-wrapper-small`
- `#lwBXg7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jQrE > .teaser-link > .container > .text-wrapper-small`
- `#\34 3jQrE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLQQP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLQQP > .teaser-link > .container`
- `#JOW8om > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOW8om > .teaser-link > .container`
- `#Eydk5P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Eydk5P > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Eydk5P > .teaser-link > .container`
- `.benefits-widget-container`
- `#Arzxv5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arzxv5 > .teaser-link > .container > .information`
- `#Arzxv5 > .teaser-link > .container > h2`
- `#Arzxv5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Gule"]`
- `#o3JOjj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JOjj > .teaser-link > .container`
- `#\36 qw1AQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qw1AQ > .teaser-link > .container > .information`
- `#\36 qw1AQ > .teaser-link > .container > h2`
- `#\36 qw1AQ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Zoë van der Weel"]`
- `#OoLm8O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLm8O > .teaser-link > .container`
- `#\37 3X3QB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X3QB > .teaser-link > .container`
- `#ny5EVL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5EVL > .teaser-link > .container`
- `#JOWOdP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWOdP > .teaser-link > .container > .information`
- `#JOWOdP > .teaser-link > .container > .illustration-container > .text`
- `#JOWOdP > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kristin Storrusten"]`
- `#\38 q33xA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q33xA > .teaser-link > .container`
- `#dRgx1q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgx1q > .teaser-link > .container`
- `#lng2M3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lng2M3 > .teaser-link > .container`
- `#zO5Jd5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO5Jd5 > .teaser-link > .container`
- `#JOW2G7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOW2G7 > .teaser-link > .container > .information`
- `#JOW2G7 > .teaser-link > .container > h2`
- `#JOW2G7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mathias Fischer"]`
- `#j09QR9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j09QR9 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(46) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#y51Mke > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y51Mke > .teaser-link > .container > h2`
- `#\37 pnmJ9 > .teaser-link > .container > .text-wrapper-small`
- `#\37 pnmJ9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pnAOy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pnAOy > .teaser-link > .container`
- `#zO5JJv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO5JJv > .teaser-link > .container`
- `#\36 qw7qz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qw7qz > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(50)`
- `#d45b8J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45b8J > .teaser-link > .container`
- `#\31 6PedK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PedK > .teaser-link > .container`
- `#K8Bem7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8Bem7 > .teaser-link > .container > .information`
- `#K8Bem7 > .teaser-link > .container > h2`
- `#K8Bem7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nina F. Grünfeld"]`
- `img[alt="– Fargen endrer seg med lyset"]`
- `#Okb7xV > .teaser-link > .container`
- `#\39 plzWd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 plzWd > .teaser-link > .container`
- `#\30 pjO1B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjO1B > .teaser-link > .container`
- `#rrpJgm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrpJgm > .teaser-link > .container > .information`
- `#rrpJgm > .teaser-link > .container > .illustration-container > .text`
- `#rrpJgm > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#\34 3jXWa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jXWa > .teaser-link > .container`
- `img[alt="Woke er snart tilbake på moten"]`
- `#zO5xor > .teaser-link > .container > .information`
- `#zO5xor > .teaser-link > .container > .illustration-container > .text`
- `#zO5xor > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#\36 qw8QW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qw8QW > .teaser-link > .container`
- `#\36 qwdzL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qwdzL > .teaser-link > .container`
- `#\39 pld0W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pld0W > .teaser-link > .container`
- `#\37 pnGLK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pnGLK > .teaser-link > .container > .information`
- `#\37 pnGLK > .teaser-link > .container > .illustration-container > .text`
- `#\37 pnGLK > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#e7Ww7M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7Ww7M > .teaser-link > .container`
- `#Ey0O43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0O43 > .teaser-link > .container`
- `#PdrA0z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdrA0z > .teaser-link > .container > .information`
- `#PdrA0z > .teaser-link > .container > h2`
- `#PdrA0z > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Øystein Aurlien"]`
- `#VzO8dd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzO8dd > .teaser-link > .container`
- `#OkbAJ1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbAJ1 > .teaser-link > .container > .information`
- `#OkbAJ1 > .teaser-link > .container > h2`
- `#OkbAJ1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jon Helgheim"]`
- `#\36 3rbW8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3rbW8 > .teaser-link > .container`
- `#V6l2pV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6l2pV > .teaser-link > .container`
- `img[alt="Alt annet enn Krise"]`
- `#\36 qwMxL > .teaser-link > .container`
- `#\34 3jJKo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jJKo > .teaser-link > .container`
- `#lngWoM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lngWoM > .teaser-link > .container`
- `#\36 qwjb8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qwjb8 > .teaser-link > .container`
- `#L4pQ8Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4pQ8Q > .teaser-link > .container`
- `#m0gajp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gajp > .teaser-link > .container > .information`
- `#m0gajp > .teaser-link > .container > h2`
- `#m0gajp > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jørgen Flor"]`
- `#L4pql4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4pql4 > .teaser-link > .container`
- `#\31 6Prdl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6Prdl > .teaser-link > .container`
- `#j09lmq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j09lmq > .teaser-link > .container`
- `#kwq2KX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwq2KX > .teaser-link > .container > .information`
- `#kwq2KX > .teaser-link > .container > h2`
- `#kwq2KX > .teaser-link > .container > .byline > div:nth-child(1)`
- `#kwq2KX > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\34 3jX2G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jX2G > .teaser-link > .container`
- `#JOWg2J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWg2J > .teaser-link > .container`
- `#\38 plodd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 plodd > .teaser-link > .container`
