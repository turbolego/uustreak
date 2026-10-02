# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-10-02T17:05:01.470Z
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

- **Target:** `track-element[data-track-id="teaser:127846"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="bt"]`
  - **HTML:** `<audio-play-button asset-id="127846" vendor="bt" provider="bt" title="Nei, Waterloo-gate handler ikke om bybanen" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-state="idle">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `audio-play-button[title="Akkurat nå: 24\a grader i Bergen"]`
  - **HTML:** `<audio-play-button asset-id="127826" vendor="bt" provider="bt" title="Akkurat nå: 24 grader i Bergen" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-state="idle">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `track-element[data-track-id="teaser:127798"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="bt"]`
  - **HTML:** `<audio-play-button asset-id="127798" vendor="bt" provider="bt" title="En siste omdreining i VAR-debatten" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-state="idle">`
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

