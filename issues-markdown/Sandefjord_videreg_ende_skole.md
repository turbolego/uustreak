# WCAG Violations Report for Sandefjord videregående skole

**Timestamp:** 2026-10-10T08:14:31.347Z
**URL:** [https://www.vestfoldfylke.no/no/skoler/sandefjord-vgs/](https://www.vestfoldfylke.no/no/skoler/sandefjord-vgs/)
**Total Violations:** 1

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `iframe[title="powr social feed"], div[data-approved-index="0"] > div > .postPicture.none > .postImgWrapper.squareCrop > .postImg`
  - **HTML:** `<img class="postImg" src="https://scontent-atl...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `iframe[title="powr social feed"], div[data-approved-index="1"] > div > .postPicture.none > .postImgWrapper.squareCrop > .postImg`
  - **HTML:** `<img class="postImg" src="https://external-atl...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `iframe[title="powr social feed"], div[data-approved-index="2"] > div > .postPicture.none > .postImgWrapper.squareCrop > .postImg`
  - **HTML:** `<img class="postImg" src="https://scontent-atl...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `iframe[title="powr social feed"], div[data-approved-index="3"] > div > .postPicture.none > .postImgWrapper.squareCrop > .postImg`
  - **HTML:** `<img class="postImg" src="https://scontent-atl...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

