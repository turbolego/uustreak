# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-14T00:50:33.018Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `.text_singleline.large-3.large-abs-3:nth-child(3) > .font-PTSans.singleline.t14 > a:nth-child(9)`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.large-8.large-abs-8.text_singleline > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 9

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-7uCBc-ifr`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, iframe[sandbox="allow-scripts"]`
- `#offer_037afc8bd4ecded26c9c-0`
- `#offer_037afc8bd4ecded26c9c-0, iframe`
- `#offer_3158f083f33e86776acb-0`
- `#offer_3158f083f33e86776acb-0, iframe`
- `#offer_99c62afd4bf8b8a31b7e-0`
- `#offer_99c62afd4bf8b8a31b7e-0, iframe`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 9

#### Affected Elements:

- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > h5`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(22) > h5`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(29) > .tm15`
- `.t28.tm21`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44) > .tm21.t42`

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
- **Count:** 1

#### Affected Elements:

- `.tm17.font-PTSans.singleline > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 97

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-7uCBc-ifr, #kino_text1`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-7uCBc-ifr, #kino_logo`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-7uCBc-ifr, #tagline`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-7uCBc-ifr, #date`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-7uCBc-ifr, #cta`
- `#google_ads_iframe_\/38586112\/toppbanner_0, iframe, #awxBn-qudtruhoaxxoabk-7uCBc-ifr, #videodiv_prev`
- `#notice-10108969 > .content > h2`
- `#notice-10108969 > .content > .meta`
- `#notice-10108942 > .content > h2`
- `#notice-10108942 > .content > .meta`
- `div[title="Hamas-leder skal være drept"] > h2`
- `div[title="Hamas-leder skal være drept"] > .meta`
- `div[title="Laila Bokhari er død"] > h2`
- `div[title="Laila Bokhari er død"] > .meta`
- `#notice-10108853 > .content > h2`
- `#notice-10108853 > .content > .meta`
- `#notice-10108748 > .content > h2`
- `#notice-10108748 > .content > .meta`
- `#notice-10108689 > .content > h2`
- `#notice-10108689 > .content > .meta`
- `#notice-10108647 > .content > h2`
- `#notice-10108647 > .content > .meta`
- `#notice-10108646 > .content > h2`
- `#notice-10108646 > .content > .meta`
- `#notice-10108645 > .content > h2`
- `#notice-10108645 > .content > .meta`
- `#notice-10108644 > .content > h2`
- `#notice-10108644 > .content > .meta`
- `#notice-10108643 > .content > h2`
- `#notice-10108643 > .content > .meta`
- `div[title="Mindreårig gutt omkom i brann"] > h2`
- `div[title="Mindreårig gutt omkom i brann"] > .meta`
- `div[title="Iran tar beslag i tankskip"] > h2`
- `div[title="Iran tar beslag i tankskip"] > .meta`
- `#notice-10108445 > .content > h2`
- `#notice-10108445 > .content > .meta`
- `div[title="Skogområder vernes"] > h2`
- `time[datetime="2025-12-12T13:36:31.000Z"]`
- `div[title="Statnett får millionbot"] > h2`
- `time[datetime="2025-12-12T13:31:57.000Z"]`
- `div[title="EU innfører «Temu-toll»"] > h2`
- `time[datetime="2025-12-12T12:41:38.000Z"]`
- `div[title="Gruveselskap anker dom"] > h2`
- `time[datetime="2025-12-12T12:22:39.000Z"]`
- `#notice-10107820 > .content > h2`
- `time[datetime="2025-12-12T12:21:58.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `article[data-instance="10107912"]`
- `article[data-instance="10099737"] > .content > a[itemprop="url"][rel=""] > .below.kicker`
- `span[data-lab-text_size_desktop="35"]`
- `.t45`
- `.row.large-12.small-12:nth-child(9)`
- `#offer_037afc8bd4ecded26c9c-0, img`
- `#offer_037afc8bd4ecded26c9c-0, .pw-text`
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
- `#offer_3158f083f33e86776acb-0, img`
- `#offer_3158f083f33e86776acb-0, .pw-text`
- `.row.large-12.small-12:nth-child(24)`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(29)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.has-row-header.bg-tertiary.color_mobile_bg-tertiary:nth-child(38)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(39)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(42)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(44)`
- `#offer_99c62afd4bf8b8a31b7e-0, img`
- `#offer_99c62afd4bf8b8a31b7e-0, .pw-text`
- `.powered-by`
