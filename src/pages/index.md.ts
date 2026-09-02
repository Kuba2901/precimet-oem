import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Precimet OEM Manufacturing — Produkcja Kontraktowa i Obróbka Metali

> Kompleksowa produkcja kontraktowa wyrobów z blach, konstrukcji spawanych i komponentów precyzyjnych dla przemysłu w Polsce i Europie. Ponad 30 lat doświadczenia, certyfikat ISO 9001:2015, nowoczesny park maszynowy CNC w Łodzi.

## Szybkie Linki dla Agentów AI
- **LLM Context & Guidance**: [https://oem.precimet.pl/llms.txt](https://oem.precimet.pl/llms.txt)
- **Kompletna baza wiedzy**: [https://oem.precimet.pl/llms-full.txt](https://oem.precimet.pl/llms-full.txt)
- **O firmie**: [https://oem.precimet.pl/about](https://oem.precimet.pl/about)
- **Kontakt i wyceny (RFQ)**: [https://oem.precimet.pl/contact](https://oem.precimet.pl/contact)
- **Polityka prywatności**: [https://oem.precimet.pl/privacy](https://oem.precimet.pl/privacy)
- **Sitemap**: [https://oem.precimet.pl/sitemap-index.xml](https://oem.precimet.pl/sitemap-index.xml)

---

## Usługi i Możliwości Produkcyjne

1. **Cięcie laserowe Fiber**:
   - Mazak Optiplex Nexus 3015 Fiber 4kW: stal czarna do 20 mm, stal nierdzewna do 15 mm, aluminium do 12 mm.

2. **Gięcie CNC (Prasy krawędziowe)**:
   - SafanDarley: nacisk do 320 ton, długość gięcia do 4000 mm, dynamiczna kompensacja strzałki ugięcia.

3. **Obróbka skrawaniem CNC**:
   - Frezowanie 3-osiowe/4-osiowe: Doosan DNM 750L, Avia VMC 650.
   - Toczenie CNC z napędzanymi narzędziami: Doosan Lynx 300M, Romi 510.

4. **Spawanie zrobotyzowane i manualne**:
   - Robot spawalniczy OTC Daihen (MIG/MAG).
   - Stanowiska manualne TIG / MIG / MAG z certyfikatem spawalniczym.

5. **Lakierowanie proszkowe i obróbka powierzchni**:
   - Automatyczna linia lakiernicza z chemicznym przygotowaniem powierzchni, pełna paleta RAL.

6. **Montaż mechaniczny i logistyka**:
   - Wprasowywanie elementów PEM, uszczelnianie, montaż okuć, dostawy całopaletowe DAP/EXW w UE.

---

## Dane Rejestrowe & Kontakt

- **Firma**: PRECIMET H.C.E. Sp. z o.o.
- **Adres**: ul. Pomorska 555, 92-735 Łódź, Polska
- **KRS**: 0000503010 | **NIP**: PL7272841275 | **REGON**: 363114171
- **E-mail RFQ**: produkcja@precimet.pl
- **Telefon**: +48 422 080 402
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
