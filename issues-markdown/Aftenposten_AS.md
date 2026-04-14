# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-04-14T00:40:19.079Z
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

- `#e7G6WQ > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#QJg94q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\30 pprVA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6MOdQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMJLE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- `#bO8z1g > .teaser-link > .teaser-image-wrapper`
- `#bO8z1g > .teaser-link > .container > .information`
- `#bO8z1g > .teaser-link > .container > .illustration-container > .text`
- `#bO8z1g > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `#pB1Blj > .teaser-link > .teaser-image-wrapper`
- `#pB1Blj > .teaser-link > .container > .information`
- `#pB1Blj > .teaser-link > .container > h2`
- `#pB1Blj > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Gustav Hårtveit"]`
- `#\37 p7j24`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
- `._preview_12jab_666[data-pulse-entity-id="reel-138567"][data-pulse-position-in-bundle="1"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666[data-pulse-entity-id="reel-138567"][data-pulse-position-in-bundle="1"] > a > ._preview-duration_1abgb_389`
- `._preview_12jab_666[data-pulse-entity-id="reel-138567"][data-pulse-position-in-bundle="1"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138592"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138592"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138592"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138594"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138594"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138594"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138133"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138133"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138133"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138565"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138565"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138565"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `._preview_12jab_666[data-pulse-entity-id="reel-138567"][data-pulse-position-in-bundle="6"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `._preview_12jab_666[data-pulse-entity-id="reel-138567"][data-pulse-position-in-bundle="6"] > a > ._preview-duration_1abgb_389`
- `._preview_12jab_666[data-pulse-entity-id="reel-138567"][data-pulse-position-in-bundle="6"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138564"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138564"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138564"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138563"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138563"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138563"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138550"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138550"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138550"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138530"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138530"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138530"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#e7G6WQ > .teaser-link > .teaser-image-wrapper`
- `#e7G6WQ > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#\34 3OW2E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3OW2E > .teaser-link > .container`
- `#d47G9j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47G9j > .teaser-link > .container`
- `#\30 pB36A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pB36A > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(12) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\38 pGRaW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pGRaW > .teaser-link > .container > h2`
- `#\38 pGRaW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Peder Nyeggen"]`
- `#\30 pprVA > .teaser-link > .container > .text-wrapper-small`
- `#\30 pprVA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJJW1V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJJW1V > .teaser-link > .container`
- `#d47LMA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47LMA > .teaser-link > .container`
- `.games-widget`
- `#aJlJPO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJlJPO > .teaser-link > .container`
- `#rrM92A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrM92A > .teaser-link > .container`
- `#\31 6M5WG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6M5WG > .teaser-link > .container`
- `#\30 pB3RM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pB3RM > .teaser-link > .container > .information`
- `#\30 pB3RM > .teaser-link > .container > .illustration-container > .text`
- `#\30 pB3RM > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#\30 pGw3E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGw3E > .teaser-link > .container`
- `#pB19gR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB19gR > .teaser-link > .container`
- `.teaser-image[alt="Hårreisende fra Støre"][decoding="async"]`
- `#pB1KPW > .teaser-link > .container`
- `#M7oAdR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7oAdR > .teaser-link > .container`
- `#oEK1rj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEK1rj > .teaser-link > .container`
- `#q6yvJL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6yvJL > .teaser-link > .container`
- `#Pd4xj7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd4xj7 > .teaser-link > .container`
- `#\38 pp53Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pp53Q > .teaser-link > .container`
- `#d47OBJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47OBJ > .teaser-link > .container`
- `#d47qJX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47qJX > .teaser-link > .container`
- `#ExQW0A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExQW0A > .teaser-link > .teaser-image-wrapper > .series-header`
- `#ExQW0A > .teaser-link > .container`
- `#k0vdkQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0vdkQ > .teaser-link > .container`
- `#Okgg9q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okgg9q > .teaser-link > .container`
- `.benefits-widget-container`
- `#zOlOm4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOlOm4 > .teaser-link > .container`
- `#\38 ppPzW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 ppPzW > .teaser-link > .container`
- `#\34 3OWjg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3OWjg > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(34) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\31 6MOdQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6MOdQ > .teaser-link > .container > h2`
- `#BxMJLE > .teaser-link > .container > .text-wrapper-small`
- `#BxMJLE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47M8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47M8o > .teaser-link > .container > .information`
- `#d47M8o > .teaser-link > .container > h2`
- `#d47M8o > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Aleksander Stokkebø"]`
- `#\30 pB3lJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pB3lJ > .teaser-link > .container`
- `#M7A75o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7A75o > .teaser-link > .container > .information`
- `#M7A75o > .teaser-link > .container > h2`
- `#M7A75o > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Astrid Hauge Rambøl"]`
- `#k0vmaX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0vmaX > .teaser-link > .container`
- `#QJg9v4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJg9v4 > .teaser-link > .container`
- `#bO8qoe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8qoe > .teaser-link > .container`
- `#Wvg7yj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvg7yj > .teaser-link > .container > .information`
- `#Wvg7yj > .teaser-link > .container > .illustration-container > .text`
- `#Wvg7yj > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"][width="128"][height="128"]`
- `#wr3Om4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr3Om4 > .teaser-link > .container`
- `#m0K30O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0K30O > .teaser-link > .container`
- `#e7GE59 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7GE59 > .teaser-link > .container`
- `#OkgWkq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkgWkq > .teaser-link > .container`
- `#\37 p7qLo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7qLo > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\37 p7qLo > .teaser-link > .container > .information`
- `#\37 p7qLo > .teaser-link > .container > h2`
- `#\37 p7qLo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#Pdgy86 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdgy86 > .teaser-link > .container > .information`
- `#Pdgy86 > .teaser-link > .container > h2`
- `#Pdgy86 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Inga Strümke"]`
- `#vrlw9V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrlw9V > .teaser-link > .container`
- `#wr3OR5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr3OR5 > .teaser-link > .container`
- `#Pdr6rR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdr6rR > .teaser-link > .container`
- `#XM9MzE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM9MzE > .teaser-link > .container > .information`
- `#XM9MzE > .teaser-link > .container > h2`
- `#XM9MzE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marit Stafseth"]`
- `#\38 pp1kx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pp1kx > .teaser-link > .container`
- `#L4lbOQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4lbOQ > .teaser-link > .container`
- `#zOlAmr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOlAmr > .teaser-link > .container`
- `#zOl46q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOl46q > .teaser-link > .container`
- `img[alt="Briljerer i bok om eget liv "]`
- `#e7MQGO > .teaser-link > .container`
- `#m0KrB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0KrB4 > .teaser-link > .container > .information`
- `#m0KrB4 > .teaser-link > .container > h2`
- `#m0KrB4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bernt Hagtvet"]`
- `#\38 pGwkG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pGwkG > .teaser-link > .container`
- `#\31 66LVM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 66LVM > .teaser-link > .container`
- `#JOrx6R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOrx6R > .teaser-link > .container`
- `#lnK40L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnK40L > .teaser-link > .container`
- `#d47v4A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47v4A > .teaser-link > .container`
- `#d47RoB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47RoB > .teaser-link > .container > .information`
- `#d47RoB > .teaser-link > .container > .illustration-container > .text`
- `#d47RoB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#\38 pG5k2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pG5k2 > .teaser-link > .container`
- `#Rj5xyW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj5xyW > .teaser-link > .container`
- `#lnnB7A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnnB7A > .teaser-link > .container`
- `#\32 pVvlv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pVvlv > .teaser-link > .container`
- `#V664mW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V664mW > .teaser-link > .container`
- `#M7A1WJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7A1WJ > .teaser-link > .container > .information`
- `#M7A1WJ > .teaser-link > .container > .illustration-container > .text`
- `#M7A1WJ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Knut Olav Åmås"]`
- `#\35 p8E5z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p8E5z > .teaser-link > .container`
- `#JOrry4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOrry4 > .teaser-link > .container`
- `#bO8Opv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8Opv > .teaser-link > .teaser-image-wrapper > .series-header`
- `#bO8Opv > .teaser-link > .container`
- `#\38 pGG21 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pGG21 > .teaser-link > .container`
- `#pBBzxG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBBzxG > .teaser-link > .container`
- `#QJJQ6W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJJQ6W > .teaser-link > .container`
