# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-09T00:48:48.790Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 9

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `#utif_skyscraperright_1-r26n9n_b6312683-e6cc-4998-b33f-4f45951a217b, iframe, .play`
- `#utif_skyscraperright_1-r26n9n_b6312683-e6cc-4998-b33f-4f45951a217b, iframe, .audio`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 4

#### Affected Elements:

- `#utif_topboard-a95prb_15e1796e-7c2d-4323-8507-a594ba937002, iframe`
- `#utif_topboard-a95prb_15e1796e-7c2d-4323-8507-a594ba937002, iframe, iframe[src$="about:blank"]`
- `#utif_topboard-a95prb_15e1796e-7c2d-4323-8507-a594ba937002, iframe, body > iframe`
- `#utif_skyscraperright_1-r26n9n_b6312683-e6cc-4998-b33f-4f45951a217b, iframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#utif_topboard-a95prb_15e1796e-7c2d-4323-8507-a594ba937002, img`
- `#utif_skyscraperright_1-r26n9n_b6312683-e6cc-4998-b33f-4f45951a217b, #sf_align > img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 4

#### Affected Elements:

- `#y5zAGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6Qbwl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOXGRA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrzE2R > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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

- `#utif_skyscraperright_1-r26n9n_b6312683-e6cc-4998-b33f-4f45951a217b, a`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 237

#### Affected Elements:

