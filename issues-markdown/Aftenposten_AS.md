# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-02T00:45:38.868Z
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

- `#\37 p5JjK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#zOrw7b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PnyG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3zQV6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pEM0w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 220

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-jqjwljerp > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
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
- `article[data-pulse-entity-id="reel-137552"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137552"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137552"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137580"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137580"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137580"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137560"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137560"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137560"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137567"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137567"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137567"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137553"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137553"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137553"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#pBpxeE > .teaser-link > .teaser-image-wrapper`
- `#pBpxeE > .teaser-link > .container > .illustration-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#xrPEaR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPEaR > .teaser-link > .container`
- `#q6R8dz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6R8dz > .teaser-link > .container`
- `#dr-edition-teaser-q8o7g5vlf > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#zOrw7b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrw7b > .teaser-link > .container > h2`
- `#\31 6PnyG > .teaser-link > .container > .text-wrapper-small`
- `#\31 6PnyG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3zQV6 > .teaser-link > .container > .text-wrapper-small`
- `#\34 3zQV6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE6k5K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE6k5K > .teaser-link > .container > .information`
- `#oE6k5K > .teaser-link > .container > h2`
- `#oE6k5K > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#rrW33A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrW33A > .teaser-link > .container`
- `.games-widget`
- `#zOg4kO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOg4kO > .teaser-link > .container`
- `#Ok31aA > .teaser-link > .container > .text-wrapper-small`
- `#Ok31aA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKPGg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKPGg > .teaser-link > .container`
- `#\38 pBlmG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pBlmG > .teaser-link > .container`
- `#xr45Wn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr45Wn > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(21) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\33 p6o0X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p6o0X > .teaser-link > .container > h2`
- `#\33 p6o0X > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marte Heian-Engdal"]`
- `#\39 pEM0w > .teaser-link > .container > .text-wrapper-small`
- `#\39 pEM0w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8PoL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8PoL > .teaser-link > .container`
- `#lnzm37 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnzm37 > .teaser-link > .container`
- `#rrgRQw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrgRQw > .teaser-link > .container`
- `#yEegmr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEegmr > .teaser-link > .container`
- `#K8pXdM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8pXdM > .teaser-link > .container`
- `#Ar3pwj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar3pwj > .teaser-link > .container`
- `#\34 3zGVR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3zGVR > .teaser-link > .container`
- `#wr8Pkd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8Pkd > .teaser-link > .container`
- `#\37 p51pw > .teaser-link > .feature-container.b-lazy > .container-linear-gradient.z-index`
- `#\37 p51pw > .teaser-link > .feature-container.b-lazy > .container-darken.z-index`
- `.benefits-widget-container`
- `#XM684b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM684b > .teaser-link > .container`
- `#n1A8Km > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1A8Km > .teaser-link > .container`
- `#k0a4XB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0a4XB > .teaser-link > .container`
- `#L41XgJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41XgJ > .teaser-link > .container`
- `#xr476B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr476B > .teaser-link > .container`
- `#BxRmpw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxRmpw > .teaser-link > .container`
- `#bOzawB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOzawB > .teaser-link > .container > .information`
- `#bOzawB > .teaser-link > .container > h2`
- `#bOzawB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Johannes Morken"]`
- `#L4nRj9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4nRj9 > .teaser-link > .container`
- `#Ar3BXr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar3BXr > .teaser-link > .container`
- `#\30 p4Xx6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p4Xx6 > .teaser-link > .container`
- `#Ar35bE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar35bE > .teaser-link > .container`
- `img[alt="Hva kalles et slikt apparat?"]`
- `#V61qAJ > .teaser-link > .container`
- `#JbK018 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbK018 > .teaser-link > .container > .information`
- `#JbK018 > .teaser-link > .container > .illustration-container > .text`
- `#JbK018 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Ingunn Økland"]`
- `#wr83Q1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr83Q1 > .teaser-link > .container`
- `#k0WoVk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0WoVk > .teaser-link > .container > .information`
- `#k0WoVk > .teaser-link > .container > .illustration-container > .text`
- `#k0WoVk > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#GxQ8WB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQ8WB > .teaser-link > .container`
- `#gk0350 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk0350 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#gk0350 > .teaser-link > .container`
- `#e7KAgK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7KAgK > .teaser-link > .container > .information`
- `#e7KAgK > .teaser-link > .container > h2`
- `#e7KAgK > .teaser-link > .container > .byline > div:nth-child(1)`
- `#e7KAgK > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#Ar3W9A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar3W9A > .teaser-link > .container`
- `#\36 qkovQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qkovQ > .teaser-link > .container`
- `#q6Aqyg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Aqyg > .teaser-link > .container`
- `#aJWLqM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJWLqM > .teaser-link > .teaser-image-wrapper > .series-header`
- `#aJWLqM > .teaser-link > .container`
- `#GxQ8xl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQ8xl > .teaser-link > .container`
- `#L4nV31 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4nV31 > .teaser-link > .container`
- `#RjyK08 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjyK08 > .teaser-link > .container`
- `#ExwLm3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExwLm3 > .teaser-link > .container`
- `img[alt="Mamma har en sjette sans"]`
- `#RjymJA > .teaser-link > .container`
- `#\39 pE80q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pE80q > .teaser-link > .container > .information`
- `#\39 pE80q > .teaser-link > .container > .illustration-container > .text`
- `#\39 pE80q > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Knut Olav Åmås"]`
- `#PdyP2z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdyP2z > .teaser-link > .container`
- `#y57Xlg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y57Xlg > .teaser-link > .container`
- `#\31 67OEB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 67OEB > .teaser-link > .container > .information`
- `#\31 67OEB > .teaser-link > .container > h2`
- `#\31 67OEB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Hanne Aukrust Waagan"]`
- `#lnzlrG > .teaser-link > .feature-container.b-lazy > .container-linear-gradient.z-index`
- `#lnzlrG > .teaser-link > .feature-container.b-lazy > .container-darken.z-index`
- `#Arl58z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arl58z > .teaser-link > .container`
- `#lnzbrA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnzbrA > .teaser-link > .container`
- `#n1w0yL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1w0yL > .teaser-link > .container > .information`
- `#n1w0yL > .teaser-link > .container > h2`
- `#n1w0yL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Randi Rosenqvist"]`
- `#aJWpg2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJWpg2 > .teaser-link > .container`
- `#XM8GxE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM8GxE > .teaser-link > .container > .information`
- `#XM8GxE > .teaser-link > .container > .illustration-container > .text`
- `#XM8GxE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#JOJzr6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJzr6 > .teaser-link > .container`
- `#k03erX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k03erX > .teaser-link > .container`
- `#XM64dE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM64dE > .teaser-link > .container`
- `#vrObaV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrObaV > .teaser-link > .container`
- `#M71WR5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71WR5 > .teaser-link > .container`
- `#wr8941 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8941 > .teaser-link > .container > .information`
- `#wr8941 > .teaser-link > .container > h2`
- `#wr8941 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Kolbeinstveit"]`
- `#K8plW4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8plW4 > .teaser-link > .container`
- `#\31 67XeW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 67XeW > .teaser-link > .container`
- `img[alt="Gjorde han en diger tabbe?"]`
- `#GxQ66x > .teaser-link > .container > .information`
- `#GxQ66x > .teaser-link > .container > .illustration-container > .text`
- `#GxQ66x > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#GxQ66x > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
