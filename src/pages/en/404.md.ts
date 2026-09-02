import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# 404 Not Found — Precimet OEM Manufacturing

The requested resource or endpoint does not exist on \`oem.precimet.pl\`.

## AI Agent & Client Recovery Index
- **Homepage**: [https://oem.precimet.pl/en/](https://oem.precimet.pl/en/)
- **LLM Context & Guidance**: [https://oem.precimet.pl/llms.txt](https://oem.precimet.pl/llms.txt)
- **Full Knowledge Base**: [https://oem.precimet.pl/llms-full.txt](https://oem.precimet.pl/llms-full.txt)
- **Agent Calling Protocol**: [https://oem.precimet.pl/agent-instructions.md](https://oem.precimet.pl/agent-instructions.md)
- **XML Sitemap**: [https://oem.precimet.pl/sitemap-index.xml](https://oem.precimet.pl/sitemap-index.xml)

## Core Trust Anchors & Navigation
- **About Precimet**: [https://oem.precimet.pl/en/about](https://oem.precimet.pl/en/about)
- **Contact & RFQ**: [https://oem.precimet.pl/en/contact](https://oem.precimet.pl/en/contact)
- **Privacy Policy**: [https://oem.precimet.pl/en/privacy](https://oem.precimet.pl/en/privacy)
- **Engineering Blog & DFM**: [https://oem.precimet.pl/en/blog](https://oem.precimet.pl/en/blog)

## Entity Verification
- **PRECIMET H.C.E. Sp. z o.o.**, ul. Pomorska 555, 92-735 Łódź, Poland
- **KRS**: 0000503010 | **VAT ID**: PL7272841275 | **REGON**: 363114171
- **Quality**: ISO 9001:2015 certified
- **Direct RFQ**: produkcja@precimet.pl | **Phone**: +48 422 080 402
`;

  return new Response(content, {
    status: 404,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
