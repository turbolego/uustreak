# WCAG Violations Report for Norgesnett AS

**Timestamp:** 2026-10-21T05:53:59.207Z
**URL:** [https://www.glitrenett.no/](https://www.glitrenett.no/)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.link--rich-text.link[href$="sporsmal-og-svar"] > .link__label.svelte-1hzingv`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- `.header__side-link--hidden-md.header__side-link.svelte-zoaqc2:nth-child(2) > .language-picker.svelte-rt3927 > .language-picker__list.svelte-rt3927 > .language-picker__option[lang="en"] > .language-picker__button.svelte-rt3927[aria-label="English"]`
- `.header__side-link--hidden-md.header__side-link.svelte-zoaqc2:nth-child(2) > .language-picker.svelte-rt3927 > .language-picker__list.svelte-rt3927 > .language-picker__option[lang="no"] > .language-picker__button--active.language-picker__button[aria-label="Norsk"]`
- `.video__play-button`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.header__side-link--hidden-md.header__side-link.svelte-zoaqc2:nth-child(2) > .language-picker.svelte-rt3927 > nav`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.skip-link`
