# WCAG Violations Report for Stavanger Aftenblad AS

**Timestamp:** 2026-11-11T05:16:25.175Z
**URL:** [https://www.aftenbladet.no/](https://www.aftenbladet.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `track-element[data-track-id="teaser:113861"] > ._podcast_drfin_1 > ._meta_drfin_64 > ._root_me3cj_65._small_me3cj_88[vendor="sa"]`
  - **HTML:** `<audio-play-button asset-id="113861" vendor="sa" provider="sa" title="Hør sendingen etter Viking - KFUM" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-track-click="" data-state="idle">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `track-element[data-track-id="teaser:113848"] > ._podcast_drfin_1 > ._meta_drfin_64 > ._root_me3cj_65._small_me3cj_88[vendor="sa"]`
  - **HTML:** `<audio-play-button asset-id="113848" vendor="sa" provider="sa" title="Er du blitt avhengig av applausen, Mímir Kristjánsson?" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-track-click="" data-state="id…`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")

- **Target:** `audio-play-button[title="Jebb Flanderson\a for president!"]`
  - **HTML:** `<audio-play-button asset-id="113818" vendor="sa" provider="sa" title="Jebb Flanderson for president!" class="label-medium _root_me3cj_65 _small_me3cj_88" role="button" tabindex="0" data-track-click="" data-state="idle">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.sch-datacontroller__text`
  - **HTML:** `<span class="sch-datacontroller__text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

