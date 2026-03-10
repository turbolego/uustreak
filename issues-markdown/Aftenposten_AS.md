# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-03-10T02:17:21.884Z
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
- **Count:** 9

#### Affected Elements:

- `#y5E3GR > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#q6PLAw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#pBPL6W > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3o8P9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Ondt blod i bonusfamilien"]`
- `#d4mAdz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pql81 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0EBm6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrg61L > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 224

#### Affected Elements:

- `#\33 pEnOA > .teaser-link > .teaser-image-wrapper`
- `#\33 pEnOA > .teaser-link > .container > .information`
- `#\33 pEnOA > .teaser-link > .container > .illustration-container > .text`
- `#\33 pEnOA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#y5E3GR > .teaser-link > .teaser-image-wrapper`
- `#y5E3GR > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138174"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138174"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138174"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138155"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138155"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138155"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138156"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138156"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138156"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137998"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137998"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137998"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138118"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138118"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138118"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138114"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138114"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138114"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138092"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138092"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138092"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138089"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138089"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138089"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138091"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138091"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138091"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137756"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137756"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137756"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#rrgRQw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrgRQw > .teaser-link > .container`
- `#dr-edition-teaser-75pc291ys > div`
- `#L418Mx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L418Mx > .teaser-link > .container`
- `#\33 pMkWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pMkWX > .teaser-link > .container > .information`
- `#\33 pMkWX > .teaser-link > .container > h2`
- `#\33 pMkWX > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ragnar Misje Bergem"]`
- `#V6zbGW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6zbGW > .teaser-link > .teaser-image-wrapper > .series-header`
- `#V6zbGW > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#xrmA7X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrmA7X > .teaser-link > .container > .illustration-container > .text`
- `#xrmA7X > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#xrmA7X > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#pBPL6W > .teaser-link > .container > .text-wrapper-small`
- `#pBPL6W > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3o8P9 > .teaser-link > .container > .text-wrapper-small`
- `#\34 3o8P9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y56BpE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y56BpE > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(18) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Ondt blod i bonusfamilien"]`
- `#zOL9O1 > .teaser-link > .container > h2`
- `#d4mAdz > .teaser-link > .container > .text-wrapper-small`
- `#d4mAdz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dr-edition-teaser-5p257o6ez > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(20) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\38 pql81 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pql81 > .teaser-link > .container > h2`
- `#k0EBm6 > .teaser-link > .container > .text-wrapper-small`
- `#k0EBm6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrg61L > .teaser-link > .container > .text-wrapper-small`
- `#wrg61L > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pB3Ly > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pB3Ly > .teaser-link > .container`
- `#gkwalk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkwalk > .teaser-link > .container`
- `#vrgmvV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrgmvV > .teaser-link > .container`
- `#zOg4kO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOg4kO > .teaser-link > .container`
- `#\38 pqm4d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pqm4d > .teaser-link > .container`
- `#M7oAdR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7oAdR > .teaser-link > .container`
- `#ln3Bm3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ln3Bm3 > .teaser-link > .container`
- `#y5Evn2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5Evn2 > .teaser-link > .container`
- `#rrl4j8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrl4j8 > .teaser-link > .container`
- `#K8plW4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8plW4 > .teaser-link > .container`
- `#\35 pBbqm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pBbqm > .teaser-link > .container`
- `.benefits-widget-container`
- `#Wv0b8K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv0b8K > .teaser-link > .container`
- `#\30 pKxlJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKxlJ > .teaser-link > .container`
- `#q6PnRe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6PnRe > .teaser-link > .container`
- `#Rj9Q2a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj9Q2a > .teaser-link > .container`
- `#\30 pVjA0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVjA0 > .teaser-link > .container > .information`
- `#\30 pVjA0 > .teaser-link > .container > h2`
- `#\30 pVjA0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jarle Breivik"]`
- `#wr8Pkd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8Pkd > .teaser-link > .container`
- `#d4nQ1z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4nQ1z > .teaser-link > .container`
- `#d4ROyw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4ROyw > .teaser-link > .container`
- `#\31 6MBRl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6MBRl > .teaser-link > .container`
- `#\32 p51Py > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p51Py > .teaser-link > .container`
- `#\32 pBmEr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pBmEr > .teaser-link > .container`
- `#QJMlrW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJMlrW > .teaser-link > .container`
- `#JOQ0bj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOQ0bj > .teaser-link > .container`
- `#\39 p3mEl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 p3mEl > .teaser-link > .container`
- `#Pdprze > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdprze > .teaser-link > .container`
- `#\38 pqlQ1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pqlQ1 > .teaser-link > .container`
- `#\36 q9GWo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q9GWo > .teaser-link > .container > .information`
- `#\36 q9GWo > .teaser-link > .container > h2`
- `#\36 q9GWo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Magne Sleire"]`
- `#bOGJng > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOGJng > .teaser-link > .container`
- `#oEn5eW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEn5eW > .teaser-link > .container`
- `#wrAy4M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrAy4M > .teaser-link > .container`
- `#\30 pVj40 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVj40 > .teaser-link > .container`
- `#e7JMGM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7JMGM > .teaser-link > .container`
- `#\38 pJqqE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJqqE > .teaser-link > .container`
- `#XMb797 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMb797 > .teaser-link > .container > .information`
- `#XMb797 > .teaser-link > .container > h2`
- `#XMb797 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Inga Strümke"]`
- `#\35 pBaWK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pBaWK > .teaser-link > .container > .information`
- `#\35 pBaWK > .teaser-link > .container > h2`
- `#\35 pBaWK > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Lund"]`
- `#Ok8y1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok8y1E > .teaser-link > .container`
- `#q61Bog > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q61Bog > .teaser-link > .container > .information`
- `#q61Bog > .teaser-link > .container > .illustration-container > .text`
- `#q61Bog > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[width="88"]`
- `#\31 65llQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 65llQ > .teaser-link > .container`
- `#n1QzAJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1QzAJ > .teaser-link > .container`
- `#JOQKn4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOQKn4 > .teaser-link > .container`
- `#\34 3z3JG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3z3JG > .teaser-link > .container`
- `#k0E4wa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0E4wa > .teaser-link > .container`
- `#\34 3o2Mg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3o2Mg > .teaser-link > .container > .information`
- `#\34 3o2Mg > .teaser-link > .container > .illustration-container > .text`
- `#\34 3o2Mg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\34 3o2Mg > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#ExamW3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExamW3 > .teaser-link > .container`
- `#XMbrWn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMbrWn > .teaser-link > .container`
- `#ArL1M5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArL1M5 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#ArL1M5 > .teaser-link > .container > .information`
- `#ArL1M5 > .teaser-link > .container > h2`
- `#ArL1M5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#K8ny46 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8ny46 > .teaser-link > .container`
- `#JOQVMX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOQVMX > .teaser-link > .container`
- `#\39 pzAnd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pzAnd > .teaser-link > .container > .information`
- `#\39 pzAnd > .teaser-link > .container > .illustration-container > .text`
- `#\39 pzAnd > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#vreW6m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vreW6m > .teaser-link > .container`
- `#\38 pJl9w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJl9w > .teaser-link > .container > .information`
- `#\38 pJl9w > .teaser-link > .container > .illustration-container > .text`
- `#\38 pJl9w > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#\32 pBOXR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pBOXR > .teaser-link > .container`
- `#\38 pJlnE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJlnE > .teaser-link > .container`
- `#d4w6mj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4w6mj > .teaser-link > .container`
- `#V6P0Pl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6P0Pl > .teaser-link > .container`
- `#d4wa91 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4wa91 > .teaser-link > .container`
