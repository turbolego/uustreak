# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-15T00:51:19.593Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 7

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `#utif_skyscraperright_1-jb3biw_bf5f930d-eaa2-4cec-a556-138885239a22, img[width="0"][height="0"]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 4

#### Affected Elements:

- `#\31 6vmyX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6qgj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkvz1L > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M76meJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `#utif_skyscraperright_1-jb3biw_bf5f930d-eaa2-4cec-a556-138885239a22, div:nth-child(1) > a`
- `#utif_skyscraperright_1-jb3biw_bf5f930d-eaa2-4cec-a556-138885239a22, #adform-adnotice-button-2x88zarnlxs > a`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 239

#### Affected Elements:

- `#utif_skyscraperright_1-jb3biw_bf5f930d-eaa2-4cec-a556-138885239a22, img[width="0"][height="0"]`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#\32 p90jx > .teaser-link > .teaser-image-wrapper`
- `#\32 p90jx > .teaser-link > .container > .information`
- `#\32 p90jx > .teaser-link > .container > h2`
- `#\32 p90jx > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-ftb8hg2gq > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1166k_647`
- `article[data-pulse-entity-id="reel-138972"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138972"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138972"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138927"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138927"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138927"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138968"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138968"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138968"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138970"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138970"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138970"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138969"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138969"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138969"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138926"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138926"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138926"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138928"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138928"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138928"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138948"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138948"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138948"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138946"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138946"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138946"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `.double.teaser-wrapper:nth-child(7)`
- `#d44M1w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d44M1w > .teaser-link > .container`
- `#Ar7bB3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7bB3 > .teaser-link > .container`
- `#XMR28o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMR28o > .teaser-link > .container`
- `img[alt="Trump møtt med advarsel fra Xi"]`
- `#\35 pbv0m > .teaser-link > .container`
- `#xrM3dQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrM3dQ > .teaser-link > .container`
- `#aJG0VE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJG0VE > .teaser-link > .container`
- `.games-widget`
- `#m05MkO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m05MkO > .teaser-link > .container`
- `#Ar7Wlx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7Wlx > .teaser-link > .container > .information`
- `#Ar7Wlx > .teaser-link > .container > .illustration-container > .text`
- `#Ar7Wlx > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#Ar7Wlx > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[width="88"][height="88"][alt="bilde av Kjetil B. Alstadheim"]`
- `#bOOym5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOOym5 > .teaser-link > .container`
- `#\30 p9zvE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9zvE > .teaser-link > .container`
- `#L4oRa4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4oRa4 > .teaser-link > .container`
- `#ExJkqA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJkqA > .teaser-link > .container`
- `#PdgbyR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdgbyR > .teaser-link > .container`
- `#Rj6nE2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj6nE2 > .teaser-link > .container`
- `#Rj6av5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj6av5 > .teaser-link > .container`
- `#Ar7glx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7glx > .teaser-link > .container`
- `img[alt="Lan Marie Berg med ny jobb "]`
- `#m05EVv > .teaser-link > .container`
- `#q6OJge > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6OJge > .teaser-link > .container`
- `#\38 p5ROd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5ROd > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(29) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#k08X6k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08X6k > .teaser-link > .teaser-image-wrapper > .series-header`
- `#k08X6k > .teaser-link > .container > h2`
- `#\31 6vmyX > .teaser-link > .container > .text-wrapper-small`
- `#\31 6vmyX > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ5WkW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ5WkW > .teaser-link > .container`
- `#ArRbeM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArRbeM > .teaser-link > .container`
- `.benefits-widget-container`
- `#\39 pbLB9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbLB9 > .teaser-link > .container`
- `#\30 ppvlB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 ppvlB > .teaser-link > .container`
- `#zOMeaO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMeaO > .teaser-link > .container`
- `#L4o5aQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4o5aQ > .teaser-link > .container`
- `#j0Om7o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0Om7o > .teaser-link > .container`
- `#zOOwOv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOOwOv > .teaser-link > .container`
- `#xrMyap > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMyap > .teaser-link > .container`
- `#\33 pqQ29 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pqQ29 > .teaser-link > .container`
- `img[alt="Hvem er dette?"]`
- `#\34 3bEj9 > .teaser-link > .container`
- `#Wv6XOg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv6XOg > .teaser-link > .container`
- `#Rj6q32 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj6q32 > .teaser-link > .container`
- `#vr6XWl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vr6XWl > .teaser-link > .container > .information`
- `#vr6XWl > .teaser-link > .container > h2`
- `#vr6XWl > .teaser-link > .container > .byline > div:nth-child(1)`
- `#vr6XWl > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#K86k54 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86k54 > .teaser-link > .container`
- `#aJvbaE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJvbaE > .teaser-link > .container > .information`
- `#aJvbaE > .teaser-link > .container > h2`
- `#aJvbaE > .teaser-link > .container > .byline > div:nth-child(1)`
- `#aJvbaE > .teaser-link > .container > .byline > .author-image-wrapper > img[alt="bilde av Pål Vegard Hagesæther"][width="100"][height="100"]`
- `img[alt="Tenk at Oslo så sånn ut!"]`
- `#rrzXye > .teaser-link > .container > .information`
- `#rrzXye > .teaser-link > .container > .illustration-container > .text`
- `#rrzXye > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#\39 pbnWM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pbnWM > .teaser-link > .container`
- `#vr6eyL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vr6eyL > .teaser-link > .container`
- `#zO0OM9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO0OM9 > .teaser-link > .container`
- `#j0OKnb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0OKnb > .teaser-link > .container`
- `#bOXole > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOXole > .teaser-link > .container`
- `#Ar7qAA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7qAA > .teaser-link > .container > .information`
- `#Ar7qAA > .teaser-link > .container > h2`
- `#Ar7qAA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Gard Steiro"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(53) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#JO6qgj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6qgj > .teaser-link > .container > h2`
- `#gkvz1L > .teaser-link > .container > .text-wrapper-small`
- `#gkvz1L > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Bra at religionsfriheten vant"]`
- `#\39 pbzPl > .teaser-link > .container`
- `#Ar7GLx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7GLx > .teaser-link > .container > .information`
- `#Ar7GLx > .teaser-link > .container > .illustration-container > .text`
- `#Ar7GLx > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#xrMVJp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrMVJp > .teaser-link > .container`
- `#k08yzA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08yzA > .teaser-link > .container`
- `#k08BpB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08BpB > .teaser-link > .container > .information`
- `#k08BpB > .teaser-link > .container > .illustration-container > .text`
- `#k08BpB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#k08BpB > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[width="88"][height="88"][alt="bilde av Kjetil B. Alstadheim"]`
- `#oEkl8g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEkl8g > .teaser-link > .container`
- `#\31 6qRwK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6qRwK > .teaser-link > .container`
- `#K86GnG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86GnG > .teaser-link > .container`
- `#ExJmWG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJmWG > .teaser-link > .container > .information`
- `#ExJmWG > .teaser-link > .container > h2`
- `#ExJmWG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jonas Gahr Støre"]`
- `#\30 p93mM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p93mM > .teaser-link > .container`
- `#n1GmMB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GmMB > .teaser-link > .container > .information`
- `#n1GmMB > .teaser-link > .container > h2`
- `#n1GmMB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Lismoen"]`
- `#j0Orz9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0Orz9 > .teaser-link > .container > .information`
- `#j0Orz9 > .teaser-link > .container > h2`
- `#j0Orz9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Gustav Hårtveit"]`
- `#ArPglA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArPglA > .teaser-link > .container`
- `#JO6vl4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6vl4 > .teaser-link > .container`
- `#M76ayE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M76ayE > .teaser-link > .container`
- `#\30 p9b2A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9b2A > .teaser-link > .container`
- `#\31 6qXjq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6qXjq > .teaser-link > .container`
- `#QJrGBR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJrGBR > .teaser-link > .container > .information`
- `#QJrGBR > .teaser-link > .container > .illustration-container > .text`
- `#QJrGBR > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#n1GB5x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GB5x > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(69) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Denne pengebruken er spinnvill"]`
- `#j0Orow > .teaser-link > .container > .illustration-container > .text`
- `#j0Orow > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#M76meJ > .teaser-link > .container > .text-wrapper-small`
- `#M76meJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnKdrk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnKdrk > .teaser-link > .container`
- `#\31 6qOvB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6qOvB > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\31 6qOvB > .teaser-link > .container`
- `#QJ59eq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ59eq > .teaser-link > .container`
- `#\38 p5xJd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5xJd > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\38 p5xJd > .teaser-link > .container > .information`
- `#\38 p5xJd > .teaser-link > .container > h2`
- `#\38 p5xJd > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\38 p5xJd > .teaser-link > .container > .byline > .author-image-wrapper > img[alt="bilde av Pål Vegard Hagesæther"][width="100"][height="100"]`
- `#L46ayq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L46ayq > .teaser-link > .container`
- `#\37 pVmov > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVmov > .teaser-link > .container > .information`
- `#\37 pVmov > .teaser-link > .container > h2`
- `#\37 pVmov > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\37 pVmov > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#Ok6zA1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok6zA1 > .teaser-link > .container`
