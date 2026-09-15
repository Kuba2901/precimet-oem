import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Precimet OEM Manufacturing — Produkcja kontraktowa i obróbka metali

> Cięcie laserowe, gięcie blach, spawanie ręczne i zrobotyzowane, obróbka CNC i montaż dla producentów OEM — od prototypu do produkcji seryjnej. Ponad 30 lat doświadczenia w obróbce metali, ISO 9001:2015 od 2015 roku, zakład w Łodzi.

## Szybkie linki dla agentów AI
- **Kontekst dla LLM**: [https://oem.precimet.pl/llms.txt](https://oem.precimet.pl/llms.txt)
- **Pełna baza wiedzy**: [https://oem.precimet.pl/llms-full.txt](https://oem.precimet.pl/llms-full.txt)
- **O firmie**: [https://oem.precimet.pl/about/](https://oem.precimet.pl/about/)
- **Kontakt i wyceny (RFQ)**: [https://oem.precimet.pl/contact/](https://oem.precimet.pl/contact/)
- **Blog**: [https://oem.precimet.pl/blog/](https://oem.precimet.pl/blog/)
- **Polityka prywatności**: [https://oem.precimet.pl/polityka-prywatnosci/](https://oem.precimet.pl/polityka-prywatnosci/)
- **Sitemap**: [https://oem.precimet.pl/sitemap-index.xml](https://oem.precimet.pl/sitemap-index.xml)

---

## Usługi
1. **Cięcie laserowe blach** — stal, stal nierdzewna, aluminium, mosiądz, miedź.
2. **Gięcie blach** na prasie krawędziowej CNC.
3. **Spawanie ręczne** MIG/MAG i TIG — stal, stal nierdzewna, aluminium.
4. **Spawanie zrobotyzowane** dla serii produkcyjnych.
5. **Frezowanie CNC** i **toczenie CNC**.
6. **Gięcie rur CNC** i **cięcie kształtowników CNC**.
7. **Montaż mechaniczny** i **montaż elektryczny** — od wiązek po kompletne szafy i moduły.
8. **Projektowanie CAD/CAM** — dokumentacja pod produkcję, rozwinięcia blach, programy CAM, doradztwo materiałowe.
9. **Ślusarstwo warsztatowe** — wiercenie, gwintowanie, szlifowanie i wykończenie detali.

Nie oferujemy lakierowania proszkowego ani innych usług powłokowych.

## Park maszynowy
| Maszyna | Zakres |
| :--- | :--- |
| Wycinarka laserowa Mazak Nexus Optiplex 2D (fiber 4 kW) | arkusz 3000 × 1500 mm; blachy czarne, nierdzewne i kwasoodporne do 20 mm; aluminium do 10 mm; mosiądz, miedź |
| Serwoelektryczna prasa krawędziowa Safan | długość gięcia do 3000 mm, nacisk do 160 t |
| Centrum frezarskie Doosan DNM-750L | zakres obróbki 2160 × 762 × 650 mm |
| Centrum frezarskie Avia VMC 650 | zakres obróbki 650 × 540 × 620 mm |
| Tokarka CNC Romi 510 | długość toczenia do 1500 mm, średnica do 255 mm |
| Tokarka CNC Doosan Lynx 300M | długość toczenia do 712 mm, średnica do 254 mm |
| Robot spawalniczy OTC Daihen | zakres spawania 2000 × 1000 × 400 mm |
| Piła CNC IMET | podawanie automatyczne, ukosowanie −60° / 0 / +60° |
| Giętarka do rur SOCO | gięcie w jednej płaszczyźnie, rury ⌀25, ⌀32, ⌀50 mm (inne na zapytanie) |

## Najważniejsze fakty
- Ponad 3,5 mln wyprodukowanych części.
- Ponad 50 gatunków blach w magazynie — stale konstrukcyjne i nierdzewne, aluminium.
- Brak minimalnej wielkości zamówienia — od pojedynczych sztuk po serie.
- Wycena zwykle w ciągu 1–2 dni roboczych.

## Dane rejestrowe i kontakt
- **Firma**: PRECIMET H.C.E. Sp. z o.o.
- **Adres**: ul. Pomorska 555, 92-735 Łódź, Polska
- **KRS**: 0000587797 | **NIP**: PL7282804918 | **REGON**: 363114171
- **Zapytania ofertowe**: [formularz kontaktowy](https://oem.precimet.pl/contact/)
- **Telefon**: +48 422 080 402
- **Godziny pracy**: pon.–pt. 8:00–16:00
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
