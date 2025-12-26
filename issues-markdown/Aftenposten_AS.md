# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-26T00:24:38.533Z
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
- **Count:** 7

#### Affected Elements:

- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\32 p1G2x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m06yol > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyvadm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdrezX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrLXxe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJwGMA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 218

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#OkpWJl`
- `#Exoddl > .teaser-link > .teaser-image-wrapper`
- `#Exoddl > .teaser-link > .container > .information`
- `#Exoddl > .teaser-link > .container > h2`
- `#Exoddl > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-gbfb20reg > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Rjx342 > .teaser-link > .teaser-image-wrapper`
- `#Rjx342 > .teaser-link > .container > h2`
- `#Rjx342 > .teaser-link > .container > .byline`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137209"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137209"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137209"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137044"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137044"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137044"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-136956"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136956"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-136956"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137210"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137210"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137210"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137175"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137175"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137175"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137220"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137220"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137220"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137219"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137219"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137219"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137144"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137144"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137144"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137141"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137141"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137141"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#q6ndGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6ndGE > .teaser-link > .container`
- `#\37 plrpK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plrpK > .teaser-link > .container > .information`
- `#\37 plrpK > .teaser-link > .container > .illustration-container > .text`
- `#\37 plrpK > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#q6LmEo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6LmEo > .teaser-link > .container`
- `#\34 3qRAe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qRAe > .teaser-link > .container`
- `#k0JmMQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0JmMQ > .teaser-link > .container`
- `#XMw05g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMw05g > .teaser-link > .container`
- `.games-widget`
- `#Gxl8mB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxl8mB > .teaser-link > .container`
- `#k0aeMv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0aeMv > .teaser-link > .container > .information`
- `#k0aeMv > .teaser-link > .container > .illustration-container > .text`
- `#k0aeMv > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(18) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\32 p1G2x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1G2x > .teaser-link > .container > h2`
- `#m06yol > .teaser-link > .container > .text-wrapper-small`
- `#m06yol > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dr-edition-teaser-1nqt79d2m > div`
- `#M7RE3M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7RE3M > .teaser-link > .container`
- `#\37 plzqB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plzqB > .teaser-link > .container`
- `#n1gkpa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1gkpa > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(22) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Gyvadm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyvadm > .teaser-link > .container > h2`
- `#PdrezX > .teaser-link > .container > .text-wrapper-small`
- `#PdrezX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxPJr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxPJr > .teaser-link > .container`
- `#\34 3jV0o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jV0o > .teaser-link > .container`
- `#\39 pvo6q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pvo6q > .teaser-link > .container`
- `#K83MoM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K83MoM > .teaser-link > .container`
- `#wrEWEL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEWEL > .teaser-link > .container`
- `#wrEMGn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEMGn > .teaser-link > .container`
- `#JbPQA8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPQA8 > .teaser-link > .container`
- `#xrPeX8 > .teaser-link > .container > .text-wrapper-small`
- `#xrPeX8 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.benefits-widget-container`
- `#Pp6MAb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6MAb > .teaser-link > .container`
- `#GxGPoQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxGPoQ > .teaser-link > .container > .information`
- `#GxGPoQ > .teaser-link > .container > h2`
- `#GxGPoQ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marta Bivand Erdal"]`
- `#wgMexG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMexG > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(34) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#rrLXxe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrLXxe > .teaser-link > .container > h2`
- `#aJwGMA > .teaser-link > .container > .text-wrapper-small`
- `#aJwGMA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPlXG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPlXG > .teaser-link > .container`
- `#K83vXG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K83vXG > .teaser-link > .container`
- `#\36 3r9Je > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3r9Je > .teaser-link > .container`
- `#d4Oq2z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4Oq2z > .teaser-link > .container`
- `#k0JQWa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0JQWa > .teaser-link > .container`
- `#JOoJ1b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOoJ1b > .teaser-link > .container`
- `#\38 pm5lE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pm5lE > .teaser-link > .container`
- `#e71eal > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e71eal > .teaser-link > .container`
- `#QJoPP8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJoPP8 > .teaser-link > .container`
- `#M7gGv0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7gGv0 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#M7gGv0 > .teaser-link > .container`
- `#gk7kdk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk7kdk > .teaser-link > .container`
- `#pB6ybo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB6ybo > .teaser-link > .container > .information`
- `#pB6ybo > .teaser-link > .container > .illustration-container > .text`
- `#pB6ybo > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#rrAnj3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrAnj3 > .teaser-link > .container`
- `#\30 pjR9M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjR9M > .teaser-link > .container`
- `#L40J24 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L40J24 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#L40J24 > .teaser-link > .container`
- `#JOoQ46 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOoQ46 > .teaser-link > .container`
- `#\37 p0q23 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p0q23 > .teaser-link > .container`
- `#lnAVk9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnAVk9 > .teaser-link > .container`
- `#V6RJq1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6RJq1 > .teaser-link > .container`
- `#xrRrb8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrRrb8 > .teaser-link > .container`
- `#\37 pl9wK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pl9wK > .teaser-link > .container`
- `#\32 pGvrq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pGvrq > .teaser-link > .container > .information`
- `#\32 pGvrq > .teaser-link > .container > h2`
- `#\32 pGvrq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Paul M.H. Buvarp"]`
- `#d4OLdX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4OLdX > .teaser-link > .container`
- `#OkpyeE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkpyeE > .teaser-link > .container`
- `#m069rL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m069rL > .teaser-link > .container`
- `#zOLpm4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLpm4 > .teaser-link > .container`
- `#\30 pnBko > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pnBko > .teaser-link > .container`
- `#\38 pmG1A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pmG1A > .teaser-link > .container`
- `#\36 qnbE0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qnbE0 > .teaser-link > .container > .information`
- `#\36 qnbE0 > .teaser-link > .container > h2`
- `#\36 qnbE0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jakob Semb Aasmundsen"]`
- `#\31 6n6yQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6n6yQ > .teaser-link > .container`
- `#\36 qj9G0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qj9G0 > .teaser-link > .container`
- `#\32 pG5ey > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pG5ey > .teaser-link > .container`
- `#Pd3Mpb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd3Mpb > .teaser-link > .container`
- `#RjxL5O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxL5O > .teaser-link > .container`
- `#Oknd51 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oknd51 > .teaser-link > .container`
- `#e78Mw9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78Mw9 > .teaser-link > .container`
- `#wrEarP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEarP > .teaser-link > .container`
- `#y5v7wK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5v7wK > .teaser-link > .container`
- `#\30 pEGrg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEGrg > .teaser-link > .container`
- `#\32 p1w6l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1w6l > .teaser-link > .container`
- `#BxJPz9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxJPz9 > .teaser-link > .container`
- `img[alt="Terapi i 80 graders varme"]`
- `#\32 p1Gvy > .teaser-link > .container`
- `#e78P9g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78P9g > .teaser-link > .container`
- `#\30 pnQKo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pnQKo > .teaser-link > .container`
- `img[alt="Beklager, kjære naboer!"]`
- `#Gx1pvl > .teaser-link > .container`
