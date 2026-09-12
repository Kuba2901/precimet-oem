import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# O firmie — Precimet OEM Manufacturing

> PRECIMET H.C.E. Sp. z o.o. to zakład produkcyjny w Łodzi (ul. Pomorska 555): cięcie laserowe, gięcie blach, spawanie, obróbka CNC i montaż dla producentów OEM. Ponad 30 lat doświadczenia w obróbce metali, ISO 9001:2015 od 2015 roku.

## 1. Profil firmy
Za Precimet stoi ponad 30 lat doświadczenia w obróbce metali. Współpracujemy z producentami maszyn i urządzeń, integratorami automatyki oraz firmami rozwijającymi własne produkty — m.in. z branży spożywczej, transportu i logistyki, mebli metalowych i budownictwa. Wyprodukowaliśmy ponad 3,5 miliona części, od pojedynczych prototypów po powtarzalne serie.

## 2. Możliwości produkcyjne
- **Cięcie laserowe**: Mazak Nexus Optiplex 2D, fiber 4 kW, arkusz do 3000 × 1500 mm; blachy czarne, nierdzewne i kwasoodporne do 20 mm, aluminium do 10 mm, mosiądz, miedź.
- **Gięcie blach**: serwoelektryczna prasa krawędziowa Safan, długość gięcia do 3000 mm, nacisk do 160 t.
- **Obróbka CNC**: Doosan DNM-750L (2160 × 762 × 650 mm), Avia VMC 650 (650 × 540 × 620 mm), Romi 510 (do 1500 mm, ⌀255 mm), Doosan Lynx 300M (do 712 mm, ⌀254 mm).
- **Spawanie**: robot OTC Daihen (2000 × 1000 × 400 mm), spawanie ręczne MIG/MAG i TIG.
- **Profile i rury**: piła CNC IMET (ukosowanie −60° / 0 / +60°), giętarka SOCO (rury ⌀25, ⌀32, ⌀50 mm).
- **Montaż**: mechaniczny i elektryczny — od wiązek po kompletne szafy i moduły.
- **Wsparcie technologiczne**: dokumentacja pod produkcję, rozwinięcia blach, programy CAM, doradztwo materiałowe.

Nie oferujemy lakierowania proszkowego ani innych usług powłokowych.

## 3. Jakość
- System zarządzania jakością **ISO 9001:2015**, certyfikowany od 2015 roku.
- Kontrola materiałów, międzyoperacyjna i końcowa; dokumentacja jakościowa i świadectwa materiałowe na życzenie.

## 4. Dane rejestrowe
- **Nazwa**: PRECIMET H.C.E. Sp. z o.o.
- **Siedziba**: ul. Pomorska 555, 92-735 Łódź, Polska
- **KRS**: 0000587797 (Sąd Rejonowy dla Łodzi-Śródmieścia w Łodzi, XX Wydział Gospodarczy KRS)
- **NIP (VAT UE)**: PL7282804918
- **REGON**: 363114171
- **Kapitał zakładowy**: 101.000,00 PLN
- **Kontakt RFQ**: produkcja@precimet.pl | tel. +48 422 080 402
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
