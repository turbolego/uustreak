# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-04-22T00:38:55.981Z
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
- **Count:** 3

#### Affected Elements:

- `#\30 pB7Q2 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#ArbjQn > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\38 pGnew > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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

- `#e7G9pK > .teaser-link > .teaser-image-wrapper`
- `#e7G9pK > .teaser-link > .container > .information`
- `#e7G9pK > .teaser-link > .container > h2`
- `#e7G9pK > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-5t6nwu815 > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#j0vGzz > .teaser-link > .teaser-image-wrapper`
- `#j0vGzz > .teaser-link > .container > .illustration-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138658"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138658"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138658"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138683"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138683"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138683"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138674"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138674"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138674"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138681"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138681"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138681"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138675"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138675"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138675"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138659"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138659"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138659"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138657"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138657"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138657"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138648"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138648"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138648"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138655"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138655"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138655"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138643"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138643"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138643"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.double.teaser-wrapper:nth-child(7)`
- `#d47oMJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47oMJ > .teaser-link > .container`
- `#OkgMXO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkgMXO > .teaser-link > .teaser-image-wrapper > .series-header`
- `#OkgMXO > .teaser-link > .container > .information`
- `#OkgMXO > .teaser-link > .container > .illustration-container > .text`
- `#OkgMXO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"][width="88"][height="88"]`
- `#L43gLR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L43gLR > .teaser-link > .container`
- `#j0v65o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0v65o > .teaser-link > .container`
- `#vgE3p4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgE3p4 > .teaser-link > .container`
- `.games-widget`
- `#rrMkk0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrMkk0 > .teaser-link > .container`
- `#\37 p62y3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p62y3 > .teaser-link > .container`
- `#\39 pkj6r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pkj6r > .teaser-link > .container`
- `#M7A7GK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7A7GK > .teaser-link > .container`
- `#oEKjP7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEKjP7 > .teaser-link > .container`
- `#bO8El5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8El5 > .teaser-link > .container`
- `#\37 p7E9V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7E9V > .teaser-link > .container`
- `#vremLX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vremLX > .teaser-link > .container`
- `#\31 6oO7l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6oO7l > .teaser-link > .container`
- `#pB1j0V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB1j0V > .teaser-link > .container > .information`
- `#pB1j0V > .teaser-link > .container > .illustration-container > .text`
- `#pB1j0V > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"][width="128"][height="128"]`
- `#j0Q460 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0Q460 > .teaser-link > .container`
- `#M7A4eo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7A4eo > .teaser-link > .container`
- `#gkEe6q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkEe6q > .teaser-link > .container`
- `#OkgprA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkgprA > .teaser-link > .container`
- `#\33 p1d80 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p1d80 > .teaser-link > .container`
- `#Exl3RG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exl3RG > .teaser-link > .container`
- `#ExlAQP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExlAQP > .teaser-link > .container`
- `.benefits-widget-container`
- `#WvgrVd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvgrVd > .teaser-link > .container`
- `#wrrwo5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrrwo5 > .teaser-link > .container`
- `#\32 pVRK4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pVRK4 > .teaser-link > .container`
- `#d47EvA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47EvA > .teaser-link > .container`
- `#GxrzxQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxrzxQ > .teaser-link > .container`
- `#xrlKwp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrlKwp > .teaser-link > .container > .information`
- `#xrlKwp > .teaser-link > .container > h2`
- `#xrlKwp > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Håvard Syvertsen"]`
- `#zOlq91 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOlq91 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(38) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\39 pk5mr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pk5mr > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\39 pk5mr > .teaser-link > .container > h2`
- `#\38 pGnew > .teaser-link > .container > .text-wrapper-small`
- `#\38 pGnew > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7GeO9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7GeO9 > .teaser-link > .container > .information`
- `#e7GeO9 > .teaser-link > .container > h2`
- `#e7GeO9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sverre Lodgaard"]`
- `#bO8ykv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8ykv > .teaser-link > .container`
- `#\30 pBPq0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pBPq0 > .teaser-link > .container`
- `#\37 p7b3v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7b3v > .teaser-link > .container > .information`
- `#\37 p7b3v > .teaser-link > .container > h2`
- `#\37 p7b3v > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Paul Thomas"]`
- `#Okgwol > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okgwol > .teaser-link > .container`
- `#Okgx3w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okgx3w > .teaser-link > .container`
- `#Okg4zE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okg4zE > .teaser-link > .container`
- `#\32 pVQXy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pVQXy > .teaser-link > .container`
- `#m0KAL0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0KAL0 > .teaser-link > .container`
- `#M7Az8m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7Az8m > .teaser-link > .container`
- `#j0vobq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vobq > .teaser-link > .container > .information`
- `#j0vobq > .teaser-link > .container > h2`
- `#j0vobq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jon Helgheim"]`
- `#aJOEE5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJOEE5 > .teaser-link > .container`
- `#\33 p1vyA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p1vyA > .teaser-link > .container`
- `#wr3abP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr3abP > .teaser-link > .container`
- `#Arr3BA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arr3BA > .teaser-link > .container`
- `#n19d0L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n19d0L > .teaser-link > .container`
- `#ExlVba > .teaser-link > .container > .text-wrapper-small`
- `#ExlVba > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvgrqK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvgrqK > .teaser-link > .container > .information`
- `#WvgrqK > .teaser-link > .container > h2`
- `#WvgrqK > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Grøndahl"]`
- `#\30 pBm7A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pBm7A > .teaser-link > .container`
- `#zOl3Bb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOl3Bb > .teaser-link > .container`
- `#rrMKkA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrMKkA > .teaser-link > .container`
- `#\34 3OPBV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3OPBV > .teaser-link > .container`
- `#GxrVEq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxrVEq > .teaser-link > .container > .information`
- `#GxrVEq > .teaser-link > .container > h2`
- `#GxrVEq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Hege Bellika Hansen"]`
- `#Okgmvb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okgmvb > .teaser-link > .container > .information`
- `#Okgmvb > .teaser-link > .container > .illustration-container > .text`
- `#Okgmvb > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#\38 pG2ld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pG2ld > .teaser-link > .container > .information`
- `#\38 pG2ld > .teaser-link > .container > h2`
- `#\38 pG2ld > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Tjærnås"]`
- `#zOlm7b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOlm7b > .teaser-link > .container > .information`
- `#zOlm7b > .teaser-link > .container > h2`
- `#zOlm7b > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristin Blaker"]`
- `img[alt="«Strenge-Kari» slår til igjen"]`
- `#JOrbP4 > .teaser-link > .container > .information`
- `#JOrbP4 > .teaser-link > .container > .illustration-container > .text`
- `#JOrbP4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#JOrbP4 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > .author-image[width="88"][height="88"]`
- `#oEK5wa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEK5wa > .teaser-link > .container`
- `#BxM8mQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxM8mQ > .teaser-link > .container`
- `#d47A7w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47A7w > .teaser-link > .container`
- `#gkdqyJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkdqyJ > .teaser-link > .container`
- `#gkdGlL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkdGlL > .teaser-link > .container`
- `#e7GVpa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7GVpa > .teaser-link > .container`
- `#WvgyOQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvgyOQ > .teaser-link > .teaser-image-wrapper > .series-header`
- `#WvgyOQ > .teaser-link > .container > .information`
- `#WvgyOQ > .teaser-link > .container > .illustration-container > .text`
- `#WvgyOQ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"][width="128"][height="128"]`
- `#ArbKen > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArbKen > .teaser-link > .container`
- `#Okg0LV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okg0LV > .teaser-link > .container > .information`
- `#Okg0LV > .teaser-link > .container > h2`
- `#Okg0LV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Geir Kjell Andersland"]`
- `#\38 pG21d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pG21d > .teaser-link > .container`
- `#\39 pk7PW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pk7PW > .teaser-link > .container`
- `#wr3PKM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr3PKM > .teaser-link > .container`
- `#Rj5dwa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj5dwa > .teaser-link > .container > .information`
- `#Rj5dwa > .teaser-link > .container > h2`
- `#Rj5dwa > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anders Helliksen"]`
