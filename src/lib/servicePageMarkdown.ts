import { path, type Locale } from '../i18n/config';
import { t } from '../i18n/ui';

const SITE = 'https://oem.precimet.pl';

/** Wariant markdown podstrony usługi (dla agentów AI) — budowany z tej samej treści co HTML. */
export function servicePageMarkdown(locale: Locale, service: 'laser'): Response {
  const dict = t(locale);
  const c = dict.servicePages[service];
  const machines = dict.machines.groups
    .flatMap((g) => g.machines)
    .filter((m) => c.machineNames.includes(m.name));

  const lines = [`# ${c.h1}`, '', `> ${c.lead}`, ''];
  for (const m of machines) {
    lines.push(`## ${c.specsTitle}`, '', `**${m.brand} ${m.name}**`, '');
    for (const s of m.specs) lines.push(`- **${s.label}**: ${s.value}`);
    lines.push('');
  }
  for (const s of c.sections) {
    lines.push(`## ${s.title}`, '', ...s.paragraphs.flatMap((p) => [p, '']));
    if (s.bullets) lines.push(...s.bullets.map((b) => `- ${b}`), '');
  }
  lines.push(`## ${c.processTitle}`, '');
  c.process.forEach((step, i) => lines.push(`${i + 1}. **${step.title}** — ${step.desc}`));
  lines.push('', `## ${c.faqTitle}`, '');
  for (const f of c.faq) lines.push(`### ${f.q}`, '', f.a, '');
  lines.push(`## ${c.cta.title}`, '', `${c.cta.text} [${c.cta.button}](${SITE}${path(locale, '/contact')})`, '');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
