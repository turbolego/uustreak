# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-03-29T00:49:49.520Z
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
- **Count:** 11

#### Affected Elements:

- `#gkwQmB > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#m0rGrg > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#q66J4z > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\36 qqVRz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjjava > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d44GXw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M77dB0 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 ppWLX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d44jKz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Dette var en uklok avgjørelse"]`
- `#vrrk8X > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- `.magazine.teaser-bundle.new-bundles > .bundle-title`
- `#gkwQmB > .teaser-link > .teaser-image-wrapper`
- `#gkwQmB > .teaser-link > .container > h2`
- `.magazine.teaser-bundle.new-bundles > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.fullwidth.teaser-wrapper:nth-child(5)`
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
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(8) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#y5554K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5554K > .teaser-link > .container > .illustration-container > .text`
- `#y5554K > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#\36 qqVRz > .teaser-link > .container > .text-wrapper-small`
- `#\36 qqVRz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjjava > .teaser-link > .container > .text-wrapper-small`
- `#Rjjava > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dr-edition-teaser-p6g904vdu > div`
- `#y55VwE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y55VwE > .teaser-link > .container`
- `#rrre2m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrre2m > .teaser-link > .container`
- `#m0P7Jl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0P7Jl > .teaser-link > .container`
- `#V66xKV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V66xKV > .teaser-link > .teaser-image-wrapper > .series-header`
- `#V66xKV > .teaser-link > .container`
- `#BxxkXv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxxkXv > .teaser-link > .container > .information`
- `#BxxkXv > .teaser-link > .container > .illustration-container > .text`
- `#BxxkXv > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `.games-widget`
- `#K8MkKM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8MkKM > .teaser-link > .container`
- `#d44GXw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d44GXw > .teaser-link > .container > h2`
- `#M77dB0 > .teaser-link > .container > .text-wrapper-small`
- `#M77dB0 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 ppWLX > .teaser-link > .container > .text-wrapper-small`
- `#\35 ppWLX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMM8Lx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMM8Lx > .teaser-link > .container`
- `#QJJrWR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJJrWR > .teaser-link > .container`
- `#\35 pppJW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pppJW > .teaser-link > .container`
- `#lnn9my > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnn9my > .teaser-link > .container > .information`
- `#lnn9my > .teaser-link > .container > .illustration-container > .text`
- `#lnn9my > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#PdddwX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdddwX > .teaser-link > .container > .information`
- `#PdddwX > .teaser-link > .container > h2`
- `#PdddwX > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nina Gründfeld"]`
- `#\38 pqy9G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pqy9G > .teaser-link > .container > .information`
- `#\38 pqy9G > .teaser-link > .container > .illustration-container > .text`
- `#\38 pqy9G > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\38 pqy9G > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > .author-image[width="128"][height="128"]`
- `#XMMa7b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMMa7b > .teaser-link > .container`
- `.sport.teaser-bundle.new-bundles > .bundle-title`
- `#QJJ844 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJJ844 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#QJJ844 > .teaser-link > .container > h2`
- `#d44jKz > .teaser-link > .container > .text-wrapper-small`
- `#d44jKz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n11wWm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n11wWm > .teaser-link > .container`
- `#\31 66x9Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 66x9Q > .teaser-link > .container`
- `#q6P2pO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6P2pO > .teaser-link > .container`
- `#rrl4j8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrl4j8 > .teaser-link > .container`
- `img[alt="Dette er byens beste solvegger"]`
- `#wrr4OP > .teaser-link > .container`
- `.benefits-widget-container`
- `#oE3vx0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oE3vx0 > .teaser-link > .container > .information`
- `#oE3vx0 > .teaser-link > .container > h2`
- `#oE3vx0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av May Synnøve Rogne"]`
- `#\35 pprBE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pprBE > .teaser-link > .container`
- `#n1yGgn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1yGgn > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(34)`
- `#M7oqVK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7oqVK > .teaser-link > .container`
- `#JOO69R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOO69R > .teaser-link > .container`
- `#Gxxe2Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxxe2Q > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(38)`
- `#oEEeaV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEEeaV > .teaser-link > .container`
- `#Gxx04x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxx04x > .teaser-link > .container`
- `#\37 ppygB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 ppygB > .teaser-link > .container`
- `#bOOjJe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOOjJe > .teaser-link > .container`
- `#RjzPrJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjzPrJ > .teaser-link > .container`
- `#Arr0mr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arr0mr > .teaser-link > .container > .information`
- `#Arr0mr > .teaser-link > .container > h2`
- `#Arr0mr > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erlend Nesje"]`
- `.fullwidth.teaser-wrapper:nth-child(45)`
- `#d44qGO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d44qGO > .teaser-link > .container`
- `#e77MRR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e77MRR > .teaser-link > .container`
- `#e77ama > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e77ama > .teaser-link > .container`
- `#M7799K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7799K > .teaser-link > .container`
- `img[alt="Forsvaret må gjøre det umulige"]`
- `#j00vdA > .teaser-link > .container > .information`
- `#j00vdA > .teaser-link > .container > .illustration-container > .text`
- `#j00vdA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#OoG83V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG83V > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(51) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Dette var en uklok avgjørelse"]`
- `#JOO7d8 > .teaser-link > .container > h2`
- `#vrrk8X > .teaser-link > .container > .text-wrapper-small`
- `#vrrk8X > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOOM11 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOOM11 > .teaser-link > .container`
- `#bOOqBA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOOqBA > .teaser-link > .container`
- `#y559MK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y559MK > .teaser-link > .container`
- `#n111mB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n111mB > .teaser-link > .container`
- `#\33 ppqXM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 ppqXM > .teaser-link > .container`
- `#L4MyVx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4MyVx > .teaser-link > .container`
- `#vrr3np > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrr3np > .teaser-link > .container > .information`
- `#vrr3np > .teaser-link > .container > h2`
- `#vrr3np > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anne-Karin Rime"]`
- `#\31 66W7B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 66W7B > .teaser-link > .container`
- `#Exxx4G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exxx4G > .teaser-link > .container > .information`
- `#Exxx4G > .teaser-link > .container > h2`
- `#Exxx4G > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erik Martiniussen"]`
- `#Arvg1n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arvg1n > .teaser-link > .container`
- `#\32 ppooy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 ppooy > .teaser-link > .container`
- `#k00EO6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k00EO6 > .teaser-link > .container`
- `#GxxjvQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxxjvQ > .teaser-link > .container`
- `#wrrKPn > .teaser-link > .container > .text-wrapper-small`
- `#wrrKPn > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJJWx4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJJWx4 > .teaser-link > .container > .information`
- `#aJJWx4 > .teaser-link > .container > h2`
- `#aJJWx4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjell Bjørka"]`
- `#L446R9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L446R9 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#L446R9 > .teaser-link > .container`
- `#rrlQ9m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrlQ9m > .teaser-link > .container`
- `#Bxxr10 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxxr10 > .teaser-link > .container`
- `#Okk3Ok > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okk3Ok > .teaser-link > .container`
- `#V664EW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V664EW > .teaser-link > .container`
- `#Okrxql > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okrxql > .teaser-link > .container`
- `#\30 pGyyB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGyyB > .teaser-link > .container`
- `#rrrnr0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrrnr0 > .teaser-link > .container`
