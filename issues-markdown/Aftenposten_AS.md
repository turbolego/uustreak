# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-11T00:23:55.234Z
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
- **Count:** 4

#### Affected Elements:

- `#kw4xnL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLQqE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARezb > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9aBq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 230

#### Affected Elements:

- `#bm9qrg > .teaser-link > .teaser-image-wrapper`
- `#bm9qrg > .teaser-link > .container > .information`
- `#bm9qrg > .teaser-link > .container > .illustration-container > .text`
- `#bm9qrg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#Mnxpv0 > .teaser-link > .teaser-image-wrapper`
- `#Mnxpv0 > .teaser-link > .container > .information`
- `#Mnxpv0 > .teaser-link > .container > .illustration-container > .text`
- `#Mnxpv0 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#GyvenJ`
- `._heading_1bm9r_641`
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
- `article[data-pulse-entity-id="reel-136500"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136500"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136500"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#mPGX34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGX34 > .teaser-link > .container`
- `#bm9qOv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9qOv > .teaser-link > .container`
- `#dr-edition-teaser-q9030iujt > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#kwAdJ6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAdJ6 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#kwAdJ6 > .teaser-link > .container > h2`
- `#pP0MJo > .teaser-link > .container > .text-wrapper-small`
- `#pP0MJo > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Christian Jensen"]`
- `#B07kdE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B07kdE > .teaser-link > .container`
- `#OowPLk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OowPLk > .teaser-link > .container`
- `.games-widget`
- `#eM2bBM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2bBM > .teaser-link > .container`
- `#zARABO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARABO > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(19) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#kw4xnL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw4xnL > .teaser-link > .container > h2`
- `#OoLQqE > .teaser-link > .container > .text-wrapper-small`
- `#OoLQqE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9dgv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9dgv > .teaser-link > .container`
- `#Pp6w4X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6w4X > .teaser-link > .container`
- `#qPKbkO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPKbkO > .teaser-link > .container`
- `#\31 MmE0B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MmE0B > .teaser-link > .container`
- `#xmxbK8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmxbK8 > .teaser-link > .container`
- `#Mnx3PK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mnx3PK > .teaser-link > .container`
- `#Pp6qlp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6qlp > .teaser-link > .container > .information`
- `#Pp6qlp > .teaser-link > .container > h2`
- `#Pp6qlp > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anki Gerhardsen"]`
- `#o3JVPV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JVPV > .teaser-link > .container`
- `#\37 3X7pB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X7pB > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(31) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Av8Xkq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8Xkq > .teaser-link > .container > h2`
- `#Av8Xkq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#zARezb > .teaser-link > .container > .text-wrapper-small`
- `#zARezb > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9aBq > .teaser-link > .container > .text-wrapper-small`
- `#bm9aBq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgbAo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgbAo > .teaser-link > .container`
- `.benefits-widget-container`
- `#B05oQl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05oQl > .teaser-link > .container`
- `#\30 VwkJG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VwkJG > .teaser-link > .container > .information`
- `#\30 VwkJG > .teaser-link > .container > h2`
- `#\30 VwkJG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erik Johannes Husom"]`
- `#Av63jE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av63jE > .teaser-link > .container`
- `#rPvbj0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPvbj0 > .teaser-link > .container`
- `#\35 EA9we > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EA9we > .teaser-link > .container`
- `#\31 MQdRK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MQdRK > .teaser-link > .container`
- `#Ey3JJ2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey3JJ2 > .teaser-link > .container`
- `#OoRqjE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoRqjE > .teaser-link > .container > .information`
- `#OoRqjE > .teaser-link > .container > h2`
- `#OoRqjE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Trond Methi"]`
- `#\32 5Rxxr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Rxxr > .teaser-link > .container`
- `#jQVbQn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVbQn > .teaser-link > .container`
- `#qP2mze > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2mze > .teaser-link > .container`
- `img[alt="Ung, sint og morsom"]`
- `#o3JnVg > .teaser-link > .container`
- `#kwqXWv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqXWv > .teaser-link > .container`
- `#KME1jE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KME1jE > .teaser-link > .container`
- `#LMymVp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMymVp > .teaser-link > .container > .information`
- `#LMymVp > .teaser-link > .container > .illustration-container > .text`
- `#LMymVp > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#\32 5MJrB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5MJrB > .teaser-link > .container`
- `#rPvXKw > .teaser-link > .container > .text-wrapper-small`
- `#rPvXKw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W04knj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W04knj > .teaser-link > .container > .information`
- `#W04knj > .teaser-link > .container > h2`
- `#W04knj > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ina Blom"]`
- `#qPKbVo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPKbVo > .teaser-link > .container`
- `#dRgrQo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgrQo > .teaser-link > .container`
- `#lw899k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw899k > .teaser-link > .container`
- `img[alt="Trekker seg fra Etikkrådet"]`
- `#bm9oEg > .teaser-link > .container`
- `#bm9X43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9X43 > .teaser-link > .container > .information`
- `#bm9X43 > .teaser-link > .container > h2`
- `#bm9X43 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#bm9X43 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\38 qb7rx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qb7rx > .teaser-link > .container`
- `#bm97Je > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm97Je > .teaser-link > .container`
- `#\37 39Vj3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39Vj3 > .teaser-link > .container`
- `#Ey0ql5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0ql5 > .teaser-link > .container`
- `#eMlyjg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlyjg > .teaser-link > .container`
- `#VzOx0r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOx0r > .teaser-link > .container > .information`
- `#VzOx0r > .teaser-link > .container > h2`
- `#VzOx0r > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Einar Lie"]`
- `#Eydey3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Eydey3 > .teaser-link > .container`
- `#W04OWL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W04OWL > .teaser-link > .container`
- `#W04xXa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W04xXa > .teaser-link > .container`
- `#XjG49W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjG49W > .teaser-link > .teaser-image-wrapper > .series-header`
- `#XjG49W > .teaser-link > .container`
- `#\30 Vw90G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 Vw90G > .teaser-link > .container > .information`
- `#\30 Vw90G > .teaser-link > .container > h2`
- `#\30 Vw90G > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ervin Kohn"]`
- `#PpV2JR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpV2JR > .teaser-link > .container`
- `#Eydk5P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Eydk5P > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Eydk5P > .teaser-link > .container`
- `#W095wd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W095wd > .teaser-link > .container`
- `#xmx9oQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmx9oQ > .teaser-link > .container`
- `#lw8eMA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw8eMA > .teaser-link > .container`
- `#Pp6jWe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6jWe > .teaser-link > .container`
- `#lw7ER9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7ER9 > .teaser-link > .container`
- `#LMvg79 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvg79 > .teaser-link > .container`
- `#kw278X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw278X > .teaser-link > .container`
- `#JbKPdb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKPdb > .teaser-link > .container`
- `#\33 MLB4P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLB4P > .teaser-link > .container`
- `#eMl6OO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMl6OO > .teaser-link > .container`
- `#wgMyL4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMyL4 > .teaser-link > .container > .information`
- `#wgMyL4 > .teaser-link > .container > .illustration-container > .text`
- `#wgMyL4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#xmxPKl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmxPKl > .teaser-link > .container`
- `#RzPeAJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzPeAJ > .teaser-link > .container`
- `#Pp60q0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp60q0 > .teaser-link > .container`
