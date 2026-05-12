# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-12T00:48:10.821Z
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

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 6

#### Affected Elements:

- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"]`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, body > iframe`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, iframe`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, iframe, iframe[scrolling="no"]`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, iframe, body > iframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, img`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 5

#### Affected Elements:

- `#gkvzgk > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\31 6qWzG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\37 pPyx9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pB30E > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrrwo5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 6

#### Affected Elements:

- `.ch-core-header`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"], #j`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"], #i`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"], #h`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"], #f`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"], #d`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 253

#### Affected Elements:

- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"], #a`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"], #b`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"], #g`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"], #e`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, iframe, iframe[scrolling="no"], #c`
- `#utif_topboard-yxcfpr_311a960d-e748-4795-9da8-822cceddacc8, img`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, iframe, iframe[scrolling="no"], #a`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, iframe, iframe[scrolling="no"], #e`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, iframe, iframe[scrolling="no"], #b`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, iframe, iframe[scrolling="no"], #i`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, iframe, iframe[scrolling="no"], #g`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, iframe, iframe[scrolling="no"], #c`
- `#utif_skyscraperright_1-tpoxrb_c9d22972-f82c-4dd6-8cf9-e4893f12be19, img`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#Wv6kBk > .teaser-link > .teaser-image-wrapper`
- `#Wv6kBk > .teaser-link > .container > .information`
- `#Wv6kBk > .teaser-link > .container > .illustration-container > .text`
- `#Wv6kBk > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `#Ok6zA1`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-fxe9db43d > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#gkvzgk > .teaser-link > .teaser-image-wrapper`
- `#gkvzgk > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_1166k_647`
- `article[data-pulse-entity-id="reel-138904"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138904"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138904"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138897"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138897"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138897"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138902"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138902"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138902"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138901"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138901"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138901"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138900"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138900"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138900"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
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
- `.double.teaser-wrapper:nth-child(7)`
- `#OkywlV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkywlV > .teaser-link > .container`
- `#lnM8ge > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnM8ge > .teaser-link > .container`
- `#xrM52j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrM52j > .teaser-link > .container`
- `#ExJROG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJROG > .teaser-link > .container`
- `#V664EW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V664EW > .teaser-link > .container`
- `#j0v65o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0v65o > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#k08Qk6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08Qk6 > .teaser-link > .container > h2`
- `#k08Qk6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#j0Ozvz > .teaser-link > .container > .text-wrapper-small`
- `#j0Ozvz > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#XMoQGm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMoQGm > .teaser-link > .container`
- `#\37 pVByo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVByo > .teaser-link > .container`
- `#\38 pPRJ1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pPRJ1 > .teaser-link > .container`
- `img[alt="Fra syndens by til solens by"]`
- `.series-header`
- `#L4oXj4 > .teaser-link > .container > .information`
- `#L4oXj4 > .teaser-link > .container > .illustration-container > .text`
- `#L4oXj4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#\30 pvRr2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvRr2 > .teaser-link > .container`
- `#wrRnKM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRnKM > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(22) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 pPyx9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPyx9 > .teaser-link > .container > h2`
- `#\30 pB30E > .teaser-link > .container > .text-wrapper-small`
- `#\30 pB30E > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrrwo5 > .teaser-link > .container > .text-wrapper-small`
- `#wrrwo5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRKp1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRKp1 > .teaser-link > .container > .information`
- `#wrRKp1 > .teaser-link > .container > h2`
- `#wrRKp1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ola Svenneby"]`
- `#wrRgXM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRgXM > .teaser-link > .container > .information`
- `#wrRgXM > .teaser-link > .container > h2`
- `#wrRgXM > .teaser-link > .container > .byline > div:nth-child(1)`
- `#wrRgXM > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\35 pEdKW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pEdKW > .teaser-link > .container`
- `#L46jLR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L46jLR > .teaser-link > .container`
- `#\34 3EwE9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3EwE9 > .teaser-link > .container`
- `#\37 pPgOw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPgOw > .teaser-link > .container > .information`
- `#\37 pPgOw > .teaser-link > .container > h2`
- `#\37 pPgOw > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
- `#y5gxPE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5gxPE > .teaser-link > .container`
- `#pBddkG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBddkG > .teaser-link > .container`
- `.benefits-widget-container`
- `#\37 pVmL3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVmL3 > .teaser-link > .container`
- `#\34 33lE9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 33lE9 > .teaser-link > .container`
- `img[alt="Vi er vitne til et maktskifte"]`
- `#vr6e24 > .teaser-link > .container`
- `#K86GL7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86GL7 > .teaser-link > .container`
- `#\37 pVRb8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVRb8 > .teaser-link > .container`
- `#d4vO1z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4vO1z > .teaser-link > .container`
- `#zOMxOw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMxOw > .teaser-link > .container`
- `#\39 pb6gr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pb6gr > .teaser-link > .container > .information`
- `#\39 pb6gr > .teaser-link > .container > h2`
- `#\39 pb6gr > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Øyulf Hjertenes"]`
- `#n1Gm8Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Gm8Q > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(41)`
- `#\38 p5EKr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5EKr > .teaser-link > .container`
- `img[alt="Mistenkt erklærer seg uskyldig"]`
- `#d4vqKq > .teaser-link > .container`
- `#bOX7wk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOX7wk > .teaser-link > .container > .information`
- `#bOX7wk > .teaser-link > .container > h2`
- `#bOX7wk > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Borgersrud"]`
- `#\30 p9n5g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9n5g > .teaser-link > .container`
- `#M76j7R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M76j7R > .teaser-link > .container`
- `#oEk7om > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEk7om > .teaser-link > .container > .information`
- `#oEk7om > .teaser-link > .container > h2`
- `#oEk7om > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ane Nordal"]`
- `#zOM6n1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOM6n1 > .teaser-link > .container`
- `#j0OBEw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0OBEw > .teaser-link > .container > .information`
- `#j0OBEw > .teaser-link > .container > h2`
- `#j0OBEw > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Carolin Maertens"]`
- `#Rj6GJa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj6GJa > .teaser-link > .container`
- `#xrMOgn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMOgn > .teaser-link > .container`
- `#\30 p9L2E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9L2E > .teaser-link > .container`
- `img[alt="Hvem er dette?"]`
- `#zOMOn5 > .teaser-link > .container`
- `#\36 qooMQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qooMQ > .teaser-link > .container`
- `#zOMlk5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMlk5 > .teaser-link > .container`
- `#j0OBkb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0OBkb > .teaser-link > .container > .information`
- `#j0OBkb > .teaser-link > .container > h2`
- `#j0OBkb > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Einar Hålien "]`
- `#wrRRV4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRRV4 > .teaser-link > .container`
- `#xrM3qG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrM3qG > .teaser-link > .container > .information`
- `#xrM3qG > .teaser-link > .container > h2`
- `#xrM3qG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Inger-Johanne Seglen"]`
- `#q6J14w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6J14w > .teaser-link > .container > .information`
- `#q6J14w > .teaser-link > .container > h2`
- `#q6J14w > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Einar Lie"]`
- `#ExJb05 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJb05 > .teaser-link > .container`
- `#ExJQL5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJQL5 > .teaser-link > .container > .information`
- `#ExJQL5 > .teaser-link > .container > h2`
- `#ExJQL5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jørn Brunæs"]`
- `#V6QQB6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QQB6 > .teaser-link > .container`
- `#n1GQ7n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GQ7n > .teaser-link > .container > .information`
- `#n1GQ7n > .teaser-link > .container > .illustration-container > .text`
- `#n1GQ7n > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\34 3Ezlg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3Ezlg > .teaser-link > .container`
- `#zOMGJw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMGJw > .teaser-link > .container > .information`
- `#zOMGJw > .teaser-link > .container > h2`
- `#zOMGJw > .teaser-link > .container > .byline > div:nth-child(1)`
- `#zOMGJw > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\36 qPr8L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qPr8L > .teaser-link > .container`
- `#\38 p55wE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p55wE > .teaser-link > .container`
- `#m05MkO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m05MkO > .teaser-link > .container`
- `#oEKl8R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEKl8R > .teaser-link > .container`
- `#PdvVqb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdvVqb > .teaser-link > .container > .information`
- `#PdvVqb > .teaser-link > .container > .illustration-container > .text`
- `#PdvVqb > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#\32 p9vJB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p9vJB > .teaser-link > .container`
- `#j03maz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j03maz > .teaser-link > .container`
- `#\34 3EpOg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3EpOg > .teaser-link > .container > .information`
- `#\34 3EpOg > .teaser-link > .container > .illustration-container > .text`
- `#\34 3EpOg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Hilde Østby"]`
- `#\33 pBlAX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pBlAX > .teaser-link > .container`
- `#\39 pbOLW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbOLW > .teaser-link > .container`
- `#V6QqzJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QqzJ > .teaser-link > .container`
