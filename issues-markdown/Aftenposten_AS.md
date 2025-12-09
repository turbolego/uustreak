# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-09T00:24:36.557Z
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
- **Count:** 3

#### Affected Elements:

- `#\34 3dLKo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plmgw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oERpEW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 225

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#bOMrMq`
- `#\38 plGBd > .teaser-link > .teaser-image-wrapper`
- `#\38 plGBd > .teaser-link > .container > .information`
- `#\38 plGBd > .teaser-link > .container > .illustration-container > .text`
- `#\38 plGBd > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `#\32 pn60v > .teaser-link > .teaser-image-wrapper`
- `#\32 pn60v > .teaser-link > .container > .information`
- `#\32 pn60v > .teaser-link > .container > h2`
- `#\32 pn60v > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Torheim"]`
- `#dr-edition-teaser-ltducu7uo > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137034"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137034"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137034"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
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
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#j098Ww > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j098Ww > .teaser-link > .container`
- `#skattelisten, .text`
- `#skattelisten, ol`
- `#skattelisten, #b4-tax-municipality-search`
- `#dr-edition-teaser-b53aa70l6 > div`
- `#BxVGQQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxVGQQ > .teaser-link > .container`
- `#\34 3dLKo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3dLKo > .teaser-link > .container > h2`
- `#y5v8le > .teaser-link > .container > .text-wrapper-small`
- `#y5v8le > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#\32 p1Gay > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1Gay > .teaser-link > .container > .information`
- `#\32 p1Gay > .teaser-link > .container > .illustration-container > .text`
- `#\32 p1Gay > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Ingunn Økland"]`
- `.games-widget`
- `#Oknj1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oknj1E > .teaser-link > .container`
- `img[alt="Hvem tjente mest der du bor?"]`
- `#\38 qbbrG > .teaser-link > .container`
- `#\39 3gWKl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3gWKl > .teaser-link > .container`
- `#V6l3xr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6l3xr > .teaser-link > .container`
- `#dRgbAo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgbAo > .teaser-link > .container`
- `.bundle-title`
- `#\37 plmgw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plmgw > .teaser-link > .container > h2`
- `#oERpEW > .teaser-link > .container > .text-wrapper-small`
- `#oERpEW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOW8om > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOW8om > .teaser-link > .container`
- `#rrLlj3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrLlj3 > .teaser-link > .container`
- `#pP72Ej > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP72Ej > .teaser-link > .container`
- `#\30 pE9lG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pE9lG > .teaser-link > .container > .information`
- `#\30 pE9lG > .teaser-link > .container > h2`
- `#\30 pE9lG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Svein Nordby"]`
- `#m0gExp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gExp > .teaser-link > .container`
- `#XMw5wb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMw5wb > .teaser-link > .container`
- `#xrRrb8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrRrb8 > .teaser-link > .container`
- `#VzK7lV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzK7lV > .teaser-link > .container`
- `#zOL8XO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOL8XO > .teaser-link > .container`
- `#\33 MLvmX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLvmX > .teaser-link > .container`
- `.benefits-widget-container`
- `#Ar2bLA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar2bLA > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Ar2bLA > .teaser-link > .container`
- `#mPGX34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGX34 > .teaser-link > .container`
- `#aJ24K7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ24K7 > .teaser-link > .container`
- `#OkbPj3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbPj3 > .teaser-link > .container`
- `#k0a8RQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0a8RQ > .teaser-link > .container`
- `#Mnx3PK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mnx3PK > .teaser-link > .container`
- `#vrm54X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrm54X > .teaser-link > .container`
- `#ny5EVL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5EVL > .teaser-link > .container`
- `#bOK75e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOK75e > .teaser-link > .container`
- `#xrRMAX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrRMAX > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(43)`
- `img[alt="Brutalt karakterdrap på Diddy"]`
- `#\39 pmBnw > .teaser-link > .container`
- `#d4d4JB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4d4JB > .teaser-link > .container`
- `#pB6LGw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB6LGw > .teaser-link > .container > .information`
- `#pB6LGw > .teaser-link > .container > h2`
- `#pB6LGw > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristin Clemet"]`
- `#vrm6Jm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrm6Jm > .teaser-link > .container`
- `#d4dveX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4dveX > .teaser-link > .container`
- `#bOME7B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOME7B > .teaser-link > .container`
- `#\34 3d3La > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3d3La > .teaser-link > .container`
- `#Rjx1JO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjx1JO > .teaser-link > .container`
- `#QJlPoQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJlPoQ > .teaser-link > .container`
- `#K8vPlX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8vPlX > .teaser-link > .container`
- `#QJlP9P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJlP9P > .teaser-link > .container`
- `#oERvgR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oERvgR > .teaser-link > .container`
- `#wr6qzL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr6qzL > .teaser-link > .container`
- `#\37 plVx3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plVx3 > .teaser-link > .container`
- `#k0aM49 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0aM49 > .teaser-link > .container`
- `#k0aMqa > .teaser-link > .container > .text-wrapper-small`
- `#k0aMqa > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO16v8 > .teaser-link > .container > .text-wrapper-small`
- `#JO16v8 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEn4B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEn4B > .teaser-link > .container`
- `#Ar23WE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar23WE > .teaser-link > .container`
- `#d4d7oB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4d7oB > .teaser-link > .container`
- `#Mn42PE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn42PE > .teaser-link > .container`
- `#\33 pkW5M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pkW5M > .teaser-link > .container`
- `#K8v3v4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8v3v4 > .teaser-link > .container`
- `img[alt="Hvem er dronning av Belgia?"]`
- `#gkPa6a > .teaser-link > .container`
- `#\31 6k6WW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6k6WW > .teaser-link > .container`
- `#\34 3joba > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3joba > .teaser-link > .container`
- `#\32 p1v5y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1v5y > .teaser-link > .container`
- `#\33 pjBBd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pjBBd > .teaser-link > .container`
- `#\30 pEB8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEB8o > .teaser-link > .container`
- `#y51LRg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y51LRg > .teaser-link > .container > .information`
- `#y51LRg > .teaser-link > .container > .illustration-container > .text`
- `#y51LRg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#y51LRg > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Rakel Haugen Strand"][width="88"][height="88"]`
- `#wrEOkd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEOkd > .teaser-link > .container > .information`
- `#wrEOkd > .teaser-link > .container > h2`
- `#wrEOkd > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Annette Dreyer"]`
- `#aJ2G1E > .teaser-link > .container > .text-wrapper-small`
- `#aJ2G1E > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6p0x0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6p0x0 > .teaser-link > .container`
- `#LMyWRq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMyWRq > .teaser-link > .container`
- `#e71GLg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e71GLg > .teaser-link > .container`
- `#\30 pEGWG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEGWG > .teaser-link > .container`
- `#Gyvpol > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyvpol > .teaser-link > .container`
- `#\38 pl3KW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pl3KW > .teaser-link > .container > .information`
- `#\38 pl3KW > .teaser-link > .container > h2`
- `#\38 pl3KW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tormod Rogne"]`
- `#\38 pwmkd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwmkd > .teaser-link > .container > .information`
- `#\38 pwmkd > .teaser-link > .container > h2`
- `#\38 pwmkd > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bjørn Stærk"]`
- `#aJ2P9a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ2P9a > .teaser-link > .container`
- `#XMwwAW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMwwAW > .teaser-link > .container`
- `#alXk6L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alXk6L > .teaser-link > .container`
