# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-20T00:23:54.866Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 6

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `img[srcset=""]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `#\32 5LRrr > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 221

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.double.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136169"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136169"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136169"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136168"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136168"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136168"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136026"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136026"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136026"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136166"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136166"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136166"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136162"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136162"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136162"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136165"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136165"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136165"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136163"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136163"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136163"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136157"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136157"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136157"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136161"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136161"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136161"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136155"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136155"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136155"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#RzJ62a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJ62a > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#dr-edition-teaser-z2wwmg8ez > div`
- `#\34 B6jAg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6jAg > .teaser-link > .container`
- `#yEL1Ex > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEL1Ex > .teaser-link > .container`
- `#lwp6OG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwp6OG > .teaser-link > .container > .information`
- `#lwp6OG > .teaser-link > .container > h2`
- `#lwp6OG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marte Heian-Engdal"]`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `.games-widget`
- `#vgaL2w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgaL2w > .teaser-link > .container`
- `#\33 MWlW9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWlW9 > .teaser-link > .container > .illustration-container > .text`
- `#\33 MWlW9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Harald Stanghelle"]`
- `#\32 5LRrr > .teaser-link > .container > .text-wrapper-small`
- `#\32 5LRrr > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MKd4K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MKd4K > .teaser-link > .container`
- `#zAdqEb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdqEb > .teaser-link > .container`
- `#eM2WvO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2WvO > .teaser-link > .container`
- `#\38 q3laQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3laQ > .teaser-link > .container`
- `#\38 q210w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q210w > .teaser-link > .container`
- `img[alt="Feilslutning om strømpriser"]`
- `#\34 B54Ba > .teaser-link > .container`
- `#\35 E1lXO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1lXO > .teaser-link > .container`
- `#qP2900 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2900 > .teaser-link > .container > .information`
- `#qP2900 > .teaser-link > .container > h2`
- `#qP2900 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tore Austad"]`
- `#Av42Lq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av42Lq > .teaser-link > .container`
- `#eMAAyy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMAAyy > .teaser-link > .container`
- `#LMv0M9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMv0M9 > .teaser-link > .container`
- `#lw6BrG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw6BrG > .teaser-link > .container`
- `#RzPbKO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzPbKO > .teaser-link > .container`
- `#yEayl2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEayl2 > .teaser-link > .container`
- `.benefits-widget-container`
- `#\39 3ygyl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3ygyl > .teaser-link > .container`
- `#rPoy3l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPoy3l > .teaser-link > .container`
- `#OoLn61 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLn61 > .teaser-link > .container`
- `#qPGAve > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPGAve > .teaser-link > .container`
- `#\35 E953O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E953O > .teaser-link > .container`
- `#vg0nWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg0nWX > .teaser-link > .container`
- `#LMvpnx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvpnx > .teaser-link > .container`
- `#LMv09q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMv09q > .teaser-link > .container`
- `#yEL1Ar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEL1Ar > .teaser-link > .container`
- `#mPkEB1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPkEB1 > .teaser-link > .container > .information`
- `#mPkEB1 > .teaser-link > .container > .illustration-container > .text`
- `#mPkEB1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#\36 3pwPO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3pwPO > .teaser-link > .container`
- `#lwp81L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwp81L > .teaser-link > .container`
- `#\30 VM1zA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VM1zA > .teaser-link > .container > .information`
- `#\30 VM1zA > .teaser-link > .container > h2`
- `#\30 VM1zA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lene Vågslid"]`
- `#W0QwQr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W0QwQr > .teaser-link > .container`
- `#kwA2gj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwA2gj > .teaser-link > .container`
- `#OoGR5A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGR5A > .teaser-link > .container`
- `#OoGRgA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGRgA > .teaser-link > .container`
- `img[alt="Han har rett om innvandringen"]`
- `#QMdy8P > .teaser-link > .container > .information`
- `#QMdy8P > .teaser-link > .container > .illustration-container > .text`
- `#QMdy8P > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#\32 5r1mv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5r1mv > .teaser-link > .container`
- `#yEL16R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEL16R > .teaser-link > .container`
- `#\30 VMd12 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMd12 > .teaser-link > .container > .information`
- `#\30 VMd12 > .teaser-link > .container > .illustration-container > .text`
- `#\30 VMd12 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#qP2eq0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2eq0 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#qP2eq0 > .teaser-link > .container > .information`
- `#qP2eq0 > .teaser-link > .container > h2`
- `#qP2eq0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#KMOQj6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMOQj6 > .teaser-link > .container`
- `#bmy36v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy36v > .teaser-link > .container`
- `#xmGrEB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGrEB > .teaser-link > .container`
- `#\38 qr3Ar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qr3Ar > .teaser-link > .container`
- `#LM8kb4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LM8kb4 > .teaser-link > .container`
- `#kwA4O9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwA4O9 > .teaser-link > .container`
- `#Av6ewA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6ewA > .teaser-link > .container`
- `#\31 M1VWW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 M1VWW > .teaser-link > .container`
- `#\34 B5roa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B5roa > .teaser-link > .container > .information`
- `#\34 B5roa > .teaser-link > .container > h2`
- `#\34 B5roa > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bjørn Anders Nymoen "]`
- `#W0Q96j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W0Q96j > .teaser-link > .container`
- `#\36 3mL4W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mL4W > .teaser-link > .container`
- `#zAdB21 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdB21 > .teaser-link > .container > .information`
- `#zAdB21 > .teaser-link > .container > .illustration-container > .text`
- `#zAdB21 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Knut Olav Åmås"]`
- `#rPBqK8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPBqK8 > .teaser-link > .container`
- `img[alt="Storhetstiden hans er over"]`
- `#dRx6lw > .teaser-link > .container`
- `#\37 3Ek6o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Ek6o > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(62)`
- `#bmy3M3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy3M3 > .teaser-link > .container`
- `#OoGGgE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGGgE > .teaser-link > .container`
- `#KMdo1o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMdo1o > .teaser-link > .container`
- `#xmGGRB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGGRB > .teaser-link > .container`
- `#jQ6W69 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ6W69 > .teaser-link > .container`
- `#\30 VM5WA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VM5WA > .teaser-link > .container > .information`
- `#\30 VM5WA > .teaser-link > .container > .illustration-container > .text`
- `#\30 VM5WA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#dRx1Oz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRx1Oz > .teaser-link > .container`
- `#\38 qrkdE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qrkdE > .teaser-link > .container`
- `#yEkkv2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkkv2 > .teaser-link > .container`
- `#pPo86X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPo86X > .teaser-link > .container`
- `#kwAlwX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAlwX > .teaser-link > .container`
- `#\37 3Ebo8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Ebo8 > .teaser-link > .container`
- `#kwA9BA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwA9BA > .teaser-link > .container`
- `#\34 B58Ja > .teaser-link > .container > .text-wrapper-small`
- `#\34 B58Ja > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
