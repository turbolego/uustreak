# WCAG Violations Report for Jysk AS

**Timestamp:** 2026-10-08T10:37:53.687Z
**URL:** [https://jysk.no/](https://jysk.no/)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `img[title="Annonserte varer"]`
  - **HTML:** `<img title="Annonserte varer" alt="Annonserte varer" loading="lazy" width="1000" height="667" decoding="async" data-nimg="1" class="relative transition-..." style="color:transparent" sizes="(min-width: 1372px) ..." srcset="https://img.jysk…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="FAST LAV PRIS"]`
  - **HTML:** `<img title="FAST LAV PRIS" alt="FAST LAV PRIS" loading="lazy" width="1000" height="667" decoding="async" data-nimg="1" class="relative transition-..." style="color:transparent" sizes="(min-width: 1372px) ..." srcset="https://img.jysk.io?..…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Gavekort"]`
  - **HTML:** `<img title="Gavekort" alt="Gavekort" loading="lazy" width="1000" height="667" decoding="async" data-nimg="1" class="relative transition-..." style="color:transparent" sizes="(min-width: 1372px) ..." srcset="https://img.jysk.io?..." src="ht…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 19

#### Affected Elements:

- **Target:** `.w-10\/12.content-center[href$="sleepingdays"] > .text-white.group-hover\:underline`
  - **HTML:** `<span style="color:#FFFFFF" class="text-white group-hover:underline">Forny soverommet med små priser og store besparelser</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.w-10\/12.content-center[href$="nyheter"] > .text-white.group-hover\:underline`
  - **HTML:** `<span style="color:#FFFFFF" class="text-white group-hover:underline">Utforsk sesongens nyheter!</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.h-9.text-center[data-testid="campaign-bar"]:nth-child(3) > .w-10\/12.content-center.self-center > .text-white.group-hover\:underline`
  - **HTML:** `<span style="color:#FFFFFF" class="text-white group-hover:underline">Gjør gode kjøp til hjemmet!</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.justify-center[href$="om-jysk"][data-testid="usp"]:nth-child(1) > .md\:text-2xl.mt-2.text-center`
  - **HTML:** `<div class="mt-2 text-center text-lg font-semibold md:text-2xl">47 år med gode tilbud</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.justify-center[href$="om-jysk"][data-testid="usp"]:nth-child(1) > .text-center.md\:text-lg`
  - **HTML:** `<div class="text-center md:text-lg">Mer enn 3600 butikker i over 49 land</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.justify-center[href$="om-jysk"][data-testid="usp"]:nth-child(2) > .md\:text-2xl.mt-2.text-center`
  - **HTML:** `<div class="mt-2 text-center text-lg font-semibold md:text-2xl">Skandinaviske røtter</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.justify-center[href$="om-jysk"][data-testid="usp"]:nth-child(2) > .text-center.md\:text-lg`
  - **HTML:** `<div class="text-center md:text-lg">Vi er globale med skandinaviske røtter. Etab. Danmark 1979.</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="kvalitet-og-garantier"] > .md\:text-2xl.mt-2.text-center`
  - **HTML:** `<div class="mt-2 text-center text-lg font-semibold md:text-2xl">Madrassgaranti</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="kvalitet-og-garantier"] > .text-center.md\:text-lg`
  - **HTML:** `<div class="text-center md:text-lg">25 års garanti på våre GOLD madrasser</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.justify-center[href$="fast-lav-pris"][data-testid="usp"] > .md\:text-2xl.mt-2.text-center`
  - **HTML:** `<div class="mt-2 text-center text-lg font-semibold md:text-2xl">FAST LAV PRIS</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.justify-center[href$="fast-lav-pris"][data-testid="usp"] > .text-center.md\:text-lg`
  - **HTML:** `<div class="text-center md:text-lg">Vi har håndplukket et bredt utvalg av produkter som alltid har de samme lave prisene</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text-xl`
  - **HTML:** `<h3 class="mb-2 text-center text-xl font-semibold md:text-4xl">Vinn et gavekort på 3.000 kroner hos JYSK</h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.max-w-3xl > .mb-8`
  - **HTML:** `<p class="mb-8 text-center text-lg">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `form > p`
  - **HTML:** `<p class="text-sm">Alle felt merket med en stjerne (*) er obligatoriske</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.flex-1.group[data-testid="form-group"]`
  - **HTML:** `<div data-testid="form-group" class="group relative flex-1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.group.relative[data-testid="form-group"]:nth-child(2)`
  - **HTML:** `<div data-testid="form-group" class="group relative">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.hover\:border-gray-500`
  - **HTML:** `<button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="false" class="flex items-center ju..." data-testid="checkbox" aria-labelledby="_R_6ue4npkr9fivb_" tabindex="0">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#_R_6ue4npkr9fivb_`
  - **HTML:** `<span id="_R_6ue4npkr9fivb_" class="w-full px-2 peer-disabled:cursor-not-allowed peer-disabled:text-gray-400">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#onetrust-banner-sdk`
  - **HTML:** `<div id="onetrust-banner-sdk" class="otCenterRounded default vertical-align-content" tabindex="0" aria-label="Vi tilpasser opplevelsen din" aria-describedby="onetrust-policy-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

