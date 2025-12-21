# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-21T00:58:49.219Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `.text_singleline.large-3.large-abs-3:nth-child(3) > .font-PTSans.singleline.tm14 > a:nth-child(9)`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.large-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 7

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-pLWMu-ifr`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, iframe[sandbox="allow-scripts"]`
- `#offer_a1497afa7b72e30cd6d4-0`
- `#offer_037afc8bd4ecded26c9c-0`
- `#offer_f0f2acfc54a2daddd6d4-0`
- `#offer_bcd0b82e4b18f9cb81e8-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 8

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22) > .tm36`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .tm36`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(37) > .t42.tm21`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(38) > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39) > .t42.tm21`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `#offer_a1497afa7b72e30cd6d4-0, img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.mainMenu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `#offer_a1497afa7b72e30cd6d4-0, a`
- `.tm17.font-PTSans.singleline > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 92

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-pLWMu-ifr, #kino_text1`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-pLWMu-ifr, #kino_logo`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-pLWMu-ifr, #tagline`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-pLWMu-ifr, #date`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-pLWMu-ifr, #cta`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-pLWMu-ifr, #videodiv_prev`
- `#notice-10121651 > .content > h2`
- `time[datetime="2025-12-20T17:03:57.000Z"]`
- `div[title="Én omkommet i brann i Fetsund"] > h2`
- `time[datetime="2025-12-20T21:17:05.000Z"]`
- `#notice-10121593 > .content > h2`
- `time[datetime="2025-12-20T15:04:55.000Z"]`
- `#notice-10121526 > .content > h2`
- `time[datetime="2025-12-20T13:55:31.000Z"]`
- `#notice-10121525 > .content > h2`
- `time[datetime="2025-12-20T13:59:07.000Z"]`
- `#notice-10121458 > .content > h2`
- `#notice-10121458 > .content > .meta`
- `#notice-10121431 > .content > h2`
- `#notice-10121431 > .content > .meta`
- `div[title="Babyer dør av kulde på Gaza"] > h2`
- `div[title="Babyer dør av kulde på Gaza"] > .meta`
- `#notice-10121425 > .content > h2`
- `#notice-10121425 > .content > .meta`
- `#notice-10121424 > .content > h2`
- `#notice-10121424 > .content > .meta`
- `#notice-10121423 > .content > h2`
- `#notice-10121423 > .content > .meta`
- `div[title="Bolsonaro skal opereres"] > h2`
- `div[title="Bolsonaro skal opereres"] > .meta`
- `#notice-10121421 > .content > h2`
- `#notice-10121421 > .content > .meta`
- `div[title="Regler mot avskoging utsettes"] > h2`
- `div[title="Regler mot avskoging utsettes"] > .meta`
- `#notice-10121271 > .content > h2`
- `#notice-10121271 > .content > .meta`
- `#notice-10121196 > .content > h2`
- `#notice-10121196 > .content > .meta`
- `div[title="Anker ikke dommen mot Arne Bye"] > h2`
- `div[title="Anker ikke dommen mot Arne Bye"] > .meta`
- `#notice-10120896 > .content > h2`
- `#notice-10120896 > .content > .meta`
- `#notice-10120792 > .content > h2`
- `#notice-10120792 > .content > .meta`
- `#notice-10120791 > .content > h2`
- `#notice-10120791 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `#offer_a1497afa7b72e30cd6d4-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `#offer_037afc8bd4ecded26c9c-0, img`
- `#offer_037afc8bd4ecded26c9c-0, .pw-text`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.row.large-12.small-12:nth-child(21)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22)`
- `#offer_f0f2acfc54a2daddd6d4-0, img`
- `#offer_f0f2acfc54a2daddd6d4-0, .pw-subtitle`
- `#offer_f0f2acfc54a2daddd6d4-0, .pw-offer`
- `#offer_f0f2acfc54a2daddd6d4-0, #pw-countdown`
- `.row.large-12.small-12:nth-child(24)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.t40.tm26.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(32)`
- `.hasContentPadding.mobile-hasContentPadding.bg-quaternary:nth-child(33)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(34)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(37)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(38)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(39)`
- `#offer_bcd0b82e4b18f9cb81e8-0, img`
- `#offer_bcd0b82e4b18f9cb81e8-0, .pw-text`
- `.powered-by`
