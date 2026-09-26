# WCAG Violations Report for Oslo Nye Teater AS

**Timestamp:** 2026-09-26T06:24:31.661Z
**URL:** [https://oslonye.no/](https://oslonye.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.large-3.medium-6.cell:nth-child(1) > h4`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- `#s`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 16

#### Affected Elements:

- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .hovedscenen.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1) > .alignment-top.centralteatret.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3) > .alignment-top.centralteatret.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(5) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .alignment-top.centralteatret.bg-none > .les-mer-link`
- `.alignment-right.hovedscenen.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1) > .alignment-top.centralteatret.bg-none > .les-mer-link`
- `.large-4.cpt.medium-6:nth-child(3) > .hovedscenen.alignment-top.bg-none > .les-mer-link`
- `.alignment-right.centralteatret.bg-none > .les-mer-link`
- `.large-4.cpt.medium-6:nth-child(1) > .hovedscenen.alignment-top.bg-none > .les-mer-link`
- `.large-4.cpt.medium-6:nth-child(2) > .alignment-top.centralteatret.bg-none > .les-mer-link`
- `.cafescenen.alignment-top.centralteatret > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .alignment-top.centralteatret.bg-none > .les-mer-link`
- `.alignment-left.cafescenen.centralteatret > .les-mer-link`
- `.alignment-left.hovedscenen.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(12) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6 > .alignment-top.centralteatret.bg-none > .les-mer-link`
- `.scroll-to-top`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 70

#### Affected Elements:

- `#background-video`
- `.background-link`
- `.hero-banner > .grid-container`
- `.hovedscenen > .flex-container.align-middle > span`
- `.centralteatret > .flex-container.align-middle > span`
- `.teaterkjellern > .flex-container.align-middle > span`
- `.large-4.medium-6.cell:nth-child(1) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .title`
- `.large-4.medium-6.cell:nth-child(1) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6`
- `.large-4.medium-6.cell:nth-child(3) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .title`
- `.large-4.medium-6.cell:nth-child(3) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
- `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1)`
- `.large-4.medium-6.cell:nth-child(2) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .title`
- `.large-4.medium-6.cell:nth-child(2) > a[target="_blank"] > .advertise-cover- > .border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
- `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3)`
- `.forestillinger-blocks-panel:nth-child(5)`
- `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(1)`
- `.border-yellow.advertise.text-center > .text-orange.heading-small.content-holder > .title`
- `.border-yellow.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
- `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6:nth-child(3)`
- `.forestillinger-blocks-panel:nth-child(7)`
- `.forestillinger-blocks-panel:nth-child(8)`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6`
- `.text-green > .title`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell:nth-child(3)`
- `.alignment-left.cafescenen.centralteatret > .content-cover.text-center.h-100 > .heading-small.content-holder.h-100 > .location.text-uppercase`
- `.alignment-left.cafescenen.centralteatret > .content-cover.text-center.h-100 > .heading-small.content-holder.h-100 > .les-mer-link`
- `.alignment-left.cafescenen.centralteatret > .content-cover.text-center.h-100 > .heading-small.content-holder.h-100 > .location-desc:nth-child(3)`
- `.alignment-left.cafescenen.centralteatret > .content-cover.text-center.h-100 > .heading-small.content-holder.h-100 > .second.button-group`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cell`
- `.border-green > .text-yellow.heading-small.content-holder > .title`
- `.forestillinger-blocks-panel:nth-child(11) > .grid-container > .grid-padding-x.grid-x > .large-8.cpt.medium-6`
- `.forestillinger-blocks-panel:nth-child(12) > .grid-container > .grid-padding-x.grid-x > .large-4.cpt.medium-6`
- `.rounded.border-orange.advertise > .text-yellow.heading-small.content-holder > .title`
- `.current-month`
- `.desktop`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-7.cell > .content-holder > .cat-cover > .cat.centralteatret.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-7.cell > .content-holder > .text-white.text-uppercase.title`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .cat-cover > .cat.hovedscenen.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .text-white.text-uppercase.title`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .cat.centralteatret.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .teaterkjellern.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .text-white.text-uppercase.title`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-7.cell > .content-holder > .cat-cover > .cat.hovedscenen.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-7.cell > .content-holder > .text-white.text-uppercase.title`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-7.cell > .content-holder > .cat-cover > .cat.centralteatret.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-7.cell > .content-holder > .text-white.text-uppercase.title`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-7.cell > .content-holder > .cat-cover > .cat.hovedscenen.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-7.cell > .content-holder > .text-white.text-uppercase.title`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .cat.centralteatret.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .teaterkjellern.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-7.cell > .content-holder > .text-white.text-uppercase.title`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-7.cell > .content-holder > .cat-cover > .cat.hovedscenen.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-7.cell > .content-holder > .text-white.text-uppercase.title`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .text-sm-right.large-3.cell`
