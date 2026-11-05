# WCAG Violations Report for Bladet Vesterålen AS

**Timestamp:** 2026-11-05T09:05:13.428Z
**URL:** [https://www.blv.no/](https://www.blv.no/)
**Total Violations:** 10

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.blv\.no\/takeover_0, #cbb`
  - **HTML:** `<div id="cbb" class="cbb" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#eaframe, #topTextRight`
  - **HTML:** `<a id="topTextRight" class="shoutlink" href="javascript:void(0)" onclick="doEAClick('/vis/eiendomtilsalgs', '', '', 'classified.property.carousel.see_all')">Eiendommer</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.88 (foreground color: #f76d53, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Kvalnes</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Ledig stilling: Maskinfører"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Sortland</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Evenes</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `a[data-k5a-section="commercial"][data-k5a-subsection="øvrig affiliate"][data-k5a-type="article"] > .brick-c-SoyIg.title_container.has-image > .dynamic.brick-c-eXdttc[itemprop="teaser_title"]`
  - **HTML:** `<h2 itemprop="teaser_title" class="dynamic brick-c-eXdttc"><span class="titleWrapper brick-c-dSUblF"> <span itemprop="headline"><span itemprop="titleText"> </span></span> </span></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.normal`
  - **HTML:** `<h2 itemprop="teaser_title" class="title normal brick-c-JbDTi"><span class="titleWrapper brick-c-dSUblF"> <span itemprop="headline"><span itemprop="titleText"> </span></span> </span></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.blv\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske`
  - **HTML:** `<iframe name="cmvtcjwl700111aadaxt..." id="cmvtcjwl700111aadaxt..." srcdoc="<!DOCTYPE html> <htm..." style="width: 100vw; height...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#eaframe`
  - **HTML:** `<iframe frameborder="no" id="eaframe" name="eaframe" width="980" height="350" scrolling="no" src="javascript:window[&quot;contents&quot;]" style="height: 350px; width: 100%;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.blv\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske, img[border="0"]`
  - **HTML:** `<img src="https://track.adform.net/adfserve/?bn=91008425;1x1inv=1;srctype=3;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_50};ord=8826724303968688" border="0" width="1" height="1">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- **Target:** `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.blv.no/vis/stillingledig/4583573?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Administrativ koordinator" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Ledig stilling: Maskinfører"]`
  - **HTML:** `<a href="https://www.blv.no/vis/stillingledig/4584388?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Maskinfører" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.blv.no/vis/stillingledig/4584171?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Vi søker to nye driftsteknikere" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `brick-carousel-v3[data-slides="8"] > .carousel[aria-label="Innholdskarusell"][role="region"]`
  - **HTML:** `<section data-static="" role="region" class="carousel" aria-label="Innholdskarusell" aria-describedby="carousel-title-4c4e722a-3714-4afa-9b33-02ef0d446d6c">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `brick-teaser-v23[data-id="uhknwmcs"] > .commercial[aria-label="Kommersielt innhold"][data-title-words="2"] > a[data-k5a-section="commercial"][data-k5a-subsection="øvrig affiliate"][data-k5a-type="article"]`
  - **HTML:** `<a href="https://annonse.blv...." data-k5a-section="commercial" data-k5a-subsection="øvrig affiliate" data-k5a-type="article" data-k5a-title=" " data-k5a-image="//g.acdn.no/api/lumi..." itemprop="url" style="" class="teaser_body brick-c-..…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- **Target:** `img[height="80"]`
  - **HTML:** `<img tabindex="-1" src="//assets.acdn.no/local/v3/publications/www.blv.no/gfx/small-positive.svg" alt="" loading="eager" height="80" width="auto">`
  - **Failure summary:** Fix all of the following: Element is not focusable.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.blv\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske, .layer-uidgbmj61x`
  - **HTML:** `<div class="layer layer-uidgbmj61x" data-layer-id="uidgbmj61x">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#google_ads_iframe_\/56257416\/www\.blv\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske, img[border="0"]`
  - **HTML:** `<img src="https://track.adform.net/adfserve/?bn=91008425;1x1inv=1;srctype=3;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_50};ord=8826724303968688" border="0" width="1" height="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.takeover-close`
  - **HTML:** `<div class="takeover-close">Lukk annonsen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `amedia-username`
  - **HTML:** `<amedia-username orderpage="//www.blv.no/tilbud" publication="www.blv.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nb-NO" theme="alfa">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.b…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

