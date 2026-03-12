# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-03-12T03:28:40.169Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`

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
- **Count:** 4

#### Affected Elements:

- `#offer_0fb8716b04a01d76c458-0`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`
- `#markup_10212819 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"]`
- `#offer_03e5d4db8ab8972ef0d4-0`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 7

#### Affected Elements:

- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary > h5`
- `.t20`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(14) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32) > h5`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(58) > h5`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(60) > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `#offer_0fb8716b04a01d76c458-0, img`
- `#offer_03e5d4db8ab8972ef0d4-0, img`

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
- **Count:** 5

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/toppbanner_0, #aw0`
- `#offer_0fb8716b04a01d76c458-0, a`
- `#offer_03e5d4db8ab8972ef0d4-0, a`
- `a[href$="mailto:kb@dagsavisen.no"]`
- `.tm17.singleline.font-PTSans > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 104

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `#notice-10246863 > .content > h2`
- `#notice-10246863 > .content > .meta`
- `#notice-10246840 > .content > h2`
- `#notice-10246840 > .content > .meta`
- `#notice-10246798 > .content > h2`
- `#notice-10246798 > .content > .meta`
- `#notice-10246420 > .content > h2`
- `#notice-10246420 > .content > .meta`
- `#notice-10246405 > .content > h2`
- `#notice-10246405 > .content > .meta`
- `div[title="Lønnsøkning for DNB-sjef"] > h2`
- `div[title="Lønnsøkning for DNB-sjef"] > .meta`
- `#notice-10246215 > .content > h2`
- `#notice-10246215 > .content > .meta`
- `div[title="To pågrepet for innsidehandel"] > h2`
- `time[datetime="2026-03-11T12:25:20.000Z"]`
- `div[title="Alle norske Tui-gjester hjemme"] > h2`
- `time[datetime="2026-03-11T12:15:05.000Z"]`
- `div[title="Tore Strømøy lanserer podkast"] > h2`
- `time[datetime="2026-03-11T10:09:13.000Z"]`
- `div[title="Sveits: Seks døde i bussbrann"] > h2`
- `time[datetime="2026-03-11T10:01:26.000Z"]`
- `#notice-10245236 > .content > h2`
- `time[datetime="2026-03-11T10:35:21.000Z"]`
- `#notice-10245232 > .content > h2`
- `time[datetime="2026-03-11T08:52:02.000Z"]`
- `div[title="ADHD-medisin: Eksplosiv økning"] > h2`
- `time[datetime="2026-03-11T08:50:40.000Z"]`
- `#notice-10245120 > .content > h2`
- `time[datetime="2026-03-11T08:11:33.000Z"]`
- `div[title="Elkem kutter 300 stillinger"] > h2`
- `time[datetime="2026-03-11T07:55:14.000Z"]`
- `div[title="UP varsler storkontroll"] > h2`
- `time[datetime="2026-03-11T06:30:13.000Z"]`
- `div[title="Beirut: angrep mot boligbygg"] > h2`
- `time[datetime="2026-03-11T06:09:55.000Z"]`
- `#notice-10244915 > .content > h2`
- `time[datetime="2026-03-11T06:49:59.000Z"]`
- `#notice-10244914 > .content > h2`
- `time[datetime="2026-03-11T06:06:26.000Z"]`
- `.has-row-header.bg-quaternary.color_mobile_bg-quaternary`
- `.row.large-12.small-12:nth-child(3)`
- `#offer_0fb8716b04a01d76c458-0, div[ng-show="!terminalError"]`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `#markup_10246594 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], label`
- `#markup_10212819 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], h1`
- `#markup_10212819 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], .encore-text-body-small.encore-internal-color-text-subdued.e-91185-text`
- `#markup_10212819 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], a[dir="auto"]`
- `#markup_10212819 > .fullwidthTarget.content > iframe[data-testid="embed-iframe"][width="100%"][height="352"], label`
- `.row.large-12.small-12:nth-child(7)`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(11)`
- `.mobile_no_border_side.hasBorder.mobile-hasBorder`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10180103 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(14)`
- `#article_list_9904930 > .inner.fullwidthTarget.content`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10187147 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(18)`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(21)`
- `.border_width_no_border_width.border_width_mobile_no_border_width.color_mobile_no_bg_color`
- `.row.large-12.small-12:nth-child(23)`
- `#offer_03e5d4db8ab8972ef0d4-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10184114 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(31)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(36)`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#article_list_10230577 > .content > .font-weight-normal.m-font-weight-normal.t25`
- `#article_list_10230577 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(42)`
- `.bg-tertiary.color_mobile_bg-tertiary.hasContentPadding:nth-child(43)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(44)`
- `.has-row-header.hasContentPadding.mobile-hasContentPadding:nth-child(46)`
- `.color_mobile_no_bg_color.content > .headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(48)`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.bg-tertiary.color_mobile_bg-tertiary.has-row-header:nth-child(60)`
- `.border-bg-quaternary.mobile_border-bg-quaternary.border-side-top`
- `.powered-by`
