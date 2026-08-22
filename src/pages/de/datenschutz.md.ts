import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Datenschutzerklärung — Precimet OEM Manufacturing

## 1. Verantwortlicher
Verantwortlicher für die Datenverarbeitung ist **PRECIMET H.C.E. Sp. z o.o.**, ul. Pomorska 555, 92-735 Łódź, Polen, KRS: 0000503010, USt-IdNr.: PL7272841275, REGON: 363114171, Stammkapital: 100.000,00 PLN.

## 2. Kontaktdaten
- **Adresse**: ul. Pomorska 555, 92-735 Łódź, Polen
- **E-Mail**: produkcja@precimet.pl
- **Telefon**: +48 422 080 411

## 3. Zwecke und Rechtsgrundlagen der Verarbeitung
- **Bearbeitung von Anfragen und Angebotserstellung**: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
- **Vertragserfüllung und Auftragsabwicklung**: Art. 6 Abs. 1 lit. b DSGVO.
- **Erfüllung steuerlicher und gesetzlicher Pflichten**: Art. 6 Abs. 1 lit. c DSGVO.
- **Geltendmachung und Abwehr von Rechtsansprüchen**: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).

## 4. Datenempfänger
Ihre Daten werden an IT- und Hosting-Dienstleister, Steuer- und Rechtsberater sowie an Behörden im gesetzlichen Rahmen weitergegeben.

## 5. Speicherdauer
Anfragedaten werden für die Dauer der geschäftlichen Abstimmung sowie für 3 Jahre zur Dokumentation aufbewahrt. Steuerrelevante Daten werden 5 Jahre aufbewahrt.

## 6. Ihre Rechte
Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde (PUODO).
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
