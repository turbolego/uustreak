# WCAG Violations Report for Trøndelag fylkeskommune

**Timestamp:** 2026-06-07T01:23:13.076Z
**URL:** [https://www.trondelagfylke.no/](https://www.trondelagfylke.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 17

#### Affected Elements:

- `.footer__rich-text.rich-text > p:nth-child(1)`
- `strong`
- `.footer__column:nth-child(1) > .footer__contact-information > .footer__rich-text.rich-text > p:nth-child(2)`
- `p:nth-child(4) > .emphasized-link`
- `a[title="Personvern"]`
- `a[title="Tilgjengelighetserklæring"]`
- `a[title="Pressekontakter"]`
- `.footer__contact-information:nth-child(2) > .footer__rich-text.rich-text > h4:nth-child(1)`
- `.footer__contact-information:nth-child(2) > .footer__rich-text.rich-text > p:nth-child(2)`
- `.footer__contact-information:nth-child(2) > .footer__rich-text.rich-text > h4:nth-child(3)`
- `.footer__contact-information:nth-child(2) > .footer__rich-text.rich-text > p:nth-child(4)`
- `.footer__contact-information:nth-child(2) > .footer__map-link > .contact-link--map.contact-link > .contact-link__text`
- `.footer__contact-information:nth-child(3) > .footer__rich-text.rich-text > h4:nth-child(1)`
- `.footer__contact-information:nth-child(3) > .footer__rich-text.rich-text > p:nth-child(2)`
- `.footer__contact-information:nth-child(3) > .footer__rich-text.rich-text > h4:nth-child(3)`
- `.footer__contact-information:nth-child(3) > .footer__rich-text.rich-text > p:nth-child(4)`
- `.footer__contact-information:nth-child(3) > .footer__map-link > .contact-link--map.contact-link > .contact-link__text`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.top-menu`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.modal_trigger`
