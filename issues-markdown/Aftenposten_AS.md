# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-02T00:26:50.864Z
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

- `#K8vnB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5vvPE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6pEVo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 Bnq2V > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJlpbV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd9ebR > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 223

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#\37 p0gM4`
- `#Okpe5l > .teaser-link > .teaser-image-wrapper`
- `#Okpe5l > .teaser-link > .container > .information`
- `#Okpe5l > .teaser-link > .container > h2`
- `#Okpe5l > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137253"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137253"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137253"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
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
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#WvbJWr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvbJWr > .teaser-link > .container`
- `.magazine.teaser-bundle.new-bundles > .bundle-title`
- `#K8vnB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8vnB4 > .teaser-link > .container > h2`
- `#y5vvPE > .teaser-link > .container > .text-wrapper-small`
- `#y5vvPE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxPAO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxPAO > .teaser-link > .container`
- `#QJo204 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJo204 > .teaser-link > .container`
- `#e78BBa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78BBa > .teaser-link > .container`
- `.games-widget`
- `#\37 plrpK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plrpK > .teaser-link > .container > .information`
- `#\37 plrpK > .teaser-link > .container > .illustration-container > .text`
- `#\37 plrpK > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\37 plrpK > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#xrPlXG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPlXG > .teaser-link > .container`
- `#pBL5Xw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBL5Xw > .teaser-link > .container`
- `#\39 pvWb5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pvWb5 > .teaser-link > .container`
- `#gk7OvJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk7OvJ > .teaser-link > .container`
- `#\30 pjeV0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjeV0 > .teaser-link > .container`
- `#\34 3qgoE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qgoE > .teaser-link > .container`
- `#m062Oq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m062Oq > .teaser-link > .container`
- `#Pd9L2e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd9L2e > .teaser-link > .container`
- `#k0J0e9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0J0e9 > .teaser-link > .container`
- `#pBL56V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBL56V > .teaser-link > .container`
- `#Okp2Rl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okp2Rl > .teaser-link > .container`
- `#zOLvlO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLvlO > .teaser-link > .container > .information`
- `#zOLvlO > .teaser-link > .container > .illustration-container > .text`
- `#zOLvlO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#zOLvlO > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#m0RnOE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0RnOE > .teaser-link > .container`
- `#GyvenJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyvenJ > .teaser-link > .container`
- `#bO5Bnd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO5Bnd > .teaser-link > .container`
- `.benefits-widget-container`
- `#lng92G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lng92G > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(33) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#xrPylR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPylR > .teaser-link > .container > h2`
- `#xrPylR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mustafa Can"]`
- `#L4Ad1P > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4Ad1P > .teaser-link > .container > .text-wrapper-small`
- `#L4Ad1P > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Asle Toje"]`
- `#\32 pGXRq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pGXRq > .teaser-link > .container > .text-wrapper-small`
- `#\32 pGXRq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bengt Andersen"]`
- `#e787g9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e787g9 > .teaser-link > .container > .information`
- `#e787g9 > .teaser-link > .container > h2`
- `#e787g9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mikael Scott Bjerkeli"]`
- `#BxRmpw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxRmpw > .teaser-link > .container`
- `#L4AgOP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4AgOP > .teaser-link > .container`
- `#ArdgLj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdgLj > .teaser-link > .container`
- `#JOo29b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOo29b > .teaser-link > .container`
- `#ArdglM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdglM > .teaser-link > .container`
- `#gk7Ork > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk7Ork > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(41) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#q6pEVo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6pEVo > .teaser-link > .container > h2`
- `#\34 Bnq2V > .teaser-link > .container > .text-wrapper-small`
- `#\34 Bnq2V > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPLvd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPLvd > .teaser-link > .container`
- `#Exo1bj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exo1bj > .teaser-link > .container`
- `#\35 p0pqm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p0pqm > .teaser-link > .container`
- `#zOGOer > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOGOer > .teaser-link > .container`
- `#WvbvAj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvbvAj > .teaser-link > .container`
- `img[alt="Hun er årets nyttårsbarn"]`
- `#L4ABE1 > .teaser-link > .container`
- `#k0a4gX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0a4gX > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(49) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#QJlpbV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJlpbV > .teaser-link > .container > h2`
- `#Pd9ebR > .teaser-link > .container > .text-wrapper-small`
- `#Pd9ebR > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrmJzV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrmJzV > .teaser-link > .container`
- `#\38 pm1kW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pm1kW > .teaser-link > .container`
- `#\36 qjvj3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qjvj3 > .teaser-link > .container`
- `#L4AB0V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4AB0V > .teaser-link > .container`
- `#OknRkV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OknRkV > .teaser-link > .container > .information`
- `#OknRkV > .teaser-link > .container > .illustration-container > .text`
- `#OknRkV > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#M7RXE0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7RXE0 > .teaser-link > .container`
- `#k0WnWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0WnWX > .teaser-link > .container > .information`
- `#k0WnWX > .teaser-link > .container > .illustration-container > .text`
- `#k0WnWX > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#\33 pk7ld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pk7ld > .teaser-link > .container`
- `#M7g2j0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7g2j0 > .teaser-link > .container`
- `img[alt="Ting å glede deg til i 2026"]`
- `#bO5eM3 > .teaser-link > .container`
- `#y53Jeg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y53Jeg > .teaser-link > .container`
- `#Okp1vA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okp1vA > .teaser-link > .container`
- `#\39 pvWmW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pvWmW > .teaser-link > .container`
- `#aJw0aA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJw0aA > .teaser-link > .container`
- `#k0Jb6j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Jb6j > .teaser-link > .container`
- `#Okn4pb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#Okn4pb > .teaser-link > .container`
- `#K83XzG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K83XzG > .teaser-link > .container`
- `#wrP5EL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrP5EL > .teaser-link > .container > .information`
- `#wrP5EL > .teaser-link > .container > h2`
- `#wrP5EL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sara Gilsdottir"]`
- `#ExWp6a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExWp6a > .teaser-link > .container`
- `#ExWxyP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExWxyP > .teaser-link > .container`
- `#wrE1o1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrE1o1 > .teaser-link > .container > .information`
- `#wrE1o1 > .teaser-link > .container > .illustration-container > .text`
- `#wrE1o1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#OkpPG3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkpPG3 > .teaser-link > .container`
- `#\32 p1w6l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1w6l > .teaser-link > .container`
- `#vrQzEm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrQzEm > .teaser-link > .container`
- `#lnA15k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnA15k > .teaser-link > .container`
- `#Oknd51 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oknd51 > .teaser-link > .container`
- `#\38 pmWdw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pmWdw > .teaser-link > .container`
- `#d4O4pO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4O4pO > .teaser-link > .container`
- `#BxRvkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxRvkl > .teaser-link > .container`
- `#q6Lbz0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Lbz0 > .teaser-link > .container`
