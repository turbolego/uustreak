# WCAG Violations Report for Riksteatret

**Timestamp:** 2026-11-05T09:06:53.499Z
**URL:** [https://www.riksteatret.no/](https://www.riksteatret.no/)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 15

#### Affected Elements:

- **Target:** `#feature_1 > .module__grid > .module__content > .module__body > h4`
  - **HTML:** `<h4 style="color:inherit"> Tenk å plutselig få en gorilla som mamma! | Av Frida Nilsson. Dramatisert av Jenny Svensson. </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#feature_2 > .module__grid > .module__content > .module__body > h4`
  - **HTML:** `<h4 style="color:inherit"> En sci-fi-komedie | Av Amar Jašarević. Regi Farnaz Arbabi. </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#feature_3 > .module__grid > .module__content > .module__body > h4`
  - **HTML:** `<h4 style="color:inherit"> Til ungdommen | Av Nora Dåsnes. Dramatisert av Toril Solvang-Kayiambakis. </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#feature_4 > .module__grid > .module__content > .module__body > h4`
  - **HTML:** `<h4 style="color:inherit"> Av Tore Vagn Lid </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#feature_5 > .module__grid > .module__content > .module__body > h4`
  - **HTML:** `<h4 style="color:inherit"> Kunsten å overvåke (seg selv) | Av Tore Vagn Lid, fritt etter George Orwell. </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#feature_6 > .module__grid > .module__content > .module__body > h4`
  - **HTML:** `<h4 style="color:inherit"> Når barna får styre showet! | Av Gunnar Eiriksson </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#feature_7 > .module__grid > .module__content > .module__body > h4`
  - **HTML:** `<h4 style="color:inherit"> Bli med inn i en humoristisk og gjenkjennelig skolehverdag | Av og med Fredrik Høyer. </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#feature_8 > .module__grid > .module__content > .module__body > h4`
  - **HTML:** `<h4 style="color:inherit"> Med Bjørn Sundquist i spissen for et unikt ensemble | Av Tore Vagn Lid. </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `a[href$="apestjernen/"] > .module__content > .module__head > h4`
  - **HTML:** `<h4 style="color: inherit">Tenk å plutselig få en gorilla som mamma!</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `a[href$="triggersystemet/"] > .module__content > .module__head > h4`
  - **HTML:** `<h4 style="color: inherit">Med Bjørn Sundquist i spissen for et unikt ensemble med både mennesker og insekter(!), er «Triggersystemet» av Tore Vagn Lid en av de store teateropplevelsene du må få med deg akkurat nå!</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `a[href$="ubesvart-anrop/"] > .module__content > .module__head > h4`
  - **HTML:** `<h4 style="color: inherit">Til ungdommen.</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `a[href$="lareren/"] > .module__content > .module__head > h4`
  - **HTML:** `<h4 style="color: inherit">Bli med Fredrik Høyer inn i en humoristisk og gjenkjennelig skolehverdag, som vi alle har et forhold til. I friminuttet byr vi på kaffe og vafler til alle!</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `a[href$="1984-dub/"] > .module__content > .module__head > h4`
  - **HTML:** `<h4 style="color: inherit">Kunsten å overvåke (seg selv).</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `a[href$="kakejazz/"] > .module__content > .module__head > h4`
  - **HTML:** `<h4 style="color: inherit">Når barna får styre showet!</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.module--grid[data-color=""]:nth-child(7) > .module__grid > a > .module__content > .module__head > h4`
  - **HTML:** `<h4 style="color: inherit">En sci-fi-komedie for alle oss som føler at verden er i ferd med å gå under.</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.listItem__link-wrapper[data-content-reference="1173464"][data-epi-block-id="1170785"] > img`
  - **HTML:** `<img src="https://v.imgi.no/zen2sl2zyr-square/400/Apestjernen.webp">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.listItem__link-wrapper[data-content-reference="1173389"][data-epi-block-id="1170785"] > img`
  - **HTML:** `<img src="https://v.imgi.no/e7bt7du8fk-square/400/Ubesvart-anrop.webp">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.listItem__link-wrapper[data-content-reference="1168970"][data-epi-block-id="1170785"] > img`
  - **HTML:** `<img src="https://v.imgi.no/78ndbh23tb-square/400/Mio-min-Mio.webp">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.site-footer__column[aria-label="Lenker"]:nth-child(1)`
  - **HTML:** `<nav class="site-footer__column" aria-label="Lenker">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

