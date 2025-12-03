// =========================
//  ESKAY V5 – FRONTEND MOCK STATE
//  (Binance API bağlanınca bu state backend’den beslenecek)
// =========================

const state = {
  // Genel modlar
  globalModes: {
    riskMode: "YELLOW", // GREEN | YELLOW | RED | COOLDOWN
    marketMode: "HOT",  // HOT | NORMAL | COLD
    trendMode: "UP"     // UP | DOWN | RANGE | DUMP | RECOVERY
  },

  // Limitler & slot yapısı
  limits: {
    dailyLimitPct: 7,
    usedPct: 40,
    slotLimit: 3,
    autoActiveSlots: 2
  },

  // Performans & PnL
  performance: {
    dailyPnlPct: 2.8,
    totalPnlPct: 4.2,
    totalTrades: 35,
    avgRR: 0.8,
    realizedPct: 3.0,
    realizedUsd: 44,
    openPct: 1.2,
    openUsd: 18,
    maxDd: -2.1,
    winRate: 68,
    positiveDays: 9,
    streakWeeks: 2,
    s1Win: 65,
    s2Win: 70,
    s3Win: 52
  },

  // Hesap özeti
  account: {
    balance: 1560.25,
    activeBand: "İkincil",
    lastTrades: { total: 5, win: 3, loss: 2 },
    riskScore: 72,
    slotsOpen: 2 // şu an aktif slot sayısı
  },

  // Global piyasa filtresi (trend skoru + USDT fiyat)
  globalMarket: {
    btc: { trendScore: 62, price: 64320, symbol: "BTC/USDT" },
    eth: { trendScore: 58, price: 3260, symbol: "ETH/USDT" },
    sol: { trendScore: 65, price: 145.7, symbol: "SOL/USDT" },
    usdtDom: 54, // %
  },

  // Setup motoru (Türkçe açıklamalı)
  setups: {
    S1: {
      status: "PASS", // PASS | WAIT | FAIL
      title: "S1 – Dump Toparlanma",
      note:
        "Dump sonrası double-wick dip + OB toparlanması; BTC/USDT.D uyumluysa ana senaryo."
    },
    S2: {
      status: "WAIT",
      title: "S2 – Trend Geri Çekilme",
      note:
        "Uptrend içinde HL bölgesinde sağlıklı geri çekilme; volatilite normalleşmesi bekleniyor."
    },
    S3: {
      status: "FAIL",
      title: "S3 – Breakout & Momentum",
      note:
        "Range üstü hacimli kırılım + retest; şu an hacim zayıf, teyit yetersiz."
    }
  },

  // Coin listeleri
  coinsMain: [
    {
      symbol: "AVAX / USDT",
      price: "36.80 USDT",
      riskLetter: "C",
      volatility: "Yüksek",
      ecosystem: ["Trend", "Momentum"],
      setupId: "S2",
      setupText: "S2 – Trend Pullback · EMA20 üzerinde, HL teyitli.",
      learningScore: "Orta",
      recentWinRate: 64,
      avgProfit: 3.4,
      maxTrail: 10
    },
    {
      symbol: "SOL / USDT",
      price: "145.70 USDT",
      riskLetter: "B",
      volatility: "Orta",
      ecosystem: ["SOL", "Trend"],
      setupId: "S2",
      setupText: "S2 – Trend Pullback · Güçlü momentum, EMA20 üzerinde.",
      learningScore: "Yüksek",
      recentWinRate: 72,
      avgProfit: 3.4,
      maxTrail: 10
    },
    {
      symbol: "ZK / USDT",
      price: "0.42 USDT",
      riskLetter: "A",
      volatility: "Çok yüksek",
      ecosystem: ["L2", "Momentum"],
      setupId: "S1",
      setupText:
        "S1 – Dump Recovery · Likidite süpürme sonrası hızlı dönüş alanı.",
      learningScore: "Düşük",
      recentWinRate: 40,
      avgProfit: 4.2,
      maxTrail: 10
    }
  ],

  coinsAlt: [
    {
      symbol: "OP / USDT",
      price: "3.15 USDT",
      change24h: "+2.10%",
      setupText:
        "S3 – Breakout denemesi, hacim orta, likidite yeterli (daha agresif)."
    },
    {
      symbol: "INJ / USDT",
      price: "19.80 USDT",
      change24h: "+1.75%",
      setupText:
        "S2 – Trend Pullback, ancak saat bandı performansı daha zayıf."
    },
    {
      symbol: "RUNE / USDT",
      price: "4.85 USDT",
      change24h: "+3.90%",
      setupText:
        "S2 – Yüksek volatil, scalp için uygun; risk modu izin verirse."
    }
  ],

  // Açık işlemler
  openTrades: [
    {
      symbol: "ETH / USDT",
      entry: 2990.1,
      current: 3010.5,
      pnlPct: 0.7,
      setupId: "S2",
      slotIndex: 1,
      entryRiskMode: "YELLOW"
    },
    {
      symbol: "SOL / USDT",
      entry: 139.0,
      current: 145.7,
      pnlPct: 4.6,
      setupId: "S2",
      slotIndex: 2,
      entryRiskMode: "YELLOW"
    }
  ],

  // Öğrenme modu
  learning: {
    winRate30: 68,
    scoreLabel: "Orta / Yüksek",
    pnlAdapt: "PnL’e göre dinamik slot & risk ayarı",
    positiveDayRatio: "Günlerin %62’si pozitif",
    logs: [
      "S1 + SOL ekosistemi + HOT market: sinyal frekansı hafif artırıldı (win-rate yüksek).",
      "Gece 03–05 saat bandında açılan S3 işlemlerinin başarısı düşük; bu bantta S3 sinyalleri azaltıldı.",
      "Spread yüksek, likidite zayıf coinlerde S2 girişleri devre dışı bırakıldı.",
      "Trend coinlerde S1 pasif, S2 öncelikli çalışıyor."
    ]
  },

  // Watchlist
  watchlist: ["AVAX/USDT", "SOL/USDT"],

  // Otomatik işlem modu
  autoMode: "semi", // semi | full

  // Zaman dilimi (1Dk / 5Dk / 15Dk / 1S / 2S / 4S / 6S / 1G)
  activeTimeframe: "15Dk"
};

