# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-10-09T04:54:21.402Z
**URL:** [https://www.bt.no/](https://www.bt.no/)
**Total Violations:** 2

## Violation Details

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `audio-play-button[title="Siste før\a storkampen"]`
  - **HTML:** `<audio-play-button asset-id="127887" vendor="bt" provider="bt" title="Siste før storkampen" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-state="idle">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `audio-play-button[title="Får me betre\a råd no?"]`
  - **HTML:** `<audio-play-button asset-id="127880" vendor="bt" provider="bt" title="Får me betre råd no?" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-state="idle">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `audio-play-button[title="Som en kule"]`
  - **HTML:** `<audio-play-button asset-id="127866" vendor="bt" provider="bt" title="Som en kule" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-state="idle">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.sch-datacontroller__text`
  - **HTML:** `<span class="sch-datacontroller__text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

