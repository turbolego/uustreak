# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-20T00:28:58.432Z
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
- **Count:** 11

#### Affected Elements:

- `#\32 pdn1y > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#pBAjno > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#wrOjBn > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#vr5BaX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjGyK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0rbQE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pG8jo > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okr53V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k06jVv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdob4p > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxjX5l > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 199

#### Affected Elements:

- `.mm-front-widget.svelte-1akfz96 > .svelte-1akfz96:nth-child(1)`
- `.mm-front-widget.svelte-1akfz96 > .mm-medals`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#Gx37GQ > .teaser-link > .teaser-image-wrapper`
- `#Gx37GQ > .teaser-link > .container > .information`
- `#Gx37GQ > .teaser-link > .container > .illustration-container > .text`
- `#Gx37GQ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.sport.teaser-bundle.new-bundles > .bundle-title`
- `#\32 pdn1y > .teaser-link > .teaser-image-wrapper`
- `#\32 pdn1y > .teaser-link > .container > h2`
- `.sport.teaser-bundle.new-bundles > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#dr-edition-teaser-is5u98p85 > div`
- `.series-location.teaser-bundle.new-bundles > .bundle-title`
- `#\37 pdG6v > .teaser-link > .teaser-image-wrapper`
- `#\37 pdG6v > .teaser-link > .container > h2`
- `.series-location.teaser-bundle.new-bundles > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-137878"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137878"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137878"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137849"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137849"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137849"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137856"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137856"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137856"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137838"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137838"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137838"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137834"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137834"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137834"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
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
- `#m0rmw4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0rmw4 > .teaser-link > .container`
- `#Rjr88r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjr88r > .teaser-link > .container`
- `#QJx6pA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJx6pA > .teaser-link > .container`
- `.mm-text`
- `#\37 pd8x3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pd8x3 > .teaser-link > .container`
- `#\30 pG6J0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pG6J0 > .teaser-link > .container`
- `#\37 pdJw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdJw8 > .teaser-link > .container`
- `#\34 37mre > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 37mre > .teaser-link > .container`
- `.games-widget`
- `#\39 pOGdw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pOGdw > .teaser-link > .container`
- `#M71bQm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71bQm > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(19) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#OkrK81 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkrK81 > .teaser-link > .container > .illustration-container > .text`
- `#OkrK81 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#vr5BaX > .teaser-link > .container > .text-wrapper-small`
- `#vr5BaX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjGyK > .teaser-link > .container > .text-wrapper-small`
- `#WvjGyK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk058a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk058a > .teaser-link > .container`
- `#zOrn3w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrn3w > .teaser-link > .container`
- `#V69314 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69314 > .teaser-link > .container`
- `#y54yka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54yka > .teaser-link > .container`
- `#Okrx9q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okrx9q > .teaser-link > .container`
- `#\33 p48Od > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p48Od > .teaser-link > .container`
- `#JOxeoX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxeoX > .teaser-link > .container`
- `#zOgaKb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgaKb > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(29) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#e7EeoK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7EeoK > .teaser-link > .container > .illustration-container > .text`
- `#e7EeoK > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#m0rbQE > .teaser-link > .container > .text-wrapper-small`
- `#m0rbQE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pG8jo > .teaser-link > .container > .text-wrapper-small`
- `#\30 pG8jo > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7pnK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7pnK > .teaser-link > .container`
- `#WvjKyK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjKyK > .teaser-link > .container`
- `.benefits-widget-container`
- `#XMqE0m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMqE0m > .teaser-link > .container`
- `#bOzJnl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOzJnl > .teaser-link > .container`
- `#K8zxlE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8zxlE > .teaser-link > .container`
- `#q6WpoL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6WpoL > .teaser-link > .container`
- `#zO7OyK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7OyK > .teaser-link > .container`
- `#RjrM2a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjrM2a > .teaser-link > .container`
- `#Pdo9lp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdo9lp > .teaser-link > .container`
- `#\33 p4bM9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p4bM9 > .teaser-link > .container > .information`
- `#\33 p4bM9 > .teaser-link > .container > h2`
- `#\33 p4bM9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\33 p4bM9 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#gk62VL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk62VL > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(42) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Okr53V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okr53V > .teaser-link > .container > h2`
- `#k06jVv > .teaser-link > .container > .text-wrapper-small`
- `#k06jVv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjP5K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjP5K > .teaser-link > .container > .information`
- `#WvjP5K > .teaser-link > .container > h2`
- `#WvjP5K > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Henrik Thune"]`
- `#\39 pKaxp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pKaxp > .teaser-link > .container`
- `#j0a2kw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0a2kw > .teaser-link > .container`
- `#Okr5n1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okr5n1 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(47) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Pdob4p > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdob4p > .teaser-link > .container > h2`
- `#BxjX5l > .teaser-link > .container > .text-wrapper-small`
- `#BxjX5l > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnV033 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnV033 > .teaser-link > .container`
- `#M7Le0M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7Le0M > .teaser-link > .container`
- `#gk6nvB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk6nvB > .teaser-link > .container`
- `#q6WVQw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6WVQw > .teaser-link > .container > .information`
- `#q6WVQw > .teaser-link > .container > h2`
- `#q6WVQw > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Odd Petter Magnussen"]`
- `#Okr1GO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okr1GO > .teaser-link > .container`
- `#JOx7O7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOx7O7 > .teaser-link > .container`
- `#PdoGy5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdoGy5 > .teaser-link > .container`
- `#ArLy2M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArLy2M > .teaser-link > .container`
- `#QJy248 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJy248 > .teaser-link > .container`
- `#\38 pQxVd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pQxVd > .teaser-link > .container`
- `#WvjyPk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjyPk > .teaser-link > .container`
- `#n1WxwB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1WxwB > .teaser-link > .container > .information`
- `#n1WxwB > .teaser-link > .container > .illustration-container > .text`
- `#n1WxwB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\38 pQMqd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pQMqd > .teaser-link > .container`
- `#JOxA9X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxA9X > .teaser-link > .container`
- `#K8zAWM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8zAWM > .teaser-link > .teaser-image-wrapper > .series-header`
- `#K8zAWM > .teaser-link > .container`
- `#wrOG25 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrOG25 > .teaser-link > .container > .information`
- `#wrOG25 > .teaser-link > .container > h2`
- `#wrOG25 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kamzy Gunaratnam"]`
- `#gk6zlk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk6zlk > .teaser-link > .container`
- `#BxjX8e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxjX8e > .teaser-link > .container`
- `#d4nzyJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4nzyJ > .teaser-link > .container`
- `#JOEdWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOEdWX > .teaser-link > .container`
