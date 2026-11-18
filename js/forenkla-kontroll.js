// Report labels that are not the project URL (names, aliases, and report errors).
const forenklaKontrollUrls2025 = {
    25: 'www.sykehuset-ostfold.no',
    27: 'www.avinor.no',
    31: 'oas-iks.no',
    47: 'www.vea-fs.no',
    57: 'nasjonalparken.no',
    161: 'www.nhullensvang.no',
    205: 'www.landbruksdirektoratet.no/nb',
    219: 'www.sporveien.no',
    220: 'trondheimhavn.no',
    257: 'www.luftfartsmuseum.no',
    258: 'kirkemusikkfredrikstad.no',
    264: 'aabv.no',
    271: 'bremanger.kommune.no',
};

function forenklaKontrollUrlKey(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    const label = value.trim();
    const address = /^https?:\/\//i.test(label) ? label : `https://${label}`;
    if (!URL.canParse(address)) return null;
    const url = new URL(address);
    if (!url.hostname.includes('.') || url.username || url.password) return null;
    return `${url.host.replace(/^www\./, '')}${url.pathname.replace(/\/+$/, '')}${url.search}`;
}

function indexForenklaKontrollScores(rows) {
    const scores = new Map();
    for (const { rapportId, loeysingId, loeysingNamn, organisasjonsnummer, score } of rows) {
        const key = forenklaKontrollUrlKey(forenklaKontrollUrls2025[loeysingId] ?? loeysingNamn);
        if (!key || scores.has(key) || !Number.isFinite(score) || score < 0 || score > 1 ||
            !/^[a-f0-9]{16}$/.test(rapportId) || !/^\d{9}$/.test(organisasjonsnummer)) {
            throw new Error(`Ugyldige data for løsning ${loeysingId}`);
        }
        scores.set(key, {
            score: Math.floor(score * 100),
            reportUrl: `https://kontroll.uutilsynet.no/base/resultat/rapport/${rapportId}/organisasjon/${organisasjonsnummer}`,
        });
    }
    return scores;
}

let forenklaKontrollScoresPromise;

function loadForenklaKontrollScores() {
    if (!forenklaKontrollScoresPromise) {
        forenklaKontrollScoresPromise = fetch('forenkla_kontroll_2025.json')
            .then(response => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            })
            .then(indexForenklaKontrollScores)
            .catch(error => {
                console.error('Kunne ikke laste score for forenkla kontroll 2025:', error);
                forenklaKontrollScoresPromise = null;
                return new Map();
            });
    }
    return forenklaKontrollScoresPromise;
}
