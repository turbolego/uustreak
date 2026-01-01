# WCAG Violations Report for Norges KFUK-KFUM

**Timestamp:** 2026-01-01T00:31:32.441Z
**URL:** [https://kfuk-kfum.no/](https://kfuk-kfum.no/)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `#main-login`
- `.col-2 > button[type="submit"]`
- `.text-secondary`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 21

#### Affected Elements:

- `.leftNav > .navLink[href$="aktiviteter"] > img[height="32"]`
- `.navLink[href$="bli-med"] > img[height="32"]`
- `.navLink[href$="om-oss"] > img[height="32"]`
- `.rightNav > .navLink[href$="stott-oss"] > img[height="32"]`
- `a[href$="ressurser"] > img[height="32"]`
- `.navLink[href$="kontakt-oss"] > img[height="32"]`
- `.newsbit-big > img`
- `.col-md-6.col-12:nth-child(3) > .newsbit.newsbit-frontpage > img`
- `.col-md-6.col-12:nth-child(4) > .newsbit.newsbit-frontpage > img`
- `a[href$="folkehogskole"] > img`
- `a[href$="forandringshuset.no/"] > img`
- `a[href$="konfirmant"] > img`
- `a[href$="Lederutvikling"] > img`
- `a[href$="leirsteder"] > img`
- `a[href$="apen-barnehage"] > img`
- `a[href$="tensing.no/"] > img`
- `a[href$="idrett"] > img`
- `a[href$="kulturforalle.no/"] > img`
- `a[href$="musikk-og-kultur"] > img`
- `a[href$="frivillig"] > img`
- `a[href$="politikk-og-samfunn"] > img`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- `section:nth-child(4)`
- `input[placeholder="søk i kfuk-kfum.no"]`
- `#tilbud`
- `#front-page-partners`
- `#membership`
- `img[aria-describedby="globalSearchLabel"]`
- `.btn-cookies-info > p`
