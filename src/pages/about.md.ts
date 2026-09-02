import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# O firmie — Precimet OEM Manufacturing

> PRECIMET H.C.E. Sp. z o.o. to polski zakład produkcyjny z siedzibą w Łodzi (ul. Pomorska 555), specjalizujący się w obróbce metali, produkcji konstrukcji spawanych, cięciu laserowym i gięciu blach. Ponad 30 lat doświadczenia, certyfikat ISO 9001:2015.

## 1. Historia i Profil Działalności
Od ponad trzech dekad dostarczamy kompleksowe usługi produkcji kontraktowej OEM dla przemysłu w Polsce i Europie. Realizujemy zlecenia dla branż HVAC, kolejowej, maszynowej, automotive, energetycznej i elektrotechnicznej.

## 2. Park Maszynowy & Możliwości Technologiczne
- **Cięcie laserowe Fiber**: Mazak Optiplex Nexus 3015 Fiber 4kW (stal do 20 mm, nierdzewna do 15 mm, aluminium do 12 mm).
- **Gięcie CNC**: Prasy krawędziowe SafanDarley do 320 ton nacisku i 4000 mm długości gięcia z dynamiczną kompensacją strzałki ugięcia.
- **Obróbka skrawaniem**: Centra frezarskie Doosan DNM 750L i Avia VMC 650, tokarki CNC Doosan Lynx 300M z napędzanymi narzędziami.
- **Spawanie**: Robot spawalniczy 6-osiowy OTC Daihen oraz certyfikowane stanowiska TIG/MIG/MAG.
- **Lakierowanie proszkowe**: Automatyczna linia lakiernicza z chemicznym przygotowaniem powierzchni (pełna paleta RAL).
- **Montaż mechaniczny**: Elementy złączne PEM, uszczelnianie, montaż okuć i pakowanie.

## 3. Certyfikaty i Jakość
- Wdrożony i certyfikowany System Zarządzania Jakością **ISO 9001:2015**.
- Współrzędnościowe ramiona pomiarowe 3D, wysokościomierze cyfrowe, atesty materiałowe 3.1.

## 4. Dane Rejestrowe Spółki
- **Nazwa**: PRECIMET H.C.E. Sp. z o.o.
- **Siedziba**: ul. Pomorska 555, 92-735 Łódź, Polska
- **KRS**: 0000503010 (Sąd Rejonowy dla Łodzi-Śródmieścia, XX Wydział Gospodarczy)
- **NIP (VAT UE)**: PL7272841275
- **REGON**: 363114171
- **Kapitał zakładowy**: 100.000,00 PLN
- **Kontakt RFQ**: produkcja@precimet.pl | Tel: +48 422 080 402
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
