# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-04-18T08:48:23.334Z
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
- **Count:** 4

#### Affected Elements:

- `#ArbVOA > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `img[alt="Dette er ikke en pølsebod"]`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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

- `#pB1xoX > .teaser-link > .teaser-image-wrapper`
- `#pB1xoX > .teaser-link > .container > .information`
- `#pB1xoX > .teaser-link > .container > .illustration-container > .text`
- `#pB1xoX > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.double.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
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
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#ArbVOA > .teaser-link > .teaser-image-wrapper`
- `#ArbVOA > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#pBWlv1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBWlv1 > .teaser-link > .container`
- `#K8r4vG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8r4vG > .teaser-link > .container`
- `#\38 pGKyG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pGKyG > .teaser-link > .container`
- `#aJO922 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJO922 > .teaser-link > .container`
- `#GxrRKm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxrRKm > .teaser-link > .container`
- `#Rj5e6J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj5e6J > .teaser-link > .container`
- `.games-widget`
- `#\33 p1d80 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p1d80 > .teaser-link > .container`
- `#V6gjnd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gjnd > .teaser-link > .container`
- `#Rj58vA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj58vA > .teaser-link > .container`
- `#j0vELz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vELz > .teaser-link > .container`
- `#n19lrL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n19lrL > .teaser-link > .container`
- `#BxxndE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxxndE > .teaser-link > .container`
- `#Arr6wj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arr6wj > .teaser-link > .container`
- `#bO8vOq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8vOq > .teaser-link > .container`
- `#XMjv3m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMjv3m > .teaser-link > .container`
- `#xrljwX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrljwX > .teaser-link > .container > .information`
- `#xrljwX > .teaser-link > .container > h2`
- `#xrljwX > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristin Clemet"]`
- `#e7GEp4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7GEp4 > .teaser-link > .container`
- `#Exy12a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exy12a > .teaser-link > .container`
- `#e7Ggxa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7Ggxa > .teaser-link > .container`
- `#vrly7X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrly7X > .teaser-link > .container`
- `#wr32xd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr32xd > .teaser-link > .container`
- `#aJlJPO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJlJPO > .teaser-link > .container`
- `.teaser-image[alt="Norge kan bli et turisthelvete"][decoding="async"]`
- `#pB1BXo > .teaser-link > .container > .information`
- `#pB1BXo > .teaser-link > .container > .illustration-container > .text`
- `#pB1BXo > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"][width="128"][height="128"]`
- `.benefits-widget-container`
- `#oE337R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE337R > .teaser-link > .container`
- `#oEKPq0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEKPq0 > .teaser-link > .container`
- `#\30 pGey6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGey6 > .teaser-link > .container`
- `#GxrKMQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxrKMQ > .teaser-link > .teaser-image-wrapper > .series-header`
- `#GxrKMQ > .teaser-link > .container`
- `#L4MyVx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4MyVx > .teaser-link > .container`
- `#Rj5lGx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj5lGx > .teaser-link > .container > .information`
- `#Rj5lGx > .teaser-link > .container > .illustration-container > .text`
- `#Rj5lGx > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#wrrwo5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrrwo5 > .teaser-link > .container`
- `#K8rkme > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8rkme > .teaser-link > .container`
- `#j0vJEb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vJEb > .teaser-link > .container`
- `#xrlknn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrlknn > .teaser-link > .container`
- `#\30 pBx5G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pBx5G > .teaser-link > .container`
- `#XM9npr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM9npr > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(44) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Dette er ikke en pølsebod"]`
- `#\30 pBq5A > .teaser-link > .container > h2`
- `#pB1lGR > .teaser-link > .container > .text-wrapper-small`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJOy74 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJOy74 > .teaser-link > .container`
- `#Arbgbq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arbgbq > .teaser-link > .container > .information`
- `#Arbgbq > .teaser-link > .container > h2`
- `#Arbgbq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mari Teigen"]`
- `#d472kO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d472kO > .teaser-link > .container`
- `#BxMVKg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMVKg > .teaser-link > .container`
- `#Pdgnl7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdgnl7 > .teaser-link > .container`
- `#JOrXbm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOrXbm > .teaser-link > .container`
- `#K8rk3M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8rk3M > .teaser-link > .container`
- `#wr39Ao > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr39Ao > .teaser-link > .teaser-image-wrapper > .series-header`
- `#wr39Ao > .teaser-link > .container > .information`
- `#wr39Ao > .teaser-link > .container > .illustration-container > .text`
- `#wr39Ao > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#XM9BXm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM9BXm > .teaser-link > .container`
- `#vrlnBB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrlnBB > .teaser-link > .container`
- `#QJgBlJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJgBlJ > .teaser-link > .container > .information`
- `#QJgBlJ > .teaser-link > .container > h2`
- `#QJgBlJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Knut Mork Skagen"]`
- `#q662le > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q662le > .teaser-link > .container`
- `#K8r255 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8r255 > .teaser-link > .container`
- `#d47jyw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47jyw > .teaser-link > .container`
- `#xrlwwp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrlwwp > .teaser-link > .container`
- `#K8rkly > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8rkly > .teaser-link > .container`
- `#V6gLn3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gLn3 > .teaser-link > .container`
- `#M7ABg5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7ABg5 > .teaser-link > .container > .information`
- `#M7ABg5 > .teaser-link > .container > h2`
- `#M7ABg5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Alexander H. Sandtorv"]`
- `#m0KW7L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0KW7L > .teaser-link > .container`
- `#ArPOQA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArPOQA > .teaser-link > .container`
- `#y5ly1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5ly1E > .teaser-link > .container`
- `#\37 ppEBB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 ppEBB > .teaser-link > .container`
- `#M7AJR5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7AJR5 > .teaser-link > .container`
- `#JOr2QR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOr2QR > .teaser-link > .container`
- `#j0vamw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vamw > .teaser-link > .teaser-image-wrapper > .series-header`
- `#j0vamw > .teaser-link > .container`
- `#\37 p7Mgo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7Mgo > .teaser-link > .container`
- `#Gxr8z4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxr8z4 > .teaser-link > .container > .information`
- `#Gxr8z4 > .teaser-link > .container > .illustration-container > .text`
- `#Gxr8z4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#\30 pBXbB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pBXbB > .teaser-link > .container`
- `#\35 p8ePK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p8ePK > .teaser-link > .container`
- `#BxMza0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMza0 > .teaser-link > .container > .information`
- `#BxMza0 > .teaser-link > .container > .illustration-container > .text`
- `#BxMza0 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#BxMza0 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > .author-image[width="128"][height="128"]`
- `#OkgW13 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkgW13 > .teaser-link > .container`
- `#vrldVX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrldVX > .teaser-link > .container`
- `img[alt="Hva nå, NRK?"]`
- `#Okg0Eb > .teaser-link > .container > .information`
- `#Okg0Eb > .teaser-link > .container > .illustration-container > .text`
- `#Okg0Eb > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#pB19BE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB19BE > .teaser-link > .container`
- `#ExlxW5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExlxW5 > .teaser-link > .container`
- `#Okg0jE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okg0jE > .teaser-link > .container`
