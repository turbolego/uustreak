# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-04-23T00:44:24.852Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 7

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

- `#\32 pvGKa > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#rrMqG8 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#BxMp19 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `img[alt="Nå viser Europa muskler"]`
- `#zOlq91 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 ppnLw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6oO7l > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 222

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#vrleQj`
- `#\38 pPlL1 > .teaser-link > .teaser-image-wrapper`
- `#\38 pPlL1 > .teaser-link > .container > .information`
- `#\38 pPlL1 > .teaser-link > .container > .illustration-container > .text`
- `#\38 pPlL1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-vs2ntlgjs > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138698"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138698"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138698"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138694"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138694"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138694"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
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
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\32 pvGKa > .teaser-link > .teaser-image-wrapper`
- `#\32 pvGKa > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#d473Eo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d473Eo > .teaser-link > .teaser-image-wrapper > .series-header`
- `#d473Eo > .teaser-link > .container`
- `#gkdXoA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkdXoA > .teaser-link > .container`
- `#dr-edition-teaser-6iqatl20h > div`
- `#\37 p7o54 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7o54 > .teaser-link > .container > .information`
- `#\37 p7o54 > .teaser-link > .container > h2`
- `#\37 p7o54 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Olav Resell"]`
- `#bO8eVq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8eVq > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Nå viser Europa muskler"]`
- `#K8LBwe > .teaser-link > .container > h2`
- `#zOlq91 > .teaser-link > .container > .text-wrapper-small`
- `#zOlq91 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#\36 q4EB0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q4EB0 > .teaser-link > .container`
- `#d47qJX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47qJX > .teaser-link > .container`
- `#\30 ppadJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 ppadJ > .teaser-link > .container`
- `#n1LgPB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1LgPB > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(20) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 ppnLw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 ppnLw > .teaser-link > .container > h2`
- `#\31 6oO7l > .teaser-link > .container > .text-wrapper-small`
- `#\31 6oO7l > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e719ny > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e719ny > .teaser-link > .container`
- `#j0QnrL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0QnrL > .teaser-link > .container`
- `img[alt="Dødsfellen i Donbas"]`
- `#aJO544 > .teaser-link > .container > .information`
- `#aJO544 > .teaser-link > .container > h2`
- `#aJO544 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mykola Bielieskov"]`
- `#\35 p8ePK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p8ePK > .teaser-link > .container`
- `#\37 p7bmV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7bmV > .teaser-link > .container`
- `#pBMgqo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBMgqo > .teaser-link > .container`
- `.teaser-image[alt="– Nå er vi på den igjen, ja"][decoding="async"]`
- `#j0vGzz > .teaser-link > .container > .information`
- `#j0vGzz > .teaser-link > .container > .illustration-container > .text`
- `#j0vGzz > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[width="128"][height="128"][alt="bilde av Kjetil B. Alstadheim"]`
- `#y5zve2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5zve2 > .teaser-link > .container`
- `#ExxKkj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExxKkj > .teaser-link > .container`
- `#q6OnG0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6OnG0 > .teaser-link > .container`
- `#pB1xoX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB1xoX > .teaser-link > .container > .information`
- `#pB1xoX > .teaser-link > .container > .illustration-container > .text`
- `#pB1xoX > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#pB1xoX > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[width="88"][height="88"][alt="bilde av Kjetil B. Alstadheim"]`
- `#K8Lv1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8Lv1E > .teaser-link > .container`
- `.benefits-widget-container`
- `#BxM8mQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxM8mQ > .teaser-link > .container`
- `#Rj5xyW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj5xyW > .teaser-link > .container`
- `#\34 3On5R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3On5R > .teaser-link > .container`
- `#wrrB24 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrrB24 > .teaser-link > .container`
- `#wrdEzP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdEzP > .teaser-link > .container`
- `#zO0535 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO0535 > .teaser-link > .container`
- `#BxMovg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMovg > .teaser-link > .container > .information`
- `#BxMovg > .teaser-link > .container > h2`
- `#BxMovg > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Siri Thorsland"]`
- `img[alt="Chelsea-manageren fikk sparken"]`
- `#aJG2EL > .teaser-link > .container`
- `#Wvml4a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvml4a > .teaser-link > .container`
- `#V6xlAV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6xlAV > .teaser-link > .container`
- `#JOrPBb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOrPBb > .teaser-link > .container`
- `#\38 pPlar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pPlar > .teaser-link > .container`
- `#gkd5A9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkd5A9 > .teaser-link > .container`
- `#L4op81 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4op81 > .teaser-link > .container`
- `#zO050r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO050r > .teaser-link > .container`
- `#XM9GGW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM9GGW > .teaser-link > .container`
- `#QJrRzQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJrRzQ > .teaser-link > .container`
- `#M7Ax35 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7Ax35 > .teaser-link > .container`
- `#e7G9pK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7G9pK > .teaser-link > .container > .information`
- `#e7G9pK > .teaser-link > .container > h2`
- `#e7G9pK > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingeborg Moe"]`
- `#Arb63z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arb63z > .teaser-link > .container`
- `#QJgpjP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJgpjP > .teaser-link > .container`
- `#K8LBqX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8LBqX > .teaser-link > .container`
- `#BxM58v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxM58v > .teaser-link > .teaser-image-wrapper > .series-header`
- `#BxM58v > .teaser-link > .container`
- `#BxMokl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMokl > .teaser-link > .container`
- `#K8LB7y > .teaser-link > .container > .text-wrapper-small`
- `#K8LB7y > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkybzO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkybzO > .teaser-link > .container`
- `#d47oMJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47oMJ > .teaser-link > .container`
- `#L43gLR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L43gLR > .teaser-link > .container`
- `#\39 pk2zE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pk2zE > .teaser-link > .container`
- `#j0vP2L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vP2L > .teaser-link > .container`
- `#\37 p72dB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p72dB > .teaser-link > .container`
- `#bO8Rzv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8Rzv > .teaser-link > .container`
- `img[alt="Fotballens Jens Stoltenberg"]`
- `#\30 pB1wM > .teaser-link > .container`
- `#j0v65o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0v65o > .teaser-link > .container`
- `#V6gV51 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gV51 > .teaser-link > .container`
- `#JOrV58 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOrV58 > .teaser-link > .container`
- `#\37 p7E9V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7E9V > .teaser-link > .container`
- `#pB1j0V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB1j0V > .teaser-link > .container > .information`
- `#pB1j0V > .teaser-link > .container > .illustration-container > .text`
- `#pB1j0V > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#e7GeO9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7GeO9 > .teaser-link > .container > .information`
- `#e7GeO9 > .teaser-link > .container > h2`
- `#e7GeO9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sverre Lodgaard"]`
- `#WvgrVd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvgrVd > .teaser-link > .container`
- `#xrlKwp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrlKwp > .teaser-link > .container > .information`
- `#xrlKwp > .teaser-link > .container > h2`
- `#xrlKwp > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Håvard Syvertsen"]`
- `#oEKjP7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEKjP7 > .teaser-link > .container`
- `#OkgprA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkgprA > .teaser-link > .container`
- `#Exl3RG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exl3RG > .teaser-link > .container`
- `#oEK5wa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEK5wa > .teaser-link > .container`
- `#j0vobq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vobq > .teaser-link > .container > .information`
- `#j0vobq > .teaser-link > .container > h2`
- `#j0vobq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jon Helgheim"]`
