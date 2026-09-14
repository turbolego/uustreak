# WCAG Violations Report for Oslo Nye Teater AS

**Timestamp:** 2026-09-14T08:25:15.432Z
**URL:** [https://oslonye.no/](https://oslonye.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.hero-banner__cover > h4`
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
- **Count:** 17

#### Affected Elements:

- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-right.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-right.hovedscenen.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(5) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-right.hovedscenen.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(5) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .alignment-top.hovedscenen.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(6) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt > .alignment-right.hovedscenen.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(7) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(8) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .cafescenen.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(2) > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(9) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3) > .alignment-top.bg-none.block > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(11) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
- `.large-4.medium-6.cpt:nth-child(3) > .cafescenen.alignment-top.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(12) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1) > .alignment-top.bg-none.block > .les-mer-link`
- `.large-4.medium-6.cpt:nth-child(3) > .alignment-top.hovedscenen.bg-none > .les-mer-link`
- `.forestillinger-blocks-panel:nth-child(13) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt > .alignment-top.bg-none.block > .les-mer-link`
- `.scroll-to-top`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 122

#### Affected Elements:

- `#background-video`
- `.background-link`
- `.hero-banner > .grid-container`
- `.hovedscenen > .flex-container.align-middle > span`
- `.centralteatret > .flex-container.align-middle > span`
- `.teaterkjellern > .flex-container.align-middle > span`
- `.forestillinger-blocks-panel:nth-child(3) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt`
- `.border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .title`
- `.border-orange.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
- `.border-yellow.advertise.text-center > .text-orange.heading-small.content-holder > .title`
- `.border-yellow.advertise.text-center > .text-orange.heading-small.content-holder > .short-description`
- `.forestillinger-blocks-panel:nth-child(4) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cpt`
- `.forestillinger-blocks-panel:nth-child(5)`
- `.forestillinger-blocks-panel:nth-child(6)`
- `.forestillinger-blocks-panel:nth-child(7)`
- `.forestillinger-blocks-panel:nth-child(8)`
- `.forestillinger-blocks-panel:nth-child(9)`
- `.text-green > .title`
- `.forestillinger-blocks-panel:nth-child(10) > .grid-container > .grid-padding-x.grid-x > .large-8.medium-6.cell`
- `.forestillinger-blocks-panel:nth-child(11)`
- `.forestillinger-blocks-panel:nth-child(12) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(1)`
- `.border-green > .text-yellow.heading-small.content-holder > .title`
- `.forestillinger-blocks-panel:nth-child(12) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt:nth-child(3)`
- `.border-orange.rounded.advertise > .text-yellow.heading-small.content-holder > .title`
- `.forestillinger-blocks-panel:nth-child(13) > .grid-container > .grid-padding-x.grid-x > .large-4.medium-6.cpt`
- `.current-month`
- `.desktop`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(2) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .teaterkjellern.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(3) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(4) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(5) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .teaterkjellern.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(6) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(7) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .teaterkjellern.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(8) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(9) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(10) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .teaterkjellern.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(11) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(12) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .teaterkjellern.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(13) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(14) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(15) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(16) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(17) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .teaterkjellern.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(18) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(19) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .large-7.cell > .content-holder > .cat-cover > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(20) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(21) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-7.cell > .content-holder > .cat-cover:nth-child(1) > .centralteatret.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-7.cell > .content-holder > .cat-cover:nth-child(2) > .teaterkjellern.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(22) > .text-sm-right.large-3.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .large-2.cell`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .large-7.cell > .content-holder > .cat-cover > .hovedscenen.cat.hide1`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .large-7.cell > .content-holder > .title.text-uppercase.text-white`
- `.kommende-forestillinger.align-middle.grid-padding-x:nth-child(23) > .text-sm-right.large-3.cell`
