import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Kontakt & Preisanfrage (RFQ) — Precimet OEM Manufacturing

## Kontaktdaten des Produktionswerks
- **Firma**: PRECIMET H.C.E. Sp. z o.o.
- **Standort**: ul. Pomorska 555, 92-735 Łódź, Polen
- **Telefon**: +48 422 080 402
- **E-Mail für Angebote**: produkcja@precimet.pl
- **Öffnungszeiten**: Montag – Freitag, 07:00 – 15:00 Uhr MEZ
- **Online-Anfrageformular**: [https://oem.precimet.pl/de/contact](https://oem.precimet.pl/de/contact)

## Richtlinien für Preisanfragen (RFQ)
Für ein schnelles und verbindliches Angebot innerhalb von 24–48 Stunden benötigen wir:
1. **3D-CAD-Dateien**: \`.step\`, \`.stp\`, \`.iges\`.
2. **2D-Zeichnungen**: \`.dxf\`, \`.dwg\`, \`.pdf\` mit Maßen, Toleranzen und Gewindeangaben.
3. **Materialangaben**: Werkstoffgüte (z.B. S355, 1.4301 / V2A, AlMg3 / 5754), Blechdicke.
4. **Stückzahlen**: Losgröße und Jahresbedarf.
5. **Oberflächenbehandlung**: RAL-Pulverbeschichtung, Verzinkung, Eloxal.
6. **Lieferbedingungen**: Lieferort, Incoterms (DAP / EXW).

## Handelsregisterangaben
- **KRS**: 0000503010
- **Umsatzsteuer-ID**: PL7272841275
- **REGON**: 363114171
- **Stammkapital**: 100.000,00 PLN
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
