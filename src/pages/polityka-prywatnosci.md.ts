import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Polityka Prywatności — Precimet OEM Manufacturing

## 1. Administrator danych
Administratorem Twoich danych osobowych jest **PRECIMET H.C.E. Sp. z o.o.** z siedzibą w Łodzi (92-735), ul. Pomorska 555, KRS: 0000503010, NIP: PL7272841275, REGON: 363114171, kapitał zakładowy: 100.000,00 PLN.

## 2. Dane kontaktowe
- **Adres**: ul. Pomorska 555, 92-735 Łódź, Polska
- **E-mail**: produkcja@precimet.pl
- **Telefon**: +48 422 080 402

## 3. Cele i podstawy prawne przetwarzania
- **Obsługa zapytań ofertowych i kontaktowych**: Art. 6 ust. 1 lit. b RODO (działania przed zawarciem umowy).
- **Realizacja zamówień i umów handlowych**: Art. 6 ust. 1 lit. b RODO.
- **Wypełnianie obowiązków prawno-podatkowych**: Art. 6 ust. 1 lit. c RODO.
- **Ustalanie, dochodzenie i obrona roszczeń**: Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes).

## 4. Odbiorcy danych
Dane mogą być udostępniane dostawcom usług IT i hostingu, podmiotom świadczącym usługi księgowe i prawne oraz organom państwowym na podstawie przepisów prawa.

## 5. Okres przechowywania
Dane z zapytań ofertowych przechowywane są do zakończenia rozmów handlowych oraz przez okres przedawnienia ewentualnych roszczeń (3 lata). Dokumentacja księgowo-podatkowa przechowywana jest przez okres 5 lat.

## 6. Twoje prawa
Przysługuje Ci prawo do dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
