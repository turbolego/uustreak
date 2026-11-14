# WCAG Violations Report for Studentsamskipnaden på Vestlandet

**Timestamp:** 2026-11-14T08:50:44.965Z
**URL:** [https://sammen.no/no](https://sammen.no/no)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Cookiebot
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#CybotCookiebotDialogBodyEdgeMoreDetailsLink`
  - **HTML:** `<a id="CybotCookiebotDialogBodyEdgeMoreDetailsLink" href="#" class="">Detaljer</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.05 (foreground color: #de792e, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
  - **HTML:** `<button id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll" class="CybotCookiebotDialogBodyButton" tabindex="0" lang="nb">Tillat alle</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.05 (foreground color: #ffffff, background color: #de792e, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.focus\:not-sr-only`
  - **HTML:** `<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-base-white focus:text-burnt-orange-100 focus:font-semibold focus:shadow-sammen focus:outline…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

