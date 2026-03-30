# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2026-03-30T03:52:18.262Z
**URL:** [https://www.kid.no/](https://www.kid.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `strong:nth-child(1) > .f4.f2[href$="soverom"]`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.g1 > .fe.ff.el`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 25

#### Affected Elements:

- `img[alt="Se alle -->"]`
- `img[alt="Sengesett"]`
- `img[alt="Putevar"]`
- `img[alt="Dundyner"]`
- `img[alt="Laken"]`
- `img[alt="Sengetepper"]`
- `img[alt="Dunputer"]`
- `img[alt="Eden sengesett 2 for 899,-"]`
- `img[alt="-->"]`
- `img[alt="Sommerdyner"]`
- `img[alt="Madrass- og putebeskytter"]`
- `a[href$="hotel-selection"] > .g0.da.c4 > .en.fw.a3`
- `img[alt="Toalettmapper 50%"]`
- `img[alt="Morgenkåper 50%"]`
- `img[alt="AVA velværeserie 40%"]`
- `img[alt="Loungewear 50%"]`
- `img[alt="Baderomstilbehør 50%"]`
- `img[alt="Håraccessories 50%"]`
- `img[alt="Therapie velværeserie 40%"]`
- `img[alt="Otto gardin"]`
- `img[alt="Petra dyne- og putepakke"]`
- `img[alt="Ullpledd"]`
- `img[alt="Helårsdyne"]`
- `img[alt="Lammeskinn"]`
- `img[alt="Sitteunderlag"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `strong:nth-child(2) > .f4.f2[href$="soverom"]`
- `.a7[href$="paske"][data-scope-link="true"]:nth-child(1)`
- `.ca.s[href$="paske"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- `.ag`
- `a[aria-label="Gå til startside"]`
- `.e7`
- `.a > div:nth-child(5)`
- `.tf-header-slider`
- `.tf-sidebar`
