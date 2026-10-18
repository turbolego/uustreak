# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-10-18T03:42:57.297Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 11

#### Affected Elements:

- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(6) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(12) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(18) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(24) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(30) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(36) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(42) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(48) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(54) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(60) > .google-ad.display-label.large-abs-12 > .ad-label`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 5

#### Affected Elements:

- `#offer_e64a1fe71b6292cd3ab0-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_4992f7477e94a7ea214a-0`
- `#offer_4992f7477e94a7ea214a-1`
- `#offer_e64a1fe71b6292cd3ab0-1`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- `#offer_e64a1fe71b6292cd3ab0-0, img`
- `#offer_4992f7477e94a7ea214a-0, img`
- `#offer_4992f7477e94a7ea214a-1, img`
- `#offer_e64a1fe71b6292cd3ab0-1, img`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.customMenu2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- `#google_ads_iframe_\/38586112\/dagsavisen\/toppbanner_0, #aw0`
- `#offer_e64a1fe71b6292cd3ab0-0, a`
- `#offer_4992f7477e94a7ea214a-0, a`
- `#offer_4992f7477e94a7ea214a-1, a`
- `#offer_e64a1fe71b6292cd3ab0-1, a`
- `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 151

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="Minst 17 døde etter trengsel"] > h2`
- `time[datetime="2026-10-17T18:44:13.000Z"]`
- `div[title="Trikk og bil kolliderte"] > h2`
- `time[datetime="2026-10-17T17:45:21.000Z"]`
- `div[title="To siktet for hallikvirksomhet"] > h2`
- `time[datetime="2026-10-17T16:12:17.000Z"]`
- `div[title="Nye opptøyer i Albania"] > h2`
- `time[datetime="2026-10-17T15:49:30.000Z"]`
- `div[title="Buss for tog kjørte seg fast"] > h2`
- `time[datetime="2026-10-17T15:07:38.000Z"]`
- `#notice-10587961 > .content > h2`
- `time[datetime="2026-10-17T13:32:11.000Z"]`
- `div[title="Advarer mot dørselger-svindel"] > h2`
- `time[datetime="2026-10-17T13:30:41.000Z"]`
- `#notice-10587945 > .content > h2`
- `time[datetime="2026-10-17T12:31:06.000Z"]`
- `#notice-10587844 > .content > h2`
- `#notice-10587844 > .content > .meta`
- `div[title="Paven utskrives fra sykehus"] > h2`
- `div[title="Paven utskrives fra sykehus"] > .meta`
- `#notice-10587814 > .content > h2`
- `#notice-10587814 > .content > .meta`
- `div[title="Trump-topp på sverigebesøk"] > h2`
- `div[title="Trump-topp på sverigebesøk"] > .meta`
- `#notice-10587784 > .content > h2`
- `time[datetime="2026-10-17T06:29:13.000Z"]`
- `#notice-10587783 > .content > h2`
- `time[datetime="2026-10-17T06:27:22.000Z"]`
- `#notice-10587782 > .content > h2`
- `#notice-10587782 > .content > .meta`
- `div[title="Sudan: 30 drept i droneangrep"] > h2`
- `time[datetime="2026-10-16T20:01:19.000Z"]`
- `div[title="Rødgrønn enighet om tannhelse"] > h2`
- `time[datetime="2026-10-16T20:00:06.000Z"]`
- `#notice-10587731 > .content > h2`
- `time[datetime="2026-10-16T18:46:49.000Z"]`
- `div[title="Paven har pratet med Putin"] > h2`
- `time[datetime="2026-10-16T16:26:33.000Z"]`
- `#notice-10587566 > .content > h2`
- `time[datetime="2026-10-16T18:04:44.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(3)`
- `#offer_e64a1fe71b6292cd3ab0-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(5)`
- `.row.large-12.small-12:nth-child(6) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(7)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `.has-row-header`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12) > .google-ad.display-label.large-abs-12 > .ad-label`
- `#offer_4992f7477e94a7ea214a-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(15)`
- `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(18) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.color_mobile_no_bg_color.row.large-12:nth-child(19)`
- `.row.large-12.small-12:nth-child(20)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(22)`
- `.row.large-12.small-12:nth-child(23)`
- `.row.large-12.small-12:nth-child(24) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(25)`
- `.row.large-12.small-12:nth-child(26)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(28)`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(30) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(31)`
- `.lab-scrollbox-headline.t28.font-InterTight`
- `#markup_10478983 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10478981"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10453098 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453097"] > .mobile_text_align_align-center.align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10453072 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10453073"] > .mobile_text_align_align-center.align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440435 > .fullwidthTarget.content > unite-player,#status-container`
- `.color_mobile_no_bg_color.mobile_text_align_align-center.align-center > .floatingTextSubset.media > .floatingText`
- `#markup_10440421 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440420"] > .mobile_text_align_align-center.align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440430 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440429"] > .mobile_text_align_align-center.align-center.content > .floatingTextSubset.media > .floatingText`
- `#markup_10440438 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10440437"] > .mobile_text_align_align-center.align-center.content > .floatingTextSubset.media > .floatingText`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `.row.large-12.small-12:nth-child(35)`
- `.row.large-12.small-12:nth-child(36) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.color_mobile_no_bg_color.row.large-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `#offer_4992f7477e94a7ea214a-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(45)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(48) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(49)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.bg-white.color_mobile_bg-white.hasContentPadding:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(60) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(61)`
- `.color_mobile_no_bg_color.row.large-12:nth-child(62)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.row.large-12.small-12:nth-child(72)`
- `.row.large-12.small-12:nth-child(73)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.row.large-12.small-12:nth-child(76)`
- `.row.large-12.small-12:nth-child(77)`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(79)`
- `.row.large-12.small-12:nth-child(80)`
- `.row.large-12.small-12:nth-child(81)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(83)`
- `.row.large-12.small-12:nth-child(84)`
- `.row.large-12.small-12:nth-child(85)`
- `.bg-black`
- `.row.large-12.small-12:nth-child(87)`
- `#offer_e64a1fe71b6292cd3ab0-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(89)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
