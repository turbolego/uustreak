# WCAG Violations Report for Stiftelsen Hudøy

**Timestamp:** 2026-10-10T08:21:57.486Z
**URL:** [https://hudoy.no/](https://hudoy.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.av-countdown-time`
  - **HTML:** `<span class="av-countdown-time " data-upate-width="days" style="">253</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.41 (foreground color: #c84246, background color: #fff4ce, font size: 16.5pt (22px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.av-countdown-time-label`
  - **HTML:** `<span class="av-countdown-time-label " data-label="Day" data-label-multi="Days">dager</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.41 (foreground color: #c84246, background color: #fff4ce, font size: 16.5pt (22px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from player.vimeo.com
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe`
  - **HTML:** `<iframe src="//player.vimeo.com/video/1035582714?portrait=0&amp;byline=0&amp;title=0&amp;badge=0&amp;loop=1&amp;autopause=0&amp;api=1&amp;rel=0&amp;player_id=player_330_1337550787_182480417&amp;color=00414f"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `.classic-quote-left > h6`
  - **HTML:** `<h6 class="av-special-heading-tag " itemprop="headline">Oslo kommunes feriekoloni siden 1916</h6>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.post-entry-6343 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
  - **HTML:** `<h3 class="slide-entry-title entry-title " itemprop="headline"><a href="https://hudoy.no/2026/08/03/hittegods/" title="Hittegods og gjenglemt etter Camp Hudøy">Hittegods og gjenglemt etter Camp Hudøy</a></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#nav_menu-2 > .widgettitle`
  - **HTML:** `<h3 class="widgettitle">Om</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 13

#### Affected Elements:

- **Target:** `.avia-builder-el-38 > .avia-image-container-inner > .avia-image-overlay-wrap > .avia_image[rel="noopener noreferrer"][target="_blank"]`
  - **HTML:** `<a href="https://sparebankstiftelsen.no/" class="avia_image" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.avia-builder-el-40 > .avia-image-container-inner > .avia-image-overlay-wrap > .avia_image[rel="noopener noreferrer"][target="_blank"]`
  - **HTML:** `<a href="https://anthonstiftelsen.no/sok" class="avia_image" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="bufdir.no/"]`
  - **HTML:** `<a href="https://www.bufdir.no/" class="avia_image" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="bergesenstiftelsen.no/"]`
  - **HTML:** `<a href="https://bergesenstiftelsen.no/" class="avia_image" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="eckbos-legat.no/"]`
  - **HTML:** `<a href="https://eckbos-legat.no/" class="avia_image" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="ferdernasjonalpark.no/"]`
  - **HTML:** `<a href="https://ferdernasjonalpark.no/" class="avia_image" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="scheibler.no/"]`
  - **HTML:** `<a href="https://scheibler.no/" class="avia_image" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.avia-builder-el-53 > .avia-image-container-inner > .avia-image-overlay-wrap > .avia_image[rel="noopener noreferrer"][target="_blank"]`
  - **HTML:** `<a href="https://www.norsk-tipping.no/grasrotandelen" class="avia_image" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="pecunia.no/"]`
  - **HTML:** `<a href="https://www.pecunia.no/" class="avia_image" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="deichman.no/"]`
  - **HTML:** `<a href="https://deichman.no/" class="avia_image" target="_blank" rel="noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(1) > .alignleft[rel="noopener"][target="_blank"]`
  - **HTML:** `<a href="https://www.instagram.com/hudoy_offisiell/" target="_blank" rel="noopener" class="alignleft" style="float: left; margin: 0px; padding: 0px;">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .alignleft[rel="noopener"][target="_blank"]`
  - **HTML:** `<a href="https://www.facebook.com/CampHudoy" target="_blank" rel="noopener" class="alignleft" style="float: left; margin: 0px; padding: 0px;">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `p > .alignleft[rel="noopener"][target="_blank"]`
  - **HTML:** `<a href="https://www.oslo.kommune.no/natur-kultur-og-fritid/kunst-og-kultur/kultureiendommer/hudoy/#gref" target="_blank" rel="noopener" class="alignleft" style="float: left; margin: 0px; padding: 0px;">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 27

#### Affected Elements:

