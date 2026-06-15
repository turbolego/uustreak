# WCAG Violations Report for Nordlandsnett AS

**Timestamp:** 2026-06-15T05:03:34.629Z
**URL:** [https://arva.no/hjem](https://arva.no/hjem)
**Total Violations:** 5

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `.w_carousel_lightbox`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `a[href="/?id=1652165763"] > .image-default[loading="lazy"][data-aspect="1"]`
- `a[href="/?id=77442397"] > .image-default[loading="lazy"][data-aspect="1"]`
- `a[href="/?id=210386988"] > .image-default[loading="lazy"][data-aspect="1"]`
- `a[href="/?id=695199517"] > .image-default[loading="lazy"][data-aspect="1"]`
- `a[href$="el-sikkerhet"] > .image-default[loading="lazy"][data-aspect="1"]`
- `img[height="51"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 14

#### Affected Elements:

- `a[href="/?id=1652165763"]`
- `a[href="/?id=77442397"]`
- `a[href="/?id=210386988"]`
- `a[href="/?id=695199517"]`
- `a[href$="el-sikkerhet"]`
- `#Article-12591 > .clear[data-v-fab35f16=""][data-v-05e2877b=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-05e2877b=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
- `#Article-12578 > .clear[data-v-fab35f16=""][data-v-05e2877b=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-05e2877b=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
- `#Article-11712 > .clear[data-v-fab35f16=""][data-v-05e2877b=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-05e2877b=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
- `#Article-11647 > .clear[data-v-fab35f16=""][data-v-05e2877b=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-05e2877b=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
- `#Article-11615 > .clear[data-v-fab35f16=""][data-v-05e2877b=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-05e2877b=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
- `a[href="/?id=443556"][target=""][data-v-3e0b142e=""]`
- `#Article-11142 > .clear[data-v-fab35f16=""][data-v-05e2877b=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-05e2877b=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
- `#Article-11089 > .clear[data-v-fab35f16=""][data-v-05e2877b=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-05e2877b=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`
- `#Article-11042 > .clear[data-v-fab35f16=""][data-v-05e2877b=""] > .spacer.w_adjust.content-adjust > .innercol[data-v-fab35f16=""] > .media-wrapper[data-v-3e0b142e=""][data-v-05e2877b=""] > a[target=""][data-v-3e0b142e=""][data-target-set="1"]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 12

#### Affected Elements:

- `.w_carousel_image`
- `.w_carousel_title`
- `.w_carousel_intro`
- `div[data-id="483468145"] > .block-title[data-v-7ff3c8e8=""]`
- `.layout-mixed_layout > .block-TextAreaAdvanced-inner[data-v-16aee765=""] > .block-TextAreaAdvanced-html.editorContent[data-v-16aee765=""]`
- `figure:nth-child(1)`
- `figure:nth-child(4)`
- `figure:nth-child(5)`
- `figure:nth-child(6)`
- `figure:nth-child(7)`
- `div[data-id="45619389"] > .block-title[data-v-7ff3c8e8=""]`
- `.block-TextAreaAdvanced-intro`
