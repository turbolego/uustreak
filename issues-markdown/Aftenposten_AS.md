# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-07T00:27:09.435Z
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

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- `#skattelisten, li:nth-child(1) > a[target="_top"]`
- `#skattelisten, li:nth-child(2) > a[target="_top"]`
- `#skattelisten, li:nth-child(3) > a[target="_top"]`
- `#skattelisten, li:nth-child(4) > a[target="_top"]`
- `#skattelisten, li:nth-child(5) > a[target="_top"]`
- `#skattelisten, li:nth-child(6) > a[target="_top"]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 5

#### Affected Elements:

- `#q6pApO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#Pp6X7b > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#JO1bdb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6nR1w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLQQP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 242

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#Pd39r7`
- `#m0go90 > .teaser-link > .teaser-image-wrapper`
- `#m0go90 > .teaser-link > .container > .information`
- `#m0go90 > .teaser-link > .container > .illustration-container > .text`
- `#m0go90 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#j098Ww > .teaser-link > .teaser-image-wrapper`
- `#j098Ww > .teaser-link > .container > .kicker`
- `#j098Ww > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#dr-edition-teaser-7p3rymqw > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137007"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137007"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137007"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136978"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136978"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136978"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136988"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136988"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136988"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136975"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136975"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136975"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136957"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136957"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136957"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136952"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136952"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136952"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136951"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136951"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136951"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136940"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136940"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136940"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136930"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136930"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136930"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#BxVGQQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxVGQQ > .teaser-link > .container`
- `#skattelisten, .text`
- `#skattelisten, ol`
- `#skattelisten, #b4-tax-municipality-search`
- `#dr-edition-teaser-rwyhtdon > div`
- `#\37 plpPV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plpPV > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#JO1bdb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1bdb > .teaser-link > .container > h2`
- `#\36 qn30L > .teaser-link > .container > .text-wrapper-small`
- `#\36 qn30L > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Putin er ikke rasjonell"]`
- `#e7W3J4 > .teaser-link > .container > .illustration-container > .text`
- `#e7W3J4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#xrRrb8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrRrb8 > .teaser-link > .container`
- `.games-widget`
- `#EyOzB2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EyOzB2 > .teaser-link > .container`
- `#\31 6PAxq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PAxq > .teaser-link > .container`
- `#\32 p180B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p180B > .teaser-link > .container > .information`
- `#\32 p180B > .teaser-link > .container > .illustration-container > .text`
- `#\32 p180B > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#dr-edition-teaser-axnay8lde > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(20) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#lw82rk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw82rk > .teaser-link > .teaser-image-wrapper > .series-header`
- `#lw82rk > .teaser-link > .container > h2`
- `#q6nR1w > .teaser-link > .container > .text-wrapper-small`
- `#q6nR1w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ2P9a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ2P9a > .teaser-link > .container`
- `#\35 pJmyX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pJmyX > .teaser-link > .container`
- `#m0gmP4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gmP4 > .teaser-link > .container`
- `#\33 Mlmz0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 Mlmz0 > .teaser-link > .container`
- `#BxJWP0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxJWP0 > .teaser-link > .container`
- `#Av8l1n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8l1n > .teaser-link > .container`
- `#Pdr606 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdr606 > .teaser-link > .container > .information`
- `#Pdr606 > .teaser-link > .container > .illustration-container > .text`
- `#Pdr606 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#XMwwAW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMwwAW > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(31) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\33 MLQQP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLQQP > .teaser-link > .container > h2`
- `#d45XPA > .teaser-link > .container > .text-wrapper-small`
- `#d45XPA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BnbL9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BnbL9 > .teaser-link > .container`
- `#Eydk5P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Eydk5P > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Eydk5P > .teaser-link > .container`
- `.benefits-widget-container`
- `#wrEApM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEApM > .teaser-link > .container`
- `#kw278X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw278X > .teaser-link > .container`
- `#JO1bk8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1bk8 > .teaser-link > .container`
- `#\38 q33xA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q33xA > .teaser-link > .container`
- `#ln1wPy > .teaser-link > .container > .text-wrapper-small`
- `#ln1wPy > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbrPl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbrPl > .teaser-link > .container`
- `#\35 pVEAX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pVEAX > .teaser-link > .container`
- `#\34 3j3GG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3j3GG > .teaser-link > .container`
- `#\33 pkWlL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pkWlL > .teaser-link > .container > .information`
- `#\33 pkWlL > .teaser-link > .container > h2`
- `#\33 pkWlL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nazneen Khan-Østrem"]`
- `img[alt="– Det betyr alt i livet"]`
- `#Gx1xzQ > .teaser-link > .container`
- `#pB6Wrj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB6Wrj > .teaser-link > .container`
- `#wrEEoL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEEoL > .teaser-link > .container > .information`
- `#wrEEoL > .teaser-link > .container > h2`
- `#wrEEoL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#wrEgm4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEgm4 > .teaser-link > .container`
- `#wrErAA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrErAA > .teaser-link > .container`
- `#OknrbE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OknrbE > .teaser-link > .container > .information`
- `#OknrbE > .teaser-link > .container > .illustration-container > .text`
- `#OknrbE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Maryam Iqbal Tahir"]`
- `#wrErEL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrErEL > .teaser-link > .container`
- `#Gx1xMl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx1xMl > .teaser-link > .container`
- `#alXk6L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alXk6L > .teaser-link > .container`
- `#pBg3Wo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBg3Wo > .teaser-link > .container`
- `#zOLGEO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLGEO > .teaser-link > .container > .information`
- `#zOLGEO > .teaser-link > .container > h2`
- `#zOLGEO > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Thomas Thiis-Evensen"]`
- `#wrEEjo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEEjo > .teaser-link > .container > .information`
- `#wrEEjo > .teaser-link > .container > h2`
- `#wrEEjo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#Ar2PpA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar2PpA > .teaser-link > .container`
- `#zOLg71 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLg71 > .teaser-link > .container > .information`
- `#zOLg71 > .teaser-link > .container > .illustration-container > .text`
- `#zOLg71 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#K8B0ve > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8B0ve > .teaser-link > .container > .information`
- `#K8B0ve > .teaser-link > .container > .illustration-container > .text`
- `#K8B0ve > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#K8B0ve > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#\32 p1Bdr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1Bdr > .teaser-link > .container`
- `#\36 qwbWO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qwbWO > .teaser-link > .container > .information`
- `#\36 qwbWO > .teaser-link > .container > h2`
- `#\36 qwbWO > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingrid Brekke"]`
- `#QJl76V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJl76V > .teaser-link > .container`
- `#zOLr35 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLr35 > .teaser-link > .container`
- `#\34 3jV0o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jV0o > .teaser-link > .container`
- `#alrr3A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alrr3A > .teaser-link > .container`
- `#wrEPpG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEPpG > .teaser-link > .container`
- `#j09p2b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j09p2b > .teaser-link > .container`
- `#\39 pmzqd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pmzqd > .teaser-link > .container`
- `#wrE85o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrE85o > .teaser-link > .container`
- `#RjbgzW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjbgzW > .teaser-link > .container`
- `#\39 pmEVd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pmEVd > .teaser-link > .container`
- `#Gx1G8B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx1G8B > .teaser-link > .container`
- `#e71Epl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e71Epl > .teaser-link > .container > .information`
- `#e71Epl > .teaser-link > .container > h2`
- `#e71Epl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anna Cohen Kirah "]`
- `#e7WQq4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7WQq4 > .teaser-link > .container > .information`
- `#e7WQq4 > .teaser-link > .container > .illustration-container > .text`
- `#e7WQq4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#\34 B53r9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B53r9 > .teaser-link > .container > .information`
- `#\34 B53r9 > .teaser-link > .container > h2`
- `#\34 B53r9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Isabel Carvajal"]`
- `#e71KV4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e71KV4 > .teaser-link > .container`
- `img[alt="Hvorfor er norsk jul så trist?"]`
- `#pB6LP6 > .teaser-link > .container > .information`
- `#pB6LP6 > .teaser-link > .container > h2`
- `#pB6LP6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Johanne Tufto"]`
- `#K8v3Eo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8v3Eo > .teaser-link > .container`
- `#K8BQMX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8BQMX > .teaser-link > .container`
- `#XMlxVW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMlxVW > .teaser-link > .container`
- `#JOWyV4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWyV4 > .teaser-link > .container`
- `#q6nnao > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6nnao > .teaser-link > .container`
