# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-18T00:27:45.585Z
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

- `#oEAwlj > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#K8yXw5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pO869 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgX91 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="En skjære i Det hvite hus"]`
- `#j0BO6w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlxLx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pk7ld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Ondt blod i bonusfamilien"]`

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
- **Count:** 216

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#oEAwlj > .teaser-link > .teaser-image-wrapper`
- `#oEAwlj > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137445"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137445"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137445"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137441"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137441"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137441"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137216"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137216"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137216"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137426"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137426"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137426"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137437"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137437"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137437"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137433"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137433"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137433"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137399"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137399"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137399"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137396"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137396"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137396"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137387"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137387"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137387"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.double.teaser-wrapper:nth-child(7)`
- `#zOgxPr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgxPr > .teaser-link > .container`
- `#bOKeGg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOKeGg > .teaser-link > .container`
- `#\38 p6m0w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p6m0w > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#K8yXw5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yXw5 > .teaser-link > .container > h2`
- `#\39 pO869 > .teaser-link > .container > .text-wrapper-small`
- `#\39 pO869 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgX91 > .teaser-link > .container > .text-wrapper-small`
- `#zOgX91 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#aJPyE7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJPyE7 > .teaser-link > .container`
- `#OkQlWO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQlWO > .teaser-link > .container`
- `#XM85m7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM85m7 > .teaser-link > .container`
- `#bOnjQl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOnjQl > .teaser-link > .container`
- `#k0RLzA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RLzA > .teaser-link > .container`
- `#gkaBjJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkaBjJ > .teaser-link > .container`
- `#m062Oq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m062Oq > .teaser-link > .container`
- `#V6qQW6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6qQW6 > .teaser-link > .container`
- `#L4pLE9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4pLE9 > .teaser-link > .container`
- `#Arl58z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arl58z > .teaser-link > .container`
- `#L4nBL9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4nBL9 > .teaser-link > .container`
- `#\32 pd9ka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pd9ka > .teaser-link > .container`
- `#xr3dVj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr3dVj > .teaser-link > .container`
- `.benefits-widget-container`
- `.container-linear-gradient`
- `.container-darken`
- `#OkQBjl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQBjl > .teaser-link > .container`
- `#m0BvEL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BvEL > .teaser-link > .container`
- `#Ard1qM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ard1qM > .teaser-link > .container`
- `#o3JAqW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JAqW > .teaser-link > .container`
- `#\36 qzg4e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzg4e > .teaser-link > .container`
- `#JbPbQb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPbQb > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(40) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="En skjære i Det hvite hus"]`
- `#Gxa80x > .teaser-link > .container > h2`
- `#j0BO6w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0BO6w > .teaser-link > .container > .text-wrapper-small`
- `#ArlxLx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlxLx > .teaser-link > .container > .text-wrapper-small`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(41) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\33 pk7ld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pk7ld > .teaser-link > .container > h2`
- `#zOL9O1 > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Ondt blod i bonusfamilien"]`
- `#\37 pKJzw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pKJzw > .teaser-link > .container > .information`
- `#\37 pKJzw > .teaser-link > .container > h2`
- `#\37 pKJzw > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mustafa Can"]`
- `#q6Ar1L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Ar1L > .teaser-link > .container`
- `#k0Re49 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Re49 > .teaser-link > .container`
- `#\30 pKOOA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKOOA > .teaser-link > .container`
- `#\39 pOMnE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pOMnE > .teaser-link > .container`
- `#oEAK1g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEAK1g > .teaser-link > .container`
- `#K8yMl5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yMl5 > .teaser-link > .container`
- `#y5R9vr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5R9vr > .teaser-link > .container`
- `#\36 qzMzW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzMzW > .teaser-link > .container`
- `#\36 qzeOr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzeOr > .teaser-link > .container`
- `#d4lzMz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4lzMz > .teaser-link > .container`
- `#\30 pKO9E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKO9E > .teaser-link > .container`
- `#\34 31rgo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 31rgo > .teaser-link > .container`
- `#m0BzLl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BzLl > .teaser-link > .container > .information`
- `#m0BzLl > .teaser-link > .container > h2`
- `#m0BzLl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Øystein Sjølie"]`
- `#aJPk0a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJPk0a > .teaser-link > .container`
- `#\34 3qnJe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qnJe > .teaser-link > .container`
- `#\36 qz1az > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qz1az > .teaser-link > .container`
- `#JOo0W4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOo0W4 > .teaser-link > .container > .information`
- `#JOo0W4 > .teaser-link > .container > .illustration-container > .text`
- `#JOo0W4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `img[alt="Det eneste sexrådet til menn"]`
- `#\33 p9z3X > .teaser-link > .container`
- `#APxA4E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#APxA4E > .teaser-link > .container`
- `#\33 pJnGv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pJnGv > .teaser-link > .container`
- `#Wvb4qL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvb4qL > .teaser-link > .container > .information`
- `#Wvb4qL > .teaser-link > .container > .illustration-container > .text`
- `#Wvb4qL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#\30 pKOoJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKOoJ > .teaser-link > .container > .information`
- `#\30 pKOoJ > .teaser-link > .container > h2`
- `#\30 pKOoJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Eivind Trædal"]`
- `#ExWxOG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExWxOG > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(62) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#GxaeR6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxaeR6 > .teaser-link > .container > .kicker`
- `#GxaeR6 > .teaser-link > .container > h2`
- `img[alt="Jeg vil be om unnskyldning"]`
- `#\38 p67JW > .teaser-link > .container > .text-wrapper-small`
- `#\38 p67JW > .teaser-link > .container > .byline`
- `#\32 pdqM4 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pdqM4 > .teaser-link > .container > .text-wrapper-small`
- `#\32 pdqM4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Agnete G. Haaland"]`
- `#\33 pjJp9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pjJp9 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(64) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#m0BLxg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BLxg > .teaser-link > .container > h2`
- `#m0BLxg > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bernt Hagtvet"]`
- `#GxaxJm > .teaser-link > .container > .text-wrapper-small`
- `#GxaxJm > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#wre0ld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wre0ld > .teaser-link > .container`
- `#\31 6ByVX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6ByVX > .teaser-link > .container`
- `#j0BbxA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0BbxA > .teaser-link > .container > .information`
- `#j0BbxA > .teaser-link > .container > h2`
- `#j0BbxA > .teaser-link > .container > .byline > div:nth-child(1)`
- `#j0BbxA > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#lnErOk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnErOk > .teaser-link > .container`
- `#zOgbw5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgbw5 > .teaser-link > .container`
- `#vrAxyj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrAxyj > .teaser-link > .container`
- `#gk7Vq5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk7Vq5 > .teaser-link > .container > .information`
- `#gk7Vq5 > .teaser-link > .container > .illustration-container > .text`
- `#gk7Vq5 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#aJPO05 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJPO05 > .teaser-link > .container`
- `#\34 3jgzE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jgzE > .teaser-link > .container`
- `#y5RGOr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5RGOr > .teaser-link > .container`
