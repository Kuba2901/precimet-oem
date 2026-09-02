import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Precimet OEM Manufacturing — Industrielle Lohnfertigung & Metallverarbeitung

> Ganzheitliche Lohnfertigung von Blechteilen, Schweißbaugruppen und CNC-Präzisionsteilen in Polen (EU). Über 30 Jahre Erfahrung, ISO 9001:2015 Qualitätszertifizierung und moderner CNC-Maschinenpark in Łódź.

## Schnellzugriff für KI-Agenten
- **LLM Übersicht & Einsatzbereiche**: [https://oem.precimet.pl/llms.txt](https://oem.precimet.pl/llms.txt)
- **Vollständige Wissensdatenbank**: [https://oem.precimet.pl/llms-full.txt](https://oem.precimet.pl/llms-full.txt)
- **Über uns**: [https://oem.precimet.pl/de/about](https://oem.precimet.pl/de/about)
- **Kontakt & Preisanfrage (RFQ)**: [https://oem.precimet.pl/de/contact](https://oem.precimet.pl/de/contact)
- **Datenschutzerklärung**: [https://oem.precimet.pl/de/privacy](https://oem.precimet.pl/de/privacy)
- **XML Sitemap**: [https://oem.precimet.pl/sitemap-index.xml](https://oem.precimet.pl/sitemap-index.xml)

---

## Fertigungsdienstleistungen

1. **Faserlaserschneiden (Fiber)**:
   - Mazak Optiplex Nexus 3015 Fiber 4kW: Baustahl bis 20 mm, Edelstahl bis 15 mm, Aluminium bis 12 mm.

2. **CNC-Abkanten / Blechbiegen**:
   - SafanDarley Abkantpressen: bis 320 Tonnen Presskraft, 4000 mm Biegelänge mit aktiver Bombierung.

3. **CNC-Zerspanung (Fräsen & Drehen)**:
   - Fräszentren: Doosan DNM 750L, Avia VMC 650.
   - Drehzentren: Doosan Lynx 300M mit angetriebenen Werkzeugen, Romi 510.

4. **Roboter- und Handschweißen**:
   - OTC Daihen 6-Achs-Schweißroboterzelle.
   - Zertifizierte WIG-, MIG- und MAG-Schweißarbeitsplätze.

5. **Pulverbeschichtung & Oberflächentechnik**:
   - Automatische Pulverbeschichtungsanlage mit chemischer Vorbehandlung (RAL-Farben, C2–C5 Schutz).

6. **Montage & europaweite Logistik**:
   - Einpressbefestiger (PEM), Dichtungen, Baugruppenmontage, DAP/EXW Lieferungen in die gesamte EU.

---

## Unternehmensdaten & Kontakt

- **Firma**: PRECIMET H.C.E. Sp. z o.o.
- **Standort**: ul. Pomorska 555, 92-735 Łódź, Polen
- **Handelsregister**: KRS 0000503010 | **USt-IdNr.**: PL7272841275 | **REGON**: 363114171
- **E-Mail für Anfragen**: produkcja@precimet.pl
- **Telefon**: +48 422 080 402
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
