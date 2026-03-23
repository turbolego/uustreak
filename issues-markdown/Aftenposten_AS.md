# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-03-23T00:37:31.844Z
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

- `#e7EBVy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6MOdQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pMvy9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3qaK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjzAy5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0wrE6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JObABX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oko5WA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1yzLo > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 218

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#XMjvr7 > .teaser-link > .teaser-image-wrapper`
- `#XMjvr7 > .teaser-link > .container > .information`
- `#XMjvr7 > .teaser-link > .container > .illustration-container > .text`
- `#XMjvr7 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `#oE3blB`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\35 pE2vm > .teaser-link > .teaser-image-wrapper`
- `#\35 pE2vm > .teaser-link > .container > .illustration-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
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
- `#e7EBVy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7EBVy > .teaser-link > .container > h2`
- `#RjzAjA > .teaser-link > .container > .text-wrapper-small`
- `#RjzAjA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6MOdQ > .teaser-link > .container > .text-wrapper-small`
- `#\31 6MOdQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dr-edition-teaser-c75im175s > div`
- `#\31 6MgMK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6MgMK > .teaser-link > .container`
- `#zAW82b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW82b > .teaser-link > .container`
- `#\30 pGmpE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGmpE > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\33 pMvy9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pMvy9 > .teaser-link > .container > h2`
- `#oE3qaK > .teaser-link > .container > .text-wrapper-small`
- `#oE3qaK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE35R7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE35R7 > .teaser-link > .container > .text-wrapper-small`
- `#oE35R7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Svein Tore Bergestuen"]`
- `img[alt="Dette er unormalt"]`
- `#wrgkRM > .teaser-link > .container > .information`
- `#wrgkRM > .teaser-link > .container > .illustration-container > .text`
- `#wrgkRM > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `.series-location.teaser-bundle.new-bundles > .bundle-title`
- `#OkoJOk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkoJOk > .teaser-link > .teaser-image-wrapper > .series-header`
- `#OkoJOk > .teaser-link > .container > h2`
- `#JObAd6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JObAd6 > .teaser-link > .container > .illustration-container > .text`
- `#JObAd6 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#RjzAy5 > .teaser-link > .container > .text-wrapper-small`
- `#RjzAy5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qgznx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qgznx > .teaser-link > .container`
- `#oE3oGm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3oGm > .teaser-link > .container > .information`
- `.container > .kicker`
- `#oE3oGm > .teaser-link > .container > h2`
- `#oE3oGm > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Aslak Syse"]`
- `#Gxyepm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxyepm > .teaser-link > .container`
- `#xrgO0Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrgO0Q > .teaser-link > .container`
- `#OkoLXk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkoLXk > .teaser-link > .container`
- `#rrl4j8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrl4j8 > .teaser-link > .container`
- `#k0wp2a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0wp2a > .teaser-link > .container > .information`
- `#k0wp2a > .teaser-link > .container > h2`
- `#k0wp2a > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Isolde Hiis Bakke"]`
- `#m0PJPE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0PJPE > .teaser-link > .container > .information`
- `#m0PJPE > .teaser-link > .container > h2`
- `#m0PJPE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erling Dokk Holm"]`
- `#gkwVl5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkwVl5 > .teaser-link > .container`
- `#JOEdWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOEdWX > .teaser-link > .container`
- `#yE2vER > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yE2vER > .teaser-link > .container`
- `#Gxyzwq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxyzwq > .teaser-link > .container`
- `.benefits-widget-container`
- `#m01980 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m01980 > .teaser-link > .container`
- `img[alt="Bemerkelsesverdig vakkert"]`
- `#e7Mbgg > .teaser-link > .container`
- `#\30 pVkXM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pVkXM > .teaser-link > .container`
- `#XMjzEo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMjzEo > .teaser-link > .teaser-image-wrapper > .series-header`
- `#XMjzEo > .teaser-link > .container`
- `#bOzJnl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOzJnl > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(37) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#k0wrE6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0wrE6 > .teaser-link > .container > h2`
- `#JObABX > .teaser-link > .container > .text-wrapper-small`
- `#JObABX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMjv3m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMjv3m > .teaser-link > .container`
- `#QJMLBW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJMLBW > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(40)`
- `#m0PXnl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0PXnl > .teaser-link > .container`
- `#e7M3KO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7M3KO > .teaser-link > .container`
- `#Arvj6n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arvj6n > .teaser-link > .container`
- `#ExyXl3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExyXl3 > .teaser-link > .container`
- `#n1yo95 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1yo95 > .teaser-link > .container > .information`
- `#n1yo95 > .teaser-link > .container > h2`
- `#n1yo95 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Thomas Thiis-Evensen"]`
- `#q6P2pO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6P2pO > .teaser-link > .container`
- `img[alt="Hva ble dette flyet kalt?"]`
- `#\34 3Bl2a > .teaser-link > .container`
- `#bOm1k3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOm1k3 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#bOm1k3 > .teaser-link > .container`
- `#q6P2ME > .teaser-link > .container > .text-wrapper-small`
- `#q6P2ME > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEnbvR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEnbvR > .teaser-link > .container`
- `#wrgWM4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgWM4 > .teaser-link > .container`
- `#L4MPyV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4MPyV > .teaser-link > .container`
- `#Gxy4rB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxy4rB > .teaser-link > .container`
- `img[alt="Operatragedie uten slagkraft"]`
- `#\35 pE1mX > .teaser-link > .container`
- `#e7M3zM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7M3zM > .teaser-link > .container`
- `img[alt="Gi denne mannen en hovedrolle"]`
- `#\35 pE9l6 > .teaser-link > .container`
- `#zOAjRr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOAjRr > .teaser-link > .container`
- `#oE3kd0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3kd0 > .teaser-link > .container`
- `#K8nV5y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8nV5y > .teaser-link > .container`
- `#JOb704 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOb704 > .teaser-link > .container > .information`
- `#JOb704 > .teaser-link > .container > h2`
- `#JOb704 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
- `#\38 pq46r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pq46r > .teaser-link > .container > .information`
- `#\38 pq46r > .teaser-link > .container > .illustration-container > .text`
- `#\38 pq46r > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Maryam Iqbal Tahir"]`
- `#j0Q460 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0Q460 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(59) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Oko5WA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oko5WA > .teaser-link > .container > h2`
- `#n1yzLo > .teaser-link > .container > .text-wrapper-small`
- `#n1yzLo > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrg6jj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrg6jj > .teaser-link > .container`
- `#lnw2J7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnw2J7 > .teaser-link > .container`
- `#pBPwL6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBPwL6 > .teaser-link > .container`
- `#xrmarQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrmarQ > .teaser-link > .container`
- `#L4MBaP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4MBaP > .teaser-link > .container`
- `#d4R5Lz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4R5Lz > .teaser-link > .container`
- `#XMjMWE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMjMWE > .teaser-link > .container`
- `#d4wMpO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4wMpO > .teaser-link > .container`
- `#\30 pV1zE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pV1zE > .teaser-link > .container`
- `#\31 6M9gJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6M9gJ > .teaser-link > .container`
