# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-05T00:30:22.936Z
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
- **Count:** 8

#### Affected Elements:

- `#\37 p0vdv > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#oEp2og > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#K83g35 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pmMBx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEpbzB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p0vRo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e784qK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd9AlX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 219

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#\37 p0vdv > .teaser-link > .teaser-image-wrapper`
- `#\37 p0vdv > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(2) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.double.teaser-wrapper:nth-child(3)`
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
- `#K83L7G > .teaser-link > .feature-container.b-lazy > .container-linear-gradient.z-index`
- `#K83L7G > .teaser-link > .feature-container.b-lazy > .container-darken.z-index`
- `#WvbJWr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvbJWr > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(12) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#K83g35 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K83g35 > .teaser-link > .container > h2`
- `#\33 pJ0vq > .teaser-link > .container > .text-wrapper-small`
- `#\33 pJ0vq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pmMBx > .teaser-link > .container > .text-wrapper-small`
- `#\38 pmMBx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#q6Lgww > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Lgww > .teaser-link > .container > .illustration-container > .text`
- `#q6Lgww > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#oEpbzB > .teaser-link > .container > .text-wrapper-small`
- `#oEpbzB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#pBg4X6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBg4X6 > .teaser-link > .container > .information`
- `#pBg4X6 > .teaser-link > .container > h2`
- `#pBg4X6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erling Dokk Holm"]`
- `#ArdgLj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdgLj > .teaser-link > .container`
- `#BxRmpw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxRmpw > .teaser-link > .container`
- `#OkpJmb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkpJmb > .teaser-link > .container > .information`
- `#OkpJmb > .teaser-link > .container > h2`
- `#OkpJmb > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Agnes Ravatn"]`
- `#\34 3qwoe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qwoe > .teaser-link > .container`
- `#V6bvW3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6bvW3 > .teaser-link > .container`
- `#\32 pGeeB > .teaser-link > .feature-container.b-lazy > .container-linear-gradient.z-index`
- `#\32 pGeeB > .teaser-link > .feature-container.b-lazy > .container-darken.z-index`
- `#K8vnB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8vnB4 > .teaser-link > .container`
- `#pBL28V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBL28V > .teaser-link > .container`
- `#Gxl8mB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxl8mB > .teaser-link > .container`
- `#j0d2bz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0d2bz > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(28) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\36 qjQb3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qjQb3 > .teaser-link > .container > h2`
- `#\36 qjQb3 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\36 qjQb3 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#M7Rrn0 > .teaser-link > .container > .text-wrapper-small`
- `#M7Rrn0 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[width="94"]`
- `#WvLVeG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLVeG > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(30) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 p0vRo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p0vRo > .teaser-link > .container > h2`
- `#QJo05q > .teaser-link > .container > .text-wrapper-small`
- `#QJo05q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e784qK > .teaser-link > .container > .text-wrapper-small`
- `#e784qK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.benefits-widget-container`
- `#\30 pndXB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pndXB > .teaser-link > .container`
- `#e78O6K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78O6K > .teaser-link > .container`
- `#wrEXqA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#wrEXqA > .teaser-link > .container`
- `#n1a2MQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1a2MQ > .teaser-link > .container`
- `#\34 3d3La > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3d3La > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(37) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#wrPm4d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPm4d > .teaser-link > .container > h2`
- `#wrPm4d > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Simen Sandelien"]`
- `#JOo4gP > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOo4gP > .teaser-link > .container > .text-wrapper-small`
- `#JOo4gP > .teaser-link > .container > .byline`
- `#L4AGOR > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4AGOR > .teaser-link > .container > .text-wrapper-small`
- `#L4AGOR > .teaser-link > .container > .byline`
- `#OkpABE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkpABE > .teaser-link > .container`
- `#\31 6n8GQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6n8GQ > .teaser-link > .container`
- `#ArdnvA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdnvA > .teaser-link > .container`
- `#xrPEPj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPEPj > .teaser-link > .container`
- `#\34 3qlzo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qlzo > .teaser-link > .container`
- `#\35 pV56E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pV56E > .teaser-link > .container`
- `#j0PR0A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0PR0A > .teaser-link > .container > .information`
- `#j0PR0A > .teaser-link > .container > .illustration-container > .text`
- `#j0PR0A > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kristin Storrusten"]`
- `#k0aqwA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0aqwA > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(46) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#k0JzPj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0JzPj > .teaser-link > .container > .illustration-container > .text`
- `#k0JzPj > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `img[alt="Russland mot alle"]`
- `#\36 qjq2e > .teaser-link > .container > .text-wrapper-small`
- `#\36 qjq2e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Igor Bondar"]`
- `#Pd9AlX > .teaser-link > .container > .text-wrapper-small`
- `#Pd9AlX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pJOxL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pJOxL > .teaser-link > .container > .information`
- `#\33 pJOxL > .teaser-link > .container > h2`
- `#\33 pJOxL > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\33 pJOxL > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#n1aKmd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1aKmd > .teaser-link > .container`
- `#K83KJy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K83KJy > .teaser-link > .container`
- `#aJwopa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJwopa > .teaser-link > .container`
- `#\35 pVAjE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pVAjE > .teaser-link > .container`
- `img[alt="Noors nettshopping-erfaringer"]`
- `#ExWx1o > .teaser-link > .container`
- `#k0Jzb6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Jzb6 > .teaser-link > .container > .information`
- `#k0Jzb6 > .teaser-link > .container > .illustration-container > .text`
- `#k0Jzb6 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#k0Jzb6 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#RjxPAO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxPAO > .teaser-link > .container`
- `#e78BBa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78BBa > .teaser-link > .container`
- `#QJo094 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJo094 > .teaser-link > .container > .information`
- `#QJo094 > .teaser-link > .container > h2`
- `#QJo094 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Terje Aasland"]`
- `img[alt="En soleklar sekser!"]`
- `#OknxgV > .teaser-link > .container`
- `#\30 pnlJ2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pnlJ2 > .teaser-link > .container`
- `#BxREV9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxREV9 > .teaser-link > .container`
- `#M7RXE0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7RXE0 > .teaser-link > .container`
- `#BxRvkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxRvkl > .teaser-link > .container`
- `#BxJPz9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxJPz9 > .teaser-link > .container`
- `#d4OLdX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4OLdX > .teaser-link > .container`
- `#k0JQWa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0JQWa > .teaser-link > .container`
- `#zOLvlO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLvlO > .teaser-link > .container > .information`
- `#zOLvlO > .teaser-link > .container > .illustration-container > .text`
- `#zOLvlO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#zOLvlO > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#JOowQP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOowQP > .teaser-link > .container`
- `#m069rL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m069rL > .teaser-link > .container`
- `#k0a8RQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0a8RQ > .teaser-link > .container`
- `#rrAnj3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrAnj3 > .teaser-link > .container`
- `#vrm1AL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrm1AL > .teaser-link > .container`
- `#y53Jeg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y53Jeg > .teaser-link > .container`
- `#wrPEnd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPEnd > .teaser-link > .container`
