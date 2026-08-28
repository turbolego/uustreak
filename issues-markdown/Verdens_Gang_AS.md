# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-08-28T10:14:26.062Z
**URL:** [https://www.vg.no/](https://www.vg.no/)
**Total Violations:** 4

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 29

#### Affected Elements:

- `.active.carousel__nav-dot[type="button"]`
- `.carousel__nav-dot[type="button"]:nth-child(2)`
- `.carousel__nav-dot[type="button"]:nth-child(3)`
- `.carousel__nav-dot[type="button"]:nth-child(4)`
- `.carousel__nav-dot[type="button"]:nth-child(5)`
- `.carousel__nav-dot[type="button"]:nth-child(6)`
- `.carousel__nav-dot[type="button"]:nth-child(7)`
- `.carousel__nav-dot[type="button"]:nth-child(8)`
- `.carousel__nav-dot[type="button"]:nth-child(9)`
- `.carousel__nav-dot[type="button"]:nth-child(10)`
- `.carousel__nav-dot[type="button"]:nth-child(11)`
- `.carousel__nav-dot[type="button"]:nth-child(12)`
- `.carousel__nav-dot[type="button"]:nth-child(13)`
- `.carousel__nav-dot[type="button"]:nth-child(14)`
- `.carousel__nav-dot[type="button"]:nth-child(15)`
- `.carousel__nav-dot[type="button"]:nth-child(16)`
- `.carousel__nav-dot[type="button"]:nth-child(17)`
- `.carousel__nav-dot[type="button"]:nth-child(18)`
- `.carousel__nav-dot[type="button"]:nth-child(19)`
- `.carousel__nav-dot[type="button"]:nth-child(20)`
- `.carousel__nav-dot[type="button"]:nth-child(21)`
- `.carousel__nav-dot[type="button"]:nth-child(22)`
- `.carousel__nav-dot[type="button"]:nth-child(23)`
- `.carousel__nav-dot[type="button"]:nth-child(24)`
- `.carousel__nav-dot[type="button"]:nth-child(25)`
- `.carousel__nav-dot[type="button"]:nth-child(26)`
- `.carousel__nav-dot[type="button"]:nth-child(27)`
- `.carousel__nav-dot[type="button"]:nth-child(28)`
- `#nav-prev`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.carousel__item-img[loading="eager"][fetchpriority="high"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `#cover`

### <svg> elements with an img role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 1

#### Affected Elements:

- `a[href$="aJpwK7"] > ._badges_3qivm_31 > ._e24_17h30_43._badge_17h30_2 > svg[viewBox="0 0 90 45"][role="img"][fill="none"]`
