# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-01T00:34:43.196Z
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

- `#\31 6PnyG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4mzlz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr854d > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3zv9R > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7P0Kl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 229

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `#k0WoVk > .teaser-link > .teaser-image-wrapper`
- `#k0WoVk > .teaser-link > .container > .information`
- `#k0WoVk > .teaser-link > .container > .illustration-container > .text`
- `#k0WoVk > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
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
- `.double.teaser-wrapper:nth-child(7)`
- `#zOg4kO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOg4kO > .teaser-link > .container`
- `#dr-edition-teaser-3rslq3yss > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\31 6PnyG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PnyG > .teaser-link > .container > h2`
- `#d4mzlz > .teaser-link > .container > .text-wrapper-small`
- `#d4mzlz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr854d > .teaser-link > .container > .text-wrapper-small`
- `#wr854d > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbK018 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbK018 > .teaser-link > .container > .information`
- `#JbK018 > .teaser-link > .container > .illustration-container > .text`
- `#JbK018 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Ingunn Økland"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#XM6JMn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM6JMn > .teaser-link > .container > .illustration-container > .text`
- `#XM6JMn > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#\34 3zv9R > .teaser-link > .container > .text-wrapper-small`
- `#\34 3zv9R > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7P0Kl > .teaser-link > .container > .text-wrapper-small`
- `#e7P0Kl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#rrgRQw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrgRQw > .teaser-link > .container`
- `#xr45Wn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr45Wn > .teaser-link > .container`
- `#\36 qkovQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qkovQ > .teaser-link > .container`
- `#d4lozw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4lozw > .teaser-link > .container`
- `#e7KAgK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7KAgK > .teaser-link > .container > .information`
- `#e7KAgK > .teaser-link > .container > h2`
- `#e7KAgK > .teaser-link > .container > .byline > div:nth-child(1)`
- `#e7KAgK > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#Ar3pwj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar3pwj > .teaser-link > .container`
- `#gk0350 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk0350 > .teaser-link > .container`
- `#xr476B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr476B > .teaser-link > .container`
- `#\36 qzeOr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzeOr > .teaser-link > .container`
- `#xr4MzQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr4MzQ > .teaser-link > .teaser-image-wrapper > .series-header`
- `#xr4MzQ > .teaser-link > .container`
- `#Ar3W9A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar3W9A > .teaser-link > .container`
- `#\30 pKPGg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKPGg > .teaser-link > .container`
- `#k0a4XB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0a4XB > .teaser-link > .container`
- `#K8pk04 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8pk04 > .teaser-link > .container`
- `.benefits-widget-container`
- `#e78rPM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78rPM > .teaser-link > .container`
- `#GxQ8xl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQ8xl > .teaser-link > .container`
- `#\32 pGeeB > .teaser-link > .feature-container.b-lazy > .container-linear-gradient.z-index`
- `#\32 pGeeB > .teaser-link > .feature-container.b-lazy > .container-darken.z-index`
- `#L4nV31 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4nV31 > .teaser-link > .container`
- `#\32 pd9ka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pd9ka > .teaser-link > .container`
- `#RjyK08 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjyK08 > .teaser-link > .container`
- `#L41aWx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41aWx > .teaser-link > .container`
- `#n1wn0Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1wn0Q > .teaser-link > .container`
- `#GxQXl6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQXl6 > .teaser-link > .container`
- `#aJWLqM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJWLqM > .teaser-link > .teaser-image-wrapper > .series-header`
- `#aJWLqM > .teaser-link > .container`
- `#wr85y5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr85y5 > .teaser-link > .container`
- `img[alt="Mamma har en sjette sans"]`
- `#RjymJA > .teaser-link > .container`
- `#\31 678KB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 678KB > .teaser-link > .container`
- `#L41Ly4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41Ly4 > .teaser-link > .container`
- `#\39 pE80q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pE80q > .teaser-link > .container > .information`
- `#\39 pE80q > .teaser-link > .container > .illustration-container > .text`
- `#\39 pE80q > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Knut Olav Åmås"]`
- `#\31 67OEB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 67OEB > .teaser-link > .container > .information`
- `#\31 67OEB > .teaser-link > .container > h2`
- `#\31 67OEB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Hanne Aukrust Waagan"]`
- `.fullwidth.teaser-wrapper:nth-child(48)`
- `#ExwLm3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExwLm3 > .teaser-link > .container`
- `#lnzrO7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnzrO7 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#lnzrO7 > .teaser-link > .container`
- `#y57Xlg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y57Xlg > .teaser-link > .container`
- `#bOzdMv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOzdMv > .teaser-link > .container`
- `#Rjy9g8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjy9g8 > .teaser-link > .container`
- `#GxQKz4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQKz4 > .teaser-link > .container`
- `#PdyP2z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdyP2z > .teaser-link > .container`
- `#JOJzr6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJzr6 > .teaser-link > .container`
- `#\31 67XeW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 67XeW > .teaser-link > .container`
- `#lnzlrG > .teaser-link > .feature-container.b-lazy > .container-linear-gradient.z-index`
- `#lnzlrG > .teaser-link > .feature-container.b-lazy > .container-darken.z-index`
- `#M71WR5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71WR5 > .teaser-link > .container`
- `#aJWpg2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJWpg2 > .teaser-link > .container`
- `#vrObaV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrObaV > .teaser-link > .container`
- `#wr8941 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8941 > .teaser-link > .container > .information`
- `#wr8941 > .teaser-link > .container > h2`
- `#wr8941 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Kolbeinstveit"]`
- `#XM8GxE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM8GxE > .teaser-link > .container > .information`
- `#XM8GxE > .teaser-link > .container > .illustration-container > .text`
- `#XM8GxE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#XM8GxE > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#\39 pEM0w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pEM0w > .teaser-link > .container`
- `#lnzbrA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnzbrA > .teaser-link > .container`
- `#k03erX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k03erX > .teaser-link > .container`
- `#K8plW4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8plW4 > .teaser-link > .container`
- `img[alt="Gjorde han en diger tabbe?"]`
- `#GxQ66x > .teaser-link > .container > .information`
- `#GxQ66x > .teaser-link > .container > .illustration-container > .text`
- `#GxQ66x > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#dRgXmz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgXmz > .teaser-link > .container`
- `#n1w0yL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1w0yL > .teaser-link > .container > .information`
- `#n1w0yL > .teaser-link > .container > h2`
- `#n1w0yL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Randi Rosenqvist"]`
- `#XM64dE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM64dE > .teaser-link > .container`
- `#Rj9Q2a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj9Q2a > .teaser-link > .container`
- `#rrWeQ0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrWeQ0 > .teaser-link > .container`
- `#Ar3bWA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar3bWA > .teaser-link > .container > .information`
- `#Ar3bWA > .teaser-link > .container > h2`
- `#Ar3bWA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av David A. Tørre"]`
- `#GxQO94 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQO94 > .teaser-link > .container > .information`
- `#GxQO94 > .teaser-link > .container > h2`
- `#GxQO94 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#Wvq722 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvq722 > .teaser-link > .container`
- `#d4mMPX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4mMPX > .teaser-link > .container`
- `#Rj9klO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj9klO > .teaser-link > .container > .information`
- `#Rj9klO > .teaser-link > .container > .illustration-container > .text`
- `#Rj9klO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `img[alt="Boligbomben må desarmeres"]`
- `#wr8RoP > .teaser-link > .container`
- `#bOn4Jv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOn4Jv > .teaser-link > .container > .information`
- `#bOn4Jv > .teaser-link > .container > .illustration-container > .text`
- `#bOn4Jv > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#bOn4Jv > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#\39 pE8kd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pE8kd > .teaser-link > .container`
