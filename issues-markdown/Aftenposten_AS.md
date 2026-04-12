# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-04-12T00:52:59.264Z
**URL:** [https://www.aftenposten.no/](https://www.aftenposten.no/)
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
- **Count:** 7

#### Affected Elements:

- `#lnnB7A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Høyre går seg bort"]`
- `#vreAVj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 ppnLw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjzAjA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMJLE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6o7qM > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 230

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-138594"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138594"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138594"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138133"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138133"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138133"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138565"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138565"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138565"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138567"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138567"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138567"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138564"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138564"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138564"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138563"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138563"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138563"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138550"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138550"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138550"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138530"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138530"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138530"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138525"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138525"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138525"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-138524"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138524"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-138524"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.double.teaser-wrapper:nth-child(7)`
- `#Rj5xyW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj5xyW > .teaser-link > .container`
- `#dr-edition-teaser-32mg2ur3w > div`
- `#d47v4A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47v4A > .teaser-link > .container`
- `#e7GaR9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7GaR9 > .teaser-link > .container`
- `#\38 pG5k2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pG5k2 > .teaser-link > .container`
- `#d4RgbJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4RgbJ > .teaser-link > .container`
- `.games-widget`
- `#d47RoB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47RoB > .teaser-link > .container > .information`
- `#d47RoB > .teaser-link > .container > .illustration-container > .text`
- `#d47RoB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#\38 pGBJE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pGBJE > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\38 pGBJE > .teaser-link > .container`
- `#QJgJjA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJgJjA > .teaser-link > .container`
- `#m0KrB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0KrB4 > .teaser-link > .container > .information`
- `#m0KrB4 > .teaser-link > .container > h2`
- `#m0KrB4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bernt Hagtvet"]`
- `#QJJQ6W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJJQ6W > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(21) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#lnnB7A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnnB7A > .teaser-link > .container > h2`
- `#rrMWg3 > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Høyre går seg bort"]`
- `#Bxxqov > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxxqov > .teaser-link > .container`
- `#wr3RB1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr3RB1 > .teaser-link > .container`
- `#xrg7kj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrg7kj > .teaser-link > .container`
- `img[alt="Slutter i «Nytt på nytt»"]`
- `#BxMrKQ > .teaser-link > .container`
- `#V664mW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V664mW > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(28) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#vreAVj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vreAVj > .teaser-link > .container > h2`
- `#\37 ppnLw > .teaser-link > .container > .text-wrapper-small`
- `#\37 ppnLw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pkbKd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pkbKd > .teaser-link > .container`
- `.magazine.teaser-bundle.new-bundles > .bundle-title`
- `#RjzAjA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RjzAjA > .teaser-link > .container > h2`
- `#BxMJLE > .teaser-link > .container > .text-wrapper-small`
- `#BxMJLE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.benefits-widget-container`
- `#xrlMXp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrlMXp > .teaser-link > .container`
- `#\35 pBbqm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 pBbqm > .teaser-link > .container`
- `#M7A1WJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7A1WJ > .teaser-link > .container > .information`
- `#M7A1WJ > .teaser-link > .container > .illustration-container > .text`
- `#M7A1WJ > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Knut Olav Åmås"]`
- `#JOOPoR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOOPoR > .teaser-link > .container`
- `#\32 pVvlv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pVvlv > .teaser-link > .container`
- `#\37 ppPGB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 ppPGB > .teaser-link > .container`
- `#bO8Opv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8Opv > .teaser-link > .teaser-image-wrapper > .series-header`
- `#bO8Opv > .teaser-link > .container`
- `#\30 pGey6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGey6 > .teaser-link > .container`
- `#d47Jb1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47Jb1 > .teaser-link > .container`
- `#\35 p8bG6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p8bG6 > .teaser-link > .container`
- `#\38 pGG21 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pGG21 > .teaser-link > .container`
- `#\35 p8E5z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p8E5z > .teaser-link > .container`
- `#JOrry4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOrry4 > .teaser-link > .container`
- `#bOOWWg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOOWWg > .teaser-link > .container`
- `#GxrrLV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxrrLV > .teaser-link > .container`
- `#M77wkr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M77wkr > .teaser-link > .container > .information`
- `#M77wkr > .teaser-link > .container > h2`
- `#M77wkr > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#d47wyX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47wyX > .teaser-link > .container`
- `#pBBzxG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBBzxG > .teaser-link > .container`
- `#k0v3q9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k0v3q9 > .teaser-link > .container > .information`
- `#k0v3q9 > .teaser-link > .container > .kicker`
- `#k0v3q9 > .teaser-link > .container > h2`
- `#k0v3q9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marthe Scharning Lund"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(50) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 p7lL4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7lL4 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\37 p7lL4 > .teaser-link > .container > h2`
- `#\31 6o7qM > .teaser-link > .container > .text-wrapper-small`
- `#\31 6o7qM > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM96lo > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM96lo > .teaser-link > .container > .text-wrapper-small`
- `#XM96lo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mah-Rukh Ali"]`
- `#j0vzLo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vzLo > .teaser-link > .container > .information`
- `#j0vzLo > .teaser-link > .container > .illustration-container > .text`
- `#j0vzLo > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#e7GGG4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7GGG4 > .teaser-link > .container`
- `#wrrprA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrrprA > .teaser-link > .container > .information`
- `#wrrprA > .teaser-link > .container > .illustration-container > .text`
- `#wrrprA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#wrrprA > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > .author-image[width="88"][height="88"]`
- `#bO8Mdl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8Mdl > .teaser-link > .container > .information`
- `#bO8Mdl > .teaser-link > .container > .illustration-container > .text`
- `#bO8Mdl > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\38 ppqmG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 ppqmG > .teaser-link > .container`
- `#rrMLr8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrMLr8 > .teaser-link > .container`
- `#d47RGq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47RGq > .teaser-link > .container`
- `#K8rvgE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8rvgE > .teaser-link > .container`
- `#xrlPPG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xrlPPG > .teaser-link > .container`
- `#M7AoER > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7AoER > .teaser-link > .container`
- `#V6gRVW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gRVW > .teaser-link > .container > .information`
- `#V6gRVW > .teaser-link > .container > h2`
- `#V6gRVW > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erik Martiniussen"]`
- `#\37 p62y3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p62y3 > .teaser-link > .container`
- `#M7A1dr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M7A1dr > .teaser-link > .container > .information`
- `#M7A1dr > .teaser-link > .container > .kicker`
- `#M7A1dr > .teaser-link > .container > h2`
- `#M7A1dr > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Oskar Bjørheim"]`
- `#K8rpjG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8rpjG > .teaser-link > .container`
- `#\37 p7Kk3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7Kk3 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(61)`
- `#ArreLE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArreLE > .teaser-link > .teaser-image-wrapper > .series-header`
- `#ArreLE > .teaser-link > .container`
- `#Wvgqmg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wvgqmg > .teaser-link > .container`
- `#\39 pkKn5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pkKn5 > .teaser-link > .container`
- `#wr388d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr388d > .teaser-link > .container`
- `#d475zO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d475zO > .teaser-link > .container > .information`
- `#d475zO > .teaser-link > .container > h2`
- `#d475zO > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingrid Fuglestvedt"]`
- `#j0vBeo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0vBeo > .teaser-link > .container`
- `#\32 pp4bG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pp4bG > .teaser-link > .container`
- `#d47OBJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47OBJ > .teaser-link > .container`
- `img[alt="Her lever de stadig på sjarmen"]`
- `#Arbdjq > .teaser-link > .container`
- `#d47l1o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d47l1o > .teaser-link > .container`
- `#\38 pGlLG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pGlLG > .teaser-link > .container`
- `#Okgby1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okgby1 > .teaser-link > .container > .information`
- `#Okgby1 > .teaser-link > .container > h2`
- `#Okgby1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
