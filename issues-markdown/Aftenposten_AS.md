# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-05-13T00:52:20.882Z
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

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 5

#### Affected Elements:

- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"]`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, body > iframe`
- `#utif_skyscraperright_1-wlh7fh_bff2f3cf-630d-4907-b20a-fece3dda38d9, iframe[scrolling="no"]`
- `#utif_skyscraperright_1-wlh7fh_bff2f3cf-630d-4907-b20a-fece3dda38d9, #skyscraperright_1-wlh7fh > iframe`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, img`
- `#utif_skyscraperright_1-wlh7fh_bff2f3cf-630d-4907-b20a-fece3dda38d9, img`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 6

#### Affected Elements:

- `#\35 pboKO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pqorA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pd5nOe > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Dette betyr budsjettet for deg"]`
- `#Gx0nr9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0MqMp > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 250

#### Affected Elements:

- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #m`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #n`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #h`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #i`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #k`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #l`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #s`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #g`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #o`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #b`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #c`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #d`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #f`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #j`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #p`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, iframe, iframe[src$="about:blank"], #e`
- `#utif_topboard-p7ft9o_6678f19e-1f56-43e1-b593-40bd618cbd1d, img`
- `#utif_skyscraperright_1-wlh7fh_bff2f3cf-630d-4907-b20a-fece3dda38d9, iframe[scrolling="no"], #k`
- `#utif_skyscraperright_1-wlh7fh_bff2f3cf-630d-4907-b20a-fece3dda38d9, iframe[scrolling="no"], #m`
- `#utif_skyscraperright_1-wlh7fh_bff2f3cf-630d-4907-b20a-fece3dda38d9, iframe[scrolling="no"], #b`
- `#utif_skyscraperright_1-wlh7fh_bff2f3cf-630d-4907-b20a-fece3dda38d9, iframe[scrolling="no"], #d`
- `#utif_skyscraperright_1-wlh7fh_bff2f3cf-630d-4907-b20a-fece3dda38d9, iframe[scrolling="no"], #i`
- `#utif_skyscraperright_1-wlh7fh_bff2f3cf-630d-4907-b20a-fece3dda38d9, img`
- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-fnd4rzize > div`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_1166k_647`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138936"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138935"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138935"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138935"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138925"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138925"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138925"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138902"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138902"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138902"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138901"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138901"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138901"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138900"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138900"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138900"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138932"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138932"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138932"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138929"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138929"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138929"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138904"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138904"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138904"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `article[data-pulse-entity-id="reel-138897"] > a > ._preview-image_1166k_715[loading="lazy"]`
- `article[data-pulse-entity-id="reel-138897"] > a > ._preview-duration_1vb6w_390`
- `article[data-pulse-entity-id="reel-138897"] > a > ._preview-title_1166k_727._preview-title_1vb6w_418`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#\30 p9XR2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9XR2 > .teaser-link > .container`
- `#ArPglA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ArPglA > .teaser-link > .container`
- `#dr-edition-teaser-c9z45qcyj > div`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(11) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#ExJmWG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJmWG > .teaser-link > .container > h2`
- `#ExJmWG > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jonas Gahr Støre"]`
- `#\35 pboKO > .teaser-link > .container > .text-wrapper-small`
- `#\35 pboKO > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 pqorA > .teaser-link > .container > .text-wrapper-small`
- `#\33 pqorA > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv6ejd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv6ejd > .teaser-link > .container`
- `#V6QGX4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QGX4 > .teaser-link > .container`
- `#\32 pvboq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 pvboq > .teaser-link > .container`
- `.games-widget`
- `#m05ydg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m05ydg > .teaser-link > .container`
- `#rrM92A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rrM92A > .teaser-link > .container`
- `#k08BpB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08BpB > .teaser-link > .container > .information`
- `#k08BpB > .teaser-link > .container > .illustration-container > .text`
- `#k08BpB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="88"][height="88"]`
- `#JO6LQj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6LQj > .teaser-link > .container`
- `#lnKdrk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnKdrk > .teaser-link > .container`
- `#\33 p1d80 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 p1d80 > .teaser-link > .container`
- `#n1GmMB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GmMB > .teaser-link > .container > .information`
- `#n1GmMB > .teaser-link > .container > h2`
- `#n1GmMB > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjetil Lismoen"]`
- `#n1GWEQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GWEQ > .teaser-link > .container`
- `#\38 p5xJd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 p5xJd > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\38 p5xJd > .teaser-link > .container > .information`
- `#\38 p5xJd > .teaser-link > .container > h2`
- `#\38 p5xJd > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#\30 p9b2A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9b2A > .teaser-link > .container`
- `#\30 ppvlB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 ppvlB > .teaser-link > .container`
- `#\31 6qRwK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6qRwK > .teaser-link > .container`
- `#\31 6vVwW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6vVwW > .teaser-link > .container`
- `#JO6vl4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JO6vl4 > .teaser-link > .container`
- `#ExJROG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJROG > .teaser-link > .container`
- `#n1GB5x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#n1GB5x > .teaser-link > .container`
- `#lnMAGL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnMAGL > .teaser-link > .container`
- `.benefits-widget-container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(32) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `.teaser-image[alt="Denne pengebruken er spinnvill"][decoding="async"]`
- `#j0Orow > .teaser-link > .container > .illustration-container > .text`
- `#j0Orow > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"][width="128"][height="128"]`
- `#Pd5nOe > .teaser-link > .container > .text-wrapper-small`
- `#Pd5nOe > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ExJzrK > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Dette betyr budsjettet for deg"]`
- `#pBddkG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pBddkG > .teaser-link > .container`
- `#bOXj8B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bOXj8B > .teaser-link > .container`
- `#Rj6av5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rj6av5 > .teaser-link > .container`
- `#\31 6qOvB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6qOvB > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\31 6qOvB > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(37) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Gx0nr9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gx0nr9 > .teaser-link > .container > h2`
- `#m0MqMp > .teaser-link > .container > .text-wrapper-small`
- `#m0MqMp > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4vbLO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#d4vbLO > .teaser-link > .container`
- `#ln4l0M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ln4l0M > .teaser-link > .container`
- `#QJrGBR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJrGBR > .teaser-link > .container > .information`
- `#QJrGBR > .teaser-link > .container > .illustration-container > .text`
- `#QJrGBR > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"][width="128"][height="128"]`
- `#M76ayE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#M76ayE > .teaser-link > .container`
- `#\37 pVmov > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVmov > .teaser-link > .container > .information`
- `#\37 pVmov > .teaser-link > .container > h2`
- `#\37 pVmov > .teaser-link > .container > .byline > div:nth-child(1)`
- `#\37 pVmov > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#zOMkO9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zOMkO9 > .teaser-link > .container`
- `#V6QoEd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QoEd > .teaser-link > .container`
- `#\37 pVyO9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVyO9 > .teaser-link > .container`
- `#L46ayq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L46ayq > .teaser-link > .container`
- `#Ar7JLr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ar7JLr > .teaser-link > .container`
- `#gkvyPk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gkvyPk > .teaser-link > .container`
- `#\31 6vmyX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 6vmyX > .teaser-link > .container`
- `#K86bRE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#K86bRE > .teaser-link > .container`
- `#oEkeyj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEkeyj > .teaser-link > .container`
- `#QJ59eq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QJ59eq > .teaser-link > .container`
- `img[alt="Virus kjenner ingen grenser"]`
- `#L46jeq > .teaser-link > .container`
- `#\30 p9gVM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 p9gVM > .teaser-link > .container`
- `#V6QdX1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#V6QdX1 > .teaser-link > .container`
- `img[alt="Hva heter denne sjimpansen?"]`
- `#Wv6vEg > .teaser-link > .container`
- `#Wv6kBk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Wv6kBk > .teaser-link > .container > .information`
- `#Wv6kBk > .teaser-link > .container > .illustration-container > .text`
- `#Wv6kBk > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"][width="88"][height="88"]`
- `#Ok6zA1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ok6zA1 > .teaser-link > .container`
- `#wrRnKM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRnKM > .teaser-link > .container`
- `#k08Qk6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#k08Qk6 > .teaser-link > .container > .information`
- `#k08Qk6 > .teaser-link > .container > h2`
- `#k08Qk6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#Okg58E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Okg58E > .teaser-link > .container`
- `#L46jLR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#L46jLR > .teaser-link > .container`
- `#wrRKp1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRKp1 > .teaser-link > .container > .information`
- `#wrRKp1 > .teaser-link > .container > h2`
- `#wrRKp1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ola Svenneby"]`
- `#\37 pVByo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pVByo > .teaser-link > .container`
- `#m0MA3q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#m0MA3q > .teaser-link > .container`
- `#\37 pPgOw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 pPgOw > .teaser-link > .container > .information`
- `#\37 pPgOw > .teaser-link > .container > h2`
- `#\37 pPgOw > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Per Kristian Bjørkeng"]`
- `#\39 pb6gr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 pb6gr > .teaser-link > .container > .information`
- `#\39 pb6gr > .teaser-link > .container > h2`
- `#\39 pb6gr > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Øyulf Hjertenes"]`
- `#OkywlV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OkywlV > .teaser-link > .container`
- `#lnM8ge > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lnM8ge > .teaser-link > .container`
- `#wrRgXM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wrRgXM > .teaser-link > .container > .information`
- `#wrRgXM > .teaser-link > .container > h2`
- `#wrRgXM > .teaser-link > .container > .byline > div:nth-child(1)`
- `#wrRgXM > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#oEk7om > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#oEk7om > .teaser-link > .container > .information`
- `#oEk7om > .teaser-link > .container > h2`
- `#oEk7om > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ane Nordal"]`
- `img[alt="Fra syndens by til solens by"]`
- `#L4oXj4 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#L4oXj4 > .teaser-link > .container > .information`
- `#L4oXj4 > .teaser-link > .container > .illustration-container > .text`
- `#L4oXj4 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
