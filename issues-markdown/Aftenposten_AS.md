# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-26T00:29:26.768Z
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
- **Count:** 10

#### Affected Elements:

- `#wrel41 > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#JbPbQb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p604d > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0PeB9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrg2K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOEE17 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6RLqw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exwo13 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8v3R4 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr3Kwj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 214

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137541"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137541"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137541"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137535"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137535"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137535"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137509"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137509"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137509"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137516"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137516"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137516"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137511"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137511"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137511"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137494"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137494"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137494"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137483"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137483"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137483"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137482"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137482"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137482"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137473"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137473"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137473"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137468"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137468"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137468"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#wrel41 > .teaser-link > .teaser-image-wrapper`
- `#wrel41 > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(8) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#JbPbQb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPbQb > .teaser-link > .container > h2`
- `#\38 p604d > .teaser-link > .container > .text-wrapper-small`
- `#\38 p604d > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOzMbl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOzMbl > .teaser-link > .container`
- `#Bx3l6e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bx3l6e > .teaser-link > .container`
- `.magazine.teaser-bundle.new-bundles > .bundle-title`
- `#d4lLjw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4lLjw > .teaser-link > .container > .kicker`
- `#d4lLjw > .teaser-link > .container > h2`
- `#j0PeB9 > .teaser-link > .container > .text-wrapper-small`
- `#j0PeB9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4n27x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4n27x > .teaser-link > .container > .information`
- `#L4n27x > .teaser-link > .container > h2`
- `#L4n27x > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tore Austad"]`
- `.games-widget`
- `#pB6n6W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB6n6W > .teaser-link > .container`
- `#V6qEp6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6qEp6 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(18) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#zOrg2K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrg2K > .teaser-link > .container > h2`
- `#JOEE17 > .teaser-link > .container > .text-wrapper-small`
- `#JOEE17 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6RLqw > .teaser-link > .container > .text-wrapper-small`
- `#q6RLqw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjy9qW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjy9qW > .teaser-link > .container`
- `#M711w5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M711w5 > .teaser-link > .container`
- `#rrgGgR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrgGgR > .teaser-link > .container > .information`
- `#rrgGgR > .teaser-link > .container > .illustration-container > .text`
- `#rrgGgR > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#\38 p6Aw2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p6Aw2 > .teaser-link > .container`
- `#\34 3dKLE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3dKLE > .teaser-link > .container`
- `#\36 qzeOr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzeOr > .teaser-link > .container`
- `#\30 p4E5M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p4E5M > .teaser-link > .container`
- `#GxQQ3V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQQ3V > .teaser-link > .container`
- `#\38 pwoRr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwoRr > .teaser-link > .container`
- `#V6qW5p > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6qW5p > .teaser-link > .container`
- `#Oknd51 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oknd51 > .teaser-link > .container`
- `.benefits-widget-container`
- `#n1wAnd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1wAnd > .teaser-link > .container`
- `#WvbJWr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvbJWr > .teaser-link > .container`
- `#bOn9Xe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOn9Xe > .teaser-link > .container > .information`
- `#bOn9Xe > .teaser-link > .container > h2`
- `#bOn9Xe > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jonas Stein"]`
- `img[alt="Barna brukes rått"]`
- `#\31 6BKWJ > .teaser-link > .container > .information`
- `#\31 6BKWJ > .teaser-link > .container > .illustration-container > .text`
- `#\31 6BKWJ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#ExWxOG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExWxOG > .teaser-link > .container`
- `#vrOWWl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrOWWl > .teaser-link > .container`
- `#PdRvab > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdRvab > .teaser-link > .container`
- `#wr8PEo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8PEo > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(38) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Exwo13 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exwo13 > .teaser-link > .container > h2`
- `#K8v3R4 > .teaser-link > .container > .text-wrapper-small`
- `#K8v3R4 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvOw5a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvOw5a > .teaser-link > .container`
- `#zOrrMb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrrMb > .teaser-link > .container`
- `#\34 3zz1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3zz1E > .teaser-link > .container`
- `#XM684b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM684b > .teaser-link > .container`
- `#wr8Pkd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8Pkd > .teaser-link > .container`
- `#GxQaqB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQaqB > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(45)`
- `#\37 p5KM8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p5KM8 > .teaser-link > .container`
- `#q6RAE1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6RAE1 > .teaser-link > .container`
- `#\36 qzLRQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzLRQ > .teaser-link > .container`
- `#lnEynL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnEynL > .teaser-link > .container`
- `#\30 pKPGg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKPGg > .teaser-link > .container`
- `#\34 31KBV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 31KBV > .teaser-link > .container`
- `#wr8PoL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8PoL > .teaser-link > .container`
- `#\32 p317a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p317a > .teaser-link > .container`
- `#\37 pKoX3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pKoX3 > .teaser-link > .container`
- `#BxR5o9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxR5o9 > .teaser-link > .container`
- `#XM8Vmn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM8Vmn > .teaser-link > .container > .information`
- `#XM8Vmn > .teaser-link > .container > .illustration-container > .text`
- `#XM8Vmn > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Hilde Østby"]`
- `#Bx3Jal > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bx3Jal > .teaser-link > .container`
- `#gkWqG1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkWqG1 > .teaser-link > .container`
- `#GxQlqx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQlqx > .teaser-link > .container`
- `#\36 qzRzr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzRzr > .teaser-link > .container`
- `#\38 pBw1Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pBw1Q > .teaser-link > .container`
- `#xrPEaR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPEaR > .teaser-link > .container`
- `#ArlAbq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlAbq > .teaser-link > .container`
- `#e7K9XR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7K9XR > .teaser-link > .container > .information`
- `#e7K9XR > .teaser-link > .container > h2`
- `#e7K9XR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Arne Melsom"]`
- `#Bxl7p9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxl7p9 > .teaser-link > .container`
- `#pBp6gw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBp6gw > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(62) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\31 6BKwq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6BKwq > .teaser-link > .container > .illustration-container > .text`
- `#\31 6BKwq > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#xr3Kwj > .teaser-link > .container > .text-wrapper-small`
- `#xr3Kwj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrA4pV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrA4pV > .teaser-link > .container`
- `img[alt="Dette var snilt!"]`
- `#\30 pKeMg > .teaser-link > .container > .information`
- `#\30 pKeMg > .teaser-link > .container > .illustration-container > .text`
- `#\30 pKeMg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\31 6BLeJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6BLeJ > .teaser-link > .container > .information`
- `#\31 6BLeJ > .teaser-link > .container > h2`
- `#\31 6BLeJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Morten Bøås"]`
- `#y5RedA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5RedA > .teaser-link > .container`
- `#Bxl7me > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxl7me > .teaser-link > .container`
- `#xr4ABQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr4ABQ > .teaser-link > .container`
- `#k0RnAv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RnAv > .teaser-link > .container`
- `#xr4AVV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr4AVV > .teaser-link > .container`
