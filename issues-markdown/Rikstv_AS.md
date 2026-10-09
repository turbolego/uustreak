# WCAG Violations Report for Rikstv AS

**Timestamp:** 2026-10-09T05:09:24.483Z
**URL:** [https://www.rikstv.no/](https://www.rikstv.no/)
**Total Violations:** 1

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.split`
  - **HTML:** `<a class="edge-btn split" href="https://www.rikstv.no/tv-pakker/" tabindex="0"> Velg TV-pakke <span>Fra 399,- /mnd</span> </a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.91 (foreground color: #ffffff, background color: #e94440, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.split > span`
  - **HTML:** `<span>Fra 399,- /mnd</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.91 (foreground color: #ffffff, background color: #e94440, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `article:nth-child(1) > .description > .buttons > .edge-btn[aria-label=""]`
  - **HTML:** `<a class="edge-btn" href="https://www.rikstv.no/tv-pakker/" aria-label="">Sjekk pakkene våre her</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.91 (foreground color: #ffffff, background color: #e94440, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `article:nth-child(4) > .description > .buttons > .edge-btn[aria-label=""]`
  - **HTML:** `<a class="edge-btn" href="https://www.rikstv.no/tv-pakker/" aria-label="">Se pakkene våre her</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.91 (foreground color: #ffffff, background color: #e94440, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.wscrOk`
  - **HTML:** `<a href="#" class="wscrOk" role="button">Godta alle</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.73 (foreground color: #ffffff, background color: #ef4642, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1

