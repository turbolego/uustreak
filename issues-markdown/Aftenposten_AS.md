# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-04T00:32:23.883Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 6

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `img[srcset=""]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 2

#### Affected Elements:

- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#LMvvVq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 222

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-xs3zk46oy > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Gyzv7Q > .teaser-link > .teaser-image-wrapper`
- `#Gyzv7Q > .teaser-link > .container > .illustration-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136373"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136373"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136373"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136409"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136409"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136409"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136352"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136352"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136352"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136405"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136405"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136405"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136383"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136383"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136383"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136377"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136377"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136377"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#OoLQqE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLQqE > .teaser-link > .container`
- `#lw7Lye > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7Lye > .teaser-link > .container`
- `#dr-edition-teaser-fzczi33tw > div`
- `#\34 B6PJV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6PJV > .teaser-link > .container`
- `#lw70bL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw70bL > .teaser-link > .container`
- `#\31 MQkjq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MQkjq > .teaser-link > .container`
- `#\35 EAMGb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAMGb > .teaser-link > .container`
- `.games-widget`
- `#mPGX34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGX34 > .teaser-link > .container`
- `#vgvBoj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvBoj > .teaser-link > .container`
- `#vg4dE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .container`
- `#nykgOQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nykgOQ > .teaser-link > .container`
- `#VzWopr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzWopr > .teaser-link > .container`
- `#Ey04l3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey04l3 > .teaser-link > .container`
- `#KMo53G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMo53G > .teaser-link > .container`
- `img[alt="Har Støre tjenere?"]`
- `#QMnjQA > .teaser-link > .container > .information`
- `#QMnjQA > .teaser-link > .container > h2`
- `#QMnjQA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Helene Uri"]`
- `#OoLm8O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLm8O > .teaser-link > .container`
- `.teaser-image[alt="For en vits dette ble"][decoding="async"]`
- `#\36 3pApL > .teaser-link > .container > .information`
- `#\36 3pApL > .teaser-link > .container > .illustration-container > .text`
- `#\36 3pApL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#yEevEa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEevEa > .teaser-link > .container`
- `#\35 E1MBO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1MBO > .teaser-link > .container`
- `#\38 qblqG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qblqG > .teaser-link > .container`
- `#\37 3WmvV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3WmvV > .teaser-link > .container`
- `.benefits-widget-container`
- `#dRogbz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRogbz > .teaser-link > .container`
- `#Av6RRx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6RRx > .teaser-link > .container`
- `#JbK9b6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbK9b6 > .teaser-link > .container`
- `#\32 5ELrG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5ELrG > .teaser-link > .container`
- `#eMlWBl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlWBl > .teaser-link > .container`
- `#wgwj31 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgwj31 > .teaser-link > .container`
- `#ny5k7d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5k7d > .teaser-link > .container > .information`
- `#ny5k7d > .teaser-link > .container > h2`
- `#ny5k7d > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Vebjørn Selbekk"]`
- `#\35 E1xz1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1xz1 > .teaser-link > .container`
- `#\37 3X9X3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X9X3 > .teaser-link > .container`
- `#\38 q3bBW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3bBW > .teaser-link > .container`
- `#\34 BndkV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 BndkV > .teaser-link > .container`
- `#B0AQ5w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0AQ5w > .teaser-link > .container`
- `#\33 MLkRA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLkRA > .teaser-link > .container`
- `img[alt="Reduserer hastigheten i Oslo"]`
- `#kwqWz9 > .teaser-link > .container`
- `#\36 3ppqo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3ppqo > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(46) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#eM2jlK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2jlK > .teaser-link > .container > h2`
- `#eM2jlK > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjølv Egeland"]`
- `#LMvvVq > .teaser-link > .container > .text-wrapper-small`
- `#LMvvVq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW1Vv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW1Vv > .teaser-link > .container > .text-wrapper-small`
- `#zAW1Vv > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Hanssen"]`
- `#B05a6G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05a6G > .teaser-link > .container`
- `#mP7gvl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mP7gvl > .teaser-link > .container`
- `#dRogy1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRogy1 > .teaser-link > .container`
- `#PpWW7b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWW7b > .teaser-link > .container`
- `#PpWWWR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWWWR > .teaser-link > .container`
- `#vgvEbj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvEbj > .teaser-link > .container`
- `#\33 Ml2WL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 Ml2WL > .teaser-link > .container`
- `#\38 q33xA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q33xA > .teaser-link > .container`
- `#\36 3mevQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mevQ > .teaser-link > .container`
- `#\34 B66yV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B66yV > .teaser-link > .container`
- `#wgMWrL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMWrL > .teaser-link > .container`
- `#B055oG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B055oG > .teaser-link > .container`
- `#JbKovR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKovR > .teaser-link > .container`
- `#\34 B6yWq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6yWq > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(58)`
- `#ny55Gn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny55Gn > .teaser-link > .container`
- `#vgvqLB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvqLB > .teaser-link > .container > .information`
- `#vgvqLB > .teaser-link > .container > h2`
- `#vgvqLB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristin Clemet"]`
- `#JbKPMX > .teaser-link > .container > .text-wrapper-small`
- `img[alt="35 døde etter flom i Vietnam"]`
- `#\31 MgL1W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgL1W > .teaser-link > .container`
- `#Gyzg8l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyzg8l > .teaser-link > .container`
- `#pPJAPV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJAPV > .teaser-link > .container > .information`
- `#pPJAPV > .teaser-link > .container > h2`
- `#pPJAPV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Geir Stray Andreassen"]`
- `#\35 EAA9W > .teaser-link > .container > .text-wrapper-small`
- `#\35 EAA9W > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.fullwidth.teaser-wrapper:nth-child(64)`
- `#OoLGxA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLGxA > .teaser-link > .container`
- `#dRo32o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRo32o > .teaser-link > .container > .information`
- `#dRo32o > .teaser-link > .container > h2`
- `#dRo32o > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Eivind Gjemdal"]`
- `#JbjlGJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbjlGJ > .teaser-link > .container`
- `#Av4wKE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av4wKE > .teaser-link > .container > .information`
- `#Av4wKE > .teaser-link > .container > h2`
- `#Av4wKE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erik Børve Rasmussen"]`
- `img[alt="Ødelegger alt med et smil"]`
- `#MnMvor > .teaser-link > .container > .information`
- `#MnMvor > .teaser-link > .container > .illustration-container > .text`
- `#MnMvor > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"][width="88"][height="88"]`
- `#zAWq1w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWq1w > .teaser-link > .container > .information`
- `#zAWq1w > .teaser-link > .container > h2`
- `#zAWq1w > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Filip Roshauw"]`
- `#MnMXxK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnMXxK > .teaser-link > .container`
- `#jQ8Ado > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8Ado > .teaser-link > .container`
- `#\35 EA9we > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EA9we > .teaser-link > .container`
- `#OoL5qO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoL5qO > .teaser-link > .container > .information`
- `#OoL5qO > .teaser-link > .container > h2`
- `#OoL5qO > .teaser-link > .container > .byline > div:nth-child(1)`
- `#OoL5qO > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\31 MgRlW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgRlW > .teaser-link > .container`
- `#eM2mka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2mka > .teaser-link > .container`
