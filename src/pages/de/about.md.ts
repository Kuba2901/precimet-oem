import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Über uns — Precimet OEM Manufacturing

> PRECIMET H.C.E. Sp. z o.o. ist ein polnischer Lohnfertigungsbetrieb mit Sitz in Łódź (ul. Pomorska 555), spezialisiert auf Blechbearbeitung, CNC-Zerspanung, Roboterschweißen und Serienfertigung nach ISO 9001:2015.

## 1. Unternehmensprofil & Erfahrung
Seit über 30 Jahren ist Precimet ein bewährter Lohnfertiger für Industriekunden in der DACH-Region und ganz Europa. Wir beliefern die Branchen HVAC (Lüftung/Klima), Bahntechnik, Maschinenbau, Automotive, Energietechnik und Schaltschrankbau.

## 2. Fertigungskapazitäten & Maschinenpark
- **Faserlaserschneiden (Fiber)**: Mazak Optiplex Nexus 3015 Fiber 4kW (Baustahl bis 20 mm, Edelstahl bis 15 mm, Aluminium bis 12 mm).
- **CNC-Abkanten / Blechbiegen**: SafanDarley Abkantpressen bis 320 Tonnen Presskraft und 4000 mm Biegelänge mit aktiver Bombierung.
- **CNC-Zerspanung**: Doosan DNM 750L Vertikal-Bearbeitungszentrum, Avia VMC 650 sowie Doosan Lynx 300M CNC-Drehzentren mit angetriebenen Werkzeugen.
- **Roboter- und Handschweißen**: OTC Daihen 6-Achs-Schweißroboterzelle und zertifizierte WIG-, MIG- und MAG-Schweißarbeitsplätze.
- **Pulverbeschichtung**: Automatische Pulverbeschichtungsanlage mit chemischer Vorbehandlung (RAL-Farben, C2–C5 Schutz).
- **Baugruppenmontage**: PEM-Einpressbefestiger, Dichtungen, Baugruppenmontage und europaweiter Speditionsversand (DAP/EXW).

## 3. Qualitätsmanagement
- Zertifiziert nach **ISO 9001:2015**.
- 3D-Koordinatenmessarme, optische Prüfmittel, 3.1 Werkszeugnisse nach EN 10204.

## 4. Unternehmensdaten & Handelsregister
- **Rechtsform**: PRECIMET H.C.E. Sp. z o.o.
- **Firmensitz**: ul. Pomorska 555, 92-735 Łódź, Polen
- **Handelsregister (KRS)**: 0000503010
- **Umsatzsteuer-ID (USt-IdNr.)**: PL7272841275
- **Statistische Nummer (REGON)**: 363114171
- **Stammkapital**: 100.000,00 PLN
- **E-Mail für Anfragen**: produkcja@precimet.pl | Tel: +48 422 080 411
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
