# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-17T00:23:46.861Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 5

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
- **Count:** 248

#### Affected Elements:

- `#GyoVOq > .teaser-link > .teaser-image-wrapper`
- `#GyoVOq > .teaser-link > .container > .information`
- `#GyoVOq > .teaser-link > .container > h2`
- `#GyoVOq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#vg4MQ4`
- `#B0A9gQ > .teaser-link > .teaser-image-wrapper`
- `#B0A9gQ > .teaser-link > .container > .information`
- `#B0A9gQ > .teaser-link > .container > .illustration-container > .text`
- `#B0A9gQ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#gwgqy1 > .teaser-link > .teaser-image-wrapper`
- `#gwgqy1 > .teaser-link > .container > .information`
- `#gwgqy1 > .teaser-link > .container > h2`
- `#gwgqy1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#gwgqy1 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#dr-edition-teaser-5gwig8w0 > div`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136161"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136161"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136161"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136155"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136155"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136155"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136067"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136067"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136067"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136137"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136137"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136137"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136116"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136116"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136116"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136126"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136126"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136126"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136107"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136107"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136107"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136083"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136083"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136083"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136111"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136111"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136111"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136069"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136069"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136069"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#kw7o59 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw7o59 > .teaser-link > .container`
- `#\34 B52oa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B52oa > .teaser-link > .container`
- `#dr-edition-teaser-fxop0oyhj > div`
- `#\37 3E2gV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3E2gV > .teaser-link > .container`
- `#\31 MKd4K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MKd4K > .teaser-link > .container`
- `#RzJ62a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJ62a > .teaser-link > .container`
- `#vgaL2w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgaL2w > .teaser-link > .container`
- `.games-widget`
- `#VzK7lV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzK7lV > .teaser-link > .container`
- `#\32 5Q2nG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Q2nG > .teaser-link > .container`
- `#GyoAl9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyoAl9 > .teaser-link > .container > .information`
- `#GyoAl9 > .teaser-link > .container > h2`
- `#GyoAl9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Trond Norén Isaksen"]`
- `#KMJL75 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMJL75 > .teaser-link > .container`
- `#lwpqvo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwpqvo > .teaser-link > .container`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `#Ey3Gyl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey3Gyl > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Ey3Gyl > .teaser-link > .container`
- `#\39 39A2l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 39A2l > .teaser-link > .container`
- `#\37 3Ere4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Ere4 > .teaser-link > .container`
- `#o3jmRB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jmRB > .teaser-link > .container`
- `#\37 3EVvB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3EVvB > .teaser-link > .container`
- `#qP25mE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP25mE > .teaser-link > .container`
- `.container-linear-gradient`
- `.container-darken`
- `#vg4RaX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4RaX > .teaser-link > .container`
- `#Ey7mKa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey7mKa > .teaser-link > .container`
- `.benefits-widget-container`
- `#\37 3E8LK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3E8LK > .teaser-link > .container`
- `#jQRvrw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQRvrw > .teaser-link > .container`
- `#kwAvmk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAvmk > .teaser-link > .container`
- `#QM1JOV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QM1JOV > .teaser-link > .container`
- `#kwAL9L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAL9L > .teaser-link > .container > .information`
- `#kwAL9L > .teaser-link > .container > h2`
- `#kwAL9L > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Charles Petterson"]`
- `#zAn15q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAn15q > .teaser-link > .container`
- `#ny36Wx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny36Wx > .teaser-link > .container`
- `img[alt="Litt tykkhudet må man være"]`
- `#qP29om > .teaser-link > .container > .information`
- `#qP29om > .teaser-link > .container > .illustration-container > .text`
- `#qP29om > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#qP29om > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#Ey3VLK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey3VLK > .teaser-link > .container`
- `#qP29wE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP29wE > .teaser-link > .container > .information`
- `#qP29wE > .teaser-link > .container > .kicker`
- `#qP29wE > .teaser-link > .container > h2`
- `#qP29wE > .teaser-link > .container > .byline > div:nth-child(1)`
- `#qP29wE > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#kwAgB9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAgB9 > .teaser-link > .container > .information`
- `#kwAgB9 > .teaser-link > .container > .kicker`
- `#kwAgB9 > .teaser-link > .container > h2`
- `#kwAgB9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#kwAgB9 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#bmyg4l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmyg4l > .teaser-link > .container > .information`
- `#bmyg4l > .teaser-link > .container > h2`
- `#bmyg4l > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ketil Slagstad"]`
- `#\36 3mJj8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mJj8 > .teaser-link > .container > .information`
- `#\36 3mJj8 > .teaser-link > .container > h2`
- `#\36 3mJj8 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Maria Bakken"]`
- `#\31 M1Jyl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 M1Jyl > .teaser-link > .container`
- `#bmy07d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy07d > .teaser-link > .container`
- `#zAdBvK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdBvK > .teaser-link > .teaser-image-wrapper > .series-header`
- `#zAdBvK > .teaser-link > .container`
- `#qP2qX1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2qX1 > .teaser-link > .container`
- `#Av6Enq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6Enq > .teaser-link > .container > .information`
- `#Av6Enq > .teaser-link > .container > h2`
- `#Av6Enq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingjerd Schie Schou"]`
- `#lwpqbG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwpqbG > .teaser-link > .container`
- `#\30 VMBzE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMBzE > .teaser-link > .container`
- `#lwpemM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwpemM > .teaser-link > .container`
- `#GyodQJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyodQJ > .teaser-link > .container`
- `#Ppk19z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ppk19z > .teaser-link > .container`
- `.text-wrapper-small`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRxK9o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRxK9o > .teaser-link > .container`
- `#\34 B5p4V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B5p4V > .teaser-link > .container`
- `#Xjv0Qm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Xjv0Qm > .teaser-link > .container`
- `#GyoW4B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyoW4B > .teaser-link > .container`
- `#wg70Rn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wg70Rn > .teaser-link > .container > .information`
- `#wg70Rn > .teaser-link > .container > h2`
- `#wg70Rn > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
- `.fullwidth.teaser-wrapper:nth-child(56)`
- `#dRxKqq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRxKqq > .teaser-link > .container`
- `#pPo8dE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPo8dE > .teaser-link > .container`
- `#mPXbeE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPXbeE > .teaser-link > .container > .information`
- `#mPXbeE > .teaser-link > .container > .illustration-container > .text`
- `#mPXbeE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#dRxAwO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRxAwO > .teaser-link > .container`
- `#VzKnb4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzKnb4 > .teaser-link > .container`
- `#zAvpob > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAvpob > .teaser-link > .container`
- `#yEQa9r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEQa9r > .teaser-link > .container`
- `#qPGzjw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPGzjw > .teaser-link > .teaser-image-wrapper > .series-header`
- `#qPGzjw > .teaser-link > .container > .information`
- `#qPGzjw > .teaser-link > .container > h2`
- `#qPGzjw > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#bmy2mA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy2mA > .teaser-link > .container`
- `#Av6azA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6azA > .teaser-link > .container`
- `#\37 3bW6K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3bW6K > .teaser-link > .container`
- `#xmGM7X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGM7X > .teaser-link > .container`
- `#GyoAMJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyoAMJ > .teaser-link > .container > .information`
- `#GyoAMJ > .teaser-link > .container > h2`
- `#GyoAMJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Leif Rune Skymoen"]`
- `#JbVy76 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbVy76 > .teaser-link > .container > .information`
- `#JbVy76 > .teaser-link > .container > h2`
- `#JbVy76 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bjørn Gimming"]`
- `#gwgAB1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwgAB1 > .teaser-link > .container`
- `#mPX3o1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPX3o1 > .teaser-link > .container`
- `#\34 B5VWG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B5VWG > .teaser-link > .container`
- `#vg42pp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg42pp > .teaser-link > .container`
- `#lwpm6o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwpm6o > .teaser-link > .container > .information`
- `#lwpm6o > .teaser-link > .container > .illustration-container > .text`
- `#lwpm6o > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#lwpm6o > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#\37 3EgK3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3EgK3 > .teaser-link > .container > .information`
- `#\37 3EgK3 > .teaser-link > .container > h2`
- `#\37 3EgK3 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nikolai Astrup"]`
- `#\36 3mQAe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mQAe > .teaser-link > .container`
- `#\37 3E6e9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3E6e9 > .teaser-link > .container`
