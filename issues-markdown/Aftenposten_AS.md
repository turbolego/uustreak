# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-11T00:51:59.201Z
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

- `#utif_topboard-ne8pij_0cfa5546-a166-4a54-8a02-d40156a88ace, iframe`
- `#utif_topboard-ne8pij_0cfa5546-a166-4a54-8a02-d40156a88ace, iframe, iframe[scrolling="no"]`
- `#utif_topboard-ne8pij_0cfa5546-a166-4a54-8a02-d40156a88ace, iframe, body > iframe`
- `#utif_skyscraperright_1-972e8s_36d06ed9-f96f-4c2e-8e5e-e071dcd0d06a, iframe`
- `#utif_skyscraperright_1-972e8s_36d06ed9-f96f-4c2e-8e5e-e071dcd0d06a, iframe, iframe[src$="about:blank"]`
- `#utif_skyscraperright_1-972e8s_36d06ed9-f96f-4c2e-8e5e-e071dcd0d06a, iframe, body > iframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#utif_topboard-ne8pij_0cfa5546-a166-4a54-8a02-d40156a88ace, img`
- `#utif_skyscraperright_1-972e8s_36d06ed9-f96f-4c2e-8e5e-e071dcd0d06a, img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 9

#### Affected Elements:

- `#M763xJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx0GAx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p9BXr > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gV3J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPyx9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJvvbM > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6g1eV > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QqzJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Ukraina svekkes av korrupsjon"]`

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
- **Count:** 241

#### Affected Elements:

