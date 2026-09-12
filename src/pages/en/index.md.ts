import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Precimet OEM Manufacturing — Contract Metal Fabrication in Poland

> Laser cutting, sheet metal bending, manual and robotic welding, CNC machining and assembly for OEMs — from prototype to series production. More than 30 years of metalworking experience, ISO 9001:2015 certified since 2015, production plant in Łódź.

## Quick links for AI agents
- **LLM summary**: [https://oem.precimet.pl/llms.txt](https://oem.precimet.pl/llms.txt)
- **Full knowledge base**: [https://oem.precimet.pl/llms-full.txt](https://oem.precimet.pl/llms-full.txt)
- **Agent instructions**: [https://oem.precimet.pl/agent-instructions.md](https://oem.precimet.pl/agent-instructions.md)
- **About us**: [https://oem.precimet.pl/en/about/](https://oem.precimet.pl/en/about/)
- **Contact & RFQ**: [https://oem.precimet.pl/en/contact/](https://oem.precimet.pl/en/contact/)
- **Blog**: [https://oem.precimet.pl/en/blog/](https://oem.precimet.pl/en/blog/)
- **Privacy policy**: [https://oem.precimet.pl/en/privacy-policy/](https://oem.precimet.pl/en/privacy-policy/)
- **XML sitemap**: [https://oem.precimet.pl/sitemap-index.xml](https://oem.precimet.pl/sitemap-index.xml)

---

## Services
1. **Sheet metal laser cutting** — carbon steel, stainless steel, aluminium, brass, copper.
2. **Sheet metal bending** on a CNC press brake.
3. **Manual welding** — MIG/MAG and TIG of steel, stainless and aluminium.
4. **Robotic welding** for production series.
5. **CNC milling** and **CNC turning**.
6. **CNC tube bending** and **CNC profile cutting**.
7. **Mechanical assembly** and **electrical assembly** — from harnesses to complete cabinets and modules.
8. **CAD/CAM engineering** — documentation for manufacture, sheet metal unfolds, CAM programs, material advice.
9. **General metalwork** — drilling, tapping, grinding and finishing of parts.

Powder coating and other coating services are not offered.

## Machine park
| Machine | Capacity |
| :--- | :--- |
| Mazak Nexus Optiplex 2D fibre laser (4 kW) | sheet 3000 × 1500 mm; mild steel and stainless / acid-resistant steel up to 20 mm; aluminium up to 10 mm; brass, copper |
| Safan servo-electric press brake | bending length up to 3000 mm, up to 160 t |
| Doosan DNM-750L machining centre | working envelope 2160 × 762 × 650 mm |
| Avia VMC 650 machining centre | working envelope 650 × 540 × 620 mm |
| Romi 510 CNC lathe | turning length up to 1500 mm, diameter up to 255 mm |
| Doosan Lynx 300M CNC lathe | turning length up to 712 mm, diameter up to 254 mm |
| OTC Daihen welding robot | welding envelope 2000 × 1000 × 400 mm |
| IMET CNC saw | automatic feeding, mitre cutting −60° / 0 / +60° |
| SOCO CNC tube bender | single plane, tubes ⌀25, ⌀32, ⌀50 mm (other sizes on request) |

## Key facts
- More than 3.5 million parts manufactured.
- 50+ sheet metal grades in stock — structural and stainless steels, aluminium.
- No minimum order quantity — from single parts to series.
- Quotes usually within 1–2 business days.

## Company details & contact
- **Company**: PRECIMET H.C.E. Sp. z o.o.
- **Address**: ul. Pomorska 555, 92-735 Łódź, Poland
- **KRS**: 0000587797 | **VAT ID**: PL7282804918 | **REGON**: 363114171
- **RFQ email**: produkcja@precimet.pl
- **Phone**: +48 422 080 402
- **Opening hours**: Mon–Fri, 8:00–16:00 CET
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
