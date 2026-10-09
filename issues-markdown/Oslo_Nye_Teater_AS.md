# WCAG Violations Report for Oslo Nye Teater AS

**Timestamp:** 2026-10-09T05:07:44.135Z
**URL:** [https://oslonye.no/](https://oslonye.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.hero-banner__cover > h4`
  - **HTML:** `<h4 class="text-uppercase location">Ekstraforestillinger i 2027!</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.medium-6.large-3.cell:nth-child(1) > h4`
  - **HTML:** `<h4 class="title">Oslo Nye Teater AS</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#s`
  - **HTML:** `<input type="text" placeholder="Søk" value="" name="s" id="s" onblur="if (this.value == '') { this.value = ''; }" onfocus="if (this.value == ''){this.value = '';}" title="Søk etter...">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 18

#### Affected Elements:

- **Target:** `.alignment-left.hovedscenen.bg-none > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/its-britney-bitch/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Plakat-ItsBritneyBitch_OsloNyeTeater2026-2-scaled.jpg');"> <…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/paklederen/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/2400x1350-Paklederen-1-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/jul-med-proysen-og-snekker-andersen-2/" class="les-mer-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.alignment-right > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/snofall/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Snofall-2026-Arff-oppsett_Solveig-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(5) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/drommen-om-en-hvit-jul/" class="les-mer-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/allsang-i-grensen-3/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/2025-Alllsang-host-2025-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.large-4.medium-6.cpt:nth-child(3) > .alignment-top.hovedscenen.bg-none > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/ungen/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Ungen-plakat-hjemmeside-1-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/mysteriet-myrna-vep/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Test-MyrnaVep_1-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.large-4.medium-6.cpt:nth-child(1) > .alignment-top.hovedscenen.bg-none > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/treholt/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Test-plakatfoto-Treholt-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(2) > .cafescenen.alignment-top.bg-none > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/oslo-kulturskoleet-unntaksprosjekt/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/2048x1152-Et-unntaksprosjekt.jpg');"> </div…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/borgerteatret/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Borgerteatret_2023_Fotspor-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/bestemors-fantastisk-elendige-historier-og-roalds-magi/" class="les-mer-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(2) > .cafescenen.alignment-top.bg-none > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/homofil-homofob/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/IMG_0114.jpeg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/av-maneskinn-gror-det-ingenting/" class="les-mer-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(11) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .alignment-top.hovedscenen.bg-none > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/unni-wilhelmsen/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Unni_Wilhelmsen-TM.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(12) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-left.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/jeg-tror-jeg-elsker-deg-nora/" class="les-mer-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(13) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/abjectified-project-prosessforestilling-ouverture/" class="les-mer-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.scroll-to-top`
  - **HTML:** `<a href="javascript:void(0);" class="scroll-to-top"> <img src="https://oslonye.no/wp-content/themes/oslonye-live/images/arrow_up_creme.svg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 235

#### Affected Elements:

- **Target:** `#background-video`
  - **HTML:** `<video style="object-fit: cover;" width="100%" playsinline="" height="100%" id="background-video" autoplay="" loop="" muted="" poster="https://oslonye.no/wp-content/uploads/small_Photo-Antero-Hein-01655-scaled.jpg">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.background-link`
  - **HTML:** `<a class="background-link" href="https://oslonye.no/forestillinger/treholt/">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.hero-banner > .grid-container`
  - **HTML:** `<div class="grid-container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.hovedscenen > .flex-container.align-middle > span`
  - **HTML:** `<span>hovedscenen</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.centralteatret > .flex-container.align-middle > span`
  - **HTML:** `<span>Centralteatret</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.theater-list > li:nth-child(3)`
  - **HTML:** `<li class=""> <a class="teaterkjellern" href="https://oslonye.no/forestillinger/?p=teaterkjellern"> <div class="flex-container align-middle"> <span>Teaterkjelleren</span> </div> </a> </li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt`
  - **HTML:** `<div class="cpt cell large-8 medium-6" data-gtm="{"id":"1493563","brand":"hovedscenen","name":"It\u2019s Britney, Bitch!"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> Strålende kritikker til TREHOLT - en musikal </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
  - **HTML:** `<div class="short-description"> Det er svært gledelig at Oslo Nyes urpremiere på musikalen om spiondømte Arne Treholt har blitt omfavnet av både publikum og anmeldere. </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1)`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"985479","brand":"centralteatret","name":"P\u00e5klederen"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell:nth-child(2) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> PUBLIKUMSARRANGEMENTER TREHOLT - EN MUSIKAL </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell:nth-child(2) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
  - **HTML:** `<div class="short-description"> Velger du å se musikalen TREHOLT den 1., 2., 6. eller 8. oktober, kan du få med deg FØRSNAKK eller ETTERSNAKK med interessante samtaler - helt gratis! </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3)`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"1406573","brand":"centralteatret","category":"Barn fra 3 \u00e5r","name":"Jul med Pr\u00f8ysen og snekker Andersen"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(5)`
  - **HTML:** `<section class="forestillinger-blocks-panel ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1)`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"1291183","brand":"centralteatret","name":"Allsang i Grensen"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-yellow.advertise.text-center > .text-orange.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> Info om billettkjøp </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-yellow.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
  - **HTML:** `<div class="short-description"> Les om billettkjøp, hørselshjelp, rullestolplasser, barnehagebilletter m.m. </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3)`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"1366124","brand":"hovedscenen","name":"Ungen"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"1059932","brand":"centralteatret","name":"Mysteriet Myrna Vep"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell:nth-child(2)`
  - **HTML:** `<div class="cell large-4 medium-6">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.large-4.medium-6.cell:nth-child(3) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> Norsk Skuespillersenter (NSS) holder kurs på Centralteatret </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.large-4.medium-6.cell:nth-child(3) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
  - **HTML:** `<div class="short-description"> Det avholdes kurs for profesjonelle skuespillere i LARP som metode den 7.-11. desember på Centralteatret. </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(8)`
  - **HTML:** `<section class="forestillinger-blocks-panel ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(9)`
  - **HTML:** `<section class="forestillinger-blocks-panel ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text-green > .title`
  - **HTML:** `<div class="title"> Nyheter </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cell`
  - **HTML:** `<div class="cell large-8 medium-6">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(11)`
  - **HTML:** `<section class="forestillinger-blocks-panel ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-green > .text-yellow.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> Kontakt </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(12) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt`
  - **HTML:** `<div class="cpt cell large-8 medium-6" data-gtm="{"id":"1526633","brand":"centralteatret","name":"Jeg tror jeg elsker deg, Nora"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(13) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"1456834","brand":"centralteatret","name":"ABJECTIFIED PRO\u00adJECT \u2013 OUVER\u00adTURE"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.rounded.border-orange.advertise > .text-yellow.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> PODKAST </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.current-month`
  - **HTML:** `<div class="text-white text-uppercase text-center current-month"> oktober </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.desktop`
  - **HTML:** `<div class="next desktop">november</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 08.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/treholt/">Treholt</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/2004887342?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 08.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/paklederen/">Påklederen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/946497017?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 08.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/utbrent-av-den-hellige-and/">Utbrent av den hellige ånd</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1396783146?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 09.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/treholt/">Treholt</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1862730087?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 09.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/paklederen/">Påklederen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/800423203?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 09.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/tipsy-ibsen-2/">Tipsy Ibsen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1874024281?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 10.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/treholt/">Treholt</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/263401932?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 10.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/paklederen/">Påklederen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1160625030?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 10.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/its-britney-bitch/">It’s Britney, Bitch!</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1302639418?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 10.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/cabaret-club/">Cabaret Club</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/3309208?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 12.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/oslo-kulturskoleet-unntaksprosjekt/">Oslo kultur­skole: Et unn­taks­pro­sjekt</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/898563604?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 14.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/bestemors-fantastisk-elendige-historier-og-roalds-magi/">Bestemors fantastisk elendige historier og Roalds magi</a> </…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1203221814?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 15.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/allsang-i-grensen-3/">Allsang i Grensen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1360757940?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 15.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/harr-hartberg-3/">Harr &amp; Hartberg</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1798102295?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 16.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/bestemors-fantastisk-elendige-historier-og-roalds-magi/">Bestemors fantastisk elendige historier og Roalds magi</a> </…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1033303233?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 16.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homofil-homofob/">Homofil Homofob</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/793439480?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 16.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homsens-flukt/">Homsens flukt</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1184466748?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 17.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/bestemors-fantastisk-elendige-historier-og-roalds-magi/">Bestemors fantastisk elendige historier og Roalds magi</a> </…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/558744475?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 17.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/its-britney-bitch/">It’s Britney, Bitch!</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1198988476?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 17.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homofil-homofob/">Homofil Homofob</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1137567155?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 17.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homsens-flukt/">Homsens flukt</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1141084798?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 21.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/its-britney-bitch/">It’s Britney, Bitch!</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1739487173?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(24) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 21.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(24) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(24) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/abjectified-project-prosessforestilling-ouverture/">ABJECTIFIED PRO­JECT – OUVER­TURE</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(24) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1002801685?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 21.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homofil-homofob/">Homofil Homofob</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1207517399?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(26) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 22.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(26) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(26) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/bestemors-fantastisk-elendige-historier-og-roalds-magi/">Bestemors fantastisk elendige historier og Roalds magi</a> </…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(26) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/976830344?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(27) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 22.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(27) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(27) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/its-britney-bitch/">It’s Britney, Bitch!</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(27) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/591517677?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(28) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 22.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(28) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(28) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(28) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homofil-homofob/">Homofil Homofob</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(28) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/524885596?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(29) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 23.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(29) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(29) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/bestemors-fantastisk-elendige-historier-og-roalds-magi/">Bestemors fantastisk elendige historier og Roalds magi</a> </…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(29) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1610713563?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 23.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/siren-stories/">Siren Stories Sex Worker Project</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/755248700?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(31) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 23.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(31) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(31) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(31) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homofil-homofob/">Homofil Homofob</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(31) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1097875846?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(32) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 24.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(32) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(32) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/bestemors-fantastisk-elendige-historier-og-roalds-magi/">Bestemors fantastisk elendige historier og Roalds magi</a> </…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(32) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/925076846?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(33) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 24.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(33) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(33) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/unni-wilhelmsen/">Unni Wilhelmsen – 30 år på eventyr</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(33) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/166593838?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 24.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/club-seduction-halloween-edition/">Club Seduction: Halloween Edition</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/223990450?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(35) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 24.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(35) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(35) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(35) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homofil-homofob/">Homofil Homofob</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(35) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1814722509?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(36) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 27.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(36) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(36) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/av-maneskinn-gror-det-ingenting/">Av måne­skinn gror det ingen­ting</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(36) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1679630743?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 27.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/sesongfinale-gruvar-og-dragar-live-one-night-only/">ROLLESPILL LIVE, MED GRUVAR OG DRAGAR ER TILBAKE! EN HALLOWEEN SPE…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/405502478?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(38) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 28.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(38) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(38) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/av-maneskinn-gror-det-ingenting/">Av måne­skinn gror det ingen­ting</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(38) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/849986340?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(39) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 29.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(39) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(39) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(39) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homofil-homofob/">Homofil Homofob</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(39) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1581985068?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(40) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 29.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(40) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(40) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(40) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/er-du-med-pa-leken/">Er du med på leken?</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(40) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1837901671?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(41) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 30.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(41) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(41) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/its-britney-bitch/">It’s Britney, Bitch!</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(41) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1752795568?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 30.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homofil-homofob/">Homofil Homofob</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/365757879?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(43) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 30.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(43) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(43) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(43) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/to-kjaerester-som-ikke-er-kjaerester/">To kjærester som ikke er kjærester</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(43) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/197549020?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(44) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 31.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(44) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(44) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/its-britney-bitch/">It’s Britney, Bitch!</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(44) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1951348639?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(45) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 31.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(45) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(45) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(45) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/homofil-homofob/">Homofil Homofob</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(45) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1276834255?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(46) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 31.10 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(46) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(46) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(46) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/purple-underground/">Purple Under­ground</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(46) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1126717862?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

