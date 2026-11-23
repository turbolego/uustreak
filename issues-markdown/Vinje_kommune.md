# WCAG Violations Report for Vinje kommune

**Timestamp:** 2026-11-23T06:45:43.280Z
**URL:** [https://www.vinje.kommune.no/](https://www.vinje.kommune.no/)
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

- **Target:** `.eventItem:nth-child(1) > .datetimeWrap > .env-ui-text-overline`
  - **HTML:** `<p class="env-ui-text-overline">23. NOVEMBER 2026 kl. 11:00</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #ffffff, background color: #0084cb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.eventItem:nth-child(2) > .datetimeWrap > .env-ui-text-overline`
  - **HTML:** `<p class="env-ui-text-overline">23. NOVEMBER 2026 kl. 12:00</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #ffffff, background color: #0084cb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.eventItem:nth-child(3) > .datetimeWrap > .env-ui-text-overline`
  - **HTML:** `<p class="env-ui-text-overline">23. NOVEMBER 2026 kl. 17:20</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #ffffff, background color: #0084cb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.eventItem:nth-child(4) > .datetimeWrap > .env-ui-text-overline`
  - **HTML:** `<p class="env-ui-text-overline">23. NOVEMBER 2026 kl. 17:30</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #ffffff, background color: #0084cb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.eventItem:nth-child(5) > .datetimeWrap > .env-ui-text-overline`
  - **HTML:** `<p class="env-ui-text-overline">23. NOVEMBER 2026 kl. 18:00</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #ffffff, background color: #0084cb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.eventItem:nth-child(6) > .datetimeWrap > .env-ui-text-overline`
  - **HTML:** `<p class="env-ui-text-overline">23. NOVEMBER 2026 kl. 18:00</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #ffffff, background color: #0084cb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

