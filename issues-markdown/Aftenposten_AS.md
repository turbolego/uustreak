# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-30T22:04:33.037Z
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

- `#xrPEaR > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\31 67XeW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr49vQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4mq1z > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 230

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#y57Xlg`
- `#\36 qkKQr > .teaser-link > .teaser-image-wrapper`
- `#\36 qkKQr > .teaser-link > .container > .information`
- `#\36 qkKQr > .teaser-link > .container > .illustration-container > .text`
- `#\36 qkKQr > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137617"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137617"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137617"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137623"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137623"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137623"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
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
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#xrPEaR > .teaser-link > .teaser-image-wrapper`
- `#xrPEaR > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#d4lozw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4lozw > .teaser-link > .container`
- `#dr-edition-teaser-ds8c9efls > div`
- `#xr45Wn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr45Wn > .teaser-link > .container`
- `#oE6e4m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE6e4m > .teaser-link > .container`
- `#K8pq24 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8pq24 > .teaser-link > .container`
- `#lnzlrG > .teaser-link > .feature-container.b-lazy > .container-linear-gradient.z-index`
- `#lnzlrG > .teaser-link > .feature-container.b-lazy > .container-darken.z-index`
- `.games-widget`
- `#rrgRQw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrgRQw > .teaser-link > .container`
- `#Oknd51 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oknd51 > .teaser-link > .container`
- `#vrObaV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrObaV > .teaser-link > .container`
- `#Ar3pwj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar3pwj > .teaser-link > .container`
- `#dr-edition-teaser-m1kn87o4t > div`
- `#aJWpg2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJWpg2 > .teaser-link > .container`
- `#xrP56l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrP56l > .teaser-link > .container`
- `#PdyP2z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdyP2z > .teaser-link > .container`
- `#K83L7G > .teaser-link > .feature-container.b-lazy > .container-linear-gradient.z-index`
- `#K83L7G > .teaser-link > .feature-container.b-lazy > .container-darken.z-index`
- `#wr8941 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8941 > .teaser-link > .container > .information`
- `#wr8941 > .teaser-link > .container > h2`
- `#wr8941 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Kolbeinstveit"]`
- `#\36 qzeOr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzeOr > .teaser-link > .container`
- `#JOJzr6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJzr6 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(26) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\31 67XeW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 67XeW > .teaser-link > .container > h2`
- `#xr49vQ > .teaser-link > .container > .text-wrapper-small`
- `#xr49vQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgXmz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgXmz > .teaser-link > .container`
- `#rrWbwK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrWbwK > .teaser-link > .container`
- `#k0a4XB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0a4XB > .teaser-link > .container`
- `#xr476B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr476B > .teaser-link > .container`
- `.benefits-widget-container`
- `#\32 pd9ka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pd9ka > .teaser-link > .container`
- `#GxQqEm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQqEm > .teaser-link > .container`
- `#QJlOkA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJlOkA > .teaser-link > .container`
- `#\39 pEM0w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pEM0w > .teaser-link > .container`
- `#\34 3qwoe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qwoe > .teaser-link > .container`
- `#k03erX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k03erX > .teaser-link > .container`
- `#\30 pKLaG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKLaG > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(38)`
- `#lnzbrA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnzbrA > .teaser-link > .container`
- `#XM8GxE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM8GxE > .teaser-link > .container > .information`
- `#XM8GxE > .teaser-link > .container > .illustration-container > .text`
- `#XM8GxE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#XM8GxE > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#n1w0yL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1w0yL > .teaser-link > .container > .information`
- `#n1w0yL > .teaser-link > .container > h2`
- `#n1w0yL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Randi Rosenqvist"]`
- `#oE6ezj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE6ezj > .teaser-link > .container`
- `img[alt="Gjorde han en diger tabbe?"]`
- `#GxQ66x > .teaser-link > .container > .information`
- `#GxQ66x > .teaser-link > .container > .illustration-container > .text`
- `#GxQ66x > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#GxQ66x > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#pBpb4V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBpb4V > .teaser-link > .container`
- `#k03baL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k03baL > .teaser-link > .container`
- `#M71pJR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71pJR > .teaser-link > .container`
- `#Ok3eJ1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok3eJ1 > .teaser-link > .container`
- `#K8plW4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8plW4 > .teaser-link > .container`
- `#wr8XrM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8XrM > .teaser-link > .container`
- `#k03b0j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k03b0j > .teaser-link > .container`
- `#\35 pnyrK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pnyrK > .teaser-link > .container`
- `#\30 p491o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p491o > .teaser-link > .container`
- `#Bx3vzl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bx3vzl > .teaser-link > .container`
- `#Rj9Q2a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj9Q2a > .teaser-link > .container`
- `#XM64dE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM64dE > .teaser-link > .container`
- `#rrWeQ0 > .teaser-link > .container > .text-wrapper-small`
- `#rrWeQ0 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41aWx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41aWx > .teaser-link > .container`
- `#L41nr4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41nr4 > .teaser-link > .container`
- `#e7PedK > .teaser-link > .container > .text-wrapper-small`
- `#e7PedK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(56) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Ar3bWA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar3bWA > .teaser-link > .container > h2`
- `#Ar3bWA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av David A. Tørre"]`
- `#d4mq1z > .teaser-link > .container > .text-wrapper-small`
- `#d4mq1z > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj9klO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj9klO > .teaser-link > .container > .information`
- `#Rj9klO > .teaser-link > .container > .illustration-container > .text`
- `#Rj9klO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#Wvq722 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvq722 > .teaser-link > .container`
- `#\39 pE8kd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pE8kd > .teaser-link > .container`
- `#GxQO94 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQO94 > .teaser-link > .container > .information`
- `#GxQO94 > .teaser-link > .container > h2`
- `#GxQO94 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `img[alt="Boligbomben må desarmeres"]`
- `#wr8RoP > .teaser-link > .container`
- `#\36 qk988 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qk988 > .teaser-link > .container > .information`
- `#\36 qk988 > .teaser-link > .container > h2`
- `#\36 qk988 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Heidi Mogstad"]`
- `#bOn4Jv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOn4Jv > .teaser-link > .container > .information`
- `#bOn4Jv > .teaser-link > .container > .illustration-container > .text`
- `#bOn4Jv > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#bOn4Jv > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#d4mMPX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4mMPX > .teaser-link > .container`
- `#pBpBk1 > .teaser-link > .container > div:nth-child(1)`
- `#pBpBk1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6RLV4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6RLV4 > .teaser-link > .container`
- `#\38 pBEeE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pBEeE > .teaser-link > .container`
- `#oE69og > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE69og > .teaser-link > .container`
- `#k0RK8Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RK8Q > .teaser-link > .container > .information`
- `#k0RK8Q > .teaser-link > .container > h2`
- `#k0RK8Q > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Torbjørn L. Knutsen"]`
- `#oEAxPB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEAxPB > .teaser-link > .container`
- `img[alt="Årets beste rett – så langt!"]`
- `#\36 qkWoz > .teaser-link > .container`
- `img[alt="Guttastemning"]`
- `#n1wvBo > .teaser-link > .container > .information`
- `#n1wvBo > .teaser-link > .container > .illustration-container > .text`
- `#n1wvBo > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#n1wvBo > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#k03E3v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k03E3v > .teaser-link > .container`
- `img[alt="Dette skal ikke være mulig"]`
- `#k03mRv > .teaser-link > .container > .information`
- `#k03mRv > .teaser-link > .container > .illustration-container > .text`
- `#k03mRv > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#QJx7mx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJx7mx > .teaser-link > .container`
- `#Bxlx5E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxlx5E > .teaser-link > .container`
