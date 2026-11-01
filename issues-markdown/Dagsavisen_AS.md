# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-01T05:04:03.681Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 10

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

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.text_singleline.large-8.large-abs-8 > .singleline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 5

#### Affected Elements:

- `#offer_e64a1fe71b6292cd3ab0-0`
- `#offer_4992f7477e94a7ea214a-0`
- `iframe[data-testid="embed-iframe"]`
- `#offer_4992f7477e94a7ea214a-1`
- `#offer_e64a1fe71b6292cd3ab0-1`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.customMenu2`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 162

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
- `div[title="Mann døde på treningsseenter"] > h2`
- `div[title="Mann døde på treningsseenter"] > .meta`
- `#notice-10610920 > .content > h2`
- `#notice-10610920 > .content > .meta`
- `#notice-10610891 > .content > h2`
- `#notice-10610891 > .content > .meta`
- `#notice-10610876 > .content > h2`
- `#notice-10610876 > .content > .meta`
- `#notice-10610783 > .content > h2`
- `time[datetime="2026-10-31T10:48:49.000Z"]`
- `#notice-10610755 > .content > h2`
- `time[datetime="2026-10-31T09:51:09.000Z"]`
- `#notice-10610752 > .content > h2`
- `time[datetime="2026-10-31T09:11:54.000Z"]`
- `#notice-10610732 > .content > h2`
- `time[datetime="2026-10-31T08:45:44.000Z"]`
- `#notice-10610698 > .content > h2`
- `time[datetime="2026-10-31T07:52:00.000Z"]`
- `#notice-10610680 > .content > h2`
- `time[datetime="2026-10-31T07:13:56.000Z"]`
- `#notice-10610679 > .content > h2`
- `time[datetime="2026-10-31T07:13:12.000Z"]`
- `#notice-10610678 > .content > h2`
- `time[datetime="2026-10-31T08:51:55.000Z"]`
- `div[title="Blodrød dag på Wall Street"] > h2`
- `div[title="Blodrød dag på Wall Street"] > .meta`
- `div[title="Mann skutt i Innlandet"] > h2`
- `div[title="Mann skutt i Innlandet"] > .meta`
- `div[title="Meta granskes i Storbritannia"] > h2`
- `div[title="Meta granskes i Storbritannia"] > .meta`
- `#notice-10610607 > .content > h2`
- `#notice-10610607 > .content > .meta`
- `#notice-10610603 > .content > h2`
- `#notice-10610603 > .content > .meta`
- `#notice-10610389 > .content > h2`
- `#notice-10610389 > .content > .meta`
- `div[title="Langrennssjef beklager"] > h2`
- `div[title="Langrennssjef beklager"] > .meta`
- `#notice-10608980 > .content > h2`
- `time[datetime="2026-10-30T11:20:01.000Z"]`
- `.row.large-12.small-12:nth-child(2)`
- `.row.large-12.small-12:nth-child(3)`
- `.row.large-12.small-12:nth-child(4)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(5)`
- `.row.large-12.small-12:nth-child(6) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.has-row-header`
- `.row.large-12.small-12:nth-child(8)`
- `.row.large-12.small-12:nth-child(9)`
- `#offer_e64a1fe71b6292cd3ab0-0, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(11)`
- `.row.large-12.small-12:nth-child(12) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(13)`
- `#offer_4992f7477e94a7ea214a-0, div[ng-show="!terminalError"]`
- `.border-bg-quinary-light.mobile_border-bg-quinary-light.border-side-top`
- `.row.large-12.small-12:nth-child(17)`
- `.row.large-12.small-12:nth-child(18) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(20)`
- `.articlescroller-header.t25.tm18`
- `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(22)`
- `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(23)`
- `.row.large-12.small-12:nth-child(24) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(25)`
- `.lab-scrollbox-headline.t25.tm18`
- `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(27)`
- `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
- `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(29)`
- `.row.large-12.small-12:nth-child(30) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(31)`
- `.row.large-12.small-12:nth-child(32)`
- `.lab-scrollbox-headline.t28.font-InterTight`
- `#markup_10603102 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10603099"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10603074 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10603073"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10602266 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10602265"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_10603093 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="10603092"] > .content > .floatingTextSubset.media > .floatingText`
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
- `.row.large-12.small-12:nth-child(34)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(35)`
- `.row.large-12.small-12:nth-child(36) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(37)`
- `.row.large-12.small-12:nth-child(38)`
- `.row.large-12.small-12:nth-child(39)`
- `.row.large-12.small-12:nth-child(40)`
- `#offer_4992f7477e94a7ea214a-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(42) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(43)`
- `.row.large-12.small-12:nth-child(44)`
- `.row.large-12.small-12:nth-child(45)`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `.row.large-12.small-12:nth-child(48) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(49)`
- `.row.large-12.small-12:nth-child(50)`
- `.row.large-12.small-12:nth-child(51)`
- `.row.large-12.small-12:nth-child(52)`
- `.row.large-12.small-12:nth-child(53)`
- `.row.large-12.small-12:nth-child(54) > .google-ad.display-label.large-abs-12 > .ad-label`
- `.row.large-12.small-12:nth-child(55)`
- `.row.large-12.small-12:nth-child(56)`
- `.row.large-12.small-12:nth-child(57)`
- `.row.large-12.small-12:nth-child(58)`
- `.row.large-12.small-12:nth-child(59)`
- `.row.large-12.small-12:nth-child(61)`
- `.row.large-12.small-12:nth-child(62)`
- `.row.large-12.small-12:nth-child(63)`
- `.row.large-12.small-12:nth-child(64)`
- `.row.large-12.small-12:nth-child(65)`
- `.row.large-12.small-12:nth-child(66)`
- `.row.large-12.small-12:nth-child(67)`
- `.row.large-12.small-12:nth-child(68)`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `.row.large-12.small-12:nth-child(71)`
- `.row.large-12.small-12:nth-child(72)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(73)`
- `.row.large-12.small-12:nth-child(74)`
- `.row.large-12.small-12:nth-child(75)`
- `.row.large-12.small-12:nth-child(76)`
- `.row.large-12.small-12:nth-child(77)`
- `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(78)`
- `.tm20`
- `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(80)`
- `.row.large-12.small-12:nth-child(81)`
- `.row.large-12.small-12:nth-child(82)`
- `.row.large-12.small-12:nth-child(83)`
- `.row.large-12.small-12:nth-child(84)`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
- `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
- `.row.large-12.small-12:nth-child(86)`
- `.lab-scrollbox-headline.italic.m-italic`
- `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
- `.row.large-12.small-12:nth-child(88)`
- `.row.large-12.small-12:nth-child(89)`
- `.page-content > .bg-black.color_mobile_bg-black.hasContentPadding`
- `.row.large-12.small-12:nth-child(91)`
- `#offer_e64a1fe71b6292cd3ab0-1, div[ng-show="!terminalError"]`
- `.row.large-12.small-12:nth-child(93)`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
