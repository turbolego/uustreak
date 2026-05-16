# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-16T00:48:42.878Z
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
- **Count:** 6

#### Affected Elements:

- `#xrMvMG > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#XMRAGx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#k08X6k > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\30 p9ldg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pV1KK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5o1x > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 227

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#xrMvMG > .teaser-link > .teaser-image-wrapper`
- `#xrMvMG > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#dr-edition-teaser-2tsy2erl3 > div`
- `.teaser-bundle.new-bundles.series-location > .bundle-title`
- `#\34 3bJKg > .teaser-link > .teaser-image-wrapper`
- `#\34 3bJKg > .teaser-link > .container > h2`
- `.teaser-bundle.new-bundles.series-location > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_1166k_647`
- `article[data-pulse-entity-id="reel-138974"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138974"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138974"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138972"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138972"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138972"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138927"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138927"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138927"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138968"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138968"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138968"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138970"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138970"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138970"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138969"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138969"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138969"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138926"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138926"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138926"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138928"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138928"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138928"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138948"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138948"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138948"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#gkvG40 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkvG40 > .teaser-link > .container`
- `#\33 p1d80 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p1d80 > .teaser-link > .container`
- `#bOX23d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOX23d > .teaser-link > .container`
- `#ArRAzM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArRAzM > .teaser-link > .container`
- `#QJ50WV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ50WV > .teaser-link > .container > .information`
- `#QJ50WV > .teaser-link > .container > .illustration-container > .text`
- `#QJ50WV > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#e7a68Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7a68Q > .teaser-link > .container`
- `.games-widget`
- `#pBdvVX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBdvVX > .teaser-link > .container`
- `#ExJm22 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJm22 > .teaser-link > .container > .information`
- `#ExJm22 > .teaser-link > .container > h2`
- `#ExJm22 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Geir Stian Ulstein"]`
- `#\37 pVByo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVByo > .teaser-link > .container`
- `#d4vQpq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4vQpq > .teaser-link > .container > .information`
- `#d4vQpq > .teaser-link > .container > .illustration-container > .text`
- `#d4vQpq > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Harald Stanghelle"]`
- `#ArRbeM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArRbeM > .teaser-link > .container`
- `#\39 pbQ6w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbQ6w > .teaser-link > .container`
- `#\30 p9zvE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9zvE > .teaser-link > .container`
- `#k0MEPL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MEPL > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(24) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#bOXj3e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOXj3e > .teaser-link > .container > h2`
- `#bOXj3e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Røren"]`
- `#\32 p90jx > .teaser-link > .container > .text-wrapper-small`
- `#\32 p90jx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#n1GKaL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GKaL > .teaser-link > .container`
- `#ExJROG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJROG > .teaser-link > .container`
- `#QJ5k7P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ5k7P > .teaser-link > .container`
- `#ExJkqA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJkqA > .teaser-link > .container`
- `#Pd5wdz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd5wdz > .teaser-link > .container > .information`
- `#Pd5wdz > .teaser-link > .container > h2`
- `#Pd5wdz > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Odd Asbjørn Pedersen"]`
- `#\35 p8V01 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p8V01 > .teaser-link > .container`
- `#Rj6p78 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj6p78 > .teaser-link > .container`
- `.benefits-widget-container`
- `#wr32xd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr32xd > .teaser-link > .container`
- `#wrRQ04 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRQ04 > .teaser-link > .container`
- `#\34 33Mme > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 33Mme > .teaser-link > .container`
- `#Pd5AbX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd5AbX > .teaser-link > .container`
- `#\37 p62y3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p62y3 > .teaser-link > .container`
- `#\38 p5K3d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5K3d > .teaser-link > .container`
- `#wrRQ1L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRQ1L > .teaser-link > .container`
- `#JO6yoR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6yoR > .teaser-link > .container`
- `#xrMjln > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMjln > .teaser-link > .container`
- `#\31 6qVVG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6qVVG > .teaser-link > .container`
- `#k08Ojj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08Ojj > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(42) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\30 p9ldg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9ldg > .teaser-link > .container > h2`
- `#\37 pV1KK > .teaser-link > .container > .text-wrapper-small`
- `#\37 pV1KK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5o1x > .teaser-link > .container > .text-wrapper-small`
- `#\38 p5o1x > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Dette er politisk teater"]`
- `#wrRXeG > .teaser-link > .container`
- `#\34 BAyka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BAyka > .teaser-link > .container > .information`
- `#\34 BAyka > .teaser-link > .container > h2`
- `#\34 BAyka > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anine Hallgren"]`
- `#M76jXM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M76jXM > .teaser-link > .container`
- `#JO63pb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO63pb > .teaser-link > .container > .information`
- `#JO63pb > .teaser-link > .container > h2`
- `#JO63pb > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Petter Øgar"]`
- `#\32 p9e1r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p9e1r > .teaser-link > .container`
- `#Gx0qpq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx0qpq > .teaser-link > .container`
- `#bOXB2k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOXB2k > .teaser-link > .container`
- `#n1GKr5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GKr5 > .teaser-link > .container`
- `#\37 pPyx9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPyx9 > .teaser-link > .container`
- `#m05aQ0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m05aQ0 > .teaser-link > .container`
- `#Pd5v3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd5v3X > .teaser-link > .container`
- `#QJ5g5P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ5g5P > .teaser-link > .container`
- `#XMR28o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMR28o > .teaser-link > .container`
- `#\37 pVMgV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVMgV > .teaser-link > .container`
- `#d44M1w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d44M1w > .teaser-link > .container`
- `#Pdv6Be > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdv6Be > .teaser-link > .container`
- `#Rj6nE2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj6nE2 > .teaser-link > .container`
- `#Pd5a8p > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd5a8p > .teaser-link > .container`
- `#zOMeaO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMeaO > .teaser-link > .container`
- `#QJ5WkW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ5WkW > .teaser-link > .container`
- `#Ar7Wlx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7Wlx > .teaser-link > .container > .information`
- `#Ar7Wlx > .teaser-link > .container > .illustration-container > .text`
- `#Ar7Wlx > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#j0Om7o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0Om7o > .teaser-link > .container`
- `#\38 p5ROd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5ROd > .teaser-link > .container`
- `#xrMyap > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMyap > .teaser-link > .container`
- `#aJvbaE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJvbaE > .teaser-link > .container > .information`
- `#aJvbaE > .teaser-link > .container > h2`
- `#aJvbaE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `img[alt="Tenk at Oslo så sånn ut!"]`
- `#rrzXye > .teaser-link > .container > .information`
- `#rrzXye > .teaser-link > .container > .illustration-container > .text`
- `#rrzXye > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#zO0OM9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO0OM9 > .teaser-link > .container`
- `#\33 pqQ29 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pqQ29 > .teaser-link > .container`
- `#K86k54 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86k54 > .teaser-link > .container`
- `#\39 pbnWM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbnWM > .teaser-link > .container`
- `#k08yzA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08yzA > .teaser-link > .container`
- `#Ar7GLx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7GLx > .teaser-link > .container > .information`
- `#Ar7GLx > .teaser-link > .container > .illustration-container > .text`
- `#Ar7GLx > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#vr6XWl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vr6XWl > .teaser-link > .container > .information`
- `#vr6XWl > .teaser-link > .container > h2`
- `#vr6XWl > .teaser-link > .container > .byline > div:nth-child(1)`
- `#vr6XWl > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#bOXole > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOXole > .teaser-link > .container`
- `#Wv6XOg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv6XOg > .teaser-link > .container`
