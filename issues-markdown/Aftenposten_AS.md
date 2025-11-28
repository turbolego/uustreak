# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-28T00:23:40.634Z
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

- `#zO5xpr > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#e7WXB9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7WvVa > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pnmJ9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwBXg7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 237

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-beeu443f > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#zO5xpr > .teaser-link > .teaser-image-wrapper`
- `#zO5xpr > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136895"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136895"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136895"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136881"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136881"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136881"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136824"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136824"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136824"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136701"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136701"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136701"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-133059"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-133059"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-133059"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136823"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136823"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136823"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136825"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136825"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136825"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136807"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136807"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136807"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136789"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136789"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136789"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#OoG4jk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG4jk > .teaser-link > .container`
- `#dr-edition-teaser-3zyb0c91t > div`
- `#Av8l1n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8l1n > .teaser-link > .container`
- `#vgEWVp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgEWVp > .teaser-link > .container > .information`
- `#vgEWVp > .teaser-link > .container > .illustration-container > .text`
- `#vgEWVp > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#\34 3jX2G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jX2G > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(14) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#e7WXB9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7WXB9 > .teaser-link > .container > h2`
- `#e7WvVa > .teaser-link > .container > .text-wrapper-small`
- `#e7WvVa > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pnmJ9 > .teaser-link > .container > .text-wrapper-small`
- `#\37 pnmJ9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#JbVxXP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbVxXP > .teaser-link > .container`
- `#wr6gJ5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr6gJ5 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(19) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\34 3jQrE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jQrE > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\34 3jQrE > .teaser-link > .container > h2`
- `#lwBXg7 > .teaser-link > .container > .text-wrapper-small`
- `#lwBXg7 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMO1P6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMO1P6 > .teaser-link > .container`
- `#k0Wd3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Wd3X > .teaser-link > .container`
- `#zO5ej9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO5ej9 > .teaser-link > .container`
- `#\34 Bnok9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 Bnok9 > .teaser-link > .container`
- `#lngWoM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lngWoM > .teaser-link > .container`
- `#XjGqvo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjGqvo > .teaser-link > .container`
- `#j09lmq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j09lmq > .teaser-link > .container`
- `#k0WbJj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0WbJj > .teaser-link > .container > .information`
- `#k0WbJj > .teaser-link > .container > h2`
- `#k0WbJj > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jon Helgheim"]`
- `#o3JlJj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JlJj > .teaser-link > .container`
- `#m0gExp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gExp > .teaser-link > .container`
- `#gkaBjJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkaBjJ > .teaser-link > .container`
- `.benefits-widget-container`
- `#\31 6Prdl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6Prdl > .teaser-link > .container`
- `#\34 3jo1e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jo1e > .teaser-link > .container`
- `#\39 plpyp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 plpyp > .teaser-link > .container`
- `#JbVx46 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbVx46 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#JbVx46 > .teaser-link > .container`
- `#zARz8w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARz8w > .teaser-link > .container`
- `#Eydk5P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Eydk5P > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Eydk5P > .teaser-link > .container`
- `#Xjx3zg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Xjx3zg > .teaser-link > .container`
- `#xmGEBj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGEBj > .teaser-link > .container`
- `#\38 plodd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 plodd > .teaser-link > .container`
- `#aJ1B0d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ1B0d > .teaser-link > .container`
- `#V6l2pV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6l2pV > .teaser-link > .container`
- `#kwq2KX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwq2KX > .teaser-link > .container > .information`
- `#kwq2KX > .teaser-link > .container > h2`
- `#kwq2KX > .teaser-link > .container > .byline > div:nth-child(1)`
- `#kwq2KX > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#m0gajp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gajp > .teaser-link > .container > .information`
- `#m0gajp > .teaser-link > .container > h2`
- `#m0gajp > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jørgen Flor"]`
- `#Ex4XPK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ex4XPK > .teaser-link > .container`
- `#GyvLE9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyvLE9 > .teaser-link > .container > .information`
- `#GyvLE9 > .teaser-link > .container > .illustration-container > .text`
- `#GyvLE9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#Rjb4y5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjb4y5 > .teaser-link > .container`
- `#rrpG58 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrpG58 > .teaser-link > .container`
- `#\30 pjzRJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjzRJ > .teaser-link > .container > .information`
- `#\30 pjzRJ > .teaser-link > .container > h2`
- `#\30 pjzRJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Håkon Ryvarden Hübert"]`
- `#wr6p6M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr6p6M > .teaser-link > .container`
- `#d45BX1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45BX1 > .teaser-link > .container`
- `#\33 pk7Mq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pk7Mq > .teaser-link > .container`
- `#q6prqo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6prqo > .teaser-link > .container`
- `#aJ1OKM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ1OKM > .teaser-link > .container`
- `#m0gEWp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gEWp > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(55)`
- `#Gxl86m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxl86m > .teaser-link > .container > .information`
- `#Gxl86m > .teaser-link > .container > .kicker`
- `#Gxl86m > .teaser-link > .container > h2`
- `#Gxl86m > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Terje Aasland"]`
- `#V6loMV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6loMV > .teaser-link > .container`
- `#j0917n > .teaser-link > .container > .text-wrapper-small`
- `#j0917n > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWwwR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.information__e24`
- `#JOWwwR > .teaser-link > .container > h2`
- `#JOWwwR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Torbjørn Røe Isaksen"]`
- `img[alt="Det står om livet, folkens"]`
- `#vrWz24 > .teaser-link > .container > .information`
- `#vrWz24 > .teaser-link > .container > .illustration-container > .text`
- `#vrWz24 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#y51y8A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y51y8A > .teaser-link > .container > .information`
- `#y51y8A > .teaser-link > .container > h2`
- `#y51y8A > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mikael Scott Bjerkeli"]`
- `#XMl3OB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMl3OB > .teaser-link > .container`
- `#n1Rr6n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Rr6n > .teaser-link > .container`
- `#RjbzW2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjbzW2 > .teaser-link > .container`
- `#zO5z1w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO5z1w > .teaser-link > .container`
- `#Rjb8M5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjb8M5 > .teaser-link > .container`
- `#Rjbn2J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rjbn2J > .teaser-link > .container`
- `#bOMd0B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOMd0B > .teaser-link > .container > .information`
- `#bOMd0B > .teaser-link > .container > .illustration-container > .text`
- `#bOMd0B > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#zO5k0v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO5k0v > .teaser-link > .container`
- `#\37 pnBow > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pnBow > .teaser-link > .container > .information`
- `#\37 pnBow > .teaser-link > .container > h2`
- `#\37 pnBow > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#lngMK3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lngMK3 > .teaser-link > .container`
- `#j09Ma9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j09Ma9 > .teaser-link > .container`
- `#GyRQ6J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyRQ6J > .teaser-link > .container`
- `#K8Blb5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8Blb5 > .teaser-link > .container > .information`
- `#K8Blb5 > .teaser-link > .container > h2`
- `#K8Blb5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Astri Aas-Hansen"]`
- `#lngLw3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lngLw3 > .teaser-link > .container > .information`
- `#lngLw3 > .teaser-link > .container > h2`
- `#lngLw3 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#lngLw3 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#j09K5z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j09K5z > .teaser-link > .container > .information`
- `#j09K5z > .teaser-link > .container > h2`
- `#j09K5z > .teaser-link > .container > .byline > div:nth-child(1)`
- `#j09K5z > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#BxVnrg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxVnrg > .teaser-link > .container`
- `#\31 6Pr0W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6Pr0W > .teaser-link > .container`
- `#JOWp4R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWp4R > .teaser-link > .container`
- `#m0gyKv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gyKv > .teaser-link > .container`
