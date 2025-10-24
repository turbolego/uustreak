# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-24T00:25:00.870Z
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
- **Count:** 200

#### Affected Elements:

- `.container-linear-gradient`
- `.container-darken`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-16yljpp1z > div`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136276"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136276"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136276"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136268"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136268"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136268"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136246"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136246"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136246"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136237"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136237"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136237"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136245"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136245"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136245"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136248"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136248"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136248"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136200"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136200"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136200"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136205"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136205"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136205"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136202"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136202"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136202"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136197"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136197"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136197"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#\31 MKd4K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MKd4K > .teaser-link > .container`
- `#Gyz00J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyz00J > .teaser-link > .container`
- `#\37 3X7W3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X7W3 > .teaser-link > .container`
- `#\39 3jzo9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3jzo9 > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#RzJ62a > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJ62a > .teaser-link > .container`
- `.games-widget`
- `#kw4mdj > .teaser-link > .container > .text-wrapper-small`
- `#kw4mdj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzkjQ2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzkjQ2 > .teaser-link > .container`
- `#\34 B54GV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B54GV > .teaser-link > .container`
- `#yEkMar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkMar > .teaser-link > .container`
- `#\37 3XPM9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XPM9 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\37 3XPM9 > .teaser-link > .container`
- `#eM2WvO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2WvO > .teaser-link > .container`
- `#OoLW5O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLW5O > .teaser-link > .container`
- `#\37 3XV03 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XV03 > .teaser-link > .container`
- `#B05WBe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05WBe > .teaser-link > .container`
- `#gwVzVL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVzVL > .teaser-link > .container`
- `#jQRvrw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQRvrw > .teaser-link > .container`
- `#GyzwmB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzwmB > .teaser-link > .container`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `#\30 Veo1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 Veo1E > .teaser-link > .container`
- `#vgaL2w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgaL2w > .teaser-link > .container`
- `#\37 3X749 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X749 > .teaser-link > .container`
- `.benefits-widget-container`
- `#RzJpyd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzJpyd > .teaser-link > .container`
- `#\34 B6R7G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6R7G > .teaser-link > .container`
- `#\38 qngdW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qngdW > .teaser-link > .container`
- `#W0QKxg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W0QKxg > .teaser-link > .container > .information`
- `#W0QKxg > .teaser-link > .container > h2`
- `#W0QKxg > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Almir Martin"]`
- `#\35 E1k5O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1k5O > .teaser-link > .container`
- `#VzyjKJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzyjKJ > .teaser-link > .container`
- `#\37 3Xmyv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Xmyv > .teaser-link > .container`
- `#wgMR5o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMR5o > .teaser-link > .container`
- `#ny5QM5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5QM5 > .teaser-link > .container`
- `#\33 MlRLv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MlRLv > .teaser-link > .container`
- `#wgMKPM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMKPM > .teaser-link > .container`
- `#alXlJA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alXlJA > .teaser-link > .container`
- `#\39 3j6JE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3j6JE > .teaser-link > .container`
- `#KMQGLe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQGLe > .teaser-link > .container`
- `#o3d9xB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3d9xB > .teaser-link > .container`
- `#gwVpmJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVpmJ > .teaser-link > .container`
- `#LMvjx9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvjx9 > .teaser-link > .container`
- `#B0o9y0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0o9y0 > .teaser-link > .container`
- `#\38 q3GQw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3GQw > .teaser-link > .container`
- `#Av4baE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av4baE > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(50)`
- `img[alt="Prinsen bør settes på gaten"]`
- `#XjxqpE > .teaser-link > .container > .information`
- `#XjxqpE > .teaser-link > .container > .illustration-container > .text`
- `#XjxqpE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#mPGLbq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGLbq > .teaser-link > .container`
- `#OoLEak > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLEak > .teaser-link > .container`
- `#lw7Jgo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7Jgo > .teaser-link > .container`
- `#\32 5RjGv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5RjGv > .teaser-link > .container`
- `#rP0n00 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP0n00 > .teaser-link > .container`
- `#eM2zGO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2zGO > .teaser-link > .container`
- `#EydRQ2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydRQ2 > .teaser-link > .container`
- `#XjxMOm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjxMOm > .teaser-link > .container`
- `#pPJGQ6 > .teaser-link > .container > .text-wrapper-small`
- `#pPJGQ6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgoEX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgoEX > .teaser-link > .container > .information`
- `#\31 MgoEX > .teaser-link > .container > h2`
- `#\31 MgoEX > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Oda Westby"]`
- `#gwV6j1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwV6j1 > .teaser-link > .container`
- `#rPBQbw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPBQbw > .teaser-link > .container`
- `#\37 3Xq33 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Xq33 > .teaser-link > .container`
- `#QMnPz8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMnPz8 > .teaser-link > .container`
- `#W09k4L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09k4L > .teaser-link > .container`
- `#jQ8L7z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8L7z > .teaser-link > .container`
- `#Gyp61J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyp61J > .teaser-link > .container`
- `#\36 3pB9O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3pB9O > .teaser-link > .container`
- `#JbKv78 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKv78 > .teaser-link > .container`
- `#EydlEA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydlEA > .teaser-link > .container`
- `#XjxWbo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjxWbo > .teaser-link > .container`
- `#jQ83ow > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ83ow > .teaser-link > .container`
- `#\34 B6qn9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6qn9 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(68)`
- `#wgMdld > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMdld > .teaser-link > .container`
- `#dRo7W1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRo7W1 > .teaser-link > .container > .information`
- `#dRo7W1 > .teaser-link > .container > .illustration-container > .text`
- `#dRo7W1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#ny5Aya > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5Aya > .teaser-link > .container`
- `#wgMd84 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMd84 > .teaser-link > .container`
- `#lw7wl7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7wl7 > .teaser-link > .container > .information`
- `#lw7wl7 > .teaser-link > .container > .illustration-container > .text`
- `#lw7wl7 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
