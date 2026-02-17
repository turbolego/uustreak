# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-17T00:32:27.083Z
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

- `#bOGaqA > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#pBAjno > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Wldx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54pdx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 2

#### Affected Elements:

- `.ch-core-header`
- `.mm-links > nav`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 201

#### Affected Elements:

- `.mm-front-widget.svelte-1akfz96 > .svelte-1akfz96:nth-child(1)`
- `.mm-front-widget.svelte-1akfz96 > .mm-medals`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#bOGaqA > .teaser-link > .teaser-image-wrapper`
- `#bOGaqA > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-137794"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137794"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137794"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137810"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137810"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137810"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137795"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137795"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137795"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137791"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137791"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137791"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137789"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137789"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137789"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137766"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137766"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137766"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137756"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137756"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137756"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137761"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137761"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137761"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137755"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137755"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137755"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137752"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137752"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137752"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `#Gx3J1x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx3J1x > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(8) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#pBAjno > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAjno > .teaser-link > .container > h2`
- `#n1Wldx > .teaser-link > .container > .text-wrapper-small`
- `#n1Wldx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54pdx > .teaser-link > .container > .text-wrapper-small`
- `#y54pdx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.mm-text`
- `#Rjr88r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjr88r > .teaser-link > .container`
- `#JOEaeP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOEaeP > .teaser-link > .container`
- `#bOGwkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOGwkl > .teaser-link > .container > .information`
- `#bOGwkl > .teaser-link > .container > h2`
- `#bOGwkl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Morten Busch"]`
- `#\38 pQ1Lw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pQ1Lw > .teaser-link > .container`
- `.games-widget`
- `#k06woQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k06woQ > .teaser-link > .container`
- `#QJx6pA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJx6pA > .teaser-link > .container`
- `#wrOkK5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrOkK5 > .teaser-link > .container`
- `#M71bQm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71bQm > .teaser-link > .container`
- `#zOrn3w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrn3w > .teaser-link > .container`
- `#y54yka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54yka > .teaser-link > .container`
- `#d4n0Bj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4n0Bj > .teaser-link > .container`
- `#gk058a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk058a > .teaser-link > .container`
- `img[alt="Treffer som et knyttneveslag"]`
- `#xr8pVB > .teaser-link > .container`
- `#\37 pdJw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdJw8 > .teaser-link > .container`
- `#\32 p8ggv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p8ggv > .teaser-link > .container`
- `#n1WPBd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1WPBd > .teaser-link > .container`
- `#zO7OyK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7OyK > .teaser-link > .container`
- `#QJy22W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJy22W > .teaser-link > .container`
- `.benefits-widget-container`
- `#ArlEJn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlEJn > .teaser-link > .container`
- `#\34 373RE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 373RE > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\34 373RE > .teaser-link > .container`
- `#q6WpoL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6WpoL > .teaser-link > .container`
- `#e7EeM4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7EeM4 > .teaser-link > .container`
- `#K8z317 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8z317 > .teaser-link > .container`
- `#rrEyQl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrEyQl > .teaser-link > .container`
- `#pBWE9o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBWE9o > .teaser-link > .container`
- `#j0avR0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0avR0 > .teaser-link > .container`
- `#pBWx5V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBWx5V > .teaser-link > .container`
- `#vr5kdl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vr5kdl > .teaser-link > .container > .information`
- `#vr5kdl > .teaser-link > .container > h2`
- `#vr5kdl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anders Cappelen"]`
- `#Gx32Ol > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx32Ol > .teaser-link > .container`
- `#k06x4A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k06x4A > .teaser-link > .container`
- `#gk6xMJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk6xMJ > .teaser-link > .container`
- `#y54Jwe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54Jwe > .teaser-link > .container`
- `#RjxkE2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxkE2 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#RjxkE2 > .teaser-link > .container`
- `#aJ7K7A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ7K7A > .teaser-link > .container`
- `#q6Ro61 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Ro61 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#q6Ro61 > .teaser-link > .container`
- `#\39 pKB6E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pKB6E > .teaser-link > .container`
- `#n1Wmna > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Wmna > .teaser-link > .container > .information`
- `#n1Wmna > .teaser-link > .container > h2`
- `#n1Wmna > .teaser-link > .container > .byline > div:nth-child(1)`
- `#n1Wmna > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\37 pdP0V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdP0V > .teaser-link > .container > .information`
- `#\37 pdP0V > .teaser-link > .container > h2`
- `#\37 pdP0V > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingrid Åbergsjord"]`
- `img[alt="Det kan bli til å gråte av"]`
- `#ArLXwq > .teaser-link > .container > .information`
- `#ArLXwq > .teaser-link > .container > .illustration-container > .text`
- `#ArLXwq > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#rrE3wm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrE3wm > .teaser-link > .container`
- `#L45qrP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L45qrP > .teaser-link > .container > .information`
- `#L45qrP > .teaser-link > .container > h2`
- `#L45qrP > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#Gx3w2B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx3w2B > .teaser-link > .container`
- `#pBWV1w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBWV1w > .teaser-link > .container > .information`
- `#pBWV1w > .teaser-link > .container > h2`
- `#pBWV1w > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Martin Sandbu"]`
- `#d4nzyJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4nzyJ > .teaser-link > .container`
- `#lnV9gG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnV9gG > .teaser-link > .container`
- `#QJy9vW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJy9vW > .teaser-link > .container > .information`
- `#QJy9vW > .teaser-link > .container > h2`
- `#QJy9vW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anna Blix"]`
- `#\36 qnaEW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qnaEW > .teaser-link > .container`
- `#BxjdoQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxjdoQ > .teaser-link > .container`
- `#m0rW6O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0rW6O > .teaser-link > .container`
- `#Rjrom5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjrom5 > .teaser-link > .container`
- `#\34 37vVE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 37vVE > .teaser-link > .container`
- `#rrEXke > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrEXke > .teaser-link > .container`
- `#\33 p46j9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p46j9 > .teaser-link > .container > .information`
- `#\33 p46j9 > .teaser-link > .container > h2`
- `#\33 p46j9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kamal Khoshnood"]`
- `#PdoaXp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdoaXp > .teaser-link > .container`
- `#\30 pG0QE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pG0QE > .teaser-link > .container`
- `#wrOnR5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrOnR5 > .teaser-link > .container`
- `#V69jJW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69jJW > .teaser-link > .container > .information`
- `#V69jJW > .teaser-link > .container > .illustration-container > .text`
- `#V69jJW > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#V61p1W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V61p1W > .teaser-link > .container`
