# WCAG Violations Report for Biltema AS

**Timestamp:** 2026-10-10T08:11:41.503Z
**URL:** [https://www.biltema.no/](https://www.biltema.no/)
**Total Violations:** 10

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.OEYB7GsXVFgbeSLN0Yrb1Q\=\=`
  - **HTML:** `<label class="OEYB7GsXVFgbeSLN0Yrb1Q==" for="licensePlateSearch">Skriv in ditt reg.nr.</label>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.41 (foreground color: #0071b9, background color: #ededed, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.block__editorial > .block--inner > .maxwidth--66.center.block__content > .block__title`
  - **HTML:** `<h2 class="block__title"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- **Target:** `a[href$="multix18v/"] > .lazy__container > .lazy > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.content__grid--3.content__grid--3-2.align--center:nth-child(2) > a > .lazy__container > .lazy[data-alt=""] > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.content__grid--3.content__grid--3-2.align--center:nth-child(3) > a > .lazy__container > .lazy[data-alt=""] > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.teaser__item:nth-child(1) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.teaser__item:nth-child(2) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.teaser__item:nth-child(3) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `main[role="main"]`
  - **HTML:** `<main role="main">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#react__maincontent`
  - **HTML:** `<main id="react__maincontent" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#react__maincontent`
  - **HTML:** `<main id="react__maincontent" tabindex="-1">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.content__grid--3.content__grid--3-2.align--center:nth-child(1) > a[href$="multix18v/"]`
  - **HTML:** `<a href="/aktuelt/multix18v/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content__grid--3.content__grid--3-2.align--center:nth-child(2) > a`
  - **HTML:** `<a href="/nytt-og-nyttig/inspirasjon/gjor-jobben-selv---spar-tusenlapper/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content__grid--3.content__grid--3-2.align--center:nth-child(3) > a`
  - **HTML:** `<a href="/om-biltema/jobbe-pa-biltema/ledige-stillinger/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.editorial__grid > li:nth-child(1)`
  - **HTML:** `<li>`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `.editorial__grid > li:nth-child(2)`
  - **HTML:** `<li>`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.header__info__item.link--black:nth-child(1) > .font__myriad--semibold`
  - **HTML:** `<span class="font__myriad--semibold">Kjøp &amp; Hent</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(1) > span:nth-child(3)`
  - **HTML:** `<span>&nbsp;- Kjøp på nett og hent i varehuset.</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(2) > .font__myriad--semibold`
  - **HTML:** `<span class="font__myriad--semibold">Biltema Appen</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(2) > span:nth-child(3)`
  - **HTML:** `<span>&nbsp;- 19000 produkter rett i lomma!</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(3) > .font__myriad--semibold`
  - **HTML:** `<span class="font__myriad--semibold">Mitt Biltema</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(3) > span:nth-child(3)`
  - **HTML:** `<span>&nbsp;- Få kvitteringene dine digitalt</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(4) > .font__myriad--semibold`
  - **HTML:** `<span class="font__myriad--semibold">Biltema Bedrift</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(4) > span:nth-child(3)`
  - **HTML:** `<span>&nbsp;- Logg inn</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

