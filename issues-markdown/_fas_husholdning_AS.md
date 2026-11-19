# WCAG Violations Report for Øfas husholdning AS

**Timestamp:** 2026-11-19T06:54:11.423Z
**URL:** [https://www.ofas.no/](https://www.ofas.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- `#CybotCookiebotDialogNavDeclaration`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `p:nth-child(1) > strong`
- `em > strong`
- `.col-sm-6.col-md-12:nth-child(1) > .light.button[role="button"]`
- `.col-sm-6.col-md-12:nth-child(2) > .light.button[role="button"]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 9

#### Affected Elements:

- `img[alt="Metaller"]`
- `img[alt="Tekstiler"]`
- `img[alt="Papp & Papir"]`
- `img[alt="Farlig avfall"]`
- `img[alt="EE-avfall"]`
- `img[alt="Restavfall"]`
- `img[alt="Plast"]`
- `img[alt="Matavfall"]`
- `img[alt="Deponiavfall"]`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.sr-only`
- `.front-bot`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.sr-only`
- `.navbar-brand`