// Zaman dilimi bazlı risk/score ayarları
const timeframeConfig = {
  "1Dk": { riskPerTrade: 0.7, threshold: 88, multiplier: 0.9, label: "Scalp" },
  "5Dk": { riskPerTrade: 0.9, threshold: 84, multiplier: 0.9, label: "Scalp / Gün içi" },
  "15Dk": { riskPerTrade: 1.0, threshold: 80, multiplier: 1.0, label: "Gün içi ana" },
  "1S": { riskPerTrade: 1.1, threshold: 78, multiplier: 1.05, label: "Swing / Gün içi" },
  "2S": { riskPerTrade: 1.1, threshold: 78, multiplier: 1.05, label: "Swing" },
  "4S": { riskPerTrade: 1.2, threshold: 76, multiplier: 1.1, label: "Swing / Trend" },
  "6S": { riskPerTrade: 1.2, threshold: 76, multiplier: 1.1, label: "Trend devam" },
  "1G": { riskPerTrade: 1.0, threshold: 80, multiplier: 0.95, label: "Makro" }
};

// =========================
//  YARDIMCI FONKSİYONLAR
// =========================

function formatPct(v) {
  const sign = v >= 0 ? "+" : "";
  return `${sign}${v.toFixed(1)}%`;
}

function safeGet(id) {
  return document.getElementById(id);
}

// =========================
//  RENDER: GENEL DURUM & PnL
// =========================

