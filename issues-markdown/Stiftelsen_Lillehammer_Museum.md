# WCAG Violations Report for Stiftelsen Lillehammer Museum

**Timestamp:** 2026-10-03T04:21:55.478Z
**URL:** [https://lillehammermuseum.no/](https://lillehammermuseum.no/)
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

- **Target:** `.cc-link`
  - **HTML:** `<a aria-label="learn more about cookies" role="button" tabindex="0" class="cc-link" href="/personvernerklaering" rel="noopener noreferrer nofollow" target="_blank">se våre retningslinjer.</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.61 (foreground color: #cce3f4, background color: #0075c9, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.cc-allow`
  - **HTML:** `<a aria-label="allow cookies" role="button" tabindex="0" class="cc-btn cc-allow">Godta</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.01 (foreground color: #ffffff, background color: #61a60e, font size: 10.8pt (14.4px), font weight: bold). Expected contrast ratio of 4.5:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.focus\:not-sr-only`
  - **HTML:** `<a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:p-4 focus:bg-white focus:text-black"> Hopp til hovedinnhold </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

