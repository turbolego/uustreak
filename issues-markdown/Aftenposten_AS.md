# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-05T18:35:32.150Z
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
- **Count:** 3

#### Affected Elements:

- `#OoLQqE > .teaser-link > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
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
- `#dr-edition-teaser-gji99p1lq > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
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
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#OoLQqE > .teaser-link > .teaser-image-wrapper`
- `#OoLQqE > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(7) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#eM2bBM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2bBM > .teaser-link > .container`
- `#dr-edition-teaser-43p2bnxir > div`
- `.feed-item[data-pulse-entity-id="7393x4"][data-pulse-source="oppsummert-widget"] > .oppsummert-overlay-wrapper`
- `.feed-item[data-pulse-entity-id="0VwQ8E"][data-pulse-source="oppsummert-widget"] > .oppsummert-overlay-wrapper`
- `.feed-item[data-pulse-entity-id="739dRV"][data-pulse-source="oppsummert-widget"] > .oppsummert-overlay-wrapper`
- `#\37 3XM24 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XM24 > .teaser-link > .container`
- `#Mnx7wM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mnx7wM > .teaser-link > .container`
- `#kwqEkX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqEkX > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(14) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#RzPnMO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#RzPnMO > .teaser-link > .container > h2`
- `article[data-timestamp="2025-11-05T06:47:23Z"] > .teaser-link > .container > .text-wrapper-small`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#LMvpnx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvpnx > .teaser-link > .container`
- `#vg4dE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .container`
- `#\37 39po3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39po3 > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#xm1nkV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm1nkV > .teaser-link > .container > .information`
- `#xm1nkV > .teaser-link > .container > .illustration-container > .text`
- `#xm1nkV > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\35 EAMGb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAMGb > .teaser-link > .container`
- `#o3J3RR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3J3RR > .teaser-link > .container > .information`
- `#o3J3RR > .teaser-link > .container > .illustration-container > .text`
- `#o3J3RR > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Ingunn Økland"]`
- `#mPGX34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGX34 > .teaser-link > .container`
- `#\37 395wv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 395wv > .teaser-link > .container`
- `#XjGqvo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjGqvo > .teaser-link > .container`
- `#KMEnV7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMEnV7 > .teaser-link > .container`
- `#qP2W8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2W8o > .teaser-link > .container > .information`
- `#qP2W8o > .teaser-link > .container > .illustration-container > .text`
- `#qP2W8o > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#\34 Bnok9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 Bnok9 > .teaser-link > .container`
- `#Gyp61J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyp61J > .teaser-link > .container`
- `.benefits-widget-container`
- `#\32 5MdRR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5MdRR > .teaser-link > .container`
- `#KMJL75 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMJL75 > .teaser-link > .container`
- `#\38 qejmd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qejmd > .teaser-link > .container`
- `#lwp61M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwp61M > .teaser-link > .container`
- `#vgEAWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgEAWX > .teaser-link > .container`
- `#\32 5Q2nG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Q2nG > .teaser-link > .container`
- `#VzOzn6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOzn6 > .teaser-link > .container`
- `#KMo53G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMo53G > .teaser-link > .container`
- `img[alt="Høyre ut mot Avinor: – Naivt"]`
- `#\31 MQnxq > .teaser-link > .container`
- `#\34 B62aV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B62aV > .teaser-link > .container`
- `#jQV93L > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQV93L > .teaser-link > .container > .information`
- `#jQV93L > .teaser-link > .container > h2`
- `#jQV93L > .teaser-link > .container > .byline > div:nth-child(1)`
- `#jQV93L > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#KMEMWy > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMEMWy > .teaser-link > .container`
- `#B07jPG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B07jPG > .teaser-link > .container > .information`
- `#B07jPG > .teaser-link > .container > .illustration-container > .text`
- `#B07jPG > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"][width="128"][height="128"]`
- `#vgEg9V > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgEg9V > .teaser-link > .container`
- `#VzOPE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOPE4 > .teaser-link > .container`
- `#KME8kG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KME8kG > .teaser-link > .container`
- `#QMp7bV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMp7bV > .teaser-link > .container`
- `#jQVa8n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVa8n > .teaser-link > .container`
- `#xmxA9n > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmxA9n > .teaser-link > .container`
- `img[alt="Kjempesmell på ny måling"]`
- `#Pp64p5 > .teaser-link > .container`
- `#gwXkK9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwXkK9 > .teaser-link > .container`
- `#QMpM1x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMpM1x > .teaser-link > .container > .information`
- `#QMpM1x > .teaser-link > .container > h2`
- `#QMpM1x > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Arina Aamir"]`
- `article[data-timestamp="2025-11-05T10:21:29Z"] > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `article[data-timestamp="2025-11-05T10:21:29Z"] > .teaser-link > .container`
- `#LMyAwR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMyAwR > .teaser-link > .container > .information`
- `#LMyAwR > .teaser-link > .container > h2`
- `#LMyAwR > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jill Walker Rettberg"]`
- `#OoR8vA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoR8vA > .teaser-link > .container`
- `#\31 MQ5AM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MQ5AM > .teaser-link > .container`
- `#jQVl3o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVl3o > .teaser-link > .container`
- `article[data-timestamp="2025-11-05T17:15:12Z"] > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `article[data-timestamp="2025-11-05T17:15:12Z"] > .teaser-link > .container`
- `#KMOR15 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMOR15 > .teaser-link > .container`
- `#zAdmg1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdmg1 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(61)`
- `#\30 Vew6B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 Vew6B > .teaser-link > .container`
- `#LMylM4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMylM4 > .teaser-link > .container`
- `#pP0WJX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP0WJX > .teaser-link > .container`
- `.container-linear-gradient`
- `.container-darken`
- `img[alt="Hvilket spill er dette?"]`
- `#zAR54v > .teaser-link > .container`
- `#Pp6yVp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6yVp > .teaser-link > .container`
- `#\33 ML4le > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 ML4le > .teaser-link > .container`
- `#VzOqb1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOqb1 > .teaser-link > .container`
- `#xmx85R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmx85R > .teaser-link > .container`
- `#zAR5bK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAR5bK > .teaser-link > .container`
- `#kw4k3A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw4k3A > .teaser-link > .container`
- `#PpW6Bz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpW6Bz > .teaser-link > .container > .information`
- `#PpW6Bz > .teaser-link > .container > .illustration-container > .text`
- `#PpW6Bz > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"][width="88"][height="88"]`
- `img[alt="OUS har prioritert psykiatrien"]`
- `#yELeyE > .teaser-link > .container > .information`
- `#yELeyE > .teaser-link > .container > h2`
- `#yELeyE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anders Mohn Frafjord "]`
- `#bm9MWe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9MWe > .teaser-link > .container > .information`
- `#bm9MWe > .teaser-link > .container > h2`
- `#bm9MWe > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Frank Willy Djuvik"]`
- `#\32 5MGvR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5MGvR > .teaser-link > .container`
- `#o3dJja > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3dJja > .teaser-link > .container`
- `#OoRrpV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoRrpV > .teaser-link > .container`
- `img[alt="Åpenhet styrker Forsvaret"]`
- `#eM2leg > .teaser-link > .container > .information`
- `#eM2leg > .teaser-link > .container > .kicker`
- `#eM2leg > .teaser-link > .container > h2`
- `#eM2leg > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Eirik Kristoffersen"]`
- `#\30 VwjMB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VwjMB > .teaser-link > .container`
- `#kwqazA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqazA > .teaser-link > .container`
- `#\37 390vw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 390vw > .teaser-link > .container > .information`
- `#\37 390vw > .teaser-link > .container > h2`
- `#\37 390vw > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\37 390vw > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\33 MLJPX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLJPX > .teaser-link > .container`
