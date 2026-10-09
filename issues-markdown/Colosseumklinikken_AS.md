# WCAG Violations Report for Colosseumklinikken AS

**Timestamp:** 2026-10-09T04:55:42.472Z
**URL:** [https://colosseumtannlege.no/](https://colosseumtannlege.no/)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.random-specialists-block__specialist:nth-child(3) > .random-specialists-block__link > .random-specialists-block__specialist-info > .random-specialists-block__name`
  - **HTML:** `<span class="random-specialists-block__name">Ammar Omar Mohammed</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.64 (foreground color: #c2b7bc, background color: #f5eadf, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.random-specialists-block__specialist:nth-child(3) > .random-specialists-block__link > .random-specialists-block__specialist-info > .random-specialists-block__position`
  - **HTML:** `<span class="random-specialists-block__position">Tannlege</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.64 (foreground color: #c2b7bc, background color: #f5eadf, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.bottom-panel`
  - **HTML:** `<div class="bottom-panel" style=""><div class="bottom-panel__wrapper wrapper"><a class="bottom-panel__link button" href="/klinikker/">Finn klinikk</a><a href="https://minside.colosseumtannlege.no/bestilltime/" rel="noopener noreferrer" cla…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

