# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-14T00:21:43.379Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 6

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `img[srcset=""]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 2

#### Affected Elements:

- `#al5052 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4GEX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 246

#### Affected Elements:

- `#\39 3yLjE > .teaser-link > .teaser-image-wrapper`
- `#\39 3yLjE > .teaser-link > .container > .information`
- `#\39 3yLjE > .teaser-link > .container > .illustration-container > .text`
- `#\39 3yLjE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-ly91k9s9f > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136069"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136069"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136069"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136041"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136041"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136041"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136040"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136040"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136040"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136030"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136030"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136030"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136026"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136026"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136026"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136004"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136004"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136004"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136007"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136007"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136007"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-135988"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-135988"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-135988"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-135984"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-135984"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-135984"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-135978"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-135978"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-135978"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#kw7o59 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw7o59 > .teaser-link > .container`
- `#dr-edition-teaser-0eqpf52sa > div`
- `#pPo5z1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPo5z1 > .teaser-link > .container`
- `#OoG2bA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG2bA > .teaser-link > .container > .illustration-container > .text`
- `#OoG2bA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#al5052 > .teaser-link > .container > .text-wrapper-small`
- `#al5052 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4GEX > .teaser-link > .container > .text-wrapper-small`
- `#vg4GEX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPBr4l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPBr4l > .teaser-link > .container`
- `.games-widget`
- `#KMJL75 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMJL75 > .teaser-link > .container`
- `#\32 5Q2nG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Q2nG > .teaser-link > .container`
- `#\34 B5KyR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B5KyR > .teaser-link > .container`
- `#zAv6v4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAv6v4 > .teaser-link > .container`
- `img[alt="Davos-mannens fall"]`
- `#VzKpO4 > .teaser-link > .container > .information__e24.information`
- `#VzKpO4 > .teaser-link > .container > h2`
- `#VzKpO4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Torbjørn Røe Isaksen"]`
- `#wgwpQo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgwpQo > .teaser-link > .container`
- `#\36 3mvz0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mvz0 > .teaser-link > .container`
- `#Jbzqr7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Jbzqr7 > .teaser-link > .container`
- `#RzJw1x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJw1x > .teaser-link > .container`
- `#VzAqe3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzAqe3 > .teaser-link > .container`
- `#OoG2jE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG2jE > .teaser-link > .container > .information`
- `#OoG2jE > .teaser-link > .container > h2`
- `#OoG2jE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Abid Raja"]`
- `#Mn47XM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn47XM > .teaser-link > .container`
- `#W0EBbK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W0EBbK > .teaser-link > .container`
- `#XjvLax > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjvLax > .teaser-link > .container`
- `#KMOGyX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMOGyX > .teaser-link > .container > .information`
- `#KMOGyX > .teaser-link > .container > .illustration-container > .text`
- `#KMOGyX > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"][width="128"][height="128"]`
- `.benefits-widget-container`
- `#lwpWPe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwpWPe > .teaser-link > .container`
- `#jQRyOw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQRyOw > .teaser-link > .container`
- `#\37 3EMgv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3EMgv > .teaser-link > .container > .information`
- `#\37 3EMgv > .teaser-link > .container > h2`
- `#\37 3EMgv > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\37 3EMgv > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\34 B9LXR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B9LXR > .teaser-link > .container`
- `#wg7LjL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wg7LjL > .teaser-link > .container`
- `#zAvAK9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAvAK9 > .teaser-link > .container`
- `#Ppk25e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ppk25e > .teaser-link > .container > .information`
- `#Ppk25e > .teaser-link > .container > h2`
- `#Ppk25e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Benedicte Bull"]`
- `#\35 E1k5O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1k5O > .teaser-link > .container`
- `#vg0a5m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg0a5m > .teaser-link > .container`
- `#zAdwXr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdwXr > .teaser-link > .container`
- `#VzKrvW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzKrvW > .teaser-link > .container`
- `#\36 3m1BQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3m1BQ > .teaser-link > .container`
- `#o3jy4j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jy4j > .teaser-link > .container`
- `#o3jzEg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jzEg > .teaser-link > .container`
- `#XjvOGb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjvOGb > .teaser-link > .container`
- `#B0Ax4e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Ax4e > .teaser-link > .container`
- `#\37 32MOK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 32MOK > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(49)`
- `#xmGykG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGykG > .teaser-link > .container`
- `#\37 3Egp9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Egp9 > .teaser-link > .container`
- `#\31 M1WVJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 M1WVJ > .teaser-link > .container`
- `#dRxkpo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRxkpo > .teaser-link > .container`
- `#bmyanA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmyanA > .teaser-link > .container`
- `#Gy4JBJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gy4JBJ > .teaser-link > .container`
- `#kw2gLX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw2gLX > .teaser-link > .container > .information`
- `#kw2gLX > .teaser-link > .container > h2`
- `#kw2gLX > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Inga Strümke"]`
- `#jQ6xmb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ6xmb > .teaser-link > .container`
- `#\33 MWomL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWomL > .teaser-link > .container`
- `#ny3lKx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny3lKx > .teaser-link > .container`
- `#LM2PgV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LM2PgV > .teaser-link > .container`
- `#bmR0z5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmR0z5 > .teaser-link > .container`
- `#OoGg3A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGg3A > .teaser-link > .container`
- `#\38 qnVGx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qnVGx > .teaser-link > .container`
- `#al5eG2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#al5eG2 > .teaser-link > .container > .information`
- `#al5eG2 > .teaser-link > .container > h2`
- `#al5eG2 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marianne Dahl"]`
- `#xmGz8p > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGz8p > .teaser-link > .teaser-image-wrapper > .series-header`
- `#xmGz8p > .teaser-link > .container`
- `#JbVOgJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbVOgJ > .teaser-link > .container > .information`
- `#JbVOgJ > .teaser-link > .container > .illustration-container > .text`
- `#JbVOgJ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#ny3nzJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny3nzJ > .teaser-link > .container`
- `#KMdK15 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMdK15 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#KMdK15 > .teaser-link > .container`
- `#\38 qr9e2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qr9e2 > .teaser-link > .container > .information`
- `#\38 qr9e2 > .teaser-link > .container > h2`
- `#\38 qr9e2 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Robert Næss"]`
- `#mPXakp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPXakp > .teaser-link > .teaser-image-wrapper > .series-header`
- `#mPXakp > .teaser-link > .container > .information`
- `#mPXakp > .teaser-link > .container > .illustration-container > .text`
- `#mPXakp > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#qP2XxL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2XxL > .teaser-link > .container`
- `#LM8q79 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LM8q79 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#LM8q79 > .teaser-link > .container`
- `#\34 B5vOG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B5vOG > .teaser-link > .container`
- `#rPBVBa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPBVBa > .teaser-link > .container > .information`
- `#rPBVBa > .teaser-link > .container > h2`
- `#rPBVBa > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Henrik Vogt"]`
- `#yEky82 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEky82 > .teaser-link > .container`
- `#OoGEyb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGEyb > .teaser-link > .container > .information`
- `#OoGEyb > .teaser-link > .container > .illustration-container > .text`
- `#OoGEyb > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Hilde Østby"]`
- `img[alt="Donald Trump, can you hear us?"]`
- `#OoGPJA > .teaser-link > .container`
- `#\33 MWVpA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWVpA > .teaser-link > .container > .information`
- `#\33 MWVpA > .teaser-link > .container > h2`
- `#\33 MWVpA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Igor Bondar"]`
- `#pP3bGw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP3bGw > .teaser-link > .container`
- `#rPBeKm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPBeKm > .teaser-link > .container`
- `#bmyWRA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmyWRA > .teaser-link > .container`
- `#al5L2d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#al5L2d > .teaser-link > .container`
- `#xmGVqQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGVqQ > .teaser-link > .container`
- `#\37 3Eqew > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Eqew > .teaser-link > .container > .information`
- `#\37 3Eqew > .teaser-link > .container > h2`
- `#\37 3Eqew > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Geir Egil Bergjord  "]`
- `img[alt="Talen satte ny rekord"]`
- `#mPXaxq > .teaser-link > .container > .information`
- `#mPXaxq > .teaser-link > .container > .illustration-container > .text`
- `#mPXaxq > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
