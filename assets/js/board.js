/* Inference Korea 스터디 보드 공용 스크립트
   - 날짜 계산(한국 시간), 구글 시트에서 날짜·발제자 읽기, 한국어/영어/중국어 문구, 공통 조각
   데이터는 data.js(window.STUDY)에 있습니다. 이 파일은 고칠 필요가 없습니다. */
(function () {
  var S = window.STUDY;
  if (!S) { console.error("data.js must be loaded first."); return; }
  var root = document.documentElement;
  var LANG = (root.getAttribute("lang") || "ko").slice(0, 2);
  if (["ko", "en", "zh"].indexOf(LANG) < 0) LANG = "ko";
  var BASE = root.getAttribute("data-base") || "";

  var T = {
    ko: {
      week: ["일", "월", "화", "수", "목", "금", "토"],
      done: "완료", skip: "휴강", live: "지금 진행 중", dday: "D-DAY",
      book: "책 발제", paper: "논문 발제", open: "모집 중",
      next: "다음 모임", allDone: "10회차 완주! 수고 많으셨습니다",
      openSlots: function (n) { return "발제자 모집 중 " + n + "자리 · 시트에 이름을 적어 주세요"; },
      dispatch: "박사 연구소 파견 · 조수와 초파리 연구원 현장 도착",
      zoomTick: "Zoom으로 참가 · 회의 ID " + S.zoom.id,
      loading: "발제자 정보를 구글 시트에서 불러오는 중…",
      fromSheet: function (t) { return "발제자·날짜: 구글 시트에서 불러옴 (" + t + ")"; },
      local: "발제자·날짜: 기본값 (구글 시트에 연결하지 못함)",
      credit: "페이지 제작", contact: "연락", page: "홈페이지",
      langs: "언어"
    },
    en: {
      week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      done: "Done", skip: "No session", live: "Live now", dday: "D-DAY",
      book: "Book", paper: "Paper", open: "Open",
      next: "Next meeting", allDone: "All 10 sessions complete. Great work, everyone!",
      openSlots: function (n) { return n + " presenter slots open · add your name to the sheet"; },
      dispatch: "Dispatched from the Professor's lab · the Assistant and the Fruit Fly Researcher have arrived",
      zoomTick: "Join on Zoom · Meeting ID " + S.zoom.id,
      loading: "Loading presenters from Google Sheets…",
      fromSheet: function (t) { return "Presenters & dates: loaded from Google Sheets (" + t + ")"; },
      local: "Presenters & dates: built-in defaults (could not reach Google Sheets)",
      credit: "Page by", contact: "Contact", page: "Website",
      langs: "Language"
    },
    zh: {
      week: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      done: "已完成", skip: "停课", live: "正在进行", dday: "D-DAY",
      book: "读书分享", paper: "论文分享", open: "招募中",
      next: "下次聚会", allDone: "10 次全部完成！大家辛苦了",
      openSlots: function (n) { return "还有 " + n + " 个分享名额 · 请在表格中填写姓名"; },
      dispatch: "博士研究所派遣 · 助手与果蝇研究员已到达",
      zoomTick: "通过 Zoom 参加 · 会议号 " + S.zoom.id,
      loading: "正在从 Google 表格读取分享人信息…",
      fromSheet: function (t) { return "分享人与日期：已从 Google 表格读取（" + t + "）"; },
      local: "分享人与日期：默认值（无法连接 Google 表格）",
      credit: "页面制作", contact: "联系", page: "主页",
      langs: "语言"
    }
  }[LANG];

  var listeners = [];
  var B = window.Board = { S: S, lang: LANG, T: T, source: { type: "local" } };
  B.asset = function (p) { return BASE + p; };

  /* ---------- 언어별 값 ---------- */
  B.tx = function (o, f) { return (LANG !== "ko" && o[f + "_" + LANG]) || o[f]; };
  B.sub = function (s) { return LANG === "en" ? "" : s.title_en; };   // 부제: ko·zh→영문 제목, en→없음
  B.name = function (n) { return !n ? "" : (LANG === "ko" ? n : (S.names[n] || n)); };
  B.chName = function (c) { return c[LANG] || c.en; };

  /* ---------- 날짜 ---------- */
  // 시험용: 주소 뒤에 ?today=2026-11-10 을 붙이면 그 날짜 기준으로 보입니다.
  B.now = function () {
    try {
      var q = new URLSearchParams(location.search).get("today");
      if (q && /^\d{4}-\d{2}-\d{2}$/.test(q)) return new Date(q + "T12:00:00+09:00");
    } catch (e) {}
    return new Date();
  };
  function kstDay(d) { var k = new Date(d.getTime() + 9 * 3600e3); return Date.UTC(k.getUTCFullYear(), k.getUTCMonth(), k.getUTCDate()); }
  function timeOf(s) { return s.time || S.startTime; }
  function prepare() {
    S.sessions.forEach(function (s) {
      s.start = new Date(s.date + "T" + timeOf(s) + ":00+09:00");
      s.end = new Date(s.start.getTime() + S.durationMin * 60000);
    });
  }
  prepare();
  B.timeOf = timeOf;

  B.isSkip = function (s) { return /휴강|취소|skip|cancel|停课/i.test(s.note || ""); };
  /* 상태: done(모임 시간이 지났거나 시트에 완료 표시) · skip(휴강) · live · next · todo */
  B.status = function (s) {
    if (B.isSkip(s)) return "skip";
    var n = B.now();
    if (s.done || n > s.end) return "done";
    if (n >= s.start) return "live";
    return B.next() === s ? "next" : "todo";
  };
  B.closed = function (s) { var st = B.status(s); return st === "done" || st === "skip"; };
  B.next = function () {
    var n = B.now();
    for (var i = 0; i < S.sessions.length; i++) {
      var s = S.sessions[i];
      if (!s.done && !B.isSkip(s) && s.end >= n) return s;
    }
    return null;
  };
  B.doneCount = function () { return S.sessions.filter(function (s) { return B.status(s) === "done"; }).length; };
  B.dday = function (s) { return Math.round((kstDay(s.start) - kstDay(B.now())) / 86400e3); };
  B.ddayText = function (s) {
    var st = B.status(s);
    if (st === "done") return T.done;
    if (st === "skip") return T.skip;
    if (st === "live") return T.live;
    var d = B.dday(s);
    return d === 0 ? T.dday : "D-" + d;
  };
  var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  B.fmtYMD = function (ymd, long, time) {
    var p = ymd.split("-"), y = p[0], m = +p[1], d = +p[2];
    var w = T.week[new Date(ymd + "T12:00:00+09:00").getUTCDay()];
    if (LANG === "en") {
      if (!long) return MON[m - 1] + " " + d + " (" + w + ")";
      var hh = time ? +time.split(":")[0] : 0, mm = time ? time.split(":")[1] : "00";
      return w + ", " + MON[m - 1] + " " + d + ", " + y + (time ? " · " + ((hh + 11) % 12 + 1) + ":" + mm + (hh < 12 ? " AM" : " PM") + " KST" : "");
    }
    if (LANG === "zh") return long ? y + "年" + m + "月" + d + "日（" + w + "）" + (time ? " " + time : "") : m + "月" + d + "日（" + w + "）";
    return long ? y + "년 " + m + "월 " + d + "일(" + w + ")" + (time ? " " + time : "") : m + "." + d + " (" + w + ")";
  };
  B.fmtDate = function (s, long) { return B.fmtYMD(s.date, long, long ? timeOf(s) : null); };
  B.calUrl = function (s) {
    function z(d) { return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""); }
    var who = T.book + ": " + (B.name(s.book) || T.open) + " / " + T.paper + ": " + (B.name(s.paper) || T.open);
    var details = B.tx(s, "range") + "\n" + who + "\n" + s.paperInfo.title + "\n" + s.paperInfo.url +
      "\n\nZoom: " + S.zoom.url + "\nID: " + S.zoom.id + " / PW: " + S.zoom.pw;
    return "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=" + encodeURIComponent("[" + S.community + "] " + s.no + " · " + B.tx(s, "title")) +
      "&dates=" + z(s.start) + "/" + z(s.end) +
      "&details=" + encodeURIComponent(details) +
      "&location=" + encodeURIComponent(S.zoom.url);
  };
  B.chapter = function (no) { return S.chapters.filter(function (c) { return c.no === no; })[0]; };

  /* ---------- 발제자 ---------- */
  B.openSlots = function () {
    var out = [];
    S.sessions.forEach(function (s) {
      if (B.closed(s)) return;
      if (!s.book) out.push({ s: s, kind: "book" });
      if (!s.paper) out.push({ s: s, kind: "paper" });
    });
    return out;
  };
  B.filled = function () {
    var b = 0, p = 0;
    S.sessions.forEach(function (s) { if (s.book) b++; if (s.paper) p++; });
    return { book: b, paper: p, total: S.sessions.length };
  };

  /* ---------- 다시 그리기 ---------- */
  B.onUpdate = function (fn) { listeners.push(fn); try { fn(); } catch (e) { console.error(e); } };
  B.refresh = function () { listeners.forEach(function (fn) { try { fn(); } catch (e) { console.error(e); } }); };
  B.esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  B.safeUrl = function (u) { u = (u || "").trim(); return /^https?:\/\//i.test(u) ? u : ""; };

  /* ---------- 구글 시트 읽기 ---------- */
  function parseCSV(text) {
    var rows = [], row = [], cell = "", q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) {
        if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; }
        else cell += c;
      } else if (c === '"') q = true;
      else if (c === ",") { row.push(cell); cell = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(cell); rows.push(row); row = []; cell = "";
      } else cell += c;
    }
    if (cell || row.length) { row.push(cell); rows.push(row); }
    return rows;
  }
  // "책 : 홍길동, 논문: 김철수" 형식
  B.parsePresenter = function (raw) {
    raw = (raw || "").trim();
    if (!raw) return { book: "", paper: "" };
    var mb = raw.match(/책\s*[:：]\s*([^,，\/\n]*)/), mp = raw.match(/논문\s*[:：]\s*([^,，\/\n]*)/);
    if (!mb && !mp) return { book: raw, paper: "" };
    return { book: mb ? mb[1].trim() : "", paper: mp ? mp[1].trim() : "" };
  };
  function normDate(v) {
    v = v || "";
    var g = v.match(/Date\((\d{4}),(\d{1,2}),(\d{1,2})/);           // JSONP 원본 값
    var m = g ? [0, g[1], +g[2] + 1, g[3]] : v.match(/(\d{4})\s*[-.\/년]\s*(\d{1,2})\s*[-.\/월]\s*(\d{1,2})/);
    if (!m) return "";
    var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    if (d.getUTCMonth() !== +m[2] - 1 || d.getUTCDate() !== +m[3]) return "";
    return m[1] + "-" + ("0" + m[2]).slice(-2) + "-" + ("0" + m[3]).slice(-2);
  }
  function normTime(v) {
    var m = (v || "").match(/(\d{1,2})\s*:\s*(\d{2})/);
    if (!m) return "";
    var h = +m[1];
    if (/오후|pm/i.test(v) && h < 12) h += 12;
    if (/오전|am/i.test(v) && h === 12) h = 0;
    return ("0" + h).slice(-2) + ":" + m[2];
  }
  function isDone(v) { return /^(o|y|yes|v|x|1|true|완료|끝|done|✓|✔|○|●)$/i.test((v || "").trim()); }
  B.applyRows = function (rows) {
    var hi = -1, col = {};
    function find(r, names) { for (var c = 0; c < r.length; c++) { var v = (r[c] || "").replace(/\s/g, ""); if (names.indexOf(v) >= 0) return c; } return -1; }
    for (var r = 0; r < rows.length; r++) {
      var cNo = find(rows[r], ["회차"]), cWho = -1;
      for (var c = 0; c < rows[r].length; c++) if ((rows[r][c] || "").indexOf("발제자") >= 0) { cWho = c; break; }
      if (cNo >= 0 && cWho >= 0) {
        hi = r; col.no = cNo; col.who = cWho;
        col.date = find(rows[r], ["날짜", "일자"]); col.time = find(rows[r], ["시간", "시각"]);
        col.done = find(rows[r], ["완료"]); col.slides = find(rows[r], ["발표자료", "자료"]); col.note = find(rows[r], ["비고", "공지", "메모"]);
        break;
      }
    }
    if (hi < 0) throw new Error("no '회차'/'발제자' header");
    var n = 0;
    rows.slice(hi + 1).forEach(function (row) {
      function get(k) { return col[k] >= 0 ? (row[col[k]] || "").trim() : null; }
      var no = parseInt(get("no"), 10);
      var s = S.sessions.filter(function (x) { return x.no === no; })[0];
      if (!s) return;
      var p = B.parsePresenter(get("who")); s.book = p.book; s.paper = p.paper;
      var d = normDate(get("date")); if (d) s.date = d;
      var t = normTime(get("time")); if (t) s.time = t;
      if (col.done >= 0) s.done = isDone(get("done"));
      if (col.slides >= 0) s.slides = get("slides");
      if (col.note >= 0) s.note = get("note");
      n++;
    });
    if (!n) throw new Error("no session rows");
    prepare();
    return n;
  };
  function viaCSV(url) {
    var ctl = window.AbortController ? new AbortController() : null;
    var t = setTimeout(function () { if (ctl) ctl.abort(); }, 7000);
    return fetch(url, ctl ? { signal: ctl.signal, cache: "no-store" } : {}).then(function (r) {
      clearTimeout(t);
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    }).then(function (txt) {
      if (/^\s*</.test(txt)) throw new Error("not CSV (sheet may not be shared)");
      return parseCSV(txt);
    });
  }
  function viaJSONP(url) {   // CORS가 막힐 때를 대비한 두 번째 길
    return new Promise(function (resolve, reject) {
      var cb = "__ikSheet" + Date.now(), sc = document.createElement("script");
      var t = setTimeout(function () { cleanup(); reject(new Error("JSONP timeout")); }, 7000);
      function cleanup() { clearTimeout(t); try { delete window[cb]; } catch (e) { window[cb] = undefined; } if (sc.parentNode) sc.parentNode.removeChild(sc); }
      window[cb] = function (res) {
        cleanup();
        try {
          if (!res || res.status === "error" || !res.table) throw new Error("sheet error");
          resolve(res.table.rows.map(function (r) {
            return (r.c || []).map(function (c) { return c ? String(c.f != null ? c.f : (c.v != null ? c.v : "")) : ""; });
          }));
        } catch (e) { reject(e); }
      };
      sc.onerror = function () { cleanup(); reject(new Error("JSONP load failed")); };
      sc.src = url.replace("tqx=out:csv", "tqx=out:json;responseHandler:" + cb);
      document.head.appendChild(sc);
    });
  }
  B.syncSheet = function () {
    if (!S.sheet || !S.sheet.sync) return;
    var url = "https://docs.google.com/spreadsheets/d/" + S.sheet.id + "/gviz/tq?tqx=out:csv&headers=0&gid=" + (S.sheet.gid || "0");
    B.source = { type: "loading" }; B.refresh();
    var p = window.fetch ? viaCSV(url).catch(function (e) { console.info("[board] CSV failed, trying JSONP:", e.message); return viaJSONP(url); }) : viaJSONP(url);
    p.then(function (rows) {
      B.applyRows(rows);
      B.source = { type: "sheet", at: new Date() };
    }).catch(function (e) {
      console.info("[board] Google Sheets unavailable, using defaults:", e && e.message);
      B.source = { type: "local", err: e && e.message };
    }).then(function () { B.refresh(); });
  };

  /* ---------- 공통 조각 ---------- */
  function renderTicker() {
    var el = document.getElementById("tickerText");
    if (!el) return;
    var nx = B.next(), parts = [];
    if (nx) parts.push(T.next + " " + B.ddayText(nx) + " · " + nx.no + " · " + B.tx(nx, "title") + " · " + B.fmtDate(nx, true));
    else parts.push(T.allDone);
    parts.push(T.zoomTick);
    S.sessions.forEach(function (s) { if (s.note && !B.closed(s)) parts.push(s.no + " · " + B.fmtDate(s) + " · " + s.note); });
    var open = B.openSlots();
    if (open.length) parts.push(T.openSlots(open.length));
    parts = parts.concat((S.notices && S.notices[LANG]) || []);
    parts.push(T.dispatch);
    el.textContent = parts.join("   ✦   ");
  }
  function renderSync() {
    document.querySelectorAll("[data-sync]").forEach(function (el) {
      var s = B.source;
      el.textContent = s.type === "loading" ? T.loading : s.type === "sheet" ? T.fromSheet(s.at.toLocaleTimeString(LANG === "zh" ? "zh-CN" : LANG === "en" ? "en-US" : "ko-KR", { hour: "2-digit", minute: "2-digit" })) : T.local;
      el.setAttribute("data-state", s.type);
      el.title = s.err || "";
    });
  }
  function renderCredit() {
    var c = S.credit;
    document.querySelectorAll("[data-credit]").forEach(function (el) {
      el.innerHTML = '<span class="credit-k">' + T.credit + '</span> ' + B.esc(c.name) +
        ' · <span class="credit-k">' + T.contact + '</span> <span class="mail">' + B.esc(c.mail) + '</span>' +
        ' · <span class="credit-k">' + T.page + '</span> <a href="' + B.esc(c.page) + '" target="_blank" rel="noopener">' + B.esc(c.pageText) + '</a>';
    });
  }
  function renderLangs() {
    var nav = document.querySelector(".navbar .wrap");
    if (!nav || nav.querySelector(".langs")) return;
    var file = location.pathname.split("/").pop() || "index.html";
    var up = LANG === "ko" ? "" : "../";
    var href = { ko: up + file, en: up + "en/" + file, zh: up + "zh/" + file };
    var lab = { ko: "한국어", en: "EN", zh: "中文" };
    var box = document.createElement("div");
    box.className = "langs"; box.setAttribute("role", "group"); box.setAttribute("aria-label", T.langs);
    box.innerHTML = ["ko", "en", "zh"].map(function (l) {
      return '<a href="' + href[l] + location.hash + '" hreflang="' + l + '"' + (l === LANG ? ' aria-current="true"' : "") + ">" + lab[l] + "</a>";
    }).join("");
    nav.appendChild(box);
  }
  function markNav() {
    var here = (location.pathname.split("/").pop() || "index.html");
    document.querySelectorAll(".nav a").forEach(function (a) {
      if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
    });
  }
  /* 포스터처럼 사선으로 흐르는 알약 띠 */
  function drawStripes() {
    var cols = ["var(--teal)", "var(--pink)", "var(--pebble)", "var(--cream)", "var(--teal)", "var(--pebble)", "var(--pink)", "var(--cream)"];
    var spots = [[-6, 30, 34], [8, 96, 26], [30, 18, 22], [52, 110, 30], [64, 6, 18], [78, 70, 28], [92, 30, 20], [40, 150, 24], [-10, 150, 30], [86, 130, 22]];
    document.querySelectorAll(".stripes").forEach(function (box) {
      if (box.childElementCount) return;
      spots.forEach(function (p, i) {
        var el = document.createElement("i");
        el.style.left = p[0] + "%"; el.style.top = p[1] + "%"; el.style.width = p[2] + "%";
        el.style.background = cols[i % cols.length];
        box.appendChild(el);
      });
    });
  }
  /* 복사 버튼: data-copy="복사할 글" */
  function wireCopy() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("[data-copy]");
      if (!b) return;
      var t = b.getAttribute("data-copy"), old = b.textContent;
      function ok() { b.textContent = "✓"; setTimeout(function () { b.textContent = old; }, 1400); }
      try { navigator.clipboard.writeText(t).then(ok, function () {}); } catch (err) {}
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    drawStripes();
    markNav();
    renderLangs();
    renderCredit();
    wireCopy();
    B.onUpdate(renderTicker);
    B.onUpdate(renderSync);
    B.syncSheet();
  });
})();
