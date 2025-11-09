# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-09T00:24:52.664Z
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

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#edPmejvHQxsc > img[srcset=""]`
- `#egTHYbeouoEc > img[srcset=""]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 6

#### Affected Elements:

- `#OoLQqE > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#OoRl2w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPK3Ko > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnMxPK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rz3zX2 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#pweAlPRULxD > main`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#pweAlPRULxD > main`
- `.ch-core-header`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 224

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-ou4uhxrcj > div`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136551"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136551"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136551"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136507"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136507"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136507"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136515"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136515"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136515"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136498"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136498"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136498"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136500"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136500"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136500"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles > .bundle-title`
- `#OoLQqE > .teaser-link > .teaser-image-wrapper`
- `#OoLQqE > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#eM2bBM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2bBM > .teaser-link > .container`
- `#dr-edition-teaser-8bmdcyl2 > div`
- `#mPGX34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGX34 > .teaser-link > .container`
- `#\33 Mlmz0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 Mlmz0 > .teaser-link > .container`
- `#RzPeAJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzPeAJ > .teaser-link > .container`
- `#eMl6OO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMl6OO > .teaser-link > .container`
- `.games-widget`
- `#Mnx3PK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mnx3PK > .teaser-link > .container`
- `#KMEbO5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMEbO5 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#KMEbO5 > .teaser-link > .container`
- `#eMlqda > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlqda > .teaser-link > .container`
- `#wgyVRG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgyVRG > .teaser-link > .container`
- `#kw49jj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw49jj > .teaser-link > .container`
- `#Pp60q0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp60q0 > .teaser-link > .container`
- `#bmRAL3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmRAL3 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(25) > .teaser-bundle.new-bundles > .bundle-title`
- `#pP0MJo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP0MJo > .teaser-link > .container > h2`
- `#pP0MJo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Christian Jensen"]`
- `#OoRl2w > .teaser-link > .container > .text-wrapper-small`
- `#OoRl2w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlzGg > .teaser-link > .container > .text-wrapper-small`
- `#eMlzGg > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .container`
- `#wgMyL4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMyL4 > .teaser-link > .container > .information`
- `#wgMyL4 > .teaser-link > .container > .illustration-container > .text`
- `#wgMyL4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `.fullwidth.teaser-wrapper:nth-child(30)`
- `#\37 39po3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39po3 > .teaser-link > .container`
- `#jQ87qw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ87qw > .teaser-link > .container`
- `#bmR0z5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmR0z5 > .teaser-link > .container`
- `.benefits-widget-container`
- `#\30 Vwg6G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 Vwg6G > .teaser-link > .container`
- `#xmGEBj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGEBj > .teaser-link > .container`
- `#\36 3r5J3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3r5J3 > .teaser-link > .container`
- `#LMvpnx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvpnx > .teaser-link > .container`
- `img[alt="Kenzai skiller seg ikke ut"]`
- `#dRgrQo > .teaser-link > .container`
- `#JbVx46 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbVx46 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#JbVx46 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(39) > .teaser-bundle.new-bundles > .bundle-title`
- `#\31 MQj5l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MQj5l > .teaser-link > .container > .illustration-container > .text`
- `#\31 MQj5l > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#kwq8w6 > .teaser-link > .container > .text-wrapper-small`
- `#kwq8w6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[width="94"]`
- `#Oov5OA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oov5OA > .teaser-link > .container`
- `#JbPWpR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPWpR > .teaser-link > .container`
- `#B07Gy9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B07Gy9 > .teaser-link > .container > .information`
- `#B07Gy9 > .teaser-link > .container > h2`
- `#B07Gy9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Rolness"]`
- `#\37 39jz8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39jz8 > .teaser-link > .container`
- `#wgy97o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgy97o > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(45) > .teaser-bundle.new-bundles > .bundle-title`
- `#qPK3Ko > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPK3Ko > .teaser-link > .container > h2`
- `#MnMxPK > .teaser-link > .container > .text-wrapper-small`
- `#MnMxPK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPLEm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPLEm > .teaser-link > .container`
- `#Ey0zdA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0zdA > .teaser-link > .container`
- `#eMlOkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlOkl > .teaser-link > .container`
- `#Rz3K82 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rz3K82 > .teaser-link > .container`
- `#nykLen > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nykLen > .teaser-link > .container`
- `#pP0P4W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP0P4W > .teaser-link > .container`
- `#JbPnr6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPnr6 > .teaser-link > .container`
- `#bm950v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm950v > .teaser-link > .container`
- `#\37 3XkL8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XkL8 > .teaser-link > .container > .information`
- `#\37 3XkL8 > .teaser-link > .container > .illustration-container > .text`
- `#\37 3XkL8 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(54) > .teaser-bundle.new-bundles > .bundle-title`
- `#\31 MgJ4l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgJ4l > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\31 MgJ4l > .teaser-link > .container > h2`
- `#Rz3zX2 > .teaser-link > .container > .text-wrapper-small`
- `#Rz3zX2 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqdmv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqdmv > .teaser-link > .container`
- `#QMpr34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMpr34 > .teaser-link > .container`
- `#LMyjGq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMyjGq > .teaser-link > .container`
- `#lw89g7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw89g7 > .teaser-link > .container > .information`
- `#lw89g7 > .teaser-link > .container > .illustration-container > .text`
- `#lw89g7 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#lwp6K9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwp6K9 > .teaser-link > .container > .information`
- `#lwp6K9 > .teaser-link > .container > .illustration-container > .text`
- `#lwp6K9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#xmx5WR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmx5WR > .teaser-link > .container`
- `#dRgmJX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgmJX > .teaser-link > .container > .information`
- `#dRgmJX > .teaser-link > .container > h2`
- `#dRgmJX > .teaser-link > .container > .byline > div:nth-child(1)`
- `#dRgmJX > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\38 qbOXx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qbOXx > .teaser-link > .container`
- `#wgyeyn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgyeyn > .teaser-link > .container > .information`
- `#wgyeyn > .teaser-link > .container > h2`
- `#wgyeyn > .teaser-link > .container > .byline > div:nth-child(1)`
- `#wgyeyn > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\33 MLP1P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLP1P > .teaser-link > .container`
- `#\34 BnBea > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BnBea > .teaser-link > .container`
- `#MnMa6m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnMa6m > .teaser-link > .container`
- `img[alt="Tina Bru går til lobbygigant"]`
- `#\34 BnRjR > .teaser-link > .container`
- `#LMyjjV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMyjjV > .teaser-link > .container`
- `#dRgmxj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgmxj > .teaser-link > .container`
- `#VzOqGp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOqGp > .teaser-link > .container > .information`
- `#VzOqGp > .teaser-link > .container > h2`
- `#VzOqGp > .teaser-link > .container > .byline > div:nth-child(1)`
- `#VzOqGp > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#o3JMB7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JMB7 > .teaser-link > .container`
- `#dRgqJz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgqJz > .teaser-link > .container`
- `#GyvPy4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyvPy4 > .teaser-link > .container`
- `#Ey0b45 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0b45 > .teaser-link > .container`
- `#\31 MQMWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MQMWX > .teaser-link > .container`
- `#Mnxwvm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mnxwvm > .teaser-link > .container`
- `#B07Gve > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B07Gve > .teaser-link > .container`
- `#vgEk6j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgEk6j > .teaser-link > .container`
- `#Rz360d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rz360d > .teaser-link > .container`
- `#wgye8G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgye8G > .teaser-link > .container`
