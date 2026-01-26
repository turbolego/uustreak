# WCAG Violations Report for Stiftelsen Bergensklinikkene

**Timestamp:** 2026-01-26T00:29:03.517Z
**URL:** [https://no-go.kelkoogroup.net/redirect?country=no&k=612f7a9541cd6ea61eb554c0e4cff43799334e64879a30593100323327f937f98c9e335e741f7d42e8cd94d7c071b7bd2268ffed8558bde9ecd554edb2cf7a299d75728942f378b6aa14a6b479a72066dc33fcc22101175f03561393e7efbdaab9a627d27647d15087ce1185f9e8f6ff61155df98c89eb3ec2db07dba8f4793b7783cd7d5faa08e354b63e13741bc56ec49c652943ca813b4b4fa380dba3cd8de2cbe0c613f096f2a016fc4248eeecda0931022fafefafdbf580ab5545e719024c40523de4225e9adcf1f2308a7879f63ff71af2e7ee165fa62cf51f3d53dfba2afa112f6c1ec5d0dbca6e1e4a2dfef51a28cf2d914304ea29d34af757b33722dae75020b71c91286650802be3cba30f078d42fd55c045af25f02bc214153dae03cb392211b2136e80a666392579f98f9de66655f387d9f68c72bc657cb44f8fc88ede6b2f257cd339116b9be6b44babbaadcde458fe0a8c&url=https%3A%2F%2Fmecindo.no%2Fproducts%2Fglyc-sunfiber%C2%AEgastro-hindbaersmag%3Fkk%3Da4c6293-19bf7b42a77-26cbd8%26utm_source%3Dkelkoono%26utm_medium%3Dcpc%26utm_campaign%3Dkelkooclick%26utm_source_platform%3DKelkooGroup&initiator=fp&dc=false](https://no-go.kelkoogroup.net/redirect?country=no&k=612f7a9541cd6ea61eb554c0e4cff43799334e64879a30593100323327f937f98c9e335e741f7d42e8cd94d7c071b7bd2268ffed8558bde9ecd554edb2cf7a299d75728942f378b6aa14a6b479a72066dc33fcc22101175f03561393e7efbdaab9a627d27647d15087ce1185f9e8f6ff61155df98c89eb3ec2db07dba8f4793b7783cd7d5faa08e354b63e13741bc56ec49c652943ca813b4b4fa380dba3cd8de2cbe0c613f096f2a016fc4248eeecda0931022fafefafdbf580ab5545e719024c40523de4225e9adcf1f2308a7879f63ff71af2e7ee165fa62cf51f3d53dfba2afa112f6c1ec5d0dbca6e1e4a2dfef51a28cf2d914304ea29d34af757b33722dae75020b71c91286650802be3cba30f078d42fd55c045af25f02bc214153dae03cb392211b2136e80a666392579f98f9de66655f387d9f68c72bc657cb44f8fc88ede6b2f257cd339116b9be6b44babbaadcde458fe0a8c&url=https%3A%2F%2Fmecindo.no%2Fproducts%2Fglyc-sunfiber%C2%AEgastro-hindbaersmag%3Fkk%3Da4c6293-19bf7b42a77-26cbd8%26utm_source%3Dkelkoono%26utm_medium%3Dcpc%26utm_campaign%3Dkelkooclick%26utm_source_platform%3DKelkooGroup&initiator=fp&dc=false)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe, #human-contact-form-submit`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- `iframe, #human-comment`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `iframe, html`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `iframe, html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- `iframe, .captcha__human`
- `iframe, .captcha__robot__warning`
- `iframe, .captcha__robot__contact_support`
- `iframe, legend`
- `iframe, .captcha__contact__input-container`