function renderGeneral() {
  const { globalModes, limits, performance, account } = state;

  const riskModeTextMap = {
    GREEN: "GREEN · Agresif / fırsat",
    YELLOW: "YELLOW · Nötr / temkinli",
    RED: "RED · Defansif",
    COOLDOWN: "COOLDOWN · Bekle-gör"
  };

  // Header mod etiketi
  const modePill = safeGet("modePill");
  if (modePill) {
    modePill.textContent = `MODE: ${globalModes.riskMode}`;
  }

  // Genel durum card
  const globalRisk = safeGet("globalRiskMode");
  if (globalRisk) globalRisk.textContent = riskModeTextMap[globalModes.riskMode] || globalModes.riskMode;

  const marketMode = safeGet("marketMode");
  if (marketMode) marketMode.textContent = globalModes.marketMode;

  const trendMode = safeGet("trendMode");
  if (trendMode) {
    const labelMap = {
      UP: "Uptrend",
      DOWN: "Downtrend",
      RANGE: "Range",
      DUMP: "Dump",
      RECOVERY: "Recovery"
    };
    trendMode.textContent = labelMap[globalModes.trendMode] || globalModes.trendMode;
  }

  const balance = safeGet("balance");
  if (balance) balance.textContent = `${account.balance.toFixed(2)} USDT`;

  const dailyPnl = safeGet("dailyPnl");
  if (dailyPnl) {
    dailyPnl.textContent = formatPct(performance.dailyPnlPct);
    dailyPnl.classList.toggle("stat-value--pos", performance.dailyPnlPct >= 0);
    dailyPnl.classList.toggle("stat-value--neg", performance.dailyPnlPct < 0);
  }

  const activeBand = safeGet("activeBand");
  if (activeBand) activeBand.textContent = account.activeBand;

  // Slot kullanımı (kasa + slot özeti)
  const usedSlots = account.slotsOpen;
  const limitSlots = limits.slotLimit;
  const usagePct = limitSlots === 0 ? 0 : (usedSlots / limitSlots) * 100;

  const slotUsageText = safeGet("slotUsageText");
  if (slotUsageText) {
    slotUsageText.textContent = `${usedSlots} / ${limitSlots} slot (kullanım %${usagePct.toFixed(
      0
    )})`;
  }

  const kasaMood = safeGet("kasaMoodText");
  if (kasaMood) {
    // basit örnek: PnL'e göre kasa modu
    if (performance.dailyPnlPct > 2) kasaMood.textContent = "Kasa modu: Pozitif · Slotlar genişleyebilir";
    else if (performance.dailyPnlPct < -1) kasaMood.textContent = "Kasa modu: Defansif · Slotlar sıkı";
    else kasaMood.textContent = "Kasa modu: Dengeli";
  }

  const slotLimitChip = safeGet("slotLimitChip");
  if (slotLimitChip) slotLimitChip.textContent = `Slot limiti: ${limitSlots}`;

  const autoSlotChip = safeGet("autoSlotChip");
  if (autoSlotChip) {
    autoSlotChip.textContent = `Aktif slot (otomatik): ${limits.autoActiveSlots} / ${limitSlots}`;
  }

  // Günlük limit bar
  const limitFill = safeGet("limitBarFill");
  if (limitFill) {
    limitFill.style.width = `${limits.usedPct}%`;
  }
  const limitUsedText = safeGet("limitUsedText");
  const limitLeftText = safeGet("limitLeftText");
  if (limitUsedText) {
    limitUsedText.textContent = `Kullanılan ≈ %${limits.usedPct.toFixed(0)}`;
  }
  if (limitLeftText) {
    limitLeftText.textContent = `Kalan ≈ %${(100 - limits.usedPct).toFixed(0)}`;
  }

  // Son işlemler / streak / risk puanı
  const lastTradesText = safeGet("lastTradesText");
  if (lastTradesText) {
    lastTradesText.textContent = `Son ${account.lastTrades.total} işlem · ${account.lastTrades.win} kâr · ${account.lastTrades.loss} zarar`;
  }

  const streakText = safeGet("streakText");
  if (streakText) {
    streakText.textContent = `Streak: ${performance.streakWeeks}W · ${performance.positiveDays} pozitif gün`;
  }

  const riskScoreText = safeGet("riskScoreText");
  if (riskScoreText) {
    riskScoreText.textContent = `Risk puanı ${account.riskScore} / 100 · Orta`;
  }

  // PnL kartı
  const totalPnl = safeGet("totalPnl");
  if (totalPnl) {
    totalPnl.textContent = formatPct(performance.totalPnlPct);
    totalPnl.classList.toggle("stat-value--pos", performance.totalPnlPct >= 0);
    totalPnl.classList.toggle("stat-value--neg", performance.totalPnlPct < 0);
  }

  const totalTrades = safeGet("totalTrades");
  if (totalTrades) totalTrades.textContent = `${performance.totalTrades} işlem`;

  const avgRR = safeGet("avgRR");
  if (avgRR) avgRR.textContent = `${performance.avgRR.toFixed(1)} R`;

  const realizedPnl = safeGet("realizedPnl");
  if (realizedPnl) {
    realizedPnl.textContent = `${formatPct(performance.realizedPct)} · ${performance.realizedUsd >= 0 ? "+" : ""}${performance.realizedUsd} USDT`;
  }

  const openPnl = safeGet("openPnl");
  if (openPnl) {
    openPnl.textContent = `${formatPct(performance.openPct)} · ${performance.openUsd >= 0 ? "+" : ""}${performance.openUsd} USDT`;
  }

  const maxDd = safeGet("maxDd");
  if (maxDd) maxDd.textContent = `${performance.maxDd.toFixed(1)}%`;

  const winRate = safeGet("winRate");
  if (winRate) winRate.textContent = `${performance.winRate}%`;

  const pnlStreak = safeGet("pnlStreak");
  if (pnlStreak) pnlStreak.textContent = `${performance.positiveDays} pozitif gün`;

  const s1Perf = safeGet("s1Perf");
  const s2Perf = safeGet("s2Perf");
  const s3Perf = safeGet("s3Perf");
  if (s1Perf) s1Perf.textContent = `S1: %${performance.s1Win}`;
  if (s2Perf) s2Perf.textContent = `S2: %${performance.s2Win}`;
  if (s3Perf) s3Perf.textContent = `S3: %${performance.s3Win}`;

  // Günlük limit chip
  const dailyLimitChip = safeGet("dailyLimitChip");
  if (dailyLimitChip) {
    dailyLimitChip.textContent = `Günlük limit: ≈ %${limits.dailyLimitPct}`;
  }

  const tradeRiskChip = safeGet("tradeRiskChip");
  if (tradeRiskChip) {
    tradeRiskChip.textContent = `Trade riski: max ≈ %2`;
  }
}

