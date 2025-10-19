# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-19T00:24:47.084Z
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
- **Count:** 222

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#QMdy8P > .teaser-link > .teaser-image-wrapper`
- `#QMdy8P > .teaser-link > .container > .information`
- `#QMdy8P > .teaser-link > .container > .illustration-container > .text`
- `#QMdy8P > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#QMdy8P > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#kwA2gj`
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
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#RzJ62a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJ62a > .teaser-link > .container`
- `#dr-edition-teaser-2uazspnbf > div`
- `#OoGRgA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGRgA > .teaser-link > .container`
- `#\33 MWlW9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWlW9 > .teaser-link > .container > .illustration-container > .text`
- `#\33 MWlW9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Harald Stanghelle"]`
- `#\32 5LRrr > .teaser-link > .container > .text-wrapper-small`
- `#\32 5LRrr > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qr3Ar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qr3Ar > .teaser-link > .container`
- `#W0Q96j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W0Q96j > .teaser-link > .container`
- `.games-widget`
- `#zAmoxK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAmoxK > .teaser-link > .container`
- `#\30 VMd12 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMd12 > .teaser-link > .container > .information`
- `#\30 VMd12 > .teaser-link > .container > .illustration-container > .text`
- `#\30 VMd12 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#QM1JOV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QM1JOV > .teaser-link > .container`
- `#kwA4O9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwA4O9 > .teaser-link > .container`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `#bmy36v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy36v > .teaser-link > .container`
- `#\36 3LRLQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3LRLQ > .teaser-link > .container`
- `#LM8kb4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LM8kb4 > .teaser-link > .container`
- `#vgaL2w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgaL2w > .teaser-link > .container`
- `#qP2eq0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#qP2eq0 > .teaser-link > .container > .information`
- `#qP2eq0 > .teaser-link > .container > h2`
- `#qP2eq0 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#\34 B5roa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B5roa > .teaser-link > .container > .information`
- `#\34 B5roa > .teaser-link > .container > h2`
- `#\34 B5roa > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bjørn Anders Nymoen "]`
- `#RzJkJr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJkJr > .teaser-link > .container`
- `#Av6ewA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6ewA > .teaser-link > .container`
- `#xmEKPR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmEKPR > .teaser-link > .container`
- `#zAdB21 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdB21 > .teaser-link > .container > .information`
- `#zAdB21 > .teaser-link > .container > .illustration-container > .text`
- `#zAdB21 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Knut Olav Åmås"]`
- `.benefits-widget-container`
- `#\31 MKd4K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MKd4K > .teaser-link > .container`
- `#lwp81L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwp81L > .teaser-link > .container`
- `#kw7o59 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw7o59 > .teaser-link > .container`
- `#\37 3Ek6o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Ek6o > .teaser-link > .container`
- `#zAvA01 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAvA01 > .teaser-link > .container`
- `#\36 3mL4W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mL4W > .teaser-link > .container`
- `#vgagVl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgagVl > .teaser-link > .container`
- `#\31 M1VWW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 M1VWW > .teaser-link > .container`
- `#rPBqK8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPBqK8 > .teaser-link > .container`
- `#RzJP88 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJP88 > .teaser-link > .container`
- `#rPB04w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPB04w > .teaser-link > .container`
- `#\33 MWL0M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWL0M > .teaser-link > .container`
- `.teaser-image[alt="Storhetstiden hans er over"][decoding="async"]`
- `#dRx6lw > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(44)`
- `img[alt="Salgsboom for Haaland-kebab"]`
- `#qP2zdw > .teaser-link > .container`
- `#xmGGRB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGGRB > .teaser-link > .container`
- `#bmy3M3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy3M3 > .teaser-link > .container`
- `#\38 qrkdE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qrkdE > .teaser-link > .container`
- `#OoGGgE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGGgE > .teaser-link > .container`
- `#yEkkv2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkkv2 > .teaser-link > .container`
- `#dRx1Oz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRx1Oz > .teaser-link > .container`
- `#KMdo1o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMdo1o > .teaser-link > .container`
- `#\31 M1rqK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 M1rqK > .teaser-link > .container`
- `#kwAlwX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAlwX > .teaser-link > .container`
- `#jQ6W69 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ6W69 > .teaser-link > .container`
- `#\37 3Ebo8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Ebo8 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(55)`
- `#LM8K49 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LM8K49 > .teaser-link > .container`
- `#pPo86X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPo86X > .teaser-link > .container`
- `#PpkVxJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpkVxJ > .teaser-link > .container`
- `#\30 VM5WA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VM5WA > .teaser-link > .container > .information`
- `#\30 VM5WA > .teaser-link > .container > .illustration-container > .text`
- `#\30 VM5WA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#mPkbdE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPkbdE > .teaser-link > .container`
- `#OoGwQb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGwQb > .teaser-link > .container`
- `#B0Aw30 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Aw30 > .teaser-link > .container`
- `#kwA9BA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwA9BA > .teaser-link > .container`
- `#zAdOy9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdOy9 > .teaser-link > .container`
- `#\34 B58Ja > .teaser-link > .container > .text-wrapper-small`
- `#\34 B58Ja > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyoVOq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyoVOq > .teaser-link > .container > .information`
- `#GyoVOq > .teaser-link > .container > h2`
- `#GyoVOq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#B0A9gQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0A9gQ > .teaser-link > .container > .information`
- `#B0A9gQ > .teaser-link > .container > .illustration-container > .text`
- `#B0A9gQ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#B0A9gQ > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#\30 VMmyG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMmyG > .teaser-link > .container`
- `#bmy86e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy86e > .teaser-link > .container > .information`
- `#bmy86e > .teaser-link > .container > h2`
- `#bmy86e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tor Sporsem"]`
- `#\34 B52oa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B52oa > .teaser-link > .container`
- `#VzK7lV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzK7lV > .teaser-link > .container`
- `#Ey377l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey377l > .teaser-link > .container`
- `#kwAvmk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAvmk > .teaser-link > .container`
- `#vg4RaX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4RaX > .teaser-link > .container`
- `#\37 3E2gV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3E2gV > .teaser-link > .container`
- `#GyoAl9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyoAl9 > .teaser-link > .container > .information`
- `#GyoAl9 > .teaser-link > .container > h2`
- `#GyoAl9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Trond Norén Isaksen"]`
- `#vg4MQ4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4MQ4 > .teaser-link > .container`
- `#lwpqvo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwpqvo > .teaser-link > .container`
- `#lwpemM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwpemM > .teaser-link > .container`
- `#ny36Wx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny36Wx > .teaser-link > .container`
- `#\35 EP24E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EP24E > .teaser-link > .container`
