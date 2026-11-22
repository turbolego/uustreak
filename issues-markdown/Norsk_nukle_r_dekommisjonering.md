# WCAG Violations Report for Norsk nukleær dekommisjonering

**Timestamp:** 2026-11-22T05:44:26.492Z
**URL:** [https://www.norskdekommisjonering.no/](https://www.norskdekommisjonering.no/)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Cookie Script
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#cookiescript_readmore`
  - **HTML:** `<a id="cookiescript_readmore" data-cs-i18n-text="{"en":"Read more","no":"Les mer"}" data-cs-i18n-url="{"en":"\/cookie-policy","no":"\/cookie-policy"}" target="_blank" aria-label="Les mer, opens a new window" href="/cookie-policy">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.53 (foreground color: #337a95, background color: #1c1c1c, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `#w-node-b0100a51-bdc5-a17e-043f-36d935fd4505-35fd44fe`
  - **HTML:** `<a href="/" aria-label="Gå til forside" id="w-node-b0100a51-bdc5-a17e-043f-36d935fd4505-35fd44fe" aria-current="page" class="footer2_logo-link w-nav-brand w--current"><p class="footertextlogo">TRYGG <br>TROVERDIG <br>ANSVARLIG</p></a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Document should not have more than one contentinfo landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one contentinfo landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-contentinfo?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `footer`
  - **HTML:** `<footer class="footer2_component">`
  - **Failure summary:** Fix any of the following: Document has more than one contentinfo landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `footer`
  - **HTML:** `<footer class="footer2_component">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