// =========================
//  RENDER: GLOBAL PİYASA FİLTRESİ
// =========================

function renderGlobalMarket() {
  const { globalMarket, globalModes } = state;

  const btcScoreEl = safeGet("btcScore");
  const ethScoreEl = safeGet("ethScore");
  const solScoreEl = safeGet("solScore");
  const usdtDomEl = safeGet("usdtDom");
  const filterLabel = safeGet("globalFilterLabel");
  const riskBarFill = safeGet("riskBarFill");

  if (btcScoreEl) {
    btcScoreEl.textContent = `${globalMarket.btc.trendScore} · ${globalMarket.btc.price.toLocaleString(
      "en-US",
      { maximumFractionDigits: 1 }
    )} USDT`;
  }

  if (ethScoreEl) {
    ethScoreEl.textContent = `${globalMarket.eth.trendScore} · ${globalMarket.eth.price.toLocaleString(
      "en-US",
      { maximumFractionDigits: 1 }
    )} USDT`;
  }

  if (solScoreEl) {
    solScoreEl.textContent = `${globalMarket.sol.trendScore} · ${globalMarket.sol.price.toLocaleString(
      "en-US",
      { maximumFractionDigits: 1 }
    )} USDT`;
  }

  if (usdtDomEl) {
    usdtDomEl.textContent = `${globalMarket.usdtDom}%`;
  }

  if (filterLabel) {
    const txtMap = {
      GREEN: "GREEN · Piyasa güçlü / agresif",
      YELLOW: "YELLOW · Nötr / temkinli",
      RED: "RED · Defansif",
      COOLDOWN: "COOLDOWN · Bekle-gör"
    };
    filterLabel.textContent = txtMap[globalModes.riskMode] || "YELLOW · Nötr / temkinli";
  }

  if (riskBarFill) {
    // basit: risk modu + usdt dominans mix
    let width = 40;
    if (globalModes.riskMode === "GREEN") width = 25;
    if (globalModes.riskMode === "YELLOW") width = 45;
    if (globalModes.riskMode === "RED" || globalModes.riskMode === "COOLDOWN") width = 65;
    riskBarFill.style.width = `${width}%`;
  }
}

