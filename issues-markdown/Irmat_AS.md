# WCAG Violations Report for Irmat AS

**Timestamp:** 2026-11-20T06:14:59.240Z
**URL:** [https://irmat.no/](https://irmat.no/)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- `.post-9439`
- `.post-9421`
- `.post-9401`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 26

#### Affected Elements:

- `.jet-listing-dynamic-post-9439 > .jet-engine-listing-overlay-wrap > .elementor-9323[data-elementor-type="jet-listing-items"][data-elementor-id="9323"] > .elementor-element-967d19d.e-con-boxed[data-id="967d19d"] > .e-con-inner > .elementor-element-724d904.e-con-full[data-id="724d904"] > .elementor-element-c06c1eb.elementor-widget-jet-listing-dynamic-field[data-id="c06c1eb"] > .elementor-widget-container > .jet-listing-dynamic-field.display-inline.jet-listing > .jet-listing-dynamic-field__inline-wrap > .jet-listing-dynamic-field__content`
- `.jet-listing-dynamic-post-9421 > .jet-engine-listing-overlay-wrap > .elementor-9323[data-elementor-type="jet-listing-items"][data-elementor-id="9323"] > .elementor-element-967d19d.e-con-boxed[data-id="967d19d"] > .e-con-inner > .elementor-element-724d904.e-con-full[data-id="724d904"] > .elementor-element-c06c1eb.elementor-widget-jet-listing-dynamic-field[data-id="c06c1eb"] > .elementor-widget-container > .jet-listing-dynamic-field.display-inline.jet-listing > .jet-listing-dynamic-field__inline-wrap > .jet-listing-dynamic-field__content`
- `.jet-listing-dynamic-post-9401 > .jet-engine-listing-overlay-wrap > .elementor-9323[data-elementor-type="jet-listing-items"][data-elementor-id="9323"] > .elementor-element-967d19d.e-con-boxed[data-id="967d19d"] > .e-con-inner > .elementor-element-724d904.e-con-full[data-id="724d904"] > .elementor-element-c06c1eb.elementor-widget-jet-listing-dynamic-field[data-id="c06c1eb"] > .elementor-widget-container > .jet-listing-dynamic-field.display-inline.jet-listing > .jet-listing-dynamic-field__inline-wrap > .jet-listing-dynamic-field__content`
- `.elementor-element-1895148 > .elementor-widget-container > h2 > a`
- `.elementor-element-4f99b27 > .elementor-widget-container > h2 > a`
- `.elementor-element-b502f05 > .elementor-widget-container > h2 > a`
- `.elementor-element-747934c > .elementor-widget-container > h2`
- `.elementor-element-49415b8 > .elementor-widget-container > h2`
- `.elementor-element-cc1bd13 > .elementor-widget-container > h2`
- `.elementor-element-e7a93d1 > .elementor-widget-container > h2`
- `.elementor-element-d711362 > .elementor-widget-container > h2`
- `.post-9439 > .elementor-post__card > .elementor-post__badge`
- `.post-9439 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
- `.post-9439 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
- `.post-9439 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-author`
- `.post-9439 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
- `.post-9421 > .elementor-post__card > .elementor-post__badge`
- `.post-9421 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
- `.post-9421 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
- `.post-9421 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-author`
- `.post-9421 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
- `.post-9401 > .elementor-post__card > .elementor-post__badge`
- `.post-9401 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
- `.post-9401 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
- `.post-9401 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-author`
- `.post-9401 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- `.post-9439 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
- `.post-9421 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
- `.post-9401 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 11

#### Affected Elements:

- `.cookie-statement[href$="irmat.no/"][data-relative_url=""]`
- `.elementor-element-25108ff.elementor-section-items-stretch[data-id="25108ff"]:nth-child(1) > .elementor-column-gap-no.elementor-container > .elementor-element-7290ad7.elementor-col-33[data-id="7290ad7"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-d9897d1.elementor-widget-image[data-id="d9897d1"] > .elementor-widget-container > a[href$="irmat.no"]`
- `.jet-listing-dynamic-post-9439 > .jet-engine-listing-overlay-wrap > .jet-engine-listing-overlay-link`
- `.jet-listing-dynamic-post-9421 > .jet-engine-listing-overlay-wrap > .jet-engine-listing-overlay-link`
- `.jet-listing-dynamic-post-9401 > .jet-engine-listing-overlay-wrap > .jet-engine-listing-overlay-link`
- `.elementor-element-73a32d9 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
- `.elementor-element-fa85473 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
- `.elementor-element-79e2a68 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
- `.post-9439 > .elementor-post__card > .elementor-post__thumbnail__link`
- `.post-9421 > .elementor-post__card > .elementor-post__thumbnail__link`
- `.post-9401 > .elementor-post__card > .elementor-post__thumbnail__link`
