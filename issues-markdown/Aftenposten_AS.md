# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-04T00:33:51.534Z
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
- **Count:** 7

#### Affected Elements:

- `#gk0nM0 > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\37 p5JjK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\30 p444A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3EpJv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8kmo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4mBnA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4m8Ez > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 222

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#L41Eax > .teaser-link > .teaser-image-wrapper`
- `#L41Eax > .teaser-link > .container > .information`
- `#L41Eax > .teaser-link > .container > .illustration-container > .text`
- `#L41Eax > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `#pBp2gG`
- `#\38 pB8BA > .teaser-link > .teaser-image-wrapper`
- `#\38 pB8BA > .teaser-link > .container > .information`
- `#\38 pB8BA > .teaser-link > .container > .illustration-container > .text`
- `#\38 pB8BA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\38 pB8BA > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#dr-edition-teaser-luctqk8jp > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137657"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137657"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137657"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137656"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137656"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137656"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137652"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137652"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137652"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137564"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137564"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137564"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137632"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137632"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137632"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137617"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137617"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137617"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137622"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137622"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137622"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137613"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137613"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137613"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137598"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137598"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137598"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137468"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137468"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137468"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#gk0nM0 > .teaser-link > .teaser-image-wrapper`
- `#gk0nM0 > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(8) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\30 p444A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p444A > .teaser-link > .container > h2`
- `#\37 3EpJv > .teaser-link > .container > .text-wrapper-small`
- `#\37 3EpJv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrjJ1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrjJ1 > .teaser-link > .container > .text-wrapper-small`
- `#zOrjJ1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ina Lindahl Nyrud"]`
- `#n1wMJd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1wMJd > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(12) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#wr8kmo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8kmo > .teaser-link > .container > h2`
- `#d4mBnA > .teaser-link > .container > .text-wrapper-small`
- `#d4mBnA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4m8Ez > .teaser-link > .container > .text-wrapper-small`
- `#d4m8Ez > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok3daO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok3daO > .teaser-link > .container`
- `#zOgJl4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgJl4 > .teaser-link > .container`
- `.games-widget`
- `#\34 3zwq9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3zwq9 > .teaser-link > .container`
- `#rrW33A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrW33A > .teaser-link > .container`
- `#JOEAg7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOEAg7 > .teaser-link > .container`
- `#xrPEaR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPEaR > .teaser-link > .container`
- `#K8prv7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8prv7 > .teaser-link > .container > .information`
- `#K8prv7 > .teaser-link > .container > .illustration-container > .text`
- `#K8prv7 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#K8prv7 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Frank Rossavik"][width="88"][height="88"]`
- `#Ar3m9z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar3m9z > .teaser-link > .container`
- `#JOJPz6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJPz6 > .teaser-link > .container > .information`
- `#JOJPz6 > .teaser-link > .container > .illustration-container > .text`
- `#JOJPz6 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#JOJPz6 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Frank Rossavik"][width="88"][height="88"]`
- `img[alt="Til deg som ikke fikk jobben"]`
- `#k03jqv > .teaser-link > .container`
- `#zOg4kO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOg4kO > .teaser-link > .container`
- `#JOE5zj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOE5zj > .teaser-link > .container`
- `#xr45Wn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr45Wn > .teaser-link > .container`
- `#aJWEy2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJWEy2 > .teaser-link > .container`
- `#\35 png1m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 png1m > .teaser-link > .container`
- `#bOzJnl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOzJnl > .teaser-link > .container`
- `#vrOjML > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrOjML > .teaser-link > .container`
- `#\36 qzP10 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzP10 > .teaser-link > .container`
- `.benefits-widget-container`
- `img[alt="Har det rablet helt for Frp?"]`
- `#Wvq38G > .teaser-link > .container`
- `#\37 p5gG4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p5gG4 > .teaser-link > .container > .information`
- `#\37 p5gG4 > .teaser-link > .container > h2`
- `#\37 p5gG4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Iver Huitfeldt"]`
- `#\36 qkQ53 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qkQ53 > .teaser-link > .container`
- `img[alt="Nytt kraftig bitcoin-fall"]`
- `#Rjy01O > .teaser-link > .container`
- `#K8p4kX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8p4kX > .teaser-link > .container`
- `#e7P75M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7P75M > .teaser-link > .container`
- `#V61871 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V61871 > .teaser-link > .container`
- `#\34 3zAve > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3zAve > .teaser-link > .container`
- `#L41OqR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41OqR > .teaser-link > .container`
- `#RjypKx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjypKx > .teaser-link > .container`
- `#ExwAP5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExwAP5 > .teaser-link > .container`
- `#xr4vbB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr4vbB > .teaser-link > .container`
- `#JOEAlR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOEAlR > .teaser-link > .container`
- `#M71bwR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71bwR > .teaser-link > .container`
- `#Exwg7l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exwg7l > .teaser-link > .container`
- `#L41xap > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41xap > .teaser-link > .container`
- `#GxQb9q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQb9q > .teaser-link > .container`
- `#\38 pBPVE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pBPVE > .teaser-link > .container`
- `#QJx2b4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJx2b4 > .teaser-link > .container > .information`
- `#QJx2b4 > .teaser-link > .container > .illustration-container > .text`
- `#QJx2b4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Cecilie Asker"]`
- `#PdyB9b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdyB9b > .teaser-link > .container`
- `#aJWKz2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJWKz2 > .teaser-link > .container > .information`
- `#aJWKz2 > .teaser-link > .container > h2`
- `#aJWKz2 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#aJWKz2 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#Ok3JXE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok3JXE > .teaser-link > .container`
- `#Exwkgl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exwkgl > .teaser-link > .container`
- `#j0zL99 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0zL99 > .teaser-link > .container`
- `#\35 pnQAX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pnQAX > .teaser-link > .container`
- `#\31 6734q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6734q > .teaser-link > .container`
- `#\33 p6wy9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p6wy9 > .teaser-link > .container`
- `img[alt="Strømpolitikk, ikke sløsing"]`
- `#\34 3zKno > .teaser-link > .container > .information`
- `#\34 3zKno > .teaser-link > .container > h2`
- `#\34 3zKno > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Geir H. M. Bjertnæs"]`
- `#L41BOV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41BOV > .teaser-link > .container > .information`
- `#L41BOV > .teaser-link > .container > h2`
- `#L41BOV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Atle Mysterud"]`
- `#n1wvRJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1wvRJ > .teaser-link > .container`
- `#\32 pdGxl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pdGxl > .teaser-link > .container`
- `#xr47aR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr47aR > .teaser-link > .container > .information`
- `#xr47aR > .teaser-link > .container > h2`
- `#xr47aR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Geir O. Pedersen"]`
- `#K8v3R4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8v3R4 > .teaser-link > .container`
- `#y5Ra4J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5Ra4J > .teaser-link > .container`
- `#Wvq3qa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvq3qa > .teaser-link > .container > .information`
- `#Wvq3qa > .teaser-link > .container > h2`
- `#Wvq3qa > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Paul M. H. Buvarp"]`
- `#\38 pBowx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pBowx > .teaser-link > .container > .information`
- `#\38 pBowx > .teaser-link > .container > h2`
- `#\38 pBowx > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Stig S. Frøland"]`
- `#j0znbe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0znbe > .teaser-link > .container`
- `#\33 p6PKA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p6PKA > .teaser-link > .container`
- `#yEegmr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEegmr > .teaser-link > .container`
- `#GxQxeq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQxeq > .teaser-link > .container`
- `#JOExAm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOExAm > .teaser-link > .container`
- `#\33 p6o0X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p6o0X > .teaser-link > .container > .information`
- `#\33 p6o0X > .teaser-link > .container > h2`
- `#\33 p6o0X > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marte Heian-Engdal"]`
