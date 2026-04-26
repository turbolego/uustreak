# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-04-26T00:45:40.357Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 6

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 3

#### Affected Elements:

- `#V6xxyr > .teaser-link > .container > .kicker`
- `#K8L6r6 > .teaser-link > .container > .kicker`
- `#OkyyO1 > .teaser-link > .container > .kicker`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 6

#### Affected Elements:

- `img[alt="Skal han snart ta ansvar?"]`
- `img[alt="Nå skal hun få kjørt seg"]`
- `#QJrMoJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO00vw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MMPL > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4o0X1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 213

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.double.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1166k_647`
- `article[data-pulse-entity-id="reel-138710"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138710"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138710"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138719"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138719"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138719"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138696"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138696"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138696"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138636"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138636"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138636"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138708"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138708"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138708"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138661"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138661"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138661"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138698"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138698"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138698"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138694"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138694"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138694"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138658"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138658"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138658"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138683"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138683"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138683"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#L4oAvR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4oAvR > .teaser-link > .container`
- `#zAd17O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAd17O > .teaser-link > .container`
- `#m0M5gv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0M5gv > .teaser-link > .container`
- `#\39 pmVB5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pmVB5 > .teaser-link > .container`
- `.games-widget`
- `#Gxydk9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gxydk9 > .teaser-link > .container`
- `#lnMMke > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMMke > .teaser-link > .container`
- `#wrAQLG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrAQLG > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(18) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Skal han snart ta ansvar?"]`
- `#wrdgRd > .teaser-link > .container > h2`
- `#pB10zR > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Nå skal hun få kjørt seg"]`
- `#ArbKen > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArbKen > .teaser-link > .container`
- `#\30 pvvyB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvvyB > .teaser-link > .container`
- `#\33 ppAV0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 ppAV0 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(22) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Selvfølgelig har han makt"]`
- `#wrdgj4 > .teaser-link > .container > .illustration-container > .text`
- `#wrdgj4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[width="128"]`
- `#rr8gXK > .teaser-link > .container > .text-wrapper-small`
- `#rr8gXK > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kristin Clemet"]`
- `#L4o5aQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4o5aQ > .teaser-link > .container`
- `#Oky6pk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oky6pk > .teaser-link > .container`
- `#\30 pB2Ro > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pB2Ro > .teaser-link > .container > .information`
- `#\30 pB2Ro > .teaser-link > .container > .illustration-container > .text`
- `#\30 pB2Ro > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\30 pB2Ro > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#lnKzXG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnKzXG > .teaser-link > .container`
- `#ArRRdq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArRRdq > .teaser-link > .container`
- `#\35 pE7r1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pE7r1 > .teaser-link > .container`
- `#\32 pv3JB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pv3JB > .teaser-link > .container`
- `#\37 p62y3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p62y3 > .teaser-link > .container`
- `.benefits-widget-container`
- `#gk33qB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk33qB > .teaser-link > .container`
- `#\34 3E169 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3E169 > .teaser-link > .container`
- `#\32 pvvPR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pvvPR > .teaser-link > .container`
- `#lnMAGL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMAGL > .teaser-link > .container`
- `#V6xxyr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6xxyr > .teaser-link > .container`
- `#Pdr6rR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pdr6rR > .teaser-link > .container`
- `#k0MMwj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MMwj > .teaser-link > .container`
- `#k00y0B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k00y0B > .teaser-link > .container`
- `img[alt="Ute med \a hodeskade"]`
- `#K8L6r6 > .teaser-link > .container`
- `#WvmgQ2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvmgQ2 > .teaser-link > .container`
- `#OkyyO1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkyyO1 > .teaser-link > .container`
- `#XMo9Go > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XMo9Go > .teaser-link > .container`
- `#\39 pBvKW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pBvKW > .teaser-link > .container`
- `#JOr3om > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOr3om > .teaser-link > .container`
- `#K8LLOo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8LLOo > .teaser-link > .container`
- `.series-location.teaser-bundle.new-bundles > .bundle-title`
- `#k0M05Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#k0M05Q > .teaser-link > .container > h2`
- `#\30 pvErG > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvErG > .teaser-link > .container > .text-wrapper-small`
- `#\30 pvErG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#QJrMoJ > .teaser-link > .container > .text-wrapper-small`
- `#QJrMoJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr88Vl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr88Vl > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(49) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#zO00vw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO00vw > .teaser-link > .container > h2`
- `#k0MMPL > .teaser-link > .container > .text-wrapper-small`
- `#k0MMPL > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4o0X1 > .teaser-link > .container > .text-wrapper-small`
- `#L4o0X1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJGGda > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJGGda > .teaser-link > .container`
- `#WvmqV2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvmqV2 > .teaser-link > .container`
- `#e7zGAQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7zGAQ > .teaser-link > .container`
- `#K8LMpe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8LMpe > .teaser-link > .container > .information`
- `#K8LMpe > .teaser-link > .container > .illustration-container > .text`
- `#K8LMpe > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Maryam Iqbal Tahir"]`
- `#rr8M6w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr8M6w > .teaser-link > .container`
- `#k0MWoa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MWoa > .teaser-link > .container`
- `#\33 p1nOd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p1nOd > .teaser-link > .container`
- `#Exbld3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exbld3 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(55)`
- `#\33 pBkKP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pBkKP > .teaser-link > .container`
- `#QJgl9V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJgl9V > .teaser-link > .container`
- `#M757P0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M757P0 > .teaser-link > .container`
- `#\34 3Eo29 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3Eo29 > .teaser-link > .container`
- `#ArRr4n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArRr4n > .teaser-link > .container`
- `#\39 pBEkM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pBEkM > .teaser-link > .container`
- `#bOkMMe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOkMMe > .teaser-link > .container > .information`
- `#bOkMMe > .teaser-link > .container > .illustration-container > .text`
- `#bOkMMe > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#n1LyBL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1LyBL > .teaser-link > .container`
- `img[alt="Kjernekraft er ikke vanskelig"]`
- `#JOnbgJ > .teaser-link > .container`
- `#rr8Wpm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr8Wpm > .teaser-link > .container`
- `#pBMpeW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBMpeW > .teaser-link > .container`
- `#V6x13l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6x13l > .teaser-link > .container`
- `#k0MEPL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0MEPL > .teaser-link > .container`
- `#j03ayo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j03ayo > .teaser-link > .container`
- `#q6OPPe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6OPPe > .teaser-link > .container`
- `#Exbp52 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exbp52 > .teaser-link > .container > .information`
- `#Exbp52 > .teaser-link > .container > .illustration-container > .text`
- `#Exbp52 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#Exbp52 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Daniel Røed-Johansen"][width="88"][height="88"]`
- `#d47V8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47V8o > .teaser-link > .container`
- `#BxrW89 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxrW89 > .teaser-link > .container > .information`
- `#BxrW89 > .teaser-link > .container > .illustration-container > .text`
- `#BxrW89 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#vrkeGX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrkeGX > .teaser-link > .container`
- `img[alt="Oljepengane før Oljefondet"]`
- `#gk3P75 > .teaser-link > .container > .information`
- `#gk3P75 > .teaser-link > .container > h2`
- `#gk3P75 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ottar Grepstad"]`
- `#d4Jwxz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4Jwxz > .teaser-link > .container`
