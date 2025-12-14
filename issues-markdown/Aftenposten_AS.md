# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-14T00:35:29.706Z
**URL:** [https://www.aftenposten.no/](https://www.aftenposten.no/)
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

- `img[alt="Politiet er blitt glemt"]`
- `#zOLXa1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 ply4V > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jV0o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnxxWR > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExolPG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 240

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `#d4d01z > .teaser-link > .teaser-image-wrapper`
- `#d4d01z > .teaser-link > .container > .information`
- `#d4d01z > .teaser-link > .container > h2`
- `#d4d01z > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lorelou Desjardins"]`
- `#ln1leA`
- `#Rjx2lJ > .teaser-link > .teaser-image-wrapper`
- `#Rjx2lJ > .teaser-link > .container > .information`
- `#Rjx2lJ > .teaser-link > .container > h2`
- `#Rjx2lJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137094"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137094"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137094"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137055"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137055"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137055"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137088"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137088"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137088"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137090"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137090"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137090"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137070"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137070"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137070"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137065"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137065"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137065"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137050"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137050"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137050"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137045"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137045"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137045"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137034"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137034"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137034"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137007"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137007"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137007"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#j098Ww > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j098Ww > .teaser-link > .container`
- `#dr-edition-teaser-httsjjxs > div`
- `.fullwidth.teaser-wrapper:nth-child(11)`
- `#Gx1mbl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx1mbl > .teaser-link > .container`
- `#\30 pExq2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pExq2 > .teaser-link > .container`
- `.games-widget`
- `#WvLbbj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLbbj > .teaser-link > .container > .information`
- `#WvLbbj > .teaser-link > .container > .illustration-container > .text`
- `#WvLbbj > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"][width="88"][height="88"]`
- `#alrr3A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alrr3A > .teaser-link > .container`
- `#n1gjAo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1gjAo > .teaser-link > .container`
- `#RjxpqA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxpqA > .teaser-link > .container`
- `#\36 qnAkz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qnAkz > .teaser-link > .container`
- `#xrRWLl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrRWLl > .teaser-link > .container`
- `#K8vAp7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8vAp7 > .teaser-link > .container`
- `#JO1yb4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1yb4 > .teaser-link > .container`
- `#wgM99G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM99G > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(24) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Politiet er blitt glemt"]`
- `#n1gPrL > .teaser-link > .container > h2`
- `#zOLXa1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLXa1 > .teaser-link > .container > .text-wrapper-small`
- `#\37 ply4V > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 ply4V > .teaser-link > .container > .text-wrapper-small`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(25) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\34 3jV0o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jV0o > .teaser-link > .container > h2`
- `#MnxxWR > .teaser-link > .container > .text-wrapper-small`
- `#MnxxWR > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvL1wd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvL1wd > .teaser-link > .container`
- `#\36 qnoM0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qnoM0 > .teaser-link > .container`
- `#\37 39Eov > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39Eov > .teaser-link > .container`
- `#kwq2Xa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwq2Xa > .teaser-link > .container`
- `#\33 MLQQP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLQQP > .teaser-link > .container`
- `.benefits-widget-container`
- `#\36 qw1RQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qw1RQ > .teaser-link > .container`
- `#EyOzB2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EyOzB2 > .teaser-link > .container`
- `#Pd3Ax7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd3Ax7 > .teaser-link > .container`
- `#kw278X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw278X > .teaser-link > .container`
- `#\37 plRE9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plRE9 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\37 plRE9 > .teaser-link > .container`
- `#bm97Je > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm97Je > .teaser-link > .container`
- `#\30 pExr6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pExr6 > .teaser-link > .container`
- `#qPzo4O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPzo4O > .teaser-link > .container`
- `#M7gX5K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7gX5K > .teaser-link > .container > .information`
- `#M7gX5K > .teaser-link > .container > .illustration-container > .text`
- `#M7gX5K > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#M7gX5K > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#XMwAKg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMwAKg > .teaser-link > .container`
- `#\37 plJyV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plJyV > .teaser-link > .container > .information`
- `#\37 plJyV > .teaser-link > .container > .illustration-container > .text`
- `#\37 plJyV > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil Rolness"]`
- `#Okn201 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okn201 > .teaser-link > .container`
- `#ArzW2M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArzW2M > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(45) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\31 6keMG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6keMG > .teaser-link > .container > h2`
- `#\31 6keMG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Anders Johansen"]`
- `#ExolPG > .teaser-link > .container > .text-wrapper-small`
- `#ExolPG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qn8z3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qn8z3 > .teaser-link > .container`
- `#V6R5e4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6R5e4 > .teaser-link > .container`
- `#ln1AoM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ln1AoM > .teaser-link > .container > .information`
- `#ln1AoM > .teaser-link > .container > h2`
- `#ln1AoM > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Helene Uri"]`
- `#GyvKKm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyvKKm > .teaser-link > .container`
- `#vrmPQm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrmPQm > .teaser-link > .container`
- `#oERy9W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oERy9W > .teaser-link > .container`
- `img[alt="Han har et skatteproblem"]`
- `#vrmxPB > .teaser-link > .container > .information`
- `#vrmxPB > .teaser-link > .container > .illustration-container > .text`
- `#vrmxPB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#vrm83j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrm83j > .teaser-link > .container > .information`
- `#vrm83j > .teaser-link > .container > h2`
- `#vrm83j > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ola Tjørhom"]`
- `#\34 3dRa9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3dRa9 > .teaser-link > .container`
- `#\31 6k82Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6k82Q > .teaser-link > .container > .information`
- `#\31 6k82Q > .teaser-link > .container > h2`
- `#\31 6k82Q > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Rune Jomaas"]`
- `#xrRW48 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrRW48 > .teaser-link > .container`
- `#\32 p1w6l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1w6l > .teaser-link > .container`
- `#\32 p10KB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p10KB > .teaser-link > .container`
- `#xrR5n8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrR5n8 > .teaser-link > .container`
- `#q6nry0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6nry0 > .teaser-link > .container > .information`
- `#q6nry0 > .teaser-link > .container > .illustration-container > .text`
- `#q6nry0 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#y5vG4R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5vG4R > .teaser-link > .container`
- `#n1gB7x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1gB7x > .teaser-link > .container > .information`
- `#n1gB7x > .teaser-link > .container > .illustration-container > .text`
- `#n1gB7x > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#n1gB7x > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#\37 plp04 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plp04 > .teaser-link > .container`
- `#\37 plB44 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plB44 > .teaser-link > .container > .information`
- `#\37 plB44 > .teaser-link > .container > .illustration-container > .text`
- `#\37 plB44 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\36 qnMnW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qnMnW > .teaser-link > .container`
- `#Mn42PE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn42PE > .teaser-link > .container`
- `#oELp10 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oELp10 > .teaser-link > .container`
- `#\39 pmXb5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pmXb5 > .teaser-link > .container`
- `#\39 pmnM9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pmnM9 > .teaser-link > .container`
- `#JO1654 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1654 > .teaser-link > .container > .information`
- `#JO1654 > .teaser-link > .container > .illustration-container > .text`
- `#JO1654 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"][width="128"][height="128"]`
- `#K8B0pE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8B0pE > .teaser-link > .container`
- `#Pd3w45 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd3w45 > .teaser-link > .container`
- `img[alt="Tier taktisk stille om Trump"]`
- `#JO1M07 > .teaser-link > .container > .information`
- `#JO1M07 > .teaser-link > .container > .illustration-container > .text`
- `#JO1M07 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#JO1M07 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `img[alt="Bare han kunne skapt trøbbel"]`
- `#pB6mb1 > .teaser-link > .container > .information`
- `#pB6mb1 > .teaser-link > .container > .illustration-container > .text`
- `#pB6mb1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#pB6mb1 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#\38 pw9aG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pw9aG > .teaser-link > .container`
- `#q6nEyL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6nEyL > .teaser-link > .container`
- `#xrRdgp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrRdgp > .teaser-link > .container`
- `#wrE5P5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrE5P5 > .teaser-link > .container`
- `#\37 3964V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3964V > .teaser-link > .container`
- `#rrpoAl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrpoAl > .teaser-link > .container`
- `#XMwEWE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMwEWE > .teaser-link > .container`
