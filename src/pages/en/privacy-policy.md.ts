import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Privacy Policy — Precimet OEM Manufacturing

## 1. Data Controller
The controller of your personal data is **PRECIMET H.C.E. Sp. z o.o.**, located at ul. Pomorska 555, 92-735 Łódź, Poland, KRS: 0000503010, VAT ID: PL7272841275, REGON: 363114171, share capital: 100,000.00 PLN.

## 2. Contact Information
- **Address**: ul. Pomorska 555, 92-735 Łódź, Poland
- **Email**: produkcja@precimet.pl
- **Phone**: +48 422 080 411

## 3. Purposes and Legal Bases of Processing
- **Handling quotation and contact inquiries**: Art. 6(1)(b) GDPR (pre-contractual steps).
- **Contract execution and order fulfillment**: Art. 6(1)(b) GDPR.
- **Legal & fiscal compliance**: Art. 6(1)(c) GDPR.
- **Defense and establishment of legal claims**: Art. 6(1)(f) GDPR (legitimate interest).

## 4. Data Recipients
Data may be shared with IT infrastructure and hosting providers, legal/accounting advisors, and statutory authorities under applicable laws.

## 5. Retention Period
Quotation data is retained for the duration of negotiations plus 3 years for record-keeping. Accounting records are retained for 5 years per fiscal regulations.

## 6. Your Rights
You have the right to access, rectify, erase, restrict processing, and port your personal data, as well as lodge a complaint with the supervisory data protection authority (PUODO).
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
