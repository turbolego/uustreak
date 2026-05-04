# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-04T00:48:00.348Z
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
- **Count:** 2

#### Affected Elements:

- `#pBQjlE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxrn0B > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 241

#### Affected Elements:

- `#j031Mz > .teaser-link > .teaser-image-wrapper`
- `#j031Mz > .teaser-link > .container > .information`
- `#j031Mz > .teaser-link > .container > h2`
- `#j031Mz > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-1lnqpmvd > div`
- `#q6O4og > .teaser-link > .teaser-image-wrapper`
- `#q6O4og > .teaser-link > .container > .information`
- `#q6O4og > .teaser-link > .container > .illustration-container > .text`
- `#q6O4og > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `._heading_1166k_647`
- `article[data-pulse-entity-id="reel-138812"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138812"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138812"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138811"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138811"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138811"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138810"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138810"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138810"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138775"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138775"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138775"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138772"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138772"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138772"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138773"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138773"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138773"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138763"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138763"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138763"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138765"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138765"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138765"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138753"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138753"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138753"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138746"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138746"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138746"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#\30 ppvlB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 ppvlB > .teaser-link > .container`
- `#dr-edition-teaser-8gpclvhc5 > div`
- `#L4oRa4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4oRa4 > .teaser-link > .container`
- `img[alt="For en genistrek!"]`
- `#GxPEwV > .teaser-link > .container > .information`
- `#GxPEwV > .teaser-link > .container > .illustration-container > .text`
- `#GxPEwV > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#GxPEwV > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#\36 qPJVe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qPJVe > .teaser-link > .container`
- `#ExbPLP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExbPLP > .teaser-link > .container`
- `.games-widget`
- `.bundle-title`
- `#pBQjlE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBQjlE > .teaser-link > .container > h2`
- `#Gxrn0B > .teaser-link > .container > .text-wrapper-small`
- `#Gxrn0B > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJJ35x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJJ35x > .teaser-link > .container`
- `#Exbl7K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exbl7K > .teaser-link > .container > .information`
- `#Exbl7K > .teaser-link > .container > .illustration-container > .text`
- `#Exbl7K > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#Exbl7K > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > .author-image[width="128"][height="128"]`
- `#JOnAPb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOnAPb > .teaser-link > .container`
- `#WvmWnL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvmWnL > .teaser-link > .container`
- `#wrdplA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdplA > .teaser-link > .container > .information`
- `#wrdplA > .teaser-link > .container > h2`
- `#wrdplA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristin Clemet"]`
- `#m0KO1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0KO1E > .teaser-link > .container`
- `#ArbKen > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArbKen > .teaser-link > .container`
- `#XMo0PW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMo0PW > .teaser-link > .container > .information`
- `#XMo0PW > .teaser-link > .container > h2`
- `#XMo0PW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mina Adampour"]`
- `#Okg4zE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okg4zE > .teaser-link > .container`
- `#JOn2EX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOn2EX > .teaser-link > .container`
- `#\30 pv6O6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pv6O6 > .teaser-link > .container`
- `#ArRr4n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArRr4n > .teaser-link > .container`
- `#xrJkLl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrJkLl > .teaser-link > .container`
- `#q6yVgg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6yVgg > .teaser-link > .container`
- `#\32 pvbKr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pvbKr > .teaser-link > .container`
- `.benefits-widget-container`
- `#\37 pPl84 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPl84 > .teaser-link > .container`
- `#rr8yym > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr8yym > .teaser-link > .container > .information`
- `#rr8yym > .teaser-link > .container > h2`
- `#rr8yym > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Arnstein Mykletun"]`
- `#vrknXX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrknXX > .teaser-link > .container`
- `#\33 pBQA0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pBQA0 > .teaser-link > .container`
- `#GxrRKm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxrRKm > .teaser-link > .container`
- `#PdvlP7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PdvlP7 > .teaser-link > .container`
- `#vremLX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vremLX > .teaser-link > .container`
- `#gk3mea > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk3mea > .teaser-link > .container`
- `#\34 3E4OE > .teaser-link > .container > .text-wrapper-small`
- `#\34 3E4OE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Stafettkvinnene med VM-bragd"]`
- `#\31 6vA7Q > .teaser-link > .container`
- `#GxP9Kq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxP9Kq > .teaser-link > .container`
- `#BxrPm9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxrPm9 > .teaser-link > .container`
- `#\34 3OPWE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3OPWE > .teaser-link > .container`
- `#\32 pv7JR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pv7JR > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(44)`
- `#\38 pPxLE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pPxLE > .teaser-link > .container > .information`
- `#\38 pPxLE > .teaser-link > .container > .illustration-container > .text`
- `#\38 pPxLE > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\38 pPxLE > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#Bxrkdl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxrkdl > .teaser-link > .container`
- `#Rj18AO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj18AO > .teaser-link > .container`
- `#\33 pB0yv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pB0yv > .teaser-link > .container`
- `#\30 pvd66 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvd66 > .teaser-link > .container`
- `#wrdLJd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrdLJd > .teaser-link > .container`
- `#d4Jayo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4Jayo > .teaser-link > .teaser-image-wrapper > .series-header`
- `#d4Jayo > .teaser-link > .container`
- `#n1L2e5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1L2e5 > .teaser-link > .container`
- `img[alt="Forbud, Frp? Virkelig?"]`
- `#n1LVlx > .teaser-link > .container`
- `#\32 pV4qB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pV4qB > .teaser-link > .container > .information`
- `#\32 pV4qB > .teaser-link > .container > .illustration-container > .text`
- `#\32 pV4qB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#k0MLrX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MLrX > .teaser-link > .container > .information`
- `#k0MLrX > .teaser-link > .container > h2`
- `#k0MLrX > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Aisha Iqbal"]`
- `#\32 pv4rv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pv4rv > .teaser-link > .container`
- `#k0MroX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MroX > .teaser-link > .container`
- `#M7553E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7553E > .teaser-link > .container`
- `#GxP224 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxP224 > .teaser-link > .container`
- `#m0MM8E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0MM8E > .teaser-link > .container`
- `#XMoQGm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMoQGm > .teaser-link > .container`
- `#OkyBk3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkyBk3 > .teaser-link > .container > .information`
- `#OkyBk3 > .teaser-link > .container > .illustration-container > .text`
- `#OkyBk3 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#oEMad0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEMad0 > .teaser-link > .container`
- `#j0vMQL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vMQL > .teaser-link > .teaser-image-wrapper > .series-header`
- `#j0vMQL > .teaser-link > .container`
- `#\31 6vbQM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6vbQM > .teaser-link > .container > .information`
- `#\31 6vbQM > .teaser-link > .container > .illustration-container > .text`
- `#\31 6vbQM > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\31 6vbQM > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#m0Mwx4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Mwx4 > .teaser-link > .container`
- `#K8L1m7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8L1m7 > .teaser-link > .container > .information`
- `#K8L1m7 > .teaser-link > .container > h2`
- `#K8L1m7 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Martin Tansøy "]`
- `#k0MExQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MExQ > .teaser-link > .teaser-image-wrapper > .series-header`
- `#k0MExQ > .teaser-link > .container > .information`
- `#k0MExQ > .teaser-link > .container > .illustration-container > .text`
- `#k0MExQ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#Okyq7w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okyq7w > .teaser-link > .container`
- `#\38 pP77x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pP77x > .teaser-link > .container`
- `#\39 pk9jl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pk9jl > .teaser-link > .container`
- `#\33 pBwQ9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pBwQ9 > .teaser-link > .container > .information`
- `#\33 pBwQ9 > .teaser-link > .container > .illustration-container > .text`
- `#\33 pBwQ9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\36 qP770 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qP770 > .teaser-link > .container`
- `#\36 qPyv8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qPyv8 > .teaser-link > .container > .information`
- `#\36 qPyv8 > .teaser-link > .container > h2`
- `#\36 qPyv8 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Petter Bae Brandtzæg"]`
- `#rr8JKl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr8JKl > .teaser-link > .container`
- `.container-linear-gradient`
- `.container-darken`
- `#aJG0VE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJG0VE > .teaser-link > .container`
- `#gk3KwB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk3KwB > .teaser-link > .container`
- `#gk3O8a > .teaser-link > .container > .text-wrapper-small`
- `#gk3O8a > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8vOq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8vOq > .teaser-link > .container`
- `#V6gV3J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gV3J > .teaser-link > .container`
