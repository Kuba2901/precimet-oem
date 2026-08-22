import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Contact & RFQ — Precimet OEM Manufacturing

## Production Facility Contact Details
- **Company**: PRECIMET H.C.E. Sp. z o.o.
- **Address**: ul. Pomorska 555, 92-735 Łódź, Poland
- **Phone**: +48 422 080 411
- **Direct RFQ Email**: produkcja@precimet.pl
- **Working Hours**: Monday – Friday, 07:00 – 15:00 CET
- **Online RFQ Form**: [https://oem.precimet.pl/en/contact](https://oem.precimet.pl/en/contact)

## How to Submit an RFQ (Quotation Guidelines)
To receive a detailed quotation within 24–48 business hours, please include:
1. **3D CAD Models**: \`.step\`, \`.stp\`, \`.iges\` files.
2. **2D Engineering Drawings**: \`.dxf\`, \`.dwg\`, \`.pdf\` (specifying dimensions, critical tolerances, threads).
3. **Material Grade**: Alloy type (e.g. S355, 1.4301 / 304, AlMg3 / 5754), thickness.
4. **Quantities**: Target batch size and annual forecast.
5. **Surface Finishing**: RAL powder coating color, plating, or passivation requirements.
6. **Delivery Terms**: Destination postal code, Incoterms (DAP / EXW).

## Legal Registration
- **KRS**: 0000503010
- **VAT ID / Tax Number**: PL7272841275
- **REGON**: 363114171
- **Share Capital**: 100,000.00 PLN
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
