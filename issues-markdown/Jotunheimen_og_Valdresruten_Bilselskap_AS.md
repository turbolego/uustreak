# WCAG Violations Report for Jotunheimen og Valdresruten Bilselskap AS

**Timestamp:** 2025-11-05T18:45:07.740Z
**URL:** [https://jvb.no/](https://jvb.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 8

#### Affected Elements:

- `.et_pb_text_6 > .et_pb_text_inner > p`
- `.et_pb_text_6 > .et_pb_text_inner > p > span`
- `.et_pb_text_9 > .et_pb_text_inner > p`
- `.et_pb_text_13 > .et_pb_text_inner > p`
- `.et_pb_text_16 > .et_pb_text_inner > p`
- `.et_pb_text_19 > .et_pb_text_inner > p`
- `.et_pb_text_22 > .et_pb_text_inner > p`
- `.et_pb_text_25 > .et_pb_text_inner > p`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 3

#### Affected Elements:

- `h3:nth-child(1)`
- `h3:nth-child(2)`
- `h1:nth-child(3)`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.et_pb_blurb_0 > .et_pb_blurb_content > .et_pb_blurb_container > h4`
- `.et_pb_blurb_0_tb_footer > .et_pb_blurb_content > .et_pb_blurb_container > h4`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.et_pb_image_0_tb_header > a[href$="jvb.no/"]`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 13

#### Affected Elements:

- `.et_pb_section_0`
- `.et_pb_section_2`
- `.et_pb_section_3`
- `.et_pb_row_12`
- `.et_pb_row_13`
- `.et_pb_row_14`
- `.et_pb_section_6`
- `.et_pb_section_9`
- `.et_pb_section_10`
- `.et_pb_section_11`
- `.et_pb_row_22`
- `.et_pb_row_23`
- `.et_pb_section_14`