// =========================
//  RENDER: SETUP MOTORU
// =========================

function renderSetups() {
  const mapClass = {
    PASS: "setup-status--pass",
    WAIT: "setup-status--wait",
    FAIL: "setup-status--fail"
  };
  const mapLabel = {
    PASS: "AKTİF",
    WAIT: "BEKLE",
    FAIL: "KAPALI"
  };

  ["S1", "S2", "S3"].forEach((key) => {
    const setup = state.setups[key];
    if (!setup) return;

    const titleEl = safeGet(`${key.toLowerCase()}Title`);
    const noteEl = safeGet(`${key.toLowerCase()}Note`);
    const statusEl = safeGet(`${key.toLowerCase()}Status`);

    if (titleEl) titleEl.textContent = setup.title;
    if (noteEl) noteEl.textContent = setup.note;
    if (statusEl) {
      statusEl.textContent = mapLabel[setup.status] || setup.status;
      statusEl.classList.remove(
        "setup-status--pass",
        "setup-status--wait",
        "setup-status--fail"
      );
      statusEl.classList.add(mapClass[setup.status] || "setup-status--wait");
    }
  });
}

// =========================
//  RENDER: COIN LISTELERİ
// =========================

function renderCoins() {
  const todayEl = safeGet("todayList");
  if (todayEl) {
    todayEl.innerHTML = "";
    state.coinsMain.forEach((c) => {
      const wrap = document.createElement("div");
      wrap.className = "coin-item";
      wrap.innerHTML = `
        <div class="coin-header">
          <div>
            <div class="coin-title">${c.symbol}</div>
            <div class="coin-subtitle">${c.price}</div>
          </div>
          <div class="coin-tags">
            <span class="pill pill--soft pill--xs">Risk: ${c.riskLetter}</span>
            <span class="pill pill--soft pill--xs">Volatile: ${c.volatility}</span>
            ${c.ecosystem
              .map((e) => `<span class="pill pill--soft pill--xs">${e}</span>`)
              .join("")}
          </div>
        </div>
        <div class="coin-text">
          Setup: ${c.setupText}
        </div>
        <div class="coin-text" style="margin-top:3px;font-size:11px;color:var(--text-muted);">
          Öğrenme skoru: ${c.learningScore} · Son 10 işlemde başarı: %${
        c.recentWinRate
      } · Ortalama kâr: %${c.avgProfit.toFixed(
        1
      )} · Maks takip kârı: ≈ %${c.maxTrail}
        </div>
        <div class="coin-actions">
          <button class="btn btn--ghost">Analiz</button>
          <button class="btn btn--primary">İşlem hazırla</button>
        </div>
      `;
      todayEl.appendChild(wrap);
    });
  }

  const suggEl = safeGet("suggestionList");
  if (suggEl) {
    suggEl.innerHTML = "";
    state.coinsAlt.forEach((c) => {
      const wrap = document.createElement("div");
      wrap.className = "coin-item";
      const isPos = c.change24h.trim().startsWith("+");
      wrap.innerHTML = `
        <div class="coin-header">
          <div>
            <div class="coin-title">${c.symbol}</div>
            <div class="coin-subtitle">${c.price}</div>
          </div>
          <div class="coin-change ${
            isPos ? "coin-change--pos" : "coin-change--neg"
          }">${c.change24h}</div>
        </div>
        <div class="coin-text">
          ${c.setupText}
        </div>
        <div class="coin-actions">
          <button class="btn btn--ghost">Analiz</button>
          <button class="btn btn--primary">İşlem hazırla</button>
        </div>
      `;
      suggEl.appendChild(wrap);
    });
  }
}

