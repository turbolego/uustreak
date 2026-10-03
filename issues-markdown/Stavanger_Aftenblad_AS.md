# WCAG Violations Report for Stavanger Aftenblad AS

**Timestamp:** 2026-10-03T04:21:27.165Z
**URL:** [https://www.aftenbladet.no/](https://www.aftenbladet.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[title="Tips oss"], .headline`
  - **HTML:** `<span class="headline">Tips oss</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.1 (foreground color: #ffffff, background color: #0083cc, font size: 12.6pt (16.8px), font weight: bold). Expected contrast ratio of 4.5:1


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `track-element[data-track-id="teaser:113573"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="sa"]`
  - **HTML:** `<audio-play-button asset-id="113573" vendor="sa" provider="sa" title="Hør sendingen etter Madla - Viking" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-state="idle">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `track-element[data-track-id="teaser:113563"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="sa"]`
  - **HTML:** `<audio-play-button asset-id="113563" vendor="sa" provider="sa" title="Ekspert eller kjendis, fakta eller føleri?" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-state="idle">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `track-element[data-track-id="teaser:113559"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="sa"]`
  - **HTML:** `<audio-play-button asset-id="113559" vendor="sa" provider="sa" title="Stjerneslakt, kleint stunt, Ronaldo og Nations League" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-state="idle">`
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

