# WCAG Violations Report for Norges KFUK-KFUM

**Timestamp:** 2026-10-09T05:07:37.518Z
**URL:** [https://kfuk-kfum.no/](https://kfuk-kfum.no/)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#main-login`
  - **HTML:** `<a class="text-center d-block mr-xl-5" style="" href="https://connect365.kfuk-kfum.no" id="main-login" role="button" aria-label="Pålogging for ansatte"> <img src="/file/db/graphic/padlock_hvit.svg" height="32" alt="ikon"> Min Connect </a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.62 (foreground color: #ffffff, background color: #81dbcd, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-2 > button[type="submit"]`
  - **HTML:** `<button type="submit" class="button"> Søk<span>►</span> </button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.4 (foreground color: #3c3751, background color: #75a6d6, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.text-secondary`
  - **HTML:** `<a href="https://kfuk-kfum.no/personvern#Informasjonskapsler" class="text-secondary">Les mer</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.96 (foreground color: #6c757d, background color: #2b2b3b, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 21

#### Affected Elements:

- **Target:** `.leftNav > .navLink[href$="aktiviteter"] > img[height="32"]`
  - **HTML:** `<img src="/file/db/graphic/icon-calender.svg" height="32">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.navLink[href$="bli-med"] > img[height="32"]`
  - **HTML:** `<img src="/file/db/graphic/icon-become-member.svg" height="32">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.navLink[href$="om-oss"] > img[height="32"]`
  - **HTML:** `<img src="/file/db/graphic/icon-kfum-triangle.svg" height="32">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.rightNav > .navLink[href$="stott-oss"] > img[height="32"]`
  - **HTML:** `<img src="/file/db/graphic/icon-donate.svg" height="32">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="ressurser"] > img[height="32"]`
  - **HTML:** `<img src="/file/db/graphic/icon-open-box-light-blue.svg" height="32">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.navLink[href$="kontakt-oss"] > img[height="32"]`
  - **HTML:** `<img src="/file/db/graphic/icon-phone.svg" height="32">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.newsbit-big > img`
  - **HTML:** `<img src="data:image/gif;base6...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.col-md-6.col-12:nth-child(3) > .newsbit.newsbit-frontpage > img`
  - **HTML:** `<img src="data:image/gif;base6...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.col-md-6.col-12:nth-child(4) > .newsbit.newsbit-frontpage > img`
  - **HTML:** `<img src="data:image/gif;base6...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="folkehogskole"] > img`
  - **HTML:** `<img src="/static/images/startside/folkehøgskole.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="forandringshuset.no/"] > img`
  - **HTML:** `<img src="/static/images/startside/forandringshuset.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="konfirmant"] > img`
  - **HTML:** `<img src="/static/images/startside/konfirmant.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="Lederutvikling"] > img`
  - **HTML:** `<img src="/static/images/startside/lederutvikling.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="leirsteder"] > img`
  - **HTML:** `<img src="/static/images/startside/kurslokalerleir.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="apen-barnehage"] > img`
  - **HTML:** `<img src="/static/images/startside/åpenbarnehage.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="tensing.no/"] > img`
  - **HTML:** `<img src="/static/images/startside/tensing.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="idrett"] > img`
  - **HTML:** `<img src="/static/images/startside/idrett.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="kulturforalle.no/"] > img`
  - **HTML:** `<img src="/static/images/startside/kulturskole.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="musikk-og-kultur"] > img`
  - **HTML:** `<img src="/static/images/startside/musikkogkultur.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="frivillig"] > img`
  - **HTML:** `<img src="/static/images/startside/frivillig.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="politikk-og-samfunn"] > img`
  - **HTML:** `<img src="/static/images/startside/politikkogsamf.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-no">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `section:nth-child(4)`
  - **HTML:** `<section>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `input[placeholder="søk i kfuk-kfum.no"]`
  - **HTML:** `<input name="search" type="text" placeholder="søk i kfuk-kfum.no">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#tilbud`
  - **HTML:** `<section id="tilbud" class="background-white">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#front-page-partners`
  - **HTML:** `<section id="front-page-partners">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#membership`
  - **HTML:** `<section id="membership" style="background-image: url(/static/images/startside/stottoss.jpg)">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `img[aria-describedby="globalSearchLabel"]`
  - **HTML:** `<img src="/file/db/graphic/icon-global-donate.svg" alt="Ikon" aria-describedby="globalSearchLabel">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.btn-cookies-info > p`
  - **HTML:** `<p style="color:#ccc">Vi bruker informasjonskapsler for å samle brukerstatistikk fra nettsiden vår. Statistikken benytter vi for å gjøre brukeropplevelsen på nettsiden bedre. <a href="https://kfuk-kfum.no/personvern#Informasjonskapsler" cl…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

