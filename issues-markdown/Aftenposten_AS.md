# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-08T00:25:18.146Z
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
- **Count:** 4

#### Affected Elements:

- `#aJ2G1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okn80k > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Trygg styring? Nei."]`
- `#pB6Wrj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 237

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-zmiv921w > div`
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
- `#d4dJ9w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4dJ9w > .teaser-link > .container`
- `#\37 plP18 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plP18 > .teaser-link > .container`
- `#skattelisten, .text`
- `#skattelisten, ol`
- `#skattelisten, #b4-tax-municipality-search`
- `#dr-edition-teaser-q9vnqd4yt > div`
- `#j098Ww > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j098Ww > .teaser-link > .container`
- `#\30 pEB8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEB8o > .teaser-link > .container`
- `#\33 pjBBd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pjBBd > .teaser-link > .container`
- `#LMyWRq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMyWRq > .teaser-link > .container`
- `.games-widget`
- `#BxVGQQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxVGQQ > .teaser-link > .container`
- `img[alt="Hvem tjente mest der du bor?"]`
- `#\38 qbbrG > .teaser-link > .container`
- `#dr-edition-teaser-axnay8lde > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(20) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#aJ2G1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ2G1E > .teaser-link > .container > h2`
- `img[alt="Putin er ikke rasjonell"]`
- `#e7W3J4 > .teaser-link > .container > .illustration-container > .text`
- `#e7W3J4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#Okn80k > .teaser-link > .container > .text-wrapper-small`
- `#Okn80k > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pl0K2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pl0K2 > .teaser-link > .container`
- `#\33 pkW5M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pkW5M > .teaser-link > .container`
- `#\39 3gWKl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3gWKl > .teaser-link > .container`
- `#y51LRg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y51LRg > .teaser-link > .container > .information`
- `#y51LRg > .teaser-link > .container > .illustration-container > .text`
- `#y51LRg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#\36 3p2JO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3p2JO > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\36 3p2JO > .teaser-link > .container`
- `#q6p0x0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6p0x0 > .teaser-link > .container`
- `#VzK7lV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzK7lV > .teaser-link > .container`
- `#\30 pEGWG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEGWG > .teaser-link > .container`
- `#wrEOkd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEOkd > .teaser-link > .container > .information`
- `#wrEOkd > .teaser-link > .container > h2`
- `#wrEOkd > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Annette Dreyer"]`
- `#m0gExp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gExp > .teaser-link > .container`
- `#\32 p1v5y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1v5y > .teaser-link > .container`
- `#wgMexG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMexG > .teaser-link > .container`
- `.benefits-widget-container`
- `#\39 pmBnw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pmBnw > .teaser-link > .container`
- `#LMvpnx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvpnx > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(36)`
- `#Av6AQM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6AQM > .teaser-link > .container`
- `#d4d7oB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4d7oB > .teaser-link > .container`
- `#Pp6w4X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6w4X > .teaser-link > .container`
- `#\38 pwP6w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwP6w > .teaser-link > .container`
- `#PpV2JR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpV2JR > .teaser-link > .container`
- `#\34 3joba > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3joba > .teaser-link > .container`
- `#\31 6k6WW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6k6WW > .teaser-link > .container`
- `#e71GLg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e71GLg > .teaser-link > .container`
- `#M7gA8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7gA8o > .teaser-link > .container`
- `#\38 pwPxr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwPxr > .teaser-link > .container`
- `#oERpEW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oERpEW > .teaser-link > .container`
- `#BxJr6e > .teaser-link > .container > .text-wrapper-small`
- `#BxJr6e > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1rXb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1rXb > .teaser-link > .container`
- `#M7gAM0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7gAM0 > .teaser-link > .container`
- `#\38 pl3KW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pl3KW > .teaser-link > .container > .information`
- `#\38 pl3KW > .teaser-link > .container > h2`
- `#\38 pl3KW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tormod Rogne"]`
- `#bOM9ae > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOM9ae > .teaser-link > .container`
- `#V6l3xr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6l3xr > .teaser-link > .container`
- `#\38 pwmkd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwmkd > .teaser-link > .container > .information`
- `#\38 pwmkd > .teaser-link > .container > h2`
- `#\38 pwmkd > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bjørn Stærk"]`
- `#m06KXO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m06KXO > .teaser-link > .container`
- `#xrRrb8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrRrb8 > .teaser-link > .container`
- `#\37 plpPV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plpPV > .teaser-link > .container`
- `#\32 p180B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p180B > .teaser-link > .container > .information`
- `#\32 p180B > .teaser-link > .container > .illustration-container > .text`
- `#\32 p180B > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#aJ2P9a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ2P9a > .teaser-link > .container`
- `#XMwwAW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMwwAW > .teaser-link > .container`
- `#m0go90 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0go90 > .teaser-link > .container > .information`
- `#m0go90 > .teaser-link > .container > .illustration-container > .text`
- `#m0go90 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#m0go90 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#Pdr606 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdr606 > .teaser-link > .container > .information`
- `#Pdr606 > .teaser-link > .container > .illustration-container > .text`
- `#Pdr606 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#wrEApM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEApM > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(60) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Trygg styring? Nei."]`
- `#Pd39r7 > .teaser-link > .container > h2`
- `#pB6Wrj > .teaser-link > .container > .text-wrapper-small`
- `#pB6Wrj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxJWP0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxJWP0 > .teaser-link > .container`
- `#\33 pkWlL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pkWlL > .teaser-link > .container > .information`
- `#\33 pkWlL > .teaser-link > .container > h2`
- `#\33 pkWlL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nazneen Khan-Østrem"]`
- `#\34 BnbL9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BnbL9 > .teaser-link > .container`
- `#\35 pVEAX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pVEAX > .teaser-link > .container`
- `#m0gmP4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gmP4 > .teaser-link > .container`
- `#lw82rk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw82rk > .teaser-link > .teaser-image-wrapper > .series-header`
- `#lw82rk > .teaser-link > .container`
- `#OknrbE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OknrbE > .teaser-link > .container > .information`
- `#OknrbE > .teaser-link > .container > .illustration-container > .text`
- `#OknrbE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Maryam Iqbal Tahir"]`
- `#wrEgm4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEgm4 > .teaser-link > .container`
- `#QJl76V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJl76V > .teaser-link > .container`
- `#zOLGEO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLGEO > .teaser-link > .container > .information`
- `#zOLGEO > .teaser-link > .container > h2`
- `#zOLGEO > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Thomas Thiis-Evensen"]`
- `#alXk6L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alXk6L > .teaser-link > .container`
- `#pBg3Wo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBg3Wo > .teaser-link > .container`
- `#K8B0ve > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8B0ve > .teaser-link > .container > .information`
- `#K8B0ve > .teaser-link > .container > .illustration-container > .text`
- `#K8B0ve > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#K8B0ve > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#wrEEjo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEEjo > .teaser-link > .teaser-image-wrapper > .series-header`
- `#wrEEjo > .teaser-link > .container > .information`
- `#wrEEjo > .teaser-link > .container > h2`
- `#wrEEjo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#zOLg71 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLg71 > .teaser-link > .container > .information`
- `#zOLg71 > .teaser-link > .container > .illustration-container > .text`
- `#zOLg71 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#d45XPA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45XPA > .teaser-link > .container`
- `#Ar2PpA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar2PpA > .teaser-link > .container`
- `#\32 p1Bdr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1Bdr > .teaser-link > .container`
- `#alrr3A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alrr3A > .teaser-link > .container`
