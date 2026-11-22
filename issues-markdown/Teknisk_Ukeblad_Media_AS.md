# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-11-22T06:14:13.910Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 8

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
- **Count:** 7

#### Affected Elements:

- `.placement-top > .google-ad.display-label.disable-initial-load > .ad-label`
- `.row.large-12.small-12:nth-child(7) > .google-ad.display-label.disable-initial-load > .ad-label`
- `.row.large-12.small-12:nth-child(14) > .google-ad.display-label.disable-initial-load > .ad-label`
- `.adZone-parallax > .ad-label`
- `.row.large-12.small-12:nth-child(22) > .google-ad.display-label.disable-initial-load > .ad-label`
- `.row.large-12.small-12:nth-child(25) > .google-ad.display-label.disable-initial-load > .ad-label`
- `.row.large-12.small-12:nth-child(29) > .google-ad.display-label.disable-initial-load > .ad-label`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.has-row-header.row.large-12:nth-child(64) > h5`
- `.border-side-bottom.mobile_border-side-bottom.has-row-header:nth-child(111) > h5`
- `.border-style-solid > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 15

#### Affected Elements:

- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="grid.png"]`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="text1.png"]`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="text2.png"]`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="blaa.png"]`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="logo.png"]`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="cta_text_uk.png"]`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="cta_pil.png"]`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="logo2.png"]`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, img[src$="logo_end.png"]`
- `a[data-k5a-url="https://www.tu.no/a/7182870"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.tu.no/a/7179783"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
- `a[data-k5a-url="https://www.tu.no/a/7146844"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
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

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 369

#### Affected Elements:

- `h1`
- `.placement-top > .google-ad.display-label.disable-initial-load > .ad-label`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_268_dfa7banner_html_inpage_0\.if, #banner`
- `a[data-k5a-url="https://www.digi.no/a/7185621"] > .media`
- `.t46.tm25`
- `.row.large-12.small-12:nth-child(3)`
- `a[data-k5a-url="https://www.tu.no/a/7183981"] > .media`
- `.row.large-12.small-12:nth-child(6)`
- `.row.large-12.small-12:nth-child(7) > .google-ad.display-label.disable-initial-load > .ad-label`
- `.row.large-12.small-12:nth-child(9)`
- `.row.large-12.small-12:nth-child(10)`
- `.t43.tm24`
- `article[data-instance="7186147"]`
- `.row.large-12.small-12:nth-child(13)`
- `.row.large-12.small-12:nth-child(14) > .google-ad.display-label.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/7185304"] > .t24.below.kicker`
- `.t65.tm24`
- `.row.large-12.small-12:nth-child(16)`
- `.adZone-parallax > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/7185659"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7185659"] > .tm18.t26`
- `article[data-instance="7186667"]`
- `a[data-k5a-url="https://www.tu.no/a/7186725"] > .desktop-floatLeft.media`
- `.t39.tm21`
- `.t72`
- `.row.large-12.small-12:nth-child(22) > .google-ad.display-label.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/7186773"] > .t37.tm27`
- `a[data-k5a-url="https://www.tu.no/a/7186087"] > .tm18.below.kicker`
- `.tm19.t26.color_mobile_no_bg_color`
- `article[data-tag="klima,energi,eu"]`
- `.t36.tm18`
- `.row.large-12.small-12:nth-child(25) > .google-ad.display-label.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.digi.no/a/7186524"] > .desktop-floatLeft.media`
- `.t43.tm20`
- `a[data-k5a-url="https://www.tu.no/a/7183863"] > .t24.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7183863"] > .t32`
- `article[data-tag="ntb,innenriks,it"]`
- `a[data-k5a-url="https://www.tu.no/a/7186345"] > .t24.below.kicker`
- `.t71`
- `a[data-k5a-url="https://www.digi.no/a/7185375"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7185375"] > .tm18.t26`
- `.row.large-12.small-12:nth-child(29) > .google-ad.display-label.disable-initial-load > .ad-label`
- `a[data-k5a-url="https://www.tu.no/a/7185358"] > .below.kicker`
- `.t34.tm25.color_mobile_no_bg_color`
- `a[data-k5a-url="https://www.tu.no/a/7185997"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7185997"] > .t19.tm19`
- `.row.large-12.small-12:nth-child(31)`
- `article[data-instance="7186089"]`
- `a[data-k5a-url="https://www.tu.no/a/7182506"] > .t24.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7182506"] > .tm37.t56`
- `.t31.tm19`
- `a[data-k5a-url="https://www.tu.no/a/7143482"] > .below.kicker`
- `.t54.tm19`
- `a[data-k5a-url="https://www.tu.no/a/7185907"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7185907"] > .t41.tm29`
- `article[data-tag="samferdsel,tunnel"]`
- `.t23.tm22`
- `.t34.tm23.color_mobile_no_bg_color`
- `a[data-k5a-url="https://www.tu.no/a/7185598"] > .color_mobile_no_bg_color`
- `a[data-k5a-url="https://www.digi.no/a/7180122"] > .t40`
- `article[data-instance="7185868"]`
- `a[data-k5a-url="https://www.digi.no/a/7185677"] > .t22.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7185677"] > .t32.tm24`
- `article[data-instance="7185953"]`
- `.row.large-12.small-12:nth-child(39)`
- `a[data-k5a-url="https://www.tu.no/a/7185356"] > .t26.below.kicker`
- `.tm37.t36`
- `article[data-tag="innenriks,luftfart,ntb"]`
- `.row.large-12.small-12:nth-child(41)`
- `.row.large-12.small-12:nth-child(42)`
- `article[data-instance="7185360"]`
- `a[data-k5a-url="https://www.digi.no/a/7184775"] > .t35.tm26`
- `.t58.tm30`
- `a[data-k5a-url="https://www.tu.no/a/7185269"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7185269"] > .t24.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7185269"] > .t28`
- `a[data-k5a-url="https://www.tu.no/a/7184923"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7184923"] > .t26.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7184923"] > .t48.tm26`
- `.row.large-12.small-12:nth-child(46)`
- `.row.large-12.small-12:nth-child(47)`
- `article[data-tag="romfart"]`
- `a[data-k5a-url="https://www.tu.no/a/7184225"] > .t28`
- `article[data-instance="7185107"]`
- `a[data-k5a-url="https://www.digi.no/a/7183972"] > .t25.below.kicker`
- `.t36.tm20`
- `a[data-k5a-url="https://www.tu.no/a/7185176"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7185176"] > .tm17.t24`
- `.row.large-12.small-12:nth-child(50)`
- `a[data-k5a-url="https://www.digi.no/a/7185165"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7185165"] > .t30`
- `article[data-tag="energi,datasenter,ntb,utenriks"]`
- `.row.large-12.small-12:nth-child(52)`
- `.t25.tm18.below`
- `.t43.tm23`
- `a[data-k5a-url="https://www.digi.no/a/7183484"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7183484"] > .t33.tm27`
- `.tm19.t32`
- `a[data-k5a-url="https://www.tu.no/a/7184719"] > .t46.tm22`
- `.row.large-12.small-12:nth-child(55)`
- `article[data-instance="7184671"]`
- `a[data-k5a-url="https://www.tu.no/a/7180787"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7180787"] > .tm29.t29`
- `a[data-k5a-url="https://www.tu.no/a/7183602"] > .t29`
- `a[data-k5a-url="https://www.tu.no/a/7184684"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7184684"] > .t41.tm29`
- `article[data-tag="samferdsel,tog,ntb,innenriks"]`
- `.row.large-12.small-12:nth-child(58)`
- `a[data-k5a-url="https://www.digi.no/a/7183630"] > .t56`
- `a[data-k5a-url="https://www.tu.no/a/7183578"] > .t29.tm20`
- `a[data-k5a-url="https://www.digi.no/a/7182335"] > .t46`
- `.t40.hasTextPadding.mobile-hasTextPadding`
- `a[data-k5a-url="https://www.tu.no/a/7141034"] > .media`
- `article[data-instance="7184552"]`
- `.row.large-12.small-12:nth-child(62)`
- `a[data-k5a-url="https://www.digi.no/a/7184424"] > .media`
- `.t58.tm17`
- `.has-row-header.row.large-12:nth-child(64) > h5`
- `.tm39`
- `.tm45`
- `article[data-tag="microsoft,outlook,it-bransjen"]`
- `a[data-k5a-url="https://www.tu.no/a/7183585"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7183585"] > .tm23.t33`
- `a[data-k5a-url="https://www.digi.no/a/7184214"] > .t56.tm28`
- `article[data-instance="7179511"]`
- `.t61.tm21`
- `a[data-k5a-url="https://www.tu.no/a/7183224"] > .desktop-floatLeft.mobile-floatLeft.media`
- `.t54.tm20`
- `a[data-k5a-url="https://www.tu.no/a/7184256"] > .tm19`
- `a[data-k5a-url="https://www.digi.no/a/7184201"] > .tm31.t43`
- `.row.large-12.small-12:nth-child(70)`
- `a[data-k5a-url="https://www.digi.no/a/7183686"] > .t30`
- `a[data-k5a-url="https://www.digi.no/a/7183739"] > .media`
- `.row.large-12.small-12:nth-child(72)`
- `a[data-k5a-url="https://www.tu.no/a/7183380"] > .t21.below.kicker`
- `.tm47`
- `article[data-tag="nvidia,it-bransjen"]`
- `a[data-k5a-url="https://www.tu.no/a/7179601"] > .t25.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7179601"] > .t42.tm22`
- `a[data-k5a-url="https://www.tu.no/a/7183753"] > .t31.tm23`
- `.t35.tm19`
- `a[data-k5a-url="https://www.tu.no/a/7183954"] > .desktop-floatLeft.mobile-floatLeft.media`
- `.t47.tm19`
- `.tm17.t23.below`
- `.t67`
- `article[data-tag="debatt,klima,energi"]`
- `a[data-k5a-url="https://www.tu.no/a/7183553"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7183553"] > .t49.tm25`
- `.t25.tm22.below`
- `.t92`
- `a[data-k5a-url="https://www.tu.no/a/7183513"] > .mobile-floatLeft.media`
- `.tm23.t32`
- `.tm36.t53`
- `.t37.tm22`
- `a[data-k5a-url="https://www.tu.no/a/7183222"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7183222"] > .t34`
- `a[data-k5a-url="https://www.tu.no/a/7183173"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7183173"] > .t33`
- `.tm29.t26`
- `a[data-k5a-url="https://www.digi.no/a/7183320"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7183320"] > .t31.tm23`
- `article[data-instance="7182870"]`
- `.row.large-12.small-12:nth-child(84)`
- `a[data-k5a-url="https://www.tu.no/a/7181460"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7181460"] > .t39`
- `article[data-tag="forsvar,innenriks,ntb"]`
- `.row.large-12.small-12:nth-child(86)`
- `a[data-k5a-url="https://www.tu.no/a/7183145"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7183145"] > .below.kicker`
- `.t24.tm22`
- `.t21.tm27`
- `article[data-instance="7183294"]`
- `a[data-k5a-url="https://www.tu.no/a/7183098"] > .t42`
- `a[data-k5a-url="https://www.tu.no/a/7181064"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181064"] > .t30.tm20`
- `a[data-k5a-url="https://www.tu.no/a/7183147"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7183147"] > .tm16.t23`
- `a[data-k5a-url="https://www.tu.no/a/7182874"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7182874"] > .tm18.t26`
- `.t30.tm18`
- `a[data-k5a-url="https://www.tu.no/a/7182985"] > .media`
- `.t29.tm26`
- `a[data-k5a-url="https://www.tu.no/a/7182785"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7182785"] > .t40.tm31`
- `a[data-k5a-url="https://www.digi.no/a/7182852"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7182852"] > .t27`
- `article[data-tag="innenriks,ntb,datasenter"]`
- `a[data-k5a-url="https://www.tu.no/a/7182755"] > .below.kicker`
- `.tm32.t33`
- `a[data-k5a-url="https://www.digi.no/a/7180616"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7180616"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7180616"] > .tm37.t56`
- `a[data-k5a-url="https://www.tu.no/a/7180590"] > h2`
- `article[data-tag="energi,datasenter"]`
- `.tm15`
- `.t41.tm23`
- `a[data-k5a-url="https://www.digi.no/a/7180740"] > .t30`
- `.row.large-12.small-12:nth-child(96)`
- `a[data-k5a-url="https://www.tu.no/a/7182117"] > .below.kicker`
- `.tm40.t35`
- `a[data-k5a-url="https://www.tu.no/a/7182421"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7182421"] > .t34.tm26`
- `.tm33.t41`
- `a[data-k5a-url="https://www.digi.no/a/7182096"] > .t21.below.kicker`
- `.tm17.t33`
- `a[data-k5a-url="https://www.tu.no/a/7180631"] > .t24`
- `a[data-k5a-url="https://www.tu.no/a/7181747"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181747"] > .t29.tm20`
- `a[data-k5a-url="https://www.tu.no/a/7181555"] > .media`
- `article[data-instance="7182247"]`
- `a[data-k5a-url="https://www.tu.no/a/7182303"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7182303"] > .t43`
- `article[data-instance="7182010"]`
- `a[data-k5a-url="https://www.tu.no/a/7181388"] > .t30.tm20`
- `a[data-k5a-url="https://www.tu.no/a/7181751"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181751"] > .tm17.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7181751"] > .t38`
- `a[data-k5a-url="https://www.tu.no/a/7181749"] > .mobile-floatLeft.media`
- `.t21.tm17.below`
- `.t38.tm18`
- `a[data-k5a-url="https://www.tu.no/a/7181952"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7181952"] > .below.kicker`
- `.t39.tm26`
- `article[data-tag="debatt,klima"]`
- `article[data-tag="satellitt,ntb,telekom,utenriks"]`
- `article[data-tag="debatt,automatisering"]`
- `a[data-k5a-url="https://www.tu.no/a/7181251"] > .t19.tm19`
- `a[data-k5a-url="https://www.digi.no/a/7181671"] > .media`
- `.t78`
- `a[data-k5a-url="https://www.tu.no/a/7181336"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7181551"] > .t19.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7181551"] > .t48.tm26`
- `.t14`
- `.t41.tm17`
- `.t33.tm22`
- `a[data-k5a-url="https://www.digi.no/a/7181185"] > .media`
- `a[data-k5a-url="https://www.digi.no/a/7181185"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7181185"] > .t43`
- `.row.large-12.small-12:nth-child(110)`
- `.border-side-bottom.mobile_border-side-bottom.has-row-header:nth-child(111) > h5`
- `.t37.tm26`
- `.t35.tm29`
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
- `a[data-k5a-url="https://www.digi.no/a/7178796"] > .t53.tm28`
- `.tm21.t30`
- `a[data-k5a-url="https://www.tu.no/a/7180366"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7180366"] > .t23.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7180366"] > .t40.tm31`
- `.t53.tm25`
- `a[data-k5a-url="https://www.tu.no/a/7180106"] > .mobile-floatLeft.media`
- `.tm14`
- `.tm36.t38`
- `a[data-k5a-url="https://www.tu.no/a/7180028"] > .t34`
- `.row.large-12.small-12:nth-child(117)`
- `.row.large-12.small-12:nth-child(118)`
- `.row.large-12.small-12:nth-child(119)`
- `.t35.tm27`
- `article[data-instance="7148212"]`
- `a[data-k5a-url="https://www.tu.no/a/7148327"] > .t37.tm27`
- `.row.large-12.small-12:nth-child(122)`
- `.border-tum-green`
- `a[data-k5a-url="https://www.digi.no/a/7146728"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.digi.no/a/7146728"] > .tm18.t26`
- `article[data-instance="7146844"]`
- `.row.large-12.small-12:nth-child(125)`
- `.tm30.t55`
- `a[data-k5a-url="https://www.tu.no/a/7147360"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7147360"] > .t31.tm23`
- `.t53.tm27`
- `.row.large-12.small-12:nth-child(127) > .columns.large-4.large-abs-4`
- `a[data-k5a-url="https://www.tu.no/a/7142746"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7144423"] > .t36`
- `a[data-k5a-url="https://www.tu.no/a/7145539"] > .media`
- `.t27.tm31`
- `article[data-instance="7143617"]`
- `article[data-tag="energi,vannkraft"]`
- `a[data-k5a-url="https://www.digi.no/a/7144018"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7144018"] > .t38`
- `a[data-k5a-url="https://www.tu.no/a/7144014"] > .t21.below.kicker`
- `.t45.tm22`
- `a[data-k5a-url="https://www.tu.no/a/7142874"] > .below.kicker`
- `.t46.tm29`
- `article[data-tag="equinor,energi,ntb,utenriks"]`
- `a[data-k5a-url="https://www.digi.no/a/7144043"] > .media`
- `.t29.tm27`
- `a[data-k5a-url="https://www.tu.no/a/7140996"] > .desktop-floatLeft.media`
- `.t39.tm22`
- `.t37.tm20`
- `.t33.tm28`
- `a[data-k5a-url="https://www.tu.no/a/6445917"] > .media`
- `.t25.tm28`
- `article[data-tag="arbeidsliv,nito,kommentar"]`
- `a[data-k5a-url="https://www.tu.no/a/7141633"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7141633"] > .below.kicker`
- `.t38.tm29`
- `article[data-instance="7141950"]`
- `a[data-k5a-url="https://www.digi.no/a/7141845"] > .t20.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7141845"] > .tm23.t33`
- `article[data-instance="7140962"]`
- `a[data-k5a-url="https://www.tu.no/a/7141917"] > .mobile-floatLeft.media`
- `.t17`
- `.t29.tm25`
- `article[data-tag="samferdsel,klima"]`
- `article[data-tag="eu,industri"]`
- `article[data-instance="7142185"]`
- `a[data-k5a-url="https://www.digi.no/a/5705943"] > .t27`
- `a[data-k5a-url="https://www.digi.no/a/7141598"] > .t23.below.kicker`
- `.t52.tm29`
- `.t31.tm25`
- `.row.large-12.small-12:nth-child(139)`
- `a[data-k5a-url="https://www.tu.no/a/5704819"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/5704819"] > .t39.tm28`
- `a[data-k5a-url="https://www.tu.no/a/7141196"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7141196"] > .t33.tm27`
- `.row.large-12.small-12:nth-child(141)`
- `article[data-tag="andøya,romfart"]`
- `a[data-k5a-url="https://www.digi.no/a/7141732"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/7141732"] > .t31`
- `article[data-tag="it,datasenter"]`
- `article[data-tag="telenor,telekom"]`
- `a[data-k5a-url="https://www.tu.no/a/7141244"] > .t26.below.kicker`
- `.t62.tm36`
- `a[data-k5a-url="https://www.tu.no/a/5706079"] > .t45`
- `a[data-k5a-url="https://www.tu.no/a/7141373"] > .t25.below.kicker`
- `.tm30.t43`
- `a[data-k5a-url="https://www.tu.no/a/6445883"] > .media`
- `.t52.tm37`
- `a[data-k5a-url="https://www.digi.no/a/7141342"] > .t18.below.kicker`
- `.tm32.t34`
- `a[data-k5a-url="https://www.tu.no/a/7141395"] > .mobile-floatLeft.media`
- `a[data-k5a-url="https://www.tu.no/a/7141395"] > .t19.below.kicker`
- `.tm32.t32`
- `a[data-k5a-url="https://www.digi.no/a/5704754"] > .below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/5704754"] > .t38`
- `.tm36.t32`
- `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t18.below.kicker`
- `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t39.tm28`
- `.border-style-solid > h5`
- `#markup_7141430 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_7141431 > .fullwidthTarget.content > unite-player,#status-container`
- `#markup_7141432 > .fullwidthTarget.content > unite-player,#status-container`
- `unite-player[muted=""],#status-container`
- `.t30.below.kicker`
- `.t86`
- `.row.large-12.small-12:nth-child(151)`
- `a[data-k5a-url="https://www.tu.no/a/7140700"] > .media`
- `a[data-k5a-url="https://www.tu.no/a/7140700"] > .t23.below.kicker`
- `.tm49`
- `a[data-k5a-url="https://www.tu.no/a/7140602"] > .below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7140602"] > .t32.tm22`
- `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t24.below.kicker`
- `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t55`
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
