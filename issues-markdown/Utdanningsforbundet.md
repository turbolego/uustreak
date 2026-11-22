# WCAG Violations Report for Utdanningsforbundet

**Timestamp:** 2026-11-22T06:22:34.039Z
**URL:** [https://www.utdanningsforbundet.no/](https://www.utdanningsforbundet.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `.HeaderPromotionBlock_headerPromotionLinks___zMeq > .PrimaryCTALink_center__UtgTK.PrimaryCTALink_primaryCTALink__1eh0T[target=""]`
- `.BlockWrapper_span-3__H0f6B[data-display-option="full"]:nth-child(3) > .CampaignBlock_root__DhhXL > .CampaignBlock_contentWrapper__s0bF3 > .CampaignBlock_content___rOKV > .PrimaryCTALink_withIcon__ZuxFz.PrimaryCTALink_primaryCTALink__1eh0T[target=""]`
- `.BlockWrapper_span-3__H0f6B[data-display-option="full"]:nth-child(5) > .CampaignBlock_root__DhhXL > .CampaignBlock_contentWrapper__s0bF3 > .CampaignBlock_content___rOKV > .PrimaryCTALink_withIcon__ZuxFz.PrimaryCTALink_primaryCTALink__1eh0T[target=""]`
- `.Footer_promotionLinks__3_6W7 > .PrimaryCTALink_primaryCTALink__1eh0T[target=""]`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[frameborder="0"]`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- `a[aria-label="Lederjuss: Skolemiljøsaker"]`
- `article:nth-child(2) > .ArrangementHitListingCard_root__oZHvm`
- `article:nth-child(3) > .ArrangementHitListingCard_root__oZHvm`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `main`
- `.BlockWrapper_span-3__H0f6B[data-display-option="full"]:nth-child(1) > div > .LocalNavigationTopLayout_localNavigationTop__I8NPN[aria-label="Lokal navigasjon"]`

### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `iframe[frameborder="0"], .ShareControl__ShareIcon-sc-1pwe6vd-0`
- `iframe[frameborder="0"], .SubscribeLink__PlusIcon-sc-q4x3v7-0`
