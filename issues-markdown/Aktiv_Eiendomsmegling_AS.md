# WCAG Violations Report for Aktiv Eiendomsmegling AS

**Timestamp:** 2026-01-14T00:28:32.197Z
**URL:** [https://aktiv.no/#](https://aktiv.no/#)
**Total Violations:** 7

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.TopBarContent_button__mjoJL`
- `.slick-next`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `.cm-purpose:nth-child(1) > .cm-services > .cm-caret > a[href="#"]`
- `.cm-btn-info`
- `.cm-btn-accept-all`
- `a[href$="klaro"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.slick-current > div > .ProjectsSliderContent_item__mTMhQ > .ProjectsSliderContent_link__zdHrB > .ProjectsSliderContent_contentWrapper__r_Ifc > h4`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 7

#### Affected Elements:

- `img[alt="Verdivurdering fra lokalbank"]`
- `img[alt="Finansiering"]`
- `img[alt="Kjøpe bolig"]`
- `img[alt="Selge bolig"]`
- `img[alt="Finn en megler"]`
- `img[alt="Verdivurdering"]`
- `img[alt="Råd & inspirasjon"]`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- `.slick-current > div > .ProjectsSliderContent_item__mTMhQ`
- `div[data-index="1"] > div > .ProjectsSliderContent_item__mTMhQ`
- `div[data-index="2"] > div > .ProjectsSliderContent_item__mTMhQ`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 2

#### Affected Elements:

- `meta[name="viewport"]:nth-child(7)`
- `meta[name="viewport"]:nth-child(38)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 15

#### Affected Elements:

- `.cm-header`
- `#purpose-item-functional`
- `label[for="purpose-item-functional"]`
- `#purpose-item-functional-description`
- `.cm-purpose:nth-child(1) > .cm-services > .cm-caret`
- `#purpose-item-advertising`
- `label[for="purpose-item-advertising"]`
- `#purpose-item-advertising-description`
- `.cm-purpose:nth-child(2) > .cm-services > .cm-caret`
- `#purpose-item-performance`
- `label[for="purpose-item-performance"]`
- `#purpose-item-performance-description`
- `.cm-purpose:nth-child(3) > .cm-services > .cm-caret`
- `.cm-toggle-all`
- `.cm-powered-by`
