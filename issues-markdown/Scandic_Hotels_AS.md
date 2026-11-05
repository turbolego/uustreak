# WCAG Violations Report for Scandic Hotels AS

**Timestamp:** 2026-11-05T09:10:09.258Z
**URL:** [https://www.scandichotels.com/no](https://www.scandichotels.com/no)
**Total Violations:** 5

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `label[data-testid="bookingCode.flag"]`
  - **HTML:** `<label data-testid="bookingCode.flag" aria-expanded="false" id="react-aria6305081720-_r_93_" data-react-aria-pressable="true" class="checkbox-module__L5OmLa__container " data-rac="">`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.contentCard-module__HLpyJG__link[href$="julebord"] > .contentCard-module__HLpyJG__card > .contentCard-module__HLpyJG__content > h4`
  - **HTML:** `<h4 class="typography-module__vfKlZa__Title-Subtitle-md">Julehygge hos Scandic</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `a[href$="scandic-hotels"] > .contentCard-module__HLpyJG__card > .contentCard-module__HLpyJG__content > h4`
  - **HTML:** `<h4 class="typography-module__vfKlZa__Title-Subtitle-md">Scandic Hotels</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `#react-aria6305081720-_r_8a_`
  - **HTML:** `<button type="button" tabindex="0" data-react-aria-pres...="true" aria-labelledby="bookingWidgetDatePic..." aria-haspopup="dialog" aria-expanded="false" aria-controls="datePickerPopover" class="date-picker-module__..." data-rac="" id="reac…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#react-aria6305081720-_r_8c_`
  - **HTML:** `<button type="button" tabindex="0" data-react-aria-pres...="true" aria-labelledby="rooms-and-guests" aria-haspopup="dialog" aria-expanded="false" aria-controls="guestsPopover" class="guests-rooms-picker-..." data-rac="" id="react-aria63050…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.booking-code-module__wWrYrG__container > .button-module__NbgNfa__variant-text.button-module__NbgNfa__size-lg.typography-module__vfKlZa__Body-Paragraph-mdBold`
  - **HTML:** `<button type="button" tabindex="0" aria-expanded="false" id="react-aria6305081720-_r_93_" data-react-aria-pressable="true" class="button-module__NbgNfa__button button-module__NbgNfa__variant-text button-module__NbgNfa__size-lg typography-m…`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#skip-link`
  - **HTML:** `<a id="skip-link" href="#main-content" class="SkipLink-module__Kdng7q__skipLink"><p class="typography-module__vfKlZa__Body-Paragraph-mdBold">Gå til hovedinnhold</p></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

