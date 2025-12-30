# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-30T00:28:11.176Z
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
- **Count:** 4

#### Affected Elements:

- `#K8vnB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOMJrB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOGbJK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPwol > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 226

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#q6L7gL > .teaser-link > .teaser-image-wrapper`
- `#q6L7gL > .teaser-link > .container > .information`
- `#q6L7gL > .teaser-link > .container > .illustration-container > .text`
- `#q6L7gL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-kimhubaw5 > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
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
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `#e78XvO > .teaser-link > .teaser-image-wrapper`
- `#e78XvO > .teaser-link > .container > h2`
- `#e78XvO > .teaser-link > .container > .byline`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#\33 pJQRd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pJQRd > .teaser-link > .container`
- `#WvbJWr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvbJWr > .teaser-link > .container`
- `#dr-edition-teaser-nwrmi4rb > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#K8vnB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8vnB4 > .teaser-link > .container > h2`
- `#bOMJrB > .teaser-link > .container > .text-wrapper-small`
- `#bOMJrB > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOoOoj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOoOoj > .teaser-link > .container > .information`
- `#JOoOoj > .teaser-link > .container > .illustration-container > .text`
- `#JOoOoj > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#Wvb3AK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvb3AK > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#zOGbJK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOGbJK > .teaser-link > .container > h2`
- `#xrPwol > .teaser-link > .container > .text-wrapper-small`
- `#xrPwol > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m062Oq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m062Oq > .teaser-link > .container`
- `#\30 pjeV0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjeV0 > .teaser-link > .container`
- `#q6Lbz0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6Lbz0 > .teaser-link > .container`
- `#xrPlXG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPlXG > .teaser-link > .container`
- `#\30 pnbqo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pnbqo > .teaser-link > .container`
- `#\37 plrpK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 plrpK > .teaser-link > .container > .information`
- `#\37 plrpK > .teaser-link > .container > .illustration-container > .text`
- `#\37 plrpK > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#\33 MdXde > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MdXde > .teaser-link > .container`
- `#BxRmpw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxRmpw > .teaser-link > .container`
- `#y53bxE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y53bxE > .teaser-link > .container`
- `#k0J0e9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0J0e9 > .teaser-link > .container`
- `#pBL4jw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBL4jw > .teaser-link > .container`
- `#\31 6nw6W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6nw6W > .teaser-link > .container`
- `#q6ndGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6ndGE > .teaser-link > .container`
- `#vrWv0V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrWv0V > .teaser-link > .container`
- `.benefits-widget-container`
- `#y53Vkx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y53Vkx > .teaser-link > .container`
- `img[alt="Norges eldste er død"]`
- `#\34 3q0We > .teaser-link > .container`
- `#KME707 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KME707 > .teaser-link > .container`
- `#JOoMbb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOoMbb > .teaser-link > .container`
- `img[alt="Hvem tjente mest der du bor?"]`
- `#\38 qbbrG > .teaser-link > .container`
- `#k0JXJL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0JXJL > .teaser-link > .container`
- `#GyvKKm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyvKKm > .teaser-link > .container`
- `img[alt="Trump har trukket en rød linje"]`
- `#q6LPnO > .teaser-link > .container > .information`
- `#q6LPnO > .teaser-link > .container > .illustration-container > .text`
- `#q6LPnO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Harald Stanghelle"]`
- `#bm3Bb5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3Bb5 > .teaser-link > .container`
- `#BxRvkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxRvkl > .teaser-link > .container`
- `#JO1jm6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1jm6 > .teaser-link > .container`
- `#OknRy3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OknRy3 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(45)`
- `#XMgey7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMgey7 > .teaser-link > .container`
- `#wrP05d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrP05d > .teaser-link > .container`
- `#aJwyAA > .teaser-link > .container > .text-wrapper-small`
- `#aJwyAA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6LbLz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6LbLz > .teaser-link > .container`
- `#gkP9JB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkP9JB > .teaser-link > .container`
- `#Gx194m > .teaser-link > .container > .text-wrapper-small`
- `img[alt="En gavepakke av en bok"]`
- `img[alt="– Jeg ble ikke lærer for dette"]`
- `.series-header`
- `#Pd3MMz > .teaser-link > .container`
- `#oEpe90 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEpe90 > .teaser-link > .container`
- `#k0Jyb6 > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Neste års røde dager"]`
- `#d4ObKA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4ObKA > .teaser-link > .container`
- `#bO5e05 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO5e05 > .teaser-link > .container`
- `#xrR12G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrR12G > .teaser-link > .container`
- `img[alt="Nå er dette verdens største by"]`
- `#\30 pnbOE > .teaser-link > .container`
- `#Okpa41 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okpa41 > .teaser-link > .container`
- `#q6nz90 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6nz90 > .teaser-link > .container > .information`
- `#q6nz90 > .teaser-link > .container > h2`
- `#q6nz90 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
- `#\33 pJzpd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pJzpd > .teaser-link > .container`
- `#j0d0PL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0d0PL > .teaser-link > .container`
- `#e787qg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e787qg > .teaser-link > .container`
- `#JOoLj8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOoLj8 > .teaser-link > .container`
- `#e78O6K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78O6K > .teaser-link > .container`
- `#vrm1AL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrm1AL > .teaser-link > .container`
- `#m0RVql > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0RVql > .teaser-link > .container`
- `#JOoOOR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOoOOR > .teaser-link > .container > .information`
- `#JOoOOR > .teaser-link > .container > .illustration-container > .text`
- `#JOoOOR > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#\33 pjl0M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pjl0M > .teaser-link > .container`
- `#QJlWLP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJlWLP > .teaser-link > .container`
- `#y5vL82 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5vL82 > .teaser-link > .container`
- `#wrEEBn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEEBn > .teaser-link > .container > .information`
- `#wrEEBn > .teaser-link > .container > h2`
- `#wrEEBn > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Tjærnås"]`
- `#gkPy8k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkPy8k > .teaser-link > .container`
- `#JO1mz6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO1mz6 > .teaser-link > .container`
- `#WvbJrd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvbJrd > .teaser-link > .container`
- `#aJwOqM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJwOqM > .teaser-link > .container`
- `#\38 pmmMA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pmmMA > .teaser-link > .container > .information`
- `#\38 pmmMA > .teaser-link > .container > .illustration-container > .text`
- `#\38 pmmMA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Knut Olav Åmås"]`
- `#xrPeQQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPeQQ > .teaser-link > .container`
- `#m06eA1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m06eA1 > .teaser-link > .container`
- `#oERJEa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oERJEa > .teaser-link > .container > .information`
- `#oERJEa > .teaser-link > .container > h2`
- `#oERJEa > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Oleksij Havrysj "]`
- `#zOG9X9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOG9X9 > .teaser-link > .container`
- `#XMgMgn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMgMgn > .teaser-link > .container > .information`
- `#XMgMgn > .teaser-link > .container > .illustration-container > .text`
- `#XMgMgn > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"][width="88"][height="88"]`
- `#WvLVeG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvLVeG > .teaser-link > .container`
- `#\34 3qr7R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qr7R > .teaser-link > .container`
- `#gk7kw5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk7kw5 > .teaser-link > .container`
