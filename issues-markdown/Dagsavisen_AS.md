# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-05-14T01:09:00.003Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 6

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 9

#### Affected Elements:

- `.t20`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(61) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(69) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(72) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(73) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(75) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10295897 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 112

#### Affected Elements:

- `h1`
- `div[title="Netflix øker prisene i Norge"] > h2`
- `div[title="Netflix øker prisene i Norge"] > .meta`
- `#notice-10346457 > .content > h2`
- `#notice-10346457 > .content > .meta`
- `#notice-10346412 > .content > h2`
- `#notice-10346412 > .content > .meta`
- `div[title="Putin bytter ut to guvernører"] > h2`
- `div[title="Putin bytter ut to guvernører"] > .meta`
- `#notice-10346410 > .content > h2`
- `#notice-10346410 > .content > .meta`
- `#notice-10346402 > .content > h2`
- `#notice-10346402 > .content > .meta`
- `#notice-10346374 > .content > h2`
- `#notice-10346374 > .content > .meta`
- `#notice-10346373 > .content > h2`
- `#notice-10346373 > .content > .meta`
- `#notice-10346365 > .content > h2`
- `#notice-10346365 > .content > .meta`
- `#notice-10346292 > .content > h2`
- `#notice-10346292 > .content > .meta`
- `div[title="Ni russebusser varsler søksmål"] > h2`
- `div[title="Ni russebusser varsler søksmål"] > .meta`
- `div[title="Trump har ankommet Beijing"] > h2`
- `time[datetime="2026-05-13T12:10:30.000Z"]`
- `div[title="Høibys fotlenke-anke avvist"] > h2`
- `time[datetime="2026-05-13T12:09:30.000Z"]`
- `div[title="Totalforbud mot elsparkesykler"] > h2`
- `time[datetime="2026-05-13T11:11:55.000Z"]`
- `div[title="Sverige senker bensinavgiften"] > h2`
- `time[datetime="2026-05-13T09:47:39.000Z"]`
- `#notice-10345175 > .content > h2`
- `time[datetime="2026-05-13T09:40:26.000Z"]`
- `div[title="Obelix vinner mot polske våpen"] > h2`
- `time[datetime="2026-05-13T09:31:51.000Z"]`
- `div[title="God sjanse for varm sommer"] > h2`
- `time[datetime="2026-05-13T09:42:19.000Z"]`
- `#notice-10344511 > .content > h2`
- `time[datetime="2026-05-13T08:32:43.000Z"]`
- `#notice-10344249 > .content > h2`
- `time[datetime="2026-05-13T06:43:16.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `iframe[data-testid="embed-iframe"], .EpisodeOrShowWidget_coverArtContainer__65Ei9`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `iframe[data-testid="embed-iframe"], label`
- `.row.large-12.small-12:nth-child(11)`
- `.bg-tertiary.color_mobile_bg-tertiary.mobile_no_border_side`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articlescroller-header`
- `#article_list_10280166 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(14)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(22)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.row.large-12.small-12:nth-child(27)`
- `#article_list_10184114 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(72)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(75)`
- `.powered-by`
