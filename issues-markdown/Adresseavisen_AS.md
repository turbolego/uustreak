# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-11-01T03:22:11.850Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.Abobutton`
  - **HTML:** `<button class="Abobutton removePlussForApp"> BLI ABONNENT </button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.64 (foreground color: #ffffff, background color: #28aae2, font size: 9.6pt (12.8px), font weight: normal). Expected contrast ratio of 4.5:1


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- **Target:** `.gridfullsize > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Slåssing på buss i Trondheim: – Ti personer kan være involvert</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.85;"><!----> <span>I 25 år har har den trønderske gründerfamilien vært her for å hjelpe de fattigste: - Et eventyr</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.opinion > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.no-image > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Mann bekreftet omkommet: – Fremstår som en ulykke</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.gridspotlightside.hot70.life40:nth-child(4) > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.Layout`
  - **HTML:** `<main class="Layout">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.top`
  - **HTML:** `<aside class="gdpr-wrapper top">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.Layout`
  - **HTML:** `<main class="Layout">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 6

#### Affected Elements:

- **Target:** `a:nth-child(5)`
  - **HTML:** `<a href="https://adresseavisen.e-pages.pub/">eAdressa</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …

- **Target:** `section:nth-child(4) > div > div > .Tips > dl > dd > a[href="tel:46407200"]`
  - **HTML:** `<a href="tel:46407200">464 07200</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …

- **Target:** `div > div > p > a:nth-child(1)`
  - **HTML:** `<a href="https://presse.no/pfu/etiske-regler/vaer-varsom-plakaten/">Vær Varsom-plakatens</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …

- **Target:** `p > a:nth-child(2)`
  - **HTML:** `<a href="https://www.redaktor.no/ressurser/etiske-og-juridiske-rammeverk/redaktorplakaten">Redaktøransvar</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …

- **Target:** `a[href$="medietilsynet.no/"]`
  - **HTML:** `<a href="https://www.medietilsynet.no/">Medietilsynet</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …

- **Target:** `p > a:nth-child(4)`
  - **HTML:** `<a href="https://www.adressa.no/nyheter/i/lVOBge/adresseavisens-rettigheter">Adresseavisens rettigheter.</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="front section_frontp..." lang="nb" data-darkmode="off" data-n-head="%7B%22class%22:%7B%2..." style="--header-calc-height...">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.user`
  - **HTML:** `<button tabindex="1" aria-controls="usermenu" aria-expanded="false" aria-label="Brukermeny" class="user menu-icon"><span class="user-initials"></span> <span class="notification-count" style="display:none;">0</span></button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.main`
  - **HTML:** `<button tabindex="1" aria-controls="submenu" aria-expanded="false" aria-label="Åpne- og lukkeknapp for meny" class="menu-icon main"><span></span></button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