- **Target:** `iframe, #error`
  - **HTML:** `<div id="error" class="error">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.active-slide.slide-entry-wrap`
  - **HTML:** `<div class="slide-entry-wrap active-slide" style="visibility: visible; z-index: 4; opacity: 1; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px); transition: none;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#after_section_3 > .container > .template-page.content.av-content-full > .post-entry-type-page.post-entry-330.post-entry > .entry-content-wrapper.clearfix > .av_textblock_section`
  - **HTML:** `<section class="av_textblock_section " itemscope="itemscope" itemtype="https://schema.org/CreativeWork"><div class="avia_textblock " itemprop="text"><h1 style="text-align: center;"><a href="https://hudoy.no/aktuelt/">Aktuelt</a></h1> </div…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-entry-6343 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
  - **HTML:** `<h3 class="slide-entry-title entry-title " itemprop="headline"><a href="https://hudoy.no/2026/08/03/hittegods/" title="Hittegods og gjenglemt etter Camp Hudøy">Hittegods og gjenglemt etter Camp Hudøy</a></h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-entry-8807 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
  - **HTML:** `<h3 class="slide-entry-title entry-title " itemprop="headline">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-entry-8654 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
  - **HTML:** `<h3 class="slide-entry-title entry-title " itemprop="headline">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-entry-8551 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
  - **HTML:** `<h3 class="slide-entry-title entry-title " itemprop="headline">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-entry-8315 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
  - **HTML:** `<h3 class="slide-entry-title entry-title " itemprop="headline">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-entry-8218 > .slide-content > .entry-content-header > .slide-entry-title.entry-title[itemprop="headline"]`
  - **HTML:** `<h3 class="slide-entry-title entry-title " itemprop="headline">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.av-rotator-text-single-4`
  - **HTML:** `<span class="av-rotator-text-single av-rotator-text-single-4" style="display: inline;">show show show</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#av_section_6`
  - **HTML:** `<div id="av_section_6" class="avia-section main_color avia-section-no-padding avia-no-border-styling avia-bg-style-scroll avia-builder-el-23 el_after_av_section el_before_av_section container_wrap fullsize" style=" margin-top:0px; margin-b…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.avia-builder-el-34`
  - **HTML:** `<div style="text-align:center; m..." class="av-rotator-container..." data-interval="4" data-animation="typewriter" data-fixwidth="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container:nth-child(2) > .first.el_before_av_one_fifth.av_one_fifth`
  - **HTML:** `<div class="flex_column av_one_fifth first el_before_av_one_fifth">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.el_after_av_one_fifth.el_before_av_one_fifth.av_one_fifth:nth-child(2)`
  - **HTML:** `<div class="flex_column av_one_fifth el_after_av_one_fifth el_before_av_one_fifth ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.el_after_av_one_fifth.el_before_av_one_fifth.av_one_fifth:nth-child(3)`
  - **HTML:** `<div class="flex_column av_one_fifth el_after_av_one_fifth el_before_av_one_fifth ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.el_after_av_one_fifth.el_before_av_one_fifth.av_one_fifth:nth-child(4)`
  - **HTML:** `<div class="flex_column av_one_fifth el_after_av_one_fifth el_before_av_one_fifth ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[rel="noopener"][target="_blank"]:nth-child(3)`
  - **HTML:** `<a href="https://www.instagram.com/hudoy_offisiell" target="_blank" rel="noopener">@hudoy_offisiell</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[rel="noopener"][target="_blank"]:nth-child(2)`
  - **HTML:** `<a href="https://www.facebook.com/CampHudoy" target="_blank" rel="noopener">@CampHudoy</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#design-by-netpower`
  - **HTML:** `<section style="background:#bacacd; text-align: center; padding: 8px 0px; color: rgba(0, 64, 79, 1); font-size: 14px" id="design-by-netpower"> <a href="http://netpower.no" style="color: rgba(0, 64, 79, 1)"> © Camp Hudøy 2020 | Design og ut…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.gt-current-lang`
  - **HTML:** `<a href="#" title="Norwegian" data-gt-lang="no" class="glink nturl notranslate gt-current-lang"><img loading="lazy" src="/wp-content/plugins/gtranslate/flags/svg/no.svg" width="24" height="24" alt="no"></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="English"]`
  - **HTML:** `<a href="#" title="English" data-gt-lang="en" class="glink nturl notranslate"><img loading="lazy" src="/wp-content/plugins/gtranslate/flags/svg/en.svg" width="24" height="24" alt="en"></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Arabic"]`
  - **HTML:** `<a href="#" title="Arabic" data-gt-lang="ar" class="glink nturl notranslate"><img loading="lazy" src="/wp-content/plugins/gtranslate/flags/svg/ar.svg" width="24" height="24" alt="ar"></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Somali"]`
  - **HTML:** `<a href="#" title="Somali" data-gt-lang="so" class="glink nturl notranslate"><img loading="lazy" src="/wp-content/plugins/gtranslate/flags/svg/so.svg" width="24" height="24" alt="so"></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Urdu"]`
  - **HTML:** `<a href="#" title="Urdu" data-gt-lang="ur" class="glink nturl notranslate"><img loading="lazy" src="/wp-content/plugins/gtranslate/flags/svg/ur.svg" width="24" height="24" alt="ur"></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Tamil"]`
  - **HTML:** `<a href="#" title="Tamil" data-gt-lang="ta" class="glink nturl notranslate"><img loading="lazy" src="/wp-content/plugins/gtranslate/flags/svg/ta.svg" width="24" height="24" alt="ta"></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Polish"]`
  - **HTML:** `<a href="#" title="Polish" data-gt-lang="pl" class="glink nturl notranslate"><img loading="lazy" src="/wp-content/plugins/gtranslate/flags/svg/pl.svg" width="24" height="24" alt="pl"></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Ukrainian"]`
  - **HTML:** `<a href="#" title="Ukrainian" data-gt-lang="uk" class="glink nturl notranslate"><img loading="lazy" src="/wp-content/plugins/gtranslate/flags/svg/uk.svg" width="24" height="24" alt="uk"></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

