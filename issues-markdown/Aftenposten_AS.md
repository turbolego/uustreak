# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-21T00:32:41.906Z
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
- **Count:** 10

#### Affected Elements:

- `#pBAjno > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#Bx3Xee > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#K8pjB7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#j0ayGe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pK1kW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnV033 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69Vwr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q6bd3 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnVdjo > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Wl4L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 207

#### Affected Elements:

- `.mm-front-widget > .svelte-1akfz96:nth-child(1)`
- `.mm-medals`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#Wvjy62 > .teaser-link > .teaser-image-wrapper`
- `#Wvjy62 > .teaser-link > .container > .information`
- `#Wvjy62 > .teaser-link > .container > h2`
- `#Wvjy62 > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `#y54a5J`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#aJ7RP5 > .teaser-link > .teaser-image-wrapper`
- `#aJ7RP5 > .teaser-link > .container > h2`
- `#aJ7RP5 > .teaser-link > .container > .byline`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#dr-edition-teaser-5n4f7wag > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\30 pGd6M > .teaser-link > .teaser-image-wrapper`
- `#\30 pGd6M > .teaser-link > .container > .illustration-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-137882"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137882"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137882"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
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
- `#m0rmw4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0rmw4 > .teaser-link > .container`
- `#Rjr88r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjr88r > .teaser-link > .container`
- `#PdoRm6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdoRm6 > .teaser-link > .container`
- `#e7E3vO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7E3vO > .teaser-link > .container > .information`
- `#e7E3vO > .teaser-link > .container > .illustration-container > .text`
- `#e7E3vO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"][width="128"][height="128"]`
- `#JOxzPJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxzPJ > .teaser-link > .container`
- `#QJx6pA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJx6pA > .teaser-link > .container`
- `#\38 pQd0x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pQd0x > .teaser-link > .container`
- `.games-widget`
- `#Gxa1p9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxa1p9 > .teaser-link > .container`
- `#\37 pdJw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdJw8 > .teaser-link > .container`
- `#gk058a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk058a > .teaser-link > .container`
- `#BxjMAe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxjMAe > .teaser-link > .container`
- `#M71bQm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71bQm > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(22) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#j0ayGe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0ayGe > .teaser-link > .container > h2`
- `#\39 pK1kW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pK1kW > .teaser-link > .container > .text-wrapper-small`
- `#lnV033 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnV033 > .teaser-link > .container > .text-wrapper-small`
- `#y54yka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54yka > .teaser-link > .container`
- `#d4n3pw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4n3pw > .teaser-link > .container > .information`
- `#d4n3pw > .teaser-link > .container > h2`
- `#d4n3pw > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sunniva Dring"]`
- `#zOgaKb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgaKb > .teaser-link > .container`
- `#Gx3pj4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx3pj4 > .teaser-link > .container`
- `#\31 6OE8l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6OE8l > .teaser-link > .container`
- `#L41OwJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L41OwJ > .teaser-link > .container`
- `#\36 q64Wz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q64Wz > .teaser-link > .container`
- `#BxRmpw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxRmpw > .teaser-link > .container`
- `.benefits-widget-container`
- `#k065LX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k065LX > .teaser-link > .container`
- `#rrEqk3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrEqk3 > .teaser-link > .container`
- `#RjbQdW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjbQdW > .teaser-link > .container`
- `#\35 pGo56 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pGo56 > .teaser-link > .container > .information`
- `#\35 pGo56 > .teaser-link > .container > .illustration-container > .text`
- `#\35 pGo56 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#\37 pdvBW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdvBW > .teaser-link > .container > .information`
- `#\37 pdvBW > .teaser-link > .container > h2`
- `#\37 pdvBW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tor Martin Austad"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(37) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#V69Vwr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69Vwr > .teaser-link > .container > h2`
- `#\36 q6bd3 > .teaser-link > .container > .text-wrapper-small`
- `#\36 q6bd3 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnVdjo > .teaser-link > .container > .text-wrapper-small`
- `#lnVdjo > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdkwW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdkwW > .teaser-link > .container`
- `#ExaGv3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExaGv3 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(41) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#q6Wl4L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Wl4L > .teaser-link > .container > h2`
- `#PdoxL7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdoxL7 > .teaser-link > .container > .text-wrapper-small`
- `#PdoxL7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jacob Wulff Wold"]`
- `#OkrK81 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkrK81 > .teaser-link > .container > .illustration-container > .text`
- `#OkrK81 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"][width="88"][height="88"]`
- `#\39 pK2VE > .teaser-link > .container > .text-wrapper-small`
- `#\39 pK2VE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pOGdw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pOGdw > .teaser-link > .container`
- `#\33 p49Re > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p49Re > .teaser-link > .container`
- `#JOxa4X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxa4X > .teaser-link > .container`
- `#zO7qz5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7qz5 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(48)`
- `#\38 pQy0G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pQy0G > .teaser-link > .container`
- `#V69314 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69314 > .teaser-link > .container`
- `#\37 pdG6v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdG6v > .teaser-link > .container`
- `img[alt="Hvem malte «Mona Lisa»?"]`
- `#y54x5e > .teaser-link > .container`
- `#OkrV0V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkrV0V > .teaser-link > .container`
- `img[alt="Løy Trump med vilje?"]`
- `#Gx37GQ > .teaser-link > .container > .information`
- `#Gx37GQ > .teaser-link > .container > .illustration-container > .text`
- `#Gx37GQ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#zO7pnK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7pnK > .teaser-link > .container`
- `#RjrM2a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjrM2a > .teaser-link > .container`
- `#\37 pd8x3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pd8x3 > .teaser-link > .container`
- `#WvjP5K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjP5K > .teaser-link > .container > .information`
- `#WvjP5K > .teaser-link > .container > h2`
- `#WvjP5K > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Henrik Thune"]`
- `#\33 p4bM9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p4bM9 > .teaser-link > .container > .information`
- `#\33 p4bM9 > .teaser-link > .container > h2`
- `#\33 p4bM9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\33 p4bM9 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#j0a2kw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0a2kw > .teaser-link > .container`
- `#Pdo9lp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdo9lp > .teaser-link > .container`
- `#\34 37mre > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 37mre > .teaser-link > .container`
- `#\33 p48Od > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p48Od > .teaser-link > .container`
- `#K8zxlE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8zxlE > .teaser-link > .container`
- `#PdoGy5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdoGy5 > .teaser-link > .container`
- `#ArLy2M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArLy2M > .teaser-link > .container`
- `#JOxeoX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxeoX > .teaser-link > .container`
- `#\38 pQxVd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pQxVd > .teaser-link > .container`
- `#Okr5n1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okr5n1 > .teaser-link > .container`
- `#Okr1GO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okr1GO > .teaser-link > .container`
