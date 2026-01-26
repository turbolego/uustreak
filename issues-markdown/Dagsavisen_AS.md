# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-01-26T00:40:45.307Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-3.large-abs-3:nth-child(3) > .font-PTSans.singleline.tm14 > a:nth-child(9)`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- `.border_width_0 > h5`
- `.large-8.large-abs-8.text_singleline > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 11

#### Affected Elements:

- `.border_width_0 > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13) > .tm36`
- `.t35`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19) > .tm36`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > .tm36`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.t28.tm15`
- `.t28.tm21`
- `.tm36.color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52) > .t42.tm21`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53) > .t42.tm21`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10151715 > .fullwidthTarget.content > unite-player,mux-player[metadata-video-title="Hva vil Trump med Venezuela?"],media-theme,media-controller`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `a[href$="mailto:kb@dagsavisen.no"]`
- `.font-PTSans.singleline.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 91

#### Affected Elements:

- `h1`
- `#notice-10168082 > .content > h2`
- `#notice-10168082 > .content > .meta`
- `div[title="Obama: – Drapet er en tragedie"] > h2`
- `div[title="Obama: – Drapet er en tragedie"] > .meta`
- `div[title="Død mann funnet i Namdalseid "] > h2`
- `div[title="Død mann funnet i Namdalseid "] > .meta`
- `div[title="Ny duo trekker seg fra MGP"] > h2`
- `div[title="Ny duo trekker seg fra MGP"] > .meta`
- `#notice-10167544 > .content > h2`
- `#notice-10167544 > .content > .meta`
- `div[title="Trump hyller britiske soldater"] > h2`
- `div[title="Trump hyller britiske soldater"] > .meta`
- `div[title="Støre: Respektløst av Trump"] > h2`
- `div[title="Støre: Respektløst av Trump"] > .meta`
- `div[title="Ny skyteepisode i Minneapolis"] > h2`
- `div[title="Ny skyteepisode i Minneapolis"] > .meta`
- `#notice-10167249 > .content > h2`
- `#notice-10167249 > .content > .meta`
- `#notice-10167170 > .content > h2`
- `#notice-10167170 > .content > .meta`
- `#notice-10167002 > .content > h2`
- `#notice-10167002 > .content > .meta`
- `#notice-10166947 > .content > h2`
- `#notice-10166947 > .content > .meta`
- `#notice-10166934 > .content > h2`
- `#notice-10166934 > .content > .meta`
- `#notice-10166920 > .content > h2`
- `#notice-10166920 > .content > .meta`
- `#notice-10166859 > .content > h2`
- `#notice-10166859 > .content > .meta`
- `#notice-10166858 > .content > h2`
- `#notice-10166858 > .content > .meta`
- `#notice-10166835 > .content > h2`
- `#notice-10166835 > .content > .meta`
- `#notice-10166834 > .content > h2`
- `#notice-10166834 > .content > .meta`
- `div[title="Iran advarer mot angrep"] > h2`
- `div[title="Iran advarer mot angrep"] > .meta`
- `#notice-10166751 > .content > h2`
- `#notice-10166751 > .content > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(8)`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(13)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.t35`
- `article[data-instance="10151714"] > .content > .media > .floatingText`
- `.row.large-12.small-12:nth-child(18)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(19)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(21)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.row.large-12.small-12:nth-child(24)`
- `article[data-instance="10163093"] > .content > a[itemprop="url"][rel=""] > .t22.below.kicker`
- `.tm23`
- `span[data-lab-text_size_desktop="65"]`
- `.row.large-12.small-12:nth-child(26) > .columns.large-4.large-abs-4`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.page-content > .bg-primary.color_mobile_bg-primary.hasContentPadding`
- `.tm26.t40.hasTextPadding`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(38)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(39)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(41)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(42)`
- `.border_width_5.border_width_mobile_5.border-bg-quaternary`
- `.mobile_no_border_color.bg-quaternary.color_mobile_bg-quaternary`
- `.row.large-12.small-12:nth-child(46)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(48)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(49)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(52)`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(53)`
- `.powered-by`
