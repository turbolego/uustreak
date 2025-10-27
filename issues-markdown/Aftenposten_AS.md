# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-27T00:24:45.901Z
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
- **Count:** 5

#### Affected Elements:

- `#qPzX4E > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#lwp61M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjPaEx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmRAL3 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 215

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(2) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#qPzX4E > .teaser-link > .teaser-image-wrapper`
- `#qPzX4E > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(2) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `.double.teaser-wrapper:nth-child(3)`
- `#jQ8lLq > .teaser-link > .teaser-image-wrapper`
- `#jQ8lLq > .teaser-link > .container > .information`
- `#jQ8lLq > .teaser-link > .container > h2`
- `#jQ8lLq > .teaser-link > .container > .byline > div:nth-child(1)`
- `#jQ8lLq > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136294"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136294"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136294"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
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
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#\30 V5LJA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 V5LJA > .teaser-link > .container`
- `#dr-edition-teaser-z2wwmg8ez > div`
- `#\36 3pd4r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3pd4r > .teaser-link > .container`
- `#XjxdGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjxdGE > .teaser-link > .container > .information`
- `#XjxdGE > .teaser-link > .container > h2`
- `#XjxdGE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Agnes Ravatn"]`
- `#QMnOO4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMnOO4 > .teaser-link > .container`
- `#qP250E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP250E > .teaser-link > .container`
- `#eM2WvO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2WvO > .teaser-link > .container`
- `.games-widget`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#\33 MWyPA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWyPA > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\33 MWyPA > .teaser-link > .container`
- `#yEkMar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkMar > .teaser-link > .container`
- `#\35 EAMGb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAMGb > .teaser-link > .container`
- `#MnKa2K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnKa2K > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(21) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#lwp61M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwp61M > .teaser-link > .container > h2`
- `#XjPaEx > .teaser-link > .container > .text-wrapper-small`
- `#XjPaEx > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmRAL3 > .teaser-link > .container > .text-wrapper-small`
- `#bmRAL3 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XV03 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XV03 > .teaser-link > .container`
- `#\31 MgoBB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgoBB > .teaser-link > .container > .information`
- `#\31 MgoBB > .teaser-link > .container > .illustration-container > .text`
- `#\31 MgoBB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#jQRvrw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQRvrw > .teaser-link > .container`
- `#W09d9k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09d9k > .teaser-link > .container`
- `#\37 3XLwK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XLwK > .teaser-link > .container`
- `#\35 E1lXO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1lXO > .teaser-link > .container`
- `#gwVBXJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVBXJ > .teaser-link > .container`
- `#yEayl2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEayl2 > .teaser-link > .container`
- `#W09dnL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09dnL > .teaser-link > .container`
- `#vg0nWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg0nWX > .teaser-link > .container`
- `#eMbx1R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMbx1R > .teaser-link > .container`
- `.benefits-widget-container`
- `#pP792W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP792W > .teaser-link > .container`
- `#RzP8VA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzP8VA > .teaser-link > .container`
- `#PpWmJ6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWmJ6 > .teaser-link > .container`
- `#kw2by6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw2by6 > .teaser-link > .container`
- `#lw7L1G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7L1G > .teaser-link > .container`
- `#\36 3pKje > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3pKje > .teaser-link > .container`
- `#rP0Xww > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP0Xww > .teaser-link > .container`
- `#qP2yo1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2yo1 > .teaser-link > .container`
- `#OoG7lV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG7lV > .teaser-link > .container > .information`
- `#OoG7lV > .teaser-link > .container > h2`
- `#OoG7lV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Malin Eberhard-Gran"]`
- `#\32 5RKgq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5RKgq > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(41)`
- `#dRoP1j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRoP1j > .teaser-link > .container`
- `#kw4B3B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw4B3B > .teaser-link > .container`
- `#GyzKy4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzKy4 > .teaser-link > .container`
- `#rP0XL3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP0XL3 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(46)`
- `#qPzXnz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPzXnz > .teaser-link > .container`
- `#rP0Go3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP0Go3 > .teaser-link > .container`
- `#rP0E3e > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP0E3e > .teaser-link > .container`
- `#JbKqPj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKqPj > .teaser-link > .container`
- `#gwVW79 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVW79 > .teaser-link > .container`
- `#dRobqw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRobqw > .teaser-link > .container`
- `#vgvzoB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvzoB > .teaser-link > .container`
- `#PpWqbR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWqbR > .teaser-link > .container`
- `#VzKwvd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzKwvd > .teaser-link > .container`
- `#KMQbb4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQbb4 > .teaser-link > .container > .information`
- `#KMQbb4 > .teaser-link > .container > h2`
- `#KMQbb4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Odd Isungset"]`
- `#PpWg27 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWg27 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(56)`
- `#o3dlWj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3dlWj > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(58)`
- `#OoLjmw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLjmw > .teaser-link > .container`
- `#\34 B6XaE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6XaE > .teaser-link > .container`
- `#\32 5RXxa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5RXxa > .teaser-link > .container`
- `#QMnq1q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMnq1q > .teaser-link > .container`
- `#VzWopr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzWopr > .teaser-link > .container`
- `#wg7pMo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wg7pMo > .teaser-link > .container > .information`
- `#wg7pMo > .teaser-link > .container > .illustration-container > .text`
- `#wg7pMo > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kristin Storrusten"]`
- `#jQ8Bve > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8Bve > .teaser-link > .container`
- `#Vzyoq1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Vzyoq1 > .teaser-link > .container`
- `#\37 3X4M4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X4M4 > .teaser-link > .container`
- `#xmGaeB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGaeB > .teaser-link > .container > .information`
- `#xmGaeB > .teaser-link > .container > .illustration-container > .text`
- `#xmGaeB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#xmGaeB > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#wgM0RM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM0RM > .teaser-link > .container`
- `#Av6AQM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6AQM > .teaser-link > .container`
- `img[alt="Spinnville påstander"]`
- `#wgMv1A > .teaser-link > .container > .information`
- `#wgMv1A > .teaser-link > .container > .illustration-container > .text`
- `#wgMv1A > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#wgMv1A > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#OoLm8O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLm8O > .teaser-link > .container`
- `#\31 MgyjK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgyjK > .teaser-link > .container`
- `img[alt="En helt absurd suksess"]`
- `#qPzeXm > .teaser-link > .container`
- `#zAW9Qv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW9Qv > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(71)`
- `#dRoLAz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRoLAz > .teaser-link > .container > .information`
- `#dRoLAz > .teaser-link > .container > h2`
- `#dRoLAz > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Christian Myhrvold"]`
