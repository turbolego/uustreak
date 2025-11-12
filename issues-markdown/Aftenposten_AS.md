# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-12T00:30:13.858Z
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
- **Count:** 8

#### Affected Elements:

- `#\32 5MnXy > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#lw8aoL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OowPLk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyp61J > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BnG5G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="BBC trumpet i klaveret"]`
- `#lw899k > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 236

#### Affected Elements:

- `#Ey0wl3 > .teaser-link > .teaser-image-wrapper`
- `#Ey0wl3 > .teaser-link > .container > .information`
- `#Ey0wl3 > .teaser-link > .container > .kicker`
- `#Ey0wl3 > .teaser-link > .container > h2`
- `#Ey0wl3 > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-gy543x5na > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\32 5MnXy > .teaser-link > .teaser-image-wrapper`
- `#\32 5MnXy > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136595"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136595"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136595"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136524"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136524"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136524"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136579"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136579"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136579"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136581"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136581"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136581"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136525"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136525"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136525"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136557"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136557"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136557"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136551"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136551"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136551"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136507"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136507"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136507"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136515"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136515"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136515"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136498"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136498"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136498"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.double.teaser-wrapper:nth-child(7)`
- `#mPGX34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGX34 > .teaser-link > .container`
- `#dr-edition-teaser-8bmdcyl2 > div`
- `#kw4736 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw4736 > .teaser-link > .container`
- `#lw8aoL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw8aoL > .teaser-link > .container > h2`
- `#LMyQl1 > .teaser-link > .container > .text-wrapper-small`
- `#LMyQl1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Halvor Hegtun"][width="94"][height="94"]`
- `#xmxpw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmxpw8 > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#OowPLk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OowPLk > .teaser-link > .container > h2`
- `#Gyp61J > .teaser-link > .container > .text-wrapper-small`
- `#Gyp61J > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alr3WL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alr3WL > .teaser-link > .container`
- `#Rz3X75 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rz3X75 > .teaser-link > .container`
- `#lw8bm9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw8bm9 > .teaser-link > .container > .information`
- `#lw8bm9 > .teaser-link > .container > h2`
- `#lw8bm9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ole Christian Emaus"]`
- `#eM2bBM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2bBM > .teaser-link > .container`
- `#vgvVwj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvVwj > .teaser-link > .container > .information`
- `#vgvVwj > .teaser-link > .container > .illustration-container > .text`
- `#vgvVwj > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#vgvVwj > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#Mnx3PK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mnx3PK > .teaser-link > .container`
- `#dRon0q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRon0q > .teaser-link > .container`
- `#\35 EAMGb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAMGb > .teaser-link > .container`
- `#bm96mg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm96mg > .teaser-link > .container`
- `#kwqxPk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqxPk > .teaser-link > .container`
- `#\34 B6XaE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6XaE > .teaser-link > .container`
- `#\34 BnbBR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BnbBR > .teaser-link > .container`
- `#lw7Lye > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7Lye > .teaser-link > .container`
- `#\33 MLeeq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLeeq > .teaser-link > .container`
- `#\35 E1xz1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1xz1 > .teaser-link > .container`
- `.benefits-widget-container`
- `#\39 3gbKW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3gbKW > .teaser-link > .container`
- `#wgykj5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgykj5 > .teaser-link > .container > .information`
- `#wgykj5 > .teaser-link > .container > h2`
- `#wgykj5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristian Gundersen"]`
- `#B0o9y0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0o9y0 > .teaser-link > .container`
- `#QMpKwq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMpKwq > .teaser-link > .container`
- `#eMAGB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMAGB4 > .teaser-link > .container`
- `#KMEqjX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMEqjX > .teaser-link > .container`
- `#rPvOmw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPvOmw > .teaser-link > .container > .information`
- `#rPvOmw > .teaser-link > .container > h2`
- `#rPvOmw > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kaveh Rashidi"]`
- `#pP0EM1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP0EM1 > .teaser-link > .container`
- `#\34 BnlKa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BnlKa > .teaser-link > .container`
- `#Gyvaw4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyvaw4 > .teaser-link > .container > .information`
- `#Gyvaw4 > .teaser-link > .container > .illustration-container > .text`
- `#Gyvaw4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#Pp6w4X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6w4X > .teaser-link > .container`
- `#MnxXdM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnxXdM > .teaser-link > .container`
- `#\38 qbVWG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qbVWG > .teaser-link > .container`
- `#W04WQr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W04WQr > .teaser-link > .container`
- `#zAR8a1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAR8a1 > .teaser-link > .container`
- `#\33 MLBwA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLBwA > .teaser-link > .container`
- `#alrva4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alrva4 > .teaser-link > .container`
- `#JbPq54 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPq54 > .teaser-link > .container`
- `#B07kdE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B07kdE > .teaser-link > .container`
- `#VzOL51 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOL51 > .teaser-link > .container`
- `#Mnxae5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mnxae5 > .teaser-link > .container`
- `#Av8Bdn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8Bdn > .teaser-link > .container`
- `#OoRQ9O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoRQ9O > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(54) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\34 BnG5G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BnG5G > .teaser-link > .container > h2`
- `#Av8Xkq > .teaser-link > .container > .text-wrapper-small`
- `#Av8Xkq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(55) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="BBC trumpet i klaveret"]`
- `#dRgp8q > .teaser-link > .container > h2`
- `#lw899k > .teaser-link > .container > .text-wrapper-small`
- `#lw899k > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Åsne Seierstad vant gjev pris"]`
- `#\34 BnQXV > .teaser-link > .container`
- `#bm9qrg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9qrg > .teaser-link > .container > .information`
- `#bm9qrg > .teaser-link > .container > .illustration-container > .text`
- `#bm9qrg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#Pp6qlp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6qlp > .teaser-link > .container > .information`
- `#Pp6qlp > .teaser-link > .container > h2`
- `#Pp6qlp > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anki Gerhardsen"]`
- `#kwAdJ6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#kwAdJ6 > .teaser-link > .container`
- `#xmxbK8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmxbK8 > .teaser-link > .container`
- `#Mnxpv0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mnxpv0 > .teaser-link > .container > .information`
- `#Mnxpv0 > .teaser-link > .container > .illustration-container > .text`
- `#Mnxpv0 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#bm9qOv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9qOv > .teaser-link > .container`
- `#zARABO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARABO > .teaser-link > .container`
- `#o3JVPV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JVPV > .teaser-link > .container`
- `img[alt="Ung, sint og morsom"]`
- `#o3JnVg > .teaser-link > .container`
- `#bm9dgv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9dgv > .teaser-link > .container`
- `#\30 VwkJG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VwkJG > .teaser-link > .container > .information`
- `#\30 VwkJG > .teaser-link > .container > h2`
- `#\30 VwkJG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erik Johannes Husom"]`
- `#\37 3X7pB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X7pB > .teaser-link > .container`
- `#jQVbQn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVbQn > .teaser-link > .container`
- `#rPvbj0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPvbj0 > .teaser-link > .container`
- `#\31 MQdRK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MQdRK > .teaser-link > .container`
- `#KME1jE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KME1jE > .teaser-link > .container`
- `#\32 5Rxxr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Rxxr > .teaser-link > .container`
- `#OoRqjE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoRqjE > .teaser-link > .container > .information`
- `#OoRqjE > .teaser-link > .container > h2`
- `#OoRqjE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Trond Methi"]`
- `#qP2mze > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2mze > .teaser-link > .container`
- `#\32 5MJrB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5MJrB > .teaser-link > .container`
- `#\38 qb7rx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qb7rx > .teaser-link > .container`
- `#LMymVp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMymVp > .teaser-link > .container > .information`
- `#LMymVp > .teaser-link > .container > .illustration-container > .text`
- `#LMymVp > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#LMymVp > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#bm9X43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9X43 > .teaser-link > .container > .information`
- `#bm9X43 > .teaser-link > .container > h2`
- `#bm9X43 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#bm9X43 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
