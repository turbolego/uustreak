// Detects axe violation nodes that come from embedded third-party code (cookie banners,
// chat widgets, forms, ads, etc.) rather than from the site's own markup.
(function (root) {
    // Patterns are matched against the node's own attributes (except href) and its CSS selector,
    // so plain links to e.g. Facebook or YouTube are not treated as embedded code.
    const PROVIDERS = [
        { name: 'OneTrust', pattern: /onetrust|optanon|\bot-sdk|\bot-pc-|\bot-floating/i },
        { name: 'Cookiebot', pattern: /cybotcookiebot|cookiebot/i },
        { name: 'Cookie Information', pattern: /coioverlay|\bcoi-(?:banner|consent|button)|\bcoi__/i },
        { name: 'Usercentrics', pattern: /usercentrics/i },
        { name: 'Didomi', pattern: /didomi/i },
        { name: 'CookieFirst', pattern: /cookiefirst/i },
        { name: 'consentmanager', pattern: /\bcmpbox|\bcmpwrapper|consentmanager/i },
        { name: 'TrustArc', pattern: /\btruste[-_]|trustarc/i },
        { name: 'Quantcast Choice', pattern: /\bqc-cmp/i },
        { name: 'iubenda', pattern: /iubenda/i },
        { name: 'Klaro', pattern: /\bklaro\b|kiprotect\.com\/klaro/i },
        { name: 'CookieYes', pattern: /\bcky-(?:consent|btn|banner|modal|preference)|cookieyes/i },
        { name: 'Complianz', pattern: /\bcmplz-/i },
        { name: 'Borlabs Cookie', pattern: /borlabs/i },
        { name: 'Termly', pattern: /termly/i },
        { name: 'Cookie Script', pattern: /cookie-script|cookiescript/i },
        { name: 'HubSpot', pattern: /\bhs-form|\bhbspt|\bhs-cta|hubspot/i },
        { name: 'Intercom', pattern: /intercom/i },
        { name: 'Zendesk', pattern: /zendesk|\bwebwidget\b/i },
        { name: 'Drift', pattern: /\bdrift-(?:widget|frame|conductor)/i },
        { name: 'tawk.to', pattern: /\btawk/i },
        { name: 'LiveChat', pattern: /\blivechat|cx-webchat/i },
        { name: 'boost.ai', pattern: /boost\.ai|\bboostai/i },
        { name: 'Puzzel', pattern: /puzzel/i },
        { name: 'giosg', pattern: /giosg/i },
        { name: 'Salesforce', pattern: /embeddedservice|\besw-/i },
        { name: 'Tidio', pattern: /tidio/i },
        { name: 'Freshchat', pattern: /freshchat|\bfc-widget|freshworks/i },
        { name: 'Crisp', pattern: /\bcrisp-client/i },
        { name: 'Sleeknote', pattern: /sleeknote/i },
        { name: 'Hotjar', pattern: /hotjar|\b_hj[a-z]/i },
        { name: 'reCAPTCHA', pattern: /recaptcha/i },
        { name: 'Trustpilot', pattern: /trustpilot/i },
        { name: 'UserWay', pattern: /userway/i },
        { name: 'ReadSpeaker', pattern: /readspeaker|\brsbtn/i },
        { name: 'Elfsight', pattern: /elfsight|\beapps-/i },
        { name: 'Weglot', pattern: /weglot/i },
        { name: 'Typeform', pattern: /typeform/i },
        { name: 'Issuu', pattern: /issuu/i },
        { name: 'Annonser', pattern: /google_ads|adsbygoogle|doubleclick|googlesyndication|adform|adnami/i },
    ];

    function openingTag(html) {
        const match = String(html || '').match(/^<[^>]*>/);
        return match ? match[0] : String(html || '');
    }

    function hostOf(url, baseUrl) {
        try {
            return new URL(url, baseUrl).hostname.replace(/^www\./, '');
        } catch {
            return '';
        }
    }

    function sameSite(hostA, hostB) {
        const tail = (host) => host.split('.').slice(-2).join('.');
        return Boolean(hostA && hostB) && tail(hostA) === tail(hostB);
    }

    // Returns the provider name for a node from embedded code, or null for first-party markup.
    function getEmbeddedProvider(node, pageUrl) {
        if (!node) return null;
        const target = Array.isArray(node.target) ? node.target : [];

        // Nested arrays are shadow DOM paths, so flatten them before matching.
        const selectors = target.flat(Infinity).join(' ');
        const tag = openingTag(node.html);
        const attributes = tag.replace(/\shref\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');
        const provider = PROVIDERS.find(({ pattern }) => pattern.test(`${attributes} ${selectors}`));
        if (provider) return provider.name;

        // axe gives elements inside iframes one selector per frame level (iframe, ..., element).
        if (target.length > 1) return 'Innhold i iframe';

        // Iframes loading content from another site are embedded third-party content.
        if (/^<iframe\b/i.test(tag)) {
            const src = tag.match(/\ssrc\s*=\s*"([^"]*)"/i)?.[1];
            if (src && /^(https?:)?\/\//i.test(src)) {
                // axe shortens long attribute values with "...", which can cut the hostname.
                const truncated = src.includes('...');
                const frameHost = hostOf(src.replace(/\.{3}.*$/, ''), pageUrl);
                if (frameHost && !sameSite(frameHost, hostOf(pageUrl))) {
                    return truncated && !/\/\/[^/]+\//.test(src) ? 'Ekstern iframe' : frameHost;
                }
            }
        }
        return null;
    }

    // A violation counts as caused by embedded code when every affected element is embedded.
    function analyzeReport(report) {
        const providers = new Set();
        let count = 0;
        for (const violation of report?.violations || []) {
            const nodes = Array.isArray(violation?.nodes) ? violation.nodes : [];
            if (nodes.length === 0) continue;
            const nodeProviders = nodes.map((node) => getEmbeddedProvider(node, report.url));
            if (nodeProviders.every(Boolean)) {
                count++;
                nodeProviders.forEach((name) => providers.add(name));
            }
        }
        return { count, providers: Array.from(providers).sort((a, b) => a.localeCompare(b, 'nb')) };
    }

    const api = { PROVIDERS, getEmbeddedProvider, analyzeReport };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        root.EmbeddedCode = api;
    }
})(typeof window !== 'undefined' ? window : globalThis);
