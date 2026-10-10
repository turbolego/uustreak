# WCAG Violations Report for First Hotels AS

**Timestamp:** 2026-10-10T08:24:42.509Z
**URL:** [https://www.firsthotels.no/](https://www.firsthotels.no/)
**Total Violations:** 4

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.data-\[placeholder\]\:text-muted-foreground`
  - **HTML:** `<button type="button" role="combobox" aria-controls="radix-_R_3dpfivb_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default" class="data-[placeholder]:t...">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 12

#### Affected Elements:

- **Target:** `#CybotCookiebotDialogBodyEdgeMoreDetailsLink`
  - **HTML:** `<a id="CybotCookiebotDialogBodyEdgeMoreDetailsLink" href="#" class="">Detaljer</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.78 (foreground color: #424242, background color: #171717, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="sverige"] > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
  - **HTML:** `<p class="line-clamp-3 text-stone-500">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #79716b, background color: #f5f5f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="danmark"] > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
  - **HTML:** `<p class="line-clamp-3 text-stone-500">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #79716b, background color: #f5f5f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="norge"] > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
  - **HTML:** `<p class="line-clamp-3 text-stone-500">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #79716b, background color: #f5f5f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="groenland"] > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
  - **HTML:** `<p class="line-clamp-3 text-stone-500">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #79716b, background color: #f5f5f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.pr-0 > .min-w-0.grow-0.basis-full:nth-child(1) > .hover\:opacity-60.duration-300 > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
  - **HTML:** `<p class="line-clamp-3 text-stone-500">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #79716b, background color: #f5f5f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.pr-0 > .min-w-0.grow-0.basis-full:nth-child(2) > .hover\:opacity-60.duration-300 > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
  - **HTML:** `<p class="line-clamp-3 text-stone-500">Klar for å reise og skape uforglemmelige minner? Vi tror på at det å oppleve nye ting gjør livet enda bedre.</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #79716b, background color: #f5f5f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.pr-0 > .min-w-0.grow-0.basis-full:nth-child(3) > .hover\:opacity-60.duration-300 > .w-full > .pt-2 > .line-clamp-3.text-stone-500`
  - **HTML:** `<p class="line-clamp-3 text-stone-500">Det er aldri for sent å oppdage noe nytt! Du som er over 67 år, får 25 % rabatt når du booker hotellrom på utvalgte hoteller. Utforsk nye plasser, besøk familie og venner eller bare ta en deilig hotel…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #79716b, background color: #f5f5f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.data-\[placeholder\]\:text-muted-foreground > .text-muted-foreground:nth-child(2)`
  - **HTML:** `<span class="text-muted-foreground">NO</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.65 (foreground color: #79716b, background color: #1c1917, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="privacy-policy"]`
  - **HTML:** `<a href="/privacy-policy">Personvernerklæring</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.12 (foreground color: #79716b, background color: #0c0a09, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="booking-conditions"]`
  - **HTML:** `<a href="/booking-conditions">Vilkår og betingelser</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.12 (foreground color: #79716b, background color: #0c0a09, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="cookies"]`
  - **HTML:** `<a href="/cookies">Cookies</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.12 (foreground color: #79716b, background color: #0c0a09, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.mb-8.md\:mt-8:nth-child(1) > .space-y-4.flex-col.flex > .space-y-4.flex-col.relative > .overflow-x-hidden[aria-roledescription="carousel"][data-slot="carousel"]`
  - **HTML:** `<div class="relative overflow-x-hidden" role="region" aria-roledescription="carousel" data-slot="carousel">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.border-b-stone-700 > a[href="/"]`
  - **HTML:** `<a href="/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.space-x-4.flex > a[target="_blank"]:nth-child(1)`
  - **HTML:** `<a href="https://www.facebook.com/FirstHotels" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.space-x-4.flex > a[target="_blank"]:nth-child(2)`
  - **HTML:** `<a href="https://www.linkedin.com/company/22596/" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[target="_blank"]:nth-child(3)`
  - **HTML:** `<a href="https://www.instagram.com/first.hotels.official/" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

