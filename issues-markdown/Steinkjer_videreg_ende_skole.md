# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-06-15T05:20:29.888Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `.top-menu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f9f0795df451a3c9f"], #u_0_1_ZT`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 41

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f9f0795df451a3c9f"], .x3pnbk8`
- `iframe[name="f9f0795df451a3c9f"], .xjkvuk6`
- `iframe[name="f9f0795df451a3c9f"], .x1s688f.xzsf02u.x1nxh6w3:nth-child(2)`
- `iframe[name="f9f0795df451a3c9f"], .x1s688f.xzsf02u.x1nxh6w3:nth-child(3)`
- `iframe[name="f9f0795df451a3c9f"], .x1s688f.xzsf02u.x1nxh6w3:nth-child(5)`
- `iframe[name="f9f0795df451a3c9f"], .xyinxu5`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(1) > .xfex06f.xz9dl7a.xwib8y2 > .x1r0jzty.xdt5ytf.xl56j7k`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(1) > .xwib8y2.x1g0dm76.xpdmqnj:nth-child(2)`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(1) > .x1y5e3q9.x1hohm31.x139c44z`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(1) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(1) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(1) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(2) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(1) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(3) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(2) > .xfex06f.xz9dl7a.xwib8y2 > .x1r0jzty.xdt5ytf.xl56j7k`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(2) > .xwib8y2.x1g0dm76.xpdmqnj:nth-child(2)`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(2) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(1) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(2) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(2) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(2) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(3) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(3) > .xfex06f.xz9dl7a.xwib8y2 > .x1r0jzty.xdt5ytf.xl56j7k`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(3) > .xwib8y2.x1g0dm76.xpdmqnj:nth-child(2)`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(3) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(1) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(3) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(2) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(3) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(3) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(4) > .xfex06f.xz9dl7a.xwib8y2 > .x1r0jzty.xdt5ytf.xl56j7k`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(4) > .xwib8y2.x1g0dm76.xpdmqnj:nth-child(2)`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(4) > .x1hohm31.x139c44z.xso031l > .xqo3gd.x11dcrhx.x1frzhxr`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(4) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(1) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(4) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(2) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(4) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(3) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(5) > .xfex06f.xz9dl7a.xwib8y2 > .x1r0jzty.xdt5ytf.xl56j7k`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(5) > .x1hohm31.x139c44z.xso031l > .xqo3gd.x11dcrhx.x1frzhxr`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(5) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(1) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(5) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(2) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .x1heor9g.xqvba61[rel="noopener noreferrer"]:nth-child(5) > .xtqikln.x1y1aw1k.xsag5q8 > .x17zd0t2.x6s0dn4.x78zum5:nth-child(3) > .xi81zsa.x1nxh6w3.x1sibtaa`
- `iframe[name="f9f0795df451a3c9f"], .xyamay9`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
