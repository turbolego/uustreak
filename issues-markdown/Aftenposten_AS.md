# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-04-24T09:57:15.885Z
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

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 3

#### Affected Elements:

- `#ArRvgM > .teaser-link > .container > .kicker`
- `#\33 pBMpe > .teaser-link > .container > .kicker`
- `#vrkg3p > .teaser-link > .container > .kicker`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 2

#### Affected Elements:

- `#BxrWJw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 1

#### Affected Elements:

- `mm-frontpage-video,:root`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 227

#### Affected Elements:

- `.top-fullwidth`
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.double.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-5t6nwu815 > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1166k_647`
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
- `article[data-pulse-entity-id="reel-138674"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138674"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138674"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138681"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138681"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138681"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `.double.teaser-wrapper:nth-child(7)`
- `#m0P7Jl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0P7Jl > .teaser-link > .container`
- `#wr3wOL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr3wOL > .teaser-link > .container`
- `#j03ayo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j03ayo > .teaser-link > .container`
- `#BxrW89 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxrW89 > .teaser-link > .container > .information`
- `#BxrW89 > .teaser-link > .container > .illustration-container > .text`
- `#BxrW89 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#BxrW89 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `mm-frontpage-video,:root`
- `#aJGPmO > .teaser-link`
- `.games-widget`
- `#Okornk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okornk > .teaser-link > .container`
- `#vrkeGX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrkeGX > .teaser-link > .container`
- `#\30 pB2Ro > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pB2Ro > .teaser-link > .container > .information`
- `#\30 pB2Ro > .teaser-link > .container > .illustration-container > .text`
- `#\30 pB2Ro > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#d4Jwxz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4Jwxz > .teaser-link > .container`
- `#oEM6Kg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEM6Kg > .teaser-link > .container > .information`
- `#oEM6Kg > .teaser-link > .container > h2`
- `#oEM6Kg > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#m0M1xg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0M1xg > .teaser-link > .container`
- `#\30 pBww6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pBww6 > .teaser-link > .container`
- `#JOnQg4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOnQg4 > .teaser-link > .container`
- `#\34 3E169 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3E169 > .teaser-link > .container`
- `#\30 pB30E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pB30E > .teaser-link > .container`
- `#lnMww3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMww3 > .teaser-link > .container`
- `#\36 q4EB0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q4EB0 > .teaser-link > .container`
- `#\33 pBMpe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pBMpe > .teaser-link > .container`
- `#y5z10R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5z10R > .teaser-link > .container`
- `#d4JnBj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4JnBj > .teaser-link > .container`
- `#m0Pe00 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0Pe00 > .teaser-link > .container`
- `#GxPMn9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxPMn9 > .teaser-link > .container`
- `.benefits-widget-container`
- `#vrkAMp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrkAMp > .teaser-link > .container`
- `#Rj1zXx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj1zXx > .teaser-link > .container`
- `#bO8Rnv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8Rnv > .teaser-link > .container > .information`
- `#bO8Rnv > .teaser-link > .container > .illustration-container > .text`
- `#bO8Rnv > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#M75olB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M75olB > .teaser-link > .container`
- `#L4o5aQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4o5aQ > .teaser-link > .container`
- `#JOnQRm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOnQRm > .teaser-link > .container`
- `#Exl3KK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Exl3KK > .teaser-link > .container > .information`
- `#Exl3KK > .teaser-link > .container > h2`
- `#Exl3KK > .teaser-link > .container > .byline > div:nth-child(1)`
- `#Exl3KK > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `img[alt="Fortsetter som landslagstrener"]`
- `#vrkg3p > .teaser-link > .container`
- `#K8LngX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8LngX > .teaser-link > .container`
- `#e7GbEM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7GbEM > .teaser-link > .container`
- `img[alt="Oljepengane før Oljefondet"]`
- `#gk3P75 > .teaser-link > .container > .information`
- `#gk3P75 > .teaser-link > .container > h2`
- `#gk3P75 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ottar Grepstad"]`
- `#n1LWza > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1LWza > .teaser-link > .container`
- `#OkgVJV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkgVJV > .teaser-link > .container`
- `#\35 p3BOz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 p3BOz > .teaser-link > .container`
- `#\36 qP9pz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 qP9pz > .teaser-link > .container`
- `#rr8gXK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr8gXK > .teaser-link > .container > .information`
- `#rr8gXK > .teaser-link > .container > h2`
- `#rr8gXK > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristin Clemet"]`
- `.fullwidth.teaser-wrapper:nth-child(46)`
- `.bundle-title`
- `#BxrWJw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxrWJw > .teaser-link > .container > h2`
- `#QJryWP > .teaser-link > .container > .text-wrapper-small`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8rQjy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8rQjy > .teaser-link > .container`
- `#\39 pBvy5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pBvy5 > .teaser-link > .container`
- `#j03zO9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j03zO9 > .teaser-link > .container`
- `#y5z1ja > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#y5z1ja > .teaser-link > .container`
- `#JOnEJ6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOnEJ6 > .teaser-link > .container`
- `#Oky3gw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oky3gw > .teaser-link > .container`
- `#WvmjPG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvmjPG > .teaser-link > .container`
- `#e7Gwg9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7Gwg9 > .teaser-link > .container`
- `#n196mJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n196mJ > .teaser-link > .container`
- `#\38 pPw3G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pPw3G > .teaser-link > .container`
- `#\30 pvGL2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pvGL2 > .teaser-link > .container`
- `#lnMAGL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMAGL > .teaser-link > .container`
- `#n1LR3Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1LR3Q > .teaser-link > .container > .information`
- `#n1LR3Q > .teaser-link > .container > h2`
- `#n1LR3Q > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Terje Osmundsen"]`
- `#V6gERW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6gERW > .teaser-link > .container > .information`
- `#V6gERW > .teaser-link > .container > h2`
- `#V6gERW > .teaser-link > .container > .byline > div:nth-child(1)`
- `#V6gERW > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#rr8p8e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rr8p8e > .teaser-link > .container`
- `#bO8eVq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bO8eVq > .teaser-link > .container`
- `#pB171V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pB171V > .teaser-link > .container`
- `img[alt="Nå viser Europa muskler"]`
- `#K8LBwe > .teaser-link > .container`
- `img[alt="Dødsfellen i Donbas"]`
- `#aJO544 > .teaser-link > .container > .information`
- `#aJO544 > .teaser-link > .container > h2`
- `#aJO544 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mykola Bielieskov"]`
- `#d473Eo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d473Eo > .teaser-link > .container`
- `#\37 p7o54 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7o54 > .teaser-link > .container > .information`
- `#\37 p7o54 > .teaser-link > .container > h2`
- `#\37 p7o54 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Olav Resell"]`
- `#\37 pPl84 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPl84 > .teaser-link > .container`
- `#vrleQj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vrleQj > .teaser-link > .container`
- `#\38 pPlL1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pPlL1 > .teaser-link > .container > .information`
- `#\38 pPlL1 > .teaser-link > .container > .illustration-container > .text`
- `#\38 pPlL1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#\38 pPlL1 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#\34 3On5R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3On5R > .teaser-link > .container`
- `#K8Lv1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8Lv1E > .teaser-link > .container`
- `#\37 p7bmV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p7bmV > .teaser-link > .container`
- `#zO0535 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zO0535 > .teaser-link > .container`
- `#BxMovg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#BxMovg > .teaser-link > .container > .information`
- `#BxMovg > .teaser-link > .container > h2`
- `#BxMovg > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Siri Thorsland"]`
- `#JOrPBb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOrPBb > .teaser-link > .container`
- `#e719ny > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e719ny > .teaser-link > .container`
- `#e7G9pK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#e7G9pK > .teaser-link > .container > .information`
- `#e7G9pK > .teaser-link > .container > h2`
- `#e7G9pK > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingeborg Moe"]`
