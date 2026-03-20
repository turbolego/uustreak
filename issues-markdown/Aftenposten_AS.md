# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-03-20T00:32:21.824Z
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
- **Count:** 6

#### Affected Elements:

- `#xrm01Q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVaOG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0QylA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgzW4 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Dette er en gave, ikke et svik"]`
- `#d4R0oO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- `#zAW82b`
- `#Oko5A1 > .teaser-link > .teaser-image-wrapper`
- `#Oko5A1 > .teaser-link > .container > .information`
- `#Oko5A1 > .teaser-link > .container > h2`
- `#Oko5A1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-hx44kaugm > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138385"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138385"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138385"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138383"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138383"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138383"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138360"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138360"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138360"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138343"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138343"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138343"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
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
- `.teaser-bundle.new-bundles.series-location > .bundle-title`
- `#\38 pqpwE > .teaser-link > .teaser-image-wrapper`
- `#\38 pqpwE > .teaser-link > .container > h2`
- `.teaser-bundle.new-bundles.series-location > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(8) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\39 p3079 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 p3079 > .teaser-link > .container > .illustration-container > .text`
- `#\39 p3079 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#xrm01Q > .teaser-link > .container > .text-wrapper-small`
- `#xrm01Q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVaOG > .teaser-link > .container > .text-wrapper-small`
- `#\30 pVaOG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dr-edition-teaser-oa8s2lfn6 > div`
- `#\38 qgznx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qgznx > .teaser-link > .container`
- `#Oko95E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oko95E > .teaser-link > .container > .information`
- `#Oko95E > .teaser-link > .container > h2`
- `#Oko95E > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Renate Grønvold Bugge"]`
- `#pBPme1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBPme1 > .teaser-link > .container`
- `#JObX4X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JObX4X > .teaser-link > .container`
- `#ArvKzx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArvKzx > .teaser-link > .container`
- `.games-widget`
- `#Okrw4b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okrw4b > .teaser-link > .container`
- `#q6Pobw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Pobw > .teaser-link > .container`
- `#rrl4j8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrl4j8 > .teaser-link > .container`
- `#oE3r2R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3r2R > .teaser-link > .container`
- `#\36 q3K4z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q3K4z > .teaser-link > .container`
- `img[alt="90 minutter med mansplaining"]`
- `#GxyLJl > .teaser-link > .container > .information`
- `#GxyLJl > .teaser-link > .container > .illustration-container > .text`
- `#GxyLJl > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#\32 p572G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p572G > .teaser-link > .container`
- `#j0QJdb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0QJdb > .teaser-link > .container`
- `#pBPRJo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBPRJo > .teaser-link > .container`
- `#\34 3o2Rg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3o2Rg > .teaser-link > .container`
- `#q61a8z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q61a8z > .teaser-link > .container`
- `#\32 p5aX4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p5aX4 > .teaser-link > .container`
- `#pBP2kj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBP2kj > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(28) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#j0QylA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0QylA > .teaser-link > .container > h2`
- `#wrgzW4 > .teaser-link > .container > .text-wrapper-small`
- `#wrgzW4 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6zLjp > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6zLjp > .teaser-link > .container > .illustration-container > .text`
- `#V6zLjp > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#xr8GLB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr8GLB > .teaser-link > .container`
- `#K8MxbM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8MxbM > .teaser-link > .container`
- `#y54yka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54yka > .teaser-link > .container`
- `.benefits-widget-container`
- `#\30 pVRJ2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVRJ2 > .teaser-link > .container`
- `#M7ng2J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7ng2J > .teaser-link > .container > .information`
- `#M7ng2J > .teaser-link > .container > .illustration-container > .text`
- `#M7ng2J > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `img[alt="Kari Bremnes har fått kreft"]`
- `#rrP6vR > .teaser-link > .container`
- `#wrgBQo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgBQo > .teaser-link > .container > .information`
- `#wrgBQo > .teaser-link > .container > h2`
- `#wrgBQo > .teaser-link > .container > .byline > div:nth-child(1)`
- `#wrgBQo > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(36) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Dette er en gave, ikke et svik"]`
- `#n1yjpa > .teaser-link > .container > h2`
- `#d4R0oO > .teaser-link > .container > .text-wrapper-small`
- `#d4R0oO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q3aA8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q3aA8 > .teaser-link > .container`
- `#\34 3BaP9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3BaP9 > .teaser-link > .container`
- `#\30 pVa2E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVa2E > .teaser-link > .container`
- `#\36 q6VQo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q6VQo > .teaser-link > .container`
- `#\33 pMmde > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pMmde > .teaser-link > .container`
- `#QJM4MQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJM4MQ > .teaser-link > .container`
- `#QJM6zx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJM6zx > .teaser-link > .container`
- `#\35 pEdKW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pEdKW > .teaser-link > .container`
- `#\34 3BgAa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3BgAa > .teaser-link > .container`
- `#\36 q3Ja0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q3Ja0 > .teaser-link > .container`
- `#e7MBjM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7MBjM > .teaser-link > .container > .information`
- `#e7MBjM > .teaser-link > .container > h2`
- `#e7MBjM > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Stein Lillevolden"]`
- `#oE3Org > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3Org > .teaser-link > .container`
- `#Oko9EV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oko9EV > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Oko9EV > .teaser-link > .container > .information`
- `#Oko9EV > .teaser-link > .container > h2`
- `#Oko9EV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#\34 3Bk4e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3Bk4e > .teaser-link > .container`
- `#wrg2zG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrg2zG > .teaser-link > .teaser-image-wrapper > .series-header`
- `#wrg2zG > .teaser-link > .container`
- `#y5ExPe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5ExPe > .teaser-link > .container`
- `.container-linear-gradient`
- `.container-darken`
- `#\38 pqpjG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pqpjG > .teaser-link > .container`
- `#JOx3n8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOx3n8 > .teaser-link > .container`
- `img[alt="Perfekt tomhet"]`
- `#pBPpGW > .teaser-link > .container`
- `#\30 pVxp2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVxp2 > .teaser-link > .container > .information`
- `#\30 pVxp2 > .teaser-link > .container > .illustration-container > .text`
- `#\30 pVxp2 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#JObAvm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JObAvm > .teaser-link > .container`
- `#wrgjQ5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgjQ5 > .teaser-link > .container`
- `#PdpwVJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdpwVJ > .teaser-link > .container`
- `#QJMb04 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJMb04 > .teaser-link > .container`
- `#ExyXGl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExyXGl > .teaser-link > .container`
- `img[alt="Kultur på blå resept?"]`
- `#\34 3BeqG > .teaser-link > .container > .information`
- `#\34 3BeqG > .teaser-link > .container > h2`
- `#\34 3BeqG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Suzanne Paalgard"]`
- `#j0QEOw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0QEOw > .teaser-link > .container > .information`
- `#j0QEOw > .teaser-link > .container > h2`
- `#j0QEOw > .teaser-link > .container > .byline > div:nth-child(1)`
- `#j0QEOw > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#QJMAQ4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJMAQ4 > .teaser-link > .container`
- `#bOg1ov > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOg1ov > .teaser-link > .container`
- `#QJMkkV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJMkkV > .teaser-link > .container`
