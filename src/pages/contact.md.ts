import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Zapytanie ofertowe (RFQ) — Precimet OEM Manufacturing

## Kontakt
- **Firma**: PRECIMET H.C.E. Sp. z o.o.
- **Adres**: ul. Pomorska 555, 92-735 Łódź, Polska
- **E-mail RFQ**: produkcja@precimet.pl
- **Cięcie laserowe, obróbka metalu**: +48 422 080 402, +48 422 080 419, +48 422 080 413, +48 422 080 418
- **Biuro**: +48 42 672 57 10, +48 422 080 400
- **Godziny pracy**: pon.–pt. 8:00–16:00
- **Formularz online**: [https://oem.precimet.pl/contact/](https://oem.precimet.pl/contact/)

## Jak przygotować zapytanie ofertowe
Kompletne zapytanie pozwala nam przygotować ofertę w ciągu 1–2 dni roboczych. Prześlij:
1. Rysunek 2D lub model 3D detalu
2. Gatunek i grubość materiału
3. Liczbę sztuk — pojedynczą partię lub prognozę serii
4. Oczekiwany termin realizacji
5. Wymagania jakościowe, np. dokumentację lub świadectwa materiałowe

**Akceptowane formaty**: STEP, STP, IGES, IGS, DXF, DWG, PDF. Nie masz modelu 3D? Prześlij szkic lub próbkę — pomożemy uzupełnić dokumentację.

Nie narzucamy minimalnej wielkości zamówienia. Czas realizacji potwierdzamy w ofercie.

## Dane rejestrowe
- **KRS**: 0000587797 (Sąd Rejonowy dla Łodzi-Śródmieścia w Łodzi, XX Wydział Gospodarczy KRS)
- **NIP**: PL7282804918
- **REGON**: 363114171
- **Kapitał zakładowy**: 101.000,00 PLN
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
