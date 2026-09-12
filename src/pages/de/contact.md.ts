import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Angebotsanfrage (RFQ) — Precimet OEM Manufacturing

## Kontakt
- **Firma**: PRECIMET H.C.E. Sp. z o.o.
- **Standort**: ul. Pomorska 555, 92-735 Łódź, Polen
- **E-Mail für Anfragen**: produkcja@precimet.pl
- **Laserschneiden & Metallbearbeitung**: +48 422 080 402, +48 422 080 419, +48 422 080 413, +48 422 080 418
- **Büro**: +48 42 672 57 10, +48 422 080 400
- **Öffnungszeiten**: Mo–Fr, 8:00–16:00 Uhr MEZ
- **Online-Formular**: [https://oem.precimet.pl/de/contact/](https://oem.precimet.pl/de/contact/)

## So bereiten Sie Ihre Anfrage vor
Mit einer vollständigen Anfrage erhalten Sie unser Angebot innerhalb von 1–2 Werktagen. Bitte senden Sie:
1. Eine 2D-Zeichnung oder ein 3D-Modell des Teils
2. Werkstoffgüte und Materialstärke
3. Stückzahl — Einzellos oder Serienprognose
4. Gewünschten Liefertermin
5. Qualitätsanforderungen, z. B. Dokumentation oder Materialzeugnisse

**Akzeptierte Formate**: STEP, STP, IGES, IGS, DXF, DWG, PDF. Kein 3D-Modell? Senden Sie eine Skizze oder ein Musterteil — wir helfen, die Dokumentation zu vervollständigen.

Es gibt keine Mindestbestellmenge. Die Lieferzeit bestätigen wir im Angebot.

## Handelsregisterangaben
- **KRS**: 0000587797 (Amtsgericht Łódź-Śródmieście, 20. Handelsregisterabteilung)
- **USt-IdNr.**: PL7282804918
- **REGON**: 363114171
- **Stammkapital**: 101.000,00 PLN
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
