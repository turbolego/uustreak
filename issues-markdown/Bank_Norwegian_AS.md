# WCAG Violations Report for Bank Norwegian AS

**Timestamp:** 2026-10-09T04:54:42.026Z
**URL:** [https://www.banknorwegian.no/](https://www.banknorwegian.no/)
**Total Violations:** 2

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.MuiPaper-elevation24`
  - **HTML:** `<div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperWidthSm bnmui-s05yl0" role="dialog" aria-labelledby="_r_o_" aria-modal="true" tabindex="-1" data-mui-focusable="" style="--Pa…`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#approveAllCookies`
  - **HTML:** `<button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-sizeMedium MuiButton-colorSuccess bnmui-ch6kmo" tabindex="0" type="button" id="approveAllCookies" title="Aksepter alle" data-uit="accept-all">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.86 (foreground color: #ffffff, background color: #45ae22, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

