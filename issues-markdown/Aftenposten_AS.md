# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-13T00:23:58.083Z
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

- `#lnEMXk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOo06P > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnEAP7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj95kO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p637b > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pOBx5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 226

#### Affected Elements:

- `#\33 p94oL > .teaser-link > .teaser-image-wrapper`
- `#\33 p94oL > .teaser-link > .container > .information`
- `#\33 p94oL > .teaser-link > .container > .illustration-container > .text`
- `#\33 p94oL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137381"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137381"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137381"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137378"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137378"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137378"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137362"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137362"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137362"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137358"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137358"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137358"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137356"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137356"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137356"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137343"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137343"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137343"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137132"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137132"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137132"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137322"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137322"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137322"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137321"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137321"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137321"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#WvOmzK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvOmzK > .teaser-link > .container`
- `#dr-edition-teaser-ibhwf4cki > div`
- `#BxlWO9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxlWO9 > .teaser-link > .container`
- `#\34 313xa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 313xa > .teaser-link > .container`
- `#k0RvBa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RvBa > .teaser-link > .container`
- `#lnAd79 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnAd79 > .teaser-link > .container`
- `.games-widget`
- `#lnE32y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnE32y > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(17) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#lnEMXk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnEMXk > .teaser-link > .container > h2`
- `#JOo06P > .teaser-link > .container > .text-wrapper-small`
- `#JOo06P > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLb1j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLb1j > .teaser-link > .container`
- `#lnAd89 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnAd89 > .teaser-link > .container`
- `#KMO1P6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMO1P6 > .teaser-link > .container`
- `#JOJrR7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJrR7 > .teaser-link > .container`
- `#e78rPM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78rPM > .teaser-link > .container`
- `#k0RMr6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RMr6 > .teaser-link > .container`
- `#\30 pndXB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pndXB > .teaser-link > .container`
- `#WvOOR2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvOOR2 > .teaser-link > .container > .information`
- `#WvOOR2 > .teaser-link > .container > h2`
- `#WvOOR2 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Joel Ystebø"]`
- `#\30 pKv80 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKv80 > .teaser-link > .container`
- `#WvLVeG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLVeG > .teaser-link > .container`
- `#ExplWP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExplWP > .teaser-link > .container > .information`
- `#ExplWP > .teaser-link > .container > h2`
- `#ExplWP > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Farshid Jahangosha"]`
- `#\33 pk7ld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pk7ld > .teaser-link > .container`
- `#j0BdXb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0BdXb > .teaser-link > .container > .information`
- `#j0BdXb > .teaser-link > .container > .illustration-container > .text`
- `#j0BdXb > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `.benefits-widget-container`
- `#V6qxw3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6qxw3 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(33) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#lnEAP7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnEAP7 > .teaser-link > .container > h2`
- `#Rj95kO > .teaser-link > .container > .text-wrapper-small`
- `#Rj95kO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okb2GA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okb2GA > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Okb2GA > .teaser-link > .container`
- `#BxlrnQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxlrnQ > .teaser-link > .container`
- `#ArdgLj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdgLj > .teaser-link > .container`
- `#y5R3wJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5R3wJ > .teaser-link > .container`
- `.teaser-bundle.new-bundles.series-location > .bundle-title`
- `#\38 pwE3W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwE3W > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\38 pwE3W > .teaser-link > .container > h2`
- `#\35 p637b > .teaser-link > .container > .text-wrapper-small`
- `#\35 p637b > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pOBx5 > .teaser-link > .container > .text-wrapper-small`
- `#\39 pOBx5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr3lxB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr3lxB > .teaser-link > .container`
- `#\39 pOOzw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pOOzw > .teaser-link > .container`
- `#M73705 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M73705 > .teaser-link > .container`
- `.teaser-image[alt="Siktet for nye lovbrudd"][decoding="async"]`
- `#rrLkg0 > .teaser-link > .container`
- `#L4no59 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4no59 > .teaser-link > .container`
- `#gkW3vk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkW3vk > .teaser-link > .container`
- `#OkQgqq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQgqq > .teaser-link > .container`
- `#d4Ob1J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4Ob1J > .teaser-link > .container`
- `#n1A9da > .teaser-link > .container > .text-wrapper-small`
- `#n1A9da > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkWaPk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkWaPk > .teaser-link > .container`
- `#\36 qzjz3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzjz3 > .teaser-link > .container`
- `#wrer5o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrer5o > .teaser-link > .container`
- `#zOg051 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOg051 > .teaser-link > .container`
- `#\37 pKPmW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pKPmW > .teaser-link > .container`
- `#rrgMwl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrgMwl > .teaser-link > .container`
- `#zOgl3O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgl3O > .teaser-link > .container`
- `#\34 31Oy6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 31Oy6 > .teaser-link > .container`
- `#y5REeR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5REeR > .teaser-link > .teaser-image-wrapper > .series-header`
- `#y5REeR > .teaser-link > .container`
- `#XM8jon > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM8jon > .teaser-link > .container`
- `img[alt="Kostrådene er helt feil skurk"]`
- `#Ard1A5 > .teaser-link > .container > .information`
- `#Ard1A5 > .teaser-link > .container > h2`
- `#Ard1A5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Hanne-Lene Dahlgren"]`
- `#XM89lm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM89lm > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(56) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#OkQbb1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQbb1 > .teaser-link > .container > h2`
- `#OkQbb1 > .teaser-link > .container > .byline`
- `#vrAevj > .teaser-link > .container > .text-wrapper-small`
- `#vrAevj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kjetil Rolness"]`
- `img[alt="Se og Hør-sjefen slutter"]`
- `#\31 6B6bX > .teaser-link > .container`
- `#JbPbQb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPbQb > .teaser-link > .container`
- `#\38 p6pQx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p6pQx > .teaser-link > .container`
- `#y5R5Rr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5R5Rr > .teaser-link > .container`
- `#\33 pJ8WM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pJ8WM > .teaser-link > .container`
- `#Ard8W5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ard8W5 > .teaser-link > .container > .information`
- `#Ard8W5 > .teaser-link > .container > h2`
- `#Ard8W5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristin Clemet"]`
- `#\31 6Bn3e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6Bn3e > .teaser-link > .container > .information`
- `#\31 6Bn3e > .teaser-link > .container > h2`
- `#\31 6Bn3e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jøran Hjelmesæth"]`
- `#OkQp3O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQp3O > .teaser-link > .container`
- `#M7Rx00 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7Rx00 > .teaser-link > .container > .information`
- `#M7Rx00 > .teaser-link > .container > h2`
- `#M7Rx00 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nikolai Astrup"]`
- `#RjRVQd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjRVQd > .teaser-link > .container`
- `#JOojd7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOojd7 > .teaser-link > .container > .information`
- `#JOojd7 > .teaser-link > .container > h2`
- `#JOojd7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Morten Bøås"]`
- `#e7KJma > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7KJma > .teaser-link > .container`
- `#Rj9GEx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj9GEx > .teaser-link > .container`
- `#L4AK01 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4AK01 > .teaser-link > .container > .information`
- `#L4AK01 > .teaser-link > .container > h2`
- `#L4AK01 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Gulbrandsen"]`
- `#ArdeqE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdeqE > .teaser-link > .container`
- `#q6ALPz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6ALPz > .teaser-link > .container > .information`
- `#q6ALPz > .teaser-link > .container > .illustration-container > .text`
- `#q6ALPz > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#n1anbL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1anbL > .teaser-link > .container`
- `#vrmRx4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrmRx4 > .teaser-link > .container`
