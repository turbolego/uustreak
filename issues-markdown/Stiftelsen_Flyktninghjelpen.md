# WCAG Violations Report for Stiftelsen Flyktninghjelpen

**Timestamp:** 2025-10-24T00:25:36.858Z
**URL:** [https://www.nrc.no/#](https://www.nrc.no/#)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 5

#### Affected Elements:

- `.three-layer-header__donation-button`
- `.donate`
- `.article-list-view-model__content--no-image > .article-list-view-model__tags > time`
- `.block:nth-child(2) > .article-list-view-model-secondary.block-padding > .article-list-view-model__wrapper > .article-list-view-model__content > .article-list-view-model__tags > time`
- `.block:nth-child(3) > .article-list-view-model-secondary.block-padding > .article-list-view-model__wrapper > .article-list-view-model__content > .article-list-view-model__tags > time`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.poster__heading-title`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `.footer_gray__bottom-link-item:nth-child(4) > a`

### Users should be able to zoom and scale the text up to 500%

- **Impact:** minor
- **Description:** Ensure <meta name="viewport"> can scale a significant amount
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/meta-viewport-large?application=playwright
- **Tags:** cat.sensory-and-visual-cues, best-practice
- **Count:** 1

#### Affected Elements:

- `#viewport`
