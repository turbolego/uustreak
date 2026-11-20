# WCAG Violations Report for Retrans midt AS

**Timestamp:** 2026-11-20T06:26:13.940Z
**URL:** [https://www.retrans.no/](https://www.retrans.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from CookieYes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.cky-btn-customize`
  - **HTML:** `<button class="cky-btn cky-btn-customize" aria-label="Tilpass" data-cky-tag="settings-button" style="color: rgb(24, 99, 220); border-color: rgb(24, 99, 220); background-color: transparent;">Tilpass</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #1863dc, background color: #121212, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `button[data-cky-tag="reject-button"]`
  - **HTML:** `<button class="cky-btn cky-btn-reject" aria-label="Avvis" data-cky-tag="reject-button" style="color: rgb(24, 99, 220); border-color: rgb(24, 99, 220); background-color: transparent;">Avvis</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #1863dc, background color: #121212, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `button[data-cky-tag="accept-button"]`
  - **HTML:** `<button class="cky-btn cky-btn-accept" aria-label="Aksepter alt" data-cky-tag="accept-button" style="color: #d0d0d0; border-color: rgb(24, 99, 220); background-color: rgb(24, 99, 220);">Aksepter alt</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.52 (foreground color: #d0d0d0, background color: #1863dc, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html dir="ltr" lang="nb-NO" class=" js" style="">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.cky-title`
  - **HTML:** `<p class="cky-title" role="heading" aria-level="1" data-cky-tag="title" style="color: #d0d0d0;"> Vi respekterer personvernet ditt </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cky-notice-des`
  - **HTML:** `<div class="cky-notice-des" data-cky-tag="description" style="color: #d0d0d0;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bd-containereffect-2`
  - **HTML:** `<div class="bd-containereffect-2 container-effect container ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bd-section-4`
  - **HTML:** `<section class=" bd-section-4 bd-tagstyles" id="section4" data-section-title="Informasjon om Retrans">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

