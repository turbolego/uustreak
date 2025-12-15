# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-15T00:26:45.229Z
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
- **Count:** 5

#### Affected Elements:

- `#\36 qnRvr > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6pLWw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJlOkA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Politiet er blitt glemt"]`
- `#zOLXa1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 238

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.double.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-5y1o5hoxa > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
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
- `.double.teaser-wrapper:nth-child(7)`
- `#bm3Bb5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3Bb5 > .teaser-link > .container`
- `#dr-edition-teaser-2o9cofbf9 > div`
- `#ln1yq9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ln1yq9 > .teaser-link > .container`
- `.sport.teaser-bundle.new-bundles > .bundle-title`
- `#BxJBkQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxJBkQ > .teaser-link > .container > .illustration-container > .text`
- `#BxJBkQ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"][width="128"][height="128"]`
- `#Pd3xwe > .teaser-link > .container > .text-wrapper-small`
- `#Pd3xwe > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qnRvr > .teaser-link > .container > .text-wrapper-small`
- `#\36 qnRvr > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkP3dB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkP3dB > .teaser-link > .container`
- `.games-widget`
- `#\30 pEB8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEB8o > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(17) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#j098Ww > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j098Ww > .teaser-link > .container > .kicker`
- `#j098Ww > .teaser-link > .container > h2`
- `#q6pLWw > .teaser-link > .container > .text-wrapper-small`
- `#q6pLWw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJlOkA > .teaser-link > .container > .text-wrapper-small`
- `#QJlOkA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1gxmm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1gxmm > .teaser-link > .container`
- `#wgM99G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM99G > .teaser-link > .container`
- `#RjxKQO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxKQO > .teaser-link > .container`
- `#\34 3jV0o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jV0o > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(24) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#JO1RXJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1RXJ > .teaser-link > .container > h2`
- `#JO1RXJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sven G. Holtsmark"]`
- `#\31 6keMG > .teaser-link > .container > .text-wrapper-small`
- `#\31 6keMG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Per Anders Johansen"]`
- `#wgMexG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMexG > .teaser-link > .container`
- `#m069rL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m069rL > .teaser-link > .container`
- `#qPzo4O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPzo4O > .teaser-link > .container`
- `#\30 pEAJE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEAJE > .teaser-link > .container`
- `#vgEmbw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgEmbw > .teaser-link > .container`
- `#Ar2Vyx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar2Vyx > .teaser-link > .container`
- `#alrr3A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alrr3A > .teaser-link > .container`
- `.benefits-widget-container`
- `#zOLGn5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLGn5 > .teaser-link > .container`
- `img[alt="Hvem tjente mest der du bor?"]`
- `#\38 qbbrG > .teaser-link > .container`
- `#\39 pm4OE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pm4OE > .teaser-link > .container`
- `#kw278X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw278X > .teaser-link > .container`
- `#JO1MaJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1MaJ > .teaser-link > .container`
- `#L4prpR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4prpR > .teaser-link > .container`
- `#JOWd3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWd3X > .teaser-link > .container`
- `#mPGX34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGX34 > .teaser-link > .container`
- `#WvLK9a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLK9a > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(41)`
- `#\30 pExq2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pExq2 > .teaser-link > .container`
- `#V6Rww4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6Rww4 > .teaser-link > .container`
- `#\37 plRE9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plRE9 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\37 plRE9 > .teaser-link > .container`
- `#Gx1mbl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx1mbl > .teaser-link > .container`
- `#L40OLJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L40OLJ > .teaser-link > .container`
- `#M7gX5K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7gX5K > .teaser-link > .container > .information`
- `#M7gX5K > .teaser-link > .container > .illustration-container > .text`
- `#M7gX5K > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#\36 qw1RQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qw1RQ > .teaser-link > .container`
- `#ln1leA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ln1leA > .teaser-link > .teaser-image-wrapper > .series-header`
- `#ln1leA > .teaser-link > .container`
- `#WvLbbj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLbbj > .teaser-link > .container > .information`
- `#WvLbbj > .teaser-link > .container > .illustration-container > .text`
- `#WvLbbj > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#zARymw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARymw > .teaser-link > .container`
- `#V6R5rV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6R5rV > .teaser-link > .container`
- `#d4d01z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4d01z > .teaser-link > .container > .information`
- `#d4d01z > .teaser-link > .container > h2`
- `#d4d01z > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lorelou Desjardins"]`
- `#\36 qnoM0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qnoM0 > .teaser-link > .container`
- `#Rjx2lJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjx2lJ > .teaser-link > .container > .information`
- `#Rjx2lJ > .teaser-link > .container > h2`
- `#Rjx2lJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
- `#xrRWLl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrRWLl > .teaser-link > .container`
- `#WvL1wd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvL1wd > .teaser-link > .container`
- `#kwq2Xa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwq2Xa > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(56) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Politiet er blitt glemt"]`
- `#n1gPrL > .teaser-link > .container > h2`
- `#zOLXa1 > .teaser-link > .container > .text-wrapper-small`
- `#zOLXa1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okn201 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okn201 > .teaser-link > .container`
- `#GyvKKm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyvKKm > .teaser-link > .container`
- `img[alt="Han har et skatteproblem"]`
- `#vrmxPB > .teaser-link > .container > .information`
- `#vrmxPB > .teaser-link > .container > .illustration-container > .text`
- `#vrmxPB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#xrR5n8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrR5n8 > .teaser-link > .container`
- `#\37 plJyV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plJyV > .teaser-link > .container > .information`
- `#\37 plJyV > .teaser-link > .container > .illustration-container > .text`
- `#\37 plJyV > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil Rolness"]`
- `#vrm83j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrm83j > .teaser-link > .container > .information`
- `#vrm83j > .teaser-link > .container > h2`
- `#vrm83j > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ola Tjørhom"]`
- `#ln1AoM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ln1AoM > .teaser-link > .container > .information`
- `#ln1AoM > .teaser-link > .container > h2`
- `#ln1AoM > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Helene Uri"]`
- `#ArzW2M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArzW2M > .teaser-link > .container`
- `#xrRW48 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrRW48 > .teaser-link > .container`
- `#y5vG4R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5vG4R > .teaser-link > .container`
- `#\31 6k82Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6k82Q > .teaser-link > .container > .information`
- `#\31 6k82Q > .teaser-link > .container > h2`
- `#\31 6k82Q > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Rune Jomaas"]`
- `#n1gB7x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1gB7x > .teaser-link > .container > .information`
- `#n1gB7x > .teaser-link > .container > .illustration-container > .text`
- `#n1gB7x > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#OkbjLl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbjLl > .teaser-link > .container`
- `#q6nry0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6nry0 > .teaser-link > .container > .information`
- `#q6nry0 > .teaser-link > .container > .illustration-container > .text`
- `#q6nry0 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#\36 qn8z3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qn8z3 > .teaser-link > .container`
- `#oERy9W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oERy9W > .teaser-link > .teaser-image-wrapper > .series-header`
- `#oERy9W > .teaser-link > .container`
- `#vrmPQm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrmPQm > .teaser-link > .container`
- `#\34 3dRa9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3dRa9 > .teaser-link > .container`
- `#\37 plB44 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plB44 > .teaser-link > .container > .information`
- `#\37 plB44 > .teaser-link > .container > .illustration-container > .text`
- `#\37 plB44 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\36 qnMnW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qnMnW > .teaser-link > .container`
- `#\32 p10KB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p10KB > .teaser-link > .container`
- `#\32 p1w6l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1w6l > .teaser-link > .container`
- `#rrpoAl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrpoAl > .teaser-link > .container`
