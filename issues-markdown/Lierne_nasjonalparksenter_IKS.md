# WCAG Violations Report for Lierne nasjonalparksenter IKS

**Timestamp:** 2026-11-20T06:20:34.837Z
**URL:** [https://nasjonalparken.no/](https://nasjonalparken.no/)
**Total Violations:** 13

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[title="Vinteropplevelser i Lierne"], .ytmVideoInfoVideoTitle`

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[title="Vinteropplevelser i Lierne"], #movie_player`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 6

#### Affected Elements:

- `ul[data-accordion="ewil91-accordion"]`
- `ul[data-accordion="jih3ex-accordion"]`
- `ul[data-accordion="l6gpmy-accordion"]`
- `ul[data-accordion="o4fuxq-accordion"]`
- `ul[data-accordion="te3dz0-accordion"]`
- `ul[data-accordion="c0dnr4-accordion"]`

### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 6

#### Affected Elements:

- `#mcxpna-accordion-label`
- `#\30 5hrci-accordion-label`
- `#\36 v7kpd-accordion-label`
- `#nb2x6s-accordion-label`
- `#x5q4c0-accordion-label`
- `#avvtf9-accordion-label`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `iframe[title="Vinteropplevelser i Lierne"], .ytmVideoInfoChannelAvatar`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.coi-banner__policy`
- `#coiPage-1 > .coi-banner__footer > .coi-banner__branding > .coi-external-link[href$="cookieinformation.com/"][target="_blank"]`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- `.search-form.small-12.columns > form > .search-field[type="search"][placeholder="Søk"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `#text-2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `#branding > .site-logo[rel="home"][href$="nasjonalparken.no/"]`
- `iframe[name="f0874c8553f2f0f0d"], #u_0_1_D4`
- `iframe[name="fd1695ef572a44685"], #u_0_1_0Z`
- `iframe[name="f20d52e666dd29079"], #u_0_1_vK`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 6

#### Affected Elements:

- `ul[data-accordion="ewil91-accordion"] > .accordion-item[data-accordion-item=""]`
- `ul[data-accordion="jih3ex-accordion"] > .accordion-item[data-accordion-item=""]`
- `ul[data-accordion="l6gpmy-accordion"] > .accordion-item[data-accordion-item=""]`
- `ul[data-accordion="o4fuxq-accordion"] > .accordion-item[data-accordion-item=""]`
- `ul[data-accordion="te3dz0-accordion"] > .accordion-item[data-accordion-item=""]`
- `ul[data-accordion="c0dnr4-accordion"] > .accordion-item[data-accordion-item=""]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 23

#### Affected Elements:

- `a[href$="#content"]`
- `.screen-reader-font-size`
- `.intro-text`
- `#post-6604 > .entry-content`
- `.more-posts`
- `div[data-equalizer="icl5kc-equalizer"]`
- `div[data-equalizer="jqz8li-equalizer"]`
- `a[title="Les mer 'Naturopplevelser'"] > .page_row_image.large-6[data-equalizer-watch=""]`
- `a[title="Les mer 'Naturopplevelser'"] > .page_row_content.large-6[data-equalizer-watch=""] > .entry-title`
- `a[title="Les mer 'Naturopplevelser'"] > .page_row_content.large-6[data-equalizer-watch=""] > .entry-content > p:nth-child(1)`
- `iframe[title="Vinteropplevelser i Lierne"], #player`
- `iframe[title="Vinteropplevelser i Lierne"], .ytmVideoInfoVideoTitleContainer`
- `iframe[title="Vinteropplevelser i Lierne"], .ytmVideoInfoOverlay`
- `iframe[title="Vinteropplevelser i Lierne"], .quick-actions-wrapper`
- `div[data-equalizer="zwk3g1-equalizer"]`
- `.facts > h3`
- `#mcxpna-accordion-label`
- `#\30 5hrci-accordion-label`
- `#\36 v7kpd-accordion-label`
- `#nb2x6s-accordion-label`
- `#x5q4c0-accordion-label`
- `#avvtf9-accordion-label`
- `.information`
