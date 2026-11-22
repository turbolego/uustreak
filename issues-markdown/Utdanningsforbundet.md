# WCAG Violations Report for Utdanningsforbundet

**Timestamp:** 2026-11-22T06:22:34.039Z
**URL:** [https://www.utdanningsforbundet.no/](https://www.utdanningsforbundet.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.HeaderPromotionBlock_headerPromotionLinks___zMeq > .PrimaryCTALink_center__UtgTK.PrimaryCTALink_primaryCTALink__1eh0T[target=""]`
  - **HTML:** `<a target="" class="PrimaryCTALink_primaryCTALink__1eh0T PrimaryCTALink_center__UtgTK" href="/om-medlemskapet/pris-betingelser/innmelding">Bli medlem</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #ffffff, background color: #008b48, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.BlockWrapper_span-3__H0f6B[data-display-option="full"]:nth-child(3) > .CampaignBlock_root__DhhXL > .CampaignBlock_contentWrapper__s0bF3 > .CampaignBlock_content___rOKV > .PrimaryCTALink_withIcon__ZuxFz.PrimaryCTALink_primaryCTALink__1eh0T[target=""]`
  - **HTML:** `<a target="" class="PrimaryCTALink_primaryCTALink__1eh0T PrimaryCTALink_withIcon__ZuxFz" href="/lonn-og-arbeidsvilkar/arbeidsmiljo/vold-og-trusler-pa-jobben">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #ffffff, background color: #008b48, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.BlockWrapper_span-3__H0f6B[data-display-option="full"]:nth-child(5) > .CampaignBlock_root__DhhXL > .CampaignBlock_contentWrapper__s0bF3 > .CampaignBlock_content___rOKV > .PrimaryCTALink_withIcon__ZuxFz.PrimaryCTALink_primaryCTALink__1eh0T[target=""]`
  - **HTML:** `<a target="" class="PrimaryCTALink_primaryCTALink__1eh0T PrimaryCTALink_withIcon__ZuxFz" href="/nyheter/2026/sporsmal-og-svar-om-pensjon-i-fus">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #ffffff, background color: #008b48, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.Footer_promotionLinks__3_6W7 > .PrimaryCTALink_primaryCTALink__1eh0T[target=""]`
  - **HTML:** `<a target="" class="PrimaryCTALink_primaryCTALink__1eh0T" href="/om-medlemskapet/pris-betingelser/innmelding">Bli medlem</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.38 (foreground color: #ffffff, background color: #008b48, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from embed.acast.com
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[frameborder="0"]`
  - **HTML:** `<iframe src="https://embed.acast.com/5ca73b1ee061b6670b629d28/6ac4aa3c924bc02b55934511?bgColor=f0f0f0" frameborder="0" width="100%" height="190px"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- **Target:** `a[aria-label="Lederjuss: Skolemiljøsaker"]`
  - **HTML:** `<a aria-label="Lederjuss: Skolemiljøsaker" class="ArrangementHitListingCard_root__oZHvm" href="/kurs-og-konferanser/kurskalender/kurs-2026/lederjuss-lederes-arbeidsmiljo2">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `article:nth-child(2) > .ArrangementHitListingCard_root__oZHvm`
  - **HTML:** `<a aria-label="Bli læreren som tegner - januar" class="ArrangementHitListingCard_root__oZHvm" href="/kurs-og-konferanser/kurskalender/kurs-2027/bli-lareren-som-tegnerm11">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `article:nth-child(3) > .ArrangementHitListingCard_root__oZHvm`
  - **HTML:** `<a aria-label="Inspirasjonsseminar før Barnehagedagen: Leseglede" class="ArrangementHitListingCard_root__oZHvm" href="/kurs-og-konferanser/kurskalender/kurs-2027/inspirasjonsseminar-for-barnehagedagen-leseglede">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `main`
  - **HTML:** `<main>`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.BlockWrapper_span-3__H0f6B[data-display-option="full"]:nth-child(1) > div > .LocalNavigationTopLayout_localNavigationTop__I8NPN[aria-label="Lokal navigasjon"]`
  - **HTML:** `<nav aria-label="Lokal navigasjon" class="LocalNavigationTopLayout_localNavigationTop__I8NPN">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `iframe[frameborder="0"], .ShareControl__ShareIcon-sc-1pwe6vd-0`
  - **HTML:** `<div role="img" class="ShareControl__ShareIcon-sc-1pwe6vd-0 jwZxjc">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `iframe[frameborder="0"], .SubscribeLink__PlusIcon-sc-q4x3v7-0`
  - **HTML:** `<div role="img" class="SubscribeLink__PlusIcon-sc-q4x3v7-0 kWhSaR">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