- `#utif_topboard-a95prb_15e1796e-7c2d-4323-8507-a594ba937002, iframe, iframe[src$="about:blank"], #d > .center`
- `#utif_topboard-a95prb_15e1796e-7c2d-4323-8507-a594ba937002, iframe, iframe[src$="about:blank"], #e > .center`
- `#utif_topboard-a95prb_15e1796e-7c2d-4323-8507-a594ba937002, img`
- `#utif_skyscraperright_1-r26n9n_b6312683-e6cc-4998-b33f-4f45951a217b, iframe, video`
- `#utif_skyscraperright_1-r26n9n_b6312683-e6cc-4998-b33f-4f45951a217b, #sf_align > img`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-yfjpe20j > div`
- `.double.teaser-wrapper:nth-child(5)`
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
- `#\31 6v8AM > .teaser-link > .teaser-image-wrapper`
- `#\31 6v8AM > .teaser-link > .container > .information`
- `#\31 6v8AM > .teaser-link > .container > .illustration-container > .text`
- `#\31 6v8AM > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\31 6v8AM > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#k0M4n9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0M4n9 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#y5zAGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5zAGE > .teaser-link > .container > h2`
- `#V6Qbwl > .teaser-link > .container > .text-wrapper-small`
- `#V6Qbwl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7aJaQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7aJaQ > .teaser-link > .container`
- `img[alt=" Syltynn norsk bestselger"]`
- `#bOk9gg > .teaser-link > .container`
- `#\36 qoqyz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qoqyz > .teaser-link > .container`
- `.games-widget`
- `#gk3Vka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk3Vka > .teaser-link > .container`
- `#\32 pVqgR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pVqgR > .teaser-link > .container`
- `#n1GWEQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GWEQ > .teaser-link > .container`
- `#d4JgvJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4JgvJ > .teaser-link > .container > .information`
- `#d4JgvJ > .teaser-link > .container > h2`
- `#d4JgvJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kari Hirth"]`
- `#pB1aPX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB1aPX > .teaser-link > .container`
- `#d4vmAj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4vmAj > .teaser-link > .container`
- `#wr3bRL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr3bRL > .teaser-link > .container`
- `#\31 6vl6K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6vl6K > .teaser-link > .container`
- `#Pdvnp6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdvnp6 > .teaser-link > .container > .information`
- `#Pdvnp6 > .teaser-link > .container > .illustration-container > .text`
- `#Pdvnp6 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#\36 qojGW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qojGW > .teaser-link > .container > .information`
- `#\36 qojGW > .teaser-link > .container > h2`
- `#\36 qojGW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ole Jakob Løland"]`
- `#ln4Vdy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ln4Vdy > .teaser-link > .container`
- `#pBd63R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBd63R > .teaser-link > .container`
- `#\37 pV6gW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pV6gW > .teaser-link > .container`
- `#\30 ppvlB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 ppvlB > .teaser-link > .container`
- `#BxG0AQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxG0AQ > .teaser-link > .container`
- `#\31 6oO7l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6oO7l > .teaser-link > .container`
- `#GxPg94 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPg94 > .teaser-link > .container`
- `.benefits-widget-container`
- `img[alt="For alltid-huset"]`
- `#zO0xqb > .teaser-link > .container`
- `#\34 3b3VV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3b3VV > .teaser-link > .container`
- `#aJGg6L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJGg6L > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(34)`
- `#\36 qo39e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qo39e > .teaser-link > .container`
- `img[alt="Ukraina svekkes av korrupsjon"]`
- `#\32 p9Ga4 > .teaser-link > .container`
- `#\37 pPyx9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPyx9 > .teaser-link > .container`
- `#GxPV06 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPV06 > .teaser-link > .container > .information`
- `#GxPV06 > .teaser-link > .container > h2`
- `#GxPV06 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lily Bandehy"]`
- `#d4JKmw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4JKmw > .teaser-link > .container`
- `#XMRb3W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMRb3W > .teaser-link > .container`
- `#\33 pqEvq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pqEvq > .teaser-link > .container`
- `#Rj6y7d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj6y7d > .teaser-link > .container`
- `#\30 p94a0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.information__e24`
- `#\30 p94a0 > .teaser-link > .container > h2`
- `#\30 p94a0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sindre Heyerdahl"]`
- `#rr8k1R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr8k1R > .teaser-link > .container`
- `#Ok68jq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok68jq > .teaser-link > .container`
- `#wrdpaG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdpaG > .teaser-link > .container`
- `img[alt="Hva kalles denne kaken?"]`
- `#Pdv1oR > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(49) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#bOXGRA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOXGRA > .teaser-link > .container > h2`
- `#rrzE2R > .teaser-link > .container > .text-wrapper-small`
- `#rrzE2R > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk3Xr1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk3Xr1 > .teaser-link > .container > .illustration-container > .text`
- `#gk3Xr1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#xrMAAB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMAAB > .teaser-link > .container`
- `#\30 pvPvB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvPvB > .teaser-link > .container`
- `#aJGzOL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJGzOL > .teaser-link > .container > .information`
- `#aJGzOL > .teaser-link > .container > .illustration-container > .text`
- `#aJGzOL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#Rj6rAr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj6rAr > .teaser-link > .container`
- `#Exb6X3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exb6X3 > .teaser-link > .container`
- `#K86BP5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86BP5 > .teaser-link > .container`
- `#\34 3EnMe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3EnMe > .teaser-link > .container`
- `#JO6WW7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6WW7 > .teaser-link > .container > .information`
- `#JO6WW7 > .teaser-link > .container > h2`
- `#JO6WW7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Frode Saugestad"]`
- `#wrRe11 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRe11 > .teaser-link > .container`
- `#\38 p5mnG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5mnG > .teaser-link > .container`
- `#zOMgvq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMgvq > .teaser-link > .container`
- `#n1Gajn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Gajn > .teaser-link > .container`
- `#L4oyJp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4oyJp > .teaser-link > .container`
- `img[alt="Epstein-saken må legges død"]`
- `#rr8kP8 > .teaser-link > .container > .information`
- `#rr8kP8 > .teaser-link > .container > h2`
- `#rr8kP8 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Trond Norén Isaksen"]`
- `#GxPvE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPvE4 > .teaser-link > .container > .information`
- `#GxPvE4 > .teaser-link > .container > h2`
- `#GxPvE4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sigrun Aasland"]`
- `#q6OG6z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6OG6z > .teaser-link > .container`
- `#M771aB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M771aB > .teaser-link > .container`
- `#oEkL30 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEkL30 > .teaser-link > .container`
- `#M75xW0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M75xW0 > .teaser-link > .container`
- `#oEk6zR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEk6zR > .teaser-link > .container`
- `#\37 pV0y8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pV0y8 > .teaser-link > .container`
- `img[alt="En gladnyhet om kreft"]`
- `#Rj13lW > .teaser-link > .container > .information`
- `#Rj13lW > .teaser-link > .container > .illustration-container > .text`
- `#Rj13lW > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#zO0pAK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO0pAK > .teaser-link > .container`
- `#xrJxQG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrJxQG > .teaser-link > .container`
- `img[alt="Så var tålmodigheten brukt opp"]`
- `#m0M7Vv > .teaser-link > .container > .information`
- `#m0M7Vv > .teaser-link > .container > .illustration-container > .text`
- `#m0M7Vv > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#m0M7Vv > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#\34 3Ez7e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3Ez7e > .teaser-link > .container > .information`
- `#\34 3Ez7e > .teaser-link > .container > h2`
- `#\34 3Ez7e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Lismoen"]`
- `#ArRGe3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#ArRGe3 > .teaser-link > .container`
- `#k0vye6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0vye6 > .teaser-link > .container`
- `#\39 pB7aE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pB7aE > .teaser-link > .container > .information`
- `#\39 pB7aE > .teaser-link > .container > h2`
- `#\39 pB7aE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristian Wederhus"]`
- `#lnM8Mo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnM8Mo > .teaser-link > .container`
