# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-25T00:30:51.060Z
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
- **Count:** 4

#### Affected Elements:

- `#Okba3O > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#dRg8bq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#d45OMw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 212

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#K8BGA7 > .teaser-link > .teaser-image-wrapper`
- `#K8BGA7 > .teaser-link > .container > .illustration-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#dr-edition-teaser-hg60zovl > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136807"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136807"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136807"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136789"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136789"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136789"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136773"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136773"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136773"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136787"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136787"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136787"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136790"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136790"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136790"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136781"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136781"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136781"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136778"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136778"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136778"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136779"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136779"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136779"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136763"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136763"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136763"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136761"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136761"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136761"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#zAd17O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAd17O > .teaser-link > .container`
- `#dr-edition-teaser-wcgric6ds > div`
- `#OoG4jk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG4jk > .teaser-link > .container`
- `#\34 3jxro > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jxro > .teaser-link > .container`
- `#OoRBQV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoRBQV > .teaser-link > .container`
- `.games-widget`
- `#m0gV6O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gV6O > .teaser-link > .container`
- `#zARwQ4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARwQ4 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#zARwQ4 > .teaser-link > .container`
- `#JbVxXP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbVxXP > .teaser-link > .container`
- `#ArzJ7E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArzJ7E > .teaser-link > .container`
- `#k0Wd3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Wd3X > .teaser-link > .container`
- `#xrA9JG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrA9JG > .teaser-link > .container`
- `#Pp6MAb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6MAb > .teaser-link > .container`
- `#nykryQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nykryQ > .teaser-link > .container`
- `#\37 39Eov > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39Eov > .teaser-link > .container`
- `#oELneW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oELneW > .teaser-link > .container`
- `#KMO1P6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMO1P6 > .teaser-link > .container`
- `#LMyyzR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMyyzR > .teaser-link > .container`
- `#m0gKbp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gKbp > .teaser-link > .container > .information`
- `#m0gKbp > .teaser-link > .container > h2`
- `#m0gKbp > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Laavanya Kathiravelu"]`
- `.container-linear-gradient`
- `.container-darken`
- `#\39 plzx9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 plzx9 > .teaser-link > .container > .information`
- `#\39 plzx9 > .teaser-link > .container > h2`
- `#\39 plzx9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marte Heian-Engdal"]`
- `#wr6gJ5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr6gJ5 > .teaser-link > .container`
- `.benefits-widget-container`
- `#gka4xk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gka4xk > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(35) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#d45OMw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45OMw > .teaser-link > .container > h2`
- `#Pp6X7b > .teaser-link > .container > .text-wrapper-small`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0WR6v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0WR6v > .teaser-link > .container`
- `#Av8rlM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8rlM > .teaser-link > .container`
- `#Ex4Bja > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ex4Bja > .teaser-link > .container`
- `#gwXx89 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwXx89 > .teaser-link > .container`
- `#d45r7j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45r7j > .teaser-link > .container`
- `#xmGEBj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGEBj > .teaser-link > .container`
- `#y51xme > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y51xme > .teaser-link > .container`
- `#m0gvbE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gvbE > .teaser-link > .container`
- `#oELwVm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oELwVm > .teaser-link > .container > .information`
- `#oELwVm > .teaser-link > .container > h2`
- `#oELwVm > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marianne Riddervold"]`
- `#Ey0O43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0O43 > .teaser-link > .container`
- `#PdrOEz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdrOEz > .teaser-link > .container`
- `#q6p1l1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6p1l1 > .teaser-link > .container`
- `#d45v1z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45v1z > .teaser-link > .container`
- `#\37 pnjdW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pnjdW > .teaser-link > .container`
- `#QJRgA4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJRgA4 > .teaser-link > .container`
- `#lng92G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lng92G > .teaser-link > .container`
- `#JOWQb7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWQb7 > .teaser-link > .container`
- `img[alt="Flere lurt av ny svindelmetode"]`
- `#d45qpo > .teaser-link > .container`
- `#ArzPg3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArzPg3 > .teaser-link > .container > .information`
- `#ArzPg3 > .teaser-link > .container > h2`
- `#ArzPg3 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tor Ketil Larsen "]`
- `#OkbjLl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbjLl > .teaser-link > .container`
- `#lng909 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lng909 > .teaser-link > .container`
- `#zO58v5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO58v5 > .teaser-link > .container`
- `#oELKQR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oELKQR > .teaser-link > .container`
- `#\32 pnV5r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pnV5r > .teaser-link > .container`
- `#qPKKvw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPKKvw > .teaser-link > .container`
- `#GxljJl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxljJl > .teaser-link > .container`
- `#\37 pnqm4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pnqm4 > .teaser-link > .container`
- `#JbPPK7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPPK7 > .teaser-link > .container`
- `#m0gLJq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gLJq > .teaser-link > .container`
- `#wgyMl4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgyMl4 > .teaser-link > .container`
- `#Wvlbyd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvlbyd > .teaser-link > .container > .information`
- `#Wvlbyd > .teaser-link > .container > .illustration-container > .text`
- `#Wvlbyd > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#\37 39Ky4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39Ky4 > .teaser-link > .container > .information`
- `#\37 39Ky4 > .teaser-link > .container > .illustration-container > .text`
- `#\37 39Ky4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `img[alt="F-ordet er tabu igjen"]`
- `#PdrPG6 > .teaser-link > .container > .information`
- `#PdrPG6 > .teaser-link > .container > .illustration-container > .text`
- `#PdrPG6 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#d457wX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d457wX > .teaser-link > .container`
- `#\35 EmbM1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EmbM1 > .teaser-link > .container`
- `#BxVGQQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxVGQQ > .teaser-link > .container`
- `#oELW0W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oELW0W > .teaser-link > .container`
- `#k0WMAB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0WMAB > .teaser-link > .container`
- `#d45Lvz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45Lvz > .teaser-link > .container`
- `#k0W67j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0W67j > .teaser-link > .container > .information`
- `#k0W67j > .teaser-link > .container > .illustration-container > .text`
- `#k0W67j > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Knut Olav Åmås"]`
- `#k0WpeQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0WpeQ > .teaser-link > .container`
- `#gka7KB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gka7KB > .teaser-link > .container`
- `#\31 6PPnB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PPnB > .teaser-link > .container`
- `#OkbrPl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbrPl > .teaser-link > .container`
- `#zARrvb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARrvb > .teaser-link > .container`
- `img[alt="Frykten på tannlegekontoret"]`
- `#j09d6q > .teaser-link > .container`
- `#gkaWPk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkaWPk > .teaser-link > .container > .information`
- `#gkaWPk > .teaser-link > .container > h2`
- `#gkaWPk > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mette Brantzeg"]`
