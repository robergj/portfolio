import { spawn } from 'node:child_process';
import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import * as path from 'node:path';
import * as puppeteer from 'puppeteer';
import { pdfPage } from 'puppeteer-report';

interface Target {
  path: string;
  file: string;
}

const TARGETS: Record<string, Target> = {
  es: { path: '/es/pdf', file: 'SpanishCv_RobertoGonzalez.pdf' },
  en: { path: '/pdf', file: 'EnglishCv_RobertoGonzalez.pdf' },
};

const CHOICES: Record<string, Target[]> = {
  '1': [TARGETS.es],
  '2': [TARGETS.en],
  '3': [TARGETS.es, TARGETS.en],
};

const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const goTo = async (page: puppeteer.Page, url: string) => {
  await page.goto(url, { waitUntil: 'networkidle0' });
};

type GoToReturn = ReturnType<typeof goTo>;

interface RetryOptions {
  promise: () => GoToReturn;
  retries: number;
  retryTime: number;
}

const retry = async ({ promise, retries, retryTime }: RetryOptions): GoToReturn => {
  try {
    return await promise();
  } catch (error) {
    if (retries <= 0) throw error;

    await waitFor(retryTime);

    return await retry({ promise, retries: retries - 1, retryTime });
  }
};

const ask = async (): Promise<Target[]> => {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  try {
    while (true) {
      const answer = (
        await rl.question(
          '\n¿Qué CV quieres generar?\n  1) Español\n  2) Inglés\n  3) Ambos\nOpción: ',
        )
      ).trim();

      if (CHOICES[answer]) return CHOICES[answer];

      stdout.write('Opción no válida. Escribe 1, 2 o 3.\n');
    }
  } finally {
    rl.close();
  }
};

const main = async () => {
  const targets = await ask();

  const child = spawn('npm', ['run', 'dev'], {
    detached: process.platform !== 'win32',
    stdio: 'ignore',
    shell: true,
  });

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

  for (const target of targets) {
    await retry({
      promise: () => goTo(page, `http://localhost:3000${target.path}`),
      retries: 5,
      retryTime: 1000,
    });

    await pdfPage(page, {
      path: path.join(__dirname, '..', 'public', target.file),
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
    });

    stdout.write(`Generado public/${target.file}\n`);
  }

  await browser.close();

  // Kill the whole dev-server tree (npm + astro child), not just the npm wrapper.
  if (child.pid) {
    if (process.platform === 'win32') {
      spawn('taskkill', ['/pid', String(child.pid), '/T', '/F']);
    } else {
      try {
        process.kill(-child.pid, 'SIGTERM');
      } catch {
        child.kill();
      }
    }
  }
  process.exit(0);
};

main();
