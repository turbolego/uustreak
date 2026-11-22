# WCAG Violations Report for Stiftelsen helgeland museum

**Timestamp:** 2026-11-22T06:06:18.210Z
**URL:** [https://helgelandmuseum.no/](https://helgelandmuseum.no/)
**Total Violations:** 3

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 16

#### Affected Elements:

- `div[data-title="Eldre steinalder"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Yngre steinalder"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Bronsealderen"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Yngre jernalder"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Merovingertid"] > button[type="button"][aria-controls="timeline"]`
- `button[aria-label="Gå til visning 6 om Vikingtid."]`
- `div[data-title="Middelalder"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Reformasjon"] > button[type="button"][aria-controls="timeline"]`
- `button[aria-label="Gå til visning 9 om Enevelde."]`
- `div[data-title="Embetsmannsstaten"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Industrialisering"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Mellomkrigstid"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Andre verdenskrig"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Etterkrigstid"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Oljealderen"] > button[type="button"][aria-controls="timeline"]`
- `div[data-title="Informasjonenes tidsalder"] > button[type="button"][aria-controls="timeline"]`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- `button[aria-controls="timeline-1-1"]`
- `button[aria-controls="timeline-1-2"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `a[href$="#footer"]`
- `.lower-footer`
