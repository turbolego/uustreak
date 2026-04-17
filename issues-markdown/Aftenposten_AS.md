# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-04-17T03:17:56.687Z
**URL:** [https://www.aftenposten.no/](https://www.aftenposten.no/)
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
- **Count:** 3

#### Affected Elements:

- `#Gxr8Al > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d470nw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vamw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 234

#### Affected Elements:

- `#n19PzL > .teaser-link > .teaser-image-wrapper`
- `#n19PzL > .teaser-link > .container > .information`
- `#n19PzL > .teaser-link > .container > h2`
- `#n19PzL > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138655"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138655"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138655"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138643"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138643"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138643"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138635"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138635"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138635"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138611"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138611"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138611"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138629"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138629"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138629"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138619"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138619"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138619"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138567"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138567"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138567"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138592"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138592"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138592"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138594"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138594"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138594"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138133"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138133"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138133"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#\33 ppAV0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 ppAV0 > .teaser-link > .container`
- `#JOrXbm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOrXbm > .teaser-link > .container`
- `#dr-edition-teaser-96e2srht > div`
- `#BxMVKg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMVKg > .teaser-link > .container`
- `#QJgBlJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJgBlJ > .teaser-link > .container > .information`
- `#QJgBlJ > .teaser-link > .container > h2`
- `#QJgBlJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Knut Mork Skagen"]`
- `#XMMo7W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMMo7W > .teaser-link > .teaser-image-wrapper > .series-header`
- `#XMMo7W > .teaser-link > .container > .information`
- `#XMMo7W > .teaser-link > .container > .illustration-container > .text`
- `#XMMo7W > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#d47jyw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47jyw > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#WvgdMa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvgdMa > .teaser-link > .teaser-image-wrapper > .series-header`
- `.kicker`
- `#WvgdMa > .teaser-link > .container > h2`
- `#y5lbaE > .teaser-link > .container > .text-wrapper-small`
- `#y5lbaE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Afshin Ismaeli"]`
- `#q6P2pO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6P2pO > .teaser-link > .container`
- `#vrlnBB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrlnBB > .teaser-link > .container`
- `#lnKk23 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnKk23 > .teaser-link > .container`
- `#wr39Ao > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr39Ao > .teaser-link > .teaser-image-wrapper > .series-header`
- `#wr39Ao > .teaser-link > .container > .information`
- `#wr39Ao > .teaser-link > .container > .illustration-container > .text`
- `#wr39Ao > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#Pdr6rR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdr6rR > .teaser-link > .container`
- `#XM9BXm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM9BXm > .teaser-link > .container`
- `#zAW82b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW82b > .teaser-link > .container`
- `#q662le > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q662le > .teaser-link > .container`
- `#pB1vxE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB1vxE > .teaser-link > .container`
- `#y56BpE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y56BpE > .teaser-link > .container`
- `#\36 q40W8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q40W8 > .teaser-link > .container`
- `#\35 pEdKW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pEdKW > .teaser-link > .container`
- `#V6gLn3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gLn3 > .teaser-link > .container`
- `.benefits-widget-container`
- `#ExxKkj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExxKkj > .teaser-link > .container`
- `#xrlwwp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrlwwp > .teaser-link > .container`
- `#d47qJX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47qJX > .teaser-link > .container`
- `#\32 pVk2q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pVk2q > .teaser-link > .container`
- `#q6yVgg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6yVgg > .teaser-link > .container`
- `#K8r255 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8r255 > .teaser-link > .container`
- `#OkoLXk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkoLXk > .teaser-link > .container`
- `#M7ABg5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7ABg5 > .teaser-link > .container > .information`
- `#M7ABg5 > .teaser-link > .container > h2`
- `#M7ABg5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Alexander H. Sandtorv"]`
- `#y5ly1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5ly1E > .teaser-link > .container`
- `#K8rkly > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8rkly > .teaser-link > .container`
- `#WvgBBk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvgBBk > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(42)`
- `#\37 ppEBB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 ppEBB > .teaser-link > .container`
- `#ArPOQA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArPOQA > .teaser-link > .container`
- `#JOr2QR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOr2QR > .teaser-link > .container`
- `#M7AJR5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7AJR5 > .teaser-link > .container`
- `#\32 pVl4v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pVl4v > .teaser-link > .container`
- `#\37 p7Mgo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7Mgo > .teaser-link > .container`
- `#\39 pkVXr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pkVXr > .teaser-link > .container`
- `#\39 pkL39 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pkL39 > .teaser-link > .container`
- `#\30 pBXbB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pBXbB > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(51) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Gxr8Al > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxr8Al > .teaser-link > .container > h2`
- `#d470nw > .teaser-link > .container > .text-wrapper-small`
- `#d470nw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vamw > .teaser-link > .container > .text-wrapper-small`
- `#j0vamw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExlxW5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExlxW5 > .teaser-link > .container`
- `#pB1W21 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB1W21 > .teaser-link > .container`
- `#Gxr8z4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxr8z4 > .teaser-link > .container > .information`
- `#Gxr8z4 > .teaser-link > .container > .illustration-container > .text`
- `#Gxr8z4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#m0KW7L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0KW7L > .teaser-link > .container`
- `#rrMyg8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrMyg8 > .teaser-link > .container`
- `#vrldVX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrldVX > .teaser-link > .container`
- `#BxMza0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMza0 > .teaser-link > .container > .information`
- `#BxMza0 > .teaser-link > .container > .illustration-container > .text`
- `#BxMza0 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#BxMza0 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > .author-image[width="128"][height="128"]`
- `img[alt="Hva nå, NRK?"]`
- `#Okg0Eb > .teaser-link > .container > .information`
- `#Okg0Eb > .teaser-link > .container > .illustration-container > .text`
- `#Okg0Eb > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\35 p8ePK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p8ePK > .teaser-link > .container`
- `#OkgW13 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkgW13 > .teaser-link > .container`
- `#pB19BE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB19BE > .teaser-link > .container`
- `#n19ORL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n19ORL > .teaser-link > .container`
- `#Pdpoop > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdpoop > .teaser-link > .container`
- `#Okg0jE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okg0jE > .teaser-link > .container`
- `#Rj5QR2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj5QR2 > .teaser-link > .container > .information`
- `#Rj5QR2 > .teaser-link > .container > h2`
- `#Rj5QR2 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Vebjørn Selbekk"]`
- `img[alt="Har Trump valgt sin kronprins?"]`
- `#Gxr65l > .teaser-link > .container > .information`
- `#Gxr65l > .teaser-link > .container > h2`
- `#Gxr65l > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#\32 pV4Ga > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pV4Ga > .teaser-link > .container`
- `#\34 3OV3G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3OV3G > .teaser-link > .container`
- `#pB1lGR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB1lGR > .teaser-link > .container`
- `#d47qxj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47qxj > .teaser-link > .container > .information`
- `#d47qxj > .teaser-link > .container > h2`
- `#d47qxj > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingrid Dahl Hovland"]`
- `#JOrR3b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOrR3b > .teaser-link > .container`
- `#\35 p8V01 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p8V01 > .teaser-link > .container`
- `#\30 pBGjG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pBGjG > .teaser-link > .container`
- `#oEKl8R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEKl8R > .teaser-link > .container`
- `img[alt="Det «LIS» egentlig handler om"]`
- `#Exlmj5 > .teaser-link > .container > .information`
- `#Exlmj5 > .teaser-link > .container > h2`
- `#Exlmj5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Amir David Arden"]`
- `#Rj5jJO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj5jJO > .teaser-link > .container > .information`
- `#Rj5jJO > .teaser-link > .container > h2`
- `#Rj5jJO > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Henrik Herrebrøden"]`
- `#d47MgX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47MgX > .teaser-link > .container`
- `#gkdkgL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkdkgL > .teaser-link > .container > .information`
- `#gkdkgL > .teaser-link > .container > .illustration-container > .text`
- `#gkdkgL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"][width="128"][height="128"]`
