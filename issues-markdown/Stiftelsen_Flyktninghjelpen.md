# WCAG Violations Report for Stiftelsen Flyktninghjelpen

**Timestamp:** 2026-10-10T08:21:21.192Z
**URL:** [https://www.nrc.no/](https://www.nrc.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#CybotCookiebotDialogNavDeclaration`
  - **HTML:** `<a id="CybotCookiebotDialogNavDeclaration" class="CybotCookiebotDialogNavItemLink CybotCookiebotDialogActive" href="#" data-target="CybotCookiebotDialogBody" tabindex="0" role="tab" aria-selected="true" aria-controls="CybotCookiebotDialogB…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.16 (foreground color: #fd5a00, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
  - **HTML:** `<button id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll" class="CybotCookiebotDialogBodyButton" tabindex="0" lang="nb">Tillat alle</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.16 (foreground color: #ffffff, background color: #fd5a00, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.three-layer-header__donation-button`
  - **HTML:** `<a data-v-27d3a9ae="" href="https://support.nrc.no/neglected/?fh=Both&amp;freq=&amp;channel=Web&amp;campaignid=701Qw00000oCwt3IAC&amp;utm_source=frontpage&amp;utm_medium=Web" class="three-layer-header__donation-button">Donate</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.16 (foreground color: #ffffff, background color: #fd5a00, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- **Target:** `.poster__heading-title`
  - **HTML:** `<h3 class="poster__heading-title">The world's most neglected displacement crises</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.contentareaitem:nth-child(4) > .section-header-block.block-width--default.show--all > .section-header-block__inner > .section-header-block__title`
  - **HTML:** `<h4 class="section-header-block__title">Stories from around the world</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.contentareaitem:nth-child(9) > .section-header-block.block-width--default.show--all > .section-header-block__inner > .section-header-block__title`
  - **HTML:** `<h4 class="section-header-block__title">NORCAP: Global provider of expertise</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.contentareaitem:nth-child(11) > .section-header-block.block-width--default.show--all > .section-header-block__inner > .section-header-block__title`
  - **HTML:** `<h4 class="section-header-block__title">NRC's areas of expertise</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Users should be able to zoom and scale the text up to 500%

- **Impact:** minor
- **Description:** Ensure <meta name="viewport"> can scale a significant amount
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/meta-viewport-large?application=playwright
- **Tags:** cat.sensory-and-visual-cues, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#viewport`
  - **HTML:** `<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=yes">`
  - **Failure summary:** Fix any of the following: <meta> tag limits zooming on mobile devices

