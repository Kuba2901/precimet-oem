import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# 404 Nie znaleziono strony — Precimet OEM Manufacturing

Żądana strona lub endpoint nie istnieje w serwisie \`oem.precimet.pl\`.

## Indeks powrotu dla Agentów AI & Przeglądarek
- **Strona główna**: [https://oem.precimet.pl/](https://oem.precimet.pl/)
- **Kontekst dla modeli LLM**: [https://oem.precimet.pl/llms.txt](https://oem.precimet.pl/llms.txt)
- **Kompletna baza wiedzy**: [https://oem.precimet.pl/llms-full.txt](https://oem.precimet.pl/llms-full.txt)
- **Instrukcje dla agentów**: [https://oem.precimet.pl/agent-instructions.md](https://oem.precimet.pl/agent-instructions.md)
- **Mapa witryny (Sitemap)**: [https://oem.precimet.pl/sitemap-index.xml](https://oem.precimet.pl/sitemap-index.xml)

## Główne Działy Witryny
- **O firmie**: [https://oem.precimet.pl/about](https://oem.precimet.pl/about)
- **Wycena & Kontakt (RFQ)**: [https://oem.precimet.pl/contact](https://oem.precimet.pl/contact)
- **Polityka prywatności**: [https://oem.precimet.pl/privacy](https://oem.precimet.pl/privacy)
- **Blog & Baza DFM**: [https://oem.precimet.pl/blog](https://oem.precimet.pl/blog)

## Dane Rejestrowe & Kontakt
- **PRECIMET H.C.E. Sp. z o.o.**, ul. Pomorska 555, 92-735 Łódź, Polska
- **KRS**: 0000503010 | **NIP**: PL7272841275 | **REGON**: 363114171
- **Certyfikat**: ISO 9001:2015
- **E-mail RFQ**: produkcja@precimet.pl | **Tel**: +48 422 080 402
`;

  return new Response(content, {
    status: 404,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
