# WCAG Violations Report for Lierne nasjonalparksenter IKS

**Timestamp:** 2026-11-20T06:20:34.837Z
**URL:** [https://nasjonalparken.no/](https://nasjonalparken.no/)
**Total Violations:** 13

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[title="Vinteropplevelser i Lierne"], .ytmVideoInfoVideoTitle`
  - **HTML:** `<a class="ytmVideoInfoVideoTitle" aria-level="2" href="https://www.youtube.com/watch?v=VhSLyfFT0Bk"><span class="ytAttributedStringHost ytmVideoInfoLink ytAttributedStringWhiteSpaceNoWrap" style="">Vinteropplevelser i Lierne</span></a>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-level="2"


### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;"> Avvis alle </button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[title="Vinteropplevelser i Lierne"], #movie_player`
  - **HTML:** `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/cb7ffe6d/player_embed_es6.vflset/nb_NO/base.js" ar…`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on "div" elements with no valid role attribute.


### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 6

#### Affected Elements:

- **Target:** `ul[data-accordion="ewil91-accordion"]`
  - **HTML:** `<ul class="accordion fact-accordion" data-accordion="ewil91-accordion" data-allow-all-closed="true" data-multi-expand="true" role="tablist">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: li

- **Target:** `ul[data-accordion="jih3ex-accordion"]`
  - **HTML:** `<ul class="accordion fact-accordion" data-accordion="jih3ex-accordion" data-allow-all-closed="true" data-multi-expand="true" role="tablist">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: li

- **Target:** `ul[data-accordion="l6gpmy-accordion"]`
  - **HTML:** `<ul class="accordion fact-accordion" data-accordion="l6gpmy-accordion" data-allow-all-closed="true" data-multi-expand="true" role="tablist">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: li

- **Target:** `ul[data-accordion="o4fuxq-accordion"]`
  - **HTML:** `<ul class="accordion fact-accordion" data-accordion="o4fuxq-accordion" data-allow-all-closed="true" data-multi-expand="true" role="tablist">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: li

- **Target:** `ul[data-accordion="te3dz0-accordion"]`
  - **HTML:** `<ul class="accordion fact-accordion" data-accordion="te3dz0-accordion" data-allow-all-closed="true" data-multi-expand="true" role="tablist">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: li

- **Target:** `ul[data-accordion="c0dnr4-accordion"]`
  - **HTML:** `<ul class="accordion fact-accordion" data-accordion="c0dnr4-accordion" data-allow-all-closed="true" data-multi-expand="true" role="tablist">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: li


### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 6

#### Affected Elements:

- **Target:** `#mcxpna-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="mcxpna-accordion" role="tab" id="mcxpna-accordion-label" aria-expanded="false" aria-selected="false">Blåfjella-Skjækerfjella/ Låarte-Skæhkere nasjonalpark</a>`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist

- **Target:** `#\30 5hrci-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="05hrci-accordion" role="tab" id="05hrci-accordion-label" aria-expanded="false" aria-selected="false">Lierne/Lirje nasjonalpark</a>`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist

- **Target:** `#\36 v7kpd-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="6v7kpd-accordion" role="tab" id="6v7kpd-accordion-label" aria-expanded="false" aria-selected="false">Innfallsport Lierne og Grong</a>`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist

- **Target:** `#nb2x6s-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="nb2x6s-accordion" role="tab" id="nb2x6s-accordion-label" aria-expanded="false" aria-selected="false">Innfallsporten i Snåsa</a>`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist

- **Target:** `#x5q4c0-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="x5q4c0-accordion" role="tab" id="x5q4c0-accordion-label" aria-expanded="false" aria-selected="false">Innfallsporten i Steinkjer</a>`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist

- **Target:** `#avvtf9-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="avvtf9-accordion" role="tab" id="avvtf9-accordion-label" aria-expanded="false" aria-selected="false">Innfallsporten i Verdal</a>`
  - **Failure summary:** Fix any of the following: Required ARIA parent role not present: tablist


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[title="Vinteropplevelser i Lierne"], .ytmVideoInfoChannelAvatar`
  - **HTML:** `<button class="ytmVideoInfoLink ytmVideoInfoChannelAvatar"><img class="ytCoreImageHost ytmVideoInfoChannelLogo ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleAspectFill" alt="thumbnail-image" style="backg…`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.coi-banner__policy`
  - **HTML:** `<a href="javascript:TogglePage(this, 'coiPage-3');" class="coi-banner__policy">Les mer om informasjonskapsler</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.18 (foreground color: #068484, background color: #f6f6f6, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#coiPage-1 > .coi-banner__footer > .coi-banner__branding > .coi-external-link[href$="cookieinformation.com/"][target="_blank"]`
  - **HTML:** `<a class="coi-external-link" href="https://cookieinformation.com/" target="_blank">Cookie Information</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.18 (foreground color: #068484, background color: #f6f6f6, font size: 7.1pt (9.45px), font weight: normal). Expected contrast ratio of 4.5:1


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.search-form.small-12.columns > form > .search-field[type="search"][placeholder="Søk"]`
  - **HTML:** `<input type="search" id="s" class="search-field" placeholder="Søk" value="" name="s" title="Søk">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `#text-2`
  - **HTML:** `<aside id="text-2" class="columns small-12 medium-6 large-4 widget widget_text">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#branding > .site-logo[rel="home"][href$="nasjonalparken.no/"]`
  - **HTML:** `<a class="site-logo" href="https://nasjonalparken.no/" rel="home">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f0874c8553f2f0f0d"], #u_0_1_D4`
  - **HTML:** `<a href="https://www.facebook.com/liernenasjonalparksenter?ref=embed_page" target="_blank" id="u_0_1_D4"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="fd1695ef572a44685"], #u_0_1_0Z`
  - **HTML:** `<a href="https://www.facebook.com/blafjellaskjakerfjella?ref=embed_page" target="_blank" id="u_0_1_0Z"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f20d52e666dd29079"], #u_0_1_vK`
  - **HTML:** `<a href="https://www.facebook.com/liernenasjonalpark?ref=embed_page" target="_blank" id="u_0_1_vK"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 6

#### Affected Elements:

- **Target:** `ul[data-accordion="ewil91-accordion"] > .accordion-item[data-accordion-item=""]`
  - **HTML:** `<li class="accordion-item" data-accordion-item="">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `ul[data-accordion="jih3ex-accordion"] > .accordion-item[data-accordion-item=""]`
  - **HTML:** `<li class="accordion-item" data-accordion-item="">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `ul[data-accordion="l6gpmy-accordion"] > .accordion-item[data-accordion-item=""]`
  - **HTML:** `<li class="accordion-item" data-accordion-item="">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `ul[data-accordion="o4fuxq-accordion"] > .accordion-item[data-accordion-item=""]`
  - **HTML:** `<li class="accordion-item" data-accordion-item="">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `ul[data-accordion="te3dz0-accordion"] > .accordion-item[data-accordion-item=""]`
  - **HTML:** `<li class="accordion-item" data-accordion-item="">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.

- **Target:** `ul[data-accordion="c0dnr4-accordion"] > .accordion-item[data-accordion-item=""]`
  - **HTML:** `<li class="accordion-item" data-accordion-item="">`
  - **Failure summary:** Fix any of the following: List item parent element has a role that is not role="list". Ensure the parent element has role="list", or move the <li> inside a <ul> or <ol>.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 23

#### Affected Elements:

- **Target:** `a[href$="#content"]`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#content">Gå til innholdet</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.screen-reader-font-size`
  - **HTML:** `<a class="skip-link screen-reader-text screen-reader-font-size" href="#">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.intro-text`
  - **HTML:** `<div class="intro-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#post-6604 > .entry-content`
  - **HTML:** `<div class="entry-content"> <p>Welcome to Lierne and Blåfjella–Skjækerfjella National Parks Are you visiting Norway this summer and planning a trip to Lierne, Blåfjella–Skjækerfjella …</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.more-posts`
  - **HTML:** `<div class="more-posts"> Se <a title="Aktuelt" href="/aktuelt">aktuelt</a> eller følg oss på <a href="#" title="Følg oss på Facebook">Facebook</a> for flere oppdateringer. </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-equalizer="icl5kc-equalizer"]`
  - **HTML:** `<div class="page_row fullwidth-row" data-equalizer="icl5kc-equalizer" data-equalize-on="large" data-resize="j8bdbf-eq">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-equalizer="jqz8li-equalizer"]`
  - **HTML:** `<div class="page_row fullwidth-row" data-equalizer="jqz8li-equalizer" data-equalize-on="large" data-resize="5yqowo-eq">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Les mer 'Naturopplevelser'"] > .page_row_image.large-6[data-equalizer-watch=""]`
  - **HTML:** `<div class="page_row_image small-12 medium-12 large-6 columns" style="background-image: url("https://nasjonalparken.no/wp-content/uploads/2018/11/christer-rognerud-skjkerfjell-02-18-952x576.jpg"); height: 852px;" data-equalizer-watch="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Les mer 'Naturopplevelser'"] > .page_row_content.large-6[data-equalizer-watch=""] > .entry-title`
  - **HTML:** `<h2 class="entry-title">Naturopplevelser</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[title="Les mer 'Naturopplevelser'"] > .page_row_content.large-6[data-equalizer-watch=""] > .entry-content > p:nth-child(1)`
  - **HTML:** `<p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[title="Vinteropplevelser i Lierne"], #player`
  - **HTML:** `<div id="player" style="width: 100%; height: 100%;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[title="Vinteropplevelser i Lierne"], .ytmVideoInfoVideoTitleContainer`
  - **HTML:** `<div class="ytmVideoInfoVideoTitleContainer ytmVideoInfoLogoEnabled">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[title="Vinteropplevelser i Lierne"], .ytmVideoInfoOverlay`
  - **HTML:** `<div class="ytmVideoInfoOverlay">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[title="Vinteropplevelser i Lierne"], .quick-actions-wrapper`
  - **HTML:** `<div class="quick-actions-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-equalizer="zwk3g1-equalizer"]`
  - **HTML:** `<div class="page_row fullwidth-row" data-equalizer="zwk3g1-equalizer" data-equalize-on="large" data-resize="tvrc83-eq">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.facts > h3`
  - **HTML:** `<h3>Besøksinfo Lierne Nasjonalparksenter</h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#mcxpna-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="mcxpna-accordion" role="tab" id="mcxpna-accordion-label" aria-expanded="false" aria-selected="false">Blåfjella-Skjækerfjella/ Låarte-Skæhkere nasjonalpark</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#\30 5hrci-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="05hrci-accordion" role="tab" id="05hrci-accordion-label" aria-expanded="false" aria-selected="false">Lierne/Lirje nasjonalpark</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#\36 v7kpd-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="6v7kpd-accordion" role="tab" id="6v7kpd-accordion-label" aria-expanded="false" aria-selected="false">Innfallsport Lierne og Grong</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#nb2x6s-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="nb2x6s-accordion" role="tab" id="nb2x6s-accordion-label" aria-expanded="false" aria-selected="false">Innfallsporten i Snåsa</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#x5q4c0-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="x5q4c0-accordion" role="tab" id="x5q4c0-accordion-label" aria-expanded="false" aria-selected="false">Innfallsporten i Steinkjer</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#avvtf9-accordion-label`
  - **HTML:** `<a href="#" class="accordion-title" aria-controls="avvtf9-accordion" role="tab" id="avvtf9-accordion-label" aria-expanded="false" aria-selected="false">Innfallsporten i Verdal</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.information`
  - **HTML:** `<div class="information">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

