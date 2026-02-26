# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-26T00:29:57.401Z
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

- `#wr8Ge1 > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#pBQQv6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ln3gVG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8zpk6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJb7q5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOQQK7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvRO7g > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJbwKA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p817B > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 219

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#ArP3MM > .teaser-link > .teaser-image-wrapper`
- `#ArP3MM > .teaser-link > .container > .information`
- `#ArP3MM > .teaser-link > .container > .illustration-container > .text`
- `#ArP3MM > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `#vreePL`
- `#Ok8oj3 > .teaser-link > .teaser-image-wrapper`
- `#Ok8oj3 > .teaser-link > .container > .information`
- `#Ok8oj3 > .teaser-link > .container > h2`
- `#Ok8oj3 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jarle Breivik"]`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-137950"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137950"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137950"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137944"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137944"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137944"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137924"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137924"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137924"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137920"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137920"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137920"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137907"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137907"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137907"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137906"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137906"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137906"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137884"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137884"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137884"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137883"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137883"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137883"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137882"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137882"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137882"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137878"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137878"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137878"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#wr8Ge1 > .teaser-link > .teaser-image-wrapper`
- `#wr8Ge1 > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#pBAjno > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAjno > .teaser-link > .container`
- `#\30 pQKeJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pQKeJ > .teaser-link > .container`
- `#V61nd6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V61nd6 > .teaser-link > .container`
- `#d4wm1q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4wm1q > .teaser-link > .container > .information`
- `#d4wm1q > .teaser-link > .container > .illustration-container > .text`
- `#d4wm1q > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#d4wm1q > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#\30 pGey6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGey6 > .teaser-link > .container`
- `#Rjr88r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjr88r > .teaser-link > .container`
- `.games-widget`
- `#n1Wkox > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Wkox > .teaser-link > .container > .information`
- `#n1Wkox > .teaser-link > .container > .illustration-container > .text`
- `#n1Wkox > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#k06rkv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k06rkv > .teaser-link > .container`
- `#\37 p6K7w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p6K7w > .teaser-link > .container`
- `#\37 pdJw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdJw8 > .teaser-link > .container`
- `#k0E60a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0E60a > .teaser-link > .container`
- `#Ar297j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar297j > .teaser-link > .container`
- `#aJblyd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJblyd > .teaser-link > .container`
- `#\30 pKLaG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKLaG > .teaser-link > .container`
- `#Pd4d06 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd4d06 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(26) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#pBQQv6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBQQv6 > .teaser-link > .container > h2`
- `#ln3gVG > .teaser-link > .container > .text-wrapper-small`
- `#ln3gVG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxWVlQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxWVlQ > .teaser-link > .container > .text-wrapper-small`
- `#BxWVlQ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ina Lindahl Nyrud"]`
- `#JOxeoX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxeoX > .teaser-link > .container`
- `img[alt="Et praktverk om døden"]`
- `#wrAeML > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(29) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#K8zpk6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8zpk6 > .teaser-link > .container > h2`
- `#aJb7q5 > .teaser-link > .container > .text-wrapper-small`
- `#aJb7q5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOQQK7 > .teaser-link > .container > .text-wrapper-small`
- `#JOQQK7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ7xWQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ7xWQ > .teaser-link > .container`
- `.benefits-widget-container`
- `#zOrn3w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrn3w > .teaser-link > .container`
- `#\31 6552Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6552Q > .teaser-link > .container`
- `#PdRvab > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdRvab > .teaser-link > .container`
- `#d4n6qw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4n6qw > .teaser-link > .container`
- `#\32 pB3Ly > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pB3Ly > .teaser-link > .container`
- `#QJmJkA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJmJkA > .teaser-link > .teaser-image-wrapper > .series-header`
- `#QJmJkA > .teaser-link > .container`
- `#\35 pBpgE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pBpgE > .teaser-link > .container`
- `#\31 65BlK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 65BlK > .teaser-link > .container`
- `#vrerzV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrerzV > .teaser-link > .container`
- `#\38 pJp0d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJp0d > .teaser-link > .container`
- `#Ok8bbl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok8bbl > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Ok8bbl > .teaser-link > .container > .information`
- `#Ok8bbl > .teaser-link > .container > h2`
- `#Ok8bbl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Gina Grieg Riisnæs"]`
- `#\39 pzpLp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pzpLp > .teaser-link > .container`
- `#\30 pQp1B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pQp1B > .teaser-link > .container`
- `#wrAAlL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrAAlL > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(45) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#zOEAEO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOEAEO > .teaser-link > .teaser-image-wrapper > .series-header`
- `#zOEAEO > .teaser-link > .container > h2`
- `#K8nyJ5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8nyJ5 > .teaser-link > .container > .illustration-container > .text`
- `#K8nyJ5 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#WvRO7g > .teaser-link > .container > .text-wrapper-small`
- `#WvRO7g > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxMyW4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxMyW4 > .teaser-link > .container`
- `#\37 pdwzo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdwzo > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(49) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\34 3o7Vq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3o7Vq > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\34 3o7Vq > .teaser-link > .container > h2`
- `#aJbwKA > .teaser-link > .container > .text-wrapper-small`
- `#aJbwKA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p817B > .teaser-link > .container > .text-wrapper-small`
- `#\32 p817B > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOE7m9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOE7m9 > .teaser-link > .container`
- `#aJbljM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJbljM > .teaser-link > .container`
- `#Pd44e7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd44e7 > .teaser-link > .container`
- `#rrll5e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrll5e > .teaser-link > .container`
- `#oEnWJ0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEnWJ0 > .teaser-link > .container`
- `img[alt="Trumps mann i EU kan falle"]`
- `#d4n1xA > .teaser-link > .container > .information`
- `#d4n1xA > .teaser-link > .container > .kicker`
- `#d4n1xA > .teaser-link > .container > h2`
- `#d4n1xA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nick Sitter"]`
- `#y567Xr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y567Xr > .teaser-link > .teaser-image-wrapper > .series-header`
- `#y567Xr > .teaser-link > .container > .information`
- `#y567Xr > .teaser-link > .container > .illustration-container > .text`
- `#y567Xr > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#y567Xr > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#gk62rL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk62rL > .teaser-link > .container > .information`
- `#gk62rL > .teaser-link > .container > h2`
- `#gk62rL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Steinar Jung-Lian"]`
- `#V6Pq9W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6Pq9W > .teaser-link > .container`
- `#ArL8yn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArL8yn > .teaser-link > .container`
- `#\32 pBG0r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pBG0r > .teaser-link > .container`
- `#ArPlqx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArPlqx > .teaser-link > .container`
- `#JOQoJ8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOQoJ8 > .teaser-link > .container`
- `#\37 p6KMV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p6KMV > .teaser-link > .container`
- `#bOgMxl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOgMxl > .teaser-link > .container > .information`
- `#bOgMxl > .teaser-link > .container > h2`
- `#bOgMxl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Christian Lomsdalen"]`
- `#n1QgPL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1QgPL > .teaser-link > .container`
- `#Bxj4kw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxj4kw > .teaser-link > .container`
- `#K8zdzM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8zdzM > .teaser-link > .container`
- `#ArLj6z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArLj6z > .teaser-link > .container`
- `#K8z0g5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8z0g5 > .teaser-link > .container`
- `#ArLOax > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArLOax > .teaser-link > .container`
