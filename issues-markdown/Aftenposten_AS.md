# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-14T00:27:40.800Z
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

- `#zOgOn9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxlyPe > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p69KQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RMr6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p68X6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnEAP7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrpoAl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OknvOl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 204

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#d4lOgJ > .teaser-link > .teaser-image-wrapper`
- `#d4lOgJ > .teaser-link > .container > .information`
- `#d4lOgJ > .teaser-link > .container > h2`
- `#d4lOgJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Simen Sætre"]`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137387"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137387"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137387"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137386"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137386"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137386"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137383"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137383"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137383"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137382"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137382"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137382"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137378"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137378"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137378"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137381"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137381"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137381"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137362"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137362"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137362"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137358"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137358"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137358"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137356"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137356"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137356"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `.fullwidth.teaser-wrapper:nth-child(8)`
- `#\39 pOoEW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pOoEW > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(12) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#zOgOn9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgOn9 > .teaser-link > .container > h2`
- `#BxlyPe > .teaser-link > .container > .text-wrapper-small`
- `#BxlyPe > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\38 p69KQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p69KQ > .teaser-link > .container > h2`
- `#lnEnX7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnEnX7 > .teaser-link > .container > .text-wrapper-small`
- `#lnEnX7 > .teaser-link > .container > .byline`
- `#k0RMr6 > .teaser-link > .container > .text-wrapper-small`
- `#k0RMr6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#V6qG4r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6qG4r > .teaser-link > .container`
- `#\31 6BR7W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6BR7W > .teaser-link > .container`
- `#WvOobj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvOobj > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(18) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\35 p68X6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p68X6 > .teaser-link > .container > h2`
- `#lnEAP7 > .teaser-link > .container > .text-wrapper-small`
- `#lnEAP7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnAd79 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnAd79 > .teaser-link > .container`
- `#\30 pKLaG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKLaG > .teaser-link > .container`
- `#lnE32y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnE32y > .teaser-link > .container`
- `#WvLb1j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLb1j > .teaser-link > .container`
- `#JOJB2R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJB2R > .teaser-link > .container`
- `#KMO1P6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMO1P6 > .teaser-link > .container`
- `#\38 p6pPr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p6pPr > .teaser-link > .container > .information`
- `#\38 p6pPr > .teaser-link > .container > .illustration-container > .text`
- `#\38 p6pPr > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#y5ROyg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5ROyg > .teaser-link > .container`
- `#PdRvab > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdRvab > .teaser-link > .container`
- `#bO59qB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO59qB > .teaser-link > .container`
- `.benefits-widget-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(32) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#rrpoAl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrpoAl > .teaser-link > .container > h2`
- `#OknvOl > .teaser-link > .container > .text-wrapper-small`
- `#OknvOl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pK0y3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pK0y3 > .teaser-link > .container`
- `#k0RQQ9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RQQ9 > .teaser-link > .container`
- `#\33 pk7ld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pk7ld > .teaser-link > .container`
- `#aJP44d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJP44d > .teaser-link > .container`
- `#lng92G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lng92G > .teaser-link > .container`
- `img[alt="Noen stiller feil spørsmål"]`
- `#\38 p6pgW > .teaser-link > .container`
- `#gkPy8k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkPy8k > .teaser-link > .container`
- `#d4l7bq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4l7bq > .teaser-link > .container > .information`
- `#d4l7bq > .teaser-link > .container > h2`
- `#d4l7bq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Asle Toje"]`
- `#Ar2AGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar2AGE > .teaser-link > .container`
- `#K8yjgG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yjgG > .teaser-link > .container`
- `#\34 31mlq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 31mlq > .teaser-link > .container`
- `#\37 p0OP8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p0OP8 > .teaser-link > .container`
- `#aJPvgO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJPvgO > .teaser-link > .container`
- `#L4nPa9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4nPa9 > .teaser-link > .container`
- `#\34 31mbe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 31mbe > .teaser-link > .container`
- `#K8y6GX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8y6GX > .teaser-link > .container`
- `#Expz43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Expz43 > .teaser-link > .container`
- `#\32 pdVPv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pdVPv > .teaser-link > .container`
- `#K8yrWo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yrWo > .teaser-link > .container > .information`
- `#K8yrWo > .teaser-link > .container > h2`
- `#K8yrWo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
- `#pBAnz1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAnz1 > .teaser-link > .container`
- `#\35 p6b5m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p6b5m > .teaser-link > .container > .information`
- `#\35 p6b5m > .teaser-link > .container > h2`
- `#\35 p6b5m > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Karoline Torkildsen"]`
- `#XM85Wo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM85Wo > .teaser-link > .container`
- `#pBAGv6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAGv6 > .teaser-link > .container`
- `#vrA69L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrA69L > .teaser-link > .container`
- `#K8yPVe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yPVe > .teaser-link > .container`
- `#\30 pKLvG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKLvG > .teaser-link > .container`
- `#XM85pg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM85pg > .teaser-link > .container`
- `#XM85Br > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM85Br > .teaser-link > .container`
- `#\37 pKqJw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pKqJw > .teaser-link > .container`
- `#\38 p659w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p659w > .teaser-link > .container`
- `img[alt="Nettavisen-sjefen slutter"]`
- `#\39 pOb4w > .teaser-link > .container`
- `#k0Rp0a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Rp0a > .teaser-link > .container`
- `#rrgzq3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrgzq3 > .teaser-link > .container`
- `#\33 p94oL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p94oL > .teaser-link > .container > .information`
- `#\33 p94oL > .teaser-link > .container > .illustration-container > .text`
- `#\33 p94oL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#JOJbnj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJbnj > .teaser-link > .container`
- `#lnE4rM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnE4rM > .teaser-link > .container`
- `#y5R3wJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5R3wJ > .teaser-link > .container`
- `#K8yLg6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yLg6 > .teaser-link > .container`
- `#lnAd89 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnAd89 > .teaser-link > .container`
- `img[alt="Sykdommen du ikke vil ha"]`
- `#PdRvdJ > .teaser-link > .container`
- `#JOJrmX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJrmX > .teaser-link > .container`
- `#\30 pKv80 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKv80 > .teaser-link > .container`
- `#JOJrR7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJrR7 > .teaser-link > .container`
- `#k0RvBa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RvBa > .teaser-link > .container`
- `#lnEMXk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnEMXk > .teaser-link > .container`
- `#ExplWP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExplWP > .teaser-link > .container > .information`
- `#ExplWP > .teaser-link > .container > h2`
- `#ExplWP > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Farshid Jahangosha"]`
