import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Kontakt & Zapytania Ofertowe (RFQ) — Precimet OEM Manufacturing

## Dane Kontaktowe Zakładu Produkcyjnego
- **Firma**: PRECIMET H.C.E. Sp. z o.o.
- **Adres**: ul. Pomorska 555, 92-735 Łódź, Polska
- **Telefon**: +48 422 080 402
- **E-mail RFQ**: produkcja@precimet.pl
- **Godziny pracy**: Poniedziałek – Piątek, 07:00 – 15:00 CET
- **Formularz kontaktowy online**: [https://oem.precimet.pl/contact](https://oem.precimet.pl/contact)

## Jak przesłać zapytanie ofertowe (RFQ)?
Aby otrzymać szybką i precyzyjną wycenę w ciągu 24–48 godzin, prześlij:
1. **Modele 3D**: formaty \`.step\`, \`.stp\`, \`.iges\`.
2. **Rysunki 2D**: formaty \`.dxf\`, \`.dwg\`, \`.pdf\` (z zaznaczonymi tolerancjami, gwintami, chropowatością).
3. **Specyfikację materiału**: gatunek stali, grubość, stan wykończenia.
4. **Wielkość partii**: planowany nakład serii oraz prognozę roczną.
5. **Wymagania powłokowe**: kolor RAL, grubość powłoki lakierniczej, klasa korozyjności.
6. **Miejsce dostawy**: kod pocztowy, warunki Incoterms (DAP / EXW).

## Dane Rejestrowe Spółki
- **KRS**: 0000503010 (Sąd Rejonowy dla Łodzi-Śródmieścia w Łodzi)
- **NIP**: PL7272841275
- **REGON**: 363114171
- **Kapitał zakładowy**: 100.000,00 PLN
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
