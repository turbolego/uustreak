# WCAG Violations Report for Dfind Consulting

**Timestamp:** 2026-10-10T08:18:55.295Z
**URL:** [https://dfindconsulting.no/](https://dfindconsulting.no/)
**Total Violations:** 2

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 6

#### Affected Elements:

- **Target:** `.post-2333`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-2333 post type-post status-publish format-standard has-post-thumbnail hentry category-guide" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.post-2329`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-2329 post type-post status-publish format-standard has-post-thumbnail hentry category-guide" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.post-2321`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-2321 post type-post status-publish format-standard has-post-thumbnail hentry category-guide category-starte-bedrift-okonomi-og-drift" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.post-2318`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-2318 post type-post status-publish format-standard has-post-thumbnail hentry category-starte-bedrift-okonomi-og-drift" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.post-2315`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-2315 post type-post status-publish format-standard has-post-thumbnail hentry category-starte-bedrift-okonomi-og-drift" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.post-2312`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-2312 post type-post status-publish format-standard has-post-thumbnail hentry category-starte-bedrift-okonomi-og-drift" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 18

#### Affected Elements:

- **Target:** `.post-2333 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
  - **HTML:** `<p>Emballasje blir ofte vurdert som en praktisk nødvendighet, men for mange bedrifter er den også en viktig del av merkevaren.</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2333 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
  - **HTML:** `<span class="elementor-post-date"> July 28, 2026 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2333 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-avatar`
  - **HTML:** `<span class="elementor-post-avatar"> No Comments </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2329 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
  - **HTML:** `<p>LinkedIn har gått fra å være en digital CV-database til å bli den viktigste plattformen for B2B-markedsføring, nettverksbygging og faglig</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2329 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
  - **HTML:** `<span class="elementor-post-date"> July 15, 2026 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2329 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-avatar`
  - **HTML:** `<span class="elementor-post-avatar"> No Comments </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2321 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
  - **HTML:** `<p>I moderne laboratorier er det de grunnleggende verktøyene som ofte avgjør hvor effektivt arbeidet kan gjennomføres. Enten det gjelder forskning,</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2321 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
  - **HTML:** `<span class="elementor-post-date"> May 4, 2026 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2321 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-avatar`
  - **HTML:** `<span class="elementor-post-avatar"> No Comments </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2318 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
  - **HTML:** `<p>Hvordan ta ut lønn i AS gjort enkelt. Lær steg, skatt og arbeidsgiveravgift, og betal deg selv riktig med full kontroll nå.</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2318 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
  - **HTML:** `<span class="elementor-post-date"> April 29, 2026 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2318 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-avatar`
  - **HTML:** `<span class="elementor-post-avatar"> No Comments </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2315 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
  - **HTML:** `<p>Hvordan ta ut lønn i AS krever korrekt rapportering og skattetrekk. Lær forskjellen på lønn og utbytte før du betaler deg selv.</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2315 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
  - **HTML:** `<span class="elementor-post-date"> April 29, 2026 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2315 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-avatar`
  - **HTML:** `<span class="elementor-post-avatar"> No Comments </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2312 > .elementor-post__card > .elementor-post__text > .elementor-post__excerpt > p`
  - **HTML:** `<p>Beste regnskapsprogram for små bedrifter gjør regnskap enklere. Se hva du bør velge for faktura, bilag, MVA og vekst.</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2312 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-date`
  - **HTML:** `<span class="elementor-post-date"> April 29, 2026 </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.post-2312 > .elementor-post__card > .elementor-post__meta-data > .elementor-post-avatar`
  - **HTML:** `<span class="elementor-post-avatar"> No Comments </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.24 (foreground color: #adadad, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

