# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-10T01:04:52.150Z
**URL:** [https://www.aftenposten.no/](https://www.aftenposten.no/)
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

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 6

#### Affected Elements:

- `#utif_topboard-2lt250_76307a63-65d9-4d68-94a7-0343578d7a6c, iframe`
- `#utif_topboard-2lt250_76307a63-65d9-4d68-94a7-0343578d7a6c, iframe, iframe[src$="about:blank"]`
- `#utif_topboard-2lt250_76307a63-65d9-4d68-94a7-0343578d7a6c, iframe, body > iframe`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, iframe`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, iframe, iframe[scrolling="no"]`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, iframe, body > iframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#utif_topboard-2lt250_76307a63-65d9-4d68-94a7-0343578d7a6c, img`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 8

#### Affected Elements:

- `#Gx0GAx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p9BXr > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QqzJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Ukraina svekkes av korrupsjon"]`
- `#\37 ppnLw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOOym5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5zAGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6Qbwl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 234

#### Affected Elements:

- `#utif_topboard-2lt250_76307a63-65d9-4d68-94a7-0343578d7a6c, iframe, iframe[src$="about:blank"], #s > .center`
- `#utif_topboard-2lt250_76307a63-65d9-4d68-94a7-0343578d7a6c, iframe, iframe[src$="about:blank"], #x > .center`
- `#utif_topboard-2lt250_76307a63-65d9-4d68-94a7-0343578d7a6c, img`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, iframe, iframe[scrolling="no"], #i`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, iframe, iframe[scrolling="no"], #l`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, iframe, iframe[scrolling="no"], #e`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, iframe, iframe[scrolling="no"], #d`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, iframe, iframe[scrolling="no"], #c`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, iframe, iframe[scrolling="no"], #f`
- `#utif_skyscraperright_1-or18mh_47dab18a-fc53-4107-885d-df038da0e5e6, img`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-9yxthu39 > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1166k_647`
- `article[data-pulse-entity-id="reel-138889"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138889"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138889"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138880"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138880"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138880"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138842"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138842"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138842"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138839"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138839"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138839"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138837"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138837"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138837"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138834"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138834"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138834"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138825"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138825"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138825"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138831"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138831"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138831"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138788"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138788"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138788"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138798"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138798"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138798"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#j0Ozvz > .teaser-link > .teaser-image-wrapper`
- `#j0Ozvz > .teaser-link > .container > .illustration-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#q6P2pO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6P2pO > .teaser-link > .container`
- `#d47EvA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47EvA > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Gx0GAx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx0GAx > .teaser-link > .container > h2`
- `#\32 p9BXr > .teaser-link > .container > .text-wrapper-small`
- `#\32 p9BXr > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdvVqb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdvVqb > .teaser-link > .container > .information`
- `#PdvVqb > .teaser-link > .container > .illustration-container > .text`
- `#PdvVqb > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#\38 pPRJ1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pPRJ1 > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#V6QqzJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QqzJ > .teaser-link > .container > h2`
- `#\32 p9Ga4 > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Ukraina svekkes av korrupsjon"]`
- `#k08w4Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08w4Q > .teaser-link > .container`
- `#k0MroX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MroX > .teaser-link > .container`
- `#Wv6geg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv6geg > .teaser-link > .container`
- `#L4oRa4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4oRa4 > .teaser-link > .container`
- `#vrkqrm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrkqrm > .teaser-link > .container`
- `#k0MyX9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MyX9 > .teaser-link > .container`
- `#Ar7bB3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7bB3 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(24) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 ppnLw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 ppnLw > .teaser-link > .container > h2`
- `#bOOym5 > .teaser-link > .container > .text-wrapper-small`
- `#bOOym5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pqB4M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pqB4M > .teaser-link > .container`
- `#wrrB24 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrrB24 > .teaser-link > .container`
- `#\34 3EpOg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3EpOg > .teaser-link > .container > .information`
- `#\34 3EpOg > .teaser-link > .container > .illustration-container > .text`
- `#\34 3EpOg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Hilde Østby"]`
- `#aJvOBd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJvOBd > .teaser-link > .container`
- `#Pdpoop > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdpoop > .teaser-link > .container`
- `#K86yxy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86yxy > .teaser-link > .container`
- `#\37 p62y3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p62y3 > .teaser-link > .container`
- `#\39 pbOLW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbOLW > .teaser-link > .container`
- `.benefits-widget-container`
- `#gkEe6q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkEe6q > .teaser-link > .container`
- `#lnMAGL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMAGL > .teaser-link > .container`
- `#\32 p9VMx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p9VMx > .teaser-link > .container`
- `#n1wWQm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1wWQm > .teaser-link > .container`
- `#m05Kvg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m05Kvg > .teaser-link > .container`
- `#Ok6gBw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok6gBw > .teaser-link > .container`
- `#\39 pbkjE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbkjE > .teaser-link > .container`
- `#V6g1eV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6g1eV > .teaser-link > .container`
- `img[alt="Hva heter denne desserten?"]`
- `#K8LRq4 > .teaser-link > .container`
- `#wrR3Vo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrR3Vo > .teaser-link > .container`
- `#q6J6Bg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6J6Bg > .teaser-link > .container`
- `#zOMO65 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMO65 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(44) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#y5zAGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5zAGE > .teaser-link > .container > h2`
- `#V6Qbwl > .teaser-link > .container > .text-wrapper-small`
- `#V6Qbwl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt=" Syltynn norsk bestselger"]`
- `#bOk9gg > .teaser-link > .container`
- `#\36 qojGW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qojGW > .teaser-link > .container > .information`
- `#\36 qojGW > .teaser-link > .container > h2`
- `#\36 qojGW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ole Jakob Løland"]`
- `#\37 pV6gW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pV6gW > .teaser-link > .container`
- `#rrrz23 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrrz23 > .teaser-link > .container`
- `#GxPg94 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPg94 > .teaser-link > .container`
- `#\32 pVqgR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pVqgR > .teaser-link > .container`
- `#d4vmAj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4vmAj > .teaser-link > .container`
- `#Exb6X3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exb6X3 > .teaser-link > .container`
- `img[alt="Epstein-saken må legges død"]`
- `#rr8kP8 > .teaser-link > .container > .information`
- `#rr8kP8 > .teaser-link > .container > h2`
- `#rr8kP8 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Trond Norén Isaksen"]`
- `#d4JgvJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4JgvJ > .teaser-link > .container > .information`
- `#d4JgvJ > .teaser-link > .container > h2`
- `#d4JgvJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kari Hirth"]`
- `#d4JKmw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4JKmw > .teaser-link > .container`
- `#\37 pPyx9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPyx9 > .teaser-link > .container`
- `#\30 pvPvB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvPvB > .teaser-link > .container`
- `#wrdpaG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdpaG > .teaser-link > .container`
- `#\31 6vl6K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6vl6K > .teaser-link > .container`
- `#xrMAAB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMAAB > .teaser-link > .container`
- `#n1GWEQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GWEQ > .teaser-link > .container`
- `#GxPV06 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPV06 > .teaser-link > .container > .information`
- `#GxPV06 > .teaser-link > .container > h2`
- `#GxPV06 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lily Bandehy"]`
- `#\36 qo39e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qo39e > .teaser-link > .container`
- `#\34 3EnMe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3EnMe > .teaser-link > .container`
- `#oEk6zR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEk6zR > .teaser-link > .container`
- `#JO6WW7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6WW7 > .teaser-link > .container > .information`
- `#JO6WW7 > .teaser-link > .container > h2`
- `#JO6WW7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Frode Saugestad"]`
- `#n1Gajn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Gajn > .teaser-link > .container`
- `#wrRe11 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRe11 > .teaser-link > .container`
- `#aJGzOL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJGzOL > .teaser-link > .container > .information`
- `#aJGzOL > .teaser-link > .container > .illustration-container > .text`
- `#aJGzOL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#zOMgvq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMgvq > .teaser-link > .container`
- `#K86BP5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86BP5 > .teaser-link > .container`
- `#GxPvE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPvE4 > .teaser-link > .container > .information`
- `#GxPvE4 > .teaser-link > .container > h2`
- `#GxPvE4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sigrun Aasland"]`
- `img[alt="En gladnyhet om kreft"]`
- `#Rj13lW > .teaser-link > .container > .information`
- `#Rj13lW > .teaser-link > .container > .illustration-container > .text`
- `#Rj13lW > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\38 p5mnG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5mnG > .teaser-link > .container`
- `#k0M4n9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0M4n9 > .teaser-link > .container`
- `#pBd63R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBd63R > .teaser-link > .container`
- `#M771aB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M771aB > .teaser-link > .container`
- `#L4oyJp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4oyJp > .teaser-link > .container`
- `#q6OG6z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6OG6z > .teaser-link > .container`
