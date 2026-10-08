# WCAG Violations Report for Bergen Kino AS

**Timestamp:** 2026-10-08T10:13:48.280Z
**URL:** [https://www.bergenkino.no/](https://www.bergenkino.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 142

#### Affected Elements:

- **Target:** `.text-dark-primary`
  - **HTML:** `<a href="/vilkar" target="_blank" class="text-dark-primary label-link"> Les mer </a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.26 (foreground color: #6792bd, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj31f82a7fae2c4309b6780e47fe228ba0_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.4 fra 7 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2970487"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:12</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2959038"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:57</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964202"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:42</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964548"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:42</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964549"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:12</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2988016"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:57</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP8 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 12:00 <span class="program__showtime-endtime">-<wbr>14:12</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:12</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .px-1.program__showtime-notes`
  - **HTML:** `<span class="program__showtime-notes px-1 " style="color:#014a91; font-weight:bold; font-style:normal; font-size:12px; text-transform:capitalize; ">seniorkino</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `#obj5773cf41d1834dcd8034cd4af29c12af_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.2 fra 28 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj26497556d1244f38a383db873af9282f > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP5 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj26497556d1244f38a383db873af9282f > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 11:20 <span class="program__showtime-endtime">-<wbr>13:30</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj26497556d1244f38a383db873af9282f > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>13:30</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj26497556d1244f38a383db873af9282f > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj26497556d1244f38a383db873af9282f > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964594"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:25</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964563"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:40</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964691"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:10</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objf6c33b85829847b89f808ba6634c3c5d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.1 fra 31 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964544"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:41</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964545"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:26</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964542"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:56</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964543"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:41</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objdae6212ecee646a78a2987372c760971_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 3.6 fra 7 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964579"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:42</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964580"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:12</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964581"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:27</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964582"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:57</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6bf73907cb6e48aa9e51c5bed51df862_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 6 fra 1 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964704"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>15:06</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964602"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:31</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964683"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:06</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964601"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:36</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj14ad65f10cd94ad083840b299de22922_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.6 fra 131 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964568"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>16:40</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964569"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:55</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964570"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>23:10</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj88ac441bd51a446b90a0ac10aa8b69b6_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.6 fra 24 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964571"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:14</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964573"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:19</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964572"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>23:24</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3024b0c34cb549a687313e77f803f84b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 40 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964546"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:49</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964562"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:19</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964583"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:34</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj114c7b68cf3e49a7acfb27d8382ebab7 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP12 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj114c7b68cf3e49a7acfb27d8382ebab7 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 11:00 <span class="program__showtime-endtime">-<wbr>12:36</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj114c7b68cf3e49a7acfb27d8382ebab7 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:36</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj114c7b68cf3e49a7acfb27d8382ebab7 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj114c7b68cf3e49a7acfb27d8382ebab7 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> utekstet</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2998218"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:21</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964728"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>16:51</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964620"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:06</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9c17fc725de84077bb57f9ab2aa5ac66_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.5 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964556"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:09</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964555"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:09</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964557"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>23:24</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7842a6c459d0497a8b1a07fb31422628_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.1 fra 13 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964592"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:09</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964591"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>23:09</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj8d9be3d3c4cb4717804c72e641bdc63c_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.5 fra 4 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964610"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:46</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj845af24579c4433cb18f03aeb0e87361_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.9 fra 7 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964608"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:11</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964607"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:41</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objaf878fcb37a74947802f9f18a99c6096_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.3 fra 172 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj71465580423943bbb951e9d72362a5d3 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP9 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj71465580423943bbb951e9d72362a5d3 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 12:00 <span class="program__showtime-endtime">-<wbr>15:08</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj71465580423943bbb951e9d72362a5d3 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>15:08</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj71465580423943bbb951e9d72362a5d3 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj71465580423943bbb951e9d72362a5d3 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964541"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:28</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964540"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>23:48</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj893afe54d9b241df9b015475f3561581_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.5 fra 11 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964578"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:10</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964577"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:45</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj2b0fc3c65ede4b73a4eae08266e47cb5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964593"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:08</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5ebc1b5a91864dcaa6779423287c4d69_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.7 fra 3 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objd98cf72084624762995e3929d9c58a4c > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP4 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objd98cf72084624762995e3929d9c58a4c > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 10:30 <span class="program__showtime-endtime">-<wbr>12:17</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objd98cf72084624762995e3929d9c58a4c > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:17</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objd98cf72084624762995e3929d9c58a4c > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objd98cf72084624762995e3929d9c58a4c > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964584"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:02</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj1a12d331864c4e26b718141d7575f1da > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP11 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj1a12d331864c4e26b718141d7575f1da > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 10:30 <span class="program__showtime-endtime">-<wbr>12:16</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj1a12d331864c4e26b718141d7575f1da > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:16</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj1a12d331864c4e26b718141d7575f1da > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj1a12d331864c4e26b718141d7575f1da > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964615"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:31</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objf32f573b902f4318bdc4ab4e03e00d0f_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 5 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964553"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:19</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964552"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:19</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP6 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 10:45 <span class="program__showtime-endtime">-<wbr>12:49</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:49</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objac985bde35334ef690f77247301169e1_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.9 fra 9 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja92d1f75ee6149ff96b091c63134e4e1 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP3 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja92d1f75ee6149ff96b091c63134e4e1 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 11:00 <span class="program__showtime-endtime">-<wbr>12:43</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja92d1f75ee6149ff96b091c63134e4e1 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:43</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja92d1f75ee6149ff96b091c63134e4e1 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja92d1f75ee6149ff96b091c63134e4e1 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964538"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:28</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964539"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>16:43</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj8a9b94e58b9d4191b2c8ab8f562f71b4_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.3 fra 19 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7030e12826d3437dbbd1ad44bf6874dd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP7 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7030e12826d3437dbbd1ad44bf6874dd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 11:00 <span class="program__showtime-endtime">-<wbr>12:45</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7030e12826d3437dbbd1ad44bf6874dd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:45</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7030e12826d3437dbbd1ad44bf6874dd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7030e12826d3437dbbd1ad44bf6874dd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964576"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>15:00</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964575"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:45</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3efe9ed04479449bbba27300e5564796_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.7 fra 13 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2975823"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:30</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objeb5a1598a7034601a1ca66319acc8ba0_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.7 fra 7 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964611"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>16:51</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj246f90b992244075aa911f20541ca988_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.8 fra 4 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj090a9fd1cca34e4f905a8baa0eed9388 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP2 D-BOX </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj090a9fd1cca34e4f905a8baa0eed9388 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 11:00 <span class="program__showtime-endtime">-<wbr>12:58</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj090a9fd1cca34e4f905a8baa0eed9388 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:58</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj090a9fd1cca34e4f905a8baa0eed9388 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj090a9fd1cca34e4f905a8baa0eed9388 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .expired-showtimed.showtime-wrap > .expired-showtimed.showtime_card.p-2 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> utekstet</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964588"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>15:13</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964590"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>15:28</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objd23bb3b714274ccb98a2ce6f48c0a8d9_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 6 fra 1 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964604"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:12</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964613"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:08</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj85144c91f7b545859066a98282cd498e_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.3 fra 6 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964565"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:45</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj91b9ab5fab8c41809ab19088fcc7e375_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 3 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964566"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:52</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964609"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:39</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.top-list_subtitle`
  - **HTML:** `<div class="top-list_subtitle pt-0 pb-0">Uke av <span class="text-capitalize">oktober 01 - 8</span></div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.23 (foreground color: #7b7b7b, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.text-capitalize`
  - **HTML:** `<span class="text-capitalize">oktober 01 - 8</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.23 (foreground color: #7b7b7b, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#obj5773cf41d1834dcd8034cd4af29c12af_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
  - **HTML:** `<img src="https://images.filmgrail.com/KK2023_Logo_ToLinjer_hvit.svg?width=1200&amp;optimizer=image" class="kinoclubb__logo">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#obj88ac441bd51a446b90a0ac10aa8b69b6_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
  - **HTML:** `<img src="https://images.filmgrail.com/KK2023_Logo_ToLinjer_hvit.svg?width=1200&amp;optimizer=image" class="kinoclubb__logo">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div:nth-child(1) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"] > .footer__download_img`
  - **HTML:** `<img class="footer__download_img" src="https://images.filmgrail.com/app_store.png?optimizer=image&amp;width=1200&amp;fit=max">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div:nth-child(2) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"] > .footer__download_img`
  - **HTML:** `<img class="footer__download_img" src="https://images.filmgrail.com/google_play.png?optimizer=image&amp;width=1200&amp;fit=max">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#\#ticket_icon_id`
  - **HTML:** `<img class="quick-buy-ticket-icon m-2" id="#ticket_icon_id" src="https://images.filmgrail.com/buttonIcon.png?optimizer=image&amp;width=1200">`
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
  - **HTML:** `<html lang="no">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 19

#### Affected Elements:

- **Target:** `div[aria-label="1 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/drapet-pa-benjamin-hermansen/2864" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="2 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/sauen-shaun-gardens-farbannelse/2644" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="3 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/kjarast/2787"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/kjarast/2787" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="4 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/resident-evil/2881"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/resident-evil/2881" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="5 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/the-uprising/2908"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/the-uprising/2908" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="6 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/verity/2951"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/verity/2951" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-prev > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/digger/2969"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/digger/2969" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-active > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/drapet-pa-benjamin-hermansen/2864" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-next > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/sauen-shaun-gardens-farbannelse/2644" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="10 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/kjarast/2787"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/kjarast/2787" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="11 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/resident-evil/2881"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/resident-evil/2881" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="12 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/the-uprising/2908"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/the-uprising/2908" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="13 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/verity/2951"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/verity/2951" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-duplicate-prev > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/digger/2969"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/digger/2969" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="15 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/drapet-pa-benjamin-hermansen/2864" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="16 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/sauen-shaun-gardens-farbannelse/2644" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[aria-label="17 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/kjarast/2787"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/kjarast/2787" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(1) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"]`
  - **HTML:** `<a href="https://apps.apple.com/us/app/bergen-kino/id1140482736" target="_blank" rel="noopener noreferrer" class="footer__download_btn "> <img class="footer__download_img" src="https://images.filmgrail.com/app_store.png?optimizer=image&amp…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div:nth-child(2) > .footer__download_btn[rel="noopener noreferrer"][target="_blank"]`
  - **HTML:** `<a href="https://play.google.com/store/apps/details?id=com.Filmgrail.android.bergen_dev&hl=en" target="_blank" rel="noopener noreferrer" class="footer__download_btn">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 2

#### Affected Elements:

- **Target:** `meta[name="viewport"]:nth-child(7)`
  - **HTML:** `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">`
  - **Failure summary:** Fix any of the following: user-scalable=no on <meta> tag disables zooming on mobile devices

- **Target:** `meta[name="viewport"]:nth-child(35)`
  - **HTML:** `<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">`
  - **Failure summary:** Fix any of the following: maximum-scale on <meta> tag disables zooming on mobile devices


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="no">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 184

#### Affected Elements:

- **Target:** `.cookies-prompt__main-block`
  - **HTML:** `<div class="cookies-prompt__main-block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cookies-prompt__actions-wrap`
  - **HTML:** `<div class="d-flex cookies-prompt__actions-wrap"><div class="cookies-prompt__actions-btn cookies-prompt__actions-btn_danger btn btn-primary rounded-10"> Tillat alle </div> <div class="cookies-prompt__actions-btn btn-secondary btn rounded-1…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header-transparent`
  - **HTML:** `<div class="header-transparent d-flex justify-content-center">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#swiper-wrapper-446fa919660e3635`
  - **HTML:** `<div class="swiper-wrapper" id="swiper-wrapper-446fa919660e3635" aria-live="off" style="transition-duration: 0ms; transform: translate3d(-9058px, 0px, 0px);">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.obj13e08d01dd564c0bb50e254af85cf754 > section > .flex-row.mb-4.font-weight-semi-bold`
  - **HTML:** `<div class=" font-weight-semi-bold mb-4 d-flex justify-content-between align-items-center flex-row ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(1) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">Høstferie? Da blir det kino!</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(1) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">Høstferien er her – og Bergen leverer som vanlig på været. Heldigvis har vi mørke kinosaler, digg popcorn og filmer å fylle ferien med. Les mer her!</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(2) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">The Fast and The Furious (2001)</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(2) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">Heftig og ung actionthriller om en ung politibetjent som går "undercover" for å infiltrere en bandegjeng i Los Angeles som er mistenkt for ulovlig bilkapring.</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card_item__link[href="/f/pensjonskuppet/2645"][data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">Pensjonskuppet</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card_item__link[href="/f/pensjonskuppet/2645"][data-target-partial="true"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">Førpremierer hele høstferien! Filmen har allerede blitt vist for 2.000 besøkende hos oss, og blir utrolig godt tatt i mot blant publikum. Ta med deg familie eller venner og kos deg med denne elleville.…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/markens-grode/2860"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">Markens grøde</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/markens-grode/2860"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">Bergen Kino, i samarbeid med Bergen internasjonale filmfestival, har gleden av å invitere deg til åpningsfilm og festpremiere på Markens Grøde onsdag 14. oktober. Sikre deg plasser nå!</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="biff-2026"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">BIFF 2026</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="biff-2026"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">Bergen internasjonale filmfestival på Bergen Kino fra 14/10 til 22/10. Kjøp billetter her!</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="barnas-superkino"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">Barnas Superkino</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="barnas-superkino"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">Velkommen til Barnas Superkino lørdag 24. oktober med tema; Mini-Halloween! Kun kr. 120,- per billett på utvalgte barnefilmer fra kl. 10:00 - 16:00. Les mer her!</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objc1fb4a00499542c9b8af1da4887cf68b_adform`
  - **HTML:** `<div id="objc1fb4a00499542c9b8af1da4887cf68b_adform" class="w-100 mb-2 text-center py-3 adform " style="overflow: hidden; min-height: 332px; background-color: rgb(244, 244, 244); border-radius: 8px;"><span class="adform-text">reklame</span…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.py-4.container > section > .flex-row.mb-4.font-weight-semi-bold`
  - **HTML:** `<div class=" font-weight-semi-bold mb-4 d-flex justify-content-between align-items-center flex-row "> <div class="align-items-center block_title_header d-flex w-100 pb-0"> Kinoprogram </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objb7229ae71c604913b05b484d531feb85_dates`
  - **HTML:** `<select class="btn filter-dropdown rounded undefined" id="objb7229ae71c604913b05b484d531feb85_dates">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objb7229ae71c604913b05b484d531feb85_sortOptions`
  - **HTML:** `<select class="btn filter-dropdown rounded " id="objb7229ae71c604913b05b484d531feb85_sortOptions">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objb7229ae71c604913b05b484d531feb85_screens`
  - **HTML:** `<select class="btn filter-dropdown rounded " id="objb7229ae71c604913b05b484d531feb85_screens">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj0241b928f8b644f5a70e4c062337d47f`
  - **HTML:** `<div id="obj0241b928f8b644f5a70e4c062337d47f" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/verity/2951"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/verity/2951" data-target-partial="true">Verity</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj31f82a7fae2c4309b6780e47fe228ba0_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.4 fra 7 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj31f82a7fae2c4309b6780e47fe228ba0_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">15 år | 1t 57m | USA | thriller, romantikk</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj697ee536cebc41cca951aabf56a96e73`
  - **HTML:** `<div id="obj697ee536cebc41cca951aabf56a96e73" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj47c09de60ed7450aa729af8f6b01910e`
  - **HTML:** `<div id="obj47c09de60ed7450aa729af8f6b01910e" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/en-nasjon-i-sjakk/1972"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/en-nasjon-i-sjakk/1972" data-target-partial="true">En nasjon i sjakk</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj5773cf41d1834dcd8034cd4af29c12af_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.2 fra 28 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj5773cf41d1834dcd8034cd4af29c12af_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">15 år | 1t 55m | Norge | thriller, spenning, action</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj5773cf41d1834dcd8034cd4af29c12af_showtimes > .my-3 > .kinoclub`
  - **HTML:** `<div class="kinoclub">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj26497556d1244f38a383db873af9282f`
  - **HTML:** `<div id="obj26497556d1244f38a383db873af9282f" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj52309990f0184c52a90a5caaf16059a3`
  - **HTML:** `<div id="obj52309990f0184c52a90a5caaf16059a3" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/kjarast/2787"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/kjarast/2787" data-target-partial="true">Kjærast</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objf6c33b85829847b89f808ba6634c3c5d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.1 fra 31 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objf6c33b85829847b89f808ba6634c3c5d_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 1t 54m | Norge </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objca7bd0eea6f546c9918f9525fb118fc0`
  - **HTML:** `<div id="objca7bd0eea6f546c9918f9525fb118fc0" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objc74d9dd1413846a8a494b7c1c09683a9_adform`
  - **HTML:** `<div id="objc74d9dd1413846a8a494b7c1c09683a9_adform" class="w-100 mb-2 text-center py-3 adform mt-5 mb-4" style="overflow: hidden; min-height: 332px; background-color: rgb(244, 244, 244); border-radius: 8px;"><span class="adform-text">rekl…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4e173c401b9a4964881f3487989c6756`
  - **HTML:** `<div id="obj4e173c401b9a4964881f3487989c6756" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/butterfly/2784"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/butterfly/2784" data-target-partial="true">Butterfly</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objdae6212ecee646a78a2987372c760971_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 3.6 fra 7 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objdae6212ecee646a78a2987372c760971_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 1t 57m | Norge, Spania | drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja22255983ec5409d97ed8519074b1921`
  - **HTML:** `<div id="obja22255983ec5409d97ed8519074b1921" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj51c366b7812b4807a48c3a08ffa54a5e`
  - **HTML:** `<div id="obj51c366b7812b4807a48c3a08ffa54a5e" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj6bf73907cb6e48aa9e51c5bed51df862_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/drapet-pa-benjamin-hermansen/2864" data-target-partial="true">Drapet på Benjamin Hermansen</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj6bf73907cb6e48aa9e51c5bed51df862_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 6 fra 1 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj6bf73907cb6e48aa9e51c5bed51df862_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">15 år | 1t 36m | Norge | drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj32a3bb6da8db48c597e8d55c3c67c511`
  - **HTML:** `<div id="obj32a3bb6da8db48c597e8d55c3c67c511" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objef9c5ad5e1b0473db8b5bd958329bbdc`
  - **HTML:** `<div id="objef9c5ad5e1b0473db8b5bd958329bbdc" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj14ad65f10cd94ad083840b299de22922_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/spider-man-brand-new-day/2653" data-target-partial="true">Spider-Man: Brand New Day</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj14ad65f10cd94ad083840b299de22922_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.6 fra 131 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj14ad65f10cd94ad083840b299de22922_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 2t 25m | USA | eventyr, superheltfilm</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj970399ca42474fe38148f1497af5894a`
  - **HTML:** `<div id="obj970399ca42474fe38148f1497af5894a" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8c9ef21f16bb4a67a56481329224782a`
  - **HTML:** `<div id="obj8c9ef21f16bb4a67a56481329224782a" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/fjord/2876"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/fjord/2876" data-target-partial="true">Fjord</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj88ac441bd51a446b90a0ac10aa8b69b6_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.6 fra 24 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj88ac441bd51a446b90a0ac10aa8b69b6_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 2t 25m | Norge, Romania | drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj88ac441bd51a446b90a0ac10aa8b69b6_showtimes > .my-3 > .kinoclub`
  - **HTML:** `<div class="kinoclub">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objc87cda2d07ac4a98b1f72164af172b56`
  - **HTML:** `<div id="objc87cda2d07ac4a98b1f72164af172b56" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj3edbd78afd57485eaa7ce9a6ebca6299`
  - **HTML:** `<div id="obj3edbd78afd57485eaa7ce9a6ebca6299" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/resident-evil/2881"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/resident-evil/2881" data-target-partial="true">Resident Evil</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj3024b0c34cb549a687313e77f803f84b_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 40 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj3024b0c34cb549a687313e77f803f84b_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">15 år | 1t 33m | USA | sci-fi, horror</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7158df58f7a445119d59cda81fd02ddf`
  - **HTML:** `<div id="obj7158df58f7a445119d59cda81fd02ddf" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj563fbf226df549f18f71fbcc54b9df20`
  - **HTML:** `<div id="obj563fbf226df549f18f71fbcc54b9df20" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8f760f0a38d04884997693897cf9e8db_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/sauen-shaun-gardens-farbannelse/2644" data-target-partial="true">Sauen Shaun - Gårdens fårbannelse</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8f760f0a38d04884997693897cf9e8db_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">Tillatt for alle | 1t 21m | Storbritannia | familiefilm, barnefilm, animasjon</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj114c7b68cf3e49a7acfb27d8382ebab7`
  - **HTML:** `<div id="obj114c7b68cf3e49a7acfb27d8382ebab7" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objf22d6febb5404a079c2a9a06f42e0e65`
  - **HTML:** `<div id="objf22d6febb5404a079c2a9a06f42e0e65" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/digger/2969"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/digger/2969" data-target-partial="true">Digger</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj9c17fc725de84077bb57f9ab2aa5ac66_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.5 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj9c17fc725de84077bb57f9ab2aa5ac66_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 2t 09m | USA | komedie, drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj063fbefe2d1844b29fc930693824cdbb`
  - **HTML:** `<div id="obj063fbefe2d1844b29fc930693824cdbb" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj157043aa64374e9f932b06b0a57364e8`
  - **HTML:** `<div id="obj157043aa64374e9f932b06b0a57364e8" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7842a6c459d0497a8b1a07fb31422628_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/practical-magic-family-legacy/2880" data-target-partial="true">Practical Magic: Family Legacy</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7842a6c459d0497a8b1a07fb31422628_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.1 fra 13 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7842a6c459d0497a8b1a07fb31422628_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 2t 09m | USA | romantikk, komedie, fantasy</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objb82612d5a15342ccacfa40c2d4756c63`
  - **HTML:** `<div id="objb82612d5a15342ccacfa40c2d4756c63" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objf06e9d2102c346bab3f3b6b7e3c90696`
  - **HTML:** `<div id="objf06e9d2102c346bab3f3b6b7e3c90696" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/reisen-til-piemonte/2910"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/reisen-til-piemonte/2910" data-target-partial="true">Reisen til Piemonte</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8d9be3d3c4cb4717804c72e641bdc63c_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.5 fra 4 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8d9be3d3c4cb4717804c72e641bdc63c_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">Tillatt for alle | 1t 51m | Sverige </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj76f7cf68937547ee80cbfb39f1da56f2`
  - **HTML:** `<div id="obj76f7cf68937547ee80cbfb39f1da56f2" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj3b863fa280bc4fea8002340007fe6ca0`
  - **HTML:** `<div id="obj3b863fa280bc4fea8002340007fe6ca0" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/heart-of-the-beast/2856"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/heart-of-the-beast/2856" data-target-partial="true">Heart of the Beast</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj845af24579c4433cb18f03aeb0e87361_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.9 fra 7 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj845af24579c4433cb18f03aeb0e87361_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 1t 41m | USA | action</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objbb2668b84f1841d792354c48a686e558`
  - **HTML:** `<div id="objbb2668b84f1841d792354c48a686e558" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objf230d7b8741f45afbce1ee36455bc51c`
  - **HTML:** `<div id="objf230d7b8741f45afbce1ee36455bc51c" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/the-odyssey/2654"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/the-odyssey/2654" data-target-partial="true">The Odyssey</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objaf878fcb37a74947802f9f18a99c6096_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.3 fra 172 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objaf878fcb37a74947802f9f18a99c6096_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 2t 52m | USA </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj71465580423943bbb951e9d72362a5d3`
  - **HTML:** `<div id="obj71465580423943bbb951e9d72362a5d3" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4a6b8ec2348d4d7ead67c9a7dbc4a038`
  - **HTML:** `<div id="obj4a6b8ec2348d4d7ead67c9a7dbc4a038" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/harila-nadelose-fjell/2877"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/harila-nadelose-fjell/2877" data-target-partial="true">Harila - Nådeløse fjell</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj893afe54d9b241df9b015475f3561581_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.5 fra 11 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj893afe54d9b241df9b015475f3561581_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 1t 42m | Norge | dokumentar</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objabb085ec64484ac48ebeb65d1cdd90c2`
  - **HTML:** `<div id="objabb085ec64484ac48ebeb65d1cdd90c2" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj86744d9978cf47f79b8680d3fae5129b`
  - **HTML:** `<div id="obj86744d9978cf47f79b8680d3fae5129b" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/the-uprising/2908"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/the-uprising/2908" data-target-partial="true">The Uprising</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj2b0fc3c65ede4b73a4eae08266e47cb5_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj2b0fc3c65ede4b73a4eae08266e47cb5_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">15 år | 2t 08m | England | drama, action</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja7de4e8a3c1146ba9db002c8fecdba61`
  - **HTML:** `<div id="obja7de4e8a3c1146ba9db002c8fecdba61" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj9e5f42d063d84e2099ec9133cdb46285`
  - **HTML:** `<div id="obj9e5f42d063d84e2099ec9133cdb46285" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/tilbake-til-tottori/2861"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/tilbake-til-tottori/2861" data-target-partial="true">Tilbake til Tottori</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj5ebc1b5a91864dcaa6779423287c4d69_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.7 fra 3 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj5ebc1b5a91864dcaa6779423287c4d69_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">6 år | 1t 32m | Norge | familiefilm, drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objd98cf72084624762995e3929d9c58a4c`
  - **HTML:** `<div id="objd98cf72084624762995e3929d9c58a4c" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obje70f123ca28e496d993628e6a2ab811a`
  - **HTML:** `<div id="obje70f123ca28e496d993628e6a2ab811a" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/monsterfabrikken/2970"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/monsterfabrikken/2970" data-target-partial="true">Monsterfabrikken</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj0d211a02321e4f6d8df17375f40fed22_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">6 år | 1t 31m | Tyskland </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj1a12d331864c4e26b718141d7575f1da`
  - **HTML:** `<div id="obj1a12d331864c4e26b718141d7575f1da" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj3b55e939f51c4e578866892150a88de7`
  - **HTML:** `<div id="obj3b55e939f51c4e578866892150a88de7" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/glemselens-oy/2882"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/glemselens-oy/2882" data-target-partial="true">Glemselens øy</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objf32f573b902f4318bdc4ab4e03e00d0f_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 5 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objf32f573b902f4318bdc4ab4e03e00d0f_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 1t 49m | USA | barnefilm, animasjon</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj835194f297ba4897bb83e2b162627f56`
  - **HTML:** `<div id="obj835194f297ba4897bb83e2b162627f56" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj479db730c77d4f0c849fdd1cb637049c`
  - **HTML:** `<div id="obj479db730c77d4f0c849fdd1cb637049c" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/paw-patrol-dinofilmen/2782"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/paw-patrol-dinofilmen/2782" data-target-partial="true">Paw Patrol: Dinofilmen</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objac985bde35334ef690f77247301169e1_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.9 fra 9 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objac985bde35334ef690f77247301169e1_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">Tillatt for alle | 1t 28m | USA | barnefilm, animasjon</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja92d1f75ee6149ff96b091c63134e4e1`
  - **HTML:** `<div id="obja92d1f75ee6149ff96b091c63134e4e1" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7c3e51b98f9349a4855721b93813f58d`
  - **HTML:** `<div id="obj7c3e51b98f9349a4855721b93813f58d" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/minions-and-monstre/2656"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/minions-and-monstre/2656" data-target-partial="true">Minions &amp; monstre</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8a9b94e58b9d4191b2c8ab8f562f71b4_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.3 fra 19 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8a9b94e58b9d4191b2c8ab8f562f71b4_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">6 år | 1t 25m | USA | barnefilm, animasjon</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7030e12826d3437dbbd1ad44bf6874dd`
  - **HTML:** `<div id="obj7030e12826d3437dbbd1ad44bf6874dd" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objb1ca924409a640a8b3be2216f607f082`
  - **HTML:** `<div id="objb1ca924409a640a8b3be2216f607f082" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/pensjonskuppet/2645"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/pensjonskuppet/2645" data-target-partial="true">Pensjonskuppet</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj3efe9ed04479449bbba27300e5564796_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.7 fra 13 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj3efe9ed04479449bbba27300e5564796_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 1t 50m | Norge | komedie, action</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objde106575020e4ec598eb1f1b56fc472f`
  - **HTML:** `<div id="objde106575020e4ec598eb1f1b56fc472f" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7b73b07a50684795bc7dd99bd398d2fd`
  - **HTML:** `<div id="obj7b73b07a50684795bc7dd99bd398d2fd" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objeb5a1598a7034601a1ca66319acc8ba0_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/avengers-endgame-encore/2958" data-target-partial="true">Avengers: Endgame Encore</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objeb5a1598a7034601a1ca66319acc8ba0_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.7 fra 7 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objeb5a1598a7034601a1ca66319acc8ba0_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 3t 03m | USA </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj43c5908113be4c7a9a955d7ed6f20696`
  - **HTML:** `<div id="obj43c5908113be4c7a9a955d7ed6f20696" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj42070c04924045e9bdb84481e09ee323`
  - **HTML:** `<div id="obj42070c04924045e9bdb84481e09ee323" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj246f90b992244075aa911f20541ca988_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/coyote-vs-acme-per-ulv-pa-saken/2906" data-target-partial="true">Coyote vs. Acme - Per Ulv på saken</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj246f90b992244075aa911f20541ca988_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.8 fra 4 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj246f90b992244075aa911f20541ca988_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">6 år | 1t 43m | USA | komedie, eventyr, animasjon</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj090a9fd1cca34e4f905a8baa0eed9388`
  - **HTML:** `<div id="obj090a9fd1cca34e4f905a8baa0eed9388" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj67f60823feb34a69a26874c28966070d`
  - **HTML:** `<div id="obj67f60823feb34a69a26874c28966070d" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/enzo/2652"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/enzo/2652" data-target-partial="true">Enzo</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objd23bb3b714274ccb98a2ce6f48c0a8d9_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 6 fra 1 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objd23bb3b714274ccb98a2ce6f48c0a8d9_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 1t 42m | Frankrike </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objed9a6e1f3d884d05a87ff6622c4dfb5f`
  - **HTML:** `<div id="objed9a6e1f3d884d05a87ff6622c4dfb5f" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objeb151454768e4b6ea6123d03295040e3`
  - **HTML:** `<div id="objeb151454768e4b6ea6123d03295040e3" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/blue-lock-buru-rokku/2901"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/blue-lock-buru-rokku/2901" data-target-partial="true">Blue Lock (Burû Rokku)</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj904e046bc58f4073b98ae4f20a535a37_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | Japan | fantasy, action</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objdb4253387cfd4ceb858207f00c3da496`
  - **HTML:** `<div id="objdb4253387cfd4ceb858207f00c3da496" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj87ac9ecf3ab54a2b909c3583312de99a`
  - **HTML:** `<div id="obj87ac9ecf3ab54a2b909c3583312de99a" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/lave-forventninger/2862"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/lave-forventninger/2862" data-target-partial="true">Lave forventninger</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj85144c91f7b545859066a98282cd498e_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.3 fra 6 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj85144c91f7b545859066a98282cd498e_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 1t 45m | Norge | drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objf8417717cf26487a8c45b3b718942056`
  - **HTML:** `<div id="objf8417717cf26487a8c45b3b718942056" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj5e7dea1a7c0e400b8973662c3aead30b`
  - **HTML:** `<div id="obj5e7dea1a7c0e400b8973662c3aead30b" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/spa-weekend/2879"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/spa-weekend/2879" data-target-partial="true">Spa Weekend</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj91b9ab5fab8c41809ab19088fcc7e375_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 3 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj91b9ab5fab8c41809ab19088fcc7e375_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">6 år | 1t 37m | USA | komedie</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objec1b8ffd17054dbb9c7ad1eb73342fe6`
  - **HTML:** `<div id="objec1b8ffd17054dbb9c7ad1eb73342fe6" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objaf7ee10ea0444c95810cb24a706732db`
  - **HTML:** `<div id="objaf7ee10ea0444c95810cb24a706732db" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/spiralis/2884"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/spiralis/2884" data-target-partial="true">Spiralis</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7e146d83c73a4fa19d3663413e36d65f_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">6 år | 1t 39m | Frankrike, Belgia | komedie, familiefilm, barnefilm</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obje123ac71cf2542d1b097857d145079ab`
  - **HTML:** `<div id="obje123ac71cf2542d1b097857d145079ab" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.obj801a27af3c7b41efaf94d8f5fb20dd4a > section > .flex-row.mb-4.font-weight-semi-bold`
  - **HTML:** `<div class=" font-weight-semi-bold mb-4 d-flex justify-content-between align-items-center flex-row "> <div class="align-items-center block_title_header d-flex w-100 pb-0"> Ukentlig toppfilmliste </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.top-list_subtitle`
  - **HTML:** `<div class="top-list_subtitle pt-0 pb-0">Uke av <span class="text-capitalize">oktober 01 - 8</span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj2ed1f1c866b544758d2fae57368f7435 > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objd540a8725c1f40b5931f3b2c7cad1516 > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj1cf6dac2f0be434fb0a4aeeda4db278f > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="min-height:initial;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj021567427e354db48eba8dee2eb01c18 > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj03b6a0a0c43b4c6f861f240532a4c38e > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj0aff4c59232a441daac45d88fec97fe1 > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="min-height:initial;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-sm-12.col-md-3:nth-child(1)`
  - **HTML:** `<div class="col-sm-12 col-md-3">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-sm-12.col-md-3:nth-child(2)`
  - **HTML:** `<div class="col-sm-12 col-md-3">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer__subtitle.pt-2.mb-2`
  - **HTML:** `<p class="h5 pt-2 mb-2 text-uppercase footer__subtitle"> Følg oss </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-sm-12.col-md-3:nth-child(3) > div:nth-child(3)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer__download_application`
  - **HTML:** `<div class="footer__download_application mt-4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer__coopyrights`
  - **HTML:** `<div class="footer__coopyrights container pt-4 footer-item text-right"> <span>Utviklet med<span class="ml-1"> <i class="fas fa-heart" aria-hidden="true"> </i> </span>av</span> <a href="https://www.filmgrail.com" class="text-primary400" tar…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#widget_button_id`
  - **HTML:** `<a class="fg-widget-button btn btn-primary d-flex flex-column justify-content-center align-items-center p-2" id="widget_button_id">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.quick-buy-widget__film-filter-dropdown`
  - **HTML:** `<div class="quick-buy-widget__film-filter-dropdown">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.quick-buy-widget__date`
  - **HTML:** `<div class="quick-buy-widget__date"><div class="quick-buy-widget__loading"><select id="date_picker" disabled="disabled" class="date-filter-dropdown filter-dropdown filter-dropdown-quick-buy-widget btn rounded bg-primary font-weight-bold"><…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.quick-buy-widget__showtime`
  - **HTML:** `<div class="quick-buy-widget__showtime">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 6

#### Affected Elements:

- **Target:** `#objb7229ae71c604913b05b484d531feb85_dates`
  - **HTML:** `<select class="btn filter-dropdown rounded undefined" id="objb7229ae71c604913b05b484d531feb85_dates">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#objb7229ae71c604913b05b484d531feb85_sortOptions`
  - **HTML:** `<select class="btn filter-dropdown rounded " id="objb7229ae71c604913b05b484d531feb85_sortOptions">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#objb7229ae71c604913b05b484d531feb85_screens`
  - **HTML:** `<select class="btn filter-dropdown rounded " id="objb7229ae71c604913b05b484d531feb85_screens">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `.movie-filter-dropdown`
  - **HTML:** `<select class="movie-filter-dropdown ml-1 filter-dropdown filter-dropdown-quick-buy-widget btn rounded ">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#date_picker`
  - **HTML:** `<select id="date_picker" disabled="disabled" class="date-filter-dropdown filter-dropdown filter-dropdown-quick-buy-widget btn rounded bg-primary font-weight-bold"><option value="">velg dato</option> </select>`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#showtime_dropdown`
  - **HTML:** `<select id="showtime_dropdown" disabled="disabled" class="showtime-filter-dropdown filter-dropdown filter-dropdown-quick-buy-widget btn rounded bg-primary font-weight-bold"><option value="">velg visning</option> </select>`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

