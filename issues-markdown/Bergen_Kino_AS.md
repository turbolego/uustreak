# WCAG Violations Report for Bergen Kino AS

**Timestamp:** 2026-10-02T17:05:23.325Z
**URL:** [https://www.bergenkino.no/](https://www.bergenkino.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 255

#### Affected Elements:

- **Target:** `.text-dark-primary`
  - **HTML:** `<a href="/vilkar" target="_blank" class="text-dark-primary label-link"> Les mer </a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.26 (foreground color: #6792bd, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj60137abd7ec74a988bc4013af22ce225_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.5 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP1 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 15:30 <span class="program__showtime-endtime">-<wbr>17:42</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:42</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP1 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 18:15 <span class="program__showtime-endtime">-<wbr>20:27</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:27</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino LUX2 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 18:00 <span class="program__showtime-endtime">-<wbr>20:12</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:12</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2944973"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:57</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964042"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>23:12</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP6 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 13:00 <span class="program__showtime-endtime">-<wbr>15:12</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>15:12</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj92382727edd44959a11a75767d893041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objb110649f6a124a56915d26e76314f318_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.2 fra 25 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP5 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 15:15 <span class="program__showtime-endtime">-<wbr>17:25</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:25</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP5 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 18:00 <span class="program__showtime-endtime">-<wbr>20:10</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:10</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961462"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:55</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP10 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 14:15 <span class="program__showtime-endtime">-<wbr>16:25</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>16:25</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7e8e3c1d56bb4880b8361ce1bd1addfc_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 25 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino LUX5 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 17:45 <span class="program__showtime-endtime">-<wbr>19:56</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:56</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961471"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:41</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP7 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 12:45 <span class="program__showtime-endtime">-<wbr>14:56</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:56</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP7 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 15:30 <span class="program__showtime-endtime">-<wbr>17:41</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:41</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje31aa2ed3f8c4206972cb9d74c5845c3_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.1 fra 34 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino LUX1 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 18:00 <span class="program__showtime-endtime">-<wbr>19:49</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:49</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(1) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961481"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:04</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP6 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 15:45 <span class="program__showtime-endtime">-<wbr>17:34</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:34</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2964050"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:49</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP8 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 12:00 <span class="program__showtime-endtime">-<wbr>13:51</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>13:51</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP12 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 16:00 <span class="program__showtime-endtime">-<wbr>17:51</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:51</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP12 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 18:20 <span class="program__showtime-endtime">-<wbr>20:11</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:11</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961538"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:36</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja6bd67d65c8a46efa45061f8d24b3099_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP11 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 14:45 <span class="program__showtime-endtime">-<wbr>16:57</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>16:57</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP7 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 18:00 <span class="program__showtime-endtime">-<wbr>20:12</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:12</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961510"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:57</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj6b1246e98830431c81cc226dc1e9ff63_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.3 fra 172 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP9 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 11:30 <span class="program__showtime-endtime">-<wbr>14:38</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:38</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino LUX3 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 17:20 <span class="program__showtime-endtime">-<wbr>20:28</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:28</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961469"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>23:53</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP7 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 10:30 <span class="program__showtime-endtime">-<wbr>12:16</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:16</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> utekstet</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP4 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 15:15 <span class="program__showtime-endtime">-<wbr>17:01</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:01</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> utekstet</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP4 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 17:30 <span class="program__showtime-endtime">-<wbr>19:16</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:16</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> utekstet</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2958997"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>23:24</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino LUX4 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 17:45 <span class="program__showtime-endtime">-<wbr>20:09</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:09</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(2) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP3 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 15:00 <span class="program__showtime-endtime">-<wbr>17:24</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:24</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin:nth-child(3) > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj1469e13b6f8f445c87b18464308960a3_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.6 fra 129 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj97a24cb581e9412c9bbacf3525c4ccb0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP2 D-BOX </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj97a24cb581e9412c9bbacf3525c4ccb0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 17:15 <span class="program__showtime-endtime">-<wbr>19:55</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj97a24cb581e9412c9bbacf3525c4ccb0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:55</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj97a24cb581e9412c9bbacf3525c4ccb0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj97a24cb581e9412c9bbacf3525c4ccb0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj97a24cb581e9412c9bbacf3525c4ccb0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(3)`
  - **HTML:** `<span class="program__showtime-notes" style=" font-weight:800; font-size:14px; text-transform:capitalize; "> d-box</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961435"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>23:10</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objc2afed4dedcb4c149f06bfe26d6624c2_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4 fra 3 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj77c83cc5c2b4472c9d06012fc8236e78 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP3 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj77c83cc5c2b4472c9d06012fc8236e78 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 18:00 <span class="program__showtime-endtime">-<wbr>19:56</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj77c83cc5c2b4472c9d06012fc8236e78 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:56</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj77c83cc5c2b4472c9d06012fc8236e78 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj77c83cc5c2b4472c9d06012fc8236e78 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961440"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:26</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj759aa61a21a64455a6a8595422f131f1_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.5 fra 11 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5cb19091eef0419aa3daff97d8591c1d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP9 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5cb19091eef0419aa3daff97d8591c1d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 18:00 <span class="program__showtime-endtime">-<wbr>19:55</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5cb19091eef0419aa3daff97d8591c1d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:55</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5cb19091eef0419aa3daff97d8591c1d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5cb19091eef0419aa3daff97d8591c1d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961516"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:25</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obja72009951b11412e838b6b031482700d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 11 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961540"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:24</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj908b058cd215479886ed0e1114ee8d9e_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.6 fra 24 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP8 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 14:30 <span class="program__showtime-endtime">-<wbr>17:04</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:04</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP8 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 17:45 <span class="program__showtime-endtime">-<wbr>20:19</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:19</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objc93f091368544dfe8d9f499f8751f995_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 4 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP6 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 10:30 <span class="program__showtime-endtime">-<wbr>12:34</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:34</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP6 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 18:00 <span class="program__showtime-endtime">-<wbr>20:04</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:04</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj071a3903897a4ce080e99b26aa526630_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.9 fra 8 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5ecc7655816146ecb0e7f6e7aca3f54d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP4 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5ecc7655816146ecb0e7f6e7aca3f54d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 13:00 <span class="program__showtime-endtime">-<wbr>14:43</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5ecc7655816146ecb0e7f6e7aca3f54d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:43</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5ecc7655816146ecb0e7f6e7aca3f54d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj5ecc7655816146ecb0e7f6e7aca3f54d > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objfcf24009212749928438f372adb19836_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961452"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:08</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj96c58902f69f46d1b10a8d764e72cdf1_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.3 fra 6 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961533"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:45</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj8e7d2260fa8b48f6b0fd36253b242e3c_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.7 fra 3 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj4ac8776e60d246f584922afd81322d03 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP9 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj4ac8776e60d246f584922afd81322d03 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 15:30 <span class="program__showtime-endtime">-<wbr>17:36</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj4ac8776e60d246f584922afd81322d03 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>17:36</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj4ac8776e60d246f584922afd81322d03 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj4ac8776e60d246f584922afd81322d03 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj38c5bc6d506a4738ac42039b4a37b68e_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.7 fra 3 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj21ffd56b3a5847fa83dce2f7384af86c > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP2 D-BOX </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj21ffd56b3a5847fa83dce2f7384af86c > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 10:45 <span class="program__showtime-endtime">-<wbr>12:43</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj21ffd56b3a5847fa83dce2f7384af86c > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:43</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj21ffd56b3a5847fa83dce2f7384af86c > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj21ffd56b3a5847fa83dce2f7384af86c > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> utekstet</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj1ad3641a65b046e29bffd9f7d965b82f_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 3 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="/showtime/2961509"] > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>22:22</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.82 (foreground color: #687785, background color: #eaeaea, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9be6156b1ce14d49a986378825aee921_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.6 fra 10 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino LUX2 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 12:00 <span class="program__showtime-endtime">-<wbr>14:00</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:00</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .px-1.program__showtime-notes:nth-child(3)`
  - **HTML:** `<span class="program__showtime-notes px-1 " style="color:#014a91; font-weight:bold; font-style:normal; font-size:12px; text-transform:capitalize; ">førpremiere</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .px-1.program__showtime-notes:nth-child(4)`
  - **HTML:** `<span class="program__showtime-notes px-1 " style="color:#014a91; font-weight:bold; font-style:normal; font-size:12px; text-transform:capitalize; ">seniorkino</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .px-1.program__showtime-notes:nth-child(5)`
  - **HTML:** `<span class="program__showtime-notes px-1 " style=" text-transform:capitalize; ">innledning av regissør gunnbjørg gunnarsdottir!</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino LUX3 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 12:15 <span class="program__showtime-endtime">-<wbr>14:15</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:15</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .px-1.program__showtime-notes:nth-child(3)`
  - **HTML:** `<span class="program__showtime-notes px-1 " style="color:#014a91; font-weight:bold; font-style:normal; font-size:12px; text-transform:capitalize; ">førpremiere</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .px-1.program__showtime-notes:nth-child(4)`
  - **HTML:** `<span class="program__showtime-notes px-1 " style="color:#014a91; font-weight:bold; font-style:normal; font-size:12px; text-transform:capitalize; ">seniorkino</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .px-1.program__showtime-notes:nth-child(5)`
  - **HTML:** `<span class="program__showtime-notes px-1 " style=" text-transform:capitalize; ">innledning av regissør gunnbjørg gunnarsdottir!</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino LUX1 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 12:30 <span class="program__showtime-endtime">-<wbr>14:30</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>14:30</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .px-1.program__showtime-notes:nth-child(3)`
  - **HTML:** `<span class="program__showtime-notes px-1 " style="color:#014a91; font-weight:bold; font-style:normal; font-size:12px; text-transform:capitalize; ">førpremiere</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `.showtime-wrap.expired-showtimed:nth-child(3) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .px-1.program__showtime-notes:nth-child(4)`
  - **HTML:** `<span class="program__showtime-notes px-1 " style=" text-transform:capitalize; ">innledning av regissør gunnbjørg gunnarsdottir!</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj148ce07fdd3140ac8d2d4614268288da_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 6 fra 6 brukere </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.03 (foreground color: #8796a4, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj292f213badf9450a88f488ab52811cc0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP2 D-BOX </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj292f213badf9450a88f488ab52811cc0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 13:15 <span class="program__showtime-endtime">-<wbr>16:36</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj292f213badf9450a88f488ab52811cc0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>16:36</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj292f213badf9450a88f488ab52811cc0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj292f213badf9450a88f488ab52811cc0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj292f213badf9450a88f488ab52811cc0 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(3)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> infinity vision</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7b566a90f6ab4b86bb763c6483375c87 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP10 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7b566a90f6ab4b86bb763c6483375c87 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 17:45 <span class="program__showtime-endtime">-<wbr>20:08</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7b566a90f6ab4b86bb763c6483375c87 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>20:08</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7b566a90f6ab4b86bb763c6483375c87 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> original tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj7b566a90f6ab4b86bb763c6483375c87 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP4 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 10:30 <span class="program__showtime-endtime">-<wbr>12:24</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>12:24</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(1) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeProvider.font-extrasmall.mb-1`
  - **HTML:** `<div class="program__showtimeProvider font-extrasmall mb-1" style="color: var(--color-gray800)"> Bergen Kino KP11 </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.72 (foreground color: #bcbcbc, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime`
  - **HTML:** `<div class="program__showtimeTime"> 17:30 <span class="program__showtime-endtime">-<wbr>19:24</span> </div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.88 (foreground color: #9db7d0, background color: #f4f4f4, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .program__showtimeTime > .program__showtime-endtime`
  - **HTML:** `<span class="program__showtime-endtime">-<wbr>19:24</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.54 (foreground color: #c2c7cc, background color: #f4f4f4, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(1)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tekst</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5 > .gr-showtimes.flex-column.w-100 > .gr-showtimes__wrapper.gr-showtimes__wrapper_margin > .gr-showtimes__container-template.rounded > .showtime_card-wrapper.mb-0 > .showtime-wrap.expired-showtimed:nth-child(2) > .showtime_card.p-2.bg-gray-100 > .justify-content-center.flex-column.align-items-center > .program__showtime-notes:nth-child(2)`
  - **HTML:** `<span class="program__showtime-notes" style=" text-transform:capitalize; "> norsk tale</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.01 (foreground color: #a0b0c0, background color: #f4f4f4, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.top-list_subtitle`
  - **HTML:** `<div class="top-list_subtitle pt-0 pb-0">Uke av <span class="text-capitalize">september 25 - oktober 02</span></div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.23 (foreground color: #7b7b7b, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.text-capitalize`
  - **HTML:** `<span class="text-capitalize">september 25 - oktober 02</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.23 (foreground color: #7b7b7b, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#objb110649f6a124a56915d26e76314f318_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
  - **HTML:** `<img src="https://images.filmgrail.com/KK2023_Logo_ToLinjer_hvit.svg?width=1200&amp;optimizer=image" class="kinoclubb__logo">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#obj908b058cd215479886ed0e1114ee8d9e_showtimes > .my-3 > .kinoclub > .justify-content-between.w-100.d-flex > .kinoclubb__logo`
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

- **Target:** `.swiper-slide-duplicate-prev:nth-child(1) > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
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

- **Target:** `div[aria-label="7 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/digger/2969"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/digger/2969" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-prev > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/drapet-pa-benjamin-hermansen/2864" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-active > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/sauen-shaun-gardens-farbannelse/2644" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-next > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/kjarast/2787"]`
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

- **Target:** `div[aria-label="14 / 17"] > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer[href="/f/digger/2969"]`
  - **HTML:** `<a class="head-carousel__interactive-zone position-absolute cursor-pointer" href="/f/digger/2969" data-target-partial=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-duplicate-prev:nth-child(15) > .head-carousel__text-wrapper.align-items-end.d-flex > .head-carousel__interactive-zone.cursor-pointer.position-absolute`
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
- **Count:** 163

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

- **Target:** `#swiper-wrapper-31c49319e39a2128`
  - **HTML:** `<div class="swiper-wrapper" id="swiper-wrapper-31c49319e39a2128" aria-live="off" style="transition-duration: 0ms; transform: translate3d(-9058px, 0px, 0px);">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.obj25f4f2519cab46c19678bbca5a17f673 > section > .flex-row.mb-4.font-weight-semi-bold`
  - **HTML:** `<div class=" font-weight-semi-bold mb-4 d-flex justify-content-between align-items-center flex-row ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(1) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">Høstferie? Da blir det kino!</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(1) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">Høstferien er her – og Bergen leverer som vanlig på været. Heldigvis har vi mørke kinosaler, digg popcorn og filmer å fylle ferien med. Les mer her!</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/la-fjella-leve/2893"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">La fjella leve</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/la-fjella-leve/2893"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">De vant i Høyesterett. Men kampen var ikke over. I La fjella leve retter en av Norges mest anerkjente dokumentarfilmskapere, Håvard Bustnes, blikket mot Fosen-saken og statens pågående brudd på mennes.…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(3) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">Casino Royale - 20 års jubileum</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(3) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">Bond, James Bond! Bergen Kino Movieboxd feirer den internasjonale James Bond-dagen 5. oktober med å vise Casino Royale i remastret 4K-versjon. Gjør deg klar til å oppleve James Bonds mest intense og r.…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(4) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">The Fast and The Furious (2001)</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(4) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">Heftig og ung actionthriller om en ung politibetjent som går "undercover" for å infiltrere en bandegjeng i Los Angeles som er mistenkt for ulovlig bilkapring.</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(5) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">Ozzy &amp; Black Sabbath: Back To The Beginning</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(5) > .card_item[onclick="contentSwitcherGAArticle();"] > .card_item__link[data-target-partial="true"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">Ozzy &amp; Black Sabbath: Back To The Beginning documents a landmark moment in music history: Ozzy Osbourne’s historic final farewell performance for his fans at Villa Park stadium in his Birmingham ho…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/avengers-doomsday/2933"] > .card_item__title.font-weight-bold.mt-3`
  - **HTML:** `<div class="card_item__title font-weight-bold mt-3">Avengers: Doomsday</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/avengers-doomsday/2933"] > .card_item__subtitle.mt-1`
  - **HTML:** `<div class="card_item__subtitle mt-1">BILLETTER I SALG NÅ: Midnattspremiere kl. 00:01 natt til 16. desember i premiumsalen KP1 med Dolby Vision + Atmos. Verdens beste bilde og lyd!</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj41c14bb7c6c1492abba59aac14afe043_adform`
  - **HTML:** `<div id="obj41c14bb7c6c1492abba59aac14afe043_adform" class="w-100 mb-2 text-center py-3 adform " style="overflow: hidden; min-height: 332px; background-color: rgb(244, 244, 244); border-radius: 8px;"><span class="adform-text">reklame</span…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.py-4.container > section > .flex-row.mb-4.font-weight-semi-bold`
  - **HTML:** `<div class=" font-weight-semi-bold mb-4 d-flex justify-content-between align-items-center flex-row "> <div class="align-items-center block_title_header d-flex w-100 pb-0"> Kinoprogram </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4fdb0e4ba7d549159224e302e41fa52c_dates`
  - **HTML:** `<select class="btn filter-dropdown rounded undefined" id="obj4fdb0e4ba7d549159224e302e41fa52c_dates">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4fdb0e4ba7d549159224e302e41fa52c_sortOptions`
  - **HTML:** `<select class="btn filter-dropdown rounded " id="obj4fdb0e4ba7d549159224e302e41fa52c_sortOptions">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4fdb0e4ba7d549159224e302e41fa52c_screens`
  - **HTML:** `<select class="btn filter-dropdown rounded " id="obj4fdb0e4ba7d549159224e302e41fa52c_screens">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7496111ad3184bbfb8fcd1fef55e752e`
  - **HTML:** `<div id="obj7496111ad3184bbfb8fcd1fef55e752e" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/verity/2951"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/verity/2951" data-target-partial="true">Verity</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj60137abd7ec74a988bc4013af22ce225_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.5 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj60137abd7ec74a988bc4013af22ce225_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">15 år | 1t 57m | USA | thriller, romantikk</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj92382727edd44959a11a75767d893041`
  - **HTML:** `<div id="obj92382727edd44959a11a75767d893041" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj87f3e2677dc34d5494e3617389c36a76`
  - **HTML:** `<div id="obj87f3e2677dc34d5494e3617389c36a76" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/en-nasjon-i-sjakk/1972"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/en-nasjon-i-sjakk/1972" data-target-partial="true">En nasjon i sjakk</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objb110649f6a124a56915d26e76314f318_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.2 fra 25 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objb110649f6a124a56915d26e76314f318_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">15 år | 1t 55m | Norge | thriller, spenning, action</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objb110649f6a124a56915d26e76314f318_showtimes > .my-3 > .kinoclub`
  - **HTML:** `<div class="kinoclub">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj6d69c3540f3e4ec38b56eb28daec74cd`
  - **HTML:** `<div id="obj6d69c3540f3e4ec38b56eb28daec74cd" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj99aa44c03e8a40caa5038fb1eb10af90`
  - **HTML:** `<div id="obj99aa44c03e8a40caa5038fb1eb10af90" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/kjarast/2787"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/kjarast/2787" data-target-partial="true">Kjærast</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7e8e3c1d56bb4880b8361ce1bd1addfc_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 25 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7e8e3c1d56bb4880b8361ce1bd1addfc_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 1t 54m | Norge </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objec637612248f4efbb8feb8eaa5dbd035`
  - **HTML:** `<div id="objec637612248f4efbb8feb8eaa5dbd035" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objee416b72bf2e4620996dd098579e9f70_adform`
  - **HTML:** `<div id="objee416b72bf2e4620996dd098579e9f70_adform" class="w-100 mb-2 text-center py-3 adform mt-5 mb-4" style="overflow: hidden; min-height: 332px; background-color: rgb(244, 244, 244); border-radius: 8px;"><span class="adform-text">rekl…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj0c047f4a2e5948a2a3878f431183b5ed`
  - **HTML:** `<div id="obj0c047f4a2e5948a2a3878f431183b5ed" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/resident-evil/2881"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/resident-evil/2881" data-target-partial="true">Resident Evil</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obje31aa2ed3f8c4206972cb9d74c5845c3_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.1 fra 34 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obje31aa2ed3f8c4206972cb9d74c5845c3_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">15 år | 1t 33m | USA | sci-fi, horror</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obje244c77ea3a64be196506830fa2bd5f8`
  - **HTML:** `<div id="obje244c77ea3a64be196506830fa2bd5f8" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj00c984ac62ea4491b1f1cf338583d788`
  - **HTML:** `<div id="obj00c984ac62ea4491b1f1cf338583d788" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj62ee9e27bffd46ffa957c046c5ca2e9a_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/drapet-pa-benjamin-hermansen/2864" data-target-partial="true">Drapet på Benjamin Hermansen</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj62ee9e27bffd46ffa957c046c5ca2e9a_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">15 år | 1t 36m | Norge | drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja16b06cf58c5477c87e102dec40b0e83`
  - **HTML:** `<div id="obja16b06cf58c5477c87e102dec40b0e83" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj79a8006c8f784fa5a6dbf454380a6ccf`
  - **HTML:** `<div id="obj79a8006c8f784fa5a6dbf454380a6ccf" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/butterfly/2784"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/butterfly/2784" data-target-partial="true">Butterfly</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja6bd67d65c8a46efa45061f8d24b3099_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja6bd67d65c8a46efa45061f8d24b3099_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 1t 57m | Norge, Spania | drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj10d2a8252e0e4ef89dadfd9564a9f986`
  - **HTML:** `<div id="obj10d2a8252e0e4ef89dadfd9564a9f986" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj589959d898aa46e486f084b1e5b5b7c9`
  - **HTML:** `<div id="obj589959d898aa46e486f084b1e5b5b7c9" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/the-odyssey/2654"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/the-odyssey/2654" data-target-partial="true">The Odyssey</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj6b1246e98830431c81cc226dc1e9ff63_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.3 fra 172 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj6b1246e98830431c81cc226dc1e9ff63_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 2t 52m | USA </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj54bd8065dde74def8f4f9eea06355a41`
  - **HTML:** `<div id="obj54bd8065dde74def8f4f9eea06355a41" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objde07944378ba4e1f9230748e8ae8d84a`
  - **HTML:** `<div id="objde07944378ba4e1f9230748e8ae8d84a" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4f0209d5733d45a3840e57d30a19f1d8_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/sauen-shaun-gardens-farbannelse/2644" data-target-partial="true">Sauen Shaun - Gårdens fårbannelse</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4f0209d5733d45a3840e57d30a19f1d8_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">Tillatt for alle | 1t 21m | Storbritannia | familiefilm, barnefilm, animasjon</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj3e9cec6a4d464f1c866c43cbe038c587`
  - **HTML:** `<div id="obj3e9cec6a4d464f1c866c43cbe038c587" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objb2935e27081f4600aea2247fe5e9a780`
  - **HTML:** `<div id="objb2935e27081f4600aea2247fe5e9a780" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/digger/2969"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/digger/2969" data-target-partial="true">Digger</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8ce0e30a3f644fd2a3c8ff69572f4f1a_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 2t 09m | USA | komedie, drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj27ed294477d74c3ca8e268ffe9f0b01a`
  - **HTML:** `<div id="obj27ed294477d74c3ca8e268ffe9f0b01a" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obje05240401a0d48ccbc2e18532e161fac`
  - **HTML:** `<div id="obje05240401a0d48ccbc2e18532e161fac" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj1469e13b6f8f445c87b18464308960a3_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/spider-man-brand-new-day/2653" data-target-partial="true">Spider-Man: Brand New Day</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj1469e13b6f8f445c87b18464308960a3_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.6 fra 129 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj1469e13b6f8f445c87b18464308960a3_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 2t 25m | USA | eventyr, superheltfilm</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj97a24cb581e9412c9bbacf3525c4ccb0`
  - **HTML:** `<div id="obj97a24cb581e9412c9bbacf3525c4ccb0" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4dd47280203c49eb8a6c8e5a35b79b1f`
  - **HTML:** `<div id="obj4dd47280203c49eb8a6c8e5a35b79b1f" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/heart-of-the-beast/2856"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/heart-of-the-beast/2856" data-target-partial="true">Heart of the Beast</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objc2afed4dedcb4c149f06bfe26d6624c2_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4 fra 3 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objc2afed4dedcb4c149f06bfe26d6624c2_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 1t 41m | USA | action</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj77c83cc5c2b4472c9d06012fc8236e78`
  - **HTML:** `<div id="obj77c83cc5c2b4472c9d06012fc8236e78" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4511c0c0abd34c76a405afe696fcb7a7`
  - **HTML:** `<div id="obj4511c0c0abd34c76a405afe696fcb7a7" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/harila-nadelose-fjell/2877"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/harila-nadelose-fjell/2877" data-target-partial="true">Harila - Nådeløse fjell</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj759aa61a21a64455a6a8595422f131f1_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.5 fra 11 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj759aa61a21a64455a6a8595422f131f1_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 1t 42m | Norge | dokumentar</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj5cb19091eef0419aa3daff97d8591c1d`
  - **HTML:** `<div id="obj5cb19091eef0419aa3daff97d8591c1d" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj00d69a3b70d64a20bd8ef00049e0a885`
  - **HTML:** `<div id="obj00d69a3b70d64a20bd8ef00049e0a885" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja72009951b11412e838b6b031482700d_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/practical-magic-family-legacy/2880" data-target-partial="true">Practical Magic: Family Legacy</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja72009951b11412e838b6b031482700d_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 11 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja72009951b11412e838b6b031482700d_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 2t 09m | USA | romantikk, komedie, fantasy</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj54db56896c21498295d8d26300acd79e`
  - **HTML:** `<div id="obj54db56896c21498295d8d26300acd79e" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obje9b835475bc944e891113d72e6fe26fc`
  - **HTML:** `<div id="obje9b835475bc944e891113d72e6fe26fc" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/fjord/2876"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/fjord/2876" data-target-partial="true">Fjord</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj908b058cd215479886ed0e1114ee8d9e_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.6 fra 24 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj908b058cd215479886ed0e1114ee8d9e_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 2t 25m | Norge, Romania | drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj908b058cd215479886ed0e1114ee8d9e_showtimes > .my-3 > .kinoclub`
  - **HTML:** `<div class="kinoclub">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj49d62071f07348da9f3e5f4f890c66cd`
  - **HTML:** `<div id="obj49d62071f07348da9f3e5f4f890c66cd" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj567545b74719443fb1293e3349946df1`
  - **HTML:** `<div id="obj567545b74719443fb1293e3349946df1" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/glemselens-oy/2882"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/glemselens-oy/2882" data-target-partial="true">Glemselens øy</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objc93f091368544dfe8d9f499f8751f995_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 4 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objc93f091368544dfe8d9f499f8751f995_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 1t 49m | USA | barnefilm, animasjon</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objca9bd9f69b3948f8be75495ab6fc3d8d`
  - **HTML:** `<div id="objca9bd9f69b3948f8be75495ab6fc3d8d" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj857055b8eef64659952e109e9b5bfac5`
  - **HTML:** `<div id="obj857055b8eef64659952e109e9b5bfac5" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/paw-patrol-dinofilmen/2782"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/paw-patrol-dinofilmen/2782" data-target-partial="true">Paw Patrol: Dinofilmen</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj071a3903897a4ce080e99b26aa526630_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.9 fra 8 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj071a3903897a4ce080e99b26aa526630_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">Tillatt for alle | 1t 28m | USA | barnefilm, animasjon</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj5ecc7655816146ecb0e7f6e7aca3f54d`
  - **HTML:** `<div id="obj5ecc7655816146ecb0e7f6e7aca3f54d" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objcdccef8ef9d24d16a639f93160c191ee`
  - **HTML:** `<div id="objcdccef8ef9d24d16a639f93160c191ee" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.movie-title.font-weight-semi-bold[href="/f/the-uprising/2908"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/the-uprising/2908" data-target-partial="true">The Uprising</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objfcf24009212749928438f372adb19836_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objfcf24009212749928438f372adb19836_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">15 år | 2t 08m | England | drama, action</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objf3f0293d969b46a7993ae8ea1d4f3387`
  - **HTML:** `<div id="objf3f0293d969b46a7993ae8ea1d4f3387" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj3a85e896a478429584be8811096bd820`
  - **HTML:** `<div id="obj3a85e896a478429584be8811096bd820" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/lave-forventninger/2862"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/lave-forventninger/2862" data-target-partial="true">Lave forventninger</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj96c58902f69f46d1b10a8d764e72cdf1_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.3 fra 6 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj96c58902f69f46d1b10a8d764e72cdf1_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 1t 45m | Norge | drama</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objdcf077a8e9af47649692a0e12a9edfc7`
  - **HTML:** `<div id="objdcf077a8e9af47649692a0e12a9edfc7" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objacbeab962e054a9692946edffac0fed3`
  - **HTML:** `<div id="objacbeab962e054a9692946edffac0fed3" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/reisen-til-piemonte/2910"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/reisen-til-piemonte/2910" data-target-partial="true">Reisen til Piemonte</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8e7d2260fa8b48f6b0fd36253b242e3c_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 4.7 fra 3 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8e7d2260fa8b48f6b0fd36253b242e3c_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">Tillatt for alle | 1t 51m | Sverige </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4ac8776e60d246f584922afd81322d03`
  - **HTML:** `<div id="obj4ac8776e60d246f584922afd81322d03" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja9044514c09c462eb4dcb774472f4eb7`
  - **HTML:** `<div id="obja9044514c09c462eb4dcb774472f4eb7" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj38c5bc6d506a4738ac42039b4a37b68e_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/coyote-vs-acme-per-ulv-pa-saken/2906" data-target-partial="true">Coyote vs. Acme - Per Ulv på saken</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj38c5bc6d506a4738ac42039b4a37b68e_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.7 fra 3 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj38c5bc6d506a4738ac42039b4a37b68e_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">6 år | 1t 43m | USA | komedie, eventyr, animasjon</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj21ffd56b3a5847fa83dce2f7384af86c`
  - **HTML:** `<div id="obj21ffd56b3a5847fa83dce2f7384af86c" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj219c759bfe874446afe5ed0a60ee7131`
  - **HTML:** `<div id="obj219c759bfe874446afe5ed0a60ee7131" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/spa-weekend/2879"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/spa-weekend/2879" data-target-partial="true">Spa Weekend</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj1ad3641a65b046e29bffd9f7d965b82f_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 3 fra 2 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj1ad3641a65b046e29bffd9f7d965b82f_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">6 år | 1t 37m | USA | komedie</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj8e87a7cac7484d65a76a3746add8dccc`
  - **HTML:** `<div id="obj8e87a7cac7484d65a76a3746add8dccc" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj3cef9c5a1e9f4d3c91d35e582420e616`
  - **HTML:** `<div id="obj3cef9c5a1e9f4d3c91d35e582420e616" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/pensjonskuppet/2645"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/pensjonskuppet/2645" data-target-partial="true">Pensjonskuppet</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj9be6156b1ce14d49a986378825aee921_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 5.6 fra 10 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj9be6156b1ce14d49a986378825aee921_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | 1t 50m | Norge | komedie, action</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objbac0bf744bab41ccb937c3c87e2e9041`
  - **HTML:** `<div id="objbac0bf744bab41ccb937c3c87e2e9041" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objd2ff16a3c5394a808bf9dabd8b1f4c47`
  - **HTML:** `<div id="objd2ff16a3c5394a808bf9dabd8b1f4c47" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj148ce07fdd3140ac8d2d4614268288da_showtimes > .movie-title.font-weight-semi-bold.h5`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/avengers-endgame-encore/2958" data-target-partial="true">Avengers: Endgame Encore</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj148ce07fdd3140ac8d2d4614268288da_showtimes > .rating-container.mt-3.d-flex > .rating-text.text-muted.ml-2`
  - **HTML:** `<div class="rating-text ml-2 text-muted d-flex align-items-center"> 6 fra 6 brukere </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj148ce07fdd3140ac8d2d4614268288da_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">12 år | 3t 03m | USA </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj292f213badf9450a88f488ab52811cc0`
  - **HTML:** `<div id="obj292f213badf9450a88f488ab52811cc0" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objb8ee967bb6d643a9ac25b11505efd04f`
  - **HTML:** `<div id="objb8ee967bb6d643a9ac25b11505efd04f" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/blue-lock-buru-rokku/2901"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/blue-lock-buru-rokku/2901" data-target-partial="true">Blue Lock (Burû Rokku)</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj566575ae4beb494fa5d60e9d2d9870e2_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">9 år | Japan | fantasy, action</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj7b566a90f6ab4b86bb763c6483375c87`
  - **HTML:** `<div id="obj7b566a90f6ab4b86bb763c6483375c87" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj286c939b757044f98520f2a45a817763`
  - **HTML:** `<div id="obj286c939b757044f98520f2a45a817763" class="card2_item d-flex align-items-start flex-column align-content-between flex-wrap ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href="/f/spiralis/2884"]`
  - **HTML:** `<a class="movie-title h5 font-weight-semi-bold" href="/f/spiralis/2884" data-target-partial="true">Spiralis</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obja6ce2de3bdf94bd093027174d9578721_showtimes > p`
  - **HTML:** `<p class="mt-3" style="font-size: 14px;line-height: 1.42!important;">6 år | 1t 39m | Frankrike, Belgia | komedie, familiefilm, barnefilm</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj9cb15428dbb5429aafdf3b17706d99b5`
  - **HTML:** `<div id="obj9cb15428dbb5429aafdf3b17706d99b5" class="col-12 py-0 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.obj14c4d446bb594471908f87851056afef > section > .flex-row.mb-4.font-weight-semi-bold`
  - **HTML:** `<div class=" font-weight-semi-bold mb-4 d-flex justify-content-between align-items-center flex-row "> <div class="align-items-center block_title_header d-flex w-100 pb-0"> Ukentlig toppfilmliste </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.top-list_subtitle`
  - **HTML:** `<div class="top-list_subtitle pt-0 pb-0">Uke av <span class="text-capitalize">september 25 - oktober 02</span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objc59d940960394834bfa9af78d2cc848d > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj83d6947e39d74b9ba94ce8f2497377ba > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj221b9eb4317f4af7bcb4a64a3559bec6 > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="min-height:initial;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objf416aaaac5a443b4b58794c2b919f771 > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#objd2380ce2724447749f5770ea6784e057 > .top-card_wrapper.d-flex`
  - **HTML:** `<div class="top-card_wrapper d-flex" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#obj4ee08d145fb64a958db9e6bdc153ad44 > .top-card_wrapper.d-flex`
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

- **Target:** `#obj4fdb0e4ba7d549159224e302e41fa52c_dates`
  - **HTML:** `<select class="btn filter-dropdown rounded undefined" id="obj4fdb0e4ba7d549159224e302e41fa52c_dates">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#obj4fdb0e4ba7d549159224e302e41fa52c_sortOptions`
  - **HTML:** `<select class="btn filter-dropdown rounded " id="obj4fdb0e4ba7d549159224e302e41fa52c_sortOptions">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#obj4fdb0e4ba7d549159224e302e41fa52c_screens`
  - **HTML:** `<select class="btn filter-dropdown rounded " id="obj4fdb0e4ba7d549159224e302e41fa52c_screens">`
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

