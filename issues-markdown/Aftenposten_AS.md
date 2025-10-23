# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-23T00:22:34.020Z
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

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `img[srcset=""]`

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
- **Count:** 240

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `#lw7wl7 > .teaser-link > .teaser-image-wrapper`
- `#lw7wl7 > .teaser-link > .container > .information`
- `#lw7wl7 > .teaser-link > .container > .illustration-container > .text`
- `#lw7wl7 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"][width="128"][height="128"]`
- `#dr-edition-teaser-9sncyuua9 > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136205"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136205"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136205"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
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
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#RzJ62a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJ62a > .teaser-link > .container`
- `#RzJBLr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJBLr > .teaser-link > .container`
- `#jQ8Owq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8Owq > .teaser-link > .container`
- `#QMn58P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMn58P > .teaser-link > .container`
- `#jQ8vn9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8vn9 > .teaser-link > .container > .information`
- `#jQ8vn9 > .teaser-link > .container > h2`
- `#jQ8vn9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Svein Tore Bergestuen"]`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `.games-widget`
- `#vgaL2w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgaL2w > .teaser-link > .container`
- `#zAWMAr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWMAr > .teaser-link > .container`
- `#RzkjQ2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzkjQ2 > .teaser-link > .container`
- `#\37 3XV03 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XV03 > .teaser-link > .container`
- `#eM2WvO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2WvO > .teaser-link > .container`
- `#\37 3Xprv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Xprv > .teaser-link > .container`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `#VzyxPd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzyxPd > .teaser-link > .container > .information__e24.information`
- `#VzyxPd > .teaser-link > .container > h2`
- `#VzyxPd > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Torbjørn Røe Isaksen"]`
- `#KMO6pX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMO6pX > .teaser-link > .container`
- `img[alt="Han var stjerne i eget hode"]`
- `#vgvl5w > .teaser-link > .container > .information`
- `#vgvl5w > .teaser-link > .container > h2`
- `#vgvl5w > .teaser-link > .container > .byline > div:nth-child(1)`
- `#vgvl5w > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#GyzPaB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzPaB > .teaser-link > .container`
- `#\31 MKd4K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MKd4K > .teaser-link > .container`
- `#dRo7W1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRo7W1 > .teaser-link > .container > .information`
- `#dRo7W1 > .teaser-link > .container > .illustration-container > .text`
- `#dRo7W1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#dRo7W1 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#xmGykG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGykG > .teaser-link > .container`
- `#MnM5G0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnM5G0 > .teaser-link > .container`
- `#\35 E1lXO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1lXO > .teaser-link > .container`
- `.benefits-widget-container`
- `#Mn4OjJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn4OjJ > .teaser-link > .container > .information`
- `#Mn4OjJ > .teaser-link > .container > h2`
- `#Mn4OjJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Torgrim Sørnes"]`
- `#Av6RRx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6RRx > .teaser-link > .container`
- `#wgMdld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMdld > .teaser-link > .container`
- `#KMo53G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMo53G > .teaser-link > .container`
- `#MnMLzm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnMLzm > .teaser-link > .container > .information`
- `#MnMLzm > .teaser-link > .container > h2`
- `#MnMLzm > .teaser-link > .container > .byline > div:nth-child(1)`
- `#MnMLzm > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\35 E1k5O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1k5O > .teaser-link > .container`
- `#\37 3XPRw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XPRw > .teaser-link > .container`
- `#QMnrEx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMnrEx > .teaser-link > .container`
- `#dRov9z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRov9z > .teaser-link > .container`
- `#ny5Aya > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5Aya > .teaser-link > .container`
- `#vgvk7B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvk7B > .teaser-link > .container`
- `#mPG5Vp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPG5Vp > .teaser-link > .container`
- `#PpWvQp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWvQp > .teaser-link > .container`
- `#RzPj08 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzPj08 > .teaser-link > .container`
- `#W09gkd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09gkd > .teaser-link > .container`
- `#vgvkG4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvkG4 > .teaser-link > .container`
- `#GyzxvJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzxvJ > .teaser-link > .container`
- `img[alt="Fredag bøtter det ned"]`
- `#lw7MzG > .teaser-link > .container`
- `#dRo72X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRo72X > .teaser-link > .container`
- `#\32 5Rvgv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Rvgv > .teaser-link > .container`
- `#RzP1pW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzP1pW > .teaser-link > .container`
- `#wg7lBL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wg7lBL > .teaser-link > .container`
- `#eM2z4R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2z4R > .teaser-link > .container`
- `#PpWdkz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWdkz > .teaser-link > .container`
- `#pPJB3j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJB3j > .teaser-link > .container`
- `#W09vxr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09vxr > .teaser-link > .container`
- `#\38 q3pbW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3pbW > .teaser-link > .container`
- `#PpW9a6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpW9a6 > .teaser-link > .container > .information`
- `#PpW9a6 > .teaser-link > .container > .illustration-container > .text`
- `#PpW9a6 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#eM2EoO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2EoO > .teaser-link > .container > .information`
- `#eM2EoO > .teaser-link > .container > h2`
- `#eM2EoO > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Simen Sandelien"]`
- `#wgM8rP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM8rP > .teaser-link > .container`
- `#lw7A8M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7A8M > .teaser-link > .container`
- `#Vzy6M6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Vzy6M6 > .teaser-link > .container`
- `#XjxgA7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjxgA7 > .teaser-link > .container`
- `#LMvn04 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvn04 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#LMvn04 > .teaser-link > .container`
- `#zAWGA1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWGA1 > .teaser-link > .container`
- `#KMQMRG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQMRG > .teaser-link > .container`
- `#LMvn6Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvn6Q > .teaser-link > .container > .information`
- `#LMvn6Q > .teaser-link > .container > h2`
- `#LMvn6Q > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Vebjørn Horsfjord"]`
- `#\34 B6BeV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6BeV > .teaser-link > .container`
- `#pPJPG1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJPG1 > .teaser-link > .container`
- `#QMnMEP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMnMEP > .teaser-link > .container > .information`
- `#QMnMEP > .teaser-link > .container > .illustration-container > .text`
- `#QMnMEP > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#QMnMEP > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#o3jOQm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jOQm > .teaser-link > .container > .information`
- `#o3jOQm > .teaser-link > .container > .illustration-container > .text`
- `#o3jOQm > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#o3dnJa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3dnJa > .teaser-link > .teaser-image-wrapper > .series-header`
- `#o3dnJa > .teaser-link > .container`
- `#alXbXL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alXbXL > .teaser-link > .container`
- `#Vzy9Bd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Vzy9Bd > .teaser-link > .container > .information`
- `#Vzy9Bd > .teaser-link > .container > .illustration-container > .text`
- `#Vzy9Bd > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#\37 3X5lB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X5lB > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\37 3X5lB > .teaser-link > .container`
- `img[alt="Ap snur etter budsjettbråk"]`
- `#Av4Pez > .teaser-link > .container`
- `#\35 EAGXe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAGXe > .teaser-link > .container > .information`
- `#\35 EAGXe > .teaser-link > .container > h2`
- `#\35 EAGXe > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Axel Fjeldavli"]`
- `#OoGw63 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGw63 > .teaser-link > .container > .information`
- `#OoGw63 > .teaser-link > .container > h2`
- `#OoGw63 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jørgen Flor"]`
- `#\39 3yXqw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3yXqw > .teaser-link > .container`
- `#zAW751 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW751 > .teaser-link > .container`
- `#o3dR6m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3dR6m > .teaser-link > .teaser-image-wrapper > .series-header`
- `#o3dR6m > .teaser-link > .container > .information`
- `#o3dR6m > .teaser-link > .container > h2`
- `#o3dR6m > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Anders Johansen"]`
- `#\34 B6qrR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6qrR > .teaser-link > .container`
