import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Contact & RFQ — Precimet OEM Manufacturing

## Contact
- **Company**: PRECIMET H.C.E. Sp. z o.o.
- **Address**: ul. Pomorska 555, 92-735 Łódź, Poland
- **Laser cutting & metalworking**: +48 422 080 402, +48 422 080 419, +48 422 080 413, +48 422 080 418
- **Office**: +48 42 672 57 10, +48 422 080 400
- **Opening hours**: Mon–Fri, 8:00–16:00 CET
- **Online form**: [https://oem.precimet.pl/en/contact/](https://oem.precimet.pl/en/contact/)

## How to prepare your RFQ
A complete request lets us send your quote within 1–2 business days. Please include:
1. A 2D drawing or 3D model of the part
2. Material grade and thickness
3. Quantity — a single batch or a series forecast
4. Your target delivery date
5. Quality requirements, e.g. documentation or material certificates

**Accepted formats**: STEP, STP, IGES, IGS, DXF, DWG, PDF. No 3D model? Send a sketch or a sample part and we will help you complete the documentation.

There is no minimum order quantity. Production lead time is confirmed in the quote.

## Legal registration
- **KRS**: 0000587797 (District Court for Łódź-Śródmieście, 20th Commercial Division)
- **VAT ID**: PL7282804918
- **REGON**: 363114171
- **Share capital**: 101,000.00 PLN
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
