# WCAG Violations Report for Bærum kommune

**Timestamp:** 2026-10-03T04:06:06.275Z
**URL:** [https://www.baerum.kommune.no/](https://www.baerum.kommune.no/)
**Total Violations:** 2

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.is-petroleum > .pageBoundary > .article-teasers > .article-teaser > .article-teaser__image > img`
  - **HTML:** `<img src="/globalassets/nyheter/bilder-til-nyhetssaker/utbedring-kyststi-holtekilen/oversiktskart.jpg?quality=70&amp;mode=crop&amp;width=800&amp;height=450">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.is-peach > .pageBoundary > .article-teasers > .article-teaser > .article-teaser__image > img`
  - **HTML:** `<img src="/globalassets/nyheter/bilder-til-nyhetssaker/kolsastoppen/kolsastoppen.jpg?quality=70&amp;mode=crop&amp;width=800&amp;height=450">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.siteLogo`
  - **HTML:** `<a href="/" class="siteLogo"> <img src="/UI/logo-dark.png" width="112" height="86" alt="Bærum kommune"> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

