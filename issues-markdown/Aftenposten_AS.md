# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-21T00:23:17.270Z
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

- `#Pdrpjz > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#\35 pJE8z > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#j09Q7w > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`

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
- **Count:** 224

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#bOMMxA > .teaser-link > .teaser-image-wrapper`
- `#bOMMxA > .teaser-link > .container > .information`
- `#bOMMxA > .teaser-link > .container > .illustration-container > .text`
- `#bOMMxA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `#rrpWWa`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-asqkw754 > div`
- `.bundle-title`
- `#Pdrpjz > .teaser-link > .teaser-image-wrapper`
- `#Pdrpjz > .teaser-link > .container > h2`
- `.secondary-teasers-wrapper`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136778"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136778"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136778"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136779"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136779"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136779"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136763"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136763"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136763"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136761"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136761"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136761"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136755"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136755"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136755"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136758"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136758"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136758"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136558"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136558"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136558"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136499"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136499"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136499"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136753"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136753"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136753"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136750"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136750"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136750"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#\30 pjV8J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjV8J > .teaser-link > .container`
- `#K8BM0M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8BM0M > .teaser-link > .container`
- `#dr-edition-teaser-urtc44vi1 > div`
- `#n1Ry6o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1Ry6o > .teaser-link > .container`
- `#wr6Ppn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr6Ppn > .teaser-link > .container`
- `#\35 pJBxK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pJBxK > .teaser-link > .container`
- `.games-widget`
- `#wr6gJ5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr6gJ5 > .teaser-link > .container`
- `#\34 3jo1e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jo1e > .teaser-link > .container`
- `#JOWbGb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWbGb > .teaser-link > .container`
- `#qPKKvw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPKKvw > .teaser-link > .container`
- `#aJ1PAA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ1PAA > .teaser-link > .container`
- `#Pp6MAb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6MAb > .teaser-link > .container`
- `#lngV2e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lngV2e > .teaser-link > .container > .information`
- `#lngV2e > .teaser-link > .container > h2`
- `#lngV2e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Kivle"]`
- `#\34 Bnok9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 Bnok9 > .teaser-link > .container`
- `#K8BMR5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8BMR5 > .teaser-link > .container`
- `#XjGqvo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjGqvo > .teaser-link > .container`
- `#\38 plqEG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 plqEG > .teaser-link > .container`
- `#K8BM4G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8BM4G > .teaser-link > .container`
- `#\32 5Q2nG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Q2nG > .teaser-link > .container`
- `#\36 qw6eW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qw6eW > .teaser-link > .container`
- `#JbVx46 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbVx46 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#JbVx46 > .teaser-link > .container`
- `.benefits-widget-container`
- `#\30 pjGo6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjGo6 > .teaser-link > .container`
- `#W09vxr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09vxr > .teaser-link > .container`
- `#o3JJ5g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JJ5g > .teaser-link > .container`
- `#Av6RRx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6RRx > .teaser-link > .container`
- `#aJ1lPM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ1lPM > .teaser-link > .container`
- `#RzJBLr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJBLr > .teaser-link > .container`
- `#nykoPL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nykoPL > .teaser-link > .container`
- `#eM2WvO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2WvO > .teaser-link > .container`
- `#yEeX1r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEeX1r > .teaser-link > .container`
- `#xrAmeB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrAmeB > .teaser-link > .container`
- `#zARaK5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARaK5 > .teaser-link > .container > .information`
- `#zARaK5 > .teaser-link > .container > .kicker`
- `#zARaK5 > .teaser-link > .container > h2`
- `#zARaK5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#\34 3jBzo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jBzo > .teaser-link > .container`
- `#QJRlGV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJRlGV > .teaser-link > .teaser-image-wrapper > .series-header`
- `#QJRlGV > .teaser-link > .container`
- `#Wvll3k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvll3k > .teaser-link > .container`
- `#aJ1l8a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ1l8a > .teaser-link > .container`
- `#\35 Em6qO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 Em6qO > .teaser-link > .container`
- `#e7WJq4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7WJq4 > .teaser-link > .container`
- `#\33 pkJo9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pkJo9 > .teaser-link > .container > .information`
- `#\33 pkJo9 > .teaser-link > .container > .illustration-container > .text`
- `#\33 pkJo9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#\36 qw93L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qw93L > .teaser-link > .container`
- `#\32 5Mxp4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Mxp4 > .teaser-link > .container`
- `#wr6ggL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr6ggL > .teaser-link > .container`
- `#Ex4WyK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ex4WyK > .teaser-link > .container`
- `img[alt="Markant oppgang på Oslo Børs"]`
- `#y51E4r > .teaser-link > .container`
- `#aJ11W5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ11W5 > .teaser-link > .container`
- `#OkbrPl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbrPl > .teaser-link > .container`
- `#k0W3ea > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0W3ea > .teaser-link > .container`
- `img[alt="La ukrainerne reise hjem"]`
- `#rPvv7K > .teaser-link > .container`
- `#\35 pJG4E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pJG4E > .teaser-link > .container`
- `#K8BzJ6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8BzJ6 > .teaser-link > .container`
- `img[alt="Googles KI fordreier kunnskap"]`
- `#nyk8xB > .teaser-link > .container`
- `#BxVW70 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxVW70 > .teaser-link > .container`
- `#k0W606 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0W606 > .teaser-link > .container`
- `img[alt="Hva kalles en slik skøyte?"]`
- `#pP07Xj > .teaser-link > .container`
- `#jQVypA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVypA > .teaser-link > .container > .information`
- `#jQVypA > .teaser-link > .container > h2`
- `#jQVypA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Simen Sætre"]`
- `#\32 5Mx0y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Mx0y > .teaser-link > .container > .information`
- `#\32 5Mx0y > .teaser-link > .container > .illustration-container > .text`
- `#\32 5Mx0y > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Ingunn Økland"]`
- `#o3JlJj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JlJj > .teaser-link > .container`
- `#\32 5MEPx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5MEPx > .teaser-link > .container > .information`
- `#\32 5MEPx > .teaser-link > .container > .illustration-container > .text`
- `#\32 5MEPx > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#Av8j75 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8j75 > .teaser-link > .container > .information`
- `#Av8j75 > .teaser-link > .container > .illustration-container > .text`
- `#Av8j75 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#j09dEb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j09dEb > .teaser-link > .container > .information`
- `#j09dEb > .teaser-link > .container > h2`
- `#j09dEb > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Almir Martin"]`
- `#gkaWAB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkaWAB > .teaser-link > .container`
- `#k0WRgX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0WRgX > .teaser-link > .container`
- `img[alt="Han var spesielt glad i to ord"]`
- `#j09B3b > .teaser-link > .container > .information`
- `#j09B3b > .teaser-link > .container > .illustration-container > .text`
- `#j09B3b > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#j09B3b > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#eMlR44 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlR44 > .teaser-link > .container`
- `#Ey0Opl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0Opl > .teaser-link > .container > .information`
- `#Ey0Opl > .teaser-link > .container > h2`
- `#Ey0Opl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Geir Stenseth"]`
- `#Pp6GG0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6GG0 > .teaser-link > .container > .information`
- `#Pp6GG0 > .teaser-link > .container > .illustration-container > .text`
- `#Pp6GG0 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#\32 pnnkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pnnkl > .teaser-link > .container`
- `#gka7Bk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gka7Bk > .teaser-link > .container`
- `#\38 qb7EQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qb7EQ > .teaser-link > .container`
- `#xmWegR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmWegR > .teaser-link > .container`
- `#k0W3wj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0W3wj > .teaser-link > .container`
