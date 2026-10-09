# WCAG Violations Report for Den Nationale Scene AS

**Timestamp:** 2026-10-09T04:58:00.087Z
**URL:** [https://dns.no/](https://dns.no/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#mcforms-365945-437181, .visible`
  - **HTML:** `<form data-amped-type="step" role="dialog" aria-modal="true" aria-labelledby="popup_label_437181" aria-live="assertive" tabindex="-1" class="step visible" style="display: block;">`
  - **Failure summary:** Fix any of the following: ARIA role dialog is not allowed for given element


### Table header text should not be empty

- **Impact:** minor
- **Description:** Ensure table headers have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-table-header?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.month1 > thead > .caption > th:nth-child(3)`
  - **HTML:** `<th><span class="next">&gt;</span> </th>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers

- **Target:** `.month2 > thead > .caption > th:nth-child(1)`
  - **HTML:** `<th><span class="prev">&lt;</span> </th>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.social[rel="noopener"][target="_blank"]:nth-child(1)`
  - **HTML:** `<a class="social" href="https://www.instagram.com/dennationalescene/?hl=nb&quot;" target="_blank" rel="noopener" tabindex="-1"><i class="fab fa-instagram" alt="Gå til Instagram"></i></a>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.social[rel="noopener"][target="_blank"]:nth-child(2)`
  - **HTML:** `<a class="social" href="https://www.facebook.com/teateret/" target="_blank" rel="noopener" tabindex="-1"><i class="fab fa-facebook-square" alt="Gå til Facebook"></i></a>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.social[rel="noopener"][target="_blank"]:nth-child(3)`
  - **HTML:** `<a class="social" href="https://www.linkedin.com/company/den-nationale-scene/" target="_blank" rel="noopener" tabindex="-1"><i class="fa-brands fa-linkedin" alt="Gå til LinkedIn"></i></a>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 91

#### Affected Elements:

- **Target:** `.close_sidemenu`
  - **HTML:** `<a href="#" class="close_sidemenu" title="Lukk meny" aria-label="Lukk meny"><span class="dashicons dashicons-no-alt"></span></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#skip-to-content" tabindex="-1">Hopp til innhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#dtx-header-logo`
  - **HTML:** `<div id="dtx-header-logo">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header-links`
  - **HTML:** `<div class="header-links">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cal-month > .vc_col-sm-3.wpb_column.vc_column_container`
  - **HTML:** `<div class="wpb_column vc_column_container vc_col-sm-3">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.sel__placeholder-calendar-sel__placeholderect-date`
  - **HTML:** `<span class="sel__placeholder sel__placeholder-calendar-sel__placeholderect-date" data-placeholder="Velg dag">Velg dag</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.sel__placeholder-calendar-sel__placeholderect-production-input`
  - **HTML:** `<span class="sel__placeholder sel__placeholder-calendar-sel__placeholderect-production-input" data-placeholder="Velg forestilling">Velg forestilling</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.default-top`
  - **HTML:** `<div class="default-top">Vennligst velg ein datoperiode</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > thead > .caption > th:nth-child(1)`
  - **HTML:** `<th> <span class="prev">&lt; </span> </th>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > thead > .caption > .month-name[colspan="5"]`
  - **HTML:** `<th colspan="5" class="month-name"><div class="month-element">oktober</div> <div class="month-element">2026</div></th>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > thead > .week-name`
  - **HTML:** `<tr class="week-name"><th>ma</th><th>ti</th><th>on</th><th>to</th><th>fr</th><th>lø</th><th>sø</th> </tr>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(1) > td:nth-child(4)`
  - **HTML:** `<td><div time="1790830666955" data-tooltip="" class="day toMonth valid ">1</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(1) > td:nth-child(5)`
  - **HTML:** `<td><div time="1790917066955" data-tooltip="" class="day toMonth valid ">2</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(1) > td:nth-child(6)`
  - **HTML:** `<td><div time="1791003466955" data-tooltip="" class="day toMonth valid ">3</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(1) > td:nth-child(7)`
  - **HTML:** `<td><div time="1791089866955" data-tooltip="" class="day toMonth valid ">4</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(2)`
  - **HTML:** `<tr>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(3)`
  - **HTML:** `<tr>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(4)`
  - **HTML:** `<tr>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(5) > td:nth-child(1)`
  - **HTML:** `<td><div time="1792994266955" data-tooltip="" class="day toMonth valid ">26</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(5) > td:nth-child(2)`
  - **HTML:** `<td><div time="1793080666955" data-tooltip="" class="day toMonth valid ">27</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(5) > td:nth-child(3)`
  - **HTML:** `<td><div time="1793167066955" data-tooltip="" class="day toMonth valid ">28</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(5) > td:nth-child(4)`
  - **HTML:** `<td><div time="1793253466955" data-tooltip="" class="day toMonth valid ">29</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(5) > td:nth-child(5)`
  - **HTML:** `<td><div time="1793339866955" data-tooltip="" class="day toMonth valid ">30</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month1 > tbody > tr:nth-child(5) > td:nth-child(6)`
  - **HTML:** `<td><div time="1793426266955" data-tooltip="" class="day toMonth valid ">31</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month2 > thead > .caption > .month-name[colspan="5"]`
  - **HTML:** `<th colspan="5" class="month-name"><div class="month-element">november</div> <div class="month-element">2026</div></th>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month2 > thead > .caption > th:nth-child(3)`
  - **HTML:** `<th> <span class="next">&gt;</span> </th>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month2 > thead > .week-name`
  - **HTML:** `<tr class="week-name"><th>ma</th><th>ti</th><th>on</th><th>to</th><th>fr</th><th>lø</th><th>sø</th> </tr>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month2 > tbody > tr:nth-child(1) > td:nth-child(7)`
  - **HTML:** `<td><div time="1793512666955" data-tooltip="" class="day toMonth valid ">1</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month2 > tbody > tr:nth-child(2)`
  - **HTML:** `<tr>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month2 > tbody > tr:nth-child(3)`
  - **HTML:** `<tr>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month2 > tbody > tr:nth-child(4)`
  - **HTML:** `<tr>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.month2 > tbody > tr:nth-child(5)`
  - **HTML:** `<tr>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `tr:nth-child(6) > td:nth-child(1)`
  - **HTML:** `<td><div time="1796018266955" data-tooltip="" class="day toMonth valid ">30</div></td>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="17091"] > .vc_column-inner > .wpb_wrapper > .wpb_single_image.vc_align_left.wpb_animate_when_almost_visible`
  - **HTML:** `<div class="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="17091"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
  - **HTML:** `<div class="attribute-spillested"> <p>Marinehagen</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="17091"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
  - **HTML:** `<div class="attribute-fritekst"> <p>Urpremiere 24. oktober</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="17091"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
  - **HTML:** `<a href="https://dns.no/forestillinger/1349-det-kom-et-skip-til-bjorgvin/"><h2>1349 – det kom et skip til Bjørgvin</h2></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="17091"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
  - **HTML:** `<div class="cal-ticketlink"> <p><a href="https://dns.no/forestillinger/1349-det-kom-et-skip-til-bjorgvin/">Kjøp billetter <i class="fal fa-long-arrow-right"></i></a></p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="16984"] > .vc_column-inner > .wpb_wrapper > .wpb_single_image.vc_align_left.wpb_animate_when_almost_visible`
  - **HTML:** `<div class="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="16984"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
  - **HTML:** `<div class="attribute-spillested"> <p>Kipo Askøy / Fana kulturhus</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="16984"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
  - **HTML:** `<div class="attribute-fritekst"> <p>Premiere 30. oktober</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="16984"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
  - **HTML:** `<a href="https://dns.no/forestillinger/legenden-om-narnia-loven-heksa-og-klesskapet/"><h2>Legenden om Narnia – løven, heksa og klesskapet</h2></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="16984"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
  - **HTML:** `<div class="cal-ticketlink"> <p><a href="https://dns.no/forestillinger/legenden-om-narnia-loven-heksa-og-klesskapet/">Kjøp billetter <i class="fal fa-long-arrow-right"></i></a></p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="17013"] > .vc_column-inner > .wpb_wrapper > .wpb_single_image.vc_align_left.wpb_animate_when_almost_visible`
  - **HTML:** `<div class="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="17013"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
  - **HTML:** `<div class="attribute-spillested"> <p>Hallen USF</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="17013"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
  - **HTML:** `<div class="attribute-fritekst"> <p>Urpremiere 7. november</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="17013"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
  - **HTML:** `<a href="https://dns.no/forestillinger/ildens-historie/"><h2>Ildens historie</h2></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="17013"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
  - **HTML:** `<div class="cal-ticketlink"> <p><a href="https://dns.no/forestillinger/ildens-historie/">Kjøp billetter <i class="fal fa-long-arrow-right"></i></a></p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18037"] > .vc_column-inner > .wpb_wrapper > .wpb_single_image.vc_align_left.wpb_animate_when_almost_visible`
  - **HTML:** `<div class="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18037"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
  - **HTML:** `<div class="attribute-spillested"> <p>Grieghallen</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18037"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
  - **HTML:** `<div class="attribute-fritekst"> <p>Bergenspremiere 12. november</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18037"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
  - **HTML:** `<a href="https://dns.no/forestillinger/triggersystemet/"><h2>Triggersystemet</h2></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18037"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
  - **HTML:** `<div class="cal-ticketlink"> <p><a href="https://dns.no/forestillinger/triggersystemet/">Kjøp billetter <i class="fal fa-long-arrow-right"></i></a></p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="16982"] > .vc_column-inner > .wpb_wrapper > .wpb_single_image.vc_align_left.wpb_animate_when_almost_visible`
  - **HTML:** `<div class="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="16982"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
  - **HTML:** `<div class="attribute-spillested"> <p>Lille DNS</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="16982"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
  - **HTML:** `<div class="attribute-fritekst"> <p>Tilbake fra 14. november</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="16982"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
  - **HTML:** `<a href="https://dns.no/forestillinger/jul-i-brakmakergata/"><h2>Jul i Bråkmakergata</h2></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="16982"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
  - **HTML:** `<div class="cal-ticketlink"> <p><a href="https://dns.no/forestillinger/jul-i-brakmakergata/">Kjøp billetter <i class="fal fa-long-arrow-right"></i></a></p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-data-tag-252 > .vc_column-inner > .wpb_wrapper > .wpb_single_image.vc_align_left.wpb_animate_when_almost_visible`
  - **HTML:** `<div class="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-data-tag-252 > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
  - **HTML:** `<div class="attribute-spillested"> <p>Fana kulturhus</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-data-tag-252 > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
  - **HTML:** `<div class="attribute-fritekst"> <p>Relæxt-forestilling 25. november</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-data-tag-252 > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
  - **HTML:** `<a href="https://dns.no/forestillinger/relaext-legenden-om-narnia-loven-heksa-og-klesskapet/"><h2>Relæxt Legenden om Narnia – løven, heksa og klesskapet</h2></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-data-tag-252 > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
  - **HTML:** `<div class="cal-ticketlink"> <p><a href="https://dns.no/forestillinger/relaext-legenden-om-narnia-loven-heksa-og-klesskapet/">Kjøp billetter <i class="fal fa-long-arrow-right"></i></a></p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18549"] > .vc_column-inner > .wpb_wrapper > .wpb_single_image.vc_align_left.wpb_animate_when_almost_visible`
  - **HTML:** `<div class="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18549"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
  - **HTML:** `<div class="attribute-spillested"> <p>Cornerteatret</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18549"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
  - **HTML:** `<div class="attribute-fritekst"> <p>Premiere 12. november</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18549"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
  - **HTML:** `<a href="https://dns.no/forestillinger/opphold-pa-ubestemt-tid/"><h2>Opphold på ubestemt tid</h2></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18549"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
  - **HTML:** `<div class="cal-ticketlink"> <p><a href="https://dns.no/forestillinger/opphold-pa-ubestemt-tid/">Kjøp billetter <i class="fal fa-long-arrow-right"></i></a></p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18458"] > .vc_column-inner > .wpb_wrapper > .wpb_single_image.vc_align_left.wpb_animate_when_almost_visible`
  - **HTML:** `<div class="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18458"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-spillested`
  - **HTML:** `<div class="attribute-spillested"> <p>Marinehagen</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18458"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > .attribute-fritekst`
  - **HTML:** `<div class="attribute-fritekst"> <p>Utsolgt</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18458"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-content > a`
  - **HTML:** `<a href="https://dns.no/forestillinger/kare-conradi-peer-gynt/"><h2>Kåre Conradi – Peer Gynt</h2></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-postid="18458"] > .vc_column-inner > .wpb_wrapper > .frontpage-cal-text.wpb_animate_when_almost_visible.wpb_fadeIn > .wpb_wrapper > .cal-ticketlink`
  - **HTML:** `<div class="cal-ticketlink"> <p><a href="https://dns.no/forestillinger/kare-conradi-peer-gynt/">Kjøp billetter <i class="fal fa-long-arrow-right"></i></a></p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_custom_1597326627476 > .vc_col-has-fill.vc_col-sm-12.wpb_column > .vc_custom_1597326586251.vc_column-inner > .wpb_wrapper > .all-events.wpb_text_column.wpb_content_element`
  - **HTML:** `<div class="wpb_text_column wpb_content_element all-events"> <div class="wpb_wrapper"> <p><a class="tabable" tabindex="9" href="https://dns.no/forestillinger/">Se alle forestillinger <i class="fal fa-long-arrow-right"></i></a></p> </div> <…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_custom_1678087387650`
  - **HTML:** `<div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true" class="vc_row wpb_row vc_row-fluid forestillinger vc_custom_1678087387650" style="position: relative; left: -75.2188px; box-sizing: border-box; wi…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_row-o-content-middle.vc_row-flex.ult-vc-hide-row:nth-child(7)`
  - **HTML:** `<div class="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex ult-vc-hide-row vc_row-has-fill" data-rtl="false" style="position: relative;" data-row-effect-mobile-disable="true">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_custom_1701252272509`
  - **HTML:** `<div class="wpb_text_column wpb_content_element vc_custom_1701252272509"> <div class="wpb_wrapper"> <h2>Aktuelt</h2> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.js-redirect-post > .vc_grid.vc_grid-gutter.vc_pageable-wrapper > .vc_pageable-slide-wrapper.vc_clearfix[data-vc-grid-content="true"] > .vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item > .vc_grid-item-mini.vc_clearfix > .vc_gitem-animated-block.vc_gitem-animate.vc_gitem-animate-fadeIn > .vc_gitem-zone-b.vc_custom_1538040546699.vc-gitem-zone-height-mode-auto`
  - **HTML:** `<div class="vc_gitem-zone vc_gitem-zone-b vc_custom_1538040546699 vc-gitem-zone-height-mode-auto vc_gitem-is-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.js-redirect-post > .vc_grid.vc_grid-gutter.vc_pageable-wrapper > .vc_pageable-slide-wrapper.vc_clearfix[data-vc-grid-content="true"] > .vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_title.vc_custom_heading.vc_gitem-post-data`
  - **HTML:** `<div class="vc_custom_heading vc_gitem-post-data vc_gitem-post-data-source-post_title"><h3 style="text-align: left"><a href="https://modernisering.dns.no/" class="vc_gitem-link" title="Modernisering og oppussing av DNS">Modernisering og op…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.js-redirect-post > .vc_grid.vc_grid-gutter.vc_pageable-wrapper > .vc_pageable-slide-wrapper.vc_clearfix[data-vc-grid-content="true"] > .vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_excerpt.vc_custom_heading.vc_gitem-post-data`
  - **HTML:** `<div class="vc_custom_heading vc_gitem-post-data vc_gitem-post-data-source-post_excerpt"><p style="text-align: left"></p><p>Teaterbygningen på Engen skal moderniseres og rustes opp – les mer på prosjektets hjemmeside.</p> <p></p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_custom_1758734014855 > .vc_grid.vc_grid-gutter.vc_pageable-wrapper > .vc_pageable-slide-wrapper.vc_clearfix[data-vc-grid-content="true"] > .vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item:nth-child(1) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-animated-block.vc_gitem-animate.vc_gitem-animate-fadeIn > .vc_gitem-zone-b.vc_custom_1538040546699.vc-gitem-zone-height-mode-auto`
  - **HTML:** `<div class="vc_gitem-zone vc_gitem-zone-b vc_custom_1538040546699 vc-gitem-zone-height-mode-auto vc_gitem-is-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_custom_1758734014855 > .vc_grid.vc_grid-gutter.vc_pageable-wrapper > .vc_pageable-slide-wrapper.vc_clearfix[data-vc-grid-content="true"] > .vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item:nth-child(1) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_title.vc_custom_heading.vc_gitem-post-data`
  - **HTML:** `<div class="vc_custom_heading vc_gitem-post-data vc_gitem-post-data-source-post_title">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_custom_1758734014855 > .vc_grid.vc_grid-gutter.vc_pageable-wrapper > .vc_pageable-slide-wrapper.vc_clearfix[data-vc-grid-content="true"] > .vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item:nth-child(1) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_excerpt.vc_custom_heading.vc_gitem-post-data`
  - **HTML:** `<div class="vc_custom_heading vc_gitem-post-data vc_gitem-post-data-source-post_excerpt">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item:nth-child(2) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-animated-block.vc_gitem-animate.vc_gitem-animate-fadeIn > .vc_gitem-zone-b.vc_custom_1538040546699.vc-gitem-zone-height-mode-auto`
  - **HTML:** `<div class="vc_gitem-zone vc_gitem-zone-b vc_custom_1538040546699 vc-gitem-zone-height-mode-auto vc_gitem-is-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item:nth-child(2) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_title.vc_custom_heading.vc_gitem-post-data`
  - **HTML:** `<div class="vc_custom_heading vc_gitem-post-data vc_gitem-post-data-source-post_title"><h3 style="text-align: left"><a href="https://dns.no/strindbergs-nadelose-menneskespill/" class="vc_gitem-link" title="Strindbergs nådeløse menneskespil…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item:nth-child(2) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_excerpt.vc_custom_heading.vc_gitem-post-data`
  - **HTML:** `<div class="vc_custom_heading vc_gitem-post-data vc_gitem-post-data-source-post_excerpt">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item:nth-child(3) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-animated-block.vc_gitem-animate.vc_gitem-animate-fadeIn > .vc_gitem-zone-b.vc_custom_1538040546699.vc-gitem-zone-height-mode-auto`
  - **HTML:** `<div class="vc_gitem-zone vc_gitem-zone-b vc_custom_1538040546699 vc-gitem-zone-height-mode-auto vc_gitem-is-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item:nth-child(3) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_title.vc_custom_heading.vc_gitem-post-data`
  - **HTML:** `<div class="vc_custom_heading vc_gitem-post-data vc_gitem-post-data-source-post_title">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_grid-item.vc_grid-item-zone-c-bottom.vc_visible-item:nth-child(3) > .vc_grid-item-mini.vc_clearfix > .vc_gitem-zone-c.vc_gitem-zone > .vc_gitem-zone-mini > .vc_gitem-row-position-top.vc_gitem_row.vc_row > .vc_gitem-col.vc_gitem-col-align-.vc_col-sm-12 > .vc_gitem-post-data-source-post_excerpt.vc_custom_heading.vc_gitem-post-data`
  - **HTML:** `<div class="vc_custom_heading vc_gitem-post-data vc_gitem-post-data-source-post_excerpt">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.padded-section > .vc_col-sm-12.wpb_column.vc_column_container > .vc_column-inner > .wpb_wrapper > .vc_inner.wpb_row.vc_row-fluid:nth-child(2)`
  - **HTML:** `<div class="vc_row wpb_row vc_inner vc_row-fluid">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.vc_custom_1789721343108`
  - **HTML:** `<div class="vc_row wpb_row vc_row-fluid lille-dns vc_custom_1789721343108 vc_row-o-content-middle vc_row-flex ult-vc-hide-row vc_row-has-fill" data-rtl="false" style="position: relative;" data-row-effect-mobile-disable="true">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 10

#### Affected Elements:

- **Target:** `#calendar-show-calendar`
  - **HTML:** `<a href="#" id="calendar-show-calendar" tabindex="1">Se kalender/ Velg dato</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.sel-calendar-select-date`
  - **HTML:** `<div class="sel sel-calendar-select-date" tabindex="2">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.sel-calendar-select-production-input`
  - **HTML:** `<div class="sel sel-calendar-select-production-input" tabindex="3">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.tabable[href$="forestillinger/"]`
  - **HTML:** `<a class="tabable" tabindex="9" href="https://dns.no/forestillinger/">Se alle forestillinger <i class="fal fa-long-arrow-right"></i></a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.vc_custom_1678087387650 > .vc_col-has-fill.vc_col-sm-12.wpb_column > .vc_custom_1597326586251.vc_column-inner > .wpb_wrapper > .all-events.wpb_text_column.wpb_content_element > .wpb_wrapper > p > .tabable`
  - **HTML:** `<a class="tabable" tabindex="11" href="https://dns.no/opplev-mer/arrangementer/">Se alle arrangement <i class="fal fa-long-arrow-right"></i></a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `a[href$="nyheter/"]`
  - **HTML:** `<a class="tabable" tabindex="14" href="https://dns.no/nyheter/">Se alle nyheter<i class="fal fa-long-arrow-right"></i></a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `p:nth-child(2) > a[href$="kontakt/"]`
  - **HTML:** `<a href="https://dns.no/kontakt/" tabindex="16">Se all kontaktinformasjon</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `p:nth-child(2) > a[rel="noopener"][target="_blank"]`
  - **HTML:** `<a tabindex="17" href="https://www.google.com/maps/place/Fortunen+7,+5013+Bergen/@60.3937532,5.321729,19.5z/data=!4m6!3m5!1s0x463cfc02b0a83ea9:0x49bc07438396af78!8m2!3d60.3939246!4d5.3215405!16s%2Fg%2F11t_lxbw0y?entry=ttu&g_ep=EgoyMDI1MDUx…`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `a[href$="nyhetsbrev/"][rel="noopener"][target="_blank"]`
  - **HTML:** `<a tabindex="18" href="https://dns.no/nyhetsbrev/" target="_blank" rel="noopener">Meld deg på vårt nyhetsbrev</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `a[href$="gavekort/"][rel="noopener"]`
  - **HTML:** `<a tabindex="19" href="https://dns.no/gavekort/" rel="noopener">Gi teatermagi i gave</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

