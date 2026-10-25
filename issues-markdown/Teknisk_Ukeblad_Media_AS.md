# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-10-25T04:00:46.344Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 7

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #cbb`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
- `.row.large-12.small-12:nth-child(14) > .display-label.google-ad.disable-initial-load > .ad-label`
- `.row.large-12.small-12:nth-child(25) > .display-label.google-ad.disable-initial-load > .ad-label`
- `.row.large-12.small-12:nth-child(29) > .display-label.google-ad.disable-initial-load > .ad-label`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.has-row-header.color_mobile_no_bg_color.row:nth-child(79) > h5`
- `.border-side-bottom > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 10

#### Affected Elements:

- `a[data-k5a-url="https://www.tu.no/a/7147345"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.tu.no/a/7146844"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.digi.no/a/7146286"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.tu.no/a/7144804"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.tu.no/a/7144750"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.digi.no/a/7145065"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.tu.no/a/7144000"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.tu.no/a/7141083"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
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

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #aw0`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 358

#### Affected Elements:

- `h1`
- `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
- `.page-content > .row.large-12.small-12:nth-child(1)`
- `a[data-k5a-url="https://www.tu.no/a/7148550"] > .desktop-floatLeft.media`
- `.tm34.t53.headline`
- `.t25.align-center.mobile_text_align_align-center`
- `.t51.tm27.align-center`
- `a[data-k5a-url="https://www.tu.no/a/7148562"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7148562"] > .t34.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/7148964"] > .headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7148989"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7148989"] > .t36.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/5703042"] > .t40.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7148398"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7148388"] > .media`
- `.tm36.t27.headline`
- `a[data-k5a-url="https://www.tu.no/a/7148841"] > .t45.headline[itemprop="headline"]`
- `article[data-instance="7178053"]`
- `a[data-k5a-url="https://www.digi.no/a/7177748"] > .media`
- `article[data-instance="7147345"]`
- `a[data-k5a-url="https://www.tu.no/a/7148741"] > .desktop-floatLeft.mobile-floatLeft.media`
- `.t33.tm17.headline`
- `a[data-k5a-url="https://www.digi.no/a/7177840"] > .t21.tm18.below`
- `a[data-k5a-url="https://www.digi.no/a/7177840"] > .t37.tm22.headline`
- `a[data-k5a-url="https://www.tu.no/a/7148059"] > .t43.headline[itemprop="headline"]`
- `article[data-instance="7177924"]`
- `.row.large-12.small-12:nth-child(14) > .display-label.google-ad.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.digi.no/a/7177780"] > .t24.below.kicker`
- `.t49.tm27.headline`
- `.row.large-12.small-12:nth-child(16)`
- `.adZone-parallax > .ad-label`
- `.row.large-12.small-12:nth-child(19)`
- `.row.large-12.small-12:nth-child(20)`
- `.tm21.t29.headline`
- `a[data-k5a-url="https://www.tu.no/a/7147358"] > .t33.tm24.headline`
- `.tm19.t22.below`
- `a[data-k5a-url="https://www.tu.no/a/7148370"] > .t41.tm21.headline`
- `a[data-k5a-url="https://www.tu.no/a/7148999"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7148999"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7148999"] > .t38.tm23.headline`
- `article[data-tag="bygg"]`
- `a[data-k5a-url="https://www.digi.no/a/7148966"] > .t23.below.kicker`
- `.t50.tm26.headline`
- `.row.large-12.small-12:nth-child(25) > .display-label.google-ad.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/7149080"] > .tm28.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/7148721"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7148721"] > .t24.below.kicker`
- `.tm28.t37.headline`
- `a[data-k5a-url="https://www.tu.no/a/7148697"] > .mobile-floatLeft.media`
- `.t30.tm23.headline`
- `.t24.tm20.below`
- `.t54`
- `.t25.tm26.headline`
- `.row.large-12.small-12:nth-child(29) > .display-label.google-ad.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/7148751"] > .desktop-floatLeft.mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7148751"] > .tm18.below.kicker`
- `.t45.tm24.headline`
- `.row.large-12.small-12:nth-child(31)`
- `a[data-k5a-url="https://www.tu.no/a/7148351"] > .desktop-floatLeft.mobile-floatLeft.media`
- `.t49.tm20.headline`
- `a[data-k5a-url="https://www.tu.no/a/7147065"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7147065"] > .t26.below.kicker`
- `.t57.tm29.headline`
- `a[data-k5a-url="https://www.tu.no/a/7148615"] > .desktop-floatLeft.mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7148615"] > .tm26.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/7147696"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7147696"] > .t41.tm30.headline`
- `article[data-instance="7148678"]`
- `a[data-k5a-url="https://www.tu.no/a/7147921"] > .media`
- `.row.large-12.small-12:nth-child(37)`
- `a[data-k5a-url="https://www.digi.no/a/7148026"] > .mobile-floatLeft.media`
- `.t25.tm21.headline`
- `a[data-k5a-url="https://www.tu.no/a/7147915"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7147915"] > .t51.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/7148253"] > .mobile-floatLeft.media`
- `.t26.tm22.headline`
- `.t57.tm24.headline`
- `a[data-k5a-url="https://www.tu.no/a/7144835"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7144835"] > .t35.tm28.headline`
- `.tm17.t29.headline`
- `.t35.tm27.headline`
- `article[data-instance="7148212"]`
- `a[data-k5a-url="https://www.tu.no/a/7148327"] > .tm27.t37.headline`
- `a[data-k5a-url="https://www.tu.no/a/7147784"] > .mobile-floatLeft.media`
- `.t39.tm25.headline`
- `article[data-tag="utenriks,ntb,energi"]`
- `a[data-k5a-url="https://www.tu.no/a/7146982"] > .media`
- `.t40.tm30.headline`
- `.t35.tm21.headline`
- `.row.large-12.small-12:nth-child(45)`
- `a[data-k5a-url="https://www.tu.no/a/7147902"] > .t38.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7147816"] > .mobile-floatLeft.media`
- `.t61`
- `a[data-k5a-url="https://www.digi.no/a/7148007"] > .t40.headline[itemprop="headline"]`
- `.tm35.t48.headline`
- `article[data-instance="7147364"]`
- `a[data-k5a-url="https://www.tu.no/a/7144916"] > .t37.tm22.headline`
- `a[data-k5a-url="https://www.digi.no/a/7147040"] > .t28.headline[itemprop="headline"]`
- `article[data-instance="7147566"]`
- `.row.large-12.small-12:nth-child(50)`
- `.border-tum-green`
- `.row.large-12.small-12:nth-child(52)`
- `a[data-k5a-url="https://www.digi.no/a/7146728"] > .mobile-floatLeft.media`
- `.tm18.t26.headline`
- `article[data-instance="7146844"]`
- `.row.large-12.small-12:nth-child(54)`
- `a[data-k5a-url="https://www.tu.no/a/7143400"] > .desktop-floatLeft.media`
- `.row.large-12.small-12:nth-child(55) > .columns.large-4.large-abs-4`
- `.row.large-12.small-12:nth-child(56)`
- `.t55.tm30.headline`
- `a[data-k5a-url="https://www.tu.no/a/7147360"] > .mobile-floatLeft.media`
- `.t31.tm23.headline`
- `a[data-k5a-url="https://www.digi.no/a/7147154"] > .media`
- `.t37.tm24.headline`
- `a[data-k5a-url="https://www.tu.no/a/7145953"] > .desktop-floatLeft.mobile-floatLeft.media`
- `.t40.tm17.headline`
- `a[data-k5a-url="https://www.digi.no/a/7144772"] > .below.kicker`
- `.t24.tm28.headline`
- `a[data-k5a-url="https://www.tu.no/a/7147021"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7147021"] > .tm17.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7147021"] > .t33.tm27.headline`
- `a[data-k5a-url="https://www.tu.no/a/7145114"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7145114"] > .below.kicker`
- `.tm51`
- `a[data-k5a-url="https://www.tu.no/a/7147061"] > .tm20.t37.headline`
- `a[data-k5a-url="https://www.tu.no/a/7147347"] > .desktop-floatLeft.mobile-floatLeft.media`
- `.t49.tm24.headline`
- `a[data-k5a-url="https://www.digi.no/a/7143875"] > .media`
- `article[data-instance="7145234"]`
- `a[data-k5a-url="https://www.tu.no/a/7146157"] > .t35.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7145198"] > .t22.below.kicker`
- `.t44.tm31.headline`
- `.row.large-12.small-12:nth-child(65)`
- `a[data-k5a-url="https://www.digi.no/a/7146614"] > .media`
- `.t32.tm23.headline`
- `article[data-instance="7147308"]`
- `.row.large-12.small-12:nth-child(67)`
- `a[data-k5a-url="https://www.tu.no/a/7146943"] > .t45.headline[itemprop="headline"]`
- `article[data-instance="7146968"]`
- `.t58.tm35.headline`
- `article[data-tag="avfall,industri"]`
- `a[data-k5a-url="https://www.digi.no/a/7145997"] > .media`
- `.t58.tm27.color_mobile_no_bg_color`
- `article[data-instance="7146864"]`
- `.row.large-12.small-12:nth-child(72)`
- `article[data-instance="7145268"]`
- `a[data-k5a-url="https://www.tu.no/a/7145650"] > .t29.tm27.headline`
- `a[data-k5a-url="https://www.digi.no/a/7146270"] > .media`
- `.t32.tm24.headline`
- `a[data-k5a-url="https://www.tu.no/a/7146390"] > .t32.tm28.headline`
- `article[data-instance="7146286"]`
- `a[data-k5a-url="https://www.tu.no/a/7146517"] > .desktop-floatLeft.media`
- `.t50.tm24.headline`
- `.tm16.t18.below`
- `.tm46.t32.headline`
- `a[data-k5a-url="https://www.digi.no/a/7143828"] > .t30.tm22.headline`
- `a[data-k5a-url="https://www.digi.no/a/7143934"] > .below.kicker`
- `.align-left.mobile_text_align_align-left.t40`
- `article[data-tag="forsvar,maritim"]`
- `a[data-k5a-url="https://www.tu.no/a/7146362"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7146362"] > .below.kicker`
- `.t42.tm30.color_mobile_no_bg_color`
- `.has-row-header.color_mobile_no_bg_color.row:nth-child(79) > h5`
- `.tm18.t22.below`
- `a[data-k5a-url="https://www.tu.no/a/7146055"] > .t35.tm28.headline`
- `a[data-k5a-url="https://www.tu.no/a/7145973"] > .align-left.mobile_text_align_align-left.t31`
- `a[data-k5a-url="https://www.digi.no/a/7146087"] > .below.kicker`
- `.t33.tm26.color_mobile_no_bg_color`
- `article[data-tag="klima,helse,miljø,pfas"]`
- `a[data-k5a-url="https://www.digi.no/a/7146151"] > .desktop-floatLeft.media`
- `.t23.tm20.below`
- `.t53.tm31.headline`
- `.row.large-12.small-12:nth-child(81)`
- `.t32.tm25.headline`
- `a[data-k5a-url="https://www.tu.no/a/7145583"] > .t21.tm18.below`
- `.t51.tm26.headline`
- `.mobile_no_border_side.mobile_no_border_color.color_mobile_no_bg_color > unite-player,#status-container`
- `.text_singleline`
- `article[data-instance="7145966"]`
- `a[data-k5a-url="https://www.digi.no/a/7145919"] > .mobile-floatLeft.media`
- `.t26.tm26.headline`
- `article[data-tag="datasenter,vindkraft,energi"]`
- `.t53.tm27.headline`
- `.row.large-12.small-12:nth-child(84) > .columns.large-4.large-abs-4`
- `a[data-k5a-url="https://www.tu.no/a/7142746"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7144423"] > .t36.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7145105"] > .media`
- `article[data-tag="energi,debatt"]`
- `a[data-k5a-url="https://www.tu.no/a/7145539"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7145539"] > .tm31.t27.headline`
- `article[data-tag="kunstig intelligens,debatt"]`
- `article[data-tag="energi,vannkraft"]`
- `article[data-instance="6058960"]`
- `a[data-k5a-url="https://www.digi.no/a/7145468"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7145468"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7145468"] > .t32.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/7144866"] > .desktop-floatLeft.media`
- `.t34.tm26.headline`
- `.row.large-12.small-12:nth-child(90)`
- `a[data-k5a-url="https://www.tu.no/a/7145032"] > .desktop-floatLeft.mobile-floatLeft.media`
- `.t42.tm17.headline`
- `a[data-k5a-url="https://www.digi.no/a/7143928"] > .t23.below.kicker`
- `.t66`
- `.row.large-12.small-12:nth-child(93)`
- `a[data-k5a-url="https://www.tu.no/a/7141811"] > .t25.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7141811"] > .t51.headline[itemprop="headline"]`
- `article[data-tag="energi,kommentar,strøm"]`
- `a[data-k5a-url="https://www.tu.no/a/7144284"] > .mobile-floatLeft.media`
- `.t26.tm25.headline`
- `article[data-tag="energi,innenriks,ntb"]`
- `.row.large-12.small-12:nth-child(96)`
- `a[data-k5a-url="https://www.tu.no/a/7144774"] > .desktop-floatLeft.media`
- `.t40.tm20.headline`
- `a[data-k5a-url="https://www.digi.no/a/7145073"] > .below.kicker`
- `.tm34.t43.headline`
- `a[data-k5a-url="https://www.tu.no/a/7143311"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7144464"] > .below.kicker`
- `.tm26.t37.headline`
- `.row.large-12.small-12:nth-child(99)`
- `a[data-k5a-url="https://www.tu.no/a/7141143"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7144684"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7144684"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7144684"] > .t28.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7144168"] > .t22.below.kicker`
- `.t28.tm22.headline`
- `article[data-instance="7143510"]`
- `a[data-k5a-url="https://www.tu.no/a/7144622"] > .t38.tm23.headline`
- `article[data-instance="7144727"]`
- `a[data-k5a-url="https://www.tu.no/a/7144712"] > .desktop-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7144712"] > .below.kicker`
- `.t46.tm22.headline`
- `.row.large-12.small-12:nth-child(104)`
- `a[data-k5a-url="https://www.digi.no/a/7144018"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7144018"] > .t38.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7144014"] > .t21.below.kicker`
- `.t45.tm22.headline`
- `a[data-k5a-url="https://www.tu.no/a/7144272"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7144272"] > .t50.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7143860"] > .t22.below.kicker`
- `.align-left.mobile_text_align_align-left.t37`
- `.t38.color_mobile_no_bg_color.headline`
- `a[data-k5a-url="https://www.tu.no/a/7144301"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7144301"] > .t34.color_mobile_no_bg_color.headline`
- `a[data-k5a-url="https://www.tu.no/a/7144410"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7144410"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7144410"] > .t34.color_mobile_no_bg_color.headline`
- `article[data-instance="7144000"]`
- `.align-left.mobile_text_align_align-left.t41`
- `a[data-k5a-url="https://www.tu.no/a/7143946"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7143946"] > .t48.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7144242"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7144242"] > .below.kicker`
- `.t67.tm40.headline`
- `.row.large-12.small-12:nth-child(110)`
- `a[data-k5a-url="https://www.tu.no/a/7142874"] > .below.kicker`
- `.t46.tm29.headline`
- `article[data-tag="utenriks,ntb,equinor,energi"]`
- `a[data-k5a-url="https://www.digi.no/a/7144043"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7144043"] > .t29.tm27.headline`
- `a[data-k5a-url="https://www.tu.no/a/7143512"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7143512"] > .t52.headline[itemprop="headline"]`
- `article[data-tag="energi,eu,gass"]`
- `a[data-k5a-url="https://www.tu.no/a/7143261"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7143261"] > .t29.headline[itemprop="headline"]`
- `article[data-tag="innenriks,jernbane,samferdsel"]`
- `.tm38`
- `a[data-k5a-url="https://www.tu.no/a/7142612"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7142612"] > .headline[itemprop="headline"]`
- `article[data-instance="7142777"]`
- `.row.large-12.small-12:nth-child(115)`
- `.row.large-12.small-12:nth-child(116)`
- `a[data-k5a-url="https://www.digi.no/a/7142727"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7142291"] > .media`
- `.tm33`
- `a[data-k5a-url="https://www.tu.no/a/7140996"] > .desktop-floatLeft.media`
- `.t39.tm22.headline`
- `.row.large-12.small-12:nth-child(119)`
- `a[data-k5a-url="https://www.digi.no/a/5704457"] > .tm20.t37.headline`
- `.t33.tm28.headline`
- `a[data-k5a-url="https://www.tu.no/a/6445917"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/6445917"] > .t25.tm28.headline`
- `a[data-k5a-url="https://www.digi.no/a/7141726"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.digi.no/a/7141726"] > .tm17.below.kicker`
- `.t29.tm23.headline`
- `a[data-k5a-url="https://www.digi.no/a/7142036"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.digi.no/a/7142036"] > .t30.tm21.headline`
- `a[data-k5a-url="https://www.tu.no/a/7142302"] > .media`
- `.t55.tm26.headline`
- `a[data-k5a-url="https://www.tu.no/a/7142239"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7142239"] > .tm31.t27.headline`
- `a[data-k5a-url="https://www.tu.no/a/7141830"] > .tm17.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7141830"] > .t30.tm22.headline`
- `article[data-tag="arbeidsliv,kommentar,nito"]`
- `a[data-k5a-url="https://www.tu.no/a/7141633"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7141633"] > .below.kicker`
- `.tm29.t38.headline`
- `article[data-instance="7141950"]`
- `a[data-k5a-url="https://www.digi.no/a/7141845"] > .t20.below.kicker`
- `.t33.tm23.headline`
- `article[data-instance="7140962"]`
- `a[data-k5a-url="https://www.tu.no/a/7141917"] > .mobile-floatLeft.media`
- `.t17`
- `.t29.tm25.headline`
- `article[data-tag="samferdsel,klima"]`
- `article[data-tag="eu,industri"]`
- `article[data-instance="7142185"]`
- `a[data-k5a-url="https://www.digi.no/a/5705943"] > .t27.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/7141598"] > .t23.below.kicker`
- `.t52.tm29.headline`
- `.t31.tm25.headline`
- `.row.large-12.small-12:nth-child(128)`
- `a[data-k5a-url="https://www.tu.no/a/5704819"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5704819"] > .t39.tm28.headline`
- `a[data-k5a-url="https://www.tu.no/a/7141196"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7141196"] > .t33.tm27.headline`
- `.row.large-12.small-12:nth-child(130)`
- `article[data-tag="andøya,romfart"]`
- `a[data-k5a-url="https://www.digi.no/a/7141732"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7141732"] > .t31.headline[itemprop="headline"]`
- `article[data-tag="datasenter,it"]`
- `article[data-tag="telenor,telekom"]`
- `a[data-k5a-url="https://www.tu.no/a/7141244"] > .t26.below.kicker`
- `.t62`
- `a[data-k5a-url="https://www.tu.no/a/5706079"] > .t45.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.tu.no/a/7141373"] > .t25.below.kicker`
- `.t43.tm30.headline`
- `a[data-k5a-url="https://www.tu.no/a/6445883"] > .media`
- `.tm37.t52.headline`
- `a[data-k5a-url="https://www.digi.no/a/7141342"] > .t18.below.kicker`
- `.tm32.t34.headline`
- `a[data-k5a-url="https://www.tu.no/a/7141395"] > .mobile-floatLeft.media`
- `.t19.below.kicker`
- `.tm32.t32.headline`
- `a[data-k5a-url="https://www.digi.no/a/5704754"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/5704754"] > .t38.headline[itemprop="headline"]`
- `.tm36.t32.headline`
- `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t18.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t39.tm28.headline`
- `.border-side-bottom > h5`
- `#markup_7141430 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_7141431 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_7141432 > .fullwidthTarget.content > unite-player,#status-container`
- `unite-player[muted=""],#status-container`
- `.t30.below.kicker`
- `.t86`
- `.row.large-12.small-12:nth-child(140)`
- `a[data-k5a-url="https://www.tu.no/a/7140700"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7140700"] > .t23.below.kicker`
- `.tm49.t49.headline`
- `a[data-k5a-url="https://www.tu.no/a/7140602"] > .below.kicker`
- `.t32.tm22.headline`
- `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t24.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t55.headline[itemprop="headline"]`
- `a[data-k5a-url="https://www.digi.no/a/5705812"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/5705812"] > .t21.below.kicker`
- `.tm42.t34.headline`
- `article[data-tag="forsvar,ntb,utenriks"]`
- `.powered-by`
