import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Precimet OEM Manufacturing — Lohnfertigung Metall aus Polen

> Laserschneiden, Abkanten, manuelles und Roboterschweißen, CNC-Bearbeitung und Montage für OEMs — vom Prototyp bis zur Serie. Über 30 Jahre Erfahrung in der Metallbearbeitung, ISO 9001:2015 zertifiziert seit 2015, Produktionswerk in Łódź.

## Schnellzugriff für KI-Agenten
- **LLM-Übersicht**: [https://oem.precimet.pl/llms.txt](https://oem.precimet.pl/llms.txt)
- **Vollständige Wissensdatenbank**: [https://oem.precimet.pl/llms-full.txt](https://oem.precimet.pl/llms-full.txt)
- **Über uns**: [https://oem.precimet.pl/de/about/](https://oem.precimet.pl/de/about/)
- **Kontakt & Angebotsanfrage (RFQ)**: [https://oem.precimet.pl/de/contact/](https://oem.precimet.pl/de/contact/)
- **Blog**: [https://oem.precimet.pl/de/blog/](https://oem.precimet.pl/de/blog/)
- **Datenschutzerklärung**: [https://oem.precimet.pl/de/datenschutz/](https://oem.precimet.pl/de/datenschutz/)
- **XML-Sitemap**: [https://oem.precimet.pl/sitemap-index.xml](https://oem.precimet.pl/sitemap-index.xml)

---

## Leistungen
1. **Laserschneiden von Blechen** — Stahl, Edelstahl, Aluminium, Messing, Kupfer.
2. **Blechbiegen** auf einer CNC-Abkantpresse.
3. **Manuelles Schweißen** — MIG/MAG und WIG von Stahl, Edelstahl und Aluminium.
4. **Roboterschweißen** für die Serienfertigung.
5. **CNC-Fräsen** und **CNC-Drehen**.
6. **CNC-Rohrbiegen** und **CNC-Profilzuschnitt**.
7. **Mechanische Montage** und **Elektromontage** — von Kabelsätzen bis zu kompletten Schaltschränken und Modulen.
8. **CAD/CAM-Engineering** — Fertigungsdokumentation, Blechabwicklungen, CAM-Programme, Materialberatung.
9. **Schlosserarbeiten** — Bohren, Gewindeschneiden, Schleifen und Finish von Teilen.

Pulverbeschichtung und andere Beschichtungsleistungen bieten wir nicht an.

## Maschinenpark
| Maschine | Bereich |
| :--- | :--- |
| Faserlaser Mazak Nexus Optiplex 2D (4 kW) | Tafelformat 3000 × 1500 mm; Baustahl sowie Edelstahl und säurebeständiger Stahl bis 20 mm; Aluminium bis 10 mm; Messing, Kupfer |
| Servoelektrische Abkantpresse Safan | Biegelänge bis 3000 mm, Presskraft bis 160 t |
| Bearbeitungszentrum Doosan DNM-750L | Bearbeitungsbereich 2160 × 762 × 650 mm |
| Bearbeitungszentrum Avia VMC 650 | Bearbeitungsbereich 650 × 540 × 620 mm |
| CNC-Drehmaschine Romi 510 | Drehlänge bis 1500 mm, Durchmesser bis 255 mm |
| CNC-Drehmaschine Doosan Lynx 300M | Drehlänge bis 712 mm, Durchmesser bis 254 mm |
| Schweißroboter OTC Daihen | Schweißbereich 2000 × 1000 × 400 mm |
| CNC-Säge IMET | automatische Zuführung, Gehrungsschnitt −60° / 0 / +60° |
| CNC-Rohrbiegemaschine SOCO | in einer Ebene, Rohre ⌀25, ⌀32, ⌀50 mm (weitere auf Anfrage) |

## Fakten
- Über 3,5 Millionen gefertigte Teile.
- Mehr als 50 Blechsorten auf Lager — Bau- und Edelstähle, Aluminium.
- Keine Mindestbestellmenge — vom Einzelteil bis zur Serie.
- Angebot in der Regel innerhalb von 1–2 Werktagen.

## Unternehmensdaten & Kontakt
- **Firma**: PRECIMET H.C.E. Sp. z o.o.
- **Standort**: ul. Pomorska 555, 92-735 Łódź, Polen
- **KRS**: 0000587797 | **USt-IdNr.**: PL7282804918 | **REGON**: 363114171
- **Anfragen**: [Anfrageformular](https://oem.precimet.pl/de/contact/)
- **Telefon**: +48 422 080 402
- **Öffnungszeiten**: Mo–Fr, 8:00–16:00 Uhr MEZ
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
