# WCAG Violations Report for Dalane Tidende AS

**Timestamp:** 2026-10-08T10:20:59.559Z
**URL:** [https://www.dalane-tidende.no/](https://www.dalane-tidende.no/)
**Total Violations:** 7

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/takeover_0, #cbb`
  - **HTML:** `<div id="cbb" class="cbb" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/takeover_0, #cmuh2fw86003b1ne3r6el3j65, .play`
  - **HTML:** `<button class="play"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path> </svg></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/takeover_0, #cmuh2fw86003b1ne3r6el3j65, .audio`
  - **HTML:** `<button class="audio">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/takeover_0, #cmuh2fw86003b1ne3r6el3j65`
  - **HTML:** `<iframe name="cmuh2fw86003b1ne3r6e..." id="cmuh2fw86003b1ne3r6e..." srcdoc="<!DOCTYPE html> <htm..." style="width: 100vw; height...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#eaframe`
  - **HTML:** `<iframe frameborder="no" id="eaframe" name="eaframe" width="980" height="350" scrolling="no" src="javascript:window[&quot;contents&quot;]" style="height: 350px;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/takeover_0, #cmuh2fw86003b1ne3r6el3j65, img`
  - **HTML:** `<img src="https://track.adform.net/adfserve/?bn=90406286;1x1inv=1;srctype=3;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_50};ord=2478238715253869" border="0" width="1" height="1">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `brick-carousel-v3[data-slides="6"] > .carousel[role="region"][aria-label="Innholdskarusell"]`
  - **HTML:** `<section data-static="" role="region" class="carousel" aria-label="Innholdskarusell" aria-describedby="carousel-title-983f1430-158f-4046-93e3-7ad65a330f9a">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- **Target:** `img[height="80"]`
  - **HTML:** `<img tabindex="-1" src="//assets.acdn.no/local/v3/publications/www.dalane-tidende.no/gfx/small-positive.svg" alt="" loading="eager" height="80" width="auto">`
  - **Failure summary:** Fix all of the following: Element is not focusable.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/takeover_0, #cmuh2fw86003b1ne3r6el3j65, video`
  - **HTML:** `<video playsinline="" disableremoteplayback="" muted="" data-inscreen="inscreen" src="blob:https://db29a4cccf6309e5625377f742036109.safeframe.googlesyndication.com/a3e627dd-bf75-4a32-a10c-ae8076c95719"></video>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#google_ads_iframe_\/56257416\/www\.dalane-tidende\.no\/takeover_0, #cmuh2fw86003b1ne3r6el3j65, img`
  - **HTML:** `<img src="https://track.adform.net/adfserve/?bn=90406286;1x1inv=1;srctype=3;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_50};ord=2478238715253869" border="0" width="1" height="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.takeover-close`
  - **HTML:** `<div class="takeover-close">Lukk annonsen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `amedia-username`
  - **HTML:** `<amedia-username orderpage="//www.dalane-tidende.no/tilbud" publication="www.dalane-tidende.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nb-NO" theme="alfa">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.d…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

