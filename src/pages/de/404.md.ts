import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# 404 Seite nicht gefunden — Precimet OEM Manufacturing

Die angeforderte Seite oder der Endpunkt existiert nicht auf \`oem.precimet.pl\`.

## Schnellzugriff für KI-Agenten & Besucher
- **Startseite**: [https://oem.precimet.pl/de/](https://oem.precimet.pl/de/)
- **LLM Übersicht & Spezifikationen**: [https://oem.precimet.pl/llms.txt](https://oem.precimet.pl/llms.txt)
- **Vollständige Wissensdatenbank**: [https://oem.precimet.pl/llms-full.txt](https://oem.precimet.pl/llms-full.txt)
- **Agenten-Anleitung**: [https://oem.precimet.pl/agent-instructions.md](https://oem.precimet.pl/agent-instructions.md)
- **XML Sitemap**: [https://oem.precimet.pl/sitemap-index.xml](https://oem.precimet.pl/sitemap-index.xml)

## Wichtige Bereiche
- **Über uns**: [https://oem.precimet.pl/de/about](https://oem.precimet.pl/de/about)
- **Preisanfrage & Kontakt (RFQ)**: [https://oem.precimet.pl/de/contact](https://oem.precimet.pl/de/contact)
- **Datenschutzerklärung**: [https://oem.precimet.pl/de/privacy](https://oem.precimet.pl/de/privacy)
- **Wissensblog & DFM**: [https://oem.precimet.pl/de/blog](https://oem.precimet.pl/de/blog)

## Unternehmensdaten
- **PRECIMET H.C.E. Sp. z o.o.**, ul. Pomorska 555, 92-735 Łódź, Polen
- **Handelsregister**: KRS 0000503010 | **USt-IdNr.**: PL7272841275 | **REGON**: 363114171
- **Qualitätsmanagement**: ISO 9001:2015
- **E-Mail für Anfragen**: produkcja@precimet.pl | **Tel**: +48 422 080 402
`;

  return new Response(content, {
    status: 404,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
