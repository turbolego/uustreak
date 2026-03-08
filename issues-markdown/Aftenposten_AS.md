# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-03-08T00:46:59.060Z
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
- **Count:** 6

#### Affected Elements:

- `#QJ7djV > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#Xjrd7B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pKOJM > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4mAdz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Ondt blod i bonusfamilien"]`
- `#L4lJOx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#QJ7djV > .teaser-link > .teaser-image-wrapper`
- `#QJ7djV > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138118"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138118"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138118"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138114"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138114"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138114"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138092"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138092"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138092"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138089"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138089"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138089"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138091"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138091"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138091"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137756"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137756"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137756"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138083"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138083"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138083"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137991"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137991"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137991"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138053"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138053"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138053"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138055"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138055"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138055"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `.series-reveal.teaser-bundle.new-bundles > .bundle-title`
- `#Xjrd7B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Xjrd7B > .teaser-link > .container > h2`
- `#\39 pKOJM > .teaser-link > .container > .text-wrapper-small`
- `#\39 pKOJM > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dr-edition-teaser-oh2p5xqyy > div`
- `#L418Mx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L418Mx > .teaser-link > .container`
- `#ArL1M5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArL1M5 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#ArL1M5 > .teaser-link > .container > .information`
- `#ArL1M5 > .teaser-link > .container > h2`
- `#ArL1M5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#ArL1M5 > .teaser-link > .container > .byline > .author-image-wrapper > img[alt="bilde av Pål Vegard Hagesæther"][width="100"][height="100"]`
- `#XMbrWn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMbrWn > .teaser-link > .container`
- `#GxMoll > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxMoll > .teaser-link > .container`
- `.games-widget`
- `#rrgRQw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrgRQw > .teaser-link > .container`
- `#\32 pB3Ly > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pB3Ly > .teaser-link > .container`
- `#K8ny46 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8ny46 > .teaser-link > .container`
- `#\35 pBbqm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pBbqm > .teaser-link > .container`
- `#dr-edition-teaser-3z2izj2a > div`
- `#\34 3o2Mg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3o2Mg > .teaser-link > .container > .information`
- `#\34 3o2Mg > .teaser-link > .container > .illustration-container > .text`
- `#\34 3o2Mg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(21) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#d4mAdz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4mAdz > .teaser-link > .container > h2`
- `#zOL9O1 > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Ondt blod i bonusfamilien"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(22) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#L4lJOx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4lJOx > .teaser-link > .container > h2`
- `#\30 pQ2bE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pQ2bE > .teaser-link > .container > .text-wrapper-small`
- `#\30 pQ2bE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mah-Rukh Ali"]`
- `#j0l1Jb > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0l1Jb > .teaser-link > .container > .text-wrapper-small`
- `#j0l1Jb > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av John Hultgren"]`
- `#QJx6pA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJx6pA > .teaser-link > .container`
- `#wrA76A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrA76A > .teaser-link > .container`
- `#aJbgML > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJbgML > .teaser-link > .container`
- `#vreW6m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vreW6m > .teaser-link > .container`
- `#L45qrP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L45qrP > .teaser-link > .container > .information`
- `#L45qrP > .teaser-link > .container > h2`
- `#L45qrP > .teaser-link > .container > .byline > div:nth-child(1)`
- `#L45qrP > .teaser-link > .container > .byline > .author-image-wrapper > img[alt="bilde av Pål Vegard Hagesæther"][width="100"][height="100"]`
- `.fullwidth.teaser-wrapper:nth-child(29)`
- `#M7oAdR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7oAdR > .teaser-link > .container`
- `.benefits-widget-container`
- `#\39 pzAnd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pzAnd > .teaser-link > .container > .information`
- `#\39 pzAnd > .teaser-link > .container > .illustration-container > .text`
- `#\39 pzAnd > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#q6Ro61 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Ro61 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#q6Ro61 > .teaser-link > .container`
- `#\37 p6Ey3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p6Ey3 > .teaser-link > .container`
- `#\37 pdJw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdJw8 > .teaser-link > .container`
- `#\38 pJlnE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJlnE > .teaser-link > .container`
- `#j0a8zz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0a8zz > .teaser-link > .container`
- `#zOEd3r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOEd3r > .teaser-link > .container`
- `#rrl4j8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrl4j8 > .teaser-link > .container`
- `img[alt="Kongeparet tilbake i Norge"]`
- `#\30 pQM02 > .teaser-link > .container`
- `#\32 pBOXR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pBOXR > .teaser-link > .container`
- `#d4w6mj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4w6mj > .teaser-link > .container`
- `#\37 p6xAv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p6xAv > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\37 p6xAv > .teaser-link > .container`
- `img[alt="Hvem er dette?"]`
- `#M7on0K > .teaser-link > .container`
- `.container-linear-gradient`
- `.container-darken`
- `#\38 pJl9w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJl9w > .teaser-link > .container > .information`
- `#\38 pJl9w > .teaser-link > .container > .illustration-container > .text`
- `#\38 pJl9w > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#j0lA4A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0lA4A > .teaser-link > .container`
- `#q615ae > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q615ae > .teaser-link > .container`
- `#L4lbeq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4lbeq > .teaser-link > .container > .information`
- `#L4lbeq > .teaser-link > .container > .illustration-container > .text`
- `#L4lbeq > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#L4lbeq > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#oEnbPV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEnbPV > .teaser-link > .container > .information`
- `#oEnbPV > .teaser-link > .container > h2`
- `#oEnbPV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
- `#V6P0Pl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6P0Pl > .teaser-link > .container`
- `#aJbQgE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJbQgE > .teaser-link > .container`
- `#oEnq0j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEnq0j > .teaser-link > .container`
- `#ExQ2Vl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExQ2Vl > .teaser-link > .container`
- `#\37 p62Q4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p62Q4 > .teaser-link > .container`
- `#d4wPXw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4wPXw > .teaser-link > .container > .information`
- `#d4wPXw > .teaser-link > .container > .illustration-container > .text`
- `#d4wPXw > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#d4wPXw > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#L4lEdJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4lEdJ > .teaser-link > .container`
- `#gkEKM1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkEKM1 > .teaser-link > .container`
- `#GxM04q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxM04q > .teaser-link > .container`
- `#gkEqKq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkEqKq > .teaser-link > .container`
- `#zOEQ6q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOEQ6q > .teaser-link > .container > .information`
- `#zOEQ6q > .teaser-link > .container > .illustration-container > .text`
- `#zOEQ6q > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#XMbldm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMbldm > .teaser-link > .container`
- `#ln3Pay > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ln3Pay > .teaser-link > .container`
- `#M7oym0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7oym0 > .teaser-link > .container`
- `#XMbkGB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMbkGB > .teaser-link > .container`
- `#rrl6Ke > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrl6Ke > .teaser-link > .container > .information`
- `#rrl6Ke > .teaser-link > .container > h2`
- `#rrl6Ke > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tormod Heier"]`
- `#\38 pJA8G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJA8G > .teaser-link > .container`
- `#Pd4vM0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd4vM0 > .teaser-link > .container`
- `#\38 pJA32 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJA32 > .teaser-link > .container`
- `#ArPaPx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArPaPx > .teaser-link > .container`
- `#vreRmL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vreRmL > .teaser-link > .container`
- `#ln3yBe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ln3yBe > .teaser-link > .container`
- `#pBQROV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBQROV > .teaser-link > .container > .information`
- `#pBQROV > .teaser-link > .container > h2`
- `#pBQROV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lily Bandehy"]`
- `#oEAbR0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEAbR0 > .teaser-link > .container`
- `#\37 p6Lq8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p6Lq8 > .teaser-link > .container`
- `#JOE53R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOE53R > .teaser-link > .container`
- `#XMbmlr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMbmlr > .teaser-link > .container`
