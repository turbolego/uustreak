# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-23T00:27:54.716Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 6

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `img[srcset=""]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 6

#### Affected Elements:

- `#XM834B > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#ExpG4j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxloAv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yVey > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BAe1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BJWg > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 212

#### Affected Elements:

- `#\31 6B2BJ > .teaser-link > .teaser-image-wrapper`
- `#\31 6B2BJ > .teaser-link > .container > .information`
- `#\31 6B2BJ > .teaser-link > .container > h2`
- `#\31 6B2BJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-3k2ij55s4 > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
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
- `article[data-pulse-entity-id="reel-137467"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137467"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137467"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137457"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137457"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137457"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137453"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137453"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137453"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137433"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137433"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137433"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#XM834B > .teaser-link > .teaser-image-wrapper`
- `#XM834B > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#d4lLjw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4lLjw > .teaser-link > .container`
- `#dr-edition-teaser-47h6sq9lc > div`
- `#PdRVbp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdRVbp > .teaser-link > .container`
- `#PdRxvX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdRxvX > .teaser-link > .container > .information`
- `#PdRxvX > .teaser-link > .container > h2`
- `#PdRxvX > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Iver B. Neumann"]`
- `#Gxaon6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxaon6 > .teaser-link > .container`
- `.teaser-bundle.new-bundles.series-location > .bundle-title`
- `#\38 pwE3W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwE3W > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\38 pwE3W > .teaser-link > .container > h2`
- `#Rj9kQW > .teaser-link > .container > .text-wrapper-small`
- `#Rj9kQW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `.games-widget`
- `#gkWm8q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkWm8q > .teaser-link > .container > .information`
- `#gkWm8q > .teaser-link > .container > .illustration-container > .text`
- `#gkWm8q > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(17) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#ExpG4j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExpG4j > .teaser-link > .container > h2`
- `#BxloAv > .teaser-link > .container > .text-wrapper-small`
- `#BxloAv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wreBnG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wreBnG > .teaser-link > .container > .text-wrapper-small`
- `#wreBnG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sigmund Simonsen"]`
- `img[alt="bilde av Arne Willy Dahl"]`
- `#\36 qz1az > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qz1az > .teaser-link > .container`
- `#n1ApBa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1ApBa > .teaser-link > .container`
- `#JOJanj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJanj > .teaser-link > .container`
- `#\39 pOGLM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pOGLM > .teaser-link > .container > .information`
- `#\39 pOGLM > .teaser-link > .container > h2`
- `#\39 pOGLM > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nazneen Khan-Østrem"]`
- `#k0R5yA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0R5yA > .teaser-link > .container > .information`
- `#k0R5yA > .teaser-link > .container > h2`
- `#k0R5yA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Robert Næss"]`
- `#OkQM7l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQM7l > .teaser-link > .container`
- `#ExpGbA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExpGbA > .teaser-link > .container`
- `#\31 6ByVX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6ByVX > .teaser-link > .container`
- `#zOgkRq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgkRq > .teaser-link > .container > .information`
- `#zOgkRq > .teaser-link > .container > h2`
- `#zOgkRq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av May Synnøve Rogne"]`
- `#k0a4gX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0a4gX > .teaser-link > .container`
- `#Gxa794 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxa794 > .teaser-link > .container`
- `#ArdgLj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdgLj > .teaser-link > .container`
- `#V6q0VJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6q0VJ > .teaser-link > .container`
- `#d4OAwB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4OAwB > .teaser-link > .container`
- `.benefits-widget-container`
- `#Arl6eq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arl6eq > .teaser-link > .container`
- `#\30 pK83B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pK83B > .teaser-link > .container`
- `#Rj9Jdx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj9Jdx > .teaser-link > .container`
- `#RjxPAO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxPAO > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(36) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#K8yVey > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yVey > .teaser-link > .container > h2`
- `#m0BAe1 > .teaser-link > .container > .text-wrapper-small`
- `#m0BAe1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BJWg > .teaser-link > .container > .text-wrapper-small`
- `#m0BJWg > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4nwJP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4nwJP > .teaser-link > .container`
- `#y5RQya > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5RQya > .teaser-link > .container`
- `#vrA0Ql > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrA0Ql > .teaser-link > .container`
- `#n1ApOa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1ApOa > .teaser-link > .container`
- `#M73V2M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M73V2M > .teaser-link > .container`
- `#Arl69A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arl69A > .teaser-link > .container`
- `#Bxl8AE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxl8AE > .teaser-link > .container`
- `#Arl1BE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arl1BE > .teaser-link > .container > .information`
- `#Arl1BE > .teaser-link > .container > h2`
- `#Arl1BE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Siri Bløtekjær"]`
- `img[alt="Vy setter opp billettprisene"]`
- `#y5RabK > .teaser-link > .container`
- `#V6qmmr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6qmmr > .teaser-link > .container`
- `#m0BJ6E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BJ6E > .teaser-link > .container > .information`
- `#m0BJ6E > .teaser-link > .container > h2`
- `#m0BJ6E > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Knut Jørgen Kopperud"]`
- `#GxaAvV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxaAvV > .teaser-link > .container > .information`
- `#GxaAvV > .teaser-link > .container > .illustration-container > .text`
- `#GxaAvV > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#M73z3J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M73z3J > .teaser-link > .container`
- `#WvO2RG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvO2RG > .teaser-link > .container`
- `#aJwMnO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJwMnO > .teaser-link > .container`
- `#pBA8kj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBA8kj > .teaser-link > .container`
- `#\38 p643x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p643x > .teaser-link > .container`
- `#j0BykL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0BykL > .teaser-link > .container`
- `#ArlKX3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlKX3 > .teaser-link > .container`
- `#n1A6yd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1A6yd > .teaser-link > .container`
- `#\35 p6Xwz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p6Xwz > .teaser-link > .container`
- `#wrezJL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrezJL > .teaser-link > .container > .information`
- `#wrezJL > .teaser-link > .container > h2`
- `#wrezJL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Inger-Lise Mathiesen"]`
- `#k0R9b6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0R9b6 > .teaser-link > .container > .information`
- `#k0R9b6 > .teaser-link > .container > .illustration-container > .text`
- `#k0R9b6 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#e7KQg4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7KQg4 > .teaser-link > .container > .information`
- `#e7KQg4 > .teaser-link > .container > .kicker`
- `#e7KQg4 > .teaser-link > .container > h2`
- `#e7KQg4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Asle Toje"]`
- `#vrmy25 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrmy25 > .teaser-link > .container`
- `#\38 p6Ard > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p6Ard > .teaser-link > .container > .information`
- `#\38 p6Ard > .teaser-link > .container > h2`
- `#\38 p6Ard > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Linda Rønold"]`
- `#xr361G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr361G > .teaser-link > .container`
- `#pBABvw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBABvw > .teaser-link > .container`
- `#vrARlL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrARlL > .teaser-link > .container`
