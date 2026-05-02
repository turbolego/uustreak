# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-02T00:46:58.311Z
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
- **Count:** 3

#### Affected Elements:

- `#\37 pPOKw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdXX5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pvgvB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 231

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1166k_647`
- `article[data-pulse-entity-id="reel-138775"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138775"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138775"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138772"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138772"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138772"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138773"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138773"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138773"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138763"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138763"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138763"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138765"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138765"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138765"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138753"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138753"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138753"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138746"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138746"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138746"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138705"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138705"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138705"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138710"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138710"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138710"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138719"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138719"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138719"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `#OkyBk3 > .teaser-link > .teaser-image-wrapper`
- `#OkyBk3 > .teaser-link > .container > .information`
- `#OkyBk3 > .teaser-link > .container > .illustration-container > .text`
- `#OkyBk3 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#OkyBk3 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#GxxjvQ`
- `#QJr0KJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJr0KJ > .teaser-link > .container`
- `#dr-edition-teaser-8gpclvhc5 > div`
- `#XMoQGm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMoQGm > .teaser-link > .container`
- `#GxPmkQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPmkQ > .teaser-link > .container`
- `#\33 pBwQ9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pBwQ9 > .teaser-link > .container > .information`
- `#\33 pBwQ9 > .teaser-link > .container > .illustration-container > .text`
- `#\33 pBwQ9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\33 pBwQ9 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#JOOPoR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOOPoR > .teaser-link > .container`
- `.games-widget`
- `#\37 p62y3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p62y3 > .teaser-link > .container`
- `#\38 pP77x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pP77x > .teaser-link > .container`
- `#xrJ49Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrJ49Q > .teaser-link > .container > .information`
- `#xrJ49Q > .teaser-link > .container > .illustration-container > .text`
- `#xrJ49Q > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#xrJ49Q > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#K8L1m7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8L1m7 > .teaser-link > .container > .information`
- `#K8L1m7 > .teaser-link > .container > h2`
- `#K8L1m7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Martin Tansøy "]`
- `#\30 pprVA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pprVA > .teaser-link > .container`
- `#m0Mwx4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Mwx4 > .teaser-link > .container`
- `#lnK40L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnK40L > .teaser-link > .container`
- `#\31 6vbQM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6vbQM > .teaser-link > .container > .information`
- `#\31 6vbQM > .teaser-link > .container > .illustration-container > .text`
- `#\31 6vbQM > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#lnMJWk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMJWk > .teaser-link > .container`
- `#k0MExQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MExQ > .teaser-link > .container > .information`
- `#k0MExQ > .teaser-link > .container > .illustration-container > .text`
- `#k0MExQ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#OkyA5q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkyA5q > .teaser-link > .container`
- `#BxMJLE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMJLE > .teaser-link > .container`
- `#gk3O8a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk3O8a > .teaser-link > .container`
- `#Rj5xyW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj5xyW > .teaser-link > .container`
- `#ArRMez > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArRMez > .teaser-link > .container`
- `.benefits-widget-container`
- `#\37 p7Kk3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7Kk3 > .teaser-link > .container`
- `img[alt="Ny rekord på Wall Street"]`
- `#j03Eme > .teaser-link > .container`
- `#gkEe6q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkEe6q > .teaser-link > .container`
- `#L4oEnJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4oEnJ > .teaser-link > .container`
- `#lnMAGL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMAGL > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(36)`
- `#\36 q3K4z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q3K4z > .teaser-link > .container`
- `#\39 pk9jl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pk9jl > .teaser-link > .container`
- `#\36 qPyv8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qPyv8 > .teaser-link > .container > .information`
- `#\36 qPyv8 > .teaser-link > .container > h2`
- `#\36 qPyv8 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Petter Bae Brandtzæg"]`
- `#\36 qPgRo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qPgRo > .teaser-link > .container`
- `.bundle-title`
- `#\37 pPOKw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPOKw > .teaser-link > .container > h2`
- `#wrdXX5 > .teaser-link > .container > .text-wrapper-small`
- `#wrdXX5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pvgvB > .teaser-link > .container > .text-wrapper-small`
- `#\32 pvgvB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.fullwidth.teaser-wrapper:nth-child(42)`
- `#\36 qP770 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qP770 > .teaser-link > .container`
- `.container-linear-gradient`
- `.container-darken`
- `.fullwidth.teaser-wrapper:nth-child(46)`
- `#rr8JKl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr8JKl > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(49)`
- `img[alt="Hvem er dette?"]`
- `#lnM9wM > .teaser-link > .container`
- `img[alt="Vis respekt for maidagen"]`
- `#PdvjVR > .teaser-link > .container`
- `#bOkJ6g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOkJ6g > .teaser-link > .container`
- `#QJrAvR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJrAvR > .teaser-link > .container`
- `#Exb2n2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exb2n2 > .teaser-link > .container > .information`
- `#Exb2n2 > .teaser-link > .container > .illustration-container > .text`
- `#Exb2n2 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#Exb2n2 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#M75Ja5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M75Ja5 > .teaser-link > .container > .information`
- `#M75Ja5 > .teaser-link > .container > h2`
- `#M75Ja5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Borgersrud"]`
- `#Rj1BxJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj1BxJ > .teaser-link > .container`
- `#JOngaX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOngaX > .teaser-link > .container`
- `#m0Mx7q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Mx7q > .teaser-link > .container > .information`
- `#m0Mx7q > .teaser-link > .container > .illustration-container > .text`
- `#m0Mx7q > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#m0Mx7q > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#vrkXyp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrkXyp > .teaser-link > .container`
- `#Pdv2j7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdv2j7 > .teaser-link > .container`
- `#\30 pvgl6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvgl6 > .teaser-link > .container`
- `#Okyq7w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okyq7w > .teaser-link > .container`
- `#k0MLg9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MLg9 > .teaser-link > .container`
- `#Gxy0pJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxy0pJ > .teaser-link > .container`
- `#V6gV3J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gV3J > .teaser-link > .container`
- `#wrdLAP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdLAP > .teaser-link > .container > .information`
- `.kicker`
- `#wrdLAP > .teaser-link > .container > h2`
- `#wrdLAP > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Andrew Mukuria"]`
- `#\39 pkK7W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pkK7W > .teaser-link > .container`
- `#pBME2W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBME2W > .teaser-link > .container`
- `#aJG0VE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJG0VE > .teaser-link > .container`
- `#n1984J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1984J > .teaser-link > .container`
- `#gk3KwB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk3KwB > .teaser-link > .container`
- `#\30 pvbG6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvbG6 > .teaser-link > .container > .information`
- `#\30 pvbG6 > .teaser-link > .container > h2`
- `#\30 pvbG6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Joel Ystebø"]`
- `#\35 p3emW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p3emW > .teaser-link > .container`
- `#pBMr6X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBMr6X > .teaser-link > .container`
- `#q6OWLO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6OWLO > .teaser-link > .container`
- `#OkyeqA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkyeqA > .teaser-link > .container`
- `#pBMldw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBMldw > .teaser-link > .container`
- `#lnMewM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMewM > .teaser-link > .container > .information`
- `#lnMewM > .teaser-link > .container > h2`
- `#lnMewM > .teaser-link > .container > .byline > div:nth-child(1)`
- `#lnMewM > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#JOnXwJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOnXwJ > .teaser-link > .container`
- `#xrJ7Gl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrJ7Gl > .teaser-link > .teaser-image-wrapper > .series-header`
- `#xrJ7Gl > .teaser-link > .container`
- `#OkyPPb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkyPPb > .teaser-link > .container > .information`
- `#OkyPPb > .teaser-link > .container > h2`
- `#OkyPPb > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Gustav Hårtveit"]`
- `#xrJyg8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrJyg8 > .teaser-link > .container > .information`
- `#xrJyg8 > .teaser-link > .container > .illustration-container > .text`
- `#xrJyg8 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#xrJyg8 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#JOnRWJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOnRWJ > .teaser-link > .container`
