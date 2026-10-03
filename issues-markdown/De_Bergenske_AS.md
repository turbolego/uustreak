# WCAG Violations Report for De Bergenske AS

**Timestamp:** 2026-10-03T04:09:28.698Z
**URL:** [https://www.debergenske.no/](https://www.debergenske.no/)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 6

#### Affected Elements:

- **Target:** `img[width="164"]`
  - **HTML:** `<img onerror="this.setAttribute('d..." width="164" height="50" data-nuxt-img="" sizes="(max-width: 1024px) ..." srcset="https://res.cloudina..." role="navigation" aria-label="Home" style="height:50px;" src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: ARIA role navigation is not allowed for given element

- **Target:** `#splide01-slide01`
  - **HTML:** `<li class="splide__slide max-h-full is-active is-visible" id="splide01-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style="margin-right: 1.5rem; width: calc(100% + 0rem);">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element

- **Target:** `#splide02-slide01`
  - **HTML:** `<li class="splide__slide max-h-full is-active is-visible" id="splide02-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style="margin-right: 1.5rem; width: calc(100% + 0rem);">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element

- **Target:** `#splide03-slide01`
  - **HTML:** `<li class="splide__slide max-h-full is-active is-visible" id="splide03-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 6" style="margin-right: 1.5rem; width: calc(100% + 0rem);">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element

- **Target:** `#splide04-slide01`
  - **HTML:** `<li class="splide__slide max-h-full is-active is-visible" id="splide04-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 8" style="margin-right: 1.5rem; width: calc(100% + 0rem);">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element

- **Target:** `img[width="150"]`
  - **HTML:** `<img onerror="this.setAttribute('d..." width="150" height="48" alt="Pure" loading="lazy" data-nuxt-img="" sizes="(max-width: 768px) 3..." srcset="https://res.cloudina..." role="navigation" aria-label="Main" src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: ARIA role navigation is not allowed for given element


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#ppms_cm_close-popup`
  - **HTML:** `<button class="ppms_cm_close_popup" id="ppms_cm_close-popup" data-disable-select="true">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#ppms_cm_agree-to-all`
  - **HTML:** `<button class="ppms_cm_agree-to-all" id="ppms_cm_agree-to-all">Accept all</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.27 (foreground color: #ffffff, background color: #2775f2, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#ppms_cm_reject-all`
  - **HTML:** `<button class="ppms_cm_reject-all" id="ppms_cm_reject-all">Decline all</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.27 (foreground color: #ffffff, background color: #2775f2, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#ppms_cm_content_expander_show_btn`
  - **HTML:** `<button class="ppms_cm_content_expander_show_btn" id="ppms_cm_content_expander_show_btn" data-content-expander="true">Consent details</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.97 (foreground color: #107ef1, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#popup-link`
  - **HTML:** `<a class="ppms_cm_link" id="popup-link" href="">Privacy policy</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.97 (foreground color: #107ef1, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#ppms_cm_footer__powered_by`
  - **HTML:** `<span class="ppms_cm_footer__powered_by" data-disable-select="true" id="ppms_cm_footer__powered_by">Powered by</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.72 (foreground color: #999999, background color: #fafafa, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 29

#### Affected Elements:

- **Target:** `.lg\:col-span-2 > .sm\:pr-6.flex-1.media`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.lg\:col-span-1 > .sm\:pr-6.flex-1.media`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(4) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(1) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(4) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(2) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(4) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(3) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(4) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(4) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(4) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(5) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.splide__arrow--prev.left-5[aria-controls="splide01-track"] > .w-12[data-nuxt-img=""]`
  - **HTML:** `<img onerror="this.setAttribute('d..." data-nuxt-img="" srcset="/_vercel/image?url=%..." class="w-12" src="/_vercel/image?url=%...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.splide__arrow--next.right-5[aria-controls="splide01-track"] > .w-12[data-nuxt-img=""]`
  - **HTML:** `<img onerror="this.setAttribute('d..." data-nuxt-img="" srcset="/_vercel/image?url=%..." class="w-12" src="/_vercel/image?url=%...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#splide02-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.flex-1.media`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.splide__arrow--prev.left-5[aria-controls="splide02-track"] > .w-12[data-nuxt-img=""]`
  - **HTML:** `<img onerror="this.setAttribute('d..." data-nuxt-img="" srcset="/_vercel/image?url=%..." class="w-12" src="/_vercel/image?url=%...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.splide__arrow--next.right-5[aria-controls="splide02-track"] > .w-12[data-nuxt-img=""]`
  - **HTML:** `<img onerror="this.setAttribute('d..." data-nuxt-img="" srcset="/_vercel/image?url=%..." class="w-12" src="/_vercel/image?url=%...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#splide03-slide01 > .collection-item--fullWidth[fluidwidth="true"][theme="default"] > .sm\:max-w-full.flex-1.media`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.splide__arrow--prev.left-5[aria-controls="splide03-track"] > .w-12[data-nuxt-img=""]`
  - **HTML:** `<img onerror="this.setAttribute('d..." data-nuxt-img="" srcset="/_vercel/image?url=%..." class="w-12" src="/_vercel/image?url=%...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.splide__arrow--next.right-5[aria-controls="splide03-track"] > .w-12[data-nuxt-img=""]`
  - **HTML:** `<img onerror="this.setAttribute('d..." data-nuxt-img="" srcset="/_vercel/image?url=%..." class="w-12" src="/_vercel/image?url=%...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.lg\:col-span-3 > .sm\:pr-6.flex-1.media`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(1) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(2) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(3) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(4) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(5) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.lg\:h-\[740px\].collection-item[theme=""]:nth-child(6) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(1) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(2) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(3) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:h-\[740px\].collection-item[theme=""]:nth-child(4) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .lg\:grid-cols-3.gap-6.grid > .lg\:flex-col-reverse.lg\:h-\[740px\][theme=""]:nth-child(5) > .h-auto.max-w-full.sm\:px-6`
  - **HTML:** `<img onerror="this.setAttribute('d..." loading="lazy" data-nuxt-img="" sizes="(max-width: 320px) 3..." srcset="https://res.cloudina..." class="media flex-1 object-..." src="https://res.cloudina...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.splide__arrow--prev.left-5[aria-controls="splide04-track"] > .w-12[data-nuxt-img=""]`
  - **HTML:** `<img onerror="this.setAttribute('d..." data-nuxt-img="" srcset="/_vercel/image?url=%..." class="w-12" src="/_vercel/image?url=%...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.splide__arrow--next.right-5[aria-controls="splide04-track"] > .w-12[data-nuxt-img=""]`
  - **HTML:** `<img onerror="this.setAttribute('d..." data-nuxt-img="" srcset="/_vercel/image?url=%..." class="w-12" src="/_vercel/image?url=%...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="no" data-capo="">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.maxLg\:py-5`
  - **HTML:** `<nav class="overflow-hidden relative flex maxLg:py-5 maxLg:flex maxLg:flex-col container lg:overflow-visible flex-row justify-between items-center lg:h-12 lg:static">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `#splide01`
  - **HTML:** `<div class="splide splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized" id="splide01" role="region" aria-roledescription="carousel" style="max-width: 100%;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 23

#### Affected Elements:

- **Target:** `.top-0`
  - **HTML:** `<div class="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.gap-1`
  - **HTML:** `<div class="flex flex-col gap-1 lg:gap-9 max-w-full text-Theme/Light"><!----><h1 lang="no" class="font-bell font-medium uppercase leading-[1.15] text-[clamp(theme(fontSize.4xl),6vw,theme(fontSize.8xl))]">Velkommen til våre restauranter og …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.custom-select.md\:col-span-3[data-v-53d2364d=""]`
  - **HTML:** `<div class="custom-select md:col-span-3" data-v-53d2364d="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.dp__pointer`
  - **HTML:** `<input data-test="dp-input" class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg" inputmode="none" placeholder="Velg dato" value="" autocomplete="off" aria-label="Datepicker input">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.btn-theme-default`
  - **HTML:** `<a href="https://book.debergenske.no/MultiProperty/MultiPropertyV1/Start?multiPropertyId=052816d8-b60b-41cb-8379-453771dea6f9&year=&month=&day=&stayLength=0&roomConfig=a2&currency=NOK&culture=nb" target="_blank" class="btn-theme-default su…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(2)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-0315d95b="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(3)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-d53f09c7="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(4)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-d53f09c7="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(5) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].leading-\[1\.15\]`
  - **HTML:** `<h2 class="heading pb-12 text-[clamp(theme(fontSize.4xl),4vw,theme(fontSize.6xl))] leading-[1.15] font-bell uppercase" data-v-d53f09c7="">Kickoff for suksess</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(6) > .py-15[data-v-d53f09c7=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
  - **HTML:** `<div class="flex flex-col col-span-4 lg:col-span-4 xl:col-span-3" data-v-d53f09c7="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(7) > .py-15[data-v-d53f09c7=""] > .xl\:pr-0.xl\:pl-15.grid-cols-4 > .xl\:col-span-3.col-span-4.lg\:col-span-4`
  - **HTML:** `<div class="flex flex-col col-span-4 lg:col-span-4 xl:col-span-3" data-v-d53f09c7="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(8)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-d53f09c7="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(9)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-d53f09c7="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(10)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-d53f09c7="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(11) > .py-15[data-v-d53f09c7=""] > .container[data-v-d53f09c7=""] > .heading.text-\[clamp\(theme\(fontSize\.4xl\)\,4vw\,theme\(fontSize\.6xl\)\)\].leading-\[1\.15\]`
  - **HTML:** `<h2 class="heading pb-12 text-[clamp(theme(fontSize.4xl),4vw,theme(fontSize.6xl))] leading-[1.15] font-bell uppercase" data-v-d53f09c7="">Vi er Bergen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\!bg-Theme\/Dark.DARK.\!text-white:nth-child(12)`
  - **HTML:** `<section class="!bg-Theme/Dark !text-white DARK" data-v-0315d95b="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.xl\:col-span-6 > .lg\:text-center`
  - **HTML:** `<div class="lg:text-center">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.xl\:col-span-6 > div:nth-child(2)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ppms_cm_language_select_btn_id`
  - **HTML:** `<div class="ppms_cm_language_select_btn" id="ppms_cm_language_select_btn_id" data-type="customSelect" data-fixed-text="true" tabindex="0">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ppms-68b46b4f-2362-49d8-8054-214dfd5e0e70`
  - **HTML:** `<span class="ppms_cm_header1" id="ppms-68b46b4f-2362-49d8-8054-214dfd5e0e70">Privacy on this site</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ppms-2fe8bc9e-97d5-445d-9bf9-9d5a02dacf45`
  - **HTML:** `<div class="ppms_cm_description_wrapper" id="ppms-2fe8bc9e-97d5-445d-9bf9-9d5a02dacf45">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#popup-link`
  - **HTML:** `<a class="ppms_cm_link" id="popup-link" href="">Privacy policy</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ppms_cm_footer__powered_by`
  - **HTML:** `<span class="ppms_cm_footer__powered_by" data-disable-select="true" id="ppms_cm_footer__powered_by">Powered by</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.maxMd\:w-full`
  - **HTML:** `<select class="block maxMd:w-full maxMd:border-r-4 border-white md:w-56 bg-white py-[8.5px] pl-2 pr-6 text-dark text-xl" data-v-53d2364d="">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

