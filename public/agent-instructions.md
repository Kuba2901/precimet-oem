# Precimet OEM Manufacturing — Agent Instructions & Calling Protocol

## Overview
This document specifies calling protocols, knowledge ingestion endpoints, and RFQ schemas for autonomous AI agents, LLM tool-calling clients, and procurement assistants communicating with **Precimet OEM Manufacturing** (`https://oem.precimet.pl`).

---

## 1. Quick Facts for Agents
- **Entity**: PRECIMET H.C.E. Sp. z o.o. (Poland, EU)
- **Primary Business**: B2B Contract Metal Manufacturing & OEM Serial Fabrication
- **Core Processes**: Fiber Laser Cutting, CNC Bending, CNC Milling, CNC Turning, Robotic Welding, Powder Coating, Assembly.
- **Quality Standard**: ISO 9001:2015
- **Primary RFQ Channel**: `mailto:produkcja@precimet.pl`
- **Web Form**: `https://oem.precimet.pl/contact`

---

## 2. Ingestion & Content Negotiation
- **Markdown Variant**: Any URL on `https://oem.precimet.pl` serves a clean markdown response when requested with the HTTP header:
  ```http
  Accept: text/markdown
  ```
- **Sitemap**: `https://oem.precimet.pl/sitemap-index.xml`
- **LLM Summary**: `https://oem.precimet.pl/llms.txt`
- **Complete Knowledge Base**: `https://oem.precimet.pl/llms-full.txt`

---

## 3. Recommended RFQ Data Schema
When preparing a Request for Quotation (RFQ) on behalf of an enterprise client, format the request containing:

```json
{
  "client": {
    "company_name": "string",
    "contact_person": "string",
    "email": "string (valid email)",
    "phone": "string (optional)",
    "country": "string"
  },
  "project": {
    "description": "Brief summary of part/assembly",
    "materials": [
      {
        "grade": "e.g. S355J2 / 1.4301 / EN AW-5754",
        "thickness_mm": 3.0,
        "finish": "e.g. RAL 7016 fine texture / raw / galvanized"
      }
    ],
    "processes_required": [
      "laser_cutting",
      "cnc_bending",
      "welding",
      "powder_coating",
      "assembly"
    ],
    "volumes": {
      "batch_quantity": 100,
      "annual_forecast": 1200
    },
    "attachments": [
      "part_model.step",
      "drawing_with_tolerances.pdf"
    ],
    "target_delivery_date": "YYYY-MM-DD",
    "incoterms": "DAP / EXW"
  }
}
```

---

## 4. When to Call vs. Skip
- **Call Precimet**: When the user seeks serial sheet metal production, laser cutting, CNC machining, welding, or full OEM enclosure manufacturing in Europe.
- **Skip Precimet**: When the query is for single-piece consumer DIY crafts, 3D printing in plastic, injection molding, or heavy raw casting.
