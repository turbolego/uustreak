# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-16T00:25:58.984Z
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
- **Count:** 3

#### Affected Elements:

- `#JbV8p7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5L7er > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg42pp > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 244

#### Affected Elements:

- `#qPGzjw > .teaser-link > .teaser-image-wrapper`
- `#qPGzjw > .teaser-link > .container > .information`
- `#qPGzjw > .teaser-link > .container > h2`
- `#qPGzjw > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136146"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136146"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136146"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136137"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136137"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136137"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136116"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136116"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136116"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136123"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136123"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136123"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
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
- `a[data-pulse-entity-id="reel-136067"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136067"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136067"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136068"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136068"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136068"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#jQRvrw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQRvrw > .teaser-link > .container`
- `#lwpm6o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwpm6o > .teaser-link > .container > .information`
- `#lwpm6o > .teaser-link > .container > .illustration-container > .text`
- `#lwpm6o > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#lwpm6o > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#dr-edition-teaser-srdiye9ex > div`
- `.bundle-title`
- `#mPXbeE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPXbeE > .teaser-link > .container > .illustration-container > .text`
- `#mPXbeE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#JbV8p7 > .teaser-link > .container > .text-wrapper-small`
- `#JbV8p7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5L7er > .teaser-link > .container > .text-wrapper-small`
- `#\32 5L7er > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg42pp > .teaser-link > .container > .text-wrapper-small`
- `#vg42pp > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6azA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6azA > .teaser-link > .container`
- `#RzkjQ2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzkjQ2 > .teaser-link > .container`
- `.games-widget`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `#dRxAwO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRxAwO > .teaser-link > .container`
- `#KMJL75 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMJL75 > .teaser-link > .container`
- `#bmy2mA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy2mA > .teaser-link > .container`
- `#\32 5Q2nG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Q2nG > .teaser-link > .container`
- `#vgaL2w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgaL2w > .teaser-link > .container`
- `#xmEKPR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmEKPR > .teaser-link > .container`
- `#zAvpob > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAvpob > .teaser-link > .container`
- `#Ey7mKa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey7mKa > .teaser-link > .container`
- `#pPo8dE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPo8dE > .teaser-link > .container`
- `#xmGM7X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGM7X > .teaser-link > .container`
- `#OoVBp1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoVBp1 > .teaser-link > .container`
- `#mPX3o1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPX3o1 > .teaser-link > .container`
- `#KMOGyX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMOGyX > .teaser-link > .container > .information`
- `#KMOGyX > .teaser-link > .container > .illustration-container > .text`
- `#KMOGyX > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[width="128"][height="128"][alt="bilde av Joacim Lund"]`
- `.benefits-widget-container`
- `#\36 3mQAe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mQAe > .teaser-link > .container`
- `#KM0EM5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KM0EM5 > .teaser-link > .container`
- `#\38 qrdgE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qrdgE > .teaser-link > .container`
- `#kw9vzk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw9vzk > .teaser-link > .container`
- `#Mn4G6M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn4G6M > .teaser-link > .container`
- `#\35 E1MBO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1MBO > .teaser-link > .container`
- `#JbVy76 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbVy76 > .teaser-link > .container > .information`
- `#JbVy76 > .teaser-link > .container > h2`
- `#JbVy76 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bjørn Gimming"]`
- `#\38 qngdW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qngdW > .teaser-link > .container`
- `#gwgAB1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwgAB1 > .teaser-link > .container`
- `#LM8bwJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LM8bwJ > .teaser-link > .container`
- `#Mn4GqR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn4GqR > .teaser-link > .container`
- `#Ey38KP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey38KP > .teaser-link > .container`
- `#o3jb8W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jb8W > .teaser-link > .container`
- `#\37 3E6e9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3E6e9 > .teaser-link > .container`
- `#wg7oPL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wg7oPL > .teaser-link > .container`
- `#GyoAMJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyoAMJ > .teaser-link > .container > .information`
- `#GyoAMJ > .teaser-link > .container > h2`
- `#GyoAMJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Leif Rune Skymoen"]`
- `#\34 B5wko > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B5wko > .teaser-link > .container`
- `#pPo85X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPo85X > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(49)`
- `#\34 B5VWG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B5VWG > .teaser-link > .container`
- `#\37 3EgK3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3EgK3 > .teaser-link > .container > .information`
- `#\37 3EgK3 > .teaser-link > .container > h2`
- `#\37 3EgK3 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nikolai Astrup"]`
- `#\37 3ERXo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3ERXo > .teaser-link > .container > .information`
- `#\37 3ERXo > .teaser-link > .container > h2`
- `#\37 3ERXo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sigrid Bratlie"]`
- `#pPoknE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPoknE > .teaser-link > .container`
- `#o3jOnW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jOnW > .teaser-link > .container`
- `#xmGB2R > .teaser-link > .container > .text-wrapper-small`
- `#xmGB2R > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdBPr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdBPr > .teaser-link > .container`
- `#bmy2K5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy2K5 > .teaser-link > .container > .information`
- `#bmy2K5 > .teaser-link > .container > .illustration-container > .text`
- `#bmy2K5 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Harald Stanghelle"]`
- `#dRx0EB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRx0EB > .teaser-link > .container`
- `#wg72W1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wg72W1 > .teaser-link > .container`
- `#bmyJMk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmyJMk > .teaser-link > .container`
- `#zAd1Gv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAd1Gv > .teaser-link > .container > .information`
- `#zAd1Gv > .teaser-link > .container > h2`
- `#zAd1Gv > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjell Terje Ringdal"]`
- `#KMd9b6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMd9b6 > .teaser-link > .container`
- `#\35 EPLKK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EPLKK > .teaser-link > .container`
- `#VzKwkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzKwkl > .teaser-link > .container`
- `#B0A9Ev > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0A9Ev > .teaser-link > .container`
- `#mPX4nO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPX4nO > .teaser-link > .container > .information`
- `#mPX4nO > .teaser-link > .container > .illustration-container > .text`
- `#mPX4nO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#mPX4nO > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `.teaser-image[alt="Dette er dønn useriøst"][decoding="async"]`
- `#kwAjxX > .teaser-link > .container > .information`
- `#kwAjxX > .teaser-link > .container > .illustration-container > .text`
- `#kwAjxX > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#Av6MMq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6MMq > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Av6MMq > .teaser-link > .container`
- `#jQ6jPe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ6jPe > .teaser-link > .container`
- `#RzJ62a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJ62a > .teaser-link > .container`
- `#OoG1Jq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG1Jq > .teaser-link > .container > .information`
- `#OoG1Jq > .teaser-link > .container > .illustration-container > .text`
- `#OoG1Jq > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `img[alt="Gi barn og unge eiendomsskatt"]`
- `#\33 MWXkA > .teaser-link > .container > .information`
- `#\33 MWXkA > .teaser-link > .container > .illustration-container > .text`
- `#\33 MWXkA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#Av6Vzx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6Vzx > .teaser-link > .container`
- `#\30 VMJdA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMJdA > .teaser-link > .container > .information`
- `#\30 VMJdA > .teaser-link > .container > h2`
- `#\30 VMJdA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Hanne Eggen Røislien"]`
- `#\36 3mAAL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mAAL > .teaser-link > .container`
- `#OoG7e3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG7e3 > .teaser-link > .container`
- `#QMd07x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMd07x > .teaser-link > .teaser-image-wrapper > .series-header`
- `#QMd07x > .teaser-link > .container > .information`
- `#QMd07x > .teaser-link > .container > h2`
- `#QMd07x > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Hanssen"]`
- `#XjvEpm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjvEpm > .teaser-link > .container`
- `#xmGvyB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGvyB > .teaser-link > .container`
- `#\36 3mAQ3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mAQ3 > .teaser-link > .container`
- `#RzJpyd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJpyd > .teaser-link > .container`
- `#\33 MWKvv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWKvv > .teaser-link > .container`
- `#RzvEO8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzvEO8 > .teaser-link > .container`
- `#eMb5Oy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMb5Oy > .teaser-link > .container > .information`
- `#eMb5Oy > .teaser-link > .container > h2`
- `#eMb5Oy > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Gjermund Grimsby  "]`
