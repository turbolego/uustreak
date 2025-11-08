# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-08T00:21:47.829Z
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
- **Count:** 12

#### Affected Elements:

- `#OoLQqE > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#Rz3zX2 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMBzE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mOQO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw49jj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0bbG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoRy91 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 Em8AK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nykA0L > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0v43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoRj6k > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 225

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-dazw2auo > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
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
- `#dr-edition-teaser-08ppilt6c > div`
- `#mPGX34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGX34 > .teaser-link > .container`
- `#JbPnr6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPnr6 > .teaser-link > .container`
- `.magazine.series-location.teaser-bundle > .bundle-title`
- `#\31 MgJ4l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#\31 MgJ4l > .teaser-link > .container > h2`
- `#Rz3zX2 > .teaser-link > .container > .text-wrapper-small`
- `#Rz3zX2 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlOkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlOkl > .teaser-link > .container`
- `.games-widget`
- `#eMlqda > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlqda > .teaser-link > .container`
- `#lw89g7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw89g7 > .teaser-link > .container > .information`
- `#lw89g7 > .teaser-link > .container > .illustration-container > .text`
- `#lw89g7 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#vg4dE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .container`
- `#nykLen > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nykLen > .teaser-link > .container`
- `#\37 39po3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39po3 > .teaser-link > .container`
- `#xmx5WR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmx5WR > .teaser-link > .container`
- `#qP2W8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2W8o > .teaser-link > .container > .information`
- `#qP2W8o > .teaser-link > .container > .illustration-container > .text`
- `#qP2W8o > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#QMpr34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMpr34 > .teaser-link > .container`
- `#zAdwXr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdwXr > .teaser-link > .container`
- `#lw842y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw842y > .teaser-link > .container`
- `#\37 3XkL8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XkL8 > .teaser-link > .container > .information`
- `#\37 3XkL8 > .teaser-link > .container > .illustration-container > .text`
- `#\37 3XkL8 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(28) > .teaser-bundle.new-bundles > .bundle-title`
- `#\30 VMBzE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMBzE > .teaser-link > .container > h2`
- `#\36 3mOQO > .teaser-link > .container > .text-wrapper-small`
- `#\36 3mOQO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgmJX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgmJX > .teaser-link > .container > .information`
- `#dRgmJX > .teaser-link > .container > h2`
- `#dRgmJX > .teaser-link > .container > .byline > div:nth-child(1)`
- `#dRgmJX > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#lwp6K9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwp6K9 > .teaser-link > .container > .information`
- `#lwp6K9 > .teaser-link > .container > .illustration-container > .text`
- `#lwp6K9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#kwqdmv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqdmv > .teaser-link > .container`
- `.benefits-widget-container`
- `#\31 MKd4K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MKd4K > .teaser-link > .container`
- `#JbP79R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbP79R > .teaser-link > .container`
- `#\33 MlvGe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MlvGe > .teaser-link > .container`
- `#\38 qbOXx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qbOXx > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#qPKQgz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPKQgz > .teaser-link > .container`
- `#wgM99G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM99G > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(41) > .teaser-bundle.new-bundles > .bundle-title`
- `#LMykP4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMykP4 > .teaser-link > .container > .kicker`
- `#LMykP4 > .teaser-link > .container > h2`
- `#kw49jj > .teaser-link > .container > .text-wrapper-small`
- `#kw49jj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0bbG > .teaser-link > .container > .text-wrapper-small`
- `#Ey0bbG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mP78v0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mP78v0 > .teaser-link > .container`
- `#jQVk9L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVk9L > .teaser-link > .container`
- `#LMyjGq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMyjGq > .teaser-link > .container`
- `#rPv5g8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPv5g8 > .teaser-link > .container`
- `#wgyeyn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgyeyn > .teaser-link > .container > .information`
- `#wgyeyn > .teaser-link > .container > h2`
- `#wgyeyn > .teaser-link > .container > .byline > div:nth-child(1)`
- `#wgyeyn > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\36 3rleQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3rleQ > .teaser-link > .container`
- `#\34 BnBea > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BnBea > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(49) > .teaser-bundle.new-bundles > .bundle-title`
- `#OoRy91 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoRy91 > .teaser-link > .container > h2`
- `#\35 Em8AK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 Em8AK > .teaser-link > .container > .text-wrapper-small`
- `#nykA0L > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nykA0L > .teaser-link > .container > .text-wrapper-small`
- `#pP0rqW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP0rqW > .teaser-link > .container`
- `#\32 5MjPx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5MjPx > .teaser-link > .container`
- `#eMldRM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMldRM > .teaser-link > .container`
- `#\33 MLP1P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLP1P > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(53)`
- `#LMyjjV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMyjjV > .teaser-link > .container`
- `img[alt="Tina Bru går til lobbygigant"]`
- `#\34 BnRjR > .teaser-link > .container`
- `#eMlzGg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlzGg > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(56) > .teaser-bundle.new-bundles > .bundle-title`
- `#Ey0v43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0v43 > .teaser-link > .container > h2`
- `#OoRj6k > .teaser-link > .container > .text-wrapper-small`
- `#OoRj6k > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwq8w6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwq8w6 > .teaser-link > .container > .illustration-container > .text`
- `#kwq8w6 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#dRgqXA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgqXA > .teaser-link > .container`
- `#MnMa6m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnMa6m > .teaser-link > .container`
- `#jQV9kq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQV9kq > .teaser-link > .container`
- `#dRgmxj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgmxj > .teaser-link > .container`
- `#dRgqJz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgqJz > .teaser-link > .container`
- `#LMyWjp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMyWjp > .teaser-link > .container`
- `#VzOqGp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOqGp > .teaser-link > .container > .information`
- `#VzOqGp > .teaser-link > .container > h2`
- `#VzOqGp > .teaser-link > .container > .byline > div:nth-child(1)`
- `#VzOqGp > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#GyvPy4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyvPy4 > .teaser-link > .container`
- `#Ey0b45 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0b45 > .teaser-link > .container`
- `#Mnxwvm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mnxwvm > .teaser-link > .container`
- `#jQV3Mn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQV3Mn > .teaser-link > .container > .information`
- `#jQV3Mn > .teaser-link > .container > h2`
- `#jQV3Mn > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anders Ravik Jupskås"]`
- `#o3JMB7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JMB7 > .teaser-link > .container`
- `#Av8vX3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8vX3 > .teaser-link > .container > .information`
- `#Av8vX3 > .teaser-link > .container > h2`
- `#Av8vX3 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Brynjar N. Meling"]`
- `#B07Gve > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B07Gve > .teaser-link > .container`
- `#Rz360d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rz360d > .teaser-link > .container`
- `#vgEk6j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgEk6j > .teaser-link > .container`
- `#Av8vmr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8vmr > .teaser-link > .container > .information`
- `#Av8vmr > .teaser-link > .container > h2`
- `#Av8vmr > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sindre Bangstad"]`
- `#RzPMq2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzPMq2 > .teaser-link > .container`
- `#Av8rlM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8rlM > .teaser-link > .container`
