# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-03-28T00:33:44.019Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 7

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
- **Count:** 19

#### Affected Elements:

- `#M7799K > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#k00KdB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `img[alt="Dette var en uklok avgjørelse"]`
- `#vrrk8X > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#e77MRR > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#QJJwpQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#L44WxJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#q66J4z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pKXnp > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71bQm > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d44GXw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M77dB0 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e77kV4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArrRVz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pprr6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOOVAq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j00wVA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4MyVx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pM4Rd > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 215

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#Arr0mr > .teaser-link > .teaser-image-wrapper`
- `#Arr0mr > .teaser-link > .container > .information`
- `#Arr0mr > .teaser-link > .container > h2`
- `#Arr0mr > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erlend Nesje"]`
- `#d44qGO`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#M7799K > .teaser-link > .teaser-image-wrapper`
- `#M7799K > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#JOO7d8 > .teaser-link > .teaser-image-wrapper`
- `#JOO7d8 > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138511"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138511"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138511"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138507"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138507"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138507"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138484"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138484"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138484"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138482"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138482"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138482"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138459"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138459"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138459"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138451"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138451"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138451"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138450"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138450"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138450"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138441"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138441"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138441"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138440"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138440"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138440"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138429"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138429"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138429"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#e77MRR > .teaser-link > .teaser-image-wrapper`
- `#e77MRR > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.magazine.teaser-bundle.new-bundles > .bundle-title`
- `#q66J4z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q66J4z > .teaser-link > .container > h2`
- `#\39 pKXnp > .teaser-link > .container > .text-wrapper-small`
- `#\39 pKXnp > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71bQm > .teaser-link > .container > .text-wrapper-small`
- `#M71bQm > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGey6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGey6 > .teaser-link > .container`
- `#d44GXw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d44GXw > .teaser-link > .container > h2`
- `#M77dB0 > .teaser-link > .container > .text-wrapper-small`
- `#M77dB0 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG83V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG83V > .teaser-link > .container`
- `.games-widget`
- `#\35 ppWLX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 ppWLX > .teaser-link > .container`
- `#k00EO6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k00EO6 > .teaser-link > .container`
- `#aJJO72 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJJO72 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(18) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#e77kV4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e77kV4 > .teaser-link > .container > h2`
- `#ArrRVz > .teaser-link > .container > .text-wrapper-small`
- `#ArrRVz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pprr6 > .teaser-link > .container > .text-wrapper-small`
- `#\30 pprr6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y559MK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y559MK > .teaser-link > .container`
- `#wrgAQA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrgAQA > .teaser-link > .container`
- `.sport.series-location.teaser-bundle > .bundle-title`
- `#K888AM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K888AM > .teaser-link > .teaser-image-wrapper > .series-header`
- `#K888AM > .teaser-link > .container > h2`
- `#zOOVAq > .teaser-link > .container > .text-wrapper-small`
- `#zOOVAq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j00wVA > .teaser-link > .container > .text-wrapper-small`
- `#j00wVA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yE2vER > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yE2vER > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(25) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#L4MyVx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4MyVx > .teaser-link > .container > h2`
- `#\33 pM4Rd > .teaser-link > .container > .text-wrapper-small`
- `#\33 pM4Rd > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pppEJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pppEJ > .teaser-link > .container`
- `#Arrxaq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arrxaq > .teaser-link > .container`
- `#rrl4j8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrl4j8 > .teaser-link > .container`
- `#\38 ppXX1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 ppXX1 > .teaser-link > .container`
- `#Bxxr10 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxxr10 > .teaser-link > .container`
- `.benefits-widget-container`
- `#Exxx4G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exxx4G > .teaser-link > .container > .information`
- `#Exxx4G > .teaser-link > .container > h2`
- `#Exxx4G > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erik Martiniussen"]`
- `#j0Qv80 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0Qv80 > .teaser-link > .container`
- `#zOOM11 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOOM11 > .teaser-link > .container`
- `#XMjgLE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMjgLE > .teaser-link > .container`
- `#\38 qgznx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qgznx > .teaser-link > .container`
- `#e77ama > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e77ama > .teaser-link > .container`
- `#\33 ppqXM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 ppqXM > .teaser-link > .container`
- `img[alt="Forsvaret må gjøre det umulige"]`
- `#j00vdA > .teaser-link > .container > .information`
- `#j00vdA > .teaser-link > .container > .illustration-container > .text`
- `#j00vdA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#\39 pprQM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pprQM > .teaser-link > .container`
- `#bOOqBA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOOqBA > .teaser-link > .container`
- `#BxxkVg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxxkVg > .teaser-link > .container`
- `#m00zvq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m00zvq > .teaser-link > .container`
- `#vrr3np > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrr3np > .teaser-link > .container > .information`
- `#vrr3np > .teaser-link > .container > h2`
- `#vrr3np > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anne-Karin Rime"]`
- `#pBB9aX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBB9aX > .teaser-link > .container`
- `#n11wWm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n11wWm > .teaser-link > .container`
- `#n111mB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n111mB > .teaser-link > .container`
- `#GxxOwx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxxOwx > .teaser-link > .container`
- `#K88G0y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K88G0y > .teaser-link > .container`
- `#pBBKeR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBBKeR > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(50)`
- `#wrrKPn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrrKPn > .teaser-link > .container`
- `#\31 66W7B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 66W7B > .teaser-link > .container`
- `#V66d7d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V66d7d > .teaser-link > .container`
- `#\30 ppKGA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 ppKGA > .teaser-link > .container`
- `#OkkzRA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkkzRA > .teaser-link > .container`
- `#Arvg1n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arvg1n > .teaser-link > .container`
- `#L44kgV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L44kgV > .teaser-link > .container`
- `#QJJjdR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJJjdR > .teaser-link > .container`
- `#\32 ppooy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 ppooy > .teaser-link > .container`
- `#GxxjvQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxxjvQ > .teaser-link > .container`
- `img[alt="Slipper nytt album"]`
- `#rrrdB8 > .teaser-link > .container`
- `#pBBGJX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBBGJX > .teaser-link > .container`
- `#V664EW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V664EW > .teaser-link > .container`
- `img[alt="Hvilken komiker er dette?"]`
- `#PdpWoJ > .teaser-link > .container`
- `#\34 33LBG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 33LBG > .teaser-link > .container > .information`
- `#\34 33LBG > .teaser-link > .container > .illustration-container > .text`
- `#\34 33LBG > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#Okrxql > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okrxql > .teaser-link > .container`
- `#L446R9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L446R9 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#L446R9 > .teaser-link > .container`
- `#aJJWx4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJJWx4 > .teaser-link > .container > .information`
- `#aJJWx4 > .teaser-link > .container > h2`
- `#aJJWx4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjell Bjørka"]`
- `#rrrnr0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrrnr0 > .teaser-link > .container`
- `#Okk3Ok > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okk3Ok > .teaser-link > .container`
- `#\30 pGyyB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGyyB > .teaser-link > .container`
- `#m00Mwl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m00Mwl > .teaser-link > .container > .information`
- `#m00Mwl > .teaser-link > .container > .illustration-container > .text`
- `#m00Mwl > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#zOOgQ4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOOgQ4 > .teaser-link > .container`
- `#rrlQ9m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrlQ9m > .teaser-link > .container`
