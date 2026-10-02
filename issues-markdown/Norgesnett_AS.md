# WCAG Violations Report for Norgesnett AS

**Timestamp:** 2026-10-02T17:18:51.155Z
**URL:** [https://norgesnett.no/](https://norgesnett.no/)
**Total Violations:** 8

## Violation Details

### ARIA hidden element must not be focusable or contain focusable elements

- **Impact:** serious
- **Description:** Ensure aria-hidden elements are not focusable nor contain focusable elements
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-hidden-focus?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-10.8.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.e2-e55.is-current-slide.is-virtual:nth-child(1)`
  - **HTML:** `<div class="x-slide e2-e55 m2-3c is-virtual is-current-slide" data-x-slide="" aria-hidden="true" style="--x-slide-distance: 0; --x-slide-balance: 0;">`
  - **Failure summary:** Fix all of the following: Focusable content should have tabindex="-1" or be removed from the DOM

- **Target:** `.e2-e65.is-virtual.x-slide:nth-child(2)`
  - **HTML:** `<div class="x-slide e2-e65 m2-3c is-virtual" data-x-slide="" aria-hidden="true" style="--x-slide-distance: 1; --x-slide-balance: 1;">`
  - **Failure summary:** Fix all of the following: Focusable content should have tabindex="-1" or be removed from the DOM

- **Target:** `.e2-e75.is-virtual.x-slide:nth-child(3)`
  - **HTML:** `<div class="x-slide e2-e75 m2-3c is-virtual" data-x-slide="" aria-hidden="true" style="--x-slide-distance: 1; --x-slide-balance: -1;">`
  - **Failure summary:** Fix all of the following: Focusable content should have tabindex="-1" or be removed from the DOM

- **Target:** `.e2-e55.is-current-slide.is-virtual:nth-child(7)`
  - **HTML:** `<div class="x-slide e2-e55 m2-3c is-virtual is-current-slide" data-x-slide="" aria-hidden="true" style="--x-slide-distance: 0; --x-slide-balance: 0;">`
  - **Failure summary:** Fix all of the following: Focusable content should have tabindex="-1" or be removed from the DOM

- **Target:** `.e2-e65.is-virtual.x-slide:nth-child(8)`
  - **HTML:** `<div class="x-slide e2-e65 m2-3c is-virtual" data-x-slide="" aria-hidden="true" style="--x-slide-distance: 1; --x-slide-balance: 1;">`
  - **Failure summary:** Fix all of the following: Focusable content should have tabindex="-1" or be removed from the DOM

- **Target:** `.e2-e75.is-virtual.x-slide:nth-child(9)`
  - **HTML:** `<div class="x-slide e2-e75 m2-3c is-virtual" data-x-slide="" aria-hidden="true" style="--x-slide-distance: 1; --x-slide-balance: -1;">`
  - **Failure summary:** Fix all of the following: Focusable content should have tabindex="-1" or be removed from the DOM


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#main__simplifaiChatbotActivator--1OJ-o, button`
  - **HTML:** `<button class="ActivatorButton__button--1j7ge sf-activator-button">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 12

#### Affected Elements:

- **Target:** `.e5071-e83 > .x-text-content > .x-text-content-text > p`
  - **HTML:** `<p class="x-text-content-text-primary">Norgesnett - en del av Glitre Nett AS</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 13.1pt (17.5px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.e5071-e87`
  - **HTML:** `<div class="x-text x-content e5071-e87 m3wv-g m3wv-h m3wv-m m3wv-n">Tlf: 21 49 25 06</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.e5071-e90`
  - **HTML:** `<div class="x-text x-content e5071-e90 m3wv-g m3wv-h m3wv-m m3wv-n">Stabburveien 18, 1617 Fredrikstad</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.e5071-e93`
  - **HTML:** `<div class="x-text x-content e5071-e93 m3wv-g m3wv-h m3wv-m m3wv-n">Org.nr: 982 974&nbsp;011</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.e5071-e98 > a[href$="personvern/"]`
  - **HTML:** `<a href="/norgesnett/personvern/">Personvern</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="informasjonskapsler/"]`
  - **HTML:** `<a href="/informasjonskapsler/">Informasjonskapsler</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.e5071-e102`
  - **HTML:** `<div class="x-text x-content e5071-e102 m3wv-g m3wv-h m3wv-n m3wv-o m3wv-p">Norgesnett - en del av Glitre Nett © 2025</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.e5071-e106 > .x-text-content > .x-text-content-text > p`
  - **HTML:** `<p class="x-text-content-text-primary">Last ned vår app</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 13.1pt (17.5px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.e5071-e108 > .x-anchor-content > .x-anchor-text > .x-anchor-text-secondary`
  - **HTML:** `<span class="x-anchor-text-secondary">Last ned fra</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 7.9pt (10.5px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.e5071-e108 > .x-anchor-content > .x-anchor-text > .x-anchor-text-primary`
  - **HTML:** `<span class="x-anchor-text-primary">App Store</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 13.1pt (17.5px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.e5071-e110 > .x-anchor-content > .x-anchor-text > .x-anchor-text-secondary`
  - **HTML:** `<span class="x-anchor-text-secondary">Tilgjengelig på</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 7.9pt (10.5px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.e5071-e110 > .x-anchor-content > .x-anchor-text > .x-anchor-text-primary`
  - **HTML:** `<span class="x-anchor-text-primary">Google Play</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.79 (foreground color: #ffffff, background color: #009388, font size: 13.1pt (17.5px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#main__simplifaiChatbotActivator--1OJ-o`
  - **HTML:** `<iframe src="about:blank" id="main__simplifaiChatbotActivator--1OJ-o" frameborder="0" class="sf-activator-frame"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 4

#### Affected Elements:

- **Target:** `img[alt="Strømbrudd"]`
  - **HTML:** `<img data-lazyloaded="1" src="/wp-content/uploads/Stromstans.svg" decoding="async" data-src="/wp-content/uploads/Stromstans.svg" alt="Strømbrudd" data-ll-status="loaded" class="entered litespeed-loaded">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Faktura"]`
  - **HTML:** `<img data-lazyloaded="1" src="/wp-content/uploads/Faktura.svg" decoding="async" data-src="/wp-content/uploads/Faktura.svg" alt="Faktura" data-ll-status="loaded" class="entered litespeed-loaded">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Nettleie"]`
  - **HTML:** `<img data-lazyloaded="1" src="/wp-content/uploads/Nettleie25524.svg" decoding="async" data-src="/wp-content/uploads/Nettleie25524.svg" alt="Nettleie" data-ll-status="loaded" class="entered litespeed-loaded">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Han-port"]`
  - **HTML:** `<img data-lazyloaded="1" src="/wp-content/uploads/HANmodul.svg" decoding="async" data-src="/wp-content/uploads/HANmodul.svg" alt="Han-port" data-ll-status="loaded" class="entered litespeed-loaded">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.e2-e86`
  - **HTML:** `<a class="x-div e2-e86 m2-31 m2-33 m2-34 m2-35 m2-37 m2-38 m2-39" href="#prev" data-x-effect-provider="colors particles effects" data-x-slide-prev=""><i class="x-icon e2-e87 m2-3d" aria-hidden="true" data-x-icon-o=""></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.e2-e88`
  - **HTML:** `<a class="x-div e2-e88 m2-31 m2-33 m2-34 m2-35 m2-37 m2-38 m2-39" href="#next" data-x-effect-provider="colors particles effects" data-x-slide-next=""><i class="x-icon e2-e89 m2-3d" aria-hidden="true" data-x-icon-o=""></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.e5071-e115`
  - **HTML:** `<a class="x-anchor x-anchor-button has-graphic e5071-e115 m3wv-r m3wv-s m3wv-u m3wv-v m3wv-w m3wv-1b m3wv-1c m3wv-1f m3wv-1g" tabindex="0" href="mailto:norgesnett@norgesnett.no">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.e5071-e117`
  - **HTML:** `<a class="x-anchor x-anchor-button has-graphic e5071-e117 m3wv-r m3wv-s m3wv-u m3wv-v m3wv-w m3wv-1b m3wv-1c m3wv-1f m3wv-1g" tabindex="0" href="https://no.linkedin.com/company/norgesnett-as" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.e5071-e119`
  - **HTML:** `<a class="x-anchor x-anchor-button has-graphic e5071-e119 m3wv-r m3wv-s m3wv-u m3wv-v m3wv-w m3wv-1b m3wv-1c m3wv-1f m3wv-1g" tabindex="0" href="https://www.instagram.com/norgesnett/" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.e5071-e121`
  - **HTML:** `<a class="x-anchor x-anchor-button has-graphic e5071-e121 m3wv-r m3wv-s m3wv-u m3wv-v m3wv-w m3wv-1b m3wv-1c m3wv-1f m3wv-1g" tabindex="0" href="https://www.facebook.com/Norgesnett/" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.e5071-e84`
  - **HTML:** `<ul class="x-row e5071-e84 m3wv-1h m3wv-1k m3wv-1n m3wv-1s m3wv-1t m3wv-22">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: div


### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.e5071-e85`
  - **HTML:** `<li class="x-col e5071-e85 m3wv-27 m3wv-2a m3wv-2c m3wv-2e m3wv-2g m3wv-2h m3wv-2i"><div class="x-div e5071-e86 m3wv-2y"><div class="x-text x-content e5071-e87 m3wv-g m3wv-h m3wv-m m3wv-n">Tlf: 21 49 25 06</div></div></li>`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `.e5071-e88`
  - **HTML:** `<li class="x-col e5071-e88 m3wv-27 m3wv-2a m3wv-2c m3wv-2e m3wv-2g m3wv-2h m3wv-2i"><div class="x-div e5071-e89 m3wv-2y"><div class="x-text x-content e5071-e90 m3wv-g m3wv-h m3wv-m m3wv-n">Stabburveien 18, 1617 Fredrikstad</div></div></li>`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `.e5071-e91`
  - **HTML:** `<li class="x-col e5071-e91 m3wv-27 m3wv-2a m3wv-2c m3wv-2e m3wv-2g m3wv-2h m3wv-2i"><div class="x-div e5071-e92 m3wv-2y"><div class="x-text x-content e5071-e93 m3wv-g m3wv-h m3wv-m m3wv-n">Org.nr: 982 974&nbsp;011</div></div></li>`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

