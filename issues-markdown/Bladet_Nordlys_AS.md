# WCAG Violations Report for Bladet Nordlys AS

**Timestamp:** 2026-10-10T08:11:59.042Z
**URL:** [https://www.nordlys.no/](https://www.nordlys.no/)
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

- **Target:** `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Tromsø</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Tromsø</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, iframe[scrolling="no"]`
  - **HTML:** `<iframe scrolling="no" src="about:blank" style="height: 1px; width: ...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, body > iframe`
  - **HTML:** `<iframe style="position: absolute; pointer-events: none; left: 0px; top: 0px; opacity: 0; height: 0px; width: 0px;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#eaframe`
  - **HTML:** `<iframe frameborder="no" id="eaframe" name="eaframe" width="980" height="350" scrolling="no" src="javascript:window[&quot;contents&quot;]" style="height: 350px;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `brick-carousel-v3[data-slides="7"] > .carousel[role="region"][aria-label="Innholdskarusell"]`
  - **HTML:** `<section data-static="" role="region" class="carousel" aria-label="Innholdskarusell" aria-describedby="carousel-title-40fd5fe5-e401-4851-aeed-12c7f72a30a1">`
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
  - **HTML:** `<img tabindex="-1" src="//assets.acdn.no/local/v3/publications/www.nordlys.no/gfx/small.svg" alt="" loading="eager" height="80" width="auto">`
  - **Failure summary:** Fix all of the following: Element is not focusable.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `amedia-username`
  - **HTML:** `<amedia-username orderpage="//www.nordlys.no/tilbud" publication="www.nordlys.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nb-NO" theme="alfa">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.n…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

