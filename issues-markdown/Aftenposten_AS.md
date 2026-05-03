# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-03T00:35:14.928Z
**URL:** [https://www.aftenposten.no/](https://www.aftenposten.no/)
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

- `#Rj18AO > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#q66J4z > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#OkyQw1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `img[alt="Forbud, Frp? Virkelig?"]`
- `img[alt="Vis respekt for maidagen"]`
- `#L4o7Mx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBME2W > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 228

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#\38 pPxLE > .teaser-link > .teaser-image-wrapper`
- `#\38 pPxLE > .teaser-link > .container > .information`
- `#\38 pPxLE > .teaser-link > .container > .illustration-container > .text`
- `#\38 pPxLE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `#\33 pB0yv`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-w60piiad1 > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Rj18AO > .teaser-link > .teaser-image-wrapper`
- `#Rj18AO > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_1166k_647`
- `article[data-pulse-entity-id="reel-138812"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138812"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138812"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138811"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138811"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138811"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138810"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138810"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138810"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138775"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138775"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138775"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138772"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138772"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138772"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138773"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138773"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138773"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138763"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138763"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138763"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138765"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138765"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138765"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138753"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138753"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138753"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138746"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138746"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138746"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(8) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Forbud, Frp? Virkelig?"]`
- `#n1LVlx > .teaser-link > .container > h2`
- `#PdvjVR > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Vis respekt for maidagen"]`
- `#dr-edition-teaser-8gpclvhc5 > div`
- `#d4Jayo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4Jayo > .teaser-link > .teaser-image-wrapper > .series-header`
- `#d4Jayo > .teaser-link > .container`
- `#n1L2e5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1L2e5 > .teaser-link > .container`
- `#\37 p7Kk3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7Kk3 > .teaser-link > .container`
- `#wrdLJd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdLJd > .teaser-link > .container`
- `.games-widget`
- `#q6P2pO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6P2pO > .teaser-link > .container`
- `#\30 pvd66 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvd66 > .teaser-link > .container`
- `#GxME3J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxME3J > .teaser-link > .container`
- `#\30 ppvlB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 ppvlB > .teaser-link > .container`
- `#lnMgX7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMgX7 > .teaser-link > .container`
- `#\34 3EgVE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3EgVE > .teaser-link > .container`
- `#\32 pV4qB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pV4qB > .teaser-link > .container > .information`
- `#\32 pV4qB > .teaser-link > .container > .illustration-container > .text`
- `#\32 pV4qB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#k0MroX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MroX > .teaser-link > .container`
- `#BxMPRv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMPRv > .teaser-link > .container > .information`
- `#BxMPRv > .teaser-link > .container > .illustration-container > .text`
- `#BxMPRv > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#BxMPRv > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > .author-image[width="88"][height="88"]`
- `#\33 pB0qd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pB0qd > .teaser-link > .container`
- `#aJG0VE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJG0VE > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(26)`
- `#lnMJWk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMJWk > .teaser-link > .container`
- `#k0MLrX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MLrX > .teaser-link > .container > .information`
- `#k0MLrX > .teaser-link > .container > h2`
- `#k0MLrX > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Aisha Iqbal"]`
- `#XMoQGm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMoQGm > .teaser-link > .container`
- `#M7553E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7553E > .teaser-link > .container`
- `#ExxKkj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExxKkj > .teaser-link > .container`
- `.benefits-widget-container`
- `#\32 pv4rv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pv4rv > .teaser-link > .container`
- `#M7Ax35 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7Ax35 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(34) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#L4o7Mx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4o7Mx > .teaser-link > .container > h2`
- `#pBME2W > .teaser-link > .container > .text-wrapper-small`
- `#pBME2W > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxP224 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxP224 > .teaser-link > .container`
- `#bOkxpe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOkxpe > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(37)`
- `#zO0Jvr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO0Jvr > .teaser-link > .container`
- `#JOnAPb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOnAPb > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(40)`
- `#j0vMQL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vMQL > .teaser-link > .teaser-image-wrapper > .series-header`
- `#j0vMQL > .teaser-link > .container`
- `#m0MM8E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0MM8E > .teaser-link > .container`
- `#oEMad0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEMad0 > .teaser-link > .container`
- `#\36 qPlqo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qPlqo > .teaser-link > .container`
- `#m0Mwx4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Mwx4 > .teaser-link > .container`
- `#K8L1m7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8L1m7 > .teaser-link > .container > .information`
- `#K8L1m7 > .teaser-link > .container > h2`
- `#K8L1m7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Martin Tansøy "]`
- `#\33 pBwQ9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pBwQ9 > .teaser-link > .container > .information`
- `#\33 pBwQ9 > .teaser-link > .container > .illustration-container > .text`
- `#\33 pBwQ9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\31 6vbQM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6vbQM > .teaser-link > .container > .information`
- `#\31 6vbQM > .teaser-link > .container > .illustration-container > .text`
- `#\31 6vbQM > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\31 6vbQM > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#OkyBk3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkyBk3 > .teaser-link > .container > .information`
- `#OkyBk3 > .teaser-link > .container > .illustration-container > .text`
- `#OkyBk3 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#OkyBk3 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#k0MExQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MExQ > .teaser-link > .teaser-image-wrapper > .series-header`
- `#k0MExQ > .teaser-link > .container > .information`
- `#k0MExQ > .teaser-link > .container > .illustration-container > .text`
- `#k0MExQ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#\38 pP77x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pP77x > .teaser-link > .container`
- `#\39 pk9jl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pk9jl > .teaser-link > .container`
- `#\36 qPgRo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qPgRo > .teaser-link > .container`
- `#\36 qPyv8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qPyv8 > .teaser-link > .container > .information`
- `#\36 qPyv8 > .teaser-link > .container > h2`
- `#\36 qPyv8 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Petter Bae Brandtzæg"]`
- `#Exb2n2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exb2n2 > .teaser-link > .container > .information`
- `#Exb2n2 > .teaser-link > .container > .illustration-container > .text`
- `#Exb2n2 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#gk3O8a > .teaser-link > .container > .text-wrapper-small`
- `#gk3O8a > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdXX5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdXX5 > .teaser-link > .container`
- `#\36 qP770 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qP770 > .teaser-link > .container`
- `.container-linear-gradient`
- `.container-darken`
- `#Rj1BxJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj1BxJ > .teaser-link > .container`
- `#rr8JKl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr8JKl > .teaser-link > .container`
- `#M75Ja5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M75Ja5 > .teaser-link > .container > .information`
- `#M75Ja5 > .teaser-link > .container > h2`
- `#M75Ja5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Borgersrud"]`
- `#QJr0KJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJr0KJ > .teaser-link > .container`
- `#JOngaX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOngaX > .teaser-link > .container`
- `#Gxy0pJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxy0pJ > .teaser-link > .container`
- `#V6gV3J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gV3J > .teaser-link > .container`
- `#vrkXyp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrkXyp > .teaser-link > .container`
- `#\30 pvgl6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvgl6 > .teaser-link > .container`
- `#\39 pkK7W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pkK7W > .teaser-link > .container`
- `#m0Mx7q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Mx7q > .teaser-link > .container > .information`
- `#m0Mx7q > .teaser-link > .container > .illustration-container > .text`
- `#m0Mx7q > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#m0Mx7q > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#Pdv2j7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdv2j7 > .teaser-link > .container`
- `#Okyq7w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okyq7w > .teaser-link > .container`
- `#wrdLAP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdLAP > .teaser-link > .container > .information`
- `.kicker`
- `#wrdLAP > .teaser-link > .container > h2`
- `#wrdLAP > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Andrew Mukuria"]`
- `#n1984J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1984J > .teaser-link > .container`
- `#k0MLg9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MLg9 > .teaser-link > .container`
- `#q6OWLO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6OWLO > .teaser-link > .container`
