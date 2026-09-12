import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Über Precimet OEM Manufacturing

> PRECIMET H.C.E. Sp. z o.o. ist ein Lohnfertigungsbetrieb in Łódź, Polen (ul. Pomorska 555): Laserschneiden, Abkanten, Schweißen, CNC-Bearbeitung und Montage für OEMs. Über 30 Jahre Erfahrung in der Metallbearbeitung, ISO 9001:2015 zertifiziert seit 2015.

## 1. Unternehmensprofil
Hinter Precimet stehen über 30 Jahre Erfahrung in der Metallbearbeitung. Wir fertigen u. a. für Maschinen- und Anlagenbauer, Automatisierungsintegratoren und OEM-Unternehmen, darunter Kunden aus Lebensmittelindustrie, Energiewirtschaft, Transport und Logistik, Bau, Metallmöbelbau und Agrartechnik. Bisher haben wir über 3,5 Millionen Teile gefertigt — vom Einzelprototyp bis zur Serie.

## 2. Fertigungskapazitäten
- **Laserschneiden**: Mazak Nexus Optiplex 2D, Faserlaser 4 kW, Tafelformat bis 3000 × 1500 mm; Baustahl sowie Edelstahl und säurebeständiger Stahl bis 20 mm, Aluminium bis 10 mm, Messing, Kupfer.
- **Abkanten**: servoelektrische Abkantpresse Safan, Biegelänge bis 3000 mm, Presskraft bis 160 t.
- **CNC-Zerspanung**: Doosan DNM-750L (2160 × 762 × 650 mm), Avia VMC 650 (650 × 540 × 620 mm), Romi 510 (bis 1500 mm, ⌀255 mm), Doosan Lynx 300M (bis 712 mm, ⌀254 mm).
- **Schweißen**: Schweißroboter OTC Daihen (2000 × 1000 × 400 mm), manuelles MIG/MAG- und WIG-Schweißen.
- **Profile und Rohre**: CNC-Säge IMET (Gehrungsschnitt −60° / 0 / +60°), Rohrbiegemaschine SOCO (⌀25, ⌀32, ⌀50 mm).
- **Montage**: mechanische und Elektromontage — von Kabelsätzen bis zu kompletten Schaltschränken und Modulen.
- **Technologische Beratung**: Fertigungsdokumentation, Blechabwicklungen, CAM-Programme, Materialberatung.

Pulverbeschichtung und andere Beschichtungsleistungen bieten wir nicht an.

## 3. Qualität
- Zertifiziertes Qualitätsmanagementsystem nach **ISO 9001:2015** seit 2015.
- Eingangs-, Zwischen- und Endprüfung; Qualitätsdokumentation und Materialzeugnisse auf Anfrage.

## 4. Unternehmensdaten & Handelsregister
- **Firma**: PRECIMET H.C.E. Sp. z o.o.
- **Firmensitz**: ul. Pomorska 555, 92-735 Łódź, Polen
- **Handelsregister (KRS)**: 0000587797 (Amtsgericht Łódź-Śródmieście, 20. Handelsregisterabteilung)
- **Umsatzsteuer-ID (USt-IdNr.)**: PL7282804918
- **Statistische Nummer (REGON)**: 363114171
- **Stammkapital**: 101.000,00 PLN
- **Anfragen**: [Anfrageformular](https://oem.precimet.pl/de/contact/) | Tel: +48 422 080 402
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
