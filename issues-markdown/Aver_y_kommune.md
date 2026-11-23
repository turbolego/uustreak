# WCAG Violations Report for Averøy kommune

**Timestamp:** 2026-11-23T06:04:55.236Z
**URL:** [https://www.averoy.kommune.no/](https://www.averoy.kommune.no/)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.event:nth-child(1) > a > div > .event-date > .event-date-month`
  - **HTML:** `<div class="event-date-month">nov</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.46 (foreground color: #41748d, background color: #e9f5c6, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.event:nth-child(2) > a > div > .event-date > .event-date-month`
  - **HTML:** `<div class="event-date-month">nov</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.46 (foreground color: #41748d, background color: #e9f5c6, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.event:nth-child(3) > a > div > .event-date > .event-date-month`
  - **HTML:** `<div class="event-date-month">des</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.46 (foreground color: #41748d, background color: #e9f5c6, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.event:nth-child(4) > a > div > .event-date > .event-date-month`
  - **HTML:** `<div class="event-date-month">des</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.46 (foreground color: #41748d, background color: #e9f5c6, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.bc-content-button--secondary.button-module__status--secondary_9343_6XEH4.bc-content-button--appearance-default:nth-child(1) > span`
  - **HTML:** `<span>Kun nødvendige</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.33 (foreground color: #0080c0, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.bc-content-button--secondary.button-module__status--secondary_9343_6XEH4.bc-content-button--appearance-default:nth-child(2) > span`
  - **HTML:** `<span>Godta alle</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.33 (foreground color: #0080c0, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.global-bottom-container`
  - **HTML:** `<section class="global-bottom-container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

