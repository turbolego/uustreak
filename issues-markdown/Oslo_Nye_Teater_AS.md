# WCAG Violations Report for Oslo Nye Teater AS

**Timestamp:** 2025-11-01T00:37:59.608Z
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
- **Count:** 14

#### Affected Elements:

- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .centralteatret.alignment-top.bg-none > .les-mer-link`
- `.alignment-right > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .centralteatret.alignment-top.bg-none > .les-mer-link`
- `.alignment-left > .les-mer-link`
- `.hovedscenen.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3) > .centralteatret.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1) > .centralteatret.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3) > .teaterkjellern.centralteatret.alignment-top > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .teaterkjellern.centralteatret.alignment-top > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1) > .teaterkjellern.centralteatret.alignment-top > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(2) > .teaterkjellern.centralteatret.alignment-top > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3) > .teaterkjellern.centralteatret.alignment-top > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .teaterkjellern.centralteatret.alignment-top > .les-mer-link`
- `.scroll-to-top`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 27

#### Affected Elements:

- `#background-video`
- `.background-link`
- `.hero-banner > .grid-container`
- `.theater-list > li:nth-child(1)`
- `.theater-list > li:nth-child(2)`
- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell:nth-child(1)`
- `.large-4.medium-6.cell:nth-child(2) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-yellow.content-holder.heading-small > .title`
- `.large-4.medium-6.cell:nth-child(2) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-yellow.content-holder.heading-small > .short-description`
- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6`
- `.forestillinger-blocks-panel:nth-child(4)`
- `.advertise-cover- > .border-green.advertise.text-center > .text-orange.content-holder.heading-small > .title`
- `.advertise-cover- > .border-green.advertise.text-center > .text-orange.content-holder.heading-small > .short-description`
- `.forestillinger-blocks-panel:nth-child(5) > .grid-container > .grid-padding-x.grid-x > .large-8.cpt.medium-6`
- `.forestillinger-blocks-panel:nth-child(6)`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1)`
- `.text-green > .title`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3)`
- `.large-4.medium-6.cell:nth-child(1) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-yellow.content-holder.heading-small > .title`
- `.large-4.medium-6.cell:nth-child(1) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-yellow.content-holder.heading-small > .short-description`
- `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6`
- `.rounded.border-green.advertise > .text-orange.content-holder.heading-small > .title`
- `.rounded.border-green.advertise > .text-orange.content-holder.heading-small > .short-description`
- `.forestillinger-blocks-panel:nth-child(9)`
- `.forestillinger-blocks-panel:nth-child(10)`
- `.prev.desktop`
- `.current-month`
- `.next.desktop`
