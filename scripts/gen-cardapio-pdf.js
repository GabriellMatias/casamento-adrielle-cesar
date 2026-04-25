#!/usr/bin/env node
// scripts/gen-cardapio-pdf.js
// Gera carta-drinks/pdf/cardapio.html com todas as imagens embutidas em base64
// Uso: node scripts/gen-cardapio-pdf.js

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "carta-drinks", "pdf");
const DRINKS_IMG = path.join(ROOT, "public", "images", "drinks");
const LOGO_PATH = path.join(ROOT, "public", "images", "logo-ac.png");
const QR_PATH = path.join(
  ROOT,
  "public",
  "images",
  "casamento-adrielle-cesar-1024-qrcode.png"
);

// ─── Dados ────────────────────────────────────────────────────────────────────
const DRINK_SECTIONS = [
  "Gin Drinks",
  "Caipiroska",
  "Clássicos",
  "Spritz & Espumantes",
];

const DRINKS = [
  // Gin Drinks
  {
    id: "gin-tonica",
    name: "Gin Tônica",
    ingredients: "Laranja · gin · água tônica · gelo",
    description:
      "Um clássico efervescente e elegante. O gin encontra a água tônica e uma rodela de laranja fresca para um drinque aromático e perfeito para começar a noite.",
    section: "Gin Drinks",
  },
  {
    id: "gin-tropical",
    name: "Gin Tropical",
    ingredients: "Gin · laranja · energético tropical · gelo",
    description:
      "Uma explosão de sabores que transporta para os trópicos. O gin se casa com o energético tropical e o frescor da laranja para uma experiência vibrante.",
    section: "Gin Drinks",
  },
  {
    id: "gin-mediterraneo",
    name: "Gin Mediterrâneo",
    ingredients: "Gin · suco de abacaxi · xarope de maçã verde · gelo",
    description:
      "Inspirado nas praias do Mediterrâneo. O abacaxi suculento e o xarope de maçã verde criam um drinque exótico, sofisticado e surpreendente.",
    section: "Gin Drinks",
  },
  {
    id: "spring",
    name: "Spring",
    ingredients:
      "Manjericão · laranja · gin · xarope de tangerina · limão siciliano · Sprite · gelo",
    description:
      "Fresco como uma manhã de primavera. O manjericão aromático harmoniza com os cítricos e o xarope suave de tangerina — floral, leve e inesquecível.",
    section: "Gin Drinks",
  },
  // Caipiroska
  {
    id: "caipiroska-abacaxi",
    name: "Caipiroska de Abacaxi",
    ingredients: "Abacaxi · açúcar · vodka ou gin · gelo",
    description:
      "Brasil em festa! O abacaxi tropical macerado com açúcar encontra a vodka ou o gin para um drinque doce, frutado e irresistível.",
    section: "Caipiroska",
  },
  {
    id: "caipiroska-limao",
    name: "Caipiroska de Limão",
    ingredients: "Limão · açúcar · vodka ou gin · gelo",
    description:
      "O clássico nacional em sua versão mais adorada. Limão fresco macerado, açúcar e vodka — a tríade perfeita de um drinque equilibrado e delicioso.",
    section: "Caipiroska",
  },
  // Clássicos
  {
    id: "lagoa-azul",
    name: "Lagoa Azul",
    ingredients: "Curaçau Blue · vodka · limão · Sprite · gelo",
    description:
      "Visualmente encantador com sua cor azul-serena. O Curaçau Blue traz um toque exótico, enquanto o limão e a Sprite garantem leveza e frescor.",
    section: "Clássicos",
  },
  {
    id: "john-collins",
    name: "John Collins",
    ingredients: "Vodka · limão · água com gás · limão siciliano · gelo",
    description:
      "Um clássico americano com história desde 1876. Vodka suave, suco de limão fresco e água com gás — simples, elegante e incrivelmente refrescante.",
    section: "Clássicos",
  },
  // Spritz & Espumantes
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    ingredients: "Aperol · espumante · Sprite ou água com gás · laranja · gelo",
    description:
      "O ícone de toda celebração italiana. O Aperol com notas amargas de laranja encontra o espumante — harmonioso, borbulhante e irresistível.",
    section: "Spritz & Espumantes",
  },
  {
    id: "limoncello-spritz",
    name: "Limoncello Spritz",
    ingredients: "Limoncello · Sprite ou espumante · água com gás",
    description:
      "A dolce vita italiana em cada bolha. O licor de limão artesanal com espumante é a definição de elegância borbulhante.",
    section: "Spritz & Espumantes",
  },
  {
    id: "soda-italiana",
    name: "Soda Italiana",
    ingredients: "Xarope de maçã verde · água com gás · gelo",
    description:
      "Sofisticação para todos os paladares. O xarope de maçã verde e a água com gás criam um drinque leve, efervescente e sem álcool.",
    section: "Spritz & Espumantes",
    noAlcohol: true,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function toBase64(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const ext = path.extname(filePath).slice(1).replace("jpg", "jpeg");
  const mime = ext === "png" ? "image/png" : "image/jpeg";
  const data = fs.readFileSync(filePath).toString("base64");
  return `data:${mime};base64,${data}`;
}

function drinkImg(id) {
  return toBase64(path.join(DRINKS_IMG, `${id}.jpg`));
}

// ─── Build HTML ───────────────────────────────────────────────────────────────
function buildHtml() {
  const logo = toBase64(LOGO_PATH);
  const qr = toBase64(QR_PATH);

  // Monta grid de cards (2 colunas)
  const allDrinkCards = DRINKS.map((d) => {
    const img = drinkImg(d.id);
    const imgTag = img
      ? `<img src="${img}" alt="${d.name}" class="drink-photo" />`
      : `<div class="drink-photo drink-photo--fallback">${d.name[0]}</div>`;
    const badge = d.noAlcohol
      ? ` <span class="badge-soft">s/ álcool</span>`
      : "";
    return `
      <div class="drink-card">
        ${imgTag}
        <div class="drink-info">
          <p class="drink-name">${d.name}${badge}</p>
          <p class="drink-section-label">${d.section}</p>
          <p class="drink-ingredients">${d.ingredients}</p>
        </div>
      </div>`;
  }).join("\n");

  const logoTag = logo
    ? `<img src="${logo}" alt="Logo Adrielle e Cézar" class="header-logo" />`
    : `<div class="header-logo-fallback">A &amp; C</div>`;

  const qrTag = qr
    ? `<img src="${qr}" alt="QR Code do cardápio digital" class="qr-img" />`
    : `<div class="qr-placeholder">QR</div>`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Carta de Drinks — Adrielle &amp; Cézar</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600&family=Lora:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --gold:       #c4a44a;
      --gold-light: #d4b96b;
      --gold-dark:  #a68a3a;
      --cream:      #faf8f3;
      --sage:       #8b9a7b;
      --text:       #3d3428;
      --muted:      #6b5e4f;
      --light:      #8a7d6e;
    }

    /* Uma página A4: 210×297mm, margens 10mm */
    @page {
      size: A4 portrait;
      margin: 10mm 10mm;
    }

    html {
      font-size: 8.5px;          /* tudo relativo a este valor */
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    body {
      background: var(--cream);
      color: var(--text);
      font-family: 'Lora', Georgia, serif;
      line-height: 1.4;
      width: 190mm;              /* 210 - 2×10mm */
      margin: 0 auto;
    }

    /* ── HEADER ── */
    .menu-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-bottom: 6px;
      border-bottom: 1.5px solid var(--gold-light);
      margin-bottom: 8px;
    }
    .header-logo {
      width: 46px;
      height: 46px;
      object-fit: contain;
      flex-shrink: 0;
    }
    .header-logo-fallback {
      width: 46px; height: 46px;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Great Vibes', cursive;
      font-size: 1.6rem; color: var(--gold);
      border: 1px solid var(--gold-light); border-radius: 50%;
      flex-shrink: 0;
    }
    .header-text { flex: 1; text-align: center; }
    .menu-title {
      font-family: 'Great Vibes', cursive;
      font-size: 2.6rem;
      color: var(--gold);
      line-height: 1;
    }
    .menu-subtitle {
      font-family: 'Playfair Display', serif;
      font-size: 1.05rem;
      color: var(--text);
    }
    .gold-rule {
      width: 50px; height: 1.5px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      margin: 2px auto 3px;
    }
    .menu-tagline {
      font-style: italic;
      font-size: 0.82rem;
      color: var(--muted);
    }

    /* ── GRID DE DRINKS ─ 2 colunas ── */
    .drinks-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5px 8px;
      margin-bottom: 8px;
    }

    .drink-card {
      display: flex;
      gap: 6px;
      align-items: flex-start;
      padding: 5px 6px;
      background: white;
      border-radius: 6px;
      border: 1px solid rgba(196,164,74,0.18);
    }

    .drink-photo {
      width: 62px;
      height: 62px;
      object-fit: cover;
      border-radius: 5px;
      flex-shrink: 0;
      border: 1px solid rgba(196,164,74,0.25);
    }
    .drink-photo--fallback {
      width: 62px; height: 62px;
      border-radius: 5px; flex-shrink: 0;
      background: linear-gradient(135deg, var(--cream), #ecdfc8);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Great Vibes', cursive;
      font-size: 1.4rem; color: var(--gold);
      border: 1px solid rgba(196,164,74,0.3);
    }

    .drink-info { flex: 1; min-width: 0; }
    .drink-name {
      font-family: 'Playfair Display', serif;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text);
      line-height: 1.25;
    }
    .drink-section-label {
      font-size: 0.65rem;
      color: var(--gold-dark);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .drink-ingredients {
      font-size: 0.75rem;
      color: var(--muted);
      line-height: 1.4;
    }
    .badge-soft {
      display: inline-block;
      font-size: 0.6rem;
      padding: 1px 5px;
      border-radius: 99px;
      background: rgba(139,154,123,0.18);
      border: 1px solid var(--sage);
      color: var(--sage);
      font-family: 'Lora', serif;
      font-style: normal;
      vertical-align: middle;
      margin-left: 3px;
    }

    /* ── FOOTER ── */
    .menu-footer {
      border-top: 1.5px solid var(--gold-light);
      padding-top: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    .footer-left { flex: 1; }
    .footer-tagline {
      font-family: 'Great Vibes', cursive;
      font-size: 1.6rem;
      color: var(--gold);
      line-height: 1.1;
    }
    .footer-date {
      font-size: 0.72rem;
      color: var(--muted);
      letter-spacing: 0.04em;
    }
    .footer-qr-wrap { display: flex; flex-direction: column; align-items: center; gap: 3px; }
    .qr-img { width: 72px; height: 72px; object-fit: contain; }
    .qr-placeholder {
      width: 72px; height: 72px;
      border: 1.5px dashed var(--gold); border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.65rem; color: var(--muted);
    }
    .qr-label {
      font-size: 0.6rem; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--light); text-align: center;
    }

    @media print {
      body { background: white; }
      .drink-card { background: white; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="menu-header">
    ${logoTag}
    <div class="header-text">
      <h1 class="menu-title">Carta de Drinks</h1>
      <p class="menu-subtitle">Adrielle &amp; Cézar</p>
      <div class="gold-rule"></div>
      <p class="menu-tagline">Uma seleção especial para esta noite inesquecível.</p>
    </div>
  </header>

  <!-- DRINKS GRID -->
  <div class="drinks-grid">
    ${allDrinkCards}
  </div>

  <!-- FOOTER -->
  <footer class="menu-footer">
    <div class="footer-left">
      <p class="footer-tagline">Brinde, celebre e aproveite</p>
      <p class="footer-date">Com amor, Adrielle &amp; Cézar · 25 de Abril de 2026</p>
    </div>
    <div class="footer-qr-wrap">
      ${qrTag}
      <p class="qr-label">Cardápio digital</p>
    </div>
  </footer>

</body>
</html>`;
}

// ─── Build HTML — Versão Full-Page (header e footer centralizados) ─────────────
function buildHtmlFull() {
  const logo = toBase64(LOGO_PATH);
  const qr = toBase64(QR_PATH);

  const allDrinkCards = DRINKS.map((d) => {
    const img = drinkImg(d.id);
    const imgTag = img
      ? `<img src="${img}" alt="${d.name}" class="drink-photo" />`
      : `<div class="drink-photo drink-photo--fallback">${d.name[0]}</div>`;
    const badge = d.noAlcohol
      ? ` <span class="badge-soft">s/ álcool</span>`
      : "";
    return `
      <div class="drink-card">
        ${imgTag}
        <div class="drink-info">
          <p class="drink-name">${d.name}${badge}</p>
          <p class="drink-section-label">${d.section}</p>
          <p class="drink-ingredients">${d.ingredients}</p>
        </div>
      </div>`;
  }).join("\n");

  const logoTag = logo
    ? `<img src="${logo}" alt="Logo Adrielle e Cézar" class="header-logo" />`
    : `<div class="header-logo-fallback">A &amp; C</div>`;

  const qrTag = qr
    ? `<img src="${qr}" alt="QR Code do cardápio digital" class="qr-img" />`
    : `<div class="qr-placeholder">QR</div>`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Carta de Drinks — Adrielle &amp; Cézar</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600&family=Lora:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --gold:       #c4a44a;
      --gold-light: #d4b96b;
      --gold-dark:  #a68a3a;
      --cream:      #faf8f3;
      --sage:       #8b9a7b;
      --text:       #3d3428;
      --muted:      #6b5e4f;
      --light:      #8a7d6e;
    }

    @page {
      size: A4 portrait;
      margin: 10mm 10mm;
    }

    html {
      font-size: 8.5px;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Body ocupa exatamente a área útil da página A4 (277mm) */
    body {
      background: var(--cream);
      color: var(--text);
      font-family: 'Lora', Georgia, serif;
      line-height: 1.4;
      width: 190mm;
      height: 277mm;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* ── HEADER CENTRALIZADO ── */
    .menu-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-bottom: 6px;
      border-bottom: 1.5px solid var(--gold-light);
      margin-bottom: 7px;
      flex-shrink: 0;
    }
    .header-logo {
      width: 48px;
      height: 48px;
      object-fit: contain;
      margin-bottom: 4px;
    }
    .header-logo-fallback {
      width: 48px; height: 48px;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Great Vibes', cursive;
      font-size: 1.6rem; color: var(--gold);
      border: 1px solid var(--gold-light); border-radius: 50%;
      margin-bottom: 4px;
    }
    .menu-title {
      font-family: 'Great Vibes', cursive;
      font-size: 2.8rem;
      color: var(--gold);
      line-height: 1;
    }
    .menu-subtitle {
      font-family: 'Playfair Display', serif;
      font-size: 1.05rem;
      color: var(--text);
      margin-top: 1px;
    }
    .gold-rule {
      width: 60px; height: 1.5px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      margin: 3px auto;
    }
    .menu-tagline {
      font-style: italic;
      font-size: 0.82rem;
      color: var(--muted);
    }

    /* ── GRID — cresce para preencher espaço disponível ── */
    .drinks-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px 10px;
      flex: 1;            /* ocupa todo o espaço entre header e footer */
      grid-auto-rows: 1fr; /* linhas de altura igual, preenchem o flex-1 */
      margin-bottom: 7px;
    }

    .drink-card {
      display: flex;
      gap: 7px;
      align-items: center;
      padding: 6px 8px;
      height: 100%;        /* preenche a célula da grid */
      background: white;
      border-radius: 6px;
      border: 1px solid rgba(196,164,74,0.18);
    }

    .drink-photo {
      width: 72px;
      height: 72px;
      object-fit: cover;
      border-radius: 5px;
      flex-shrink: 0;
      border: 1px solid rgba(196,164,74,0.25);
    }
    .drink-photo--fallback {
      width: 72px; height: 72px;
      border-radius: 5px; flex-shrink: 0;
      background: linear-gradient(135deg, var(--cream), #ecdfc8);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Great Vibes', cursive;
      font-size: 1.4rem; color: var(--gold);
      border: 1px solid rgba(196,164,74,0.3);
    }

    .drink-info { flex: 1; min-width: 0; }
    .drink-name {
      font-family: 'Playfair Display', serif;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text);
      line-height: 1.25;
    }
    .drink-section-label {
      font-size: 0.65rem;
      color: var(--gold-dark);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .drink-ingredients {
      font-size: 0.75rem;
      color: var(--muted);
      line-height: 1.4;
    }
    .badge-soft {
      display: inline-block;
      font-size: 0.6rem;
      padding: 1px 5px;
      border-radius: 99px;
      background: rgba(139,154,123,0.18);
      border: 1px solid var(--sage);
      color: var(--sage);
      font-family: 'Lora', serif;
      font-style: normal;
      vertical-align: middle;
      margin-left: 3px;
    }

    /* ── FOOTER CENTRALIZADO ── */
    .menu-footer {
      border-top: 1.5px solid var(--gold-light);
      padding-top: 9px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 5px;
      flex-shrink: 0;
    }
    .footer-tagline {
      font-family: 'Great Vibes', cursive;
      font-size: 2rem;
      color: var(--gold);
      line-height: 1.1;
    }
    .footer-date {
      font-size: 0.78rem;
      color: var(--muted);
      letter-spacing: 0.04em;
    }
    .footer-qr-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
    }
    .qr-img { width: 96px; height: 96px; object-fit: contain; }
    .qr-placeholder {
      width: 96px; height: 96px;
      border: 1.5px dashed var(--gold); border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.65rem; color: var(--muted);
    }
    .qr-label {
      font-size: 0.6rem; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--light); text-align: center;
    }

    @media print {
      body { background: white; }
      .drink-card { background: white; }
    }
  </style>
</head>
<body>

  <!-- HEADER CENTRALIZADO -->
  <header class="menu-header">
    ${logoTag}
    <h1 class="menu-title">Carta de Drinks</h1>
    <p class="menu-subtitle">Adrielle &amp; Cézar</p>
    <div class="gold-rule"></div>
    <p class="menu-tagline">Uma seleção especial para esta noite inesquecível.</p>
  </header>

  <!-- DRINKS GRID -->
  <div class="drinks-grid">
    ${allDrinkCards}
  </div>

  <!-- FOOTER CENTRALIZADO -->
  <footer class="menu-footer">
    <p class="footer-tagline">Brinde, celebre e aproveite</p>
    <p class="footer-date">Com amor, Adrielle &amp; Cézar · 25 de Abril de 2026</p>
    <div class="footer-qr-wrap">
      ${qrTag}
      <p class="qr-label">Cardápio digital</p>
    </div>
  </footer>

</body>
</html>`;
}

// ─── Run ──────────────────────────────────────────────────────────────────────
fs.mkdirSync(OUT_DIR, { recursive: true });

// Versão padrão (header/footer horizontais)
const html = buildHtml();
const outFile = path.join(OUT_DIR, "cardapio.html");
fs.writeFileSync(outFile, html, "utf8");
const size = (fs.statSync(outFile).size / 1024).toFixed(1);
console.log(`✓ Gerado: carta-drinks/pdf/cardapio.html (${size} KB)`);

// Versão full-page (header/footer centralizados)
const htmlFull = buildHtmlFull();
const outFileFull = path.join(OUT_DIR, "cardapio-elegante.html");
fs.writeFileSync(outFileFull, htmlFull, "utf8");
const sizeFull = (fs.statSync(outFileFull).size / 1024).toFixed(1);
console.log(`✓ Gerado: carta-drinks/pdf/cardapio-elegante.html (${sizeFull} KB)`);

console.log("");
console.log("  → Abra no Google Chrome e use Imprimir › Salvar como PDF");
console.log("  → Configure: A4, portrait, sem margens do sistema, escala 100%");
