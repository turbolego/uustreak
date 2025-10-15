# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-15T00:24:49.786Z
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
- **Count:** 1

#### Affected Elements:

- `#al5052 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 236

#### Affected Elements:

- `#kwAjxX > .teaser-link > .teaser-image-wrapper`
- `#kwAjxX > .teaser-link > .container > .information`
- `#kwAjxX > .teaser-link > .container > .illustration-container > .text`
- `#kwAjxX > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `#zAd1Gv > .teaser-link > .teaser-image-wrapper`
- `#zAd1Gv > .teaser-link > .container > .information`
- `#zAd1Gv > .teaser-link > .container > h2`
- `#zAd1Gv > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjell Terje Ringdal"]`
- `#dr-edition-teaser-ojhhiwkhe > div`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136083"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136083"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136083"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136111"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136111"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136111"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136067"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136067"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136067"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136068"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136068"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136068"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
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
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#KMJL75 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMJL75 > .teaser-link > .container`
- `#dr-edition-teaser-wnyolte8t > div`
- `#RzJen8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJen8 > .teaser-link > .container`
- `#VzKwkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzKwkl > .teaser-link > .container`
- `#mPX4nO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPX4nO > .teaser-link > .container > .information`
- `#mPX4nO > .teaser-link > .container > .illustration-container > .text`
- `#mPX4nO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#\32 5Q2nG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Q2nG > .teaser-link > .container`
- `.games-widget`
- `#zAdg9w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdg9w > .teaser-link > .container`
- `.bundle-title`
- `#Av6gyx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6gyx > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Av6gyx > .teaser-link > .container > h2`
- `#OoG2bA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG2bA > .teaser-link > .container > .illustration-container > .text`
- `#OoG2bA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#al5052 > .teaser-link > .container > .text-wrapper-small`
- `#al5052 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmEKPR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmEKPR > .teaser-link > .container`
- `#\35 EPLKK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EPLKK > .teaser-link > .container`
- `#qPGAve > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPGAve > .teaser-link > .container`
- `#jQ6jPe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ6jPe > .teaser-link > .container`
- `#\38 q210w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q210w > .teaser-link > .container`
- `#Mn4rRr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn4rRr > .teaser-link > .container`
- `#\39 39A2l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 39A2l > .teaser-link > .container`
- `#KMd9b6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMd9b6 > .teaser-link > .container`
- `#RzJ62a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJ62a > .teaser-link > .container`
- `#KMOGyX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMOGyX > .teaser-link > .container > .information`
- `#KMOGyX > .teaser-link > .container > .illustration-container > .text`
- `#KMOGyX > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"][width="128"][height="128"]`
- `img[alt="Gi barn og unge eiendomsskatt"]`
- `#\33 MWXkA > .teaser-link > .container > .information`
- `#\33 MWXkA > .teaser-link > .container > .illustration-container > .text`
- `#\33 MWXkA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#VzAqe3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzAqe3 > .teaser-link > .container`
- `#OoG1G3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG1G3 > .teaser-link > .container`
- `#LMw02p > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMw02p > .teaser-link > .container`
- `img[alt="Artisten D'Angelo er død"]`
- `#\32 5Lxjl > .teaser-link > .container`
- `.benefits-widget-container`
- `#zAn15q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAn15q > .teaser-link > .container`
- `#Av6MMq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6MMq > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Av6MMq > .teaser-link > .container`
- `#zAnp31 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAnp31 > .teaser-link > .container`
- `#QMd07x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMd07x > .teaser-link > .teaser-image-wrapper > .series-header`
- `#QMd07x > .teaser-link > .container > .information`
- `#QMd07x > .teaser-link > .container > h2`
- `#QMd07x > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Hanssen"]`
- `#\34 B9LXR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B9LXR > .teaser-link > .container`
- `#\30 VMJdA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMJdA > .teaser-link > .container > .information`
- `#\30 VMJdA > .teaser-link > .container > h2`
- `#\30 VMJdA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Hanne Eggen Røislien"]`
- `#pPoknE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPoknE > .teaser-link > .container`
- `#XjvEpm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjvEpm > .teaser-link > .container`
- `#bmyJMk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmyJMk > .teaser-link > .container`
- `#Av6Vzx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6Vzx > .teaser-link > .container`
- `#OoG7e3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG7e3 > .teaser-link > .container`
- `#W0QB0L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W0QB0L > .teaser-link > .container > .information`
- `#W0QB0L > .teaser-link > .container > h2`
- `#W0QB0L > .teaser-link > .container > .byline > div:nth-child(1)`
- `#W0QB0L > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\36 3mAQ3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mAQ3 > .teaser-link > .container`
- `#OoG1Jq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG1Jq > .teaser-link > .container > .information`
- `#OoG1Jq > .teaser-link > .container > .illustration-container > .text`
- `#OoG1Jq > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#xmGvyB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGvyB > .teaser-link > .container`
- `#RzvEO8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzvEO8 > .teaser-link > .container`
- `#\36 3mMg3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mMg3 > .teaser-link > .container`
- `#Mn4md0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn4md0 > .teaser-link > .container`
- `#eMbLWg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMbLWg > .teaser-link > .container`
- `#KMOm64 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMOm64 > .teaser-link > .container`
- `#mPX4y1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPX4y1 > .teaser-link > .container`
- `#\39 3yLjE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3yLjE > .teaser-link > .container > .information`
- `#\39 3yLjE > .teaser-link > .container > .illustration-container > .text`
- `#\39 3yLjE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#xmGEBj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGEBj > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(53)`
- `#\37 3EwXV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3EwXV > .teaser-link > .container`
- `#RzJpyd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJpyd > .teaser-link > .container`
- `#OoGBdA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGBdA > .teaser-link > .container`
- `#RzJBLr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJBLr > .teaser-link > .container`
- `#RzJ238 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJ238 > .teaser-link > .container`
- `#\33 MWKvv > .teaser-link > .container > .text-wrapper-small`
- `#\33 MWKvv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPo5z1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPo5z1 > .teaser-link > .container`
- `#\34 B5KyR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B5KyR > .teaser-link > .container`
- `#vg0a5m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg0a5m > .teaser-link > .container`
- `#Ppk25e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ppk25e > .teaser-link > .container > .information`
- `#Ppk25e > .teaser-link > .container > h2`
- `#Ppk25e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Benedicte Bull"]`
- `#\36 3mvz0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mvz0 > .teaser-link > .container`
- `#lwpWPe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwpWPe > .teaser-link > .container`
- `#\36 3m1BQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3m1BQ > .teaser-link > .container`
- `#eMb5Oy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMb5Oy > .teaser-link > .container > .information`
- `#eMb5Oy > .teaser-link > .container > h2`
- `#eMb5Oy > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Gjermund Grimsby  "]`
- `#\37 3EMgv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3EMgv > .teaser-link > .container > .information`
- `#\37 3EMgv > .teaser-link > .container > h2`
- `#\37 3EMgv > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\37 3EMgv > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#Mn47XM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn47XM > .teaser-link > .container`
- `#zAdwXr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdwXr > .teaser-link > .container`
- `#o3jy4j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jy4j > .teaser-link > .container`
- `#\37 32MOK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 32MOK > .teaser-link > .container`
- `#B0Ax4e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Ax4e > .teaser-link > .container`
- `#bmyanA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmyanA > .teaser-link > .container`
- `#bmR0z5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmR0z5 > .teaser-link > .container`
- `#xmGykG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGykG > .teaser-link > .container`
- `#Gy4JBJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gy4JBJ > .teaser-link > .container`
- `#rPBr4l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPBr4l > .teaser-link > .container`
- `#\34 B5vOG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B5vOG > .teaser-link > .container`
- `#jQ6xmb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ6xmb > .teaser-link > .container`
