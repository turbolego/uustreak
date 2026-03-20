# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-20T00:43:35.779Z
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
- **Count:** 5

#### Affected Elements:

- `.t20`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(51) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(55) > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.mainMenu`
- `#markup_10195540 > .fullwidthTarget.content > unite-player,mux-player,media-theme,media-controller`

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
- **Count:** 90

#### Affected Elements:

- `h1`
- `div[title="Finn-Erik Vinje er død"] > h2`
- `time[datetime="2026-03-19T21:36:27.000Z"]`
- `#notice-10260229 > .content > h2`
- `time[datetime="2026-03-19T20:16:07.000Z"]`
- `#notice-10260228 > .content > h2`
- `time[datetime="2026-03-19T20:15:08.000Z"]`
- `div[title="FHI advarer om svindel-epost"] > h2`
- `time[datetime="2026-03-19T19:28:03.000Z"]`
- `#notice-10260193 > .content > h2`
- `time[datetime="2026-03-19T18:58:41.000Z"]`
- `div[title="Iran anfrep raffineri i Haifa"] > h2`
- `time[datetime="2026-03-19T17:29:12.000Z"]`
- `div[title="Hormuzstredet: Seks vil bidra"] > h2`
- `time[datetime="2026-03-19T17:28:09.000Z"]`
- `div[title="Rettssaken mot Høiby er ferdig"] > h2`
- `time[datetime="2026-03-19T15:53:37.000Z"]`
- `div[title="Ambassadebomben: Tre løslates"] > h2`
- `time[datetime="2026-03-19T15:28:44.000Z"]`
- `div[title="Libanon: Over 1000 drept"] > h2`
- `time[datetime="2026-03-19T14:44:18.000Z"]`
- `#notice-10259724 > .content > h2`
- `time[datetime="2026-03-19T14:07:22.000Z"]`
- `#notice-10259157 > .content > h2`
- `#notice-10259157 > .content > .meta`
- `#notice-10258781 > .content > h2`
- `#notice-10258781 > .content > .meta`
- `div[title="Undret rente i Sverige"] > h2`
- `div[title="Undret rente i Sverige"] > .meta`
- `#notice-10258535 > .content > h2`
- `#notice-10258535 > .content > .meta`
- `#notice-10258448 > .content > h2`
- `#notice-10258448 > .content > .meta`
- `#notice-10258301 > .content > h2`
- `#notice-10258301 > .content > .meta`
- `div[title="Store skader på gassanlegg"] > h2`
- `time[datetime="2026-03-18T19:50:39.000Z"]`
- `div[title="USA: Holder renten uendret"] > h2`
- `time[datetime="2026-03-18T18:16:16.000Z"]`
- `div[title="Rekordbeslag av håndgranater"] > h2`
- `time[datetime="2026-03-18T18:07:22.000Z"]`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `iframe[data-testid="embed-iframe"], h1`
- `iframe[data-testid="embed-iframe"], .encore-text-body-medium.encore-internal-color-text-subdued.e-91185-text`
- `iframe[data-testid="embed-iframe"], a[dir="auto"]`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12)`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(14)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(31)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.font-PTSans`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-quaternary.color_mobile_bg-quaternary.hasContentPadding:nth-child(42)`
- `.row.large-12.small-12:nth-child(43)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(44)`
- `.row.large-12.small-12:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(51)`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(53)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(55)`
- `.powered-by`
