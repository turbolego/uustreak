# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-03-22T00:35:11.131Z
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

- `#m0rGrg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjzAjA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExyOpG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrm01Q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3qaK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1yzLo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oko5WA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Dette er en gave, ikke et svik"]`

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
- **Count:** 221

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138420"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138420"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138420"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138377"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138377"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138377"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138409"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138409"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138409"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138394"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138394"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138394"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
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
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `.magazine.teaser-bundle.new-bundles > .bundle-title`
- `#m0rGrg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0rGrg > .teaser-link > .container > h2`
- `#RjzAjA > .teaser-link > .container > .text-wrapper-small`
- `#RjzAjA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#JObAd6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JObAd6 > .teaser-link > .container > .illustration-container > .text`
- `#JObAd6 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#ExyOpG > .teaser-link > .container > .text-wrapper-small`
- `#ExyOpG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrm01Q > .teaser-link > .container > .text-wrapper-small`
- `#xrm01Q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOm1k3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOm1k3 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#bOm1k3 > .teaser-link > .container`
- `img[alt="Gi denne mannen en hovedrolle"]`
- `#\35 pE9l6 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#oE3qaK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3qaK > .teaser-link > .container > h2`
- `#\31 6M2re > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6M2re > .teaser-link > .container > .illustration-container > .text`
- `#\31 6M2re > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\31 6M2re > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#\32 p52ey > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p52ey > .teaser-link > .container > .text-wrapper-small`
- `#\32 p52ey > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Une Bastholm"]`
- `.games-widget`
- `#\38 qgznx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qgznx > .teaser-link > .container`
- `#zAW82b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW82b > .teaser-link > .container`
- `#Gxyepm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxyepm > .teaser-link > .container`
- `#e7M3zM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7M3zM > .teaser-link > .container`
- `#\30 p4w6G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p4w6G > .teaser-link > .container`
- `#oEnbvR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEnbvR > .teaser-link > .container`
- `#y56ryg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y56ryg > .teaser-link > .container`
- `img[alt="Operatragedie uten slagkraft"]`
- `#\35 pE1mX > .teaser-link > .container`
- `#Gxyo1m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxyo1m > .teaser-link > .container`
- `#WvjKyK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjKyK > .teaser-link > .container`
- `#yE2vER > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yE2vER > .teaser-link > .container`
- `#lnw2J7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnw2J7 > .teaser-link > .container`
- `#K8nV5y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8nV5y > .teaser-link > .container`
- `#j0QJdb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0QJdb > .teaser-link > .container`
- `.benefits-widget-container`
- `#oE3kd0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3kd0 > .teaser-link > .container`
- `#bOGXAq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOGXAq > .teaser-link > .container`
- `#y5EQdE > .teaser-link > .container > .text-wrapper-small`
- `#y5EQdE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3dKLE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3dKLE > .teaser-link > .container`
- `#zOAjRr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOAjRr > .teaser-link > .container`
- `#L41OwJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41OwJ > .teaser-link > .container`
- `#gkw5EL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkw5EL > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(40)`
- `#JOb704 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOb704 > .teaser-link > .container > .information`
- `#JOb704 > .teaser-link > .container > h2`
- `#JOb704 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
- `#Bx0obw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bx0obw > .teaser-link > .container`
- `#\38 pq46r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pq46r > .teaser-link > .container > .information`
- `#\38 pq46r > .teaser-link > .container > .illustration-container > .text`
- `#\38 pq46r > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Maryam Iqbal Tahir"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(44) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#n1yzLo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1yzLo > .teaser-link > .container > h2`
- `#Oko5WA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oko5WA > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Dette er en gave, ikke et svik"]`
- `#n1yjpa > .teaser-link > .container > .text-wrapper-small`
- `#\30 pVPG2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVPG2 > .teaser-link > .container`
- `#rrPOQ8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrPOQ8 > .teaser-link > .container`
- `#vrg6jj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrg6jj > .teaser-link > .container`
- `#j0Q460 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0Q460 > .teaser-link > .container`
- `#xrmarQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrmarQ > .teaser-link > .container`
- `img[alt="Dette er unormalt"]`
- `#wrgkRM > .teaser-link > .container > .information`
- `#wrgkRM > .teaser-link > .container > .illustration-container > .text`
- `#wrgkRM > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#wrgkRM > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#d4Ry3j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4Ry3j > .teaser-link > .container`
- `#pBPwL6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBPwL6 > .teaser-link > .container`
- `#bOmlOA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOmlOA > .teaser-link > .container`
- `#d4R5Lz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4R5Lz > .teaser-link > .container`
- `#L4MBaP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4MBaP > .teaser-link > .container`
- `#XMjMWE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMjMWE > .teaser-link > .container`
- `#\31 6M9gJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6M9gJ > .teaser-link > .container`
- `#\30 pV1zE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pV1zE > .teaser-link > .container`
- `#Oko5A1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oko5A1 > .teaser-link > .container > .information`
- `#Oko5A1 > .teaser-link > .container > h2`
- `#Oko5A1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Elin Ørjasæter"]`
- `#y5EdwJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5EdwJ > .teaser-link > .container`
- `#j0QylA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0QylA > .teaser-link > .container`
- `#\32 p572G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p572G > .teaser-link > .container`
- `#JObX4X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JObX4X > .teaser-link > .container`
- `#wrgBQo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgBQo > .teaser-link > .container > .information`
- `#wrgBQo > .teaser-link > .container > h2`
- `#wrgBQo > .teaser-link > .container > .byline > div:nth-child(1)`
- `#wrgBQo > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#ArvKzx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArvKzx > .teaser-link > .container`
- `#pBPRJo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBPRJo > .teaser-link > .container`
- `img[alt="Dette er Tenerife, midt i Oslo"]`
- `#V6zAVW > .teaser-link > .container`
- `#Exy12a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exy12a > .teaser-link > .container`
- `#pBPme1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBPme1 > .teaser-link > .container`
- `img[alt="En Oscar er en god begynnelse"]`
- `#zOAeQw > .teaser-link > .container > .information`
- `#zOAeQw > .teaser-link > .container > .illustration-container > .text`
- `#zOAeQw > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#M7ng2J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7ng2J > .teaser-link > .container > .information`
- `#M7ng2J > .teaser-link > .container > .illustration-container > .text`
- `#M7ng2J > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `img[alt="90 minutter med mansplaining"]`
- `#GxyLJl > .teaser-link > .container > .information`
- `#GxyLJl > .teaser-link > .container > .illustration-container > .text`
- `#GxyLJl > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#GxyLJl > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#Oko95E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oko95E > .teaser-link > .container > .information`
- `#Oko95E > .teaser-link > .container > h2`
- `#Oko95E > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Renate Grønvold Bugge"]`
- `#\35 pEdKW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pEdKW > .teaser-link > .container`
- `#e7MBjM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7MBjM > .teaser-link > .container > .information`
- `#e7MBjM > .teaser-link > .container > h2`
- `#e7MBjM > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Stein Lillevolden"]`
- `#\36 q3Ja0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q3Ja0 > .teaser-link > .container`
- `#wrg2zG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrg2zG > .teaser-link > .teaser-image-wrapper > .series-header`
- `#wrg2zG > .teaser-link > .container`
