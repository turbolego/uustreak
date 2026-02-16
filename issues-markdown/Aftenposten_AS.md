# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-16T03:15:31.238Z
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
- **Count:** 4

#### Affected Elements:

- `#pBAjno > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOx3L6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p5JjK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx3nAl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 209

#### Affected Elements:

- `.mm-front-widget.svelte-1akfz96 > .svelte-1akfz96:nth-child(1)`
- `.mm-front-widget.svelte-1akfz96 > .mm-medals`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
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
- `article[data-pulse-entity-id="reel-137745"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137745"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137745"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137744"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137744"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137744"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#pBAjno > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAjno > .teaser-link > .container > h2`
- `#JOx3L6 > .teaser-link > .container > .text-wrapper-small`
- `#JOx3L6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69qvr > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69qvr > .teaser-link > .container > .illustration-container > .text`
- `#V69qvr > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#Rjr88r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjr88r > .teaser-link > .container`
- `.mm-text`
- `#M71bQm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71bQm > .teaser-link > .container`
- `#\37 pdJw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdJw8 > .teaser-link > .container`
- `#\39 pKB6E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pKB6E > .teaser-link > .container`
- `#QJx6pA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJx6pA > .teaser-link > .container`
- `.games-widget`
- `#zOrn3w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrn3w > .teaser-link > .container`
- `#\37 pdP0V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdP0V > .teaser-link > .container > .information`
- `#\37 pdP0V > .teaser-link > .container > h2`
- `#\37 pdP0V > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingrid Åbergsjord"]`
- `#gk058a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk058a > .teaser-link > .container`
- `#pBWV1w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBWV1w > .teaser-link > .container > .information`
- `#pBWV1w > .teaser-link > .container > h2`
- `#pBWV1w > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Martin Sandbu"]`
- `#zO7OyK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7OyK > .teaser-link > .container`
- `#q6WpoL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6WpoL > .teaser-link > .container`
- `#n1Wmna > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Wmna > .teaser-link > .container > .information`
- `#n1Wmna > .teaser-link > .container > h2`
- `#n1Wmna > .teaser-link > .container > .byline > div:nth-child(1)`
- `#n1Wmna > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\30 pKxlJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKxlJ > .teaser-link > .container`
- `#d4nzyJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4nzyJ > .teaser-link > .container`
- `#rrE3wm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrE3wm > .teaser-link > .container`
- `#WvjLeL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjLeL > .teaser-link > .container`
- `#\36 qnaEW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qnaEW > .teaser-link > .container`
- `#RjbQdW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjbQdW > .teaser-link > .container`
- `#bOGG9k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOGG9k > .teaser-link > .container > .information`
- `#bOGG9k > .teaser-link > .container > .illustration-container > .text`
- `#bOGG9k > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `.benefits-widget-container`
- `#L45qrP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L45qrP > .teaser-link > .container > .information`
- `#L45qrP > .teaser-link > .container > h2`
- `#L45qrP > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `img[alt="Her styrer Larry"]`
- `#k03l2L > .teaser-link > .container`
- `.teaser-image[alt="Det kan bli til å gråte av"][decoding="async"]`
- `#ArLXwq > .teaser-link > .container > .information`
- `#ArLXwq > .teaser-link > .container > .illustration-container > .text`
- `#ArLXwq > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#ArLXwq > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(35) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 p5JjK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p5JjK > .teaser-link > .container > h2`
- `#zO7Vk9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7Vk9 > .teaser-link > .container > .text-wrapper-small`
- `#zO7Vk9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Asle Madsen"]`
- `#Gx3nAl > .teaser-link > .container > .text-wrapper-small`
- `#Gx3nAl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnV9gG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnV9gG > .teaser-link > .container`
- `#\30 p4w6G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p4w6G > .teaser-link > .container`
- `#Gx3w2B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx3w2B > .teaser-link > .container`
- `#QJy9vW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJy9vW > .teaser-link > .container > .information`
- `#QJy9vW > .teaser-link > .container > h2`
- `#QJy9vW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anna Blix"]`
- `#\34 37vVE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 37vVE > .teaser-link > .container`
- `#BxjdoQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxjdoQ > .teaser-link > .container`
- `#PdoaXp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdoaXp > .teaser-link > .container`
- `#bOGdQv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOGdQv > .teaser-link > .container`
- `#m0rW6O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0rW6O > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(45)`
- `#aJ7k75 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ7k75 > .teaser-link > .container`
- `#Rjrom5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjrom5 > .teaser-link > .container`
- `#Ok3GoE > .teaser-link > .container > .text-wrapper-small`
- `#Ok3GoE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrEXke > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrEXke > .teaser-link > .container`
- `#\33 p46j9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p46j9 > .teaser-link > .container > .information`
- `#\33 p46j9 > .teaser-link > .container > h2`
- `#\33 p46j9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kamal Khoshnood"]`
- `#V61p1W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V61p1W > .teaser-link > .container`
- `#RjroxW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjroxW > .teaser-link > .container`
- `#L45q6Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L45q6Q > .teaser-link > .container > .information`
- `#L45q6Q > .teaser-link > .container > .illustration-container > .text`
- `#L45q6Q > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#wrOnR5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrOnR5 > .teaser-link > .container`
- `#\39 pvPx9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pvPx9 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\39 pvPx9 > .teaser-link > .container`
- `#JOxqqR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxqqR > .teaser-link > .container`
- `#V69jJW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69jJW > .teaser-link > .container > .information`
- `#V69jJW > .teaser-link > .container > .illustration-container > .text`
- `#V69jJW > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#RjrqGx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjrqGx > .teaser-link > .container`
- `#\30 pG0QE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pG0QE > .teaser-link > .container`
- `#L41XgJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41XgJ > .teaser-link > .container`
- `img[alt="NRK burde avsluttet intervjuet"]`
- `#d4nqXo > .teaser-link > .container > .information`
- `#d4nqXo > .teaser-link > .container > .illustration-container > .text`
- `#d4nqXo > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Maryam Iqbal Tahir"]`
- `#n1Wb7n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Wb7n > .teaser-link > .container`
- `#\37 pdxB9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdxB9 > .teaser-link > .container`
- `#\35 pGoKe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pGoKe > .teaser-link > .container > .information`
- `#\35 pGoKe > .teaser-link > .container > .illustration-container > .text`
- `#\35 pGoKe > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\35 pGoKe > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#\32 p8Xvl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p8Xvl > .teaser-link > .container`
- `#q6W1r0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6W1r0 > .teaser-link > .container`
- `#QJy9yR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJy9yR > .teaser-link > .container > .information`
- `#QJy9yR > .teaser-link > .container > h2`
- `#QJy9yR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Benedicte Bull"]`
- `#\30 pGvL0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGvL0 > .teaser-link > .container`
- `#XM693r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM693r > .teaser-link > .container`
