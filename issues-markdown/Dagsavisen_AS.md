# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2025-12-15T00:38:23.484Z
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

- `.text_singleline.large-3.large-abs-3:nth-child(3) > .font-PTSans.singleline.t14 > a:nth-child(9)`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 9

#### Affected Elements:

- `.bg-primary > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12) > h5`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21) > h5`
- `.t28`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side > .color_mobile_no_bg_color`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43) > .tm21.t42`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(46) > .tm21.t42`

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
- **Count:** 85

#### Affected Elements:

- `h1`
- `#notice-10109592 > .content > h2`
- `#notice-10109592 > .content > .meta`
- `#notice-10109589 > .content > h2`
- `#notice-10109589 > .content > .meta`
- `#notice-10109469 > .content > h2`
- `#notice-10109469 > .content > .meta`
- `#notice-10109295 > .content > h2`
- `#notice-10109295 > .content > .meta`
- `div[title="Støre fordømmer terrorangrepet"] > h2`
- `div[title="Støre fordømmer terrorangrepet"] > .meta`
- `#notice-10109247 > .content > h2`
- `#notice-10109247 > .content > .meta`
- `#notice-10109166 > .content > h2`
- `time[datetime="2025-12-14T11:22:04.000Z"]`
- `#notice-10109032 > .content > h2`
- `time[datetime="2025-12-14T07:07:15.000Z"]`
- `#notice-10109031 > .content > h2`
- `time[datetime="2025-12-14T07:04:52.000Z"]`
- `#notice-10109030 > .content > h2`
- `time[datetime="2025-12-14T07:03:29.000Z"]`
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
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.bg-primary`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(11)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(12)`
- `.border-side-top.mobile_border-side-top.border-bg-quaternary`
- `.articlescroller-header`
- `.articles`
- `.row.large-12.small-12:nth-child(16)`
- `.row.large-12.small-12:nth-child(17)`
- `.border_width_12.border_width_mobile_12.border-bg-quaternary:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(21)`
- `.row.large-12.small-12:nth-child(23)`
- `article[data-instance="10106164"]`
- `article[data-instance="10099737"] > .content > a[itemprop="url"][rel=""] > .below.kicker`
- `.tm24`
- `span[data-lab-text_size_desktop="45"]`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.tm26.t40.font-weight-bold`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(1) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(2) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(3) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(4) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `li[data-hostname="www.dagsavisen.no"][data-source-display-name="www.dagsavisen.no"][data-tab-content=""]:nth-child(5) > .kicker-position-hideKicker.paywall-position-hidePaywallLabel.text > a > h4`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(39)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(41)`
- `.border_width_12.border_width_mobile_12.mobile_no_border_side`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(43)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.border-side-bottom.mobile_border-side-bottom.desktop-space-outsideTop-none:nth-child(46)`
- `.powered-by`
