# WCAG Violations Report for Stiftelsen Flyktninghjelpen

**Timestamp:** 2026-09-07T07:17:28.793Z
**URL:** [https://www.nrc.no/](https://www.nrc.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- `#CybotCookiebotDialogNavDeclaration`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `.three-layer-header__donation-button`
- `.block:nth-child(1) > .article-list-view-model-secondary.block-padding > .article-list-view-model__wrapper > .article-list-view-model__content > .article-list-view-model__tags > time`
- `.block:nth-child(2) > .article-list-view-model-secondary.block-padding > .article-list-view-model__wrapper > .article-list-view-model__content > .article-list-view-model__tags > time`
- `.block:nth-child(3) > .article-list-view-model-secondary.block-padding > .article-list-view-model__wrapper > .article-list-view-model__content > .article-list-view-model__tags > time`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- `.poster__heading-title`
- `.contentareaitem:nth-child(4) > .section-header-block.block-width--default.show--all > .section-header-block__inner > .section-header-block__title`
- `.contentareaitem:nth-child(9) > .section-header-block.block-width--default.show--all > .section-header-block__inner > .section-header-block__title`
- `.contentareaitem:nth-child(11) > .section-header-block.block-width--default.show--all > .section-header-block__inner > .section-header-block__title`

### Users should be able to zoom and scale the text up to 500%

- **Impact:** minor
- **Description:** Ensure <meta name="viewport"> can scale a significant amount
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/meta-viewport-large?application=playwright
- **Tags:** cat.sensory-and-visual-cues, best-practice
- **Count:** 1

#### Affected Elements:

- `#viewport`
