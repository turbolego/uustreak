# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-03-17T00:32:53.938Z
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

- `img[alt="Dette skjedde i retten mandag"]`
- `#d4RblA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pV9AJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pMzPL > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJMK3A > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOmjad > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BmOE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ745d > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q343r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5EypK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138324"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138324"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138324"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138306"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138306"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138306"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138297"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138297"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138297"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138305"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138305"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138305"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138303"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138303"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138303"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138302"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138302"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138302"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138277"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138277"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138277"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138276"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138276"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138276"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138255"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138255"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138255"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138187"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138187"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138187"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(8) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\30 pVnAG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVnAG > .teaser-link > .container > .illustration-container > .text`
- `#\30 pVnAG > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#Oko01w > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Dette skjedde i retten mandag"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#oE3vx0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3vx0 > .teaser-link > .container > h2`
- `#oE3vx0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av May Synnøve Rogne"]`
- `#d4RblA > .teaser-link > .container > .text-wrapper-small`
- `#d4RblA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pV9AJ > .teaser-link > .container > .text-wrapper-small`
- `#\30 pV9AJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-location.teaser-bundle.new-bundles > .bundle-title`
- `#\35 pEMEe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#\35 pEMEe > .teaser-link > .container > h2`
- `#\33 pMzPL > .teaser-link > .container > .text-wrapper-small`
- `#\33 pMzPL > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJMK3A > .teaser-link > .container > .text-wrapper-small`
- `#QJMK3A > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 p3oPo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p3oPo > .teaser-link > .container > h2`
- `#\37 p3oPo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Iver B. Neumann"]`
- `#bOmjad > .teaser-link > .container > .text-wrapper-small`
- `#bOmjad > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#j0QnrL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0QnrL > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(17) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#m0BmOE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0BmOE > .teaser-link > .container > h2`
- `#aJ745d > .teaser-link > .container > .text-wrapper-small`
- `#aJ745d > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 p3eJw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 p3eJw > .teaser-link > .container`
- `#j0Qv80 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0Qv80 > .teaser-link > .container`
- `#y5E0wa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5E0wa > .teaser-link > .container`
- `#GxME3J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxME3J > .teaser-link > .container`
- `#wrgxnM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgxnM > .teaser-link > .container`
- `#\36 q3K4z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q3K4z > .teaser-link > .container`
- `#\37 p3Qz4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p3Qz4 > .teaser-link > .container`
- `#Bxl1gg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxl1gg > .teaser-link > .container`
- `#\37 p3JaK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p3JaK > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(28) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\36 q343r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q343r > .teaser-link > .container > h2`
- `#y5EypK > .teaser-link > .container > .text-wrapper-small`
- `#y5EypK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjznyA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjznyA > .teaser-link > .container`
- `#Ok3JXE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok3JXE > .teaser-link > .container`
- `#lnwLP7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnwLP7 > .teaser-link > .container > .information`
- `#lnwLP7 > .teaser-link > .container > h2`
- `#lnwLP7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jarle Breivik"]`
- `.benefits-widget-container`
- `#M7oqVK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7oqVK > .teaser-link > .container`
- `#\36 qkpj0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qkpj0 > .teaser-link > .container`
- `#xr3oMG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr3oMG > .teaser-link > .container`
- `#WvRG5r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvRG5r > .teaser-link > .container`
- `#\37 p3VQB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p3VQB > .teaser-link > .container`
- `#vrgyPX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrgyPX > .teaser-link > .container`
- `#JObMkX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JObMkX > .teaser-link > .container`
- `img[alt="Mer heltid – sterkere velferd"]`
- `#j0QMb0 > .teaser-link > .container`
- `#zOAeKv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOAeKv > .teaser-link > .container > .information`
- `#zOAeKv > .teaser-link > .container > h2`
- `#zOAeKv > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sarah Gaulin"]`
- `#\33 pMzgP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pMzgP > .teaser-link > .container`
- `#oE3y9R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3y9R > .teaser-link > .container`
- `#\37 p3Bw4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p3Bw4 > .teaser-link > .container > .information`
- `#\37 p3Bw4 > .teaser-link > .container > h2`
- `#\37 p3Bw4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\37 p3Bw4 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#wrg9R1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrg9R1 > .teaser-link > .container`
- `#oE38Xm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE38Xm > .teaser-link > .container`
- `#q6PRb1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6PRb1 > .teaser-link > .container > .information`
- `#q6PRb1 > .teaser-link > .container > h2`
- `#q6PRb1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Camilla Lunde"]`
- `#Bx0xR0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bx0xR0 > .teaser-link > .container`
- `#m0PgX1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0PgX1 > .teaser-link > .container`
- `#rrPboR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrPboR > .teaser-link > .container`
- `#\37 p3BQB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p3BQB > .teaser-link > .container`
- `#k0w6lA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0w6lA > .teaser-link > .container`
- `#OkrMGq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkrMGq > .teaser-link > .container`
- `#JObqqj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JObqqj > .teaser-link > .container`
- `#\30 pVkXM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVkXM > .teaser-link > .container`
- `#Rjz6gW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjz6gW > .teaser-link > .container > .information`
- `#Rjz6gW > .teaser-link > .container > h2`
- `#Rjz6gW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Johannes Kibsgaard"]`
- `#gkwB7k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkwB7k > .teaser-link > .container`
- `#q6Pkew > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Pkew > .teaser-link > .container`
- `img[alt="Bygger allianse i alliansen"]`
- `#XMjp4x > .teaser-link > .container > .information`
- `#XMjp4x > .teaser-link > .container > .illustration-container > .text`
- `#XMjp4x > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#XMjp4x > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#n1yG3Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1yG3Q > .teaser-link > .container > .information`
- `#n1yG3Q > .teaser-link > .container > h2`
- `#n1yG3Q > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kornelia Minsaas"]`
- `#\39 pK42d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pK42d > .teaser-link > .container`
- `#aJlJPO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJlJPO > .teaser-link > .container`
- `#q61J6E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q61J6E > .teaser-link > .container`
- `#\30 pVB96 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVB96 > .teaser-link > .container > .information`
- `#\30 pVB96 > .teaser-link > .container > .illustration-container > .text`
- `#\30 pVB96 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#pBPKz1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBPKz1 > .teaser-link > .container`
- `#zOA8oK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOA8oK > .teaser-link > .container > .information`
- `#zOA8oK > .teaser-link > .container > .illustration-container > .text`
- `#zOA8oK > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#zOA8oK > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `img[alt="Eventyrlig islandsk suksess "]`
- `#RjGBaa > .teaser-link > .container`
- `#oE3eJj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3eJj > .teaser-link > .container`
- `#m0Pe00 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Pe00 > .teaser-link > .container`
- `#pBPKKX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBPKKX > .teaser-link > .container`
- `#V6zQoW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6zQoW > .teaser-link > .container`
- `#vrgm6L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrgm6L > .teaser-link > .container`
