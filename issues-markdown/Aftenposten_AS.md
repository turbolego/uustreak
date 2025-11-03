# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-03T00:24:02.438Z
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

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `img[srcset=""]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 2

#### Affected Elements:

- `#Av46Wn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mK3Q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 235

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136373"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136373"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136373"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136409"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136409"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136409"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136352"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136352"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136352"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136405"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136405"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136405"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136383"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136383"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136383"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136377"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136377"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136377"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136370"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136370"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136370"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136345"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136345"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136345"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#OoLQqE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLQqE > .teaser-link > .container`
- `#lw7Lye > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7Lye > .teaser-link > .container`
- `#dr-edition-teaser-yz7cqh2iv > div`
- `#vgvqLB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvqLB > .teaser-link > .container > .information`
- `#vgvqLB > .teaser-link > .container > h2`
- `#vgvqLB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristin Clemet"]`
- `.bundle-title`
- `#Av46Wn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av46Wn > .teaser-link > .container > h2`
- `#zAW1Vv > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW1Vv > .teaser-link > .container > .text-wrapper-small`
- `#zAW1Vv > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Hanssen"]`
- `#\36 3mK3Q > .teaser-link > .container > .text-wrapper-small`
- `#\36 3mK3Q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6yWq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6yWq > .teaser-link > .container`
- `.games-widget`
- `#mPGX34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGX34 > .teaser-link > .container`
- `#\35 EAMGb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAMGb > .teaser-link > .container`
- `#ny55Gn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny55Gn > .teaser-link > .container`
- `#qP2W8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2W8o > .teaser-link > .container > .information`
- `#qP2W8o > .teaser-link > .container > .illustration-container > .text`
- `#qP2W8o > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#Av4wKE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av4wKE > .teaser-link > .container > .information`
- `#Av4wKE > .teaser-link > .container > h2`
- `#Av4wKE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Erik Børve Rasmussen"]`
- `#OoLGxA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLGxA > .teaser-link > .container`
- `#\33 MlvGe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MlvGe > .teaser-link > .container`
- `#wgMWrL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMWrL > .teaser-link > .container`
- `#vg4dE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .container`
- `#VzyyP6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzyyP6 > .teaser-link > .container`
- `img[alt="Ødelegger alt med et smil"]`
- `#MnMvor > .teaser-link > .container > .information`
- `#MnMvor > .teaser-link > .container > .illustration-container > .text`
- `#MnMvor > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#MnMvor > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Frank Rossavik"][width="88"][height="88"]`
- `#vg0nWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg0nWX > .teaser-link > .container`
- `#\32 5RRVx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5RRVx > .teaser-link > .container`
- `#\35 E1xz1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1xz1 > .teaser-link > .container`
- `#\31 MgL1W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgL1W > .teaser-link > .container`
- `#\34 ByJVo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 ByJVo > .teaser-link > .container`
- `#Gyzg8l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyzg8l > .teaser-link > .container`
- `.benefits-widget-container`
- `#jQRvrw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQRvrw > .teaser-link > .container`
- `#wgM7oL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM7oL > .teaser-link > .container`
- `#\35 E1MBO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1MBO > .teaser-link > .container`
- `#PpWk10 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWk10 > .teaser-link > .container`
- `#vgagVl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgagVl > .teaser-link > .container`
- `#pPJAPV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJAPV > .teaser-link > .container > .information`
- `#pPJAPV > .teaser-link > .container > h2`
- `#pPJAPV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Geir Stray Andreassen"]`
- `#zAWW9q > .teaser-link > .container > .text-wrapper-small`
- `#zAWW9q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWq1w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWq1w > .teaser-link > .container > .information`
- `#zAWq1w > .teaser-link > .container > h2`
- `#zAWq1w > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Filip Roshauw"]`
- `#JbjlGJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbjlGJ > .teaser-link > .container`
- `#dRo32o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRo32o > .teaser-link > .container > .information`
- `#dRo32o > .teaser-link > .container > h2`
- `#dRo32o > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Eivind Gjemdal"]`
- `#jQ8Ado > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8Ado > .teaser-link > .container`
- `#\35 EA9we > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EA9we > .teaser-link > .container`
- `#MnMXxK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnMXxK > .teaser-link > .container`
- `#dRo6Aq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRo6Aq > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(45)`
- `#QMnMwR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMnMwR > .teaser-link > .container`
- `#EydPGa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydPGa > .teaser-link > .container > .information`
- `#EydPGa > .teaser-link > .container > h2`
- `#EydPGa > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Amund Trellevik "]`
- `#OoL5qO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoL5qO > .teaser-link > .container > .information`
- `#OoL5qO > .teaser-link > .container > h2`
- `#OoL5qO > .teaser-link > .container > .byline > div:nth-child(1)`
- `#OoL5qO > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#B05oQl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05oQl > .teaser-link > .container`
- `#Mny3qE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mny3qE > .teaser-link > .container`
- `#\31 MgRlW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgRlW > .teaser-link > .container`
- `#B05emv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05emv > .teaser-link > .container > .information`
- `#B05emv > .teaser-link > .container > h2`
- `#B05emv > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nazneen Khan-Østrem"]`
- `#pPJznw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJznw > .teaser-link > .container`
- `#\38 qezpE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qezpE > .teaser-link > .container`
- `#QMdQwQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMdQwQ > .teaser-link > .container`
- `#eM2mka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2mka > .teaser-link > .container`
- `#\34 B6yEG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6yEG > .teaser-link > .container`
- `#pPJa9W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJa9W > .teaser-link > .container > .information`
- `#pPJa9W > .teaser-link > .container > h2`
- `#pPJa9W > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Trond Norén Isaksen"]`
- `#xm1Kb8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm1Kb8 > .teaser-link > .container`
- `#o3dxER > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3dxER > .teaser-link > .container`
- `#zAveOb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAveOb > .teaser-link > .container`
- `#kw49jj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw49jj > .teaser-link > .container`
- `#\36 3p2JO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#\36 3p2JO > .teaser-link > .container`
- `#wgMa51 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMa51 > .teaser-link > .container`
- `#zAd3xb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAd3xb > .teaser-link > .container`
- `#lw7og3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7og3 > .teaser-link > .container`
- `#gwVoL9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVoL9 > .teaser-link > .container`
- `#xm1q2l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm1q2l > .teaser-link > .container > .information`
- `#xm1q2l > .teaser-link > .container > .illustration-container > .text`
- `#xm1q2l > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Maryam Iqbal Tahir"]`
- `#\31 MmE0B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MmE0B > .teaser-link > .container`
- `img[alt="Historiske tech-profiler"]`
- `#rP01Ow > .teaser-link > .container`
- `#dRo8bo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRo8bo > .teaser-link > .container`
- `#EydPej > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydPej > .teaser-link > .container > .information`
- `#EydPej > .teaser-link > .container > .illustration-container > .text`
- `#EydPej > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#W09rok > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09rok > .teaser-link > .container`
- `#GyzwV6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzwV6 > .teaser-link > .container`
- `#QMnvyP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMnvyP > .teaser-link > .container`
- `#lw7v6k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7v6k > .teaser-link > .container > .information`
- `#lw7v6k > .teaser-link > .container > .illustration-container > .text`
- `#lw7v6k > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#lw7v6k > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Frank Rossavik"][width="88"][height="88"]`
- `#\31 MgAxe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgAxe > .teaser-link > .container`
- `#\32 5R2ky > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5R2ky > .teaser-link > .container`
- `#dRoWjq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRoWjq > .teaser-link > .container > .information`
- `#dRoWjq > .teaser-link > .container > h2`
- `#dRoWjq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingrid Vik"]`
- `#jQ8GLb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8GLb > .teaser-link > .container`
