# WCAG Violations Report for Stiftelsen Hudøy

**Timestamp:** 2026-01-12T14:24:19.771Z
**URL:** [https://hudoy.no/#](https://hudoy.no/#)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.av-countdown-time`
- `.av-countdown-time-label`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.classic-quote-left > h6`
- `.post-entry-8218 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
- `#nav_menu-2 > .widgettitle`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 13

#### Affected Elements:

- `a[href$="ferdernasjonalpark.no/"]`
- `.avia-builder-el-40 > .avia-image-container-inner > .avia-image-overlay-wrap > .avia_image[rel="noopener noreferrer"][target="_blank"]`
- `a[href$="bufdir.no/"]`
- `a[href$="bergesenstiftelsen.no/"]`
- `a[href$="eckbos-legat.no/"]`
- `.avia-builder-el-49 > .avia-image-container-inner > .avia-image-overlay-wrap > .avia_image[rel="noopener noreferrer"][target="_blank"]`
- `a[href$="scheibler.no/"]`
- `.avia-builder-el-53 > .avia-image-container-inner > .avia-image-overlay-wrap > .avia_image[rel="noopener noreferrer"][target="_blank"]`
- `.avia-builder-el-55 > .avia-image-container-inner > .avia-image-overlay-wrap > .avia_image[rel="noopener noreferrer"][target="_blank"]`
- `.avia-builder-el-57 > .avia-image-container-inner > .avia-image-overlay-wrap > .avia_image[rel="noopener noreferrer"][target="_blank"]`
- `div:nth-child(1) > .alignleft[rel="noopener"][target="_blank"]`
- `div:nth-child(2) > .alignleft[rel="noopener"][target="_blank"]`
- `p > .alignleft[rel="noopener"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 26

#### Affected Elements:

- `iframe, .FocusTarget_module_focusTarget__abd564d5`
- `iframe, .VolumeControl_module_volumeControl__02ffae11`
- `iframe, a`
- `.active-slide.slide-entry-wrap`
- `#after_section_3 > .container > .template-page.content.av-content-full > .post-entry-type-page.post-entry-330.post-entry > .entry-content-wrapper.clearfix > .av_textblock_section`
- `.post-entry-8218 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
- `.post-entry-8117 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
- `.post-entry-8063 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
- `.av-rotator-text-single-4`
- `#av_section_6 > .container > .template-page.content.av-content-full > .post-entry-type-page.post-entry-330.post-entry > .entry-content-wrapper.clearfix > .flex_column_table.av-equal-height-column-flextable.-flextable`
- `.avia-builder-el-34`
- `.container:nth-child(2) > .first.el_before_av_one_fifth.av_one_fifth`
- `.el_after_av_one_fifth.el_before_av_one_fifth.av_one_fifth:nth-child(2)`
- `.el_after_av_one_fifth.el_before_av_one_fifth.av_one_fifth:nth-child(3)`
- `.el_after_av_one_fifth.el_before_av_one_fifth.av_one_fifth:nth-child(4)`
- `a[rel="noopener"][target="_blank"]:nth-child(3)`
- `a[rel="noopener"][target="_blank"]:nth-child(2)`
- `#design-by-netpower`
- `.gt-current-lang`
- `a[title="English"]`
- `a[title="Arabic"]`
- `a[title="Somali"]`
- `a[title="Urdu"]`
- `a[title="Tamil"]`
- `a[title="Polish"]`
- `a[title="Ukrainian"]`
