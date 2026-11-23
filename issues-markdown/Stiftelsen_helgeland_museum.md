# WCAG Violations Report for Stiftelsen helgeland museum

**Timestamp:** 2026-11-23T06:40:34.334Z
**URL:** [https://helgelandmuseum.no/](https://helgelandmuseum.no/)
**Total Violations:** 3

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 16

#### Affected Elements:

- **Target:** `div[data-title="Eldre steinalder"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 0; $refs.slider.querySelectorAll('.timelines__section')[0].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="Gå…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Yngre steinalder"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 1; $refs.slider.querySelectorAll('.timelines__section')[1].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="Gå…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Bronsealderen"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 2; $refs.slider.querySelectorAll('.timelines__section')[2].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="Gå…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Yngre jernalder"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 3; $refs.slider.querySelectorAll('.timelines__section')[3].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="Gå…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Merovingertid"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 4; $refs.slider.querySelectorAll('.timelines__section')[4].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="Gå…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `button[aria-label="Gå til visning 6 om Vikingtid."]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 5; $refs.slider.querySelectorAll('.timelines__section')[5].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="Gå…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Middelalder"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 6; $refs.slider.querySelectorAll('.timelines__section')[6].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="Gå…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Reformasjon"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 7; $refs.slider.querySelectorAll('.timelines__section')[7].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="Gå…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `button[aria-label="Gå til visning 9 om Enevelde."]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 8; $refs.slider.querySelectorAll('.timelines__section')[8].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="Gå…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Embetsmannsstaten"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 9; $refs.slider.querySelectorAll('.timelines__section')[9].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="Gå…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Industrialisering"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 10; $refs.slider.querySelectorAll('.timelines__section')[10].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Mellomkrigstid"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 11; $refs.slider.querySelectorAll('.timelines__section')[11].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Andre verdenskrig"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 12; $refs.slider.querySelectorAll('.timelines__section')[12].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Etterkrigstid"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 13; $refs.slider.querySelectorAll('.timelines__section')[13].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Oljealderen"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 14; $refs.slider.querySelectorAll('.timelines__section')[14].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"

- **Target:** `div[data-title="Informasjonenes tidsalder"] > button[type="button"][aria-controls="timeline"]`
  - **HTML:** `<button type="button" x-on:click.prevent="active = 15; $refs.slider.querySelectorAll('.timelines__section')[15].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })" tabindex="-1" aria-controls="timeline" aria-label="…`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="timeline"


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `button[aria-controls="timeline-1-1"]`
  - **HTML:** `<button class="timelines__item__trigger" x-bind:aria-expanded="expanded.toString()" aria-controls="timeline-1-1" aria-label="Vis/skjul innhold" x-on:click.prevent="expanded = !expanded" aria-expanded="false"> <span>Se innhold</span> </butt…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `button[aria-controls="timeline-1-2"]`
  - **HTML:** `<button class="timelines__item__trigger" x-bind:aria-expanded="expanded.toString()" aria-controls="timeline-1-2" aria-label="Vis/skjul innhold" x-on:click.prevent="expanded = !expanded" aria-expanded="false"> <span>Se innhold</span> </butt…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `a[href$="#footer"]`
  - **HTML:** `<a href="#footer" class="root-link">Hopp over tidslinje</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lower-footer`
  - **HTML:** `<div class="lower-footer"> <div class="lower-footer__content"> <p><span>Helgeland Museum © 2026</span> · <span><a href="/personvernvilkar/">Personvernvilkår</a></span> · <span>Design &amp; utvikling: <a href="https://riktigspor.no/" target…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

