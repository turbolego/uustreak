# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-11-12T06:22:45.534Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.border-side-bottom.mobile_border-side-bottom.has-row-header:nth-child(51) > h5`
- `.has-row-header.color_mobile_no_bg_color.row:nth-child(100) > h5`
- `.border-style-solid > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `a[data-k5a-url="https://www.tu.no/a/7182870"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"]`
- `a[data-k5a-url="https://www.tu.no/a/7179783"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"]`
- `a[data-k5a-url="https://www.tu.no/a/7146844"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"]`
- `a[data-k5a-url="https://www.tu.no/a/7141083"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"]`
- `img[width="80"]`
- `img[width="128"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.grid-vas-center`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 334

#### Affected Elements:

- `h1`
- `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/7183553"] > .media`
- `.t46.tm31.headline`
- `a[data-k5a-url="https://www.digi.no/a/7179483"] > .t62.tm36.headline`
- `.t31.tm22.below`
- `.t116`
- `a[data-k5a-url="https://www.tu.no/a/7183224"] > .desktop-floatLeft.mobile-floatLeft.media`
- `.t54.tm20.headline`
- `a[data-k5a-url="https://www.tu.no/a/7183173"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7183173"] > .t33.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7183513"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7183513"] > .t32.tm23.headline`
- `a[data-k5a-url="https://www.digi.no/a/7183320"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7183320"] > .t31.tm23.headline`
- `article[data-instance="7182870"]`
- `.row.large-12.small-12:nth-child(10)`
- `.row.large-12.small-12:nth-child(11)`
- `a[data-k5a-url="https://www.tu.no/a/7181460"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7181460"] > .t39.headline[itemprop="headline"]`
- `article[data-tag="ntb,innenriks,forsvar"]`
- `.row.large-12.small-12:nth-child(14) > .display-label.google-ad.disable-initial-load > .ad-label`
- `.row.large-12.small-12:nth-child(15)`
- `a[data-k5a-url="https://www.tu.no/a/7183145"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7183145"] > .below.kicker`
- `.t24.tm22.headline`
- `.t21.tm27.headline`
- `article[data-instance="7183294"]`
- `.adZone-parallax > .ad-label`
- `.row.large-12.small-12:nth-child(19)`
- `a[data-k5a-url="https://www.tu.no/a/7183098"] > .t42.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7181064"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181064"] > .t30.tm20.headline`
- `a[data-k5a-url="https://www.tu.no/a/7183147"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7183147"] > .tm16.t23.headline`
- `a[data-k5a-url="https://www.tu.no/a/7182874"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7182874"] > .t26.tm18.headline`
- `.t30.tm18.headline`
- `a[data-k5a-url="https://www.tu.no/a/7182985"] > .media`
- `.t29.tm26.headline`
- `a[data-k5a-url="https://www.tu.no/a/7182785"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7182785"] > .t40.tm31.headline`
- `.row.large-12.small-12:nth-child(25) > .display-label.google-ad.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.digi.no/a/7182852"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7182852"] > .t27.headline[itemprop="headline"]`
- `article[data-tag="ntb,innenriks,datasenter"]`
- `a[data-k5a-url="https://www.tu.no/a/7182755"] > .below.kicker`
- `.tm32.t33.headline`
- `a[data-k5a-url="https://www.digi.no/a/7180616"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7180616"] > .below.kicker`
- `.t56.tm37.headline`
- `a[data-k5a-url="https://www.tu.no/a/7180590"] > .headline[itemprop="headline"]`
- `article[data-tag="energi,datasenter"]`
- `.row.large-12.small-12:nth-child(29) > .display-label.google-ad.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/7179560"] > .media`
- `.row.large-12.small-12:nth-child(31)`
- `article[data-tag="klima,klimatoppmøte"]`
- `a[data-k5a-url="https://www.tu.no/a/7179450"] > .t43.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/7180740"] > .t42.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(34)`
- `article[data-tag="cyberangrep,it,cybersikkerhet"]`
- `a[data-k5a-url="https://www.tu.no/a/7181262"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181262"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7181262"] > .t32.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7182117"] > .below.kicker`
- `.tm40.t35.headline`
- `a[data-k5a-url="https://www.tu.no/a/7182421"] > .below.kicker`
- `.t34.tm26.headline`
- `.tm33.t41.headline`
- `a[data-k5a-url="https://www.digi.no/a/7182096"] > .t21.below.kicker`
- `.tm17.t33.headline`
- `a[data-k5a-url="https://www.tu.no/a/7180631"] > .t24.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7181747"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181747"] > .t29.tm20.headline`
- `a[data-k5a-url="https://www.tu.no/a/7181555"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181970"] > .media`
- `.tm17.t22.below`
- `a[data-k5a-url="https://www.tu.no/a/7181970"] > .t40.tm31.headline`
- `article[data-instance="7182247"]`
- `a[data-k5a-url="https://www.tu.no/a/7182303"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7182303"] > .t43.headline[itemprop="headline"]`
- `article[data-instance="7182010"]`
- `a[data-k5a-url="https://www.tu.no/a/7181388"] > .t30.tm20.headline`
- `a[data-k5a-url="https://www.tu.no/a/7181751"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181751"] > .tm17.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7181751"] > .t38.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7181749"] > .mobile-floatLeft.media`
- `.t21.tm17.below`
- `.t38.tm18.headline`
- `a[data-k5a-url="https://www.tu.no/a/7181952"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181952"] > .below.kicker`
- `.t39.tm26.headline`
- `article[data-tag="debatt,klima"]`
- `article[data-tag="satellitt,ntb,utenriks,telekom"]`
- `article[data-tag="debatt,automatisering"]`
- `a[data-k5a-url="https://www.tu.no/a/7181251"] > .tm19.t19.headline`
- `a[data-k5a-url="https://www.digi.no/a/7181671"] > .media`
- `.t78`
- `a[data-k5a-url="https://www.tu.no/a/7181336"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7181551"] > .t19.below.kicker`
- `.t48.tm26.headline`
- `.t14`
- `.t41.tm17.headline`
- `.tm22.t33.headline`
- `a[data-k5a-url="https://www.digi.no/a/7181185"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7181185"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7181185"] > .t43.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(50)`
- `.border-side-bottom.mobile_border-side-bottom.has-row-header:nth-child(51) > h5`
- `.tm26.t37.headline`
- `.tm29.t35.headline`
- `a[data-k5a-url="https://www.tu.no/a/7178977"] > .below.kicker`
- `.tm36.t46.headline`
- `.t33.tm25.headline`
- `article[data-tag="energi,innenriks,kraft,ntb"]`
- `a[data-k5a-url="https://www.tu.no/a/7181503"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7181503"] > .tm23.t33.headline`
- `a[data-k5a-url="https://www.tu.no/a/7180175"] > .t22.below.kicker`
- `.t48.tm25.headline`
- `a[data-k5a-url="https://www.tu.no/a/7181015"] > .desktop-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7181015"] > .t22.below.kicker`
- `.t48.tm24.headline`
- `a[data-k5a-url="https://www.digi.no/a/7181132"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7181132"] > .t32.tm23.headline`
- `article[data-instance="7181446"]`
- `a[data-k5a-url="https://www.digi.no/a/7181098"] > .t22.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7181098"] > .t51.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7181025"] > .desktop-floatLeft.media`
- `.t46.tm25.headline`
- `article[data-instance="7180664"]`
- `a[data-k5a-url="https://www.tu.no/a/7179629"] > .media`
- `.t31.tm24.headline`
- `a[data-k5a-url="https://www.digi.no/a/7178857"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181210"] > .mobile-floatLeft.media`
- `.t29.tm23.headline`
- `.t50.tm20.headline`
- `.row.large-12.small-12:nth-child(62)`
- `a[data-k5a-url="https://www.tu.no/a/7181077"] > .media`
- `.t21.tm23.headline`
- `article[data-tag="klima,oljefondet"]`
- `.t18.tm21.headline`
- `.t56.tm20.headline`
- `a[data-k5a-url="https://www.tu.no/a/7179281"] > .desktop-floatLeft.mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7179281"] > .tm17.below.kicker`
- `.t39.tm23.headline`
- `a[data-k5a-url="https://www.tu.no/a/7179706"] > .tm17.below.kicker`
- `.tm41.t37.headline`
- `a[data-k5a-url="https://www.digi.no/a/7180555"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7180555"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7180555"] > .t27.headline[itemprop="headline"]`
- `article[data-tag="datasenter,ntb,innenriks"]`
- `a[data-k5a-url="https://www.digi.no/a/7179962"] > .t22.below.kicker`
- `.t41.tm29.headline`
- `a[data-k5a-url="https://www.digi.no/a/7180635"] > .t20.below.kicker`
- `.t64`
- `a[data-k5a-url="https://www.tu.no/a/7179870"] > .desktop-floatLeft.media`
- `.t41.tm20.headline`
- `.row.large-12.small-12:nth-child(69)`
- `.row.large-12.small-12:nth-child(70)`
- `a[data-k5a-url="https://www.tu.no/a/7179760"] > .media`
- `article[data-tag="samferdsel,fra forskning"]`
- `a[data-k5a-url="https://www.tu.no/a/7178237"] > .t21.below.kicker`
- `.t47.tm25.headline`
- `article[data-tag="romfart,universet"]`
- `.lab-scrollbox-headline`
- `#markup_7181130 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="7181131"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_7181124 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="7181125"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_7180320 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="7180319"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_7180612 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="7180613"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_7180322 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="7180323"] > .content > .floatingTextSubset.media > .floatingText`
- `#markup_7180327 > .fullwidthTarget.content > unite-player,#status-container`
- `article[data-instance="7180326"] > .content > .floatingTextSubset.media > .floatingText`
- `a[data-k5a-url="https://www.digi.no/a/7178796"] > .t53.tm28.headline`
- `.t30.tm21.headline`
- `a[data-k5a-url="https://www.tu.no/a/7180366"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7180366"] > .t23.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7180366"] > .t40.tm31.headline`
- `.t53.tm25.headline`
- `a[data-k5a-url="https://www.tu.no/a/7180106"] > .mobile-floatLeft.media`
- `.tm14`
- `.tm36.t38.headline`
- `a[data-k5a-url="https://www.tu.no/a/7180028"] > .t34.headline[itemprop="headline"]`
- `.row.large-12.small-12:nth-child(78)`
- `.row.large-12.small-12:nth-child(79)`
- `.row.large-12.small-12:nth-child(80)`
- `.t35.tm27.headline`
- `article[data-instance="7148212"]`
- `a[data-k5a-url="https://www.tu.no/a/7148327"] > .t37.tm27.headline`
- `a[data-k5a-url="https://www.tu.no/a/7147784"] > .mobile-floatLeft.media`
- `.t39.tm25.headline`
- `article[data-tag="energi,utenriks,ntb"]`
- `a[data-k5a-url="https://www.tu.no/a/7146982"] > .media`
- `.tm30.t40.headline`
- `.t35.tm21.headline`
- `.row.large-12.small-12:nth-child(85)`
- `a[data-k5a-url="https://www.tu.no/a/7147902"] > .t38.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7147816"] > .mobile-floatLeft.media`
- `.t61`
- `a[data-k5a-url="https://www.digi.no/a/7148007"] > .t40.headline[itemprop="headline"]`
- `.tm35`
- `article[data-instance="7147364"]`
- `.tm22.t37.headline`
- `a[data-k5a-url="https://www.digi.no/a/7147040"] > .t28.headline[itemprop="headline"]`
- `article[data-instance="7147566"]`
- `.row.large-12.small-12:nth-child(90)`
- `.border-tum-green`
- `.row.large-12.small-12:nth-child(92)`
- `a[data-k5a-url="https://www.digi.no/a/7146728"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.digi.no/a/7146728"] > .t26.tm18.headline`
- `article[data-instance="7146844"]`
- `.row.large-12.small-12:nth-child(94)`
- `a[data-k5a-url="https://www.tu.no/a/7143400"] > .desktop-floatLeft.media`
- `.row.large-12.small-12:nth-child(95) > .columns.large-4.large-abs-4`
- `.row.large-12.small-12:nth-child(96)`
- `.t55.tm30.headline`
- `a[data-k5a-url="https://www.tu.no/a/7147360"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7147360"] > .t31.tm23.headline`
- `a[data-k5a-url="https://www.digi.no/a/7147154"] > .media`
- `.t37.tm24.headline`
- `a[data-k5a-url="https://www.digi.no/a/7143934"] > .below.kicker`
- `.align-left.mobile_text_align_align-left.t40`
- `.has-row-header.color_mobile_no_bg_color.row:nth-child(100) > h5`
- `.t22.tm18.below`
- `.t35.tm28.headline`
- `.align-left.mobile_text_align_align-left.tm30`
- `a[data-k5a-url="https://www.digi.no/a/7146087"] > .below.kicker`
- `.tm26.t33.color_mobile_no_bg_color`
- `article[data-tag="pfas,miljø,klima,helse"]`
- `a[data-k5a-url="https://www.digi.no/a/7146151"] > .desktop-floatLeft.media`
- `.t23.tm20.below`
- `.t53.tm31.headline`
- `a[data-k5a-url="https://www.tu.no/a/7145088"] > .t32.tm25.headline`
- `.t21.tm18.below`
- `.t51.tm26.headline`
- `.mobile_no_border_color.mobile_no_border_side.color_mobile_no_bg_color > unite-player,#status-container`
- `.text_singleline`
- `article[data-instance="7145966"]`
- `a[data-k5a-url="https://www.digi.no/a/7145919"] > .mobile-floatLeft.media`
- `.t26.tm26.headline`
- `article[data-tag="datasenter,vindkraft,energi"]`
- `.t53.tm27.headline`
- `.row.large-12.small-12:nth-child(104) > .columns.large-4.large-abs-4`
- `a[data-k5a-url="https://www.tu.no/a/7142746"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7144423"] > .t36.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7145539"] > .media`
- `.tm31.t27.headline`
- `article[data-tag="kunstig intelligens,debatt"]`
- `article[data-tag="energi,vannkraft"]`
- `a[data-k5a-url="https://www.digi.no/a/7144018"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7144018"] > .t38.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7144014"] > .t21.below.kicker`
- `.t45.tm22.headline`
- `a[data-k5a-url="https://www.tu.no/a/7142874"] > .below.kicker`
- `.t46.tm29.headline`
- `article[data-tag="ntb,utenriks,energi,equinor"]`
- `a[data-k5a-url="https://www.digi.no/a/7144043"] > .media`
- `.t29.tm27.headline`
- `a[data-k5a-url="https://www.tu.no/a/7140996"] > .desktop-floatLeft.media`
- `.t39.tm22.headline`
- `.t37.tm20.headline`
- `.tm28.t33.headline`
- `a[data-k5a-url="https://www.tu.no/a/6445917"] > .media`
- `.t25.tm28.headline`
- `article[data-tag="kommentar,arbeidsliv,nito"]`
- `a[data-k5a-url="https://www.tu.no/a/7141633"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7141633"] > .below.kicker`
- `.tm29.t38.headline`
- `article[data-instance="7141950"]`
- `a[data-k5a-url="https://www.digi.no/a/7141845"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7141845"] > .tm23.t33.headline`
- `article[data-tag="debatt,kunstig intelligens"]`
- `a[data-k5a-url="https://www.tu.no/a/7141917"] > .mobile-floatLeft.media`
- `.t17`
- `.t29.tm25.headline`
- `article[data-tag="klima,samferdsel"]`
- `article[data-tag="eu,industri"]`
- `article[data-instance="7142185"]`
- `a[data-k5a-url="https://www.digi.no/a/5705943"] > .t27.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/7141598"] > .t23.below.kicker`
- `.t52.tm29.headline`
- `.t31.tm25.headline`
- `.row.large-12.small-12:nth-child(116)`
- `a[data-k5a-url="https://www.tu.no/a/5704819"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5704819"] > .tm28.t39.headline`
- `a[data-k5a-url="https://www.tu.no/a/7141196"] > .mobile-floatLeft.media`
- `.tm27.t33.headline`
- `.row.large-12.small-12:nth-child(118)`
- `article[data-tag="andøya,romfart"]`
- `a[data-k5a-url="https://www.digi.no/a/7141732"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7141732"] > .t31.headline[itemprop="headline"]`
- `article[data-tag="datasenter,it"]`
- `article[data-tag="telekom,telenor"]`
- `.t26.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7141244"] > .t62.tm36.headline`
- `a[data-k5a-url="https://www.tu.no/a/5706079"] > .t45.headline[itemprop="headline"]`
- `.t25.below.kicker`
- `.t43.tm30.headline`
- `a[data-k5a-url="https://www.tu.no/a/6445883"] > .media`
- `.tm37.t52.headline`
- `a[data-k5a-url="https://www.digi.no/a/7141342"] > .t18.below.kicker`
- `.tm32.t34.headline`
- `a[data-k5a-url="https://www.tu.no/a/7141395"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7141395"] > .t19.below.kicker`
- `.tm32.t32.headline`
- `a[data-k5a-url="https://www.digi.no/a/5704754"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/5704754"] > .t38.headline[itemprop="headline"]`
- `.tm36.t32.headline`
- `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t18.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/5704080"] > .tm28.t39.headline`
- `.border-style-solid > h5`
- `#markup_7141430 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_7141431 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_7141432 > .fullwidthTarget.content > unite-player,#status-container`
- `unite-player[muted=""],#status-container`
- `.t30.below.kicker`
- `.t86`
- `.row.large-12.small-12:nth-child(128)`
- `a[data-k5a-url="https://www.tu.no/a/7140700"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7140700"] > .t23.below.kicker`
- `.tm49`
- `a[data-k5a-url="https://www.tu.no/a/7140602"] > .below.kicker`
- `.t32.tm22.headline`
- `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t24.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t55.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/5705812"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/5705812"] > .t21.below.kicker`
- `.tm42`
- `article[data-tag="forsvar,ntb,utenriks"]`
- `.powered-by`

### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `.scroll-container`
