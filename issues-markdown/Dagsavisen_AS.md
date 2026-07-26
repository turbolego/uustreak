# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-07-26T13:18:07.298Z
**URL:** [https://www.dagsavisen.no/#](https://www.dagsavisen.no/#)
**Total Violations:** 7

## Violation Details

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
- **Count:** 1

#### Affected Elements:

- `iframe[data-testid="embed-iframe"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(16) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(46) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(66) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(70) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(71) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.mainMenu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 133

#### Affected Elements:

- `h1`
- `div[title="Skogbrann svært nær Bordeaux"] > h2`
- `time[datetime="2026-07-26T11:16:30.000Z"]`
- `div[title="Kraftig tyfon har nådd Kina"] > h2`
- `time[datetime="2026-07-26T08:32:23.000Z"]`
- `div[title="Fortsatt stor skogbrannfare"] > h2`
- `time[datetime="2026-07-26T08:19:10.000Z"]`
- `#notice-10454902 > .content > h2`
- `time[datetime="2026-07-26T08:21:17.000Z"]`
- `div[title="Mann omkom i arbeidsulykke "] > h2`
- `time[datetime="2026-07-25T15:54:52.000Z"]`
- `div[title="Småfly styrtet inn i bolig"] > h2`
- `time[datetime="2026-07-25T13:55:21.000Z"]`
- `div[title="Ramones får Hollywood-stjerne"] > h2`
- `time[datetime="2026-07-25T12:27:52.000Z"]`
- `#notice-10454733 > .content > h2`
- `time[datetime="2026-07-25T12:27:15.000Z"]`
- `#notice-10454565 > .content > h2`
- `time[datetime="2026-07-25T08:11:45.000Z"]`
- `#notice-10454553 > .content > h2`
- `time[datetime="2026-07-25T06:28:08.000Z"]`
- `#notice-10454552 > .content > h2`
- `time[datetime="2026-07-25T06:27:17.000Z"]`
- `#notice-10454551 > .content > h2`
- `time[datetime="2026-07-25T06:26:47.000Z"]`
- `div[title="USA skjøt mot skip i Omanbukta"] > h2`
- `time[datetime="2026-07-25T06:26:10.000Z"]`
- `#notice-10454549 > .content > h2`
- `time[datetime="2026-07-25T06:25:56.000Z"]`
- `div[title="Tester ebolavaksine"] > h2`
- `time[datetime="2026-07-24T19:56:24.000Z"]`
- `div[title="Venezuela trekker seg fra ICC"] > h2`
- `time[datetime="2026-07-24T19:54:08.000Z"]`
- `div[title="Ny norsk sparerekord"] > h2`
- `time[datetime="2026-07-24T18:11:55.000Z"]`
- `#notice-10454440 > .content > h2`
- `time[datetime="2026-07-24T18:10:26.000Z"]`
- `div[title="Skudd løsnet under slagsmål"] > h2`
- `time[datetime="2026-07-24T19:47:04.000Z"]`
- `div[title="Lier: Livløs person funnet"] > h2`
- `time[datetime="2026-07-24T14:59:08.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(12)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(14)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.t28.lab-scrollbox-headline.font-weight-normal`
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
- `.page-content > .border_width_no_border_width.border_width_mobile_no_border_width.mobile_no_border_color`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(26)`
- `.bg-black.color_mobile_bg-black.lab-scrollbox-headline`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(1)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(2)`
- `.tm19.color_mobile_no_bg_color.primary > .t14[data-lab-text_size_desktop="14"]`
- `span[data-lab-text_size_desktop="27"]`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(4)`
- `span[data-lab-text_size_mobile="17"]`
- `.tm19.color_mobile_no_bg_color.primary > .font-weight-bold.m-font-weight-bold[data-lab-font_weight_mobile="font-weight-bold"]`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(6)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(7)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(8)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(9)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(10)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(11)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(12)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(13)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(14)`
- `.bg-black.color_mobile_bg-black.hasContentPadding > .scroll-container.swipehelper.snap-container-x > .scroll-item.snap-element:nth-child(15)`
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
- `.color_mobile_no_bg_color.row.large-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(65)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(69)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary:nth-child(70)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(71)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
