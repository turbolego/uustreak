# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-17T00:27:40.205Z
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
- **Count:** 8

#### Affected Elements:

- `img[alt="En skjære i Det hvite hus"]`
- `#j0BO6w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlxLx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrAGWl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p6edK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1AXdm > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7g2j0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExWxOG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 218

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-j4ihdyubb > div`
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
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#\36 qzMzW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzMzW > .teaser-link > .container`
- `#k0Re49 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Re49 > .teaser-link > .container`
- `#dr-edition-teaser-fv2e6ipx0 > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="En skjære i Det hvite hus"]`
- `#Gxa80x > .teaser-link > .container > h2`
- `#j0BO6w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0BO6w > .teaser-link > .container > .text-wrapper-small`
- `#ArlxLx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlxLx > .teaser-link > .container > .text-wrapper-small`
- `#rrg55A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrg55A > .teaser-link > .container > .information`
- `#rrg55A > .teaser-link > .container > h2`
- `#rrg55A > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#d4lzMz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4lzMz > .teaser-link > .container`
- `#JOo0W4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOo0W4 > .teaser-link > .container > .information`
- `#JOo0W4 > .teaser-link > .container > .illustration-container > .text`
- `#JOo0W4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `.games-widget`
- `#\36 qz1az > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qz1az > .teaser-link > .container`
- `#\34 3qnJe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qnJe > .teaser-link > .container`
- `#\30 pjedB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjedB > .teaser-link > .container`
- `#m0Bxl0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Bxl0 > .teaser-link > .container`
- `#m062Oq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m062Oq > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(22) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#vrAGWl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrAGWl > .teaser-link > .container > h2`
- `#\35 p6edK > .teaser-link > .container > .text-wrapper-small`
- `#\35 p6edK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1AXdm > .teaser-link > .container > .text-wrapper-small`
- `#n1AXdm > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6ByVX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6ByVX > .teaser-link > .container`
- `#zOgzW4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgzW4 > .teaser-link > .container`
- `#bm3Bb5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3Bb5 > .teaser-link > .container`
- `#y5R9vr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5R9vr > .teaser-link > .container`
- `#vrm1AL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrm1AL > .teaser-link > .container`
- `#xr3dwG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr3dwG > .teaser-link > .container`
- `#Ar23WE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar23WE > .teaser-link > .container`
- `#wrEXqA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#wrEXqA > .teaser-link > .container`
- `.benefits-widget-container`
- `#\30 pKO9E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKO9E > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(33) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#M7g2j0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7g2j0 > .teaser-link > .container > h2`
- `#ExWxOG > .teaser-link > .container > .text-wrapper-small`
- `#ExWxOG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BzLl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BzLl > .teaser-link > .container > .information`
- `#m0BzLl > .teaser-link > .container > h2`
- `#m0BzLl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Øystein Sjølie"]`
- `#o3JAqW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JAqW > .teaser-link > .container`
- `#\39 pOMnE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pOMnE > .teaser-link > .container`
- `#BxRmpw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxRmpw > .teaser-link > .container`
- `#aJPk0a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJPk0a > .teaser-link > .container`
- `#\34 31rgo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 31rgo > .teaser-link > .container`
- `#\30 pKOoJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKOoJ > .teaser-link > .container > .information`
- `#\30 pKOoJ > .teaser-link > .container > h2`
- `#\30 pKOoJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Eivind Trædal"]`
- `.fullwidth.teaser-wrapper:nth-child(42)`
- `#XM8JVE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM8JVE > .teaser-link > .container`
- `#\33 pJnGv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pJnGv > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(45)`
- `#Wvb4qL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvb4qL > .teaser-link > .container > .information`
- `#Wvb4qL > .teaser-link > .container > .illustration-container > .text`
- `#Wvb4qL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#aJP04E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJP04E > .teaser-link > .container`
- `#APxA4E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#APxA4E > .teaser-link > .container`
- `#k0RX0X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RX0X > .teaser-link > .container`
- `#ArlkoM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlkoM > .teaser-link > .container`
- `#\32 pd4dr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pd4dr > .teaser-link > .container`
- `#\35 p6Eye > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p6Eye > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(52) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#m0BLxg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BLxg > .teaser-link > .container > h2`
- `#m0BLxg > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bernt Hagtvet"]`
- `#GxaxJm > .teaser-link > .container > .text-wrapper-small`
- `#GxaxJm > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#wre0ld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wre0ld > .teaser-link > .container`
- `#GxaKLx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxaKLx > .teaser-link > .container`
- `img[alt="Ondt blod i bonusfamilien"]`
- `#zOL9O1 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(55) > .teaser-bundle.new-bundles.desktop > .bundle-title`
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
- `#j0BbxA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0BbxA > .teaser-link > .container > .information`
- `#j0BbxA > .teaser-link > .container > h2`
- `#j0BbxA > .teaser-link > .container > .byline > div:nth-child(1)`
- `#j0BbxA > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#vrAxyj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrAxyj > .teaser-link > .container`
- `.teaser-image[alt="Det eneste sexrådet til menn"][decoding="async"]`
- `#\33 p9z3X > .teaser-link > .container`
- `#zOgbw5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgbw5 > .teaser-link > .container`
- `#K8yKq5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yKq5 > .teaser-link > .container`
- `#aJPO05 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJPO05 > .teaser-link > .container`
- `#\33 pjJp9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pjJp9 > .teaser-link > .container`
- `#y5RGOr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5RGOr > .teaser-link > .container`
- `#\34 3jgzE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jgzE > .teaser-link > .container`
- `#lnErOk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnErOk > .teaser-link > .container`
- `#gk7Vq5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk7Vq5 > .teaser-link > .container > .information`
- `#gk7Vq5 > .teaser-link > .container > .illustration-container > .text`
- `#gk7Vq5 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#wrevBA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrevBA > .teaser-link > .container`
- `#\30 pKX4A > .teaser-link > .container > .text-wrapper-small`
- `#\30 pKX4A > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Rdmj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Rdmj > .teaser-link > .container`
- `img[alt="Regjeringens strømgrep bommer"]`
- `#lnEKKo > .teaser-link > .container > .information`
- `#lnEKKo > .teaser-link > .container > h2`
- `#lnEKKo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Geir H. M. Bjertnæs"]`
- `#XM891B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM891B > .teaser-link > .container > .information`
- `#XM891B > .teaser-link > .container > h2`
- `#XM891B > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Petter Gulli"]`
- `#m0B8X4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0B8X4 > .teaser-link > .container`
