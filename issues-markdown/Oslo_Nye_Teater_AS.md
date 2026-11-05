# WCAG Violations Report for Oslo Nye Teater AS

**Timestamp:** 2026-11-05T09:04:10.817Z
**URL:** [https://oslonye.no/](https://oslonye.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.hero-banner__cover > h4`
  - **HTML:** `<h4 class="text-uppercase location">Nypremiere 12. november</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.medium-6.large-3.cell:nth-child(1) > h4`
  - **HTML:** `<h4 class="title">Oslo Nye Teater AS</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 14

#### Affected Elements:

- **Target:** `.alignment-right.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/jul-med-proysen-og-snekker-andersen-2/" class="les-mer-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/drommen-om-en-hvit-jul/" class="les-mer-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/its-britney-bitch/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Plakat-ItsBritneyBitch_OsloNyeTeater2026-2-scaled.jpg');"> <…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/ungen/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/2426x1365-UNGEN-2027-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(5) > .grid-container > .grid-padding-x.grid-x > .large-8.cpt.medium-6 > .alignment-left.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/treholt/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Test-plakatfoto-Treholt-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(5) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/knutsen-ludvigsen/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/2400x1350-KnutsenLudvigsen-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-8.cpt.medium-6 > .alignment-left.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/mysteriet-myrna-vep/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/NY-plakat-MyrnaVep.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-8.cpt.medium-6 > .alignment-left.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/richard-obriens-the-rocky-horror-show/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/RockyHorror-2027-scaled.jpg');"> </div> …`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/allsang-i-grensen-3/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/2025-Alllsang-host-2025-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/snofall/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Snofall-2026-Arff-oppsett_Solveig-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.cafescenen.alignment-top.bg-none > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/quiet-when-im-coming-home/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Marika_Enstad.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(2) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/jeg-tror-jeg-elsker-deg-nora/" class="les-mer-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3) > .alignment-top.bg-none.block > .les-mer-link`
  - **HTML:** `<a href="https://oslonye.no/forestillinger/borgerteatret/" class="les-mer-link"> <div class="image-cover " style="background-image: url('https://oslonye.no/wp-content/uploads/Borgerteatret_2023_Fotspor-scaled.jpg');"> </div> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.scroll-to-top`
  - **HTML:** `<a href="javascript:void(0);" class="scroll-to-top"> <img src="https://oslonye.no/wp-content/themes/oslonye-live/images/arrow_up_creme.svg" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 212

#### Affected Elements:

- **Target:** `.background-link`
  - **HTML:** `<a class="background-link" href="https://oslonye.no/forestillinger/snofall/">`
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

- **Target:** `.forestillinger-blocks-panel:nth-child(3)`
  - **HTML:** `<section class="forestillinger-blocks-panel ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1)`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"1493563","brand":"hovedscenen","name":"It\u2019s Britney, Bitch!"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-yellow.advertise.text-center > .text-orange.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> Info om billettkjøp </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-yellow.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
  - **HTML:** `<div class="short-description"> Les om billettkjøp, hørselshjelp, rullestolplasser, barnehagebilletter m.m. </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3)`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"1366124","brand":"hovedscenen","name":"Ungen"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(5)`
  - **HTML:** `<section class="forestillinger-blocks-panel ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> Leie lokale i sentrum? </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
  - **HTML:** `<div class="short-description"> Ønsker du å leie lokale med sentral beliggenhet midt i Oslo sentrum til et event? Da kan vi hjelpe deg! Oslo Nye Teater har lokaler både i Rosenkrantz' gate 10 og i Akersgata 38. </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-8.cpt.medium-6`
  - **HTML:** `<div class="cpt cell large-8 medium-6" data-gtm="{"id":"1059932","brand":"centralteatret","name":"Mysteriet Myrna Vep"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(7)`
  - **HTML:** `<section class="forestillinger-blocks-panel ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1)`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"988675","brand":"hovedscenen","category":"Familieforestilling - anbefales fra 5 \u00e5r.","name":"Sn\u00f8fall"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-green > .text-yellow.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> Kontakt </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3)`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"1520543","brand":"centralteatret","name":"Enstad & L\u00f8vstad Soar\u00e9 med Quiet when I\u2019m coming home"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.rounded.border-orange.advertise > .text-yellow.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> PODKAST </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(2)`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"id":"1526633","brand":"centralteatret","name":"Jeg tror jeg elsker deg, Nora"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3)`
  - **HTML:** `<div class="cpt cell large-4 medium-6" data-gtm="{"brand":"centralteatret","name":"Borger­teatret"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cell`
  - **HTML:** `<div class="cell large-8 medium-6">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .title`
  - **HTML:** `<div class="title"> Norsk Skuespillersenter (NSS) holder kurs på Centralteatret </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
  - **HTML:** `<div class="short-description"> Det avholdes kurs for profesjonelle skuespillere i LARP som metode den 7.-11. desember på Centralteatret. </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text-green > .title`
  - **HTML:** `<div class="title"> Nyheter </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.forestillinger-blocks-panel:nth-child(11) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cell`
  - **HTML:** `<div class="cell large-8 medium-6">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.current-month`
  - **HTML:** `<div class="text-white text-uppercase text-center current-month"> november </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.desktop`
  - **HTML:** `<div class="next desktop">desember</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 05.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/utbrent-av-den-hellige-and/">Utbrent av den hellige ånd</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1694886023?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 06.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/mette-prinsesse-pa-evig-prove/">Mette - Prinsesse på evig prøve</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/965625335?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 07.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/quiet-when-im-coming-home/">Enstad &amp; Løvstad Soaré med Quiet when I’m coming home</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1069733581?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 07.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/kikis-burly-q/">Kiki’s Burly Q</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1869637571?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 10.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/bestemorungen/">BESTEMORUNGEN</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/2076134432?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 11.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/finans/">FINANS</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/525639705?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 12.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1110795723?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 12.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/finans/">FINANS</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/10019540?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 12.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/dracula/">Dracula</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1333170383?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 13.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/733881704?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 13.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/its-britney-bitch/">It’s Britney, Bitch!</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/300356553?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 13.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/sara-utfordrer-teatret/">Sara utfordrer teatret</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/735880537?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 13.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/dracula/">Dracula</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1265356977?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 14.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/jul-med-proysen-og-snekker-andersen-2/">Jul med Prøysen og snekker Andersen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1647642060?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 14.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/482576751?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 14.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/jul-med-proysen-og-snekker-andersen-2/">Jul med Prøysen og snekker Andersen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1222890289?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 14.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1176496650?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 14.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/fri-da-tarab-arabiske-sanger-med-frida-marida-og-ahmad/">Fri Da Ahmad — arabiske sanger med Frida Marida og Ahmad</a> …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/387500442?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 14.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/dracula/">Dracula</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1865448250?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 17.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/236753062?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 18.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/vi-var-vi-ble-teppefallsfest/">VI VAR / VI BLE - SISTE FORESTILLING OG TEPPEFALLS!!</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/810079149?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 19.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat cafescenen hide1 ">Caféscenen</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/askefast/">Askefast</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/15309164?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(24) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 20.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(24) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(24) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(24) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1663398688?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 20.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/mette-prinsesse-pa-evig-prove/">Mette - Prinsesse på evig prøve</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1032401122?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(26) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 21.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(26) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(26) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/jul-med-proysen-og-snekker-andersen-2/">Jul med Prøysen og snekker Andersen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(26) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/18125385?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(27) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 21.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(27) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(27) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(27) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1848275424?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(28) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 21.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(28) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(28) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/jul-med-proysen-og-snekker-andersen-2/">Jul med Prøysen og snekker Andersen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(28) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/615956123?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(29) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 21.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(29) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(29) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(29) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/137117998?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 21.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/mette-prinsesse-pa-evig-prove/">Mette - Prinsesse på evig prøve</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/2014606565?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(31) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 25.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(31) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(31) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(31) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/71482062?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(32) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 25.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(32) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(32) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(32) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/siren-stories/">Siren Stories Sex Worker Project</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(32) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1929085046?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(33) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 26.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(33) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(33) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(33) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1432763787?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 26.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/success-story/">Success Story</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1253974074?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(35) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 27.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(35) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(35) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(35) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/456465001?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(36) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 27.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(36) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(36) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/jul-med-proysen-og-snekker-andersen-2/">Jul med Prøysen og snekker Andersen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(36) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/679154320?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 27.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/tipsy-ibsen-2/">Tipsy Ibsen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1432297503?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(38) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 28.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(38) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(38) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/jul-med-proysen-og-snekker-andersen-2/">Jul med Prøysen og snekker Andersen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(38) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/617558089?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(39) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 28.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(39) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(39) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(39) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/80033710?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(40) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 28.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(40) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(40) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/jul-med-proysen-og-snekker-andersen-2/">Jul med Prøysen og snekker Andersen</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(40) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1048327550?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(41) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 28.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(41) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
  - **HTML:** `<div class="cat hovedscenen hide1 ">hovedscenen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(41) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/snofall/">Snøfall</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(41) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1126773615?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42) > .large-2.cell`
  - **HTML:** `<div class="cell large-2"> <div class="date text-white"> 28.11 </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
  - **HTML:** `<div class="cat centralteatret hide1 ">Centralteatret</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42) > .large-7.cell > .content-holder > .cat-cover:nth-child(2)`
  - **HTML:** `<div class="cat-cover"> <div class="cat teaterkjellern hide1 ">Teaterkjelleren</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42) > .large-7.cell > .content-holder > .text-uppercase.title.text-white`
  - **HTML:** `<div class="title text-white text-uppercase"> <a class="text-white les-mer-link" href="https://oslonye.no/forestillinger/purple-underground/">Purple Under­ground</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42) > .text-sm-right.large-3.cell`
  - **HTML:** `<div class="cell large-3 text-sm-right"> <a href="https://www.ticketmaster.no/event/1219349918?language=no-no&amp;track=DiscoveryAPI&amp;camefrom=OsloNye&amp;subchannel_id=1" class="button btn-orange ticketmaster-link"> Billetter </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

