# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-03-04T18:21:01.005Z
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

- `#Ok82pA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y56MdJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBQvwW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 212

#### Affected Elements:

- `#zOE1ob > .teaser-link > .teaser-image-wrapper`
- `#zOE1ob > .teaser-link > .container > .information`
- `#zOE1ob > .teaser-link > .container > h2`
- `#zOE1ob > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `#j0lMm9 > .teaser-link > .teaser-image-wrapper`
- `#j0lMm9 > .teaser-link > .container > .information`
- `#j0lMm9 > .teaser-link > .container > h2`
- `#j0lMm9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#j0lMm9 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#dr-edition-teaser-be9aqtelq > div`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
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
- `article[data-pulse-entity-id="reel-138051"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138051"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138051"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137847"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137847"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137847"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#\35 pBbqm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pBbqm > .teaser-link > .container`
- `#m0Qn0O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Qn0O > .teaser-link > .container > .information`
- `#m0Qn0O > .teaser-link > .container > h2`
- `#m0Qn0O > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kåre Aas"]`
- `#dr-edition-teaser-7904ibtrc > div`
- `#q61gv1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q61gv1 > .teaser-link > .container`
- `#QJ7KQ4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ7KQ4 > .teaser-link > .container > .information`
- `#QJ7KQ4 > .teaser-link > .container > h2`
- `#QJ7KQ4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ena Pinjo"]`
- `#d4mAdz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4mAdz > .teaser-link > .container`
- `#\39 pvPx9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pvPx9 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\39 pvPx9 > .teaser-link > .container`
- `.games-widget`
- `#oEn90g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEn90g > .teaser-link > .container`
- `#vrObaV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrObaV > .teaser-link > .container`
- `#L4lEB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4lEB4 > .teaser-link > .container`
- `#Okrw4b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okrw4b > .teaser-link > .container`
- `#dr-edition-teaser-xp5boqs63 > div`
- `.bundle-title`
- `#Ok82pA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok82pA > .teaser-link > .container > h2`
- `#y56MdJ > .teaser-link > .container > .text-wrapper-small`
- `#y56MdJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBQvwW > .teaser-link > .container > .text-wrapper-small`
- `#pBQvwW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 67QLe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 67QLe > .teaser-link > .container`
- `#L4l7kP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4l7kP > .teaser-link > .container`
- `#\30 pK7a0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pK7a0 > .teaser-link > .container`
- `#y562V2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y562V2 > .teaser-link > .container`
- `#\33 pEdbP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pEdbP > .teaser-link > .container`
- `#rrW33A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrW33A > .teaser-link > .container`
- `#wrAQLG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrAQLG > .teaser-link > .container`
- `#zOg4kO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOg4kO > .teaser-link > .container`
- `#wrALqA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrALqA > .teaser-link > .container`
- `#gk058a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk058a > .teaser-link > .container`
- `.benefits-widget-container`
- `#gk6XlA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk6XlA > .teaser-link > .container`
- `#j0znbe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0znbe > .teaser-link > .container`
- `#\33 pEMG9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pEMG9 > .teaser-link > .container`
- `#rrgRQw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrgRQw > .teaser-link > .container`
- `#K8z317 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8z317 > .teaser-link > .container`
- `img[alt="Fuck hjerteklaffen!"]`
- `#e7JwXy > .teaser-link > .container`
- `#pBQmwo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBQmwo > .teaser-link > .container`
- `#lnVkqL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnVkqL > .teaser-link > .container`
- `#\35 pBwRX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pBwRX > .teaser-link > .container`
- `#ExQggj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExQggj > .teaser-link > .container`
- `#\39 pzLqW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pzLqW > .teaser-link > .container > .information`
- `#\39 pzLqW > .teaser-link > .container > h2`
- `#\39 pzLqW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tormod Heier"]`
- `#wrALVM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrALVM > .teaser-link > .container > .information`
- `#wrALVM > .teaser-link > .container > .illustration-container > .text`
- `#wrALVM > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#d4wa91 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4wa91 > .teaser-link > .container`
- `img[alt="Kan Norge bli en narkostat?"]`
- `#d4wPaJ > .teaser-link > .container > .information`
- `#d4wPaJ > .teaser-link > .container > h2`
- `#d4wPaJ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anders Magnus"]`
- `#JOxKGj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxKGj > .teaser-link > .container > .information`
- `#JOxKGj > .teaser-link > .container > .illustration-container > .text`
- `#JOxKGj > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#Pd4erp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd4erp > .teaser-link > .container`
- `#xrgXw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrgXw8 > .teaser-link > .container > .information`
- `#xrgXw8 > .teaser-link > .container > h2`
- `#xrgXw8 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Morten Gjelten "]`
- `#QJ7KyA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ7KyA > .teaser-link > .container`
- `#\39 pzGR5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pzGR5 > .teaser-link > .container`
- `#\38 pJzPr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJzPr > .teaser-link > .container`
- `#gkEzBk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkEzBk > .teaser-link > .container`
- `#XMbJzg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMbJzg > .teaser-link > .container`
- `#k0E1QQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0E1QQ > .teaser-link > .container`
- `#\37 p6L4w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p6L4w > .teaser-link > .container`
- `#M7oqVK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7oqVK > .teaser-link > .container`
- `#zOEbrv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOEbrv > .teaser-link > .container`
- `#rrlr83 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrlr83 > .teaser-link > .container`
- `#rrlbLR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrlbLR > .teaser-link > .container`
- `#rrl8AA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrl8AA > .teaser-link > .container > .information`
- `#rrl8AA > .teaser-link > .container > h2`
- `#rrl8AA > .teaser-link > .container > .byline > div:nth-child(1)`
- `#rrl8AA > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#Ok8kWE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok8kWE > .teaser-link > .container`
- `#xrg7kj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrg7kj > .teaser-link > .container`
- `#k0Evdk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Evdk > .teaser-link > .container`
- `#q61LAO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q61LAO > .teaser-link > .container`
- `#vreA9j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vreA9j > .teaser-link > .container`
- `#\33 p4xwA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p4xwA > .teaser-link > .container`
- `#RjG4za > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjG4za > .teaser-link > .container`
- `#j0a59n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0a59n > .teaser-link > .container`
- `#m0Qe6g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Qe6g > .teaser-link > .container`
- `#q613ag > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q613ag > .teaser-link > .container`
- `#XMbaBb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMbaBb > .teaser-link > .container > .information`
- `#XMbaBb > .teaser-link > .container > .illustration-container > .text`
- `#XMbaBb > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Robert Hoftun Gjestad"]`
- `#m0Q67p > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Q67p > .teaser-link > .container`
- `#d4wGOq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4wGOq > .teaser-link > .container`
- `#\32 pBpJR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pBpJR > .teaser-link > .container`
- `#oEWwLK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEWwLK > .teaser-link > .container`
