# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-01-04T00:29:46.379Z
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
- **Count:** 14

#### Affected Elements:

- `#Ardwzx > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#d4O10A > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#zOGJ21 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#WvbKBr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.teaser-image[alt="Ble pågrepet på soverommet"][decoding="async"]`
- `#rrAjGl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPj01 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd9AlX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOoA9R > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPjmG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8vnB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5vvPE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOGjRw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6bw4J > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 227

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(2) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Ardwzx > .teaser-link > .teaser-image-wrapper`
- `#Ardwzx > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(2) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-wsvduo4c1 > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#JOo4gP > .teaser-link > .teaser-image-wrapper`
- `#JOo4gP > .teaser-link > .container > .kicker`
- `#JOo4gP > .teaser-link > .container > h2`
- `#JOo4gP > .teaser-link > .container > .byline`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
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
- `#M7Rrn0 > .teaser-link > .teaser-image-wrapper`
- `#M7Rrn0 > .teaser-link > .container > .information`
- `#M7Rrn0 > .teaser-link > .container > h2`
- `#M7Rrn0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#M7Rrn0 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#W04EKG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W04EKG > .teaser-link > .container`
- `#WvbJWr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvbJWr > .teaser-link > .container`
- `.container-linear-gradient`
- `.container-darken`
- `#xrPEPj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPEPj > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#WvbKBr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvbKBr > .teaser-link > .container > h2`
- `#ExWARj > .teaser-link > .container > .text-wrapper-small`
- `.teaser-image[alt="Ble pågrepet på soverommet"][decoding="async"]`
- `#rrAjGl > .teaser-link > .container > .text-wrapper-small`
- `#rrAjGl > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPj01 > .teaser-link > .container > .text-wrapper-small`
- `#wrPj01 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(17) > .teaser-bundle.new-bundles.desktop > .bundle-title`
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
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(18) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `.teaser-image[alt="Trump har mistet alle skrupler"][decoding="async"]`
- `#\30 pnAqg > .teaser-link > .container > .illustration-container > .text`
- `#\30 pnAqg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#JOoA9R > .teaser-link > .container > .text-wrapper-small`
- `#JOoA9R > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPjmG > .teaser-link > .container > .text-wrapper-small`
- `#wrPjmG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdgLj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArdgLj > .teaser-link > .container`
- `#wrEXqA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#wrEXqA > .teaser-link > .container`
- `#xrPjnV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPjnV > .teaser-link > .container`
- `.magazine.teaser-bundle.new-bundles > .bundle-title`
- `#K8vnB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8vnB4 > .teaser-link > .container > h2`
- `#y5vvPE > .teaser-link > .container > .text-wrapper-small`
- `#y5vvPE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qlzo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qlzo > .teaser-link > .container`
- `#j0PR0A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0PR0A > .teaser-link > .container > .information`
- `#j0PR0A > .teaser-link > .container > .illustration-container > .text`
- `#j0PR0A > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kristin Storrusten"]`
- `#OkpABE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkpABE > .teaser-link > .container`
- `#k0aqwA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0aqwA > .teaser-link > .container`
- `#WvLVeG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLVeG > .teaser-link > .container`
- `#\35 pV56E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pV56E > .teaser-link > .container`
- `#BxRmpw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxRmpw > .teaser-link > .container`
- `.benefits-widget-container`
- `#Pd3WQR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd3WQR > .teaser-link > .container`
- `#k0J0e9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0J0e9 > .teaser-link > .container`
- `#\33 pJOxL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pJOxL > .teaser-link > .container > .information`
- `#\33 pJOxL > .teaser-link > .container > h2`
- `#\33 pJOxL > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\33 pJOxL > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#xrPlXG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPlXG > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(36)`
- `#wgMexG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMexG > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(38) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#zOGjRw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOGjRw > .teaser-link > .container > h2`
- `#V6bw4J > .teaser-link > .container > .text-wrapper-small`
- `#V6bw4J > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJo05q > .teaser-link > .container > .text-wrapper-small`
- `#QJo05q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBLe9G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBLe9G > .teaser-link > .container`
- `#gk7ep9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk7ep9 > .teaser-link > .container`
- `#\32 pGA4a > .teaser-link > .container > .text-wrapper-small`
- `#\32 pGA4a > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExWE9a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExWE9a > .teaser-link > .container`
- `img[alt="Noors nettshopping-erfaringer"]`
- `#ExWx1o > .teaser-link > .container`
- `#n1aKmd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1aKmd > .teaser-link > .container`
- `#\35 pVAjE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pVAjE > .teaser-link > .container`
- `#k0Jzb6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Jzb6 > .teaser-link > .container > .information`
- `#k0Jzb6 > .teaser-link > .container > .illustration-container > .text`
- `#k0Jzb6 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#k0Jzb6 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#aJwopa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJwopa > .teaser-link > .container`
- `img[alt="En soleklar sekser!"]`
- `#OknxgV > .teaser-link > .container`
- `#QJo094 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJo094 > .teaser-link > .container > .information`
- `#QJo094 > .teaser-link > .container > h2`
- `#QJo094 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Terje Aasland"]`
- `#K83KJy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K83KJy > .teaser-link > .container`
- `#e78BBa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78BBa > .teaser-link > .container`
- `#BxREV9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxREV9 > .teaser-link > .container`
- `#\37 p0gM4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p0gM4 > .teaser-link > .container`
- `#m069rL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m069rL > .teaser-link > .container`
- `#JOowQP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOowQP > .teaser-link > .container`
- `#\30 pnlJ2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pnlJ2 > .teaser-link > .container`
- `#Pd9L2e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd9L2e > .teaser-link > .container`
- `#Okpe5l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okpe5l > .teaser-link > .container > .information`
- `#Okpe5l > .teaser-link > .container > h2`
- `#Okpe5l > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Omid Mirmotahari"]`
- `#RjxPAO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxPAO > .teaser-link > .container`
- `#\34 3qgoE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qgoE > .teaser-link > .container`
- `#e787g9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e787g9 > .teaser-link > .container > .information`
- `#e787g9 > .teaser-link > .container > h2`
- `#e787g9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mikael Scott Bjerkeli"]`
- `#\35 p0pqm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p0pqm > .teaser-link > .container`
- `#q6pEVo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6pEVo > .teaser-link > .container`
- `#Okp2Rl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okp2Rl > .teaser-link > .container`
- `#k0a4gX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0a4gX > .teaser-link > .container`
- `#zOGOer > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOGOer > .teaser-link > .container`
- `#L4AB0V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4AB0V > .teaser-link > .container`
- `#zOLvlO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOLvlO > .teaser-link > .container > .information`
- `#zOLvlO > .teaser-link > .container > .illustration-container > .text`
- `#zOLvlO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#zOLvlO > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `img[alt="Hun er årets nyttårsbarn"]`
- `#L4ABE1 > .teaser-link > .container`
- `#\33 pk7ld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pk7ld > .teaser-link > .container`
- `#aJw0aA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJw0aA > .teaser-link > .container`
- `#M7g2j0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7g2j0 > .teaser-link > .container`
- `#wrEWEL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEWEL > .teaser-link > .container`
- `#m062Oq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m062Oq > .teaser-link > .container`
- `#y53Jeg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y53Jeg > .teaser-link > .container`
