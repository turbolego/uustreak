# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-17T00:26:05.647Z
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
- **Count:** 5

#### Affected Elements:

- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#q6pLWw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pl8m3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJlveQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOK16e > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- `#BxJPwv > .teaser-link > .teaser-image-wrapper`
- `#BxJPwv > .teaser-link > .container > .information`
- `#BxJPwv > .teaser-link > .container > h2`
- `#BxJPwv > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `#wrEWEL`
- `.teaser-bundle.new-bundles.series-location > .bundle-title`
- `#WvLVpK > .teaser-link > .teaser-image-wrapper`
- `#WvLVpK > .teaser-link > .container > h2`
- `.teaser-bundle.new-bundles.series-location > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#dr-edition-teaser-iaf0hxxnp > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137134"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137134"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137134"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137059"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137059"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137059"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137119"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137119"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137119"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137117"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137117"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137117"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137094"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137094"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137094"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137055"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137055"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137055"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137088"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137088"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137088"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137090"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137090"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137090"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137070"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137070"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137070"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#m062Oq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m062Oq > .teaser-link > .container`
- `#\32 p1G2x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1G2x > .teaser-link > .container`
- `#m06mML > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m06mML > .teaser-link > .container`
- `#\39 pm155 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pm155 > .teaser-link > .container`
- `img[alt="FN opprettet ikke Israel"]`
- `#\35 pVKXX > .teaser-link > .container > .information`
- `#\35 pVKXX > .teaser-link > .container > h2`
- `#\35 pVKXX > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Gule"]`
- `.games-widget`
- `#bm3Bb5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3Bb5 > .teaser-link > .container`
- `.teaser-bundle.new-bundles.magazine > .bundle-title`
- `#q6pLWw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6pLWw > .teaser-link > .container > h2`
- `#j098Ww > .teaser-link > .container > .text-wrapper-small`
- `#j098Ww > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pE8bE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pE8bE > .teaser-link > .container`
- `#\30 pEB8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEB8o > .teaser-link > .container`
- `.teaser-image[alt="Hva skjer med Vebjørn Selbekk?"][decoding="async"]`
- `#vrmpLB > .teaser-link > .container > .information`
- `#vrmpLB > .teaser-link > .container > .illustration-container > .text`
- `#vrmpLB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#\34 3jV0o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jV0o > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(22) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 pl8m3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pl8m3 > .teaser-link > .container > h2`
- `#JO1mAR > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1mAR > .teaser-link > .container > .text-wrapper-small`
- `#JO1mAR > .teaser-link > .container > .byline`
- `#QJlveQ > .teaser-link > .container > .text-wrapper-small`
- `#QJlveQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyvenJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyvenJ > .teaser-link > .container`
- `#gkP8v0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkP8v0 > .teaser-link > .container`
- `#M7gegr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7gegr > .teaser-link > .container`
- `#\35 pV5y6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pV5y6 > .teaser-link > .container`
- `#wgM99G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM99G > .teaser-link > .container`
- `#\30 pEa8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEa8o > .teaser-link > .container`
- `#Oknd51 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oknd51 > .teaser-link > .container`
- `#pB6wl6 > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Ny Tesla-rekord på Wall Street"]`
- `.benefits-widget-container`
- `#mPGX34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGX34 > .teaser-link > .container`
- `img[alt="– Plutselig skulle alle ha det"]`
- `#\30 pEaR2 > .teaser-link > .container`
- `#OkbrPl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbrPl > .teaser-link > .container`
- `#\38 pwwrG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwwrG > .teaser-link > .container`
- `#gwX2JJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwX2JJ > .teaser-link > .container`
- `#\32 pnRPx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pnRPx > .teaser-link > .container`
- `#wgMexG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMexG > .teaser-link > .container`
- `img[alt="Hyttesmell for Nordtun"]`
- `#oERqg0 > .teaser-link > .container`
- `#\37 plvW3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plvW3 > .teaser-link > .container > .information`
- `#\37 plvW3 > .teaser-link > .container > h2`
- `#\37 plvW3 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bård Bergsjø"]`
- `#Ar2ynz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar2ynz > .teaser-link > .container > .information`
- `#Ar2ynz > .teaser-link > .container > h2`
- `#Ar2ynz > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars H. Smedsrud"]`
- `#m06qKp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m06qKp > .teaser-link > .container`
- `#\32 p16Ev > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p16Ev > .teaser-link > .container`
- `#Pd3VR7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd3VR7 > .teaser-link > .container`
- `#QJlvz8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJlvz8 > .teaser-link > .container`
- `#K8vJJo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8vJJo > .teaser-link > .container`
- `#gkPQlL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkPQlL > .teaser-link > .container > .information`
- `#gkPQlL > .teaser-link > .container > h2`
- `#gkPQlL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Torgeir Micaelsen"]`
- `#\38 pw49Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pw49Q > .teaser-link > .container`
- `#vrmRJL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrmRJL > .teaser-link > .container`
- `#j0PqMb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0PqMb > .teaser-link > .container`
- `#xrR7Jj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrR7Jj > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(51)`
- `#\39 pmaPw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pmaPw > .teaser-link > .container`
- `#gkPMMB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkPMMB > .teaser-link > .container`
- `img[alt="Hvem skrev «Anna Karenina»? "]`
- `#Pd3wEz > .teaser-link > .container`
- `#n1gEGn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1gEGn > .teaser-link > .container`
- `#bOKGyl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOKGyl > .teaser-link > .container > .information`
- `#bOKGyl > .teaser-link > .container > .illustration-container > .text`
- `#bOKGyl > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#XMw1VB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMw1VB > .teaser-link > .container`
- `#n1gMaa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1gMaa > .teaser-link > .container > .information`
- `#n1gMaa > .teaser-link > .container > h2`
- `#n1gMaa > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Peder Nyeggen"]`
- `#Gx17dl > .teaser-link > .container > .text-wrapper-small`
- `#Gx17dl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pmJ4p > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pmJ4p > .teaser-link > .container`
- `#wgyb7P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgyb7P > .teaser-link > .container > .information`
- `#wgyb7P > .teaser-link > .container > h2`
- `#wgyb7P > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Vemund Sveen Finstad"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(60) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#OknKn1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OknKn1 > .teaser-link > .container > .illustration-container > .text`
- `#OknKn1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#bOK16e > .teaser-link > .container > .text-wrapper-small`
- `#bOK16e > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pj8QP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pj8QP > .teaser-link > .container`
- `#BxJPz9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxJPz9 > .teaser-link > .container`
- `#Exoe8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exoe8o > .teaser-link > .container`
- `#y5vwLx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5vwLx > .teaser-link > .container`
- `#\38 pwjgA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwjgA > .teaser-link > .container > .information`
- `#\38 pwjgA > .teaser-link > .container > h2`
- `#\38 pwjgA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bård Kleppe "]`
- `#BxJR2w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxJR2w > .teaser-link > .container > .information`
- `#BxJR2w > .teaser-link > .container > h2`
- `#BxJR2w > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Morten Busch"]`
- `#\37 plvR3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plvR3 > .teaser-link > .container`
- `#\35 pVdw6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pVdw6 > .teaser-link > .container`
- `#L400vQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L400vQ > .teaser-link > .container`
- `#QJl4rP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJl4rP > .teaser-link > .container > .information`
- `#QJl4rP > .teaser-link > .container > .illustration-container > .text`
- `#QJl4rP > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[width="88"]`
- `#zOL361 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOL361 > .teaser-link > .container > .information`
- `#zOL361 > .teaser-link > .container > h2`
- `#zOL361 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jakub M. Godzimirski"]`
- `#m062zq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m062zq > .teaser-link > .container`
- `#wrE58o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrE58o > .teaser-link > .container > .information`
- `#wrE58o > .teaser-link > .container > h2`
- `#wrE58o > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ole Jakob Løland"]`
- `#ExoeEA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExoeEA > .teaser-link > .container`
- `#wrE2mM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrE2mM > .teaser-link > .container`
- `#pB6E1j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB6E1j > .teaser-link > .container > .information`
- `#pB6E1j > .teaser-link > .container > h2`
- `#pB6E1j > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Einar Lie"]`
- `#m069rL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m069rL > .teaser-link > .container`
