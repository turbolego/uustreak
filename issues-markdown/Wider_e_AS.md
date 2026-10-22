# WCAG Violations Report for Widerøe AS

**Timestamp:** 2026-10-22T04:10:11.808Z
**URL:** [https://www.wideroe.no/](https://www.wideroe.no/)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"]`
  - **HTML:** `<ul role="navigation" class="Footer-module__q7ZRWa__columnList">`
  - **Failure summary:** Fix any of the following: ARIA role navigation is not allowed for given element

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"]`
  - **HTML:** `<ul role="navigation" class="Footer-module__q7ZRWa__columnList">`
  - **Failure summary:** Fix any of the following: ARIA role navigation is not allowed for given element

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"]`
  - **HTML:** `<ul role="navigation" class="Footer-module__q7ZRWa__columnList">`
  - **Failure summary:** Fix any of the following: ARIA role navigation is not allowed for given element


### Required ARIA attributes must be provided

- **Impact:** critical
- **Description:** Ensure elements with ARIA roles have all required ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.ToggleGroup-module__8OuBQG__active`
  - **HTML:** `<button class="Button-module__xaXzvq__button Button-module__xaXzvq__ghost Button-module__xaXzvq__small ToggleGroup-module__8OuBQG__button ToggleGroup-module__8OuBQG__active" role="radio">`
  - **Failure summary:** Fix any of the following: Required ARIA attribute not present: aria-checked

- **Target:** `.ToggleGroup-module__8OuBQG__button.Button-module__xaXzvq__ghost[role="radio"]:nth-child(3)`
  - **HTML:** `<button class="Button-module__xaXzvq__button Button-module__xaXzvq__ghost Button-module__xaXzvq__small ToggleGroup-module__8OuBQG__button" role="radio"><span class="Button-module__xaXzvq__buttonContent"><span class="ToggleGroup-module__8Ou…`
  - **Failure summary:** Fix any of the following: Required ARIA attribute not present: aria-checked


### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.SearchTabs-module__3-nUmG__tabList`
  - **HTML:** `<ul class="SearchTabs-module__3-nUmG__tabList" role="tablist" aria-label="Velg hva du ønsker å bestille">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: li


### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.SearchTabs-module__3-nUmG__active`
  - **HTML:** `<button class="SearchTabs-module__3-nUmG__tabButton SearchTabs-module__3-nUmG__active" tabindex="0" role="tab" type="button" aria-selected="true" aria-controls="flight-search-0">Flybilletter</button>`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist

- **Target:** `button[aria-controls="flight-search-1"]`
  - **HTML:** `<button class="SearchTabs-module__3-nUmG__tabButton" tabindex="-1" role="tab" type="button" aria-selected="false" aria-controls="flight-search-1">Hotell</button>`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist

- **Target:** `button[aria-controls="flight-search-2"]`
  - **HTML:** `<button class="SearchTabs-module__3-nUmG__tabButton" tabindex="-1" role="tab" type="button" aria-selected="false" aria-controls="flight-search-2">Leiebil</button>`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist


### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#origin-airport`
  - **HTML:** `<input type="text" id="origin-airport" class="Form-module__JBuYoW_..." placeholder=" " autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="true" aria-controls="origin-airport-optio..." aria-invalid="false" aria-owns=…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute values: aria-controls="origin-airport-options", aria-owns="origin-airport-options"

- **Target:** `#destination-airport`
  - **HTML:** `<input type="text" id="destination-airport" class="Form-module__JBuYoW_..." placeholder=" " autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="true" aria-controls="destination-airport-..." aria-invalid="false" aria-…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute values: aria-controls="destination-airport-options", aria-owns="destination-airport-options"


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `.ot-cookie-policy-link`
  - **HTML:** `<a class="ot-cookie-policy-link" href="https://wideroe.no/about-wideroe/privacy/cookie-policy" aria-label="Mer informasjon om personvernet ditt, åpnes i en ny fane" rel="noopener" target="_blank">For mer informasjon, les vår policy for inf…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `nav`
  - **HTML:** `<nav class="Footer-module__q7ZRWa__footer">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 20

#### Affected Elements:

- **Target:** `.SearchTabs-module__3-nUmG__listItem:nth-child(1)`
  - **HTML:** `<li class="SearchTabs-module__3-nUmG__listItem"><button class="SearchTabs-module__3-nUmG__tabButton SearchTabs-module__3-nUmG__active" tabindex="0" role="tab" type="button" aria-selected="true" aria-controls="flight-search-0">Flybilletter<…`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.SearchTabs-module__3-nUmG__listItem:nth-child(2)`
  - **HTML:** `<li class="SearchTabs-module__3-nUmG__listItem"><button class="SearchTabs-module__3-nUmG__tabButton" tabindex="-1" role="tab" type="button" aria-selected="false" aria-controls="flight-search-1">Hotell</button></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.SearchTabs-module__3-nUmG__listItem:nth-child(3)`
  - **HTML:** `<li class="SearchTabs-module__3-nUmG__listItem"><button class="SearchTabs-module__3-nUmG__tabButton" tabindex="-1" role="tab" type="button" aria-selected="false" aria-controls="flight-search-2">Leiebil</button></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(1)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Innsjekk" href="https://www.wideroe.no/mine-reiser/innsjekk"><span>Innsjekk</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(2)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Bagasje" href="https://www.wideroe.no/reiseinformasjon/bagasje"><span>Bagasje</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(3)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Destinasjoner" href="https://www.wideroe.no/destinasjoner"><span>Destinasjoner</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(4)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Mine reiser" href="https://www.wideroe.no/mine-reiser"><span>Mine reiser</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(5)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Widerøe-appen" href="https://www.wideroe.no/reiseinformasjon/wideroe-app"><span>Widerøe-appen</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(6)`
  - **HTML:** `<li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(1)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Widerøe Bisniss" href="https://www.wideroe.no/bedrift/wideroe-bisniss "><span>Widerøe Bisniss</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(2)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Agent- og salesinfo" href="https://www.wideroe.no/bedrift/agent-og-salessupport"><span>Agent- og salesinfo</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(3)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Cargo" href="https://www.wideroe.no/bedrift/cargo"><span>Cargo</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(4)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Leie av fly" href="https://www.wideroe.no/bedrift/charter"><span>Leie av fly</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(5)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="For leverandører" href="https://www.wideroe.no/om-selskapet/fakturainformasjon"><span>For leverandører</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(1)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Om selskapet" href="https://www.wideroe.no/om-selskapet"><span>Om selskapet</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(2)`
  - **HTML:** `<li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(3)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Bærekraft og miljø" href="https://www.wideroe.no/om-selskapet/barekraft-og-miljo"><span>Bærekraft og miljø</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(4)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Økonomi" href="https://www.wideroe.no/om-selskapet/okonomi"><span>Økonomi</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(5)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Media" href="https://www.wideroe.no/om-selskapet/media-og-presse/"><span>Media</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(6)`
  - **HTML:** `<li><a class="Footer-module__q7ZRWa__link" target="_self" rel="noopener noreferrer" title="Personvern" href="https://www.wideroe.no/om-selskapet/personvern"><span>Personvern</span></a></li>`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

