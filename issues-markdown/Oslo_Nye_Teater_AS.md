# WCAG Violations Report for Oslo Nye Teater AS

**Timestamp:** 2026-02-03T00:40:50.070Z
**URL:** [https://oslonye.no/#](https://oslonye.no/#)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `button[data-cky-tag="accept-button"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.hero-banner__cover > h4`
- `.medium-6.large-2.cell:nth-child(2) > h4`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- `#s`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 18

#### Affected Elements:

- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-right.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-right.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(5) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-right.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-right.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
- `.cafescenen.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(11) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(11) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(2) > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(11) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(12) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.scroll-to-top`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 70

#### Affected Elements:

- `.background-link`
- `.hero-banner > .grid-container`
- `.theater-list > li:nth-child(1)`
- `.theater-list > li:nth-child(2)`
- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt`
- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell > a[target="_blank"] > .advertise-cover- > .border-green.advertise.text-center > .text-yellow.heading-small.content-holder > .title`
- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell > a[target="_blank"] > .advertise-cover- > .border-green.advertise.text-center > .text-yellow.heading-small.content-holder > .short-description`
- `.forestillinger-blocks-panel:nth-child(4)`
- `.forestillinger-blocks-panel:nth-child(5) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt`
- `.border-orange > .text-yellow.heading-small.content-holder > .title`
- `.border-orange > .text-yellow.heading-small.content-holder > .short-description`
- `.forestillinger-blocks-panel:nth-child(5) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell:nth-child(3)`
- `.forestillinger-blocks-panel:nth-child(6)`
- `.forestillinger-blocks-panel:nth-child(7)`
- `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1)`
- `.text-green > .title`
- `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3)`
- `.forestillinger-blocks-panel:nth-child(9)`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1)`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell:nth-child(2) > a[target="_blank"] > .advertise-cover- > .border-green.advertise.text-center > .text-yellow.heading-small.content-holder > .title`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell:nth-child(2) > a[target="_blank"] > .advertise-cover- > .border-green.advertise.text-center > .text-yellow.heading-small.content-holder > .short-description`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3)`
- `.forestillinger-blocks-panel:nth-child(11)`
- `.forestillinger-blocks-panel:nth-child(12)`
- `.current-month`
- `.desktop`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(24)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(25)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(26)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(27)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(28)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(29)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(30)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(31)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(32)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(33)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(34)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(35)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(36)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(37)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(38)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(39)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(40)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(41)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(42)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(43)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(44)`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(45)`
