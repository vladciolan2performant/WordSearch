/**
 * 2Performant Business League — Word Search Puzzle Engine
 * Minimalist, High-Performance, Web Audio SFX, SVG Highlighters & Sharp Rectangles
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. THEMED WORD BANKS (2Performant & Business League)
  // =========================================================================
  const WORD_BANKS = {
    business_league: {
      title: "🏆 Business League Tiers",
      description: "Categoriile de campionat și conceptele de competiție din Business League",
      words: [
        { word: "UNICORN", hint: "Top tier în Business League pentru liderii de performanță" },
        { word: "CORPORATION", hint: "Nivel dedicat magazinelor mari cu volum masiv de tranzacții" },
        { word: "COMPANIES", hint: "Nivel intermediar competitiv în plină expansiune" },
        { word: "STARTUP", hint: "Nivel pentru magazinele noi care își accelerează creșterea" },
        { word: "FREELANCER", hint: "Nivel agil de intrare în competiția Business League" },
        { word: "PODIUM", hint: "Primele 3 poziții premiate la finalul fiecărei etape" },
        { word: "CHAMPION", hint: "Câștigătorul absolut al turneului și campionatului" },
        { word: "RANKING", hint: "Clasamentul în timp real actualizat pe baza vânzărilor" },
        { word: "ROUND", hint: "Runda curentă de joc din calendarul competiției" },
        { word: "STAGE", hint: "Etapa oficială de campionat din Business League" },
        { word: "SPRINT", hint: "Sprint intens de vânzări și comisioane generate" },
        { word: "CHALLENGER", hint: "Jucător ambițios care atacă pozițiile de top" }
      ]
    },
    ecosystem_2p: {
      title: "💼 2Performant Ecosystem",
      description: "Elementele cheie ale ecosistemului de marketing afiliat 2Performant",
      words: [
        { word: "AFFILIATE", hint: "Marketerul digital care trimite trafic și generează vânzări" },
        { word: "ADVERTISER", hint: "Magazinul online care plătește comision pe performanță" },
        { word: "COMMISSION", hint: "Recompensa financiară obținută pe vânzările confirmate" },
        { word: "CONVERSION", hint: "Tranzacția finalizată cu succes de către un cumpărător" },
        { word: "TRACKING", hint: "Tehnologia de urmărire și atribuire a vânzărilor" },
        { word: "NETWORK", hint: "Rețeaua care conectează advertiserii cu afiliații" },
        { word: "MERCHANT", hint: "Magazinul partener integrat în platforma 2Performant" },
        { word: "SUBSCRIPTION", hint: "Modelul de abonament pentru magazinele din rețea" },
        { word: "CASHBACK", hint: "Model de afiliere cu recompensă directă către cumpărător" },
        { word: "ECOSYSTEM", hint: "Comunitatea de branduri, afiliați și cumpărători" },
        { word: "ATTRIBUTION", hint: "Atribuirea corectă și transparentă a fiecărui click/sale" },
        { word: "FEED", hint: "Catalogul de produse actualizat în timp real pentru promovare" }
      ]
    },
    growth_metrics: {
      title: "📈 Growth & Metrics",
      description: "Metricile fundamentale urmărite pentru scalarea businessului",
      words: [
        { word: "CLICKS", hint: "Volumul de trafic trimis de afiliați către advertiseri" },
        { word: "REVENUE", hint: "Venitul total generat în ecosistem" },
        { word: "GROWTH", hint: "Rata de creștere YoY urmărită săptămânal" },
        { word: "CPS", hint: "Cost-Per-Sale: plătești doar pentru rezultate concrete validate" },
        { word: "VOUCHER", hint: "Coduri promoționale folosite pentru stimularea conversiilor" },
        { word: "INFLUENCER", hint: "Creator de conținut care monetizează audiența" },
        { word: "GMV", hint: "Gross Merchandise Value — valoarea totală a cumpărăturilor" },
        { word: "FORECAST", hint: "Prognoza și modelarea obiectivelor pentru anul 2026" },
        { word: "CHURN", hint: "Rata de abandon ce trebuie minimizată continuu" },
        { word: "TARGET", hint: "Obiectivele ambițioase de revenue și vânzări" },
        { word: "TRANSACTION", hint: "Comanda confirmată în magazinul online" }
      ]
    },
    ai_olympics: {
      title: "🤖 AI & Marketing Tech",
      description: "Tehnologiile viitorului și instrumentele de marketing afiliat",
      words: [
        { word: "ANTIGRAVITY", hint: "Asistentul AI avansat cu care construim proiecte viitoare" },
        { word: "HACKATHON", hint: "Evenimentul intensiv de creație și inovație din 21 August" },
        { word: "DEEPLINK", hint: "Link-ul afiliat direct către pagina de produs promovată" },
        { word: "PROMPT", hint: "Instrucțiunea inteligentă oferită modelului AI" },
        { word: "ALGORITHM", hint: "Logica computațională din spatele generării automate" },
        { word: "OLYMPICS", hint: "Competiția de inovație și adopție AI" },
        { word: "AGENT", hint: "Agentul autonom care execută sarcini complexe" },
        { word: "AUTOMATION", hint: "Automatizarea proceselor repetitive din companie" },
        { word: "PUBLISHER", hint: "Partenerul media sau afiliatul care generează promovare" },
        { word: "PAYOUT", hint: "Plata transparentă a comisioanelor confirmate și validate" }
      ]
    },
    all_star: {
      title: "🌟 All-Star Mixed Pack",
      description: "Mixul suprem cu cei mai importanți termeni din toate domeniile",
      words: [
        { word: "UNICORN", hint: "Nivelul de elită din Business League" },
        { word: "AFFILIATE", hint: "Inima ecosistemului 2Performant" },
        { word: "COMMISSION", hint: "Recompensa pentru performanță" },
        { word: "CONVERSION", hint: "Vânzarea online realizată" },
        { word: "ANTIGRAVITY", hint: "Asistentul tău AI de hackathon" },
        { word: "HACKATHON", hint: "Ziua de inovație din 21 August" },
        { word: "PODIUM", hint: "Locul campionilor pe scenă" },
        { word: "RANKING", hint: "Clasamentul în timp real" },
        { word: "REVENUE", hint: "Valoarea generată în rețea" },
        { word: "TRACKING", hint: "Urmărirea click-urilor și vânzărilor" },
        { word: "CPS", hint: "Modelul 100% pe performanță" },
        { word: "DEEPLINK", hint: "Link-ul afiliat direct către produs" },
        { word: "COOKIE", hint: "Perioada de tracking pentru atribuire" }
      ]
    }
  };

  // High-contrast authentic highlighter palette (matching the user's reference image)
  const HIGHLIGHT_PALETTE = [
    { bg: "#38ef7d", name: "Neon Mint" },
    { bg: "#ff5376", name: "Coral Rose" },
    { bg: "#ffd200", name: "Cyber Gold" },
    { bg: "#00c6ff", name: "Electric Cyan" },
    { bg: "#b388ff", name: "Lavender Purple" },
    { bg: "#ff9f43", name: "Sunset Orange" },
    { bg: "#54a0ff", name: "Azure Blue" },
    { bg: "#1dd1a1", name: "Teal Green" },
    { bg: "#fda7df", name: "Bubblegum Pink" },
    { bg: "#ff6b81", name: "Flamingo Red" },
    { bg: "#48dbfb", name: "Aqua Sky" },
    { bg: "#feca57", name: "Golden Honey" },
    { bg: "#5f27cd", name: "Deep Violet" }
  ];

  // Frequency-based filler letters
  const FILLER_LETTERS = "AAAAAAAAAEEEEEEEEIIIIIIIOOOOOUUURRRRRRSSSSSSTTTTTTNNNNNLLLLCCCDDDPPPMMEEBBP";

  // =========================================================================
  // 2. AUDIO SYNTHESIZER (Web Audio API)
  // =========================================================================
  class SoundManager {
    constructor() {
      this.enabled = true;
      this.ctx = null;
      this.initOnInteraction = this.initOnInteraction.bind(this);
      window.addEventListener('pointerdown', this.initOnInteraction, { once: true });
    }

    initOnInteraction() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
    }

    ensureContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTileHover() {
      if (!this.enabled) return;
      this.ensureContext();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(480, now);
        osc.frequency.exponentialRampToValueAtTime(750, now + 0.035);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } catch (e) {}
    }

    playWordFound() {
      if (!this.enabled) return;
      this.ensureContext();
      if (!this.ctx) return;
      try {
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const now = this.ctx.currentTime + (i * 0.055);
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(0.1, now + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.25);
        });
      } catch (e) {}
    }

    playWrong() {
      if (!this.enabled) return;
      this.ensureContext();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.1);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.11);
      } catch (e) {}
    }

    playHint() {
      if (!this.enabled) return;
      this.ensureContext();
      if (!this.ctx) return;
      try {
        const notes = [659.25, 880, 1174.66];
        notes.forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const now = this.ctx.currentTime + (i * 0.07);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.22);
        });
      } catch (e) {}
    }

    playVictory() {
      if (!this.enabled) return;
      this.ensureContext();
      if (!this.ctx) return;
      try {
        const fanfare = [
          { f: 523.25, d: 0.1, delay: 0 },
          { f: 659.25, d: 0.1, delay: 0.1 },
          { f: 783.99, d: 0.1, delay: 0.2 },
          { f: 1046.5, d: 0.35, delay: 0.32 },
          { f: 880.00, d: 0.12, delay: 0.55 },
          { f: 1046.5, d: 0.55, delay: 0.7 }
        ];
        fanfare.forEach(item => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const now = this.ctx.currentTime + item.delay;
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(item.f, now);
          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(0.14, now + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + item.d);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + item.d + 0.05);
        });
      } catch (e) {}
    }
  }

  // =========================================================================
  // 3. CONFETTI CELEBRATION ENGINE
  // =========================================================================
  class ConfettiEngine {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.animId = null;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    fire() {
      this.particles = [];
      const count = 120;
      const colors = ['#38ef7d', '#ff5376', '#ffd200', '#00c6ff', '#b388ff', '#ff9f43', '#2563eb'];
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 200,
          y: window.innerHeight * 0.4 + (Math.random() - 0.5) * 100,
          vx: (Math.random() - 0.5) * 16,
          vy: (Math.random() - 1.2) * 14 - 3,
          size: Math.random() * 8 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 10,
          opacity: 1,
          decay: Math.random() * 0.007 + 0.005
        });
      }
      if (this.animId) cancelAnimationFrame(this.animId);
      this.loop();
    }

    loop() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let aliveCount = 0;

      for (let p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.32;
        p.vx *= 0.98;
        p.rotation += p.rotSpeed;
        p.opacity -= p.decay;

        if (p.opacity > 0 && p.y < this.canvas.height + 50) {
          aliveCount++;
          this.ctx.save();
          this.ctx.translate(p.x, p.y);
          this.ctx.rotate((p.rotation * Math.PI) / 180);
          this.ctx.globalAlpha = Math.max(0, p.opacity);
          this.ctx.fillStyle = p.color;
          this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          this.ctx.restore();
        }
      }

      if (aliveCount > 0) {
        this.animId = requestAnimationFrame(() => this.loop());
      } else {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  // =========================================================================
  // 4. INTERTWINING WORD SEARCH GENERATOR ALGORITHM
  // =========================================================================
  class WordSearchGenerator {
    static generate(wordObjects, gridSize, difficulty) {
      const validWords = wordObjects
        .map(obj => ({
          original: obj.word.trim().toUpperCase(),
          clean: obj.word.trim().toUpperCase().replace(/[^A-Z]/g, ''),
          hint: obj.hint || ''
        }))
        .filter(obj => obj.clean.length >= 2 && obj.clean.length <= gridSize)
        .sort((a, b) => b.clean.length - a.clean.length);

      // Directions strictly forward only: Horizontal (L-to-R) and Vertical (T-to-B)
      let directions = [];
      if (difficulty === 'easy' || difficulty === 'medium') {
        directions = [
          { dr: 0, dc: 1, name: 'h-forward' },
          { dr: 1, dc: 0, name: 'v-down' }
        ];
      } else {
        directions = [
          { dr: 0, dc: 1, name: 'h-forward' },
          { dr: 1, dc: 0, name: 'v-down' },
          { dr: 1, dc: 1, name: 'd-downright' }
        ];
      }

      const targetCount = Math.min(validWords.length, gridSize <= 10 ? 8 : (gridSize <= 12 ? 11 : 14));
      const candidates = validWords.slice(0, targetCount * 2);

      // Run multiple generation passes to maximize word intersections & intertwining
      let bestBoard = null;
      let maxIntersections = -1;

      for (let run = 0; run < 36; run++) {
        const board = WordSearchGenerator.buildIntertwinedBoard(candidates, gridSize, targetCount, directions);
        if (board.totalIntersections > maxIntersections || !bestBoard) {
          maxIntersections = board.totalIntersections;
          bestBoard = board;
        }
        if (board.totalIntersections >= targetCount * 1.2) {
          break;
        }
      }

      // Fill remaining empty cells with letter distribution
      for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
          if (bestBoard.grid[r][c] === null) {
            bestBoard.grid[r][c] = FILLER_LETTERS[Math.floor(Math.random() * FILLER_LETTERS.length)];
          }
        }
      }

      return {
        gridSize,
        grid: bestBoard.grid,
        placedWords: bestBoard.placedWords
      };
    }

    static buildIntertwinedBoard(wordList, size, targetCount, directions) {
      const grid = Array.from({ length: size }, () => Array(size).fill(null));
      const placedWords = [];
      let totalIntersections = 0;

      // Slight randomization of order while keeping longer words first
      const wordsToPlace = [...wordList].sort((a, b) => (b.clean.length + (Math.random() * 2 - 1)) - a.clean.length);

      for (const wordObj of wordsToPlace) {
        if (placedWords.length >= targetCount) break;

        const word = wordObj.clean;
        const bestPlacement = WordSearchGenerator.findBestPlacement(grid, word, size, directions, placedWords.length === 0);

        if (bestPlacement) {
          for (let i = 0; i < word.length; i++) {
            const { r, c } = bestPlacement.cells[i];
            grid[r][c] = word[i];
          }

          totalIntersections += bestPlacement.overlaps;

          placedWords.push({
            clean: word,
            original: wordObj.original,
            hint: wordObj.hint,
            startR: bestPlacement.startR,
            startC: bestPlacement.startC,
            endR: bestPlacement.endR,
            endC: bestPlacement.endC,
            cells: bestPlacement.cells,
            color: HIGHLIGHT_PALETTE[placedWords.length % HIGHLIGHT_PALETTE.length],
            found: false,
            overlaps: bestPlacement.overlaps
          });
        }
      }

      return { grid, placedWords, totalIntersections };
    }

    static findBestPlacement(grid, word, size, directions, isFirst) {
      const len = word.length;
      const validPlacements = [];
      const center = (size - 1) / 2;

      // Place first word near center
      if (isFirst) {
        const allowedDirs = directions.filter(d => d.dr === 0 || d.dc === 0);
        const dir = allowedDirs.length ? allowedDirs[Math.floor(Math.random() * allowedDirs.length)] : directions[0];
        const { dr, dc } = dir;

        let startR = Math.floor(center - (dr * len) / 2);
        let startC = Math.floor(center - (dc * len) / 2);

        startR = Math.max(0, Math.min(size - (dr === 1 ? len : 1), startR));
        startC = Math.max(0, Math.min(size - (dc === 1 ? len : 1), startC));

        const cells = [];
        for (let i = 0; i < len; i++) {
          cells.push({ r: startR + i * dr, c: startC + i * dc });
        }
        return {
          startR,
          startC,
          endR: cells[len - 1].r,
          endC: cells[len - 1].c,
          cells,
          overlaps: 0
        };
      }

      // Check all valid coordinates & directions
      for (const dir of directions) {
        const { dr, dc } = dir;

        let minR = 0, maxR = size - 1;
        let minC = 0, maxC = size - 1;

        if (dr === 1) maxR = size - len;
        else if (dr === -1) minR = len - 1;

        if (dc === 1) maxC = size - len;
        else if (dc === -1) minC = len - 1;

        if (minR > maxR || minC > maxC) continue;

        for (let r = minR; r <= maxR; r++) {
          for (let c = minC; c <= maxC; c++) {
            let fits = true;
            let overlaps = 0;
            const cells = [];

            for (let i = 0; i < len; i++) {
              const cr = r + i * dr;
              const cc = c + i * dc;
              const existing = grid[cr][cc];
              const targetChar = word[i];

              if (existing !== null) {
                if (existing === targetChar) {
                  overlaps++;
                } else {
                  fits = false;
                  break;
                }
              }
              cells.push({ r: cr, c: cc });
            }

            if (overlaps === len) fits = false;

            if (fits) {
              const midR = r + (dr * len) / 2;
              const midC = c + (dc * len) / 2;
              const distFromCenter = Math.abs(midR - center) + Math.abs(midC - center);

              let score = 0;
              if (overlaps > 0) {
                score += overlaps * 600; // Major priority for intertwining intersections!
              } else {
                score += 40;
              }
              score -= distFromCenter * 4;
              score += Math.random() * 30;

              validPlacements.push({
                startR: r,
                startC: c,
                endR: cells[len - 1].r,
                endC: cells[len - 1].c,
                cells,
                overlaps,
                score
              });
            }
          }
        }
      }

      if (!validPlacements.length) return null;

      validPlacements.sort((a, b) => b.score - a.score);
      const topPool = validPlacements.slice(0, Math.min(3, validPlacements.length));
      return topPool[Math.floor(Math.random() * topPool.length)];
    }
  }

  // =========================================================================
  // 5. MAIN GAME APPLICATION CONTROLLER
  // =========================================================================
  class WordSearchApp {
    constructor() {
      this.sound = new SoundManager();
      this.confetti = new ConfettiEngine(document.getElementById('confetti-canvas'));

      // State - Default Light Theme & 2P Ecosystem 12x12
      this.currentCategory = 'ecosystem_2p';
      this.gridSize = 12;
      this.difficulty = 'medium';
      this.puzzle = null;
      this.hintsRemaining = 3;
      this.score = 0;
      this.combo = 1;
      this.comboTimer = null;
      this.maxCombo = 1;
      this.timerInterval = null;
      this.secondsElapsed = 0;
      this.customWords = [];
      this.theme = localStorage.getItem('2p_ws_theme') || 'light';

      // Drag & Selection state
      this.isDragging = false;
      this.startCell = null;
      this.currentHoverCell = null;
      this.selectedCells = [];
      this.clickFirstCell = null;

      this.cacheDOM();
      this.applyTheme(this.theme);
      this.bindEvents();
      this.startNewGame();
    }

    cacheDOM() {
      this.dom = {
        categorySelect: document.getElementById('category-select'),
        diffButtons: document.querySelectorAll('.seg-btn'),
        wordListContainer: document.getElementById('word-list-container'),
        progressBadge: document.getElementById('words-progress-badge'),
        timerDisplay: document.getElementById('timer-display'),
        scoreDisplay: document.getElementById('score-display'),
        comboDisplay: document.getElementById('combo-display'),
        progressBarFill: document.getElementById('progress-bar-fill'),
        progressPercent: document.getElementById('progress-percent'),
        puzzleGrid: document.getElementById('puzzle-grid'),
        gridContainer: document.getElementById('grid-container'),
        svgHighlighter: document.getElementById('svg-highlighter-layer'),
        svgFoundLines: document.getElementById('svg-found-lines'),
        svgActiveLine: document.getElementById('svg-active-line'),
        selectedWordPreview: document.getElementById('selected-word-preview'),
        hintCountBadge: document.getElementById('hint-count'),
        btnHint: document.getElementById('btn-hint'),
        btnNewGame: document.getElementById('btn-new-game'),
        btnSolveAll: document.getElementById('btn-solve-all'),
        btnTheme: document.getElementById('btn-theme'),
        btnSound: document.getElementById('btn-sound'),
        btnCustom: document.getElementById('btn-custom'),
        // Modals
        customModal: document.getElementById('custom-modal'),
        customWordsInput: document.getElementById('custom-words-input'),
        btnCloseCustom: document.getElementById('btn-close-custom'),
        btnCancelCustom: document.getElementById('btn-cancel-custom'),
        btnApplyCustom: document.getElementById('btn-apply-custom'),
        victoryModal: document.getElementById('victory-modal'),
        vstatTime: document.getElementById('vstat-time'),
        vstatScore: document.getElementById('vstat-score'),
        vstatWords: document.getElementById('vstat-words'),
        vstatCombo: document.getElementById('vstat-combo'),
        vstatRank: document.getElementById('vstat-rank-title'),
        btnVictoryShare: document.getElementById('btn-victory-share'),
        btnVictoryReplay: document.getElementById('btn-victory-replay')
      };
    }

    bindEvents() {
      this.dom.categorySelect.addEventListener('change', (e) => {
        this.currentCategory = e.target.value;
        this.startNewGame();
      });

      this.dom.diffButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          this.dom.diffButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.gridSize = parseInt(btn.dataset.grid, 10);
          this.difficulty = btn.dataset.diff;
          this.startNewGame();
        });
      });

      this.dom.btnNewGame.addEventListener('click', () => this.startNewGame());
      this.dom.btnHint.addEventListener('click', () => this.useHint());
      this.dom.btnSolveAll.addEventListener('click', () => this.solveAllWords());

      this.dom.btnTheme.addEventListener('click', () => this.cycleTheme());
      this.dom.btnSound.addEventListener('click', () => this.toggleSound());
      this.dom.btnCustom.addEventListener('click', () => this.toggleModal(this.dom.customModal, true));

      this.dom.btnCloseCustom.addEventListener('click', () => this.toggleModal(this.dom.customModal, false));
      this.dom.btnCancelCustom.addEventListener('click', () => this.toggleModal(this.dom.customModal, false));
      this.dom.btnApplyCustom.addEventListener('click', () => this.applyCustomWords());

      this.dom.btnVictoryReplay.addEventListener('click', () => {
        this.toggleModal(this.dom.victoryModal, false);
        this.startNewGame();
      });
      this.dom.btnVictoryShare.addEventListener('click', () => this.shareResults());

      this.dom.puzzleGrid.addEventListener('pointerdown', (e) => this.handlePointerDown(e));
      window.addEventListener('pointermove', (e) => this.handlePointerMove(e));
      window.addEventListener('pointerup', (e) => this.handlePointerUp(e));
      window.addEventListener('pointercancel', (e) => this.handlePointerUp(e));

      window.addEventListener('resize', () => this.renderFoundSvgLines());
    }

    // =======================================================================
    // GAME INITIALIZATION & GENERATION
    // =======================================================================
    startNewGame() {
      clearInterval(this.timerInterval);
      this.secondsElapsed = 0;
      this.score = 0;
      this.combo = 1;
      this.maxCombo = 1;
      this.hintsRemaining = 3;
      this.clickFirstCell = null;
      this.selectedCells = [];
      this.isDragging = false;

      this.updateHUD();
      this.startTimer();

      let wordList = [];
      if (this.currentCategory === 'custom' && this.customWords.length > 0) {
        wordList = this.customWords;
      } else {
        const bank = WORD_BANKS[this.currentCategory] || WORD_BANKS.all_star;
        wordList = bank.words;
      }

      this.puzzle = WordSearchGenerator.generate(wordList, this.gridSize, this.difficulty);
      document.documentElement.style.setProperty('--grid-size', this.gridSize);

      this.renderGrid();
      this.renderWordList();
      this.renderFoundSvgLines();
      this.clearActiveSvgLine();
      this.dom.selectedWordPreview.textContent = '—';
    }

    startTimer() {
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        this.secondsElapsed++;
        const mins = String(Math.floor(this.secondsElapsed / 60)).padStart(2, '0');
        const secs = String(this.secondsElapsed % 60).padStart(2, '0');
        this.dom.timerDisplay.textContent = `${mins}:${secs}`;
      }, 1000);
    }

    renderGrid() {
      this.dom.puzzleGrid.innerHTML = '';
      const { grid, gridSize } = this.puzzle;

      for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
          const cell = document.createElement('div');
          cell.className = 'grid-cell';
          cell.textContent = grid[r][c];
          cell.dataset.row = r;
          cell.dataset.col = c;
          this.dom.puzzleGrid.appendChild(cell);
        }
      }
    }

    renderWordList() {
      this.dom.wordListContainer.innerHTML = '';
      const words = this.puzzle.placedWords;

      words.forEach((item, index) => {
        const wordEl = document.createElement('div');
        wordEl.className = `word-item ${item.found ? 'found' : ''}`;
        wordEl.id = `word-item-${index}`;
        wordEl.style.setProperty('--chip-color', item.color.bg);
        wordEl.title = item.hint || item.original;

        const colorBar = document.createElement('span');
        colorBar.className = 'word-color-bar';
        colorBar.style.backgroundColor = item.color.bg;

        const textSpan = document.createElement('span');
        textSpan.className = 'word-text';
        textSpan.textContent = item.original;

        wordEl.appendChild(colorBar);
        wordEl.appendChild(textSpan);

        wordEl.addEventListener('click', () => {
          if (item.hint) {
            this.dom.selectedWordPreview.textContent = `💡 ${item.original}: ${item.hint}`;
          }
        });

        this.dom.wordListContainer.appendChild(wordEl);
      });

      this.updateProgress();
    }

    updateProgress() {
      const total = this.puzzle.placedWords.length;
      const found = this.puzzle.placedWords.filter(w => w.found).length;
      const percent = total > 0 ? Math.round((found / total) * 100) : 0;

      this.dom.progressBadge.textContent = `${found} / ${total}`;
      this.dom.progressBarFill.style.width = `${percent}%`;
      this.dom.progressPercent.textContent = `${percent}%`;
    }

    updateHUD() {
      this.dom.scoreDisplay.textContent = this.score.toLocaleString();
      if (this.dom.comboDisplay) this.dom.comboDisplay.textContent = `x${this.combo}`;
      this.dom.hintCountBadge.textContent = this.hintsRemaining;
    }

    // =======================================================================
    // TOUCH & MOUSE SELECTION HANDLING
    // =======================================================================
    getCellFromPoint(clientX, clientY) {
      const element = document.elementFromPoint(clientX, clientY);
      if (element && element.classList.contains('grid-cell')) {
        return {
          row: parseInt(element.dataset.row, 10),
          col: parseInt(element.dataset.col, 10),
          element
        };
      }
      return null;
    }

    handlePointerDown(e) {
      const cellData = this.getCellFromPoint(e.clientX, e.clientY);
      if (!cellData) return;

      this.sound.ensureContext();
      this.sound.playTileHover();

      if (this.clickFirstCell) {
        const start = this.clickFirstCell;
        const end = cellData;
        this.clickFirstCell = null;
        this.clearSelectionHighlights();

        const cells = this.getLineCells(start.row, start.col, end.row, end.col);
        if (cells.length >= 2) {
          this.processWordSelection(cells);
        }
        return;
      }

      this.isDragging = true;
      this.startCell = cellData;
      this.currentHoverCell = cellData;
      this.selectedCells = [cellData];
      this.highlightCells(this.selectedCells);
      this.renderActiveSvgLine(this.startCell, this.startCell);
      this.updateSelectedWordPreview();
    }

    handlePointerMove(e) {
      if (!this.isDragging || !this.startCell) return;

      const cellData = this.getCellFromPoint(e.clientX, e.clientY);
      if (!cellData) return;

      if (!this.currentHoverCell || this.currentHoverCell.row !== cellData.row || this.currentHoverCell.col !== cellData.col) {
        this.currentHoverCell = cellData;
        this.sound.playTileHover();

        const cells = this.getLineCells(this.startCell.row, this.startCell.col, cellData.row, cellData.col);
        this.selectedCells = cells;
        this.highlightCells(cells);
        this.renderActiveSvgLine(this.startCell, cellData);
        this.updateSelectedWordPreview();
      }
    }

    handlePointerUp(e) {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.clearActiveSvgLine();

      if (this.selectedCells.length >= 2) {
        this.processWordSelection(this.selectedCells);
      } else if (this.selectedCells.length === 1) {
        this.clickFirstCell = this.selectedCells[0];
        this.highlightCells([this.clickFirstCell]);
        this.dom.selectedWordPreview.textContent = 'Apasă pe ultima literă a cuvântului...';
        return;
      }

      this.clearSelectionHighlights();
    }

    getLineCells(r1, c1, r2, c2) {
      const dr = r2 - r1;
      const dc = c2 - c1;
      const absDr = Math.abs(dr);
      const absDc = Math.abs(dc);

      let stepR = 0;
      let stepC = 0;
      let steps = 0;

      if (dr === 0 && dc === 0) {
        return [{ row: r1, col: c1 }];
      }

      if (absDr === 0) {
        stepR = 0;
        stepC = Math.sign(dc);
        steps = absDc;
      } else if (absDc === 0) {
        stepR = Math.sign(dr);
        stepC = 0;
        steps = absDr;
      } else {
        const ratio = absDr / absDc;
        if (ratio >= 0.5 && ratio <= 2.0) {
          stepR = Math.sign(dr);
          stepC = Math.sign(dc);
          steps = Math.min(absDr, absDc);
        } else if (absDr > absDc) {
          stepR = Math.sign(dr);
          stepC = 0;
          steps = absDr;
        } else {
          stepR = 0;
          stepC = Math.sign(dc);
          steps = absDc;
        }
      }

      const cells = [];
      for (let i = 0; i <= steps; i++) {
        cells.push({
          row: r1 + i * stepR,
          col: c1 + i * stepC
        });
      }
      return cells;
    }

    highlightCells(cells) {
      this.clearSelectionHighlights();
      cells.forEach(coord => {
        const el = this.dom.puzzleGrid.querySelector(`[data-row="${coord.row}"][data-col="${coord.col}"]`);
        if (el) el.classList.add('active-selection');
      });
    }

    clearSelectionHighlights() {
      const active = this.dom.puzzleGrid.querySelectorAll('.active-selection');
      active.forEach(el => el.classList.remove('active-selection'));
    }

    updateSelectedWordPreview() {
      if (!this.selectedCells.length) {
        this.dom.selectedWordPreview.textContent = '—';
        return;
      }
      const letters = this.selectedCells
        .map(c => this.puzzle.grid[c.row][c.col])
        .join('');
      this.dom.selectedWordPreview.textContent = letters;
    }

    // =======================================================================
    // SVG HIGHLIGHTER RENDERING (Matches original reference image)
    // =======================================================================
    getCellCenter(row, col) {
      const cellEl = this.dom.puzzleGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
      if (!cellEl) return { x: 0, y: 0, width: 40 };

      const gridRect = this.dom.gridContainer.getBoundingClientRect();
      const cellRect = cellEl.getBoundingClientRect();

      const x = cellRect.left - gridRect.left + cellRect.width / 2;
      const y = cellRect.top - gridRect.top + cellRect.height / 2;

      return { x, y, width: cellRect.width };
    }

    renderFoundSvgLines() {
      if (!this.puzzle) return;
      this.dom.svgFoundLines.innerHTML = '';

      this.puzzle.placedWords.forEach(wordObj => {
        if (!wordObj.found) return;

        const start = this.getCellCenter(wordObj.startR, wordObj.startC);
        const end = this.getCellCenter(wordObj.endR, wordObj.endC);
        const strokeWidth = Math.max(28, start.width * 0.82);

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', start.x);
        line.setAttribute('y1', start.y);
        line.setAttribute('x2', end.x);
        line.setAttribute('y2', end.y);
        line.setAttribute('stroke', wordObj.color.bg);
        line.setAttribute('stroke-width', strokeWidth);
        line.setAttribute('stroke-linecap', 'round');
        line.setAttribute('stroke-linejoin', 'round');
        line.setAttribute('class', 'found-word-line');

        this.dom.svgFoundLines.appendChild(line);
      });
    }

    renderActiveSvgLine(startCell, currentCell) {
      this.dom.svgActiveLine.innerHTML = '';
      if (!startCell || !currentCell) return;

      const p1 = this.getCellCenter(startCell.row, startCell.col);
      const p2 = this.getCellCenter(currentCell.row, currentCell.col);
      const strokeWidth = Math.max(26, p1.width * 0.78);

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', p1.x);
      line.setAttribute('y1', p1.y);
      line.setAttribute('x2', p2.x);
      line.setAttribute('y2', p2.y);
      line.setAttribute('stroke', '#f59e0b');
      line.setAttribute('stroke-width', strokeWidth);
      line.setAttribute('stroke-linecap', 'round');
      line.setAttribute('stroke-linejoin', 'round');
      line.setAttribute('class', 'active-drag-line');

      this.dom.svgActiveLine.appendChild(line);
    }

    clearActiveSvgLine() {
      this.dom.svgActiveLine.innerHTML = '';
    }

    // =======================================================================
    // WORD VALIDATION & SCORING
    // =======================================================================
    processWordSelection(cells) {
      const forwardStr = cells.map(c => this.puzzle.grid[c.row][c.col]).join('');

      let matchedWord = null;
      let matchedIndex = -1;

      this.puzzle.placedWords.forEach((wordObj, idx) => {
        if (wordObj.found) return;

        // Strictly forwards matching (from first letter to last letter)
        if (wordObj.clean === forwardStr) {
          const startMatches = (wordObj.startR === cells[0].row && wordObj.startC === cells[0].col &&
                                wordObj.endR === cells[cells.length - 1].row && wordObj.endC === cells[cells.length - 1].col);

          if (startMatches) {
            matchedWord = wordObj;
            matchedIndex = idx;
          }
        }
      });

      if (matchedWord) {
        this.markWordAsFound(matchedWord, matchedIndex);
      } else {
        this.sound.playWrong();
        this.resetCombo();
      }
    }

    markWordAsFound(wordObj, index) {
      wordObj.found = true;
      this.sound.playWordFound();

      const basePoints = wordObj.clean.length * 100;
      const speedBonus = Math.max(10, 100 - this.secondsElapsed);
      const earned = (basePoints + speedBonus) * this.combo;
      this.score += earned;

      this.combo++;
      if (this.combo > this.maxCombo) this.maxCombo = this.combo;
      this.resetComboTimer();

      this.updateHUD();

      const wordEl = document.getElementById(`word-item-${index}`);
      if (wordEl) {
        wordEl.classList.add('found', 'just-found');
        setTimeout(() => wordEl.classList.remove('just-found'), 600);
      }

      this.renderFoundSvgLines();
      this.updateProgress();

      if (wordObj.hint) {
        this.dom.selectedWordPreview.textContent = `✨ GĂSIT: ${wordObj.original} — ${wordObj.hint}`;
      } else {
        this.dom.selectedWordPreview.textContent = `✨ GĂSIT: ${wordObj.original} (+${earned} pts)`;
      }

      const allFound = this.puzzle.placedWords.every(w => w.found);
      if (allFound) {
        setTimeout(() => this.triggerVictory(), 400);
      }
    }

    resetComboTimer() {
      clearTimeout(this.comboTimer);
      this.comboTimer = setTimeout(() => {
        this.resetCombo();
      }, 12000);
    }

    resetCombo() {
      this.combo = 1;
      this.updateHUD();
    }

    // =======================================================================
    // HINTS & SOLVER
    // =======================================================================
    useHint() {
      if (this.hintsRemaining <= 0) {
        this.dom.selectedWordPreview.textContent = '❌ Nu mai ai indicii!';
        this.sound.playWrong();
        return;
      }

      const unrevealed = this.puzzle.placedWords.filter(w => !w.found);
      if (!unrevealed.length) return;

      const targetWord = unrevealed[Math.floor(Math.random() * unrevealed.length)];
      this.hintsRemaining--;
      this.sound.playHint();
      this.updateHUD();

      const startCellEl = this.dom.puzzleGrid.querySelector(`[data-row="${targetWord.startR}"][data-col="${targetWord.startC}"]`);
      if (startCellEl) {
        startCellEl.classList.add('cell-highlight-hint');
        setTimeout(() => startCellEl.classList.remove('cell-highlight-hint'), 3500);
      }

      this.dom.selectedWordPreview.textContent = `💡 Indiciu: "${targetWord.original}" începe cu "${targetWord.clean[0]}"!`;
    }

    solveAllWords() {
      let delay = 0;
      this.puzzle.placedWords.forEach((wordObj, idx) => {
        if (!wordObj.found) {
          setTimeout(() => {
            this.markWordAsFound(wordObj, idx);
          }, delay);
          delay += 220;
        }
      });
    }

    // =======================================================================
    // VICTORY MODAL & SHARING
    // =======================================================================
    triggerVictory() {
      clearInterval(this.timerInterval);
      this.sound.playVictory();
      this.confetti.fire();

      const mins = String(Math.floor(this.secondsElapsed / 60)).padStart(2, '0');
      const secs = String(this.secondsElapsed % 60).padStart(2, '0');
      const totalWords = this.puzzle.placedWords.length;

      let rankTitle = '🦄 UNICORN MASTER';
      if (this.secondsElapsed < 45) rankTitle = '⚡ LIGHTNING CHAMPION (Level PRO)';
      else if (this.score > 3500) rankTitle = '🏆 2PERFORMANT MVP';
      else if (this.maxCombo >= 4) rankTitle = '🔥 COMBO LEGEND';

      this.dom.vstatTime.textContent = `${mins}:${secs}`;
      this.dom.vstatScore.textContent = this.score.toLocaleString();
      this.dom.vstatWords.textContent = `${totalWords} / ${totalWords}`;
      if (this.dom.vstatCombo) this.dom.vstatCombo.textContent = `x${this.maxCombo}`;
      this.dom.vstatRank.textContent = rankTitle;

      this.toggleModal(this.dom.victoryModal, true);
    }

    shareResults() {
      const mins = String(Math.floor(this.secondsElapsed / 60)).padStart(2, '0');
      const secs = String(this.secondsElapsed % 60).padStart(2, '0');
      const text = `🏆 2Performant Business League Word Search completat în ${mins}:${secs} (Scor: ${this.score.toLocaleString()} pts)! 🚀 #AIOlympics`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          this.dom.btnVictoryShare.textContent = '✅ Copiat!';
          setTimeout(() => {
            this.dom.btnVictoryShare.textContent = '📋 Copiază Scor';
          }, 2000);
        });
      } else {
        alert(text);
      }
    }

    // =======================================================================
    // THEMES & CUSTOM WORDS
    // =======================================================================
    cycleTheme() {
      const themes = ['light', 'dark', 'sunset'];
      const nextIndex = (themes.indexOf(this.theme) + 1) % themes.length;
      this.applyTheme(themes[nextIndex]);
    }

    applyTheme(themeName) {
      this.theme = themeName;
      localStorage.setItem('2p_ws_theme', themeName);
      document.body.className = `theme-${themeName}`;

      const icon = themeName === 'light' ? '☀️' : (themeName === 'dark' ? '🌙' : '🌅');
      this.dom.btnTheme.querySelector('.theme-icon').textContent = icon;
    }

    toggleSound() {
      this.sound.enabled = !this.sound.enabled;
      this.dom.btnSound.querySelector('.sound-icon').textContent = this.sound.enabled ? '🔊' : '🔇';
    }

    toggleModal(modalEl, show) {
      if (show) {
        modalEl.classList.remove('hidden');
      } else {
        modalEl.classList.add('hidden');
      }
    }

    applyCustomWords() {
      const text = this.dom.customWordsInput.value;
      const parsed = text
        .split(/[,\n]/)
        .map(w => w.trim().toUpperCase())
        .filter(w => w.length >= 3 && w.length <= 14);

      if (parsed.length < 3) {
        alert('Te rugăm să introduci cel puțin 3 cuvinte valide (între 3 și 14 litere)!');
        return;
      }

      this.customWords = parsed.map(w => ({ word: w, hint: 'Cuvânt personalizat' }));
      this.currentCategory = 'custom';

      const customOpt = this.dom.categorySelect.querySelector('option[value="custom"]');
      if (customOpt) {
        customOpt.disabled = false;
        customOpt.selected = true;
      }

      this.toggleModal(this.dom.customModal, false);
      this.startNewGame();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.gameApp = new WordSearchApp();
  });
})();
