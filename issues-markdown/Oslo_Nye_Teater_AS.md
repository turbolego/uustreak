# WCAG Violations Report for Oslo Nye Teater AS

**Timestamp:** 2026-01-22T00:36:15.259Z
**URL:** [https://oslonye.no/#](https://oslonye.no/#)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `button[data-cky-tag="accept-button"]`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .cafescenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .cafescenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .cafescenen.cat.hide1`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.hero-banner__cover > h4`
- `.large-2.medium-6.cell:nth-child(2) > h4`

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
- **Count:** 17

#### Affected Elements:

- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-right.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-right.bg-none.block > .les-mer-link`
- `.alignment-right.hovedscenen.bg-none > .les-mer-link`
- `.large-4.medium-6.cpt:nth-child(1) > .hovedscenen.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(2) > .alignment-top.bg-none.block > .les-mer-link`
- `.large-4.medium-6.cpt:nth-child(3) > .hovedscenen.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.cafescenen.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(2) > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(11) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .teaterkjellern.alignment-top.bg-none > .les-mer-link`
- `.scroll-to-top`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 30

#### Affected Elements:

- `.background-link`
- `.hero-banner > .grid-container`
- `.theater-list > li:nth-child(1)`
- `.theater-list > li:nth-child(2)`
- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt`
- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell > a[target="_blank"] > .advertise-cover- > .border-green.advertise.text-center > .text-yellow.heading-small.content-holder > .title`
- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell > a[target="_blank"] > .advertise-cover- > .border-green.advertise.text-center > .text-yellow.heading-small.content-holder > .short-description`
- `.forestillinger-blocks-panel:nth-child(4)`
- `.forestillinger-blocks-panel:nth-child(5)`
- `.forestillinger-blocks-panel:nth-child(6)`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1)`
- `.text-green > .title`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3)`
- `.forestillinger-blocks-panel:nth-child(8)`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1)`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell:nth-child(2) > a[target="_blank"] > .advertise-cover- > .border-green.advertise.text-center > .text-yellow.heading-small.content-holder > .title`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell:nth-child(2) > a[target="_blank"] > .advertise-cover- > .border-green.advertise.text-center > .text-yellow.heading-small.content-holder > .short-description`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3)`
- `.forestillinger-blocks-panel:nth-child(10)`
- `.forestillinger-blocks-panel:nth-child(11)`
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
