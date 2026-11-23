# WCAG Violations Report for Irmat AS

**Timestamp:** 2026-11-23T06:20:41.747Z
**URL:** [https://irmat.no/](https://irmat.no/)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `.post-9439`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-9439 post type-post status-publish format-standard has-post-thumbnail hentry category-nyheter tag-idea tag-samarbeid" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.post-9421`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-9421 post type-post status-publish format-standard has-post-thumbnail hentry category-nyheter tag-restavfall" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.post-9401`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-9401 post type-post status-publish format-standard has-post-thumbnail hentry category-ukategorisert" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 26

#### Affected Elements:

- **Target:** `.jet-listing-dynamic-post-9439 > .jet-engine-listing-overlay-wrap > .elementor-9323[data-elementor-type="jet-listing-items"][data-elementor-id="9323"] > .elementor-element-967d19d.e-con-boxed[data-id="967d19d"] > .e-con-inner > .elementor-element-724d904.e-con-full[data-id="724d904"] > .elementor-element-c06c1eb.elementor-widget-jet-listing-dynamic-field[data-id="c06c1eb"] > .elementor-widget-container > .jet-listing-dynamic-field.display-inline.jet-listing > .jet-listing-dynamic-field__inline-wrap > .jet-listing-dynamic-field__content`
  - **HTML:** `<div class="jet-listing-dynamic-field__content">6. november, 2026</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.jet-listing-dynamic-post-9421 > .jet-engine-listing-overlay-wrap > .elementor-9323[data-elementor-type="jet-listing-items"][data-elementor-id="9323"] > .elementor-element-967d19d.e-con-boxed[data-id="967d19d"] > .e-con-inner > .elementor-element-724d904.e-con-full[data-id="724d904"] > .elementor-element-c06c1eb.elementor-widget-jet-listing-dynamic-field[data-id="c06c1eb"] > .elementor-widget-container > .jet-listing-dynamic-field.display-inline.jet-listing > .jet-listing-dynamic-field__inline-wrap > .jet-listing-dynamic-field__content`
  - **HTML:** `<div class="jet-listing-dynamic-field__content">12. oktober, 2026</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.jet-listing-dynamic-post-9401 > .jet-engine-listing-overlay-wrap > .elementor-9323[data-elementor-type="jet-listing-items"][data-elementor-id="9323"] > .elementor-element-967d19d.e-con-boxed[data-id="967d19d"] > .e-con-inner > .elementor-element-724d904.e-con-full[data-id="724d904"] > .elementor-element-c06c1eb.elementor-widget-jet-listing-dynamic-field[data-id="c06c1eb"] > .elementor-widget-container > .jet-listing-dynamic-field.display-inline.jet-listing > .jet-listing-dynamic-field__inline-wrap > .jet-listing-dynamic-field__content`
  - **HTML:** `<div class="jet-listing-dynamic-field__content">30. september, 2026</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.elementor-element-1895148 > .elementor-widget-container > h2 > a`
  - **HTML:** `<a href="https://irmat.no/miljostasjonene/">Goasholtmyra Privat</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.elementor-element-4f99b27 > .elementor-widget-container > h2 > a`
  - **HTML:** `<a href="https://irmat.no/miljostasjonene/">Brenna Privat</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.elementor-element-b502f05 > .elementor-widget-container > h2 > a`
  - **HTML:** `<a href="https://irmat.no/miljostasjonene/">Goasholtmyra Næring</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.elementor-element-747934c > .elementor-widget-container > h2`
  - **HTML:** `<h2 class="elementor-heading-title elementor-size-default">Hvordan sorterer jeg?</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.elementor-element-49415b8 > .elementor-widget-container > h2`
  - **HTML:** `<h2 class="elementor-heading-title elementor-size-default">Interkommunalt renovasjonsselskap i Midt- og Aust telemark</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #00aeb0, background color: #ffffff, font size: 27.8pt (37px), font weight: normal). Expected contrast ratio of 3:1

- **Target:** `.elementor-element-cc1bd13 > .elementor-widget-container > h2`
  - **HTML:** `<h2 class="elementor-heading-title elementor-size-default">Renovasjonskalenderen på mobil</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 27.8pt (37px), font weight: normal). Expected contrast ratio of 3:1

