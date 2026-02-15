# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-15T00:44:28.323Z
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
- **Count:** 7

#### Affected Elements:

- `#pBAjno > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7E6EM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx3nAl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7EJgK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdxB9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGod6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxjmb9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- `img[alt="Ingen bør la seg lure"]`
- `#\34 370xa > .teaser-link > .container > .illustration-container > .text`
- `#\34 370xa > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#\37 pdQQB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdQQB > .teaser-link > .container > .text-wrapper-small`
- `#\37 pdQQB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erlend Nesje"]`
- `#zOrn3w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrn3w > .teaser-link > .container`
- `.mm-text`
- `#\30 pKxlJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKxlJ > .teaser-link > .container`
- `#QJyq4Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJyq4Q > .teaser-link > .container`
- `#V69jJW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69jJW > .teaser-link > .container > .information`
- `#V69jJW > .teaser-link > .container > .illustration-container > .text`
- `#V69jJW > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `.games-widget`
- `#WvjLeL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjLeL > .teaser-link > .container`
- `#bOGG9k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOGG9k > .teaser-link > .container > .information`
- `#bOGG9k > .teaser-link > .container > .illustration-container > .text`
- `#bOGG9k > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#q6WpoL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6WpoL > .teaser-link > .container`
- `#RjbQdW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjbQdW > .teaser-link > .container`
- `#zO7OyK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7OyK > .teaser-link > .container`
- `#XM693r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM693r > .teaser-link > .container`
- `#L45q6Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L45q6Q > .teaser-link > .container > .information`
- `#L45q6Q > .teaser-link > .container > .illustration-container > .text`
- `#L45q6Q > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(26) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#e7E6EM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7E6EM > .teaser-link > .container > h2`
- `#Gx3nAl > .teaser-link > .container > .text-wrapper-small`
- `#Gx3nAl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7EJgK > .teaser-link > .container > .text-wrapper-small`
- `#e7EJgK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxqqR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxqqR > .teaser-link > .container`
- `#\32 p8yaB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p8yaB > .teaser-link > .container`
- `#XM882b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM882b > .teaser-link > .container`
- `#\39 pvPx9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pvPx9 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\39 pvPx9 > .teaser-link > .container`
- `#\31 6717B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6717B > .teaser-link > .container`
- `img[alt="NRK burde avsluttet intervjuet"]`
- `#d4nqXo > .teaser-link > .container > .information`
- `#d4nqXo > .teaser-link > .container > .illustration-container > .text`
- `#d4nqXo > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Maryam Iqbal Tahir"]`
- `.benefits-widget-container`
- `#wrOnR5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrOnR5 > .teaser-link > .container`
- `#bOzJnl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOzJnl > .teaser-link > .container`
- `#y5458K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5458K > .teaser-link > .container`
- `#\35 pGoKe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pGoKe > .teaser-link > .container > .information`
- `#\35 pGoKe > .teaser-link > .container > .illustration-container > .text`
- `#\35 pGoKe > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#oEWLQW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEWLQW > .teaser-link > .container`
- `#RjrqGx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjrqGx > .teaser-link > .container`
- `#V61p1W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V61p1W > .teaser-link > .container`
- `#n1Wb7n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Wb7n > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(41) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 pdxB9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdxB9 > .teaser-link > .container > h2`
- `#\30 pGod6 > .teaser-link > .container > .text-wrapper-small`
- `#\30 pGod6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArLqnx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArLqnx > .teaser-link > .container`
- `#\37 pdQB8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdQB8 > .teaser-link > .container`
- `#\33 p4zeP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p4zeP > .teaser-link > .container`
- `#\32 p8KVR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p8KVR > .teaser-link > .container`
- `#xr8bjG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr8bjG > .teaser-link > .teaser-image-wrapper > .series-header`
- `#xr8bjG > .teaser-link > .container`
- `#q6W1r0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6W1r0 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(47) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Rjrq6W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjrq6W > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Rjrq6W > .teaser-link > .container > h2`
- `#Bxjmb9 > .teaser-link > .container > .text-wrapper-small`
- `#Bxjmb9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.fullwidth.teaser-wrapper:nth-child(49)`
- `#QJy9yR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJy9yR > .teaser-link > .container > .information`
- `#QJy9yR > .teaser-link > .container > h2`
- `#QJy9yR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Benedicte Bull"]`
- `#wrOb55 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrOb55 > .teaser-link > .container`
- `#XMqp8r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMqp8r > .teaser-link > .container`
- `#y54Kbx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54Kbx > .teaser-link > .container`
- `#GxQBlB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxQBlB > .teaser-link > .container`
- `#\30 pGvL0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGvL0 > .teaser-link > .container`
- `#gk6yXk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk6yXk > .teaser-link > .container`
- `#\32 p8Xvl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p8Xvl > .teaser-link > .container`
- `#QJx6pA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJx6pA > .teaser-link > .container`
- `#V69ozW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69ozW > .teaser-link > .teaser-image-wrapper > .series-header`
- `#V69ozW > .teaser-link > .container`
- `#y57MBR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y57MBR > .teaser-link > .container`
- `#WvjRJg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjRJg > .teaser-link > .container`
- `img[alt="Oslos beste fastelavnsboller"]`
- `#wrOKJM > .teaser-link > .container`
- `#bOzB1l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOzB1l > .teaser-link > .container`
- `#WvjgVd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjgVd > .teaser-link > .container`
- `#\33 p4ByP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p4ByP > .teaser-link > .container`
- `#XMqa2m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMqa2m > .teaser-link > .container`
- `#y54xME > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54xME > .teaser-link > .container`
- `#m01Jxv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m01Jxv > .teaser-link > .container > .information`
- `#m01Jxv > .teaser-link > .container > h2`
- `#m01Jxv > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mads H. Almaas"]`
- `#rrW9R3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrW9R3 > .teaser-link > .container`
- `#m0r8qE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0r8qE > .teaser-link > .container > .information`
- `#m0r8qE > .teaser-link > .container > h2`
- `#m0r8qE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Vilde Kvammen"]`
