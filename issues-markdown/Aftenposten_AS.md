# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-12T14:23:23.473Z
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

- `.teaser-image[alt="Siktet for nye lovbrudd"][decoding="async"]`
- `#\30 pjedB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pkn8X > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yMWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEA3Pj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrAo4K > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 236

#### Affected Elements:

- `.top-fullwidth`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.double.teaser-wrapper:nth-child(3)`
- `#j0BdXb > .teaser-link > .teaser-image-wrapper`
- `#j0BdXb > .teaser-link > .container > .information`
- `#j0BdXb > .teaser-link > .container > .illustration-container > .text`
- `#j0BdXb > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137378"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137378"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137378"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137370"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137362"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137362"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137362"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137358"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137358"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137358"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137356"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137356"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137356"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137343"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137343"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137343"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137132"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137132"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137132"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137322"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137322"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137322"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137321"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137321"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137321"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137319"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137319"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137319"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#lnE32y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnE32y > .teaser-link > .container`
- `#dr-edition-teaser-tyrz2u3la > div`
- `.feed-item[data-pulse-entity-id="16B6bX"][data-pulse-source="oppsummert-widget"] > .oppsummert-overlay-wrapper`
- `.feed-item[data-pulse-entity-id="rrLkg0"][data-pulse-source="oppsummert-widget"] > .oppsummert-overlay-wrapper`
- `.feed-item[data-pulse-entity-id="y5REeR"][data-pulse-source="oppsummert-widget"] > .oppsummert-overlay-wrapper`
- `#WvLb1j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLb1j > .teaser-link > .container`
- `#M73705 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M73705 > .teaser-link > .container`
- `#\36 qzjz3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qzjz3 > .teaser-link > .container`
- `#BxlWO9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxlWO9 > .teaser-link > .container`
- `.games-widget`
- `#KMO1P6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMO1P6 > .teaser-link > .container`
- `#e78rPM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78rPM > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(18) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `.teaser-image[alt="Siktet for nye lovbrudd"][decoding="async"]`
- `article[data-timestamp="2026-01-12T09:40:33Z"] > .teaser-link > .container > h2`
- `#\30 pjedB > .teaser-link > .container > .text-wrapper-small`
- `#\30 pjedB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pndXB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pndXB > .teaser-link > .container`
- `#gkWaPk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkWaPk > .teaser-link > .container`
- `#JOo06P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOo06P > .teaser-link > .container`
- `#d4lwrz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4lwrz > .teaser-link > .container`
- `#JbPbQb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPbQb > .teaser-link > .container`
- `#wrer5o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrer5o > .teaser-link > .container`
- `#ArdgLj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdgLj > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(28) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#vrAevj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrAevj > .teaser-link > .container > .illustration-container > .text`
- `#vrAevj > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil Rolness"]`
- `#OkQbb1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQbb1 > .teaser-link > .container > .text-wrapper-small`
- `#OkQbb1 > .teaser-link > .container > .byline`
- `#V6qR04 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6qR04 > .teaser-link > .container > .illustration-container > .text`
- `#V6qR04 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Maryam Iqbal Tahir"]`
- `.series-location.teaser-bundle.new-bundles > .bundle-title`
- `#k0RwQ6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0RwQ6 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#k0RwQ6 > .teaser-link > .container > h2`
- `#\33 pkn8X > .teaser-link > .container > .text-wrapper-small`
- `#\33 pkn8X > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQgqq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQgqq > .teaser-link > .container`
- `.benefits-widget-container`
- `#\33 pk7ld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pk7ld > .teaser-link > .container`
- `.container-linear-gradient`
- `.container-darken`
- `img[alt="Kostrådene er helt feil skurk"]`
- `#Ard1A5 > .teaser-link > .container > .information`
- `#Ard1A5 > .teaser-link > .container > h2`
- `#Ard1A5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Hanne-Lene Dahlgren"]`
- `#bm3Bb5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3Bb5 > .teaser-link > .container`
- `#XM8jon > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM8jon > .teaser-link > .container`
- `#vrQzEm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrQzEm > .teaser-link > .container`
- `article[data-timestamp="2026-01-12T10:11:08Z"] > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `article[data-timestamp="2026-01-12T10:11:08Z"] > .teaser-link > .teaser-image-wrapper > .series-header`
- `article[data-timestamp="2026-01-12T10:11:08Z"] > .teaser-link > .container`
- `#\37 plrpK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plrpK > .teaser-link > .container > .information`
- `#\37 plrpK > .teaser-link > .container > .illustration-container > .text`
- `#\37 plrpK > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#\38 p6pJx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p6pJx > .teaser-link > .container`
- `img[alt="Se og Hør-sjefen slutter"]`
- `article[data-timestamp="2026-01-12T09:48:02Z"] > .teaser-link > .container`
- `#\30 pKV3B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pKV3B > .teaser-link > .container`
- `#bOnmWv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOnmWv > .teaser-link > .container`
- `#\33 pJ8WM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pJ8WM > .teaser-link > .container`
- `#\38 p6pQx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p6pQx > .teaser-link > .container`
- `#Ard8W5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ard8W5 > .teaser-link > .container > .information`
- `#Ard8W5 > .teaser-link > .container > h2`
- `#Ard8W5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristin Clemet"]`
- `#XM89lm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM89lm > .teaser-link > .container`
- `#QJodjA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJodjA > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(50) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#K8yMWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8yMWX > .teaser-link > .container > h2`
- `#oEA3Pj > .teaser-link > .container > .text-wrapper-small`
- `#oEA3Pj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrAo4K > .teaser-link > .container > .text-wrapper-small`
- `#rrAo4K > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5R5Rr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5R5Rr > .teaser-link > .container`
- `#e7KJma > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7KJma > .teaser-link > .container`
- `#\32 pd8La > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pd8La > .teaser-link > .container`
- `#RjRVQd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjRVQd > .teaser-link > .container`
- `#ArdeqE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdeqE > .teaser-link > .container`
- `#Rj9GEx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj9GEx > .teaser-link > .container`
- `#\31 6Bn3e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6Bn3e > .teaser-link > .container > .information`
- `#\31 6Bn3e > .teaser-link > .container > h2`
- `#\31 6Bn3e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jøran Hjelmesæth"]`
- `#JOojd7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOojd7 > .teaser-link > .container > .information`
- `#JOojd7 > .teaser-link > .container > h2`
- `#JOojd7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Morten Bøås"]`
- `#OkQp3O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkQp3O > .teaser-link > .container`
- `#M7Rx00 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7Rx00 > .teaser-link > .container > .information`
- `#M7Rx00 > .teaser-link > .container > h2`
- `#M7Rx00 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nikolai Astrup"]`
- `#q6ALPz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6ALPz > .teaser-link > .container > .information`
- `#q6ALPz > .teaser-link > .container > .illustration-container > .text`
- `#q6ALPz > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#L4AK01 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4AK01 > .teaser-link > .container > .information`
- `#L4AK01 > .teaser-link > .container > h2`
- `#L4AK01 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Gulbrandsen"]`
- `#Gxa36l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxa36l > .teaser-link > .container`
- `#Expw7A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Expw7A > .teaser-link > .container`
- `#vrmRx4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrmRx4 > .teaser-link > .container`
- `#zOGo21 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOGo21 > .teaser-link > .container`
- `#n1anbL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1anbL > .teaser-link > .container`
- `#V6bynW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6bynW > .teaser-link > .container > .information`
- `#V6bynW > .teaser-link > .container > .illustration-container > .text`
- `#V6bynW > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#GxaGaJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxaGaJ > .teaser-link > .container`
- `#ExW6gG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExW6gG > .teaser-link > .container`
- `#JO1G5P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1G5P > .teaser-link > .container > .information`
- `#JO1G5P > .teaser-link > .container > .illustration-container > .text`
- `#JO1G5P > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#Jbz1bP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Jbz1bP > .teaser-link > .container`
- `#WvbG5a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvbG5a > .teaser-link > .container > .information`
- `#WvbG5a > .teaser-link > .container > h2`
- `#WvbG5a > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Silvija Seres"]`
- `#ExpweG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExpweG > .teaser-link > .container`
- `#lng63G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lng63G > .teaser-link > .container`
- `#M733OE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M733OE > .teaser-link > .container`
- `#QJoG6q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJoG6q > .teaser-link > .container`
- `#XM882b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM882b > .teaser-link > .container`
- `#\38 pwoRr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pwoRr > .teaser-link > .container`
- `#k0J1d6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0J1d6 > .teaser-link > .container`
- `#y5RR0a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5RR0a > .teaser-link > .container`
