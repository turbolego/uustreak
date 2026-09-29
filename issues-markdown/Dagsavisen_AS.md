# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-09-29T10:55:48.801Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `#offer_b426df421caf545e51f5-1, .pw-button`
- `#offer_b426df421caf545e51f5-2, .pw-button`
- `#offer_b426df421caf545e51f5-0, .pw-button`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 5

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`
- `#offer_b426df421caf545e51f5-1`
- `#offer_b426df421caf545e51f5-2`
- `#offer_b426df421caf545e51f5-0`
- `#offer_35cc7e60bc8ecd3914d0-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.has-row-header.bg-white.color_mobile_bg-white > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(29) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.customMenu2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 145

#### Affected Elements:

- `h1`
- `#notice-10556004 > .content > h2`
- `#notice-10556004 > .content > .meta`
- `div[title="Datasentre eies av utlendinger"] > h2`
- `div[title="Datasentre eies av utlendinger"] > .meta`
- `div[title="Fifa angriper Uefa"] > h2`
- `div[title="Fifa angriper Uefa"] > .meta`
- `div[title="Russiske angrep mot Kyiv"] > h2`
- `div[title="Russiske angrep mot Kyiv"] > .meta`
- `div[title="Paven ut mot Trump"] > h2`
- `div[title="Paven ut mot Trump"] > .meta`
- `#notice-10555170 > .content > h2`
- `#notice-10555170 > .content > .meta`
- `div[title="Skagerrak 2 reparert"] > h2`
- `div[title="Skagerrak 2 reparert"] > .meta`
- `div[title="Dyr dag for diesel"] > h2`
- `div[title="Dyr dag for diesel"] > .meta`
- `#notice-10555048 > .content > h2`
- `#notice-10555048 > .content > .meta`
- `div[title="Nordmann pågrepet i Vietnam"] > h2`
- `div[title="Nordmann pågrepet i Vietnam"] > .meta`
- `#notice-10554988 > .content > h2`
- `#notice-10554988 > .content > .meta`
- `#notice-10554891 > .content > h2`
- `#notice-10554891 > .content > .meta`
- `#notice-10554285 > .content > h2`
- `#notice-10554285 > .content > .meta`
- `div[title="Flere banker setter opp renten"] > h2`
- `div[title="Flere banker setter opp renten"] > .meta`
- `div[title="Flere tok toget i sommer"] > h2`
- `div[title="Flere tok toget i sommer"] > .meta`
- `div[title="Ordførerposter glapp for AfD"] > h2`
- `div[title="Ordførerposter glapp for AfD"] > .meta`
- `div[title="Oljeprisen skyter i været"] > h2`
- `div[title="Oljeprisen skyter i været"] > .meta`
- `#notice-10553263 > .content > h2`
- `#notice-10553263 > .content > .meta`
- `div[title="Framgang for Le Pens parti"] > h2`
- `div[title="Framgang for Le Pens parti"] > .meta`
- `div[title="Serbias president går av"] > h2`
- `div[title="Serbias president går av"] > .meta`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(5)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(7)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(8)`
- `.has-row-header.bg-white.color_mobile_bg-white`
- `.row.large-12.small-12:nth-child(10)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(11)`
- `#offer_b426df421caf545e51f5-1, img`
- `#offer_b426df421caf545e51f5-1, .pw-text`
- `.row.large-12.small-12:nth-child(15)`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(19)`
- `.bg-black`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.row.large-12.small-12:nth-child(23)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(26)`
- `.row.large-12.small-12:nth-child(27)`
- `.row.large-12.small-12:nth-child(28)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.lab-scrollbox-headline.t28.font-InterTight`
- `#markup_10478983 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10478981"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10453098 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453097"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10453072 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453073"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440435 > .fullwidthTarget.content > unite-player,#status-container`
- `.color_mobile_no_bg_color.align-center.mobile_text_align_align-center > .floatingTextSubset.media > .floatingText`
- `#markup_10440421 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440420"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440430 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440429"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440438 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440437"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
- `.row.large-12.small-12:nth-child(33)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#offer_b426df421caf545e51f5-2, img`
- `#offer_b426df421caf545e51f5-2, .pw-text`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(43)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(44)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(49)`
- `.row.large-12.small-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.bg-white.color_mobile_bg-white.hasContentPadding:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `#offer_b426df421caf545e51f5-0, img`
- `#offer_b426df421caf545e51f5-0, .pw-text`
- `.row.large-12.small-12:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.row.large-12.small-12:nth-child(76)`
- `.row.large-12.small-12:nth-child(77)`
- `.articlescroller-header.tm20.font-PTSans`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(79)`
- `.row.large-12.small-12:nth-child(80)`
- `.row.large-12.small-12:nth-child(81)`
- `.row.large-12.small-12:nth-child(82)`
- `.row.large-12.small-12:nth-child(83)`
- `.row.large-12.small-12:nth-child(84)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(85)`
- `.row.large-12.small-12:nth-child(86)`
- `.row.large-12.small-12:nth-child(87)`
- `.row.large-12.small-12:nth-child(88)`
- `#offer_35cc7e60bc8ecd3914d0-0, img`
- `#offer_35cc7e60bc8ecd3914d0-0, .pw-subtitle`
- `#offer_35cc7e60bc8ecd3914d0-0, .pw-offer`
- `#offer_35cc7e60bc8ecd3914d0-0, #pw-countdown`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
