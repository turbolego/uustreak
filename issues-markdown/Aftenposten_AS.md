# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-01T01:23:49.565Z
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
- **Count:** 6

#### Affected Elements:

- `#K8Bx76 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdrlx6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6pApO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45OMw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdrlo6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y51Mke > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 256

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `#V6l3Vr > .teaser-link > .teaser-image-wrapper`
- `#V6l3Vr > .teaser-link > .container > .information`
- `#V6l3Vr > .teaser-link > .container > h2`
- `#V6l3Vr > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Martin Sandbu"]`
- `#dr-edition-teaser-k5iezeu7y > div`
- `#\31 6PAnW > .teaser-link > .teaser-image-wrapper`
- `#\31 6PAnW > .teaser-link > .container > .information`
- `#\31 6PAnW > .teaser-link > .container > .illustration-container > .text`
- `#\31 6PAnW > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\31 6PAnW > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `._preview_1bm9r_661[data-pulse-entity-id="reel-136904"][data-pulse-position-in-bundle="3"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661[data-pulse-entity-id="reel-136904"][data-pulse-position-in-bundle="3"] > a > ._preview-duration_1hg9u_384`
- `._preview_1bm9r_661[data-pulse-entity-id="reel-136904"][data-pulse-position-in-bundle="3"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136919"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136919"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136919"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136880"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136880"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136880"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136918"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136918"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136918"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-position-in-bundle="7"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-position-in-bundle="7"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-position-in-bundle="7"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136895"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136895"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136895"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136881"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136881"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136881"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#EyOzB2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EyOzB2 > .teaser-link > .container`
- `#dr-edition-teaser-wgsm5lmh4 > div`
- `#XMlQbg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMlQbg > .teaser-link > .container`
- `#\38 pl0K2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pl0K2 > .teaser-link > .container`
- `#K8Bx76 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8Bx76 > .teaser-link > .container > h2`
- `#Pdrlx6 > .teaser-link > .container > .text-wrapper-small`
- `#Pdrlx6 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbORO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbORO > .teaser-link > .container > .illustration-container > .text`
- `#OkbORO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#OkbORO > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#\37 pnzgw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pnzgw > .teaser-link > .container`
- `.games-widget`
- `#KMO1P6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMO1P6 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(17) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#q6pApO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6pApO > .teaser-link > .container > h2`
- `#d45OMw > .teaser-link > .container > .text-wrapper-small`
- `#d45OMw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pldPQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pldPQ > .teaser-link > .container`
- `#k0Wd3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Wd3X > .teaser-link > .container`
- `#gkamPA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkamPA > .teaser-link > .container`
- `#\36 qwGjQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qwGjQ > .teaser-link > .container`
- `#\31 6PAxq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PAxq > .teaser-link > .container`
- `#L4pRjQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4pRjQ > .teaser-link > .container`
- `#Pp6lbp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6lbp > .teaser-link > .container`
- `#\30 pjX5A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjX5A > .teaser-link > .container`
- `#\30 pjxkM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjxkM > .teaser-link > .container > .information`
- `#\30 pjxkM > .teaser-link > .container > h2`
- `#\30 pjxkM > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingeborg Moe"]`
- `#Av8l1n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8l1n > .teaser-link > .container`
- `#Ex4r55 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ex4r55 > .teaser-link > .container`
- `#vg4dE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .container`
- `img[alt="Hun er Årets taler i Norge"]`
- `#\33 pkgov > .teaser-link > .container`
- `#LMvpnx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvpnx > .teaser-link > .container`
- `.benefits-widget-container`
- `#e7WyRM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7WyRM > .teaser-link > .container`
- `#jQVG29 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVG29 > .teaser-link > .container`
- `#rrpyGe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrpyGe > .teaser-link > .container > .information`
- `#rrpyGe > .teaser-link > .container > h2`
- `#rrpyGe > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anne Lindboe"]`
- `#\38 q33xA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q33xA > .teaser-link > .container`
- `#OkbA6A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbA6A > .teaser-link > .container`
- `#VzWopr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzWopr > .teaser-link > .container`
- `#RjbpgO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjbpgO > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(42) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Pdrlo6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdrlo6 > .teaser-link > .container > h2`
- `#y51Mke > .teaser-link > .container > .text-wrapper-small`
- `#y51Mke > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6lJQV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6lJQV > .teaser-link > .container`
- `#V6l2R3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6l2R3 > .teaser-link > .container`
- `#m0gxgE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gxgE > .teaser-link > .container > .information`
- `#m0gxgE > .teaser-link > .container > h2`
- `#m0gxgE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Haakon Eliassen"]`
- `#\35 pJ80E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pJ80E > .teaser-link > .container > .information`
- `#\35 pJ80E > .teaser-link > .container > .illustration-container > .text`
- `#\35 pJ80E > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\35 pJ80E > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#\37 399v3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 399v3 > .teaser-link > .container`
- `#\32 pn79a > .teaser-link > .container > .text-wrapper-small`
- `#\32 pn79a > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JAqW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JAqW > .teaser-link > .container`
- `#\38 plMAA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 plMAA > .teaser-link > .container`
- `#JOWbj7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWbj7 > .teaser-link > .container`
- `#Arzxv5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arzxv5 > .teaser-link > .container > .information`
- `#Arzxv5 > .teaser-link > .container > h2`
- `#Arzxv5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Gule"]`
- `#e7W49O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7W49O > .teaser-link > .container`
- `#GxlgyV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxlgyV > .teaser-link > .teaser-image-wrapper > .series-header`
- `#GxlgyV > .teaser-link > .container > .information`
- `#GxlgyV > .teaser-link > .container > h2`
- `#GxlgyV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Hanssen"]`
- `#\37 3X3QB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X3QB > .teaser-link > .container`
- `#aJ19QA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ19QA > .teaser-link > .container > .information`
- `#aJ19QA > .teaser-link > .container > .illustration-container > .text`
- `#aJ19QA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#aJ19QA > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#JOW8om > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOW8om > .teaser-link > .container`
- `#gkaQAA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkaQAA > .teaser-link > .container > .information`
- `#gkaQAA > .teaser-link > .container > .illustration-container > .text`
- `#gkaQAA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Ingunn Økland"]`
- `#\36 qwPWr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qwPWr > .teaser-link > .container`
- `#\36 qw1AQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qw1AQ > .teaser-link > .container > .information`
- `#\36 qw1AQ > .teaser-link > .container > h2`
- `#\36 qw1AQ > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Zoë van der Weel"]`
- `#JOWOdP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOWOdP > .teaser-link > .container > .information`
- `#JOWOdP > .teaser-link > .container > .illustration-container > .text`
- `#JOWOdP > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kristin Storrusten"]`
- `#dRgx1q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgx1q > .teaser-link > .container`
- `#JOW2G7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOW2G7 > .teaser-link > .container > .information`
- `#JOW2G7 > .teaser-link > .container > h2`
- `#JOW2G7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mathias Fischer"]`
- `#\31 6PedK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PedK > .teaser-link > .container`
- `#q6p7ke > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6p7ke > .teaser-link > .container`
- `#\30 pjO1B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjO1B > .teaser-link > .container`
- `img[alt="Woke er snart tilbake på moten"]`
- `#zO5xor > .teaser-link > .container > .information`
- `#zO5xor > .teaser-link > .container > .illustration-container > .text`
- `#zO5xor > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#\36 qwdzL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qwdzL > .teaser-link > .container`
- `#\39 plzWd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 plzWd > .teaser-link > .container`
- `#PdrA0z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdrA0z > .teaser-link > .container > .information`
- `#PdrA0z > .teaser-link > .container > h2`
- `#PdrA0z > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Øystein Aurlien"]`
- `#M7wr0E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7wr0E > .teaser-link > .container`
- `#K8Bem7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8Bem7 > .teaser-link > .container > .information`
- `#K8Bem7 > .teaser-link > .container > h2`
- `#K8Bem7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nina F. Grünfeld"]`
- `#rrpJgm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrpJgm > .teaser-link > .container > .information`
- `#rrpJgm > .teaser-link > .container > .illustration-container > .text`
- `#rrpJgm > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#\37 pnGLK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pnGLK > .teaser-link > .container > .information`
- `#\37 pnGLK > .teaser-link > .container > .illustration-container > .text`
- `#\37 pnGLK > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#m0gExp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gExp > .teaser-link > .container`
- `img[alt="– Fargen endrer seg med lyset"]`
- `#Okb7xV > .teaser-link > .container`
- `#d45b8J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45b8J > .teaser-link > .container`
- `#OkbAJ1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbAJ1 > .teaser-link > .container > .information`
- `#OkbAJ1 > .teaser-link > .container > h2`
- `#OkbAJ1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jon Helgheim"]`
- `#\36 qw7qz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qw7qz > .teaser-link > .container`
- `#\36 qw8QW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qw8QW > .teaser-link > .container`
- `#VzO8dd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzO8dd > .teaser-link > .container`
- `#\36 qwjb8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qwjb8 > .teaser-link > .container`
- `#\32 pnAOy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pnAOy > .teaser-link > .container`
- `#e7Ww7M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7Ww7M > .teaser-link > .container`
- `#eMlR44 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlR44 > .teaser-link > .container`