- **Target:** `.elementor-element-e7a93d1 > .elementor-widget-container > h2`
  - **HTML:** `<h2 class="elementor-heading-title elementor-size-default">I appen «Min Renovasjon» kan du søke på din adresse eller på posisjon og få opp din personlige tømmeplan med mulighet for varsling i forkant av tømming.</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.elementor-element-d711362 > .elementor-widget-container > h2`
  - **HTML:** `<h2 class="elementor-heading-title elementor-size-default">Siste nytt</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #00aeb0, background color: #ffffff, font size: 24.0pt (32px), font weight: normal). Expected contrast ratio of 3:1

- **Target:** `.post-9439 > .elementor-post__card > .elementor-post__badge`
  - **HTML:** `<div class="elementor-post__badge">Nyheter</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9439 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
  - **HTML:** `<p>Sammen skaper IDEA Kompetanse og IRMAT Notodden et ryddigere nærmiljø og plass til flere i arbeidslivet. Samarbeidet gir meningsfulle oppgaver, mestring og tilhørighet – sosial</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9439 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
  - **HTML:** `<a class="elementor-post__read-more" href="https://irmat.no/samarbeidet-idea-kompetanse-og-irmat-viser-sosial-baerekraft-i-praksis/" aria-label="Read more about Samarbeidet IDEA kompetanse og IRMAT viser sosial bærekraft i praksis" tabinde…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #00aeb0, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9439 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-author`
  - **HTML:** `<span class="elementor-post-author"> Liv Inger Strøm </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9439 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
  - **HTML:** `<span class="elementor-post-date"> 6. november 2026 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9421 > .elementor-post__card > .elementor-post__badge`
  - **HTML:** `<div class="elementor-post__badge">Nyheter</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9421 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
  - **HTML:** `<p>En liten feilsortering føles kanskje ikke så viktig, men når batterier, fløtekartonger og matavfall havner i restavfallet, mister vi ressurser som kunne blitt brukt på</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9421 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
  - **HTML:** `<a class="elementor-post__read-more" href="https://irmat.no/nasjonal-kampanje-om-unnskyldningene-vi-bruker-for-ikke-a-sortere-restavfallet/" aria-label="Read more about Nasjonal kampanje om unnskyldningene vi bruker for ikke å sortere rest…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #00aeb0, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9421 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-author`
  - **HTML:** `<span class="elementor-post-author"> Liv Inger Strøm </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9421 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
  - **HTML:** `<span class="elementor-post-date"> 12. oktober 2026 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9401 > .elementor-post__card > .elementor-post__badge`
  - **HTML:** `<div class="elementor-post__badge">Ukategorisert</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #ffffff, background color: #00aeb0, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9401 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
  - **HTML:** `<p>Den siste tiden har IRMAT AS hatt tre vinnere, to i returkartonglotteriet og en i Sortere og Loop sin konkurranse Gjenvinn og vinn. Nils Olav</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9401 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
  - **HTML:** `<a class="elementor-post__read-more" href="https://irmat.no/abonnentene-til-irmat-as-kildesorterer/" aria-label="Read more about Abonnentene til IRMAT AS kildesorterer" tabindex="-1"> Les mer » </a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.73 (foreground color: #00aeb0, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9401 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-author`
  - **HTML:** `<span class="elementor-post-author"> Liv Inger Strøm </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-9401 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
  - **HTML:** `<span class="elementor-post-date"> 30. september 2026 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- **Target:** `.post-9439 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
  - **HTML:** `<a class="elementor-post__read-more" href="https://irmat.no/samarbeidet-idea-kompetanse-og-irmat-viser-sosial-baerekraft-i-praksis/" aria-label="Read more about Samarbeidet IDEA kompetanse og IRMAT viser sosial bærekraft i praksis" tabinde…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.post-9421 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
  - **HTML:** `<a class="elementor-post__read-more" href="https://irmat.no/nasjonal-kampanje-om-unnskyldningene-vi-bruker-for-ikke-a-sortere-restavfallet/" aria-label="Read more about Nasjonal kampanje om unnskyldningene vi bruker for ikke å sortere rest…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.post-9401 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more-wrapper > .elementor-post__read-more`
  - **HTML:** `<a class="elementor-post__read-more" href="https://irmat.no/abonnentene-til-irmat-as-kildesorterer/" aria-label="Read more about Abonnentene til IRMAT AS kildesorterer" tabindex="-1"> Les mer » </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 11

#### Affected Elements:

- **Target:** `.cookie-statement[href$="irmat.no/"][data-relative_url=""]`
  - **HTML:** `<a class="cmplz-link cookie-statement" href="https://irmat.no/" data-relative_url=""></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-element-25108ff.elementor-section-items-stretch[data-id="25108ff"]:nth-child(1) > .elementor-column-gap-no.elementor-container > .elementor-element-7290ad7.elementor-col-33[data-id="7290ad7"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-d9897d1.elementor-widget-image[data-id="d9897d1"] > .elementor-widget-container > a[href$="irmat.no"]`
  - **HTML:** `<a href="http://irmat.no">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.jet-listing-dynamic-post-9439 > .jet-engine-listing-overlay-wrap > .jet-engine-listing-overlay-link`
  - **HTML:** `<a href="https://irmat.no/samarbeidet-idea-kompetanse-og-irmat-viser-sosial-baerekraft-i-praksis/" class="jet-engine-listing-overlay-link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.jet-listing-dynamic-post-9421 > .jet-engine-listing-overlay-wrap > .jet-engine-listing-overlay-link`
  - **HTML:** `<a href="https://irmat.no/nasjonal-kampanje-om-unnskyldningene-vi-bruker-for-ikke-a-sortere-restavfallet/" class="jet-engine-listing-overlay-link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.jet-listing-dynamic-post-9401 > .jet-engine-listing-overlay-wrap > .jet-engine-listing-overlay-link`
  - **HTML:** `<a href="https://irmat.no/abonnentene-til-irmat-as-kildesorterer/" class="jet-engine-listing-overlay-link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-element-73a32d9 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
  - **HTML:** `<a class="elementor-icon" href="https://irmat.no/miljostasjonene/"> <i aria-hidden="true" class="fas fa-link"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-element-fa85473 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
  - **HTML:** `<a class="elementor-icon" href="https://irmat.no/miljostasjonene/"> <i aria-hidden="true" class="fas fa-link"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-element-79e2a68 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
  - **HTML:** `<a class="elementor-icon" href="https://irmat.no/miljostasjonene/"> <i aria-hidden="true" class="fas fa-link"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-9439 > .elementor-post__card > .elementor-post__thumbnail__link`
  - **HTML:** `<a class="elementor-post__thumbnail__link" href="https://irmat.no/samarbeidet-idea-kompetanse-og-irmat-viser-sosial-baerekraft-i-praksis/" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.post-9421 > .elementor-post__card > .elementor-post__thumbnail__link`
  - **HTML:** `<a class="elementor-post__thumbnail__link" href="https://irmat.no/nasjonal-kampanje-om-unnskyldningene-vi-bruker-for-ikke-a-sortere-restavfallet/" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.post-9401 > .elementor-post__card > .elementor-post__thumbnail__link`
  - **HTML:** `<a class="elementor-post__thumbnail__link" href="https://irmat.no/abonnentene-til-irmat-as-kildesorterer/" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

