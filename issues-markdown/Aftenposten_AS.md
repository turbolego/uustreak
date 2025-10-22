# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-22T00:22:59.240Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 5

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `img[srcset=""]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 228

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `#QMnMEP > .teaser-link > .teaser-image-wrapper`
- `#QMnMEP > .teaser-link > .container > .information`
- `#QMnMEP > .teaser-link > .container > .illustration-container > .text`
- `#QMnMEP > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#dr-edition-teaser-ucqzngk95 > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136202"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136202"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136202"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136197"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136197"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136197"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136190"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136190"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136190"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136165"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136165"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136165"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136169"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136169"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136169"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136168"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136168"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136168"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136026"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136026"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136026"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136166"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136166"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136166"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136162"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136162"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136162"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136163"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136163"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136163"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#RzJ62a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJ62a > .teaser-link > .container`
- `#RzJBLr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJBLr > .teaser-link > .container`
- `#dr-edition-teaser-8nqn4sdbu > div`
- `#KMQMRG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQMRG > .teaser-link > .container`
- `#wgMOGd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMOGd > .teaser-link > .container`
- `#jQ8QO9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8QO9 > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `.games-widget`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `#XjxgA7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjxgA7 > .teaser-link > .container`
- `#o3jOQm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jOQm > .teaser-link > .container > .information`
- `#o3jOQm > .teaser-link > .container > .illustration-container > .text`
- `#o3jOQm > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#o3dnJa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3dnJa > .teaser-link > .teaser-image-wrapper > .series-header`
- `#o3dnJa > .teaser-link > .container`
- `#vgaL2w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgaL2w > .teaser-link > .container`
- `#alXbXL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alXbXL > .teaser-link > .container`
- `#xmGykG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGykG > .teaser-link > .container`
- `#pPJPG1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJPG1 > .teaser-link > .container`
- `#\38 qgnVG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qgnVG > .teaser-link > .container`
- `#LMvn6Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvn6Q > .teaser-link > .container > .information`
- `#LMvn6Q > .teaser-link > .container > h2`
- `#LMvn6Q > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Vebjørn Horsfjord"]`
- `img[alt="Advarer mot bonusfelle"]`
- `#KMQnK7 > .teaser-link > .container`
- `#kwlBGa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwlBGa > .teaser-link > .container`
- `#Vzy9Bd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Vzy9Bd > .teaser-link > .container > .information`
- `#Vzy9Bd > .teaser-link > .container > .illustration-container > .text`
- `#Vzy9Bd > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#Ey3JJ2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey3JJ2 > .teaser-link > .container`
- `#\34 B6qrR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6qrR > .teaser-link > .container`
- `#xm6gw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm6gw8 > .teaser-link > .container`
- `.benefits-widget-container`
- `#\37 3X5lB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X5lB > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\37 3X5lB > .teaser-link > .container`
- `#\34 By1go > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 By1go > .teaser-link > .container`
- `#JbKOWb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKOWb > .teaser-link > .container`
- `#wgajaP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgajaP > .teaser-link > .container`
- `#\39 3yXqw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3yXqw > .teaser-link > .container`
- `#jQozy0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQozy0 > .teaser-link > .container`
- `#\30 VeQnG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VeQnG > .teaser-link > .container`
- `#KMQnX7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQnX7 > .teaser-link > .container`
- `#OoGw63 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGw63 > .teaser-link > .container > .information`
- `#OoGw63 > .teaser-link > .container > h2`
- `#OoGw63 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jørgen Flor"]`
- `#yEkMar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkMar > .teaser-link > .container`
- `#vg4qgL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4qgL > .teaser-link > .container`
- `#\35 EAGXe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAGXe > .teaser-link > .container > .information`
- `#\35 EAGXe > .teaser-link > .container > h2`
- `#\35 EAGXe > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Axel Fjeldavli"]`
- `#OoLolO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLolO > .teaser-link > .container`
- `#\37 3XdoV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XdoV > .teaser-link > .container`
- `img[alt="Kraftig fall i gullprisen"]`
- `#\34 B6B7V > .teaser-link > .container`
- `#\32 5RBQB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5RBQB > .teaser-link > .container`
- `.text-wrapper-small`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3j4Ka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3j4Ka > .teaser-link > .container`
- `#o3dR6m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3dR6m > .teaser-link > .teaser-image-wrapper > .series-header`
- `#o3dR6m > .teaser-link > .container > .information`
- `#o3dR6m > .teaser-link > .container > h2`
- `#o3dR6m > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Anders Johansen"]`
- `#lw73VG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw73VG > .teaser-link > .container`
- `#\37 3EGw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3EGw8 > .teaser-link > .container`
- `img[alt="Ap snur etter budsjettbråk"]`
- `#Av4Pez > .teaser-link > .container`
- `#zAW751 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW751 > .teaser-link > .container`
- `#bm3GK5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3GK5 > .teaser-link > .container`
- `#\39 3jK7E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3jK7E > .teaser-link > .container`
- `#bm3g4g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3g4g > .teaser-link > .container`
- `#KMQpQe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQpQe > .teaser-link > .container`
- `#yEL3VR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEL3VR > .teaser-link > .container > .information`
- `#yEL3VR > .teaser-link > .container > h2`
- `#yEL3VR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Signe N. Stafne "]`
- `img[alt="«Diddy» anker fengselsdom"]`
- `#pPJWOo > .teaser-link > .container`
- `#vgvO8X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvO8X > .teaser-link > .container`
- `#PpKArX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpKArX > .teaser-link > .container`
- `#gwV755 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwV755 > .teaser-link > .container`
- `#JbKxMJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKxMJ > .teaser-link > .container`
- `#\30 VeG3E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VeG3E > .teaser-link > .container`
- `#Vzyq0d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Vzyq0d > .teaser-link > .container`
- `#\38 qrnxW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qrnxW > .teaser-link > .container`
- `#gwgboq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwgboq > .teaser-link > .container`
- `#qPzRpz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPzRpz > .teaser-link > .container`
- `#rP0W8w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP0W8w > .teaser-link > .container`
- `#gw5XO0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gw5XO0 > .teaser-link > .container`
- `#jQ8z9q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8z9q > .teaser-link > .container`
- `#RzPy6x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzPy6x > .teaser-link > .container`
- `#zAdvq4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdvq4 > .teaser-link > .container`
- `img[alt="Trump lurt av spionen igjen?"]`
- `#eM28q9 > .teaser-link > .container > .information`
- `#eM28q9 > .teaser-link > .container > .illustration-container > .text`
- `#eM28q9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[width="128"]`
- `#LMvnB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvnB4 > .teaser-link > .container`
- `#ny5avB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5avB > .teaser-link > .container > .information`
- `#ny5avB > .teaser-link > .container > h2`
- `#ny5avB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Askill Harkjerr Halse"]`
- `#\32 5LE5y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5LE5y > .teaser-link > .container > .information`
- `#\32 5LE5y > .teaser-link > .container > h2`
- `#\32 5LE5y > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Maren Synnevåg"]`
- `#PpW9nJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpW9nJ > .teaser-link > .container`
- `#\39 3ydPd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3ydPd > .teaser-link > .container`
- `#\31 MgkEM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgkEM > .teaser-link > .container`
- `#zAda15 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAda15 > .teaser-link > .container > .information`
- `#zAda15 > .teaser-link > .container > h2`
- `#zAda15 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#zAda15 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#vgvAyL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvAyL > .teaser-link > .container`