// =========================
//  RENDER: AÇIK İŞLEMLER
// =========================

function renderOpenTrades() {
  const el = safeGet("openTrades");
  if (!el) return;

  el.innerHTML = "";
  if (!state.openTrades.length) {
    el.textContent = "Şu anda açık işlem yok.";
    return;
  }

  state.openTrades.forEach((t) => {
    const row = document.createElement("div");
    row.className = "trade-row";
    const pnlClass = t.pnlPct >= 0 ? "stat-value--pos" : "stat-value--neg";
    row.innerHTML = `
      <div class="trade-main">
        <div class="trade-symbol">${t.symbol}</div>
        <div class="trade-meta">
          Giriş: ${t.entry.toFixed(2)} · Şu an: ${t.current.toFixed(2)}
        </div>
        <div class="trade-extra">
          Setup: ${t.setupId} · Slot: ${t.slotIndex} · Açıldığı risk modu: ${
      t.entryRiskMode
    }
        </div>
      </div>
      <div class="trade-pnl ${pnlClass}">${formatPct(t.pnlPct)}</div>
    `;
    el.appendChild(row);
  });
}

// =========================
//  RENDER: ÖĞRENME MODU
// =========================

function renderLearning() {
  const l = state.learning;

  const winRateEl = safeGet("learnWinRate");
  if (winRateEl) winRateEl.textContent = `${l.winRate30}%`;

  const scoreEl = safeGet("learnScore");
  if (scoreEl) scoreEl.textContent = l.scoreLabel;

  const pnlAdaptEl = safeGet("learnPnlAdapt");
  if (pnlAdaptEl) pnlAdaptEl.textContent = l.pnlAdapt;

  const positiveDaysEl = safeGet("learnPositiveDays");
  if (positiveDaysEl) positiveDaysEl.textContent = l.positiveDayRatio;

  const logList = safeGet("learningLog");
  if (logList) {
    logList.innerHTML = "";
    l.logs.forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      logList.appendChild(li);
    });
  }
}

// =========================
//  RENDER: WATCHLIST
// =========================

function renderWatchlist() {
  const el = safeGet("watchList");
  if (!el) return;
  el.innerHTML = "";
  state.watchlist.forEach((s) => {
    const pill = document.createElement("div");
    pill.className = "pill pill--soft";
    pill.textContent = s;
    el.appendChild(pill);
  });
}

// =========================
//  RENDER: ZAMAN DİLİMİ
// =========================

function renderTimeframe() {
  const tf = state.activeTimeframe;
  const cfg = timeframeConfig[tf] || timeframeConfig["15Dk"];

  const riskPerTrade = safeGet("riskPerTrade");
  const signalThreshold = safeGet("signalThreshold");
  const scoreMultiplier = safeGet("scoreMultiplier");
  const timeEngineLabel = safeGet("timeEngineLabel");

  if (riskPerTrade) riskPerTrade.textContent = `≈ %${cfg.riskPerTrade.toFixed(1)}`;
  if (signalThreshold) signalThreshold.textContent = `${cfg.threshold} / 100`;
  if (scoreMultiplier) scoreMultiplier.textContent = `${cfg.multiplier.toFixed(2)}×`;
  if (timeEngineLabel) {
    timeEngineLabel.textContent = `Saat motoru: ${cfg.label}`;
  }

  // aktif chip
  document.querySelectorAll("[data-tf]").forEach((btn) => {
    const val = btn.dataset.tf;
    if (!val) return;
    btn.classList.toggle("chip--active", val === tf);
  });
}

// =========================
//  ETKİLEŞİM: TABLAR, BUTONLAR
// =========================

function bindTopTabs() {
  const tabs = document.querySelectorAll(".top-tab");
  const views = document.querySelectorAll(".eskay-view");
  if (!tabs.length || !views.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const 
