# WCAG Violations Report for Farsund kirkelige fellesråd

**Timestamp:** 2026-11-22T06:01:47.471Z
**URL:** [https://farsund.kirken.no/](https://farsund.kirken.no/)
**Total Violations:** 5

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `button`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 9

#### Affected Elements:

- `#dnn_dnnSearch_cmdSearch`
- `#dnn_LOGIN_enhancedLoginLink > span`
- `a[data-id="33"]`
- `a[data-id="55"]`
- `a[data-id="54"]`
- `a[data-id="56"]`
- `a[data-id="34"]`
- `a[data-id="37"]`
- `a[data-id="38"]`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 9

#### Affected Elements:

- `#menu-overlay-trigger`
- `a[data-target="#mainMenu"]`
- `#top-search-trigger`
- `#dnn_ctr380_DNNArticle_List_MyArticleList_panelArticle > .article-even > .image-container-even > a`
- `#dnn_ctr380_ModuleContent > .article-phone > .article-text-phone > .image-container-phone > a`
- `.image-container-odd > a[href$="listamenighet.no/"]`
- `.image-container-phone > a[href$="listamenighet.no/"]`
- `.image-container-even > a[href$="kirketorget.no/"]`
- `.image-container-phone > a[href$="kirketorget.no/"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `#section1`
- `.DnnModule-380 > .c_head.no_title_container > .c_content`
