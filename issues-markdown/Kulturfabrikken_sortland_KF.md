# WCAG Violations Report for Kulturfabrikken sortland KF

**Timestamp:** 2026-11-23T06:22:45.261Z
**URL:** [https://kulturfabrikkensortland.no/](https://kulturfabrikkensortland.no/)
**Total Violations:** 5

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `.btn-outline-secondary`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 7

#### Affected Elements:

- `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > .date > b`
- `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > p`
- `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > div:nth-child(4)`
- `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > div:nth-child(4) > b`
- `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > div:nth-child(5)`
- `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > div:nth-child(5) > b`
- `.carousel-caption.d-xs-block.text-left > .btn-block.btn-default[href$="ylvis-og-calle/"]`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > h5`
- `.carousel-item-next > .carousel-caption.d-xs-block.text-left > h5`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `a[rel="noopener"][target="_blank"]:nth-child(4)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 30

#### Affected Elements:

- `.carousel-item-left.active.carousel-item`
- `.carousel-item-next`
- `.main-page-navigation`
- `.\35 491.item.\35 441:nth-child(1) > .image-wrapper`
- `.\35 491.item.\35 441:nth-child(1) > .item-link`
- `.\35 494.\35 491.item:nth-child(2) > .image-wrapper`
- `.\35 494.\35 491.item:nth-child(2) > .item-link`
- `.\35 491.item.\35 441:nth-child(5) > .image-wrapper`
- `.\35 491.item.\35 441:nth-child(5) > .item-link`
- `.\31 091.\35 569.item:nth-child(8) > .image-wrapper`
- `.\31 091.\35 569.item:nth-child(8) > .item-link`
- `.\35 492.\35 570.\31 090 > .image-wrapper`
- `.\35 492.\35 570.\31 090 > .item-link`
- `.\35 569.item.\35 441:nth-child(10) > .image-wrapper`
- `.\35 569.item.\35 441:nth-child(10) > .item-link`
- `.\35 493.item.\35 441:nth-child(12) > .image-wrapper`
- `.\35 493.item.\35 441:nth-child(12) > .item-link`
- `.\35 495.\31 090.item > .image-wrapper`
- `.\35 495.\31 090.item > .item-link`
- `.\35 578.\35 569.item > .image-wrapper`
- `.\35 578.\35 569.item > .item-link`
- `#grid > .see-all[onclick="ShowAllPrograms(event, this);"][href="#"]`
- `.bottom-section > .container`
- `.order-item.col-sm-6.col-12:nth-child(1) > .order-title`
- `.order-item.col-sm-6.col-12:nth-child(1) > .order-item-body`
- `.order-item.col-sm-6.col-12:nth-child(2) > .order-title`
- `.order-item.col-sm-6.col-12:nth-child(2) > .order-item-body`
- `.news-section`
- `.footer > .container`
- `.cookie-popup-inner`
