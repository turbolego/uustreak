# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-23T00:24:39.307Z
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

- `#MnxxWR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jV0o > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrEarP > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4AMX9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-o501zpo0p > div > div`
- `#\36 qnbE0 > .teaser-link > .teaser-image-wrapper`
- `#\36 qnbE0 > .teaser-link > .container > .information`
- `#\36 qnbE0 > .teaser-link > .container > h2`
- `#\36 qnbE0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jakob Semb Aasmundsen"]`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-137220"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137220"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137220"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137219"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137219"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137219"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137144"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137144"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137144"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137210"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137210"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137210"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137163"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137163"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137163"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137141"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137141"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137141"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137134"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137134"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137134"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137135"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137059"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137059"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137059"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `article[data-pulse-entity-id="reel-137119"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137119"] > a > ._preview-duration_gghy7_384`
- `article[data-pulse-entity-id="reel-137119"] > a > ._preview-title_1bm9r_721._preview-title_gghy7_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#\32 p1G2x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 p1G2x > .teaser-link > .container`
- `#q6ndGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6ndGE > .teaser-link > .container`
- `#k0a41B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0a41B > .teaser-link > .container > .information`
- `#k0a41B > .teaser-link > .container > h2`
- `#k0a41B > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Espen Hilton"]`
- `#Pd3Mpb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd3Mpb > .teaser-link > .container`
- `#lnAVk9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnAVk9 > .teaser-link > .container`
- `#xrPlXG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrPlXG > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#MnxxWR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnxxWR > .teaser-link > .container > h2`
- `#\34 3jV0o > .teaser-link > .container > .text-wrapper-small`
- `#\34 3jV0o > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pmG1A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pmG1A > .teaser-link > .container`
- `#Gxl8mB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxl8mB > .teaser-link > .container`
- `#d4dWlz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4dWlz > .teaser-link > .container`
- `#K83vXG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K83vXG > .teaser-link > .container`
- `#oEpKM0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEpKM0 > .teaser-link > .container`
- `img[alt="Hvem tjente mest der du bor?"]`
- `#\38 qbbrG > .teaser-link > .container`
- `#\33 pJpnd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pJpnd > .teaser-link > .container > .information`
- `#\33 pJpnd > .teaser-link > .container > h2`
- `#\33 pJpnd > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mustafa Can"]`
- `#\31 6n6yQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6n6yQ > .teaser-link > .container`
- `#y5v7wK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5v7wK > .teaser-link > .container`
- `#n1gxmm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1gxmm > .teaser-link > .container`
- `#\37 p0pdK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p0pdK > .teaser-link > .container`
- `#Oknd51 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oknd51 > .teaser-link > .container`
- `#\37 p0l9W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p0l9W > .teaser-link > .container`
- `#wgMexG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMexG > .teaser-link > .container`
- `.benefits-widget-container`
- `#aJ26M4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ26M4 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(33) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#j098Ww > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j098Ww > .teaser-link > .container > .kicker`
- `#j098Ww > .teaser-link > .container > h2`
- `#wrEarP > .teaser-link > .container > .text-wrapper-small`
- `#wrEarP > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pnBko > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pnBko > .teaser-link > .container`
- `#d4dynj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4dynj > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(36)`
- `#dRgbAo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgbAo > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(38) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#aJwJW5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJwJW5 > .teaser-link > .container > .illustration-container > .text`
- `#aJwJW5 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Harald Stanghelle"]`
- `#L4AMX9 > .teaser-link > .container > .text-wrapper-small`
- `#L4AMX9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0P8bq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0P8bq > .teaser-link > .container > .information`
- `#j0P8bq > .teaser-link > .container > h2`
- `#j0P8bq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sven Thore Kloster"]`
- `#rrArBw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrArBw > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(41)`
- `#vrQl7B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrQl7B > .teaser-link > .container`
- `#\38 pmm5G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pmm5G > .teaser-link > .container`
- `img[alt="Beklager, kjære naboer!"]`
- `#Gx1pvl > .teaser-link > .container`
- `img[alt="USA pauser havvindprosjekter"]`
- `#Pd9gyz > .teaser-link > .container`
- `#\32 pG5ey > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pG5ey > .teaser-link > .container`
- `#\36 qj9G0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qj9G0 > .teaser-link > .container`
- `#e78Mw9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78Mw9 > .teaser-link > .container`
- `#ExWxlo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExWxlo > .teaser-link > .container`
- `#n1a1o5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1a1o5 > .teaser-link > .container`
- `#wrPP0d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPP0d > .teaser-link > .container`
- `img[alt="Sæd på ville veier"]`
- `#\32 pG1Wl > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(52)`
- `.fullwidth.teaser-wrapper:nth-child(53)`
- `#pB60KV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB60KV > .teaser-link > .container > .information`
- `#pB60KV > .teaser-link > .container > h2`
- `#pB60KV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Inga Strümke"]`
- `#oERPQW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oERPQW > .teaser-link > .container`
- `#WvL9dK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvL9dK > .teaser-link > .container > .information`
- `#WvL9dK > .teaser-link > .container > .illustration-container > .text`
- `#WvL9dK > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#RjxL5O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjxL5O > .teaser-link > .container`
- `#n1gkW5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1gkW5 > .teaser-link > .container > .information`
- `#n1gkW5 > .teaser-link > .container > h2`
- `#n1gkW5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tor Levin Hofgaard"]`
- `#\38 pw4q1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pw4q1 > .teaser-link > .container`
- `#\30 pnQKo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pnQKo > .teaser-link > .container`
- `#\30 pEGrg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pEGrg > .teaser-link > .container`
- `#ArzKGn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#ArzKGn > .teaser-link > .container`
- `#\38 pmw72 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pmw72 > .teaser-link > .container > .information`
- `#\38 pmw72 > .teaser-link > .container > .illustration-container > .text`
- `#\38 pmw72 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#k0J3WQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0J3WQ > .teaser-link > .container`
- `#Pd32Ee > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd32Ee > .teaser-link > .container > .information`
- `#Pd32Ee > .teaser-link > .container > .illustration-container > .text`
- `#Pd32Ee > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\36 qnmro > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qnmro > .teaser-link > .container > .information`
- `#\36 qnmro > .teaser-link > .container > .illustration-container > .text`
- `#\36 qnmro > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Ingunn Økland"]`
- `img[alt="Terapi i 80 graders varme"]`
- `#\32 p1Gvy > .teaser-link > .container`
- `#ExWwO2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExWwO2 > .teaser-link > .container`
- `#\34 3qzgG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3qzgG > .teaser-link > .container`
- `#JOoEdR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOoEdR > .teaser-link > .container`
- `#\38 pw4rA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pw4rA > .teaser-link > .container > .information`
- `#\38 pw4rA > .teaser-link > .container > .illustration-container > .text`
- `#\38 pw4rA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Hilde Østby"]`
- `#vrQmJB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrQmJB > .teaser-link > .container > .information`
- `#vrQmJB > .teaser-link > .container > h2`
- `#vrQmJB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ida Eimind Børslien  "]`
- `#wrPPen > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrPPen > .teaser-link > .container`
- `#e78P9g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e78P9g > .teaser-link > .container`
- `#k0aoBL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0aoBL > .teaser-link > .container`
- `#y5vg2g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5vg2g > .teaser-link > .container`
- `#Gx1wXJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx1wXJ > .teaser-link > .container`
- `#lnAEyM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnAEyM > .teaser-link > .container`
- `#\30 pE8bE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pE8bE > .teaser-link > .container`
- `#q6p7ke > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6p7ke > .teaser-link > .container`
