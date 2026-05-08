# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-08T00:48:15.733Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 8

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
- **Count:** 3

#### Affected Elements:

- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"]`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, body > iframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, img`
- `#utif_skyscraperright_1-a0ieal_a8914ed6-5e81-46be-912b-2ddc787bf456, img[width="300"]`
- `#utif_skyscraperright_1-a0ieal_a8914ed6-5e81-46be-912b-2ddc787bf456, #sf_align > img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 8

#### Affected Elements:

- `#\30 pB30E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bx08pG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbElw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdvBgX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ5lLR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="– Riktig å sette renten opp nå"]`
- `#zO0pAK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j03E89 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `#utif_skyscraperright_1-a0ieal_a8914ed6-5e81-46be-912b-2ddc787bf456, a`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 262

#### Affected Elements:

- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #m`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #n`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #h`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #i`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #k`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #l`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #s`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #g`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #o`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #b`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #c`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #d`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #f`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #j`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #p`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, iframe, iframe[src$="about:blank"], #e`
- `#utif_topboard-xzlyit_fd0b11ba-4bc6-435b-87b5-54cf2901a098, img`
- `#utif_skyscraperright_1-a0ieal_a8914ed6-5e81-46be-912b-2ddc787bf456, #asx_t_14199356`
- `#utif_skyscraperright_1-a0ieal_a8914ed6-5e81-46be-912b-2ddc787bf456, #sf_align > img`
- `#aJGzOL > .teaser-link > .teaser-image-wrapper`
- `#aJGzOL > .teaser-link > .container > .information`
- `#aJGzOL > .teaser-link > .container > .illustration-container > .text`
- `#aJGzOL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `#JO6WW7 > .teaser-link > .teaser-image-wrapper`
- `#JO6WW7 > .teaser-link > .container > .information`
- `#JO6WW7 > .teaser-link > .container > .kicker`
- `#JO6WW7 > .teaser-link > .container > h2`
- `#JO6WW7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Frode Saugestad"]`
- `#dr-edition-teaser-ld2mc5jr4 > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1166k_647`
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
- `article[data-pulse-entity-id="reel-138812"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138812"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138812"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#M771aB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M771aB > .teaser-link > .container`
- `#q6OG6z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6OG6z > .teaser-link > .container`
- `#zOMLp1 > .teaser-link > .container > .text-wrapper-small`
- `#zOMLp1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5mnG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5mnG > .teaser-link > .container`
- `#oEk6zR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEk6zR > .teaser-link > .container`
- `.games-widget`
- `#aJlJPO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJlJPO > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(17) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\30 pB30E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pB30E > .teaser-link > .container > h2`
- `#Bx08pG > .teaser-link > .container > .text-wrapper-small`
- `#Bx08pG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GwrJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GwrJ > .teaser-link > .container`
- `#\34 3Ez7e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3Ez7e > .teaser-link > .container > .information`
- `#\34 3Ez7e > .teaser-link > .container > h2`
- `#\34 3Ez7e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Lismoen"]`
- `#V6Qbwl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6Qbwl > .teaser-link > .container`
- `#d4JzVz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4JzVz > .teaser-link > .container`
- `#n1Gajn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Gajn > .teaser-link > .container`
- `#\31 6v2pQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6v2pQ > .teaser-link > .container`
- `#K86BP5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86BP5 > .teaser-link > .container`
- `#aJGg6L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJGg6L > .teaser-link > .container`
- `#\34 3EnMe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3EnMe > .teaser-link > .container`
- `#wrRe11 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRe11 > .teaser-link > .container`
- `#gk3Vka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk3Vka > .teaser-link > .container`
- `#\37 pV0y8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pV0y8 > .teaser-link > .container`
- `#pBd63R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBd63R > .teaser-link > .container`
- `#m05BPL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m05BPL > .teaser-link > .container`
- `.benefits-widget-container`
- `#n1Gwba > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Gwba > .teaser-link > .container`
- `#\30 pBx5G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pBx5G > .teaser-link > .container`
- `#zOMgvq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMgvq > .teaser-link > .container`
- `#\37 pPl84 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPl84 > .teaser-link > .container`
- `#y5gRwx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5gRwx > .teaser-link > .container`
- `#\35 p8ePK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p8ePK > .teaser-link > .container`
- `#d4vnwq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4vnwq > .teaser-link > .container`
- `#GxPvE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPvE4 > .teaser-link > .container > .information`
- `#GxPvE4 > .teaser-link > .container > h2`
- `#GxPvE4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sigrun Aasland"]`
- `#Wv6qvK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv6qvK > .teaser-link > .container`
- `.sport.teaser-bundle.new-bundles > .bundle-title`
- `#\39 pbElw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbElw > .teaser-link > .container > h2`
- `#PdvBgX > .teaser-link > .container > .text-wrapper-small`
- `#PdvBgX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M75xW0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M75xW0 > .teaser-link > .container`
- `#L4oyJp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4oyJp > .teaser-link > .container`
- `#M763Vr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M763Vr > .teaser-link > .container`
- `#k083jk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k083jk > .teaser-link > .container`
- `#oEkL30 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEkL30 > .teaser-link > .container`
- `img[alt="Norge må se til Sverige"]`
- `#V6xyVV > .teaser-link > .container`
- `#XMR6og > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMR6og > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(48)`
- `#k0M4n9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0M4n9 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(50)`
- `img[alt="En gladnyhet om kreft"]`
- `#Rj13lW > .teaser-link > .container > .information`
- `#Rj13lW > .teaser-link > .container > .illustration-container > .text`
- `#Rj13lW > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"][width="128"][height="128"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(52) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#QJ5lLR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ5lLR > .teaser-link > .container > h2`
- `#rr8kP8 > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Epstein-saken må legges død"]`
- `img[alt="bilde av Trond Norén Isaksen"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(53) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="– Riktig å sette renten opp nå"]`
- `#K863xo > .teaser-link > .container > h2`
- `#zO0pAK > .teaser-link > .container > .text-wrapper-small`
- `#zO0pAK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6oz7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6oz7 > .teaser-link > .container`
- `#xrJxQG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrJxQG > .teaser-link > .container`
- `.teaser-image[alt="Så var tålmodigheten brukt opp"][decoding="async"]`
- `#m0M7Vv > .teaser-link > .container > .information`
- `#m0M7Vv > .teaser-link > .container > .illustration-container > .text`
- `#m0M7Vv > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(56) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#gk3Xr1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk3Xr1 > .teaser-link > .container > .illustration-container > .text`
- `#gk3Xr1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#j03E89 > .teaser-link > .container > .text-wrapper-small`
- `#j03E89 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5zP3a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5zP3a > .teaser-link > .container`
- `#BxrBx7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxrBx7 > .teaser-link > .container`
- `#ArRGe3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#ArRGe3 > .teaser-link > .container`
- `#y5zAJe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5zAJe > .teaser-link > .container > .information`
- `#y5zAJe > .teaser-link > .container > .illustration-container > .text`
- `#y5zAJe > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#xrMRlR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMRlR > .teaser-link > .container`
- `#\39 pB7aE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pB7aE > .teaser-link > .container > .information`
- `#\39 pB7aE > .teaser-link > .container > h2`
- `#\39 pB7aE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristian Wederhus"]`
- `#Bxr57E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxr57E > .teaser-link > .container`
- `#M75zam > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M75zam > .teaser-link > .container`
- `#rr80ne > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr80ne > .teaser-link > .container`
- `#k0vye6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0vye6 > .teaser-link > .container`
- `#bOk9Xv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOk9Xv > .teaser-link > .container > .information`
- `#bOk9Xv > .teaser-link > .container > h2`
- `#bOk9Xv > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sumaya Jirde Ali"]`
- `#QJ5ReW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ5ReW > .teaser-link > .container`
- `#rr8Wpm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr8Wpm > .teaser-link > .container`
- `#zO0RPO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO0RPO > .teaser-link > .container > .information`
- `#zO0RPO > .teaser-link > .container > h2`
- `#zO0RPO > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ken Andre Ottesen"]`
- `#lnM8Mo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnM8Mo > .teaser-link > .container`
- `#V6xW6W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6xW6W > .teaser-link > .container > .information`
- `#V6xW6W > .teaser-link > .container > .kicker`
- `#V6xW6W > .teaser-link > .container > h2`
- `#V6xW6W > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bjørnar Skjæran"]`
- `#wrdr8L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdr8L > .teaser-link > .container > .information`
- `#wrdr8L > .teaser-link > .container > h2`
- `#wrdr8L > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Hans Petter Graver"]`
- `img[alt="Snakk om å dra «kvinnekortet»"]`
- `#WvmBa2 > .teaser-link > .container > .information`
- `#WvmBa2 > .teaser-link > .container > .illustration-container > .text`
- `#WvmBa2 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#WvmBa2 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > .author-image[width="128"][height="128"]`
- `#XMoXMW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMoXMW > .teaser-link > .container`
- `#GxPvBx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPvBx > .teaser-link > .container > .information`
- `#GxPvBx > .teaser-link > .container > h2`
- `#GxPvBx > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tone Klev"]`
- `#d4JgqA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4JgqA > .teaser-link > .container > .information`
- `#d4JgqA > .teaser-link > .container > h2`
- `#d4JgqA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erlend Wiborg"]`
