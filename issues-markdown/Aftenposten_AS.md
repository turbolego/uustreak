# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-18T00:31:29.293Z
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
- **Count:** 14

#### Affected Elements:

- `#\35 pG4Am > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#ArLmlj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#pBAjno > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6ObOQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvqP02 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4nBPO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69Mkl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEWzeB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrOKWL > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4nqOB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGla6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 373RE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBW5Xj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArLg75 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 196

#### Affected Elements:

- `.mm-front-widget.svelte-1akfz96 > .svelte-1akfz96:nth-child(1)`
- `.mm-front-widget.svelte-1akfz96 > .mm-medals`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#JOxyGP > .teaser-link > .teaser-image-wrapper`
- `#JOxyGP > .teaser-link > .container > .information`
- `#JOxyGP > .teaser-link > .container > .illustration-container > .text`
- `#JOxyGP > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#XMqa3n > .teaser-link > .teaser-image-wrapper`
- `#XMqa3n > .teaser-link > .container > .illustration-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#\35 pGolm > .teaser-link > .teaser-image-wrapper`
- `#\35 pGolm > .teaser-link > .container > .information`
- `#\35 pGolm > .teaser-link > .container > h2`
- `#\35 pGolm > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Willy Pedersen"]`
- `._heading_12jab_646`
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
- `.magazine.teaser-bundle.new-bundles > .bundle-title`
- `#pBAjno > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAjno > .teaser-link > .container > h2`
- `#\31 6ObOQ > .teaser-link > .container > .text-wrapper-small`
- `#\31 6ObOQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvqP02 > .teaser-link > .container > .text-wrapper-small`
- `#WvqP02 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjr88r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjr88r > .teaser-link > .container`
- `#QJx6pA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJx6pA > .teaser-link > .container`
- `.mm-text`
- `#dr-edition-teaser-szycsnor2 > div`
- `#zO7w1w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7w1w > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#d4nBPO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4nBPO > .teaser-link > .container > h2`
- `#V69Mkl > .teaser-link > .container > .text-wrapper-small`
- `#V69Mkl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1W0GQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1W0GQ > .teaser-link > .container`
- `.games-widget`
- `#zOrn3w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrn3w > .teaser-link > .container`
- `#y54yka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54yka > .teaser-link > .container`
- `#oEWGGK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEWGGK > .teaser-link > .container`
- `#\37 pdJw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdJw8 > .teaser-link > .container`
- `#wr8Ge1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8Ge1 > .teaser-link > .container`
- `#M71bQm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M71bQm > .teaser-link > .container`
- `#gk058a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk058a > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(25) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#gk61y5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk61y5 > .teaser-link > .container > h2`
- `#gk61y5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Åsne Solberg"]`
- `#oEWzeB > .teaser-link > .container > .text-wrapper-small`
- `#oEWzeB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrOKWL > .teaser-link > .container > .text-wrapper-small`
- `#wrOKWL > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k06woQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k06woQ > .teaser-link > .container`
- `#wr80on > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr80on > .teaser-link > .container > .information`
- `#wr80on > .teaser-link > .container > .illustration-container > .text`
- `#wr80on > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#JOEaeP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOEaeP > .teaser-link > .container`
- `#j0aJKz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0aJKz > .teaser-link > .container`
- `#ArlEJn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlEJn > .teaser-link > .container`
- `#QJyWyQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJyWyQ > .teaser-link > .container`
- `.benefits-widget-container`
- `#\32 p8ggv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p8ggv > .teaser-link > .container`
- `#y54p1A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y54p1A > .teaser-link > .container`
- `#zO7OyK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7OyK > .teaser-link > .container`
- `#WvO5OK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvO5OK > .teaser-link > .container`
- `#q6WpoL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6WpoL > .teaser-link > .container`
- `#PdoG36 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdoG36 > .teaser-link > .container`
- `#M7LBOm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7LBOm > .teaser-link > .container > .information`
- `#M7LBOm > .teaser-link > .container > h2`
- `#M7LBOm > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjersti Stenseng"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(39) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#d4nqOB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4nqOB > .teaser-link > .container > h2`
- `#\30 pGla6 > .teaser-link > .container > .text-wrapper-small`
- `#\30 pGla6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7wRO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO7wRO > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(42)`
- `#rrEOwa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrEOwa > .teaser-link > .container`
- `#Gx3gB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx3gB4 > .teaser-link > .container`
- `#\37 pdgB3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdgB3 > .teaser-link > .container`
- `#pBWOQV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBWOQV > .teaser-link > .container > .information`
- `#pBWOQV > .teaser-link > .container > h2`
- `#pBWOQV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Claire Alfonso"]`
- `.fullwidth.teaser-wrapper:nth-child(47)`
- `.series-location.teaser-bundle.new-bundles > .bundle-title`
- `#zO74J4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO74J4 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#zO74J4 > .teaser-link > .container > h2`
- `#\34 373RE > .teaser-link > .container > .text-wrapper-small`
- `#\34 373RE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxgpX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxgpX > .teaser-link > .container`
- `#d4n0Bj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4n0Bj > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(51) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#pBW5Xj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBW5Xj > .teaser-link > .container > h2`
- `#ArLg75 > .teaser-link > .container > .text-wrapper-small`
- `#ArLg75 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk64Eq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk64Eq > .teaser-link > .container`
- `#bOGwkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOGwkl > .teaser-link > .container > .information`
- `#bOGwkl > .teaser-link > .container > h2`
- `#bOGwkl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Morten Busch"]`
- `#wrOkK5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrOkK5 > .teaser-link > .container`
- `#\38 pQ1Lw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pQ1Lw > .teaser-link > .container`
- `#Gx3J1x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx3J1x > .teaser-link > .container`
- `img[alt="Treffer som et knyttneveslag"]`
- `#xr8pVB > .teaser-link > .container`
- `#e7EeM4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7EeM4 > .teaser-link > .container`
- `#vr5kdl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vr5kdl > .teaser-link > .container > .information`
- `#vr5kdl > .teaser-link > .container > h2`
- `#vr5kdl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anders Cappelen"]`
- `#j0avR0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0avR0 > .teaser-link > .container`
- `#q6Ro61 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Ro61 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#q6Ro61 > .teaser-link > .container`
- `#rrE3wm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrE3wm > .teaser-link > .container`
- `#lnV9gG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnV9gG > .teaser-link > .container`
- `#RjxkE2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxkE2 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#RjxkE2 > .teaser-link > .container`
