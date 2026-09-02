---
title: "About bending parts on the press"
description: "Minimum flange length, bend radius, bend allowance and K-factor, relief cuts and realistic tolerances — five rules we apply on subcontracted bending orders."
date: 2026-08-27
lang: en
cover: "https://images.unsplash.com/photo-1598299803213-d894fb2ab97d?auto=format&fit=crop&w=1400&q=70"
tags: ["sheet bending", "design for manufacturing", "engineering tips"]
translationKey: "bending-dfm-tips"
---

Most bending problems start at the drawing stage, not on the press brake. A few key design decisions — flange length, bend radius, hole placement, material relief — determine whether a part can be produced on a press brake at all. Here are five important rules we apply on subcontracted bending orders.

## 1. Respect the minimum flange length

Every press brake needs enough material to grip during the bend. The rule of thumb: **minimum flange length ≥ 4× material thickness** (for standard V-dies). Shorter flanges risk slipping, inconsistent angles or surface marks from the die.

If your design requires a short flange, our technologists will check the feasibility of the bend.

## 2. Set a realistic inner bend radius

The inner bend radius determines whether the material cracks, springs back, or forms cleanly. A radius that is too tight relative to the thickness forces the outer fibres beyond their elongation limit — and the part cracks.

**Practical minimums:**
- **Carbon steel:** inner radius ≥ 0.5× thickness (for 90° bends on standard V-dies)
- **Stainless steel:** inner radius ≥ 1× thickness (more prone to work-hardening)
- **Aluminium:** inner radius ≥ 1× thickness (varies by temper; 5052 is more forgiving than 6061)

When the radius is critical for fit or aesthetics, specify it on the drawing. When it is not, leave it to the press brake operator.

## 3. Account for bend allowance and K-factor

Material stretches on the outside of the bend and compresses on the inside, so the flat dimension differs from the folded dimension. This is captured by the **bend allowance** — the arc length of the neutral axis through the bend.

The neutral axis position is described by the **K-factor** (the ratio of the neutral-axis offset to material thickness). For thin sheets (≤ 3 mm), a K-factor of approximately **0.33–0.40** is typical. For thicker material, it shifts toward **0.40–0.44**.

**Why this matters:** if you specify flat dimensions that assume no stretch, the bent part will be the wrong length. Our CAM software calculates the exact bend allowance for your material, thickness and radius — but only if the drawing includes the correct radius and material grade.

## 4. Add relief cuts near bends

When a bend line runs close to an edge or a hole, the bending force concentrates at that point and can cause cracking or distortion. Relief cuts (notches or slots) give the material room to deform without damage.

**Rules of thumb:**
- **Bend line to hole edge:** ≥ 2× material thickness + bend radius
- **Bend line to sheet edge:** ≥ 2× material thickness
- **If a hole straddles the bend zone:** add a relief cut or relocate the hole entirely

A common mistake is placing a row of screw holes too close to a bend. Moving them 3–5 mm further from the bend line often solves the problem without changing the design intent.

## 5. Specify tolerances that match the process

Bending is not a precision machining operation. Press brakes work with tonnage, tooling and material springback — all of which introduce significant variation. Setting unachievable tolerances on a bent part increases cost without adding real value.

**Realistic bending tolerances:**
- **Angle:** ±0.5°–1° (±0.5° with careful setup; ±1° is standard)
- **Flange length:** ±0.5 mm (±1 mm for long flanges or thick material)
- **Bowing / twisting:** ≤ 0.5 mm per 100 mm of flange length (material dependent)

Springback varies by material and thickness: stainless steel and aluminium spring back more than carbon steel. If tight tolerances are essential, specify them explicitly, but expect a somewhat higher unit cost — the operator will need to make test bends and adjust accordingly.

## How this helps your quote

When we receive a drawing with bend radii, realistic tolerances and properly placed relief cuts, we can quote faster and more accurately. Ambiguous drawings require follow-up questions, which add time to the quotation process.

> Not sure whether your design is optimised for bending? [Send us the drawing](/en#kontakt) — we review every part before quoting and will flag any issues with the bend geometry.
