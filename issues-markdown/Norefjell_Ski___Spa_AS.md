# WCAG Violations Report for Norefjell Ski & Spa AS

**Timestamp:** 2026-10-08T10:22:24.782Z
**URL:** [https://www.norefjell.com/](https://www.norefjell.com/)
**Total Violations:** 2

## Violation Details

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#muze0lqtamdnwidwhg-contact\:email`
  - **HTML:** `<input class="mhForm__input mhForm__input--email" id="muze0lqtamdnwidwhg-contact:email" name="contact:email" type="email" aria-describedby="muze0lqtamdnwidwhg-error-contact:email" autocomplete="email">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#muze0lqtamdnwidwhg-contact\:email`
  - **HTML:** `<input class="mhForm__input mhForm__input--email" id="muze0lqtamdnwidwhg-contact:email" name="contact:email" type="email" aria-describedby="muze0lqtamdnwidwhg-error-contact:email" autocomplete="email">`
  - **Failure summary:** Fix all of the following: Form element has explicit <label> that is hidden

