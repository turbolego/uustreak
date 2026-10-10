# WCAG Violations Report for Barne-, ungdoms-, og familiedirektoratet

**Timestamp:** 2026-10-10T08:09:23.024Z
**URL:** [https://www.bufdir.no/](https://www.bufdir.no/)
**Total Violations:** 1

## Violation Details

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `p:nth-child(2) > a`
  - **HTML:** `<a tabindex="1" href="https://www.bufdir.no/personvernerklaring/personvern-og-cookies-pa-nettstedet/">Les mer om våre cookies.</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.bl-m-b-3 > .bl-button--small.bl-button--primary.bl-button`
  - **HTML:** `<button class="bl-button bl-button--small bl-button--primary" tabindex="1" type="button"><span class="bl-button__consumer-content">Godta cookies</span></button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `div:nth-child(2) > .bl-button--small.bl-button--primary.bl-button`
  - **HTML:** `<button class="bl-button bl-button--small bl-button--primary" tabindex="1" type="button"><span class="bl-button__consumer-content">Avvis cookies</span></button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

