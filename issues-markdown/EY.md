# WCAG Violations Report for EY

**Timestamp:** 2026-10-10T08:20:17.354Z
**URL:** [https://www.ey.com/no_no](https://www.ey.com/no_no)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `a[data-index="4"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
  - **HTML:** `<p class="cmp-slide__title" data-analytics-action-value="">Tax</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.07 (foreground color: #ffffff, background color: #f6f6fa, font size: 24.0pt (32px), font weight: normal). Expected contrast ratio of 3:1

- **Target:** `a[data-index="5"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
  - **HTML:** `<p class="cmp-slide__title" data-analytics-action-value="">Forretningsjus</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.07 (foreground color: #ffffff, background color: #f6f6fa, font size: 24.0pt (32px), font weight: normal). Expected contrast ratio of 3:1

- **Target:** `a[data-index="6"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
  - **HTML:** `<p class="cmp-slide__title" data-analytics-action-value="">Climate Change and Sustainability Services</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.07 (foreground color: #ffffff, background color: #f6f6fa, font size: 24.0pt (32px), font weight: normal). Expected contrast ratio of 3:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 91

#### Affected Elements:

- **Target:** `.skip-content-wrapper`
  - **HTML:** `<div class="skip-content-wrapper"><a class="skipToContent-button" href="#" title="Skip to content">Skip to content</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-logo__link > .sr-only`
  - **HTML:** `<span class="sr-only">EY Logo</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.myey-login-url`
  - **HTML:** `<a class="myey-login-url" title="My EY" href="https://login.ey.com/myey/login" data-analytics-link-click="" role="link" aria-label="My EY" tabindex="0" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#image-render-bd6c3e038a > .cmp-image__image[height="2560"][loading="lazy"]`
  - **HTML:** `<img src="/adobe/dynamicmedia/..." srcset="/adobe/dynamicmedia/..." loading="lazy" class="cmp-image__image" itemprop="contentUrl" width="3840" height="2560" alt="Illustrasjon av jord..." title="Four futures of AI –...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.swiper-slide-visible > .up-hero-carousel__content-wrapper[data-up-hook-hero-carousel="contentWrapper"]`
  - **HTML:** `<div class="up-hero-carousel__content-wrapper" data-up-hook-hero-carousel="contentWrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.up-hero-carousel__pagination`
  - **HTML:** `<div class="up-hero-carousel__pagination" data-up-hook-hero-carousel="swiperPagination">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.up-content-cards__title`
  - **HTML:** `<p class="up-content-cards__title" role="heading" aria-level="2">Aktuelt</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.up-content-cards__list-item.up-content-cards--highlight[data-up-hook-content-cards="[listItem]"]:nth-child(1) > .up-content-cards__list-item-details`
  - **HTML:** `<div class="up-content-cards__list-item-details">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.up-content-cards__list-item.up-content-cards--highlight[data-up-hook-content-cards="[listItem]"]:nth-child(2) > .up-content-cards__list-item-details`
  - **HTML:** `<div class="up-content-cards__list-item-details">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.up-content-cards__list-item.up-content-cards--highlight[data-up-hook-content-cards="[listItem]"]:nth-child(3) > .up-content-cards__list-item-details`
  - **HTML:** `<div class="up-content-cards__list-item-details">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-1f7be6744d5a > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
  - **HTML:** `<p class="up-promotional-banner__content-heading" role="heading" aria-level="2" data-analytics-label=""> CEO Outlook Survey </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-1f7be6744d5a > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
  - **HTML:** `<div class="up-promotional-banner__content-description" data-analytics-text-click="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-d2a7d3b468ea`
  - **HTML:** `<a id="button-d2a7d3b468ea" class="up-button cmp-button..." href="https://www.ey.com/e..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-analytics-label="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-1f7be6744d5a > .up-promotional-banner__media`
  - **HTML:** `<div class="up-promotional-banner__media">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-375939547c80 > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
  - **HTML:** `<p class="up-promotional-banner__content-heading" role="heading" aria-level="2" data-analytics-label=""> Selvsikkerhet kommer i mange versjoner. Oppdag din. </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-375939547c80 > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
  - **HTML:** `<div class="up-promotional-banner__content-description" data-analytics-text-click="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-ab618830f8b6`
  - **HTML:** `<a id="button-ab618830f8b6" class="up-button cmp-button..." href="https://www.ey.com/e..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-analytics-label="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#image-render-58f30bbef7 > .cmp-image__image[height="2560"][loading="lazy"]`
  - **HTML:** `<img src="/adobe/dynamicmedia/..." srcset="/adobe/dynamicmedia/..." loading="lazy" class="cmp-image__image" itemprop="contentUrl" width="3840" height="2560" alt="Person in business a..." title="Professional standin...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-39d407479b23 > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
  - **HTML:** `<p class="up-promotional-banner__content-heading" role="heading" aria-level="2" data-analytics-label=""> EY Entrepreneur Of The Year </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-39d407479b23 > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
  - **HTML:** `<div class="up-promotional-banner__content-description" data-analytics-text-click=""> <p>Verdens største vekstskaperprogram med kåringer i over 60 land. Vi er stolte av å sette entreprenørskap og innovasjon på agendaen, skape møteplasser o…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-aac543142676`
  - **HTML:** `<a id="button-aac543142676" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-analytics-label="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#image-render-d226705429 > .cmp-image__image[height="2560"][loading="lazy"]`
  - **HTML:** `<img src="/adobe/dynamicmedia/..." srcset="/adobe/dynamicmedia/..." loading="lazy" class="cmp-image__image" itemprop="contentUrl" width="3840" height="2560" alt="Glassblåser som dann..." title="EY Entrepreneur Of T...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-283aef72eff8 > .up-promotional-banner__content > .up-promotional-banner__content-heading[aria-level="2"][role="heading"]`
  - **HTML:** `<p class="up-promotional-banner__content-heading" role="heading" aria-level="2" data-analytics-label=""> Vil du forme fremtiden, eller vil fremtiden forme deg? </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-283aef72eff8 > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
  - **HTML:** `<div class="up-promotional-banner__content-description" data-analytics-text-click=""> <p>Gjennom vår nye strategi, "All in", hjelper vi organisasjoner med å forme fremtiden med tillit.</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-1296c62e5384`
  - **HTML:** `<a target="_blank" id="button-1296c62e5384" class="up-button cmp-button..." href="https://www.ey.com/e..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-a…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-283aef72eff8 > .up-promotional-banner__media`
  - **HTML:** `<div class="up-promotional-banner__media">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `p[aria-level="1"]`
  - **HTML:** `<p class="up-promotional-banner__content-heading" role="heading" aria-level="1" data-analytics-label=""> Aktuelle webinarer </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#promotional-6c2d968ac69e > .up-promotional-banner__content > .up-promotional-banner__content-description[data-analytics-text-click=""]`
  - **HTML:** `<div class="up-promotional-banner__content-description" data-analytics-text-click=""> <p>&nbsp;</p> <p>Delta på våre webinarer og bli oppdateret på aktuelle emner.</p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-a13f706f271e`
  - **HTML:** `<a target="_blank" id="button-a13f706f271e" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-a…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-subscribe__text`
  - **HTML:** `<div class="cmp-subscribe__text"> <p class="cmp-subscribe__title" data-analytics-label="">Siste nytt fra EY</p> <p class="cmp-subscribe__subtitle">Hold deg oppdatert med våre utvalgte nyhetsbrev. </p> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-bc60d627c8a2`
  - **HTML:** `<a target="_blank" id="button-bc60d627c8a2" class="up-button cmp-button..." href="https://info.ey.com/..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="https://info.ey.com/..." data-modal-variant="large" data-a…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-contentGrid__title`
  - **HTML:** `<h2 class="cmp-contentGrid__title" data-analytics-label=""> Utvalgte pressemeldinger </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content > .cmp-teaser__title`
  - **HTML:** `<h3 class="cmp-teaser__title">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content > .cmp-teaser__description > p`
  - **HTML:** `<p>EYs vekstbarometer viser at antallet norske vekstselskaper har falt 26 % siden 2022 og nærmer seg nivået før pandemien.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .mrxs.date-txt`
  - **HTML:** `<span class="mrxs date-txt"> 17 sep. 2026 </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser.cmp-separator:nth-child(1) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .date__text[href$="andreas-jacobsen"]`
  - **HTML:** `<a class="date__text" href="/no_no/people/andreas-jacobsen"> <strong>Andreas R. K. Jacobsen</strong> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser.cmp-separator:nth-child(2) > div > .cmp-teaser__content > .cmp-teaser__title`
  - **HTML:** `<h3 class="cmp-teaser__title">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser.cmp-separator:nth-child(2) > div > .cmp-teaser__content > .cmp-teaser__description > p`
  - **HTML:** `<p>EY advarer om svakhetstegn i norsk økonomi: Lav vekst, investeringsfall og høy inflasjon. Norge skiller seg negativt ut sammenlignet med nabolandene.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser.cmp-separator:nth-child(2) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .mrxs.date-txt`
  - **HTML:** `<span class="mrxs date-txt"> 11 sep. 2026 </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser.cmp-separator:nth-child(2) > div > .cmp-teaser__content > .cmp-teaser__description > .cmp-teaser__tagline > .date__text[href$="andreas-jacobsen"]`
  - **HTML:** `<a class="date__text" href="/no_no/people/andreas-jacobsen"> <strong>Andreas R. K. Jacobsen</strong> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser__content:nth-child(1) > .small-cell-description > .cmp-teaser__title`
  - **HTML:** `<h3 class="cmp-teaser__title">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser__content:nth-child(1) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .mrxs.date-txt`
  - **HTML:** `<span class="mrxs date-txt"> 31 aug. 2026 </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser__content:nth-child(1) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .date__text[href$="andreas-jacobsen"]`
  - **HTML:** `<a class="date__text" href="/no_no/people/andreas-jacobsen"> <strong>Andreas R. K. Jacobsen</strong> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser__content:nth-child(2) > .small-cell-description > .cmp-teaser__title`
  - **HTML:** `<h3 class="cmp-teaser__title">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser__content:nth-child(2) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .mrxs.date-txt`
  - **HTML:** `<span class="mrxs date-txt"> 10 juni 2026 </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser__content:nth-child(2) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .date__text[href$="andreas-jacobsen"]`
  - **HTML:** `<a class="date__text" href="/no_no/people/andreas-jacobsen"> <strong>Andreas R. K. Jacobsen</strong> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser__content:nth-child(3) > .small-cell-description > .cmp-teaser__title`
  - **HTML:** `<h3 class="cmp-teaser__title">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser__content:nth-child(3) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .mrxs.date-txt`
  - **HTML:** `<span class="mrxs date-txt"> 09 juni 2026 </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-teaser__content:nth-child(3) > .small-cell-description > .cmp-teaser__description > .cmp-teaser__tagline > .date__text[href$="andreas-jacobsen"]`
  - **HTML:** `<a class="date__text" href="/no_no/people/andreas-jacobsen"> <strong>Andreas R. K. Jacobsen</strong> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-7addb05aebee`
  - **HTML:** `<a id="button-7addb05aebee" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-analytics-label="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-slider__title`
  - **HTML:** `<p class="cmp-slider__title" data-analytics-label=""> På agendaen <span>(7)</span> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-slider__skip`
  - **HTML:** `<a class="cmp-slider__skip text-regular-sm" href="#" aria-label="Skip På agendaen">Skip</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="0"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
  - **HTML:** `<p class="cmp-slide__title" data-analytics-action-value="">Bærekraft</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="0"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
  - **HTML:** `<p class="cmp-slide__description text-light-md"> Featured: Hvordan planlegger norsk næringsliv å omstille seg i praksis? </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="0"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
  - **HTML:** `<span> Finn ut mer </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.active > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
  - **HTML:** `<p class="cmp-slide__title" data-analytics-action-value="">Teknologi</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.active > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
  - **HTML:** `<p class="cmp-slide__description text-light-md"> Featured: Slik kan penetrasjonstesting brukes til noe mer enn bare en test </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.active > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
  - **HTML:** `<span> Finn ut mer </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-slider__slide[data-index="2"][href$="assurance"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
  - **HTML:** `<p class="cmp-slide__title" data-analytics-action-value="">Revisjon&nbsp;</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-slider__slide[data-index="2"][href$="assurance"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
  - **HTML:** `<p class="cmp-slide__description text-light-md"> Featured: Delårsrapportering </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-slider__slide[data-index="2"][href$="assurance"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
  - **HTML:** `<span> Finn ut mer </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-slider__slide[data-index="3"][href$="consulting"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
  - **HTML:** `<p class="cmp-slide__title" data-analytics-action-value="">Consulting</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-slider__slide[data-index="3"][href$="consulting"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
  - **HTML:** `<p class="cmp-slide__description text-light-md"> Featured: Sett en stø kurs med strategisk porteføljestyring </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-slider__slide[data-index="3"][href$="consulting"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
  - **HTML:** `<span> Finn ut mer </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="4"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
  - **HTML:** `<p class="cmp-slide__title" data-analytics-action-value="">Tax</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="4"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
  - **HTML:** `<p class="cmp-slide__description text-light-md"> Featured: Statsbudsjett 2027 </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="4"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
  - **HTML:** `<span> Finn ut mer </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="5"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
  - **HTML:** `<p class="cmp-slide__title" data-analytics-action-value="">Forretningsjus</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="5"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
  - **HTML:** `<p class="cmp-slide__description text-light-md"> Featured: Regler for kjønnssammensetning i styret </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="5"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
  - **HTML:** `<span> Finn ut mer </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="6"] > .cmp-slide__content.ma3xl > .cmp-slide__title[data-analytics-action-value=""]`
  - **HTML:** `<p class="cmp-slide__title" data-analytics-action-value="">Climate Change and Sustainability Services</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="6"] > .cmp-slide__content.ma3xl > .cmp-slide__description.text-light-md`
  - **HTML:** `<p class="cmp-slide__description text-light-md"> Featured: CBAM - Hva betyr det for norske virksomheter </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-index="6"] > .cmp-slide__content.ma3xl > .cmp-slide__subTitle > span`
  - **HTML:** `<span> Finn ut mer </span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-index-search-banner__title`
  - **HTML:** `<p class="cmp-index-search-banner__title mbmd" data-analytics-label="">Finn ut mer</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-88115edb1365 > .cmp-button__text[data-analytics-action-value=""]`
  - **HTML:** `<span class="cmp-button__text" data-analytics-action-value="">EY søk</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cmp-index-search-banner__topicTitle`
  - **HTML:** `<p class="cmp-index-search-banner__topicTitle mbxl text-light-md" data-analytics-label=""> Populære temaer </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-bc526dc0dd5a`
  - **HTML:** `<a id="button-bc526dc0dd5a" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-analytics-label="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-3941d7f2ff12`
  - **HTML:** `<a id="button-3941d7f2ff12" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-analytics-label="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-38ef4d6ce029`
  - **HTML:** `<a target="_blank" id="button-38ef4d6ce029" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-a…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-68a7641d8957`
  - **HTML:** `<a id="button-68a7641d8957" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-analytics-label="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-346c200e67cd`
  - **HTML:** `<a target="_blank" id="button-346c200e67cd" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-a…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-39172ed077c7`
  - **HTML:** `<a target="_blank" id="button-39172ed077c7" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-a…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-fef302e139f7`
  - **HTML:** `<a id="button-fef302e139f7" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-analytics-label="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-8e1d3e5b1a96`
  - **HTML:** `<a target="_blank" id="button-8e1d3e5b1a96" class="up-button cmp-button..." href="https://www.ey.com/n..." data-analytics-categ...="Button" data-button-type="cta" data-snippet-url="/content/ey-unified-..." data-modal-variant="large" data-a…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#footer-ey-content > .container.responsivegrid:nth-child(2)`
  - **HTML:** `<div class="container responsivegrid">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#rich-text-7c0527a0e133 > .up-rich-text__container[data-up-hook-rich-text="richTextContainer"]`
  - **HTML:** `<div class="up-rich-text__container" data-up-hook-rich-text="richTextContainer" style="height: auto;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-service-title="Facebook"] > .up-social-media-links__cta-text`
  - **HTML:** `<span class="up-social-media-links__cta-text">Åpne Facebook-profil</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-service-title="LinkedIn"] > .up-social-media-links__cta-text`
  - **HTML:** `<span class="up-social-media-links__cta-text">Åpne LinkedIn-profil</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-service-title="Instagram"] > .up-social-media-links__cta-text`
  - **HTML:** `<span class="up-social-media-links__cta-text">Åpne Instagram-profil</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-service-title="Youtube"] > .up-social-media-links__cta-text`
  - **HTML:** `<span class="up-social-media-links__cta-text">Åpne Youtube-profil</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#footer-ey-content > .container.responsivegrid:nth-child(5)`
  - **HTML:** `<div class="container responsivegrid">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

