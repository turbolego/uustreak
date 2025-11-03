# WCAG Violations Report for Vy Buss AS

**Timestamp:** 2025-11-03T00:37:19.247Z
**URL:** [https://www.vybuss.no/#!/](https://www.vybuss.no/#!/)
**Total Violations:** 3

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 4

#### Affected Elements:

- `.expand-block__container:nth-child(1) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(2) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(3) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(4) > .expand-block__header[data-toggle="expand"]`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]:nth-child(23)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 15

#### Affected Elements:

- `.slick-current`
- `div[data-slick-index="1"]`
- `div[data-slick-index="2"]`
- `.block__wrapper:nth-child(3) > .block__header`
- `.expand-block__container:nth-child(1) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(2) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(3) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(4) > .expand-block__header[data-toggle="expand"]`
- `.js-group-block.block__wrapper:nth-child(4)`
- `.js-group-block.block__wrapper:nth-child(5)`
- `#ddChallengeBody1762130231300, .captcha__human`
- `#ddChallengeBody1762130231300, .sliderText`
- `#ddChallengeBody1762130231300, #captcha__offline`
- `#ddChallengeBody1762130231300, .captcha__robot__warning`
- `#ddChallengeBody1762130231300, .captcha__robot__contact_support`
