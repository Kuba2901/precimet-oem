---
title: "Blechbiegen richtig konstruieren: 5 Tipps aus der Fertigung"
description: "Mindestflanschlänge, Biegeradius, K-Faktor, Entlastungsschnitte und realistische Toleranzen — praktische Regeln für bessere Zeichnungen und schnellere Angebote."
date: 2026-08-27
lang: de
cover: "https://images.unsplash.com/photo-1598299803213-d894fb2ab97d?auto=format&fit=crop&w=1400&q=70"
tags: ["Blechbiegen", "Design for Manufacturing", "Technische Tipps"]
translationKey: "bending-dfm-tips"
---

Die meisten Biegeprobleme entstehen auf der Zeichnung, nicht an der Abkantpresse. Ein paar Konstruktionsentscheidungen — Flanschlänge, Biegeradius, Lochposition — können darüber entscheiden, ob ein Teil beim ersten Mal richtig gebogen wird oder ob Nacharbeit, Vorrichtungen oder eine Neukonstruktion nötig sind. Hier sind fünf Regeln, die wir täglich bei Biegeaufträgen in Lohnfertigung anwenden.

## 1. Mindestflanschlänge einhalten

Jede Abkantpresse braucht genug Material zum Greifen während des Biegens. Die Faustregel: **Mindestflanschlänge ≥ 4× Materialstärke** (für Standard-V-Matrizen). Kürzere Flansche rutschen, ergeben inkorrekte Winkel oder Oberflächenmarken von der Matrize.

Wenn Ihr Entwurf einen sehr kurzen Flansch vorsieht — z.B. eine kleine Umlegekante am Gehäuse — prüfen Sie, ob das Biegen umorientiert oder die Funktion stattdessen lasergeschnitten werden kann. Unser CAD/CAM-Team prüft das bei jeder Zeichnung.

## 2. Realistischen inneren Biegeradius vorsehen

Der innere Biegeradius bestimmt, ob das Material reißt, federnd zurückgeht oder sauber geformt wird. Ein Radius, der im Verhältnis zur Dicke zu eng ist, zwingt die Außenfasern über ihre Dehnungsgrenze — und das Teil reißt.

**Praktische Minima:**
- **Baustahl:** Innenradius ≥ 0,5× Dicke (für 90°-Biegen auf Standard-V-Matrizen)
- **Edelstahl:** Innenradius ≥ 1× Dicke (neigt stärker zur Verfestigung)
- **Aluminium:** Innenradius ≥ 1× Dicke (hängt von der Wärmebehandlung ab; AW-5052 ist nachgiebiger als 6061)

Wenn der Radius für Passung oder Ästhetik kritisch ist, geben Sie ihn auf der Zeichnung an. Wenn nicht, überlassen Sie ihn dem Bediener — er wählt den Punch und die Matrize, die das beste Ergebnis für Ihr Material und Ihre Dicke ergibt.

## 3. Biegezugabe und K-Faktor berücksichtigen

Ein Flachmuster ist nicht einfach die Summe der Biegeflächen. Material wird auf der Außenseite des Bogens gedehnt und auf der Innenseite komprimiert, daher weicht die Flachlänge von den gefalteten Maßen ab. Dies wird durch die **Biegezugabe** erfasst — die Bogenlänge der neutralen Faser im Bogen.

Die Position der neutralen Faser wird durch den **K-Faktor** beschrieben (Verhältnis des neutralen Faser-Offsets zur Materialstärke). Für dünne Bleche (≤ 3 mm) liegt der K-Faktor typischerweise bei **0,33–0,40**. Bei dickeren Materialien verschiebt er sich Richtung **0,40–0,44**.

**Warum das wichtig ist:** Wenn Sie Flachmaße angeben, die keine Dehnung annehmen, ist das gebogene Teil falsch lang. Unsere CAM-Software berechnet die exakte Biegezugabe für Ihr Material, Ihre Dicke und Ihren Radius — aber nur, wenn die Zeichnung den korrekten Radius und die richtige Legierung enthält.

## 4. Entlastungsschnitte in Biegenähe einfügen

Wenn die Biegelinie nahe einer Kante oder einem Loch verläuft, konzentriert sich die Biegekraft an diesem Punkt und kann Reißen oder Verformung verursachen. Entlastungsschnitte (Kerben oder Schlitze) geben dem Material Raum zur Verformung ohne Beschädigung.

**Faustregeln:**
- **Biegelinie zu Lochkante:** ≥ 2× Materialstärke + Biegeradius
- **Biegelinie zu Blechkante:** ≥ 2× Materialstärke
- **Wenn ein Loch die Biegezone überstrebt:** Entlastungskerbe einfügen oder das Loch vollständig verlegen

Ein häufiger Fehler ist das Platzieren einer Reihe von Schraublöchern zu nah an einer Biege. Das Verschieben um 3–5 mm weiter von der Biegelinie löst das Problem oft ohne Änderung der Konstruktionsabsicht.

## 5. Toleranzen angeben, die zum Prozess passen

Biegen ist kein Präzisionsbearbeitungsverfahren. Abkantpressen arbeiten mit Kraft, Werkzeugverschleiß undMaterialrückfederung — was alles Variationen einführt. Urealistische Toleranzen auf einem Biegeteil erhöhen die Kosten ohne Mehrwert.

**Realistische Biegetoleranzen:**
- **Winkel:** ±0,5°–1° (±0,5° bei sorgfältiger Einstellung; ±1° ist Standard)
- **Flanschlänge:** ±0,5 mm (±1 mm für lange Flansche oder dickes Material)
- **Verzug / Verdrehung:** ≤ 0,5 mm pro 100 mm Flanschlänge (materialabhängig)

Das Rückfedern variiert nach Material und Dicke: Edelstahl und Aluminium federn stärker zurück als Baustahl. Wenn enge Toleranzen unverzichtbar sind, geben Sie sie explizit an und rechnen Sie mit leicht höheren Stückkosten — der Bediener muss Probebiegen durchführen und nachstellen.

## Wie das Ihr Angebot verbessert

Wenn wir eine Zeichnung mit klaren Biegeradien, realistischen Toleranzen und korrekt positionierten Entlastungen erhalten, können wir schneller und genauer kalkulieren. Mehrdeutige Zeichnungen erfordern Rückfragen — die dem Angebotzyklus Tage hinzufügen.

> Sind Sie unsicher, ob Ihr Entwurf fürs Biegen optimiert ist? [Senden Sie uns trotzdem die Zeichnung](/de#kontakt) — wir prüfen jedes Teil vor dem Angebot und weisen auf Probleme in der Biegegeometrie hin.
