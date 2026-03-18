# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-03-18T00:32:19.419Z
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

- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#V6zMgd > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJbAy2 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrAL21 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JObXbJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgJmP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOmjad > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pV9AJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 232

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#OkoJok`
- `#\32 p5kOG > .teaser-link > .teaser-image-wrapper`
- `#\32 p5kOG > .teaser-link > .container > .information`
- `#\32 p5kOG > .teaser-link > .container > .illustration-container > .text`
- `#\32 p5kOG > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-hct9hogku > div`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138336"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138336"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138336"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138330"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138330"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138330"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
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
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\30 pVnAG > .teaser-link > .teaser-image-wrapper`
- `#\30 pVnAG > .teaser-link > .container > .illustration-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#wrAEGL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrAEGL > .teaser-link > .container`
- `#dr-edition-teaser-buuoe1zm1 > div`
- `#GxyXnm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxyXnm > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(12) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#m0Pdg4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Pdg4 > .teaser-link > .container > h2`
- `#m0Pdg4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#m0Pdg4 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#V6zMgd > .teaser-link > .container > .text-wrapper-small`
- `#V6zMgd > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJbAy2 > .teaser-link > .container > .text-wrapper-small`
- `#aJbAy2 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p5kPl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p5kPl > .teaser-link > .container`
- `#vrgm6L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrgm6L > .teaser-link > .container`
- `.games-widget`
- `#gk058a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk058a > .teaser-link > .container`
- `#e7M4A9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7M4A9 > .teaser-link > .container`
- `#bOm64A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOm64A > .teaser-link > .container > .information`
- `#bOm64A > .teaser-link > .container > .illustration-container > .text`
- `#bOm64A > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#y5Eroe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5Eroe > .teaser-link > .container`
- `#JOxeoX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxeoX > .teaser-link > .container`
- `#m0PzVp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0PzVp > .teaser-link > .container`
- `#\36 q343r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q343r > .teaser-link > .container`
- `#lnzxX9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnzxX9 > .teaser-link > .container`
- `#JOxzPJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxzPJ > .teaser-link > .container`
- `#bOmbXq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOmbXq > .teaser-link > .container`
- `#m0Pe00 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Pe00 > .teaser-link > .container`
- `#aJlo37 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJlo37 > .teaser-link > .container`
- `#y54yka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54yka > .teaser-link > .container`
- `#bOmJp3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOmJp3 > .teaser-link > .container > .information`
- `#bOmJp3 > .teaser-link > .container > h2`
- `#bOmJp3 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anders Folkestad"]`
- `#j0znbe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0znbe > .teaser-link > .container`
- `#Wv02MQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv02MQ > .teaser-link > .container`
- `#xrg7kj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrg7kj > .teaser-link > .container`
- `.benefits-widget-container`
- `#\32 p5VqR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p5VqR > .teaser-link > .container > .information`
- `#\32 p5VqR > .teaser-link > .container > h2`
- `#\32 p5VqR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jessie Kong"]`
- `#\32 pB3Ly > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pB3Ly > .teaser-link > .container`
- `#QJM0dW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJM0dW > .teaser-link > .container`
- `#\32 pBG0r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pBG0r > .teaser-link > .container`
- `#OkoBM1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkoBM1 > .teaser-link > .container`
- `#\33 pMgyP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pMgyP > .teaser-link > .container`
- `#gkwGjB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkwGjB > .teaser-link > .container`
- `#xrmWwG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrmWwG > .teaser-link > .container > .information`
- `#xrmWwG > .teaser-link > .container > h2`
- `#xrmWwG > .teaser-link > .container > .byline > div:nth-child(1)`
- `#xrmWwG > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#e7MoOK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7MoOK > .teaser-link > .container`
- `#m0P46L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0P46L > .teaser-link > .container`
- `#L4MkKV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4MkKV > .teaser-link > .container > .information`
- `#L4MkKV > .teaser-link > .container > h2`
- `#L4MkKV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Hilde Lyng"]`
- `#y5ExQg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5ExQg > .teaser-link > .container > .information`
- `#y5ExQg > .teaser-link > .container > h2`
- `#y5ExQg > .teaser-link > .container > .byline > div:nth-child(1)`
- `#y5ExQg > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#ExygoA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExygoA > .teaser-link > .container`
- `#\36 q30wz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q30wz > .teaser-link > .container`
- `#\38 pqzGw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pqzGw > .teaser-link > .container > .information`
- `#\38 pqzGw > .teaser-link > .container > h2`
- `#\38 pqzGw > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Tjærnås"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(45) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#wrAL21 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrAL21 > .teaser-link > .container > h2`
- `#JObXbJ > .teaser-link > .container > .text-wrapper-small`
- `#JObXbJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOAek4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOAek4 > .teaser-link > .container`
- `#M7n2dM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7n2dM > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(49) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#wrgJmP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgJmP > .teaser-link > .container > h2`
- `#\37 p3oPo > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p3oPo > .teaser-link > .container > .text-wrapper-small`
- `#\37 p3oPo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Iver B. Neumann"]`
- `#bOmjad > .teaser-link > .container > .text-wrapper-small`
- `#bOmjad > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1yKAa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1yKAa > .teaser-link > .container`
- `#\30 pVljG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVljG > .teaser-link > .container`
- `img[alt="Han må skjære igjennom"]`
- `#lnwaAA > .teaser-link > .container`
- `#j0QxEe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0QxEe > .teaser-link > .container`
- `img[alt="SSB venter ikke rentekutt i år"]`
- `#Exy2kl > .teaser-link > .container`
- `#j0QnrL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0QnrL > .teaser-link > .container`
- `#e7M789 > .teaser-link > .container > .text-wrapper-small`
- `#e7M789 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgxnM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgxnM > .teaser-link > .container`
- `#XMjbVn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMjbVn > .teaser-link > .container`
- `#\37 p3VQB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p3VQB > .teaser-link > .container`
- `img[alt="Mer heltid – sterkere velferd"]`
- `#j0QMb0 > .teaser-link > .container`
- `#lnwLP7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnwLP7 > .teaser-link > .container > .information`
- `#lnwLP7 > .teaser-link > .container > h2`
- `#lnwLP7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jarle Breivik"]`
- `#\33 pMzgP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pMzgP > .teaser-link > .container`
- `#vrgyPX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrgyPX > .teaser-link > .container`
- `.series-location.teaser-bundle.new-bundles > .bundle-title`
- `#d4RblA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4RblA > .teaser-link > .teaser-image-wrapper > .series-header`
- `#d4RblA > .teaser-link > .container > h2`
- `#oE3vx0 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3vx0 > .teaser-link > .container > .text-wrapper-small`
- `#oE3vx0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av May Synnøve Rogne"]`
- `#\30 pV9AJ > .teaser-link > .container > .text-wrapper-small`
- `#\30 pV9AJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOAeKv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOAeKv > .teaser-link > .container > .information`
- `#zOAeKv > .teaser-link > .container > h2`
- `#zOAeKv > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sarah Gaulin"]`
- `#JObMkX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JObMkX > .teaser-link > .container`
- `#wrg9R1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrg9R1 > .teaser-link > .container`
- `#oE38Xm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE38Xm > .teaser-link > .container`
- `#q6PRb1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6PRb1 > .teaser-link > .container > .information`
- `#q6PRb1 > .teaser-link > .container > h2`
- `#q6PRb1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Camilla Lunde"]`
- `#\36 q3K4z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q3K4z > .teaser-link > .container`
- `#\37 p3Bw4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p3Bw4 > .teaser-link > .container > .information`
- `#\37 p3Bw4 > .teaser-link > .container > h2`
- `#\37 p3Bw4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\37 p3Bw4 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
