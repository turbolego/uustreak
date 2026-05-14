# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-14T00:53:54.687Z
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
- **Count:** 1

#### Affected Elements:

- `#utif_skyscraperright_1-3pqkjs_cbc9015a-0265-410e-b0a9-212ac2f0e84a, #te-clr1-a3719d7e-6066-4606-9292-aa11e78888eb-icon`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#utif_skyscraperright_1-3pqkjs_cbc9015a-0265-410e-b0a9-212ac2f0e84a, #te-clr1-a3719d7e-6066-4606-9292-aa11e78888eb-icon, img[width="19px"]`
- `#utif_skyscraperright_1-3pqkjs_cbc9015a-0265-410e-b0a9-212ac2f0e84a, img[width="0"][height="0"]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 6

#### Affected Elements:

- `#\33 pM4Rd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pvboq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6qgj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkvz1L > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0MqMp > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M76meJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 233

#### Affected Elements:

- `#utif_skyscraperright_1-3pqkjs_cbc9015a-0265-410e-b0a9-212ac2f0e84a, #te-clr1-a3719d7e-6066-4606-9292-aa11e78888eb-icon, #te-clr1-a3719d7e-6066-4606-9292-aa11e78888eb-anch`
- `#utif_skyscraperright_1-3pqkjs_cbc9015a-0265-410e-b0a9-212ac2f0e84a, img[width="0"][height="0"]`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#aJvbaE > .teaser-link > .teaser-image-wrapper`
- `#aJvbaE > .teaser-link > .container > .information`
- `#aJvbaE > .teaser-link > .container > h2`
- `#aJvbaE > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `#j0Ox1w`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-f5hw73s39 > div`
- `#rrzXye > .teaser-link > .teaser-image-wrapper`
- `#rrzXye > .teaser-link > .container > .information`
- `#rrzXye > .teaser-link > .container > .illustration-container > .text`
- `#rrzXye > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `._heading_1166k_647`
- `article[data-pulse-entity-id="reel-138948"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138948"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138948"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138946"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138946"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138946"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138943"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138943"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138943"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-133761"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-133761"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-133761"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138935"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138935"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138935"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138925"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138925"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138925"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138902"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138902"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138902"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138901"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138901"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138901"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138900"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138900"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138900"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `.double.teaser-wrapper:nth-child(7)`
- `#ArRr4n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArRr4n > .teaser-link > .container`
- `#Wv6XOg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv6XOg > .teaser-link > .container`
- `#\39 pbnWM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbnWM > .teaser-link > .container`
- `#Wv6Wna > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv6Wna > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\33 pM4Rd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pM4Rd > .teaser-link > .container > h2`
- `#\32 pvboq > .teaser-link > .container > .text-wrapper-small`
- `#\32 pvboq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#aJG0VE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJG0VE > .teaser-link > .container`
- `#L46dEP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L46dEP > .teaser-link > .container`
- `#QJrGBR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJrGBR > .teaser-link > .container > .information`
- `#QJrGBR > .teaser-link > .container > .illustration-container > .text`
- `#QJrGBR > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#vr6XWl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vr6XWl > .teaser-link > .container > .information`
- `#vr6XWl > .teaser-link > .container > h2`
- `#vr6XWl > .teaser-link > .container > .byline > div:nth-child(1)`
- `#vr6XWl > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\30 pvk72 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvk72 > .teaser-link > .container`
- `#zO0OM9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO0OM9 > .teaser-link > .container`
- `#Rj6av5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj6av5 > .teaser-link > .container`
- `#K86k54 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86k54 > .teaser-link > .container`
- `#\31 6qXjq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6qXjq > .teaser-link > .container`
- `img[alt="Netflix øker prisene i Norge"]`
- `#\35 pbe8z > .teaser-link > .container`
- `#Ar7GLx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7GLx > .teaser-link > .container > .information`
- `#Ar7GLx > .teaser-link > .container > .illustration-container > .text`
- `#Ar7GLx > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#M75Qo5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M75Qo5 > .teaser-link > .container`
- `#XMR3jb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMR3jb > .teaser-link > .container`
- `#m05Kvg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m05Kvg > .teaser-link > .container`
- `#Ar7kPq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7kPq > .teaser-link > .container`
- `#JOnAPb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOnAPb > .teaser-link > .container`
- `#\32 p9gny > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p9gny > .teaser-link > .container`
- `.benefits-widget-container`
- `#zOOwOv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOOwOv > .teaser-link > .container`
- `#xrMyXV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMyXV > .teaser-link > .container`
- `#pBddkG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBddkG > .teaser-link > .container`
- `#xrMVJp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMVJp > .teaser-link > .container`
- `#\34 3EwE9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3EwE9 > .teaser-link > .container`
- `#j0OKnb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0OKnb > .teaser-link > .container`
- `#bOXole > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOXole > .teaser-link > .container`
- `#\37 pVJO9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVJO9 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(40) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#JO6qgj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6qgj > .teaser-link > .container > h2`
- `#gkvz1L > .teaser-link > .container > .text-wrapper-small`
- `#gkvz1L > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0MqMp > .teaser-link > .container > .text-wrapper-small`
- `#m0MqMp > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 p3L5p > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 p3L5p > .teaser-link > .container`
- `#L46X1q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L46X1q > .teaser-link > .container`
- `#oEkl8g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEkl8g > .teaser-link > .container`
- `#Ar7qAA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7qAA > .teaser-link > .container > .information`
- `#Ar7qAA > .teaser-link > .container > h2`
- `#Ar7qAA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Gard Steiro"]`
- `img[alt="Bra at religionsfriheten vant"]`
- `#\39 pbzPl > .teaser-link > .container`
- `#k08yzA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08yzA > .teaser-link > .container`
- `#k08BpB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08BpB > .teaser-link > .container > .information`
- `#k08BpB > .teaser-link > .container > .illustration-container > .text`
- `#k08BpB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[width="88"]`
- `#lnKdrk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnKdrk > .teaser-link > .container`
- `#n1GmMB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GmMB > .teaser-link > .container > .information`
- `#n1GmMB > .teaser-link > .container > h2`
- `#n1GmMB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Lismoen"]`
- `img[alt="Hva heter denne festningen?"]`
- `#xrMrLV > .teaser-link > .container`
- `#ArPglA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArPglA > .teaser-link > .container`
- `#j0Orz9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0Orz9 > .teaser-link > .container > .information`
- `#j0Orz9 > .teaser-link > .container > h2`
- `#j0Orz9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Gustav Hårtveit"]`
- `#K86GnG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86GnG > .teaser-link > .container`
- `#\30 p93mM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p93mM > .teaser-link > .container`
- `#ExJmWG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJmWG > .teaser-link > .container > .information`
- `#ExJmWG > .teaser-link > .container > h2`
- `#ExJmWG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jonas Gahr Støre"]`
- `img[alt="Storfavoritten videre"]`
- `#\39 pbMo5 > .teaser-link > .container`
- `#\38 p5xJd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5xJd > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\38 p5xJd > .teaser-link > .container > .information`
- `#\38 p5xJd > .teaser-link > .container > h2`
- `#\38 p5xJd > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\38 p5xJd > .teaser-link > .container > .byline > .author-image-wrapper > img[alt="bilde av Pål Vegard Hagesæther"][width="100"][height="100"]`
- `#n1GB5x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GB5x > .teaser-link > .container`
- `#\30 p9b2A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9b2A > .teaser-link > .container`
- `#M76ayE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M76ayE > .teaser-link > .container`
- `#\31 6qRwK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6qRwK > .teaser-link > .container`
- `#JO6vl4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6vl4 > .teaser-link > .container`
- `#bOXj8B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOXj8B > .teaser-link > .container`
- `#L46ayq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L46ayq > .teaser-link > .container`
- `#\37 pVmov > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVmov > .teaser-link > .container > .information`
- `#\37 pVmov > .teaser-link > .container > h2`
- `#\37 pVmov > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\37 pVmov > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\31 6qOvB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6qOvB > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\31 6qOvB > .teaser-link > .container`
- `#\31 6vmyX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6vmyX > .teaser-link > .container`
- `#Ar7JLr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7JLr > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(62) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Denne pengebruken er spinnvill"]`
- `#j0Orow > .teaser-link > .container > .illustration-container > .text`
- `#j0Orow > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#M76meJ > .teaser-link > .container > .text-wrapper-small`
- `#M76meJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPqrL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPqrL > .teaser-link > .container`
- `#\30 p9gVM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9gVM > .teaser-link > .container`
- `#QJ59eq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ59eq > .teaser-link > .container`
- `img[alt="Virus kjenner ingen grenser"]`
- `#L46jeq > .teaser-link > .container`
- `#V6QdX1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QdX1 > .teaser-link > .container`
- `#Ok6zA1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok6zA1 > .teaser-link > .container`
- `#wrRnKM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRnKM > .teaser-link > .container`
- `#L46jLR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L46jLR > .teaser-link > .container`
- `#m0MA3q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0MA3q > .teaser-link > .container`
