# WCAG Violations Report for Stiftelsen Bergensklinikkene

**Timestamp:** 2025-12-25T21:12:01.010Z
**URL:** [https://www.banggood.com/?p=QG132133330053201905&custlinkid=3773084](https://www.banggood.com/?p=QG132133330053201905&custlinkid=3773084)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 16

#### Affected Elements:

- `.header-search`
- `a[data-spm="0000000wd-0"]`
- `a[data-spm="0000000wd-1"]`
- `a[data-spm="0000000wd-2"]`
- `a[data-spm="0000000wd-3"]`
- `a[data-spm="0000000wd-4"]`
- `a[data-spm="0000000wd-5"]`
- `a[data-spm="0000000wd-6"]`
- `a[data-spm="0000000wd-7"]`
- `.go-text`
- `div[data-pid="1980678"] > .mpi-old[data-spm="0000004Pp"]`
- `div[data-pid="1246031"] > .mpi-old[data-spm="0000004Pp"]`
- `div[data-pid="2002256"] > .mpi-old[data-spm="0000004Pp"]`
- `div[data-pid="2042092"] > .mpi-old[data-spm="0000004Pp"]`
- `div[data-pid="2037975"] > .mpi-old[data-spm="0000004Pp"]`
- `div[data-pid="1894619"] > .mpi-old[data-spm="0000004Pp"]`

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 1

#### Affected Elements:

- `.header-search-words`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `h1[data-spm="0000000aQ"]`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 31

#### Affected Elements:

- `img[data-spm="0000001qv"]`
- `.lazy[data-spm="0000001Nh"]`
- `.home-lcp-empty`
- `img[data-spm-masonry="0"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="1"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="2"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="3"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="5"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="6"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="7"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="8"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="9"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="10"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="16"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="18"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="19"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="20"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="21"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="22"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="23"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="24"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="25"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="26"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="27"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="28"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="29"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="30"][data-spm="0000001GZ"]`
- `img[data-spm-masonry="43"][data-spm="0000001GZ"]`
- `#tracker_146_1842`
- `#tracker_146_1843`
- `img[width="1"][height="1"]:nth-child(76)`

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `.header-search`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 49

#### Affected Elements:

- `.top-link`
- `.exclick[data-spm="0000001Ng"][data-spm-data="{\"bid\":\"88745\",\"pid\":\"\"}"]`
- `a[data-spm="0000001GN-1"]`
- `a[data-spm-data="{\"bid\":\"1661583977\",\"pid\":\"\"}"][data-spm-masonry="0"][data-spm="0000001GY"]`
- `a[data-spm-data="{\"bid\":\"1741228075\",\"pid\":\"\"}"]`
- `a[data-spm-data="{\"bid\":\"1661583753\",\"pid\":\"\"}"]`
- `a[data-spm-data="{\"bid\":\"1741228576\",\"pid\":\"\"}"]`
- `a[data-spm-masonry="5"][href="javascript:;"][data-spm="0000001GY"]`
- `a[data-spm-data="{\"bid\":\"1661583894\",\"pid\":\"\"}"]`
- `a[data-spm-masonry="7"][data-spm="0000001GY"]`
- `a[data-spm-data="{\"bid\":\"1661583920\",\"pid\":\"\"}"]`
- `a[data-spm-masonry="9"][data-spm="0000001GY"]`
- `a[data-spm-data="{\"bid\":\"1661583850\",\"pid\":\"\"}"]`
- `a[data-spm-masonry="13"]`
- `a[data-spm-masonry="15"][href="javascript:;"][data-spm="0000001GY"]`
- `a[data-spm-data="{\"bid\":\"1661583553\",\"pid\":\"\"}"]`
- `a[data-spm-masonry="18"][href="javascript:;"][data-spm="0000001GY"]`
- `a[data-spm-masonry="19"][href="javascript:;"][data-spm="0000001GY"]`
- `a[data-spm-masonry="20"][href="javascript:;"][data-spm="0000001GY"]`
- `a[data-spm-masonry="21"][href="javascript:;"][data-spm="0000001GY"]`
- `a[data-spm-masonry="22"][href="javascript:;"][data-spm="0000001GY"]`
- `a[data-spm-masonry="23"][href="javascript:;"][data-spm="0000001GY"]`
- `a[data-spm-masonry="24"][href="javascript:;"][data-spm="0000001GY"]`
- `a[data-spm-data="{\"bid\":\"1661584196\",\"pid\":\"\"}"]`
- `a[data-spm-masonry="26"][data-spm="0000001GY"][data-expose2="1"]`
- `a[data-spm-data="{\"bid\":\"1661584374\",\"pid\":\"\"}"]`
- `a[data-spm-data="{\"bid\":\"1661584619\",\"pid\":\"\"}"]`
- `a[data-spm-data="{\"bid\":\"1661584521\",\"pid\":\"\"}"]`
- `a[data-spm-data="{\"bid\":\"1661584881\",\"pid\":\"\"}"]`
- `a[data-spm-data="{\"bid\":\"1702880200\",\"pid\":\"\"}"]`
- `a[data-spm="0000001Hg"]`
- `a[data-spm="0000001QG"]`
- `a[data-spm="0000001SJ"]`
- `.qrcode-new`
- `a[data-spm="0000000sF"]`
- `a[data-spm="0000000sH"]`
- `.facebook`
- `.instagram`
- `.youtube`
- `.twitter`
- `.pin`
- `.douyin`
- `.vk`
- `.blog`
- `.reddit`
- `.whatsapp`
- `.messenger`
- `a[data-spm="0000000uB"]`
- `a[data-spm="0000000uC"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 22

#### Affected Elements:

- `.top-item`
- `.suspended-banner-wrap`
- `.home-lcp-empty`
- `.main-mt-coupon`
- `#main-central-configuration`
- `span[data-spm="0000001Hi"]`
- `.flash-time`
- `div[data-spm="0000001Hr"]`
- `ul[data-spm="0000001Ht"]`
- `span[data-spm="0000001QI"]`
- `div[data-spm="0000001QJ"]`
- `ul[data-spm="0000001QL"]`
- `span[data-spm="0000001SL"]`
- `div[data-spm="0000001SM"]`
- `.brand-list`
- `.recomend-tab-head`
- `.main-keyword`
- `.main-sellingPoint`
- `.newbie-popup`
- `#tracker_146_1842`
- `#tracker_146_1843`
- `img[width="1"][height="1"]:nth-child(76)`
