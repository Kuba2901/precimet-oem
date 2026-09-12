import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# About Precimet OEM Manufacturing

> PRECIMET H.C.E. Sp. z o.o. is a contract manufacturing plant in Łódź, Poland (ul. Pomorska 555): laser cutting, sheet metal bending, welding, CNC machining and assembly for OEMs. More than 30 years of metalworking experience, ISO 9001:2015 certified since 2015.

## 1. Company profile
Precimet is built on more than 30 years of metalworking experience. We work for machine and equipment builders, automation and robotics integrators and OEM companies, including customers in the food, energy, transport and logistics, construction, metal furniture and agricultural sectors. We have manufactured more than 3.5 million parts, from one-off prototypes to repeatable series.

## 2. Manufacturing capabilities
- **Laser cutting**: Mazak Nexus Optiplex 2D, 4 kW fibre, sheets up to 3000 × 1500 mm; mild steel and stainless / acid-resistant steel up to 20 mm, aluminium up to 10 mm, brass, copper.
- **Sheet metal bending**: Safan servo-electric press brake, bending length up to 3000 mm, up to 160 t.
- **CNC machining**: Doosan DNM-750L (2160 × 762 × 650 mm), Avia VMC 650 (650 × 540 × 620 mm), Romi 510 (up to 1500 mm, ⌀255 mm), Doosan Lynx 300M (up to 712 mm, ⌀254 mm).
- **Welding**: OTC Daihen robot (2000 × 1000 × 400 mm), manual MIG/MAG and TIG welding.
- **Profiles and tubes**: IMET CNC saw (mitre cutting −60° / 0 / +60°), SOCO tube bender (⌀25, ⌀32, ⌀50 mm).
- **Assembly**: mechanical and electrical — from harnesses to complete cabinets and modules.
- **Engineering support**: documentation for manufacture, sheet metal unfolds, CAM programs, material advice.

Powder coating and other coating services are not offered.

## 3. Quality
- Certified **ISO 9001:2015** quality management system since 2015.
- Incoming, in-process and final inspection; quality documentation and material certificates on request.

## 4. Legal entity & registration
- **Entity**: PRECIMET H.C.E. Sp. z o.o.
- **Registered address**: ul. Pomorska 555, 92-735 Łódź, Poland
- **National Court Register (KRS)**: 0000587797 (District Court for Łódź-Śródmieście, 20th Commercial Division)
- **Tax number (NIP / EU VAT)**: PL7282804918
- **Statistical number (REGON)**: 363114171
- **Share capital**: 101,000.00 PLN
- **RFQ contact**: produkcja@precimet.pl | Tel: +48 422 080 402
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
