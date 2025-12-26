# WCAG Violations Report for Sandefjord videregående skole

**Timestamp:** 2025-12-26T00:39:35.893Z
**URL:** [https://www.vestfoldfylke.no/no/skoler/sandefjord-vgs/#](https://www.vestfoldfylke.no/no/skoler/sandefjord-vgs/#)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[title="powr social feed"], div[data-approved-index="3"] > div > .postBody > .postCaption.fitText`
- `iframe[title="powr social feed"], div[data-approved-index="3"] > div > .postBody > .postCaption.fitText > .postCaptionDate`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- `iframe[title="powr social feed"], div[data-approved-index="0"] > div > .postPicture.none > .postImgWrapper.squareCrop > .postImg`
- `iframe[title="powr social feed"], div[data-approved-index="1"] > div > .postPicture.none > .postImgWrapper.squareCrop > .postImg`
- `iframe[title="powr social feed"], div[data-approved-index="2"] > div > .postPicture.none > .postImgWrapper.squareCrop > .postImg`
- `iframe[title="powr social feed"], div[data-approved-index="3"] > div > .postPicture.none > .postImgWrapper.squareCrop > .postImg`
