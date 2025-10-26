# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-26T00:23:55.606Z
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
- **Count:** 10

#### Affected Elements:

- `#yEkMar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzkjQ2 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XQPv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Krever Norgespris på solkraft"]`
- `#\37 3Xmw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yELmJE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MlRLv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 Ml5nX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X7W3 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgxVJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- `.fullwidth.teaser-wrapper:nth-child(2)`
- `.double.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
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
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(8) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#yEkMar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkMar > .teaser-link > .container > h2`
- `#RzkjQ2 > .teaser-link > .container > .text-wrapper-small`
- `#RzkjQ2 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzWopr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzWopr > .teaser-link > .container`
- `#EydqWj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydqWj > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(13)`
- `.games-widget`
- `#dRobqw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRobqw > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#\37 3XV03 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XV03 > .teaser-link > .container`
- `#Vzyoq1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Vzyoq1 > .teaser-link > .container`
- `#wgM99G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM99G > .teaser-link > .container`
- `#vgvzoB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvzoB > .teaser-link > .container`
- `#eM2WvO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2WvO > .teaser-link > .container`
- `#wg7pMo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wg7pMo > .teaser-link > .container > .information`
- `#wg7pMo > .teaser-link > .container > .illustration-container > .text`
- `#wg7pMo > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kristin Storrusten"]`
- `#bmRAL3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmRAL3 > .teaser-link > .container`
- `#PpWg27 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWg27 > .teaser-link > .container`
- `#\35 E1zOK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1zOK > .teaser-link > .container`
- `#\36 3pKje > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3pKje > .teaser-link > .container`
- `#KMQbb4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQbb4 > .teaser-link > .container > .information`
- `#KMQbb4 > .teaser-link > .container > h2`
- `#KMQbb4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Odd Isungset"]`
- `#vg0nWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg0nWX > .teaser-link > .container`
- `#\34 B6XaE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6XaE > .teaser-link > .container`
- `#zAvA01 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAvA01 > .teaser-link > .container`
- `.benefits-widget-container`
- `#\32 5RXxa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5RXxa > .teaser-link > .container`
- `#\35 E1k5O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1k5O > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(33) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 3XQPv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XQPv > .teaser-link > .container > h2`
- `#xm1w0B > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Krever Norgespris på solkraft"]`
- `#eMAGB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMAGB4 > .teaser-link > .container`
- `#lw7bee > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7bee > .teaser-link > .container`
- `img[alt="Her blir VM-kongen fragått"]`
- `#KMQe7o > .teaser-link > .container`
- `#\36 3bemO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3bemO > .teaser-link > .container`
- `#jQ8Bve > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8Bve > .teaser-link > .container`
- `#OoLjmw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLjmw > .teaser-link > .container`
- `#EydLLo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydLLo > .teaser-link > .container`
- `#o3dlWj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3dlWj > .teaser-link > .container`
- `#xmGaeB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmGaeB > .teaser-link > .container > .information`
- `#xmGaeB > .teaser-link > .container > .illustration-container > .text`
- `#xmGaeB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#xmGaeB > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `#wgM0RM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM0RM > .teaser-link > .container`
- `#gwVyM0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVyM0 > .teaser-link > .container`
- `#\37 3X4M4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X4M4 > .teaser-link > .container`
- `#OoLEJ1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLEJ1 > .teaser-link > .container`
- `#qPz7kg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPz7kg > .teaser-link > .container`
- `#\33 MlXzP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MlXzP > .teaser-link > .container`
- `#\34 B6XVg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6XVg > .teaser-link > .container`
- `#kw4RJv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw4RJv > .teaser-link > .container`
- `#Av6AQM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6AQM > .teaser-link > .container`
- `img[alt="Valgt til ny leder for KrFU"]`
- `#xm1wjl > .teaser-link > .container`
- `img[alt="En helt absurd suksess"]`
- `#qPzeXm > .teaser-link > .container`
- `#JbVx46 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbVx46 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#JbVx46 > .teaser-link > .container`
- `img[alt="Asbestfunn ved Oslo-skole"]`
- `#\33 MlX5e > .teaser-link > .container`
- `img[alt="Spinnville påstander"]`
- `#wgMv1A > .teaser-link > .container > .information`
- `#wgMv1A > .teaser-link > .container > .illustration-container > .text`
- `#wgMv1A > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#wgMv1A > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Joacim Lund"][width="88"][height="88"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(55) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\37 3Xmw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Xmw8 > .teaser-link > .container > h2`
- `#yELmJE > .teaser-link > .container > .text-wrapper-small`
- `#yELmJE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MlRLv > .teaser-link > .container > .text-wrapper-small`
- `#\33 MlRLv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgyjK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgyjK > .teaser-link > .container`
- `#zAW9Qv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW9Qv > .teaser-link > .container`
- `#KMQeyo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQeyo > .teaser-link > .container`
- `#\36 3p8zW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3p8zW > .teaser-link > .container`
- `#dRoLAz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRoLAz > .teaser-link > .container > .information`
- `#dRoLAz > .teaser-link > .container > h2`
- `#dRoLAz > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Christian Myhrvold"]`
- `#OoLm8O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLm8O > .teaser-link > .container`
- `#\37 3Xxbv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Xxbv > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(61) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\33 Ml5nX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 Ml5nX > .teaser-link > .container > h2`
- `#\37 3X7W3 > .teaser-link > .container > .text-wrapper-small`
- `#\37 3X7W3 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWb9M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWb9M > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(63) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#lwB8eA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwB8eA > .teaser-link > .container > .illustration-container > .text`
- `#lwB8eA > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#\31 MgxVJ > .teaser-link > .container > .text-wrapper-small`
- `#\31 MgxVJ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn4azB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mn4azB > .teaser-link > .container`
- `#KMOeMy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMOeMy > .teaser-link > .container`
- `#XjxgEW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjxgEW > .teaser-link > .container`
- `#jQ8KQz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8KQz > .teaser-link > .container > .information`
- `#jQ8KQz > .teaser-link > .container > h2`
- `#jQ8KQz > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingrid Gjerde"]`
- `#\34 B61xa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B61xa > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\34 B61xa > .teaser-link > .container`
- `#rP0MGl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP0MGl > .teaser-link > .container > .information`
- `#rP0MGl > .teaser-link > .container > h2`
- `#rP0MGl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#wgMR5o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMR5o > .teaser-link > .container`
- `#alXlJA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alXlJA > .teaser-link > .container`
- `#gwVzVL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVzVL > .teaser-link > .container`
- `#B05WBe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05WBe > .teaser-link > .container`
- `#wgMKPM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMKPM > .teaser-link > .container`
