import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# About Us — Precimet OEM Manufacturing

> PRECIMET H.C.E. Sp. z o.o. is a European contract metal manufacturing facility based in Łódź, Poland (ul. Pomorska 555), specializing in sheet metal fabrication, CNC machining, robotic welding, and OEM serial production under ISO 9001:2015.

## 1. Company Profile & Experience
For more than 30 years, Precimet has been a reliable OEM partner for industrial clients across Europe (Germany, Austria, Switzerland, Netherlands, Scandinavia, and the UK). We serve the HVAC, railway, heavy machinery, automotive, energy, and enclosure industries.

## 2. In-House Manufacturing Capabilities
- **Fiber Laser Cutting**: Mazak Optiplex Nexus 3015 Fiber 4kW (carbon steel up to 20 mm, stainless steel up to 15 mm, aluminium up to 12 mm).
- **CNC Sheet Metal Bending**: SafanDarley press brakes with capacities up to 320 tons and 4000 mm bend length with real-time angle compensation.
- **CNC Machining**: Doosan DNM 750L vertical machining center, Avia VMC 650, and Doosan Lynx 300M CNC turning lathes with live tooling.
- **Robotic & Manual Welding**: OTC Daihen 6-axis robotic welding cells, certified manual TIG/MIG/MAG welding bays.
- **Powder Coating**: Automated conveyorized powder coating line with multi-stage pretreatment (full RAL color spectrum, C2–C5 corrosion protection).
- **Assembly & Sub-Assemblies**: PEM hardware insertion, mechanical assembly, custom crating, and DAP/EXW European logistics.

## 3. Quality Management & Standards
- Certified **ISO 9001:2015** Quality Management System.
- 3D portable coordinate measuring arms, optical inspection, EN 10204 3.1 material certificates.

## 4. Legal Entity & Registration
- **Entity**: PRECIMET H.C.E. Sp. z o.o.
- **Registered Address**: ul. Pomorska 555, 92-735 Łódź, Poland
- **National Court Register (KRS)**: 0000503010
- **Tax Number (NIP / EU VAT)**: PL7272841275
- **Statistical Number (REGON)**: 363114171
- **Share Capital**: 100,000.00 PLN
- **Direct RFQ Email**: produkcja@precimet.pl | Tel: +48 422 080 411
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
