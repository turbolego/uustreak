# WCAG Violations Report for Jotunheimen og Valdresruten Bilselskap AS

**Timestamp:** 2026-09-23T03:52:59.340Z
**URL:** [https://jvb.no/](https://jvb.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 11

#### Affected Elements:

- `.et_pb_text_5 > .et_pb_text_inner > p`
- `.et_pb_text_5 > .et_pb_text_inner > p > span`
- `.et_pb_text_8 > .et_pb_text_inner > p`
- `.et_pb_text_8 > .et_pb_text_inner > p > span`
- `.et_pb_text_11 > .et_pb_text_inner > p`
- `.et_pb_text_14 > .et_pb_text_inner > p`
- `.et_pb_text_18 > .et_pb_text_inner > p`
- `.et_pb_text_21 > .et_pb_text_inner > p`
- `.et_pb_text_24 > .et_pb_text_inner > p`
- `.et_pb_text_27 > .et_pb_text_inner > p`
- `.et_pb_text_30 > .et_pb_text_inner > p`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.et_pb_blurb_0_tb_footer > .et_pb_blurb_content > .et_pb_blurb_container > h4`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `.et_pb_image_0_tb_header > a[href$="jvb.no/"]`
- `.et-pb-arrow-prev`
- `.et-pb-arrow-next`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 14

#### Affected Elements:

- `.et_pb_slide_1`
- `.et-pb-controllers`
- `.et_pb_section_3`
- `.et_pb_section_4`
- `.et_pb_row_14`
- `.et_pb_row_15`
- `.et_pb_row_16`
- `.et_pb_section_7`
- `.et_pb_section_10`
- `.et_pb_section_11`
- `.et_pb_section_12`
- `.et_pb_row_24`
- `.et_pb_row_25`
- `.et_pb_section_15`
