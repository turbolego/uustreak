# WCAG Violations Report for Hotel Alexandra AS

**Timestamp:** 2025-12-21T01:21:50.794Z
**URL:** [https://www.alexandra.no/no/framside.aspx](https://www.alexandra.no/no/framside.aspx)
**Total Violations:** 10

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- `.big-booking-box_form_ext-button`
- `input[value="Abonner"]`
- `.map-box_content > a[target="_blank"]`
- `button`
- `a[href$="mailto:alex@alexandra.no"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.col-md-first.col-sm-first.col-xs-first:nth-child(2) > .article-box.grid-item > .article-box_content > .article-box_title`

### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT, RGAAv4, RGAA-8.3.1
- **Count:** 1

#### Affected Elements:

- `html`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 8

#### Affected Elements:

- `.submit-placeholder`
- `.col-md-first.col-sm-first.col-xs-first:nth-child(2) > .article-box.grid-item > .article-box_image > img`
- `.col-sm-last.col-xs-last.col-xs-6:nth-child(3) > .article-box.grid-item > .article-box_image > img`
- `.col-md-first.col-sm-last.col-xs-last > .article-box.grid-item > .article-box_image > img`
- `.col-md-last.col-sm-last.col-xs-last > .article-box.grid-item > .article-box_image > img`
- `.col-sm-last.col-xs-last.col-xs-6:nth-child(9) > .article-box.grid-item > .article-box_image > img`
- `.col-md-last.col-sm-first.col-xs-first:nth-child(10) > .article-box.grid-item > .article-box_image > img`
- `.footer_logo--secondary-logo`

### Image buttons must have alternative text

- **Impact:** critical
- **Description:** Ensure <input type="image"> elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/input-image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, wcag412, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, EN-9.4.1.2, ACT, RGAAv4, RGAA-1.1.3
- **Count:** 1

#### Affected Elements:

- `input[src$="btn-search.png"]`

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 2

#### Affected Elements:

- `.search-bar-js`
- `form[action="/no/search.aspx"] > .search-bar[name="search"][type="search"]`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- `.navigation_logo`
- `.footer_logo > a`
- `a[target="_blank"]:nth-child(1)`
- `a[target="_blank"]:nth-child(2)`
- `.sosial-box > a:nth-child(3)`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 22

#### Affected Elements:

- `.desktop`
- `.col-md-first.col-sm-first.col-xs-first:nth-child(2)`
- `.col-sm-last.col-xs-last.col-xs-6:nth-child(3)`
- `.newsletter-heading`
- `.newsletter-box > p`
- `.newsletter-box > div > .validate.newsletter-form[name="mc-embedded-subscribe-form"] > div > .mc-field-group`
- `.col-md-first.col-sm-last.col-xs-last`
- `.col-sm-first.col-xs-first.col-xs-6:nth-child(6)`
- `.col-md-last.col-sm-last.col-xs-last`
- `.col-md-first.col-sm-first.col-xs-first:nth-child(8)`
- `.col-sm-last.col-xs-last.col-xs-6:nth-child(9)`
- `.col-md-last.col-sm-first.col-xs-first:nth-child(10)`
- `.map-box_content`
- `.footer_logo`
- `.footer_item:nth-child(1)`
- `.footer_item:nth-child(2)`
- `.search-item > .footer_item_title`
- `form[action="/no/search.aspx"] > .search-bar[name="search"][type="search"]`
- `.footer-newsletter > .footer_item_title`
- `.footer-newsletter > div > .validate.newsletter-form[name="mc-embedded-subscribe-form"] > div > .mc-field-group`
- `.footer_item:nth-child(5)`
- `.social-button-wrapper`
