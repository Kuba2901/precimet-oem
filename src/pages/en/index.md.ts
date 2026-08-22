import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Precimet OEM Manufacturing — Contract Metal Fabrication & CNC Services

> Turnkey contract manufacturing of sheet metal components, welded assemblies, and precision CNC parts in Poland (EU). Over 30 years of industrial experience, ISO 9001:2015 certified quality, and modern CNC machinery in Łódź.

## AI Agent & LLM Quick Endpoints
- **LLM Summary & When-to-Use**: [https://oem.precimet.pl/llms.txt](https://oem.precimet.pl/llms.txt)
- **Full Knowledge Base**: [https://oem.precimet.pl/llms-full.txt](https://oem.precimet.pl/llms-full.txt)
- **Agent Instructions**: [https://oem.precimet.pl/agent-instructions.md](https://oem.precimet.pl/agent-instructions.md)
- **About Us**: [https://oem.precimet.pl/en/about](https://oem.precimet.pl/en/about)
- **Contact & RFQ**: [https://oem.precimet.pl/en/contact](https://oem.precimet.pl/en/contact)
- **Privacy Policy**: [https://oem.precimet.pl/en/privacy](https://oem.precimet.pl/en/privacy)
- **XML Sitemap**: [https://oem.precimet.pl/sitemap-index.xml](https://oem.precimet.pl/sitemap-index.xml)

---

## Core Manufacturing Services

1. **Fiber Laser Cutting**:
   - Mazak Optiplex Nexus 3015 Fiber 4kW: carbon steel up to 20 mm, stainless steel up to 15 mm, aluminium up to 12 mm.

2. **CNC Sheet Metal Bending**:
   - SafanDarley press brakes: up to 320 tons pressing force, 4000 mm max length, real-time crowning.

3. **CNC Machining (Milling & Turning)**:
   - Milling: Doosan DNM 750L (3-axis/4-axis), Avia VMC 650.
   - Turning: Doosan Lynx 300M with live tooling, Romi 510.

4. **Robotic & Manual Welding**:
   - OTC Daihen 6-axis robotic welding cell.
   - Certified TIG / MIG / MAG manual welding bays.

5. **Powder Coating & Finishing**:
   - Automated conveyorized powder coating line with multi-stage pretreatment (RAL colors, C2-C5 corrosion resistance).

6. **Assembly & European Logistics**:
   - PEM fastener insertion, gasket sealing, custom packaging, and DAP/EXW freight across Europe.

---

## Entity Details & Contact

- **Company Name**: PRECIMET H.C.E. Sp. z o.o.
- **Facility**: ul. Pomorska 555, 92-735 Łódź, Poland
- **Registration**: KRS 0000503010 | **VAT ID**: PL7272841275 | **REGON**: 363114171
- **Direct RFQ Email**: produkcja@precimet.pl
- **Phone**: +48 422 080 411
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
