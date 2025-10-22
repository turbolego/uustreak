# WCAG Violations Report for Trones skole

**Timestamp:** 2025-10-22T00:31:36.189Z
**URL:** [https://www.minskole.no/trones/#](https://www.minskole.no/trones/#)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 5

#### Affected Elements:

- `#weatherHolder > div:nth-child(2) > div > div:nth-child(3)`
- `#weatherHolder > div:nth-child(3) > div > div:nth-child(3)`
- `#weatherHolder > div:nth-child(4) > div > div:nth-child(3)`
- `#ContentPlaceHolder1_btnAppendNews`
- `#cookie-consent-close`

### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `html`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 5

#### Affected Elements:

- `#ctl17_img`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425515"] > img`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425092"] > img`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425001"] > img`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/424998"] > img`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 17

#### Affected Elements:

- `#ctl10_hl`
- `#ctl16_hl`
- `div:nth-child(1) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/425820"]`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425820"]`
- `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(3) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/425817"]`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425817"]`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425515"]`
- `div:nth-child(7) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/425383"]`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425383"]`
- `div:nth-child(9) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/425311"]`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425311"]`
- `div:nth-child(11) > div:nth-child(1) > .newsItemReadMore[href="/trones/artikkel/425157"]`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425157"]`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425092"]`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425002"]`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/425001"]`
- `div:nth-child(2) > .newsItemReadMore[href="/trones/artikkel/424998"]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 27

#### Affected Elements:

- `#divTextualLogo`
- `#panDefaultMenu`
- `.customStyleEffectColor1Bg.widgetBox_Outer`
- `.customStyleEffectColor3Bg.widgetBox_Outer:nth-child(5)`
- `.customStyleEffectColor3Bg.widgetBox_Outer:nth-child(7)`
- `.documentAccordionHeader`
- `.widgetBox_Outer:nth-child(8) > div > div:nth-child(3)`
- `.widgetBox_Outer:nth-child(11) > div > div:nth-child(1)`
- `.widgetBox_Outer:nth-child(11) > div > div:nth-child(2)`
- `.widgetBox_Outer:nth-child(11) > div > div:nth-child(3)`
- `.VIpgJd-ZVi9od-xl07Ob-lTBxed > span:nth-child(1)`
- `.VIpgJd-ZVi9od-xl07Ob-lTBxed > span:nth-child(3)`
- `.widgetBox_Outer:nth-child(16)`
- `.widgetBox_Outer:nth-child(17)`
- `#ContentPlaceHolder1_poster_divOuter`
- `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(1)`
- `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(3)`
- `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(5)`
- `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(7)`
- `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(9)`
- `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(11)`
- `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(13)`
- `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(15)`
- `#ctl00_ContentPlaceHolder1_ctl01 > div:nth-child(17)`
- `div:nth-child(19)`
- `#privacyFooter`
- `#cookie-law-info-bar`
