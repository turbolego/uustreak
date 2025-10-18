# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-18T00:22:12.881Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 5

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
- **Count:** 223

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.double.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-eqdfnprmt > div`
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
- `.double.teaser-wrapper:nth-child(7)`
- `#vg4V7l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4V7l > .teaser-link > .container`
- `#\32 5LLGG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5LLGG > .teaser-link > .container`
- `#xmGK6j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGK6j > .teaser-link > .teaser-image-wrapper > .series-header`
- `#xmGK6j > .teaser-link > .container`
- `#dRx1Oz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRx1Oz > .teaser-link > .container`
- `#kw7o59 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw7o59 > .teaser-link > .container`
- `.games-widget`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `#o3j44B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3j44B > .teaser-link > .container`
- `#vgaL2w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgaL2w > .teaser-link > .container`
- `#\38 qrkdE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qrkdE > .teaser-link > .container`
- `#\31 MKd4K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MKd4K > .teaser-link > .container`
- `#yEkkv2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkkv2 > .teaser-link > .container`
- `#\30 VM3bM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VM3bM > .teaser-link > .container`
- `#\30 VM5WA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VM5WA > .teaser-link > .container > .information`
- `#\30 VM5WA > .teaser-link > .container > .illustration-container > .text`
- `#\30 VM5WA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#QM1JOV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QM1JOV > .teaser-link > .container`
- `#pPo86X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPo86X > .teaser-link > .container`
- `#\31 M1rqK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 M1rqK > .teaser-link > .container`
- `#\32 5Q2nG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Q2nG > .teaser-link > .container`
- `#jQ6W69 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ6W69 > .teaser-link > .container`
- `#KMJL75 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMJL75 > .teaser-link > .container`
- `.benefits-widget-container`
- `#PpkVxJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpkVxJ > .teaser-link > .container`
- `#dRX2Mj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRX2Mj > .teaser-link > .container`
- `#kwAlwX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAlwX > .teaser-link > .container`
- `#wg1Ex1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wg1Ex1 > .teaser-link > .container`
- `#\30 VMPA0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMPA0 > .teaser-link > .container`
- `#zAvA01 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAvA01 > .teaser-link > .container`
- `#\37 3Ebo8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Ebo8 > .teaser-link > .container`
- `#Pp7VXp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp7VXp > .teaser-link > .container`
- `#kwA9BA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwA9BA > .teaser-link > .container`
- `#LM8wRQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LM8wRQ > .teaser-link > .container`
- `#OoGwQb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoGwQb > .teaser-link > .container`
- `img[alt="Vidar Lønn-Arnesen er død"]`
- `#zAdvO5 > .teaser-link > .container`
- `#LM8K49 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LM8K49 > .teaser-link > .container`
- `#zAdOy9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdOy9 > .teaser-link > .container`
- `#ny38bJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny38bJ > .teaser-link > .container`
- `#B0Aw30 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Aw30 > .teaser-link > .container`
- `#\30 VMmyG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMmyG > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(49)`
- `#bmy86e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy86e > .teaser-link > .container > .information`
- `#bmy86e > .teaser-link > .container > h2`
- `#bmy86e > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Tor Sporsem"]`
- `#\34 B58Ja > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B58Ja > .teaser-link > .container`
- `#VzK7lV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzK7lV > .teaser-link > .container`
- `#Ey377l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey377l > .teaser-link > .container`
- `#GyoVOq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyoVOq > .teaser-link > .container > .information`
- `#GyoVOq > .teaser-link > .container > h2`
- `#GyoVOq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#dRxX8A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRxX8A > .teaser-link > .container`
- `#bmyAyA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmyAyA > .teaser-link > .container`
- `#\35 EP24E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EP24E > .teaser-link > .container`
- `img[alt="Kiss-gitarist er død"]`
- `#\39 3yRL5 > .teaser-link > .container`
- `#GyoAl9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyoAl9 > .teaser-link > .container > .information`
- `#GyoAl9 > .teaser-link > .container > h2`
- `#GyoAl9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Trond Norén Isaksen"]`
- `#vg4MQ4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4MQ4 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#vg4MQ4 > .teaser-link > .container`
- `#B0A9gQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0A9gQ > .teaser-link > .container > .information`
- `#B0A9gQ > .teaser-link > .container > .illustration-container > .text`
- `#B0A9gQ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#mPXAJv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPXAJv > .teaser-link > .container`
- `#\35 EPxaE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EPxaE > .teaser-link > .container`
- `#gwgqy1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwgqy1 > .teaser-link > .container > .information`
- `#gwgqy1 > .teaser-link > .container > h2`
- `#gwgqy1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#gwgqy1 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#vg4RaX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4RaX > .teaser-link > .container`
- `#kwAL9L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAL9L > .teaser-link > .container > .information`
- `#kwAL9L > .teaser-link > .container > h2`
- `#kwAL9L > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Charles Petterson"]`
- `#\34 B52oa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B52oa > .teaser-link > .container`
- `#\39 3yPXq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3yPXq > .teaser-link > .container`
- `img[alt="Litt tykkhudet må man være"]`
- `#qP29om > .teaser-link > .container > .information`
- `#qP29om > .teaser-link > .container > .illustration-container > .text`
- `#qP29om > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#o3jmRB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jmRB > .teaser-link > .container`
- `#Ey3Gyl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey3Gyl > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Ey3Gyl > .teaser-link > .container`
- `#lwpqvo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwpqvo > .teaser-link > .container`
- `#\37 3E2gV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3E2gV > .teaser-link > .container`
- `#LM8wbQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LM8wbQ > .teaser-link > .container`
- `#ny36Wx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny36Wx > .teaser-link > .container`
- `#o3j5bg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3j5bg > .teaser-link > .container`
- `#qP29wE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP29wE > .teaser-link > .container > .information`
- `#qP29wE > .teaser-link > .container > .kicker`
- `#qP29wE > .teaser-link > .container > h2`
- `#qP29wE > .teaser-link > .container > .byline > div:nth-child(1)`
- `#qP29wE > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#bmyg4l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmyg4l > .teaser-link > .container > .information`
- `#bmyg4l > .teaser-link > .container > h2`
- `#bmyg4l > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ketil Slagstad"]`
- `#kwAvmk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAvmk > .teaser-link > .container`
- `#\31 M1Jyl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 M1Jyl > .teaser-link > .container`
- `#kwAgB9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwAgB9 > .teaser-link > .container > .information`
- `#kwAgB9 > .teaser-link > .container > .kicker`
- `#kwAgB9 > .teaser-link > .container > h2`
- `#kwAgB9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#kwAgB9 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\30 VMBzE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VMBzE > .teaser-link > .container`
- `#zAdBvK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdBvK > .teaser-link > .teaser-image-wrapper > .series-header`
- `#zAdBvK > .teaser-link > .container`
- `#bmy07d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmy07d > .teaser-link > .container`
- `#\37 3E8LK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3E8LK > .teaser-link > .container`
