# WCAG Violations Report for Sirkla ressurs AS

**Timestamp:** 2026-11-22T05:56:36.567Z
**URL:** [https://www.sirklaressurs.no/](https://www.sirklaressurs.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.accept > span`
  - **HTML:** `<span>Tillat alle</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.97 (foreground color: #ffffff, background color: #9ac662, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.manage > span`
  - **HTML:** `<span>Administrer</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.97 (foreground color: #ffffff, background color: #9ac662, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#chattrick-container, span`
  - **HTML:** `<span>Chat med meg</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.97 (foreground color: #ffffff, background color: #9ac662, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#block-0dd62fe92e76f97f2ad5 > .sqs-block-content > .sqs-text-block-container > .sqs-html-content[data-sqsp-text-block-content=""] > h3`
  - **HTML:** `<h3 style="white-space: pre-wrap; transition-timing-function: ease; transition-duration: 0.9s; transition-delay: 0.155844s;" class="preFade"><span class="sqsrte-text-color--lightAccent"><em>Me tek avfall til nye verdiar.</em></span></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.sqs-block-content.preFade > .sqs-text-block-container > .sqs-html-content[data-sqsp-text-block-content=""] > h3`
  - **HTML:** `<h3 style="white-space: pre-wrap; transition-timing-function: ease; transition-duration: 0.9s; transition-delay: 0.475325s;" class="preFade">SIRKLA RESSURS</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `#chattrick-container, button[aria-label="Open Chat"]`
  - **HTML:** `<button aria-label="Open Chat" aria-hidden="false" tabindex="0" style="background-color: va...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.header-display-desktop > .header-title-nav-wrapper > .header-nav > .header-nav-wrapper > .header-nav-list`
  - **HTML:** `<nav class="header-nav-list">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `div[data-component-id="fb14f5e9fa93a38be326"] > .fluid-image-animation-wrapper.sqs-image.sqs-block-alignment-wrapper > .fluid-image-container.sqs-image-content.js-image-container > .js-content-mode-element-wrapper.js-content-mode-element-system_desktop > .content-fit.sqs-block-image-link[data-sqsp-image-block-link=""]`
  - **HTML:** `<a class="sqs-block-image-link js-content-mode-element content-fit" data-sqsp-image-block-link="" href="/s/Cert_StartBANK_Registered.pdf" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

