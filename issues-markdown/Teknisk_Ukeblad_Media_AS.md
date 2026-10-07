# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-10-07T09:07:50.744Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
- `#sp_message_iframe_1517700, .acceptButton`
- `#sp_message_iframe_1517700, .rejectButton`
- `#sp_message_iframe_1517700, .customiseButton`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.has-row-header.color_mobile_no_bg_color.row:nth-child(1) > h5`
- `.border-side-bottom > .t44`
- `.border-bg-primary > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 5

#### Affected Elements:

- `a[data-k5a-url="https://www.tu.no/a/7144000"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.tu.no/a/5706069"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.tu.no/a/7141083"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `img[width="80"]`
- `img[width="128"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.grid-vas-center`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 237

#### Affected Elements:

- `h1`
- `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
- `.has-row-header.color_mobile_no_bg_color.row:nth-child(1) > h5`
- `a[data-k5a-url="https://www.tu.no/a/7143593"] > .media`
- `.t41.align-left.mobile_text_align_align-left`
- `a[data-k5a-url="https://www.tu.no/a/7144301"] > .media`
- `.tm26.align-left.mobile_text_align_align-left`
- `.align-left.mobile_text_align_align-left.t35`
- `#notice-7144343 > .content > h2`
- `time[datetime="2026-10-07T08:56:24.000Z"]`
- `#notice-7144332 > .content > h2`
- `time[datetime="2026-10-07T08:53:17.000Z"]`
- `#notice-7144318 > .content > h2`
- `time[datetime="2026-10-07T08:32:53.000Z"]`
- `#notice-7144315 > .content > h2`
- `time[datetime="2026-10-07T08:30:23.000Z"]`
- `#notice-7144312 > .content > h2`
- `time[datetime="2026-10-07T08:26:26.000Z"]`
- `#notice-7144311 > .content > h2`
- `time[datetime="2026-10-07T08:25:12.000Z"]`
- `#notice-7144303 > .content > h2`
- `time[datetime="2026-10-07T08:18:16.000Z"]`
- `div[title="Enova-midler halveres"] > h2`
- `time[datetime="2026-10-07T09:02:42.000Z"]`
- `#notice-7144299 > .content > h2`
- `time[datetime="2026-10-07T08:14:58.000Z"]`
- `#notice-7144298 > .content > h2`
- `time[datetime="2026-10-07T08:12:18.000Z"]`
- `#notice-7144294 > .content > h2`
- `time[datetime="2026-10-07T08:11:08.000Z"]`
- `#notice-7144291 > .content > h2`
- `time[datetime="2026-10-07T08:10:01.000Z"]`
- `#notice-7144277 > .content > h2`
- `time[datetime="2026-10-07T07:57:28.000Z"]`
- `#notice-7144274 > .content > h2`
- `time[datetime="2026-10-07T07:56:08.000Z"]`
- `div[title="Her er lekkasjene"] > h2`
- `time[datetime="2026-10-07T07:42:54.000Z"]`
- `.row.large-12.small-12:nth-child(3)`
- `a[data-k5a-url="https://www.tu.no/a/7143946"] > .kicker.below`
- `a[data-k5a-url="https://www.tu.no/a/7143946"] > .t48.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7144014"] > .media`
- `.t37.tm25.headline`
- `a[data-k5a-url="https://www.tu.no/a/7144242"] > .desktop-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7144242"] > .kicker.below`
- `.t60`
- `a[data-k5a-url="https://www.tu.no/a/7142874"] > .kicker.below`
- `.t46`
- `article[data-tag="utenriks,ntb,equinor,energi"]`
- `a[data-k5a-url="https://www.digi.no/a/7144043"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7144043"] > .t29.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7143512"] > .t20.kicker.below`
- `a[data-k5a-url="https://www.tu.no/a/7143512"] > .t52.headline[itemprop="headline"]`
- `article[data-tag="energi,eu,gass"]`
- `.row.large-12.small-12:nth-child(12)`
- `.row.large-12.small-12:nth-child(13) > .display-label.google-ad.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/5703283"] > .t22.kicker.below`
- `a[data-k5a-url="https://www.tu.no/a/5703283"] > .t42.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(14) > .columns.large-6.large-abs-6`
- `.row.large-12.small-12:nth-child(15)`
- `.row.large-12.small-12:nth-child(16)`
- `.adZone-parallax > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/7140849"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7140849"] > .kicker.below`
- `.t62.tm30.headline`
- `#markup_7143679 > .fullwidthTarget.content > unite-player,#status-container`
- `.row.large-12.small-12:nth-child(19) > .large-3.columns.large-abs-3 > .row.large-12.small-12 > .text_singleline.large-abs-3.large-12`
- `a[data-k5a-url="https://www.tu.no/a/7142449"] > .tm22.t32.headline`
- `article[data-tag="klima,gruvedrift,debatt"]`
- `a[data-k5a-url="https://www.tu.no/a/7143395"] > .tm24.t36.headline`
- `.t44.tm21.headline`
- `a[data-k5a-url="https://www.tu.no/a/7142400"] > .media`
- `.t16`
- `.t51`
- `a[data-k5a-url="https://www.tu.no/a/7142846"] > .desktop-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7142846"] > .kicker.below`
- `a[data-k5a-url="https://www.tu.no/a/7142846"] > .t32.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(24) > .display-label.google-ad.disable-initial-load > .ad-label`
- `.row.large-12.small-12:nth-child(25)`
- `a[data-k5a-url="https://www.tu.no/a/5704548"] > .kicker.below`
- `a[data-k5a-url="https://www.tu.no/a/5704548"] > .t36.headline[itemprop="headline"]`
- `#markup_7143309 > .fullwidthTarget.content > unite-player,#status-container`
- `.row.large-12.small-12:nth-child(26) > .large-3.columns.large-abs-3 > .row.large-12.small-12 > .text_singleline.large-abs-3.large-12`
- `.row.large-12.small-12:nth-child(27) > .display-label.google-ad.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/7143261"] > .kicker.below`
- `a[data-k5a-url="https://www.tu.no/a/7143261"] > .t29.headline[itemprop="headline"]`
- `article[data-tag="innenriks,samferdsel,jernbane"]`
- `.tm38`
- `.row.large-12.small-12:nth-child(29)`
- `a[data-k5a-url="https://www.tu.no/a/7142612"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7142612"] > .headline[itemprop="headline"]`
- `article[data-instance="7142777"]`
- `.t58`
- `a[data-k5a-url="https://www.digi.no/a/7142495"] > .t45.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(32)`
- `.row.large-12.small-12:nth-child(33)`
- `.row.large-12.small-12:nth-child(34)`
- `a[data-k5a-url="https://www.digi.no/a/7142727"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7142291"] > .media`
- `.tm33.t37.headline`
- `a[data-k5a-url="https://www.tu.no/a/7140996"] > .desktop-floatLeft.media`
- `.t39.tm22.headline`
- `.row.large-12.small-12:nth-child(37)`
- `.tm20`
- `.t33.tm28.headline`
- `a[data-k5a-url="https://www.tu.no/a/6445917"] > .media`
- `.t25.tm28.headline`
- `a[data-k5a-url="https://www.digi.no/a/7141726"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.digi.no/a/7141726"] > .tm17.kicker.below`
- `a[data-k5a-url="https://www.digi.no/a/7141726"] > .t29.tm23.headline`
- `a[data-k5a-url="https://www.digi.no/a/7142036"] > .mobile-floatLeft.media`
- `.tm21.t30.headline`
- `a[data-k5a-url="https://www.tu.no/a/7142302"] > .media`
- `.t55.tm26.headline`
- `a[data-k5a-url="https://www.tu.no/a/7142239"] > .kicker.below`
- `.tm31`
- `a[data-k5a-url="https://www.tu.no/a/7141830"] > .tm17.kicker.below`
- `.tm22.t30.headline`
- `article[data-tag="nito,arbeidsliv,kommentar"]`
- `a[data-k5a-url="https://www.tu.no/a/7141633"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7141633"] > .kicker.below`
- `.t38.tm29.headline`
- `article[data-instance="7141950"]`
- `a[data-k5a-url="https://www.digi.no/a/7141845"] > .t20.kicker.below`
- `.t33.tm23.headline`
- `article[data-tag="kunstig intelligens,debatt"]`
- `a[data-k5a-url="https://www.tu.no/a/7141917"] > .mobile-floatLeft.media`
- `.t17`
- `.tm25.t29.headline`
- `article[data-tag="samferdsel,klima"]`
- `article[data-tag="eu,industri"]`
- `article[data-instance="7142185"]`
- `a[data-k5a-url="https://www.digi.no/a/5705943"] > .t27.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/7141598"] > .t23.kicker.below`
- `.t52.tm29.headline`
- `.t31.tm25.headline`
- `.row.large-12.small-12:nth-child(46)`
- `a[data-k5a-url="https://www.tu.no/a/5704819"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5704819"] > .t39.tm28.headline`
- `a[data-k5a-url="https://www.tu.no/a/7141196"] > .mobile-floatLeft.media`
- `.t33.tm27.headline`
- `.row.large-12.small-12:nth-child(48)`
- `article[data-tag="romfart,andøya"]`
- `a[data-k5a-url="https://www.digi.no/a/7141732"] > .kicker.below`
- `a[data-k5a-url="https://www.digi.no/a/7141732"] > .t31.headline[itemprop="headline"]`
- `article[data-tag="it,datasenter"]`
- `article[data-tag="telekom,telenor"]`
- `.t26.kicker.below`
- `.t62.tm36.headline`
- `a[data-k5a-url="https://www.tu.no/a/5706079"] > .t45.headline[itemprop="headline"]`
- `.t25.kicker.below`
- `.t43`
- `a[data-k5a-url="https://www.tu.no/a/6445883"] > .media`
- `.tm37`
- `a[data-k5a-url="https://www.digi.no/a/7141342"] > .t18.kicker.below`
- `.tm32.t34.headline`
- `a[data-k5a-url="https://www.tu.no/a/7141395"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7141395"] > .t19.kicker.below`
- `.tm32.t32.headline`
- `a[data-k5a-url="https://www.digi.no/a/5704754"] > .kicker.below`
- `a[data-k5a-url="https://www.digi.no/a/5704754"] > .t38.headline[itemprop="headline"]`
- `.tm36.t32.headline`
- `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t18.kicker.below`
- `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t39.tm28.headline`
- `article[data-tag="energi"]`
- `a[data-k5a-url="https://www.tu.no/a/7141123"] > .t32.tm29.headline`
- `.desktop-floatRight.mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/5705912"] > .kicker.below`
- `.t23.tm25.headline`
- `.border-side-bottom > .t44`
- `#markup_7141430 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_7141431 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_7141432 > .fullwidthTarget.content > unite-player,#status-container`
- `unite-player[muted=""],#status-container`
- `.t30.kicker.below`
- `.t86`
- `.row.large-12.small-12:nth-child(59)`
- `a[data-k5a-url="https://www.tu.no/a/7140700"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7140700"] > .t23.kicker.below`
- `.t49`
- `a[data-k5a-url="https://www.tu.no/a/7140602"] > .kicker.below`
- `a[data-k5a-url="https://www.tu.no/a/7140602"] > .tm22.t32.headline`
- `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t24.kicker.below`
- `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t55.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/5705812"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/5705812"] > .t21.kicker.below`
- `.tm42`
- `article[data-tag="ntb,utenriks,forsvar"]`
- `a[data-k5a-url="https://www.tu.no/a/7140762"] > .t37.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/5705935"] > .media`
- `.t25.tm27.headline`
- `a[data-k5a-url="https://www.tu.no/a/5702936"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5706021"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5706021"] > .t30.headline[itemprop="headline"]`
- `.t28.tm25.headline`
- `a[data-k5a-url="https://www.tu.no/a/5705849"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5705849"] > .t37.headline[itemprop="headline"]`
- `.border-bg-primary > h5`
- `a[data-k5a-url="https://www.tu.no/a/5710359"] > .media`
- `.t48.align-left.mobile_text_align_align-left`
- `a[data-k5a-url="https://www.tu.no/a/5711518"] > .kicker.below`
- `a[data-k5a-url="https://www.tu.no/a/5711518"] > .t34.headline[itemprop="headline"]`
- `.tm16`
- `a[data-k5a-url="https://www.tu.no/a/5711211"] > .t33.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/5706087"] > .t38.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/5708027"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5708027"] > .headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/5710099"] > .media`
- `.t23.tm17.kicker`
- `.t71`
- `.row.large-12.small-12:nth-child(69)`
- `a[data-k5a-url="https://www.digi.no/a/5706114"] > .mobile-floatLeft.media`
- `.tm19`
- `a[data-k5a-url="https://www.digi.no/a/5706114"] > .tm24.t36.headline`
- `a[data-k5a-url="https://www.tu.no/a/5710212"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5710212"] > .kicker.below`
- `.tm45`
- `a[data-k5a-url="https://www.tu.no/a/5709650"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5709650"] > .kicker.below`
- `.t37.tm29.headline`
- `a[data-k5a-url="https://www.digi.no/a/5707478"] > .kicker.below`
- `a[data-k5a-url="https://www.digi.no/a/5707478"] > .t31.headline[itemprop="headline"]`
- `article[data-instance="5709799"]`
- `a[data-k5a-url="https://www.tu.no/a/5708221"] > .t21.kicker.below`
- `.tm35`
- `a[data-k5a-url="https://www.tu.no/a/5708049"] > .desktop-floatLeft.media`
- `.row.large-12.small-12:nth-child(73)`
- `a[data-k5a-url="https://www.digi.no/a/5706297"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/5706297"] > .t19.kicker.below`
- `.t40.tm36.headline`
- `a[data-k5a-url="https://www.digi.no/a/5707369"] > .mobile-floatLeft.media`
- `.t28.tm29.headline`
- `a[data-k5a-url="https://www.tu.no/a/5710238"] > .media`
- `article[data-tag="industri,debatt,co2,energi"]`
- `a[data-k5a-url="https://www.tu.no/a/5709319"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5709319"] > .t40.tm23.headline`
- `.powered-by`
