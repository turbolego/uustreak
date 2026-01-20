# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-20T00:26:42.615Z
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
- **Count:** 10

#### Affected Elements:

- `#L4nxJx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Dette skrev Støre til Trump"]`
- `#\37 pKOgK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Xjrd7B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p6AWw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr3kwB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvOKRG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlMKr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgJLO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAjK1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 221

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `#\34 31L0R > .teaser-link > .teaser-image-wrapper`
- `#\34 31L0R > .teaser-link > .container > .information`
- `#\34 31L0R > .teaser-link > .container > .illustration-container > .text`
- `#\34 31L0R > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#dr-edition-teaser-gwtwwtssj > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137457"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137457"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137457"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137453"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137453"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137453"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137433"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137433"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137433"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137445"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137445"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137445"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137441"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137441"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137441"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137216"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137216"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137216"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137426"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137426"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137426"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137437"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137437"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137437"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137399"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137399"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137399"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#al5EG5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#al5EG5 > .teaser-link > .container`
- `img[alt="Det eneste sexrådet til menn"]`
- `#\33 p9z3X > .teaser-link > .container`
- `#XM87KE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM87KE > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(12) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#L4nxJx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4nxJx > .teaser-link > .container > h2`
- `#d4l21O > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Dette skrev Støre til Trump"]`
- `#\37 pKOgK > .teaser-link > .container > .text-wrapper-small`
- `#\37 pKOgK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-reveal.teaser-bundle.new-bundles > .bundle-title`
- `#Xjrd7B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Xjrd7B > .teaser-link > .container > h2`
- `#\38 p6AWw > .teaser-link > .container > .text-wrapper-small`
- `#\38 p6AWw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#Arl58z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arl58z > .teaser-link > .container`
- `#lnE32y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnE32y > .teaser-link > .container`
- `#GxaA14 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxaA14 > .teaser-link > .container`
- `#PdRvab > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdRvab > .teaser-link > .container`
- `img[alt="Bazooka mot bøllen"]`
- `.information__e24`
- `#bOnv2A > .teaser-link > .container > h2`
- `#bOnv2A > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Torbjørn Røe Isaksen"]`
- `#K8vnB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8vnB4 > .teaser-link > .container`
- `#M73X25 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M73X25 > .teaser-link > .container`
- `#WvLVeG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLVeG > .teaser-link > .container`
- `#q6A7GE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6A7GE > .teaser-link > .container`
- `#XM882b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM882b > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(26) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#xr3kwB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr3kwB > .teaser-link > .container > h2`
- `#WvOKRG > .teaser-link > .container > .text-wrapper-small`
- `#WvOKRG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.teaser-image[alt="Trump krysser en rød linje"][decoding="async"]`
- `#Exp91P > .teaser-link > .container > .illustration-container > .text`
- `#Exp91P > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#OkQJ5b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQJ5b > .teaser-link > .container`
- `#Jbz1bP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Jbz1bP > .teaser-link > .container`
- `#QJm30q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJm30q > .teaser-link > .container`
- `.benefits-widget-container`
- `#bm3Bb5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3Bb5 > .teaser-link > .container`
- `#\30 pKAkB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKAkB > .teaser-link > .container`
- `#lng63G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lng63G > .teaser-link > .container`
- `#\38 pwE3W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwE3W > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\38 pwE3W > .teaser-link > .container`
- `#xr3Emp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr3Emp > .teaser-link > .container`
- `#\34 3dkOq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3dkOq > .teaser-link > .container`
- `#xr3jOB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr3jOB > .teaser-link > .container`
- `#vrQzEm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrQzEm > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(41) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#ArlMKr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArlMKr > .teaser-link > .container > h2`
- `#zOgJLO > .teaser-link > .container > .text-wrapper-small`
- `#zOgJLO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAjK1 > .teaser-link > .container > .text-wrapper-small`
- `#pBAjK1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJ5pJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJ5pJ > .teaser-link > .container`
- `#q6ABm1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6ABm1 > .teaser-link > .container > .information`
- `#q6ABm1 > .teaser-link > .container > h2`
- `#q6ABm1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Fr. H. Svendsen"]`
- `#wre9R4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wre9R4 > .teaser-link > .container`
- `img[alt="Moteskaper Valentino er død "]`
- `#\37 pKOvw > .teaser-link > .container`
- `#QJmkzA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJmkzA > .teaser-link > .container`
- `#\35 p6qVX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p6qVX > .teaser-link > .container`
- `#y5RMJr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5RMJr > .teaser-link > .container`
- `#aJPE0L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJPE0L > .teaser-link > .container`
- `#\31 6Br4q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6Br4q > .teaser-link > .container`
- `#pBAk2o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAk2o > .teaser-link > .container`
- `#JOJ4V6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOJ4V6 > .teaser-link > .container`
- `#\37 pKGGv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pKGGv > .teaser-link > .container`
- `#d4l8gJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4l8gJ > .teaser-link > .container`
- `#M73X7E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M73X7E > .teaser-link > .container`
- `#\38 p6AEG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p6AEG > .teaser-link > .container`
- `#QJmjRW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJmjRW > .teaser-link > .container`
- `#K8y9qy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8y9qy > .teaser-link > .container`
- `#pBAjAw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAjAw > .teaser-link > .container`
- `#\33 pjv1d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pjv1d > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\33 pjv1d > .teaser-link > .container`
- `#L4nxQR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4nxQR > .teaser-link > .container`
- `#\30 pn5gB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pn5gB > .teaser-link > .container`
- `#oEAmWj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEAmWj > .teaser-link > .container`
- `#L4ngvP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4ngvP > .teaser-link > .container > .information`
- `#L4ngvP > .teaser-link > .container > h2`
- `#L4ngvP > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#wre5vn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wre5vn > .teaser-link > .container > .information`
- `#wre5vn > .teaser-link > .container > .illustration-container > .text`
- `#wre5vn > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#\36 qzgoO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzgoO > .teaser-link > .container`
- `#\34 31Jm9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 31Jm9 > .teaser-link > .container`
- `#d4l8GJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4l8GJ > .teaser-link > .container`
- `#\30 pK7a0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pK7a0 > .teaser-link > .container`
- `#n1AnXJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1AnXJ > .teaser-link > .container > .information`
- `#n1AnXJ > .teaser-link > .container > h2`
- `#n1AnXJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Einar Lie"]`
- `#rrg3zK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrg3zK > .teaser-link > .container`
- `#\35 p6lPz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p6lPz > .teaser-link > .container > .information`
- `#\35 p6lPz > .teaser-link > .container > h2`
- `#\35 p6lPz > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tron Ljødal"]`
- `#k0RxlA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RxlA > .teaser-link > .container`
- `img[alt="Det første fotoet av ploging"]`
- `#JOJGa6 > .teaser-link > .container > .information`
- `#JOJGa6 > .teaser-link > .container > h2`
- `#JOJGa6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Iver Huitfeldt"]`
- `#\34 31rRa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 31rRa > .teaser-link > .container > .information`
- `#\34 31rRa > .teaser-link > .container > h2`
- `#\34 31rRa > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Knut Schreiner"]`
- `#oEAwlj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEAwlj > .teaser-link > .container`
- `#\38 p6m0w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p6m0w > .teaser-link > .container`
- `#V6qQW6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6qQW6 > .teaser-link > .container`
- `#aJPyE7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJPyE7 > .teaser-link > .container`
