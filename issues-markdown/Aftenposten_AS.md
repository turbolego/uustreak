# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-12-02T00:26:33.801Z
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
- **Count:** 5

#### Affected Elements:

- `#JOW2l6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxl776 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1RogJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr6ord > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ex4r55 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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

- `#m0gyP1 > .teaser-link > .teaser-image-wrapper`
- `#m0gyP1 > .teaser-link > .container > .information`
- `#m0gyP1 > .teaser-link > .container > .illustration-container > .text`
- `#m0gyP1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-bhho743nu > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136942"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136942"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136942"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136930"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136930"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136930"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136923"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136922"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `._preview_1bm9r_661[data-pulse-entity-id="reel-136904"][data-pulse-position-in-bundle="5"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `._preview_1bm9r_661[data-pulse-entity-id="reel-136904"][data-pulse-position-in-bundle="5"] > a > ._preview-duration_1hg9u_384`
- `._preview_1bm9r_661[data-pulse-entity-id="reel-136904"][data-pulse-position-in-bundle="5"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136919"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136919"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136919"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136880"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136880"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136880"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136918"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136918"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136918"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-position-in-bundle="9"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-position-in-bundle="9"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-position-in-bundle="9"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136894"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#XMlQbg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMlQbg > .teaser-link > .container`
- `#EyOzB2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EyOzB2 > .teaser-link > .container`
- `#\34 3jPeo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3jPeo > .teaser-link > .container`
- `#wr64BG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr64BG > .teaser-link > .teaser-image-wrapper > .series-header`
- `#wr64BG > .teaser-link > .container > .information`
- `#wr64BG > .teaser-link > .container > h2`
- `#wr64BG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#gkaqrJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkaqrJ > .teaser-link > .container`
- `.games-widget`
- `#\31 6PAxq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PAxq > .teaser-link > .container`
- `#BxVGQQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxVGQQ > .teaser-link > .container`
- `#Av8j2r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8j2r > .teaser-link > .container`
- `#q6pApO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6pApO > .teaser-link > .container`
- `#aJ1VkO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ1VkO > .teaser-link > .container`
- `#k0Wd3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0Wd3X > .teaser-link > .container`
- `#\38 pl4qG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pl4qG > .teaser-link > .container`
- `#KMO1P6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMO1P6 > .teaser-link > .container`
- `#\38 pla91 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pla91 > .teaser-link > .container`
- `#Av8l1n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av8l1n > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(31) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#JOW2l6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOW2l6 > .teaser-link > .container > h2`
- `#Gxl776 > .teaser-link > .container > .text-wrapper-small`
- `#Gxl776 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1RogJ > .teaser-link > .container > .text-wrapper-small`
- `#n1RogJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45AXo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45AXo > .teaser-link > .container`
- `.benefits-widget-container`
- `#zARwQ4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARwQ4 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#zARwQ4 > .teaser-link > .container`
- `#L4prpR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4prpR > .teaser-link > .container`
- `#eMl6OO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMl6OO > .teaser-link > .container`
- `#\39 pl9kp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pl9kp > .teaser-link > .container`
- `#gwX2JJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwX2JJ > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(39) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `.teaser-image[alt="Dette er knallhardt maktspill"][decoding="async"]`
- `#RjbM0a > .teaser-link > .container > .illustration-container > .text`
- `#RjbM0a > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[width="128"][height="128"][alt="bilde av Kjetil B. Alstadheim"]`
- `#wr6ord > .teaser-link > .container > .text-wrapper-small`
- `#wr6ord > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ex4r55 > .teaser-link > .container > .text-wrapper-small`
- `#Ex4r55 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVG29 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVG29 > .teaser-link > .container`
- `#kwqoOv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqoOv > .teaser-link > .container`
- `#VzOM23 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOM23 > .teaser-link > .container`
- `#Arz9qM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arz9qM > .teaser-link > .container`
- `#Pp6AOX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6AOX > .teaser-link > .container`
- `#Gxl7yQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxl7yQ > .teaser-link > .container`
- `#wr6lr4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr6lr4 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(47)`
- `#k0WnnL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0WnnL > .teaser-link > .container`
- `#BxVaPg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxVaPg > .teaser-link > .container`
- `#m0gm50 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gm50 > .teaser-link > .container`
- `#Gyvbdq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyvbdq > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(52)`
- `#zO5o94 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO5o94 > .teaser-link > .container`
- `#\35 pJanO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pJanO > .teaser-link > .container`
- `#Ey0O43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0O43 > .teaser-link > .container`
- `#d45Ajz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d45Ajz > .teaser-link > .container`
- `#wr6o7n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr6o7n > .teaser-link > .container`
- `#aJ1Rx7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ1Rx7 > .teaser-link > .container`
- `#k0W9QX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0W9QX > .teaser-link > .container`
- `img[alt="Over 1000 døde"]`
- `#Arza9j > .teaser-link > .container`
- `img[alt="Hvem er dette?"]`
- `#q6pEzo > .teaser-link > .container`
- `#L4pzM9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4pzM9 > .teaser-link > .container`
- `#gkamPA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkamPA > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(60)`
- `#\36 qwG0Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qwG0Q > .teaser-link > .container`
- `#\36 qwGjQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qwGjQ > .teaser-link > .container`
- `#OkbORO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbORO > .teaser-link > .container > .information`
- `#OkbORO > .teaser-link > .container > .illustration-container > .text`
- `#OkbORO > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#OkbORO > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#rrpyGe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrpyGe > .teaser-link > .container > .information`
- `#rrpyGe > .teaser-link > .container > h2`
- `#rrpyGe > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anne Lindboe"]`
- `#RjbpgO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjbpgO > .teaser-link > .container`
- `#\37 pnzgw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pnzgw > .teaser-link > .container`
- `#V6l3Vr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6l3Vr > .teaser-link > .container > .information`
- `#V6l3Vr > .teaser-link > .container > h2`
- `#V6l3Vr > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Martin Sandbu"]`
- `#\30 pjX5A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjX5A > .teaser-link > .container`
- `#vrWX4j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrWX4j > .teaser-link > .container`
- `#\31 6PAnW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6PAnW > .teaser-link > .container > .information`
- `#\31 6PAnW > .teaser-link > .container > .illustration-container > .text`
- `#\31 6PAnW > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\31 6PAnW > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#OkbA6A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkbA6A > .teaser-link > .container`
- `#\30 pjxkM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pjxkM > .teaser-link > .container > .information`
- `#\30 pjxkM > .teaser-link > .container > h2`
- `#\30 pjxkM > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingeborg Moe"]`
- `img[alt="Hun er Årets taler i Norge"]`
- `#\33 pkgov > .teaser-link > .container`
- `#\38 pl0K2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pl0K2 > .teaser-link > .container`
- `#e7WyRM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7WyRM > .teaser-link > .container`
- `#L4pRjQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4pRjQ > .teaser-link > .container`
- `#V6l2R3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6l2R3 > .teaser-link > .container`
- `#\35 pJ80E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pJ80E > .teaser-link > .container > .information`
- `#\35 pJ80E > .teaser-link > .container > .illustration-container > .text`
- `#\35 pJ80E > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\35 pJ80E > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#m0gxgE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0gxgE > .teaser-link > .container > .information`
- `#m0gxgE > .teaser-link > .container > h2`
- `#m0gxgE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Haakon Eliassen"]`
- `#Arzxv5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Arzxv5 > .teaser-link > .container > .information`
- `#Arzxv5 > .teaser-link > .container > h2`
- `#Arzxv5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Lars Gule"]`
- `#aJ19QA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJ19QA > .teaser-link > .container > .information`
- `#aJ19QA > .teaser-link > .container > .illustration-container > .text`
- `#aJ19QA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#aJ19QA > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#GxlgyV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxlgyV > .teaser-link > .container > .information`
- `#GxlgyV > .teaser-link > .container > h2`
- `#GxlgyV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Hanssen"]`
