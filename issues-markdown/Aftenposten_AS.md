# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-21T00:22:27.373Z
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

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 1

#### Affected Elements:

- `#\33 MWlW9 > .teaser-link > .container > .byline > div:nth-child(1) > .author-title`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `img[srcset=""]`

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
- **Count:** 236

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-z9lv5ddei > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136190"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136190"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136190"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136165"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136165"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136165"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
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
- `a[data-pulse-entity-id="reel-136163"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136163"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136163"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136157"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136157"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136157"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136161"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136161"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136161"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#RzJ62a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJ62a > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#dr-edition-teaser-wy2kj4jhb > div`
- `#gwgboq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwgboq > .teaser-link > .container`
- `#PpKArX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpKArX > .teaser-link > .container`
- `#qPzRpz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPzRpz > .teaser-link > .container`
- `#RzJBLr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJBLr > .teaser-link > .container`
- `.games-widget`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `#\31 MgkEM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgkEM > .teaser-link > .container`
- `#vgaL2w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgaL2w > .teaser-link > .container`
- `img[alt="En ydmykende retrett"]`
- `#\31 MgBgB > .teaser-link > .container > .information__e24.information`
- `#\31 MgBgB > .teaser-link > .container > h2`
- `#\31 MgBgB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Torbjørn Røe Isaksen"]`
- `#pP72Ej > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP72Ej > .teaser-link > .container`
- `#vgvAyL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvAyL > .teaser-link > .container`
- `#Jbzqr7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Jbzqr7 > .teaser-link > .container`
- `#gw5XO0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gw5XO0 > .teaser-link > .container`
- `#eM2WvO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2WvO > .teaser-link > .container`
- `#wgM844 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM844 > .teaser-link > .container`
- `#RzPy6x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzPy6x > .teaser-link > .container`
- `#W0EBbK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W0EBbK > .teaser-link > .container`
- `img[alt="Trump lurt av spionen igjen?"]`
- `#eM28q9 > .teaser-link > .container > .information`
- `#eM28q9 > .teaser-link > .container > .illustration-container > .text`
- `#eM28q9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#VzAqe3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzAqe3 > .teaser-link > .container`
- `#VzyqE1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzyqE1 > .teaser-link > .container`
- `#jQozy0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQozy0 > .teaser-link > .container`
- `.benefits-widget-container`
- `#zAWrxr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWrxr > .teaser-link > .container`
- `#nyqanJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nyqanJ > .teaser-link > .container`
- `#ny5avB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5avB > .teaser-link > .container > .information`
- `#ny5avB > .teaser-link > .container > h2`
- `#ny5avB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Askill Harkjerr Halse"]`
- `#yEayl2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEayl2 > .teaser-link > .container`
- `#\32 5R3Bx > .teaser-link > .container > .text-wrapper-small`
- `#\32 5R3Bx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W0nQWQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W0nQWQ > .teaser-link > .container`
- `#mPG1KE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPG1KE > .teaser-link > .container`
- `#\34 B6zEV > .teaser-link > .container > .text-wrapper-small`
- `#\34 B6zEV > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5LE5y > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5LE5y > .teaser-link > .container > .information`
- `#\32 5LE5y > .teaser-link > .container > h2`
- `#\32 5LE5y > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Maren Synnevåg"]`
- `#o3dpdV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3dpdV > .teaser-link > .container`
- `#zAdvq4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdvq4 > .teaser-link > .container`
- `#\37 3X014 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X014 > .teaser-link > .container`
- `#vgvO6j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvO6j > .teaser-link > .container`
- `#LMvnB4 > .teaser-link > .container > .text-wrapper-small`
- `#LMvnB4 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5AzJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5AzJ > .teaser-link > .container`
- `#rP0gRw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP0gRw > .teaser-link > .container`
- `#zAda15 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAda15 > .teaser-link > .container > .information`
- `#zAda15 > .teaser-link > .container > h2`
- `#zAda15 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#zAda15 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\39 3ydPd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3ydPd > .teaser-link > .container`
- `#W09bra > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09bra > .teaser-link > .container`
- `#Av6naE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6naE > .teaser-link > .container > .information`
- `#Av6naE > .teaser-link > .container > h2`
- `#Av6naE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Manus Pandey"]`
- `#XjvB4n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjvB4n > .teaser-link > .container > .information`
- `#XjvB4n > .teaser-link > .container > h2`
- `#XjvB4n > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jarle Dukic Sandven"]`
- `#dRodoz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRodoz > .teaser-link > .container`
- `#PpW9nJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpW9nJ > .teaser-link > .container`
- `#yELvoA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yELvoA > .teaser-link > .container`
- `#\38 qrnGA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qrnGA > .teaser-link > .container`
- `#al53n4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#al53n4 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#al53n4 > .teaser-link > .container`
- `#VzKWzp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzKWzp > .teaser-link > .container`
- `#bm3K1A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3K1A > .teaser-link > .container`
- `#QMd6oq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMd6oq > .teaser-link > .container`
- `#\37 3EWX8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3EWX8 > .teaser-link > .container`
- `#zAdqEb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdqEb > .teaser-link > .container`
- `#rPo6zA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPo6zA > .teaser-link > .container`
- `#Av42Lq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av42Lq > .teaser-link > .container`
- `#\34 B6jAg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6jAg > .teaser-link > .container`
- `#\39 3ygyl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3ygyl > .teaser-link > .container`
- `#\35 E953O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E953O > .teaser-link > .container`
- `#RzPbKO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzPbKO > .teaser-link > .container`
- `img[alt="Feilslutning om strømpriser"]`
- `#\34 B54Ba > .teaser-link > .container`
- `#LMvpnx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvpnx > .teaser-link > .container`
- `#qP2900 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2900 > .teaser-link > .container > .information`
- `#qP2900 > .teaser-link > .container > h2`
- `#qP2900 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tore Austad"]`
- `#lwp6OG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwp6OG > .teaser-link > .container > .information`
- `#lwp6OG > .teaser-link > .container > h2`
- `#lwp6OG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marte Heian-Engdal"]`
- `#OoGR5A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGR5A > .teaser-link > .teaser-image-wrapper > .series-header`
- `#OoGR5A > .teaser-link > .container`
- `#mPkEB1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPkEB1 > .teaser-link > .container > .information`
- `#mPkEB1 > .teaser-link > .container > .illustration-container > .text`
- `#mPkEB1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#\30 VM1zA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VM1zA > .teaser-link > .container > .information`
- `#\30 VM1zA > .teaser-link > .container > h2`
- `#\30 VM1zA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lene Vågslid"]`
- `#xmGrEB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGrEB > .teaser-link > .container`
- `img[alt="Han har rett om innvandringen"]`
- `#QMdy8P > .teaser-link > .container > .information`
- `#QMdy8P > .teaser-link > .container > .illustration-container > .text`
- `#QMdy8P > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#\32 5r1mv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5r1mv > .teaser-link > .container`
- `#kwA4O9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwA4O9 > .teaser-link > .container`
- `#\33 MWlW9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWlW9 > .teaser-link > .container > .information`
- `#\33 MWlW9 > .teaser-link > .container > h2`
- `#\33 MWlW9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Harald Stanghelle"]`
- `#qP2eq0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2eq0 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#qP2eq0 > .teaser-link > .container > .information`
- `#qP2eq0 > .teaser-link > .container > h2`
- `#qP2eq0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#zAdB21 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdB21 > .teaser-link > .container > .information`
- `#zAdB21 > .teaser-link > .container > .illustration-container > .text`
- `#zAdB21 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Knut Olav Åmås"]`
- `#bmy36v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy36v > .teaser-link > .container`
