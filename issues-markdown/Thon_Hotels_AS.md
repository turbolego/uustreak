# WCAG Violations Report for Thon Hotels AS

**Timestamp:** 2025-11-05T18:42:46.815Z
**URL:** [https://www.thonhotels.no/#](https://www.thonhotels.no/#)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 13

#### Affected Elements:

- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(2) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(4) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(6) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(8) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(10) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(12) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(14) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(16) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(18) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(20) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(22) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(24) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`
- `#coi-consent-banner__description-container-cookie_cat_necessary > .coi-consent-banner__found-cookies > .coi-consent-banner__cookie-details:nth-child(26) > .cookie-details__detail-container-data-processor-privacy-policy.cookie-details__detail-container > .cookie-details__detail-content > a[rel="noopener noreferrer"][target="_blank"]`

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 3

#### Affected Elements:

- `#switch-cookie_cat_functional-slider`
- `#switch-cookie_cat_statistic-slider`
- `#switch-cookie_cat_marketing-slider`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiConsentBanner`
