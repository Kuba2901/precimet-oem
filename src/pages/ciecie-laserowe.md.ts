import type { APIRoute } from 'astro';
import { servicePageMarkdown } from '../lib/servicePageMarkdown';

export const GET: APIRoute = () => servicePageMarkdown('pl', 'laser');