- `#utif_topboard-ne8pij_0cfa5546-a166-4a54-8a02-d40156a88ace, iframe, iframe[scrolling="no"], #e`
- `#utif_topboard-ne8pij_0cfa5546-a166-4a54-8a02-d40156a88ace, iframe, iframe[scrolling="no"], #a`
- `#utif_topboard-ne8pij_0cfa5546-a166-4a54-8a02-d40156a88ace, iframe, iframe[scrolling="no"], #g`
- `#utif_topboard-ne8pij_0cfa5546-a166-4a54-8a02-d40156a88ace, img`
- `#utif_skyscraperright_1-972e8s_36d06ed9-f96f-4c2e-8e5e-e071dcd0d06a, iframe, iframe[src$="about:blank"], #a > .center`
- `#utif_skyscraperright_1-972e8s_36d06ed9-f96f-4c2e-8e5e-e071dcd0d06a, iframe, iframe[src$="about:blank"], #b > .center`
- `#utif_skyscraperright_1-972e8s_36d06ed9-f96f-4c2e-8e5e-e071dcd0d06a, iframe, iframe[src$="about:blank"], #d > .center`
- `#utif_skyscraperright_1-972e8s_36d06ed9-f96f-4c2e-8e5e-e071dcd0d06a, img`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-0qyxcdi95 > div`
- `#j0OBkb > .teaser-link > .teaser-image-wrapper`
- `#j0OBkb > .teaser-link > .container > .information`
- `#j0OBkb > .teaser-link > .container > h2`
- `#j0OBkb > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Einar Hålien "]`
- `#wrRRV4`
- `._heading_1166k_647`
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
- `article[data-pulse-entity-id="reel-138834"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138834"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138834"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138825"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138825"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138825"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `#pBM7vo > .teaser-link > .teaser-image-wrapper`
- `#pBM7vo > .teaser-link > .container > .information`
- `#pBM7vo > .teaser-link > .container > .illustration-container > .text`
- `#pBM7vo > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#pBddkG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBddkG > .teaser-link > .container`
- `#xrM3qG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrM3qG > .teaser-link > .container > .information`
- `#xrM3qG > .teaser-link > .container > h2`
- `#xrM3qG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Inger-Johanne Seglen"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#M763xJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M763xJ > .teaser-link > .container > h2`
- `#Gx0GAx > .teaser-link > .container > .text-wrapper-small`
- `#Gx0GAx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p9BXr > .teaser-link > .container > .text-wrapper-small`
- `#\32 p9BXr > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qooMQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qooMQ > .teaser-link > .container`
- `#ExJb05 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJb05 > .teaser-link > .container`
- `#JOnAPb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOnAPb > .teaser-link > .container`
- `.games-widget`
- `#\36 qPr8L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qPr8L > .teaser-link > .container`
- `#\30 pBx5G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pBx5G > .teaser-link > .container`
- `#ExJQL5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJQL5 > .teaser-link > .container > .information`
- `#ExJQL5 > .teaser-link > .container > h2`
- `#ExJQL5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jørn Brunæs"]`
- `#\30 pvk72 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvk72 > .teaser-link > .container`
- `#n1GQ7n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GQ7n > .teaser-link > .container > .information`
- `#n1GQ7n > .teaser-link > .container > .illustration-container > .text`
- `#n1GQ7n > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#Okyq7w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okyq7w > .teaser-link > .container`
- `#q6J14w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6J14w > .teaser-link > .container > .information`
- `#q6J14w > .teaser-link > .container > h2`
- `#q6J14w > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Einar Lie"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(22) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#V6gV3J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gV3J > .teaser-link > .container > h2`
- `#\37 pPyx9 > .teaser-link > .container > .text-wrapper-small`
- `#\37 pPyx9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMlk5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMlk5 > .teaser-link > .container`
- `#rrzMP0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrzMP0 > .teaser-link > .container`
- `#y55AXe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y55AXe > .teaser-link > .container`
- `#V6QQB6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QQB6 > .teaser-link > .container`
- `#gk3KwB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk3KwB > .teaser-link > .container`
- `#\34 3Ezlg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3Ezlg > .teaser-link > .container`
- `#lnMJWk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMJWk > .teaser-link > .container`
- `#Ar7773 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7773 > .teaser-link > .container`
- `img[alt="Drømmestart for Tettey"]`
- `#\38 p55K1 > .teaser-link > .container`
- `.benefits-widget-container`
- `#Wv67gQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv67gQ > .teaser-link > .container`
- `#n1GWEQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GWEQ > .teaser-link > .container`
- `#zOMGJw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMGJw > .teaser-link > .container > .information`
- `#zOMGJw > .teaser-link > .container > h2`
- `#zOMGJw > .teaser-link > .container > .byline > div:nth-child(1)`
- `#zOMGJw > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#M75Qo5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M75Qo5 > .teaser-link > .container`
- `#\38 p55wE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p55wE > .teaser-link > .container`
- `#m05MkO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m05MkO > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(37) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#GxPeym > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPeym > .teaser-link > .container > h2`
- `#GxPeym > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Igor Bondar"]`
- `#aJvvbM > .teaser-link > .container > .text-wrapper-small`
- `#aJvvbM > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6g1eV > .teaser-link > .container > .text-wrapper-small`
- `#V6g1eV > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk38v0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk38v0 > .teaser-link > .container`
- `#j03maz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j03maz > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(41) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#V6QqzJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QqzJ > .teaser-link > .container > h2`
- `#\32 p9Ga4 > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Ukraina svekkes av korrupsjon"]`
- `#\32 p9vJB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p9vJB > .teaser-link > .container`
- `#vrkqrm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrkqrm > .teaser-link > .container`
- `#PdvVqb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdvVqb > .teaser-link > .container > .information`
- `#PdvVqb > .teaser-link > .container > .illustration-container > .text`
- `#PdvVqb > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#\38 pPRJ1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pPRJ1 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(46) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#j0Ozvz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0Ozvz > .teaser-link > .container > .illustration-container > .text`
- `#j0Ozvz > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#\31 6v8AM > .teaser-link > .container > .text-wrapper-small`
- `#\31 6v8AM > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJvOBd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJvOBd > .teaser-link > .container`
- `#\33 pBlAX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pBlAX > .teaser-link > .container`
- `#\39 pbOLW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbOLW > .teaser-link > .container`
- `#Ar7bB3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7bB3 > .teaser-link > .container`
- `#\34 3EpOg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3EpOg > .teaser-link > .container > .information`
- `#\34 3EpOg > .teaser-link > .container > .illustration-container > .text`
- `#\34 3EpOg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Hilde Østby"]`
- `#Wv6geg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv6geg > .teaser-link > .container`
- `#m05Kvg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m05Kvg > .teaser-link > .container`
- `#d4JgvJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4JgvJ > .teaser-link > .container > .information`
- `#d4JgvJ > .teaser-link > .container > h2`
- `#d4JgvJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kari Hirth"]`
- `#zOMO65 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMO65 > .teaser-link > .container`
- `#d4vmAj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4vmAj > .teaser-link > .container`
- `#q6J6Bg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6J6Bg > .teaser-link > .container`
- `#y5zAGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5zAGE > .teaser-link > .container`
- `#k08w4Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08w4Q > .teaser-link > .container`
- `#rrrz23 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrrz23 > .teaser-link > .container`
- `#\37 pV6gW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pV6gW > .teaser-link > .container`
- `img[alt=" Syltynn norsk bestselger"]`
- `#bOk9gg > .teaser-link > .container`
- `#\32 pVqgR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pVqgR > .teaser-link > .container`
- `#GxPg94 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPg94 > .teaser-link > .container`
- `#\36 qojGW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qojGW > .teaser-link > .container > .information`
- `#\36 qojGW > .teaser-link > .container > h2`
- `#\36 qojGW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ole Jakob Løland"]`
- `#\31 6vl6K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6vl6K > .teaser-link > .container`
- `#wr3wOL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr3wOL > .teaser-link > .container`
- `#d4JKmw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4JKmw > .teaser-link > .container`
- `#GxPV06 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPV06 > .teaser-link > .container > .information`
- `#GxPV06 > .teaser-link > .container > h2`
- `#GxPV06 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lily Bandehy"]`
- `#xrMAAB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMAAB > .teaser-link > .container`
- `#M771aB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M771aB > .teaser-link > .container`
- `#wrdpaG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdpaG > .teaser-link > .container`
- `#oEk6zR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEk6zR > .teaser-link > .container`
- `#oEkL30 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEkL30 > .teaser-link > .container`
