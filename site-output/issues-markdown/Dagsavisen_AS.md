# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-07-01T10:59:10.488Z
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
- **Count:** 6

#### Affected Elements:

- `.has-row-header.color_mobile_no_bg_color.hasContentPadding > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(59) > h5`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(73) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10397501 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 110

#### Affected Elements:

- `h1`
- `#notice-10422854 > .content > h2`
- `time[datetime="2026-07-01T09:37:18.000Z"]`
- `#notice-10422850 > .content > h2`
- `time[datetime="2026-07-01T09:34:19.000Z"]`
- `#notice-10422742 > .content > h2`
- `time[datetime="2026-07-01T08:56:02.000Z"]`
- `#notice-10422732 > .content > h2`
- `time[datetime="2026-07-01T08:47:20.000Z"]`
- `#notice-10422555 > .content > h2`
- `time[datetime="2026-07-01T07:48:36.000Z"]`
- `#notice-10422360 > .content > h2`
- `#notice-10422360 > .content > .meta`
- `#notice-10422359 > .content > h2`
- `#notice-10422359 > .content > .meta`
- `div[title="VM-jubel ga jordskjelvutslag"] > h2`
- `div[title="VM-jubel ga jordskjelvutslag"] > .meta`
- `#notice-10422357 > .content > h2`
- `#notice-10422357 > .content > .meta`
- `div[title="Geir Håøy til Chemring Nobel"] > h2`
- `time[datetime="2026-06-30T20:06:40.000Z"]`
- `div[title="Oslo: Brann i boligblokk"] > h2`
- `time[datetime="2026-06-30T19:01:10.000Z"]`
- `div[title="Venezuela: 1943 bekreftet døde"] > h2`
- `time[datetime="2026-06-30T18:46:35.000Z"]`
- `#notice-10422160 > .content > h2`
- `time[datetime="2026-06-30T18:30:06.000Z"]`
- `div[title="Nusa ga Norge ledelsen"] > h2`
- `time[datetime="2026-06-30T18:10:03.000Z"]`
- `div[title="Elfenbenskysten rammet av flom"] > h2`
- `time[datetime="2026-06-30T16:13:51.000Z"]`
- `div[title="Ungarn: Ny varmerekord"] > h2`
- `time[datetime="2026-06-30T15:09:25.000Z"]`
- `div[title="Tak raste: 14 barn omkom"] > h2`
- `time[datetime="2026-06-30T16:13:17.000Z"]`
- `div[title="Lange køer før 16-delsfinalen"] > h2`
- `time[datetime="2026-06-30T14:41:55.000Z"]`
- `div[title="Tilbakekaller campingstol"] > h2`
- `time[datetime="2026-06-30T13:16:45.000Z"]`
- `div[title="Boligbygg raste sammen i Aten"] > h2`
- `time[datetime="2026-06-30T12:48:52.000Z"]`
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
- `#article_list_10372156 > .content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(13)`
- `.has-row-header.color_mobile_no_bg_color.hasContentPadding`
- `.row.large-12.small-12:nth-child(16)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `.row.large-12.small-12:nth-child(18)`
- `.row.large-12.small-12:nth-child(19)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(23)`
- `.page-content > .border-bg-quaternary.mobile_border-bg-quaternary.hasBorder`
- `.row.large-12.small-12:nth-child(26)`
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
- `.row.large-12.small-12:nth-child(41)`
- `#article_list_10230577 > .content > .lab-scrollbox-headline.font-weight-normal.m-font-weight-normal`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(48)`
- `.color_mobile_no_bg_color.content > .lab-scrollbox-headline.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(51)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(59)`
- `.row.large-12.small-12:nth-child(60)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(73)`
- `.powered-by`
