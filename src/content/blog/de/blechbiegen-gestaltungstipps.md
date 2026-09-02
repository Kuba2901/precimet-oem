---
title: "Über das Biegen von Teilen auf der Presse"
description: "Mindestflanschlänge, Biegeradius, Biegezugabe und K-Faktor, Entlastungsschnitte und realistische Toleranzen — fünf Regeln, die wir bei Biegeaufträgen in Lohnfertigung anwenden."
date: 2026-08-27
lang: de
cover: "https://images.unsplash.com/photo-1598299803213-d894fb2ab97d?auto=format&fit=crop&w=1400&q=70"
tags: ["Blechbiegen", "Design for Manufacturing", "Technische Tipps"]
translationKey: "bending-dfm-tips"
---

Die meisten Biegeprobleme beginnen bereits auf der Zeichnung, nicht an der Abkantpresse. Ein paar wichtige Konstruktionsentscheidungen — Flanschlänge, Biegeradius, Lochposition, Materialentlastung — entscheiden darüber, ob ein Teil auf der Abkantpresse überhaupt herstellbar ist. Hier sind fünf wichtige Regeln, die wir bei Biegeaufträgen in Lohnfertigung anwenden.

## 1. Mindestflanschlänge einhalten

Jede Abkantpresse braucht genug Material zum Greifen während des Biegens. Die Faustregel: **Mindestflanschlänge ≥ 4× Materialstärke** (für Standard-V-Matrizen). Kürzere Flansche riskieren Rutschen, ungleichmäßige Winkel oder Oberflächenmarken von der Matrize.

Wenn Ihr Entwurf eine kurze Flanschlänge erfordert, prüfen unsere Technologen die Machbarkeit der Biegung.

## 2. Realistischen inneren Biegeradius vorsehen

Der innere Biegeradius bestimmt, ob das Material reißt, zurückfedert oder sauber geformt wird. Ein im Verhältnis zur Dicke zu enger Radius zwingt die Außenfasern über ihre Dehnungsgrenze — und das Teil reißt.

**Praktische Minima:**
- **Baustahl:** Innenradius ≥ 0,5× Dicke (für 90°-Biegen auf Standard-V-Matrizen)
- **Edelstahl:** Innenradius ≥ 1× Dicke (neigt stärker zur Kaltverfestigung)
- **Aluminium:** Innenradius ≥ 1× Dicke (abhängig vom Wärmebehandlungszustand; 5052 ist nachgiebiger als 6061)

Wenn der Radius für Passung oder Ästhetik kritisch ist, geben Sie ihn auf der Zeichnung an. Wenn nicht, überlassen Sie ihn dem Bediener der Abkantpresse.

## 3. Biegezugabe und K-Faktor berücksichtigen

Material wird auf der Außenseite der Biegung gedehnt und auf der Innenseite komprimiert, daher weicht das Flachmaß vom gefalteten Maß ab. Dies wird durch die **Biegezugabe** erfasst — die Bogenlänge der neutralen Faser durch die Biegung.

Die Position der neutralen Faser wird durch den **K-Faktor** beschrieben (Verhältnis des Versatzes der neutralen Faser zur Materialstärke). Für dünne Bleche (≤ 3 mm) liegt der K-Faktor typischerweise bei **0,33–0,40**. Bei dickerem Material verschiebt er sich Richtung **0,40–0,44**.

**Warum das wichtig ist:** Wenn Sie Flachmaße angeben, die keine Dehnung annehmen, ist das gebogene Teil falsch lang. Unsere CAM-Software berechnet die exakte Biegezugabe für Ihr Material, Ihre Dicke und Ihren Radius — aber nur, wenn die Zeichnung den korrekten Radius und die richtige Werkstoffgüte enthält.

## 4. Entlastungsschnitte in Biegenähe einfügen

Wenn eine Biegelinie nahe an einer Kante oder einem Loch verläuft, konzentriert sich die Biegekraft an diesem Punkt und kann Reißen oder Verformung verursachen. Entlastungsschnitte (Kerben oder Schlitze) geben dem Material Raum zur Verformung ohne Beschädigung.

**Faustregeln:**
- **Biegelinie zu Lochkante:** ≥ 2× Materialstärke + Biegeradius
- **Biegelinie zu Blechkante:** ≥ 2× Materialstärke
- **Wenn ein Loch die Biegezone überschneidet:** Entlastungskerbe einfügen oder das Loch vollständig verlegen

Ein häufiger Fehler ist das Platzieren einer Reihe von Schraublöchern zu nah an einer Biegung. Sie 3–5 mm weiter von der Biegelinie zu verschieben, löst das Problem oft, ohne die Konstruktionsabsicht zu ändern.

## 5. Toleranzen angeben, die zum Prozess passen

Biegen ist kein Präzisionsbearbeitungsverfahren. Abkantpressen arbeiten mit Presskraft, Werkzeugverschleiß und Materialrückfederung — all das führt zu erheblicher Streuung. Unrealistische Toleranzen an einem Biegeteil erhöhen die Kosten, ohne echten Mehrwert zu bringen.

**Realistische Biegetoleranzen:**
- **Winkel:** ±0,5°–1° (±0,5° bei sorgfältiger Einrichtung; ±1° ist Standard)
- **Flanschlänge:** ±0,5 mm (±1 mm für lange Flansche oder dickes Material)
- **Verzug / Verdrehung:** ≤ 0,5 mm pro 100 mm Flanschlänge (materialabhängig)

Die Rückfederung variiert je nach Material und Dicke: Edelstahl und Aluminium federn stärker zurück als Baustahl. Wenn enge Toleranzen unverzichtbar sind, geben Sie sie ausdrücklich an, rechnen Sie aber mit etwas höheren Stückkosten — der Bediener muss Probebiegungen durchführen und entsprechend nachstellen.

## Wie das Ihrem Angebot hilft

Wenn wir eine Zeichnung mit Biegeradien, realistischen Toleranzen und korrekt platzierten Entlastungsschnitten erhalten, können wir schneller und genauer kalkulieren. Mehrdeutige Zeichnungen erfordern Rückfragen — das verlängert den Angebotsprozess.

> Sind Sie unsicher, ob Ihr Entwurf fürs Biegen optimiert ist? [Senden Sie uns die Zeichnung](/de#kontakt) — wir prüfen jedes Teil vor dem Angebot und weisen auf Probleme in der Biegegeometrie hin.
