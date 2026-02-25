# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-02-25T00:32:32.183Z
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
- **Count:** 12

#### Affected Elements:

- `#Bxj2ye > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#RjGydW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#pBAjno > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOG98A > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3o7qo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#aJbwKA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvRO7g > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4wO3z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8zJM5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8Ge1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgJl4 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr839p > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 192

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#y567Xr > .teaser-link > .teaser-image-wrapper`
- `#y567Xr > .teaser-link > .container > .information`
- `#y567Xr > .teaser-link > .container > .illustration-container > .text`
- `#y567Xr > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `#QJ7ozx`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Bxj2ye > .teaser-link > .teaser-image-wrapper`
- `#Bxj2ye > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(5) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `._heading_12jab_646`
- `article[data-pulse-entity-id="reel-137924"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137924"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137924"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137920"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137920"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137920"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137907"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137907"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137907"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137906"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137906"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137906"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137884"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137884"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137884"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137883"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137883"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137883"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137882"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137882"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137882"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137878"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137878"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137878"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137849"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137849"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137849"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `article[data-pulse-entity-id="reel-137856"] > a > ._preview-image_12jab_714[loading="lazy"]`
- `article[data-pulse-entity-id="reel-137856"] > a > ._preview-duration_1abgb_389`
- `article[data-pulse-entity-id="reel-137856"] > a > ._preview-title_12jab_726._preview-title_1abgb_417`
- `.double.teaser-wrapper:nth-child(7)`
- `.magazine.teaser-bundle.new-bundles > .bundle-title`
- `#pBAjno > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBAjno > .teaser-link > .container > h2`
- `#bOG98A > .teaser-link > .container > .text-wrapper-small`
- `#bOG98A > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\34 3o7qo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3o7qo > .teaser-link > .container > h2`
- `#L4lpXR > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4lpXR > .teaser-link > .container > .text-wrapper-small`
- `#L4lpXR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Hanssen"]`
- `#aJbwKA > .teaser-link > .container > .text-wrapper-small`
- `#aJbwKA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJy62V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJy62V > .teaser-link > .container`
- `#\30 pGey6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 pGey6 > .teaser-link > .container`
- `.games-widget`
- `#Ar297j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar297j > .teaser-link > .container`
- `#d4mWnX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4mWnX > .teaser-link > .container`
- `img[alt="Trumps mann i EU kan falle"]`
- `#d4n1xA > .teaser-link > .container > .information`
- `#d4n1xA > .teaser-link > .container > .kicker`
- `#d4n1xA > .teaser-link > .container > h2`
- `#d4n1xA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nick Sitter"]`
- `#\37 pdJw8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pdJw8 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(20) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#K8nyJ5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8nyJ5 > .teaser-link > .container > .illustration-container > .text`
- `#K8nyJ5 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#WvRO7g > .teaser-link > .container > .text-wrapper-small`
- `#WvRO7g > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#j0l9Vw > .teaser-link > .container > .text-wrapper-small`
- `#j0l9Vw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6WpyL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#q6WpyL > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(22) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#d4wO3z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4wO3z > .teaser-link > .container > h2`
- `#K8zJM5 > .teaser-link > .container > .text-wrapper-small`
- `#K8zJM5 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(24) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#wr8Ge1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wr8Ge1 > .teaser-link > .container > h2`
- `#zOgJl4 > .teaser-link > .container > .text-wrapper-small`
- `#zOgJl4 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xr839p > .teaser-link > .container > .text-wrapper-small`
- `#xr839p > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p6dR8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p6dR8 > .teaser-link > .container`
- `#JOxeoX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxeoX > .teaser-link > .container`
- `#ArPlqx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArPlqx > .teaser-link > .container`
- `#zOgaKb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOgaKb > .teaser-link > .container`
- `#WvjKyK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvjKyK > .teaser-link > .container`
- `#ArL8yn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArL8yn > .teaser-link > .container`
- `.benefits-widget-container`
- `#zOrn3w > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOrn3w > .teaser-link > .container`
- `#gk62rL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gk62rL > .teaser-link > .container > .information`
- `#gk62rL > .teaser-link > .container > .kicker`
- `#gk62rL > .teaser-link > .container > h2`
- `#gk62rL > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Steinar Jung-Lian"]`
- `#JOQJW4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOQJW4 > .teaser-link > .container`
- `#bOzJnl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOzJnl > .teaser-link > .container`
- `#JOQoJ8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOQoJ8 > .teaser-link > .container`
- `#\32 pBG0r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pBG0r > .teaser-link > .container`
- `#JOxP9R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOxP9R > .teaser-link > .container`
- `#L4lnoJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L4lnoJ > .teaser-link > .container`
- `#V6Pq9W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6Pq9W > .teaser-link > .container`
- `#\38 pJm02 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJm02 > .teaser-link > .container`
- `#wrA8rG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrA8rG > .teaser-link > .container`
- `#\37 p6KMV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 p6KMV > .teaser-link > .container`
- `#bOgMxl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOgMxl > .teaser-link > .container > .information`
- `#bOgMxl > .teaser-link > .container > h2`
- `#bOgMxl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Christian Lomsdalen"]`
- `#n1QgPL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1QgPL > .teaser-link > .container`
- `#JOx5dP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JOx5dP > .teaser-link > .container`
- `#GxMGWx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GxMGWx > .teaser-link > .container`
- `#WvRbXj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#WvRbXj > .teaser-link > .container`
- `#wrAEGL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrAEGL > .teaser-link > .container`
- `#\38 pJmbG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pJmbG > .teaser-link > .container`
- `#Okr52E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okr52E > .teaser-link > .container > .information`
- `#Okr52E > .teaser-link > .container > h2`
- `#Okr52E > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Håkon Lunde Saxi"]`
- `#Bxj4kw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Bxj4kw > .teaser-link > .container`
- `#K8zdzM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8zdzM > .teaser-link > .container`
- `#ArLj6z > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArLj6z > .teaser-link > .container`
- `#\34 3odAV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 3odAV > .teaser-link > .container`
- `#\36 q9wA0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q9wA0 > .teaser-link > .container`
- `#V69OA6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V69OA6 > .teaser-link > .container`
- `#Gx3dkl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx3dkl > .teaser-link > .container`
- `img[alt="Vrengebilde av Pahlavi"]`
- `#j0aV6o > .teaser-link > .container > .information`
- `#j0aV6o > .teaser-link > .container > h2`
- `#j0aV6o > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Sarah Gaulin"]`
- `#rrlpER > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrlpER > .teaser-link > .container`
- `#\36 q62RO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 q62RO > .teaser-link > .container`
- `#K8z0g5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K8z0g5 > .teaser-link > .container`
- `#\38 pQbkW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 pQbkW > .teaser-link > .container`
- `#XM6ydB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XM6ydB > .teaser-link > .container`
- `#ArLOax > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArLOax > .teaser-link > .container`
